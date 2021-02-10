<template>
	<view class="login">
		<view class="product">
			<view class="logo"><image src="../../static/uni.png"></image></view>
			<text class="name">闪贷分期</text>
		</view>
		<text class="title">欢迎回来!</text>
		<view>
			<input-box ref="phone" :verification="['isNull','isPhoneNum']" :verificationTip="['手机号码不能为空','请输入正确的手机号']" placeholder="请输入手机号码" maBtm="10" maxLength="11"></input-box>
		</view>
		<button type="warn" style="border-radius: 25px" @click="next">下一步</button>
		<view class="uni-padding-wrap uni-common-mt">
			<label class="agree">
				<evan-checkbox primary-color="#ff6a00" v-model="checked">
					<text style="color: #888484;">点击同意</text>
				</evan-checkbox>
			</label>
			<view class="agreement">
				<text>《用户协议》</text>
				<text>《隐私政策》</text>
			</view>
		</view>
	</view>
</template>

<script>
import inputBox from '@/components/input-box/input-box';
export default {
	name: 'login',
	components: {inputBox},
	data() {
		return {
			checked: true,
		};
	},
	methods: {
		next() {
			if (this.$refs.phone.getValue()) {
				const phoneNum = this.$refs.phone.value;
			}
		}
	},
	mounted() {
		// this.$nextTick(() => {
		// 	console.log(this.$refs.phone, 11);
		// })
	}
};
</script>

<style scoped lang="scss" >
	.login {
		padding: 30rpx;
	}
	.product {
		margin: 38rpx 0;
		height: 40rpx;
		line-height: 40rpx;
		display: flex;
		font-size: 30rpx;
		color: #f55240;
		.logo {
			image {
				margin-right: 10rpx;
				width: 40rpx;
				height: 40rpx;
			}
		}
	}
	.title {
		font-size: 60rpx;
		font-weight: 800;
	}
	
	.uni-common-mt {
		display: flex;
	}

	.agreement {
		color: #0A98D5;
		margin-top: 2px;
	}
</style>
