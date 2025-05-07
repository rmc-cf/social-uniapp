"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  __name: "account",
  setup(__props) {
    const isAccept = common_vendor.ref(false);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$3,
        b: isAccept.value,
        c: common_vendor.o(($event) => isAccept.value = !isAccept.value)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8cce343a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/account/account.js.map
