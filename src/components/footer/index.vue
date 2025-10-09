<template>
  <div class="flex items-center justify-between px-8 h-full inset-shadow-2xs">
    <div class="left flex w-40 gap-2">
      <div class="left bg-rose-500 w-[45px] h-[45px] rounded-full cursor-pointer">
        <img src="" alt="" />
      </div>
      <div class="right text-[12px] cursor-pointer">
        <div class="name flex gap-1">
          <span class="text-gray-900">阿牛</span>
          <span class="text-gray-500">-</span>
          <span class="text-gray-500">周杰伦</span>
        </div>
        <div class="icon text-[16px] flex gap-3 text-gray-500 mt-2">
          <!-- 新增图标 -->
          <el-icon><Plus /></el-icon>
          <!-- 消息图标，用了类似效果的样式 -->
          <el-icon><ChatDotRound :size="20" /></el-icon>
          <!-- 刷新图标 -->
          <el-icon><Refresh /></el-icon>
          <!-- 下载图标 -->
          <el-icon><Download /></el-icon>
        </div>
      </div>
    </div>
    <div class="mid text-gray-600 hover:text-gray-700 cursor-pointer">
      <div>
        <el-icon :size="30"><CaretLeft /></el-icon>
        <el-icon
          v-if="isplay"
          :size="30"
          class="hover:scale-110 transition duration-150 ease-out"
          @click="isplay = false"
          ><VideoPause
        /></el-icon>
        <el-icon
          :size="30"
          v-else="!isplay"
          @click="isplay = true"
          class="hover:scale-110 transition duration-150 ease-out cursor-pointer"
          ><VideoPlay
        /></el-icon>
        <el-icon :size="30"><CaretRight /></el-icon>
      </div>
      <div></div>
    </div>
    <div class="right flex items-center gap-4 w-40 cursor-pointer">
      <el-icon :size="20"><Expand /></el-icon>
      <el-icon :size="20"><Headset /></el-icon>
      <VolumeSlider></VolumeSlider>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
// import progresss from './component/progresss.vue'
import VolumeSlider from './component/VolumeSlider.vue'

const isplay = ref(false)
</script>
