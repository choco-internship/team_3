<template>
  <header class="header">
    <a v-if="icon" @click="$router.back()">
      <img :src="require('@/assets/img/arrow_back.svg')" alt="">
    </a>
    <p class="title">{{ title }}</p>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
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
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 2;
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 20px;
  color: #131113;
  padding: 0 20px;
  height: 60px;
  background: #FFFFFF;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}
.header img {
  width: 14px;
  height: 14px;
  margin-right: 36px;
}
.header .title {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
}
</style>
