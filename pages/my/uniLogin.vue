<template></template>

<script>
import { goLogin } from '@/common/util.js';
export default {
	name: 'uniApp',
	onShow() {
		goLogin().then(phone => {
			if (phone) {
				console.log(phone, 211111112222);
				uni.switchTab({
					url: '/pages/home/home'
				});
			}
		});
	}
};
</script>

<style></style>
