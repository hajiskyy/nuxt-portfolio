// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/fonts', '@nuxthq/studio'],
  debug: false,
  content: {
    documentDriven: true,
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai',
      },
    },
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
