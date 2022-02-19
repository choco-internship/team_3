<template>
  <div class="orderdetailspage__rest">
    <span class="orderdetailspage__rest-name"> {{ this.restname }} </span>
    <span class="orderdetailspage__rest-address">
      {{ this.restaddress }}
    </span>
  </div>
</template>

<script>
export default {
  name: "OrderDetailsTop",
  props: {
    restname: {
      type: String,
      required: true,
    },
    restaddress: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.orderdetailspage__rest {
  padding-left: 16px;
  display: flex;
  flex-direction: column;
  background: white;
  /* margin-top: 2px; */
  width: 100%;
}

.orderdetailspage__rest-name {
  padding-top: 20px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #131113;
}

.orderdetailspage__rest-address {
  padding-top: 12px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #8f8f8f;
}
</style>