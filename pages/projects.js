import Container from '@/components/Container'
import { getProjects } from '@/lib/notion/getProjects'
import { getPostBlocks } from '@/lib/notion'
import BLOG from '@/blog.config'
import ProjectCard from '@/components/ProjectCard'
import NotionRenderer from '@/components/Post/NotionRenderer'

export async function getStaticProps() {
  const projects = await getProjects()
  
  let blockMap = null // Initialize as null instead of undefined
  try {
    // Fetch the projects page content if it exists
    const heroProjects = projects.find((p) => p.slug === 'projects')
    if (heroProjects) {
      blockMap = await getPostBlocks(heroProjects.id)
    }
  } catch (err) {
    console.error(err)
    // Keep blockMap as null on error
  }

  return {
    props: {
      projects: projects.filter(p => p.slug !== 'projects'), // Exclude the projects page itself
      blockMap // Will be null if no projects page exists or if there's an error
    },
    revalidate: 1
  }
}

const Projects = ({ projects, blockMap }) => {
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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Container>
  )
}

export default Projects