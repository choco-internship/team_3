<template>
  <div class="rakhmetPage">
    <Header :title="pageTitle" :icon="false" />
    <h1>This is an Rakhmet page</h1>
    <NavBar :pageActive="'Rakhmet'" />
  </div>
</template>


<script>

import Header from "../components/organisms/BaseHeader";
import NavBar from "../components/atoms/NavBar";
export default {
  name: "Rakhmet",
  components: {NavBar, Header},
  data() {
    return {
      pageTitle: "Rakhmet page"
    }
  }
}
</script>

<style scoped>
.rakhmetPage {
  height: calc(100vh - 60px);
  padding-top: 60px;
}
</style>