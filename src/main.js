import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Element from 'element-ui'

import Weather from './Weather.vue'
import router from './router/index'
import store from './store/store'

import 'element-ui/lib/theme-default/index.css'
import '../src/assets/scss/app.scss'

Vue.use(Element, VueAxios, axios)
Vue.prototype.axios = axios

new Vue({
  el: '#weather',
  router,
  store,
  render: h => h(Weather)
})