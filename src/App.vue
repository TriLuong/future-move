<template>
  <div id="app">
    <Home />
    <Approach />
  </div>
</template>

<script defer>
import HelloWorld from './components/HelloWorld.vue'
import Home from "./layouts/Home"
import Approach from "./layouts/Approach"

export default {
  name: 'app',
  components: {
    Home,
    Approach
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  box-sizing: border-box;
}
</style>
