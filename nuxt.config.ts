// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/fonts'],
  debug: false,
  content: {
    documentDriven: true,
  },
  ui: {
    icons: ['heroicons', 'logos', 'simple-icons'],
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
})
