<template>
  <UContainer
    class="sticky top-0 py-2 flex items-center justify-between backdrop-blur"
  >
    <span class="text-xl font-extrabold">イブラヒム</span>

    <div class="flex item-center gap-1">
      <UButton
        icon="i-simple-icons-github"
        color="gray"
        variant="ghost"
        to="https://github.com/hajiskyy"
        target="_blank"
      />
      <ColorModeToggle />
    </div>
  </UContainer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
