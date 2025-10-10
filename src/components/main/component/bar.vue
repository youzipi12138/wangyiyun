<template>
  <div
    class="bar flex w-full items-center mt-4"
    @mouseenter="hoverBar = true"
    @mouseleave="hoverBar = false"
  >
    <div
      class="left-arrow w-[40px] flex justify-center shrink-0 cursor-pointer"
      :class="{ 'text-gray-400': rightArrowActive }"
    >
      <el-icon v-show="hoverBar" @click="rightArrowActive ? null : handleLeftArrowClick()"
        ><ArrowLeftBold
      /></el-icon>
    </div>
    <div
      ref="scrollContainer"
      class="flex-1 flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth"
    >
      <!-- 禁止子元素被压缩 -->
      <swiper
        :spaceBetween="30"
        :pagination="{ clickable: true }"
        :autoplay="{ delay: 2500, disableOnInteraction: false }"
        :modules="modules"
        class="myswiper flex-shrink-0 w-1/2 aspect-[2.78/1] bg-amber-200 rounded-sm shadow-sm"
        @swiper="onSwiper"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
      </swiper>

      <div
        class="flex-shrink-0 w-1/2 aspect-[2.78/1] bg-amber-200 rounded-sm overflow-hidden shadow-sm"
      >
        <img src="" alt="" />
      </div>

      <!-- 第三个元素会超出，触发滚动条 -->
      <div
        class="flex-shrink-0 w-1/5 aspect-[2.78/1] bg-amber-300 rounded-sm overflow-hidden shadow-sm"
      >
        <img src="" alt="" />
      </div>
      <div class="flex-shrink-0 w-1/2 aspect-[2.78/1] rounded-sm">
        <img src="" alt="" />
      </div>
    </div>

    <div
      class="right-arrow w-[40px] flex justify-center shrink-0 cursor-pointer"
      :class="{ 'text-gray-400': !rightArrowActive }"
    >
      <el-icon v-show="hoverBar" @click="rightArrowActive ? handleRightArrowClick() : null"
        ><ArrowRightBold
      /></el-icon>
    </div>
  </div>
</template>
<script setup lang="ts">
// 引入 Swiper Vue 组件
import { Swiper, SwiperSlide } from 'swiper/vue'

// 引入 Swiper 基础样式和分页器样式
//@ts-ignore
import 'swiper/css'
//@ts-ignore
import 'swiper/css/pagination'

// 引入分页器模块
import { Autoplay, Pagination } from 'swiper/modules'
import type { Swiper as SwiperInstance } from 'swiper' // 修正类型导入路径
import { onMounted, onUnmounted, ref } from 'vue'
// 定义模块数组（直接暴露给模板使用，无需 return）
const modules = [Autoplay, Pagination]

let swiperInstance: SwiperInstance | null = null // 存储 Swiper 实例

// 2. 获取 Swiper 实例
const onSwiper = (swiper: SwiperInstance) => {
  swiperInstance = swiper
  // 实例初始化后，绑定 hover 事件到分页器圆点
  bindPaginationHover()
}

// 3. 绑定分页器圆点的 hover 事件
const bindPaginationHover = () => {
  if (!swiperInstance) return

  // 等待 DOM 更新，确保分页器圆点已渲染
  setTimeout(() => {
    // 获取所有分页器圆点
    const bullets = document.querySelectorAll('.swiper-pagination-bullet')
    bullets.forEach((bullet, index) => {
      // 绑定鼠标进入事件
      bullet.addEventListener('mouseenter', () => {
        // 跳转到对应索引的幻灯片（index 从 0 开始）
        swiperInstance?.slideTo(index)
      })
    })
  }, 0)
}
//左右箭头滚动
//箭头状态。默认一开始只能点右箭头
const rightArrowActive = ref(false)

// 👉 引用滚动容器
const scrollContainer = ref<HTMLElement | null>(null)

//获取滚动的长度
const getScrollWidth = () => {
  const ScrollWidth = document.querySelector('.myswiper')
  return ScrollWidth?.clientWidth
}
const handleLeftArrowClick = () => {
  rightArrowActive.value = true
  const scrollWidth = getScrollWidth()
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: -scrollWidth - 16, // 每次滚动 300px，可自行调整
      behavior: 'smooth',
    })
  }
}
const handleRightArrowClick = () => {
  rightArrowActive.value = false
  const scrollWidth = getScrollWidth()
  if (scrollContainer.value) {
    scrollContainer.value.scrollBy({
      left: scrollWidth + 16, // 每次滚动 300px，可自行调整
      behavior: 'smooth',
    })
  }
}

// 定义你的函数
const handleResize = () => {
  if (!rightArrowActive.value) {
    handleLeftArrowClick()

    // console.log('窗口尺寸变化了', window.innerWidth, window.innerHeight)
    // 这里可以写你的逻辑，比如重新计算 scrollWidth，调整样式等
  }
}

// 组件挂载时监听 resize
onMounted(() => {
  window.addEventListener('resize', handleResize)
  // 组件一加载时也执行一次
  handleResize()
})

// 组件卸载时移除监听，防止内存泄漏
onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

//控制左右箭头是否出现
const hoverBar = ref(false)
</script>

<style scoped>
/* 补充轮播容器样式，确保正常显示 */
.mySwiper {
  /* width: 385px;
  height: 140px; 固定高度，避免无法滚动 */
  margin: 0;
}
/* @media (max-width: 1280px) {
  .mySwiper {
    width: 475px;
    height: 175px;
  }
} */
::v-deep .swiper-pagination-bullet {
  background-color: #fff;
}
</style>
