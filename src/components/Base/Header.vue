<template>
  <header class="header">
    <a v-if="icon" @click="$router.back()">
      <img :src="require('@/assets/images/arrow_back.svg')" alt="">
    </a>
    <p class="header__text">{{ title }}</p>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
/*Header*/
.header {
  z-index: 2;
  display: flex;
  flex-direction: row;
  overflow-x: hidden;
  position: fixed;
  width: 100vw;
  height: 80px;
  left: 0px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}

.header > .header__text {
  padding-top: 40px;
  padding-left: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  color: #131113;
}

.header img {
  margin-top: 44px;
  margin-left: 20px;
}
</style>