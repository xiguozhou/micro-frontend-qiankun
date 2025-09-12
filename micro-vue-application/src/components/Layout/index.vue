<template>
  <div class="layout">
    <el-container>
      <el-aside class="aside" width="200px">
        <div class="logo">
          <h2>Vue 微前端</h2>
        </div>
        <el-menu
          :default-active="$route.path"
          class="sidebar-menu"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="/home">
            <el-icon><House /></el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <el-icon><InfoFilled /></el-icon>
            <span>关于</span>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-container>
        <el-header class="header">
          <h1>Vue 微前端应用</h1>
        </el-header>
        <el-main class="main">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { defineOptions } from 'vue'

defineOptions({
  name: 'Layout'
})
</script>

<style scoped>
.layout {
  height: 100vh;
}

.aside {
  background-color: #545c64;
  color: white;
}

.logo {
  padding: 20px;
  text-align: center;
  border-bottom: 1px solid #434a50;
}

.logo h2 {
  margin: 0;
  color: #fff;
  font-size: 18px;
}

.sidebar-menu {
  border: none;
  height: calc(100vh - 80px);
}

.sidebar-menu .el-menu-item {
  height: 50px;
  line-height: 50px;
  padding: 0 20px;
}

.sidebar-menu .el-menu-item:hover {
  background-color: #434a50;
}

.sidebar-menu .el-menu-item.is-active {
  background-color: #409eff;
}

.header {
  padding: 0 20px;
  background-color: #fff;
  color: #333;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e4e7ed;
  box-shadow: 0 1px 4px rgba(0,21,41,.08);
}

.header h1 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.main {
  padding: 20px;
  background-color: #f5f5f5;
  height: calc(100vh - 60px);
  overflow-y: auto;
}
</style>
