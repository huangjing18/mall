<template>
  <div>
    <tab-bar>
      <tab-bar-item path='/home'>
        <img slot="icon-img" src="../../assets/img/tabbar/home.svg" alt="" />
        <img
          slot="icon-img-active"
          src="../../assets/img/tabbar/home_active.svg"
          alt=""
        />
        <span slot="icon-text">首页</span>
      </tab-bar-item>
      <tab-bar-item path='/category'>
        <img
          slot="icon-img"
          src="../../assets/img/tabbar/category.svg"
          alt=""
        />
        <img
          slot="icon-img-active"
          src="../../assets/img/tabbar/category_active.svg"
          alt=""
        />
        <span slot="icon-text">分类</span>
      </tab-bar-item>
      <tab-bar-item path='/cart'>
        <img
          slot="icon-img"
          src="../../assets/img/tabbar/shopcart.svg"
          alt=""
        />
        <img
          slot="icon-img-active"
          src="../../assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <span slot="icon-text">购物车</span>
      </tab-bar-item>
      <tab-bar-item path='/profile'>
        <img slot="icon-img" src="../../assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="icon-img-active"
          src="../../assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <span slot="icon-text">我的</span>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>
<script>
import TabBar from "../common/tabbar/TabBar.vue";
import TabBarItem from "../common/tabbar/TabBarItem.vue";
export default {
  components: { TabBar, TabBarItem },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
</style>
