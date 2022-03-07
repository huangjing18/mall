<template>
  <div class="comment-info">
    <div class="comment-header">
      <span>用户评价</span>
      <span>更多</span>
    </div>
    <div class="comment-main">
      <div class="user">
        <!-- <img :src="commentInfo.user.avatar" alt="" /> -->
        <!-- <span>{{ commentInfo.user.uname }}</span> -->
      </div>
      <div class="comment-desc">{{ commentInfo.content }}</div>
      <div class="comment-other">
        <span class="time">{{ commentInfo.created | showDate }}</span>
        <span>{{ commentInfo.style }}</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    commentInfo: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  methods: {},
  filters: {
    showDate: function (value) {
      var oldTime = new Date(value * 1000).getTime();
      var curTime = new Date(oldTime).toLocaleString("zh", { hour12: false });
      return curTime;
    },
  },
};
</script>
<style scoped>
.comment-info {
  padding: 0px 15px;
  margin: 15px 0px;
  padding-bottom: 15px;
  border-top: 8px solid rgb(182, 174, 174, 0.1);
  border-bottom: 8px solid rgb(173, 171, 171, 0.1);
}
.comment-header {
  padding: 20px 0px;
  font-size: 15px;
  border-bottom: 1px solid rgb(134, 134, 134, 0.5);
  display: flex;
  justify-content: space-between;
}
.user {
  display: flex;
  padding: 15px 0px;
  align-items: center;
}
.user img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-right: 8px;
}
.comment-desc {
  margin-bottom: 15px;
}
.comment-other {
  font-size: 15px;
  color: rgb(173, 169, 169);
}
.time {
  margin-right: 8px;
}
</style>
