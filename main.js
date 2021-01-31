import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

App.mpType = 'app'

// 全局组件
import uniIcons from "@/components/uni-icons/uni-icons.vue"
Vue.component('uni-icons', uniIcons);

const app = new Vue({
    ...App
})
app.$mount()
