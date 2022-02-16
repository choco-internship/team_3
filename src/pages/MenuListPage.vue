<template>
  <div>
    <Header :title="this.pageTitle" :icon="true" />
    <section class="menuList">
      <ul class="menu" v-for="(product,idx) in products[$route.params.id-1].rest_menu" :key="idx">
        <li class="menu_item">
          <p class="item_name">{{ product.title }}</p>
          <p class="item_quantity">{{ product.quantity }}</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Header from "../components/organisms/BaseHeader";
import {restaraunts} from "../config/mock";
export default {
  name: "menuListPage",
  components: {Header},
  data() {
    return {
      pageTitle: "Меню",
      products: restaraunts,
    }
  }
}
</script>

<style scoped>
/*Menu List*/
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
  padding: 0 16px;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  border-top: 1px solid #DBDBDB;
}
.menu .menu_item .item_name {
  color: #131113;
}
.menu .menu_item .item_quantity {
  color: #8F8F8F;
}
</style>
