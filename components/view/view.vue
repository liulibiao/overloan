<template>
	<view>
		<page-head :title="title"></page-head>
		<view class="uni-padding-wrap uni-common-mt">
			<web-view :src="url"></web-view>
		</view>
	</view>
</template>
<script>
	export default {
		name: 'view-page',
		data() {
			return {
				url: ''
			}
		},
		onLoad: function(optioin) {
			const { title, url } = optioin;
			this.url = url;
			uni.setNavigationBarTitle({
			    title
			});
		}
	}
</script>

<style>
</style>
