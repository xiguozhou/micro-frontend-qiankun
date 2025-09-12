import { createRouter, createWebHistory } from 'vue-router';
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
const routes = [
  {
    path: '/',
    name: 'Layout',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "home" */ '@/components/Layout/index.vue'),
    meta: {
      title: '根路由',
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/index.vue'),
        meta: {
          title: '首页',
        },
      },

    ],
  }

];
export const history = createWebHistory(
  qiankunWindow.__POWERED_BY_QIANKUN__ ? '/app-vue/index' : "/"
);

const router = createRouter({
  history: history,
  routes,
});

export default router;

