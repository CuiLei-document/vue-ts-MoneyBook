
type TagListModel = {
    data:string[],
    fetchList: ()=>string[]
    create:(name:string) => 'success' | 'duplicated'
    saveList:()=> void
}
const tagListModel:TagListModel = {
    data:[],
    fetchList() {
        return JSON.parse(window.localStorage.getItem('tagList')|| '[]');
    },
    create(name){
        if(this.data.indexOf(name)>=0){
            return 'duplicated'
        }
        this.data.push(name)
        this.saveList()
        return 'success'
    },
    saveList(){
        window.localStorage.setItem('tagList', JSON.stringify(this.data));
    }
}

export default tagListModel