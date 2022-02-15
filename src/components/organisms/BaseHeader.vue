<template>
  <header class="header">
    <a v-if="icon" @click="$router.back()">
      <img :src="icon" alt="">
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
      type: String
    }
  }
}
</script>

<style scoped>
/*Header*/
.header {
  display: flex;
  align-items: center;
  font-size: 20px;
  line-height: 20px;
  color: #131113;
  padding: 0 20px;
  height: 60px;
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
