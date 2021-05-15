<template>
    <Layout class-prefix="layout-wrapper">
        <NumberPad @update:value="onUpdateNumber" @submit="onUpdateRecord"/>
        <Types  :value.sync="record.type" />
        <div class="from-wrapper">
            <FromInput filer-name="备注" placeholder="请输入备注" @update:value="onUpdateFrom"/>

        </div>
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
    </Layout>

</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';
    import Tags from '@/components/moneys/Tags.vue';
    import FromInput from '@/components/moneys/FromInput.vue';
    import Types from '@/components/moneys/Types.vue';
    import NumberPad from '@/components/moneys/NumberPad.vue';
    import recordListModel from '@/models/recordListModel';
    import tagListModel from '@/models/tagListmodel';

    @Component({
        components: {NumberPad, Types, FromInput, Tags}
    })
    export default class Money extends Vue {
        record:RecordItem = {
            tags: [],notes:'',type:'-',amount:0
        }
        recordList = recordListModel.fetchRecord()
        tags= tagListModel.fetchList()
        onUpdateTags(value:string[]){
            this.record.tags = value
        }
        onUpdateFrom(value:string){
            this.record.notes = value
            console.log(value);
        }
        onUpdateNumber(value:string){
            this.record.amount = parseFloat(value)
            console.log(value);
        }
        onUpdateRecord(){
            const record2:RecordItem  = recordListModel.clone(this.record);
            record2.createAl = new Date().toISOString()
            this.recordList.push(record2)
            console.log(this.recordList);
        }
        @Watch('recordList')
        onRecordListChange(){
            recordListModel.saveRecord(this.recordList)
        }
    }
</script>

<style  lang="scss">
    .layout-wrapper-items{
        display:flex;
        flex-direction: column-reverse;
    }
    .from-wrapper{
        padding: 10px;
        background: white;
    }
</style>