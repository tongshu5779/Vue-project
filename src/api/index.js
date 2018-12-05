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

