<template>
  <div class="goods-item" @click="itemClick()">
    <img :src="showImage" @load="imgload" :key="showImage" />
    <div class="goods-info">
      <p>{{ goodsItem.title }}</p>
      <span class="price">{{ goodsItem.price }}</span>
      <span class="collect">{{ goodsItem.cfav }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },

  computed: {
    showImage() {
      return (
        this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      );
    },
  },

  methods: {
    imgload() {
      this.$bus.$emit("imgload");
    },
    itemClick() {
      const iid = this.goodsItem.iid;
      this.$router.push({ path: "/detail", query: { iid } });
    },
  },
};
</script>
<style scoped>
.goods-item {
  width: 48%;
  position: relative;
}
.goods-item img {
  width: 100%;
  border-radius: 5px;
}
.goods-info {
  margin-top: 5px;
  text-align: center;
}
.goods-info p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}
.price {
  color: rgb(201, 30, 30);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
