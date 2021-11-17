<!-- AppMenu -->
<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="1"
    text-color="#fff"
    router
  >
    <el-menu-item index="/">
      <el-icon><IconMenu /></el-icon>
      <span>首页</span>
    </el-menu-item>

    <el-sub-menu index="/admin/product">
      <template #title>
        <el-icon><Location /></el-icon>
        <span>商品</span>
      </template>
      <el-menu-item index="/admin/product/product_list">
        <el-icon><Setting /></el-icon>
        <span>商品列表</span>
      </el-menu-item>
      <el-menu-item index="/admin/product/product_classify">
        <el-icon><Setting /></el-icon>
        <span>商品分类</span>
      </el-menu-item>
      <el-menu-item index="/admin/product/product_attr">
        <el-icon><Setting /></el-icon>
        <span>商品规格</span>
      </el-menu-item>
      <el-menu-item index="/admin/product/add_product">
        <el-icon><Setting /></el-icon>
        <span>添加商品</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang='ts'>
import {
  Location,
  Menu as IconMenu,
  Setting
} from '@element-plus/icons'

</script>

<style scoped lang='scss'>
</style>
