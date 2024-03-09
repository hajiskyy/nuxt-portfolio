<template>
  <article
    id="home"
    class="w-full h-dvh grid place-content-center px-2 text-left"
  >
    <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold capitalize">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </h1>
  </article>
</template>

<script setup></script>

<style lang="scss" scoped></style>
