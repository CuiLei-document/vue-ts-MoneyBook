type Tag = {
    id:string,
    name:string
}
type TagListModel = {
    data: Tag[];
    fetchList: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';
    saveList: () => void;
}
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
        this.data.push({id:name,name:name});
        this.saveList();
        return 'success';
    },
    saveList() {
        window.localStorage.setItem('tagList', JSON.stringify(this.data));
    }
};

export default tagListModel;