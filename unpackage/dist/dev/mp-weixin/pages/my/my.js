"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const utils_index = require("../../utils/index.js");
const data_my = require("../../data/my.js");
if (!Array) {
  const _easycom_StatusBar2 = common_vendor.resolveComponent("StatusBar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_LifeTab2 = common_vendor.resolveComponent("LifeTab");
  const _easycom_MySpace2 = common_vendor.resolveComponent("MySpace");
  const _easycom_MyLife2 = common_vendor.resolveComponent("MyLife");
  const _easycom_MyRelation2 = common_vendor.resolveComponent("MyRelation");
  const _easycom_Base2 = common_vendor.resolveComponent("Base");
  (_easycom_StatusBar2 + _easycom_uni_icons2 + _easycom_LifeTab2 + _easycom_MySpace2 + _easycom_MyLife2 + _easycom_MyRelation2 + _easycom_Base2)();
}
const _easycom_StatusBar = () => "../../components/StatusBar/StatusBar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_LifeTab = () => "../../components/LifeTab/LifeTab.js";
const _easycom_MySpace = () => "../../components/MySpace/MySpace.js";
const _easycom_MyLife = () => "../../components/MyLife/MyLife.js";
const _easycom_MyRelation = () => "../../components/MyRelation/MyRelation.js";
const _easycom_Base = () => "../../components/Base/Base.js";
if (!Math) {
  (_easycom_StatusBar + _easycom_uni_icons + _easycom_LifeTab + _easycom_MySpace + _easycom_MyLife + _easycom_MyRelation + _easycom_Base)();
}
const _sfc_main = {
  __name: "my",
  setup(__props) {
    const tabData = common_vendor.ref(data_my.myTabs);
    const curKey = common_vendor.ref(tabData.value[1].key || "life");
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$1,
        b: common_vendor.o(($event) => common_vendor.unref(utils_index.goTo)("/pages/userinfo/userinfo")),
        c: common_vendor.p({
          type: "compose",
          color: "#fff",
          size: "26"
        }),
        d: common_vendor.o(($event) => common_vendor.unref(utils_index.goTo)("/pages/settings/settings")),
        e: common_vendor.p({
          type: "more-filled",
          color: "#fff",
          size: "26"
        }),
        f: common_assets._imports_0$2,
        g: common_vendor.o((key) => curKey.value = key),
        h: common_vendor.p({
          paddingY: "30rpx",
          data: tabData.value,
          position: "sticky",
          top: "80rpx",
          left: "0",
          curKey: curKey.value
        }),
        i: curKey.value == "space"
      }, curKey.value == "space" ? {} : curKey.value == "life" ? {} : curKey.value == "relation" ? {} : {}, {
        j: curKey.value == "life",
        k: curKey.value == "relation"
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2f1ef635"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/my/my.js.map
