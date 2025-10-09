<template>
  <div class="px-5 py-3 h-full">
    <MainHeader></MainHeader>
    <div class="flex gap-4 mt-3">
      <swiper
        :spaceBetween="30"
        :pagination="{
          clickable: true,
        }"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :modules="modules"
        class="mySwiper rounded-md shadow-sm bg-amber-200"
        @swiper="onSwiper"
      >
        <swiper-slide>Slide 1</swiper-slide>
        <swiper-slide>Slide 2</swiper-slide>
        <swiper-slide>Slide 3</swiper-slide>
        <swiper-slide>Slide 4</swiper-slide>
        <swiper-slide>Slide 5</swiper-slide>
        <swiper-slide>Slide 6</swiper-slide>
        <swiper-slide>Slide 7</swiper-slide>
        <swiper-slide>Slide 8</swiper-slide>
        <swiper-slide>Slide 9</swiper-slide>
      </swiper>
      <div class="w-[385px] h-[140px] bg-[#fff] rounded-md shadow-sm px-3 pt-2">
        <div class="info">
          <span class="text-gray-700 text-lg">夜深了，</span
          ><span class="text-gray-500 text-xs">猜你最近喜欢听</span>
        </div>
        <div>
          <div class="imglist flex gap-3 mt-1 rounded-md">
            <div class="img">
              <img
                class="rounded-md transition-transform duration-300 hover:scale-110"
                src="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg?param=130y130"
                alt=""
              />
            </div>
            <div class="img">
              <img
                class="rounded-md transition-transform duration-300 hover:scale-110"
                src="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg?param=130y130"
                alt=""
              />
            </div>
            <div class="img">
              <img
                class="rounded-md transition-transform duration-300 hover:scale-110"
                src="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg?param=130y130"
                alt=""
              />
            </div>
            <div class="img">
              <img
                class="rounded-md transition-transform duration-300 hover:scale-110"
                src="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg?param=130y130"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="w-[180px] h-[140px] bg-[#fff] rounded-md shadow-sm overflow-hidden">
        <img
          src="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg?param=180y180"
          alt=""
        />
      </div>
    </div>
    <div class="bar mt-7">
      <div class="text-gray-700">精选推荐</div>
      <div></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MainHeader from './component/MainHeader.vue'
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
</script>

<style scoped>
/* 补充轮播容器样式，确保正常显示 */
.mySwiper {
  width: 385px;
  height: 140px; /* 固定高度，避免无法滚动 */
  margin: 0;
}
::v-deep .swiper-pagination-bullet {
  background-color: #fff;
}
</style>
