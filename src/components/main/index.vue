<template>
  <div class="py-3 h-full">
    <MainHeader class="mx-[40px]"></MainHeader>
    <bar></bar>
    <div class="bar mt-7 mx-10">
      <div class="text-gray-700 font-bold">精选推荐</div>
      <div class="recommands flex gap-4">
        <div class="recommand w-[160px] h-[195px] bg-amber-300 rounded-sm">
          <img src="" alt="" />
        </div>
        <div class="recommand w-[160px] h-[195px] bg-amber-300 rounded-sm">
          <img src="" alt="" />
        </div>
        <div class="recommand w-[160px] h-[195px] bg-amber-300 rounded-sm">
          <img src="" alt="" />
        </div>
        <div class="recommand w-[160px] h-[195px] bg-amber-300 rounded-sm">
          <img src="" alt="" />
        </div>
        <div class="recommand w-[160px] h-[195px] bg-amber-300 rounded-sm">
          <img src="" alt="" />
        </div>
        <div class="recommand w-[160px] h-[195px] bg-amber-300 rounded-sm">
          <img src="" alt="" />
        </div>
        <div class="recommand w-[160px] h-[195px] bg-amber-300 rounded-sm">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainHeader from './component/MainHeader.vue'
import bar from './component/bar.vue'
</script>

<style scoped>
/* 推荐音乐区域样式 */
.recommands {
  flex-wrap: wrap;
  gap: 1rem;
}

.recommand {
  cursor: pointer;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.recommand:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

/* 响应式设计 */
@media (max-width: 1056px) {
  .py-3 {
    padding: 1rem 0;
  }

  .mx-10 {
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .recommand {
    width: 140px;
    height: 170px;
  }
}

@media (max-width: 768px) {
  .mx-10 {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .recommands {
    gap: 0.75rem;
  }

  .recommand {
    width: 120px;
    height: 150px;
  }
}
</style>
