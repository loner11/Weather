import Vue from 'vue'
import Vuex from 'vuex'

import LOCATION from './modules/location'
import NOW_WEATHER from './modules/nowWeather'
import FORECAST_WEATHER from './modules/forecastWeather'
import SEARCH from './modules/search'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    location: LOCATION,
    now: NOW_WEATHER,
    forecast: FORECAST_WEATHER,
    search: SEARCH
  }
})