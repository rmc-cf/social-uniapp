import {
  require_dayjs_min
} from "./chunk-ZENBORPO.js";
import {
  __commonJS
} from "./chunk-Y2F7D3TJ.js";

// E:/uniapp_pro/social/node_modules/dayjs/locale/zh-cn.js
var require_zh_cn = __commonJS({
  "E:/uniapp_pro/social/node_modules/dayjs/locale/zh-cn.js"(exports, module) {
    !function(e, _) {
      "object" == typeof exports && "undefined" != typeof module ? module.exports = _(require_dayjs_min()) : "function" == typeof define && define.amd ? define(["dayjs"], _) : (e = "undefined" != typeof globalThis ? globalThis : e || self).dayjs_locale_zh_cn = _(e.dayjs);
    }(exports, function(e) {
      "use strict";
      function _(e2) {
        return e2 && "object" == typeof e2 && "default" in e2 ? e2 : { default: e2 };
      }
      var t = _(e), d = { name: "zh-cn", weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), ordinal: function(e2, _2) {
        return "W" === _2 ? e2 + "周" : e2 + "日";
      }, weekStart: 1, yearStart: 4, formats: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, meridiem: function(e2, _2) {
        var t2 = 100 * e2 + _2;
        return t2 < 600 ? "凌晨" : t2 < 900 ? "早上" : t2 < 1100 ? "上午" : t2 < 1300 ? "中午" : t2 < 1800 ? "下午" : "晚上";
      } };
      return t.default.locale(d, null, true), d;
    });
  }
});
export default require_zh_cn();
//# sourceMappingURL=dayjs_locale_zh-cn.js.map
