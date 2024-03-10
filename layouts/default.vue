<template>
  <UContainer class="relative">
    <Header />
    <HomeContentNav />
    <UContainer>
      <UContainer class="md:max-w-xl lg:max-w-4xl mr-0 px-0 pb-5">
        <slot />
      </UContainer>
    </UContainer>
    <Footer />
  </UContainer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
