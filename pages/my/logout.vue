<template>
	<uni-popup ref="popup">
	    <uni-popup-dialog mode="base" type="error" title="温馨提示" content="确定要注销当前账号？" :duration="2000" :before-close="true" @close="close" @confirm="confirm">
		</uni-popup-dialog>
	</uni-popup>
</template>

<script>
	import uniPopup from '@/components/uni-popup/uni-popup.vue';
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue';
	export default {
		props: ['onLogut'],
		name: 'feedBack',
		components: {
			uniPopup,
			uniPopupDialog
		},
		methods: {
			close(done) {
				done();
			},
			confirm(dome) {
				uni.clearStorageSync();
				this.$emit('onLogut');
				dome();
			}
		}
	}
</script>
	
<style>
</style>
