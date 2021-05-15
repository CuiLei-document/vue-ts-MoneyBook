<template>
    <layout>
        编辑
    </layout>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import tagListModel from '@/models/tagListmodel';

    @Component
    export default class EditLabel extends Vue {
        created(){
            const id = this.$route.params.id;
            tagListModel.fetchList()
            const tags = tagListModel.data
            const tag = tags.filter(t => t.id == id)[0]
            if(tag){
                console.log(tag);
            }else{
                this.$router.replace('/404')
            }
        }
    }
</script>

<style scoped lang="scss">

</style>