import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		isUniverifyLogin: false,
		univerifyErrorMsg: '',
		productData: []
	},
	mutations: {
		setUniverifyLogin(state, payload) {
			typeof payload !== 'boolean' ? payload = !!payload : '';
			state.isUniverifyLogin = payload;
		},
		setUniverifyErrorMsg(state,payload = ''){
			state.univerifyErrorMsg = payload
		}
	},
	actions: {
		behaviour: function({ // 行为上报
			commit
		}, uuid) {
			return new Promise((resolve, reject) => {
				uni.request({
					url: 'http://192.168.1.38:8081/app/api/behaviour/collect/app',
					method: 'post',
					data: {uuid},
					success: (ret) => {
						resolve(ret);
					}
				})
			});
		},
		register: function({ // 注册
			commit
		}, mobile) {
			return new Promise((resolve, reject) => {
				uni.request({
					url: 'http://192.168.1.38:8081/app/api/register',
					method: 'post',
					data: {mobile},
					success: (ret) => {
						resolve(ret);
					}
				})
			});
		},
		productconfig: function({ // 产品列表获取
			commit
		}, data) {
			return new Promise((resolve, reject) => {
				uni.request({
					url: 'http://192.168.1.30:8081/app/api/productconfig/list',
					method: 'get',
					data,
					success: (ret) => {
						resolve(ret);
					}
				})
			});
		},
	}
})

export default store
