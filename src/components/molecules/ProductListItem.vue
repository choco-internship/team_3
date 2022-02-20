<template>
  <div class="product_list_item">
    <div class="product_info">
      <p class="product_name">{{product.p_title}}</p>
      <p v-if="product.p_desc" class="product_desc">{{product.p_desc}}</p>
      <p class="product_price">{{ product.p_price }} ₸</p>
    </div>
    <div class="product_img" :class="product.p_img?'':'nodisplay'">
      <img v-if="product.p_img" :src="require('@/assets/img/'+product.p_img)" alt="product image">
    </div>
    <QuantityButton
      :product="product"
      :productId="productId"
      :productTitle="productTitle"
      :productCost="product.p_price"
      :productQty="buttonQty"
      @qtyUpdated="qtyUpdated($event)"
      @countUpdated="countUpdated($event)"
    />
  </div>
</template>

<script>
import QuantityButton from "../atoms/QuantityButton";
export default {
  name: "productListItem",
  components: {QuantityButton},
  props: {
    productId: {
      type: Number
    },
    productTitle: {
      type: String
    },
    product: {
      type: Object
    },
    totalPrice: {
      type: Number
    },
    buttonQty: {
      type: Number
    }
  },
  data () {
    return {
      updatedTotal: 0,
      updatedQty: 0,
    }
  },
  methods: {
    countUpdated(p) {
      this.updatedTotal = this.totalPrice + p
      this.$emit('totalPriceUpdated', this.updatedTotal);
    },
    qtyUpdated(q) {
      this.updatedQty = this.buttonQty + q
      this.$emit('totalQtyUpdated', this.updatedQty);
    }
  }
}
</script>

<style scoped>
.nodisplay {
  display: none !important;
}
/*Product item*/
.product_list_item {
  display: flex;
  text-align: start;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0  16px;
}
.product_info p {
  margin: 0;
  padding: 0;
  margin-bottom: 8px !important;
}
.product_info p:last-child {
  margin-bottom: 0 !important;
}
.product_info {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  font-size: 16px;
  line-height: 16px;
}
.product_info .product_name {
  font-weight: 500;
  color: #303030;
}
.product_desc {
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #707070;
}
.product_info .product_price {
  color: #2997FF;
  font-size: 14px;
  font-weight: normal;
}
.product_img {
  width: 128px;
  height: 90px;
}
.product_img img {
  width: 100%;
  height: 100%;
}
</style>
