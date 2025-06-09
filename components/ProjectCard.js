import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import FormattedDate from '@/components/Common/FormattedDate'

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-zinc-800"
    >
      <div className="relative h-48 w-full">
        {project.page_cover && (
          <Image
            src={project.page_cover}
            alt={project.title}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
      </div>

      <div className="p-4">
        <Link
          href={`/${project.slug}`}
          className="text-xl font-semibold text-gray-900 dark:text-gray-100 hover:text-blue-500 dark:hover:text-blue-400"
        >
          {project.title}
        </Link>

        {project.summary && (
          <p className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-2">
            {project.summary}
          </p>
        )}

        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            {project.date && <FormattedDate date={project.date} />}
          </div>
          {project.tags && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/tag/${tag}`}
                  className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-zinc-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-600"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
