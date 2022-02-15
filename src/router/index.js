import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MenuPage from '../pages/MenuPage';
import cartPage from "../pages/CartPage";
import menuListPage from "../pages/MenuListPage";
import Registration from "../pages/Registration";
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
    path: '/menu/:id',
    name: 'MenuPage',
    component: MenuPage
  },
  {
    path: '/cartPage',
    name: 'cartPage',
    component: cartPage
  },
  {
    path: '/menuList/:id',
    name: 'menuListPage',
    component: menuListPage
  },
  {
    path: '/reg',
    name: 'Registration',
    component: Registration
  }
]

const router = new VueRouter({
  routes
})

export default router
