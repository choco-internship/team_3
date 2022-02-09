<template>
  <div>
    <Header />
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
      <p class="address">ул. Панфилова 109</p>
      <nav>
        <a href="menuList.html" class="burger_menu">
          <img src="../assets/img/burger_menu.svg" alt="">
        </a>
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
      <p class="title_products">
        Пицца
      </p>
      <div class="product_list">
        <div class="product_list_item">
          <div class="product_info">
            <p class="product_name">Пицца Маргарита</p>
            <p class="product_price">1 600 тг</p>
          </div>
          <div class="product_img">
            <img src="../assets/img/margarita.png" alt="">
            <button class="add_item">
              +
            </button>
          </div>
        </div>
        <div class="divider"></div>
        <div class="product_list_item">
          <div class="product_info">
            <p class="product_name">Пицца Пепперони</p>
            <p class="product_desc">Любая маленькая пицца на выбор, порция фри и Coca Cola</p>
            <p class="product_price">1 600 тг</p>
          </div>
          <div class="product_img">
            <img src="../assets/img/pepperoni.png" alt="">
            <div class="quantity">
              <button class="inc_item">
                -
              </button>
              <p>1</p>
              <button class="dec_item">
                +
              </button>
            </div>
          </div>
        </div>
        <div class="divider"></div>
        <div class="product_list_item">
          <div class="product_info">
            <p class="product_name">Пицца Маргарита</p>
            <p class="product_desc">Одна строка описания чего-то</p>
            <p class="product_price">1 600 тг</p>
          </div>
          <div class="product_img">
            <img src="../assets/img/kalcone.png" alt="">
            <button class="add_item">
              +
            </button>
          </div>
        </div>
        <div class="divider"></div>
        <div class="product_list_item">
          <div class="product_info">
            <p class="product_name">Пицца Маргарита</p>
            <p class="product_desc">Одна строка описания чего-то</p>
            <p class="product_price">1 600 тг</p>
          </div>
          <div class="product_img">
            <img src="../assets/img/mexicano.png" alt="">
            <button class="add_item">
              +
            </button>
          </div>
        </div>
        <div class="divider"></div>
      </div>
      <p class="title_products">
        Напитки
      </p>
      <div class="product_list">
        <div class="product_list_item">
          <div class="product_info">
            <p class="product_name">Фреш Яблочный, 500 мл</p>
            <p class="product_price">1 950 тг</p>
          </div>
          <div class="product_without_img">
            <button class="add_without_item">
              +
            </button>
          </div>
        </div>
        <div class="divider"></div>
        <div class="product_list_item">
          <div class="product_info">
            <p class="product_name">Фреш Яблочный, 500 мл</p>
            <p class="product_price">1 950 тг</p>
          </div>
          <div class="product_without_img">
            <button class="add_without_item">
              +
            </button>
          </div>
        </div>
        <div class="divider"></div>
        <div class="product_list_item">
          <div class="product_info">
            <p class="product_name">Фреш Яблочный, 500 мл</p>
            <p class="product_price">1 950 тг</p>
          </div>
          <div class="product_without_img">
            <button class="add_without_item">
              +
            </button>
          </div>
        </div>
        <div class="divider"></div>
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
export default {
  name: "menuPage",
  components: {Header}
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

/*Product item*/
.product_list_item {
  display: flex;
  text-align: start;
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
  position: relative;
}
.product_img img {
  width: 100%;
  height: 100%;
}
.add_without_item {
  background: #FFFFFF;
  border: none;
  width: 36px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-weight: 500;
  font-size: 22px;
  color: #2997FF;
  margin-right: 4px;
}
.add_item {
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: #FFFFFF;
  border: none;
  width: 36px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-weight: 500;
  font-size: 22px;
  color: #2997FF;
}
.quantity {
  border-radius: 2.2222222222222223VW;
  display: flex;
  position: absolute;
  align-items: center;
  font-weight: normal;
  font-size: 16px;
  color: #131113;
  bottom: 4px;
  right: 4px;
  background: #FFFFFF;
}
.quantity p {
  margin: 0;
  padding: 0;
}
.dec_item, .inc_item {
  border: none;
  background: #FFFFFF;
  width: 36px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 500;
  font-size: 18px;
  color: #2997FF;
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