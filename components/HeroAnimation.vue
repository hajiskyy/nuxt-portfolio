<template>
  <div
    class="w-full absolute h-screen transform-gpu blur-3xl -z-10 overflow-hidden pointer-events-none opacity-60"
  >
    <div
      class="clip-anim aspect-[1.7] w-full h-full bg-gradient-to-tr from-primary-500 to-white/10 opacity-90"
      :style="style"
    ></div>
  </div>
</template>

<script setup lang="ts">
import type { StyleValue } from 'vue'

type Point = {
  index: number
  x: number
  y: number
}
const points = ref<Point[] | []>([])
const numPoints = 10

const width = 100
const height = 100

const style: ComputedRef<Partial<StyleValue>> = computed(() => ({
  clipPath: `polygon(${points.value.map((p) => `${p.x}% ${p.y}%`).join(',')})`,
}))

for (let i = 0; i < numPoints; i++) {
  points.value.push({
    index: i,
    x: Math.random() * width,
    y: Math.random() * height,
  })
}

const updatePoints = () => {
  for (let i = 0; i < numPoints; i++) {
    points.value[i].x = Math.random() * width
    points.value[i].y = Math.random() * height
  }
}

onMounted(() => {
  const intervalId = setInterval(updatePoints, 3000) // 3 seconds

  onBeforeUnmount(() => {
    clearInterval(intervalId)
  })
})
</script>

<style lang="css" scoped>
.clip-anim {
  transition: clip-path 3s, -webkit-clip-path 3s;
}
</style>
