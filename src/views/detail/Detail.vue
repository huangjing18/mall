<template>
  <div id="detail">
    <detail-nav-bar
      @titleClick="titleClick"
      :current-index="currentIndex"
    ></detail-nav-bar>
    <scroll
      class="content"
      ref="scroll1"
      @scroll="contentScroll"
      :probe-type="3"
      :data="[topImages, goods, shop, detailInfo]"
    >
      <detail-swiper :images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailInfo"
        @imageLoad="imageLoad"
      ></detail-goods-info>
      <detail-goods-param
        ref="param"
        :param-info="paramInfo"
      ></detail-goods-param>
      <detail-comment-info
        ref="comment"
        :comment-info="commentInfo"
      ></detail-comment-info>
      <goodslist ref="recomend" :products="goodsList"></goodslist>
    </scroll>
    <back-top v-show="isBack" @click.native="backTop"></back-top>
    <detail-bottom-bar @addCart="addCart"></detail-bottom-bar>
  </div>
</template>
<script>
import BackTop from "../../components/common/backtop/BackTop.vue";
import Scroll from "../../components/common/scroll/Scroll.vue";
import Goodslist from "../../components/content/goods/Goodslist.vue";
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "../../network/detail";
import DetailBaseInfo from "./childComps/detailBaseInfo.vue";
import DetailBottomBar from "./childComps/DetailBottomBar.vue";
import DetailCommentInfo from "./childComps/DetailCommentInfo.vue";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue";
import DetailGoodsParam from "./childComps/DetailGoodsParam.vue";
import DetailNavBar from "./childComps/DetailNavBar.vue";
import DetailShopInfo from "./childComps/DetailShopInfo.vue";
import DetailSwiper from "./childComps/DetailSwiper.vue";

export default {
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    Scroll,
    DetailGoodsInfo,
    DetailGoodsParam,
    DetailCommentInfo,
    Goodslist,
    BackTop,
    DetailBottomBar,
  },
  data() {
    return {
      iid: "",
      topImages: null,
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {},
      goodsList: [],
      themeOffset: [],
      currentIndex: 0,
      isBack: false,
    };
  },
  created() {
    this.iid = this.$route.query.iid;
    this._getDetail(this.iid);
    this._getRecommend();
    this.$bus.$on("imgload", () => {
      this.$refs.scroll1.refresh();
    });
  },
  methods: {
    _getDetail(iid) {
      getDetail(iid).then((res) => {
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shop = new Shop(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
      });
    },
    _getRecommend() {
      getRecommend().then((res) => {
        this.goodsList = res.data.list;
      });
    },
    imageLoad() {
      this.$refs.scroll1.refresh();
      this.themeOffset = [];
      this.themeOffset.push(0);
      this.themeOffset.push(this.$refs.param.$el.offsetTop);
      this.themeOffset.push(this.$refs.comment.$el.offsetTop);
      this.themeOffset.push(this.$refs.recomend.$el.offsetTop);
      this.themeOffset.push(Number.MAX_VALUE);
    },
    titleClick(index) {
      this.$refs.scroll1.scrollTo(0, -this.themeOffset[index], 2000);
    },
    contentScroll(position) {
      this._listenScrollTheme(-position.y);
      this.isBack = -position.y > 1000;
    },
    _listenScrollTheme(position) {
      let length = this.themeOffset.length;
      for (let i = 0; i < length; i++) {
        if (
          position >= this.themeOffset[i] &&
          position < this.themeOffset[i + 1]
        ) {
          if (this.currentIndex !== i) {
            this.currentIndex = i;
          }
          break;
        }
      }
    },
    backTop() {
      this.$refs.scroll1.scrollTo(0, 0, 500);
    },
    addCart() {
      const obj = {};
      obj.iid = this.iid;
      obj.imgURL = this.topImages[0];
      obj.title = this.goods.title;
      obj.desc = this.goods.desc;
      obj.price = this.goods.realPrice;
       this.$bus.$emit('addCart',obj) //传值
      this.$message({
        message: "加入购物车成功",
        offset: 350,
        type: "success",
        center: true,
      });
    },
  },
};
</script>
<style scoped>
#detail {
  height: 100vh;
  position: relative;
  z-index: 1;
  background-color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 58px;
  left: 0;
  right: 0;
}
</style>
