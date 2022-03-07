<template>
  <div class="goodslist">
    <goodslist-item
      v-for="(item, index) in products"
      :key="index"
      :goods-item="item"
    ></goodslist-item>
  </div>
</template>
<script>
import GoodslistItem from "./GoodslistItem.vue";
export default {
  components: { GoodslistItem },
  props: {
    products: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.goodslist {
  display: flex;
  flex-wrap: wrap;
  padding: 5px;
  justify-content: space-around;
}
</style>
