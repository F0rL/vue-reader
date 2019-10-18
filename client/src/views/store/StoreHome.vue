<template>
  <div class="store-home">
    <search-bar></search-bar>
    <scroll :top="scrollTop" @onScroll="onScroll" ref="scroll">
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
      <div>111111111111111111111111111</div>
    </scroll>
  </div>
</template>

<script>
import SearchBar from '../../components/home/SearchBar'
import Scroll from '../../components/common/Scroll'
import { storeHomeMixin } from '../../utils/mixin'
export default {
  mixins: [storeHomeMixin],
  data() {
    return {
      scrollTop: 94
    }
  },
  methods: {
    onScroll(offsetY) {
      this.setOffsetY(offsetY)
      if (offsetY > 0) {
        this.scrollTop = 52
      } else {
        this.scrollTop = 64
      }
      this.$refs.scroll.refresh()
    }
  },
  components: {
    SearchBar,
    Scroll
  }
}
</script>

<style scoped lang="scss">
</style>
