<template>
    <div class="layout-wrapper">
        <div class="content" :class="classPrefix && `${classPrefix}-items`">
            <slot/>
        </div>
        <Nav/>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import Nav from '@/components/Nav.vue';
    @Component({
        components: {Nav}
    })
    export default class Layout extends Vue {
    @Prop(String) classPrefix!:string
    }
</script>

<style scoped lang="scss">
.layout-wrapper{
    display: flex;
    flex-direction: column;
    height: 100vh;
    > .content{
        overflow: auto;
        flex-grow: 1;
    }
}
</style>