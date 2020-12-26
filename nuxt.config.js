export default {
  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  // ssr: false,

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'time-over-grow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    {
      src: '@/plugins/plugin',
      // mode: 'client',
    },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // Simple usage
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: ['@nuxtjs/dotenv', '@nuxtjs/vuetify'],
  devModules: ['@nuxtjs/vuetify'],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  srcDir: 'app',
  build: {
    /*
     * You can extend webpack config here */
    publicPath: '/assets/',
    buildDir: 'nuxt-dist',
    extend(config, ctx) {},
  },
  // configureWebpack: {
  //   externals: {
  //     vue: {
  //       commonjs: 'vue',
  //       commonjs2: 'vue',
  //       root: 'Vue',
  //       amd: 'vue',
  //     },
  //   },
  // },
  performance: {
    hints: false,
  },
  target: 'static',
  babel: {
    presets({ isServer }) {
      return [
        [
          require.resolve('@nuxt/babel-preset-app'),
          // require.resolve('@nuxt/babel-preset-app-edge'), // For nuxt-edge users
          {
            buildTarget: isServer ? 'server' : 'client',
            corejs: { version: 3 },
          },
        ],
      ]
    },
  },
}
