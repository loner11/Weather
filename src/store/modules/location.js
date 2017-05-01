import {LOCATION_CITY_NAME} from '../mutation_types'

const state = {
  cityName: '北京'
}

const getters = {
  updatedCityName: state => {
    return state.cityName
  }
}

const mutations = {
  [LOCATION_CITY_NAME] (state, name) {
    state.cityName = name
  }
}

const actions = {
  getCityName ({commit}, name) {
    commit('LOCATION_CITY_NAME', name)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}