import { defineNuxtConfig } from 'nuxt/config'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [['@storyblok/nuxt', { accessToken: process.env.API_KEY }]],
  ssr: true,
  vite: {
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/styles/variables.scss"; @import "@/assets/styles/mediaqueries.scss";',
            },
        },
    },
    
},
css: ['@/assets/styles/index.scss'],

runtimeConfig: {
    // The private keys which are only available within server-side
    API_KEY: process.env.API_KEY,
    // Keys within public, will be also exposed to the client-side
    public: {
        API_BASE_URL: process.env.API_BASE_URL,
        VERSION: process.env.VERSION
    }
  }


})
