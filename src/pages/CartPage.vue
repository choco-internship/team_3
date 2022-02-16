<template>
  <section id="cartpage">
    <Header :title="`Корзина`" :icon="true"/>
    <div class="containerCartPage">
      <OrderDetailsTop :restname="`Mamma Mia`" :restaddress="`ул. Панфилова 109`"/>

      <div class="divider"></div>

      <h4>Мой заказ</h4>

      <CartCard
          v-for="(item, index) in $options.$items"
          :key="index"
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
    </div>
  </section>
</template>

<script>
import { cartitems } from "../config/cart-tems.js";
import ButtonPay from "../components/molecules/ButtonPay";
import CartCard from "../components/molecules/CartCard";
import OrderDetailsTop from "../components/molecules/OrderDetailsTop";
import Header from "../components/organisms/BaseHeader";
export default {
  name: "CartPage",
  components: {
    Header,
    OrderDetailsTop,
    CartCard,
    ButtonPay
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

<style scoped>
.divider{
  margin-top: 16px;
}
#cartpage {
  padding-top: 60px;
  height: calc(100vh - 60px);
  position: relative;
  overflow-x: hidden;
  width: 100%;
  text-align: start;

}
.containerCartPage {
  background: #ffffff;
}
#cartpage h4 {
  margin: 0;
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