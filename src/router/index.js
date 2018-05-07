import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import login from '@/components/login'
import index from '@/components/index'
import activityList from '@/components/activityList'
import test from '@/components/test'

export default new Router({
    routes: [
      {//登录页
        path: '/login',
        name: 'login',
        component: login
      },
      {//登录后主页
        path: '/index',
        name: 'index',
        component: index,
        children: [
          {//活动列表页
            path: 'activityList',
            name: 'activityList',
            component: activityList
          },
          {//测试页
            path: 'test',
            name: 'test',
            component: test
          }
        ]
      }
    ]
})