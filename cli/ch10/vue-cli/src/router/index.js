import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import User from '../components/user/User.vue'
import UserDetail from '../components/user/UserDetail.vue'
import UserEdit from '../components/user/UserEdit.vue'
import UserStart from '../components/user/UserStart.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/user/:id',
      name: 'User',
      component: User
    },
    {
      path: '/detail',
      name: 'UserDetail',
      component: UserDetail
    },
    {
      path: '/edit',
      name: 'UserEdit',
      component: UserEdit
    },
    {
      path: '/start',
      name: 'UserStart',
      component: UserStart
    }
  ]
})
