<template>
  <button
      class="payButton"
      @click="payButton"
      :disabled="!cartItemCount"
  >
    <div class="payInterface" :class="!cartItemCount?'disabled': ''">
      <p>Оплатить</p>
      <p class="payAmount">{{ amount.toLocaleString() }} ₸</p>
    </div>
  </button>
</template>

<script>
export default {
  name: "ButtonPay",
  props: {
    amount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      registered: this.$store.state.login,
    };
  },
  computed: {
    cartItemCount() {
      console.log(this.registered)
      return this.$store.getters.cartItemCount
    },
  },
  methods: {
    payButton() {
      if(this.registered === true) {
        this.$router.push("/payment")
      }
      else {
        this.$router.push("/login")
      }
    }
  }
};
</script>

<style>
/* Pay Button */
.disabled {
  opacity: 0.4;
}
.payButton {
  border: none;
  position: fixed;
  bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: transparent;
}

.payInterface {
  position: relative;
  height: 48px;
  width: 100%;
  margin: 0 16px;
  background: #2997ff;
  border-radius: 12px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.payInterface > p {
  font-family: 'Noto Sans', sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 19px;
  display: flex;
  align-items: center;
  text-align: center;
  color: white;
}

.payInterface > .payAmount {
  position: absolute;
  right: 15px;
}
</style>