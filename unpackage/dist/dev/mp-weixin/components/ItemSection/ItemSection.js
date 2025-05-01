"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_UserAvatar2 = common_vendor.resolveComponent("UserAvatar");
  const _easycom_CopyBtn2 = common_vendor.resolveComponent("CopyBtn");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_UserAvatar2 + _easycom_CopyBtn2 + _easycom_uni_icons2)();
}
const _easycom_UserAvatar = () => "../UserAvatar/UserAvatar.js";
const _easycom_CopyBtn = () => "../CopyBtn/CopyBtn.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_UserAvatar + _easycom_CopyBtn + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "ItemSection",
  props: {
    data: {
      type: Array
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.data, (item, index, i0) => {
          return {
            a: common_vendor.f(item.items, (child, i, i1) => {
              return common_vendor.e({
                a: common_vendor.t(child.title),
                b: child.replaceContent
              }, child.replaceContent ? common_vendor.e({
                c: child.replaceContent == "avatar"
              }, child.replaceContent == "avatar" ? {
                d: "2313687f-0-" + i0 + "-" + i1,
                e: common_vendor.p({
                  ...child.props
                })
              } : {}, {
                f: child.replaceContent == "copy"
              }, child.replaceContent == "copy" ? {
                g: "2313687f-1-" + i0 + "-" + i1,
                h: common_vendor.p({
                  ...child.props
                })
              } : child.replaceContent === "pure" ? {
                j: common_vendor.t(child.replaceContent)
              } : {}, {
                i: child.replaceContent === "pure"
              }) : {}, {
                k: child.replaceType !== 1
              }, child.replaceType !== 1 ? {
                l: "2313687f-2-" + i0 + "-" + i1,
                m: common_vendor.p({
                  type: "right"
                })
              } : {}, {
                n: i
              });
            }),
            b: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2313687f"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/ItemSection/ItemSection.js.map
