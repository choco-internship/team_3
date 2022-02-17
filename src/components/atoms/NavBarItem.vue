<template>
  <li class="navigation__list-item" @click="checkActive(pageId)">
    <img class="navigation__list-item-icon" :src="this.pageImg" />
    <span :class="`navigation__list-item-name ${this.isActive}`">
      {{ this.pageName }}
    </span>
  </li>
</template>

<script>
export default {
  name: "NavBarItem",
  props: {
    pageName: {
      type: String,
      required: true,
    },
    pageImg: {
      type: String,
      required: true,
    },
    pageId: {
      type: Number,
    },
    isActive: {
      type: String,
    },
  },
  data() {
    return {
      pageActive: null,
    }
  },
  methods: {
    checkActive(id){
      this.pageActive = id
      this.$emit('activePage', this.pageActive)
    },
  },
};
</script>

<style scoped>
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