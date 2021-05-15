<template>
    <layout>
        <div class="navBar">
            <Icon name="left"/>
            <span class="title">编辑标签</span>
            <span></span>
        </div>
        <div class="from">
            <FromInput filer-name="备注" placeholder="请输入标签"/>
        </div>
        <div class="buttons">
            <Buttons @click="removeTag">删除标签</Buttons>
        </div>
    </layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagListModel from '@/models/tagListmodel';
    import Icon from '@/components/Icon.vue';
    import FromInput from '@/components/moneys/FromInput.vue';
    import Buttons from '@/components/Buttons.vue';

    @Component({
        components: {Buttons, FromInput, Icon}
    })
    export default class EditLabel extends Vue {
        created() {
            const id = this.$route.params.id;
            tagListModel.fetchList();
            const tags = tagListModel.data;
            const tag = tags.filter(t => t.id == id)[0];
            if (tag) {
                console.log(tag);
            } else {
                this.$router.replace('/404');
            }
        }

        removeTag() {
        }
    }
</script>

<style scoped lang="scss">
    .navBar {
        height: 44px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: white;
    }

    .from {
        margin-top: 10px;
        background: white;
    }

    .buttons {
        text-align: center;
        padding: 16px;
        margin-top: 44-16px;
    }
</style>