<template>
  <div class="flex flex-col gap-6 items-start not-prose">
    <div class="flex flex-wrap gap-6">
      <NuxtLink
        v-for="blog in blogs"
        :key="blog._id"
        class="w-full max-w-sm p-6 flex flex-col gap-2 group rounded-2xl bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        :to="blog._path"
      >
        <p class="text-lg font-bold">
          {{ blog.title }}
        </p>

        <p class="text-sm text-gray-500 dark:text-gray-400">
          {{ blog.description }}
        </p>

        <span class="mt-auto">{{ useDateFormatter(blog.publishedAt) }}</span>
      </NuxtLink>
    </div>

    <UButton
      :padded="false"
      label="More Blogs"
      to="/blog"
      variant="link"
      icon="i-heroicons-arrow-right"
      trailing
    />
  </div>
</template>

<script setup lang="ts">
import { useDateFormatter } from '~/composable/formatter'

const { data: blogs } = await useAsyncData('recent-blogs', () =>
  queryContent('blog')
    .where({ isHome: { $not: true } })
    .sort({ publishedAt: -1 })
    .limit(3)
    .find()
)
</script>

<style scoped></style>
