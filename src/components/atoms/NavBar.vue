<template>
  <nav class="navigation">
    <ul class="navigation__list">
<<<<<<< HEAD
      <NavBarItem
        v-for="i in [0, 1, 2]"
        :key="i"
        :pagePath="pagePaths[i]"
        :pageName="pageNames[i]"
        :pageImg="getImgUrl(pageImgs[i], pagePaths[i])"
        :isActive="getActive(pagePaths[i])"
      />
=======
      <div v-for="p in pages" :key="p.id">
        <router-link :to="p.path">
          <NavBarItem
              :pageId="p.id"
              :pageName="p.title"
              :pageImg="getImgUrl(p.img, p.id)"
              :isActive="getActive(p.id)"
              @activePage="checkedPage($event)"
          />
        </router-link>
      </div>
>>>>>>> e86279bf4c5e9507d79d407506411a846c8c2bae
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
<<<<<<< HEAD
      pageNames: ["Главная", "Мои заказы", "Рахмет"],
      pagePaths: ["Home", "OrdersPage", "Rakhmet"],
      pageImgs: ["Home", "Order", "Rakhmet"],
=======
      pageActive: 1,
      pages: [
        {
          id: 1,
          title: "Главная",
          img: "Home",
          path: '/',

        },
        {
          id: 2,
          title: "Мои заказы",
          img: "Order",
          path: '/orders',
        },
        {
          id: 3,
          title: "Рахмет",
          img: "Rakhmet",
          path: '/rakhmet',
        },
      ],
>>>>>>> e86279bf4c5e9507d79d407506411a846c8c2bae
    };
  },
  watch: {
    pageActive: function (newPageId) {
      this.pageActive = newPageId
    },
  },
  methods: {
    getActive(page) {
      if (page === this.pageActive) return "active";
      else return "";
    },
    getImgUrl(imagePath, page) {
      if(page !== 3) {
        if (page === this.pageActive) {
          return require("@/assets/images/NavImages/active" + imagePath + ".png");
        }
        return require("@/assets/images/NavImages/" + imagePath + ".png");
      }
      return require("@/assets/images/NavImages/" + imagePath + ".png");
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