/**
 * Created by zp6077 on 2017/6/30.
 */
import * as types from '../mutation-types'
import api from '../api'

//state 代表数据实体
const state = {
  transferIndex: false
}

//action 可以包含异步操作的状态变更
const actions = {
  sideIndex: function ({commit}, params) {
    return new Promise((resolve, reject) => {
      commit(types.INDEX_PATH, params);
      resolve(params)
      // Pending（进行中）、Resolved（已完成，又称 Fulfilled）和 Rejected（已失败）
    })
  }
}

//getters 代表数据实体计算属性 能够根据state动态变更值
const getters = {
  getTransferIndex: state => state.transferIndex,
}

//mutations 同步状态变更 直接修改状态值
const mutations = {
  [types.INDEX_PATH] (state, val) {
    state.transferIndex = val
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
