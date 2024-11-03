<template>
  <UContainer
    class="w-full sticky top-0 z-10 py-4 flex items-center justify-between backdrop-blur"
  >
    <div class="flex items-center gap-6">
      <NuxtLink to="/" class="sm:text-xl font-extrabold cursor-pointer">
        イブラヒム
      </NuxtLink>

      <UBadge color="gray" size="sm" class="gap-1">
        <UIcon name="i-heroicons-wrench-screwdriver" />
        <span>Site Under Construction</span>
      </UBadge>
    </div>

    <div
      class="justify-center item-center gap-10 absolute inset-0 m-auto max-w-sm hidden md:flex"
    >
      <UButton
        v-for="item in navigation"
        :key="item._id"
        :to="item._path"
        variant="link"
        color="white"
      >
        {{ item.title }}
      </UButton>
    </div>

    <div class="item-center gap-1 hidden sm:flex">
      <UButton
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
        to="https://github.com/hajiskyy"
        target="_blank"
      />
      <ColorModeToggle />
    </div>

    <UButton
      icon="i-heroicons-bars-3"
      color="gray"
      variant="ghost"
      @click="isOpen = !isOpen"
      class="sm:hidden"
      size="xl"
    />

    <USlideover v-model="isOpen">
      <div
        class="p-4 w-full h-full flex flex-col justify-center items-center gap-6"
      >
        <div class="flex flex-col gap-3 mt-auto">
          <UButton
            v-for="item in navigation"
            :key="item._id"
            :to="item._path"
            variant="link"
            color="white"
            class="w-full text-xl"
            size="xl"
            @click="isOpen = false"
            :label="item.navigation?.title || item.title"
          />
        </div>

        <div class="flex item-center gap-4">
          <UButton
            icon="i-simple-icons-github"
            color="gray"
            variant="ghost"
            to="https://github.com/hajiskyy"
            target="_blank"
            @click="isOpen = false"
            size="xl"
          />
          <ColorModeToggle size="xl" />
        </div>

        <UButton
          icon="i-heroicons-x-mark"
          color="primary"
          variant="soft"
          class="mt-auto mb-10"
          size="xl"
          @click="isOpen = false"
        />
      </div>
    </USlideover>
  </UContainer>
</template>

<script setup lang="ts">
const isOpen = ref(false)

const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation({
    where: {
      _path: { $not: '/' },
    },
  })
)
</script>

<style lang="scss" scoped></style>
