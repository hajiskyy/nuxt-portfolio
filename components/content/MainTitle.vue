<template>
  <article
    id="home"
    class="w-full flex flex-col items-start justify-center py-20 px-2 text-left not-prose text-sm max-w-2xl"
  >
    <h1 class="text-3xl md:text-3xl lg:text-4xl font-extrabold capitalize my-3">
      <slot />
    </h1>

    <slot name="details" />

    <div class="flex items-center gap-4 mt-5">
      <UButton
        :padded="false"
        class="underline"
        variant="link"
        color="black"
        to="/about"
        >More about me</UButton
      >

      <UButton class="" variant="ghost" color="white" to="/blog">Blog</UButton>
    </div>
  </article>
</template>

<script setup></script>

<style lang="scss" scoped></style>
