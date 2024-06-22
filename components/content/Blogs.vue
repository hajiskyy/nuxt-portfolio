<template>
  <div class="flex flex-col gap-6 not-prose divide-y">
    <NuxtLink
      v-for="blog in blogs"
      :key="blog._id"
      class="w-full max-w-sm flex flex-col gap-1 group py-6"
      :to="blog._path"
    >
      <span class="text-sm italic text-gray-500 dark:text-gray-400">
        {{ useDateFormatter(blog.publishedAt) }}
      </span>
      <div class="flex flex-col gap-2">
        <p class="text-lg font-bold group-hover:underline">
          {{ blog.title }}
        </p>

        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ blog.description }}
        </p>
      </div>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { useDateFormatter } from '~/composable/formatter'

const { data: blogs } = await useAsyncData('recent-blogs', () =>
  queryContent('blog')
    .where({ isHome: { $not: true } })
    .sort({ publishedAt: -1 })
    .find()
)
</script>

<style scoped></style>
