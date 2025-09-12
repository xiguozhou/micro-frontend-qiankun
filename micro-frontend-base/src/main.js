import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { registerMicroApps, start } from 'qiankun';

registerMicroApps([
  {
    name: 'reactApp',
    entry: '//localhost:3000',
    container: '#container',
    activeRule: '/app-react',
  },
  {
    name: 'vueApp',
    entry: '//localhost:8000',
    container: '#container',
    activeRule: '/app-vue',
  }
]);
// 启动 qiankun
start();
const app = createApp(App)
app.use(ElementPlus)
app.mount('#app')
