<template>
	<view>
		<web-view :webview-styles="webviewStyles" :src="url"></web-view>
	</view>
</template>
<script>
import navBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import { mapActions } from 'vuex'

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
		const { title, url, id } = optioin;
		debugger
		this.url = url;
		uni.setNavigationBarTitle({
			title
		});
		this.behaviour({
			statTypeDataId: id,
			statType: 'view'
		});
	},
	methods: {
		...mapActions(['behaviour']),
	}
};
</script>

<style></style>
