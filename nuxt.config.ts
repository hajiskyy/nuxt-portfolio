// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/fonts'],
  debug: true,
  content: {
    documentDriven: true,
  },
  ui: {
    icons: ['heroicons', 'logos', 'simple-icons'],
  },
})
