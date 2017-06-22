import {router} from 'js/base' //引入路由组件


export default new router({
  routes: [
    {
      path: '/',
      name: 'login',
      component:resolve => {require(['../view/index.vue'], resolve)}
    }
  ]
})

