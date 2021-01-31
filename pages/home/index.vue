<template>
	<view class="main">
		<view class="banner">
			<swiper class="screen-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="300">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<view class="item">
						<view class="title">
							<view class="logo">
								<image :src="item.logo"></image>
							</view>
							<text class="text">{{ item.title }}</text>
						</view>
						<view class="apply-row">
							<view class="l">
								<text class="msg1">{{ item.msg1 }}</text>
								<view class="sum">{{item.sum}}</view>
							</view>
							<view class="r"><button class="apply-bnt" type="warn">立即申请</button></view>
						</view>
						<view>
							<uni-icons class="icon" size="16" color="#fff" type="checkbox"></uni-icons>
							<text>{{item.msg2}}</text>
						</view>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<view>
			<uni-notice-bar backgroundColor="#f5dfdc" speed="40" scrollable="true" single="true" showIcon="true" :text="noticeText"></uni-notice-bar>
		</view>
		<view class="recommend">
			<view class="title">热门推荐</view>
			<view class="item" v-for="(item, index) in recommendList" :key="index">
				<view class="top-content">
					<view class="left">
						<view class="pictrue">
							<image :src="item.logo" mode=""></image>
						</view>
						<view class="to-text">
							<view class="t1">{{item.t1}}</view>
							<view class="t2 color-85">{{item.t2}}</view>
						</view>
					</view>
					<view class="right">
						<button type="primary" size="mini">立即领钱</button>
					</view>
				</view>
				<view class="align-content fix">
					<view class="fix-3 color-red">{{item.scope}}</view>
					<view class="fix-3 uni-center">{{item.sum}}</view>
					<view class="fix-3 f-r color-red">{{item.deadline}}</view>
				</view>
				<view class="fix">
					<view class="fix-3 color-85">额度范围(元)</view>
					<view class="fix-3 uni-center color-85">成功下款</view>
					<view class="fix-3 f-r color-85">期限</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue'
export default {
	components: {uniNoticeBar},
	data() {
		return {
			swiperList: [
				{
					id: 0,
					title: '蚂蚁借呗-热推',
					logo: '/static/test/alipay.jpeg',
					msg1: '今日最高额度(元)',
					sum: 6000,
					msg2: '资料简单 下款急速'
				},
				{
					id: 1,
					title: '陆金所-热推',
					logo: '/static/test/ljs.jpeg',
					msg1: '今日最高额度(元)',
					sum: 8000,
					msg2: '低息秒下款'
				},
				{
					id: 2,
					title: '拍拍贷-热推',
					logo: '/static/test/paipai.jpg',
					msg1: '今日最高额度(元)',
					sum: 10000,
					msg2: '审核简单 下款急速'
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
					deadline: '1-9个月'
				}, {
					id: 1,
					t1: '牛牛万卡-热推',
					t2: '资料简单 下款急速',
					logo: '/static/test/ljs.jpeg',
					scope: '4000-6000',
					sum: '2424342人',
					deadline: '1-9个月'
				}, {
					id: 2,
					t1: '凤凰应急-防水',
					t2: '资料简单 下款急速',
					logo: '/static/test/paipai.jpg',
					scope: '3000-6000',
					sum: '2424342人',
					deadline: '1-9个月'
				},
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
