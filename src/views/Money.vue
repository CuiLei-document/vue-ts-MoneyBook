<template>
    <Layout class-prefix="layout-wrapper">
        <NumberPad @update:value="onUpdateNumber" @submit="onUpdateRecord"/>
        <Types  :value.sync="record.type" />
        <FromInput @update:value="onUpdateFrom"/>
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
    import modules from '@/modules';

    @Component({
        components: {NumberPad, Types, FromInput, Tags}
    })
    export default class Money extends Vue {
        record:RecordItem = {
            tags: [],notes:'',type:'-',amount:0
        }
        recordList = modules.fetchRecord()
        tags=['衣','食','住','行']
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
            const record2:RecordItem  = modules.clone(this.record);
            record2.createAl = new Date().toISOString()
            this.recordList.push(record2)
            console.log(this.recordList);
        }
        @Watch('recordList')
        onRecordListChange(){
            window.localStorage.setItem('recordList', JSON.stringify(this.recordList))
        }
    }
</script>

<style  lang="scss">
    .layout-wrapper-items{
        display:flex;
        flex-direction: column-reverse;
    }
</style>