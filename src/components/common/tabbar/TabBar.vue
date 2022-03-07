<template>
    <div class="tabbar">
       <slot></slot>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
methods:{
}

}
</script>
<style scoped>
.tabbar{
   display: flex;
   position: fixed;
   bottom: 0;
   left: 0;
   right: 0;
   height: 48px;
      text-align: center;
}
</style>
