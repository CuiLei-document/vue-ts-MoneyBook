<template>
    <Layout>
        <Tabs :data-source="types" :value.sync="yyy" class-prefix="tabs"/>
        <ul v-if="recordGroup.length >0">
            <li v-for="(group,index) in recordGroup" :key="index">
                <h3 class="title">
                    <span>{{meihua(group.title)}}</span>
                    <span>￥{{group.total}}</span>
                </h3>
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
        <div v-else class="noResult">
            <p>当前页面没有内容</p>
        </div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tabs from '@/components/Tabs.vue';
    import dayjs from 'dayjs';
    import clone from '@/lib/clone';
    import recordMixin from '@/mixins/recordMixin';

    @Component({
        components: {Tabs}
    })
    export default class Statistics extends Vue {
        yyy = '-';
        types = recordMixin;

        tagString(tags: Tag[]) {
            return tags.length === 0 ? '无' : tags.map(t => t.name).join('，');
        }

        meihua(string: string) {
            const day = dayjs(string);
            if (day.isSame(dayjs(), 'day')) {
                return '今天';
            } else if (day.isSame(dayjs().subtract(1, 'day'), 'day')) {
                return '昨天';
            } else if (day.isSame(dayjs().subtract(2, 'day'), 'day')) {
                return '前天';
            } else if (day.isSame(dayjs(), 'month')) {
                return day.format('M月-DD日');
            } else {
                day.format('YYYY年-MM月-DD日');
            }
        }

        beforeCreate() {
            this.$store.commit('fetchRecord');
        }

        get recordList() {
            return (this.$store.state as RootStore).recordList;
        }

        get recordGroup() {
            const {recordList} = this;
            const newList = clone(recordList).filter(t => t.type === this.yyy).sort((a, b) => dayjs(b.createAl).valueOf() - dayjs(a.createAl).valueOf());
            if (newList.length === 0) {
                return [];
            }

            type Group = { title: string, total?: number, items: RecordItem[] }[]
            const group: Group = [{title: dayjs(newList[0].createAl).format('YYYY-MM-DD'), items: [newList[0]]}];
            for (let i = 1; i < newList.length; i++) {
                const current = newList[i];
                const last = group[group.length - 1];
                if (dayjs(last.title).isSame(dayjs(current.createAl), 'day')) {
                    last.items.push(current);
                } else {
                    group.push({title: dayjs(current.createAl).format('YYYY-MM-DD'), items: [current]});
                }
            }
            group.map(group => {
                group.total = group.items.reduce((sum, item) => sum + item.amount
                    , 0);
            });
            return group;
        }
    }
</script>

<style scoped lang="scss">
    .noResult {
        text-align: center;
        padding: 16px;
        font-size: 22px;
        color: red;
    }

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
        min-height: 40px;
    }

    .title {
        @extend %item;
    }

    .tags {
        @extend %item;
        background: white;
    }

    .notes {
        margin-right: auto;
        margin-left: 10px;
        font-size: 12px;
        color: #999;
    }
</style>