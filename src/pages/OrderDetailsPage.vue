<template>
  <section id="orderdetailspage" class="orderdetailspage">
    <OrderDetailsTop
      :restname="`ChocoCafe`"
      :restaddress="`1.2 км • Коктем 3-й микрорайон`"
    />
    <div class="between order">
      <div class="betweenline"></div>
    </div>
    <OrderDetailsStatus 
    :orderStatus="`На кухне`"
    :orderDate="`17.11.2021, 08:44`"
    :orderNumber="`№3161389`"/>
    <div class="divider"></div>
    
    <NavBar :pageActive="'OrdersPage'" />
  </section>
</template>

<script>
import { ordersitems } from "../config/orders-items.js";
import NavBar from "../components/NavBar/NavBar.vue";
import OrderDetailsTop from "../components/OrderDetails/OrderDetailsTop.vue";
import OrderDetailsStatus from "../components/OrderDetails/OrderDetailsStatus.vue";

export default {
  name: "OrdersDetailsPage",
  $orders: ordersitems,
  methods: {
    addSpaceNum(given) {
      let result = given.toLocaleString();
      return result;
    },
  },
  components: {
    NavBar,
    OrderDetailsTop,
    OrderDetailsStatus,
  },
};
</script>

<style scoped>
#orderdetailspage {
  padding-top: 80px;
  background: #f8f8f8;
}

.order {
  margin-top: 0;
  background: white;
}


</style>