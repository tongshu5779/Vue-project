import home from "../pages/Home/home"
import sort from "../pages/Sort/sort"
import findGoods from "../pages/FindGoods/findGoods"
import shopCart from "../pages/ShopCart/shopCart"
import personal from "../pages/Personal/personal"
import tab from "../pages/FindGoods/tab/tab"
import search from "../pages/search/search"




export default [
  {
    path:"/home",
    component:home,
    meta:{
      name:true
    }
  },
  {
    path:"/sort",
    component:sort,
    meta:{
      name:true
    }
  },
  {
    path:"/findGoods",
    component:findGoods,
    meta:{
      name:true
    },
    children:[
      { path:"tab/:index",
        component:tab,
        meta:{
          name:true
        },
      },
      {path:"/findGoods",
        redirect:"/findGoods/tab/0"}
    ]
  },
  {
    path:"/shopCart",
    component:shopCart,
    meta:{
      name:true
    }
  },
  {
    path:"/personal",
    component:personal
  },
  {
    path:"/search",
    component:search
  },
  {
    path:"/",
    redirect:"/home"
  }
]
