<template>
  <div class="orderdetailspage__status">
    <span class="orderdetailspage__info">Статус заказа</span>
    <span
      class="orderdetailspage__res"
      :style="`color: ${this.whichStatus()}`"
      >{{ this.orderStatus }}</span
    >
    <span class="orderdetailspage__info">Дата</span>
    <span class="orderdetailspage__res">{{ this.orderDate }}</span>
    <span class="orderdetailspage__info">Номер заказа</span>
    <span class="orderdetailspage__res">{{ this.orderNumber }}</span>
  </div>
</template>

<script>
export default {
  name: "OrderDetailsStatus",
  props: {
    orderStatus: {
      type: String,
      required: true,
    },
    orderDate: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: String,
      required: true,
    },
  },
  methods: {
    whichStatus() {
      let color;
      if (this.orderStatus === "В обработке") {
        color = "#2997FF";
      } else if (this.orderStatus === "Готов") {
        color = "#A3CFA3";
      } else if (this.orderStatus === "На кухне") {
        color = "#E68D49";
      } else color = "";
      return color;
    },
  },
};
</script>

<style>
.orderdetailspage__status {
  display: flex;
  flex-direction: column;
  background: white;
  padding-left: 16px;
  width: 100%;

}
.orderdetailspage__info {
  padding-bottom: 8px;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  color: #8f8f8f;
}
.orderdetailspage__res {
  padding-bottom: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
}
</style>