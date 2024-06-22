<template>
  <div class="w-full relative">
    <Header />
    <HeroAnimation />
    <UContainer class="py-20">
      <slot />
    </UContainer>
    <Footer />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
