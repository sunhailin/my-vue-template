// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import Toast from 'vue-toasted'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'
import './css/public.css'

Vue.config.productionTip = false

// 配置axios
axios.defaults.transformRequest = [
    function(data) {
      let ret = ''
      for (let it in data) {
        if (Array.isArray(data[it])) {
          data[it].forEach(item => {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(item) + '&'
          })
        } else {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
      }
      return ret
    }
  ]
  // 把axios放到全局中
Vue.prototype.$http = axios

// 配置toast
Vue.use(Toast, {
    position: 'top-center',
    duration: 2000
  })
  // 全局滤镜
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
