<template>
    <div>
        <ul class="types">
            <li v-for="tags in dataSource" :key="tags.value" :class="{[classPrefix+'-item']:classPrefix,selected: tags.value === value}"
                @click="select(tags)"
            >{{tags.text}}</li>
        </ul>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    type TagsDataSource ={
    text:string,value:string[]
    }
    @Component
    export default class Tabs extends Vue {
        @Prop({required: true, type: Array}) dataSource!: TagsDataSource[]
        @Prop(String) value!:string
        @Prop(String) classPrefix?:string
        select(tags:TagsDataSource){
            this.$emit('update:value',tags.value)
        }
    }
</script>

<style scoped lang="scss">
    .types{
        background: #c4c4c4;
        display:flex;
        font-size:24px;
        >li{
            width: 50%;
            height: 64px;
            display:flex;
            align-items: center;
            justify-content: center;
            position: relative;
            &.selected::after{
                position:absolute;
                content: '';
                left:0;
                bottom:0;
                width:100%;
                height:4px;
                background:#333;
            }
        }
    }
</style>