<template>
  <div class="sortWrap">
      <div class="sortPackage">
           <div class="sortHeader">
              <div class="header">
                  <head-search></head-search>
              </div>
           </div>
           <div class="menu-wrapper">
            <ul class="menuUL">
                <li class="menu-item"
                    v-for="(item,index) in category" :key="index"
                    @click="changeIndex(index)">
                  <span class="text" :class="{active:currentIndex===index}">{{item.name}}</span>
                </li>
              </ul>
        </div>
           <div class="goods-wrapper">
               <div class="list" v-if="category[currentIndex]">
                   <div class="pic"
                        :style="{background: `url('${category[currentIndex].wapBannerUrl}')`}"></div>
                   <div class="good-list" v-if="category[currentIndex].type===1">
                     <a href="javasrcipt:;" v-for="(pic,index) in category[currentIndex].subCateList" :key="index">
                       <img :src="pic.bannerUrl" alt="">
                       <h1 class="title">{{pic.name}}</h1>
                     </a>
                   </div>
                   <div class="goodList2" v-if="category[currentIndex].type===0">
                         <div v-for="(sub,index) in category[currentIndex].subCateList" :key="index" class="sub">
                            <h4>{{sub.name}}</h4>
                            <div class="item">
                              <a href="javascript:;"  v-for="(item,index) in sub.categoryList" :key="index">
                                <img :src="item.wapBannerUrl" alt="">
                                <i class="title">{{item.name}}</i>
                              </a>
                   </div>
                 </div>
               </div>
             </div>
           </div>
       </div>
  </div>
</template>

<script>
    import headSearch from "../../components/headSearch/headSearch"
    import BScroll from "better-scroll"
    import {mapState} from "vuex"
    export default {
        name: "sort",
        data(){
          return{
            currentIndex:0
          }
        },
        components:{
          headSearch
        },
        computed:{
          ...mapState(["category"]),
        },
        mounted(){
          this.$store.dispatch("category",()=> {
            this.$nextTick(() => {
              new BScroll(".menu-wrapper", {click: true})
              new BScroll(".goods-wrapper", {click: true})
            })
          })
        },
        methods:{
          changeIndex(index){
            this.currentIndex=index
          }
        }
    }
</script>

<style scoped lang="stylus">
   .sortWrap
         .sortPackage
             width 100%
             height 14.43rem
             .sortHeader
                  background-color white
                  width 6.9rem
                  height 0.88rem
                  padding 0 .3rem
                  display flex
                  align-items center
                  border-bottom 0.01rem #EDEDED solid
                  position fixed
                  left 0
                  top 0
                  z-index 100
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
                 margin-top 0.88rem
                 width 5.28rem
                 height 13.04rem
                 padding 0.3rem .3rem .21rem .3rem
                 margin-left 1.62rem
                 .list
                       width 5.28rem
                       display flex
                       flex-wrap wrap
                       .pic
                            width 5.28rem
                            height 1.92rem
                            margin-bottom .32rem
                            background-size 100% 100%
                       .good-list
                              a
                                  display inline-block
                                  width 1.44rem
                                  margin-right .34rem
                                  img
                                     width 1.44rem
                                     height 1.44rem
                                  &:nth-child(3n)
                                      margin-right 0
                                  .title
                                      display inline-block
                                      font-size .24rem
                                      text-align center
                                      width 1.44rem
                                      height .72rem
                       .goodList2
                              .sub
                                  width 5.28rem
                                  h4
                                      height .41rem
                                      padding-bottom .08rem
                                      border-bottom .02rem #ECECEC solid
                                      margin-bottom .24rem
                                  .item
                                       width 5.28rem
                                       a
                                         float left
                                         display inline-block
                                         width 1.44rem
                                         height 2.16rem
                                         margin-right .34rem
                                         &:nth-child(3n)
                                              margin-right 0
                                         img
                                            width  1.44rem
                                            height  1.44rem
                                         .title
                                              width 1.44rem
                                              height .72rem
      </style>
