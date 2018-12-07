<template>
  <div class="foot-wrap">
    <a href="javascript:;" class="item" @click="goto('/home')" :class="{on:$route.path==='/home'}">
      <span>
        <i class="iconfont icon-shouye3"></i>
      </span>
      <span>首页</span>
    </a>
    <a href="javascript:;" class="item" @click="goto('/sort')" :class="{on:$route.path==='/sort'}">
      <span>
        <i class="iconfont icon-fenlei3"></i>
      </span>
      <span>分类</span>
    </a>
    <a href="javascript:;" class="item" @click="goto('/findGoods')" :class="{on:findGood('/findGoods')}">
      <span>
        <i class="iconfont icon-wpml"></i>
      </span>
      <span>识物</span>
    </a>
    <a href="javascript:;" class="item" @click="goto('/shopCart')" :class="{on:$route.path==='/shopCart'}">
      <span>
        <i class="iconfont icon-gouwuche1"></i>
      </span>
      <span>购物车</span>
    </a>
    <a href="javascript:;" class="item" @click="goto('/personal')" :class="{on:$route.path==='/personal'}">
      <span>
        <i class="iconfont icon-geren"></i>
      </span>
      <span>个人</span>
    </a>
  </div>
</template>

<script>
    export default {
        name: "foot",
        methods:{
         goto(addr){
           this.$router.replace(addr)
         },
         findGood(path){
           return !this.$route.path.indexOf(path)
         }
      }
    }
</script>

<style scoped lang="stylus">
  .foot-wrap
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 0.98rem
    display flex
    .item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color red
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
