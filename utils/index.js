export const isCurrentPage = (pagePath) => {
	const pages = getCurrentPages(); // 获取当前页面栈
	if (pages.length === 0) return false;
	const currentPage = pages[pages.length - 1];
	return `/${currentPage.route}` === pagePath;
};
export const goTo = (url) => {
	if (isCurrentPage(url)) return
	uni.navigateTo({
		url
	})
}
export const goBack = ()=>{
	uni.navigateBack()
}
export const previewImage = (data,index)=>{
	  uni.previewImage({
	    current: index,
	    urls:   data.map(img => img.url) // 假设images是图片数组
	  });
}
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/zh-cn'

dayjs.extend(relativeTime)
dayjs.locale('zh-cn')

export const  fromNow = (date)=> {
  return dayjs(new Date(date)).fromNow()
}
