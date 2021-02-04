<template>
	<web-view :webview-styles="webviewStyles" :src="url"></web-view>
</template>
<script>
import navBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
export default {
	components: { navBar },
	name: 'view-page',
	data() {
		return {
			webviewStyles: {
				progress: {
					color: '#f64640'
				}
			},
			url: ''
		};
	},
	onLoad: function(optioin) {
		const { title, url } = optioin;
		this.url = url;
		uni.setNavigationBarTitle({
			title
		});
	}
};
</script>

<style></style>
