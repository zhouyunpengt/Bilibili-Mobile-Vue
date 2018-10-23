import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index.vue'
import Home from '@/pages/home/home.vue'

import '@/assets/reset.scss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [{
        path: '/',
        name: 'home',
        component: Home
      }]
    }
  ]
})
