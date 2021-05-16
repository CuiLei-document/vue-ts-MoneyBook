<template>
    <layout>
        <div class="navBar">
            <router-link to="/labels">
                <Icon name="left"/>
            </router-link>
            <span class="title">编辑标签</span>
            <span></span>
        </div>
        <div class="from">
            <FromInput @update:value="onUpdate" :value="tag.name" filer-name="备注" placeholder="请输入标签"/>
        </div>
        <div class="buttons">
            <Buttons @click="remove">删除标签</Buttons>
        </div>
    </layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Icon from '@/components/Icon.vue';
    import FromInput from '@/components/moneys/FromInput.vue';
    import Buttons from '@/components/Buttons.vue';
    import olStore from '@/store/index2';

    @Component({
        components: {Buttons, FromInput, Icon}
    })
    export default class EditLabel extends Vue {
        tag?: Tag = undefined;

        created() {
            const id = this.$route.params.id;
            olStore.fetchList();
            const tags = olStore.tagList;
            const tag = tags.filter(t => t.id == id)[0];
            if (tag) {
                this.tag = tag;
            } else {
                this.$router.replace('/404');
            }
        }

        onUpdate(name: string) {
            if (this.tag) {
                olStore.updateTag(this.tag.id, name);
            }
        }

        remove() {
            if (this.tag) {
                if (olStore.removeTag(this.tag.id)) {
                    this.$router.replace('/labels');
                } else {
                    window.alert('删除失败');
                }
            }
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