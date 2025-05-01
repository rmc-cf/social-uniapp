"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_NavBar2 = common_vendor.resolveComponent("NavBar");
  const _easycom_LifeFull2 = common_vendor.resolveComponent("LifeFull");
  (_easycom_NavBar2 + _easycom_LifeFull2)();
}
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
const _easycom_LifeFull = () => "../../components/LifeFull/LifeFull.js";
if (!Math) {
  (_easycom_NavBar + _easycom_LifeFull)();
}
const _sfc_main = {
  __name: "life-detail",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_vendor.t(common_vendor.unref(utils_index.fromNow)("2025-4-28")),
        c: common_vendor.f(5, (item, index, i0) => {
          return {
            a: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-43d0d63f"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/life-detail/life-detail.js.map
