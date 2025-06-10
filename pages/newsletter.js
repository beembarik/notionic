import Container from '@/components/Container'
import BlogPost from '@/components/BlogPost'
import NewsletterHero from '@/components/Hero/Newsletter'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps() {
  try {
    // Get all newsletter posts
    const posts = await getAllPosts({ onlyNewsletter: true })

    // Get the hero content for newsletter page
    const heros = await getAllPosts({ onlyHidden: true })
    const hero = heros.find((t) => t.slug === 'newsletter')

    let blockMap = null
    try {
      if (hero) {
        blockMap = await getPostBlocks(hero.id)
      }
    } catch (err) {
      console.error('Error fetching newsletter hero blocks:', err)
      // Keep blockMap as null on error
    }

    return {
      props: {
        posts,
        blockMap
      },
      revalidate: 1
    }
  } catch (err) {
    console.error('Error in newsletter getStaticProps:', err)
    return {
      props: {
        posts: [],
        blockMap: null
      },
      revalidate: 1
    }
  }
}

const newsletter = ({ posts, blockMap }) => {
  return (
    <Container title={BLOG.newsletter} description={BLOG.description}>
      <NewsletterHero blockMap={blockMap} />
      {posts.map((post) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </Container>
  )
}

export default newsletter
