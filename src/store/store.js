import Vue from 'vue'
import Vuex from 'vuex'

import LOCATION from './modules/location'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    location: LOCATION
  }
})