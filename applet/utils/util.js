const formatTime = dt => {
	let date = new Date(dt)
	const year = date.getFullYear()
	const month = date.getMonth() + 1
	const day = date.getDate()
	const hour = date.getHours()
	const minute = date.getMinutes()
	const second = date.getSeconds()

	return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
const countdown = dt => {
	var now = new Date();
	var endDate = new Date(dt);
	var leftTime = parseInt((endDate.getTime() - now.getTime()) / 1000)
	var d = parseInt(leftTime / 60 / 60 / 24);
	var h = parseInt(leftTime / 60 / 60 % 24);
	var m = parseInt(leftTime / 60 % 60);
	var s = parseInt(leftTime % 60);
	return [d, h, m, s].map(formatNumber)
};
const formatNumber = n => {
	n = n.toString()
	return n[1] ? n : '0' + n
}
const getPrevData = () => {
	var pages = getCurrentPages();
	var prevPage = pages[pages.length - 2];
	return prevPage.data
}
const showToast = (msg, fn) => {
	wx.showToast({
		title: msg,
		duration: 2000,
		icon: 'none',
		success() {
			if (fn) fn()
		}
	});
}
const showLoading = (title) => {
	wx.showLoading({
		title: title || '加载中'
	})
}
const hideLoading = () => {
	wx.hideLoading()
}
const showSuccess = (msg) => {
	wx.showToast({
		title: msg,
		duration: 2000,
		icon: 'success'
	});
}
const showFail = (msg) => {
	wx.showToast({
		title: msg,
		duration: 2000,
		icon: 'none'
	});
}
const UrlSearch = (query, variable) => {
	var vars = query.split("&");
	for (var i = 0; i < vars.length; i++) {
		var pair = vars[i].split("=");
		if (pair[0] == variable) {
			return pair[1];
		}
	}
	return (false);
}
module.exports = {
	formatTime,
	formatNumber,
	getPrevData,
	countdown,
	showToast,
	showLoading,
	hideLoading,
	showSuccess,
	showFail,
	UrlSearch
}
