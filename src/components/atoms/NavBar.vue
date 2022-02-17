<template>
  <nav class="navigation">
    <ul class="navigation__list">
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
    </ul>
  </nav>
</template>

<script>
import NavBarItem from "./NavBarItem.vue";

export default {
  name: "NavBar",
  components: {
    NavBarItem,
  },
  data() {
    return {
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
    };
  },
  watch: {
    pageActive: function (newPageId) {
      this.pageActive = newPageId
    },
  },
  methods: {
    checkedPage(value_from_child) {
      this.pageActive = value_from_child
      console.log(this.pageActive)
    },
    getActive(id) {
      if (id === this.pageActive) return "active";
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
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
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
  padding: 0;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
}

.navigation__list a {
  text-decoration: none !important;
  color: #AAAAAA;
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  text-align: center;

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