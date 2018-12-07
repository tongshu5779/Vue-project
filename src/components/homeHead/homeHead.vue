<template>
    <div class="homeHeader">
      <div class="homeHeaderWrap">
        <div class="package">
          <span class="logo"></span>
          <heade-search></heade-search>
          <div class="login">登录</div>
        </div>
      </div>
      <div class="nav">
        <div class="homeHeaderNav" ref="tabUl">
          <div class="navItem" v-for="(cate,index) in cateList" :key="index">
            <span :class="{active:index===0}">{{cate.name}}</span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import headeSearch from "../../components/headSearch/headSearch"
    import {mapState} from "vuex"
    import BScroll from "better-scroll"
    export default {
        name: "home-homeHead",
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
        width 100%
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

</style>
