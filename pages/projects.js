import Container from '@/components/Container'
import ProjectCard from '@/components/ProjectCard'
import NotionRenderer from '@/components/Post/NotionRenderer'
import { getAllPosts, getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'

export async function getStaticProps() {
  try {
    // Get all posts and filter for projects
    const posts = await getAllPosts({ onlyNewsletter: false })
    const projects = posts.filter(post => post.type?.includes('Project'))

    // Get the hero content for projects page
    const heros = await getAllPosts({ onlyHidden: true })
    const hero = heros.find((t) => t.slug === 'projects')

    let blockMap = null
    try {
      if (hero?.id) {
        blockMap = await getPostBlocks(hero.id)
      }
    } catch (err) {
      console.error('Failed to fetch project hero blocks:', err)
      // Keep blockMap as null on error
    }

    if (projects.length === 0 && !blockMap) {
      return {
        notFound: true
      }
    }

    return {
      props: {
        projects: projects.filter(p => p.slug !== 'projects'), // Exclude the projects page itself
        blockMap
      },
      revalidate: 1
    }
  } catch (err) {
    console.error('Failed to generate projects page:', err)
    return {
      notFound: true
    }
  }
}

const Projects = ({ projects, blockMap }) => {
  if (!projects?.length && !blockMap) {
    return (
      <Container title={`${BLOG.title} - Projects`} description="My projects and experiments">
        <div className="text-center">
          <h1 className="text-3xl font-bold my-8">No Projects Found</h1>
          <p>Check back later for updates!</p>
        </div>
      </Container>
    )
  }

  return (
    <Container
      title={`${BLOG.title} - Projects`}
      description="My projects and experiments"
    >
      {blockMap && (
        <div className="mb-8">
          <NotionRenderer blockMap={blockMap} frontMatter={{}} />
        </div>
      )}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects?.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  )
}

export default Projects