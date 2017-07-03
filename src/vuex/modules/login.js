import * as types from '../mutation-types'
import api from '../api'

//state 代表数据实体
const state = {
    uid: '15384077817',
    userName: '张鹏'
}

//action 可以包含异步操作的状态变更
const actions = {
    getLoginId: function ({commit}, params) {
        return new Promise((resolve, reject) => {
          commit(types.USER_ID, params);
          resolve(params)
        })
    },
    getLoginName: function ({commit}, params) {
      return new Promise((resolve, reject) => {
        commit(types.USER_ID, params);
        resolve(params)
      })
    }
}

//getters 代表数据实体计算属性 能够根据state动态变更值
const getters = {
  getUid: state => state.uid,
  getUserName: state => state.userName,

}

//mutations 同步状态变更 直接修改状态值
const mutations = {
    [types.USER_ID] (state, val) {
        state.uid = val
    },
    [types.USER_Name] (state, val) {
      state.userName = val
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
