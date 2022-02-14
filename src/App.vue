<template>
  <div id="app">
    <router-view/>
    <div class="nav-bottom">
      <router-link to="/">Main</router-link> |
      <router-link to="/myorders">My orders</router-link>|
      <router-link to="/rakhmet">Rakhmet</router-link>
    </div>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap');

body {
  margin: 0;
  padding: 0;
  position: relative;
  width: 100vw;
  height: 100vh;
  background: white;
}
#app {
  font-family: Roboto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.nav-bottom {
  background: #fff;
  position: fixed;
  bottom: 0;
  box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.nav-bottom a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}
.nav-bottom a.router-link-exact-active {
  color: #2997FF;
}
</style>
