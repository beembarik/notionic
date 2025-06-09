import BLOG from '@/blog.config'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import TableOfContents from '@/components/Post/TableOfContents'
import { ThumbUpIcon, ChevronLeftIcon, ArrowUpIcon } from '@heroicons/react/outline'

const Aside = ({ pageTitle, blockMap, frontMatter }) => {
  const [isOpen, setIsOpen] = useState(false)
    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }
  const [showButton, setShowButton] = useState(false)
  const [showScrollElement, setShowScrollElement] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        setShowScrollElement(true)
        setShowButton(true)
      } else {
        setShowScrollElement(false)
        setShowButton(false)
      }
    })
  }, [frontMatter, pageTitle])
  return (
    <>
      <aside className='hidden sticky md:flex md:flex-col md:items-center md:self-start md:ml-8 md:inset-y-1/2'>
        <div className='flex flex-col items-center text-center'>
          <div className='bg-gray-100 dark:bg-gray-700 grid rounded-lg block p-2 gap-y-5 nav'>
            <div className="flex items-center justify-center">
              <div className="relative">
                  <button
                      onClick={toggleMenu}
                      className='flex items-center justify-center text-gray-600 dark:text-day hover:text-gray-400 dark:hover:text-gray-400'
                  >
                    <ThumbUpIcon className='w-5 h-5' />

                  </button>

                  {isOpen && (
                      <div className="absolute right-0 mt-2 w-fit bg-white dark:bg-gray-700 rounded-md shadow-lg z-20">
                        <Link href={'https://ko-fi.com/N4N3FYZ80'}>
                          <button
                            className="flex flex-row gap-2 items-center block w-full px-4 py-2 text-left text-gray-800 dark:text-gray-200 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-500 rounded-lg px-4 py-2"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                              <path fill="currentColor" d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734c4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09c-.443-.441-3.368-3.049-4.034-3.954c-.709-.965-1.041-2.7-.091-3.71c.951-1.01 3.005-1.086 4.363.407c0 0 1.565-1.782 3.468-.963c1.904.82 1.832 3.011.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z"/>
                            </svg>
                            Ko-Fi
                          </button>
                        </Link>
                        <Link href={'https://trakteer.id/baarik/tip'}>
                          <button
                            className="flex flex-row gap-2 items-center block w-full px-4 py-2 text-left dark:text-gray-200 dark:bg-gray-700 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-500 rounded-lg px-4 py-2"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.25rem" height="1.25rem" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                            <path fill='currentColor' d='M8.7 8.5c2.3 0 4.6 0 6.9.1.7-.1 1.4 0 2-.6.1-1-.3-1.5-1.4-1.4H8.7c-.6 0-1.4-.2-1.7.8.1 1 .9 1.1 1.7 1.1zM9.7 5c.5.3 1.4.4 1.4 0 .1-1.6 1.1-2.4 2.3-3.1.1 0 0-.3 0-.4-.5-.6-1-1.1-1.8-1.3C10.1-.1 9 .6 8.4 2c-.1 1.2.3 2.2 1.3 3z' />
                            <path fill='currentColor' d='M11.9 4c-.3.6-.3 1.1 0 1.7l.6.3c.9 0 1.8-.1 2.7 0 .8 0 1.1-.4 1.1-1.1 0-.5-.2-1-.4-1.5-1.7-1.3-2.7-1.2-4 .6zM13.6 13.6c-.8.3-1.5.7-2.5.1-.6-.4-1.5-.1-2 .5-.6.7-.7 1.4-.3 2.2.2.5.6.9.9 1.3.7.6 1.4 1.2 2 2 .3.3.5.7 1 .2 1.2-1.3 2.6-2.3 3.5-3.8-.2-1.9-.7-2.4-2.6-2.5z' />
                            <path fill='currentColor' d='M19.7 12.2c-1-1.6-1.6-3.6-4-3.4-2.1 0-4.1 0-6.2.1-1.2 0-2.2-.3-3 1.2-.6 1.1-1.3 2-1.3 3.3v6.3c0 1.7.2 3.3 2 4 1.9.3 3.8 0 5.7.2 1 .2 2.1-.3 3.1 0 2 0 3.2-.9 3.8-2.8 0-3 0-5.9-.1-8.9zm-1.5 5.2c0 1.1 0 2.2.1 3.3 0 .9-.5 1.7-1.3 1.7-2.9.1-5.9.3-8.8-.1-.2 0-.4 0-.6-.1-.8-.2-1-.7-1-1.5 0-2.6 0-5.2-.1-7.9 0-.8.3-1.5 1.1-1.8.3-.1.6-.2.7-.6 2.6-.2 5.3-.2 7.9 0 .1.1.1.3.2.3 2.1.5 1.9 2.1 1.7 3.7.1 1.1.1 2 .1 3z' />
                            </svg>
                            Trakteer
                          </button>
                        </Link>
                        <Link href={'https://lynk.id/beem/s/qG8y38o'}>
                          <button
                            className="flex flex-row gap-2 items-center block w-full px-4 py-2 text-left dark:text-gray-200 dark:bg-gray-700 text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-500 rounded-lg px-4 py-2"
                          >
                            <ThumbUpIcon className='w-5 h-5' />
                            Lynk.id
                          </button>
                        </Link>
                      </div>
                  )}
              </div>
            </div>
            {pageTitle && (
              <Link
                passHref
                href={`${BLOG.path}/${frontMatter.slug}`}
                scroll={false}
                className='text-gray-600 dark:text-day hover:text-gray-400 dark:hover:text-gray-400'
              >
                <ChevronLeftIcon className='w-5 h-5' />
              </Link>
            )}
            {showScrollElement && (
              <button 
                onClick={() =>
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
                className='flex items-center justify-center text-gray-600 dark:text-day hover:text-gray-400 dark:hover:text-gray-400'
              >
                <ArrowUpIcon className='w-5 h-5' />
              </button>
            )}
          </div>
        </div>
        {showScrollElement && (
          <div className="absolute left-full toc-fade-in">
            <TableOfContents
              className="sticky"
              blockMap={blockMap}
              pageTitle={pageTitle}
              frontMatter={frontMatter}
            />
          </div>
        )}
      </aside>
      {showScrollElement && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='md:hidden fixed inline-flex bottom-5 right-5 p-2 rounded-lg z-10 shadow bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600'
        >
          <ArrowUpIcon className='text-gray-600 dark:text-day w-5 h-5' />
        </button>
      )}
    </>
  )
}

export default Aside
