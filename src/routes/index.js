import home from "../pages/Home/home"
import sort from "../pages/Sort/sort"
import findGoods from "../pages/FindGoods/findGoods"
import shopCart from "../pages/ShopCart/shopCart"
import personal from "../pages/Personal/personal"


export default [
  {
    path:"/home",
    component:home,
  },
  {
    path:"/sort",
    component:sort,
  },
  {
    path:"/findGoods",
    component:findGoods,
  },
  {
    path:"/shopCart",
    component:shopCart
  },
  {
    path:"/personal",
    component:personal
  },
  {
    path:"/",
    redirect:"/home"
  }
]
