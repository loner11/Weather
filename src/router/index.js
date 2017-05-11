import Vue from 'vue'
import VueRouter from 'vue-router'

import WeatherNow from '../components/weatherNow/WeatherNow.vue'
import WeatherForecast from '../components/weatherForecast/WeatherForecast.vue'
import WeatherCity from '../components/weatherCity/WeatherCity.vue'
import RealTime from '../components/realTime/RealTime.vue'
import LifeIndex from '../components/LifeIndex/LifeIndex.vue'

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
      component: WeatherNow,
      children: [
        {
          path: 'realtime',
          component: RealTime
        },
        {
          path: 'lifeindex',
          component: LifeIndex
        }
      ]
    },
    {
      path: '/forecast',
      name: 'forecast',
      component: WeatherForecast
    },
    {
      path: '/city',
      name: 'city',
      component: WeatherCity
    }
  ]
})