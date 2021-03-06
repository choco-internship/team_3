import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MenuPage from '../pages/MenuPage';
import cartPage from "../pages/CartPage";
import menuListPage from "../pages/MenuListPage";
import Registration from "../pages/Registration";
import OrderDetailsPage from "../pages/OrderDetailsPage";
import MyOrders from "../views/MyOrders";
import Login from "../pages/Login";
import PaymentPage from "../pages/PaymentPage";
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
    component: () => import('../views/Rakhmet.vue')
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
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/payment',
    name: 'PaymentPage',
    component: PaymentPage
  },
  {
    name: "Orders",
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
  mode: "history",
  routes
})

export default router
