import {WEATHER_DATA} from '../mutation_types'

const state = {
  weatherData: ''
}

const getters = {
  updatedWeatherData: state => {
    return state.weatherData
  }
}

const mutations = {
  [WEATHER_DATA] (state, data) {
    state.weatherData = data
  }
}

const actions = {
  getWeatherData ({commit}, data) {
    commit('WEATHER_DATA', data)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}