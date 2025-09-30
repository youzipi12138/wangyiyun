<template>
  <!-- 块级元素默认沾满父元素，整个宽度 -->
  <div>
    <el-menu class="side">
      <el-menu-item index="1">
        <span>推荐</span>
      </el-menu-item>
      <el-menu-item index="2">
        <span>精选</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span>播客</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span>漫游</span>
      </el-menu-item>
      <el-menu-item index="5">
        <span>动态</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<style lang="scss">
.side {
  // 通过 Element Plus CSS 变量让菜单背景与悬停背景保持透明
  --el-menu-bg-color: transparent;
  --el-menu-hover-bg-color: transparent;
}
.side .el-menu {
  background-color: transparent; // 强制覆盖背景
}
// 直接选中 el-menu-item 的内置类名
.side .el-menu-item {
  height: 40px; /* 生效：修改菜单项高度 */
  border-radius: 0; // 默认无圆角
  background-color: transparent; // 默认透明
}

// 悬停和激活时显示圆角和背景
.side .el-menu-item:hover,
.side .el-menu-item:focus {
  border-radius: 8px;
  background-color: #f5f5f5;
}

// 点击后（选中状态）Element Plus 会给项加 is-active 类
.side .el-menu-item.is-active {
  border-radius: 8px;
  background-color: #f5f5f5;
}
</style>
