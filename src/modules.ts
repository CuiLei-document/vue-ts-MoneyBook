const modules = {
    clone(record: RecordItem[] | RecordItem){
       return  JSON.parse(JSON.stringify(record));
    },
    fetchRecord() {
      return JSON.parse(window.localStorage.getItem('recordList')|| '[]') as RecordItem[];
    },
    saveRecord(record:RecordItem[]){
        window.localStorage.setItem('recordList', JSON.stringify(record));
    }
}

export default modules