<template>
	<view class="main">
		<view class="banner">
			<swiper class="screen-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="3000" duration="300">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<view class="item">
						<view class="title">
							<view class="logo"><image :src="item.logo"></image></view>
							<text class="text">{{ item.title }}</text>
						</view>
						<view class="apply-row">
							<view class="l">
								<text class="msg1">{{ item.msg1 }}</text>
								<view class="sum">{{ item.sum }}</view>
							</view>
							<view class="r"><button class="apply-bnt" type="warn">立即申请</button></view>
						</view>
						<view>
							<uni-icons class="icon" size="16" color="#fff" type="checkbox"></uni-icons>
							<text>{{ item.msg2 }}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view><uni-notice-bar backgroundColor="#f5dfdc" :speed="40" scrollable="true" single="true" showIcon="true" :text="noticeText"></uni-notice-bar></view>
		<view class="recommend">
			<view class="title">热门推荐</view>
			<list-item :list="recommendList"></list-item>
		</view>
	</view>
</template>

<script>
import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue';
import listItem from '@/components/list-item/list-item.vue';
export default {
	components: {
		uniNoticeBar,
		listItem
	},
	data() {
		return {
			swiperList: [
				{
					id: 0,
					title: '蚂蚁借呗-热推',
					logo: '/static/test/alipay.jpeg',
					msg1: '今日最高额度(元)',
					sum: 6000,
					msg2: '资料简单 下款急速',
					url: 'https://h.zjrkcc.cn/?tg_id=90516&from=sem32&utm_source=rxd&utm_medium=cpa&utm'
				},
				{
					id: 1,
					title: '陆金所-热推',
					logo: '/static/test/ljs.jpeg',
					msg1: '今日最高额度(元)',
					sum: 8000,
					msg2: '低息秒下款',
					url: 'https://h.zjrkcc.cn/?tg_id=90516&from=sem32&utm_source=rxd&utm_medium=cpa&utm'
				},
				{
					id: 2,
					title: '拍拍贷-热推',
					logo: '/static/test/paipai.jpg',
					msg1: '今日最高额度(元)',
					sum: 10000,
					msg2: '审核简单 下款急速',
					url: 'https://h.zjrkcc.cn/?tg_id=90516&from=sem32&utm_source=rxd&utm_medium=cpa&utm'
				}
			],
			recommendList: [
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
			noticeText: '经统计，同事申请3家以上产品，下款率高达98.6%以上',
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
		};
	}
};
</script>

<style scoped lang="scss">
@import 'home.scss';
</style>
