<template>
  <div class="product_list_item">
    <div class="product_info">
      <p class="product_name">{{name}}</p>
      <p v-if="desc" class="product_desc">{{desc}}</p>
      <p class="product_price">{{ price }}</p>
    </div>
    <div class="product_img" :class="img?'':'nodisplay'">
      <img :src="img" alt="product image">
    </div>
    <QuantityButton />
  </div>
</template>

<script>
import QuantityButton from "../atoms/QuantityButton";
export default {
  name: "productListItem",
  components: {QuantityButton},
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String
    },
    desc: {
      type: String
    },
    img: {
      type: String
    }
  },
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
