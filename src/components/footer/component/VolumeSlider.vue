<template>
  <div class="w-16">
    <!-- 进度条容器宽度，可自定义 -->
    <!-- 进度条轨道 -->
    <div class="h-1 bg-gray-200 rounded-full overflow-hidden">
      <!-- 已填充进度，通过 style 绑定宽度 -->
      <div
        class="h-full bg-gray-400 rounded-full transition-all duration-150"
        :style="{ width: progress + '%' }"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 响应式进度值（0-100）
const progress = ref(40) // 示例：初始进度40%

// 模拟进度变化（实际场景可从API或交互中获取）
setTimeout(() => {
  progress.value = 70 // 3秒后进度变为70%
}, 3000)
</script>
