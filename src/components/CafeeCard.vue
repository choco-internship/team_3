<template>
  <div class="rest">
    <img :src="`${rest_img_url}`" :alt="rest_img_alt" />
    <div class="textinfo">
      <p class="restname">{{ rest_name }}</p>
      <p class="restadress">{{ rest_address }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "CafeCard",
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