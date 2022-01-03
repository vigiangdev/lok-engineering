export default {
  head: {
    title: 'client',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: ['@/assets/css/styles', '@/assets/css/variables', '@/assets/css/fonts'],

  components: true,

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    [
      'nuxt-fontawesome',
      {
        imports: [
          {
            set: '@fortawesome/free-solid-svg-icons',
            icons: [
              'faEnvelopeOpenText',
              'faAt',
              'faCalendarAlt',
              'faComments',
              'faPencilRuler',
            ],
          },
          {
            set: '@fortawesome/free-brands-svg-icons',
            icons: ['faFacebookF', 'faInstagram', 'faLinkedinIn', 'faYelp'],
          },
        ],
      },
    ],
  ],

  modules: [
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',

    ['vue-scrollto/nuxt', { duration: 1000 }],
    [
      '@nuxtjs/recaptcha',
      {
        hideBadge: false,
        language: 'en',
        siteKey: process.env.RECAPTCHA_SITE_KEY,
        version: 2,
        size: 'normal',
      },
    ],
  ],

  plugins: ['@/plugins/gtag'],

  axios: {
    proxy: true,
  },

  googleFonts: {
    families: {
      Raleway: {
        wght: [100, 200, 300, 400, 500, 600, 700],
      },
    },
    display: 'swap',
  },

  publicRuntimeConfig: {
    recaptcha: {
      siteKey: process.env.RECAPTCHA_SITE_KEY,
    },
    googleAnalyticsId: process.env.GOOGLE_ANALYTICS_ID,
  },

  serverMiddleware: ['~/api/index.js'],
}
