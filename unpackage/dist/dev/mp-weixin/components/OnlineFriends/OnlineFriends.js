"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_OnlineItem2 = common_vendor.resolveComponent("OnlineItem");
  _easycom_OnlineItem2();
}
const _easycom_OnlineItem = () => "../OnlineItem/OnlineItem.js";
if (!Math) {
  _easycom_OnlineItem();
}
const _sfc_main = {
  __name: "OnlineFriends",
  setup(__props) {
    const onlineList = common_vendor.ref([
      {
        user: {
          avatar: "/static/bg.jpg",
          nickname: "cfyyds",
          desc: "123123"
        }
      },
      {
        user: {
          avatar: "/static/bg.jpg",
          nickname: "cfyyds",
          desc: "123123"
        }
      },
      {
        user: {
          avatar: "/static/bg.jpg",
          nickname: "cfyyds",
          desc: "123123"
        }
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$4,
        b: common_vendor.f(onlineList.value, (item, index, i0) => {
          return {
            a: index,
            b: "14919526-0-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-14919526"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/OnlineFriends/OnlineFriends.js.map
