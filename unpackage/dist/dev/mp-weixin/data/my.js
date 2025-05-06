"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
if (!Array) {
  const _easycom_LifeTimeline2 = common_vendor.resolveComponent("LifeTimeline");
  _easycom_LifeTimeline2();
}
const _easycom_LifeTimeline = () => "../components/LifeTimeline/LifeTimeline.js";
if (!Math) {
  _easycom_LifeTimeline();
}
const _sfc_main$2 = {
  __name: "MyLife",
  setup(__props) {
    common_vendor.ref([{
      title: "买家下单",
      desc: "2018-11-11"
    }, {
      title: "卖家发货",
      desc: "2018-11-12"
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0
      };
    };
  }
};
const Component$1 = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main$2, [["__scopeId", "data-v-0dc73165"]]);
if (!Array) {
  const _easycom_RelationItem2 = common_vendor.resolveComponent("RelationItem");
  _easycom_RelationItem2();
}
const _easycom_RelationItem = () => "../components/RelationItem/RelationItem.js";
if (!Math) {
  _easycom_RelationItem();
}
const _sfc_main$1 = {
  __name: "MyRelation",
  setup(__props) {
    return (_ctx, _cache) => {
      return {};
    };
  }
};
const _sfc_main = {
  name: "MySpace",
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
const myTabs = [
  {
    name: "空间",
    key: "space",
    component: Component
  },
  {
    name: "动态",
    key: "life",
    component: Component$1
  },
  {
    name: "关系",
    key: "relation",
    component: _sfc_main$1
  }
];
exports.Component = Component;
exports.Component$1 = Component$1;
exports._sfc_main = _sfc_main$1;
exports.myTabs = myTabs;
//# sourceMappingURL=../../.sourcemap/mp-weixin/data/my.js.map
