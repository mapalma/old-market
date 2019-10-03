import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Intro from './components/Intro.vue'
import Shop from './views/Shop.vue'
import BeerListHome from './components/BeerListHome.vue'
import Beer from './views/BeerView.vue'
import EventsView from './views/EventsView.vue'
import Checkout from './views/CheckoutView.vue'
import Error from './components/Error.vue'

import store from './store.js';

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/beer/:id',
      name: 'beer',
      props: true,
      component: Beer
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/shop',
      name: 'shop',
      props: true,
      component: Shop
    },
    {
      path:'/events',
      name: 'events',
      component: EventsView
    },
    {
      path:'/checkout',
      name: 'checkout',
      component: Checkout
    },
    {
      path:'*',
      name: '404',
      component: Error
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

// add the beforeEach hook
// router.beforeEach((to, from, next) => {
//   store.dispatch('overviewToggleAction')
//   next();
// });

export default router
