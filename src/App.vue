<template>
  <div id="app">
    <Navigation/>
    <router-view/>
  </div>
</template>
<script>
import Navigation from './components/Navigation'
export default {
  components: {
    Navigation
  }
}
</script>
<style>
#app{
  width: 100%;
  height: 100%;
}
</style>
