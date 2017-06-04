import {SEARCH_CITY_NAME} from '../mutation_types'

import axios from 'axios'
import Params from '../api'

const state = {
  searchCityName: ''
}

const getters = {
  updatedSearchCityName: state => {
    return state.searchCityName
  }
}

const mutations = {
  [SEARCH_CITY_NAME] (state, {name}) {
    state.searchCityName = name
  }
}

const actions = {
  getSearchCityName ({commit}, searchCityName) {
    let api = Params.params.API
    let city = Params.params.City
    let key = Params.params.KEY
    axios.get(api + 'search' + city + searchcityName + key)
      .then(response => {
        commit('FORECAST_WEATHER_DATA', {name: response.data.HeWeather5})
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