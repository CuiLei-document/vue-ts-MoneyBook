import Vue from 'vue';
import Component from 'vue-class-component';

const createMap:{[key:string]:string} = {
    'tag name duplicated': '标签名重复了'
};
@Component
export default class CreateTags extends Vue {
    createTag() {
        const name = window.prompt('请输入标签名');
        if (!name) {
            return window.alert('名字不能为空');
        }
        this.$store.commit('createTag', name);
        if (this.$store.state.createTagError) {
            return window.alert(createMap[this.$store.state.createTagError.message]);
        }
    }
}
