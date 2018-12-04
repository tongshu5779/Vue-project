<template>
    <div class="homeHeader">
      <div class="homeHeaderWrap">
        <div class="package">
          <span class="logo"></span>
          <div class="searchGoods">
            <i class="iconfont icon-sousuo icon"></i>
            <input type="text" placeholder="搜索商品，共有111款好物">
          </div>
          <div class="login">登录</div>
        </div>
      </div>
      <div class="homeHeaderNav">
        <div class="navItem active"><span>推荐</span></div>
        <div class="navItem"><span >居家</span></div>
        <div class="navItem"><span >鞋包配饰</span></div>
        <div class="navItem"><span>服饰</span></div>
        <div class="navItem"><span>电器</span></div>
        <div class="navItem"><span >洗护</span></div>
        <div class="navItem"><span >饮食</span></div>
        <div class="navItem"><span >餐厨</span></div>
        <div class="navItem"><span >婴童</span></div>
        <div class="navItem"><span >文体</span></div>
        <div class="navItem"><span >特色区</span></div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "home-homeHead"
    }
</script>

<style scoped lang="stylus">
   .homeHeader
      z-index 10
      position fixed
      left 0
      top 0
      height 1.47rem
      width 100%
      background-color white
      .homeHeaderWrap
         box-sizing:border-box;
         width 100%
         height .87rem
         padding 0 .3rem
         display flex
         .package
            width 100%
            display flex
            align-items center
            .logo
                margin-right .2rem
                display inline-block
                background url("./images/logo.png")
                background-size 100% 100%
                width 1.38rem
                height 0.39rem
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
            .login
                 text-align center
                 line-height .37rem
                 border-radius .10667rem
                 width .72rem
                 height .37rem
                 margin-left .16rem
                 font-size 12px
                 color #b4282d
                 border 1px #b4282d solid
      .homeHeaderNav
           display flex
           height .6rem
           width 12.51rem
           overflow hidden
           .navItem
               display flex
               justify-content center
               align-items center
               font-size 14px
               margin-left .2rem
               span
                  padding 0 .15rem
               &.active
                    color #b4282d
                    border-bottom 2px #b4282d solid

</style>
