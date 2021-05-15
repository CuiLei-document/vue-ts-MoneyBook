<template>
        <button class="button" @click="$emit('click',$event)">
            <slot/>
        </button>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Buttons extends Vue {

    }
</script>

<style scoped lang="scss">
    .button{
        background: #8f8d8d;
        border: none;
        color: white;
        border-radius: 4px;
        padding: 12px 16px;
        font-size: 16px;
    }
</style>