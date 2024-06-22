<template>
  <div class="w-full relative">
    <Header />
    <HeroAnimation />
    <UContainer class="max-w-4xl 2xl:max-w-4xl py-20 min-h-[70vh]">
      <slot />
    </UContainer>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
