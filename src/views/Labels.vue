<template>
    <Layout>
        <div class="tags">
            <router-link :to="`/labels/edit/${tag.id}`" v-for="tag in tags" :key="tag.id" class="tag">
                <span>{{tag.name}}</span>
                <Icon name="right" class="icon"/>
            </router-link>

        </div>
        <div class="createTag-wrapper">
            <Buttons class="createTag" @click="createTag">新建标签</Buttons>
        </div>
    </Layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Icon from '@/components/Icon.vue';
    import Buttons from '@/components/Buttons.vue';
    import {mixins} from 'vue-class-component';
    import CreateTags from '@/mixins/CreateTags';

    @Component({
        components: {Buttons, Icon}
    })
    export default class Labels extends mixins(CreateTags) {
        get tags(){
            return  this.$store.state.tagList;
        }
        created(){
            this.$store.commit('fetchTag');

        }

    }
</script>

<style scoped lang="scss">
    .tags {
        margin-left: 16px;

        > .tag {
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

        &-wrapper {
            text-align: center;
            padding: 16px;
            margin-top: 44-14px;
        }
    }
</style>