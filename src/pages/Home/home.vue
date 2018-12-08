<template>
   <div class="home">
     <home-header></home-header>
     <nav class="home_nav">
       <div class="swiper-container">
         <div class="swiper-wrapper">
           <div class="swiper-slide" v-for="(focus,index) in focusList" :key="index">
             <img :src="focus.picUrl" alt="">
           </div>
         </div>
         <div class="swiper-pagination"></div>
       </div>
     </nav>
     <div class="present">
       <ul class="introduce">
         <li class="item"  v-for="(policy,index) in policyDescList" :key="index">
           <i class="icon" :style="{background: `url('${policy.icon}')`,backgroundSize: '100% 100%'}"></i>
           <span>{{policy.desc}}</span>
         </li>
       </ul>
     </div>
     <div class="content">
       <div class="products">
         <div class="productWrap">
           <div class="package">
             <div class="product" v-for="(kingkong,index) in kingKongList" :key="index">
               <div class="img">
                 <img :src="kingkong.picUrl" alt="">
               </div>
               <div class="productName">{{kingkong.text}}</div>
             </div>
           </div>
         </div>
       </div>
       <div class="discount">
         <div class="icon">
           <div class="img-package">
             <img src="https://yanxuan.nosdn.127.net/15435902145614507.gif" alt="">
           </div>
         </div>
         <div class="special-offer">
           <div class="free">
             <div class="freeImg">
               <img src="https://yanxuan.nosdn.127.net/15435902383484509.png" alt="">
             </div>
           </div>
           <div class="price-reduction">
             <div class="priceReductionImg">
               <div class="up">
                 <img src="https://yanxuan.nosdn.127.net/15435902616394510.png" alt="">
               </div>
               <div class="down">
                 <img src="https://yanxuan.nosdn.127.net/15438974429982991.png" alt="">
               </div>
             </div>
           </div>
         </div>
         <div class="offer">
           <div class="offerPackage">
             <div class="left">
               <img src="https://yanxuan.nosdn.127.net/15438955793172733.png" alt="">
             </div>
             <div class="right">
               <img src="https://yanxuan.nosdn.127.net/15435903918604513.png" alt="">
             </div>
           </div>
         </div>
         <div class="background">
         </div>
       </div>
       <div class="newcomer-exclusive">
         <div class="newTitle">
           <span>新人专享礼</span>
         </div>
         <div class="newContent" v-if="indexActivityModule.length">
           <div class="left">
             <div class="title">
               新人专享红包
             </div>
             <div class="img">
               <div class="imgPackage">
                 <img src="//yanxuan.nosdn.127.net/d074d02fb86bff9bfbf4fa3010d1e1e6.png" alt="">
               </div>
               <div class="animate"></div>
             </div>
           </div>
           <div class="right">
             <div class="up">
               <div class="upContent">
                 <div class="imgPackage">
                   <img :src="indexActivityModule[0].picUrl" alt="">
                   <div class="icon">
                     <div class="line1">{{indexActivityModule[0].activityPrice}}</div>
                     <div class="line2">{{indexActivityModule[0].originPrice}}</div>
                   </div>
                 </div>
                 <div class="title">
                   <p class="p1">{{indexActivityModule[0].title}}</p>
                   <p class="p2">{{indexActivityModule[0].subTitle}}</p>
                 </div>
               </div>
             </div>
             <div class="down">
               <div class="downContent">
                 <div class="imgPackage">
                   <img :src="indexActivityModule[1].picUrl" alt="">
                   <div class="icon">
                     <div class="line1">{{indexActivityModule[1].activityPrice}}</div>
                     <div class="line2">{{indexActivityModule[1].originPrice}}</div>
                   </div>
                 </div>
                 <div class="title">
                   <p class="p1">{{indexActivityModule[1].title}}</p>
                   <p class="p2">{{indexActivityModule[1].subTitle}}</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
       <div class="manufacturersSupplying">
         <div class="manufacturerName">
           <div class="left">品牌制造商直供</div>
           <a class="right">
             <span>更多</span>
             <i class="iconfont icon-youjiantou"></i>
           </a>
         </div>
         <ul class="goodsList">
           <li class="item list1">
             <div class="cnt">
               <h4>海外制造商</h4>
               <div class="sellPrice">
                 <div class="price">9.9元起</div>
                 <i class="icon-31shangxin iconfont"></i>
               </div>
             </div>
           </li>
           <li class="item list2">
             <div class="cnt">
               <h4>MUJI制造商</h4>
               <div class="sellPrice">
                 <div class="price">25元起</div>
                 <!--<i class="icon-31shangxin iconfont"></i>-->
               </div>
             </div>
           </li>
           <li class="item list3">
             <div class="cnt">
               <h4>CK制造商</h4>
               <div class="sellPrice">
                 <div class="price">25元起</div>
                 <!--<i class="icon-31shangxin iconfont"></i>-->
               </div>
             </div>
           </li>
           <li class="item list4">
             <div class="cnt">
               <h4>新秀丽制造商</h4>
               <div class="sellPrice">
                 <div class="price">34.9元起</div>
                 <!--<i class="icon-31shangxin iconfont"></i>-->
               </div>
             </div>
           </li>
         </ul>
       </div>
       <div class="hotSell">
         <div class="hotTitle">
           <div class="left">
             <span class="list">类目热销榜</span>
           </div>
         </div>
         <div class="hotContent">
           <div class="line1"  v-if="computArr[0]">
             <div class="left">
               <div class="name">
                 <span class="text">{{computArr[0].categoryName}}</span>
               </div>
               <div class="img">
                 <img :src="computArr[0].picUrl" alt="">
               </div>
             </div>
             <div class="right">
               <div class="name">
                 <span class="text">{{computArr[1].categoryName}}</span>
               </div>
               <div class="img">
                 <img :src="computArr[1].picUrl" alt="">
               </div>
             </div>
           </div>
           <div class="line2">
             <a href="javascript:;" class="item"  v-for="(item,index) in computArr1" :key="index">
               <div class="name">{{item.categoryName}}</div>
               <div class="imgWrap">
                 <div class="img">
                   <img :src="item.picUrl" alt="">
                 </div>
               </div>
             </a>
           </div>
         </div>
       </div>
       <div class="footWrap">
         <div class="wrap">
           <div class="version">
             <a href="javascript:;" class="app">下载APP</a>
             <a href="javascript:;" class="computer">电脑版</a>
           </div>
           <p class="info">
             <span>网易公司版权所有 © 1997-2018</span>
             <br>
             <span>食品经营许可证：JY13301080111719</span>
           </p>
         </div>
       </div>
     </div>
     <i class="upIcon" v-show="upIsShow" @click="changeScroll" ref="up"></i>
   </div>
