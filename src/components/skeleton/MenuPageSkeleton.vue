<template>
  <div>
    <HeaderSkeleton />
    <div class="menuPageSkelet">
      <div class="sliderplaceholder wave"></div>
      <div class="info">
        <div class="adress wave"></div>
        <div class="slider wave"></div>
        <div class="category wave"></div>
      </div>
      <div v-for="i in [1, 2, 3, 4]" :key="i">
        <div class="productskelet">
          <div class="productskelet__info">
            <div class="productskelet__info-name wave"></div>
            <div class="productskelet__info-price wave"></div>
          </div>
          <div class="productskelet__photo wave"></div>
        </div>
        <div class="between">
          <div class="betweenline"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderSkeleton from "../skeleton/HeaderSkeleton.vue";

export default {
  name: "MenuPageSkeleton",
  data() {
    return {
      pageTitle: "Mamma mia",
      buttonText: "Корзина",
      buttonTotalPrice: 0,
      buttonQty: 0,
    };
  },
  components: {
    HeaderSkeleton,
  },
};
</script>

<style scoped>
.menuPageSkelet {
  padding-bottom: 20px;
  padding-top: 60px;
  background: #fff;
}
.sliderplaceholder {
  width: 100%;
  height: 172px;
}

.info {
  margin-top: 16px;
  margin-left: 16px;
}

.info > .adress {
  height: 16px;
  width: 125px;
  margin-bottom: 20px;
}

.info > .slider {
  height: 36px;
  width: calc(100% - 16px);
  margin-bottom: 20px;
}

.info > .category {
  height: 20px;
  width: 60px;
  margin-bottom: 20px;
}

.productskelet {
  /* margin-bottom: 32px; */
  margin-left: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.productskelet__info {
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
}

.productskelet__info-name {
  width: 150px;
  height: 16px;
  margin-bottom: 8px;
}

.productskelet__info-price {
  width: 100px;
  height: 16px;
}

.productskelet__photo {
  width: 128px;
  height: 90px;
  margin-right: 16px;
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

.wave {
  border-radius: 2px;
  animation: wave 1s infinite linear forwards;
  -webkit-animation: wave 1s infinite linear forwards;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
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
