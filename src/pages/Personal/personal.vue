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
            <i class="iconfont icon-sousuo icon1" @click="$router.push('/search')"></i>
            <i class="iconfont icon-gouwuche1 icon2"></i>
          </div>
        </div>
      </header>
      <div class="personalContent" v-if="flag===0">
        <div class="cont">
          <div class="logoWrap">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="btn">
            <div class="pLogin" @click="changeFlag(1)">
              <i class="iconfont icon-shouji"></i>
              <span>手机号码登录</span>
            </div>
            <div class="eLogin" @click="changeFlag(2)">
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
      <div class="phoneLogin" v-if="flag===1">
          <div class="logoWrap">
            <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
          </div>
          <div class="loginContent">
            <div class="loginWrap">
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="请输入手机号" v-model="phone">
              </section>
              <section class="login_verification">
                <input type="text" maxlength="8" placeholder="请输入短信验证码" v-model="code">
                <button class="get_verification" @click="getVerifyCode">获取验证码</button>
                <button disabled="disabled" class="get_verification" v-if="computedTime>0">已发送({{computedTime}}s)</button>
              </section>
              <section class="info">
                <div class="left">
                  <span>遇到问题？</span>
                </div>
                <div class="right">
                  <span>使用密码验证登录</span>
                </div>
              </section>
              <div class="btn-3" @click="login">
                <span>登录</span>
              </div>
            </div>
          </div>
          <div class="footer">
             <div class="btn-1" @click="changeFlag(0)">
               <span>其他登录方式</span>
             </div>
             <div class="btn-2">
               <span>注册账号</span>
               <i class="iconfont icon-youjiantou"></i>
             </div>
          </div>
        </div>
      <div class="phoneLogin" v-if="flag===2">
        <div class="logoWrap">
          <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
        </div>
        <div class="loginContent">
          <div class="loginWrap">
            <section class="login_message">
              <input type="tel"  placeholder="邮箱账号" v-model="name">
            </section>
            <section class="login_verification">
              <input type="password"  placeholder="密码" v-model="pwd">
            </section>
            <section class="info">
              <div class="left">
                <span>注册账号</span>
              </div>
              <div class="right">
                <span>忘记密码</span>
              </div>
            </section>
            <div class="btn-3">
              <span>登录</span>
            </div>
          </div>
        </div>
        <div class="footer">
          <div class="btn-1" @click="changeFlag(0)">
            <span>其他登录方式</span>
          </div>
        </div>
      </div>
      <div class="loginSuccess" v-if="flag===3">
        <span>登录成功</span>
        <div>
           <span>手机号</span>
           <span>{{User.phone}}</span>
        </div>
        <div class="logout" @click="logout">
            <span>退出登录</span>
        </div>
      </div>
    </div>
</template>

<script>
    import {sendCode,smsLogin,reqTab} from "@/api"
    import {mapState} from "vuex"
    import Mint from 'mint-ui';
    import 'mint-ui/lib/style.css';
    export default {
        name: "personal",
        data(){
          return {
            flag:0,
            computedTime: 0,
            phone: '',
            code: '',
            name: '',
            pwd: '',
          }
        },
        computed: {
          ...mapState(["User"]),
        //判断手机号码
          rightPhoneNumber: function () {
            return /^1\d{10}$/.test(this.phone)
          }
        },
        methods:{
         changeFlag(val){
           this.flag=val
         },
         async getVerifyCode() {
            if (this.rightPhoneNumber) {
              let result = await sendCode(this.phone)
              if(result.code===0){
                Mint.Toast('验证码发送成功');
              }
            }
          },
         async login() {
              if (!this.phone) {
                Mint.MessageBox('提示', '请输入手机号');
                return
              } else if (!(/^\d{6}$/gi.test(this.code))) {
                Mint.MessageBox('提示', '验证码不正确');
                return
              }
            //手机号短信登录
             const result = await smsLogin(this.phone, this.code);
             if (result.code === 0) {
               console.log(result.data);
               this.$store.dispatch('recordUser',result.data);
               this.flag=3
             } else {
               Mint.MessageBox('提示', '手机号或验证码不正确');
             };
         },
          logout () {
            Mint.MessageBox.confirm('确定退出登陆吗?').then(action => {
              this.$store.dispatch('logout')
              this.flag=0
            });
          }
      },
        beforeRouteEnter (to, from, next) {
            next((component)=>{
              if(component.$store.state.User._id) {
                next("/personal")
                component.flag = 3
              }else{
                next("/personal")
                component.flag = 0
              }
            })
      },
    }
</script>

<style scoped lang="stylus">

  .personalWrap
        width 7.5rem
        height 100%
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
        .phoneLogin
            background-color white
            height 100%
            .logoWrap
                height .62rem
                margin-top  .56rem
                text-align: center
                img
                  width 1.92rem
                  height .62rem

            .loginContent
                 height 5.62rem
                 margin-top .4rem
                 padding 0 .4rem
                 color #8F8F8F
                 .loginWrap
                       height 4.8rem
                       padding-top .82rem
                       .login_message, .login_verification
                          height 1.2rem
                          border-bottom .03rem #F6F6F6 solid
                          line-height 1.6rem
                          .get_verification
                               position relative
                               left 1.2rem
                               display inline-block
                               width  1.8rem
                               height .6rem
                               background-color white
                               border-radius .1rem
                       input
                           width 3rem
                           height .8rem
                           outline none
                 .info
                       height  1rem
                       line-height .8rem
                       margin-bottom .1rem
                       .left
                           float left
                       .right
                           float right
                 .btn-3
                    width 6.66rem
                    height .88rem
                    background-color   rgb(180, 40, 45)
                    color white
                    text-align center
                    line-height .88rem
                    border .02rem rgb(180, 40, 45) solid
          .footer
                width 6.7rem
                padding 0 .4rem
                .btn-1
                   width 6.66rem
                   height .88rem
                   color   rgb(180, 40, 45)
                   background-color white
                   text-align center
                   line-height .88rem
                   border .02rem rgb(180, 40, 45) solid
                .btn-2
                    margin-top .32rem
                    text-align center
        .loginSuccess
              .logout
                  width 4.62rem
                  height .88rem
                  line-height .88rem
                  font-size .3rem
                  margin 0 auto
                  background-color red
                  color white
                  text-align center
</style>
