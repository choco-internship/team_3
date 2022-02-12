<template>
  <section id="orderspage" class="orderspage">
    <Header :title="`Мои Заказы`"/>
    <OrderCard
      v-for="(order, index) in $options.$orders"
      :key="index"
      :order="order"
      :orderId="index"
    />
    <NavBar :pageActive="'OrdersPage'" />
  </section>
</template>

<script>
import NavBar from "../components/Base/NavBar.vue";
import Header from "../components/Base/Header.vue";
import OrderCard from "../components/OrderCard.vue";
import { ordersitems } from "../config/orders-items.js";

export default {
  name: "OrdersPage",
  components: {
    NavBar,
    OrderCard,
    Header,
  },
  $orders: ordersitems,
};
</script>

<style>
#orderspage {
  padding-top: 80px;
  background: #f8f8f8;
}
</style>