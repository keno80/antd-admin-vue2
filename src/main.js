import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import antd from "@/utils/antd";

Vue.config.productionTip = false

import axios from '@/utils/http'
Vue.prototype.$http = axios

import Message from '@/utils/Message'
Vue.prototype.$ShowMessage = Message

Vue.use(antd)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
