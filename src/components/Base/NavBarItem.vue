<template>
  <li class="navigation__list-item" @click="checkConsole()">
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
      type: String,
    },
    isActive: {
      type: String,
    },
  },
  methods: {
    checkConsole() {
      this.$router.push({ name: `${this.pageId}` });
    },
  },
};
</script>