<template>
  <section id="cartpage">
    <Header :title="`Корзина`" :icon="true" />
    <OrderDetailsTop
      :restname=restName
      :restaddress=restAdress
    />

    <div class="divider"></div>

    <h4>Мой заказ</h4>

    <CartCard
      v-for="(item, index) in cart"
      :key="index"
      :product="item.p"
      :counter="item.c"
    />

    <article class="totalpay">
      <h4>Итого</h4>
      <h4>{{ cartTotalPrice }}</h4>
    </article>
    <ButtonPay :amount="cartTotalPrice" />
  </section>
</template>

<script>
import OrderDetailsTop from "../components/molecules/OrderDetailsTop.vue";
import CartCard from "../components/molecules/CartCard.vue";
import ButtonPay from "../components/molecules/ButtonPay.vue";
import Header from "../components/organisms/BaseHeader.vue";

export default {
  name: "CartPage",
  components: {
    Header,
    CartCard,
    ButtonPay,
    OrderDetailsTop,
  },
  computed: {
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    cart() {
      return this.$store.state.cart;
    },
    restName() {
      return this.$store.getters.cartRestName;
    },
    restAdress() {
      return this.$store.getters.cartRestAdress;
    },
  },
};
</script>

<style scoped>
.divider {
  margin-top: 16px;
}
</style>
<style>
#cartpage {
  text-align: start;
  overflow-x: hidden;
  padding-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}

#cartpage > .rest {
  height: 80px;
  width: 100%;
}

#cartpage > .rest > .textinfo > .restname {
  padding-top: 20px;
  padding-left: 16px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
}

#cartpage > .rest > .textinfo > .restadress {
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 114%;
  color: #8f8f8f;
}

.divider {
  height: 8px;
  width: 100%;
  background: #f8f8f8;
}

/* Order part */

h4 {
  width: 100%;
  padding: 16px 0;
  padding-left: 17px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
}


/* Total amount */

.totalpay {
  padding-top: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.totalpay h4 {
  width: fit-content;
  padding: 0 16px;
  padding-bottom: 20px;
  font-style: normal;
  font-weight: bold;
}

.hide {
  display: none;
}
</style>
