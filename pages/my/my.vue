<template>
	<view class="center">
		<view class="logo" :hover-class="!login ? 'logo-hover' : ''">
			<image class="logo-img" :src="login ? uerInfo.avatarUrl : avatarUrl"></image>
			<view @click="onLogin">
				<text class="uer-name">{{ login ? uerInfo.name : '点击登录' }}</text>
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
	</view>
</template>

<script>
import uniIcons from '@/components/uni-icons/uni-icons.vue';
import feedBack from './feedBack.vue';
export default {
	components: { 
		uniIcons,
		feedBack
		},
	data() {
		return {
			login: false,
			avatarUrl: '../../static/user.png',
			uerInfo: {},
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
	methods: {
		onLogin() {
			if (!this.login) {
				uni.navigateTo({
					url: '/pages/login/login'
				});
			}
		},
		onClickLine(type) {
			switch(type) {
				case 'feed':
				this.$refs.feed.$refs.popup.open();
				break;
				case 'we':
				uni.navigateTo({
					url: '/pages/my/we'
				});
				break;
				case 'logout':
				
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
