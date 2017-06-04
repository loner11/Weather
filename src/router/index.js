import Vue from 'vue'
import VueRouter from 'vue-router'

import WeatherNow from '../components/weatherNow/index.vue'
import WeatherForecast from '../components/weatherForecast/index.vue'
import weatherForecastDetail from '../components/WeatherForecast/WeatherForecastDetail/index.vue'
import WeatherCity from '../components/weatherCity/index.vue'
import RealTime from '../components/WeatherNow/RealTime/index.vue'
import LifeIndex from '../components/WeatherNow/LifeIndex/index.vue'

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
      component: WeatherForecast,
      children: [
        {
          path: 'detail',
          component: weatherForecastDetail
        }
      ]
    },
    {
      path: '/city',
      name: 'city',
      component: WeatherCity
    }
  ]
})