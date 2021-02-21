<template>
	<view class="center-list">
		<view class="center-list-item" v-for="(item, index) in lineItem" :class="{ 'border-bottom': lineItem.length > index + 1 }" :key="item.icon" @click="onClickLine(item.type)">
			<uni-icons color="#f55652" style="margin-right: 15upx" class="list-icon" :type="item.icon" size="15"></uni-icons>
			<text class="list-text">{{ item.name }}</text>
			<uni-icons color="#555" class="list-icon" type="arrowright" size="15"></uni-icons>
		</view>
		<feed-back ref="feed"></feed-back>
		<logout ref="out"></logout>
	</view>
</template>

<script>
import feedBack from '../feedBack.vue';
import logout from '../logout.vue';
import { goLogin } from '@/common/util.js';
export default {
	name: 'setting',
	components: {
		feedBack,
		logout
	},
	data() {
		return {
			lineItem: [
				{
					icon: 'chat',
					name: '消息中心',
					type: 'feed'
				},
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
		// 用户信息初始化
		onUserInit() {
			const phoneNumber = uni.getStorageSync('phoneNumber');
			if (phoneNumber) {
				this.phoneNumber = phoneNumber;
			} else {
				this.phoneNumber = '';
			}
		},
		onClickLine(type) {
			switch (type) {
				case 'feed':
					this.$refs['feed'].$refs.popup.open();
					break;
				case 'we':
					uni.navigateTo({
						url: '/pages/my/we'
					});
					break;
				case 'logout':
					this.$refs['out'].$refs.popup.open();
					break;
				case 'versions':
					break;
			}
		}
	}
};
</script>

<style scoped lang="scss">
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
