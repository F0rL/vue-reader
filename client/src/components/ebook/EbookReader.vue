<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from "epubjs";
import {ebookMixin} from '../../utils/mixin'
global.ePub = Epub;

export default {
  mixins:[ebookMixin],
  mounted() {
    const fileName = this.$route.params.fileName.split("|").join("/");
    this.$store.dispatch("setFileName", fileName).then(() => {
      this.initEpub();
    });
  },
  methods: {
    prevPage() {
      if (this.rendition) {
        this.rendition.prev();
        this.hideTitleAndMenu()
      }
    },
    nextPage() {
      if (this.rendition) {
        this.rendition.next();
        this.hideTitleAndMenu()
      }
    },
    toggleTitleAndMenu() {
      this.$store.dispatch('setMenuVisible', !this.menuVisible)
    },
    hideTitleAndMenu(){
      this.$store.dispatch('setMenuVisible', false)
    },
    initEpub() {
      const url = `http://192.168.1.102:3000/epub/${this.fileName}.epub`;
      this.book = new Epub(url);
      this.rendition = this.book.renderTo("read", {
        width: innerWidth,
        height: innerHeight,
        method: "default"
      });
      this.rendition.display();
      this.rendition.on("touchstart", event => {
        this.touchStartX = event.changedTouches[0].clientX;
        this.touchStartTime = event.timeStamp;
      });
      this.rendition.on("touchend", event => {
        const offsetX = event.changedTouches[0].clientX - this.touchStartX;
        const time = event.timeStamp - this.touchStartTime;
        if (time < 500 && offsetX > 40) {
          this.prevPage();
        } else if (time < 500 && offsetX < -40) {
          this.nextPage();
        } else {
          this.toggleTitleAndMenu();
        }
      //禁止默认调用和传播
        event.preventDefault();
        event.stopPropagation();
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
