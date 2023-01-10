<template>
  <Calendar msg="Welcome to Your Vue.js App"/>
  <Modal />
</template>

<script>
import Calendar from './components/Calendar.vue'
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  components: {
    Calendar,
    Modal
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
