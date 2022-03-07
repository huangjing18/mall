<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="item in recommends" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" />
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    recommends: {
      type: Array,
      required: true,
    },
  },
  methods: {},
};
</script>
<style scoped>
.home-recommend {
  display: flex;
  margin-top: 10px;
  font-size: 18px;
  padding-bottom: 30px;
  border-bottom: 10px solid #eee;
}
.home-recommend-item {
  flex: 1;
  text-align: center;
}
.home-recommend-item img {
  width: 103px;
  height: 103px;
  margin-bottom: 10px;
}
</style>
