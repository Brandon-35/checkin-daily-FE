<template>
  <div class="template-wrapper" :class="{ show_modal: isModal }">
    <Calendar @openModal="openModal" :isModal="isModal" />
    <Modal :isModal="isModal" :date="date" @closeModal="closeModal" />
  </div>
</template>

<script>
import Calendar from './components/Calendar.vue'
import Modal from './components/Modal.vue';
export default {
  name: 'App',
  components: {
    Calendar,
    Modal
  },
  data() {
    return {
      isModal: true,
      date: new Date(),
    }
  },
  methods: {
    openModal({ date }) {
      this.isModal = true;
      this.date = date;
    },
    closeModal(){
      this.isModal = false;
    }
  }
}
</script>

<style>
.show_modal::before{
  position: absolute;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  content: '';
  top: 0;
  left: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


@media (min-width: 768px) {
  .container {
    width: 750px;
  }
}

@media (min-width: 992px) {
  .container {
    width: 970px;
  }
}

@media (min-width: 1200px) {
  .container {
    width: 1170px;
  }
}
</style>
