<template>
  <UContainer
    class="hidden md:flex max-w-52 screen-height p-2 fixed top-0 flex-col justify-end"
  >
    <ul class="">
      <li v-for="l in toc.links" :key="l.id" class="my-1">
        <NuxtLink
          :to="`/#${l.id}`"
          class="font-semibold my-2 hover:underline transition"
        >
          {{ l.text }}
        </NuxtLink>
      </li>
    </ul>
  </UContainer>
</template>

<script setup>
const { toc } = useContent()
</script>

<style lang="scss" scoped></style>
