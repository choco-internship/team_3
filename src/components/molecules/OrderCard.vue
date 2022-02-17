<template>
  <div class="orderspage__order">
    <div class="orderspage__order-left">
      <h3 class="orderspage__order-rest">{{ order.restName }}</h3>
      <span class="orderspage__order-price">{{ this.addSpaceNum() }} тг</span>
      <span class="orderspage__order-status">
        Стасус -
        <span :style="`color: ${this.whichStatus()}`">
          {{ order.orderStatus }}
        </span>
      </span>
    </div>

    <span class="orderspage__order-date"> {{ order.orderDate }} </span>
    <svg
      @click="checkOrderDetails()"
      class="orderspage__order-details"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.99997 6L8.58997 7.41L13.17 12L8.58997 16.59L9.99997 18L16 12L9.99997 6Z"
        fill="#8F8F8F"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: "OrderCard",
  data() {
    return {
      page: "OrderDetailsPage",
    };
  },
  methods: {
    addSpaceNum() {
      let result = this.order.orderCost.toLocaleString();
      return result;
    },
    whichStatus() {
      let color;
      if (this.order.orderStatus === "В обработке") {
        color = "#2997FF";
      } else if (this.order.orderStatus === "Готов") {
        color = "#A3CFA3";
      } else if (this.order.orderStatus === "На кухне") {
        color = "#E68D49";
      } else color = "";
      return color;
    },
    checkOrderDetails() {
      this.$router.push({
        name: `${this.page}`,
        params: { orderID: this.orderId, ordernumber: this.order.orderNumber.slice(1,this.order.orderNumber.length) },
      });
    },
  },
  props: {
    order: {
      type: [Array, Object],
      required: true,
    },
    orderId: { type: Number },
  },
};
</script>

<style>
.orderspage__order {
  position: relative;
  padding: 16px 0;
  padding-left: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: white;
  margin-top: 20px;
  height: 100px;
  /*width: 100%;*/
  border-top: 1px solid #ececec;
  border-bottom: 1px solid #ececec;
}
.orderspage__order-rest {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  margin: 0;
  padding: 0;
}

.orderspage__order-left {
  display: flex;
  flex-direction: column;
  text-align: start;
}

.orderspage__order-date,
.orderspage__order-price,
.orderspage__order-status {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  color: #8f8f8f;
}

.orderspage__order-date {
  text-align: right;
  padding-right: 52px;
}
.orderspage__order-price,
.orderspage__order-status {
  padding-top: 8px;
}

.orderspage__order-details {
  position: absolute;
  top: 44px;
  right: 16px;
}
</style>