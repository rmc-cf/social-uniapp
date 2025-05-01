"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "CommentList",
  props: {
    data: {
      type: Array
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: !__props.data.length
      }, !__props.data.length ? {} : {
        b: common_vendor.f(__props.data.slice(0, 2), (item, index, i0) => {
          return {
            a: common_vendor.t(item.nickname),
            b: common_vendor.t(item.content),
            c: index
          };
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c23aa075"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/CommentList/CommentList.js.map
