import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
  /**
   * Your Nuxt modules will go there
   */
  modules: [
    "@twicpics/components/nuxt3",
    '@nuxt/image-edge',
  ],
  twicpics: {
    domain: `https://tw2mmiur.twic.pics/`,
    path: `tp-workshop`,
  },
  image: {
    // Options
    provider: 'twicpics',
    twicpics: {
      baseUrl: `https://tw2mmiur.twic.pics/`,
    }
  }
})
