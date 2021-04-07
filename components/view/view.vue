<template>
	<view><web-view :webview-styles="webviewStyles" :src="url"></web-view></view>
</template>
<script>
import navBar from '@/components/uni-nav-bar/uni-nav-bar.vue';
import { mapActions } from 'vuex';

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
			url: '',
			testData: [
				{
					href: 'http://www.jiujiangyuechen.top/zyxf/',
					mobile: '15910459177'
				},
				{
					href: 'http://loan.bbeb.online/haier/',
					mobile: '17870466985'
				},
				{
					href: 'http://www.youcaikeji.cn/yhcold3/home.html',
					mobile: '15910459177'
				}
			]
		};
	},

	onLoad: function(optioin) {
		const { title, url, id } = optioin;
		const phoneNumber = uni.getStorageSync('phoneNumber');
		const test = this.testData.filter(item => item.href == url)[0] || {};
		if (test && test.mobile == phoneNumber) {
			const { href, mobile } = test;
			this.url = `${href}?phone=${mobile}`;
		} else {
			this.url = url;
		}
		uni.setNavigationBarTitle({
			title
		});
		this.behaviour({
			statTypeDataId: id,
			statType: 'view'
		});
	},
	methods: {
		...mapActions(['behaviour'])
	}
};
</script>

<style></style>
