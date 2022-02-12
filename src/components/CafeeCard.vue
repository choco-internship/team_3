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

<style scoped>
section > .restaraunt > .rest {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 90px;
}
section > .restaraunt > .rest:hover {
  cursor: pointer;
}

section > .restaraunt > .rest > img {
  width: 90px;
  height: 90px;
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 8px;
  margin: 0px 16px;
}

section > .restaraunt > .rest > .textinfo > .restname {
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: #131113;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
}
section > .restaraunt > .rest > .textinfo > .restadress {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #131113;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
}
</style>