<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <AppDisplay msg="Welcome to Your Web App Launcher"/>
  </div>
</template>

<script>
import AppDisplay from './components/AppDisplay.vue'

export default {
  name: 'app',
  components: {
    AppDisplay
  }
}
</script>

<style>
#app {

}
</style>
