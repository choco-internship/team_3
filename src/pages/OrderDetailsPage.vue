<template>
  <section id="orderdetailspage" class="orderdetailspage">
    <Header :title="`Детали заказа`" :icon="true"/>
    <OrderDetailsTop
      :restname="$options.$orders[this.orderID].restName"
      :restaddress="$options.$orders[this.orderID].orderAddress"
    />
    <div class="between order">
      <div class="betweenline"></div>
    </div>
    <OrderDetailsStatus
      :orderStatus="$options.$orders[this.orderID].orderStatus"
      :orderDate="$options.$orders[this.orderID].orderDate"
      :orderNumber="$options.$orders[this.orderID].orderNumber"
    />
    <div class="divider"></div>
    <OrderDetailsCosts :order="$options.$orders[this.orderID]" />
    <NavBar :pageActive="'OrdersPage'" />
  </section>
</template>

<script>
import { ordersitems } from "../config/orders-items.js";
import Header from "../components/Base/Header.vue";
import NavBar from "../components/Base/NavBar.vue";
import OrderDetailsTop from "../components/OrderDetails/OrderDetailsTop.vue";
import OrderDetailsStatus from "../components/OrderDetails/OrderDetailsStatus.vue";
import OrderDetailsCosts from "../components/OrderDetails/OrderDetailsCosts.vue";

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
    Header,
    OrderDetailsTop,
    OrderDetailsStatus,
    OrderDetailsCosts,
  },
  props: {
    orderID: {
      type: Number,
      required: true,
    },
    ordernumber: {
      type: String,
    },
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