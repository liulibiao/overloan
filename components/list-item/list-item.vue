<template>
	<view>
		<view @click="onJumpH5(item)" class="list-item" v-for="item in $store.state.productData" :key="item.id">
			<view class="top-content">
				<view class="left">
					<view class="pictrue"><image :src="url + item.productLogo" mode=""></image></view>
					<view class="to-text">
						<view>
							<view class="productName">{{ item.productName }}</view>
							<view class="productRate">{{ item.rateTagShow ? item.productRate : '' }}</view>
						</view>
						<view class="color-85">{{ item.fastTagShow ? item.productTag : '' }}</view>
					</view>
				</view>
				<view><button class="product-btn" type="primary" size="mini">立即领钱</button></view>
			</view>
			<view class="align-content fix">
				<view class="fix-3 color-red">{{ item.limitTagShow ? item.productLimitLow + '-' + item.productLimitUp : '' }}</view>
				<view class="fix-3 text-center">{{ item.passTagShow ? item.loanNum : '' }}</view>
				<view class="fix-3 f-r color-red">{{ item.productFast }}</view>
			</view>
			<view class="fix">
				<view class="fix-3 color-85">{{ item.attribute4 ? item.attribute1 : '' }}</view>
				<view class="fix-3 text-center color-85">{{ item.attribute5 ? item.attribute2 : '' }}</view>
				<view class="fix-3 f-r color-85">{{ item.attribute6 ? item.attribute3 : '' }}</view>
			</view>
		</view>
	</view>
</template>

<script>
import { goLogin } from '@/common/util.js';
import { mapActions } from 'vuex';
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
			url: 'http://www.xinjianboke.com/image/',
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
					});
				}
			});
		}
	}
};
</script>

<style lang="scss" scoped>
// .product-btn {
// 	background-c: #007aff;
// }
.list-item {
	padding: 20rpx;
	margin-bottom: 12rpx;
	background-color: #ffffff;
	border-radius: 10rpx;
	.top-content {
		overflow: hidden;
		padding: 10rpx 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		.left {
			display: flex;
			flex: 1;
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
				line-height: 36rpx;
				width: calc(100% - 50px);
				.productName {
					color: #000000;
					font-size: 34rpx;
					font-weight: 500;
					display: inline-block;
					width: 50%;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
				.productRate {
					display: inline-block;
					width: 50%;
					color: #858585;
					text-align: center;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: nowrap;
				}
			}
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
	.text-center {
		text-align: center;
	}
	.align-content {
		font-weight: 800;
		padding: 10rpx 0;
		font-size: 30rpx;
	}
	.color-85 {
		color: #858585;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.color-red {
		color: #f55240;
	}
	uni-button {
		background-color: #f55240;
	}
}
.pictrue {
	flex: 1;
	width: 80rpx;
	height: 80rpx;
	image {
		width: 80rpx;
		height: 80rpx;
	}
}
</style>
