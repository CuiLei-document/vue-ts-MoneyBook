<template>
    <Layout>
        <ul class="tags">
            <li v-for="tag in tags" :key="tag">
                <span>{{tag}}</span>
                <Icon name="right" class="icon"/>
            </li>

        </ul>
        <div class="createTag-wrapper">
            <Buttons @click="createTag">新建标签</Buttons>
        </div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Icon from '@/components/Icon.vue';
    import Buttons from '@/components/Buttons.vue';
    import tagListModel from '@/models/tagListmodel';

    @Component({
        components: {Buttons, Icon}
    })
    export default class Labels extends Vue {
        tags = tagListModel.fetchList()
        createTag(){
            const name = window.prompt('输入标签名')
            tagListModel.create(name)
        }
    }
</script>

<style scoped lang="scss">
    .tags {
        margin-left: 16px;

        > li {
            min-height: 44px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px solid #d8d8d8;
            font-size: 16px;

            > .icon {
                margin-right: 6px;
            }
        }
    }

    .createTag {
        background: #767676;
        border: none;
        color: white;
        border-radius: 4px;
        padding: 14px;
        font-size: 18px;
        &-wrapper{
            text-align: center;
            padding: 16px;
            margin-top: 44-14px;
        }
    }
</style>