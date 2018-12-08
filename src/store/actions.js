import {
  reqPolicyDescList,
  reqCateList,
  reqFocusList,
  reqKingKongList,
  reqIndexActivityModule,
  reqCategoryList,
  reqCategory,
  // reqRecommend,
  reqTab,
  reqFindData,
  reqFindData2,
  reqUser,
  reqLogout,
  reqSearchTab,
  reqSearchKey
}  from "@/api"
import {
  RECEIVE_POLICYDESCLIST,
  RECEIVE_CATELIST,
  RECEIVE_FOCUSLIST,
  RECEIVE_KINGKONGLIST,
  RECEIVE_INDEXACTIVITYMODULE,
  RECEIVE_CATEGORYLIST,
  RECEIVE_CATEGORY,
  RECEIVE_FINDTAB,
  RECEIVE_FINDDATA,
  RECEIVE_FINDDATA2,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_SEARCHTAB,
  RECEIVE_SEARCHKEY
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
  async category({commit}) {
    const result = await reqCategory();
    commit(RECEIVE_CATEGORY, {category: result.data})
  },
  async findTab({commit}) {
    const result = await reqTab();
    commit(RECEIVE_FINDTAB, {findTab: result.data})
  },
  async findData({commit}) {
    const result = await reqFindData();
    commit(RECEIVE_FINDDATA, {findData: result.data})
  },
  async findData2({commit}) {
    const result = await reqFindData2();
    commit(RECEIVE_FINDDATA2, {findData2: result.data})
  },
   async getUser({commit}) {
    const result = await reqUser();
    if(result.code===0){
      commit(RECEIVE_USER, {User: result.data})
    }
  },
   recordUser({commit},user) {
    commit(RECEIVE_USER, {User:user})
  },
  async logout({commit}) {
    const result = await reqLogout()
    if(result.code===0) {
      commit(RESET_USER)
    }
  },
  async searchTab({commit}) {
    const result = await reqSearchTab();
    if(result.code==="200"){
      commit(RECEIVE_SEARCHTAB, {searchTab: result.data})
    }
  },
  async searchKey({commit},key) {
    const result = await reqSearchKey(key);
    if(result.code==="200"){
      commit(RECEIVE_SEARCHKEY, {searchKey: result.data})
    }
  },
}
