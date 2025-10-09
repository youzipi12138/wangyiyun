<template>
  <div class="flex h-[40px] items-center justify-between gap-10">
    <div class="left flex items-center w-[300px] gap-2">
      <el-icon
        :size="32"
        class="cursor-pointer p-1 border-1 border-gray-400 rounded-sm hover:bg-gray-100"
        ><ArrowLeft
      /></el-icon>
      <div>
        <el-input v-model="inputValue" prefix-icon="Search"></el-input>
      </div>
      <el-icon
        :size="32"
        class="cursor-pointer p-1 border-1 border-gray-400 rounded-sm hover:bg-gray-100"
        ><Microphone
      /></el-icon>
    </div>
    <div class="right flex items-center gap-2">
      <div class="img-container w-8 h-8 rounded-full overflow-hidden">
        <img
          class="w-full h-full object-cover"
          src="/Users/Zhuanz/Downloads/wangyiyun/music/src/assets/image.png"
          alt=""
        />
        <!-- 图片要裁切为正方形  图片为啥要剪切成正方形-->
      </div>
      <span class="text-[14px] text-gray-500 hover:text-gray-700">月寻-寻月</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const inputValue = ref('')
</script>
<style></style>
