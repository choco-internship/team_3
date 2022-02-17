import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MenuPage from '../pages/MenuPage';
import cartPage from "../pages/CartPage";
import menuListPage from "../pages/MenuListPage";
import Registration from "../pages/Registration";
import OrderDetailsPage from "../pages/OrderDetailsPage";
import MyOrders from "../views/MyOrders";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  },
  {
    name: "MyOrders",
    path: "/orders",
    component: MyOrders,
    props: true,
  },
  {
    name: "OrderDetailsPage",
    path: "/orders/:ordernumber/:orderID",
    component: OrderDetailsPage,
    props: true,
  }
]

const router = new VueRouter({
  routes
})

export default router
