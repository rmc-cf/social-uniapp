"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "LifeActions",
  props: {
    data: {
      type: Array
    }
  },
  setup(__props) {
    const isClick = common_vendor.ref(false);
    const handleClick = (item) => {
      if (item.type === "count") {
        isClick.value = !isClick.value;
        isClick.value ? item.num++ : item.num--;
      }
      item.click();
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.data, (item, index, i0) => {
          return {
            a: common_vendor.o(($event) => handleClick(item), index),
            b: "a7643a27-0-" + i0,
            c: common_vendor.p({
              color: "gray",
              size: "24",
              type: item.type == "count" && item.activeIcon && isClick.value ? item.activeIcon : item.icon
            }),
            d: common_vendor.t(item.num),
            e: index
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a7643a27"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/LifeActions/LifeActions.js.map
