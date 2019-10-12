<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  mounted() {
    this.$store.dispatch('setTest', 111).then(() => {
      console.log(this.test);
    })
  },
  computed: {
    ...mapGetters(['test'])
  }
}
</script>
<style lang="scss">
</style>
