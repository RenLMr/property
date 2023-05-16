<template>
  <div class="menu_bxo">
    <img
      src="https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png"
      width="32"
      height="32"
    />
    <h1>物业管理系统</h1>
  </div>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
  >
    <el-menu-item index="/">
      <el-icon><setting /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-sub-menu :index="item.path" v-for="(item, index) in menus" :key="index">
      <template #title>
        <i class="el-icon-share"></i>
        <span>{{ item.meta.title }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item
          :index="ele.path"
          v-for="(ele, idx) in item.children"
          :key="idx"
          >{{ ele.meta.title }}</el-menu-item
        >
      </el-menu-item-group>
    </el-sub-menu>
  </el-menu>
</template>
<script lang="ts" setup>
import { menus } from "./type/menuList";
</script>
<style lang="scss" scoped>
.menu_bxo {
  height: 50px;
  background-color: #2b2f3a;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    margin-right: 10px;
  }
}
</style>
