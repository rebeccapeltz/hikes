/* eslint-disable */
<template>
  <div id="app">
    <router-link v-bind:to="'/'"><img class="backpacker-logo" src="./assets/backpacker.svg"></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.backpacker-logo{
  height: 150px;
}
</style>
