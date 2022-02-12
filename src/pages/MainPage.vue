<template>
  <section id="menupage">
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
import NavBar from "../components/NavBar/NavBar.vue"
import {REST_ITEMS} from '../config/rest-items'

export default {
  name: "MainPage",
  components: {
    ShopView,
    NavBar,
  },
  methods: {
    getImgUrl: function (imagePath) {
      return require('@/assets/images/' + imagePath + '.png');
    }
  },
  $Items: REST_ITEMS
};
</script>

<style>
</style>
