import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes';

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'actived',
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// //全局导航守卫
// router.beforeEach((to, from, next) => {
//   console.log('路由跳转',to)
//   next()
// })

export default router