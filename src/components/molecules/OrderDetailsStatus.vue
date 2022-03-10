<template>
  <div class="orderdetailspage__status">
    <span class="orderdetailspage__info">Статус заказа</span>
    <span
      class="orderdetailspage__res"
      :style="`color: ${this.whichStatus()}`"
      >{{ this.status }}</span
    >
    <span class="orderdetailspage__info">Дата</span>
    <span class="orderdetailspage__res">{{ this.findDate()}}</span>
    <span class="orderdetailspage__info">Номер заказа</span>
    <span class="orderdetailspage__res">{{ this.orderNumber }}</span>
  </div>
</template>

<script>
export default {
  name: "OrderDetailsStatus",
  data() {
    return {
      status: "",
    }
  },
  props: {
    orderStatus: {
      type: Number,
      required: true,
    },
    orderDate: {
      type: String,
      required: true,
    },
    orderNumber: {
      type: Number,
      required: true,
    },
  },
  methods: {
    whichStatus() {
      let color;
      if (this.orderStatus === 0) {
        this.status = "В обработке";
        color = "#2997FF";
      } else if (this.orderStatus === 2) {
        this.status = "Готов";
        color = "#A3CFA3";
      } else if (this.orderStatus === 1) {
        this.status = "На кухне";
        color = "#E68D49";
      } else {
        this.status = "Завершен";
        color = "";
        }
      return color;
    },
    findDate(){
      let givenDate = this.orderDate;
      let calendarDate = givenDate.slice(0,10);
      let timeDate = givenDate.slice(11,16);
      return calendarDate + ', ' + timeDate;
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