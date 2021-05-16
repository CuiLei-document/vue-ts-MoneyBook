type RecordItem = {
    tags: Tag[];
    notes: string;
    type: string;
    amount: number;
    createAl?: string;
}
type RootStore = {
    recordList: RecordItem[],
    currentError: Error | null
    tagList: Tag[],
    currentTag: Tag | undefined
}
type Tag = {
    id: string;
    name: string;
}
