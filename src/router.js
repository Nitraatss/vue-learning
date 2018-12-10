import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/pages/index.vue')
    },
    {
      path: '/users',
      component: () => import('@/pages/users.vue')
    },
    {
      path: '/update/:id',
      component: () => import('@/pages/user-update.vue')
    },
    {
      path: '/add',
      component: () => import('@/pages/user-add.vue')
    }
  ]
})
