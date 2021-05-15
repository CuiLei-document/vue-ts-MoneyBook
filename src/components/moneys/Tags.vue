<template>
    <div class="tags">
        <ul class="content">
            <li>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
        </ul>
        <div class="newTag">
            <button>新建标签</button>

        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class Tags extends Vue {

    }
</script>

<style scoped lang="scss">
    .tags {
        padding: 16px;
        font-size: 16px;
        > .content {
            display: flex;
            flex-wrap: wrap;
             text-align: center;
            > li {
                $h: 24px;
                height: $h;
                padding: 0 12px;
                background: #d9d9d9;
                border-radius: $h/2;
                margin-right:  16px;
                margin-top: 8px;
                line-height: $h;
            }
        }

        > .newTag {
            padding-top: 16px;
            > button {
                font-size: 18px;
                background: transparent;
                border: none;
                border-bottom: 1px solid #d8d8d8;
                padding: 2px 8px;
            }
        }
    }
</style>