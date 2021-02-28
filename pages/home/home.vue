<template>
	<view class="main">
		<view v-show="swiperList.length" class="banner">
			<swiper class="screen-swiper square-dot" indicator-dots="true" circular="true" autoplay="true" interval="3000" duration="300">
				<swiper-item v-for="(item, index) in swiperList" :key="index">
					<view @click="onJumpH5(item)" class="item">
						<view class="title">
							<view class="logo"><image :src="item.productLogo"></image></view>
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
			<list-item ></list-item>
		</view>
	</view>
</template>

<script>
import uniNoticeBar from '@/components/uni-notice-bar/uni-notice-bar.vue';
import listItem from '@/components/list-item/list-item.vue';
import { mapActions } from 'vuex'
import { goLogin } from '@/common/util.js';
export default {
	components: {
		uniNoticeBar,
		listItem
	},
	data() {
		return {
			swiperList: [],
			noticeText: '经统计，同时申请3家以上产品，下款率高达98.6%以上',
			indicatorDots: true,
			autoplay: true,
			interval: 2000,
			duration: 500
		};
	},
	created() {
		this.$http({
			url: 'api/bannerconfig/list',
			method: 'get',
			callback:(ret) => {
				if (ret.code === 0) {
					this.swiperList = ret.data || [];
				}
			}
		})
	},
	methods: {
		...mapActions(['productconfig']),
		onJumpH5(item) {
			goLogin().then(phone => {
				if (phone) {
					const { productUrl, productName, id } = item || {};
					uni.navigateTo({
						url: `/components/view/view?title=${productName}&url=${productUrl}&id=${id}`
					})
				}
			});
		}
	},
	async onPullDownRefresh() {
		await this.productconfig();
		uni.stopPullDownRefresh();
	}
};
</script>

<style scoped lang="scss">
@import 'home.scss';
</style>
