<template>
    <div>
        <svg class="icon">
            <use :xlink:href="`#`+name"></use>
        </svg>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';

    let importAll = (requireContext:__WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext)
    try{
        importAll(require.context('../assets/icons',true,/\.svg$/))
    }catch(err){
        console.log(err);
    }
    @Component
    export default class Icon extends Vue {
        @Prop({required: true,type: String}) name!:string

    }
</script>

<style scoped lang="scss">
    .icon {
        width: 2em; height: 2em;
        display: inline;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>