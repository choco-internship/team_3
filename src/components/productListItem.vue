<template>
  <div class="product_list_item">
    <div class="product_info">
      <p class="product_name">{{name}}</p>
      <p v-if="desc" class="product_desc">{{desc}}</p>
      <p class="product_price">{{ price }}</p>
    </div>
    <div v-if="img" class="product_img">
      <img :src="img" alt="">
      <div v-if="count!==0" class="quantity">
        <button @click="decreaseQty" class="inc_item">
          -
        </button>
        <p>{{count}}</p>
        <button @click="increaseQty" class="dec_item">
          +
        </button>
      </div>
      <button @click="increaseQty" v-else class="add_item">
        +
      </button>
    </div>
    <div v-else class="product_without_img">
      <div v-if="count!==0" class="quantity">
        <button @click="decreaseQty" class="inc_item">
          -
        </button>
        <p>{{count}}</p>
        <button @click="increaseQty" class="dec_item">
          +
        </button>
      </div>
      <button @click="increaseQty" v-else class="add_without_item">
        +
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "productListItem",
  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: String
    },
    desc: {
      type: String
    },
    img: {
      type: String
    }
  },
  data() {
    return {
      count: 0,
    }
  },
  computed: {

  },
  methods: {
    increaseQty() {
      this.count += 1;
    },
    decreaseQty() {
      if(this.count >0) {
        this.count -=1
      }
    }
  }
}
</script>

<style scoped>
/*Product item*/
.product_list_item {
  display: flex;
  text-align: start;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 0  16px;
}
.product_info p {
  margin: 0;
  padding: 0;
  margin-bottom: 8px !important;
}
.product_info p:last-child {
  margin-bottom: 0 !important;
}
.product_info {
  width: 60%;
  display: flex;
  flex-direction: column;
  align-content: space-evenly;
  font-size: 16px;
  line-height: 16px;
}
.product_info .product_name {
  font-weight: 500;
  color: #303030;
}
.product_desc {
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #707070;
}
.product_info .product_price {
  color: #2997FF;
  font-size: 14px;
  font-weight: normal;
}
.product_img {
  width: 128px;
  height: 90px;
  position: relative;
}
.product_img img {
  width: 100%;
  height: 100%;
}
.add_without_item {
  background: #FFFFFF;
  border: none;
  width: 36px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-weight: 500;
  font-size: 22px;
  color: #2997FF;
  margin-right: 4px;
}
.add_item {
  position: absolute;
  bottom: 4px;
  right: 4px;
  background: #FFFFFF;
  border: none;
  width: 36px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  font-weight: 500;
  font-size: 22px;
  color: #2997FF;
}
.product_without_img .quantity {
  right: 18px;
}
.quantity {
  border-radius: 8px;
  box-shadow: 1px 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  position: absolute;
  align-items: center;
  font-weight: normal;
  font-size: 16px;
  color: #131113;
  bottom: 4px;
  right: 4px;
  background: #FFFFFF;
}
.quantity p {
  margin: 0;
  padding: 0;
}
.dec_item, .inc_item {
  border: none;
  background: #FFFFFF;
  width: 36px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  font-weight: 500;
  font-size: 18px;
  color: #2997FF;
}
</style>