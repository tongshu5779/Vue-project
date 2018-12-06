<template>
  <div class="sortWrap">
      <div class="sortPackage">
           <div class="sortHeader">
              <div class="header">
                  <head-search></head-search>
              </div>
           </div>
           <div class="menu-wrapper" ref="menuWrapper">
            <ul class="menuUL">
                <li class="menu-item ">
                  <span class="text active">1212专区</span>
                </li>
                <li class="menu-item">
                  <span class="text">冬季专区</span>
                </li>
                <li class="menu-item">
                  <span class="text">爆品专区</span>
                </li>
                <li class="menu-item">
                  <span class="text">新品专区</span>
                </li>
                <li class="menu-item">
                  <span class="text">居家</span>
                </li>
                <li class="menu-item">
                  <span class="text">鞋包配饰</span>
                </li>
              </ul>
        </div>
           <div class="goods-wrapper" ref="goodsWrapper">
              <div class="pic">
                  <div class="bg"></div>
              </div>
              <ul class="list">
                <li class="good-list">
                  <a href="javasrcipt:;">
                    <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <h1 class="title">三石福利价</h1>
                  </a>
                </li>
                <li class="good-list">
                  <a href="javasrcipt:;">
                    <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <h1 class="title">三石福利价</h1>
                  </a>
                </li>
                <li class="good-list">
                  <a href="javasrcipt:;">
                    <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <h1 class="title">三石福利价</h1>
                  </a>
                </li>
                <li class="good-list">
                  <a href="javasrcipt:;">
                    <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <h1 class="title">三石福利价</h1>
                  </a>
                </li>
                <li class="good-list">
                  <a href="javasrcipt:;">
                    <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <h1 class="title">三石福利价</h1>
                  </a>
                </li>
                <li class="good-list">
                  <a href="javasrcipt:;">
                    <img src="http://yanxuan.nosdn.127.net/39c1c32ca2301ced934e35db33150637.png?imageView&quality=85&thumbnail=144x144" alt="">
                    <h1 class="title">三石福利价</h1>
                  </a>
                </li>
              </ul>
            </div>

       </div>
  </div>
</template>

<script>
    import headSearch from "../../components/headSearch/headSearch"
    export default {
        name: "sort",
        components:{
          headSearch
        }
    }
</script>

<style scoped lang="stylus">
   .sortWrap
         .sortPackage
             width 100%
             height 14.43rem
             .sortHeader
                  width 6.9rem
                  height 0.88rem
                  padding 0 .3rem
                  display flex
                  align-items center
                  border-bottom 0.01rem #EDEDED solid
                  .header
                    width 6.9rem
                    height 0.56rem
                    background-color #EDEDED
                    display flex
                    justify-content center
                    position relative
             .menu-wrapper
                 width 1.62rem
                 height 12.46rem
                 position absolute
                 top 0.88rem
                 left 0
                 border-right 0.01rem #EDEDED solid
                 .menuUL
                   width 1.62rem
                   height 12.19rem
                   padding-top 0.4rem
                   padding-bottom 1.38rem
                   .menu-item
                     width 1.62rem
                     height 0.5rem
                     margin-top 0.4rem
                     text-align center
                     &:first-child
                         margin-top 0
                     .text
                       font-size 0.28rem
                       display inline-block
                       width 1.62rem
                       height 0.5rem
                       line-height 0.5rem
                       &.active
                          color #ab2b2b
                          border-left 0.03rem #ab2b2b solid


             .goods-wrapper
                 width 5.28rem
                 height 13.04rem
                 padding 0.3rem .3rem .21rem .3rem
                 margin-left 1.62rem
                 .pic
                     width 5.28rem
                     height 1.92rem
                     margin-bottom .32rem
                     .bg
                       width 5.28rem
                       height 1.92rem
                       background-image  url("http://yanxuan.nosdn.127.net/52855d9a0c1f738f26ac125913af0012.jpg?imageView&thumbnail=0x196&quality=75")
                       background-size 100% 100%
                 .list
                       width 5.28rem
                       display flex
                       flex-wrap wrap;
                       .good-list
                              width 1.44rem
                              height 2.16rem
                              margin-right .34rem
                              img
                                 width 1.44rem
                                 height 1.44rem
</style>
