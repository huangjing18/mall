import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'element-ui/lib/theme-chalk/index.css';
import {Message } from 'element-ui'
Vue.prototype.$message = Message

Vue.config.productionTip = false
Vue.prototype.$bus=new Vue()


new Vue({
  render: h => h(App),
  router,
}).$mount('#app')


