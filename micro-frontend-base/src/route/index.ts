import { createRouter, createWebHistory } from 'vue-router';
const routes = [
  {
    path: '/',
    redirect: '/app-vue/index',
  },
  {
    path: "/app:pathxx(.*)*", //通配所有路由
    name: "app",
    meta: {
      title: '根路由',
    },
    component: () => import(/* webpackChunkName: "main" */ '@/App.vue'),
  },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

