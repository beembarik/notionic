import Link from 'next/link'
import BLOG from '@/blog.config'

const Social = () => {
  return (
    <div className='flex gap-3'>
      <Link href={`${BLOG.socialLink.telegram}`} scroll={false} legacyBehavior>
        <a
          target='_blank' aria-label='Telegram'
          className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
        >
          <svg
            className='w-5 h-5'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-3.11-8.83l-2.498-.779c-.54-.165-.543-.537.121-.804l9.733-3.76c.565-.23.885.061.702.79l-1.657 7.82c-.116.557-.451.69-.916.433l-2.551-1.888-1.189 1.148c-.122.118-.221.219-.409.244-.187.026-.341-.03-.454-.34l-.87-2.871-.012.008z' />
          </svg>
        </a>
      </Link>
      <Link href={`${BLOG.socialLink.twitter}`} scroll={false} legacyBehavior>
        <a
          target='_blank' aria-label='Twitter'
          className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
        >
          <svg
            className='w-5 h-5'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M15.3 5.55a2.9 2.9 0 0 0-2.9 2.847l-.028 1.575a.6.6 0 0 1-.68.583l-1.561-.212c-2.054-.28-4.022-1.226-5.91-2.799-.598 3.31.57 5.603 3.383 7.372l1.747 1.098a.6.6 0 0 1 .034.993L7.793 18.17c.947.059 1.846.017 2.592-.131 4.718-.942 7.855-4.492 7.855-10.348 0-.478-1.012-2.141-2.94-2.141zm-4.9 2.81a4.9 4.9 0 0 1 8.385-3.355c.711-.005 1.316.175 2.669-.645-.335 1.64-.5 2.352-1.214 3.331 0 7.642-4.697 11.358-9.463 12.309-3.268.652-8.02-.419-9.382-1.841.694-.054 3.514-.357 5.144-1.55C5.16 15.7-.329 12.47 3.278 3.786c1.693 1.977 3.41 3.323 5.15 4.037 1.158.475 1.442.465 1.973.538z' />
          </svg>
        </a>
      </Link>
      <Link href={`${BLOG.socialLink.github}`} scroll={false} legacyBehavior>
        <a
          target='_blank' aria-label='Github'
          className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
        >
          <svg
            className='w-5 h-5'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
           >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M5.883 18.653c-.3-.2-.558-.455-.86-.816a50.32 50.32 0 0 1-.466-.579c-.463-.575-.755-.84-1.057-.949a1 1 0 0 1 .676-1.883c.752.27 1.261.735 1.947 1.588-.094-.117.34.427.433.539.19.227.33.365.44.438.204.137.587.196 1.15.14.023-.382.094-.753.202-1.095C5.38 15.31 3.7 13.396 3.7 9.64c0-1.24.37-2.356 1.058-3.292-.218-.894-.185-1.975.302-3.192a1 1 0 0 1 .63-.582c.081-.024.127-.035.208-.047.803-.123 1.937.17 3.415 1.096A11.731 11.731 0 0 1 12 3.315c.912 0 1.818.104 2.684.308 1.477-.933 2.613-1.226 3.422-1.096.085.013.157.03.218.05a1 1 0 0 1 .616.58c.487 1.216.52 2.297.302 3.19.691.936 1.058 2.045 1.058 3.293 0 3.757-1.674 5.665-4.642 6.392.125.415.19.879.19 1.38a300.492 300.492 0 0 1-.012 2.716 1 1 0 0 1-.019 1.958c-1.139.228-1.983-.532-1.983-1.525l.002-.446.005-.705c.005-.708.007-1.338.007-1.998 0-.697-.183-1.152-.425-1.36-.661-.57-.326-1.655.54-1.752 2.967-.333 4.337-1.482 4.337-4.66 0-.955-.312-1.744-.913-2.404a1 1 0 0 1-.19-1.045c.166-.414.237-.957.096-1.614l-.01.003c-.491.139-1.11.44-1.858.949a1 1 0 0 1-.833.135A9.626 9.626 0 0 0 12 5.315c-.89 0-1.772.119-2.592.35a1 1 0 0 1-.83-.134c-.752-.507-1.374-.807-1.868-.947-.144.653-.073 1.194.092 1.607a1 1 0 0 1-.189 1.045C6.016 7.89 5.7 8.694 5.7 9.64c0 3.172 1.371 4.328 4.322 4.66.865.097 1.201 1.177.544 1.748-.192.168-.429.732-.429 1.364v3.15c0 .986-.835 1.725-1.96 1.528a1 1 0 0 1-.04-1.962v-.99c-.91.061-1.662-.088-2.254-.485z' />
          </svg>
        </a>
      </Link>
      <Link href={`${BLOG.socialLink.kofi}`} scroll={false} legacyBehavior>
        <a
          target='_blank' aria-label='Kofi'
          className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
        >
          <svg
            className='w-5 h-5'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M17.8 4H1.9C.8 4 .2 4.5.2 5.6c-.1 3.6 0 7.1 0 10.7 0 1.9 1.3 3.1 3.2 3.1 3.5 0 7-.1 10.5-.1 1.9 0 3.2-1.2 3.4-3 .1-.5.2-.5.6-.6 2.4-.2 4.3-1.3 5.3-3.5C25 8.4 22.1 4 17.8 4zm4.3 8.5c-1.1 1.7-2.8 2.3-4.7 2.4-.9 0-.9 0-1 .9 0 .5-.1 1-.4 1.5-.4.6-.9 1-1.7 1-3.6 0-7.3 0-10.9.1-1.3 0-2-.7-2.1-2-.1-3.5 0-7.1-.1-10.6 0-.6.3-.8.9-.8h8c2.7 0 5.3-.1 8 0 3.6.2 5.9 4.3 4 7.5z' />
            <path d='M13.2 9c-.1-.3-.3-.5-.6-.7-.2-.1-.4-.3-.6-.3h-.1c-1.1-.4-2 0-2.8.7l-.2.2c-.2-.1-.3-.3-.5-.4-.2-.4-.7-.3-1-.5-1-.3-2.2 0-2.8.8-.2.2-.3.5-.4.8-.1.5-.1.9.1 1.3 0 .3.2.6.4.8.1.3.2.4.3.5.1.2.3.4.5.6.9 1.1 1.9 1.9 2.9 2.9.3.3.5.2.8 0l3.2-3.2c.5-.5.9-1.1 1-1.9.2-.4.1-.8 0-1.1 0-.2-.1-.4-.2-.5zM16.9 6.8c-.3.1-.4.3-.4.6v4.2c0 1.4-.4 1.7 1.7 1.6 2.6-.1 3.7-2.9 2.4-4.9-.8-1.3-2.4-1.9-3.7-1.5zm3.1 3.5c-.1 1.1-1.2 1.9-2.3 1.8-.3 0-.2-.2-.2-.3V8.5c-.1-.6.2-.7.7-.6 1.1 0 1.9 1.1 1.8 2.4z' />
          </svg>
        </a>
      </Link>
      <Link href={`${BLOG.socialLink.trakteer}`} scroll={false} legacyBehavior>
        <a
          target='_blank' aria-label='Trakteer'
          className='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
        >
          <svg
            className='w-5 h-5'
            width='24'
            height='24'
            viewBox='0 0 20 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path fill='none' d='M0 0h24v24H0z' />
            <path d='M8.7 8.5c2.3 0 4.6 0 6.9.1.7-.1 1.4 0 2-.6.1-1-.3-1.5-1.4-1.4H8.7c-.6 0-1.4-.2-1.7.8.1 1 .9 1.1 1.7 1.1zM9.7 5c.5.3 1.4.4 1.4 0 .1-1.6 1.1-2.4 2.3-3.1.1 0 0-.3 0-.4-.5-.6-1-1.1-1.8-1.3C10.1-.1 9 .6 8.4 2c-.1 1.2.3 2.2 1.3 3z' />
            <path d='M11.9 4c-.3.6-.3 1.1 0 1.7l.6.3c.9 0 1.8-.1 2.7 0 .8 0 1.1-.4 1.1-1.1 0-.5-.2-1-.4-1.5-1.7-1.3-2.7-1.2-4 .6zM13.6 13.6c-.8.3-1.5.7-2.5.1-.6-.4-1.5-.1-2 .5-.6.7-.7 1.4-.3 2.2.2.5.6.9.9 1.3.7.6 1.4 1.2 2 2 .3.3.5.7 1 .2 1.2-1.3 2.6-2.3 3.5-3.8-.2-1.9-.7-2.4-2.6-2.5z' />
            <path d='M19.7 12.2c-1-1.6-1.6-3.6-4-3.4-2.1 0-4.1 0-6.2.1-1.2 0-2.2-.3-3 1.2-.6 1.1-1.3 2-1.3 3.3v6.3c0 1.7.2 3.3 2 4 1.9.3 3.8 0 5.7.2 1 .2 2.1-.3 3.1 0 2 0 3.2-.9 3.8-2.8 0-3 0-5.9-.1-8.9zm-1.5 5.2c0 1.1 0 2.2.1 3.3 0 .9-.5 1.7-1.3 1.7-2.9.1-5.9.3-8.8-.1-.2 0-.4 0-.6-.1-.8-.2-1-.7-1-1.5 0-2.6 0-5.2-.1-7.9 0-.8.3-1.5 1.1-1.8.3-.1.6-.2.7-.6 2.6-.2 5.3-.2 7.9 0 .1.1.1.3.2.3 2.1.5 1.9 2.1 1.7 3.7.1 1.1.1 2 .1 3z' />
          </svg>
        </a>
      </Link>
    </div>
  )
}

export default Social
