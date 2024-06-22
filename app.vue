<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class:
      'w-full h-full bg-white/50 dark:text-white dark:bg-gray-900 overflow-x-hidden',
  },
})
</script>
