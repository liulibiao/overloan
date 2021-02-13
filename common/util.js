import login from '@/common/login.js';

function goLogin(onUpdate = null) {
	return new Promise((resolve, reject) => {
		const phone = uni.getStorageSync('phoneNumber');
		if (!phone) {
			/* #ifndef APP-PLUS-NVUE */
			login({onUpdate});
			/* #endif */

			/* H5 兼容 pc 所需 */
			/* #ifdef H5 */
			uni.navigateTo({
				url: '/pages/my/login'
			});
			resolve(null);
			/* #endif */
		} else {
			resolve(phone);
		}
	});
}

module.exports = {
	goLogin
}
