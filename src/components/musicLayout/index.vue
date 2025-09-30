<template>
  <div class="layout flex h-full flex-col">
    <!-- 中间内容区域 -->
    <div class="flex flex-1 bg-amber-600">
      <!-- 左侧栏 -->
      <div class="w-[160px] h-full bg-[var(--side-bg-color)] p-[20px]">
        <slot name="side"></slot>
      </div>

      <!-- 右侧主内容 -->
      <div class="flex-1 h-full">
        <slot name="main"></slot>
      </div>
    </div>

    <!-- 底部 Footer -->
    <div class="footer h-[60px] bg-amber-200">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
