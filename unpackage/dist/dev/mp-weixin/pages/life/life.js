"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_StatusBar2 = common_vendor.resolveComponent("StatusBar");
  const _easycom_LifeTab2 = common_vendor.resolveComponent("LifeTab");
  const _easycom_LifeSquareContent2 = common_vendor.resolveComponent("LifeSquareContent");
  const _easycom_LifeFollowContent2 = common_vendor.resolveComponent("LifeFollowContent");
  const _easycom_LifeNewestContent2 = common_vendor.resolveComponent("LifeNewestContent");
  const _easycom_Base2 = common_vendor.resolveComponent("Base");
  (_easycom_StatusBar2 + _easycom_LifeTab2 + _easycom_LifeSquareContent2 + _easycom_LifeFollowContent2 + _easycom_LifeNewestContent2 + _easycom_Base2)();
}
const _easycom_StatusBar = () => "../../components/StatusBar/StatusBar.js";
const _easycom_LifeTab = () => "../../components/LifeTab/LifeTab.js";
const _easycom_LifeSquareContent = () => "../../components/LifeSquareContent/LifeSquareContent.js";
const _easycom_LifeFollowContent = () => "../../components/LifeFollowContent/LifeFollowContent.js";
const _easycom_LifeNewestContent = () => "../../components/LifeNewestContent/LifeNewestContent.js";
const _easycom_Base = () => "../../components/Base/Base.js";
if (!Math) {
  (_easycom_StatusBar + _easycom_LifeTab + _easycom_LifeSquareContent + _easycom_LifeFollowContent + _easycom_LifeNewestContent + _easycom_Base)();
}
const _sfc_main = {
  __name: "life",
  setup(__props) {
    const tabData = common_vendor.ref([
      {
        name: "广场",
        key: "square"
      },
      {
        name: "关注",
        key: "follow"
      },
      {
        name: "最新",
        key: "newest"
      }
    ]);
    const curKey = common_vendor.ref(tabData.value[0].key || "square");
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          type: "status"
        }),
        b: common_vendor.o((key) => curKey.value = key),
        c: common_vendor.p({
          paddingX: "30rpx",
          paddingY: "30rpx",
          position: "sticky",
          left: "0",
          top: "0",
          bgColor: "#fff",
          data: tabData.value,
          curKey: curKey.value
        }),
        d: curKey.value == "square"
      }, curKey.value == "square" ? {} : curKey.value == "follow" ? {} : curKey.value == "newest" ? {} : {}, {
        e: curKey.value == "follow",
        f: curKey.value == "newest"
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c9b3d7a8"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/life/life.js.map
