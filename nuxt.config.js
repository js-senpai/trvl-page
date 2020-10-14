export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: `TRAVEL MBA - ПОДКАСТ О ПРЕДПРИНИМАТЕЛЯХ, КОТОРЫЕ
    СОЗДАЮТ И РАЗВИВАЮТ ГЕОГРАФИЧЕСКИ СВОБОДНЫЙ БИЗНЕС.`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: `Истории с гостями про предпринимательство, бизнес лайфаки, развитие виртуальных компаний,
        создания удаленных команд, путешествия и жизнь в разных городах и странах мира.`
      }
    ],
    script: [
      { src: '/podcast/js/additions.js' },
      {
        src:
          'https://polyfill.io/v3/polyfill.min.js?features=Promise%2CPromise.prototype.finally'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:300,400,400i,500,600,700,800,900&display=swap&subset=cyrillic'
      }
    ]
  },
  components: true,
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/wrapper-component.js',
    '~/plugins/vuelidate.js',
    { src: '~plugins/counter.js', ssr: false },
    '~/plugins/vue-tel-input.js'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      if(ctx.isDev && ctx.isClient){
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })
      }
    }
  },
  router: {
    base: '/podcast/'
  }
}
