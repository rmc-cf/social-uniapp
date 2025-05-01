"use strict";
const common_vendor = require("../common/vendor.js");
const isCurrentPage = (pagePath) => {
  const pages = getCurrentPages();
  if (pages.length === 0)
    return false;
  const currentPage = pages[pages.length - 1];
  return `/${currentPage.route}` === pagePath;
};
const goTo = (url) => {
  if (isCurrentPage(url))
    return;
  common_vendor.index.navigateTo({
    url
  });
};
const goBack = () => {
  common_vendor.index.navigateBack();
};
const previewImage = (data, index) => {
  common_vendor.index.previewImage({
    current: index,
    urls: data.map((img) => img.url)
    // 假设images是图片数组
  });
};
common_vendor.dayjs.extend(common_vendor.relativeTime);
common_vendor.dayjs.locale("zh-cn");
const fromNow = (date) => {
  return common_vendor.dayjs(new Date(date)).fromNow();
};
const statusHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
const navHeight = menuButtonInfo.height + (menuButtonInfo.top - statusHeight) * 2;
const stickyHeight = statusHeight + navHeight;
exports.fromNow = fromNow;
exports.goBack = goBack;
exports.goTo = goTo;
exports.isCurrentPage = isCurrentPage;
exports.previewImage = previewImage;
exports.statusHeight = statusHeight;
exports.stickyHeight = stickyHeight;
//# sourceMappingURL=../../.sourcemap/mp-weixin/utils/index.js.map
