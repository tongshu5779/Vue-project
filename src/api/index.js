import ajax from "./ajax"




//首页导航栏数据
export const reqCateList = () => ajax("/cateList")
//首页轮播图数据
export const reqFocusList = () => ajax("/focusList")
//请求首页分类信息
export const reqKingKongList = () => ajax("/kingKongList")
//首页新人专享礼接口
export const reqIndexActivityModule = () => ajax("/indexActivityModule")
//首页类目热销榜
export const reqCategoryList = () => ajax("/categoryList")
//请求店面安全保证接口
export const reqPolicyDescList = () => ajax("/policyDescList")
//请求分类列表
export const reqCategory = () => ajax("/category")
//请求用户信息
export const reqUser = () => ajax('/api/userinfo')
//请求退出登录
export const reqLogout = () => ajax('/api/logout')
//请求识物推荐列表
// export const reqRecommend = () => ajax("/tab")

//发送短信验证码
export const sendCode = phone => ajax('/api/sendcode', {phone})
//手机号验证码登录
export const smsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')


//请求识物导航栏
export const reqTab = () => ajax('/req/topic/v1/find/getTabs.json')
//请求识物推荐数据
export const reqFindData = () => ajax('/req/topic/v1/find/recManual.json')
//请求识物达人数据
export const reqFindData2 = () => ajax('/req/topic/v1/find/getTabData.json?tabId=4')
//请求搜索栏tab数据
export const reqSearchTab = () => ajax('/req/xhr/search/init.json')
//请求搜索关键字数据
export const reqSearchKey = (key) => ajax('/req/xhr/search/searchAutoComplete.json',{keywordPrefix:key})



