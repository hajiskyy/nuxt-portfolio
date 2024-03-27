<template>
  <div class="w-full flex flex-col not-prose" v-if="projects.length">
    <div class="w-full my-4" v-for="p in projects" :key="p.id" :id="p.id">
      <NuxtLink :to="p.link" target="_blank">
        <!-- <img src="" alt=""> -->
        <p class="my-3 text-lg font-bold underline">{{ p.name }}</p>
      </NuxtLink>

      <div class="flex flex-wrap gap-1">
        <ProjectSkill v-for="s in p.tools" :skill="s" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { projects, fetchData: fetchProjects } = useProjects()

fetchProjects()
</script>

<style lang="scss" scoped></style>
