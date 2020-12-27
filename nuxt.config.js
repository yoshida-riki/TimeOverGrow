export default {
  head: {
    title: 'time-over-grow',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  css: [],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    {
      src: '@/plugins/plugin',
    },
  ],
  components: true,
  buildModules: ['@nuxtjs/vuetify'],
  srcDir: 'app/',
  build: {
    publicPath: '/assets/',
    buildDir: 'nuxt-dist',
    extend(config, ctx) {},
  },
  performance: {
    hints: false,
  },
  target: 'static',
  babel: {
    presets({ isServer }) {
      return [
        [
          require.resolve('@nuxt/babel-preset-app'),
          {
            buildTarget: isServer ? 'server' : 'client',
            corejs: { version: 3 },
          },
        ],
      ]
    },
  },
}
