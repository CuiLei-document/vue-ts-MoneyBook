type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAl?: string;
}
type RootStore = {
    recordList: RecordItem[],
    tagList: Tag[],
    currentTag: Tag |undefined
}
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetchList: () => Tag[];
    createTag: (name: string) => 'success' | 'duplicated';
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    saveList: () => void;
    removeTag: (id: string) => boolean;
}