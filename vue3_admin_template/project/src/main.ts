import { createApp } from 'vue'
import App from '@/App.vue'

// 引入ElementPlus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

// SVG插件需要配置代码
import 'virtual:svg-icons-register'
// 自定义插件
import gloablComponent from './components/index';

// 引入模板的全局样式
import '@/styles/index.scss'

// 引入路由进
import router from './router'

import pinia from './store'

//暗黑模式
import 'element-plus/theme-chalk/dark/css-vars.css'

// createApp(App).mount('#app')
const app = createApp(App) //获取实例对象

app.use(ElementPlus, {
  locale: zhCn, // 国际化
})
app.use(gloablComponent);

app.use(router)

app.use(pinia)

//自定义指令
import {isHasButton} from '@/directive/has'
isHasButton(app)

// 引入路由鉴权
import './permission.ts';

// 将应用挂载
app.mount('#app')

