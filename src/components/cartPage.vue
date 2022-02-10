<template>
  <div class="cartPage">
    <Header :title="this.pageTitle" :icon="require('../assets/img/arrow_back.svg')" />
    <section id="menupage">
      <div class="rest">
        <div class="textinfo">
          <p class="restname">Mamma Mia</p>
          <p class="restadress">ул. Панфилова 109</p>
        </div>
      </div>

      <div class="divider"></div>

      <h4>Мой заказ</h4>

      <div class="foodorder">
        <div class="foodorder_info">
          <p class="foodorder_name">Пицца Маргарита</p>
          <p class="foodorder_price">1 600 тг</p>
        </div>
        <div class="foodorder_photo">
          <img src="../assets/img/food1.png" alt="Pizza Margarita" />
          <div class="foodorder_counter">
            <p>-</p>
            <p class="count">1</p>
            <p>+</p>
          </div>
        </div>
      </div>

      <div class="between">
        <div class="betweenline"></div>
      </div>

      <div class="foodorder">
        <div class="foodorder_info">
          <p class="foodorder_name">Пицца Пепперони</p>
          <p class="foodorder_price">1 600 тг</p>
        </div>
        <div class="foodorder_photo">
          <img src="../assets/img/food2.png" alt="Pizza Pepperoni" />
          <div class="foodorder_counter">
            <p>-</p>
            <p class="count">1</p>
            <p>+</p>
          </div>
        </div>
      </div>

      <div class="between">
        <div class="betweenline"></div>
      </div>

      <article class="totalpay">
        <h4>Итого</h4>
        <h4>3 200</h4>
      </article>
    </section>
    <div class="payButton">
      <div class="payInterface">
        <p>Оплатить</p>
        <p class="payAmount">3 200 ₸</p>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "cartPage",
  data() {
    return {
      pageTitle: "Корзина",
    }
  },
  components: {Header}
}
</script>

<style scoped>
.cartPage {
  position: relative;
  height: 85vh;
  padding-bottom: 100px;
}
header {
  height: 80px;
  display: flex;
  flex-direction: row;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  /* margin-bottom: 20px; */
  position: relative;
  z-index: 10;
}

header > svg {
  margin-top: 44px;
  margin-left: 20px;
}

header > p {
  margin-top: 40px;
  margin-left: 36px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  color: #131113;
}

#menupage {
  overflow-x: hidden;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}

#menupage > .rest {
  height: 80px;
  width: 100%;
}

#menupage > .rest > .textinfo > .restname {
  padding-top: 20px;
  padding-left: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
}

#menupage > .rest > .textinfo > .restadress {
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

.foodorder > .foodorder_photo > .foodorder_counter > .count {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #131113;
}

/* Line divider */

section > .between {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 14px;
  height: 25px;
  width: 100vw;
}

section > .between > .betweenline {
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
  bottom: 50px;
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
</style>