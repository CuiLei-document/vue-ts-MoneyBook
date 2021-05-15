<template>
    <Layout class-prefix="layout-wrapper">
        <NumberPad/>
        <Types/>
        <FromInput/>
        <Tags/>
    </Layout>

</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Tags from '@/components/moneys/Tags.vue';
    import FromInput from '@/components/moneys/FromInput.vue';
    import Types from '@/components/moneys/Types.vue';
    import NumberPad from '@/components/moneys/NumberPad.vue';
    @Component({
        components: {NumberPad, Types, FromInput, Tags}
    })
    export default class Money extends Vue {

    }
</script>

<style  lang="scss">
    .layout-wrapper-items{
        display:flex;
        flex-direction: column-reverse;
    }
</style>