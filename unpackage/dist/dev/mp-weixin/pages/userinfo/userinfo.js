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
const CopyBtnVue = () => "../../components/CopyBtn/CopyBtn.js";
const _sfc_main = {
  __name: "userinfo",
  setup(__props) {
    const id = common_vendor.ref("123132");
    const infoItems = common_vendor.ref([{
      items: [{
        title: "头像",
        replaceType: 0,
        type: "avatar"
      }, {
        title: `迷尘ID：${id.value}`,
        replaceType: 1,
        type: "copy",
        props: {
          text: id.value
        }
      }, {
        title: "自我介绍",
        replaceContent: "我就是我，是颜色不一样的烟火",
        type: "pure"
      }, {
        title: "修改遇见登记卡"
      }, {
        title: "主页背景卡",
        replaceContent: 123
      }, {
        title: "昵称",
        replaceContent: "CFYYDS"
      }, {
        title: "生日",
        replaceContent: "2024-04-11"
      }, {
        title: "星座",
        replaceContent: "金牛做"
      }, {
        title: "不显示我的星座",
        replaceType: 1,
        replaceContent: CopyBtnVue,
        props: {
          text: id.value
        }
      }]
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          data: infoItems.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2ea52cef"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/userinfo/userinfo.js.map
