import Vue from "vue";
import VueRouter from "vue-router";
import CartPage from "./pages/CartPage.vue";
import OrdersPage from "./pages/OrdersPage.vue";
import OrderDetailsPage from "./pages/OrderDetailsPage.vue";
import MainPage from "./pages/MainPage.vue";

import "./assets/css/style.css";

Vue.use(VueRouter);
Vue.config.productionTip = false;

const MainApp = {
  name: "MainApp",
  template: "<router-view></router-view>",
};

const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "",
      name: "MainPage",
      component: MainPage,
    },
    {
      name: "CartPage",
      path: "/cart",
      component: CartPage,
      props: true,
    },
    {
      name: "OrdersPage",
      path: "/orders",
      component: OrdersPage,
      props: true,
    },
    {
      name: "OrderDetailsPage",
      path: "/orders/:ordernumber/:orderID",
      component: OrderDetailsPage,
      props: true,
    }
  ],
});

new Vue({
  router,
  render: (h) => h(MainApp),
}).$mount("#menupage");

