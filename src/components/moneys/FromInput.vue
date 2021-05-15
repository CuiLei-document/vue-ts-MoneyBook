<template>
    <div>
        <label class="notes">
            <span class="name">备注</span>
            <input type="text" placeholder="输入备注" :value="value" @input="value = $event.target.value">
        </label>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';

    @Component
    export default class FromInput extends Vue {
        value = ''
        @Watch('value')
        onValueChange(value:string){
            this.$emit('update:value', value);
        }
    }
</script>

<style scoped lang="scss">
    .notes{
        font-size: 16px;
        background: #f5f5f5;
        display:flex;
        align-items: center;
        padding-left: 16px;
        > .name{
            padding-right: 16px;
        }
        > input{
            height: 64px;
            flex-grow: 1;
            background: transparent;
            border:none;
            padding-right: 16px;
        }
    }
</style>