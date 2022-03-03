<template>
  <section id="paymentpage">
    <Header :title="`Payment Page`" :icon="true" />
    <div style="text-align: center">
      <h1 style="color: #12af12">Поздравляем! Вы успешно оплатили ! </h1>
    </div>
    <button class="backButton" @click="() => {this.$router.push('/')}"> Back to shop </button>
  </section>
</template>

<script>
import Header from "../components/organisms/BaseHeader.vue";

export default {
  name: "PaymentPage",
  components: {
    Header,
  },
  data() {
    return {};
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
.divider {
  margin-top: 16px;
}
</style>
<style>
.backButton {
  position: absolute;
  bottom: 70px;
  border: none;
  padding: 10px 50px;
  font-family: Roboto;
  font-size: 17px;
  background: #7e7b7c;
  color: #FFFFFF;
  border-radius: 4px;
}
#paymentpage {
  text-align: start;
  overflow-x: hidden;
  padding-top: 0px;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #ffffff;
}

#paymentpage > .rest {
  height: 80px;
  width: 100%;
}

#paymentpage > .rest > .textinfo > .restname {
  padding-top: 20px;
  padding-left: 16px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 100%;
}

#paymentpage > .rest > .textinfo > .restadress {
  padding-left: 16px;
  padding-top: 12px;
  padding-bottom: 16px;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 114%;
  color: #8f8f8f;
}

.divider {
  height: 8px;
  width: 100%;
  background: #f8f8f8;
}

/* Order part */

h4 {
  width: 100%;
  padding: 16px 0;
  padding-left: 17px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
}


/* Total amount */

.totalpay {
  padding-top: 4px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.totalpay h4 {
  width: fit-content;
  padding: 0 16px;
  padding-bottom: 20px;
  font-style: normal;
  font-weight: bold;
}

.hide {
  display: none;
}
</style>
