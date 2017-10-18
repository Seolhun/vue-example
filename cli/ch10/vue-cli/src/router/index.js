import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Header from '../components/Header.vue'
import User from '../components/user/User.vue'
import UserDetail from '../components/user/UserDetail.vue'
import UserEdit from '../components/user/UserEdit.vue'
import UserStart from '../components/user/UserStart.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '',
      name: 'Home',
      components: {
        default: Home,
        'header-top': Header
      }
    },
    {
      path: '/user',
      name: 'User',
      components: {
        default: User,
        'header-bottom': Header
      },
      children: [
        {path: '', component: UserStart},
        {path: ':id', component: UserDetail, beforeEnter: (to, from, next) => {
          console.log('Inside route setup');
          next();
        }},
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
      ]
    },
    {path: '/redirect-me', redirect: {name: 'Home'}},
    {path: '*', redirect: '/'}
  ],
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        selector: to.hash
      }
    }
    return {x: 0, y: 700};
  }
})
