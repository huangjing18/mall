<template>
  <div class="tabbarItem" @click="itemClick">
    <div v-if="!isActive" class="icon-img"><slot name="icon-img"></slot></div>
    <div v-else class="icon-img-active">
      <slot name="icon-img-active"></slot>
    </div>
    <div class="icon-text" :style="activeStyle">
      <slot name="icon-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    path: {
      type: String,
      default: "",
    },
    activeClass: {
      type: String,
      default: "#ff5777",
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) !== -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeClass } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path);
    },
  },
};
</script>
<style scoped>
.tabbarItem {
  flex: 1;
}
.tabbarItem img {
  width: 24px;
  height: 24px;
}
</style>
