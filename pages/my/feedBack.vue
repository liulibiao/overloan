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
				console.log(value);
				dome();
			}
		}
	}
</script>
	
<style>
</style>
