'use strict';
const uniID = require('.uni-id');
exports.main = async function(event,context) {
    const {
        mobile
    } = event
  // 生成验证码可以按自己的需求来，这里以生成6位数字为例
  const randomStr = '00000' + Math.floor(Math.random() * 1000000)
  const code = randomStr.substring(randomStr.length - 6)
    const res = await uniID.sendSmsCode({
        mobile,
    code,
    type: 'login'
    })
    return res
}
// exports.sendSms = async (phone) => {
//   try {
//     const res = await uniCloud.sendSms({
// 	  smsKey: '2f4fb68bdf838c7997aa2bb6651cb68c',
// 	  smsSecret: '4345998837de7c7f879b262d2a84375d',
//       phone,
//       templateId: 'uniID_code',
//       data: {
//         name: 'DCloud',
//         code: '123456',
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