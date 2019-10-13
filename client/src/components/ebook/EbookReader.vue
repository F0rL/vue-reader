<template>
  <div class="ebook-reader">
    <div id="read"></div>
  </div>
</template>

<script>
import Epub from "epubjs";
import { mapGetters } from "vuex";
global.ePub = Epub;

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["fileName"])
  },
  mounted() {
    const fileName = this.$route.params.fileName.split("|").join("/");
    this.$store.dispatch("setFileName", fileName).then(() => {
      this.initEpub();
    });
  },
  methods: {
    initEpub() {
      const url = `http://localhost:3000/epub/${this.fileName}.epub`;
      this.book  = new Epub(url)
      this.rendition = this.book.renderTo('read',{
        width: innerWidth,
        height: innerHeight,
        method: 'default'
      })
      this.rendition.display()
}
  }
};
</script>

<style scoped lang="scss">
</style>
