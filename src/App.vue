<script setup>
import mybar from './views/mybar.vue';
import mycard from '/src/views/mycard.vue'
</script>

<template>
  <div id="app">
    <mybar />
    <router-view />
  </div>
</template>

<script>
export default {
  name:"app",
  component: {
    mybar,
  }
}
</script>

<style scoped>

</style>