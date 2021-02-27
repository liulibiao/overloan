<template>
	<view>
		<uni-notice-bar backgroundColor="#f5dfdc" :speed="40" scrollable="true" single="true" showIcon="true" :text="noticeText"></uni-notice-bar>
		<view style="background-color: #FFFFFF">
			<uni-tabs :tabData="tabs" :defaultIndex="defaultIndex" @tabClick='tabClick'>
			</uni-tabs>
		</view>
		<view class="list-item">
			<list-item :list="data"></list-item>
		</view>
	</view>
</template>

<script>
	import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue';
	import uniTabs from '@/components/uni-tabs/uni-tabs.vue';
	import listItme from '@/components/list-item/list-item.vue';
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
				tabs: ['下款快', '额度高', '期限长', '高通过'],
				data: [
					{
						id: 0,
						t1: '秒借分期-热推',
						t2: '资料简单 下款急速',
						logo: '/static/test/alipay.jpeg',
						scope: '6000-8000',
						sum: '2424342人',
						deadline: '1-9个月',
						url: 'https://h.zjrkcc.cn/?tg_id=90516&from=sem32&utm_source=rxd&utm_medium=cpa&utm'
					},
					{
						id: 1,
						t1: '牛牛万卡-热推',
						t2: '资料简单 下款急速',
						logo: '/static/test/ljs.jpeg',
						scope: '4000-6000',
						sum: '2424342人',
						deadline: '1-9个月',
						url: 'https://h.zjrkcc.cn/?tg_id=90516&from=sem32&utm_source=rxd&utm_medium=cpa&utm'
					},
					{
						id: 2,
						t1: '凤凰应急-防水',
						t2: '资料简单 下款急速',
						logo: '/static/test/paipai.jpg',
						scope: '3000-6000',
						sum: '2424342人',
						deadline: '1-9个月',
						url: 'https://h.zjrkcc.cn/?tg_id=90516&from=sem32&utm_source=rxd&utm_medium=cpa&utm'
					}
				],
			}
		},
		methods: {
			tabClick(active) {
				this.defaultIndex = active;
			}
		}
	}
</script>

<style scoped lang="scss">
	.uni-noticebar {
		margin-bottom: 0;
	}
	.list-item {
		padding: 20rpx;
	}
</style>
