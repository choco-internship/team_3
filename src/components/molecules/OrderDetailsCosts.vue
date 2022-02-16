<template>
  <div class="orderdetailspage__foods">
    <span class="orderdetailspage__info">Позиции в заказе</span>
    <div
      v-for="(food, index) in order.orderDetails"
      :key="index"
      class="orderdetailspage_order"
    >
      <span>{{ food.orderFood }} </span>
      <span style="padding-right: 16px"
        >{{ addSpaceNum(food.orderFoodCost) }} тг
      </span>
    </div>
    <div class="line">
      <div class="li"></div>
    </div>
    <div class="orderdetailspage_order">
      <span style="padding-top: 24px; font-weight: bold">Итого</span>
      <span style="padding-right: 16px; padding-top: 24px; font-weight: bold"
        >{{ addSpaceNum(order.orderCost) }} тг</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderDetailsCosts",
  props: { order: { type: [Array, Object] } },
  methods: {
    addSpaceNum(given) {
      let result = given.toLocaleString();
      return result;
    },
  },
};
</script>

<style scoped>
.orderdetailspage__foods {
  background: white;
  padding: 16px 0;
  padding-left: 16px;
}

.orderdetailspage_order {
  display: flex;
  justify-content: space-between;
}

.orderdetailspage_order > span {
  padding-top: 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #000000;
}

.orderdetailspage__foods > .line {
  height: 1px;
  width: 100vw;
  display: flex;
  margin-top: 8px;
}
.orderdetailspage__foods > .line > .li {
  width: 100%;
  margin: 0 16px;
  height: 1px;
  background: #ececec;
}
</style>