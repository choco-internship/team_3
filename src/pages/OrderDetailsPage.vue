<template>
  <section id="orderdetailspage" class="orderdetailspage">
    <Header :title="pageTitle" :icon="true" />
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
    <NavBar :pageActive="'Orders'" />
  </section>
</template>

<script>
import { ordersitems } from "../config/orders-items.js";
import Header from "../components/organisms/BaseHeader";
import OrderDetailsTop from "../components/molecules/OrderDetailsTop";
import OrderDetailsStatus from "../components/molecules/OrderDetailsStatus";
import OrderDetailsCosts from "../components/molecules/OrderDetailsCosts";
import NavBar from "../components/atoms/NavBar";

export default {
  name: "OrdersDetailsPage",
  data() {
    return {
      pageTitle: "Детали заказа",
    };
  },
  $orders: ordersitems,
  methods: {
    addSpaceNum(given) {
      let result = given.toLocaleString();
      return result;
    },
  },
  components: {
    NavBar,
    OrderDetailsCosts,
    OrderDetailsStatus,
    OrderDetailsTop,
    Header,
  },
  props: {
    orderID: {
      type: [Number, String],
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
  padding-top: 60px;
  background: #f8f8f8;
  /* width: 100%; */
  text-align: start;
}
.order {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100vw;
  background: white;
}

</style>
