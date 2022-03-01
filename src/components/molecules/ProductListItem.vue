<template>
  <div class="product_list_item">
    <div class="product_info">
      <p class="product_name">{{product.product_name}}</p>
      <p v-if="product.description" class="product_desc">{{product.description}}</p>
      <p class="product_price">{{ product.price }} ₸</p>
    </div>
    <div class="product_img">
      <img v-if="product.image" :src="product.image" alt="product image">
      <QuantityButton
          :product="product"
          :productQty="buttonQty"
          @qtyUpdated="qtyUpdated($event)"
          @countUpdated="countUpdated($event)"
      />
    </div>
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
  font-size: 12px;
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
  position: relative;
  height: 90px;
}
.product_img img {
  width: 100%;
  height: 100%;
  border-radius: 4px;
}
</style>
