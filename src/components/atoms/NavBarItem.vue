<template>
  <li class="navigation__list-item" @click="changePage()">
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
    pagePath: {
      type: String,
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
    changePage() {
      this.$router.push({ name: `${this.pagePath}` });
    },
  },
};
</script>