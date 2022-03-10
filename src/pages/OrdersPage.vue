<template>
  <section id="orderspage" class="orderspage">
    <Header :title="pageTitle" :icon="false" />
    <OrderCard
      v-for="(order, index) in this.orders"
      :key="index"
      :order="order"
      :orderId="index"
    />
    <NavBar :pageActive="'Orders'" />
  </section>
</template>

<script>
import { ordersitems } from "../config/orders-items.js";
import Header from "../components/organisms/BaseHeader";
import OrderCard from "../components/molecules/OrderCard";
import NavBar from "../components/atoms/NavBar";

export default {
  name: "OrdersPage",
  data() {
    return {
      pageTitle: "Мои Заказы",
    };
  },
  components: {
    NavBar,
    OrderCard,
    Header,
  },
  computed: {
    orders() {
      console.log(this.$store.state.orders);
      return this.$store.state.orders;
    }
  },
  mounted() {
    this.fetchOrders();
  },
  methods: {
    async fetchOrders() {
      this.loading = true;
      await this.$store.dispatch("getOrders");
      
      this.loading = false;
    },
  },
  $orders: ordersitems,
};
</script>

<style>
#orderspage {
  /*padding-top: 80px;*/
  background: #f8f8f8;
  width: 100%;
  height: 100vh;
  padding-top: 60px;
}
</style>
