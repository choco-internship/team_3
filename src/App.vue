<template>
  <div id="app">
    <router-view/>
    <div id="nav">
      <router-link to="/">Main</router-link> |
      <router-link to="/about">My orders</router-link>|
      <router-link to="/rakhmet">Rakhmet</router-link>
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  position: absolute;
  bottom: 0;
  box-shadow: 0px -3px 3px rgba(0, 0, 0, 0.05);
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

#nav a {
  text-decoration: none;
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
