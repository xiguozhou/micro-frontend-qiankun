## 项目主要功能概览

本项目演示如何使用 qiankun 构建微前端体系，包含一个 Vue 基座应用以及 Vue、React 两个子应用。整体功能侧重于路由分发、子应用装载与独立开发体验。

### 基座应用（micro-frontend-base）

- 利用 `vue-router` 提供顶层路由，与 Element Plus 组成导航布局界面。
- 通过 qiankun 的 `registerMicroApps` 注册子应用，按 URL 前缀切换（`/app-vue`、`/app-react`）。
- 在布局组件中响应菜单选择事件，调用 `history.pushState`+`popstate` 实现子应用间的无刷新跳转。
- 为子应用提供统一的容器节点 `#sub-container` 并托管公共样式与 UI 框架。

### Vue 子应用（micro-vue-application）

- 基于 Vue 3 + Vite + TypeScript 构建，使用 Element Plus 提供侧边栏、卡片、弹窗等组件。
- 通过 `vite-plugin-qiankun` 适配 qiankun，支持独立运行与被基座托管两种模式，并在托管时自动切换路由 base（`/app-vue/index`）。
- 内置一个示例首页页面：展示项目特性、技术栈，并提供消息通知、对话框等交互演示。
- 布局组件支持基于路由的高亮与面包屑，模拟实际业务导航结构。

### React 子应用（micro-react-application）

- 使用 `create-react-app` 初始化，集成 qiankun 生命周期（`bootstrap`、`mount`、`unmount`）。
- 通过共享的 `#root` 容器实现与基座的装载/卸载对接，可按照需要扩展业务页面与 React Router。
- 示范性保留 CRA 默认页面，便于开发者在此基础上迭代功能。

### 微前端协同特性

- 子应用保持完全独立的构建与依赖管理，可单独开发调试，也可由基座统一编排。
- 基座负责子应用间的路由流转与 UI 框架注入，子应用只需关注自身业务路由和组件。
- 通过 HTML5 History API 联动 qiankun，实现不同技术栈子应用间的顺畅跳转。
- 提供 Element Plus UI 与 qiankun API 的结合示例，可作为扩展多子应用场景的模板。


