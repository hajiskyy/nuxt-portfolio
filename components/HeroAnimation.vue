<template>
  <div
    class="w-full absolute left-0 top-0 h-screen transform-gpu blur-3xl -z-10 overflow-hidden pointer-events-none opacity-100 md:opacity-60"
  >
    <div
      class="clip-anim w-full h-3/4 md:h-full bg-gradient-to-tr from-primary-500 dark:from-primary-900 md:from-primary-700 to-white/10 opacity-100"
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
const points: Ref<Point[]> = ref([])
const numPoints = 8

const width = 100
const height = 100

const style: ComputedRef<Partial<StyleValue>> = computed(() => ({
  clipPath: `polygon(${points.value.map((p) => `${p.x}% ${p.y}%`).join(',')})`,
}))

const generatePoints = () => {
  for (let i = 0; i < numPoints; i++) {
    points.value.push({
      index: i,
      x: Math.random() * width,
      y: Math.random() * height,
    })
  }
}

const updatePoints = () => {
  for (let i = 0; i < numPoints; i++) {
    points.value[i].x = Math.random() * width
    points.value[i].y = Math.random() * height
  }
}

onMounted(() => {
  generatePoints()
  const intervalId = setInterval(updatePoints, 3000) // 3 seconds

  onBeforeUnmount(() => {
    clearInterval(intervalId)
  })
})
</script>

<style lang="css" scoped>
.clip-anim {
  -webkit-clip-path: circle(25%);
  clip-path: circle(25%);
  transition: clip-path 3s, -webkit-clip-path 3s;
}
</style>
