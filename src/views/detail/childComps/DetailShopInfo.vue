<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" />
      <span class="title">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="sells-count">
            {{ shop.sells | sellCountFilter }}
          </div>
          <div class="sells-text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="goods-count">
            {{ shop.goodsCount }}
          </div>
          <div class="goods-text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item, index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
    shop: {
      type: Object,
    },
  },
  filters: {
    sellCountFilter: function (value) {
      if (value < 10000) return value;
      return (value / 10000).toFixed(1) + "万";
    },
  },
};
</script>

<style scoped>
.shop-info {
  margin: 20px 10px;
}
.shop-top {
  display: flex;
  align-items: center;
  margin-bottom: 18px;
}
.shop-top img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
.shop-top .title {
  padding-left: 10px;
}
.shop-middle{
    display: flex;
    align-items: center;
}
.shop-middle-left{
    justify-content: space-evenly;
    border-right: 2px solid rgb(243, 238, 238);;
}
.shop-middle-item{
    display: flex;
    margin:  15px;
    flex: 1;
}
.sells-count ,.goods-count{
    font-size: 18px;
    padding-bottom: 15px;
}

  .sells-text, .goods-text {
    font-size: 12px;
  }
    .shop-middle-right table td {
    padding: 5px 0;
  }
   .shop-middle-right .better span {
    background-color: #5ea732;
    color: #fff;
    text-align: center;
  }

  .shop-middle-right .better-more span {
    background-color: #f13e3a;
  }
  .shop-bottom {
    text-align: center;
    margin-top: 10px;
  }

  .enter-shop {
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f8;
    width: 150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
  }
</style>
