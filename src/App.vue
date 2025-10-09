<script setup lang="ts">
import musicloyout from '@/components/musicLayout/index.vue'
import side from '@/components/side/index1.vue'
import MusicFooter from '@/components/footer/index.vue'
import Main from '@/components/main/index.vue'
</script>

<template>
  <div class="h-full">
    <musicloyout>
      <template #side>
        <side></side>
      </template>
      <template #main>
        <Main></Main>
      </template>
      <template #footer>
        <MusicFooter></MusicFooter>
      </template>
    </musicloyout>
  </div>
</template>

<style scoped></style>
