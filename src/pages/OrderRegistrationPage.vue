<template>
  <div id="orders_registration_page" class="orders_registration_page">
    <Header :title="pageTitle" :icon="false" />
    <div class="not_registered"> 
        <span>Войдите в свой аккаунт </span>
        <p>Необходимо войти в свой аккаунт, чтобы увидеть историю заказов </p>
        <router-link to="/login">
          <button @click="register">Войти</button>
        </router-link>
    </div>
    <NavBar :pageActive = "'Orders'"/>
  </div>
</template>

<script>

import NavBar from "../components/atoms/NavBar";
import Header from "../components/organisms/BaseHeader";
export default {
  name: "OrderRegistrationPage",
  data() {
    return {
      pageTitle: "Мои Заказы"
    }
  },
  methods: {
      register() {
          this.$emit('changeRegistration', true);
      }
  },
  components: {Header, NavBar},
}
</script>

<style scoped>
#orders_registration_page {
    display:flex;
    justify-content: center;
    align-items:center;
    background: #f8f8f8;
    width: 100%;
    height: 100vh;
}
.not_registered{
    height: 156px;
    width: 100%;
    padding: 0 32px;
}

.not_registered > span {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 24px;
}

.not_registered > p {
    padding-top: 16px;
    padding-bottom:32px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    display: flex;
    align-items: center;
    text-align: center;
}

.not_registered > a > button {

    background: #2997FF;
    border-radius: 4px;
    border: none;
    height: 44px;
    width: 277px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
}
</style>