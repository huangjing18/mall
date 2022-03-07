<template>
  <div class="goods-param">
    <table
      class="param-size"
      v-for="(table, index1) in paramInfo.sizes"
      :key="index1"
    >
      <tr v-for="(tr, index2) in table" :key="index2">
        <td v-for="(td, index3) in tr" :key="index3">{{ td }}</td>
      </tr>
    </table>
    <table class="param-info">
      <tr v-for="(item, index1) in paramInfo.infos" :key="index1">
        <td class="param-key">{{ item.key }}</td>
        <td class="param-value">{{ item.value }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  props: {
    paramInfo: {
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
.goods-param {
  padding: 15px 20px;
}
.goods-param table {
  width: 100%;
  border-collapse: collapse; /* 合并相邻边框*/
}
.goods-param table tr {
  height: 42px;
}
.goods-param table tr td {
  border-bottom: 1px solid rgba(65, 62, 62, 0.1);
}

.param-key {
  /*当value的数据量比较大的时候, 会挤到key,所以给一个固定的宽度*/
  width: 95px;
}
.param-info {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.param-value {
  color: #eb4868;
}
</style>
