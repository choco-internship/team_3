<template>
  <header class="header">
    <div class="title"></div>
  </header>
</template>

<script>
export default {
  name: "HeaderSkeleton",
};
</script>

<style scoped>
/*Header*/
.header {
  position: fixed;
  top: 0px;
  width: 100vw;
  z-index: 2;
  color: #131113;
  height: 60px;
  background: #ffffff;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}
.header .title {
  position: absolute;
  border-radius: 5px;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  width: 170px;
  height: 24px;
  left: 16px;
  top: 20px;
  animation: wave 1s infinite linear forwards;
}

@keyframes wave {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}
</style>
