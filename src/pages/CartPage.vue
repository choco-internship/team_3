<template>
  <section id="cartpage">
    <div class="rest">
      <div class="textinfo">
        <p class="restname">Mamma Mia</p>
        <p class="restadress">ул. Панфилова 109</p>
      </div>
    </div>

    <div class="divider"></div>

    <h4>Мой заказ</h4>

    <CartCard
      v-for="item in $options.$items"
      :key="item"
      :imgPath="getImgUrl(item.imgPath)"
      :imgAlt="item.imgAlt"
      :orderName="item.orderName"
      :orderCost="item.orderCost"
      @counterUpdate="CounterUpdate($event)"
    />

    <article class="totalpay">
      <h4>Итого</h4>
      <h4>{{addSpaceNum()}}</h4>
    </article>
    <ButtonPay :amount="this.total" />
  </section>
</template>

<script>
import CartCard from "../components/Cart/CartCard.vue";
import ButtonPay from "../components/ButtonPay.vue";
import { cartitems } from "../config/cart-tems.js";

export default {
  name: "CartPage",
  components: {
    CartCard,
    ButtonPay,
  },
  data() {
    return {
      total: 3200,
    };
  },
  methods: {
    getImgUrl: function (imagePath) {
      return require("@/assets/cartImages/" + imagePath + ".png");
    },
    CounterUpdate(counter) {
      this.total = this.total + counter;
    },
    addSpaceNum() {
      let result = this.total.toLocaleString();
      return result;
    },
  },
  $items: cartitems,
};
</script>

<style>
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  overflow-x: hidden;
}
body {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background: #f8f8f8;
}

#cartpage {
  overflow-x: hidden;
  padding-top: 80px;
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
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
}

#cartpage > .rest > .textinfo > .restadress {
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 16px;
  font-family: Roboto;
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
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
}

.orderblock {
  width: 100%;
}

.foodorder {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.foodorder > .foodorder_info > .foodorder_name {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */
  margin-left: 17px;
  margin-bottom: 8px;
}

.foodorder > .foodorder_info > .foodorder_price {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  /* identical to box height, or 114% */
  width: fit-content;
  margin-left: 17px;
  text-align: right;
}

.foodorder > .foodorder_photo {
  margin-right: 16px;
  position: relative;
}

.foodorder > .foodorder_photo > img {
  height: 53px;
}

.foodorder > .foodorder_photo > .foodorder_counter {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  width: 99px;
  height: 35px;
  top: 32px;
  right: -1px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.foodorder > .foodorder_photo > .foodorder_counter > p {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #2997ff;
}
.btn {
  border: none;
  background-color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #2997ff;
}

.foodorder > .foodorder_photo > .foodorder_counter > .count {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #131113;
}

/* Line divider */

.between {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
  height: 25px;
  width: 100vw;
}
.between > .betweenline {
  height: 1px;
  width: 100%;
  margin: 0px 16px;
  background: #ececec;
}

/* Total amount */

.totalpay {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.totalpay h4 {
  width: fit-content;
  padding: 0 16px;
  padding-bottom: 20px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
}

/* Pay Button */
.payButton {
  position: absolute;
  bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.payInterface {
  position: relative;
  height: 48px;
  width: 100%;
  margin: 0 16px;
  background: #2997ff;
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.payInterface > p {
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
}

.payInterface > .payAmount {
  position: absolute;
  right: 15px;
}

.hide {
  display: none;
}
</style>