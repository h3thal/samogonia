<template>
  <Navbar/>
  <img alt="Vue logo" src="./assets/logo.png">
  <Accouting/>
  <router-view></router-view>
</template>

<script>
import Navbar from './components/Nav/Navbar.vue'
import Accouting from './components/Accounting/Accounting.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Accouting
  }
}
</script>

<style lang="scss">
* {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
