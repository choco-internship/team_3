<template>
  <div :class="`orderblock ${this.hide}`">
    <div class="foodorder">
      <div class="foodorder_info">
        <p class="foodorder_name">{{ product.p_title }}</p>
        <p class="foodorder_price">{{ product.p_price }} тг</p>
      </div>
      <div class="foodorder_photo">
        <img v-if="product.p_img" :src="require('@/assets/img/' + product.p_img)" />
        <div class="foodorder_counter" :style="product.p_img? 'top: 32px': 'top: -10px'">
          <button class="btn subtract" @click="this.subItem">-</button>
          <p class="count">{{ this.counter }}</p>
          <button class="btn addition" @click="addItem">+</button>
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
    product: {
      type: Object,
    },
    counter: {
      type: Number
    }
  },
  data() {
    return {
      hide: "show",
      updatedFromCardCount: 0,
    };
  },
  methods: {
    addSpaceNum() {
      let result = this.count * this.orderCost;
      result = result.toLocaleString();
      return result;
    },
    addItem() {
      this.counter += 1;
      this.updatedFromCardCount = this.counter
      this.$emit('counterUpdate', this.orderCost);
      this.$store.dispatch("addProductToCart", {p: this.product, c: this.updatedFromCardCount})
    },
    subItem() {
      if (this.counter > 0) this.counter -= 1;
      if (this.counter === 0) this.hide = "hide";
      this.$emit('counterUpdate', -this.orderCost);
      this.updatedFromCardCount = this.count
      this.$store.dispatch("removeProductToCart", {p: this.product, c: this.updatedFromCardCount})

    },
  },
};
</script>

<style scoped>
.orderblock {
  width: 100%;
}

.foodorder {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.foodorder > .foodorder_info > .foodorder_name {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-left: 17px;
  margin-bottom: 8px;
}

.foodorder > .foodorder_info > .foodorder_price {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  width: fit-content;
  margin-left: 17px;
  text-align: right;
}

.foodorder > .foodorder_photo {
  margin-right: 16px;
  position: relative;
}

.foodorder > .foodorder_photo > img {
  width: 98px;
  height: 53px;
  object-fit: cover;
  border-radius: 8px;
}

.foodorder > .foodorder_photo > .foodorder_counter {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  width: 99px;
  height: 35px;
  top: 32px;
  right: -1px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.foodorder > .foodorder_photo > .foodorder_counter > p {
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 26px;
  color: #2997ff;
}
.btn {
  border: none;
  background-color: white;
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 26px;
  color: #2997ff;
}

.foodorder > .foodorder_photo > .foodorder_counter > .count {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #131113;
}
</style>>
