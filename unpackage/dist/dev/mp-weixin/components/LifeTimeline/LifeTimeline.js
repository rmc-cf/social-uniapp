"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "LifeTimeline",
  props: {
    datetime: {
      type: String,
      default() {
        const now = /* @__PURE__ */ new Date();
        return now.getMonth() + 1 + "-" + now.getDate();
      }
    }
  },
  setup(__props) {
    const props = __props;
    const month = common_vendor.computed(() => {
      var _a;
      return (_a = props.datetime) == null ? void 0 : _a.split("-")[0];
    });
    const date = common_vendor.computed(() => {
      var _a;
      return (_a = props.datetime) == null ? void 0 : _a.split("-")[1];
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(6, (item, index, i0) => {
          return common_vendor.e({
            a: index === 0
          }, index === 0 ? {} : {}, {
            b: index
          });
        }),
        b: common_vendor.t(date.value),
        c: common_vendor.t(month.value)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5ef11cd0"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/LifeTimeline/LifeTimeline.js.map
