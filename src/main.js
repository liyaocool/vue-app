import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/index.styl';
import MainHeader from "@/components/MainHeader";
import MainView from "@/components/MainView";

Vue.config.productionTip = false;
Vue.component('MainHeader', MainHeader); //全局注册 头部组件
Vue.component('MainView', MainView); //全局注册 路由视窗组件

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')