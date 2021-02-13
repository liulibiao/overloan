<template>
	<view class="we">
		<view class="we-line" @click="onAgree('user')">
			<text class="text">《用户协议》</text>
			<uni-icons color="#555" class="icon" type="arrowright" size="15"></uni-icons>
		</view>
		<view class="we-line" @click="onAgree('policy')">
			<text class="text">《隐私政策》</text>
			<uni-icons color="#555" class="icon" type="arrowright" size="15"></uni-icons>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'agree',
		methods: {
			onAgree(type) {
				uni.navigateTo({
					url: `/pages/my/agree/${type}`
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	@import '../style.scss';
</style>
