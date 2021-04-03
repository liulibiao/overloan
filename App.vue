<script>
import { mapMutations, mapActions } from 'vuex';
import APPUpdate from '@/plugins/APPUpdate';
export default {
	onLaunch: function() {
		// #ifdef APP-PLUS
		// 行为上报
		if (!uni.getStorageSync('phoneNumber')) {
			this.behaviour({
				statTypeDataId: plus.device.uuid,
				statType: 'guest'
			});
		}
		
		//监听push推送通知
		plus.push.addEventListener('receive', ({ type, title, content, payload }) => {
			//console.log(type,title,content,payload);
			console.log(type, 'type');
			if (type == 'receive' || uni.getSystemInfoSync().platform != 'ios') {
				//如果type!='receive'是自己本地插件的push消息栏，“拦截”避免死循环'，安卓系统没有这个问题
				if (typeof payload != 'object') {
					payload = JSON.parse(payload);
				} //判断是否为object，不是的话手动转一下。hbuilderx 3.0以上版本已经修复此问题可省略
				plus.ui.alert(payload.title);
				plus.push.createMessage(content, JSON.stringify(payload), {
					title: payload.title,
					subtitle: payload.content
				});
			}
		});

		//监听点击通知栏
		plus.push.addEventListener('click', function({ payload }) {
			uni.switchTab({
				url: '/pages/home/home'
			});
		});

		// 一键登录预登陆，可以显著提高登录速度
		uni.preLogin({
			provider: 'univerify',
			success: res => {
				// 成功
				this.setUniverifyErrorMsg();
				console.log('preLogin success: ', res);
			},
			fail: res => {
				this.setUniverifyLogin(false);
				this.setUniverifyErrorMsg(res.errMsg);
				// 失败
				console.log('preLogin fail res: ', res);
			}
		});
		
		APPUpdate();
		// #endif
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	methods: {
		...mapActions(['behaviour']),
		...mapMutations(['setUniverifyErrorMsg', 'setUniverifyLogin'])
	}
};
</script>

<style>
/* #ifdef APP-PLUS */
@import 'common/main.css';
/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用 */
@import 'common/uni.css';

/* H5 兼容 pc 所需 */
/* #ifdef H5 */
@media screen and (min-width: 768px) {
	body {
		overflow-y: scroll;
	}
}


.uni-top-window uni-tabbar .uni-tabbar {
	background-color: #fff !important;
}

.uni-app--showleftwindow .hideOnPc {
	display: none !important;
}
/* #endif */
</style>
