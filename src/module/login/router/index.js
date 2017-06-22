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
        }
      ]
    }
  ]
})

