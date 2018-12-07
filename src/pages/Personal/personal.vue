<template>
  <div class="personalWrap">
    <header class="header">
      <div class="headerWarp">
        <div class="icon" @click="$router.replace('/')">
          <i class="iconfont icon-shouye3"></i>
        </div>
        <div class="img">
          <span class="logo"></span>
        </div>
        <div class="search">
          <i class="iconfont icon-sousuo icon1" ></i>
          <i class="iconfont icon-gouwuche1 icon2"></i>
        </div>
      </div>
    </header>
    <div class="personalContent">
         <div class="cont">
            <div class="logoWrap">
              <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
            </div>
            <div class="btn">
              <div class="pLogin">
                <i class="iconfont icon-shouji"></i>
                <span>手机号码登录</span>
              </div>
              <div class="eLogin">
                <i class="iconfont icon-youxiang"></i>
                <span>邮箱账号登录</span>
              </div>
              <div class="register">
                <span class="text">手机号快捷注册</span>
                <i class="iconfont icon-youjiantou"></i>
              </div>
            </div>
         </div>
         <div class="thirdWrap">
           <div class="wx item">
             <i class="iconfont icon-weixin"></i>
             <span>微信</span>
           </div>
           <div class="qq item">
             <i class="iconfont icon-qq"></i>
             <span>QQ</span>
           </div>
           <div class="wb item">
             <i class="iconfont icon-weibo"></i>
             <span>微博</span>
           </div>
         </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "personal"
    }
</script>

<style scoped lang="stylus">
  .personalWrap
        width 7.5rem
        height 13.35rem
        position relative
        .header
           height .87rem
           width 100%
           background-color #FAFAFA
           .headerWarp
               height 100%
               padding-left  .24rem
               padding-right .16rem
               position relative
               display flex
               align-items center
               .icon
                  position absolute
                  top .18rem
                  width .64rem
                  height .58rem
                  .iconfont
                      font-size .6rem
               .img
                  width 1.8rem
                  height .5rem
                  position: absolute;
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  margin: auto;
                  .logo
                      display inline-block
                      width 100%
                      height 100%
                      background url("./images/logo.png")
                      background-size 100% 100%
               .search
                    width 1.5rem
                    height .6rem
                    position absolute
                    right .3rem
                    .iconfont
                        font-size .6rem
                        &.icon1
                           margin-right .2rem
        .personalContent
             background-color #F2F5F4
             height 12.46rem
             .cont
                   height 7rem
                   .logoWrap
                         height .88rem
                         padding 2rem 0
                         text-align: center
                         img
                              width 2.66rem
                              height .9rem


                   .btn
                      width 6.7rem
                      padding 0 .4rem
                      height 2.9rem
                      margin-bottom 2.05rem
                      .pLogin,.eLogin
                          background-color #b4282d
                          width 6.66rem
                          height 0.88rem
                          line-height .88rem
                          text-align center
                          margin-bottom .32rem
                          color #fff
                          .iconfont
                              font-size .35rem
                              margin-right .16rem
                              vertical-align middle
                          span
                            font-size .28rem
                      .eLogin
                          border .02rem #b4282d solid
                          background-color #F2F5F4
                          color  #b4282d

                   .register
                       text-align center
             .thirdWrap
                 width 100%
                 position absolute
                 top 11.26rem
                 left 0
                 text-align center
                 display flex
                 justify-content center
                 .item
                      width 1rem
                      height .4rem
                      padding 0 .4rem
                      color #7F7F7F
                      &.wx,&.qq
                         border-right .02rem #7F7F7F solid
</style>
