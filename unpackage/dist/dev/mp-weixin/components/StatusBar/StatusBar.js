"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
const _sfc_main = {
  __name: "StatusBar",
  props: {
    type: {
      type: String
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s(`height:${__props.type == "status" ? common_vendor.unref(utils_index.statusHeight) : common_vendor.unref(utils_index.stickyHeight)}px;`)
      };
    };
  }
};
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/StatusBar/StatusBar.js.map
