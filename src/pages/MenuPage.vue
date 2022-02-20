<template>
  <div>
    <Header :title="products[$route.params.id-1].rest_name" :icon="true"/>
    <div class="menuPage">
      <Slider />
      <p class="address">{{ products[$route.params.id-1].rest_address }}</p>
      <nav>
        <router-link :to="{ path: '/menuList/'+$route.params.id }" class="burger_menu">
          <img src="../assets/img/burger_menu.svg" alt="">
        </router-link>
        <ul class="menu">
          <div v-for="(product,idx) in products[$route.params.id-1].rest_menu" :key="idx">
            <li class="menu_item">
              {{ product.title }}
            </li>
          </div>
        </ul>
      </nav>
      <div :id="product.title" v-for="(product,idx) in products[$route.params.id-1].rest_menu" :key="idx">
        <p class="title_products">{{product.title}}</p>
        <div class="product_list" v-for="(p,i) in product.productList" :key="i">
            <ProductListItem
                :product="p"
                :productId="i"
                :productTitle="product.title"
                :totalPrice="buttonTotalPrice"
                :buttonQty="buttonQty"
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
    }
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
      return this.$store.getters.cartItemCount
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice
    },
    products() {
      return this.$store.state.products
    }
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    totalPriceUpdated(totalPrice) {
      this.buttonTotalPrice = totalPrice
    },
    totalQtyUpdated(q) {
      this.buttonQty = q
    }
  }
}
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
  margin-top: 12px;
  font-size: 16px;
  line-height: 16px;
  margin-left: 16px;
  color: #8F8F8F;
  text-align: start;
}
</style>
