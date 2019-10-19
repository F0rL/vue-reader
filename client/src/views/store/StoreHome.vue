<template>
  <div class="store-home">
    <search-bar></search-bar>
    <flap-card :data="random"></flap-card>
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
import FlapCard from '../../components/home/FlapCard'
import { storeHomeMixin } from '../../utils/mixin'
import { home } from '../../api/store'
export default {
  mixins: [storeHomeMixin],
  data() {
    return {
      scrollTop: 94,
      random: null
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
  mounted() {
    home().then(res => {
      if (res && res.status === 200) {
        const data = res.data
        const randomIndex = Math.floor(Math.random()) * data.random.length
        this.random = data.random[randomIndex]
      }
    })
  },
  components: {
    SearchBar,
    Scroll,
    FlapCard
  }
}
</script>

<style scoped lang="scss">
</style>
