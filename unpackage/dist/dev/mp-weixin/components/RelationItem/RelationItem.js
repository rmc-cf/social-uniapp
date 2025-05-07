"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "RelationItem",
  setup(__props) {
    const item = common_vendor.ref();
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$2,
        b: item.value
      }, item.value ? {} : {
        c: common_vendor.p({
          size: "26",
          type: "gift-filled"
        })
      }, {
        d: item.value
      }, item.value ? {
        e: item.value.avatar,
        f: common_vendor.t(item.value.nickname)
      } : {
        g: common_vendor.p({
          size: "30",
          color: "pink",
          type: "plusempty"
        })
      });
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/RelationItem/RelationItem.js.map
