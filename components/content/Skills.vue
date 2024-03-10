<template>
  <div class="w-full flex flex-wrap gap-3">
    <div
      v-for="skill in showcaseSkills"
      class="w-24 h-24 flex flex-col gap-2 items-center rounded-lg border-2 border-gray-600 p-2"
    >
      <UIcon class="w-20 h-20" dynamic :name="skill.icon" />
      <span class="text-xs font-medium">{{ skill.label }}</span>
    </div>
  </div>
</template>

<script setup>
const { skills, fetchData } = useSkills()

const showcaseSkills = computed(() => skills.value.filter((s) => s.showcase))

fetchData()
</script>

<style lang="scss" scoped></style>
