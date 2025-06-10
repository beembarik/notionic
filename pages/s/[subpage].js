import BLOG from '@/blog.config'
import Layout from '@/layouts/layout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import { useRouter } from 'next/router'

import { getAllPagesInSpace, getPageBreadcrumbs, idToUuid } from 'notion-utils'
import { defaultMapPageUrl } from 'react-notion-x'

import Loading from '@/components/Loading'
import NotFound from '@/components/NotFound'

const Post = ({ post, blockMap }) => {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <Loading notionSlug={router.asPath.split('/')[2]} />
    )
  }
  if (!post) {
    return <NotFound statusCode={404} />
  }
  return (
    <Layout blockMap={blockMap} frontMatter={post} fullWidth={post.fullWidth} />
  )
}

export async function getStaticProps({ params: { subpage } }) {
  try {
    const posts = await getAllPosts({ onlyNewsletter: false })

    try {
      const blockMap = await getPostBlocks(subpage)
      if (!blockMap) {
        console.error(`BlockMap missing for subpage ${subpage}`)
        return { notFound: true, revalidate: 1 }
      }

      const id = idToUuid(subpage)
      const breadcrumbs = getPageBreadcrumbs(blockMap, id)
      
      let post = posts.find((t) => t.id === breadcrumbs[0].block.id)
      // When the page is not in the notion database, manually initialize the post
      if (!post) {
        if (!breadcrumbs[0]?.title) {
          console.error(`Invalid breadcrumb data for subpage ${subpage}`)
          return { notFound: true, revalidate: 1 }
        }
        post = {
          type: ['Page'],
          title: breadcrumbs[0].title,
          id: id
        }
      }

      // Allow pages from any space if NOTION_SPACES_ID is not configured
      const NOTION_SPACES_ID = BLOG.notionSpacesId
      const pageAllowed = (page) => {
        if (!NOTION_SPACES_ID || NOTION_SPACES_ID.length === 0) return true
        if (!page || !page.block) return false

        let allowed = false
        Object.values(page.block).forEach(block => {
          if (!allowed && block.value && block.value.space_id) {
            allowed = !NOTION_SPACES_ID.length || NOTION_SPACES_ID.includes(block.value.space_id)
          }
        })
        return allowed
      }

      if (!pageAllowed(blockMap)) {
        console.warn(`Page ${subpage} not allowed - invalid space ID`)
        return { notFound: true, revalidate: 1 }
      }

      return {
        props: { 
          post,
          blockMap 
        },
        revalidate: 1
      }
    } catch (err) {
      console.error('Failed to get page blocks:', err)
      return { notFound: true, revalidate: 1 }
    }
  } catch (err) {
    console.error('Failed to generate static props:', err)
    return { notFound: true, revalidate: 1 }
  }
}

export async function getStaticPaths() {
  try {
    const mapPageUrl = defaultMapPageUrl(BLOG.notionPageId)

    // Get all pages from the space
    const pages = await getAllPagesInSpace(
      BLOG.notionPageId,
      BLOG.notionSpacesId,
      getPostBlocks,
      {
        traverseCollections: false
      }
    )

    // Filter and validate subpage IDs
    const subpageIds = Object.keys(pages)
      .map((pageId) => {
        try {
          const url = '/s' + mapPageUrl(pageId)
          return url !== '/s/' ? url : null
        } catch (err) {
          console.warn(`Failed to map URL for page ${pageId}:`, err)
          return null
        }
      })
      .filter(Boolean)

    // Get posts and filter their IDs
    const posts = await getAllPosts({ onlyNewsletter: false })
    const postIds = posts
      .filter(post => post && post.id)
      .map(post => {
        try {
          return '/s' + mapPageUrl(post.id)
        } catch (err) {
          console.warn(`Failed to map URL for post ${post.id}:`, err)
          return null
        }
      })
      .filter(Boolean)
    
    // Remove post IDs from subpage IDs to avoid duplicates
    const noPostsIds = subpageIds.filter(id => !postIds.includes(id))

    // Get hero pages
    const heros = await getAllPosts({ onlyHidden: true })
    const heroIds = heros
      .filter(hero => hero && hero.id)
      .map(hero => {
        try {
          return '/s' + mapPageUrl(hero.id)
        } catch (err) {
          console.warn(`Failed to map URL for hero ${hero.id}:`, err)
          return null
        }
      })
      .filter(Boolean)

    // Combine all unique paths
    const paths = [...new Set([...noPostsIds, ...heroIds])]
      .filter(path => path && typeof path === 'string')
      .map(path => ({
        params: {
          subpage: path.replace('/s/', '')
        }
      }))

    return {
      paths,
      fallback: 'blocking'
    }
  } catch (err) {
    console.error('Failed to generate static paths:', err)
    return {
      paths: [],
      fallback: 'blocking'
    }
  }
}

export default Post
