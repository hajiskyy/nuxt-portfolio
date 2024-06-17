<template>
  <div class="w-full relative">
    <Header />
    <HeroAnimation />
    <UContainer class="overflow-x-hidden">
      <HomeContentNav />
      <UContainer class="md:max-w-xl lg:max-w-4xl mr-0 px-0 pb-5">
        <NuxtPage />
      </UContainer>
      <Footer />
    </UContainer>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class:
      'w-full h-full bg-white/50 dark:text-white dark:bg-gray-950 overflow-x-hidden',
  },
})
</script>
