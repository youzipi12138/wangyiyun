<template>
  <div class="flex items-center gap-3 px-2">
    <!-- 当前时间 -->
    <span class="text-xs text-gray-600">{{ formatTime(currentTime) }}</span>

    <!-- 进度条容器 -->
    <div
      class="relative flex-1 h-1.5 bg-gray-200 rounded-full cursor-pointer"
      @click="handleProgressClick"
    >
      <!-- 已播放进度 -->
      <div
        class="absolute left-0 top-0 h-full bg-rose-500 rounded-full transition-all duration-150"
        :style="{ width: `${progressPercent}%` }"
      ></div>

      <!-- 进度滑块 -->
      <div
        class="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-white border-2 border-rose-500 rounded-full shadow-sm transition-all duration-150"
        :style="{ left: `${progressPercent}%` }"
        @mouseenter="isHover = true"
        @mouseleave="isHover = false"
      ></div>
    </div>

    <!-- 总时长 -->
    <span class="text-xs text-gray-600">{{ formatTime(totalTime) }}</span>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

// 对外暴露的Props：当前播放时间、总时长（单位：秒）
const props = defineProps<{
  currentTime: number // 当前播放时间（秒）
  totalTime: number // 总时长（秒）
}>()

// 内部状态
const progressPercent = ref(0) // 进度百分比
const isHover = ref(false) // 是否hover在滑块上

// 计算进度百分比（限制在0-100之间）
const calculatePercent = (current: number, total: number) => {
  if (total === 0) return 0
  const percent = (current / total) * 100
  return Math.max(0, Math.min(100, percent))
}

// 监听props变化，更新进度
watch(
  () => [props.currentTime, props.totalTime],
  ([current, total]) => {
    progressPercent.value = calculatePercent(current, total)
  },
  { immediate: true } // 初始化时立即执行
)

// 时间格式化：将秒转换为 "mm:ss" 格式
const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
}

// 点击进度条跳转
const emit = defineEmits<{
  (e: 'seek', time: number): void // 对外触发跳转事件，传递目标时间（秒）
}>()

const handleProgressClick = (e: MouseEvent) => {
  const bar = e.currentTarget as HTMLDivElement
  const rect = bar.getBoundingClientRect()
  const clickX = e.clientX - rect.left // 点击位置相对于进度条的X坐标
  const percent = (clickX / rect.width) * 100 // 计算点击位置的百分比
  const targetTime = (percent / 100) * props.totalTime // 转换为目标时间（秒）
  emit('seek', targetTime) // 触发跳转事件
}
</script>

<style scoped>
/* 滑块hover时放大效果（可选） */
:deep(.h-3) {
  transform: translate(-50%, -50%) scale(1);
}
:deep(.h-3:hover) {
  transform: translate(-50%, -50%) scale(1.2);
}
</style>
