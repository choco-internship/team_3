<template>
  <div class="registrationPage">
    <Header title="" :icon="true"/>
    <div class="registration">
      <p class="pageTitle">
        Login
      </p>
      <p v-if="!fromFilled" class="pageSubtitle">
        Введите ваш почтовый адрес
      </p>
      <p v-else class="pageSubtitle">
        Пароль должен состоять минимум из <br>9 символов
      </p>
      <form v-if="!fromFilled" class="form">
        <label for="email">e-mail</label>
        <input
            name="email"
            id="email"
            v-model="user.email"
            type="text"
            class="form-input"
            placeholder="Введите почтовый адрес"
        />
        <label for="password">Пароль</label>
        <input
            name="password"
            id="password"
            v-model="user.password"
            type="password"
            class="form-input"
            placeholder="Введите пароль"
        />
      </form>
      <!--      <form v-else action="password" class="form">-->
      <!--        <label for="password">Пароль</label>-->
      <!--        <input-->
      <!--            name="password"-->
      <!--            id="password"-->
      <!--            v-model="user.password"-->
      <!--            type="password"-->
      <!--            class="form-input"-->
      <!--            placeholder="Введите пароль"-->
      <!--        />-->
      <!--      </form>-->
      <p class="helpText">
        Нажимая  “Далее”, вы принимаете
        <span>условия публичной оферты</span>
      </p>
      <p @click="() => {this.$router.push('/reg')}" class="notRegistered">
        Not registered ?
        <span></span>
      </p>
      <button
          :disabled="!user.email && !user.password"
          :class="(!user.email)?'disabled': ''"
          @click="login"
          type="submit"
          class="nextButton"
      >
        Далее
      </button>
    </div>
  </div>
</template>

<script>
import Header from "../components/organisms/BaseHeader";
export default {
  name: "Login",
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
      error: false,
      fromFilled: false,
    }
  },
  methods: {
    fillEmail() {
      this.fromFilled = true
    },
    login() {
      this.$store.dispatch("loginUser", this.user);
      // this.$router.push("/orders")
    }
  },
  components: {Header}
}
</script>

<style scoped>
.registrationPage {
  background: #fff;
  padding-top: 60px;
  height: 100vh;
}
.registrationPage header {
  box-shadow: none;
}
.registration {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pageTitle {
  margin-top: 28px;
  margin-bottom: 12px;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #131113;
}
.pageSubtitle {
  font-weight: normal;
  font-size: 16px;
  margin-bottom: 20px;
  line-height: 20px;
  color: #8F8F8F;
}
.form {
  display: flex;
  text-align: left;
  width: 90%;
  flex-direction: column;
}
.form label {
  font-weight: normal;
  font-size: 12px;
  line-height: 16px;
  color: #131113;
}
.form-input {
  padding: 14px 16px;
  border: 1px solid #8F8F8F;
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 4px;
  outline-color: #2997FF;
  margin-bottom: 16px;
}
.form-input::placeholder {
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 20px;
  color: #8F8F8F;
}
.helpText {
  font-style: normal;
  font-weight: normal;
  width: 60%;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #8F8F8F;
}
.notRegistered {
  margin-top: 20px;
  text-decoration: underline;
  font-style: normal;
  font-weight: normal;
  width: 60%;
  font-size: 12px;
  line-height: 14px;
  text-align: center;
  color: #e35353;
}
.helpText span {
  text-decoration: underline;
}
.nextButton {
  position: fixed;
  bottom: 24px;
  background: #DE2D49;
  border-radius: 4px;
  padding: 12px 57px;
  border:background none;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #FFFFFF;
}
.nextButton.disabled {
  background: #ECECEC;
  color: #8F8F8F;
}
</style>
