<template>
  <tela-principal/>
</template>

<script>
import tela-principal from './components/tela/principal.vue'

export default {
  name: 'App',
  components: {
    tela-principal
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
