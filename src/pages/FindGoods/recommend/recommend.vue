<template>
    <div class="recommend" v-if="recommend[0]">
      <div class="pic">
        <div class="imgPackage">
          <img :src="recommend[0].ad.picUrl" alt="">
        </div>
      </div>
      <div>
        <div class="item" v-for="(item,index) in recommend[0].topics" :key="index">
          <div class="type1" v-if="item.type===1">
            <div class="type1content">
              <div class="text">
                <div class="name">
                            <span class="avatar">
                              <img :src="item.avatar" alt="">
                            </span>
                  <span>{{item.nickname}}</span>
                </div>
                <div class="title">{{item.title}}</div>
                <div class="desc">{{item.subTitle}}</div>
                <div class="count">
                  <i class="icon-guankan iconfont"></i>
                  <span>{{item.readCount/1000}}k人看过</span>
                </div>
              </div>
              <div class="pict">
                <img :src="item.picUrl" alt="">
              </div>
            </div>
          </div>
          <div class="type0" v-else-if="item.type===0">
            <div class="type0content">
              <div class="name">
                            <span class="ava">
                              <img :src="item.avatar" alt="">
                            </span>
                <span>{{item.nickname}}</span>
              </div>
              <div class="title">{{item.title}}</div>
              <div class="pic">
                <img :src="item.picUrl" alt="">
              </div>
              <div class="count">
                <i class="icon-guankan iconfont"></i>
                <span>{{item.readCount/1000}}k人看过</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "recommend",
        computed:{
          ...mapState(["recommend"])
        },
        mounted(){
          this.$store.dispatch("recommend")
        }
    }
</script>

<style scoped lang="stylus">
  .recommend
       .pic
         width 100%
         background #fff
         margin .2rem 0
         box-sizing border-box
         padding .36rem .3rem
         .imgPackage
           width 6.9rem;
           height 3.76rem;
           position relative;
           overflow hidden;
           border-radius .08rem;
           img
               width 100%
               height 100%
       .item
           .type1
             position relative;
             padding .32rem .3rem
             width 100%;
             background #fff;
             margin .2rem 0;
             box-sizing: border-box;
             .type1content
                 display flex
                 justify-content: space-between
                 flex-wrap: wrap;
                 .text
                    float left
                    width 4rem;
                    .name
                        width 100%
                        font-size: .28rem;
                        color: #333;
                        line-height: .36rem;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis
                        .avatar
                           display inline-block
                           width .56rem;
                           height .56rem;
                           overflow hidden;
                           border-radius 50%
                           box-sizing border-box;
                           border .01rem solid #d9d9d9;
                           margin-right .12rem
                           img
                              width 100%
                              height 100%
                        span
                            vertical-align: middle
                    .title
                      width 100%;
                      font-size .36rem;
                      color #333;
                      line-height .44rem;
                      overflow hidden;
                      text-overflow ellipsis
                      padding-top .32rem
                    .desc
                       width 100%;
                       white-space nowrap;
                       overflow hidden;
                       text-overflow ellipsis;
                       font-size .28rem;
                       line-height .4rem;
                       padding-top .08rem;
                       color #7f7f7f

                    .count
                      position absolute;
                      left .3rem;
                      bottom .26rem;
                      font-size .22rem;
                      color #999;
                      line-height .32rem;
                      margin-top .18rem;
                      .iconfont
                           margin-right: .08rem
                           vertical-align: middle
                 .pict
                   float left
                   width 2.72rem;
                   height 2.72rem;
                   position relative;
                   overflow hidden;
                   border-radius .08rem
                   img
                        width 100%
                        height 100%
           .type0
              width 100%;
              background #fff;
              margin .2rem 0;
              box-sizing border-box;
              padding .36rem .3rem
              .type0content
                  .name
                    font-size .28rem;
                    color #333;
                    line-height .36rem;
                    white-space nowrap;
                    overflow hidden;
                    text-overflow ellipsis
                    margin-bottom: .24rem
                    .ava
                      display inline-block
                      width .56rem;
                      height .56rem;
                      overflow hidden;
                      border-radius 50%;
                      box-sizing: border-box;
                      border: .01rem solid #d9d9d9;
                      margin-right: .12rem
                      img
                         width 100%
                         height 100%
                    span
                      vertical-align: middle
                  .title
                    font-size .36rem;
                    color #333;
                    line-height .52rem;
                    margin -.08rem 0 .16rem 0;
                    overflow hidden;
                    text-overflow ellipsis;
                  .pic
                    padding 0
                    width 6.9rem;
                    height 3.76rem;
                    margin-bottom .2rem;
                    overflow hidden;
                    border-radius .08rem
                    img
                       width 100%
                       height 100%
                  .count
                    margin-bottom -.16rem
                    font-size .22rem;
                    color #999;
                    line-height .32rem;
                    margin-top .18rem
                    .iconfont
                      margin-right: .08rem
                      vertical-align: middle
                    span
                      vertical-align: middle
</style>
