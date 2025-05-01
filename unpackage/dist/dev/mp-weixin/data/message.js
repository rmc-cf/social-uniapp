"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "MessageList",
  data() {
    return {};
  }
};
if (!Array) {
  const _easycom_MessageItem2 = common_vendor.resolveComponent("MessageItem");
  const _easycom_uni_group2 = common_vendor.resolveComponent("uni-group");
  const _easycom_Base2 = common_vendor.resolveComponent("Base");
  (_easycom_MessageItem2 + _easycom_uni_group2 + _easycom_Base2)();
}
const _easycom_MessageItem = () => "../components/MessageItem/MessageItem.js";
const _easycom_uni_group = () => "../uni_modules/uni-group/components/uni-group/uni-group.js";
const _easycom_Base = () => "../components/Base/Base.js";
if (!Math) {
  (_easycom_MessageItem + _easycom_uni_group + _easycom_Base)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(10, (item, index, i0) => {
      return {
        a: index,
        b: "58b35a60-2-" + i0 + ",58b35a60-1"
      };
    }),
    b: common_vendor.p({
      title: "时间排序",
      ["margin-top"]: "0"
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
const mesageTabList = [
  {
    name: "好友",
    key: "friends",
    component: Component
  },
  {
    name: "消息",
    key: "messages",
    component: Component
  }
];
exports.Component = Component;
exports.mesageTabList = mesageTabList;
//# sourceMappingURL=../../.sourcemap/mp-weixin/data/message.js.map
