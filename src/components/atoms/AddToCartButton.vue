<template>
  <button class="cart_button" v-if="productQty" @click="$router.push('/cartPage')">
    <p class="button_quantity">{{ productQty }} шт.</p>
    <p class="button_text">{{ buttonText }}</p>
    <p class="all_price">{{ totalPrice }} ₸</p>
  </button>
</template>

<script>
export default {
  name: "AddToCartButton",
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    productQty: {
      type: Number
    },
    totalPrice: {
      type: Number
    }
  },
}
</script>

<style scoped>
/*Cart button*/
.blockDisplay {
  display: block !important;
}
.cart_button {
  position: fixed;
  bottom: 0;
  border: none;
  background: #2997FF;
  border-radius: 12px;
  width: 92%;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 16px;
  margin: 0 16px 24px;
}
.button_text {
  text-align: center;
}
.button_quantity {
  margin-left: 16px;
  opacity: 0.5;
}
.all_price {
  opacity: 0.5;
  margin-right: 16px;
}
</style>
