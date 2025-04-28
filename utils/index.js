export const isCurrentPage = (pagePath) => {
  const pages = getCurrentPages(); // 获取当前页面栈
  if (pages.length === 0) return false;
  const currentPage = pages[pages.length - 1];
  return `/${currentPage.route}` === pagePath;
};