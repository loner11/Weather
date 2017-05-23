import Vue from 'vue'
import Vuex from 'vuex'

import LOCATION from './modules/location'
import FORECAST_WEATHER from './modules/forecastWeather'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    location: LOCATION,
    forecast: FORECAST_WEATHER
  }
})