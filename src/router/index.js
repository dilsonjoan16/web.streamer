import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/movies',
    name: 'Movies',
    component: () => import('../views/Movies.vue')
  },
  {
    path: '/bestmovies',
    name: 'BestMovies',
    component: () => import('../views/BestMovies.vue')
  },
  {
    path: '/extramovies',
    name: 'ExtraMovies',
    component: () => import('../views/ExtraMovies.vue')
  },
  {
    path: '/singlemovie/:id',
    name: 'Movie',
    component: () => import('../views/Movie.vue')
  },
  {
    path: '/singlemovies/:id',
    name: 'SingleMovies',
    component: () => import('../views/SingleMovies.vue')
  },
  {
    path: '/search/:busqueda',
    name: 'Search',
    component: () => import('../views/Search.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
