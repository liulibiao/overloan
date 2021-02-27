<template>
	<view>
		<view @click="onJumpH5(item)" class="list-item" v-for="item in data" :key="item.id">
			<view class="top-content">
				<view class="left">
					<view class="pictrue"><image :src="item.productLogo" mode=""></image></view>
					<view class="to-text">
						<view class="t1">{{ item.productName }}</view>
						<view v-show="item.fastTagShow" class="t2 color-85">{{ item.productTag }}</view>
					</view>
				</view>
				<view class="right"><button type="primary" size="mini">立即领钱</button></view>
			</view>
			<view class="align-content fix">
				<view v-show="item.limitTagShow" class="fix-3 color-red">{{ item.productLimit }}</view>
				<view v-show="item.passTagShow" class="fix-3 uni-center">{{ item.loanNum }}</view>
				<view class="fix-3 f-r color-red">{{ item.productFast }}</view>
			</view>
			<view class="fix">
				<view v-show="item.limitTagShow" class="fix-3 color-85">额度范围(元)</view>
				<view v-show="item.passTagShow" class="fix-3 uni-center color-85">成功下款</view>
				<view class="fix-3 f-r color-85">期限</view>
			</view>
		</view>
	</view>
</template>

<script>
import { goLogin } from '@/common/util.js';
import { mapActions } from 'vuex'
export default {
	name: 'list-item',
	props: {
		list: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data() {
		return {
			data: []
		};
	},
	created() {
		uni.showLoading({
		    title: '加载中'
		});
		this.productconfig().then(ret => {
			const { data } = ret.data || {};
			this.data = data;
			uni.hideLoading();
		})
	},
	methods: {
		...mapActions(['behaviour','productconfig']),
		onJumpH5(item) {
			// plus.device.uuid
			this.behaviour('123456789');
			return;
			goLogin().then(phone => {
				if (phone) {
					this.behaviour('123456789');
					const { productUrl, t1 } = item || {};
					uni.navigateTo({
						url: `/components/view/view?title=${t1}&url=${productUrl}`
					})
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
.list-item {
	padding: 20rpx;
	margin-bottom: 12rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	.top-content {
		overflow: hidden;
		height: 80rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		.left {
			float: left;
			width: 70%;
			.logo {
				display: inline-block;
				width: 80rpx;
				height: 80rpx;
				image {
					width: 100%;
					height: 100%;
				}
			}
			.to-text {
				line-height: 48rpx;
				margin-left: 10rpx;
				display: inline-block;
				.t1 {
					color: #000000;
					font-size: 34rpx;
					font-weight: 500;
				}
			}
		}
		.right {
			float: right;
			width: 30%;
			text-align: right;
		}
	}
	.fix {
		display: flex;
		.fix-3 {
			flex: 3;
		}
		.f-r {
			text-align: right;
		}
	}
	.align-content {
		font-weight: 800;
		padding: 20rpx 0;
		font-size: 30rpx;
	}
	.color-85 {
		color: #858585;
	}
	.color-red {
		color: #f55240;
	}
	uni-button {
		background-color: #f55240;
	}
	
}
.pictrue {
	display: inline-block;
	image {
		width: 80rpx;
		height: 80rpx;
		border-radius: 10rpx;
	}
}
</style>
