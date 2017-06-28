import * as types from '../mutation-types'
import api from '../api'

//state 代表数据实体
const state = {
    loginSuccess: false,
    errorMessage: ''
}

//action 可以包含异步操作的状态变更
const actions = {
    goLogin: function ({commit}, params) {
        return new Promise((resolve, reject) => {
            api.getLogin(params, function (res) {
                commit(types.LOGIN_IS_SUCCESS, res);
                resolve(res)
            })
        })
    }
}

//getters 代表数据实体计算属性 能够根据state动态变更值
const getters = {
    getLoginSuccess: state => state.loginSuccess,
    getLoginMessage: state => state.errorMessage
}

//mutations 同步状态变更 直接修改状态值
const mutations = {
    [types.LOGIN_IS_SUCCESS] (state, res) {
        state.loginSuccess = res.error_code === '0000'
        state.errorMessage = res.error_msg
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}
