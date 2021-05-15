<template>
    <div class="numberPad">
        <div class="output">{{output}}</div>
        <div class="buttons">
            <button @click="inputNumber">1</button>
            <button @click="inputNumber">2</button>
            <button @click="inputNumber">3</button>
            <button @click="removeNumber">删除</button>
            <button @click="inputNumber">4</button>
            <button @click="inputNumber">5</button>
            <button @click="inputNumber">6</button>
            <button @click="clearNumber">清空</button>
            <button @click="inputNumber">7</button>
            <button @click="inputNumber">8</button>
            <button @click="inputNumber">9</button>
            <button class="ok" @click="ok">OK</button>
            <button class="zero" @click="inputNumber">0</button>
            <button @click="inputNumber" >.</button>
        </div>
    </div>
</template>

<script lang='ts'>
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';

    @Component
    export default class NumberPad extends Vue {
        output ='0'
        inputNumber(event:MouseEvent){
            if(this.output.length === 16){return }
            const button = event.target as HTMLButtonElement;
            const input = button.textContent!;
            if(this.output === '0'){
                if('0123456789'.indexOf(input)>=0){
                    this.output =input
                }else{
                    this.output +=input
                }
                return
            }
            if(this.output.indexOf('.')>=0){
                if(input === '.'){
                    return;
                }
            }
            this.output += input;
        }
        removeNumber(){
            this.output = this.output.slice(0,-1)
            if(this.output.length === 0){
                this.output = '0'
            }
        }
        clearNumber(){
            this.output = '0'
        }
        ok(){
            this.$emit('update:value',this.output);
            this.$emit('submit',this.output);
            this.output = '0'
        }
    }
</script>

<style scoped lang="scss">
    @import '~@/styles/helper.scss';
    .numberPad{
        @extend %output-shadow;
        .output{
            font-size: 36px;
            font-family: Consolas,monospace;
            padding: 9px 16px;
            text-align: right;
        }
        .buttons{
            button{
                @extend %clearFix;
                background:transparent;
                border:none;
                width:25%;
                height:64px;
                float:left;
                &.ok{
                    @extend  %clearFix;
                    height:64*2px;
                    float:right;
                }
                &.zero{
                    width: 25*2%;
                }
                $bg: #f2f2f2;

                &:nth-child(1) {
                    background: $bg;
                }

                &:nth-child(2), &:nth-child(5) {
                    background: darken($bg, 4%);
                }

                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 4*2%);
                }
                &:nth-child(4), &:nth-child(7), &:nth-child(10),&:nth-child(13) {
                    background: darken($bg, 4*3%);
                }
                &:nth-child(8), &:nth-child(11) {
                    background: darken($bg, 4*4%);
                }
                &:nth-child(14){
                    background: darken($bg, 4*4.5%);
                }
                &:nth-child(12){
                    background: darken($bg, 4*5%);
                }
            }
        }
    }
</style>