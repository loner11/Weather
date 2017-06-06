import {REAL_TIME_DATA} from '../mutation_types'

import axios from 'axios'
import Params from '../api'

const state = {
  realTimeData: ''
}

const getters = {
  updatedRealTimeData: state => {
    return state.realTimeData
  }
}

const mutations = {
  [REAL_TIME_DATA] (state, {data}) {
    state.realTimeData = data
  }
}

const actions = {
  getRealTimeData ({commit}, cityName) {
    let api = Params.params.API
    let city = Params.params.City
    let key = Params.params.KEY
    axios.get(api + 'hourly' + city + cityName + key)
      .then(response => {
        commit('REAL_TIME_DATA', {data: response.data.HeWeather5[0].hourly_forecast})
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}