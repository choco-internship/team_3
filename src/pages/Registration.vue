<template>
  <div class="registrationPage">
    <Header title="" :icon="true"/>
    <div class="registration">
      <p class="pageTitle">
        Регистрация
      </p>
      <p class="pageSubtitle">
        Заполните форму для регистрации
      </p>
      <form class="form">
        <div class="errors">
          {{this.$store.state.loginEr}}
          <div v-for="(e,i) in errors" :key="i">
            <div>{{e}}</div>
          </div>
        </div>
        <label for="email">Е-mail</label>
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
        <label for="password2">Повторите пароль</label>
        <input
            name="password"
            id="password2"
            v-model="user.password2"
            type="password"
            class="form-input"
            placeholder="Введите пароль"
        />
      </form>

      <p class="helpText">
        Нажимая  “Далее”, вы принимаете
        <span>условия публичной оферты</span>
      </p>
      <p @click="() => {this.$router.push('/login')}" class="registered">
        Уже есть аккаунт ?
        <span></span>
      </p>
      <button
          @click="register"
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
  name: "Registration",
  data() {
    return {
      user: {
        email: "",
        password: "",
        password2: ""
      },
      error: false,
      fromFilled: false,
      errors: []
    }
  },
  methods: {
    register() {
      this.errors = []
      if(!this.user.email) {
        this.errors.push("Неверный еmail !")
      }
      if(!this.validEmail(this.user.email)) {
        this.errors.push("Требуется действительный адрес электронной почты !")
      }
      if(!this.user.password || !this.user.password2) {
        this.errors.push("Неверный пароль !")
      }
      if(this.user.password !== this.user.password2) {
        this.errors.push("Пароли не совподают !")
      }
      if(!this.validPassword(this.user.password)) {
        this.errors.push("Требуется действительный пароль !")
      }

      if(!this.errors.length) {
        this.$store.dispatch("registerUser", this.user);
        this.$router.push("/login")
      }
      console.log(this.errors)
    },
    validEmail: function (email) {
      let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    validPassword: function (password) {
      const containsUppercase = /[A-Z]/.test(password)
      const containsLowercase = /[a-z]/.test(password)
      const containsNumber = /[0-9]/.test(password)
      const minLength = password.length > 6
      return containsUppercase && containsLowercase && containsNumber && minLength
    }
  },
  components: {Header}
}
</script>

<style scoped>
.errors {
  margin-left: 0px;
  margin-bottom: 20px;
  color: red
}
.registered {
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
