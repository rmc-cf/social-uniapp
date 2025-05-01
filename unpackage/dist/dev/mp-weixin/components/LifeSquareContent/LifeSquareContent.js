"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_LifeMainItem2 = common_vendor.resolveComponent("LifeMainItem");
  _easycom_LifeMainItem2();
}
const _easycom_LifeMainItem = () => "../LifeMainItem/LifeMainItem.js";
if (!Math) {
  _easycom_LifeMainItem();
}
const _sfc_main = {
  __name: "LifeSquareContent",
  setup(__props) {
    const data = common_vendor.ref([{
      avatar: "/static/uni.png",
      nickname: "cfyyds",
      contentText: "123",
      contentMedia: [
        { url: "/static/uni.png" },
        { url: "/static/uni.png" },
        { url: "/static/uni.png" }
      ],
      comments: [{
        nickname: "213",
        content: "[图片]123123123"
      }, {
        nickname: "213",
        content: "[图片]123123123"
      }, {
        nickname: "213",
        content: "[图片]123123123"
      }]
    }, {
      avatar: "/static/uni.png",
      nickname: "cfyyds",
      contentMedia: [],
      comments: [{
        nickname: "213",
        content: "[图片]123123123"
      }, {
        nickname: "213",
        content: "[图片]123123123"
      }, {
        nickname: "213",
        content: "[图片]123123123"
      }]
    }, {
      avatar: "/static/uni.png",
      nickname: "cfyyds",
      contentMedia: [],
      comments: [{
        nickname: "213",
        content: "[图片]123123123"
      }, {
        nickname: "213",
        content: "[图片]123123123"
      }, {
        nickname: "213",
        content: "[图片]123123123"
      }]
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(data.value, (item, index, i0) => {
          return {
            a: index,
            b: "45845c06-0-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-45845c06"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/LifeSquareContent/LifeSquareContent.js.map
