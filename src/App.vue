/* eslint-disable */
<template>
  <div id="app">
    <img class="backpacker-logo" src="./assets/backpacker.svg">
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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.backpacker-logo{
  height: 200px;
}
</style>
