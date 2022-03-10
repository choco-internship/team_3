<template>
  <div class="orderdetailspage__foods">
    <span class="orderdetailspage__info">Позиции в заказе</span>
    <div
      v-for="(details, index) in this.order.order_details"
      :key="index"
      class="orderdetailspage_order"
    >
      <span>{{details.quantity}} x {{product[index].product_name }} </span>
      <span style="padding-right: 16px"
        >{{addSpaceNum(product[index].price * details.quantity)}} тг
      </span>
    </div>
    <div class="line">
      <div class="li"></div>
    </div>
    <div class="orderdetailspage_order">
      <span style="padding-top: 24px; font-weight: bold">Итого</span>
      <span style="padding-right: 16px; padding-top: 24px; font-weight: bold"
        >{{ addSpaceNum(this.order.total) }} тг</span
      >
    </div>
  </div>
</template>

<script>

export default {
  name: "OrderDetailsCosts",
  props: { order: { type: [Array, Object] } },
  data() {
    return {
      product: [],
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    addSpaceNum(given) {
      let result = given.toLocaleString();
      return result;
    },
    async fetchProduct() {
      try {
        const { data } = await this.$store.dispatch("getProduct",
          this.order.restaurant_id
        );

        const allProducts = [];
        data.product_categories.forEach((item) =>
          allProducts.push(...item.products)
        );
        
        for (let j = 0; j < this.order.order_details.length; j++) {
          this.check = allProducts.filter(
            (item) => item.product_id === this.order.order_details[j].product_id
          );
          for (let i = 0; i < this.check.length; i++) {
            this.product.push(this.check[i]);
          }
        }
      } catch (error) {
        console.log("ERROR", error);
      }
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
  display: flex;
  margin-top: 8px;
}
.orderdetailspage__foods > .line > .li {
  width: 100%;
  margin-right: 16px;
  height: 1px;
  background: #ececec;
}
</style>
