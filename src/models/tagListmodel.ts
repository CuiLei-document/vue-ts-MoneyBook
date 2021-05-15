import createId from '@/lib/createId';

const tagListModel: TagListModel = {
    data: [],
    fetchList() {
        this.data = JSON.parse(window.localStorage.getItem('tagList') || '[]');
        return this.data;
    },
    create(name) {
        const names = this.data.map(item => item.name)
        if (names.indexOf(name) >= 0) {
            return 'duplicated';
        }
        let id = createId().toString()
        this.data.push({id:id,name:name});
        this.saveList();
        return 'success';
    },
    update(id:string,name:string) {
        const idList = this.data.map(t => t.id)
        if (idList.indexOf(id) >= 0) {
            const names = this.data.map(t => t.name)
            if (names.indexOf(name) >= 0) {
                return 'duplicated'
            } else {
                const items = this.data.filter(t => t.id === id)[0]
                items.name = name
                this.saveList();
                return 'success'
            }
        }else{
            return 'not found'
        }
    },
    remove(id:string){
        let index = -1
        for(let i=0;i<this.data.length;i++){
            if(this.data[i].id === id){
                index = i
                break
            }
        }
        this.data.splice(index,1)
        this.saveList();
        return true
    },
    saveList() {
        window.localStorage.setItem('tagList', JSON.stringify(this.data));
    }
};

export default tagListModel;