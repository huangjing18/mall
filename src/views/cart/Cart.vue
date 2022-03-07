<template>
  <div>购物车</div>
</template>
<script>
export default {
  data() {
    return {
      cartList:[]
    };
  },

    created() {
    this.$bus.$on("addCart", (msg)=> {
      this.cartList.push(msg) ;
    }); 
  },
  methods: {},
};
</script>
<style scoped>
</style>