</template>

<script>
    import homeHeader from "../../components/homeHead/homeHead"
    import "swiper/dist/css/swiper.min.css"
    import Swiper from "swiper/dist/js/swiper.min.js"
    import {mapState} from "vuex"
    export default {
        name: "home",
        data(){
          return{
            upIsShow:false,
          }
        },
        components:{
          homeHeader
      },
        computed:{
        ...mapState(["policyDescList","focusList",
                      "kingKongList","indexActivityModule",
                       "categoryList"]),
        computArr(){
           let  arr = [];
           const {categoryList}=this
           categoryList.map((val,index)=>{
                if(index<2){
                  arr.push(val)
                }
           })
          return arr
        },
        computArr1(){
          let  arr = [];
          const {categoryList}=this
          categoryList.forEach((val,index)=>{
            if(index>=2){
              arr.push(val)
            }
          })
          return arr
        }
      },
        mounted(){
          this.$store.dispatch("policyDescList")
          this.$store.dispatch("focusList",()=>{
              this.$nextTick(() => {
                new Swiper('.swiper-container', {
                  loop: true,
                  pagination: {
                    el: '.swiper-pagination'
                  },
                  autoplay: true,
                });
              })
          })
          this.$store.dispatch("kingKongList")
          this.$store.dispatch("indexActivityModule")
          this.$store.dispatch("categoryList")
          this.initScroll()
       },
         methods:{
            initScroll(){
              var _this=this
              window.addEventListener('scroll',function(){
                var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
                if(scrollTop>500){
                  _this.upIsShow = true
                }else{
                  _this.upIsShow = false
               }
            })
          },
           changeScroll(){
             window.scrollTo({
               top: 0,
               behavior: "smooth"
             });
           }
      },
    }
