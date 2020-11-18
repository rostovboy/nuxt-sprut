import nuxtPort from './port.js'
export default {
  // Custom port
  server: {
    port: nuxtPort
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Sprut',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap' },
      { rel: 'stylesheet', href: '/voxfont/stylesheet.css' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '@/assets/scss/index.scss',
    '@/assets/scss/media.scss'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios',
    [
      'nuxt-fontawesome', {
      imports: [
        {
          set: '@fortawesome/free-solid-svg-icons',
          icons: ['fas']
        },
        {
          set: '@fortawesome/free-brands-svg-icons',
          icons: ['fab']
        }
      ]
    }
    ]
  ],

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    // https://github.com/bootstrap-vue/bootstrap-vue/issues/5627#issuecomment-685049749
    babel: {
      compact: true
    }
  }
}
