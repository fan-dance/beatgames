export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  router: {
    base: '/beatgames/'
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'FanDance – каталог танцевальных игр',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Сообщество любителей танцевальных и ритм игр' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'theme-color', content: '#7E1AFF' },
      { name: 'msapplication-TileColor', content: '#7E1AFF' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/scss/main.scss',
    '@/assets/scss/index.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
      '@/plugins/bootstrap-vue'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{ path: '~/components', extensions: ['vue'] }],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '@/assets/scss/index.scss',
    ]
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
    },
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
