<template>
    <Layout class-prefix="layout-wrapper">
        {{record}}
        <NumberPad @update:value="onUpdateNumber" @submit="onUpdateRecord"/>
        <Types :value="record.type" @update:value="record.type = $event"/>
        <div class="from-wrapper">
            <FromInput filer-name="备注" placeholder="请输入备注" @update:value="onUpdateFrom"/>
        </div>
        <Tags @update:value="onUpdateTags"/>
    </Layout>

</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tags from '@/components/moneys/Tags.vue';
    import FromInput from '@/components/moneys/FromInput.vue';
    import Types from '@/components/moneys/Types.vue';
    import NumberPad from '@/components/moneys/NumberPad.vue';
    import olStore from '@/store/index2';

    @Component({
        components: {NumberPad, Types, FromInput, Tags}
    })
    export default class Money extends Vue {
        record: RecordItem = {
            tags: [], notes: '', type: '-', amount: 0
        };
        recordList = olStore.fetchRecord();

        onUpdateTags(value: string[]) {
            this.record.tags = value;
        }

        onUpdateFrom(value: string) {
            this.record.notes = value;
        }

        onUpdateNumber(value: string) {
            this.record.amount = parseFloat(value);
        }

        onUpdateRecord() {
            olStore.createRecord(this.record);
        }

    }
</script>

<style lang="scss">
    .layout-wrapper-items {
        display: flex;
        flex-direction: column-reverse;
    }

    .from-wrapper {
        padding: 10px;
        background: white;
    }
</style>