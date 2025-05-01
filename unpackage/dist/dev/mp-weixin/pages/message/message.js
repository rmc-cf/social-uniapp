"use strict";
const common_vendor = require("../../common/vendor.js");
const data_message = require("../../data/message.js");
require("../../utils/index.js");
if (!Array) {
  const _easycom_StatusBar2 = common_vendor.resolveComponent("StatusBar");
  const _easycom_MessageList2 = common_vendor.resolveComponent("MessageList");
  const _easycom_Base2 = common_vendor.resolveComponent("Base");
  (_easycom_StatusBar2 + _easycom_MessageList2 + _easycom_Base2)();
}
const _easycom_StatusBar = () => "../../components/StatusBar/StatusBar.js";
const _easycom_MessageList = () => "../../components/MessageList/MessageList.js";
const _easycom_Base = () => "../../components/Base/Base.js";
if (!Math) {
  (_easycom_StatusBar + _easycom_MessageList + _easycom_Base)();
}
const _sfc_main = {
  __name: "message",
  setup(__props) {
    const tabData = common_vendor.ref(data_message.mesageTabList);
    const curKey = common_vendor.ref(tabData.value[1].key || "friends");
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: curKey.value == "messages"
      }, curKey.value == "messages" ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4c1b26cf"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/message/message.js.map
