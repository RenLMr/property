<template>
  <el-table :data="TableList2" border v-bind="TableStyle">
    <!-- <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" /> -->
    <el-table-column
      v-for="(item, index) in TableList"
      :key="index"
      v-bind="item"
    >
      <template #default="scope">
        <slot :name="item.slotName" :row="scope.row">{{
          scope.row.username == "admin" ? "" : scope.row[item.prop]
        }}</slot>
      </template>
    </el-table-column>
  </el-table>
</template>
<script lang="ts" setup>
import { defineProps } from "vue";
//接受父组件传递的数据

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const props = defineProps({
  TableList: {
    type: Array,
    defined: () => [],
  },
  TableList2: {
    type: Array,
    default: () => [],
  },
  TableStyle: {
    type: Object,
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    default: () => {},
  },
});
</script>
<style lang="scss" scoped></style>
