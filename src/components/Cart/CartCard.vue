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

<style scoped>
.orderblock {
  width: 100%;
}

.foodorder {
  width: 100%;
  display: flex;
  flex-direction: row;
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
  height: 53px;
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
