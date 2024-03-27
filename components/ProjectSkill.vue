<template>
  <div
    class="flex items-center gap-1 rounded-full py-1 px-2 backdrop-saturate-50 bg-primary-950/10 dark:bg-white/30"
  >
    <UIcon dynamic class="h-3 w-3" :name="skill?.icon" />
    <span class="uppercase text-xs font-bold">{{ skill?.label }}</span>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{ skill: string }>()

const { skills, fetchData: fetchSkills } = useSkills()
await fetchSkills()

const skill = skills.value.find(
  (s) => s.id === props.skill || s.icon === props.skill
)
</script>

<style lang="scss" scoped></style>
