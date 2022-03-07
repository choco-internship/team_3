<template>
  <div>
    <Header :title="product.data.restaurant_name" :icon="true" />
    <div class="menuPage">
      <Slider :restaurant_images="product.data.restaurant_images" />
      <p class="address">{{ product.data.location }}</p>
      <nav>
        <router-link
          :to="{ path: '/menuList/' + $route.params.id }"
          class="burger_menu"
        >
          <img src="../assets/img/burger_menu.svg" alt="" />
        </router-link>
        <ul class="menu">
          <div
            v-for="(p, idx) in product.data.product_categories"
            :key="idx"
          >
            <li class="menu_item">
              {{ p.product_category_name }}
            </li>
          </div>
        </ul>
      </nav>
      <div
        :id="pr.product_category_id"
        v-for="(pr, idx) in product.data.product_categories"
        :key="idx"
      >
        <p class="title_products">{{ pr.product_category_name }}</p>
        <div
          class="product_list"
          v-for="(p, i) in pr.products"
          :key="i"
        >
          <ProductListItem
            :product="p"
            :productId="p.product_id"
            :productTitle="p.product_name"
            :totalPrice="buttonTotalPrice"
            :buttonQty="getItemQnt(p, p.product_id)"
            @totalPriceUpdated="totalPriceUpdated($event)"
            @totalQtyUpdated="totalQtyUpdated($event)"
          />
          <Divider />
        </div>
      </div>
      <AddToCartButton
        :buttonText="buttonText"
        :productQty="cartItemCount"
        :totalPrice="cartTotalPrice"
      />
    </div>
  </div>
</template>

<script>
import Header from "../components/organisms/BaseHeader";
import ProductListItem from "../components/molecules/ProductListItem";
import AddToCartButton from "../components/atoms/AddToCartButton";
import Divider from "../components/atoms/Divider";
import Slider from "../components/molecules/Slider";

export default {
  name: "menuPage",
  data() {
    return {
      pageTitle: "Mamma mia",
      buttonText: "Корзина",
      buttonTotalPrice: 0,
      buttonQty: 0,
    };
  },
  components: {
    Slider,
    Divider,
    AddToCartButton,
    ProductListItem,
    Header,
  },
  computed: {
    cartItemCount() {
      return this.$store.getters.cartItemCount;
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
    product() {
      return this.$store.state.product;
    },
    cart() {
      return this.$store.state.cart;
    }
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
  methods: {
    totalPriceUpdated(totalPrice) {
      this.buttonTotalPrice = totalPrice;
    },
    totalQtyUpdated(q) {
      this.buttonQty = q;
    },
    getItemQnt(p, index) {
      let productInCart = this.cart.find((item) => {
        // здесь чекается по тайтлу, если знаешт как по айди, то давай по айди, а то по тайтлу у нескольких пицц одинаково
        // по айди еще чекает типа Пицца0 будет чекать индекс пиццы, но так все фрешы пока отмечаются тоже из-за названия
        // а так вроде работает
        return item.p.product_id === index;
      });
      if (productInCart) {
        return productInCart.c;
      } else return 0;
    },
  },
};
</script>

<style scoped>
.menuPage {
  padding-bottom: 50px;
  padding-top: 60px;
  background: #fff;
}
.address {
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #8f8f8f;
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
  color: #8f8f8f;
  overflow-x: auto;
  width: 100%;
}
.menu::-webkit-scrollbar {
  display: none;
}
.menu_item {
  padding: 10px 24px;
  /*border: 1px solid;*/
  width: max-content;
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
  margin-top: 12px;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 16px;
  margin-left: 16px;
  color: #8f8f8f;
  text-align: start;
}
p {
  margin: 20px;
}
</style>
