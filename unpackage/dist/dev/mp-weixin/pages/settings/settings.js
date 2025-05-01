"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_ItemSection2 = common_vendor.resolveComponent("ItemSection");
  _easycom_ItemSection2();
}
const _easycom_ItemSection = () => "../../components/ItemSection/ItemSection.js";
if (!Math) {
  _easycom_ItemSection();
}
const _sfc_main = {
  __name: "settings",
  setup(__props) {
    const settings = common_vendor.ref([{
      items: [{
        title: "个人信息"
      }]
    }, {
      items: [{
        title: "小黑屋"
      }]
    }, {
      items: [{
        title: "通知设置"
      }, {
        title: "隐私设置"
      }]
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          data: settings.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7fad0a1c"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/settings/settings.js.map
