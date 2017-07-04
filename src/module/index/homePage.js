/**
 * Created by zp6077 on 2017/6/26.
 */
/**
 * Created by zp6077 on 2017/6/26.
 */
import { Vue, Common, i18n} from 'js/base'
import  router from './router/homeRouter.js'
import store from '../../vuex/store'
import app from './App'
import ElementUI from 'element-ui'
import echarts from 'echarts'
import 'element-ui/lib/theme-default/index.css'
import '../../assets/scss/base/_necessary.scss'

require("./scss/homePage.scss")
Vue.prototype.$Common = Common

Vue.use(ElementUI)
Vue.prototype.$echarts = echarts
new Vue({
  el: '#homePage',
  store,
  router,
  template: '<app></app>',
  components: {
    'app': app
  }
})

// router.push("/chartData")
