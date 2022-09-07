import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['~/styles/index.css'],
    modules: [['@storyblok/nuxt', { accessToken: 'gxX8gRVsoOaZrSjQBz62Tgtt' }]],
})
