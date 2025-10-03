<template>
  <div class="header font-bold mb-1.5">网易云音乐</div>
  <div class="aside overflow-y-auto">
    <div class="system border-b-[1px] border-[#e4e8ec] pb-2">
      <div
        tabindex="0"
        class="p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
      >
        <span>推荐</span>
      </div>
      <div
        tabindex="0"
        class="p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
      >
        <span>精选</span>
      </div>
      <div
        tabindex="0"
        class="p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
      >
        <span>播客</span>
      </div>
      <div
        tabindex="0"
        class="p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
      >
        <span>漫游</span>
      </div>
      <div
        tabindex="0"
        class="p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
      >
        <span>动态</span>
      </div>
    </div>
    <div class="my mt-2 border-b-[1px] border-[#e4e8ec] pb-3">
      <div class="info flex items-center justify-between my-2">
        <span class="text-[11px]">我的</span>
        <el-icon :size="12" class="color-[var(--icon-color)]">
          <Edit />
        </el-icon>
      </div>
      <div
        tabindex="0"
        class="p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
      >
        <span>我喜欢的音乐</span>
      </div>
      <div
        tabindex="0"
        class="p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
      >
        <span>最近播放</span>
      </div>
      <div
        tabindex="0"
        class="p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
      >
        <span>我的播客</span>
      </div>
      <div v-if="isshow">
        <div
          tabindex="0"
          class="p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
        >
          <span>我的收藏</span>
        </div>
        <div
          tabindex="0"
          class="p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
        >
          <span>下载管理</span>
        </div>
        <div
          tabindex="0"
          class="p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
        >
          <span>我的音乐网盘</span>
        </div>
      </div>
      <div class="footer flex items-center mt-2 cursor-pointer" @click="isshow = !isshow">
        <el-icon :size="12" class="color-[var(--icon-color)]" :class="isshow ? 'rotate-180' : ''"
          ><ArrowUp
        /></el-icon>
        <span class="text-[10px] pl-2">{{ isshow ? '收起' : '更多' }}</span>
      </div>
    </div>
    <div class="musicList pt-2 border-b-[1px] border-[#e4e8ec] pb-4">
      <div class="flex items-center justify-between mb-2">
        <div class="flex items-center cursor-pointer" @click="isshowCreate = !isshowCreate">
          <span class="text-[10px] text-[var(--app-text-color)] mr-1">创建的歌单 27</span>
          <el-icon
            :size="12"
            class="color-[var(--icon-color)]"
            :class="isshowCreate ? '' : 'rotate-180'"
            ><ArrowUp
          /></el-icon>
        </div>
        <el-icon :size="12" class="color-[var(--icon-color)]"><CirclePlus /></el-icon>
      </div>
      <div v-show="isshowCreate">
        <div
          tabindex="0"
          class="flex p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
        >
          <div class="w-[25px] h-[25px] overflow-hidden rounded-[4px] mr-2">
            <img
              class="w-full h-full object-cover aspect-square"
              src="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg"
              alt=""
            />
          </div>
          <span>下载管理</span>
        </div>
      </div>
    </div>
    <div class="musicList pt-2">
      <div
        class="flex items-center justify-between mb-2 cursor-pointer"
        @click="isshowMusci = !isshowMusci"
      >
        <div class="flex items-center">
          <span class="text-[10px] text-[var(--app-text-color)] mr-1">收藏的歌单 27</span>
          <el-icon
            :size="12"
            class="color-[var(--icon-color)]"
            :class="isshowMusci ? '' : 'rotate-180'"
            ><ArrowUp
          /></el-icon>
        </div>
      </div>
      <div v-show="isshowMusci">
        <div
          tabindex="0"
          class="flex p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
        >
          <div class="w-[25px] h-[25px] overflow-hidden rounded-[4px] mr-2">
            <img
              class="w-full h-full object-cover aspect-square"
              src="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg"
              alt=""
            />
          </div>
          <span>下载管理</span>
        </div>
        <div
          tabindex="0"
          class="flex p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
        >
          <div class="w-[25px] h-[25px] overflow-hidden rounded-[4px] mr-2">
            <img
              class="w-full h-full object-cover aspect-square"
              src="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg"
              alt=""
            />
          </div>
          <span>下载管理</span>
        </div>
        <div
          tabindex="0"
          class="flex p-2 text-[12px] hover:bg-[var(--hover-bg-color)] focus:bg-[var(--primary-color)] focus:text-[12px] focus:text-white active:bg-[var(--hover-bg-color)]xt-[12px] text-[var(--app-text-color)] rounded-[8px] cursor-pointer"
        >
          <div class="w-[25px] h-[25px] overflow-hidden rounded-[4px] mr-2">
            <img
              class="w-full h-full object-cover aspect-square"
              src="https://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg"
              alt=""
            />
          </div>
          <span>下载管理</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

//收起 更多
const isshow = ref(true)
//show 创建的歌单
const isshowCreate = ref(true)
//show 收藏的歌单
const isshowMusci = ref(true)
</script>
