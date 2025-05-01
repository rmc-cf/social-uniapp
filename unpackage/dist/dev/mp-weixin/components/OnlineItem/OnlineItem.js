"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "OnlineItem",
  props: {
    item: {
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.item.user.avatar,
        b: common_vendor.t(__props.item.user.nickname),
        c: common_vendor.t(__props.item.user.desc),
        d: common_vendor.p({
          type: "right",
          color: "#fff",
          size: "12"
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7fb855be"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/OnlineItem/OnlineItem.js.map
