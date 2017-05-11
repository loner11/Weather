import Vue from 'vue'
import Vuex from 'vuex'

import LOCATION from './modules/location'
import WEATHER from './modules/weather'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    location: LOCATION,
    weather: WEATHER
  }
})