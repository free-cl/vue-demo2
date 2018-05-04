import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import login from '@/components/login'

export default new Router({
    routes: [
      {//登录页
        path: '/login',
        name: 'login',
        component: login
      }
    ]
})