<template>
  <div class="mainPage">
    <header>
      <p>Заказ с собой</p>
    </header>
    <section id="menupage">
      <router-link to="/menu">
        <div class="rest">
          <img src="../assets/img/rest1.png" alt="Del Papa Image"/>
          <div class="textinfo">
            <p class="restname">Del Papa</p>
            <p class="restadress">ул. Бухар жырау, 66, уг. ул. Ауэзова</p>
          </div>
        </div>
      </router-link>
      <div class="between">
        <div class="betweenline"></div>
      </div>

      <div class="rest">
        <img src="../assets/img/rest2.png" alt="Svet Image"/>
        <div class="textinfo">
          <p class="restname">Ресторан "Свет"</p>
          <p class="restadress">ул. Кабанбай батыра 83</p>
        </div>
      </div>
      <div class="between">
        <div class="betweenline"></div>
      </div>

      <div class="rest">
        <img src="../assets/img/rest3.png" alt="Mama Mia Image"/>
        <div class="textinfo">
          <p class="restname">Mamma Mia</p>
          <p class="restadress">ул. Панфилова 109</p>
        </div>
      </div>
      <div class="between">
        <div class="betweenline"></div>
      </div>

      <div class="rest">
        <img src="../assets/img/rest4.png" alt="Bahandi Burger Image"/>
        <div class="textinfo">
          <p class="restname">Bahandi Burger</p>
          <p class="restadress">ул. Байтурсынова 61</p>
        </div>
      </div>
      <div class="between">
        <div class="betweenline"></div>
      </div>

      <div class="rest">
        <img src="../assets/img/rest5.png" alt="KFC Image"/>
        <div class="textinfo">
          <p class="restname">KFC</p>
          <p class="restadress">ул. Кабанбай батыра 83</p>
        </div>
      </div>

    </section>
  </div>

</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>
<style scoped>
.mainPage {
  height: 100vh;
  padding-bottom: 60px;
  padding-top: 60px;
}
/* Header */

header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100vw;
  height: 60px;
  background: #ffffff;
  text-align: start;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
  margin-bottom: 20px;
}

header > p {
  padding-left: 16px;
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 100%;
  color: #131113;
}

#menupage {
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

section > .rest {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
  width: 100%;
  height: 90px;
}

section > .rest > img {
  width: 90px;
  height: 90px;
  flex: none;
  order: 0;
  flex-grow: 0;
  border-radius: 8px;
  margin: 0px 16px;
}

section > .rest > .textinfo > .restname {
  font-family: Roboto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  /* identical to box height, or 125% */

  /* Text/Primary (Black) */

  color: #131113;
  /* Inside auto layout */
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 8px 0px;
}
section > .rest > .textinfo > .restadress {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  /* or 114% */

  /* Text/Primary (Black) */

  color: #131113;

  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 0px;
}

section > .rest > .textinfo {
  /* margin-left: 16px; */
  margin-right: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  width: 100%;
}
section > .between {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 100vw;
}

section > .between > .betweenline {
  height: 1px;
  width: 100%;
  margin: 0px 16px;
  background: #ececec;
}
</style>
