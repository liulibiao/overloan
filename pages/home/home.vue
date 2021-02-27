<template>
	<view class="main">
		<view v-show="swiperList.length" class="banner">
			<swiper class="screen-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="3000" duration="300">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<view @click="onJumpH5(item)" class="item">
						<view class="title">
							<view class="logo"><image :src="item.logo"></image></view>
							<text class="text">{{ item.title }}</text>
						</view>
						<view class="apply-row">
							<view class="l">
								<view class="msg1">{{ item.msg1 }}</view>
								<view class="sum">{{ item.sum }}</view>
							</view>
							<view class="r"><button class="apply-bnt" type="warn">立即申请</button></view>
						</view>
						<view style="padding-bottom: 5px;">
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
import { goLogin } from '@/common/util.js';
export default {
	components: {
		uniNoticeBar,
		listItem
	},
	data() {
		return {
			swiperList: [],
			recommendList: [
				{
					id: 0,
					t1: '秒借分期-热推',
					t2: '资料简单 下款急速',
					logo: '/static/test/alipay.jpeg',
					scope: '6000-8000',
					sum: '2424342人',
					deadline: '1-9个月',
					url: 'http://web.crowd-funding.com.cn/?appMarket=afgarggrrqe'
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
					url: 'http://web.crowd-funding.com.cn/?appMarket=afgarggrrqe'
				}
			],
			noticeText: '经统计，同时申请3家以上产品，下款率高达98.6%以上',
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
		};
	},
	created() {
		uni.request({
			url: 'http://192.168.1.30:8081/app/api/bannerconfig/list',
			method: 'get',
			success:function(ret){
				if (ret.code === 0) {
					this.swiperList = ret.data || [];
				}
			}
		})
	},
	methods: {
		onJumpH5(item) {
			goLogin().then(phone => {
				if (phone) {
					const { url, title } = item || {};
					uni.navigateTo({
						url: `/components/view/view?title=${title}&url=${url}`
					})
				}
			});
		}
	},
	mounted() {

	}
};
</script>

<style scoped lang="scss">
@import 'home.scss';
</style>
