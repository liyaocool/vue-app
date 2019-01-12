import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import MainContent from './components/MainContent'
import './assets/styles/reset.stylus';

Vue.config.productionTip = false
Vue.component("MainContent", MainContent)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')