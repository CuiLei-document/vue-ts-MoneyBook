import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from '@/components/Layout.vue';

Vue.config.productionTip = false
Vue.component('Layout',Layout)

window.onload = function(){
  setTimeout(()=>{
    window.scrollTo(0,50)
  },1000)
}
if(document.documentElement.clientWidth>500){
  window.alert('用手机访问更方便')
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
