<template>
  <div class="searchGoods">
    <i class="iconfont icon-sousuo icon"></i>
    <input type="text" placeholder="搜索商品，共有111款好物">
  </div>
</template>

<script>
    export default {
        name: "head-search"
    }
</script>

<style scoped lang="stylus">
  .searchGoods
    width 4.4rem
    height .56rem
    border-radius 5px
    background-color  #eee
    text-align center
    line-height .56rem
    .icon
      font-size 18px
      position relative
      top 2px
    input
      background-color  #eee
      width 3.25rem
      font-size 14px
</style>
