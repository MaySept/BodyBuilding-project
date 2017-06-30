/**
 * Created by zp6077 on 2017/6/26.
 */
import {router} from 'js/base' //引入路由组件

export default new router ({
  routes:[
    {
      path: '/',
      component:resolve => {require(['../view/Chart/chartData.vue'], resolve)}
    },
    {
      path: '/coachManage',
      component:resolve => {require(['../view/Coach/coachManage.vue'], resolve)}
    },
    {
      path: '/memberData',
      component:resolve => {require(['../view/Member/memberData.vue'], resolve)}
    },
    {
      path: '/setting',
      component:resolve => {require(['../view/Setting/setting.vue'], resolve)}
    }
  ]
})
