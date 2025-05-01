"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_NavBar2 = common_vendor.resolveComponent("NavBar");
  (_easycom_uni_icons2 + _easycom_NavBar2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_NavBar = () => "../../components/NavBar/NavBar.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_NavBar)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_vendor.p({
      type: "more-filled",
      color: "#fff"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-c94808a9"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/chat-detail/chat-detail.js.map
