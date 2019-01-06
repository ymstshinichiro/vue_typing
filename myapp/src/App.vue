<template>
  <div id="app">
   <!--ここを削除 <img src="./assets/logo.png"> -->
    <header-component></header-component>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderComponent from './components/share/header.vue'

export default {
  name: 'app',
  components: {
    HeaderComponent
  }
}
</script>

<style>
#app {
  width: 650px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
