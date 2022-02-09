<template>
  <header class="header">
    <router-link to="/">
      <img src="../assets/img/arrow_back.svg" alt="">
    </router-link>
    <p class="title">Mamma mia</p>
  </header>
</template>

<script>
export default {
  name: "Header"
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
}
.header img {
  width: 14px;
  height: 14px;
}
.header .title {
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: bold;
  line-height: 20px;
  margin-left: 36px;
}

</style>