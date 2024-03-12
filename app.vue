<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class:
      'w-full h-full bg-white/50 dark:text-white dark:bg-gray-950 overflow-x-hidden',
  },
})
</script>
