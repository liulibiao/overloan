'use strict';
const uniID = require('uni-id')
exports.main = async function(event, context) {
	const {
		mobile
	} = event
	const randomStr = '000' + Math.floor(Math.random() * 1000000)
	const code = randomStr.substring(randomStr.length - 4)
	const res = await uniID.sendSmsCode({
		templateId: '11203',
		mobile,
		code,
		type: 'login'
	})
	return res
}
// exports.main = async (event, context) => {
//   try {
// 	const randomStr = '000' + Math.floor(Math.random() * 1000000)
// 	const code = randomStr.substring(randomStr.length - 4)
//     const res = await uniCloud.sendSms({
//       smsKey: '2f4fb68bdf838c7997aa2bb6651cb68c',
//       smsSecret: '4345998837de7c7f879b262d2a84375d',
//       phone: '15000381110',
//       templateId: 'uniID_code',
//       data: {
//         name: 'DCloud',
//         code,
//         action: '注册',
//         expMinute: '3',
//       }
//     })
//     // 调用成功，请注意这时不代表发送成功
//     return res
//   } catch(err) {
//     // 调用失败
//     console.log(err.errCode)
//     console.log(err.errMsg)
//     return {
//       code: err.errCode,
//       msg: err.errMsg
//     }
//   }
// };