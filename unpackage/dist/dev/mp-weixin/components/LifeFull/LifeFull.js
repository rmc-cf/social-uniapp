"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_LifeActions2 = common_vendor.resolveComponent("LifeActions");
  _easycom_LifeActions2();
}
const _easycom_LifeActions = () => "../LifeActions/LifeActions.js";
if (!Math) {
  _easycom_LifeActions();
}
const _sfc_main = {
  __name: "LifeFull",
  setup(__props) {
    const actions = common_vendor.ref([{
      icon: "fire",
      num: "",
      click: () => common_vendor.index.navigateTo({
        url: "/pages/index/index"
      })
    }, {
      icon: "chat",
      num: "2",
      click: () => common_vendor.index.navigateTo({
        url: "/pages/index/index"
      })
    }, {
      icon: "fire",
      activeIcon: "fire-filled",
      num: "3",
      type: "count"
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          data: actions.value
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8c364e88"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/LifeFull/LifeFull.js.map
