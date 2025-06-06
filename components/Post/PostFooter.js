import BLOG from '@/blog.config'
import { lang } from '@/lib/lang'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import { MailIcon, ThumbUpIcon } from '@heroicons/react/outline'
import Link from 'next/link'

const PostFooter = () => {
  const { locale } = useRouter()
  const router = useRouter()
  const t = lang[locale]
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='w-full pb-12 justify-between font-medium text-gray-500 dark:text-gray-400'>
      <div className='flex flex-wrap sm:flex-nowrap sm:justify-between items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-900 relative gap-3 px-4 py-3'>
        <div className='w-full sm:w-auto max-w-screen-sm inline-block text-sm font-light md:text-base mb-2 sm:mb-0'>
          {t.LAYOUT.NOTICE_TEXT}
        </div>
        <div className='flex flex-wrap gap-3'>
          <div className="flex items-center justify-center">
            <div className="relative">
                <button
                    onClick={toggleMenu}
                    className='flex gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-sm rounded-lg px-4 py-2'
                >
                  <ThumbUpIcon className='w-5 h-5' />
                    Support Me
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
          <button
            onClick={() => router.push(BLOG.path || '/contact')}
            className='flex gap-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-500 hover:text-gray-600 dark:hover:text-gray-300 text-sm rounded-lg px-4 py-2'
          >
            <MailIcon className='flex flex-col justify-center items-center select-none cursor-pointer relative w-5 h-5' />
            {t.LAYOUT.NOTICE_BUTTON}
          </button>
        </div>
      </div>
    </div>
  )
}

export default PostFooter
