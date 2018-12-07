<template>
  <div class="shopCart">
      <div class="shopWrap">
           <div class="wrap">
               <div class="main">
                 <div class="cart">
                   <div class="cartHD">
                        <span class="text1">购物车</span>
                        <div class="text2">
                          <span>领券</span>
                        </div>
                   </div>
                 </div>
                 <div class="tab">
                   <ul class="tabContent">
                     <li>
                       <i class="iconfont icon-dian"></i>
                       <span>30天无忧退货</span>
                     </li>
                     <li>
                       <i class="iconfont icon-dian"></i>
                       <span>48小时快速退款</span>
                     </li>
                     <li>
                       <i class="iconfont icon-dian"></i>
                       <span>满88元免邮费</span>
                     </li>
                   </ul>
                 </div>
                 <div class="content">
                   <div class="cartContent">
                     <div class="img"></div>
                     <div class="text">
                       <span class="one">
                         去添加点什么吧
                       </span>
                       <div class="two">登录</div>
                     </div>
                   </div>
                 </div>
               </div>
           </div>
      </div>
  </div>
</template>

<script>
    export default {
        name: "shop-cart"
    }
</script>

<style scoped lang="stylus">
 .shopCart
     width 100%
     .shopWrap
         height 3.55rem
         width 100%
         .wrap
           width: 100%
           .main
             padding-bottom: 2.64rem
             .cart
                height 0.88rem
                .cartHD
                  width 6.9rem
                  height .88rem;
                  padding 0 .4rem;
                  line-height .88rem;
                  text-align center;
                  background-color #fff;
                  position relative
                  .text1
                      font-size: .36rem
                  .text2
                      position: absolute;
                      top: 0.05rem;
                      right: .6rem;
                      font-size: .3rem
                      width 0.9rem
                      height 0.87rem
                      color #B4282D
             .tab
                 background-color: #f4f4f4;
                 height 0.7rem
                 line-height .7rem
                 .tabContent
                    display flex
                    justify-content space-between
                    li
                       width  2.2rem
                       height 0.36rem
                       color #666
                       font-size 0.24rem
             .content
               position absolute
               left 0
               width: 100%;
               background-color: #f4f4f4;
               text-align: center
               height 12.46rem
               .cartContent
                     height 3rem
                     margin-top 4rem
                     .img
                         margin 0 auto
                         background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
                         background-size 100% 100%
                         width 2.48rem;
                         height 2.48rem
                     .text
                          height 1.7rem
                          .one
                              display inline-block
                              height .27rem
                              margin-bottom .5rem
                          .two
                               height 0.92rem
                               line-height .92rem
                               width 4.8rem
                               margin 0 1.35rem
                               background-color #b4282d
                               color white
                               font-size 0.3rem
</style>
