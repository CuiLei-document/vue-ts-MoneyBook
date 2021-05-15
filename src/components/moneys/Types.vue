<template>
    <div>
        <ul class="types">
            <li :class="{selected:type === '-'}" @click="selectType('-')">支出</li>
            <li :class="{selected:type === '+'}" @click="selectType('+')">收入</li>
        </ul>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Types extends Vue {
        type = '-'
        selectType(type:string){
            if(type !== '-' && type !== '+'){
                throw new Error('type is unknown')
            }
            this.type = type
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