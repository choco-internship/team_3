import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MenuPage from '../components/menuPage';
import cartPage from "../components/cartPage";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/myorders',
    name: 'MyOrders',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyOrders.vue')
  },
  {
    path: '/rakhmet',
    name: 'Rakhmet',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Rakhmet.vue')
  },
  {
    path: '/menu',
    name: 'MenuPage',
    component: MenuPage
  },
  {
    path: '/cartPage',
    name: 'cartPage',
    component: cartPage
  }
]

const router = new VueRouter({
  routes
})

export default router
