import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login
    },
    strict: process.env.NODE_ENV !== 'production'// 线上环境关掉
})
