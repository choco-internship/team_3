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
      registered: false,
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
#orderspage {
  background: #f8f8f8;
  width: 100%;
  height: calc(100vh - 60px);
  padding-top: 60px;
}
</style>
