<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useHead({
  bodyAttrs: {
    class: 'w-full h-full bg-white dark:text-white dark:bg-slate-950',
  },
})
</script>
