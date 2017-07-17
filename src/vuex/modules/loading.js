/**
 * Created by zp6077 on 2017/7/10.
 */
import * as types from '../mutation-types'

const state = {
  isLoading: ''
}

const actions = {
  setLoading: function ({commit}, params) {
    return new  Promise((resolve, reject) => {
      commit(types.IS_LOADING,params)
      resolve(params)
    })
  }
}

const getters = {
  getIsLoading: state => state.isLoading
}

const mutations = {
  [types.IS_LOADING] (state, val) {
    state.isLoading = val
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}







