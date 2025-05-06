"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_uni_tag2 = common_vendor.resolveComponent("uni-tag");
  _easycom_uni_tag2();
}
const _easycom_uni_tag = () => "../../uni_modules/uni-tag/components/uni-tag/uni-tag.js";
if (!Math) {
  _easycom_uni_tag();
}
const _sfc_main = {
  __name: "MessageItem",
  props: {
    item: {
      type: Object
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.item.to.avatar,
        b: common_vendor.t(__props.item.to.nickname),
        c: common_vendor.p({
          type: "success",
          size: "small",
          circle: true,
          text: "最近常聊"
        }),
        d: common_vendor.t(__props.item.content),
        e: common_vendor.o(($event) => common_vendor.unref(utils_index.goTo)("/pages/chat-detail/chat-detail"))
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-662f014e"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/MessageItem/MessageItem.js.map
