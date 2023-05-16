<template>
  <el-container>
    <el-aside width="210px">
      <Menu />
    </el-aside>
    <el-container>
      <el-header>
        <heads />
        <HeadsTabs />
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.el-container {
  width: 100%;
  height: 100%;
  .el-aside {
    height: 100%;
    background-color: #304156;
    color: #fff;
  }
  .el-header {
    width: 100%;
    height: 80px;
    padding: 0;
    background-color: rgb(212, 207, 207);
  }
}
</style>
