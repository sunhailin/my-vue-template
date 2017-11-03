// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './common/configHttp.js'
import deviceInfo from './common/deviceInfo'
import Toast from 'vue-toasted'
import Vodal from 'vodal'
import App from './App'
import router from './router'
import store from './store'
import * as filters from './filters'
import 'vodal/common.css'
import 'vodal/zoom.css'
import './css/public.css'

Vue.config.productionTip = false
// 加入设备信息
Vue.prototype.$deviceInfo = deviceInfo
// 配置toast
Vue.use(Toast, {
  position: 'top-center',
  duration: 2000
})
// 全局滤镜
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
// 全局引入modal插件
Vue.component(Vodal.name, Vodal)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
