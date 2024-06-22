<template>
  <UContainer>
    <div
      class="w-full border-t border-gray-500 py-5 flex flex-col md:flex-row gap-2 items-center justify-between mt-10"
    >
      <span class="text-xs md:text-sm"
        >&copy; {{ new Date().getFullYear() }} Haji Mohammed. All rights
        reserved</span
      >

      <div class="flex gap-1 items-center">
        <UButton
          icon="i-simple-icons-instagram"
          to="https://www.instagram.com/hajisky/"
          target="_blank"
          color="gray"
          variant="ghost"
        />
        <UButton
          icon="i-simple-icons-x"
          to="https://twitter.com/hajiskyyy"
          target="_blank"
          color="gray"
          variant="ghost"
        />
        <UButton
          icon="i-simple-icons-github"
          color="gray"
          variant="ghost"
          to="https://github.com/hajiskyy"
          target="_blank"
        />
      </div>
    </div>
  </UContainer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
