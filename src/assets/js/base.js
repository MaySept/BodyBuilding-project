import Vue from 'vue'  //引入vue
import Common from './Common' //引入common定义一些全局方法
import Mint from 'mint-ui'; //引入Mint库
import VueI18n from 'vue-i18n'//引入国际化库
import VueLazyload from 'vue-lazyload'//引入延迟加载库
import router from 'vue-router' //引入路由组件
Vue.use(router)
Vue.use(VueLazyload)
Vue.use(Mint)
Vue.use(VueI18n)
import mock from 'js/mock/index' //引入mock组件
import cn from '../locales/zh-CN.json' //中文配置文件
import en from '../locales/en-US.json'//英文配置文件
const messages = {
    'zh-CN': cn,
    'en-US': en
}
const i18n = new VueI18n({
    locale: 'zh-CN',
    messages
})

// 导入全局css,scss路径在webpack.base.config.js配置了别名
require('scss/common.scss')
import 'mint-ui/lib/style.css';
module.exports = {
    Vue, Common, i18n,router
}
