<template>
  <div class="store">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global.scss';
.store {
  background: white;
  height: 100%;
  width: 100%;
}
</style>
