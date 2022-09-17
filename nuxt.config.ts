import { defineNuxtConfig } from 'nuxt'


// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: [['@storyblok/nuxt', { accessToken: process.env.API_KEY }]],
    target: 'static',
  ssr: false,
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


})
