import {router} from 'js/base' //引入路由组件


export default new router({
  routes: [
    {
      path: '/login',
      component:resolve => {require(['../view/index.vue'], resolve)},
      children: [
        {
          path: 'loginView',
          component:resolve => {require(['../view/loginView.vue'], resolve)}
        },
        {
          path: 'forgetUserView',
          component:resolve => {require(['../view/forgetUserView.vue'], resolve)}
        },
        {
          path: 'showUserView',
          component:resolve => {require(['../view/showUserView.vue'], resolve)}
        },
        {
          path: 'forgetPsdView',
          component:resolve => {require(['../view/forgetPsdView.vue'], resolve)}
        },
        {
          path: 'openMailboxView',
          component:resolve => {require(['../view/openMailboxView.vue'], resolve)}
        },
        {
          path: 'resetPsdView',
          component:resolve => {require(['../view/resetPsdView.vue'], resolve)}
        }
      ]
    }
  ]
})

