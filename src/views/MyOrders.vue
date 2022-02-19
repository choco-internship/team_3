<template>
  <div id="orderspage" class="orderspage">
    <Header :title="pageTitle" :icon="false" />
    <OrderCard
        v-for="(order, index) in $options.$orders"
        :key="index"
        :order="order"
        :orderId="index"
    />
    <NavBar :pageActive = "'Orders'"/>
  </div>
</template>

<script>

import { ordersitems } from "../config/orders-items.js";
import NavBar from "../components/atoms/NavBar";
import OrderCard from "../components/molecules/OrderCard";
import Header from "../components/organisms/BaseHeader";
export default {
  name: "MyOrders",
  data() {
    return {
      pageTitle: "Мои Заказы"
    }
  },
  components: {Header, OrderCard, NavBar},
  $orders: ordersitems,
}
</script>

<style scoped>
#orderspage {
  /*padding-top: 80px;*/
  background: #f8f8f8;
  width: 100%;
  height: calc(100vh - 60px);
  padding-top: 60px;
}
</style>