<template>
  <section id="orderspage" class="orderspage">
    <OrderCard
      v-for="(order, index) in $options.$orders"
      :key="index"
      :restName="order.restName"
      :orderCost="order.orderCost"
      :orderDate="order.orderDate"
      :orderStatus="order.orderStatus"
    />
    <NavBar :pageActive="'OrdersPage'" />
  </section>
</template>

<script>
import NavBar from "../components/NavBar/NavBar.vue";
import OrderCard from "../components/OrderCard.vue";
import { ordersitems } from "../config/orders-items.js";

export default {
  name: "OrdersPage",
  components: {
    NavBar,
    OrderCard,
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