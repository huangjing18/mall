<template>
    <swiper   ref="swiper" class="home-swiper">
      <swiper-item v-for="(item, index) in banners" :key="index"  class="home-swiper-item">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imageLoaded" />
        </a>
      </swiper-item>
    </swiper>
</template>
<script>
import Swiper from "../../../components/common/swiper/Swiper.vue";
import SwiperItem from "../../../components/common/swiper/SwiperItem.vue";
export default {
  components: { Swiper, SwiperItem },
  data() {
    return {
      isLoad:false
    };
  },
  props: {
    banners: {
      type: Array,
      required: true,
    },
  },
  methods: {
    startTimer() {
      this.$refs.swiper && this.$refs.swiper.startTimer();
    },
    stopTimer() {
      this.$refs.swiper && this.$refs.swiper.stopTimer();
    },
    imageLoaded(){
      if(!this.isLoad){
        this.$emit('swiperLoaded')
        this.isLoad=true
      }
    }
  },
};
</script>
<style scoped>
</style>
