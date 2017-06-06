import Vue from 'vue'
import Vuex from 'vuex'

import LOCATION from './modules/location'
import NOW_WEATHER from './modules/nowWeather'
import REAL_TIME_DATA from './modules/realTime'
import LIFE_INDEX_DATA from './modules/lifeIndex'
import FORECAST_WEATHER from './modules/forecastWeather'
import SEARCH from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    location: LOCATION,
    now: NOW_WEATHER,
    realTime: REAL_TIME_DATA,
    lifeIndex: LIFE_INDEX_DATA,
    forecast: FORECAST_WEATHER,
    search: SEARCH
  }
})