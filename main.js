import Vue from 'vue'
import App from './App'
import store from './store'
import http from './common/http.js';
Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$http = http;

Vue.prototype.isLogin = true;
Vue.prototype.appId = '__UNI__033F429';
Vue.prototype.channelCode = 'vivo';
Vue.prototype.msgTemplateId = '11650';

App.mpType = 'app'

// 全局组件
import uniIcons from "@/components/uni-icons/uni-icons.vue"
Vue.component('uni-icons', uniIcons);

const app = new Vue({
	store,
    ...App
})
app.$mount()
