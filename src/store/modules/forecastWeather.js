import {FORECAST_WEATHER_DATA} from '../mutation_types'

import axios from 'axios'
import Params from '../api'

const state = {
  forecastWeatherData: ''
}

const getters = {
  updatedForecastWeatherData: state => {
    return state.forecastWeatherData
  }
}

const mutations = {
  [FORECAST_WEATHER_DATA] (state, {data}) {
    state.forecastWeatherData = data
  }
}

const actions = {
  getForecastWeatherData ({commit}, cityName) {
    let api = Params.params.API
    let city = Params.params.City
    let key = Params.params.KEY
    axios.get(api + 'forecast' + city + cityName + key)
      .then(response => {
        commit('FORECAST_WEATHER_DATA', {data: response.data.HeWeather5})
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