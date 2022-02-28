<template>
  <div class="menuListPage">
    <Header :title="this.pageTitle" :icon="true" />
    <section class="menuList">
      <ul class="menu" v-for="(product,idx) in product.data.product_categories" :key="idx">
        <li class="menu_item">
          <p class="item_name">{{ product.product_category_name }}</p>
          <p class="item_quantity">{{ product.products.length }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Header from "../components/organisms/BaseHeader";
export default {
  name: "menuListPage",
  components: {Header},
  data() {
    return {
      pageTitle: "Меню",
    }
  },
  computed: {
    product() {
      return this.$store.state.product;
    },
  },
  mounted() {
    this.$store.dispatch("getProduct", this.$route.params.id);
  },
}
</script>

<style scoped>
/*Menu List*/
.menuListPage {
  background: #fff;
  height: 100vh;
  padding-top: 60px;
}
.menu {
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
  margin: 0;
}
.menu .menu_item {
  display: flex;
  justify-content: space-between;
  padding: 16px;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  border-top: 1px solid #DBDBDB;
}
.menu .menu_item:active {
  background: rgba(218, 218, 218, 0.35);
}
.menu .menu_item .item_name {
  color: #131113;
}
.menu .menu_item .item_quantity {
  color: #8F8F8F;
}
</style>
