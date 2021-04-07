<template>
	<view>
		<view class="center-list">
			<view class="center-list-item" v-for="(item, index) in lineItem" :class="{ 'border-bottom': lineItem.length > index + 1 }" :key="item.icon" @click="onClickLine(item.type)">
				<!-- <uni-icons color="#f55652" style="margin-right: 15upx" class="list-icon" :type="item.icon" size="15"></uni-icons> -->
				<text class="list-text">{{ item.name }}</text>
				<text v-if="item.type === 'qq'" class="line">2981439371</text>
				<text v-if="item.type === 'versions'" class="line">{{versionName}}</text>
				<uni-icons color="#555" class="list-icon" type="arrowright" size="15"></uni-icons>
			</view>
		</view>
		<view class="out-btn">
			<button type="warn" @click="onOutLogin">退出登录</button>
		</view>
		<feed-back ref="feed"></feed-back>
	</view>
</template>

<script>
import feedBack from './feedBack.vue';
import APPUpdate, { getCurrentNo } from '@/plugins/APPUpdate/index.js';
export default {
	name: 'setting',
	components: {
		feedBack
	},
	data() {
		return {
			versionName: '1.0.0',
			lineItem: [
				{
					name: '意见反馈',
					type: 'feed'
				},
				{
					name: '联系我们',
					type: 'qq'
				},
				{
					name: '用户注册协议',
					type: 'user'
				},
				{

					name: '用户隐私政策',
					type: 'policy'
				},
				{
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
	created() {		
		// #ifdef APP-PLUS
		getCurrentNo(res => {
			this.versionName = res.versionName
		});
		// #endif
	},
	methods: {
		onOutModal(content) {
			uni.showModal({
			    title: '温馨提示',
			    content,
			    success: (res) => {
			        if (res.confirm) {
			            uni.clearStorageSync();
						if (this.isLogin) {
							uni.navigateTo({
								url: '/pages/my/uniLogin'
							})
						} else {
							uni.switchTab({
								url: '/pages/my/my'
							});
						}
			        } else if (res.cancel) {
			            console.log('用户点击取消');
			        }
			    }
			});
		},
		onOutLogin() {
			this.onOutModal('确定要退出登录吗');
		},
		onClickLine(type) {
			switch (type) {
				case 'feed':
					this.$refs['feed'].$refs.popup.open();
					break;
				case 'user':
					uni.navigateTo({
						url: '/pages/my/agree/user'
					});
					break;
				case 'policy':
					uni.navigateTo({
						url: '/pages/my/agree/policy'
					});
					break;
				case 'logout':
					this.onOutModal('确定要注销账号吗');
					break;
				case 'versions':
					// #ifdef APP-PLUS
					// true 在出现无新版本的情况下，有弹窗提示
					// false 无提示（一般在APP.vue使用）
					APPUpdate(true);
					// #endif
					// #ifndef APP-PLUS
					uni.showToast({
						title:"请在APP环境使用",
						icon:"none"
					});
					// #endif
					break;
			}
		}
	}
};
</script>

<style scoped lang="scss">
.center-list {
	background-color: #ffffff;
	padding: 0 40rpx;
	margin-top: 3px;
}

.center-list-item {
	display: flex;
}

.border-bottom {
	border-bottom-width: 1upx;
	border-color: #c8c7cc;
	border-bottom-style: solid;
}

.list-icon {
	height: 100upx;
	line-height: 100upx;
	text-align: center;
}

.list-text {
	height: 100upx;
	line-height: 100upx;
	font-size: 34upx;
	color: #000;
	flex: 1;
	text-align: left;
}
.out-btn {
	margin: 60rpx 30rpx 30rpx 30rpx;
}
.line {
	color: #b1aaaa;
	display: flex;
	align-items: center;
	margin-bottom: 4rpx;
}
</style>
