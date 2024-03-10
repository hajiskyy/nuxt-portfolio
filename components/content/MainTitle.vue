<template>
  <article
    id="home"
    class="w-full screen-height flex flex-col items-start justify-center px-2 text-left not-prose"
  >
    <h1 class="text-4xl md:text-5xl lg:text-6xl font-extrabold capitalize">
      <ContentSlot :use="$slots.default" unwrap="p" />
    </h1>

    <p class="my-3 text-sm">
      <ContentSlot :use="$slots.description" unwrap="p" />
    </p>

    <UButton class="" icon="i-heroicons-document-arrow-down"
      >Download CV</UButton
    >
  </article>
</template>

<script setup></script>

<style lang="scss" scoped></style>
