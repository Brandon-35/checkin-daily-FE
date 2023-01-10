<template>
  <v-date-picker v-model="date" color="yellow" is-dark title-position="left" show-weeknumbers="left-outside"
    is-expanded />
</template>

<script>

export default {
  name: 'c-calendar',
  props: ['isModal'],
  data() {
    return {
      date: new Date()
    };
  },
  watch: {
    date(newDate, oldDate) {
      console.log(oldDate);
      let isModal = this.isModal;
      if (!isModal) {
        if (newDate === null) {
          this.date = new Date();
        }
        this.date = newDate;
        this.$emit('openModal', { date: this.date })
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
