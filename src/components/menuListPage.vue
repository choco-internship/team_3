<template>
  <div>
    <Header :title="this.pageTitle" :icon="require('../assets/img/arrow_back.svg')" />
    <section class="menuList">
      <ul class="menu">
        <li class="menu_item">
          <p class="item_name">Пицца</p>
          <p class="item_quantity">23</p>
        </li>
        <li class="menu_item">
          <p class="item_name">Напитки</p>
          <p class="item_quantity">3</p>
        </li>
        <li class="menu_item">
          <p class="item_name">Салаты</p>
          <p class="item_quantity">10</p>
        </li>
        <li class="menu_item">
          <p class="item_name">Супы</p>
          <p class="item_quantity">11</p>
        </li>
        <li class="menu_item">
          <p class="item_name">Паста</p>
          <p class="item_quantity">13</p>
        </li>
        <li class="menu_item">
          <p class="item_name">Горячее</p>
          <p class="item_quantity">23</p>
        </li>
        <li class="menu_item">
          <p class="item_name">Кофе</p>
          <p class="item_quantity">12</p>
        </li>
        <li class="menu_item">
          <p class="item_name">Чай</p>
          <p class="item_quantity">12</p>
        </li>
        <li class="menu_item">
          <p class="item_name">Десерты</p>
          <p class="item_quantity">11</p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Header from "./Header";
export default {
  name: "menuListPage",
  components: {Header},
  data() {
    return {
      pageTitle: "Меню"
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