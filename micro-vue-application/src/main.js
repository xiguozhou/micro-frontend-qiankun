import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router, { history } from "@/route/index";
import {
    renderWithQiankun,
    qiankunWindow
} from 'vite-plugin-qiankun/dist/helper';

let instance: any = null;

async function render(props: any = {}) {
    const { container, activeRule } =
        props;

    instance = createApp(App);
    instance.use(router);
    instance?.mount(container ? container.querySelector("#app") : "#app");
    instance.config.globalProperties.$activeRule = activeRule;
}

const initQianKun = () => {
    renderWithQiankun({
        mount(props) {
            render(props);
        },
        bootstrap() { },
        update() { },
        unmount() {
            instance.unmount();
            instance._container.innerHTML = "";
            instance = null;
            history.destroy();
        },
    });
};

if (qiankunWindow.__POWERED_BY_QIANKUN__) {
    console.log("qiankun渲染开始");
    initQianKun();
} else {
    console.log("不是qiankun渲染");
    render();
}

