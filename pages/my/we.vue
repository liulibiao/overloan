<template>
	<view class="we">
		<view class="we-logo">
			<image class="img" src="../../static/logo.png"></image>
		</view>
		<view class="we-line">
			<text class="text">软件协议</text>
			<uni-icons color="#555" class="icon" type="arrowright" size="15"></uni-icons>
		</view>
		<view class="we-line">
			<text class="text">客服QQ</text>
			<view>
				<text class="qq">2892848887</text>
				<uni-icons color="#555" class="icon" type="arrowright" size="15"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
</script>

<style scoped lang="scss">
	.we-logo {
		text-align: center;
		margin: 80rpx 0;
		.img {
			width: 150upx;
			height: 150upx;
			border-radius: 30upx;
		}
	}
	.we-line {
		display: flex;
		margin: 30rpx;
		padding: 0 30rpx;
		background-color: #FFFFFF;
		.text {
			height: 120upx;
			line-height: 120upx;
			font-size: 34upx;
			color: #000;
			flex: 1;
			text-align: left;
			font-weight: 600;
		}
		.qq {
			color: #b1aaaa;
		}
		.icon {
			height: 120upx;
			line-height: 120upx;
			text-align: center;
		}
	}
	
</style>
