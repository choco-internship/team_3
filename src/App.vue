<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>


export default {
  name: "App",
  components: {
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

body {
  margin: 0;
  padding: 0;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #F8F8F8;
}
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>
