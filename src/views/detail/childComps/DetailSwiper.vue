<template>
  <swiper>
    <swiper-item
      v-for="(item, index) in images"
      :key="index"
      class="swiper-item"
    >
      <img :src="item" alt="" />
    </swiper-item>
  </swiper>
</template>
<script>
import Swiper from "../../../components/common/swiper/Swiper.vue";
import SwiperItem from "../../../components/common/swiper/SwiperItem.vue";
export default {
  components: { Swiper, SwiperItem },
  props: {
    images: {
      type: Array,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.swiper-item{
    height: 300px;
}
</style>
