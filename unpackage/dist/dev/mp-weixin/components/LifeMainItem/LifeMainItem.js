"use strict";
const common_vendor = require("../../common/vendor.js");
const utils_index = require("../../utils/index.js");
if (!Array) {
  const _easycom_LifeActions2 = common_vendor.resolveComponent("LifeActions");
  const _easycom_CommentList2 = common_vendor.resolveComponent("CommentList");
  (_easycom_LifeActions2 + _easycom_CommentList2)();
}
const _easycom_LifeActions = () => "../LifeActions/LifeActions.js";
const _easycom_CommentList = () => "../CommentList/CommentList.js";
if (!Math) {
  (_easycom_LifeActions + _easycom_CommentList)();
}
const _sfc_main = {
  __name: "LifeMainItem",
  props: {
    item: {
      type: Object
    }
  },
  setup(__props) {
    common_vendor.ref(false);
    const actions = common_vendor.ref([{
      icon: "fire",
      num: "1",
      click: () => common_vendor.index.navigateTo({
        url: "/pages/index/index"
      })
    }, {
      icon: "chat",
      num: "2",
      click: () => common_vendor.index.navigateTo({
        url: "/pages/life-detail/life-detail"
      })
    }, {
      icon: "fire",
      activeIcon: "fire-filled",
      type: "count",
      num: "3"
    }]);
    return (_ctx, _cache) => {
      var _a, _b, _c, _d;
      return common_vendor.e({
        a: __props.item.avatar,
        b: common_vendor.t(__props.item.nickname),
        c: common_vendor.t(__props.item.contentText),
        d: (_b = (_a = __props.item) == null ? void 0 : _a.contentMedia) == null ? void 0 : _b.length
      }, ((_d = (_c = __props.item) == null ? void 0 : _c.contentMedia) == null ? void 0 : _d.length) ? {
        e: common_vendor.f(__props.item.contentMedia, (media, index, i0) => {
          return {
            a: common_vendor.o(($event) => common_vendor.unref(utils_index.previewImage)(__props.item.contentMedia, media.url), index),
            b: media.url,
            c: index
          };
        })
      } : {}, {
        f: common_vendor.p({
          data: actions.value
        })
      }, {
        g: common_vendor.o(($event) => common_vendor.unref(utils_index.goTo)("/pages/life-detail/life-detail")),
        h: common_vendor.p({
          data: __props.item.comments
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f41d56f1"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/LifeMainItem/LifeMainItem.js.map
