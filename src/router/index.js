import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LimitConfig from '../views/LimitConfig.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/LimitConfig',
    name: 'LimitConfig',
    component: LimitConfig
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
