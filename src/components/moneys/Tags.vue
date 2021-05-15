<template>
    <div class="tags">
        <ul class="content">
            <li v-for="tag in dataSource" :key="tag.id"
            :class="{selected:selectedTags.indexOf(tag)>=0}"
             @click="toggle(tag)"
            >{{tag.name}}</li>

        </ul>
        <div class="newTag">
            <Buttons @click="createTag">新建标签</Buttons>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import Buttons from '@/components/Buttons.vue';
    import tagListModel from '@/models/tagListmodel';
    @Component({
        components: {Buttons}
    })
    export default class Tags extends Vue {
        @Prop() dataSource!:string
        selectedTags:string[] = []
        toggle(tag:string){
            const index = this.selectedTags.indexOf(tag);
            if(index>=0){
                this.selectedTags.splice(index,1)
            }else{
                this.selectedTags.push(tag)
                this.$emit('update:value',this.selectedTags)
            }
        }
        createTag(){
            const name = window.prompt('请输入标签名')
            if(!name){
                return window.alert('名字不能为空')
            }else{
                window.alert('创建成功')
                tagListModel.create(name)
            }

        }
    }
</script>

<style scoped lang="scss">
    .tags {
        padding: 16px;
        font-size: 16px;
        > .content {
            display: flex;
            flex-wrap: wrap;
             text-align: center;
            > li {
                $h: 24px;
                height: $h;
                padding: 0 12px;
                background: #d9d9d9;
                border-radius: $h/2;
                margin-right:  16px;
                margin-top: 8px;
                line-height: $h;
                &.selected{
                    background:#c4c4c4;
                    color: white;
                }
            }
        }

        > .newTag {
            padding-top: 16px;

        }
    }
</style>