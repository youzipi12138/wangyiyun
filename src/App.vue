<script setup lang="ts">
import musicloyout from '@/components/musicLayout/index.vue'
import side from '@/components/side/index1.vue'
</script>

<template>
  <div class="h-full">
    <musicloyout>
      <template #side>
        <side></side>
      </template>
      <template #main>
        <div>主内容</div>
      </template>
      <template #footer>
        <div>底部</div>
      </template>
    </musicloyout>
  </div>
</template>

<style scoped></style>
