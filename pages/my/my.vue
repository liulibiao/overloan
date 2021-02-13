<template>
	<view class="center">
		<view class="logo" :hover-class="!phoneNumber ? 'logo-hover' : ''">
			<image class="logo-img" :src="phoneNumber ? uerInfo.avatarUrl : avatarUrl"></image>
			<view @click="onLogin">
				<text class="uer-name">{{ phoneNumber ? phoneNumber : '点击登录' }}</text>
			</view>
		</view>
		<view class="center-list">
			<view class="center-list-item" v-for="(item, index) in lineItem" :class="{ 'border-bottom': lineItem.length > index + 1 }" :key="item.icon" @click="onClickLine(item.type)">
				<uni-icons color="#f55652" style="margin-right: 15upx" class="list-icon" :type="item.icon" size="15"></uni-icons>
				<text class="list-text">{{ item.name }}</text>
				<uni-icons color="#555" class="list-icon" type="arrowright" size="15"></uni-icons>
			</view>
		</view>
		<feed-back ref="feed"></feed-back>
		<logout ref="out" @onLogut="onLogut"></logout>
	</view>
</template>

<script>
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import feedBack from './feedBack.vue';
import logout from './logout.vue';
import login from '@/common/login.js';
import { goLogin } from '@/common/util.js'
export default {
	components: { 
		uniIcons,
		feedBack,
		logout
		},
	data() {
		return {
			login: false,
			phoneNumber: '',
			avatarUrl: '../../static/user.png',
			uerInfo: {
				avatarUrl: '../../static/user2.png'
			},
			lineItem: [
				{
					icon: 'hand-thumbsup',
					name: '意见反馈',
					type: 'feed'
				},
				{
					icon: 'help',
					name: '关于我们',
					type: 'we'
				},
				{
					icon: 'compose',
					name: '注销账号',
					type: 'logout'
				},
				{
					icon: 'info',
					name: '当前版本',
					type: 'versions'
				}
			]
		};
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
		// 注销登录
		onLogut() {
			this.onUserInit();
		},
		// 登录
		onLogin() {
			if (!this.phoneNumber) {
				/* #ifndef APP-PLUS-NVUE */
				login({onUpdate: e => {
					if (e) {
						this.onUserInit();
					}
				}});
				/* #endif */
				
				/* H5 兼容 pc 所需 */
				/* #ifdef H5 */
				uni.navigateTo({
					url: '/pages/my/login'
				});
				/* #endif */
			}
		},
		// 登录跳转
		_goLogin(name) {
			if (this.phoneNumber) {
				this.$refs[name].$refs.popup.open();
			} else {
				goLogin(e => {
					if (e) {
						this.onUserInit();
					}
				});
			}
		},
		onClickLine(type) {
			switch(type) {
				case 'feed':
					this._goLogin('feed');
				break;
				case 'we':
					uni.navigateTo({
						url: '/pages/my/we'
					});
				break;
				case 'logout':
					this._goLogin('out');
				break;
				case 'versions':
				
				break;
			}
		}
	}
};
</script>

<style scoped lang="scss">
.logo {
	height: 300rpx;
	padding-top: 40rpx;
	text-align: center;
	background-color: #F64640;
}

.logo-img {
	width: 150upx;
	height: 150upx;
	border-radius: 150upx;
}

.uer-name {
	color: #FFFFFF;
	font-size: 38upx;
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

.center-list {
	background-color: #ffffff;
	margin: 10px 15px;
	border-radius: 15px;
}

.center-list-item {
	display: flex;
	margin: 20rpx;
}

.border-bottom {
	border-bottom-width: 1upx;
	border-color: #c8c7cc;
	border-bottom-style: solid;
}

.list-icon {
	height: 120upx;
	line-height: 120upx;
	text-align: center;
}

.list-text {
	height: 120upx;
	line-height: 120upx;
	font-size: 34upx;
	color: #000;
	flex: 1;
	text-align: left;
}
</style>
