<template>
  <v-date-picker v-model="date" color="yellow" is-dark title-position="left" show-weeknumbers="left-outside"
    @click="say('hello')" is-expanded />
</template>

<script>

export default {
  name: 'c-calendar',
  data() {
    return {
      date: new Date(),
      isModal: false
    };
  },
  watch: {

    date(newDate, oldDate) {
      console.log({ newDate, oldDate });
      if (!this.isModal) {
        this.isModal = true;
        console.log(1);
      }
    }
  },
  methods: {
    say(message) {
      console.log(message);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
