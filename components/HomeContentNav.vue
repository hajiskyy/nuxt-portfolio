<template>
  <UContainer
    class="hidden md:flex max-w-52 screen-height p-2 fixed top-0 flex-col justify-end"
  >
    <ul class="">
      <li v-for="p in projects" :key="p.id">
        <NuxtLink :to="`/#${p.id}`" class="font-medium">
          {{ p.name }}
        </NuxtLink>
      </li>
    </ul>
  </UContainer>
</template>

<script setup>
const { projects, fetchData: fetchProjects } = useProjects()

fetchProjects()
</script>

<style lang="scss" scoped></style>
