<template>
  <div>
    <Header :title="products[$route.params.id-1].rest_name" :icon="require('../assets/img/arrow_back.svg')"/>
    <div class="menuPage">
      <section class="slider">
        <div class="slider-container">
          <div class="slider-item">
            <img src="../assets/img/MammaMia.png" alt="">
          </div>
          <div class="slider-item">
            <img src="../assets/img/MammaMia.png" alt="">
          </div>
          <div class="slider-item">
            <img src="../assets/img/MammaMia.png" alt="">
          </div>
          <div class="slider_info">
            1/28
          </div>
        </div>
      </section>
      <p class="address">{{ products[$route.params.id-1].rest_address }}</p>
      <nav>
        <router-link to="/menuList" class="burger_menu">
          <img src="../assets/img/burger_menu.svg" alt="">
        </router-link>
        <ul class="menu">
          <li class="menu_item checked">Пицца</li>
          <li class="menu_item">Напитки</li>
          <li class="menu_item">Салаты</li>
          <li class="menu_item">Супы</li>
          <li class="menu_item">Паста</li>
          <li class="menu_item">Горячее</li>
          <li class="menu_item">Кофе</li>
          <li class="menu_item">Чай</li>
          <li class="menu_item">Десерты</li>
        </ul>
      </nav>
        <div v-for="(product,idx) in products[$route.params.id-1].rest_menu" :key="idx">
        <p class="title_products">
          {{product.title}}
        </p>
        <div class="product_list" v-for="(p,i) in product.productList" :key="i">
          <div>
            <ProductListItem
                :name="p.p_title"
                :price="p.p_price"
                :desc="p.p_desc"
                :img="p.p_img"
                :product_name="p.p_title"/>
            <div class="divider"></div>
          </div>
        </div>
      </div>
      <button class="cart_button" @click="$router.push('/cartPage')">
        <p class="button_quantity">1 шт.</p>
        <p class="button_text">Корзина</p>
        <p class="all_price">1 600 ₸</p>
      </button>
    </div>
  </div>
</template>

<script>
import Header from "./Header";
import ProductListItem from "./productListItem";
import {restaraunts} from "../config/mock";
export default {
  name: "menuPage",
  data() {
    return {
      pageTitle: "Mamma mia",
      products: restaraunts,
    }
  },
  components: {
    ProductListItem,
    Header
  }
}
</script>

<style scoped>
.menuPage {
  padding-bottom: 50px;
}

/*Slider*/
.slider {
  width: 100%;
  height: 172px;
  position: relative;
}
.slider-container {
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
}
.slider-container::-webkit-scrollbar {
  display: none;
}
.slider-item {
  display: inline-block;
  position:relative;
  background: #8F8F8F;
  width: 100vw;
  height: 172px;
}
.slider-item img {
  width: 100%;
  height: 172px;
}
.slider_info {
  background: #FFFFFF;
  opacity: 0.8;
  border-radius: 4px;
  position: absolute;
  bottom: 16px;
  left: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: normal;
  font-size: 12px;
  line-height: 18px;
  width: 47px;
  height: 21px;
}
.address {
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #8F8F8F;
  margin-left: 16px;
  text-align: start;
}

/*Menu tab*/
nav {
  display: flex;
  align-items: center;
  padding-left: 16px;
}
.burger_menu {
  background: transparent;
  border: none;
  padding: 0;
  width: 24px;
  height: 24px;
}
.burger_menu img {
  width: 24px;
  height: 24px;
}
.menu {
  margin-left: 16px;
  padding-left: 0;
  list-style: none;
  display: flex;
  font-size: 14px;
  line-height: 16px;
  color: #8F8F8F;
  overflow-x: auto;
  width: 100%;
}
.menu::-webkit-scrollbar {
  display: none;
}
.menu_item {
  padding: 10px 24px;
}
.menu_item:active {
  background: rgba(218, 218, 218, 0.35);
  border-radius: 40px;
}
.menu_item.checked {
  background: rgba(218, 218, 218, 0.35);
  border-radius: 40px;
}
.title_products {
  font-weight: bold;
  margin-top: 20px;
  font-size: 16px;
  line-height: 16px;
  margin-left: 16px;
  color: #8F8F8F;
  text-align: start;
}


/*Divider*/
.divider {
  height: 1px;
  background: #ECECEC;
  margin: 12px 16px;
}

/*Cart button*/
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
.button_quantity {
  margin-left: 16px;
  opacity: 0.5;
}
.all_price {
  opacity: 0.5;
  margin-right: 16px;
}

</style>