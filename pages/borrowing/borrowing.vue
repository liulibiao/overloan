<template>
	<view>
		<view class="bar-top">
			<uni-notice-bar backgroundColor="#f5dfdc" :speed="40" scrollable="true" single="true" showIcon="true" :text="noticeText"></uni-notice-bar>
			<view style="background-color: #FFFFFF"><uni-tabs :tabData="tabs" :defaultIndex="defaultIndex" @tabClick="tabClick"></uni-tabs></view>
		</view>
		<view class="list-item"><list-item></list-item></view>
	</view>
</template>

<script>
import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue';
import uniTabs from '@/components/uni-tabs/uni-tabs.vue';
import listItme from '@/components/list-item/list-item.vue';
import { mapActions } from 'vuex';
export default {
	components: {
		uniNoticeBar,
		uniTabs,
		listItme
	},
	data() {
		return {
			noticeText: '经统计，同时申请3家以上产品，下款率高达98.6%以上',
			defaultIndex: 0,
			tabs: ['下款快', '额度高', '期限长', '高通过']
		};
	},
	methods: {
		...mapActions(['productconfig']),
		tabClick(active) {
			this.defaultIndex = active;
		}
	},
	async onPullDownRefresh() {
		await this.productconfig();
		uni.stopPullDownRefresh();
	}
};
</script>

<style scoped lang="scss">
.bar-top {
	position: fixed;
	width: 100%;
	height: 280rpx;
	z-index: 2;
}
.uni-noticebar {
	margin-bottom: 0;
}
.list-item {
	z-index: 1;
	padding: 160rpx 20rpx 20rpx 20rpx;
}
</style>
