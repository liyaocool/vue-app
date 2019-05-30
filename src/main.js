import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/reset.styl'
import '@/assets/styles/fastClass.styl'
import '@/assets/icon/iconfont/iconfont.css'
import '@/assets/icon/iconfont/iconfont.js'
import '@/assets/icon/font-awesome-4.7.0/css/font-awesome.min.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MainHeader from "@/components/MainHeader"
import 'lib-flexible/flexible.js'
import FastClick from 'fastclick'

FastClick.attach(document.getElementById("app"))
FastClick.prototype.focus = (el) => {
  'use strict'
  el.focus()
}
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.component('MainHeader', MainHeader) //全局注册 头部组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')