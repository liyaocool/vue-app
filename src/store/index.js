import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';//vuex 内置logger插件

import chatModule from './modules/chat';
import productsModule from './modules/products';

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const store = new Vuex.Store({
  modules: {
    chat: chatModule,
    products: productsModule,
  },

  //非production环境下开启vuex状态改变日志
  strict: debug,
  plugins: debug ? [createLogger()] : []
})
export default store;
