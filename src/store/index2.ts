import recordStore from '@/store/recordStore';
import tagsStore from './tagsStore';

const store = {
    ...recordStore,
    ...tagsStore
};

console.log(store);
export default store