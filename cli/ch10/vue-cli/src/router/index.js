import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/Home.vue'
import Header from '../components/Header.vue'
// import User from '../components/user/User.vue'
// import UserDetail from '../components/user/UserDetail.vue'
// import UserEdit from '../components/user/UserEdit.vue'
// import UserStart from '../components/user/UserStart.vue'

Vue.use(Router);

const User = resolve => {
  require.ensure(['../components/user/User.vue'], () => {
    resolve(require('../components/user/User.vue'))
  }, 'user')
}

const UserStart = resolve => {
  require.ensure(['../components/user/UserStart.vue'], () => {
    resolve(require('../components/user/UserStart.vue'))
  }, 'user')
}

const UserEdit = resolve => {
  require.ensure(['../components/user/UserEdit.vue'], () => {
    resolve(require('../components/user/UserEdit.vue'))
  }, 'user')
}

const UserDetail = resolve => {
  require.ensure(['../components/user/UserDetail.vue'], () => {
    resolve(require('../components/user/UserDetail.vue'))
  }, 'user')
}

const router = new Router({
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
        {
          path: ':id',
          component: UserDetail,
          beforeEnter: (to, from, next) => {
            console.log('Inside route setup in Index.js');
            next();
          }
        },
        {path: ':id/edit', component: UserEdit, name: 'userEdit'}
      ]
    },
    {path: '/redirect-me', redirect: {name: 'Home'}},
    {path: '*', redirect: '/'}
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
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

router.beforeEach((to, from, next) => {
  console.log('Global beforeEach in Index.js')
  next()
})

export default router
