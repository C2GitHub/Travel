import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index.js'
import axios from 'axios'
import fastClick from 'fastclick/lib/fastclick.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import './assets/css/reset.css'
import './assets/css/border.css'
import './assets/css/iconfont.css'
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)

// axios.defaults.baseURL = 'https://easy-mock.com/mock/5bddc35f1706204c2bc9b479'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
Vue.prototype.$axios = axios
Vue.prototype.bus = new Vue()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
