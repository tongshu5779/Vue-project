<template>
    <div class="homeHeader">
      <div class="homeHeaderWrap">
        <div class="package">
          <span class="logo"></span>
          <heade-search></heade-search>
          <div class="login">登录</div>
        </div>
      </div>
      <div class="nav" v-show="!down">
        <i class="iconfont" :class="down?'icon-jiantou9':'icon-shangjiantou'" @click="change" ref="icon1"></i>
        <div class="homeHeaderNav" ref="tabUl">
          <div class="navItem" v-for="(cate,index) in cateList" :key="index">
            <span :class="{active:index===0}">{{cate.name}}</span>
          </div>
        </div>
      </div>
      <div class="list" v-show="down">
          <div class="tabTitle">全部频道</div>
          <i class="iconfont" :class="down?'icon-jiantou9':'icon-shangjiantou'" @click="change" ref="icon2"></i>
          <div class="listwrap">
            <div class="listItem":class="{active:index===0}" v-for="(cate,index) in cateList" :key="index">
              <span >{{cate.name}}</span>
            </div>
          </div>

      </div>
      <div class="mask" v-show="down">

      </div>
    </div>
</template>

<script>
    import headeSearch from "../../components/headSearch/headSearch"
    import {mapState} from "vuex"
    import BScroll from "better-scroll"
    export default {
        name: "home-homeHead",
        data(){
          return{
            down:false
          }
        },
        components:{
          headeSearch,
        },
        computed:{
          ...mapState(["cateList"])
        },
        mounted(){
          const result = this.$store.dispatch("cateList")
          this.$nextTick(() => {
            this.tabScroll = new BScroll(".nav", {click: true, scrollX: true})
            this.cateList && this.setUlWidth()
          })
        },
        methods:{
          setUlWidth(){
            const ul = this.$refs.tabUl
            const liWidth = 1.6
            const size = this.cateList.length
            ul.style.width = liWidth * size+ 'rem'
          },
          change(){
            this.down=!this.down
          }
        },
       watch: {
         cateList() {
           this.$nextTick(() => {
              this.setUlWidth()
              this.tabScroll.refresh()
          })
        }
      },
    }
</script>

<style scoped lang="stylus">
   @import "../../comment/stylus/mixins.styl"
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
      .nav
        width 6.5rem
        overflow hidden
        .iconfont
              font-size .38rem
              position absolute
              right .4rem
              top .88rem

        .homeHeaderNav
           display flex
           height .6rem
           .navItem
               display flex
               justify-content center
               align-items center
               font-size 14px
               margin-left .1rem
               width 1.6rem
               position relative
               span
                  padding 0 .15rem
                  &.active
                    color #b4282d
                    &::before
                      content ''
                      position absolute
                      z-index 200
                      left 50%-.6rem
                      bottom 0
                      width .6rem
                      height .04rem
                      background-color #b4282d



      .list
         background-color #fff
         width 7.5rem
         height 3.72rem
         margin-top -.1rem
         z-index 10
         .tabTitle
            height .6rem
            line-height .6rem
            width 7.2rem
            padding-left .3rem
         .iconfont
             font-size .38rem
             position absolute
             right .4rem
             top .88rem
         .listwrap
             width 7.5rem
             height 2.88rem
             padding-top .24rem
             .listItem
                box-sizing border-box
                margin-left .3rem
                margin-bottom .4rem
                width 1.48rem
                height .54rem
                float left
                background-color #FAFAFA
                text-align center
                line-height .54rem
                border .03rem #F1F1F1 solid
                &.active
                   border .02rem rgb(180, 40, 45) solid
                   color rgb(180, 40, 45)
      .mask
         width 7.5rem
         height  6.67rem
         background-color rgba(0,0,0,.5)
         display fixed
         left 0
         right 0
         top 0
         bottom 0
         z-index 10
</style>
