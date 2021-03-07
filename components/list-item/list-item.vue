<template>
	<view>
		<view @click="onJumpH5(item)" class="list-item" v-for="item in $store.state.productData" :key="item.id">
			<view class="top-content">
				<view class="left">
					<view class="pictrue"><image :src="url+item.productLogo" mode=""></image></view>
					<view class="to-text">
						<view class="t1">{{ item.productName }}</view>
						<view class="t2 color-85">{{ item.fastTagShow ? item.productTag : '' }}</view>
					</view>
				</view>
				<view class="right"><button type="primary" size="mini">立即领钱</button></view>
			</view>
			<view class="align-content fix">
				<view class="fix-3 color-red">{{ item.limitTagShow ? item.productLimitLow +'-'+ item.productLimitUp : '' }}</view>
				<view  class="fix-3 uni-center">{{ item.passTagShow ? item.loanNum : '' }}</view>
				<view class="fix-3 f-r color-red">{{ item.productFast }}</view>
			</view>
			<view class="fix">
				<view class="fix-3 color-85">{{item.limitTagShow ? '额度范围(元)' : ''}}</view>
				<view class="fix-3 uni-center color-85">{{ item.passTagShow ? '成功下款' : ''}}</view>
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
			url: 'http://f2281l7408.51vip.biz/image/',
			data: []
		};
	},
	created() {
		this.productconfig();
	},
	methods: {
		...mapActions(['productconfig']),
		onJumpH5(item) {
			goLogin().then(phone => {
				if (phone) {
					const { productUrl, productName, id } = item || {};
					uni.navigateTo({
						url: `/components/view/view?title=${productName}&url=${productUrl}&id=${id}`
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
	}
}
</style>
