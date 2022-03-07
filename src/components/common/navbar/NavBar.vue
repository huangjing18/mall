<template>
  <div class="narbar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>
<style scoped>
.narbar {
  display: flex;
  height: 44px;
  text-align: center;
  line-height: 44px;
}
.left {
  width: 60px;
}
.right {
  width: 60px;
}
.center {
  flex: 1;
}
</style>