</script>

<style scoped lang="stylus">
  @import "../../comment/stylus/mixins.styl"
.home
      margin-bottom 0.98rem
      .home_nav
        height 3.7rem
        background #fff
        padding-top 1.47rem
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              img
                width 100%
                height auto
      .present
        width 100%
        background-color #FFEDDB
        height .72rem
        display flex
        .introduce
          padding 0 .3rem
          width .69rem
          display flex
          flex 1
          align-items center
          .item
            width 2.27rem
            height 0.36rem
            .icon
              display inline-block
              width .32rem
              height .32rem
              vertical-align middle
            span
              margin-left 0.08rem
              font-size .16rem
              color: #B4282D
      .upIcon
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/goToTop-7a19216f77.png")
        background-size  100% 100%
        display inline-block
        z-index 10
        width  .82rem
        height .82rem
        position fixed
        left 6.45rem
        top 11.32rem

      .content
          background-color  #F4F4F4
         .products
           background-color #FFEDDB
           width 100%
           height 3.92rem
           .productWrap
              height 3.4rem
              padding-bottom .52rem
              .package
                  height 3.4rem
                  .product
                      float left
                      width 1.1rem
                      height 1.56rem
                      margin 0.1rem .2rem 0.09rem.2rem
                      .img
                         width 1.1rem
                         height 1.1rem
                         img
                           width 1.1rem
                           height 1.1rem
                      .productName
                          font-size .24rem
                          margin-top .1rem
                          color #333333
                          width 1.1rem
                          height .36rem
                          text-align center
         .discount
            height 9.5rem
            .icon
                height 3.3rem
                .img-package
                   height 3.3rem
                   img
                     height 3.3rem
            .special-offer
                width 100%
                height 3.92rem
                background url("https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_496_750_588");
                background-size:100% 100%;
                .free
                    float left
                    width 3.75rem
                    height 3.92rem
                    img
                        width 3.75rem
                        height 3.92rem
                .price-reduction
                      width 3.75rem
                      height 3.92rem
                      float left
                      .priceReductionImg
                        width 3.75rem
                        height 3.92rem
                        .up
                           width 3.75rem
                           height 1.96rem
                           img
                             width 3.75rem
                             height 1.96rem
                        .down
                           width 3.75rem
                           height 1.96rem
                           img
                             width 3.75rem
                             height 1.96rem
            .offer
                height 2.03rem
                width 100%
                background: url("https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_496_750_588");
                background-size 100% 100%;
                .offerPackage
                   height 0
                   .left
                       float left
                       width 3.75rem
                       height 2.03rem
                       img
                         width 3.75rem
                         height 2.03rem
                  .right
                      float left
                      width 3.75rem
                      height 2.03rem
                      img
                         width 3.75rem
                         height 2.03rem
            .background
                 background: url(https://yanxuan.nosdn.127.net/15435901919894506.png?imageView&crop=0_1404_750_15);
                 background-size: 100% 100%;
                 display inline-block
                 width 100%
                 height .3rem
         .newcomer-exclusive
             background-color white
             width 100%
             height 5.27rem
             margin .2rem 0
             padding-bottom .3rem
             .newTitle
                width 6.9rem
                padding 0 .3rem
                height 0.9rem
                text-align center
                line-height 0.9rem
                span
                     font-size .32rem
                     display inline-block
                     width 1.6rem
                     height 0.9rem
             .newContent
                   width 7.2rem
                   height 4.37rem
                   padding-left .3rem
                   padding-top 0
                   .left
                      background: #F9E9CF
                      width 3.42rem
                      height 4.34rem
                      margin-right 0.04rem
                      float left
                      position relative
                      .title
                          padding-top .3rem
                          padding-left .3rem
                          width 3.42rem
                          height 0.78rem
                          text-align left
                      .img
                          width 2.28rem
                          height 2.28rem
                          position  absolute
                          left  0
                          top  0
                          right  0
                          bottom: 0
                          margin  auto;
                          .imgPackage
                              width 2.28rem
                              height 2.28rem
                              img
                                width 2.28rem
                                height 2.28rem


                   .right
                        width 3.43rem
                        height 2.45rem
                        margin-bottom 0.04rem
                        background  #FBE2D3
                        float left
                        position relative
                        .up
                           width 3.42rem
                           height 2.15rem
                           margin-bottom 0.04rem
                           .upContent
                                width 3.12rem
                                height 1.95rem
                                padding-left 0.3rem
                                padding-top 0.2rem
                                margin-right  0.04rem
                                margin-bottom   0.04rem
                                .imgPackage
                                     width 2rem
                                     height 2rem
                                     position absolute
                                     left 1.42rem
                                     top 0.2rem
                                     img
                                       width 2rem
                                       height 2rem
                                     .icon
                                         width 0.8rem
                                         height 0.7rem
                                         padding-top 0.1rem
                                         position absolute
                                         left 0.9rem
                                         top 0
                                         opacity  .8rem;
                                         background  #F59524;
                                         border-radius 50%
                                         text-align center
                                         color white
                                         .line1
                                             width 0.8rem
                                             height 0.36rem
                                             font-size: 0.24rem;
                                         .line2
                                             text-decoration line-through
                                             width 0.8rem
                                             height 0.3rem
                                             font-size: 0.2rem;
                                             margin-top: -.07rem;


                                .title
                                     width 3.12rem
                                     height .84rem
                                     .p1
                                        width 3.12rem
                                        height .48rem
                                        font-size .32rem
                                     .p2
                                        width 3.12rem
                                        height .36rem
                                        font-size .24rem
                                        color: #7F7F7F;
                        .down
                             width 3.42rem
                             height 2.15rem
                             background  #FFECC2
                             border-radius  0.04rem
                             position relative
                             .downContent
                                   width 3.12rem
                                   height 1.95rem
                                   padding-left 0.3rem
                                   padding-top 0.2rem
                                   margin-right  0.04rem
                                   margin-bottom   0.04rem
                                   .imgPackage
                                       width 2rem
                                       height 2rem
                                       position absolute
                                       left 1.42rem
                                       top 0.2rem
                                       img
                                         width 2rem
                                         height 2rem
                                       .icon
                                           width 0.8rem
                                           height 0.7rem
                                           padding-top 0.1rem
                                           position absolute
                                           left 0.9rem
                                           top 0
                                           opacity  .8rem;
                                           background  #F59524;
                                           border-radius 50%
                                           text-align center
                                           color white
                                           .line1
                                              width 0.8rem
                                              height 0.36rem
                                              font-size: 0.24rem;
                                           .line2
                                              text-decoration line-through
                                              width 0.8rem
                                              height 0.3rem
                                              font-size: 0.2rem;
                                              margin-top: -.07rem;
                                   .title
                                       width 3.12rem
                                       height .84rem
                                       .p1
                                          width 3.12rem
                                          height .48rem
                                          font-size .32rem
                                       .p2
                                          width 3.12rem
                                          height .36rem
                                          font-size .24rem
                                          color: #7F7F7F;

         .manufacturersSupplying
             width 100%
             height 6.81rem
             padding-bottom 0.08rem
             background-color white
             .manufacturerName
                 width 6.9rem
                 height 1rem
                 padding 0 0.3rem
                 .left
                    float left
                    width 2.24rem
                    height 1rem
                    line-height 1rem
                    font-size .32rem
                 .right
                    float right
                    width 1rem
                    height 1rem
                    line-height 1rem
                    font-size 0.27rem


             .goodsList
                 width 6.94rem
                 height 5.27rem
                 padding 0 0.26rem 0.26rem 0.3rem
                 margin-bottom 0.2rem
                 background-color white
                 .item
                    float left
                    width 3.42rem
                    height 2.6rem
                    margin-right 0.04rem
                    margin-bottom 0.04rem
                    &.list1
                      background-image url("http://yanxuan.nosdn.127.net/802ff06dd3ef161db046eeb8db6cb4be.jpg?imageView&thumbnail=343y260&enlarge=1")
                      background-size 100% 100%;
                    &.list2
                      background-image url("http://yanxuan.nosdn.127.net/c1e97be1b9730360c9c228b6a6448bca.png?imageView&thumbnail=343y260&enlarge=1");
                      background-size 100% 100%;
                    &.list3
                      background-image url("http://yanxuan.nosdn.127.net/e550a44d2a7a68ed38e6cfd380e514aa.png?imageView&thumbnail=343y260&enlarge=1");
                      background-size 100% 100%;
                    &.list4
                      background-image url("http://yanxuan.nosdn.127.net/053ecfefd033a9acd2cb95483e14fcb6.jpg?imageView&thumbnail=343y260&enlarge=1");
                      background-size 100% 100%;
                    .cnt
                       width 3.42rem
                       height .72rem
                       padding-top .23rem
                       text-align center
                       h4
                         width 3.42rem
                         height .33rem
                         font-size .28rem
                       .sellPrice
                          display flex
                          justify-content center
                          .price
                              color   #7F7F7F
                              font-size .16rem
                          .iconfont
                               color red
         .hotSell
             height 7.1rem
             margin-bottom .2rem
             background-color white
             .hotTitle
                 width 6.9rem
                 height 1rem
                 padding 0 .3rem
                 .left
                      width 1.6rem
                      height 1rem
                      line-height 1rem
                      text-align center
                      font-size .32rem
             .hotContent
                 width 7rem
                 height 5.89rem
                 padding 0 .2rem 0.2rem .3rem
               .line1
                 .left,.right
                   float left
                   width 3.4rem
                   height 2rem
                   margin 0 .1rem .1rem 0
                   background  #F9F3E4
                   overflow hidden
                   position relative
                   .name
                     width 3.1rem
                     height .41rem
                     padding-left .3rem
                     margin-top .66rem
                     .text
                       width 0.84rem
                       height .41rem
                   .img
                     width 2rem
                     height 2rem
                     position absolute
                     left 1.38rem
                     top 0
                     img
                       display inline-block
                       width 2rem
                       height 2rem

                 .right
                   background-color #EBEFF6
                   .img
                     position absolute
                     left 1.34rem

               .line2
                     .item
                        display inline-block
                        width 1.65rem
                        height 1.8rem
                        margin-right .02rem
                        margin-bottom .1rem
                        background-color #F5F5F5
                        .name
                           width 1.65rem
                           height .36rem
                           margin-top .1rem
                           text-align center
                        .imgWrap
                           width 1.2rem
                           height 1.2rem
                           margin-left .23rem
                           margin-top .02rem
                           .img
                             width 1.2rem
                             height 1.2rem
                             img
                               width 1.2rem
                               height 1.2rem


         .footWrap
             height 2.44rem
             background-color: #414141;
             top-border-1px(rgba(0,0,0,.15))
             .wrap
                 width 7.1rem
                 height 1.61rem
                 padding  .54rem .2rem .28rem .2rem
                 text-align center
                 .version
                   height .62rem
                   .app
                       display inline-block
                       width 1.69rem
                       height 0.6rem
                       line-height 0.6rem
                       margin-right 0.5rem
                       border 1px #999 solid
                       font-size: .16rem;
                       color: #fff;
                   .computer
                       display inline-block
                       width 1.69rem
                       height 0.6rem
                       line-height .6rem
                       border 1px #999 solid
                       font-size: .16rem;
                       color: #fff;
                 .info
                    width 7.1rem
                    height 0.64rem
                    margin-top 0.36rem
                    color #999
                    font-size 0.24rem
                    text-align center
</style>
