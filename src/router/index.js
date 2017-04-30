import Vue from 'vue'
import VueRouter from 'vue-router'

import WeatherNow from '../components/weatherNow/WeatherNow.vue'
import WeatherForecast from '../components/weatherForecast/weatherForecast.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '',
      name: '',
      component: WeatherNow
    },
    {
      path: '/now',
      name: 'now',
      component: WeatherNow
    },
    {
      path: '/forecast',
      name: 'forecast',
      component: WeatherForecast
    }
  ]
})