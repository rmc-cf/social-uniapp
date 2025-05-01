"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "CopyBtn",
  props: {
    text: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    const action = () => {
      common_vendor.index.setClipboardData({
        data: props.text,
        success: () => {
          common_vendor.index.showToast({
            title: "复制成功",
            icon: "none"
          });
        },
        fail: () => {
          common_vendor.index.showToast({
            title: "复制失败",
            icon: "none"
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(action)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-ca2553e1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/CopyBtn/CopyBtn.js.map
