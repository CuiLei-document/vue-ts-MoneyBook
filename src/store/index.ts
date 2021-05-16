import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        recordList: [] as RecordItem[],
        tagList: [] as Tag[],
        currentTag: undefined
    } as RootStore,
    mutations: {
        // Record
        fetchRecord(state) {
            state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]');
        },
        createRecord(state, record: RecordItem[] | RecordItem) {
            console.log(this.recordList);
            const record2: RecordItem = clone(record);
            record2.createAl = new Date().toISOString();
            state.recordList.push(record2);
            store.commit('saveRecord');
        },
        saveRecord(state) {
            window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
        },
        // Tag
        fetchTag(state) {
            state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        },
        updateTag(state,payload:{id:string,name:string}) {
            const {id,name} = payload
            const idList = state.tagList.map(t => t.id)
            if (idList.indexOf(id) >= 0) {
                const names = state.tagList.map(t => t.name)
                if (names.indexOf(name) >= 0) {
                    window.alert('标签名重复了')
                } else {
                    const items = state.tagList.filter(t => t.id === id)[0]
                    items.name = name
                    store.commit('saveList');
                }
            }
        },
        removeTag(state,id:string){
            let index = -1
            for(let i=0;i<state.tagList.length;i++){
                if(state.tagList[i].id === id){
                    index = i
                    break
                }
            }
            if(index >=0){
                state.tagList.splice(index,1)
                store.commit('saveList');
                window.alert('删除成功')
            }else{
                window.alert('删除失败')
            }
        },
        setCurrentTag(state,id){
            state.currentTag =  state.tagList.filter(t => t.id === id)[0]
        },
        createTag(state,name:string) {
            const names = state.tagList.map(item => item.name)
            if (names.indexOf(name) >= 0) {
                window.alert('标签名重复了')
            }
            let id = createId().toString()
            state.tagList.push({id:id,name:name});
            store.commit('saveList');
            window.alert('创建成功')
        },
        saveList(state) {
            window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
        }
    },

});
export default store;