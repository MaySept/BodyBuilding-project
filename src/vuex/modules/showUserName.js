/**
 * Created by zp6077 on 2017/7/4.
 */
import * as types from '../mutation-types'
import api from '../api'

const state = {
  showUserName: '绿城健身房-HZ'
}

const actions = {
  goUserName: function ({commit}, params) {
    return new Promise((resolve, reject) => {
      commit(types.USER_NAME, params)
      resolve(params)
    })
  }
}

const getters = {
  getForgetUserName: state => state.showUserName
}

//mutations 同步状态变更 直接修改状态值
const mutations = {
  [types.USER_NAME] (state, val) {
    state.showUserName = val
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
