<template>
  <div ref="wrapper" class="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
export default {
  data() {
    return {
      scroll: null,
    };
  },
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    click: {
      type: Boolean,
      default: true,
    },
     pullUpLoad: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  mounted() {
    setTimeout(this._initScroll, 20);
  },
  methods: {
    _initScroll() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click,
        pullUpLoad:this.pullUpLoad
      });
      if(this.probeType==3){
        this.scroll.on('scroll',(position)=>{
          this.$emit('scroll',position)
        })
      }
      // 上来加载更多
      if(this.pullUpLoad){
        this.scroll.on('pullingUp',()=>{
          this.$emit('pullingUp')
        })
      }
    },
    refresh() {
      this.scroll && this.scroll.refresh && this.scroll.refresh();
    },
    finishedPullUp() {
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp();
    },
    scrollTo(x, y, time = 100) {
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
    },
  },
};
</script>
<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
