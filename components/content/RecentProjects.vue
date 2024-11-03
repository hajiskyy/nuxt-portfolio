<template>
  <div class="flex flex-col gap-6 items-start not-prose">
    <div class="flex flex-wrap gap-6">
      <NuxtLink
        v-for="project in projects"
        :key="project._id"
        class="w-full max-w-sm p-6 flex flex-col gap-2 group rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        :to="project._path"
      >
        <p class="text-lg font-bold">
          {{ project.title }}
        </p>

        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ project.description }}
        </p>

        <span class="mt-auto" v-if="project.publishedAt">{{
          useDateFormatter(project.publishedAt)
        }}</span>
      </NuxtLink>
    </div>

    <UButton
      v-if="projects && projects.length > 2"
      :padded="false"
      label="More Projects"
      to="/projects"
      variant="link"
      icon="i-heroicons-arrow-right"
      trailing
    />
  </div>
</template>

<script setup lang="ts">
// const { projects, fetchData: fetchProjects } = useProjects()

// fetchProjects()

const { data: projects } = await useAsyncData('projects', () =>
  queryContent('/projects')
    .where({ isHome: { $not: true } })
    .sort({ publishedAt: -1 })
    .limit(3)
    .find()
)
</script>

<style lang="scss" scoped></style>
