<template>
  <div class="shelf-item" :class="{'shelf-item-shadow': data.type === 1 || data.type === 2}">
    <component :is="item" :data="data"></component>
  </div>
</template>

<script>
import { storeShelfMixin } from '../../utils/mixin'
import ShelfBook from './ShelfItemBook'
import ShelfCategory from './ShelfItemCategory'
import ShelfAdd from './ShelfItemAdd'

export default {
  mixins: [storeShelfMixin],
  data() {
    return {
      book: ShelfBook,
      category: ShelfCategory,
      add: ShelfAdd
    }
  },
  props: {
    data: Object
  },
  computed: {
    item() {
      return this.data.type === 1
        ? this.book
        : this.data.type === 2
        ? this.category
        : this.add
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../assets/styles/global.scss';

.shelf-item {
  width: 100%;
  height: 100%;
  &.shelf-item-shadow {
    box-shadow: px2rem(2) px2rem(2) px2rem(6) px2rem(2) rgba(200, 200, 200, 0.3);
  }
}
</style>
