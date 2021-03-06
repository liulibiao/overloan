<template>
	<uni-popup ref="popup">
	    <uni-popup-dialog mode="textarea" type="error" title="问题反馈" :duration="2000" :before-close="true" @close="close" @confirm="confirm">
		</uni-popup-dialog>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
	export default {
		name: 'feedBack',
		components: {
			uniPopup,
			uniPopupDialog
		},
		methods: {
			close(done) {
				done();
			},
			confirm(dome, value) {
				uni.showLoading({
					title: '加载中'
				})
				uni.request({
					url: 'http://af6c31881353.ngrok.io/api/feedback/save',
					method: 'post',
					data: {
						mobile: uni.getStorageSync('phoneNumber'),
						feedbackInfo: value
					},
					success: (ret) => {
						uni.hideLoading();
						uni.showToast({
							title: '感谢您的反馈',
							duration: 1500,
							icon: 'none'
						})
						dome();
					},
					fail: () => {
						uni.showToast({
							title: '操作失败',
							duration: 1500,
							icon: 'none'
						})
					}
				})
			}
		}
	}
</script>
	
<style>
</style>
