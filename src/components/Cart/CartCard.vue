<template>
  <div :class="`orderblock ${this.hide}`">
    <div class="foodorder">
      <div class="foodorder_info">
        <p class="foodorder_name">{{ orderName }}</p>
        <p class="foodorder_price">{{ addSpaceNum() }} тг</p>
      </div>
      <div class="foodorder_photo">
        <img :src="imgPath" :alt="imgAlt" />
        <div class="foodorder_counter">
          <button class="btn subtract" @click="this.subItem">-</button>
          <p class="count">{{ this.count }}</p>
          <button class="btn addition" @click="this.addItem">+</button>
        </div>
      </div>
    </div>
    <div class="between">
      <div class="betweenline"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CartCard",
  props: {
    imgPath: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      required: true,
    },
    orderName: {
      type: String,
      required: true,
    },
    orderCost: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      count: 1,
      hide: "show",
    };
  },
  methods: {
    addSpaceNum() {
      let result = this.count * this.orderCost;
      result = result.toLocaleString();
      return result;
    },
    addItem() {
      this.count += 1;
      this.$emit('counterUpdate', this.orderCost);
    },
    subItem() {
      if (this.count > 0) this.count -= 1;
      if (this.count == 0) this.hide = "hide";
      this.$emit('counterUpdate', -this.orderCost);
    },
  },
};
</script>

<style>
</style>