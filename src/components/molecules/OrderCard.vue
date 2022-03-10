<template>
  <div class="orderspage__order" @click="checkOrderDetails()">
    <div class="orderspage__order-left">
      <h3 class="orderspage__order-rest">{{ order.restaurant.name }}</h3>
      <span class="orderspage__order-price">{{ this.addSpaceNum() }} тг</span>
      <span class="orderspage__order-status">
        Стасус -
        <span :style="`color: ${this.whichStatus()}`">
          {{ this.status }}
        </span>
      </span>
    </div>

    <span class="orderspage__order-date"> {{ this.findDate() }} </span>
    <svg
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
      status: "",
    };
  },
  methods: {
    addSpaceNum() {
      let result = this.order.total.toLocaleString();
      return result;
    },
    whichStatus() {
      let color;
      if (this.order.order_status === 0) {
        this.status = "В обработке";
        color = "#2997FF";
      } else if (this.order.order_status === 2) {
        this.status = "Готов";
        color = "#A3CFA3";
      } else if (this.order.order_status === 1) {
        this.status = "На кухне";
        color = "#E68D49";
      } else {
        this.status = "Завершен";
        color = "";
        }
      return color;
    },
    checkOrderDetails() {
      this.$router.push({
        name: `${this.page}`,
        params: { orderID: this.orderId, ordernumber: this.order.id },
      });
    },
    findDate(){
      let givenDate = this.order.created_at;
      let calendarDate = givenDate.slice(0,10);
      let timeDate = givenDate.slice(11,16);
      return calendarDate + ', ' + timeDate;
    }
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
  align-items: flex-start;
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
