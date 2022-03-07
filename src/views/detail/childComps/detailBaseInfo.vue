<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
    <div class="info-title">{{ goods.title }}</div>
    <div class="info-price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span
        class="info-service-item"
        v-for="index in goods.services.length - 1"
        :key="index"
      >
        <img :src="goods.services[index - 1].icon" />
        <span>{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    goods: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
  .base-info {
    margin-top: 15px;
    padding: 0 8px;
    color: #999;
    border-bottom: 5px solid #f2f5f8;
  }

  .info-title {
    color: #222
  }

  .info-price {
    margin: 15px;
    margin-left: 10px;
  }

  .info-price .n-price {
    font-size: 24px;
    color: rgb(211, 18, 18);
  }

  .info-price .o-price {
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-price .discount {
    font-size: 12px;
    padding: 2px 5px;
    color: #fff;
    background-color: rgb(211, 18, 18);
    border-radius: 8px;
    margin-left: 5px;

    /*让元素上浮一些: 使用相对定位即可*/
    position: relative;
    top: -8px;
  }
  .info-other{
      display: flex;
      margin: 10px;
      border-bottom: 1px solid rgb(175, 166, 166);
      justify-content: space-between;
      padding-bottom: 10px;
  }
  .info-service{
            display: flex;
      font-size: 16px;
      margin: 10px;
      padding: 20px 0px;
      justify-content: space-between;
      color: #000;
  }
  .info-service img{

      width: 14px;
      height: 14px;
  }
</style>
