<template>
	<view>
		<view class="logo" :hover-class="!phoneNumber ? 'logo-hover' : ''">
			<image class="logo-img" :src="phoneNumber ? uerInfo.avatarUrl : avatarUrl"></image>
			<text @click="onLogin" class="uer-name">{{ phoneNumber ? phoneNumber : '点击登录' }}</text>
		</view>
		<view class="list-item"><list-item></list-item></view>
	</view>
</template>

<script>
import listItme from '@/components/list-item/list-item.vue';
import login from '@/common/login.js';
import { mapActions } from 'vuex'

export default {
	components: {
		listItme
	},
	data() {
		return {
			login: false,
			phoneNumber: '',
			avatarUrl: '../../static/user.png',
			uerInfo: {
				avatarUrl: '../../static/user2.png'
			},
			data: []
		};
	},
	onNavigationBarButtonTap() {
		if (this.phoneNumber) {
			uni.navigateTo({
				url: '/pages/my/setting'
			});
		} else {
			this.onLogin();
		}
	},
	onShow() {
		this.onUserInit();
	},
	methods: {
		...mapActions(['productconfig']),

		// 用户信息初始化
		onUserInit() {
			const phoneNumber = uni.getStorageSync('phoneNumber');
			if (phoneNumber) {
				this.phoneNumber = phoneNumber;
			} else {
				this.phoneNumber = '';
			}
		},

		// 登录
		onLogin() {
			if (!this.phoneNumber) {
			debugger
				// #ifdef APP-PLUS
				login({
					onUpdate: e => {
						if (e) {
							this.onUserInit();
						}
					}
				});
				// #endif

				/* H5 兼容 pc 所需 */
				// #ifdef H5 
				uni.navigateTo({
					url: '/pages/my/login'
				});
				// #endif
			}
		},
		
		async onPullDownRefresh() {
			await this.productconfig();
			uni.stopPullDownRefresh();
		}
	}
};
</script>

<style scoped lang="scss">
.logo {
	padding: 40rpx 0;
	align-items: center;
	display: flex;
	justify-content: center;
	background-color: #ffffff;
	border-top: 3px solid #efeff4;
}

.logo-img {
	width: 150upx;
	height: 150upx;
	border-radius: 150upx;
}

.uer-name {
	margin-left: 10px;
	font-size: 42upx;
}

.go-login.navigat-arrow {
	font-size: 38upx;
	color: #ffffff;
}

.login-title {
	height: 150upx;
	align-items: self-start;
	justify-content: center;
	flex-direction: column;
	margin-left: 20upx;
}
.list-item {
	padding: 20rpx;
}
</style>
