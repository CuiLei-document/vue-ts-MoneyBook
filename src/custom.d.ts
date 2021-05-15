type RecordItem = {
    tags: string[];
    notes: string;
    type: string;
    amount: number;
    createAl?: string;
}
type Tag = {
    id: string;
    name: string;
}
type TagListModel = {
    data: Tag[];
    fetchList: () => Tag[];
    create: (name: string) => 'success' | 'duplicated';
    update: (id: string, name: string) => 'success' | 'not found' | 'duplicated';
    saveList: () => void;
    remove: (id: string) => boolean;
}