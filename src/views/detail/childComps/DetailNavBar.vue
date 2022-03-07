<template>
  <div>
    <nav-bar>
      <img
        slot="left"
        class="back"
        @click="backClick"
        src="~assets/img/common/back.svg"
        alt=""
      />
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(title, index) in titles"
          :class="{ active: currentIndex == index }"
          @click="itemClick(index)"
          :key="index"
        >
          {{ title }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>
<script>
import NavBar from "../../../components/common/navbar/NavBar.vue";

export default {
  components: { NavBar },
  props: {
    currentIndex: {
      type: Number,
    },
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("titleClick", index);
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>
<style scoped>
.back {
  padding-top: 10px;
}
.title {
  display: flex;
  justify-content: space-evenly;
}
.title-item {
  flex: 1;
}
.active {
  color: rgb(212, 17, 17);
}
</style>
