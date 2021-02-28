<template>
	<view>
		<rich-text :nodes="strings"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				strings: ''
			}
		},
		created() {
			this.$http({
				url: 'api/privateagreement/info/1',
				method: 'get',
				callback: ret => {
					this.strings = ret.data && ret.data.agreementInfo;
				}
			})
		}
	}
</script>

<style>
</style>
