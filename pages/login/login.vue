<template>
	<view class="login">
		<view class="product">
			<view class="logo"><image src="/static/uni.png"></image></view>
			<text class="name">闪贷分期</text>
		</view>
		<text class="title">欢迎回来!</text>
		<view>
			<input-box v-model="phoneNum" style="border-bottom: 1px solid #DDDDDD;" ref="phone" :verification="['isNull','isPhoneNum']" :verificationTip="['手机号码不能为空','请输入正确的手机号']" placeholder="请输入手机号码" maBtm="10" maxLength="11"></input-box>
			<input-box v-model="code" placeholder="请输入验证码" :rightClass="phoneNum.length > 10 && 'codeStyle' || ''" rightText="发送验证码" @rightClick="onVerification" ></input-box>
		</view>
		<button type="warn" :disabled="(phoneNum.length > 10 && code.length > 3) ? false : true" class="login-btn" @click="onLogin">登录</button>
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
import sendSms from '@/common/login.js';
export default {
	name: 'login',
	components: {inputBox},
	data() {
		return {
			checked: false,
			phoneNum: '',
			code: ''
		};
	},
	methods: {
		onLogin() {
			if (!this.checked) {
				return uni.showToast({
					icon: 'none',
					title: '请点击同意《用户协议》和《隐私政策》',
					// #ifdef MP-WEIXIN
					duration: 10000,
					// #endif
					// mask: true
				});
			}
		},
		onVerification() {
			if (this.$refs.phone.getValue()) {
				const phoneNum = this.$refs.phone.value;
				 const randomStr = '000' + Math.floor(Math.random() * 1000000);
				 const code = randomStr.substring(randomStr.length - 4)
				// const ret = uniID.sendSmsCode({
				// 	mobile: phoneNum,
				// 	code,
				// 	templateId: 'uniID_code',
				// 	type: 'login'
				// });
				const ret = sendSms({mobile: phoneNum });
				console.log(ret, 22);
				  // const res = await uniCloud.sendSms({
				  //     smsKey: '2f4fb68bdf838c7997aa2bb6651cb68c',
				  //     smsSecret: '4345998837de7c7f879b262d2a84375d',
				  //     phone: phoneNum,
				  //     templateId: 'uniID_code',
				  //     data: {
				  //       name: 'DCloud',
				  //       code: '123456',
				  //       action: '注册',
				  //       expMinute: '3',
				  //     }
				  //   })
			}
		}
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
	.login-btn {
		border-radius: 25px;
		margin-top: 40rpx;
	}
	.uni-common-mt {
		display: flex;
	}
	.agreement {
		color: #0A98D5;
		margin-top: 4px;
	}
</style>
