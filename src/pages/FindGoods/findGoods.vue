<template>
  <div class="findGoods">
      <header class="header">
          <div class="headerWarp">
            <div class="icon" @click="$router.replace('/')">
              <i class="iconfont icon-shouye3"></i>
            </div>
            <div class="text">
              <span class="one">发现</span>
              <span class="two">甄选家</span>
            </div>
            <div class="search">
              <i class="iconfont icon-sousuo icon1" ></i>
              <i class="iconfont icon-gouwuche1 icon2"></i>
            </div>
          </div>
      </header>
      <div class="tab">
         <ul class="tabUL">
           <li class="item" v-for="(tab,index) in findTab" :key="index">
             <router-link :to="`/findGoods/tab/${index}`">{{tab.tabName}}</router-link>
           </li>
         </ul>
      </div>
      <div class="content">
         <router-view></router-view>
       </div>
  </div>
</template>

<script>
    import {mapState} from "vuex"
    export default {
        name: "find-goods",
        computed:{
          ...mapState(["findTab"])
        },
        mounted(){
          this.$store.dispatch("findTab")
        }
    }
</script>

<style scoped lang="stylus">
  @import "../../comment/stylus/mixins.styl"
  .findGoods
    background-color #E0E0E0
    .header
         bottom-border-1px(#E0E0E0)
         width 100%
         height 1rem
         position fixed
         top 0
         left 0
         background-color #FAFAFA
         z-index 100
         .headerWarp
            padding: 0 .26rem 0 .24rem
            position relative
            .icon
               float left
               width .46rem
               height 1rem
               line-height 1rem
               .iconfont
                   font-size .5rem
            .text
                position absolute
                width  3.2rem
                height  100%
                line-height: 1rem;
                text-align: center
                left 50%;
                top  0
                margin-left -1.6rem
                .one
                  font-size .4rem;
                  color #b4282d
                  font-weight bold
                  vertical-align  middle
                .two
                  padding 0 .16rem
                  vertical-align  middle
                  color  #7F7F7F
            .search
               float  right
               height  1rem
               line-height 1rem
               margin-right  .02rem
               .icon1
                   margin-right .3rem;
                   font-size .5rem
               .icon2
                  font-size .5rem

    .tab
        width 100%
        height .72rem
        background #fafafa
        border-bottom .01rem solid #d9d9d9
        position fixed
        top 1rem
        left 0
        z-index 100
        .tabUL
            height 100%
            width 100%
            display flex
            align-items center
            .item
              font-size .28rem
              display flex
              flex 1
              justify-content center
              height 100%
              line-height .72rem
              a
                &.router-link-exact-active
                    color #B4282D
                    bottom-border-1px(#B4282D)
                    &::before
                      height .06rem


    .content
        padding 1.72rem 0 1rem 0
</style>
