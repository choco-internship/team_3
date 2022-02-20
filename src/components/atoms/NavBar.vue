<template>
  <nav class="navigation">
    <ul class="navigation__list">
      <NavBarItem
        v-for="i in [0, 1, 2]"
        :key="i"
        :pagePath="pagePaths[i]"
        :pageName="pageNames[i]"
        :pageImg="getImgUrl(pageImgs[i], pagePaths[i])"
        :isActive="getActive(pagePaths[i])"
      />
    </ul>
  </nav>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";

export default {
  name: "NavBar",
  props: {
    pageActive: {
      type: String,
      required: true,
    },
  },
  components: {
    NavBarItem,
  },
  data() {
    return {
      pageNames: ["Главная", "Мои заказы", "Рахмет"],
      pagePaths: ["Home", "Orders", "Rakhmet"],
      pageImgs: ["Home", "Order", "Rakhmet"],
    };
  },
  methods: {
    getActive(page) {
      if (page === this.pageActive) return "active";
      else return "";
    },
    getImgUrl(imagePath, page) {
      if(page !== 3) {
        if (page === this.pageActive) {
          return require("@/assets/img/active" + imagePath + ".png");
        }
        return require("@/assets/img/" + imagePath + ".png");
      }
      return require("@/assets/img/" + imagePath + ".png");
    },
  },
};
</script>

<style>
.navigation {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  position: fixed;
  width: auto;
  z-index: 2;
  bottom: -1px;
  height: 56px;
  width: 100%;
  background: #ffffff;
  padding-bottom: 3px;
  box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.05);
}

.navigation__list {
  width: 100%;
  display: flex;
  flex-direction: row;
}

.navigation__list-item {
  flex: 1 0 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.navigation__list-item-icon {
  width: 24px;
}

.navigation__list-item-name {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;
}

.active {
  color: #2997ff;
}
</style>