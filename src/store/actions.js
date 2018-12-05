import {
  reqPolicyDescList,
  reqCateList,
  reqFocusList,
  reqKingKongList,
  reqIndexActivityModule,
  reqCategoryList
}  from "@/api"
import {
  RECEIVE_POLICYDESCLIST,
  RECEIVE_CATELIST,
  RECEIVE_FOCUSLIST,
  RECEIVE_KINGKONGLIST,
  RECEIVE_INDEXACTIVITYMODULE,
  RECEIVE_CATEGORYLIST
} from  "./mutation-types"

export default {
  async policyDescList({commit}) {
    const result = await reqPolicyDescList();
    commit(RECEIVE_POLICYDESCLIST, {policyDescList: result.data})
  },
  async cateList({commit}) {
    const result = await reqCateList();
    commit(RECEIVE_CATELIST, {cateList: result.data})
  },
  async focusList({commit},fn) {
    const result = await reqFocusList();
    commit(RECEIVE_FOCUSLIST, {focusList: result.data})
    fn()
  },
  async kingKongList({commit}) {
    const result = await reqKingKongList();
    commit(RECEIVE_KINGKONGLIST, {kingKongList: result.data})
  },
  async indexActivityModule({commit}) {
    const result = await reqIndexActivityModule();
    commit(RECEIVE_INDEXACTIVITYMODULE, {indexActivityModule: result.data})
  },
  async categoryList({commit}) {
    const result = await reqCategoryList();
    commit(RECEIVE_CATEGORYLIST, {categoryList: result.data})
  },
}
