import Mock from 'mockjs'
import msite from './msite.json'
import category from "./category.json"
import shiwu from "./shiwu.json"

// console.log('mockServer')
// 指定监听的url和对应的json数据模板
Mock.mock('/policyDescList', {
  code: 0,
  data: msite.policyDescList
}),
Mock.mock('/cateList', {
    code: 0,
    data: msite.cateList
}),
Mock.mock('/focusList', {
    code: 0,
    data: msite.focusList
  }),
Mock.mock('/kingKongList', {
    code: 0,
    data: msite.kingKongModule.kingKongList
  }),
Mock.mock('/indexActivityModule', {
    code: 0,
    data: msite.indexActivityModule
  }),
Mock.mock('/categoryList', {
  code: 0,
  data: msite.categoryHotSellModule.categoryList
})

// export default xxx  不需要
