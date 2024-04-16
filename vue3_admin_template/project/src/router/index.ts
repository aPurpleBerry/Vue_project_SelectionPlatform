// 模板路由配置
import {createRouter,createWebHashHistory} from 'vue-router'
import {constantRoute} from './routes.ts'

// 创建路由器
const router = createRouter({
  history:createWebHashHistory(),
  routes: constantRoute,
  // 滚动行为
  scrollBehavior(){
    return {
      left: 0,
      top: 0
    }
  }
})

export default router;