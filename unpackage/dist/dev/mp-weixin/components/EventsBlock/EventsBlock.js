"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "EventsBlock",
  props: {
    item: {
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      var _a, _b;
      return {
        a: common_vendor.f(__props.item.title, (char, index, i0) => {
          return {
            a: common_vendor.t(char),
            b: index
          };
        }),
        b: common_vendor.t(__props.item.desc),
        c: common_vendor.t((_b = (_a = __props.item) == null ? void 0 : _a.btn) == null ? void 0 : _b.display),
        d: __props.item.footerBg,
        e: common_vendor.s(`background:${__props.item.bgColor}`)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/EventsBlock/EventsBlock.js.map
