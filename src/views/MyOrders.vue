<template>
  <div class="myOrders">
    <OrdersPage />
  </div>
</template>

<script>
import OrdersPage from "../pages/OrdersPage";
export default {
  name: "MyOrders",
  components: {OrdersPage}
}
</script>

<style scoped>
.myOrders {
  /*height: 100vh;*/
  width: 100%;
  padding-bottom: 60px;
}
</style>