<template>
    <Layout>
        <Tabs :data-source="type" :value.sync="yyy" class-prefix="tabs"/>
        <div>
            <ul>
                <li v-for="(group,index) in recordGroup" :key="index">
                    <h3 class="title">{{group.title}}</h3>
                    <ul>
                        <li class="tags" v-for="tags in group.items" :key="tags.id">
                            <span>
                                {{tagString(tags.tags)}}
                            </span>
                            <span class="notes">
                                {{tags.notes}}
                            </span>
                            <span>
                                ￥{{tags.amount}}
                            </span>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';

    @Component({
        components: {Tabs}
    })
    export default class Statistics extends Vue {
        yyy = '-';
        type = [
            {text: '支出', value: '-'},
            {text: '收入', value: '+'}
        ];
        tagString(tags:Tag[]){
           return  tags.length === 0? '无' : tags.map(t =>t.name).join('，')
        }
        mounted() {
            this.$store.commit('fetchRecord');
        }

        get recordList() {
            return (this.$store.state as RootStore).recordList;
        }

        get recordGroup() {
            const {recordList} = this;
            const hashTable: { [key: string]: { title: string, items: RecordItem[] } } = {};
            for (let i = 0; i < recordList.length; i++) {
                const [date, time] = recordList[i].createAl!.split('T');
                hashTable[date] = hashTable[date] || {title: date, items: []};
                hashTable[date].items.push(recordList[i]);
            }
            return hashTable;
        }
    }
</script>

<style scoped lang="scss">
    ::v-deep .tabs-item {
        background: white;

        &.selected {
            background: #c4c4c4;

            &::after {
                display: none;
            }
        }

    }

    %item {
        padding: 2px 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        min-height:40px;
    }

    .title {
        @extend %item;
    }

    .tags {
        @extend %item;
        background: white;
    }
    .notes{
        margin-right: auto;
        margin-left: 10px;
        font-size: 12px;
        color:#999;
    }
</style>