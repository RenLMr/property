<template>
  <div class="box1">
    <el-icon v-show="showMenu" @click="toggleMenu"><Fold /></el-icon>
    <el-icon v-show="!showMenu" @click="toggleMenu"><Expand /></el-icon>
  </div>
</template>
<script lang="ts" setup>
import { ref } from "vue";
const showMenu = ref(true);

//切换菜单显示隐藏
const toggleMenu = () => {
  showMenu.value = !showMenu.value;
};
</script>
<style lang="scss" scoped>
.box1 {
  height: calc(100% - 30px);
  padding: 0 20px;
  display: flex;
  align-items: center;
  .el-icon {
    font-size: 28px;
  }
}
</style>
