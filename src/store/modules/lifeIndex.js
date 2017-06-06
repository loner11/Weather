import {LIFE_INDEX_DATA} from '../mutation_types'

import axios from 'axios'
import Params from '../api'

const state = {
  lifeIndexData: ''
}

const getters = {
  updatedLifeIndexData: state => {
    return state.lifeIndexData
  }
}

const mutations = {
  [LIFE_INDEX_DATA] (state, {data}) {
    state.lifeIndexData = data
  }
}

const actions = {
  getLifeIndexData ({commit}, cityName) {
    let api = Params.params.API
    let city = Params.params.City
    let key = Params.params.KEY
    axios.get(api + 'suggestion' + city + cityName + key)
      .then(response => {
        let tmp = response.data.HeWeather5[0].suggestion
        let suggestion = [
          ['舒适度指数 ' + tmp.comf.brf, tmp.comf.txt],
          ['穿衣指数 ' + tmp.drsg.brf, tmp.drsg.txt],
          ['感冒指数 ' + tmp.flu.brf, tmp.flu.txt],
          ['运动指数 ' + tmp.sport.brf, tmp.sport.txt],
          ['洗车指数 ' + tmp.cw.brf, tmp.cw.txt],
          ['旅游指数 ' + tmp.trav.brf, tmp.trav.txt]
        ]
        commit('LIFE_INDEX_DATA', {data: suggestion})
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