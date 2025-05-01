"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "LifeTab",
  props: {
    data: {
      type: Array
    },
    curKey: String,
    bgColor: {
      type: String,
      default: "transparent"
    },
    position: {
      type: String
    },
    left: {
      type: String
    },
    top: {
      type: String
    },
    paddingX: {
      type: String,
      default: "0"
    },
    paddingY: {
      type: String,
      default: "0"
    }
  },
  emits: ["change-key"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(__props.data, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: common_vendor.o(() => emit("change-key", item.key), item),
            c: item,
            d: item.key == __props.curKey ? 1 : ""
          };
        }),
        b: common_vendor.s(`background-color:${__props.bgColor};position:${__props.position};padding:${__props.paddingY} ${__props.paddingX};top:${__props.top};
	left:${__props.left};
	`)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-a25181d0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/LifeTab/LifeTab.js.map
