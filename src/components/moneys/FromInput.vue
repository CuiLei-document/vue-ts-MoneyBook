<template>
    <div>
        <label class="notes">
            <span class="name">{{filerName}}</span>
            <input type="text" :placeholder="placeholder" :value="value" @input="onValueChange($event.target.value)">
        </label>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    @Component
    export default class FromInput extends Vue {
       @Prop(String) value!:string
        @Prop(String) filerName!:string
        @Prop(String) placeholder!: string
        onValueChange(value:string){
            this.$emit('update:value', value);
        }
    }
</script>

<style scoped lang="scss">
    .notes{
        font-size: 16px;
        display:flex;
        align-items: center;
        padding-left: 16px;
        > .name{
            padding-right: 16px;
        }
        > input{
            height: 44px;
            flex-grow: 1;
            background: transparent;
            border:none;
            padding-right: 16px;
        }
    }
</style>