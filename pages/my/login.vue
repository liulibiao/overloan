<template>
	<view class="login">
		<view class="title">欢迎回来!</view>
		<view>
			<input-box
				v-model="mobile"
				style="border-bottom: 1px solid #DDDDDD;"
				ref="phone"
				:verification="['isNull', 'isPhoneNum']"
				:verificationTip="['手机号码不能为空', '请输入正确的手机号']"
				placeholder="请输入手机号码"
				maBtm="10"
				maxLength="11"
			></input-box>
			<input-box
				v-model="code"
				style="border: none;"
				placeholder="请输入验证码"
				:rightClass="(mobile.length > 10 && 'codeStyle') || ''"
				:rightText="rightText"
				@rightClick="onVerification"
			></input-box>
		</view>
		<button :loading="loading" type="warn" :disabled="mobile.length > 10 && code.length > 3 ? false : true" class="login-btn" @click="onLogin">登录</button>
		<view class="uni-padding-wrap uni-common-mt">
			<label class="agree">
				<evan-checkbox primary-color="#ff6a00" v-model="checked"><text style="color: #888484;">点击同意</text></evan-checkbox>
			</label>
			<view class="agreement">
				<text @click="onAgree('user')">《用户协议》</text>
				<text @click="onAgree('policy')">《隐私政策》</text>
			</view>
		</view>
	</view>
</template>

<script>
import inputBox from '@/components/input-box/input-box';
import { mapActions } from 'vuex';

export default {
	name: 'login',
	components: { inputBox },
	data() {
		return {
			loading: false,
			checked: false,
			mobile: '',
			code: '',
			rightText: '发送验证码',
			test: [{
				phone: '19173311946',
				code: '6666'
			}, {
				phone: '17870466985',
				code: '9999'
			}, {
				phone: '15910459177',
				code: '9999'
			}]
		};
	},

	methods: {
		...mapActions(['behaviour']),
		// 倒计时
		onCountdown() {
			let num = 60;
			let timer = null;
			this.rightText = `${num}秒后重新发送`;
			timer = setInterval(() => {
				if (num === 1) {
					this.rightText = '发送验证码';
					clearInterval(timer);
				} else {
					num--;
					this.rightText = `${num}秒后重新发送`;
				}
			}, 1000);
		},
		// 登录
		onLogin() {
			if (this.checked) {
				try {
					const { mobile, code } = this;
					// 测试账号
					if (this.test.some(item => item.phone == mobile && item.code === code)) {
						uni.setStorageSync('phoneNumber', mobile);
						uni.switchTab({
							url: '/pages/home/home'
						});
						this.behaviour({
							statTypeDataId: mobile,
							statType: 'register'
						});
						return;
					}
					this.loading = true;
					uniCloud
						.callFunction({
							name: 'loginsms',
							data: {
								mobile,
								code
							}
						})
						.then(res => {
							const { token, uid, code, msg } = res.result || {};
							this.loading = false;
							if (code === 0) {
								uni.setStorageSync('token', token);
								uni.setStorageSync('openid', uid);
								uni.setStorageSync('phoneNumber', mobile);
								const page = getCurrentPages();
								if (page.length > 1) {
									uni.switchTab({
										url: `/${page[0].route}`
									});
								} else {
									uni.switchTab({
										url: '/pages/home/home'
									});
								}
								this.behaviour({
									statTypeDataId: mobile,
									statType: 'register'
								});
							} else {
								uni.showToast({
									title: msg || '登录失败，请稍后再试',
									duration: 3000,
									icon: 'none'
								});
							}
						});
				} catch (e) {
					uni.clearStorageSync();
					console.log(e, 'err');
					uni.showToast({
						title: '登录失败，请稍后再试'
					});
					this.loading = false;
					//TODO handle the exception
				}
			} else {
				return uni.showToast({
					icon: 'none',
					title: '请点击同意《用户协议》和《隐私政策》',
					// #ifdef MP-WEIXIN
					duration: 10000
					// #endif
					// mask: true
				});
			}
		},
		// 获取验证码
		onVerification() {
			if (this.$refs.phone.getValue() && this.rightText === '发送验证码') {
				this.onCountdown();
				const mobile = this.$refs.phone.value;
				const randomStr = '000' + Math.floor(Math.random() * 1000000);
				const code = randomStr.substring(randomStr.length - 4);
				try {
					uniCloud
						.callFunction({
							name: 'sendcode',
							data: {
								mobile,
								code
							}
						})
						.then(res => {
							console.log('验证码获取成功', res);
						});
				} catch (e) {
					console.log(e, 'err');
					//TODO handle the exception
				}
			}
		},
		onAgree(type) {
			uni.navigateTo({
				url: `/pages/my/agree/${type}`
			});
		}
	}
};
</script>

<style scoped lang="scss">
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
	margin: 30rpx 0;
}
.login-btn {
	border-radius: 25px;
	margin: 40rpx 0 20rpx 0;
}
.uni-common-mt {
	display: flex;
	height: 30px;
	line-height: 30px;
}
.agreement {
	color: #0a98d5;
}
</style>
