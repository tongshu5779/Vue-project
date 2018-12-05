import {
  RECEIVE_POLICYDESCLIST,
  RECEIVE_CATELIST,
  RECEIVE_FOCUSLIST,
  RECEIVE_KINGKONGLIST,
  RECEIVE_INDEXACTIVITYMODULE,
  RECEIVE_CATEGORYLIST,
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
  }
}
