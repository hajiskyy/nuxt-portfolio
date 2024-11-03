<template>
  <div
    class="flex flex-col gap-6 not-prose divide-y divide-primary-700 dark:divide-primary-600"
  >
    <NuxtLink
      v-for="project in projects"
      :key="project._id"
      class="w-full max-w-sm flex flex-col gap-1 group py-6"
      :to="project._path"
    >
      <span class="text-sm italic text-gray-500 dark:text-gray-400">
        {{ useDateFormatter(project.publishedAt) }}
      </span>
      <div class="flex flex-col gap-2">
        <p class="text-lg font-bold group-hover:underline">
          {{ project.title }}
        </p>

        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ project.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { data: projects } = await useAsyncData('recent-projects', () =>
  queryContent('projects')
    .where({ isHome: { $not: true } })
    .sort({ publishedAt: -1 })
    .find()
)
</script>

<style scoped></style>
