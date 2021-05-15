import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
type RootStore = {
  recordList: RecordItem[],
}
const store  = new Vuex.Store({
  state: {
    recordList:[]
  } as RootStore,
  mutations: {
    fetchRecord(state){
      state.recordList = JSON.parse(window.localStorage.getItem('recordList')|| '[]')
    },
    saveRecord(state){
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList))
    }
  },

})
export default store