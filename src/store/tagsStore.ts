import createId from '@/lib/createId';

const tagStore = {
    tagList:  [] as Tag[],
    fetchList() {
        this.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        return this.tagList;
    },
    createTag(name:string) {
        const names = this.tagList.map(item => item.name)
        if (names.indexOf(name) >= 0) {
            window.alert('标签名重复了')
            return 'duplicated';
        }
        let id = createId().toString()
        this.tagList.push({id:id,name:name});
        this.saveList();
        window.alert('创建成功')
        return 'success';
    },
    updateTag(id:string,name:string) {
        const idList = this.tagList.map(t => t.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.tagList.map(t => t.name)
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const items = this.tagList.filter(t => t.id === id)[0]
                items.name = name
                this.saveList();
                return 'success'
            }
        }else{
            return 'not found'
        }
    },
    removeTag(id:string){
        let index = -1
        for(let i=0;i<this.tagList.length;i++){
            if(this.tagList[i].id === id){
                index = i
                break
            }
        }
        this.tagList.splice(index,1)
        this.saveList();
        return true
    },
    saveList() {
        window.localStorage.setItem('tagList', JSON.stringify(this.tagList));
    }
}
tagStore.fetchList()
export default tagStore