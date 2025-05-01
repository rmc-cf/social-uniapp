"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_StatusBar2 = common_vendor.resolveComponent("StatusBar");
  const _easycom_EventsBlock2 = common_vendor.resolveComponent("EventsBlock");
  const _easycom_OnlineFriends2 = common_vendor.resolveComponent("OnlineFriends");
  const _easycom_NotDevelop2 = common_vendor.resolveComponent("NotDevelop");
  const _easycom_Base2 = common_vendor.resolveComponent("Base");
  (_easycom_StatusBar2 + _easycom_EventsBlock2 + _easycom_OnlineFriends2 + _easycom_NotDevelop2 + _easycom_Base2)();
}
const _easycom_StatusBar = () => "../../components/StatusBar/StatusBar.js";
const _easycom_EventsBlock = () => "../../components/EventsBlock/EventsBlock.js";
const _easycom_OnlineFriends = () => "../../components/OnlineFriends/OnlineFriends.js";
const _easycom_NotDevelop = () => "../../components/NotDevelop/NotDevelop.js";
const _easycom_Base = () => "../../components/Base/Base.js";
if (!Math) {
  (_easycom_StatusBar + _easycom_EventsBlock + _easycom_OnlineFriends + _easycom_NotDevelop + _easycom_Base)();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.ref([
      {
        iconPath: "/static/image.png",
        selectedIconPath: "/static/image-active.png",
        text: "相册",
        active: false
      },
      {
        iconPath: "/static/home.png",
        selectedIconPath: "/static/home-active.png",
        text: "首页",
        active: false
      },
      {
        iconPath: "/static/star.png",
        selectedIconPath: "/static/star-active.png",
        text: "收藏",
        active: false
      }
    ]);
    const events = common_vendor.ref([
      {
        title: "遇见",
        desc: "还可以遇见",
        bgColor: "linear-gradient(to right, rgb(251, 146, 60), rgb(251, 113, 133))",
        footerBg: "/static/icons/chat-bg.png",
        btn: {
          display: "去匹配",
          url: "/"
        }
      },
      {
        title: "遇见2",
        desc: "剩余5次",
        bgColor: "linear-gradient(to right, rgb(253, 164, 175), rgb(244, 63, 94))",
        btn: {
          display: "匿名匹配",
          url: "/"
        }
      },
      {
        title: "遇见3",
        desc: "还可以遇见",
        bgColor: "radial-gradient(at center bottom, rgb(253, 204, 175), rgb(253, 224, 71))",
        footerBg: "/static/icons/planet.png",
        btn: {
          display: "匿名匹配",
          url: "/"
        }
      },
      {
        title: "蒙面语音",
        desc: "剩余x次",
        bgColor: "conic-gradient(at left center, rgb(56, 189, 248), rgb(30, 64, 175))"
      },
      {
        title: "谁是卧底",
        desc: "还可以遇见",
        bgColor: "linear-gradient(rgb(17, 24, 39), rgb(88, 28, 135), rgb(124, 58, 237))",
        footerBg: "/static/icons/reaction.png"
      },
      {
        title: "五子棋",
        footerBg: "/static/icons/gobang.png",
        bgColor: "linear-gradient(to right, rgb(142, 212, 206), rgb(94, 234, 212))"
      },
      {
        title: "唱歌听歌",
        footerBg: "/static/icons/sing.png",
        bgColor: "conic-gradient(at right center, rgb(199, 210, 254), rgb(71, 85, 105), rgb(199, 210, 254))"
      }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          item: events.value[0]
        }),
        b: common_vendor.f(events.value.slice(1, 3), (item, index, i0) => {
          return {
            a: "1cf27b2a-3-" + i0 + ",1cf27b2a-0",
            b: common_vendor.p({
              item
            }),
            c: index
          };
        }),
        c: common_vendor.f(events.value.slice(3), (item, index, i0) => {
          return {
            a: "1cf27b2a-4-" + i0 + ",1cf27b2a-0",
            b: common_vendor.p({
              item
            }),
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
