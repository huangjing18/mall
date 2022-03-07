<template>
  <div class="home">
    <nav-bar class="home-nar"><div slot="center">购物街</div></nav-bar>
    <tab-control
      v-show="showTabControl"
      @tabClick="tabClick"
      class="tab-control"
      ref="topTab"
    ></tab-control>
    <scroll
      :probeType="3"
      :pullUpLoad="true"
      @pullingUp="loadMore"
      @scroll="contenScroll"
         :data="[showGoodsList]"
      class="content"
      ref="scroll"
    >
      <home-swiper
        :banners="banners"
        @swiperLoaded="swiperLoaded"
      ></home-swiper>
      <homer-recommend :recommends="recommends"></homer-recommend>
      <home-feature></home-feature>
      <tab-control
        @tabClick="tabClick"
        ref="contentTab"
      ></tab-control>
      <goodslist :products="showGoodsList"></goodslist>
    </scroll>
    <back-top v-show="showBackTop" @click.native="backTop"> </back-top>
  </div>
</template>
<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import { getMultiData, getProductData } from "../../network/home";
import { POP, NEW, SELL } from "../../common/const";
import HomeFeature from "./childComps/HomeFeature.vue";
import HomerRecommend from "./childComps/HomerRecommend.vue";
import HomeSwiper from "./childComps/HomeSwiper.vue";
import TabControl from "../../components/common/tabControl/TabControl.vue";
import Goodslist from "../../components/content/goods/Goodslist.vue";
import BackTop from "../../components/common/backtop/BackTop.vue";
export default {
  components: {
    NavBar,
    HomeSwiper,
    HomerRecommend,
    HomeFeature,
    Scroll,
    TabControl,
    Goodslist,
    BackTop,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] },
      },
      currentType: POP,
      showBackTop: false,
      showTabControl: false,
      tabOffsetTop: 0,
    };
  },
  created() {
    this._getMultiData();
    this._getProductData(POP);
    this._getProductData(NEW);
    this._getProductData(SELL);
    this.$bus.$on("imgload", () => {
      this.$refs.scroll.refresh();
    });
  },
  computed: {
    showGoodsList() {
      return this.goods[this.currentType].list;
    },
  },

  methods: {
    _getMultiData() {
      getMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    _getProductData(type) {
      const page = this.goods[type].page;
      getProductData(type, page).then((res) => {
        const newData = res.data.list;
        this.goods[type].list.push(...newData);
        this.goods[type].page++;
        // 完成加载更多数据
        this.$refs.scroll.finishedPullUp();
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = POP;
          break;
        case 1:
          this.currentType = NEW;
          break;
        case 2:
          this.currentType = SELL;
          break;
      }
      this.$refs.contentTab.currentIndex = index;
      this.$refs.topTab.currentIndex =index;
    },
    loadMore() {
      this._getProductData(this.currentType);
    },
    swiperLoaded() {
      this.tabOffsetTop = this.$refs.contentTab.$el.offsetTop;
    },
    contenScroll(position) {
      this.showBackTop = -position.y > 1000;
      this.showTabControl = -position.y > this.tabOffsetTop;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
  },
};
</script>
<style scoped>
.home {
  height: 100vh;
  position: relative;
}
.home-nar {
  background-color: rgb(240, 106, 173);
  color: #fff;
}
.content {
  position: absolute;
  top: 44px;
  bottom: 55px;
  left: 0;
  right: 0;
}
.tab-control {
  position: relative;
  background-color: #fff;
  z-index: 100;
}
</style>
