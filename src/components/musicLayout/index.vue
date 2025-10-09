<template>
  <div class="layout flex h-full flex-col">
    <!-- 中间内容区域 -->
    <div class="flex flex-1 bg-[var(--main-bg-color)] min-h-0">
      <!-- 左侧栏 -->
      <div
        class="w-[160px] h-full bg-[var(--side-bg-color)] p-[20px] overflow-y-auto inset-shadow-2xs"
      >
        <slot name="side"></slot>
      </div>

      <!-- 右侧主内容 -->
      <div class="flex-1 h-full overflow-y-auto">
        <slot name="main"></slot>
      </div>
    </div>

    <!-- 底部 Footer -->
    <div class="footer h-[60px] bg-[var(--footer-bg-color)]">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
