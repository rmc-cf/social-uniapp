"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "Tabbar",
  setup(__props) {
    const list = common_vendor.ref([
      {
        title: "遇见",
        icon: "fire",
        activeIcon: "fire-filled",
        url: "/pages/index/index"
      },
      {
        title: "动态",
        icon: "paperplane",
        activeIcon: "paperplane-filled",
        url: "/pages/life/life"
      },
      {
        title: "消息",
        icon: "chatbubble",
        activeIcon: "chatbubble-filled",
        url: "/pages/message/message"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(list.value, (item, index, i0) => {
          return {
            a: "306ca082-0-" + i0,
            b: common_vendor.p({
              size: 24,
              type: common_vendor.unref(utils_index.isCurrentPage)(item.url) ? item.activeIcon : item.icon,
              size: "30"
            }),
            c: common_vendor.t(item.title),
            d: common_vendor.o(($event) => common_vendor.unref(utils_index.goTo)(item.url), index),
            e: index
          };
        }),
        b: common_assets._imports_0$4,
        c: common_vendor.o(($event) => common_vendor.unref(utils_index.goTo)("/pages/my/my")),
        d: common_vendor.s(`bottom:${common_vendor.unref(utils_index.statusHeight)}rpx;`)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-306ca082"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/Tabbar/Tabbar.js.map
