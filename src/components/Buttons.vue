<template>
    <div>
        <button class="createTag" @click="$emit('click',$event)">新建标签</button>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Buttons extends Vue {

    }
</script>

<style scoped lang="scss">
    .createTag {
        background: #767676;
        border: none;
        color: white;
        border-radius: 4px;
        padding: 6px;
        font-size: 16px;
    }
</style>