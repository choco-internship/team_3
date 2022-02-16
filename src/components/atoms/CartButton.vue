<template>
  <button class="cart_button" :class="totalPrice===0&&productQty===0 ? 'blockDisplay' : ''" @click="$router.push('/cartPage')">
    <p v-if="productQty" class="button_quantity">{{ productQty }} шт.</p>
    <p class="button_text">{{ buttonText }}</p>
    <p v-if="totalPrice" class="all_price">{{ totalPrice }} ₸</p>
  </button>
</template>

<script>
export default {
  name: "CartButton",
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
  margin: 0 16px 20px;
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
