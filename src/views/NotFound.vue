<template>
    <div>
        <div>当前页面不存在</div>
        <router-link to="/">点击返回首页</router-link>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class NotFound extends Vue {

    }
</script>

<style scoped lang="scss">

</style>