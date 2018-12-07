import home from "../pages/Home/home"
import sort from "../pages/Sort/sort"
import findGoods from "../pages/FindGoods/findGoods"
import shopCart from "../pages/ShopCart/shopCart"
import personal from "../pages/Personal/personal"
import findHome from "../pages/FindGoods/findHome/findHome"
import intelligent from "../pages/FindGoods/intelligent/intelligent"
import recommend from "../pages/FindGoods/recommend/recommend"
import sun from "../pages/FindGoods/sun/sun"
import update from "../pages/FindGoods/update/update"



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
      { path:"recommend",
        component:recommend,
        meta:{
          name:true
        },
      },
      { path:"findHome",
        component:findHome,
        meta:{
          name:true
        },
      },
      { path:"intelligent",
        component:intelligent,
        meta:{
          name:true
        },
      },
      { path:"sun",
        component:sun ,
        meta:{
          name:true
        },
      },
      { path:"update",
        component:update,
        meta:{
          name:true
        },
      },
      {path:"/findGoods",
        redirect:"/findGoods/recommend"}
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
    path:"/",
    redirect:"/home"
  }
]
