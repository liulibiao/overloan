<template>
	<view>
		<view class="list-item" v-for="(item, index) in list" :key="index">
			<view class="top-content">
				<view class="left">
					<view class="pictrue"><image :src="item.logo" mode=""></image></view>
					<view class="to-text">
						<view class="t1">{{ item.t1 }}</view>
						<view class="t2 color-85">{{ item.t2 }}</view>
					</view>
				</view>
				<view class="right"><button type="primary" size="mini">立即领钱</button></view>
			</view>
			<view class="align-content fix">
				<view class="fix-3 color-red">{{ item.scope }}</view>
				<view class="fix-3 uni-center">{{ item.sum }}</view>
				<view class="fix-3 f-r color-red">{{ item.deadline }}</view>
			</view>
			<view class="fix">
				<view class="fix-3 color-85">额度范围(元)</view>
				<view class="fix-3 uni-center color-85">成功下款</view>
				<view class="fix-3 f-r color-85">期限</view>
			</view>
		</view>
	</view>
</template>

<script>
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
		return {};
	}
};
</script>

<style lang="scss" scoped>
.list-item {
	padding: 20rpx;
	margin-bottom: 12rpx;
	background-color: #ffffff;
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
