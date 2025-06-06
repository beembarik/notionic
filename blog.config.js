const BLOG = {
  title: 'YAU.MY',
  author: 'Barik',
  email: 'barik@my.id',
  link: 'https://yau.my.id',
  newsletter: 'Weekly Newsletter',
  description: 'Welcome to My Blog',
  lang: 'en-US', // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES']
  appearance: 'auto', // ['light', 'dark', 'auto'],
  font: 'sans-serif', // ['sans-serif', 'serif']
  lightBackground: '#fcf9f0', // use hex value, don't forget '#' e.g #fffefc
  darkBackground: '#222223', // use hex value, don't forget '#'#222223 #212936
  path: '', // leave this empty unless you want to deploy Notionic in a folder
  since: 2022, // If leave this empty, current year will be used.
  postsPerPage: 10,
  sortByDate: true,
  showNewsletter: true,
  previewImagesEnabled: true,
  showTitlebarText: false, // Craft Docs page show title bar text on desktop
  autoCollapsedNavBar: false, // The automatically collapsed navigation bar
  ogImageGenerateHost: 'og-zl.vercel.app', // The link to generate OG image, don't end with a slash
  defaultCover: '/cover.jpg',
  socialLink: {
    twitter: 'https://twitter.com/bmbarik',
    github: 'https://github.com/beembarik',
    telegram: 'https://t.me/bmbarik',
    kofi: 'https://ko-fi.com/N4N3FYZ80',
    trakteer: 'https://trakteer.id/baarik/tip'
  },
  seo: {
    keywords: ['Notionic', 'Notion', 'Blog', 'Notion Website', 'Yaumy', 'Indonesia', 'Tahsin', 'Mengaji'],
    googleSiteVerification: '' // Remove the value or replace it with your own google site verification code
  },
  notionPageId: process.env.NOTION_PAGE_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionSpacesId: process.env.NOTION_SPACES_ID, // DO NOT CHANGE THIS! Edit .env file!
  notionAccessToken: process.env.NOTION_ACCESS_TOKEN, // Useful if you prefer not to make your database public
  notionDomain: 'baarik.notion.site',
  telegramToken: process.env.TELEGRAM_TOKEN, // The token of your Telegram bot
  telegramChatId: '812174102', // The chat id of your Telegram bot
  telegramChannelUrl: '', // The link of your Telegram channel, https://channel.zuolan.me/
  telegramChannelName: '', // The name of your Telegram channel, zuolan_me
  craftConfigShareUrl: 'https://www.craft.do/s/3E7InAGkVpHUdu', // The link to share your craft config
  analytics: {
    provider: 'ga', // Currently we support Google Analytics, Ackee and Umami, please fill with 'ga' or 'ackee' or 'umami', leave it empty to disable it.
    umamiConfig: {
      scriptUrl: '', // The url of your Umami script
      websiteId: '' // The website id of your Umami instance
    },
    ackeeConfig: {
      tracker: '', // e.g 'https://ackee.example.com/tracker.js'
      dataAckeeServer: '', // e.g https://ackee.example.com , don't end with a slash
      domainId: '' // e.g '0e2257a8-54d4-4847-91a1-0311ea48cc7b'
    },
    gaConfig: {
      measurementId: 'G-HME1F61VYZ' // e.g: G-XXXXXXXXXX
    }
  },
  comment: {
    // support provider: utterances, supacomments
    provider: 'supacomments', // leave it empty if you don't need any comment plugin
    supaCommentsConfig: {
      supabaseUrl: 'https://dbmkubkecpydckxqhqxn.supabase.co', // The url of your Supabase instance
      supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRibWt1YmtlY3B5ZGNreHFocXhuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3NTE4NDIsImV4cCI6MjA2MzMyNzg0Mn0.GESgSAnFp1W90fSR18y-0wxQdILSKLGvXfUwlT35yCY' // The anonymous key of your Supabase instance
    },
    utterancesConfig: {
      repo: ''
    }
  },
  isProd: process.env.VERCEL_ENV === 'production' // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
}
// export default BLOG
module.exports = BLOG
