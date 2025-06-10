import Layout from '@/layouts/layout'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import { useRouter } from 'next/router'
import Loading from '@/components/Loading'
import NotFound from '@/components/NotFound'

const Post = ({ post, blockMap }) => {
  const router = useRouter()
  if (router.isFallback) {
    return (
      <Loading />
    )
  }
  if (!post) {
    return <NotFound statusCode={404} />
  }
  return (
    <Layout blockMap={blockMap} frontMatter={post} fullWidth={post.fullWidth} />
  )
}

export async function getStaticProps({ params: { slug } }) {
  try {
    const posts = await getAllPosts({ onlyNewsletter: false })
    const post = posts.find((t) => t.slug === slug)
    
    if (!post) {
      console.warn(`Post not found for slug: ${slug}`)
      return {
        notFound: true,
        revalidate: 1
      }
    }

    try {
      const blockMap = await getPostBlocks(post.id)
      if (!blockMap) {
        console.error(`BlockMap missing for post ${post.id}`)
        return {
          notFound: true,
          revalidate: 1  
        }
      }

      return {
        props: {
          post,
          blockMap
        },
        revalidate: 1
      }
    } catch (err) {
      console.error(`Failed to get blocks for post ${post.id}:`, err)
      // Return notFound instead of throwing to prevent build failures
      return {
        notFound: true,
        revalidate: 1
      }
    }
  } catch (err) {
    console.error(`Failed to generate static props for ${slug}:`, err)
    return {
      notFound: true,
      revalidate: 1
    }
  }
}

export async function getStaticPaths() {
  try {
    const posts = await getAllPosts({ onlyNewsletter: false })
    // Filter out any invalid slugs
    const validPosts = posts.filter(post => post && post.slug && typeof post.slug === 'string')
    
    return {
      paths: validPosts.map((row) => `${BLOG.path}/${row.slug}`),
      // Use blocking to ensure SSR fallback instead of client-side fallback
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
