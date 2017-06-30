import Vue from 'vue'
import Vuex from 'vuex'
import login from './modules/login'
import sidebar from './modules/sidebar'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        login,
        sidebar
    },
    strict: process.env.NODE_ENV !== 'production'// 线上环境关掉
})
