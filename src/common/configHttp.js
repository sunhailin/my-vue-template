import Vue from 'vue'
import axios from 'axios'
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
axios.defaults.params = {
  p: 'v'
}

// 拦截response 事先统一处理
axios.interceptors.response.use(function(response) {
  // Do something with response data
  return response;
}, function(error) {
  // Do something with response error
  return Promise.reject(error);
});
// 把axios放到全局中
Vue.prototype.$http = axios
