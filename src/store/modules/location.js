import {LOCATION_CITY_NAME} from '../mutation_types'

import axios from 'axios'
import Params from '../../store/api.js'

const state = {
  cityName: '北京'
}

const getters = {
  updatedCityName: state => {
    return state.cityName
  }
}

const mutations = {
  [LOCATION_CITY_NAME] (state, {name}) {
    state.cityName = name
  }
}

const actions = {
  getCityName ({commit}) {
    axios.get(Params.params.LOCATION_CITY_URL)
      .then(response => {
        commit('LOCATION_CITY_NAME', {name: response.data.city})
      })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}