<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="money" class="icon"/>
            <span>记账</span>
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="labels"/>
            <span>标签</span>
        </router-link>
        <router-link to="/statistics" class="item" active-class="selected">
            <Icon name="statistics"/>
            <span>记账</span>
        </router-link>
    </nav>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';


    import Icon from '@/components/Icon.vue';

    @Component({
        components: {Icon}
    })
    export default class Nav extends Vue {

    }
</script>

<style scoped lang="scss">
    @import '~@/styles/helper.scss';

    nav {
        @extend %navShadow;
        display: flex;
        font-size: 16px;
        > .item {
            padding-top: 2px;
            display: flex;
            flex-direction: column;
            width: 33.33333%;
            align-items: center;
            &.selected{
                color: red;
            }
        }
    }
</style>