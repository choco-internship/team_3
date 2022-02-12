<template>
  <section id="menupage">
      <Header :title="`Заказ с собой`" :icon="false"/>
    <ShopView
      v-for="item in $options.$Items"
      :key="item.id"
      :rest_name="item.name"
      :rest_address="item.address"
      :rest_img_url="getImgUrl(item.img_path)"
      :rest_img_alt="item.img_alt"
    />
    <NavBar :pageActive="'MainPage'"/>
  </section>
</template>

<script>
import ShopView from "../components/ShopView.vue";
import Header from "../components/Base/Header.vue";
import NavBar from "../components/Base/NavBar.vue";
import {REST_ITEMS} from '../config/rest-items';

export default {
  name: "MainPage",
  components: {
    ShopView,
    NavBar,
    Header,
  },
  methods: {
    getImgUrl: function (imagePath) {
      return require('@/assets/images/' + imagePath + '.png');
    }
  },
  $Items: REST_ITEMS
};
</script>

<style scoped>

#menupage {
  overflow-x: hidden;
  width: 100%;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
  margin-bottom: 20px;
}


</style>
