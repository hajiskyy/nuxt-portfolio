<template>
  <div class="flex flex-col gap-6 py-4">
    <hr v-if="surround.length" />

    <div
      class="w-full grid grid-cols-2 gap-10 not-prose"
      v-if="surround.length"
    >
      <div class="w-full max-w-md">
        <NuxtLink
          v-if="surround[0]"
          :to="surround[0]._path"
          class="w-full border border-primary p-6 rounded-xl flex flex-col gap-4 group"
        >
          <span
            class="flex items-center gap-2 text-primary-500 sm:text-primary-400"
          >
            <UIcon
              name="i-heroicons-arrow-left"
              class="group-hover:-translate-x-2 transition-transform"
            />
            <span class="text-xs">Previous</span>
          </span>

          <p class="text-md">
            {{ surround[0].title }}
          </p>
        </NuxtLink>
      </div>

      <div class="w-full max-w-md">
        <NuxtLink
          v-if="surround[1]"
          :to="surround[1]._path"
          class="w-full border border-primary p-6 rounded-xl flex flex-col gap-4 group"
        >
          <span
            class="flex items-center gap-2 text-primary-700 dark:text-primary-400"
          >
            <span class="text-xs">Up Next</span>
            <UIcon
              name="i-heroicons-arrow-right"
              class="group-hover:translate-x-2 transition-transform"
            />
          </span>

          <p class="text-md">
            {{ surround[1].title }}
          </p>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { withoutTrailingSlash } from 'ufo'

const route = useRoute()

const { data: surround } = await useAsyncData(
  `${route.path}-surround`,
  () => {
    return queryContent()
      .sort({ publishedAt: 1 })
      .where({
        _extension: 'md',
        navigation: { $ne: false },
        _path: { $contains: route.path.split('/').slice(0, -1).join('/') },
        isHome: { $ne: true },
      })
      .only(['title', 'description', '_path'])
      .findSurround(withoutTrailingSlash(route.path))
  },
  { default: () => [] }
)

console.log(surround.value)
</script>

<style scoped></style>
