import axios from 'axios'
import {LOCATION_CITY_NAME} from '../mutation_types'
import Params from '../api'

const state = {
  cityName: '北京'
}

const mutations = {
  [LOCATION_CITY_NAME] (state, name) {
    state.cityName = name
  }
}

const actions = {
  getCityName ({commit}, name) {
    axios.get(Params.params.LOCATION_CITY_URL)
      .then(response => {
        commit('LOCATION_CITY_NAME', response.data.city)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default {
  state,
  mutations,
  actions
}