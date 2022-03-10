<template>
  <OrdersPage v-if="this.registered" />
  <OrderRegistrationPage
    v-else-if="!this.registered"
    @changeRegistration="change($event)"
  />
</template>

<script>
import OrdersPage from "../pages/OrdersPage";
import OrderRegistrationPage from "../pages/OrderRegistrationPage";
export default {
  name: "MyOrders",
  data() {
    return {
      registered: this.$store.state.login,
      pageTitle: "Мои Заказы",
    };
  },
  methods: {
    change(given) {
      this.registered = given;
    },
  },
  components: { OrderRegistrationPage, OrdersPage },
};
</script>

<style scoped>
html {
  overflow-y: visible;
}
#orderspage {
  background: #f8f8f8;
  width: 100%;
  height: 100%;
  padding-top: 60px;
  padding-bottom: 80px;
}
</style>
