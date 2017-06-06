import {NOW_WEATHER_DATA} from '../mutation_types'

import axios from 'axios'
import Params from '../api'

const state = {
  nowWeatherData: ''
}

const getters = {
  updatedNowWeatherData: state => {
    return state.nowWeatherData
  }
}

const mutations = {
  [NOW_WEATHER_DATA] (state, {data}) {
    state.nowWeatherData = data
  }
}

const actions = {
  getNowWeatherData ({commit}, cityName) {
    let api = Params.params.API
    let city = Params.params.City
    let key = Params.params.KEY
    axios.get(api + 'now' + city + cityName + key)
      .then(response => {
        let tmp = response.data.HeWeather5
        let weatherNowData = [
          tmp[0].basic, tmp[0].now
        ]
        commit('NOW_WEATHER_DATA', {data: weatherNowData})
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