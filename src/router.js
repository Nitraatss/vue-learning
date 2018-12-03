import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import Users from '@/pages/users.vue'
import UserUpdate from '@/pages/user-update.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/update/:id',
      component: UserUpdate
    }
  ]
})
