<template>
    <Layout class-prefix="layout-wrapper">
        <NumberPad @update:value="onUpdateNumber" @submit="onUpdateRecord"/>
        <Tabs :data-source="recordMixin" :value.sync="record.type"/>
        <div class="from-wrapper">
            <FromInput filer-name="备注" placeholder="请输入备注" :value.sync="record.notes"/>
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
    import Tabs from '@/components/Tabs.vue';
    import recordMixin from '@/mixins/recordMixin';

    @Component({
        components: {Tabs, NumberPad, Types, FromInput, Tags}
    })
    export default class Money extends Vue {
        record: RecordItem = {
            tags: [], notes: '', type: '-', amount: 0
        };
        recordList = this.$store.commit('fetchRecord');
        recordMixin = recordMixin;

        onUpdateTags(value: Tag[]) {
            this.record.tags = value;
        }

        onUpdateFrom(value: string) {
            this.record.notes = value;
        }

        onUpdateNumber(value: string) {
            this.record.amount = parseFloat(value);
        }

        onUpdateRecord() {
            if (this.record.amount === 0) {
                return window.alert('金额不能为 0 ');
            } else if (!this.record.tags || this.record.tags.length === 0) {
                return window.alert('请选择一个标签');
            }
            this.$store.commit('createRecord', this.record);
            if (this.$store.state.currentError === null) {
                window.alert('成功');
                this.record.notes = '';
            } else if (this.record.amount > 1000) {
                return window.alert('消费已经过千');
            }
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