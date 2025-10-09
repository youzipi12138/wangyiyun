<template>
  <div class="h-[80px]">
    <div class="left flex">
      <el-icon
        :size="32"
        class="cursor-pointer p-1 border-1 border-gray-400 rounded-sm hover:bg-gray-100"
        ><ArrowLeft
      /></el-icon>
      <div class="w-40 h-3">
        <el-input></el-input>
      </div>
      <div>
        <el-icon
          :size="32"
          class="cursor-pointer p-1 border-1 border-gray-400 rounded-sm hover:bg-gray-100"
          ><Microphone
        /></el-icon>
      </div>
    </div>
    <div class="right"></div>
  </div>
</template>
