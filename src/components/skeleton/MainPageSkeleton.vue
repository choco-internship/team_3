<template>
  <div class="mainPageSkel">
    <HeaderSkeleton />
    <section id="menupageskel">
      <div v-for="i in products" :key="i">
        <div class="rest">
          <div class="imgplaceholder"></div>
          <div class="textinfo">
            <p class="restname"></p>
            <p class="restadress"></p>
          </div>
        </div>
        <div class="between">
          <div class="betweenline"></div>
        </div>
      </div>
    </section>
    <NavBar :pageActive="'Home'" />
  </div>
</template>

<script>
import HeaderSkeleton from "../skeleton/HeaderSkeleton";
import NavBar from "../atoms/NavBar.vue";

export default {
  name: "MainPageSkeleton",
  components: {
    NavBar,
    HeaderSkeleton,
  },
  data() {
    return {
      products: [1, 2, 3, 4, 5],
    };
  },
};
</script>
<style scoped>
body {
  overflow-y: hidden;
}
.mainPageSkel {
  overflow: hidden;
  background: #fff;
  padding-bottom: 60px;
  padding-top: 60px;
}
/* Header */

#menupageskel {
  overflow: hidden;
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.rest {
  text-decoration: none;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 90px;
}

div > .imgplaceholder {
  width: 90px;
  height: 90px;
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 8px;
  margin: 0px 16px;
  border-radius: 5px;
  animation: wave 1s infinite linear forwards;
  -webkit-animation: wave 1s infinite linear forwards;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
}

div > .textinfo > .restname {
  animation: wave 1s infinite linear forwards;
  -webkit-animation: wave 1s infinite linear forwards;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  border-radius: 5px;
  /* Inside auto layout */
  height: 20px;
  width: 100px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
}
div > .textinfo > .restadress {
  animation: wave 1s infinite linear forwards;
  -webkit-animation: wave 1s infinite linear forwards;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  border-radius: 5px;
  height: 16px;
  width: 150px;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
}

div > .textinfo {
  /* margin-left: 16px; */
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 100%;
}

.between {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 100vw;
}

.between > .betweenline {
  height: 1px;
  width: 100%;
  margin: 0px 16px;
  background: #ececec;
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
