<template>
	<view>
		<!-- 	<view class="">
			<image src="../../static/uni.png"></image>
			<text>闪贷分期</text>
		</view> -->
		<text>欢迎回来</text>
		<view class="uni-form-item uni-column"><input class="uni-input" focus placeholder="自动获得焦点" /></view>
		<button type="warn">下一步</button>
		<view  class="uni-padding-wrap uni-common-mt">
			<label>
				<checkbox :value="test" /><text></text>
			</label>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			test: true
		};
	},
	methods: {}
};
</script>

<style></style>
