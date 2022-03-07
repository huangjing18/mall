<template>
  <div class="tab-control">
    <div
      class="tab-control-item"
      v-for="(item, index) in titles"
      :key="index"
      :class="{ active: currentIndex === index }"
      @click="itemClick(index)"
    >
      <span> {{ item }}</span>
    </div>
  </div>
</template>
<script>
export default {
    props: {
    titles: {
      type: Array,
      default() {
        return ["流行", "新款", "精选"];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit('tabClick',index)
    },
  },
};
</script>
<style scoped>
.tab-control {
  display: flex;
  text-align: center;
  height: 40px;
  line-height: 40px;
  font-size: 18px;
}
.tab-control-item {
  flex: 1;
}
.tab-control-item.active span {
  padding: 5px;
  border-bottom: 1px solid rgb(167, 11, 11);
  color: rgb(167, 11, 11);
}
</style>
