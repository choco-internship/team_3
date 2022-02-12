<template>
  <div class="restaraunt">
    <CafeCard
      :rest_name="this.rest_name"
      :rest_address="this.rest_address"
      :rest_img_url="this.rest_img_url"
      :rest_img_alt="this.rest_img_alt"
    />
    <div class="between">
      <div class="betweenline"></div>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import CafeCard from "./CafeeCard.vue";

export default {
  name: "ShopView",
  components: {
    CafeCard,
  },
  props: {
    rest_name: {
      type: String,
      required: true,
    },
    rest_address: {
      type: String,
      required: true,
    },
    rest_img_url: {
      type: String,
      required: true,
    },
    rest_img_alt: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
section > .restaraunt {
  width: 100%;
}
</style>