import clone from '@/lib/clone';

const recordStore =  {
    recordList: [] as RecordItem[],
    fetchRecord() {
        this.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
        return this.recordList;
    },
    createRecord(record: RecordItem[] | RecordItem){
        console.log(this.recordList);
        const record2:RecordItem  = clone(record);
        record2.createAl = new Date().toISOString()
        this.recordList && this.recordList.push(record2)
        this.saveRecord()
    },
    saveRecord() {
        window.localStorage.setItem('recordList', JSON.stringify(this.recordList));
    }
}
recordStore.fetchRecord()
export default recordStore