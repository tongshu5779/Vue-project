<template>
    <div class="searchWrap">
      <div class="searchGoods">
        <div class="searchCon">
          <div class="goods">
            <i class="iconfont icon-sousuo icon" ></i>
            <input type="text" placeholder="搜索商品，共有111款好物" v-model="key">
          </div>
          <span>取消</span>
        </div>
        <div class="searchLists">
            <ul>
              <li v-for="(key,index) in searchKey" :key="index">
                 {{key}}
              </li>
            </ul>
        </div>
      </div>
      <div class="searchKey">
        <div  class="searchList">
          <header>热门搜索</header>
          <nav class="list">
            <a href="javascript">爆款行李箱</a>
          </nav>
        </div>
      </div>
    </div>
</template>

<script>
     import {mapState} from "vuex"
    export default {
        name: "search",
        data(){
          return{
            key:""
          }
        },
        computed:{
          ...mapState(["searchKey"])
        },
        mounted(){
          this.$store.dispatch("searchTab")
        },
        watch:{
          key(){
            console.log(this.key);
            this.$store.dispatch("searchKey",this.key)
          }
        }
    }
</script>

<style scoped lang="stylus">
 .searchWrap
     width 100%
     .searchGoods
          height .87rem
          position relative
          &::before
           content ''
           position absolute
           z-index 200
           left 0
           bottom 0
           width 100%
           height .02rem
           background-color #f4f4f4
          .searchCon
              width 6.9rem
              height 100%
              line-height .87rem
              padding 0 .3rem
              display flex
              align-items center
              .goods
                  background-color #F4F4F4
                  height .56rem
                  width 5.64rem
                  line-height .56rem
                  padding 0 .2rem
                  .iconfont
                    padding  .2rem
                  input
                    padding-left .2rem
                    background-color #F4F4F4
              span
                  padding-left .3rem



     .searchKey
         width 100%
         .searchList
            width 6.9rem
            padding  0 .3rem .3rem .3rem
            margin-bottom .2rem
            header
                height .9rem
                color  #999
                line-height .9rem
            .list
                 margin-right -.4rem;
                 margin-bottom -.42667rem
                 a
                   display inline-block
                   height .45rem
                   line-height .45rem
                   margin-right .32rem
                   color #B4282D
                   margin-bottom .32rem
                   border .02rem #DB989A solid


</style>
