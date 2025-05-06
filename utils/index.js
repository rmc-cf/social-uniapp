export const isCurrentPage = (pagePath) => {
	const pages = getCurrentPages(); // 获取当前页面栈
	if (pages.length === 0) return false;
	const currentPage = pages[pages.length - 1];
	return `/${currentPage.route}` === pagePath;
};
export const goTo = (url, t = 'redirect') => {
	if (isCurrentPage(url)) return
	switch (t) {
		case "navigate":

			uni.navigateTo({
				url
			})
			break;
		case "redirect":
			uni.redirectTo({
				url
			})
			break;
	}
}
export const goBack = () => {
	uni.navigateBack()
}
export const previewImage = (data, index) => {
	uni.previewImage({
		current: index,
		urls: data.map(img => img.url) // 假设images是图片数组
	});
}
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export const fromNow = (date) => {
	return dayjs(new Date(date)).fromNow()
}

// 状态栏高度
export const statusHeight = uni.getSystemInfoSync().statusBarHeight;

// 导航栏信息
export const menuButtonInfo = uni.getMenuButtonBoundingClientRect();
// 导航栏高度--导航栏高度默认44
export const navHeight = menuButtonInfo.height + (menuButtonInfo.top - statusHeight) * 2;

// 状态栏高度+导航栏高度
export const stickyHeight = statusHeight + navHeight