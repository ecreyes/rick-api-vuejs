import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/characters',
    name: 'Characters',
    component: () => import(/* webpackChunkName: "characters" */ '../views/Characters.vue')
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: () => import(/* webpackChunkName: "episodes" */ '../views/Episodes.vue')
  },
  {
    path: '/locations',
    name: 'Locations',
    component: () => import(/* webpackChunkName: "locations" */ '../views/Locations.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
