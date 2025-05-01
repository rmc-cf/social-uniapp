"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const searchValue = common_vendor.ref("");
    const search = (res) => {
      common_vendor.index.showToast({
        title: "搜索：" + res.value,
        icon: "none"
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(search),
        b: common_vendor.o(($event) => searchValue.value = $event),
        c: common_vendor.p({
          cancelText: "取消",
          placeholder: "搜索昵称或者迷尘id",
          modelValue: searchValue.value
        }),
        d: searchValue.value
      }, searchValue.value ? {
        e: common_vendor.p({
          size: "25",
          color: "white",
          type: "search"
        }),
        f: common_vendor.t(searchValue.value)
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/search/search.js.map
