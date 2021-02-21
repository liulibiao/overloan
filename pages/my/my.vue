<template>
	<view>
		<view class="logo" :hover-class="!phoneNumber ? 'logo-hover' : ''">
			<image class="logo-img" :src="phoneNumber ? uerInfo.avatarUrl : avatarUrl"></image>
			<text @click="onLogin" class="uer-name">{{ phoneNumber ? phoneNumber : '点击登录' }}</text>
		</view>
		<view class="list-item"><list-item :list="data"></list-item></view>
	</view>
</template>

<script>
import listItme from '@/components/list-item/list-item.vue';
import login from '@/common/login.js';
import { goLogin } from '@/common/util.js';
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
			data: [
				{
					id: 0,
					t1: '秒借分期-热推',
					t2: '资料简单 下款急速',
					logo: '/static/test/alipay.jpeg',
					scope: '6000-8000',
					sum: '2424342人',
					deadline: '1-9个月',
					url: 'https://h.zjrkcc.cn/?tg_id=90516&from=sem32&utm_source=rxd&utm_medium=cpa&utm'
				},
				{
					id: 1,
					t1: '牛牛万卡-热推',
					t2: '资料简单 下款急速',
					logo: '/static/test/ljs.jpeg',
					scope: '4000-6000',
					sum: '2424342人',
					deadline: '1-9个月',
					url: 'https://h.zjrkcc.cn/?tg_id=90516&from=sem32&utm_source=rxd&utm_medium=cpa&utm'
				},
				{
					id: 2,
					t1: '凤凰应急-防水',
					t2: '资料简单 下款急速',
					logo: '/static/test/paipai.jpg',
					scope: '3000-6000',
					sum: '2424342人',
					deadline: '1-9个月',
					url: 'https://h.zjrkcc.cn/?tg_id=90516&from=sem32&utm_source=rxd&utm_medium=cpa&utm'
				}
			]
		};
	},
	onNavigationBarButtonTap() {
		if (this.phoneNumber) {
			uni.navigateTo({
				url: '/pages/my/setting/setting'
			});
		} else {
			this.onLogin();
		}
	},
	onShow() {
		this.onUserInit();
	},
	methods: {
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
				/* #ifndef APP-PLUS-NVUE */
				login({
					onUpdate: e => {
						if (e) {
							this.onUserInit();
						}
					}
				});
				/* #endif */

				/* H5 兼容 pc 所需 */
				/* #ifdef H5 */
				uni.navigateTo({
					url: '/pages/my/login'
				});
				/* #endif */
			}
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
