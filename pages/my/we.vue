<template>
	<view class="we">
		<view class="we-logo">
			<image class="img" src="../../static/logo.png"></image>
		</view>
		<view class="we-line" @click="onAgree">
			<text class="text">软件协议</text>
			<uni-icons color="#555" class="icon" type="arrowright" size="15"></uni-icons>
		</view>
		<view class="we-line" @click="onClient">
			<text class="text">客服QQ</text>
			<view>
				<text class="qq">2892848887</text>
				<uni-icons color="#555" class="icon" type="arrowright" size="15"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'we',
		methods: {
			// 软件协议
			onAgree() {
				uni.navigateTo({
					url: '/pages/my/agree'
				})
			},
			// QQ客服
			onClient() {
				
			}
			
		}
	}
</script>

<style scoped lang="scss">
	@import './style.scss';
</style>
