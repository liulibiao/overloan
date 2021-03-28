'use strict';
const uniID = require('uni-id');

exports.main = async function(event, context) {
	const {
		mobile
	} = event
	const randomStr = '000' + Math.floor(Math.random() * 1000000)
	const code = randomStr.substring(randomStr.length - 4)
	const res = await uniID.sendSmsCode({
		templateId: '11650',
		mobile,
		code,
		type: 'login'
	})
	return res
}