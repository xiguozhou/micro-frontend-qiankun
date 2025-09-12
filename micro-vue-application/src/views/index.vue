<template>
  <div class="home">
    <el-card class="welcome-card">
      <template #header>
        <div class="card-header">
          <span>欢迎来到 Vue 微前端应用</span>
        </div>
      </template>
      <div class="content">
        <el-row :gutter="20">
          <el-col :span="12">
            <el-card shadow="hover">
              <h3>功能特性</h3>
              <ul>
                <li>基于 Vue 3 + Vite</li>
                <li>支持 TypeScript</li>
                <li>Element Plus UI 组件</li>
                <li>微前端架构</li>
                <li>独立部署</li>
              </ul>
            </el-card>
          </el-col>
          <el-col :span="12">
            <el-card shadow="hover">
              <h3>技术栈</h3>
              <ul>
                <li>Vue 3 Composition API</li>
                <li>Vite 构建工具</li>
                <li>Vue Router 路由</li>
                <li>Element Plus 组件库</li>
                <li>qiankun 微前端框架</li>
              </ul>
            </el-card>
          </el-col>
        </el-row>
        
        <el-divider />
        
        <div class="demo-section">
          <h3>组件演示</h3>
          <el-space wrap>
            <el-button type="primary" @click="showMessage">显示消息</el-button>
            <el-button type="success" @click="showNotification">显示通知</el-button>
            <el-button type="warning" @click="showDialog">显示对话框</el-button>
          </el-space>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ElMessage, ElNotification, ElMessageBox } from 'element-plus'
import { defineOptions } from 'vue'

defineOptions({
  name: 'Home'
})

const showMessage = () => {
  ElMessage.success('这是一个成功消息！')
}

const showNotification = () => {
  ElNotification({
    title: '通知',
    message: '这是一个通知消息',
    type: 'info'
  })
}

const showDialog = () => {
  ElMessageBox.alert('这是一个对话框', '提示', {
    confirmButtonText: '确定'
  })
}
</script>

<style scoped>
.home {
  padding: 20px;
}

.welcome-card {
  max-width: 1200px;
  margin: 0 auto;
}

.card-header {
  font-size: 18px;
  font-weight: bold;
  color: #409eff;
}

.content {
  padding: 20px 0;
}

.content h3 {
  color: #303133;
  margin-bottom: 15px;
}

.content ul {
  list-style: none;
  padding: 0;
}

.content li {
  padding: 5px 0;
  color: #606266;
}

.content li::before {
  content: '✓';
  color: #67c23a;
  font-weight: bold;
  margin-right: 8px;
}

.demo-section {
  text-align: center;
  margin-top: 30px;
}

.demo-section h3 {
  margin-bottom: 20px;
}
</style>
