import { getCurrentNo } from '@/plugins/APPUpdate/index.js';
const apiBaseUrl = 'http://www.xinjianboke.com/app/'
import Vue from 'vue';

// 不需要登录的接口
const noToken = [
	'behaviour/collect/app',
	'api/version/info',
	'privateagreement/info',
	'privateagreement/privacy'
];

export default function({url, method, data, callback, hideLoading}) {
	const telephone = uni.getStorageSync('phoneNumber');
	const { appId, isLogin } = Vue.prototype;
	// 请求头信息
	const headers = {
		'appId': appId,
		'telephone': telephone
	};
	// #ifdef APP-PLUS
	const { vendor, uuid } = plus.device;
	headers['deviceId'] = uuid;
	headers['channelCode'] = vendor && vendor.toLowerCase();
	// #endif
	
	// 判断是否需要登录
	if (noToken.every(item => url.indexOf(item) === -1)) {
		// 获取用户电话
		if (isLogin && !telephone) {
			uni.navigateTo({
				url: '/pages/my/uniLogin'
			})
		}
	}

	// 如果调用接口不明确不显示 loading
	if (!hideLoading) {
		uni.showLoading({
			title: '加载中'
		});
	}
	uni.request({
		url: apiBaseUrl + url,
		data,
		header: headers,
		method,
		success: (response) => {
			if (!hideLoading) {
				uni.hideLoading();
			}
			const result = response.data
			if (result.code !== 0) {
				uni.showToast({
					icon: 'none',
					title: result.message || '服务异常',
					duration: 1500
				})
			} else {
				console.log(result)
				callback && callback(result)
			}
		},
		complete: () => {
			uni.hideLoading();
		},
		fail: (error) => {
			uni.hideLoading();
			if (error && error.response) {
				showError(error.response);
			}
		}
	})
}

const showError = error => {
	let errorMsg = ''
	switch (error.status) {
		case 400:
			errorMsg = '请求参数错误'
			break
		case 401:
			errorMsg = '未授权，请登录'
			break
		case 403:
			errorMsg = '跨域拒绝访问'
			break
		case 404:
			errorMsg = `请求地址出错: ${error.config.url}`
			break
		case 408:
			errorMsg = '请求超时'
			break
		case 500:
			errorMsg = '服务器内部错误'
			break
		case 501:
			errorMsg = '服务未实现'
			break
		case 502:
			errorMsg = '网关错误'
			break
		case 503:
			errorMsg = '服务不可用'
			break
		case 504:
			errorMsg = '网关超时'
			break
		case 505:
			errorMsg = 'HTTP版本不受支持'
			break
		default:
			errorMsg = error.msg
			break
	}

	uni.showToast({
		title: errorMsg,
		icon: 'none',
		duration: 1000,
		complete: function() {
			setTimeout(function() {
				uni.hideToast();
			}, 1000);
		}
	});
}