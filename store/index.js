import Vue from 'vue'
import Vuex from 'vuex'
import http from '../common/http.js';

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
		},
		setProduct(state, payload) {
			state.productData = payload.data || []
		}
	},
	actions: {
		behaviour: function({ // 行为上报
			commit
		}, data) {
			return new Promise((resolve, reject) => {
				http({
					url: 'api/behaviour/collect/app',
					method: 'post',
					data,
					callback: (ret) => {
						resolve(ret);
					}
				})
			});
		},
		productconfig: function({ // 产品列表获取
			commit
		}, data) {
			return new Promise((resolve, reject) => {
				http({
					url: 'api/productconfig/list',
					method: 'get',
					callback: (ret) => {
						commit('setProduct', ret)
						resolve(ret);
					},
					data
				})
			});
		},
	}
})

export default store
