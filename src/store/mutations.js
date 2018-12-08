import {
  RECEIVE_POLICYDESCLIST,
  RECEIVE_CATELIST,
  RECEIVE_FOCUSLIST,
  RECEIVE_KINGKONGLIST,
  RECEIVE_INDEXACTIVITYMODULE,
  RECEIVE_CATEGORYLIST,
  RECEIVE_CATEGORY,
  // RECEIVE_RECOMMEND,
  RECEIVE_FINDTAB,
  RECEIVE_FINDDATA,
  RECEIVE_FINDDATA2,
  RECEIVE_USER,
  RESET_USER,
  RECEIVE_SEARCHTAB,
  RECEIVE_SEARCHKEY
} from  "./mutation-types"


export default {
  [RECEIVE_POLICYDESCLIST](state,{policyDescList}){
    state.policyDescList=policyDescList
  },
  [RECEIVE_CATELIST](state,{cateList}){
    state.cateList=cateList
  },
  [RECEIVE_FOCUSLIST](state,{focusList}){
    state.focusList=focusList
  },
  [RECEIVE_KINGKONGLIST](state,{kingKongList}){
    state.kingKongList=kingKongList
  },
  [RECEIVE_INDEXACTIVITYMODULE](state,{indexActivityModule}){
    state.indexActivityModule=indexActivityModule
  },
  [RECEIVE_CATEGORYLIST](state,{categoryList}){
    state.categoryList=categoryList
  },
  [RECEIVE_CATEGORY](state,{category}){
    state.category=category
  },
  [RECEIVE_FINDTAB](state,{findTab}){
    state.findTab=findTab
  },
  [RECEIVE_FINDDATA](state,{findData}){
    state.findData=findData
  },
  [RECEIVE_FINDDATA2](state,{findData2}){
    state.findData2=findData2
  },
  [RECEIVE_FINDDATA2](state,{findData2}){
    state.findData2=findData2
  },
  [RECEIVE_USER](state,{User}){
    state.User=User
  },
  [RESET_USER](state) {
    state.User = {}
  },
  [RECEIVE_SEARCHTAB](state,{searchTab}){
    state.searchTab=searchTab
  },
  [RECEIVE_SEARCHKEY](state,{searchKey}){
    state.searchKey=searchKey
  }
}
