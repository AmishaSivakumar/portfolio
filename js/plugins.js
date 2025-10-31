/*!
 * Isotope PACKAGED v3.0.6
 *
 * Licensed GPLv3 for open source use
 * or Isotope Commercial License for commercial use
 *
 * https://isotope.metafizzy.co
 * Copyright 2010-2018 Metafizzy
 */
if (
  ((function (t, e) {
    "function" == typeof define && define.amd
      ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
          return e(t, i);
        })
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("jquery")))
      : (t.jQueryBridget = e(t, t.jQuery));
  })(window, function (t, e) {
    "use strict";
    var i = Array.prototype.slice,
      o = t.console,
      n =
        void 0 === o
          ? function () {}
          : function (t) {
              o.error(t);
            };
    function s(o, s, a) {
      (a = a || e || t.jQuery) &&
        (s.prototype.option ||
          (s.prototype.option = function (t) {
            a.isPlainObject(t) &&
              (this.options = a.extend(!0, this.options, t));
          }),
        (a.fn[o] = function (t) {
          var e;
          return "string" == typeof t
            ? (function (t, e, i) {
                var s,
                  r = "$()." + o + '("' + e + '")';
                return (
                  t.each(function (t, l) {
                    var c = a.data(l, o);
                    if (c) {
                      var h = c[e];
                      if (h && "_" != e.charAt(0)) {
                        var d = h.apply(c, i);
                        s = void 0 === s ? d : s;
                      } else n(r + " is not a valid method");
                    } else n(o + " not initialized. Cannot call methods, i.e. " + r);
                  }),
                  void 0 !== s ? s : t
                );
              })(this, t, i.call(arguments, 1))
            : ((e = t),
              this.each(function (t, i) {
                var n = a.data(i, o);
                n
                  ? (n.option(e), n._init())
                  : ((n = new s(i, e)), a.data(i, o, n));
              }),
              this);
        }),
        r(a));
    }
    function r(t) {
      !t || (t && t.bridget) || (t.bridget = s);
    }
    return r(e || t.jQuery), s;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("ev-emitter/ev-emitter", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.EvEmitter = e());
  })("undefined" != typeof window ? window : this, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            o = (i[t] = i[t] || []);
          return -1 == o.indexOf(e) && o.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var o = i.indexOf(e);
          return -1 != o && i.splice(o, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var o = this._onceEvents && this._onceEvents[t], n = 0;
            n < i.length;
            n++
          ) {
            var s = i[n];
            o && o[s] && (this.off(t, s), delete o[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  }),
  /*!
   * getSize v2.0.3
   * measure size of elements
   * MIT license
   */
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("get-size/get-size", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.getSize = e());
  })(window, function () {
    "use strict";
    function t(t) {
      var e = parseFloat(t);
      return -1 == t.indexOf("%") && !isNaN(e) && e;
    }
    var e =
        "undefined" == typeof console
          ? function () {}
          : function (t) {
              console.error(t);
            },
      i = [
        "paddingLeft",
        "paddingRight",
        "paddingTop",
        "paddingBottom",
        "marginLeft",
        "marginRight",
        "marginTop",
        "marginBottom",
        "borderLeftWidth",
        "borderRightWidth",
        "borderTopWidth",
        "borderBottomWidth",
      ],
      o = i.length;
    function n(t) {
      var i = getComputedStyle(t);
      return (
        i ||
          e(
            "Style returned " +
              i +
              ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"
          ),
        i
      );
    }
    var s,
      r = !1;
    function a(e) {
      if (
        ((function () {
          if (!r) {
            r = !0;
            var e = document.createElement("div");
            (e.style.width = "200px"),
              (e.style.padding = "1px 2px 3px 4px"),
              (e.style.borderStyle = "solid"),
              (e.style.borderWidth = "1px 2px 3px 4px"),
              (e.style.boxSizing = "border-box");
            var i = document.body || document.documentElement;
            i.appendChild(e);
            var o = n(e);
            (s = 200 == Math.round(t(o.width))),
              (a.isBoxSizeOuter = s),
              i.removeChild(e);
          }
        })(),
        "string" == typeof e && (e = document.querySelector(e)),
        e && "object" == typeof e && e.nodeType)
      ) {
        var l = n(e);
        if ("none" == l.display)
          return (function () {
            for (
              var t = {
                  width: 0,
                  height: 0,
                  innerWidth: 0,
                  innerHeight: 0,
                  outerWidth: 0,
                  outerHeight: 0,
                },
                e = 0;
              e < o;
              e++
            )
              t[i[e]] = 0;
            return t;
          })();
        var c = {};
        (c.width = e.offsetWidth), (c.height = e.offsetHeight);
        for (
          var h = (c.isBorderBox = "border-box" == l.boxSizing), d = 0;
          d < o;
          d++
        ) {
          var u = i[d],
            p = l[u],
            m = parseFloat(p);
          c[u] = isNaN(m) ? 0 : m;
        }
        var f = c.paddingLeft + c.paddingRight,
          g = c.paddingTop + c.paddingBottom,
          v = c.marginLeft + c.marginRight,
          y = c.marginTop + c.marginBottom,
          w = c.borderLeftWidth + c.borderRightWidth,
          b = c.borderTopWidth + c.borderBottomWidth,
          x = h && s,
          _ = t(l.width);
        !1 !== _ && (c.width = _ + (x ? 0 : f + w));
        var T = t(l.height);
        return (
          !1 !== T && (c.height = T + (x ? 0 : g + b)),
          (c.innerWidth = c.width - (f + w)),
          (c.innerHeight = c.height - (g + b)),
          (c.outerWidth = c.width + v),
          (c.outerHeight = c.height + y),
          c
        );
      }
    }
    return a;
  }),
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define("desandro-matches-selector/matches-selector", e)
      : "object" == typeof module && module.exports
      ? (module.exports = e())
      : (t.matchesSelector = e());
  })(window, function () {
    "use strict";
    var t = (function () {
      var t = window.Element.prototype;
      if (t.matches) return "matches";
      if (t.matchesSelector) return "matchesSelector";
      for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
        var o = e[i] + "MatchesSelector";
        if (t[o]) return o;
      }
    })();
    return function (e, i) {
      return e[t](i);
    };
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "fizzy-ui-utils/utils",
          ["desandro-matches-selector/matches-selector"],
          function (i) {
            return e(t, i);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(t, require("desandro-matches-selector")))
      : (t.fizzyUIUtils = e(t, t.matchesSelector));
  })(window, function (t, e) {
    var i = {
        extend: function (t, e) {
          for (var i in e) t[i] = e[i];
          return t;
        },
        modulo: function (t, e) {
          return ((t % e) + e) % e;
        },
      },
      o = Array.prototype.slice;
    (i.makeArray = function (t) {
      return Array.isArray(t)
        ? t
        : null == t
        ? []
        : "object" == typeof t && "number" == typeof t.length
        ? o.call(t)
        : [t];
    }),
      (i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1);
      }),
      (i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body; )
          if (((t = t.parentNode), e(t, i))) return t;
      }),
      (i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t;
      }),
      (i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (i.filterFindElements = function (t, o) {
        t = i.makeArray(t);
        var n = [];
        return (
          t.forEach(function (t) {
            if (t instanceof HTMLElement)
              if (o) {
                e(t, o) && n.push(t);
                for (var i = t.querySelectorAll(o), s = 0; s < i.length; s++)
                  n.push(i[s]);
              } else n.push(t);
          }),
          n
        );
      }),
      (i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var o = t.prototype[e],
          n = e + "Timeout";
        t.prototype[e] = function () {
          var t = this[n];
          clearTimeout(t);
          var e = arguments,
            s = this;
          this[n] = setTimeout(function () {
            o.apply(s, e), delete s[n];
          }, i);
        };
      }),
      (i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e
          ? setTimeout(t)
          : document.addEventListener("DOMContentLoaded", t);
      }),
      (i.toDashed = function (t) {
        return t
          .replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i;
          })
          .toLowerCase();
      });
    var n = t.console;
    return (
      (i.htmlInit = function (e, o) {
        i.docReady(function () {
          var s = i.toDashed(o),
            r = "data-" + s,
            a = document.querySelectorAll("[" + r + "]"),
            l = document.querySelectorAll(".js-" + s),
            c = i.makeArray(a).concat(i.makeArray(l)),
            h = r + "-options",
            d = t.jQuery;
          c.forEach(function (t) {
            var i,
              s = t.getAttribute(r) || t.getAttribute(h);
            try {
              i = s && JSON.parse(s);
            } catch (e) {
              return void (
                n &&
                n.error("Error parsing " + r + " on " + t.className + ": " + e)
              );
            }
            var a = new e(t, i);
            d && d.data(t, o, a);
          });
        });
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "outlayer/item",
          ["ev-emitter/ev-emitter", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("ev-emitter"), require("get-size")))
      : ((t.Outlayer = {}), (t.Outlayer.Item = e(t.EvEmitter, t.getSize)));
  })(window, function (t, e) {
    "use strict";
    var i = document.documentElement.style,
      o = "string" == typeof i.transition ? "transition" : "WebkitTransition",
      n = "string" == typeof i.transform ? "transform" : "WebkitTransform",
      s = {
        WebkitTransition: "webkitTransitionEnd",
        transition: "transitionend",
      }[o],
      r = {
        transform: n,
        transition: o,
        transitionDuration: o + "Duration",
        transitionProperty: o + "Property",
        transitionDelay: o + "Delay",
      };
    function a(t, e) {
      t &&
        ((this.element = t),
        (this.layout = e),
        (this.position = { x: 0, y: 0 }),
        this._create());
    }
    var l = (a.prototype = Object.create(t.prototype));
    (l.constructor = a),
      (l._create = function () {
        (this._transn = { ingProperties: {}, clean: {}, onEnd: {} }),
          this.css({ position: "absolute" });
      }),
      (l.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (l.getSize = function () {
        this.size = e(this.element);
      }),
      (l.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
          e[r[i] || i] = t[i];
        }
      }),
      (l.getPosition = function () {
        var t = getComputedStyle(this.element),
          e = this.layout._getOption("originLeft"),
          i = this.layout._getOption("originTop"),
          o = t[e ? "left" : "right"],
          n = t[i ? "top" : "bottom"],
          s = parseFloat(o),
          r = parseFloat(n),
          a = this.layout.size;
        -1 != o.indexOf("%") && (s = (s / 100) * a.width),
          -1 != n.indexOf("%") && (r = (r / 100) * a.height),
          (s = isNaN(s) ? 0 : s),
          (r = isNaN(r) ? 0 : r),
          (s -= e ? a.paddingLeft : a.paddingRight),
          (r -= i ? a.paddingTop : a.paddingBottom),
          (this.position.x = s),
          (this.position.y = r);
      }),
      (l.layoutPosition = function () {
        var t = this.layout.size,
          e = {},
          i = this.layout._getOption("originLeft"),
          o = this.layout._getOption("originTop"),
          n = i ? "paddingLeft" : "paddingRight",
          s = i ? "left" : "right",
          r = i ? "right" : "left",
          a = this.position.x + t[n];
        (e[s] = this.getXValue(a)), (e[r] = "");
        var l = o ? "paddingTop" : "paddingBottom",
          c = o ? "top" : "bottom",
          h = o ? "bottom" : "top",
          d = this.position.y + t[l];
        (e[c] = this.getYValue(d)),
          (e[h] = ""),
          this.css(e),
          this.emitEvent("layout", [this]);
      }),
      (l.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e
          ? (t / this.layout.size.width) * 100 + "%"
          : t + "px";
      }),
      (l.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e
          ? (t / this.layout.size.height) * 100 + "%"
          : t + "px";
      }),
      (l._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x,
          o = this.position.y,
          n = t == this.position.x && e == this.position.y;
        if ((this.setPosition(t, e), !n || this.isTransitioning)) {
          var s = t - i,
            r = e - o,
            a = {};
          (a.transform = this.getTranslate(s, r)),
            this.transition({
              to: a,
              onTransitionEnd: { transform: this.layoutPosition },
              isCleaning: !0,
            });
        } else this.layoutPosition();
      }),
      (l.getTranslate = function (t, e) {
        return (
          "translate3d(" +
          (t = this.layout._getOption("originLeft") ? t : -t) +
          "px, " +
          (e = this.layout._getOption("originTop") ? e : -e) +
          "px, 0)"
        );
      }),
      (l.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition();
      }),
      (l.moveTo = l._transitionTo),
      (l.setPosition = function (t, e) {
        (this.position.x = parseFloat(t)), (this.position.y = parseFloat(e));
      }),
      (l._nonTransition = function (t) {
        for (var e in (this.css(t.to),
        t.isCleaning && this._removeStyles(t.to),
        t.onTransitionEnd))
          t.onTransitionEnd[e].call(this);
      }),
      (l.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
          var e = this._transn;
          for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
          for (i in t.to)
            (e.ingProperties[i] = !0), t.isCleaning && (e.clean[i] = !0);
          if (t.from) {
            this.css(t.from);
            this.element.offsetHeight;
            0;
          }
          this.enableTransition(t.to),
            this.css(t.to),
            (this.isTransitioning = !0);
        } else this._nonTransition(t);
      });
    var c =
      "opacity," +
      n.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase();
      });
    (l.enableTransition = function () {
      if (!this.isTransitioning) {
        var t = this.layout.options.transitionDuration;
        (t = "number" == typeof t ? t + "ms" : t),
          this.css({
            transitionProperty: c,
            transitionDuration: t,
            transitionDelay: this.staggerDelay || 0,
          }),
          this.element.addEventListener(s, this, !1);
      }
    }),
      (l.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t);
      }),
      (l.onotransitionend = function (t) {
        this.ontransitionend(t);
      });
    var h = { "-webkit-transform": "transform" };
    (l.ontransitionend = function (t) {
      if (t.target === this.element) {
        var e = this._transn,
          i = h[t.propertyName] || t.propertyName;
        if (
          (delete e.ingProperties[i],
          (function (t) {
            for (var e in t) return !1;
            return !0;
          })(e.ingProperties) && this.disableTransition(),
          i in e.clean &&
            ((this.element.style[t.propertyName] = ""), delete e.clean[i]),
          i in e.onEnd)
        )
          e.onEnd[i].call(this), delete e.onEnd[i];
        this.emitEvent("transitionEnd", [this]);
      }
    }),
      (l.disableTransition = function () {
        this.removeTransitionStyles(),
          this.element.removeEventListener(s, this, !1),
          (this.isTransitioning = !1);
      }),
      (l._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e);
      });
    var d = {
      transitionProperty: "",
      transitionDuration: "",
      transitionDelay: "",
    };
    return (
      (l.removeTransitionStyles = function () {
        this.css(d);
      }),
      (l.stagger = function (t) {
        (t = isNaN(t) ? 0 : t), (this.staggerDelay = t + "ms");
      }),
      (l.removeElem = function () {
        this.element.parentNode.removeChild(this.element),
          this.css({ display: "" }),
          this.emitEvent("remove", [this]);
      }),
      (l.remove = function () {
        o && parseFloat(this.layout.options.transitionDuration)
          ? (this.once("transitionEnd", function () {
              this.removeElem();
            }),
            this.hide())
          : this.removeElem();
      }),
      (l.reveal = function () {
        delete this.isHidden, this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("visibleStyle")] =
          this.onRevealTransitionEnd),
          this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (l.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal");
      }),
      (l.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i;
      }),
      (l.hide = function () {
        (this.isHidden = !0), this.css({ display: "" });
        var t = this.layout.options,
          e = {};
        (e[this.getHideRevealTransitionEndProperty("hiddenStyle")] =
          this.onHideTransitionEnd),
          this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e,
          });
      }),
      (l.onHideTransitionEnd = function () {
        this.isHidden &&
          (this.css({ display: "none" }), this.emitEvent("hide"));
      }),
      (l.destroy = function () {
        this.css({
          position: "",
          left: "",
          right: "",
          top: "",
          bottom: "",
          transition: "",
          transform: "",
        });
      }),
      a
    );
  }),
  /*!
   * Outlayer v2.1.1
   * the brains and guts of a layout library
   * MIT license
   */
  (function (t, e) {
    "use strict";
    "function" == typeof define && define.amd
      ? define(
          "outlayer/outlayer",
          [
            "ev-emitter/ev-emitter",
            "get-size/get-size",
            "fizzy-ui-utils/utils",
            "./item",
          ],
          function (i, o, n, s) {
            return e(t, i, o, n, s);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("ev-emitter"),
          require("get-size"),
          require("fizzy-ui-utils"),
          require("./item")
        ))
      : (t.Outlayer = e(
          t,
          t.EvEmitter,
          t.getSize,
          t.fizzyUIUtils,
          t.Outlayer.Item
        ));
  })(window, function (t, e, i, o, n) {
    "use strict";
    var s = t.console,
      r = t.jQuery,
      a = function () {},
      l = 0,
      c = {};
    function h(t, e) {
      var i = o.getQueryElement(t);
      if (i) {
        (this.element = i),
          r && (this.$element = r(this.element)),
          (this.options = o.extend({}, this.constructor.defaults)),
          this.option(e);
        var n = ++l;
        (this.element.outlayerGUID = n),
          (c[n] = this),
          this._create(),
          this._getOption("initLayout") && this.layout();
      } else s && s.error("Bad element for " + this.constructor.namespace + ": " + (i || t));
    }
    (h.namespace = "outlayer"),
      (h.Item = n),
      (h.defaults = {
        containerStyle: { position: "relative" },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: { opacity: 0, transform: "scale(0.001)" },
        visibleStyle: { opacity: 1, transform: "scale(1)" },
      });
    var d = h.prototype;
    function u(t) {
      function e() {
        t.apply(this, arguments);
      }
      return (
        (e.prototype = Object.create(t.prototype)),
        (e.prototype.constructor = e),
        e
      );
    }
    o.extend(d, e.prototype),
      (d.option = function (t) {
        o.extend(this.options, t);
      }),
      (d._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e]
          ? this.options[e]
          : this.options[t];
      }),
      (h.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer",
      }),
      (d._create = function () {
        this.reloadItems(),
          (this.stamps = []),
          this.stamp(this.options.stamp),
          o.extend(this.element.style, this.options.containerStyle),
          this._getOption("resize") && this.bindResize();
      }),
      (d.reloadItems = function () {
        this.items = this._itemize(this.element.children);
      }),
      (d._itemize = function (t) {
        for (
          var e = this._filterFindItemElements(t),
            i = this.constructor.Item,
            o = [],
            n = 0;
          n < e.length;
          n++
        ) {
          var s = new i(e[n], this);
          o.push(s);
        }
        return o;
      }),
      (d._filterFindItemElements = function (t) {
        return o.filterFindElements(t, this.options.itemSelector);
      }),
      (d.getItemElements = function () {
        return this.items.map(function (t) {
          return t.element;
        });
      }),
      (d.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), (this._isLayoutInited = !0);
      }),
      (d._init = d.layout),
      (d._resetLayout = function () {
        this.getSize();
      }),
      (d.getSize = function () {
        this.size = i(this.element);
      }),
      (d._getMeasurement = function (t, e) {
        var o,
          n = this.options[t];
        n
          ? ("string" == typeof n
              ? (o = this.element.querySelector(n))
              : n instanceof HTMLElement && (o = n),
            (this[t] = o ? i(o)[e] : n))
          : (this[t] = 0);
      }),
      (d.layoutItems = function (t, e) {
        (t = this._getItemsForLayout(t)),
          this._layoutItems(t, e),
          this._postLayout();
      }),
      (d._getItemsForLayout = function (t) {
        return t.filter(function (t) {
          return !t.isIgnored;
        });
      }),
      (d._layoutItems = function (t, e) {
        if ((this._emitCompleteOnItems("layout", t), t && t.length)) {
          var i = [];
          t.forEach(function (t) {
            var o = this._getItemLayoutPosition(t);
            (o.item = t), (o.isInstant = e || t.isLayoutInstant), i.push(o);
          }, this),
            this._processLayoutQueue(i);
        }
      }),
      (d._getItemLayoutPosition = function () {
        return { x: 0, y: 0 };
      }),
      (d._processLayoutQueue = function (t) {
        this.updateStagger(),
          t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e);
          }, this);
      }),
      (d.updateStagger = function () {
        var t = this.options.stagger;
        if (null != t)
          return (
            (this.stagger = (function (t) {
              if ("number" == typeof t) return t;
              var e = t.match(/(^\d*\.?\d*)(\w*)/),
                i = e && e[1],
                o = e && e[2];
              if (!i.length) return 0;
              i = parseFloat(i);
              var n = p[o] || 1;
              return i * n;
            })(t)),
            this.stagger
          );
        this.stagger = 0;
      }),
      (d._positionItem = function (t, e, i, o, n) {
        o ? t.goTo(e, i) : (t.stagger(n * this.stagger), t.moveTo(e, i));
      }),
      (d._postLayout = function () {
        this.resizeContainer();
      }),
      (d.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
          var t = this._getContainerSize();
          t &&
            (this._setContainerMeasure(t.width, !0),
            this._setContainerMeasure(t.height, !1));
        }
      }),
      (d._getContainerSize = a),
      (d._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
          var i = this.size;
          i.isBorderBox &&
            (t += e
              ? i.paddingLeft +
                i.paddingRight +
                i.borderLeftWidth +
                i.borderRightWidth
              : i.paddingBottom +
                i.paddingTop +
                i.borderTopWidth +
                i.borderBottomWidth),
            (t = Math.max(t, 0)),
            (this.element.style[e ? "width" : "height"] = t + "px");
        }
      }),
      (d._emitCompleteOnItems = function (t, e) {
        var i = this;
        function o() {
          i.dispatchEvent(t + "Complete", null, [e]);
        }
        var n = e.length;
        if (e && n) {
          var s = 0;
          e.forEach(function (e) {
            e.once(t, r);
          });
        } else o();
        function r() {
          ++s == n && o();
        }
      }),
      (d.dispatchEvent = function (t, e, i) {
        var o = e ? [e].concat(i) : i;
        if ((this.emitEvent(t, o), r))
          if (((this.$element = this.$element || r(this.element)), e)) {
            var n = r.Event(e);
            (n.type = t), this.$element.trigger(n, i);
          } else this.$element.trigger(t, i);
      }),
      (d.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0);
      }),
      (d.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored;
      }),
      (d.stamp = function (t) {
        (t = this._find(t)) &&
          ((this.stamps = this.stamps.concat(t)), t.forEach(this.ignore, this));
      }),
      (d.unstamp = function (t) {
        (t = this._find(t)) &&
          t.forEach(function (t) {
            o.removeFrom(this.stamps, t), this.unignore(t);
          }, this);
      }),
      (d._find = function (t) {
        if (t)
          return (
            "string" == typeof t && (t = this.element.querySelectorAll(t)),
            (t = o.makeArray(t))
          );
      }),
      (d._manageStamps = function () {
        this.stamps &&
          this.stamps.length &&
          (this._getBoundingRect(),
          this.stamps.forEach(this._manageStamp, this));
      }),
      (d._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(),
          e = this.size;
        this._boundingRect = {
          left: t.left + e.paddingLeft + e.borderLeftWidth,
          top: t.top + e.paddingTop + e.borderTopWidth,
          right: t.right - (e.paddingRight + e.borderRightWidth),
          bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth),
        };
      }),
      (d._manageStamp = a),
      (d._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(),
          o = this._boundingRect,
          n = i(t);
        return {
          left: e.left - o.left - n.marginLeft,
          top: e.top - o.top - n.marginTop,
          right: o.right - e.right - n.marginRight,
          bottom: o.bottom - e.bottom - n.marginBottom,
        };
      }),
      (d.handleEvent = o.handleEvent),
      (d.bindResize = function () {
        t.addEventListener("resize", this), (this.isResizeBound = !0);
      }),
      (d.unbindResize = function () {
        t.removeEventListener("resize", this), (this.isResizeBound = !1);
      }),
      (d.onresize = function () {
        this.resize();
      }),
      o.debounceMethod(h, "onresize", 100),
      (d.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout();
      }),
      (d.needsResizeLayout = function () {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth;
      }),
      (d.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e;
      }),
      (d.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e));
      }),
      (d.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          var i = this.items.slice(0);
          (this.items = e.concat(i)),
            this._resetLayout(),
            this._manageStamps(),
            this.layoutItems(e, !0),
            this.reveal(e),
            this.layoutItems(i);
        }
      }),
      (d.reveal = function (t) {
        if ((this._emitCompleteOnItems("reveal", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.reveal();
          });
        }
      }),
      (d.hide = function (t) {
        if ((this._emitCompleteOnItems("hide", t), t && t.length)) {
          var e = this.updateStagger();
          t.forEach(function (t, i) {
            t.stagger(i * e), t.hide();
          });
        }
      }),
      (d.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e);
      }),
      (d.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e);
      }),
      (d.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
          var i = this.items[e];
          if (i.element == t) return i;
        }
      }),
      (d.getItems = function (t) {
        t = o.makeArray(t);
        var e = [];
        return (
          t.forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i);
          }, this),
          e
        );
      }),
      (d.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e),
          e &&
            e.length &&
            e.forEach(function (t) {
              t.remove(), o.removeFrom(this.items, t);
            }, this);
      }),
      (d.destroy = function () {
        var t = this.element.style;
        (t.height = ""),
          (t.position = ""),
          (t.width = ""),
          this.items.forEach(function (t) {
            t.destroy();
          }),
          this.unbindResize();
        var e = this.element.outlayerGUID;
        delete c[e],
          delete this.element.outlayerGUID,
          r && r.removeData(this.element, this.constructor.namespace);
      }),
      (h.data = function (t) {
        var e = (t = o.getQueryElement(t)) && t.outlayerGUID;
        return e && c[e];
      }),
      (h.create = function (t, e) {
        var i = u(h);
        return (
          (i.defaults = o.extend({}, h.defaults)),
          o.extend(i.defaults, e),
          (i.compatOptions = o.extend({}, h.compatOptions)),
          (i.namespace = t),
          (i.data = h.data),
          (i.Item = u(n)),
          o.htmlInit(i, t),
          r && r.bridget && r.bridget(t, i),
          i
        );
      });
    var p = { ms: 1, s: 1e3 };
    return (h.Item = n), h;
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/item", ["outlayer/outlayer"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer")))
      : ((t.Isotope = t.Isotope || {}), (t.Isotope.Item = e(t.Outlayer)));
  })(window, function (t) {
    "use strict";
    function e() {
      t.Item.apply(this, arguments);
    }
    var i = (e.prototype = Object.create(t.Item.prototype)),
      o = i._create;
    (i._create = function () {
      (this.id = this.layout.itemGUID++), o.call(this), (this.sortData = {});
    }),
      (i.updateSortData = function () {
        if (!this.isIgnored) {
          (this.sortData.id = this.id),
            (this.sortData["original-order"] = this.id),
            (this.sortData.random = Math.random());
          var t = this.layout.options.getSortData,
            e = this.layout._sorters;
          for (var i in t) {
            var o = e[i];
            this.sortData[i] = o(this.element, this);
          }
        }
      });
    var n = i.destroy;
    return (
      (i.destroy = function () {
        n.apply(this, arguments), this.css({ display: "" });
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-mode",
          ["get-size/get-size", "outlayer/outlayer"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("get-size"), require("outlayer")))
      : ((t.Isotope = t.Isotope || {}),
        (t.Isotope.LayoutMode = e(t.getSize, t.Outlayer)));
  })(window, function (t, e) {
    "use strict";
    function i(t) {
      (this.isotope = t),
        t &&
          ((this.options = t.options[this.namespace]),
          (this.element = t.element),
          (this.items = t.filteredItems),
          (this.size = t.size));
    }
    var o = i.prototype;
    return (
      [
        "_resetLayout",
        "_getItemLayoutPosition",
        "_manageStamp",
        "_getContainerSize",
        "_getElementOffset",
        "needsResizeLayout",
        "_getOption",
      ].forEach(function (t) {
        o[t] = function () {
          return e.prototype[t].apply(this.isotope, arguments);
        };
      }),
      (o.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element);
        return (
          this.isotope.size &&
          e &&
          e.innerHeight != this.isotope.size.innerHeight
        );
      }),
      (o._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments);
      }),
      (o.getColumnWidth = function () {
        this.getSegmentSize("column", "Width");
      }),
      (o.getRowHeight = function () {
        this.getSegmentSize("row", "Height");
      }),
      (o.getSegmentSize = function (t, e) {
        var i = t + e,
          o = "outer" + e;
        if ((this._getMeasurement(i, o), !this[i])) {
          var n = this.getFirstItemSize();
          this[i] = (n && n[o]) || this.isotope.size["inner" + e];
        }
      }),
      (o.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element);
      }),
      (o.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments);
      }),
      (o.getSize = function () {
        this.isotope.getSize(), (this.size = this.isotope.size);
      }),
      (i.modes = {}),
      (i.create = function (t, e) {
        function n() {
          i.apply(this, arguments);
        }
        return (
          (n.prototype = Object.create(o)),
          (n.prototype.constructor = n),
          e && (n.options = e),
          (n.prototype.namespace = t),
          (i.modes[t] = n),
          n
        );
      }),
      i
    );
  }),
  /*!
   * Masonry v4.2.1
   * Cascading grid layout library
   * https://masonry.desandro.com
   * MIT License
   * by David DeSandro
   */
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "masonry-layout/masonry",
          ["outlayer/outlayer", "get-size/get-size"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("outlayer"), require("get-size")))
      : (t.Masonry = e(t.Outlayer, t.getSize));
  })(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var o = i.prototype;
    return (
      (o._resetLayout = function () {
        this.getSize(),
          this._getMeasurement("columnWidth", "outerWidth"),
          this._getMeasurement("gutter", "outerWidth"),
          this.measureColumns(),
          (this.colYs = []);
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        (this.maxY = 0), (this.horizontalColIndex = 0);
      }),
      (o.measureColumns = function () {
        if ((this.getContainerWidth(), !this.columnWidth)) {
          var t = this.items[0],
            i = t && t.element;
          this.columnWidth = (i && e(i).outerWidth) || this.containerWidth;
        }
        var o = (this.columnWidth += this.gutter),
          n = this.containerWidth + this.gutter,
          s = n / o,
          r = o - (n % o);
        (s = Math[r && r < 1 ? "round" : "floor"](s)),
          (this.cols = Math.max(s, 1));
      }),
      (o.getContainerWidth = function () {
        var t = this._getOption("fitWidth")
            ? this.element.parentNode
            : this.element,
          i = e(t);
        this.containerWidth = i && i.innerWidth;
      }),
      (o._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
          i = Math[e && e < 1 ? "round" : "ceil"](
            t.size.outerWidth / this.columnWidth
          );
        i = Math.min(i, this.cols);
        for (
          var o = this[
              this.options.horizontalOrder
                ? "_getHorizontalColPosition"
                : "_getTopColPosition"
            ](i, t),
            n = { x: this.columnWidth * o.col, y: o.y },
            s = o.y + t.size.outerHeight,
            r = i + o.col,
            a = o.col;
          a < r;
          a++
        )
          this.colYs[a] = s;
        return n;
      }),
      (o._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t),
          i = Math.min.apply(Math, e);
        return { col: e.indexOf(i), y: i };
      }),
      (o._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, o = 0; o < i; o++)
          e[o] = this._getColGroupY(o, t);
        return e;
      }),
      (o._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i);
      }),
      (o._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols;
        i = t > 1 && i + t > this.cols ? 0 : i;
        var o = e.size.outerWidth && e.size.outerHeight;
        return (
          (this.horizontalColIndex = o ? i + t : this.horizontalColIndex),
          { col: i, y: this._getColGroupY(i, t) }
        );
      }),
      (o._manageStamp = function (t) {
        var i = e(t),
          o = this._getElementOffset(t),
          n = this._getOption("originLeft") ? o.left : o.right,
          s = n + i.outerWidth,
          r = Math.floor(n / this.columnWidth);
        r = Math.max(0, r);
        var a = Math.floor(s / this.columnWidth);
        (a -= s % this.columnWidth ? 0 : 1), (a = Math.min(this.cols - 1, a));
        for (
          var l =
              (this._getOption("originTop") ? o.top : o.bottom) + i.outerHeight,
            c = r;
          c <= a;
          c++
        )
          this.colYs[c] = Math.max(l, this.colYs[c]);
      }),
      (o._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = { height: this.maxY };
        return (
          this._getOption("fitWidth") &&
            (t.width = this._getContainerFitWidth()),
          t
        );
      }),
      (o._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e]; ) t++;
        return (this.cols - t) * this.columnWidth - this.gutter;
      }),
      (o.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth;
      }),
      i
    );
  }),
  /*!
   * Masonry layout mode
   * sub-classes Masonry
   * https://masonry.desandro.com
   */
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          "isotope-layout/js/layout-modes/masonry",
          ["../layout-mode", "masonry-layout/masonry"],
          e
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          require("../layout-mode"),
          require("masonry-layout")
        ))
      : e(t.Isotope.LayoutMode, t.Masonry);
  })(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"),
      o = i.prototype,
      n = { _getElementOffset: !0, layout: !0, _getMeasurement: !0 };
    for (var s in e.prototype) n[s] || (o[s] = e.prototype[s]);
    var r = o.measureColumns;
    o.measureColumns = function () {
      (this.items = this.isotope.filteredItems), r.call(this);
    };
    var a = o._getOption;
    return (
      (o._getOption = function (t) {
        return "fitWidth" == t
          ? void 0 !== this.options.isFitWidth
            ? this.options.isFitWidth
            : this.options.fitWidth
          : a.apply(this.isotope, arguments);
      }),
      i
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e)
      : "object" == typeof exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("fitRows"),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        (this.x = 0),
          (this.y = 0),
          (this.maxY = 0),
          this._getMeasurement("gutter", "outerWidth");
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter,
          i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && ((this.x = 0), (this.y = this.maxY));
        var o = { x: this.x, y: this.y };
        return (
          (this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight)),
          (this.x += e),
          o
        );
      }),
      (i._getContainerSize = function () {
        return { height: this.maxY };
      }),
      e
    );
  }),
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e)
      : "object" == typeof module && module.exports
      ? (module.exports = e(require("../layout-mode")))
      : e(t.Isotope.LayoutMode);
  })(window, function (t) {
    "use strict";
    var e = t.create("vertical", { horizontalAlignment: 0 }),
      i = e.prototype;
    return (
      (i._resetLayout = function () {
        this.y = 0;
      }),
      (i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e =
            (this.isotope.size.innerWidth - t.size.outerWidth) *
            this.options.horizontalAlignment,
          i = this.y;
        return (this.y += t.size.outerHeight), { x: e, y: i };
      }),
      (i._getContainerSize = function () {
        return { height: this.y };
      }),
      e
    );
  }),
  /*!
   * Isotope v3.0.6
   *
   * Licensed GPLv3 for open source use
   * or Isotope Commercial License for commercial use
   *
   * https://isotope.metafizzy.co
   * Copyright 2010-2018 Metafizzy
   */
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(
          [
            "outlayer/outlayer",
            "get-size/get-size",
            "desandro-matches-selector/matches-selector",
            "fizzy-ui-utils/utils",
            "isotope-layout/js/item",
            "isotope-layout/js/layout-mode",
            "isotope-layout/js/layout-modes/masonry",
            "isotope-layout/js/layout-modes/fit-rows",
            "isotope-layout/js/layout-modes/vertical",
          ],
          function (i, o, n, s, r, a) {
            return e(t, i, o, n, s, r, a);
          }
        )
      : "object" == typeof module && module.exports
      ? (module.exports = e(
          t,
          require("outlayer"),
          require("get-size"),
          require("desandro-matches-selector"),
          require("fizzy-ui-utils"),
          require("isotope-layout/js/item"),
          require("isotope-layout/js/layout-mode"),
          require("isotope-layout/js/layout-modes/masonry"),
          require("isotope-layout/js/layout-modes/fit-rows"),
          require("isotope-layout/js/layout-modes/vertical")
        ))
      : (t.Isotope = e(
          t,
          t.Outlayer,
          t.getSize,
          t.matchesSelector,
          t.fizzyUIUtils,
          t.Isotope.Item,
          t.Isotope.LayoutMode
        ));
  })(window, function (t, e, i, o, n, s, r) {
    var a = t.jQuery,
      l = String.prototype.trim
        ? function (t) {
            return t.trim();
          }
        : function (t) {
            return t.replace(/^\s+|\s+$/g, "");
          },
      c = e.create("isotope", {
        layoutMode: "masonry",
        isJQueryFiltering: !0,
        sortAscending: !0,
      });
    (c.Item = s), (c.LayoutMode = r);
    var h = c.prototype;
    (h._create = function () {
      for (var t in ((this.itemGUID = 0),
      (this._sorters = {}),
      this._getSorters(),
      e.prototype._create.call(this),
      (this.modes = {}),
      (this.filteredItems = this.items),
      (this.sortHistory = ["original-order"]),
      r.modes))
        this._initLayoutMode(t);
    }),
      (h.reloadItems = function () {
        (this.itemGUID = 0), e.prototype.reloadItems.call(this);
      }),
      (h._itemize = function () {
        for (
          var t = e.prototype._itemize.apply(this, arguments), i = 0;
          i < t.length;
          i++
        ) {
          t[i].id = this.itemGUID++;
        }
        return this._updateItemsSortData(t), t;
      }),
      (h._initLayoutMode = function (t) {
        var e = r.modes[t],
          i = this.options[t] || {};
        (this.options[t] = e.options ? n.extend(e.options, i) : i),
          (this.modes[t] = new e(this));
      }),
      (h.layout = function () {
        this._isLayoutInited || !this._getOption("initLayout")
          ? this._layout()
          : this.arrange();
      }),
      (h._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(),
          this._manageStamps(),
          this.layoutItems(this.filteredItems, t),
          (this._isLayoutInited = !0);
      }),
      (h.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        (this.filteredItems = e.matches),
          this._bindArrangeComplete(),
          this._isInstant
            ? this._noTransition(this._hideReveal, [e])
            : this._hideReveal(e),
          this._sort(),
          this._layout();
      }),
      (h._init = h.arrange),
      (h._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide);
      }),
      (h._getIsInstant = function () {
        var t = this._getOption("layoutInstant"),
          e = void 0 !== t ? t : !this._isLayoutInited;
        return (this._isInstant = e), e;
      }),
      (h._bindArrangeComplete = function () {
        var t,
          e,
          i,
          o = this;
        function n() {
          t &&
            e &&
            i &&
            o.dispatchEvent("arrangeComplete", null, [o.filteredItems]);
        }
        this.once("layoutComplete", function () {
          (t = !0), n();
        }),
          this.once("hideComplete", function () {
            (e = !0), n();
          }),
          this.once("revealComplete", function () {
            (i = !0), n();
          });
      }),
      (h._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (
          var i = [], o = [], n = [], s = this._getFilterTest(e), r = 0;
          r < t.length;
          r++
        ) {
          var a = t[r];
          if (!a.isIgnored) {
            var l = s(a);
            l && i.push(a),
              l && a.isHidden ? o.push(a) : l || a.isHidden || n.push(a);
          }
        }
        return { matches: i, needReveal: o, needHide: n };
      }),
      (h._getFilterTest = function (t) {
        return a && this.options.isJQueryFiltering
          ? function (e) {
              return a(e.element).is(t);
            }
          : "function" == typeof t
          ? function (e) {
              return t(e.element);
            }
          : function (e) {
              return o(e.element, t);
            };
      }),
      (h.updateSortData = function (t) {
        var e;
        t ? ((t = n.makeArray(t)), (e = this.getItems(t))) : (e = this.items),
          this._getSorters(),
          this._updateItemsSortData(e);
      }),
      (h._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
          var i = t[e];
          this._sorters[e] = d(i);
        }
      }),
      (h._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
          t[i].updateSortData();
        }
      });
    var d = function (t) {
      if ("string" != typeof t) return t;
      var e = l(t).split(" "),
        i = e[0],
        o = i.match(/^\[(.+)\]$/),
        n = (function (t, e) {
          return t
            ? function (e) {
                return e.getAttribute(t);
              }
            : function (t) {
                var i = t.querySelector(e);
                return i && i.textContent;
              };
        })(o && o[1], i),
        s = c.sortDataParsers[e[1]];
      return (t = s
        ? function (t) {
            return t && s(n(t));
          }
        : function (t) {
            return t && n(t);
          });
    };
    (c.sortDataParsers = {
      parseInt: function (t) {
        return parseInt(t, 10);
      },
      parseFloat: function (t) {
        return parseFloat(t);
      },
    }),
      (h._sort = function () {
        if (this.options.sortBy) {
          var t = n.makeArray(this.options.sortBy);
          this._getIsSameSortBy(t) ||
            (this.sortHistory = t.concat(this.sortHistory));
          var e = (function (t, e) {
            return function (i, o) {
              for (var n = 0; n < t.length; n++) {
                var s = t[n],
                  r = i.sortData[s],
                  a = o.sortData[s];
                if (r > a || r < a)
                  return (
                    (r > a ? 1 : -1) * ((void 0 !== e[s] ? e[s] : e) ? 1 : -1)
                  );
              }
              return 0;
            };
          })(this.sortHistory, this.options.sortAscending);
          this.filteredItems.sort(e);
        }
      }),
      (h._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++)
          if (t[e] != this.sortHistory[e]) return !1;
        return !0;
      }),
      (h._mode = function () {
        var t = this.options.layoutMode,
          e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return (e.options = this.options[t]), e;
      }),
      (h._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout();
      }),
      (h._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t);
      }),
      (h._manageStamp = function (t) {
        this._mode()._manageStamp(t);
      }),
      (h._getContainerSize = function () {
        return this._mode()._getContainerSize();
      }),
      (h.needsResizeLayout = function () {
        return this._mode().needsResizeLayout();
      }),
      (h.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i = this._filterRevealAdded(e);
          this.filteredItems = this.filteredItems.concat(i);
        }
      }),
      (h.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
          this._resetLayout(), this._manageStamps();
          var i = this._filterRevealAdded(e);
          this.layoutItems(this.filteredItems),
            (this.filteredItems = i.concat(this.filteredItems)),
            (this.items = e.concat(this.items));
        }
      }),
      (h._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return (
          this.hide(e.needHide),
          this.reveal(e.matches),
          this.layoutItems(e.matches, !0),
          e.matches
        );
      }),
      (h.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
          var i,
            o,
            n = e.length;
          for (i = 0; i < n; i++)
            (o = e[i]), this.element.appendChild(o.element);
          var s = this._filter(e).matches;
          for (i = 0; i < n; i++) e[i].isLayoutInstant = !0;
          for (this.arrange(), i = 0; i < n; i++) delete e[i].isLayoutInstant;
          this.reveal(s);
        }
      });
    var u = h.remove;
    return (
      (h.remove = function (t) {
        t = n.makeArray(t);
        var e = this.getItems(t);
        u.call(this, t);
        for (var i = e && e.length, o = 0; i && o < i; o++) {
          var s = e[o];
          n.removeFrom(this.filteredItems, s);
        }
      }),
      (h.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
          this.items[t].sortData.random = Math.random();
        }
        (this.options.sortBy = "random"), this._sort(), this._layout();
      }),
      (h._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var o = t.apply(this, e);
        return (this.options.transitionDuration = i), o;
      }),
      (h.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
          return t.element;
        });
      }),
      c
    );
  }),
  (function () {
    "use strict";
    function t(o) {
      if (!o) throw new Error("No options passed to Waypoint constructor");
      if (!o.element)
        throw new Error("No element option passed to Waypoint constructor");
      if (!o.handler)
        throw new Error("No handler option passed to Waypoint constructor");
      (this.key = "waypoint-" + e),
        (this.options = t.Adapter.extend({}, t.defaults, o)),
        (this.element = this.options.element),
        (this.adapter = new t.Adapter(this.element)),
        (this.callback = o.handler),
        (this.axis = this.options.horizontal ? "horizontal" : "vertical"),
        (this.enabled = this.options.enabled),
        (this.triggerPoint = null),
        (this.group = t.Group.findOrCreate({
          name: this.options.group,
          axis: this.axis,
        })),
        (this.context = t.Context.findOrCreateByElement(this.options.context)),
        t.offsetAliases[this.options.offset] &&
          (this.options.offset = t.offsetAliases[this.options.offset]),
        this.group.add(this),
        this.context.add(this),
        (i[this.key] = this),
        (e += 1);
    }
    var e = 0,
      i = {};
    (t.prototype.queueTrigger = function (t) {
      this.group.queueTrigger(this, t);
    }),
      (t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t);
      }),
      (t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key];
      }),
      (t.prototype.disable = function () {
        return (this.enabled = !1), this;
      }),
      (t.prototype.enable = function () {
        return this.context.refresh(), (this.enabled = !0), this;
      }),
      (t.prototype.next = function () {
        return this.group.next(this);
      }),
      (t.prototype.previous = function () {
        return this.group.previous(this);
      }),
      (t.invokeAll = function (t) {
        var e = [];
        for (var o in i) e.push(i[o]);
        for (var n = 0, s = e.length; s > n; n++) e[n][t]();
      }),
      (t.destroyAll = function () {
        t.invokeAll("destroy");
      }),
      (t.disableAll = function () {
        t.invokeAll("disable");
      }),
      (t.enableAll = function () {
        for (var e in (t.Context.refreshAll(), i)) i[e].enabled = !0;
        return this;
      }),
      (t.refreshAll = function () {
        t.Context.refreshAll();
      }),
      (t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight;
      }),
      (t.viewportWidth = function () {
        return document.documentElement.clientWidth;
      }),
      (t.adapters = []),
      (t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0,
      }),
      (t.offsetAliases = {
        "bottom-in-view": function () {
          return this.context.innerHeight() - this.adapter.outerHeight();
        },
        "right-in-view": function () {
          return this.context.innerWidth() - this.adapter.outerWidth();
        },
      }),
      (window.Waypoint = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      window.setTimeout(t, 1e3 / 60);
    }
    function e(t) {
      (this.element = t),
        (this.Adapter = n.Adapter),
        (this.adapter = new this.Adapter(t)),
        (this.key = "waypoint-context-" + i),
        (this.didScroll = !1),
        (this.didResize = !1),
        (this.oldScroll = {
          x: this.adapter.scrollLeft(),
          y: this.adapter.scrollTop(),
        }),
        (this.waypoints = { vertical: {}, horizontal: {} }),
        (t.waypointContextKey = this.key),
        (o[t.waypointContextKey] = this),
        (i += 1),
        n.windowContext ||
          ((n.windowContext = !0), (n.windowContext = new e(window))),
        this.createThrottledScrollHandler(),
        this.createThrottledResizeHandler();
    }
    var i = 0,
      o = {},
      n = window.Waypoint,
      s = window.onload;
    (e.prototype.add = function (t) {
      var e = t.options.horizontal ? "horizontal" : "vertical";
      (this.waypoints[e][t.key] = t), this.refresh();
    }),
      (e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
          e = this.Adapter.isEmptyObject(this.waypoints.vertical),
          i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete o[this.key]);
      }),
      (e.prototype.createThrottledResizeHandler = function () {
        function t() {
          e.handleResize(), (e.didResize = !1);
        }
        var e = this;
        this.adapter.on("resize.waypoints", function () {
          e.didResize || ((e.didResize = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.createThrottledScrollHandler = function () {
        function t() {
          e.handleScroll(), (e.didScroll = !1);
        }
        var e = this;
        this.adapter.on("scroll.waypoints", function () {
          (!e.didScroll || n.isTouch) &&
            ((e.didScroll = !0), n.requestAnimationFrame(t));
        });
      }),
      (e.prototype.handleResize = function () {
        n.Context.refreshAll();
      }),
      (e.prototype.handleScroll = function () {
        var t = {},
          e = {
            horizontal: {
              newScroll: this.adapter.scrollLeft(),
              oldScroll: this.oldScroll.x,
              forward: "right",
              backward: "left",
            },
            vertical: {
              newScroll: this.adapter.scrollTop(),
              oldScroll: this.oldScroll.y,
              forward: "down",
              backward: "up",
            },
          };
        for (var i in e) {
          var o = e[i],
            n = o.newScroll > o.oldScroll ? o.forward : o.backward;
          for (var s in this.waypoints[i]) {
            var r = this.waypoints[i][s];
            if (null !== r.triggerPoint) {
              var a = o.oldScroll < r.triggerPoint,
                l = o.newScroll >= r.triggerPoint;
              ((a && l) || (!a && !l)) &&
                (r.queueTrigger(n), (t[r.group.id] = r.group));
            }
          }
        }
        for (var c in t) t[c].flushTriggers();
        this.oldScroll = { x: e.horizontal.newScroll, y: e.vertical.newScroll };
      }),
      (e.prototype.innerHeight = function () {
        return this.element == this.element.window
          ? n.viewportHeight()
          : this.adapter.innerHeight();
      }),
      (e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty();
      }),
      (e.prototype.innerWidth = function () {
        return this.element == this.element.window
          ? n.viewportWidth()
          : this.adapter.innerWidth();
      }),
      (e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints)
          for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var o = 0, n = t.length; n > o; o++) t[o].destroy();
      }),
      (e.prototype.refresh = function () {
        var t,
          e = this.element == this.element.window,
          i = e ? void 0 : this.adapter.offset(),
          o = {};
        for (var s in (this.handleScroll(),
        (t = {
          horizontal: {
            contextOffset: e ? 0 : i.left,
            contextScroll: e ? 0 : this.oldScroll.x,
            contextDimension: this.innerWidth(),
            oldScroll: this.oldScroll.x,
            forward: "right",
            backward: "left",
            offsetProp: "left",
          },
          vertical: {
            contextOffset: e ? 0 : i.top,
            contextScroll: e ? 0 : this.oldScroll.y,
            contextDimension: this.innerHeight(),
            oldScroll: this.oldScroll.y,
            forward: "down",
            backward: "up",
            offsetProp: "top",
          },
        }))) {
          var r = t[s];
          for (var a in this.waypoints[s]) {
            var l,
              c,
              h,
              d,
              u = this.waypoints[s][a],
              p = u.options.offset,
              m = u.triggerPoint,
              f = 0,
              g = null == m;
            u.element !== u.element.window &&
              (f = u.adapter.offset()[r.offsetProp]),
              "function" == typeof p
                ? (p = p.apply(u))
                : "string" == typeof p &&
                  ((p = parseFloat(p)),
                  u.options.offset.indexOf("%") > -1 &&
                    (p = Math.ceil((r.contextDimension * p) / 100))),
              (l = r.contextScroll - r.contextOffset),
              (u.triggerPoint = Math.floor(f + l - p)),
              (c = m < r.oldScroll),
              (h = u.triggerPoint >= r.oldScroll),
              (d = !c && !h),
              !g && c && h
                ? (u.queueTrigger(r.backward), (o[u.group.id] = u.group))
                : ((!g && d) || (g && r.oldScroll >= u.triggerPoint)) &&
                  (u.queueTrigger(r.forward), (o[u.group.id] = u.group));
          }
        }
        return (
          n.requestAnimationFrame(function () {
            for (var t in o) o[t].flushTriggers();
          }),
          this
        );
      }),
      (e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t);
      }),
      (e.refreshAll = function () {
        for (var t in o) o[t].refresh();
      }),
      (e.findByElement = function (t) {
        return o[t.waypointContextKey];
      }),
      (window.onload = function () {
        s && s(), e.refreshAll();
      }),
      (n.requestAnimationFrame = function (e) {
        (
          window.requestAnimationFrame ||
          window.mozRequestAnimationFrame ||
          window.webkitRequestAnimationFrame ||
          t
        ).call(window, e);
      }),
      (n.Context = e);
  })(),
  (function () {
    "use strict";
    function t(t, e) {
      return t.triggerPoint - e.triggerPoint;
    }
    function e(t, e) {
      return e.triggerPoint - t.triggerPoint;
    }
    function i(t) {
      (this.name = t.name),
        (this.axis = t.axis),
        (this.id = this.name + "-" + this.axis),
        (this.waypoints = []),
        this.clearTriggerQueues(),
        (o[this.axis][this.name] = this);
    }
    var o = { vertical: {}, horizontal: {} },
      n = window.Waypoint;
    (i.prototype.add = function (t) {
      this.waypoints.push(t);
    }),
      (i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = { up: [], down: [], left: [], right: [] };
      }),
      (i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
          var o = this.triggerQueues[i],
            n = "up" === i || "left" === i;
          o.sort(n ? e : t);
          for (var s = 0, r = o.length; r > s; s += 1) {
            var a = o[s];
            (a.options.continuous || s === o.length - 1) && a.trigger([i]);
          }
        }
        this.clearTriggerQueues();
      }),
      (i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1];
      }),
      (i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = n.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null;
      }),
      (i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t);
      }),
      (i.prototype.remove = function (t) {
        var e = n.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1);
      }),
      (i.prototype.first = function () {
        return this.waypoints[0];
      }),
      (i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1];
      }),
      (i.findOrCreate = function (t) {
        return o[t.axis][t.name] || new i(t);
      }),
      (n.Group = i);
  })(),
  (function () {
    "use strict";
    function t(t) {
      this.$element = e(t);
    }
    var e = window.jQuery,
      i = window.Waypoint;
    e.each(
      [
        "innerHeight",
        "innerWidth",
        "off",
        "offset",
        "on",
        "outerHeight",
        "outerWidth",
        "scrollLeft",
        "scrollTop",
      ],
      function (e, i) {
        t.prototype[i] = function () {
          var t = Array.prototype.slice.call(arguments);
          return this.$element[i].apply(this.$element, t);
        };
      }
    ),
      e.each(["extend", "inArray", "isEmptyObject"], function (i, o) {
        t[o] = e[o];
      }),
      i.adapters.push({ name: "jquery", Adapter: t }),
      (i.Adapter = t);
  })(),
  (function () {
    "use strict";
    function t(t) {
      return function () {
        var i = [],
          o = arguments[0];
        return (
          t.isFunction(arguments[0]) &&
            ((o = t.extend({}, arguments[1])).handler = arguments[0]),
          this.each(function () {
            var n = t.extend({}, o, { element: this });
            "string" == typeof n.context &&
              (n.context = t(this).closest(n.context)[0]),
              i.push(new e(n));
          }),
          i
        );
      };
    }
    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)),
      window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto));
  })(),
  (function (t) {
    var e = !1,
      i = !1,
      o = 5e3,
      n = 2e3,
      s = 0,
      r = (function () {
        var t;
        return 0 <
          (t = (t = document.getElementsByTagName("script"))[
            t.length - 1
          ].src.split("?")[0]).split("https://marketifythemes.net/").length
          ? t
              .split("https://marketifythemes.net/")
              .slice(0, -1)
              .join("https://marketifythemes.net/") + "/"
          : "";
      })();
    Array.prototype.forEach ||
      (Array.prototype.forEach = function (t, e) {
        for (var i = 0, o = this.length; i < o; ++i)
          t.call(e, this[i], i, this);
      });
    var l = window.requestAnimationFrame || !1,
      c = window.cancelAnimationFrame || !1;
    ["ms", "moz", "webkit", "o"].forEach(function (t) {
      l || (l = window[t + "RequestAnimationFrame"]),
        c ||
          (c =
            window[t + "CancelAnimationFrame"] ||
            window[t + "CancelRequestAnimationFrame"]);
    });
    var h = window.MutationObserver || window.WebKitMutationObserver || !1,
      d = {
        zindex: "auto",
        cursoropacitymin: 0,
        cursoropacitymax: 1,
        cursorcolor: "#424242",
        cursorwidth: "5px",
        cursorborder: "1px solid #fff",
        cursorborderradius: "5px",
        scrollspeed: 60,
        mousescrollstep: 24,
        touchbehavior: !1,
        hwacceleration: !0,
        usetransition: !0,
        boxzoom: !1,
        dblclickzoom: !0,
        gesturezoom: !0,
        grabcursorenabled: !0,
        autohidemode: !0,
        background: "",
        iframeautoresize: !0,
        cursorminheight: 32,
        preservenativescrolling: !0,
        railoffset: !1,
        bouncescroll: !0,
        spacebarenabled: !0,
        railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
        disableoutline: !0,
        horizrailenabled: !0,
        railalign: "right",
        railvalign: "bottom",
        enabletranslate3d: !0,
        enablemousewheel: !0,
        enablekeyboard: !0,
        smoothscroll: !0,
        sensitiverail: !0,
        enablemouselockapi: !0,
        cursorfixedheight: !1,
        directionlockdeadzone: 6,
        hidecursordelay: 400,
        nativeparentscrolling: !0,
        enablescrollonselection: !0,
        overflowx: !0,
        overflowy: !0,
        cursordragspeed: 0.3,
        rtlmode: !1,
        cursordragontouch: !1,
      },
      u = !1,
      p = function (a, p) {
        function f(t, e, i) {
          return (
            (e = t.css(e)),
            (t = parseFloat(e)),
            isNaN(t)
              ? ((i =
                  3 == (t = _[e] || 0)
                    ? i
                      ? y.win.outerHeight() - y.win.innerHeight()
                      : y.win.outerWidth() - y.win.innerWidth()
                    : 1),
                y.isie8 && t && (t += 1),
                i ? t : 0)
              : t
          );
        }
        function g(t, e, i, o) {
          y._bind(
            t,
            e,
            function (o) {
              var n = {
                original: (o = o || window.event),
                target: o.target || o.srcElement,
                type: "wheel",
                deltaMode: "MozMousePixelScroll" == o.type ? 0 : 1,
                deltaX: 0,
                deltaZ: 0,
                preventDefault: function () {
                  return (
                    o.preventDefault
                      ? o.preventDefault()
                      : (o.returnValue = !1),
                    !1
                  );
                },
                stopImmediatePropagation: function () {
                  o.stopImmediatePropagation
                    ? o.stopImmediatePropagation()
                    : (o.cancelBubble = !0);
                },
              };
              return (
                "mousewheel" == e
                  ? ((n.deltaY = -0.025 * o.wheelDelta),
                    o.wheelDeltaX && (n.deltaX = -0.025 * o.wheelDeltaX))
                  : (n.deltaY = o.detail),
                i.call(t, n)
              );
            },
            o
          );
        }
        function v(t, e, i) {
          var o, n;
          if (
            (0 == t.deltaMode
              ? ((o = -Math.floor(t.deltaX * (y.opt.mousescrollstep / 54))),
                (n = -Math.floor(t.deltaY * (y.opt.mousescrollstep / 54))))
              : 1 == t.deltaMode &&
                ((o = -Math.floor(t.deltaX * y.opt.mousescrollstep)),
                (n = -Math.floor(t.deltaY * y.opt.mousescrollstep))),
            e && 0 == o && n && ((o = n), (n = 0)),
            o &&
              (y.scrollmom && y.scrollmom.stop(),
              (y.lastdeltax += o),
              y.debounced(
                "mousewheelx",
                function () {
                  var t = y.lastdeltax;
                  (y.lastdeltax = 0), y.rail.drag || y.doScrollLeftBy(t);
                },
                120
              )),
            n)
          ) {
            if (y.opt.nativeparentscrolling && i && !y.ispage && !y.zoomactive)
              if (0 > n) {
                if (y.getScrollTop() >= y.page.maxh) return !0;
              } else if (0 >= y.getScrollTop()) return !0;
            y.scrollmom && y.scrollmom.stop(),
              (y.lastdeltay += n),
              y.debounced(
                "mousewheely",
                function () {
                  var t = y.lastdeltay;
                  (y.lastdeltay = 0), y.rail.drag || y.doScrollBy(t);
                },
                120
              );
          }
          return t.stopImmediatePropagation(), t.preventDefault();
        }
        var y = this;
        if (
          ((this.version = "3.4.0"),
          (this.name = "nicescroll"),
          (this.me = p),
          (this.opt = { doc: t("body"), win: !1 }),
          t.extend(this.opt, d),
          (this.opt.snapbackspeed = 80),
          a)
        )
          for (var w in y.opt) void 0 !== a[w] && (y.opt[w] = a[w]);
        (this.iddoc =
          ((this.doc = y.opt.doc) && this.doc[0] && this.doc[0].id) || ""),
          (this.ispage = /BODY|HTML/.test(
            y.opt.win ? y.opt.win[0].nodeName : this.doc[0].nodeName
          )),
          (this.haswrapper = !1 !== y.opt.win),
          (this.win = y.opt.win || (this.ispage ? t(window) : this.doc)),
          (this.docscroll =
            this.ispage && !this.haswrapper ? t(window) : this.win),
          (this.body = t("body")),
          (this.iframe = this.isfixed = this.viewport = !1),
          (this.isiframe =
            "IFRAME" == this.doc[0].nodeName &&
            "IFRAME" == this.win[0].nodeName),
          (this.istextarea = "TEXTAREA" == this.win[0].nodeName),
          (this.forcescreen = !1),
          (this.canshowonmouseevent = "scroll" != y.opt.autohidemode),
          (this.page =
            this.view =
            this.onzoomout =
            this.onzoomin =
            this.onscrollcancel =
            this.onscrollend =
            this.onscrollstart =
            this.onclick =
            this.ongesturezoom =
            this.onkeypress =
            this.onmousewheel =
            this.onmousemove =
            this.onmouseup =
            this.onmousedown =
              !1),
          (this.scroll = { x: 0, y: 0 }),
          (this.scrollratio = { x: 0, y: 0 }),
          (this.cursorheight = 20),
          (this.scrollvaluemax = 0),
          (this.observerremover =
            this.observer =
            this.scrollmom =
            this.scrollrunning =
            this.checkrtlmode =
              !1);
        do {
          this.id = "ascrail" + n++;
        } while (document.getElementById(this.id));
        (this.hasmousefocus =
          this.hasfocus =
          this.zoomactive =
          this.zoom =
          this.selectiondrag =
          this.cursorfreezed =
          this.cursor =
          this.rail =
            !1),
          (this.visibility = !0),
          (this.hidden = this.locked = !1),
          (this.cursoractive = !0),
          (this.overflowx = y.opt.overflowx),
          (this.overflowy = y.opt.overflowy),
          (this.nativescrollingarea = !1),
          (this.checkarea = 0),
          (this.events = []),
          (this.saved = {}),
          (this.delaylist = {}),
          (this.synclist = {}),
          (this.lastdeltay = this.lastdeltax = 0),
          (this.detected = (function () {
            if (u) return u;
            var t = document.createElement("DIV"),
              e = {
                haspointerlock:
                  "pointerLockElement" in document ||
                  "mozPointerLockElement" in document ||
                  "webkitPointerLockElement" in document,
              };
            (e.isopera = "opera" in window),
              (e.isopera12 = e.isopera && "getUserMedia" in navigator),
              (e.isie = "all" in document && "attachEvent" in t && !e.isopera),
              (e.isieold = e.isie && !("msInterpolationMode" in t.style)),
              (e.isie7 =
                e.isie &&
                !e.isieold &&
                (!("documentMode" in document) || 7 == document.documentMode)),
              (e.isie8 =
                e.isie &&
                "documentMode" in document &&
                8 == document.documentMode),
              (e.isie9 =
                e.isie &&
                "performance" in window &&
                9 <= document.documentMode),
              (e.isie10 =
                e.isie &&
                "performance" in window &&
                10 <= document.documentMode),
              (e.isie9mobile = /iemobile.9/i.test(navigator.userAgent)),
              e.isie9mobile && (e.isie9 = !1),
              (e.isie7mobile =
                !e.isie9mobile &&
                e.isie7 &&
                /iemobile/i.test(navigator.userAgent)),
              (e.ismozilla = "MozAppearance" in t.style),
              (e.iswebkit = "WebkitAppearance" in t.style),
              (e.ischrome = "chrome" in window),
              (e.ischrome22 = e.ischrome && e.haspointerlock),
              (e.ischrome26 = e.ischrome && "transition" in t.style),
              (e.cantouch =
                "ontouchstart" in document.documentElement ||
                "ontouchstart" in window),
              (e.hasmstouch = window.navigator.msPointerEnabled || !1),
              (e.ismac = /^mac$/i.test(navigator.platform)),
              (e.isios =
                e.cantouch && /iphone|ipad|ipod/i.test(navigator.platform)),
              (e.isios4 = e.isios && !("seal" in Object)),
              (e.isandroid = /android/i.test(navigator.userAgent)),
              (e.trstyle = !1),
              (e.hastransform = !1),
              (e.hastranslate3d = !1),
              (e.transitionstyle = !1),
              (e.hastransition = !1),
              (e.transitionend = !1);
            for (
              var i = [
                  "transform",
                  "msTransform",
                  "webkitTransform",
                  "MozTransform",
                  "OTransform",
                ],
                o = 0;
              o < i.length;
              o++
            )
              if (void 0 !== t.style[i[o]]) {
                e.trstyle = i[o];
                break;
              }
            (e.hastransform = 0 != e.trstyle),
              e.hastransform &&
                ((t.style[e.trstyle] = "translate3d(1px,2px,3px)"),
                (e.hastranslate3d = /translate3d/.test(t.style[e.trstyle]))),
              (e.transitionstyle = !1),
              (e.prefixstyle = ""),
              (e.transitionend = !1),
              (i =
                "transition webkitTransition MozTransition OTransition OTransition msTransition KhtmlTransition".split(
                  " "
                ));
            var n = " -webkit- -moz- -o- -o -ms- -khtml-".split(" "),
              s =
                "transitionend webkitTransitionEnd transitionend otransitionend oTransitionEnd msTransitionEnd KhtmlTransitionEnd".split(
                  " "
                );
            for (o = 0; o < i.length; o++)
              if (i[o] in t.style) {
                (e.transitionstyle = i[o]),
                  (e.prefixstyle = n[o]),
                  (e.transitionend = s[o]);
                break;
              }
            e.ischrome26 && (e.prefixstyle = n[1]),
              (e.hastransition = e.transitionstyle);
            t: {
              for (
                i = ["-moz-grab", "-webkit-grab", "grab"],
                  ((e.ischrome && !e.ischrome22) || e.isie) && (i = []),
                  o = 0;
                o < i.length;
                o++
              )
                if (((n = i[o]), (t.style.cursor = n), t.style.cursor == n)) {
                  i = n;
                  break t;
                }
              i =
                "url(http://www.google.com/intl/en_ALL/mapfiles/openhand.cur),n-resize";
            }
            return (
              (e.cursorgrabvalue = i),
              (e.hasmousecapture = "setCapture" in t),
              (e.hasMutationObserver = !1 !== h),
              (u = e)
            );
          })());
        var b = t.extend({}, this.detected);
        if (
          ((this.ishwscroll =
            (this.canhwscroll = b.hastransform && y.opt.hwacceleration) &&
            y.haswrapper),
          (this.istouchcapable = !1),
          b.cantouch &&
            b.ischrome &&
            !b.isios &&
            !b.isandroid &&
            ((this.istouchcapable = !0), (b.cantouch = !1)),
          b.cantouch &&
            b.ismozilla &&
            !b.isios &&
            ((this.istouchcapable = !0), (b.cantouch = !1)),
          y.opt.enablemouselockapi ||
            ((b.hasmousecapture = !1), (b.haspointerlock = !1)),
          (this.delayed = function (t, e, i, o) {
            var n = y.delaylist[t],
              s = new Date().getTime();
            if (!o && n && n.tt) return !1;
            n && n.tt && clearTimeout(n.tt),
              n && n.last + i > s && !n.tt
                ? (y.delaylist[t] = {
                    last: s + i,
                    tt: setTimeout(function () {
                      (y.delaylist[t].tt = 0), e.call();
                    }, i),
                  })
                : (n && n.tt) ||
                  ((y.delaylist[t] = { last: s, tt: 0 }),
                  setTimeout(function () {
                    e.call();
                  }, 0));
          }),
          (this.debounced = function (t, e, i) {
            var o = y.delaylist[t];
            new Date().getTime(),
              (y.delaylist[t] = e),
              o ||
                setTimeout(function () {
                  var e = y.delaylist[t];
                  (y.delaylist[t] = !1), e.call();
                }, i);
          }),
          (this.synched = function (t, e) {
            return (
              (y.synclist[t] = e),
              y.onsync ||
                (l(function () {
                  for (t in ((y.onsync = !1), y.synclist)) {
                    var e = y.synclist[t];
                    e && e.call(y), (y.synclist[t] = !1);
                  }
                }),
                (y.onsync = !0)),
              t
            );
          }),
          (this.unsynched = function (t) {
            y.synclist[t] && (y.synclist[t] = !1);
          }),
          (this.css = function (t, e) {
            for (var i in e) y.saved.css.push([t, i, t.css(i)]), t.css(i, e[i]);
          }),
          (this.scrollTop = function (t) {
            return void 0 === t ? y.getScrollTop() : y.setScrollTop(t);
          }),
          (this.scrollLeft = function (t) {
            return void 0 === t ? y.getScrollLeft() : y.setScrollLeft(t);
          }),
          (BezierClass = function (t, e, i, o, n, s, r) {
            (this.st = t),
              (this.ed = e),
              (this.spd = i),
              (this.p1 = o || 0),
              (this.p2 = n || 1),
              (this.p3 = s || 0),
              (this.p4 = r || 1),
              (this.ts = new Date().getTime()),
              (this.df = this.ed - this.st);
          }),
          (BezierClass.prototype = {
            B2: function (t) {
              return 3 * t * t * (1 - t);
            },
            B3: function (t) {
              return 3 * t * (1 - t) * (1 - t);
            },
            B4: function (t) {
              return (1 - t) * (1 - t) * (1 - t);
            },
            getNow: function () {
              var t = 1 - (new Date().getTime() - this.ts) / this.spd,
                e = this.B2(t) + this.B3(t) + this.B4(t);
              return 0 > t ? this.ed : this.st + Math.round(this.df * e);
            },
            update: function (t, e) {
              return (
                (this.st = this.getNow()),
                (this.ed = t),
                (this.spd = e),
                (this.ts = new Date().getTime()),
                (this.df = this.ed - this.st),
                this
              );
            },
          }),
          this.ishwscroll)
        ) {
          (this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" }),
            b.hastranslate3d &&
              b.isios &&
              this.doc.css("-webkit-backface-visibility", "hidden");
          var x = function () {
            var t = y.doc.css(b.trstyle);
            return (
              !(!t || "matrix" != t.substr(0, 6)) &&
              t
                .replace(/^.*\((.*)\)$/g, "$1")
                .replace(/px/g, "")
                .split(/, +/)
            );
          };
          (this.getScrollTop = function (t) {
            if (!t) {
              if ((t = x())) return 16 == t.length ? -t[13] : -t[5];
              if (y.timerscroll && y.timerscroll.bz)
                return y.timerscroll.bz.getNow();
            }
            return y.doc.translate.y;
          }),
            (this.getScrollLeft = function (t) {
              if (!t) {
                if ((t = x())) return 16 == t.length ? -t[12] : -t[4];
                if (y.timerscroll && y.timerscroll.bh)
                  return y.timerscroll.bh.getNow();
              }
              return y.doc.translate.x;
            }),
            (this.notifyScrollEvent = document.createEvent
              ? function (t) {
                  var e = document.createEvent("UIEvents");
                  e.initUIEvent("scroll", !1, !0, window, 1),
                    t.dispatchEvent(e);
                }
              : document.fireEvent
              ? function (t) {
                  var e = document.createEventObject();
                  t.fireEvent("onscroll"), (e.cancelBubble = !0);
                }
              : function (t, e) {}),
            b.hastranslate3d && y.opt.enabletranslate3d
              ? ((this.setScrollTop = function (t, e) {
                  (y.doc.translate.y = t),
                    (y.doc.translate.ty = -1 * t + "px"),
                    y.doc.css(
                      b.trstyle,
                      "translate3d(" +
                        y.doc.translate.tx +
                        "," +
                        y.doc.translate.ty +
                        ",0px)"
                    ),
                    e || y.notifyScrollEvent(y.win[0]);
                }),
                (this.setScrollLeft = function (t, e) {
                  (y.doc.translate.x = t),
                    (y.doc.translate.tx = -1 * t + "px"),
                    y.doc.css(
                      b.trstyle,
                      "translate3d(" +
                        y.doc.translate.tx +
                        "," +
                        y.doc.translate.ty +
                        ",0px)"
                    ),
                    e || y.notifyScrollEvent(y.win[0]);
                }))
              : ((this.setScrollTop = function (t, e) {
                  (y.doc.translate.y = t),
                    (y.doc.translate.ty = -1 * t + "px"),
                    y.doc.css(
                      b.trstyle,
                      "translate(" +
                        y.doc.translate.tx +
                        "," +
                        y.doc.translate.ty +
                        ")"
                    ),
                    e || y.notifyScrollEvent(y.win[0]);
                }),
                (this.setScrollLeft = function (t, e) {
                  (y.doc.translate.x = t),
                    (y.doc.translate.tx = -1 * t + "px"),
                    y.doc.css(
                      b.trstyle,
                      "translate(" +
                        y.doc.translate.tx +
                        "," +
                        y.doc.translate.ty +
                        ")"
                    ),
                    e || y.notifyScrollEvent(y.win[0]);
                }));
        } else
          (this.getScrollTop = function () {
            return y.docscroll.scrollTop();
          }),
            (this.setScrollTop = function (t) {
              return y.docscroll.scrollTop(t);
            }),
            (this.getScrollLeft = function () {
              return y.docscroll.scrollLeft();
            }),
            (this.setScrollLeft = function (t) {
              return y.docscroll.scrollLeft(t);
            });
        (this.getTarget = function (t) {
          return !!t && (t.target ? t.target : !!t.srcElement && t.srcElement);
        }),
          (this.hasParent = function (t, e) {
            if (!t) return !1;
            for (var i = t.target || t.srcElement || t || !1; i && i.id != e; )
              i = i.parentNode || !1;
            return !1 !== i;
          });
        var _ = { thin: 1, medium: 3, thick: 5 };
        (this.getOffset = function () {
          if (y.isfixed)
            return {
              top: parseFloat(y.win.css("top")),
              left: parseFloat(y.win.css("left")),
            };
          if (!y.viewport) return y.win.offset();
          var t = y.win.offset(),
            e = y.viewport.offset();
          return {
            top: t.top - e.top + y.viewport.scrollTop(),
            left: t.left - e.left + y.viewport.scrollLeft(),
          };
        }),
          (this.updateScrollBar = function (t) {
            if (y.ishwscroll)
              y.rail.css({ height: y.win.innerHeight() }),
                y.railh && y.railh.css({ width: y.win.innerWidth() });
            else {
              var e = y.getOffset(),
                i = e.top,
                o = e.left;
              i = i + f(y.win, "border-top-width", !0);
              y.win.outerWidth(), y.win.innerWidth();
              o =
                o +
                (y.rail.align
                  ? y.win.outerWidth() -
                    f(y.win, "border-right-width") -
                    y.rail.width
                  : f(y.win, "border-left-width"));
              var n = y.opt.railoffset;
              n &&
                (n.top && (i += n.top),
                y.rail.align && n.left && (o += n.left)),
                y.locked ||
                  y.rail.css({
                    top: i,
                    left: o,
                    height: t ? t.h : y.win.innerHeight(),
                  }),
                y.zoom &&
                  y.zoom.css({
                    top: i + 1,
                    left: 1 == y.rail.align ? o - 20 : o + y.rail.width + 4,
                  }),
                y.railh &&
                  !y.locked &&
                  ((i = e.top),
                  (o = e.left),
                  (t = y.railh.align
                    ? i +
                      f(y.win, "border-top-width", !0) +
                      y.win.innerHeight() -
                      y.railh.height
                    : i + f(y.win, "border-top-width", !0)),
                  (o += f(y.win, "border-left-width")),
                  y.railh.css({ top: t, left: o, width: y.railh.width }));
            }
          }),
          (this.doRailClick = function (t, e, i) {
            var o;
            y.locked ||
              (y.cancelEvent(t),
              e
                ? (e = i ? y.doScrollLeft : y.doScrollTop)(
                    (o = i
                      ? (t.pageX - y.railh.offset().left - y.cursorwidth / 2) *
                        y.scrollratio.x
                      : (t.pageY - y.rail.offset().top - y.cursorheight / 2) *
                        y.scrollratio.y)
                  )
                : ((e = i ? y.doScrollLeftBy : y.doScrollBy),
                  (o = i ? y.scroll.x : y.scroll.y),
                  (t = i
                    ? t.pageX - y.railh.offset().left
                    : t.pageY - y.rail.offset().top),
                  (i = i ? y.view.w : y.view.h),
                  e(o >= t ? i : -i)));
          }),
          (y.hasanimationframe = l),
          (y.hascancelanimationframe = c),
          y.hasanimationframe
            ? y.hascancelanimationframe ||
              (c = function () {
                y.cancelAnimationFrame = !0;
              })
            : ((l = function (t) {
                return setTimeout(t, 15 - (Math.floor(+new Date() / 1e3) % 16));
              }),
              (c = clearInterval)),
          (this.init = function () {
            if (((y.saved.css = []), b.isie7mobile)) return !0;
            if (
              (b.hasmstouch &&
                y.css(y.ispage ? t("html") : y.win, {
                  "-ms-touch-action": "none",
                }),
              (y.zindex = "auto"),
              (y.zindex =
                y.ispage || "auto" != y.opt.zindex
                  ? y.opt.zindex
                  : (function () {
                      var t = y.win;
                      if ("zIndex" in t) return t.zIndex();
                      for (; 0 < t.length && 9 != t[0].nodeType; ) {
                        var e = t.css("zIndex");
                        if (!isNaN(e) && 0 != e) return parseInt(e);
                        t = t.parent();
                      }
                      return !1;
                    })() || "auto"),
              !y.ispage && "auto" != y.zindex && y.zindex > s && (s = y.zindex),
              y.isie &&
                0 == y.zindex &&
                "auto" == y.opt.zindex &&
                (y.zindex = "auto"),
              !y.ispage || (!b.cantouch && !b.isieold && !b.isie9mobile))
            ) {
              var n = y.docscroll;
              y.ispage && (n = y.haswrapper ? y.win : y.doc),
                b.isie9mobile || y.css(n, { "overflow-y": "hidden" }),
                y.ispage &&
                  b.isie7 &&
                  ("BODY" == y.doc[0].nodeName
                    ? y.css(t("html"), { "overflow-y": "hidden" })
                    : "HTML" == y.doc[0].nodeName &&
                      y.css(t("body"), { "overflow-y": "hidden" })),
                b.isios &&
                  !y.ispage &&
                  !y.haswrapper &&
                  y.css(t("body"), { "-webkit-overflow-scrolling": "touch" });
              var a = t(document.createElement("div"));
              a.css({
                position: "relative",
                top: 0,
                float: "right",
                width: y.opt.cursorwidth,
                height: "0px",
                "background-color": y.opt.cursorcolor,
                border: y.opt.cursorborder,
                "background-clip": "padding-box",
                "-webkit-border-radius": y.opt.cursorborderradius,
                "-moz-border-radius": y.opt.cursorborderradius,
                "border-radius": y.opt.cursorborderradius,
              }),
                (a.hborder = parseFloat(a.outerHeight() - a.innerHeight())),
                (y.cursor = a),
                (w = t(document.createElement("div"))).attr("id", y.id),
                w.addClass("nicescroll-rails");
              var l,
                c,
                d,
                u = ["left", "right"];
              for (d in u)
                (c = u[d]),
                  (l = y.opt.railpadding[c])
                    ? w.css("padding-" + c, l + "px")
                    : (y.opt.railpadding[c] = 0);
              if (
                (w.append(a),
                (w.width =
                  Math.max(parseFloat(y.opt.cursorwidth), a.outerWidth()) +
                  y.opt.railpadding.left +
                  y.opt.railpadding.right),
                w.css({
                  width: w.width + "px",
                  zIndex: y.zindex,
                  background: y.opt.background,
                  cursor: "default",
                }),
                (w.visibility = !0),
                (w.scrollable = !0),
                (w.align = "left" == y.opt.railalign ? 0 : 1),
                (y.rail = w),
                (a = y.rail.drag = !1),
                y.opt.boxzoom &&
                  !y.ispage &&
                  !b.isieold &&
                  ((a = document.createElement("div")),
                  y.bind(a, "click", y.doZoom),
                  (y.zoom = t(a)),
                  y.zoom.css({
                    cursor: "pointer",
                    "z-index": y.zindex,
                    backgroundImage: "url(" + r + "zoomico.png)",
                    height: 18,
                    width: 18,
                    backgroundPosition: "0px 0px",
                  }),
                  y.opt.dblclickzoom && y.bind(y.win, "dblclick", y.doZoom),
                  b.cantouch &&
                    y.opt.gesturezoom &&
                    ((y.ongesturezoom = function (t) {
                      return (
                        1.5 < t.scale && y.doZoomIn(t),
                        0.8 > t.scale && y.doZoomOut(t),
                        y.cancelEvent(t)
                      );
                    }),
                    y.bind(y.win, "gestureend", y.ongesturezoom))),
                (y.railh = !1),
                y.opt.horizrailenabled)
              ) {
                y.css(n, { "overflow-x": "hidden" }),
                  (a = t(document.createElement("div"))).css({
                    position: "relative",
                    top: 0,
                    height: y.opt.cursorwidth,
                    width: "0px",
                    "background-color": y.opt.cursorcolor,
                    border: y.opt.cursorborder,
                    "background-clip": "padding-box",
                    "-webkit-border-radius": y.opt.cursorborderradius,
                    "-moz-border-radius": y.opt.cursorborderradius,
                    "border-radius": y.opt.cursorborderradius,
                  }),
                  (a.wborder = parseFloat(a.outerWidth() - a.innerWidth())),
                  (y.cursorh = a);
                var p = t(document.createElement("div"));
                p.attr("id", y.id + "-hr"),
                  p.addClass("nicescroll-rails"),
                  (p.height = Math.max(
                    parseFloat(y.opt.cursorwidth),
                    a.outerHeight()
                  )),
                  p.css({
                    height: p.height + "px",
                    zIndex: y.zindex,
                    background: y.opt.background,
                  }),
                  p.append(a),
                  (p.visibility = !0),
                  (p.scrollable = !0),
                  (p.align = "top" == y.opt.railvalign ? 0 : 1),
                  (y.railh = p),
                  (y.railh.drag = !1);
              }
              if (
                (y.ispage
                  ? (w.css({ position: "fixed", top: "0px", height: "100%" }),
                    w.align ? w.css({ right: "0px" }) : w.css({ left: "0px" }),
                    y.body.append(w),
                    y.railh &&
                      (p.css({ position: "fixed", left: "0px", width: "100%" }),
                      p.align
                        ? p.css({ bottom: "0px" })
                        : p.css({ top: "0px" }),
                      y.body.append(p)))
                  : (y.ishwscroll
                      ? ("static" == y.win.css("position") &&
                          y.css(y.win, { position: "relative" }),
                        (n = "HTML" == y.win[0].nodeName ? y.body : y.win),
                        y.zoom &&
                          (y.zoom.css({
                            position: "absolute",
                            top: 1,
                            right: 0,
                            "margin-right": w.width + 4,
                          }),
                          n.append(y.zoom)),
                        w.css({ position: "absolute", top: 0 }),
                        w.align ? w.css({ right: 0 }) : w.css({ left: 0 }),
                        n.append(w),
                        p &&
                          (p.css({ position: "absolute", left: 0, bottom: 0 }),
                          p.align ? p.css({ bottom: 0 }) : p.css({ top: 0 }),
                          n.append(p)))
                      : ((y.isfixed = "fixed" == y.win.css("position")),
                        (n = y.isfixed ? "fixed" : "absolute"),
                        y.isfixed || (y.viewport = y.getViewport(y.win[0])),
                        y.viewport &&
                          ((y.body = y.viewport),
                          0 ==
                            /relative|absolute/.test(
                              y.viewport.css("position")
                            ) && y.css(y.viewport, { position: "relative" })),
                        w.css({ position: n }),
                        y.zoom && y.zoom.css({ position: n }),
                        y.updateScrollBar(),
                        y.body.append(w),
                        y.zoom && y.body.append(y.zoom),
                        y.railh && (p.css({ position: n }), y.body.append(p))),
                    b.isios &&
                      y.css(y.win, {
                        "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                        "-webkit-touch-callout": "none",
                      }),
                    b.isie &&
                      y.opt.disableoutline &&
                      y.win.attr("hideFocus", "true"),
                    b.iswebkit &&
                      y.opt.disableoutline &&
                      y.win.css({ outline: "none" })),
                !1 === y.opt.autohidemode
                  ? ((y.autohidedom = !1),
                    y.rail.css({ opacity: y.opt.cursoropacitymax }),
                    y.railh && y.railh.css({ opacity: y.opt.cursoropacitymax }))
                  : !0 === y.opt.autohidemode
                  ? ((y.autohidedom = t().add(y.rail)),
                    b.isie8 && (y.autohidedom = y.autohidedom.add(y.cursor)),
                    y.railh && (y.autohidedom = y.autohidedom.add(y.railh)),
                    y.railh &&
                      b.isie8 &&
                      (y.autohidedom = y.autohidedom.add(y.cursorh)))
                  : "scroll" == y.opt.autohidemode
                  ? ((y.autohidedom = t().add(y.rail)),
                    y.railh && (y.autohidedom = y.autohidedom.add(y.railh)))
                  : "cursor" == y.opt.autohidemode
                  ? ((y.autohidedom = t().add(y.cursor)),
                    y.railh && (y.autohidedom = y.autohidedom.add(y.cursorh)))
                  : "hidden" == y.opt.autohidemode &&
                    ((y.autohidedom = !1), y.hide(), (y.locked = !1)),
                b.isie9mobile)
              )
                (y.scrollmom = new m(y)),
                  (y.onmangotouch = function (t) {
                    t = y.getScrollTop();
                    var e = y.getScrollLeft();
                    if (
                      t == y.scrollmom.lastscrolly &&
                      e == y.scrollmom.lastscrollx
                    )
                      return !0;
                    var i = t - y.mangotouch.sy,
                      o = e - y.mangotouch.sx;
                    if (
                      0 !=
                      Math.round(Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2)))
                    ) {
                      var n = 0 > i ? -1 : 1,
                        s = 0 > o ? -1 : 1,
                        r = +new Date();
                      y.mangotouch.lazy && clearTimeout(y.mangotouch.lazy),
                        80 < r - y.mangotouch.tm ||
                        y.mangotouch.dry != n ||
                        y.mangotouch.drx != s
                          ? (y.scrollmom.stop(),
                            y.scrollmom.reset(e, t),
                            (y.mangotouch.sy = t),
                            (y.mangotouch.ly = t),
                            (y.mangotouch.sx = e),
                            (y.mangotouch.lx = e),
                            (y.mangotouch.dry = n),
                            (y.mangotouch.drx = s),
                            (y.mangotouch.tm = r))
                          : (y.scrollmom.stop(),
                            y.scrollmom.update(
                              y.mangotouch.sx - o,
                              y.mangotouch.sy - i
                            ),
                            (y.mangotouch.tm = r),
                            (i = Math.max(
                              Math.abs(y.mangotouch.ly - t),
                              Math.abs(y.mangotouch.lx - e)
                            )),
                            (y.mangotouch.ly = t),
                            (y.mangotouch.lx = e),
                            2 < i &&
                              (y.mangotouch.lazy = setTimeout(function () {
                                (y.mangotouch.lazy = !1),
                                  (y.mangotouch.dry = 0),
                                  (y.mangotouch.drx = 0),
                                  (y.mangotouch.tm = 0),
                                  y.scrollmom.doMomentum(30);
                              }, 100)));
                    }
                  }),
                  (w = y.getScrollTop()),
                  (p = y.getScrollLeft()),
                  (y.mangotouch = {
                    sy: w,
                    ly: w,
                    dry: 0,
                    sx: p,
                    lx: p,
                    drx: 0,
                    lazy: !1,
                    tm: 0,
                  }),
                  y.bind(y.docscroll, "scroll", y.onmangotouch);
              else {
                if (
                  b.cantouch ||
                  y.istouchcapable ||
                  y.opt.touchbehavior ||
                  b.hasmstouch
                ) {
                  (y.scrollmom = new m(y)),
                    (y.ontouchstart = function (e) {
                      if (e.pointerType && 2 != e.pointerType) return !1;
                      if (!y.locked) {
                        if (b.hasmstouch)
                          for (var i = !!e.target && e.target; i; ) {
                            if (
                              0 < (o = t(i).getNiceScroll()).length &&
                              o[0].me == y.me
                            )
                              break;
                            if (0 < o.length) return !1;
                            if ("DIV" == i.nodeName && i.id == y.id) break;
                            i = !!i.parentNode && i.parentNode;
                          }
                        if (
                          (y.cancelScroll(),
                          (i = y.getTarget(e)) &&
                            /INPUT/i.test(i.nodeName) &&
                            /range/i.test(i.type))
                        )
                          return y.stopPropagation(e);
                        if (
                          (!("clientX" in e) &&
                            "changedTouches" in e &&
                            ((e.clientX = e.changedTouches[0].clientX),
                            (e.clientY = e.changedTouches[0].clientY)),
                          y.forcescreen &&
                            ((o = e),
                            ((e = {
                              original: e.original ? e.original : e,
                            }).clientX = o.screenX),
                            (e.clientY = o.screenY)),
                          (y.rail.drag = {
                            x: e.clientX,
                            y: e.clientY,
                            sx: y.scroll.x,
                            sy: y.scroll.y,
                            st: y.getScrollTop(),
                            sl: y.getScrollLeft(),
                            pt: 2,
                            dl: !1,
                          }),
                          y.ispage || !y.opt.directionlockdeadzone)
                        )
                          y.rail.drag.dl = "f";
                        else {
                          var o = t(window).width(),
                            n = t(window).height(),
                            s = Math.max(
                              document.body.scrollWidth,
                              document.documentElement.scrollWidth
                            ),
                            r = Math.max(
                              document.body.scrollHeight,
                              document.documentElement.scrollHeight
                            );
                          (n = Math.max(0, r - n)), (o = Math.max(0, s - o));
                          (y.rail.drag.ck =
                            !y.rail.scrollable && y.railh.scrollable
                              ? 0 < n && "v"
                              : !(!y.rail.scrollable || y.railh.scrollable) &&
                                0 < o &&
                                "h"),
                            y.rail.drag.ck || (y.rail.drag.dl = "f");
                        }
                        if (
                          (y.opt.touchbehavior &&
                            y.isiframe &&
                            b.isie &&
                            ((o = y.win.position()),
                            (y.rail.drag.x += o.left),
                            (y.rail.drag.y += o.top)),
                          (y.hasmoving = !1),
                          (y.lastmouseup = !1),
                          y.scrollmom.reset(e.clientX, e.clientY),
                          !b.cantouch && !this.istouchcapable && !b.hasmstouch)
                        ) {
                          if (!i || !/INPUT|SELECT|TEXTAREA/i.test(i.nodeName))
                            return (
                              !y.ispage && b.hasmousecapture && i.setCapture(),
                              y.cancelEvent(e)
                            );
                          /SUBMIT|CANCEL|BUTTON/i.test(t(i).attr("type")) &&
                            ((pc = { tg: i, click: !1 }),
                            (y.preventclick = pc));
                        }
                      }
                    }),
                    (y.ontouchend = function (t) {
                      return (
                        (!t.pointerType || 2 == t.pointerType) &&
                        (y.rail.drag &&
                        2 == y.rail.drag.pt &&
                        (y.scrollmom.doMomentum(),
                        (y.rail.drag = !1),
                        y.hasmoving &&
                          ((y.hasmoving = !1),
                          (y.lastmouseup = !0),
                          y.hideCursor(),
                          b.hasmousecapture && document.releaseCapture(),
                          !b.cantouch))
                          ? y.cancelEvent(t)
                          : void 0)
                      );
                    });
                  var f =
                    y.opt.touchbehavior && y.isiframe && !b.hasmousecapture;
                  y.ontouchmove = function (e, i) {
                    if (e.pointerType && 2 != e.pointerType) return !1;
                    if (y.rail.drag && 2 == y.rail.drag.pt) {
                      if (b.cantouch && void 0 === e.original) return !0;
                      if (
                        ((y.hasmoving = !0),
                        y.preventclick &&
                          !y.preventclick.click &&
                          ((y.preventclick.click =
                            y.preventclick.tg.onclick || !1),
                          (y.preventclick.tg.onclick = y.onpreventclick)),
                        "changedTouches" in
                          (e = t.extend({ original: e }, e)) &&
                          ((e.clientX = e.changedTouches[0].clientX),
                          (e.clientY = e.changedTouches[0].clientY)),
                        y.forcescreen)
                      ) {
                        var o = e;
                        ((e = {
                          original: e.original ? e.original : e,
                        }).clientX = o.screenX),
                          (e.clientY = o.screenY);
                      }
                      if (((o = ofy = 0), f && !i)) {
                        o = -(s = y.win.position()).left;
                        ofy = -s.top;
                      }
                      var n = e.clientY + ofy,
                        s = n - y.rail.drag.y,
                        r = e.clientX + o,
                        a = r - y.rail.drag.x,
                        l = y.rail.drag.st - s;
                      if (
                        (y.ishwscroll && y.opt.bouncescroll
                          ? 0 > l
                            ? (l = Math.round(l / 2))
                            : l > y.page.maxh &&
                              (l =
                                y.page.maxh + Math.round((l - y.page.maxh) / 2))
                          : (0 > l && (n = l = 0),
                            l > y.page.maxh && ((l = y.page.maxh), (n = 0))),
                        y.railh && y.railh.scrollable)
                      ) {
                        var c = y.rail.drag.sl - a;
                        y.ishwscroll && y.opt.bouncescroll
                          ? 0 > c
                            ? (c = Math.round(c / 2))
                            : c > y.page.maxw &&
                              (c =
                                y.page.maxw + Math.round((c - y.page.maxw) / 2))
                          : (0 > c && (r = c = 0),
                            c > y.page.maxw && ((c = y.page.maxw), (r = 0)));
                      }
                      if (((o = !1), y.rail.drag.dl))
                        (o = !0),
                          "v" == y.rail.drag.dl
                            ? (c = y.rail.drag.sl)
                            : "h" == y.rail.drag.dl && (l = y.rail.drag.st);
                      else {
                        (s = Math.abs(s)), (a = Math.abs(a));
                        var h = y.opt.directionlockdeadzone;
                        if ("v" == y.rail.drag.ck) {
                          if (s > h && a <= 0.3 * s)
                            return (y.rail.drag = !1), !0;
                          a > h &&
                            ((y.rail.drag.dl = "f"),
                            t("body").scrollTop(t("body").scrollTop()));
                        } else if ("h" == y.rail.drag.ck) {
                          if (a > h && s <= 0.3 * az)
                            return (y.rail.drag = !1), !0;
                          s > h &&
                            ((y.rail.drag.dl = "f"),
                            t("body").scrollLeft(t("body").scrollLeft()));
                        }
                      }
                      if (
                        (y.synched("touchmove", function () {
                          y.rail.drag &&
                            2 == y.rail.drag.pt &&
                            (y.prepareTransition && y.prepareTransition(0),
                            y.rail.scrollable && y.setScrollTop(l),
                            y.scrollmom.update(r, n),
                            y.railh && y.railh.scrollable
                              ? (y.setScrollLeft(c), y.showCursor(l, c))
                              : y.showCursor(l),
                            b.isie10 && document.selection.clear());
                        }),
                        b.ischrome && y.istouchcapable && (o = !1),
                        o)
                      )
                        return y.cancelEvent(e);
                    }
                  };
                }
                if (
                  ((y.onmousedown = function (t, e) {
                    if (!y.rail.drag || 1 == y.rail.drag.pt) {
                      if (y.locked) return y.cancelEvent(t);
                      y.cancelScroll(),
                        (y.rail.drag = {
                          x: t.clientX,
                          y: t.clientY,
                          sx: y.scroll.x,
                          sy: y.scroll.y,
                          pt: 1,
                          hr: !!e,
                        });
                      var i = y.getTarget(t);
                      return (
                        !y.ispage && b.hasmousecapture && i.setCapture(),
                        y.isiframe &&
                          !b.hasmousecapture &&
                          ((y.saved.csspointerevents =
                            y.doc.css("pointer-events")),
                          y.css(y.doc, { "pointer-events": "none" })),
                        y.cancelEvent(t)
                      );
                    }
                  }),
                  (y.onmouseup = function (t) {
                    if (
                      y.rail.drag &&
                      (b.hasmousecapture && document.releaseCapture(),
                      y.isiframe &&
                        !b.hasmousecapture &&
                        y.doc.css("pointer-events", y.saved.csspointerevents),
                      1 == y.rail.drag.pt)
                    )
                      return (y.rail.drag = !1), y.cancelEvent(t);
                  }),
                  (y.onmousemove = function (t) {
                    if (y.rail.drag && 1 == y.rail.drag.pt) {
                      if (b.ischrome && 0 == t.which) return y.onmouseup(t);
                      if (((y.cursorfreezed = !0), y.rail.drag.hr)) {
                        (y.scroll.x =
                          y.rail.drag.sx + (t.clientX - y.rail.drag.x)),
                          0 > y.scroll.x && (y.scroll.x = 0);
                        var e = y.scrollvaluemaxw;
                        y.scroll.x > e && (y.scroll.x = e);
                      } else
                        (y.scroll.y =
                          y.rail.drag.sy + (t.clientY - y.rail.drag.y)),
                          0 > y.scroll.y && (y.scroll.y = 0),
                          (e = y.scrollvaluemax),
                          y.scroll.y > e && (y.scroll.y = e);
                      return (
                        y.synched("mousemove", function () {
                          y.rail.drag &&
                            1 == y.rail.drag.pt &&
                            (y.showCursor(),
                            y.rail.drag.hr
                              ? y.doScrollLeft(
                                  Math.round(y.scroll.x * y.scrollratio.x),
                                  y.opt.cursordragspeed
                                )
                              : y.doScrollTop(
                                  Math.round(y.scroll.y * y.scrollratio.y),
                                  y.opt.cursordragspeed
                                ));
                        }),
                        y.cancelEvent(t)
                      );
                    }
                  }),
                  b.cantouch || y.opt.touchbehavior)
                )
                  (y.onpreventclick = function (t) {
                    if (y.preventclick)
                      return (
                        (y.preventclick.tg.onclick = y.preventclick.click),
                        (y.preventclick = !1),
                        y.cancelEvent(t)
                      );
                  }),
                    y.bind(y.win, "mousedown", y.ontouchstart),
                    (y.onclick =
                      !b.isios &&
                      function (t) {
                        return (
                          !y.lastmouseup ||
                          ((y.lastmouseup = !1), y.cancelEvent(t))
                        );
                      }),
                    y.opt.grabcursorenabled &&
                      b.cursorgrabvalue &&
                      (y.css(y.ispage ? y.doc : y.win, {
                        cursor: b.cursorgrabvalue,
                      }),
                      y.css(y.rail, { cursor: b.cursorgrabvalue }));
                else {
                  var g = function (t) {
                    if (y.selectiondrag) {
                      if (t) {
                        var e = y.win.outerHeight();
                        0 < (t = t.pageY - y.selectiondrag.top) &&
                          t < e &&
                          (t = 0),
                          t >= e && (t -= e),
                          (y.selectiondrag.df = t);
                      }
                      0 != y.selectiondrag.df &&
                        (y.doScrollBy(2 * -Math.floor(y.selectiondrag.df / 6)),
                        y.debounced(
                          "doselectionscroll",
                          function () {
                            g();
                          },
                          50
                        ));
                    }
                  };
                  (y.hasTextSelected =
                    "getSelection" in document
                      ? function () {
                          return 0 < document.getSelection().rangeCount;
                        }
                      : "selection" in document
                      ? function () {
                          return "None" != document.selection.type;
                        }
                      : function () {
                          return !1;
                        }),
                    (y.onselectionstart = function (t) {
                      y.ispage || (y.selectiondrag = y.win.offset());
                    }),
                    (y.onselectionend = function (t) {
                      y.selectiondrag = !1;
                    }),
                    (y.onselectiondrag = function (t) {
                      y.selectiondrag &&
                        y.hasTextSelected() &&
                        y.debounced(
                          "selectionscroll",
                          function () {
                            g(t);
                          },
                          250
                        );
                    });
                }
                b.hasmstouch &&
                  (y.css(y.rail, { "-ms-touch-action": "none" }),
                  y.css(y.cursor, { "-ms-touch-action": "none" }),
                  y.bind(y.win, "MSPointerDown", y.ontouchstart),
                  y.bind(document, "MSPointerUp", y.ontouchend),
                  y.bind(document, "MSPointerMove", y.ontouchmove),
                  y.bind(y.cursor, "MSGestureHold", function (t) {
                    t.preventDefault();
                  }),
                  y.bind(y.cursor, "contextmenu", function (t) {
                    t.preventDefault();
                  })),
                  this.istouchcapable &&
                    (y.bind(y.win, "touchstart", y.ontouchstart),
                    y.bind(document, "touchend", y.ontouchend),
                    y.bind(document, "touchcancel", y.ontouchend),
                    y.bind(document, "touchmove", y.ontouchmove)),
                  y.bind(y.cursor, "mousedown", y.onmousedown),
                  y.bind(y.cursor, "mouseup", y.onmouseup),
                  y.railh &&
                    (y.bind(y.cursorh, "mousedown", function (t) {
                      y.onmousedown(t, !0);
                    }),
                    y.bind(y.cursorh, "mouseup", function (t) {
                      if (!y.rail.drag || 2 != y.rail.drag.pt)
                        return (
                          (y.rail.drag = !1),
                          (y.hasmoving = !1),
                          y.hideCursor(),
                          b.hasmousecapture && document.releaseCapture(),
                          y.cancelEvent(t)
                        );
                    })),
                  (y.opt.cursordragontouch ||
                    (!b.cantouch && !y.opt.touchbehavior)) &&
                    (y.rail.css({ cursor: "default" }),
                    y.railh && y.railh.css({ cursor: "default" }),
                    y.jqbind(y.rail, "mouseenter", function () {
                      y.canshowonmouseevent && y.showCursor(),
                        (y.rail.active = !0);
                    }),
                    y.jqbind(y.rail, "mouseleave", function () {
                      (y.rail.active = !1), y.rail.drag || y.hideCursor();
                    }),
                    y.opt.sensitiverail &&
                      (y.bind(y.rail, "click", function (t) {
                        y.doRailClick(t, !1, !1);
                      }),
                      y.bind(y.rail, "dblclick", function (t) {
                        y.doRailClick(t, !0, !1);
                      }),
                      y.bind(y.cursor, "click", function (t) {
                        y.cancelEvent(t);
                      }),
                      y.bind(y.cursor, "dblclick", function (t) {
                        y.cancelEvent(t);
                      })),
                    y.railh &&
                      (y.jqbind(y.railh, "mouseenter", function () {
                        y.canshowonmouseevent && y.showCursor(),
                          (y.rail.active = !0);
                      }),
                      y.jqbind(y.railh, "mouseleave", function () {
                        (y.rail.active = !1), y.rail.drag || y.hideCursor();
                      }),
                      y.opt.sensitiverail &&
                        (y.bind(y.railh, "click", function (t) {
                          y.doRailClick(t, !1, !0);
                        }),
                        y.bind(y.railh, "dblclick", function (t) {
                          y.doRailClick(t, !0, !0);
                        }),
                        y.bind(y.cursorh, "click", function (t) {
                          y.cancelEvent(t);
                        }),
                        y.bind(y.cursorh, "dblclick", function (t) {
                          y.cancelEvent(t);
                        })))),
                  b.cantouch || y.opt.touchbehavior
                    ? (y.bind(
                        b.hasmousecapture ? y.win : document,
                        "mouseup",
                        y.ontouchend
                      ),
                      y.bind(document, "mousemove", y.ontouchmove),
                      y.onclick && y.bind(document, "click", y.onclick),
                      y.opt.cursordragontouch &&
                        (y.bind(y.cursor, "mousedown", y.onmousedown),
                        y.bind(y.cursor, "mousemove", y.onmousemove),
                        y.cursorh &&
                          y.bind(y.cursorh, "mousedown", y.onmousedown),
                        y.cursorh &&
                          y.bind(y.cursorh, "mousemove", y.onmousemove)))
                    : (y.bind(
                        b.hasmousecapture ? y.win : document,
                        "mouseup",
                        y.onmouseup
                      ),
                      y.bind(document, "mousemove", y.onmousemove),
                      y.onclick && y.bind(document, "click", y.onclick),
                      !y.ispage &&
                        y.opt.enablescrollonselection &&
                        (y.bind(y.win[0], "mousedown", y.onselectionstart),
                        y.bind(document, "mouseup", y.onselectionend),
                        y.bind(y.cursor, "mouseup", y.onselectionend),
                        y.cursorh &&
                          y.bind(y.cursorh, "mouseup", y.onselectionend),
                        y.bind(document, "mousemove", y.onselectiondrag)),
                      y.zoom &&
                        (y.jqbind(y.zoom, "mouseenter", function () {
                          y.canshowonmouseevent && y.showCursor(),
                            (y.rail.active = !0);
                        }),
                        y.jqbind(y.zoom, "mouseleave", function () {
                          (y.rail.active = !1), y.rail.drag || y.hideCursor();
                        }))),
                  y.opt.enablemousewheel &&
                    (y.isiframe ||
                      y.bind(
                        b.isie && y.ispage ? document : y.docscroll,
                        "mousewheel",
                        y.onmousewheel
                      ),
                    y.bind(y.rail, "mousewheel", y.onmousewheel),
                    y.railh && y.bind(y.railh, "mousewheel", y.onmousewheelhr)),
                  !y.ispage &&
                    !b.cantouch &&
                    !/HTML|BODY/.test(y.win[0].nodeName) &&
                    (y.win.attr("tabindex") || y.win.attr({ tabindex: o++ }),
                    y.jqbind(y.win, "focus", function (t) {
                      (e = y.getTarget(t).id || !0),
                        (y.hasfocus = !0),
                        y.canshowonmouseevent && y.noticeCursor();
                    }),
                    y.jqbind(y.win, "blur", function (t) {
                      (e = !1), (y.hasfocus = !1);
                    }),
                    y.jqbind(y.win, "mouseenter", function (t) {
                      (i = y.getTarget(t).id || !0),
                        (y.hasmousefocus = !0),
                        y.canshowonmouseevent && y.noticeCursor();
                    }),
                    y.jqbind(y.win, "mouseleave", function () {
                      (i = !1), (y.hasmousefocus = !1);
                    }));
              }
              if (
                ((y.onkeypress = function (t) {
                  if (y.locked && 0 == y.page.maxh) return !0;
                  t = t || window.e;
                  var o = y.getTarget(t);
                  if (
                    o &&
                    /INPUT|TEXTAREA|SELECT|OPTION/.test(o.nodeName) &&
                    ((!o.getAttribute("type") && !o.type) ||
                      !/submit|button|cancel/i.tp)
                  )
                    return !0;
                  if (
                    y.hasfocus ||
                    (y.hasmousefocus && !e) ||
                    (y.ispage && !e && !i)
                  ) {
                    if (((o = t.keyCode), y.locked && 27 != o))
                      return y.cancelEvent(t);
                    var n = t.ctrlKey || !1,
                      s = t.shiftKey || !1,
                      r = !1;
                    switch (o) {
                      case 38:
                      case 63233:
                        y.doScrollBy(72), (r = !0);
                        break;
                      case 40:
                      case 63235:
                        y.doScrollBy(-72), (r = !0);
                        break;
                      case 37:
                      case 63232:
                        y.railh &&
                          (n ? y.doScrollLeft(0) : y.doScrollLeftBy(72),
                          (r = !0));
                        break;
                      case 39:
                      case 63234:
                        y.railh &&
                          (n
                            ? y.doScrollLeft(y.page.maxw)
                            : y.doScrollLeftBy(-72),
                          (r = !0));
                        break;
                      case 33:
                      case 63276:
                        y.doScrollBy(y.view.h), (r = !0);
                        break;
                      case 34:
                      case 63277:
                        y.doScrollBy(-y.view.h), (r = !0);
                        break;
                      case 36:
                      case 63273:
                        y.railh && n ? y.doScrollPos(0, 0) : y.doScrollTo(0),
                          (r = !0);
                        break;
                      case 35:
                      case 63275:
                        y.railh && n
                          ? y.doScrollPos(y.page.maxw, y.page.maxh)
                          : y.doScrollTo(y.page.maxh),
                          (r = !0);
                        break;
                      case 32:
                        y.opt.spacebarenabled &&
                          (s ? y.doScrollBy(y.view.h) : y.doScrollBy(-y.view.h),
                          (r = !0));
                        break;
                      case 27:
                        y.zoomactive && (y.doZoom(), (r = !0));
                    }
                    if (r) return y.cancelEvent(t);
                  }
                }),
                y.opt.enablekeyboard &&
                  y.bind(
                    document,
                    b.isopera && !b.isopera12 ? "keypress" : "keydown",
                    y.onkeypress
                  ),
                y.bind(window, "resize", y.lazyResize),
                y.bind(window, "orientationchange", y.lazyResize),
                y.bind(window, "load", y.lazyResize),
                b.ischrome && !y.ispage && !y.haswrapper)
              ) {
                var v = y.win.attr("style"),
                  w = parseFloat(y.win.css("width")) + 1;
                y.win.css("width", w),
                  y.synched("chromefix", function () {
                    y.win.attr("style", v);
                  });
              }
              (y.onAttributeChange = function (t) {
                y.lazyResize(250);
              }),
                !y.ispage &&
                  !y.haswrapper &&
                  (!1 !== h
                    ? ((y.observer = new h(function (t) {
                        t.forEach(y.onAttributeChange);
                      })),
                      y.observer.observe(y.win[0], {
                        childList: !0,
                        characterData: !1,
                        attributes: !0,
                        subtree: !1,
                      }),
                      (y.observerremover = new h(function (t) {
                        t.forEach(function (t) {
                          if (0 < t.removedNodes.length)
                            for (var e in t.removedNodes)
                              if (t.removedNodes[e] == y.win[0])
                                return y.remove();
                        });
                      })),
                      y.observerremover.observe(y.win[0].parentNode, {
                        childList: !0,
                        characterData: !1,
                        attributes: !1,
                        subtree: !1,
                      }))
                    : (y.bind(
                        y.win,
                        b.isie && !b.isie9
                          ? "propertychange"
                          : "DOMAttrModified",
                        y.onAttributeChange
                      ),
                      b.isie9 &&
                        y.win[0].attachEvent(
                          "onpropertychange",
                          y.onAttributeChange
                        ),
                      y.bind(y.win, "DOMNodeRemoved", function (t) {
                        t.target == y.win[0] && y.remove();
                      }))),
                !y.ispage &&
                  y.opt.boxzoom &&
                  y.bind(window, "resize", y.resizeZoom),
                y.istextarea && y.bind(y.win, "mouseup", y.lazyResize),
                (y.checkrtlmode = !0),
                y.lazyResize(30);
            }
            if ("IFRAME" == this.doc[0].nodeName) {
              var x = function (e) {
                y.iframexd = !1;
                try {
                  var i =
                    "contentDocument" in this
                      ? this.contentDocument
                      : this.contentWindow.document;
                } catch (t) {
                  (y.iframexd = !0), (i = !1);
                }
                if (y.iframexd)
                  return (
                    "console" in window &&
                      console.log("NiceScroll error: policy restriced iframe"),
                    !0
                  );
                (y.forcescreen = !0),
                  y.isiframe &&
                    ((y.iframe = {
                      doc: t(i),
                      html: y.doc.contents().find("html")[0],
                      body: y.doc.contents().find("body")[0],
                    }),
                    (y.getContentSize = function () {
                      return {
                        w: Math.max(
                          y.iframe.html.scrollWidth,
                          y.iframe.body.scrollWidth
                        ),
                        h: Math.max(
                          y.iframe.html.scrollHeight,
                          y.iframe.body.scrollHeight
                        ),
                      };
                    }),
                    (y.docscroll = t(y.iframe.body))),
                  !b.isios &&
                    y.opt.iframeautoresize &&
                    !y.isiframe &&
                    (y.win.scrollTop(0),
                    y.doc.height(""),
                    (e = Math.max(
                      i.getElementsByTagName("html")[0].scrollHeight,
                      i.body.scrollHeight
                    )),
                    y.doc.height(e)),
                  y.lazyResize(30),
                  b.isie7 &&
                    y.css(t(y.iframe.html), { "overflow-y": "hidden" }),
                  y.css(t(y.iframe.body), { "overflow-y": "hidden" }),
                  "contentWindow" in this
                    ? y.bind(this.contentWindow, "scroll", y.onscroll)
                    : y.bind(i, "scroll", y.onscroll),
                  y.opt.enablemousewheel &&
                    y.bind(i, "mousewheel", y.onmousewheel),
                  y.opt.enablekeyboard &&
                    y.bind(i, b.isopera ? "keypress" : "keydown", y.onkeypress),
                  (b.cantouch || y.opt.touchbehavior) &&
                    (y.bind(i, "mousedown", y.onmousedown),
                    y.bind(i, "mousemove", function (t) {
                      y.onmousemove(t, !0);
                    }),
                    y.opt.grabcursorenabled &&
                      b.cursorgrabvalue &&
                      y.css(t(i.body), { cursor: b.cursorgrabvalue })),
                  y.bind(i, "mouseup", y.onmouseup),
                  y.zoom &&
                    (y.opt.dblclickzoom && y.bind(i, "dblclick", y.doZoom),
                    y.ongesturezoom &&
                      y.bind(i, "gestureend", y.ongesturezoom));
              };
              this.doc[0].readyState &&
                "complete" == this.doc[0].readyState &&
                setTimeout(function () {
                  x.call(y.doc[0], !1);
                }, 500),
                y.bind(this.doc, "load", x);
            }
          }),
          (this.showCursor = function (t, e) {
            y.cursortimeout &&
              (clearTimeout(y.cursortimeout), (y.cursortimeout = 0)),
              y.rail &&
                (y.autohidedom &&
                  (y.autohidedom
                    .stop()
                    .css({ opacity: y.opt.cursoropacitymax }),
                  (y.cursoractive = !0)),
                (y.rail.drag && 1 == y.rail.drag.pt) ||
                  (void 0 !== t &&
                    !1 !== t &&
                    (y.scroll.y = Math.round((1 * t) / y.scrollratio.y)),
                  void 0 !== e &&
                    (y.scroll.x = Math.round((1 * e) / y.scrollratio.x))),
                y.cursor.css({ height: y.cursorheight, top: y.scroll.y }),
                y.cursorh &&
                  (!y.rail.align && y.rail.visibility
                    ? y.cursorh.css({
                        width: y.cursorwidth,
                        left: y.scroll.x + y.rail.width,
                      })
                    : y.cursorh.css({ width: y.cursorwidth, left: y.scroll.x }),
                  (y.cursoractive = !0)),
                y.zoom &&
                  y.zoom.stop().css({ opacity: y.opt.cursoropacitymax }));
          }),
          (this.hideCursor = function (t) {
            !y.cursortimeout &&
              y.rail &&
              y.autohidedom &&
              (y.cursortimeout = setTimeout(function () {
                (y.rail.active && y.showonmouseevent) ||
                  (y.autohidedom
                    .stop()
                    .animate({ opacity: y.opt.cursoropacitymin }),
                  y.zoom &&
                    y.zoom.stop().animate({ opacity: y.opt.cursoropacitymin }),
                  (y.cursoractive = !1)),
                  (y.cursortimeout = 0);
              }, t || y.opt.hidecursordelay));
          }),
          (this.noticeCursor = function (t, e, i) {
            y.showCursor(e, i), y.rail.active || y.hideCursor(t);
          }),
          (this.getContentSize = y.ispage
            ? function () {
                return {
                  w: Math.max(
                    document.body.scrollWidth,
                    document.documentElement.scrollWidth
                  ),
                  h: Math.max(
                    document.body.scrollHeight,
                    document.documentElement.scrollHeight
                  ),
                };
              }
            : y.haswrapper
            ? function () {
                return {
                  w:
                    y.doc.outerWidth() +
                    parseInt(y.win.css("paddingLeft")) +
                    parseInt(y.win.css("paddingRight")),
                  h:
                    y.doc.outerHeight() +
                    parseInt(y.win.css("paddingTop")) +
                    parseInt(y.win.css("paddingBottom")),
                };
              }
            : function () {
                return {
                  w: y.docscroll[0].scrollWidth,
                  h: y.docscroll[0].scrollHeight,
                };
              }),
          (this.onResize = function (t, e) {
            if (!y.win) return !1;
            if (!y.haswrapper && !y.ispage) {
              if ("none" == y.win.css("display"))
                return y.visibility && y.hideRail().hideRailHr(), !1;
              !y.hidden && !y.visibility && y.showRail().showRailHr();
            }
            var i = y.page.maxh,
              o = y.page.maxw,
              n = y.view.w;
            if (
              ((y.view = {
                w: y.ispage ? y.win.width() : parseInt(y.win[0].clientWidth),
                h: y.ispage ? y.win.height() : parseInt(y.win[0].clientHeight),
              }),
              (y.page = e || y.getContentSize()),
              (y.page.maxh = Math.max(0, y.page.h - y.view.h)),
              (y.page.maxw = Math.max(0, y.page.w - y.view.w)),
              y.page.maxh == i && y.page.maxw == o && y.view.w == n)
            ) {
              if (y.ispage) return y;
              if (
                ((i = y.win.offset()),
                y.lastposition &&
                  (o = y.lastposition).top == i.top &&
                  o.left == i.left)
              )
                return y;
              y.lastposition = i;
            }
            return (
              0 == y.page.maxh
                ? (y.hideRail(),
                  (y.scrollvaluemax = 0),
                  (y.scroll.y = 0),
                  (y.scrollratio.y = 0),
                  (y.cursorheight = 0),
                  y.setScrollTop(0),
                  (y.rail.scrollable = !1))
                : (y.rail.scrollable = !0),
              0 == y.page.maxw
                ? (y.hideRailHr(),
                  (y.scrollvaluemaxw = 0),
                  (y.scroll.x = 0),
                  (y.scrollratio.x = 0),
                  (y.cursorwidth = 0),
                  y.setScrollLeft(0),
                  (y.railh.scrollable = !1))
                : (y.railh.scrollable = !0),
              (y.locked = 0 == y.page.maxh && 0 == y.page.maxw),
              y.locked
                ? (y.ispage || y.updateScrollBar(y.view), !1)
                : (y.hidden || y.visibility
                    ? !y.hidden && !y.railh.visibility && y.showRailHr()
                    : y.showRail().showRailHr(),
                  y.istextarea &&
                    y.win.css("resize") &&
                    "none" != y.win.css("resize") &&
                    (y.view.h -= 20),
                  (y.cursorheight = Math.min(
                    y.view.h,
                    Math.round(y.view.h * (y.view.h / y.page.h))
                  )),
                  (y.cursorheight = y.opt.cursorfixedheight
                    ? y.opt.cursorfixedheight
                    : Math.max(y.opt.cursorminheight, y.cursorheight)),
                  (y.cursorwidth = Math.min(
                    y.view.w,
                    Math.round(y.view.w * (y.view.w / y.page.w))
                  )),
                  (y.cursorwidth = y.opt.cursorfixedheight
                    ? y.opt.cursorfixedheight
                    : Math.max(y.opt.cursorminheight, y.cursorwidth)),
                  (y.scrollvaluemax =
                    y.view.h - y.cursorheight - y.cursor.hborder),
                  y.railh &&
                    ((y.railh.width =
                      0 < y.page.maxh ? y.view.w - y.rail.width : y.view.w),
                    (y.scrollvaluemaxw =
                      y.railh.width - y.cursorwidth - y.cursorh.wborder)),
                  y.checkrtlmode &&
                    y.railh &&
                    ((y.checkrtlmode = !1),
                    y.opt.rtlmode &&
                      0 == y.scroll.x &&
                      y.setScrollLeft(y.page.maxw)),
                  y.ispage || y.updateScrollBar(y.view),
                  (y.scrollratio = {
                    x: y.page.maxw / y.scrollvaluemaxw,
                    y: y.page.maxh / y.scrollvaluemax,
                  }),
                  y.getScrollTop() > y.page.maxh
                    ? y.doScrollTop(y.page.maxh)
                    : ((y.scroll.y = Math.round(
                        y.getScrollTop() * (1 / y.scrollratio.y)
                      )),
                      (y.scroll.x = Math.round(
                        y.getScrollLeft() * (1 / y.scrollratio.x)
                      )),
                      y.cursoractive && y.noticeCursor()),
                  y.scroll.y &&
                    0 == y.getScrollTop() &&
                    y.doScrollTo(Math.floor(y.scroll.y * y.scrollratio.y)),
                  y)
            );
          }),
          (this.resize = y.onResize),
          (this.lazyResize = function (t) {
            return (t = isNaN(t) ? 30 : t), y.delayed("resize", y.resize, t), y;
          }),
          (this._bind = function (t, e, i, o) {
            y.events.push({ e: t, n: e, f: i, b: o, q: !1 }),
              t.addEventListener
                ? t.addEventListener(e, i, o || !1)
                : t.attachEvent
                ? t.attachEvent("on" + e, i)
                : (t["on" + e] = i);
          }),
          (this.jqbind = function (e, i, o) {
            y.events.push({ e: e, n: i, f: o, q: !0 }), t(e).bind(i, o);
          }),
          (this.bind = function (t, e, i, o) {
            var n = "jquery" in t ? t[0] : t;
            "mousewheel" == e
              ? "onwheel" in y.win
                ? y._bind(n, "wheel", i, o || !1)
                : ((t =
                    void 0 !== document.onmousewheel
                      ? "mousewheel"
                      : "DOMMouseScroll"),
                  g(n, t, i, o || !1),
                  "DOMMouseScroll" == t &&
                    g(n, "MozMousePixelScroll", i, o || !1))
              : n.addEventListener
              ? (b.cantouch &&
                  /mouseup|mousedown|mousemove/.test(e) &&
                  y._bind(
                    n,
                    "mousedown" == e
                      ? "touchstart"
                      : "mouseup" == e
                      ? "touchend"
                      : "touchmove",
                    function (t) {
                      if (t.touches) {
                        if (2 > t.touches.length) {
                          var e = t.touches.length ? t.touches[0] : t;
                          (e.original = t), i.call(this, e);
                        }
                      } else
                        t.changedTouches &&
                          (((e = t.changedTouches[0]).original = t),
                          i.call(this, e));
                    },
                    o || !1
                  ),
                y._bind(n, e, i, o || !1),
                b.cantouch &&
                  "mouseup" == e &&
                  y._bind(n, "touchcancel", i, o || !1))
              : y._bind(n, e, function (t) {
                  return (
                    (t = t || window.event || !1) &&
                      t.srcElement &&
                      (t.target = t.srcElement),
                    "pageY" in t ||
                      ((t.pageX =
                        t.clientX + document.documentElement.scrollLeft),
                      (t.pageY =
                        t.clientY + document.documentElement.scrollTop)),
                    (!1 !== i.call(n, t) && !1 !== o) || y.cancelEvent(t)
                  );
                });
          }),
          (this._unbind = function (t, e, i, o) {
            t.removeEventListener
              ? t.removeEventListener(e, i, o)
              : t.detachEvent
              ? t.detachEvent("on" + e, i)
              : (t["on" + e] = !1);
          }),
          (this.unbindAll = function () {
            for (var t = 0; t < y.events.length; t++) {
              var e = y.events[t];
              e.q ? e.e.unbind(e.n, e.f) : y._unbind(e.e, e.n, e.f, e.b);
            }
          }),
          (this.cancelEvent = function (t) {
            return (
              !!(t = t.original ? t.original : t || window.event || !1) &&
              (t.preventDefault && t.preventDefault(),
              t.stopPropagation && t.stopPropagation(),
              t.preventManipulation && t.preventManipulation(),
              (t.cancelBubble = !0),
              (t.cancel = !0),
              (t.returnValue = !1))
            );
          }),
          (this.stopPropagation = function (t) {
            return (
              !!(t = t.original ? t.original : t || window.event || !1) &&
              (t.stopPropagation
                ? t.stopPropagation()
                : (t.cancelBubble && (t.cancelBubble = !0), !1))
            );
          }),
          (this.showRail = function () {
            return (
              0 == y.page.maxh ||
                (!y.ispage && "none" == y.win.css("display")) ||
                ((y.visibility = !0),
                (y.rail.visibility = !0),
                y.rail.css("display", "block")),
              y
            );
          }),
          (this.showRailHr = function () {
            return y.railh
              ? (0 == y.page.maxw ||
                  (!y.ispage && "none" == y.win.css("display")) ||
                  ((y.railh.visibility = !0), y.railh.css("display", "block")),
                y)
              : y;
          }),
          (this.hideRail = function () {
            return (
              (y.visibility = !1),
              (y.rail.visibility = !1),
              y.rail.css("display", "none"),
              y
            );
          }),
          (this.hideRailHr = function () {
            return y.railh
              ? ((y.railh.visibility = !1), y.railh.css("display", "none"), y)
              : y;
          }),
          (this.show = function () {
            return (y.hidden = !1), (y.locked = !1), y.showRail().showRailHr();
          }),
          (this.hide = function () {
            return (y.hidden = !0), (y.locked = !0), y.hideRail().hideRailHr();
          }),
          (this.toggle = function () {
            return y.hidden ? y.show() : y.hide();
          }),
          (this.remove = function () {
            y.stop(),
              y.cursortimeout && clearTimeout(y.cursortimeout),
              y.doZoomOut(),
              y.unbindAll(),
              !1 !== y.observer && y.observer.disconnect(),
              !1 !== y.observerremover && y.observerremover.disconnect(),
              (y.events = []),
              y.cursor && (y.cursor.remove(), (y.cursor = null)),
              y.cursorh && (y.cursorh.remove(), (y.cursorh = null)),
              y.rail && (y.rail.remove(), (y.rail = null)),
              y.railh && (y.railh.remove(), (y.railh = null)),
              y.zoom && (y.zoom.remove(), (y.zoom = null));
            for (var t = 0; t < y.saved.css.length; t++) {
              var e = y.saved.css[t];
              e[0].css(e[1], void 0 === e[2] ? "" : e[2]);
            }
            return (
              (y.saved = !1),
              y.me.data("__nicescroll", ""),
              (y.me = null),
              (y.doc = null),
              (y.docscroll = null),
              (y.win = null),
              y
            );
          }),
          (this.scrollstart = function (t) {
            return (this.onscrollstart = t), y;
          }),
          (this.scrollend = function (t) {
            return (this.onscrollend = t), y;
          }),
          (this.scrollcancel = function (t) {
            return (this.onscrollcancel = t), y;
          }),
          (this.zoomin = function (t) {
            return (this.onzoomin = t), y;
          }),
          (this.zoomout = function (t) {
            return (this.onzoomout = t), y;
          }),
          (this.isScrollable = function (e) {
            if ("OPTION" == (e = e.target ? e.target : e).nodeName) return !0;
            for (; e && 1 == e.nodeType && !/BODY|HTML/.test(e.nodeName); ) {
              var i =
                (i = t(e)).css("overflowY") ||
                i.css("overflowX") ||
                i.css("overflow") ||
                "";
              if (/scroll|auto/.test(i))
                return e.clientHeight != e.scrollHeight;
              e = !!e.parentNode && e.parentNode;
            }
            return !1;
          }),
          (this.getViewport = function (e) {
            for (
              e = !(!e || !e.parentNode) && e.parentNode;
              e && 1 == e.nodeType && !/BODY|HTML/.test(e.nodeName);

            ) {
              var i = t(e),
                o =
                  i.css("overflowY") ||
                  i.css("overflowX") ||
                  i.css("overflow") ||
                  "";
              if (
                (/scroll|auto/.test(o) && e.clientHeight != e.scrollHeight) ||
                0 < i.getNiceScroll().length
              )
                return i;
              e = !!e.parentNode && e.parentNode;
            }
            return !1;
          }),
          (this.onmousewheel = function (t) {
            if (y.locked) return !0;
            if (y.rail.drag) return y.cancelEvent(t);
            if (!y.rail.scrollable)
              return !y.railh || !y.railh.scrollable || y.onmousewheelhr(t);
            var e = +new Date(),
              i = !1;
            return (
              y.opt.preservenativescrolling &&
                y.checkarea + 600 < e &&
                ((y.nativescrollingarea = y.isScrollable(t)), (i = !0)),
              (y.checkarea = e),
              !!y.nativescrollingarea ||
                ((t = v(t, !1, i)) && (y.checkarea = 0), t)
            );
          }),
          (this.onmousewheelhr = function (t) {
            if (y.locked || !y.railh.scrollable) return !0;
            if (y.rail.drag) return y.cancelEvent(t);
            var e = +new Date(),
              i = !1;
            return (
              y.opt.preservenativescrolling &&
                y.checkarea + 600 < e &&
                ((y.nativescrollingarea = y.isScrollable(t)), (i = !0)),
              (y.checkarea = e),
              !!y.nativescrollingarea ||
                (y.locked ? y.cancelEvent(t) : v(t, !0, i))
            );
          }),
          (this.stop = function () {
            return (
              y.cancelScroll(),
              y.scrollmon && y.scrollmon.stop(),
              (y.cursorfreezed = !1),
              (y.scroll.y = Math.round(
                y.getScrollTop() * (1 / y.scrollratio.y)
              )),
              y.noticeCursor(),
              y
            );
          }),
          (this.getTransitionSpeed = function (t) {
            var e = Math.round(10 * y.opt.scrollspeed);
            return 20 <
              (t = Math.min(e, Math.round((t / 20) * y.opt.scrollspeed)))
              ? t
              : 0;
          }),
          y.opt.smoothscroll
            ? y.ishwscroll && b.hastransition && y.opt.usetransition
              ? ((this.prepareTransition = function (t, e) {
                  var i = e ? (20 < t ? t : 0) : y.getTransitionSpeed(t),
                    o = i
                      ? b.prefixstyle + "transform " + i + "ms ease-out"
                      : "";
                  return (
                    (y.lasttransitionstyle && y.lasttransitionstyle == o) ||
                      ((y.lasttransitionstyle = o),
                      y.doc.css(b.transitionstyle, o)),
                    i
                  );
                }),
                (this.doScrollLeft = function (t, e) {
                  var i = y.scrollrunning ? y.newscrolly : y.getScrollTop();
                  y.doScrollPos(t, i, e);
                }),
                (this.doScrollTop = function (t, e) {
                  var i = y.scrollrunning ? y.newscrollx : y.getScrollLeft();
                  y.doScrollPos(i, t, e);
                }),
                (this.doScrollPos = function (t, e, i) {
                  var o = y.getScrollTop(),
                    n = y.getScrollLeft();
                  return (
                    (0 > (y.newscrolly - o) * (e - o) ||
                      0 > (y.newscrollx - n) * (t - n)) &&
                      y.cancelScroll(),
                    0 == y.opt.bouncescroll &&
                      (0 > e ? (e = 0) : e > y.page.maxh && (e = y.page.maxh),
                      0 > t ? (t = 0) : t > y.page.maxw && (t = y.page.maxw)),
                    (!y.scrollrunning ||
                      t != y.newscrollx ||
                      e != y.newscrolly) &&
                      ((y.newscrolly = e),
                      (y.newscrollx = t),
                      (y.newscrollspeed = i || !1),
                      !y.timer &&
                        void (y.timer = setTimeout(function () {
                          var i,
                            o,
                            n = y.getScrollTop(),
                            s = y.getScrollLeft();
                          (i = t - s),
                            (o = e - n),
                            (i = Math.round(
                              Math.sqrt(Math.pow(i, 2) + Math.pow(o, 2))
                            )),
                            (i =
                              y.newscrollspeed && 1 < y.newscrollspeed
                                ? y.newscrollspeed
                                : y.getTransitionSpeed(i)),
                            y.newscrollspeed &&
                              1 >= y.newscrollspeed &&
                              (i *= y.newscrollspeed),
                            y.prepareTransition(i, !0),
                            y.timerscroll &&
                              y.timerscroll.tm &&
                              clearInterval(y.timerscroll.tm),
                            0 < i &&
                              (!y.scrollrunning &&
                                y.onscrollstart &&
                                y.onscrollstart.call(y, {
                                  type: "scrollstart",
                                  current: { x: s, y: n },
                                  request: { x: t, y: e },
                                  end: { x: y.newscrollx, y: y.newscrolly },
                                  speed: i,
                                }),
                              b.transitionend
                                ? y.scrollendtrapped ||
                                  ((y.scrollendtrapped = !0),
                                  y.bind(
                                    y.doc,
                                    b.transitionend,
                                    y.onScrollEnd,
                                    !1
                                  ))
                                : (y.scrollendtrapped &&
                                    clearTimeout(y.scrollendtrapped),
                                  (y.scrollendtrapped = setTimeout(
                                    y.onScrollEnd,
                                    i
                                  ))),
                              (y.timerscroll = {
                                bz: new BezierClass(
                                  n,
                                  y.newscrolly,
                                  i,
                                  0,
                                  0,
                                  0.58,
                                  1
                                ),
                                bh: new BezierClass(
                                  s,
                                  y.newscrollx,
                                  i,
                                  0,
                                  0,
                                  0.58,
                                  1
                                ),
                              }),
                              y.cursorfreezed ||
                                (y.timerscroll.tm = setInterval(function () {
                                  y.showCursor(
                                    y.getScrollTop(),
                                    y.getScrollLeft()
                                  );
                                }, 60))),
                            y.synched("doScroll-set", function () {
                              (y.timer = 0),
                                y.scrollendtrapped && (y.scrollrunning = !0),
                                y.setScrollTop(y.newscrolly),
                                y.setScrollLeft(y.newscrollx),
                                y.scrollendtrapped || y.onScrollEnd();
                            });
                        }, 50)))
                  );
                }),
                (this.cancelScroll = function () {
                  if (!y.scrollendtrapped) return !0;
                  var t = y.getScrollTop(),
                    e = y.getScrollLeft();
                  return (
                    (y.scrollrunning = !1),
                    b.transitionend || clearTimeout(b.transitionend),
                    (y.scrollendtrapped = !1),
                    y._unbind(y.doc, b.transitionend, y.onScrollEnd),
                    y.prepareTransition(0),
                    y.setScrollTop(t),
                    y.railh && y.setScrollLeft(e),
                    y.timerscroll &&
                      y.timerscroll.tm &&
                      clearInterval(y.timerscroll.tm),
                    (y.timerscroll = !1),
                    (y.cursorfreezed = !1),
                    y.showCursor(t, e),
                    y
                  );
                }),
                (this.onScrollEnd = function () {
                  y.scrollendtrapped &&
                    y._unbind(y.doc, b.transitionend, y.onScrollEnd),
                    (y.scrollendtrapped = !1),
                    y.prepareTransition(0),
                    y.timerscroll &&
                      y.timerscroll.tm &&
                      clearInterval(y.timerscroll.tm),
                    (y.timerscroll = !1);
                  var t = y.getScrollTop(),
                    e = y.getScrollLeft();
                  if (
                    (y.setScrollTop(t),
                    y.railh && y.setScrollLeft(e),
                    y.noticeCursor(!1, t, e),
                    (y.cursorfreezed = !1),
                    0 > t ? (t = 0) : t > y.page.maxh && (t = y.page.maxh),
                    0 > e ? (e = 0) : e > y.page.maxw && (e = y.page.maxw),
                    t != y.newscrolly || e != y.newscrollx)
                  )
                    return y.doScrollPos(e, t, y.opt.snapbackspeed);
                  y.onscrollend &&
                    y.scrollrunning &&
                    y.onscrollend.call(y, {
                      type: "scrollend",
                      current: { x: e, y: t },
                      end: { x: y.newscrollx, y: y.newscrolly },
                    }),
                    (y.scrollrunning = !1);
                }))
              : ((this.doScrollLeft = function (t, e) {
                  var i = y.scrollrunning ? y.newscrolly : y.getScrollTop();
                  y.doScrollPos(t, i, e);
                }),
                (this.doScrollTop = function (t, e) {
                  var i = y.scrollrunning ? y.newscrollx : y.getScrollLeft();
                  y.doScrollPos(i, t, e);
                }),
                (this.doScrollPos = function (t, e, i) {
                  if (
                    ((e = void 0 === e || !1 === e ? y.getScrollTop(!0) : e),
                    y.timer && y.newscrolly == e && y.newscrollx == t)
                  )
                    return !0;
                  y.timer && c(y.timer), (y.timer = 0);
                  var o = y.getScrollTop(),
                    n = y.getScrollLeft();
                  (0 > (y.newscrolly - o) * (e - o) ||
                    0 > (y.newscrollx - n) * (t - n)) &&
                    y.cancelScroll(),
                    (y.newscrolly = e),
                    (y.newscrollx = t),
                    (y.bouncescroll && y.rail.visibility) ||
                      (0 > y.newscrolly
                        ? (y.newscrolly = 0)
                        : y.newscrolly > y.page.maxh &&
                          (y.newscrolly = y.page.maxh)),
                    (y.bouncescroll && y.railh.visibility) ||
                      (0 > y.newscrollx
                        ? (y.newscrollx = 0)
                        : y.newscrollx > y.page.maxw &&
                          (y.newscrollx = y.page.maxw)),
                    (y.dst = {}),
                    (y.dst.x = t - n),
                    (y.dst.y = e - o),
                    (y.dst.px = n),
                    (y.dst.py = o);
                  var s = Math.round(
                    Math.sqrt(Math.pow(y.dst.x, 2) + Math.pow(y.dst.y, 2))
                  );
                  (y.dst.ax = y.dst.x / s), (y.dst.ay = y.dst.y / s);
                  var r = 0,
                    a = s;
                  if (
                    (0 == y.dst.x
                      ? ((r = o), (a = e), (y.dst.ay = 1), (y.dst.py = 0))
                      : 0 == y.dst.y &&
                        ((r = n), (a = t), (y.dst.ax = 1), (y.dst.px = 0)),
                    (s = y.getTransitionSpeed(s)),
                    i && 1 >= i && (s *= i),
                    (y.bzscroll =
                      0 < s &&
                      (y.bzscroll
                        ? y.bzscroll.update(a, s)
                        : new BezierClass(r, a, s, 0, 1, 0, 1))),
                    !y.timer)
                  ) {
                    ((o == y.page.maxh && e >= y.page.maxh) ||
                      (n == y.page.maxw && t >= y.page.maxw)) &&
                      y.checkContentSize();
                    var h = 1;
                    (y.cancelAnimationFrame = !1),
                      (y.timer = 1),
                      y.onscrollstart &&
                        !y.scrollrunning &&
                        y.onscrollstart.call(y, {
                          type: "scrollstart",
                          current: { x: n, y: o },
                          request: { x: t, y: e },
                          end: { x: y.newscrollx, y: y.newscrolly },
                          speed: s,
                        }),
                      (function t() {
                        if (y.cancelAnimationFrame) return !0;
                        if (((y.scrollrunning = !0), (h = 1 - h)))
                          return (y.timer = l(t) || 1);
                        var e = 0,
                          i = (sy = y.getScrollTop());
                        if (y.dst.ay) {
                          var o =
                            (i = y.bzscroll
                              ? y.dst.py + y.bzscroll.getNow() * y.dst.ay
                              : y.newscrolly) - sy;
                          ((0 > o && i < y.newscrolly) ||
                            (0 < o && i > y.newscrolly)) &&
                            (i = y.newscrolly),
                            y.setScrollTop(i),
                            i == y.newscrolly && (e = 1);
                        } else e = 1;
                        var n = (sx = y.getScrollLeft());
                        y.dst.ax
                          ? (((0 >
                              (o =
                                (n = y.bzscroll
                                  ? y.dst.px + y.bzscroll.getNow() * y.dst.ax
                                  : y.newscrollx) - sx) &&
                              n < y.newscrollx) ||
                              (0 < o && n > y.newscrollx)) &&
                              (n = y.newscrollx),
                            y.setScrollLeft(n),
                            n == y.newscrollx && (e += 1))
                          : (e += 1),
                          2 == e
                            ? ((y.timer = 0),
                              (y.cursorfreezed = !1),
                              (y.bzscroll = !1),
                              (y.scrollrunning = !1),
                              0 > i
                                ? (i = 0)
                                : i > y.page.maxh && (i = y.page.maxh),
                              0 > n
                                ? (n = 0)
                                : n > y.page.maxw && (n = y.page.maxw),
                              n != y.newscrollx || i != y.newscrolly
                                ? y.doScrollPos(n, i)
                                : y.onscrollend &&
                                  y.onscrollend.call(y, {
                                    type: "scrollend",
                                    current: { x: sx, y: sy },
                                    end: { x: y.newscrollx, y: y.newscrolly },
                                  }))
                            : (y.timer = l(t) || 1);
                      })(),
                      ((o == y.page.maxh && e >= o) ||
                        (n == y.page.maxw && t >= n)) &&
                        y.checkContentSize(),
                      y.noticeCursor();
                  }
                }),
                (this.cancelScroll = function () {
                  return (
                    y.timer && c(y.timer),
                    (y.timer = 0),
                    (y.bzscroll = !1),
                    (y.scrollrunning = !1),
                    y
                  );
                }))
            : ((this.doScrollLeft = function (t, e) {
                var i = y.getScrollTop();
                y.doScrollPos(t, i, e);
              }),
              (this.doScrollTop = function (t, e) {
                var i = y.getScrollLeft();
                y.doScrollPos(i, t, e);
              }),
              (this.doScrollPos = function (t, e, i) {
                var o = t > y.page.maxw ? y.page.maxw : t;
                0 > o && (o = 0);
                var n = e > y.page.maxh ? y.page.maxh : e;
                0 > n && (n = 0),
                  y.synched("scroll", function () {
                    y.setScrollTop(n), y.setScrollLeft(o);
                  });
              }),
              (this.cancelScroll = function () {})),
          (this.doScrollBy = function (t, e) {
            var i = 0;
            i = e
              ? Math.floor((y.scroll.y - t) * y.scrollratio.y)
              : (y.timer ? y.newscrolly : y.getScrollTop(!0)) - t;
            if (y.bouncescroll) {
              var o = Math.round(y.view.h / 2);
              i < -o ? (i = -o) : i > y.page.maxh + o && (i = y.page.maxh + o);
            }
            return (
              (y.cursorfreezed = !1),
              (py = y.getScrollTop(!0)),
              0 > i && 0 >= py
                ? y.noticeCursor()
                : i > y.page.maxh && py >= y.page.maxh
                ? (y.checkContentSize(), y.noticeCursor())
                : void y.doScrollTop(i)
            );
          }),
          (this.doScrollLeftBy = function (t, e) {
            var i = 0;
            i = e
              ? Math.floor((y.scroll.x - t) * y.scrollratio.x)
              : (y.timer ? y.newscrollx : y.getScrollLeft(!0)) - t;
            if (y.bouncescroll) {
              var o = Math.round(y.view.w / 2);
              i < -o ? (i = -o) : i > y.page.maxw + o && (i = y.page.maxw + o);
            }
            if (
              ((y.cursorfreezed = !1),
              (px = y.getScrollLeft(!0)),
              (0 > i && 0 >= px) || (i > y.page.maxw && px >= y.page.maxw))
            )
              return y.noticeCursor();
            y.doScrollLeft(i);
          }),
          (this.doScrollTo = function (t, e) {
            e && Math.round(t * y.scrollratio.y),
              (y.cursorfreezed = !1),
              y.doScrollTop(t);
          }),
          (this.checkContentSize = function () {
            var t = y.getContentSize();
            (t.h != y.page.h || t.w != y.page.w) && y.resize(!1, t);
          }),
          (y.onscroll = function (t) {
            y.rail.drag ||
              y.cursorfreezed ||
              y.synched("scroll", function () {
                (y.scroll.y = Math.round(
                  y.getScrollTop() * (1 / y.scrollratio.y)
                )),
                  y.railh &&
                    (y.scroll.x = Math.round(
                      y.getScrollLeft() * (1 / y.scrollratio.x)
                    )),
                  y.noticeCursor();
              });
          }),
          y.bind(y.docscroll, "scroll", y.onscroll),
          (this.doZoomIn = function (e) {
            if (!y.zoomactive) {
              (y.zoomactive = !0), (y.zoomrestore = { style: {} });
              var i,
                o =
                  "position top left zIndex backgroundColor marginTop marginBottom marginLeft marginRight".split(
                    " "
                  ),
                n = y.win[0].style;
              for (i in o) {
                var r = o[i];
                y.zoomrestore.style[r] = void 0 !== n[r] ? n[r] : "";
              }
              return (
                (y.zoomrestore.style.width = y.win.css("width")),
                (y.zoomrestore.style.height = y.win.css("height")),
                (y.zoomrestore.padding = {
                  w: y.win.outerWidth() - y.win.width(),
                  h: y.win.outerHeight() - y.win.height(),
                }),
                b.isios4 &&
                  ((y.zoomrestore.scrollTop = t(window).scrollTop()),
                  t(window).scrollTop(0)),
                y.win.css({
                  position: b.isios4 ? "absolute" : "fixed",
                  top: 0,
                  left: 0,
                  "z-index": s + 100,
                  margin: "0px",
                }),
                ("" == (o = y.win.css("backgroundColor")) ||
                  /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(o)) &&
                  y.win.css("backgroundColor", "#fff"),
                y.rail.css({ "z-index": s + 101 }),
                y.zoom.css({ "z-index": s + 102 }),
                y.zoom.css("backgroundPosition", "0px -18px"),
                y.resizeZoom(),
                y.onzoomin && y.onzoomin.call(y),
                y.cancelEvent(e)
              );
            }
          }),
          (this.doZoomOut = function (e) {
            if (y.zoomactive)
              return (
                (y.zoomactive = !1),
                y.win.css("margin", ""),
                y.win.css(y.zoomrestore.style),
                b.isios4 && t(window).scrollTop(y.zoomrestore.scrollTop),
                y.rail.css({ "z-index": y.zindex }),
                y.zoom.css({ "z-index": y.zindex }),
                (y.zoomrestore = !1),
                y.zoom.css("backgroundPosition", "0px 0px"),
                y.onResize(),
                y.onzoomout && y.onzoomout.call(y),
                y.cancelEvent(e)
              );
          }),
          (this.doZoom = function (t) {
            return y.zoomactive ? y.doZoomOut(t) : y.doZoomIn(t);
          }),
          (this.resizeZoom = function () {
            if (y.zoomactive) {
              var e = y.getScrollTop();
              y.win.css({
                width: t(window).width() - y.zoomrestore.padding.w + "px",
                height: t(window).height() - y.zoomrestore.padding.h + "px",
              }),
                y.onResize(),
                y.setScrollTop(Math.min(y.page.maxh, e));
            }
          }),
          this.init(),
          t.nicescroll.push(this);
      },
      m = function (t) {
        var e = this;
        (this.nc = t),
          (this.steptime =
            this.lasttime =
            this.speedy =
            this.speedx =
            this.lasty =
            this.lastx =
              0),
          (this.snapy = this.snapx = !1),
          (this.demuly = this.demulx = 0),
          (this.lastscrolly = this.lastscrollx = -1),
          (this.timer = this.chky = this.chkx = 0),
          (this.time = function () {
            return +new Date();
          }),
          (this.reset = function (t, i) {
            e.stop();
            var o = e.time();
            (e.steptime = 0),
              (e.lasttime = o),
              (e.speedx = 0),
              (e.speedy = 0),
              (e.lastx = t),
              (e.lasty = i),
              (e.lastscrollx = -1),
              (e.lastscrolly = -1);
          }),
          (this.update = function (t, i) {
            var o = e.time();
            (e.steptime = o - e.lasttime), (e.lasttime = o);
            o = i - e.lasty;
            var n = t - e.lastx,
              s = (s = e.nc.getScrollTop()) + o,
              r = (r = e.nc.getScrollLeft()) + n;
            (e.snapx = 0 > r || r > e.nc.page.maxw),
              (e.snapy = 0 > s || s > e.nc.page.maxh),
              (e.speedx = n),
              (e.speedy = o),
              (e.lastx = t),
              (e.lasty = i);
          }),
          (this.stop = function () {
            e.nc.unsynched("domomentum2d"),
              e.timer && clearTimeout(e.timer),
              (e.timer = 0),
              (e.lastscrollx = -1),
              (e.lastscrolly = -1);
          }),
          (this.doSnapy = function (t, i) {
            var o = !1;
            0 > i
              ? ((i = 0), (o = !0))
              : i > e.nc.page.maxh && ((i = e.nc.page.maxh), (o = !0)),
              0 > t
                ? ((t = 0), (o = !0))
                : t > e.nc.page.maxw && ((t = e.nc.page.maxw), (o = !0)),
              o && e.nc.doScrollPos(t, i, e.nc.opt.snapbackspeed);
          }),
          (this.doMomentum = function (t) {
            var i = e.time(),
              o = t ? i + t : e.lasttime;
            t = e.nc.getScrollLeft();
            var n = e.nc.getScrollTop(),
              s = e.nc.page.maxh,
              r = e.nc.page.maxw;
            if (
              ((e.speedx = 0 < r ? Math.min(60, e.speedx) : 0),
              (e.speedy = 0 < s ? Math.min(60, e.speedy) : 0),
              (o = o && 50 >= i - o),
              (0 > n || n > s || 0 > t || t > r) && (o = !1),
              (t = !(!e.speedx || !o) && e.speedx),
              (e.speedy && o && e.speedy) || t)
            ) {
              var a = Math.max(16, e.steptime);
              50 < a &&
                ((t = a / 50), (e.speedx *= t), (e.speedy *= t), (a = 50)),
                (e.demulxy = 0),
                (e.lastscrollx = e.nc.getScrollLeft()),
                (e.chkx = e.lastscrollx),
                (e.lastscrolly = e.nc.getScrollTop()),
                (e.chky = e.lastscrolly);
              var l = e.lastscrollx,
                c = e.lastscrolly,
                h = function () {
                  var t = 600 < e.time() - i ? 0.04 : 0.02;
                  e.speedx &&
                    ((l = Math.floor(
                      e.lastscrollx - e.speedx * (1 - e.demulxy)
                    )),
                    (e.lastscrollx = l),
                    0 > l || l > r) &&
                    (t = 0.1),
                    e.speedy &&
                      ((c = Math.floor(
                        e.lastscrolly - e.speedy * (1 - e.demulxy)
                      )),
                      (e.lastscrolly = c),
                      0 > c || c > s) &&
                      (t = 0.1),
                    (e.demulxy = Math.min(1, e.demulxy + t)),
                    e.nc.synched("domomentum2d", function () {
                      e.speedx &&
                        (e.nc.getScrollLeft() != e.chkx && e.stop(),
                        (e.chkx = l),
                        e.nc.setScrollLeft(l)),
                        e.speedy &&
                          (e.nc.getScrollTop() != e.chky && e.stop(),
                          (e.chky = c),
                          e.nc.setScrollTop(c)),
                        e.timer || (e.nc.hideCursor(), e.doSnapy(l, c));
                    }),
                    1 > e.demulxy
                      ? (e.timer = setTimeout(h, a))
                      : (e.stop(), e.nc.hideCursor(), e.doSnapy(l, c));
                };
              h();
            } else e.doSnapy(e.nc.getScrollLeft(), e.nc.getScrollTop());
          });
      },
      f = t.fn.scrollTop;
    (t.cssHooks.pageYOffset = {
      get: function (e, i, o) {
        return (i = t.data(e, "__nicescroll") || !1) && i.ishwscroll
          ? i.getScrollTop()
          : f.call(e);
      },
      set: function (e, i) {
        var o = t.data(e, "__nicescroll") || !1;
        return (
          o && o.ishwscroll ? o.setScrollTop(parseInt(i)) : f.call(e, i), this
        );
      },
    }),
      (t.fn.scrollTop = function (e) {
        if (void 0 === e) {
          var i = (this[0] && t.data(this[0], "__nicescroll")) || !1;
          return i && i.ishwscroll ? i.getScrollTop() : f.call(this);
        }
        return this.each(function () {
          var i = t.data(this, "__nicescroll") || !1;
          i && i.ishwscroll ? i.setScrollTop(parseInt(e)) : f.call(t(this), e);
        });
      });
    var g = t.fn.scrollLeft;
    (t.cssHooks.pageXOffset = {
      get: function (e, i, o) {
        return (i = t.data(e, "__nicescroll") || !1) && i.ishwscroll
          ? i.getScrollLeft()
          : g.call(e);
      },
      set: function (e, i) {
        var o = t.data(e, "__nicescroll") || !1;
        return (
          o && o.ishwscroll ? o.setScrollLeft(parseInt(i)) : g.call(e, i), this
        );
      },
    }),
      (t.fn.scrollLeft = function (e) {
        if (void 0 === e) {
          var i = (this[0] && t.data(this[0], "__nicescroll")) || !1;
          return i && i.ishwscroll ? i.getScrollLeft() : g.call(this);
        }
        return this.each(function () {
          var i = t.data(this, "__nicescroll") || !1;
          i && i.ishwscroll ? i.setScrollLeft(parseInt(e)) : g.call(t(this), e);
        });
      });
    var v = function (e) {
      var i = this;
      if (
        ((this.length = 0),
        (this.name = "nicescrollarray"),
        (this.each = function (t) {
          for (var e = 0; e < i.length; e++) t.call(i[e]);
          return i;
        }),
        (this.push = function (t) {
          (i[i.length] = t), i.length++;
        }),
        (this.eq = function (t) {
          return i[t];
        }),
        e)
      )
        for (a = 0; a < e.length; a++) {
          var o = t.data(e[a], "__nicescroll") || !1;
          o && ((this[this.length] = o), this.length++);
        }
      return this;
    };
    !(function (t, e, i) {
      for (var o = 0; o < e.length; o++) i(t, e[o]);
    })(
      v.prototype,
      "show hide toggle onResize resize remove stop doScrollPos".split(" "),
      function (t, e) {
        t[e] = function () {
          var t = arguments;
          return this.each(function () {
            this[e].apply(this, t);
          });
        };
      }
    ),
      (t.fn.getNiceScroll = function (e) {
        return void 0 === e
          ? new v(this)
          : t.data(this[e], "__nicescroll") || !1;
      }),
      t.extend(t.expr[":"], {
        nicescroll: function (e) {
          return !!t.data(e, "__nicescroll");
        },
      }),
      (t.fn.niceScroll = function (e, i) {
        void 0 === i &&
          "object" == typeof e &&
          !("jquery" in e) &&
          ((i = e), (e = !1));
        var o = new v();
        void 0 === i && (i = {}), e && ((i.doc = t(e)), (i.win = t(this)));
        var n = !("doc" in i);
        return (
          !n && !("win" in i) && (i.win = t(this)),
          this.each(function () {
            var e = t(this).data("__nicescroll") || !1;
            e ||
              ((i.doc = n ? t(this) : i.doc),
              (e = new p(i, t(this))),
              t(this).data("__nicescroll", e)),
              o.push(e);
          }),
          1 == o.length ? o[0] : o
        );
      }),
      (window.NiceScroll = {
        getjQuery: function () {
          return t;
        },
      }),
      t.nicescroll || ((t.nicescroll = new v()), (t.nicescroll.options = d));
  })(jQuery),
  (function (t) {
    "function" == typeof define && define.amd
      ? define(["jquery"], t)
      : t(
          "object" == typeof exports
            ? require("jquery")
            : window.jQuery || window.Zepto
        );
  })(function (t) {
    var e,
      i,
      o,
      n,
      s,
      r,
      a = "Close",
      l = "BeforeClose",
      c = "MarkupParse",
      h = "Open",
      d = "Change",
      u = "mfp",
      p = "." + u,
      m = "mfp-ready",
      f = "mfp-removing",
      g = "mfp-prevent-close",
      v = function () {},
      y = !!window.jQuery,
      w = t(window),
      b = function (t, i) {
        e.ev.on(u + t + p, i);
      },
      x = function (e, i, o, n) {
        var s = document.createElement("div");
        return (
          (s.className = "mfp-" + e),
          o && (s.innerHTML = o),
          n ? i && i.appendChild(s) : ((s = t(s)), i && s.appendTo(i)),
          s
        );
      },
      _ = function (i, o) {
        e.ev.triggerHandler(u + i, o),
          e.st.callbacks &&
            ((i = i.charAt(0).toLowerCase() + i.slice(1)),
            e.st.callbacks[i] &&
              e.st.callbacks[i].apply(e, t.isArray(o) ? o : [o]));
      },
      T = function (i) {
        return (
          (i === r && e.currTemplate.closeBtn) ||
            ((e.currTemplate.closeBtn = t(
              e.st.closeMarkup.replace("%title%", e.st.tClose)
            )),
            (r = i)),
          e.currTemplate.closeBtn
        );
      },
      z = function () {
        t.magnificPopup.instance ||
          ((e = new v()).init(), (t.magnificPopup.instance = e));
      };
    (v.prototype = {
      constructor: v,
      init: function () {
        var i = navigator.appVersion;
        (e.isLowIE = e.isIE8 = document.all && !document.addEventListener),
          (e.isAndroid = /android/gi.test(i)),
          (e.isIOS = /iphone|ipad|ipod/gi.test(i)),
          (e.supportsTransition = (function () {
            var t = document.createElement("p").style,
              e = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== t.transition) return !0;
            for (; e.length; ) if (e.pop() + "Transition" in t) return !0;
            return !1;
          })()),
          (e.probablyMobile =
            e.isAndroid ||
            e.isIOS ||
            /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(
              navigator.userAgent
            )),
          (o = t(document)),
          (e.popupsCache = {});
      },
      open: function (i) {
        var n;
        if (!1 === i.isObj) {
          (e.items = i.items.toArray()), (e.index = 0);
          var r,
            a = i.items;
          for (n = 0; n < a.length; n++)
            if (((r = a[n]).parsed && (r = r.el[0]), r === i.el[0])) {
              e.index = n;
              break;
            }
        } else
          (e.items = t.isArray(i.items) ? i.items : [i.items]),
            (e.index = i.index || 0);
        if (!e.isOpen) {
          (e.types = []),
            (s = ""),
            i.mainEl && i.mainEl.length ? (e.ev = i.mainEl.eq(0)) : (e.ev = o),
            i.key
              ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}),
                (e.currTemplate = e.popupsCache[i.key]))
              : (e.currTemplate = {}),
            (e.st = t.extend(!0, {}, t.magnificPopup.defaults, i)),
            (e.fixedContentPos =
              "auto" === e.st.fixedContentPos
                ? !e.probablyMobile
                : e.st.fixedContentPos),
            e.st.modal &&
              ((e.st.closeOnContentClick = !1),
              (e.st.closeOnBgClick = !1),
              (e.st.showCloseBtn = !1),
              (e.st.enableEscapeKey = !1)),
            e.bgOverlay ||
              ((e.bgOverlay = x("bg").on("click" + p, function () {
                e.close();
              })),
              (e.wrap = x("wrap")
                .attr("tabindex", -1)
                .on("click" + p, function (t) {
                  e._checkIfClose(t.target) && e.close();
                })),
              (e.container = x("container", e.wrap))),
            (e.contentContainer = x("content")),
            e.st.preloader &&
              (e.preloader = x("preloader", e.container, e.st.tLoading));
          var l = t.magnificPopup.modules;
          for (n = 0; n < l.length; n++) {
            var d = l[n];
            (d = d.charAt(0).toUpperCase() + d.slice(1)), e["init" + d].call(e);
          }
          _("BeforeOpen"),
            e.st.showCloseBtn &&
              (e.st.closeBtnInside
                ? (b(c, function (t, e, i, o) {
                    i.close_replaceWith = T(o.type);
                  }),
                  (s += " mfp-close-btn-in"))
                : e.wrap.append(T())),
            e.st.alignTop && (s += " mfp-align-top"),
            e.fixedContentPos
              ? e.wrap.css({
                  overflow: e.st.overflowY,
                  overflowX: "hidden",
                  overflowY: e.st.overflowY,
                })
              : e.wrap.css({ top: w.scrollTop(), position: "absolute" }),
            (!1 === e.st.fixedBgPos ||
              ("auto" === e.st.fixedBgPos && !e.fixedContentPos)) &&
              e.bgOverlay.css({ height: o.height(), position: "absolute" }),
            e.st.enableEscapeKey &&
              o.on("keyup" + p, function (t) {
                27 === t.keyCode && e.close();
              }),
            w.on("resize" + p, function () {
              e.updateSize();
            }),
            e.st.closeOnContentClick || (s += " mfp-auto-cursor"),
            s && e.wrap.addClass(s);
          var u = (e.wH = w.height()),
            f = {};
          if (e.fixedContentPos && e._hasScrollBar(u)) {
            var g = e._getScrollbarSize();
            g && (f.marginRight = g);
          }
          e.fixedContentPos &&
            (e.isIE7
              ? t("body, html").css("overflow", "hidden")
              : (f.overflow = "hidden"));
          var v = e.st.mainClass;
          return (
            e.isIE7 && (v += " mfp-ie7"),
            v && e._addClassToMFP(v),
            e.updateItemHTML(),
            _("BuildControls"),
            t("html").css(f),
            e.bgOverlay
              .add(e.wrap)
              .prependTo(e.st.prependTo || t(document.body)),
            (e._lastFocusedEl = document.activeElement),
            setTimeout(function () {
              e.content
                ? (e._addClassToMFP(m), e._setFocus())
                : e.bgOverlay.addClass(m),
                o.on("focusin" + p, e._onFocusIn);
            }, 16),
            (e.isOpen = !0),
            e.updateSize(u),
            _(h),
            i
          );
        }
        e.updateItemHTML();
      },
      close: function () {
        e.isOpen &&
          (_(l),
          (e.isOpen = !1),
          e.st.removalDelay && !e.isLowIE && e.supportsTransition
            ? (e._addClassToMFP(f),
              setTimeout(function () {
                e._close();
              }, e.st.removalDelay))
            : e._close());
      },
      _close: function () {
        _(a);
        var i = f + " " + m + " ";
        if (
          (e.bgOverlay.detach(),
          e.wrap.detach(),
          e.container.empty(),
          e.st.mainClass && (i += e.st.mainClass + " "),
          e._removeClassFromMFP(i),
          e.fixedContentPos)
        ) {
          var n = { marginRight: "" };
          e.isIE7 ? t("body, html").css("overflow", "") : (n.overflow = ""),
            t("html").css(n);
        }
        o.off("keyup.mfp focusin" + p),
          e.ev.off(p),
          e.wrap.attr("class", "mfp-wrap").removeAttr("style"),
          e.bgOverlay.attr("class", "mfp-bg"),
          e.container.attr("class", "mfp-container"),
          !e.st.showCloseBtn ||
            (e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type]) ||
            (e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach()),
          e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(),
          (e.currItem = null),
          (e.content = null),
          (e.currTemplate = null),
          (e.prevHeight = 0),
          _("AfterClose");
      },
      updateSize: function (t) {
        if (e.isIOS) {
          var i = document.documentElement.clientWidth / window.innerWidth,
            o = window.innerHeight * i;
          e.wrap.css("height", o), (e.wH = o);
        } else e.wH = t || w.height();
        e.fixedContentPos || e.wrap.css("height", e.wH), _("Resize");
      },
      updateItemHTML: function () {
        var i = e.items[e.index];
        e.contentContainer.detach(),
          e.content && e.content.detach(),
          i.parsed || (i = e.parseEl(e.index));
        var o = i.type;
        if (
          (_("BeforeChange", [e.currItem ? e.currItem.type : "", o]),
          (e.currItem = i),
          !e.currTemplate[o])
        ) {
          var s = !!e.st[o] && e.st[o].markup;
          _("FirstMarkupParse", s), (e.currTemplate[o] = !s || t(s));
        }
        n && n !== i.type && e.container.removeClass("mfp-" + n + "-holder");
        var r = e["get" + o.charAt(0).toUpperCase() + o.slice(1)](
          i,
          e.currTemplate[o]
        );
        e.appendContent(r, o),
          (i.preloaded = !0),
          _(d, i),
          (n = i.type),
          e.container.prepend(e.contentContainer),
          _("AfterChange");
      },
      appendContent: function (t, i) {
        (e.content = t),
          t
            ? e.st.showCloseBtn &&
              e.st.closeBtnInside &&
              !0 === e.currTemplate[i]
              ? e.content.find(".mfp-close").length || e.content.append(T())
              : (e.content = t)
            : (e.content = ""),
          _("BeforeAppend"),
          e.container.addClass("mfp-" + i + "-holder"),
          e.contentContainer.append(e.content);
      },
      parseEl: function (i) {
        var o,
          n = e.items[i];
        if (
          (n.tagName
            ? (n = { el: t(n) })
            : ((o = n.type), (n = { data: n, src: n.src })),
          n.el)
        ) {
          for (var s = e.types, r = 0; r < s.length; r++)
            if (n.el.hasClass("mfp-" + s[r])) {
              o = s[r];
              break;
            }
          (n.src = n.el.attr("data-mfp-src")),
            n.src || (n.src = n.el.attr("href"));
        }
        return (
          (n.type = o || e.st.type || "inline"),
          (n.index = i),
          (n.parsed = !0),
          (e.items[i] = n),
          _("ElementParse", n),
          e.items[i]
        );
      },
      addGroup: function (t, i) {
        var o = function (o) {
          (o.mfpEl = this), e._openClick(o, t, i);
        };
        i || (i = {});
        var n = "click.magnificPopup";
        (i.mainEl = t),
          i.items
            ? ((i.isObj = !0), t.off(n).on(n, o))
            : ((i.isObj = !1),
              i.delegate
                ? t.off(n).on(n, i.delegate, o)
                : ((i.items = t), t.off(n).on(n, o)));
      },
      _openClick: function (i, o, n) {
        if (
          (void 0 !== n.midClick
            ? n.midClick
            : t.magnificPopup.defaults.midClick) ||
          !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)
        ) {
          var s =
            void 0 !== n.disableOn
              ? n.disableOn
              : t.magnificPopup.defaults.disableOn;
          if (s)
            if (t.isFunction(s)) {
              if (!s.call(e)) return !0;
            } else if (w.width() < s) return !0;
          i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()),
            (n.el = t(i.mfpEl)),
            n.delegate && (n.items = o.find(n.delegate)),
            e.open(n);
        }
      },
      updateStatus: function (t, o) {
        if (e.preloader) {
          i !== t && e.container.removeClass("mfp-s-" + i),
            o || "loading" !== t || (o = e.st.tLoading);
          var n = { status: t, text: o };
          _("UpdateStatus", n),
            (t = n.status),
            (o = n.text),
            e.preloader.html(o),
            e.preloader.find("a").on("click", function (t) {
              t.stopImmediatePropagation();
            }),
            e.container.addClass("mfp-s-" + t),
            (i = t);
        }
      },
      _checkIfClose: function (i) {
        if (!t(i).hasClass(g)) {
          var o = e.st.closeOnContentClick,
            n = e.st.closeOnBgClick;
          if (o && n) return !0;
          if (
            !e.content ||
            t(i).hasClass("mfp-close") ||
            (e.preloader && i === e.preloader[0])
          )
            return !0;
          if (i === e.content[0] || t.contains(e.content[0], i)) {
            if (o) return !0;
          } else if (n && t.contains(document, i)) return !0;
          return !1;
        }
      },
      _addClassToMFP: function (t) {
        e.bgOverlay.addClass(t), e.wrap.addClass(t);
      },
      _removeClassFromMFP: function (t) {
        this.bgOverlay.removeClass(t), e.wrap.removeClass(t);
      },
      _hasScrollBar: function (t) {
        return (
          (e.isIE7 ? o.height() : document.body.scrollHeight) >
          (t || w.height())
        );
      },
      _setFocus: function () {
        (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus();
      },
      _onFocusIn: function (i) {
        return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target)
          ? void 0
          : (e._setFocus(), !1);
      },
      _parseMarkup: function (e, i, o) {
        var n;
        o.data && (i = t.extend(o.data, i)),
          _(c, [e, i, o]),
          t.each(i, function (i, o) {
            if (void 0 === o || !1 === o) return !0;
            if ((n = i.split("_")).length > 1) {
              var s = e.find(p + "-" + n[0]);
              if (s.length > 0) {
                var r = n[1];
                "replaceWith" === r
                  ? s[0] !== o[0] && s.replaceWith(o)
                  : "img" === r
                  ? s.is("img")
                    ? s.attr("src", o)
                    : s.replaceWith(
                        t("<img>").attr("src", o).attr("class", s.attr("class"))
                      )
                  : s.attr(n[1], o);
              }
            } else e.find(p + "-" + i).html(o);
          });
      },
      _getScrollbarSize: function () {
        if (void 0 === e.scrollbarSize) {
          var t = document.createElement("div");
          (t.style.cssText =
            "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;"),
            document.body.appendChild(t),
            (e.scrollbarSize = t.offsetWidth - t.clientWidth),
            document.body.removeChild(t);
        }
        return e.scrollbarSize;
      },
    }),
      (t.magnificPopup = {
        instance: null,
        proto: v.prototype,
        modules: [],
        open: function (e, i) {
          return (
            z(),
            ((e = e ? t.extend(!0, {}, e) : {}).isObj = !0),
            (e.index = i || 0),
            this.instance.open(e)
          );
        },
        close: function () {
          return t.magnificPopup.instance && t.magnificPopup.instance.close();
        },
        registerModule: function (e, i) {
          i.options && (t.magnificPopup.defaults[e] = i.options),
            t.extend(this.proto, i.proto),
            this.modules.push(e);
        },
        defaults: {
          disableOn: 0,
          key: null,
          midClick: !1,
          mainClass: "",
          preloader: !0,
          focus: "",
          closeOnContentClick: !1,
          closeOnBgClick: !0,
          closeBtnInside: !0,
          showCloseBtn: !0,
          enableEscapeKey: !0,
          modal: !1,
          alignTop: !1,
          removalDelay: 0,
          prependTo: null,
          fixedContentPos: "auto",
          fixedBgPos: "auto",
          overflowY: "auto",
          closeMarkup:
            '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
          tClose: "Close (Esc)",
          tLoading: "Loading...",
          autoFocusLast: !0,
        },
      }),
      (t.fn.magnificPopup = function (i) {
        z();
        var o = t(this);
        if ("string" == typeof i)
          if ("open" === i) {
            var n,
              s = y ? o.data("magnificPopup") : o[0].magnificPopup,
              r = parseInt(arguments[1], 10) || 0;
            s.items
              ? (n = s.items[r])
              : ((n = o),
                s.delegate && (n = n.find(s.delegate)),
                (n = n.eq(r))),
              e._openClick({ mfpEl: n }, o, s);
          } else
            e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1));
        else
          (i = t.extend(!0, {}, i)),
            y ? o.data("magnificPopup", i) : (o[0].magnificPopup = i),
            e.addGroup(o, i);
        return o;
      });
    var S,
      E,
      C,
      k = "inline",
      I = function () {
        C && (E.after(C.addClass(S)).detach(), (C = null));
      };
    t.magnificPopup.registerModule(k, {
      options: {
        hiddenClass: "hide",
        markup: "",
        tNotFound: "Content not found",
      },
      proto: {
        initInline: function () {
          e.types.push(k),
            b(a + "." + k, function () {
              I();
            });
        },
        getInline: function (i, o) {
          if ((I(), i.src)) {
            var n = e.st.inline,
              s = t(i.src);
            if (s.length) {
              var r = s[0].parentNode;
              r &&
                r.tagName &&
                (E || ((S = n.hiddenClass), (E = x(S)), (S = "mfp-" + S)),
                (C = s.after(E).detach().removeClass(S))),
                e.updateStatus("ready");
            } else e.updateStatus("error", n.tNotFound), (s = t("<div>"));
            return (i.inlineElement = s), s;
          }
          return e.updateStatus("ready"), e._parseMarkup(o, {}, i), o;
        },
      },
    });
    var M,
      P = "ajax",
      A = function () {
        M && t(document.body).removeClass(M);
      },
      R = function () {
        A(), e.req && e.req.abort();
      };
    t.magnificPopup.registerModule(P, {
      options: {
        settings: null,
        cursor: "mfp-ajax-cur",
        tError: '<a href="%url%">The content</a> could not be loaded.',
      },
      proto: {
        initAjax: function () {
          e.types.push(P),
            (M = e.st.ajax.cursor),
            b(a + "." + P, R),
            b("BeforeChange." + P, R);
        },
        getAjax: function (i) {
          M && t(document.body).addClass(M), e.updateStatus("loading");
          var o = t.extend(
            {
              url: i.src,
              success: function (o, n, s) {
                var r = { data: o, xhr: s };
                _("ParseAjax", r),
                  e.appendContent(t(r.data), P),
                  (i.finished = !0),
                  A(),
                  e._setFocus(),
                  setTimeout(function () {
                    e.wrap.addClass(m);
                  }, 16),
                  e.updateStatus("ready"),
                  _("AjaxContentAdded");
              },
              error: function () {
                A(),
                  (i.finished = i.loadError = !0),
                  e.updateStatus(
                    "error",
                    e.st.ajax.tError.replace("%url%", i.src)
                  );
              },
            },
            e.st.ajax.settings
          );
          return (e.req = t.ajax(o)), "";
        },
      },
    });
    var L,
      F = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var o = e.st.image.titleSrc;
        if (o) {
          if (t.isFunction(o)) return o.call(e, i);
          if (i.el) return i.el.attr(o) || "";
        }
        return "";
      };
    t.magnificPopup.registerModule("image", {
      options: {
        markup:
          '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
        cursor: "mfp-zoom-out-cur",
        titleSrc: "title",
        verticalFit: !0,
        tError: '<a href="%url%">The image</a> could not be loaded.',
      },
      proto: {
        initImage: function () {
          var i = e.st.image,
            o = ".image";
          e.types.push("image"),
            b(h + o, function () {
              "image" === e.currItem.type &&
                i.cursor &&
                t(document.body).addClass(i.cursor);
            }),
            b(a + o, function () {
              i.cursor && t(document.body).removeClass(i.cursor),
                w.off("resize" + p);
            }),
            b("Resize" + o, e.resizeImage),
            e.isLowIE && b("AfterChange", e.resizeImage);
        },
        resizeImage: function () {
          var t = e.currItem;
          if (t && t.img && e.st.image.verticalFit) {
            var i = 0;
            e.isLowIE &&
              (i =
                parseInt(t.img.css("padding-top"), 10) +
                parseInt(t.img.css("padding-bottom"), 10)),
              t.img.css("max-height", e.wH - i);
          }
        },
        _onImageHasSize: function (t) {
          t.img &&
            ((t.hasSize = !0),
            L && clearInterval(L),
            (t.isCheckingImgSize = !1),
            _("ImageHasSize", t),
            t.imgHidden &&
              (e.content && e.content.removeClass("mfp-loading"),
              (t.imgHidden = !1)));
        },
        findImageSize: function (t) {
          var i = 0,
            o = t.img[0],
            n = function (s) {
              L && clearInterval(L),
                (L = setInterval(function () {
                  return o.naturalWidth > 0
                    ? void e._onImageHasSize(t)
                    : (i > 200 && clearInterval(L),
                      void (3 === ++i
                        ? n(10)
                        : 40 === i
                        ? n(50)
                        : 100 === i && n(500)));
                }, s));
            };
          n(1);
        },
        getImage: function (i, o) {
          var n = 0,
            s = function () {
              i &&
                (i.img[0].complete
                  ? (i.img.off(".mfploader"),
                    i === e.currItem &&
                      (e._onImageHasSize(i), e.updateStatus("ready")),
                    (i.hasSize = !0),
                    (i.loaded = !0),
                    _("ImageLoadComplete"))
                  : 200 > ++n
                  ? setTimeout(s, 100)
                  : r());
            },
            r = function () {
              i &&
                (i.img.off(".mfploader"),
                i === e.currItem &&
                  (e._onImageHasSize(i),
                  e.updateStatus("error", a.tError.replace("%url%", i.src))),
                (i.hasSize = !0),
                (i.loaded = !0),
                (i.loadError = !0));
            },
            a = e.st.image,
            l = o.find(".mfp-img");
          if (l.length) {
            var c = document.createElement("img");
            (c.className = "mfp-img"),
              i.el &&
                i.el.find("img").length &&
                (c.alt = i.el.find("img").attr("alt")),
              (i.img = t(c).on("load.mfploader", s).on("error.mfploader", r)),
              (c.src = i.src),
              l.is("img") && (i.img = i.img.clone()),
              (c = i.img[0]).naturalWidth > 0
                ? (i.hasSize = !0)
                : c.width || (i.hasSize = !1);
          }
          return (
            e._parseMarkup(o, { title: F(i), img_replaceWith: i.img }, i),
            e.resizeImage(),
            i.hasSize
              ? (L && clearInterval(L),
                i.loadError
                  ? (o.addClass("mfp-loading"),
                    e.updateStatus("error", a.tError.replace("%url%", i.src)))
                  : (o.removeClass("mfp-loading"), e.updateStatus("ready")),
                o)
              : (e.updateStatus("loading"),
                (i.loading = !0),
                i.hasSize ||
                  ((i.imgHidden = !0),
                  o.addClass("mfp-loading"),
                  e.findImageSize(i)),
                o)
          );
        },
      },
    });
    var O;
    t.magnificPopup.registerModule("zoom", {
      options: {
        enabled: !1,
        easing: "ease-in-out",
        duration: 300,
        opener: function (t) {
          return t.is("img") ? t : t.find("img");
        },
      },
      proto: {
        initZoom: function () {
          var t,
            i = e.st.zoom,
            o = ".zoom";
          if (i.enabled && e.supportsTransition) {
            var n,
              s,
              r = i.duration,
              c = function (t) {
                var e = t
                    .clone()
                    .removeAttr("style")
                    .removeAttr("class")
                    .addClass("mfp-animated-image"),
                  o = "all " + i.duration / 1e3 + "s " + i.easing,
                  n = {
                    position: "fixed",
                    zIndex: 9999,
                    left: 0,
                    top: 0,
                    "-webkit-backface-visibility": "hidden",
                  },
                  s = "transition";
                return (
                  (n["-webkit-" + s] =
                    n["-moz-" + s] =
                    n["-o-" + s] =
                    n[s] =
                      o),
                  e.css(n),
                  e
                );
              },
              h = function () {
                e.content.css("visibility", "visible");
              };
            b("BuildControls" + o, function () {
              if (e._allowZoom()) {
                if (
                  (clearTimeout(n),
                  e.content.css("visibility", "hidden"),
                  !(t = e._getItemToZoom()))
                )
                  return void h();
                (s = c(t)).css(e._getOffset()),
                  e.wrap.append(s),
                  (n = setTimeout(function () {
                    s.css(e._getOffset(!0)),
                      (n = setTimeout(function () {
                        h(),
                          setTimeout(function () {
                            s.remove(), (t = s = null), _("ZoomAnimationEnded");
                          }, 16);
                      }, r));
                  }, 16));
              }
            }),
              b(l + o, function () {
                if (e._allowZoom()) {
                  if ((clearTimeout(n), (e.st.removalDelay = r), !t)) {
                    if (!(t = e._getItemToZoom())) return;
                    s = c(t);
                  }
                  s.css(e._getOffset(!0)),
                    e.wrap.append(s),
                    e.content.css("visibility", "hidden"),
                    setTimeout(function () {
                      s.css(e._getOffset());
                    }, 16);
                }
              }),
              b(a + o, function () {
                e._allowZoom() && (h(), s && s.remove(), (t = null));
              });
          }
        },
        _allowZoom: function () {
          return "image" === e.currItem.type;
        },
        _getItemToZoom: function () {
          return !!e.currItem.hasSize && e.currItem.img;
        },
        _getOffset: function (i) {
          var o,
            n = (o = i
              ? e.currItem.img
              : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
            s = parseInt(o.css("padding-top"), 10),
            r = parseInt(o.css("padding-bottom"), 10);
          n.top -= t(window).scrollTop() - s;
          var a = {
            width: o.width(),
            height: (y ? o.innerHeight() : o[0].offsetHeight) - r - s,
          };
          return (
            void 0 === O &&
              (O = void 0 !== document.createElement("p").style.MozTransform),
            O
              ? (a["-moz-transform"] = a.transform =
                  "translate(" + n.left + "px," + n.top + "px)")
              : ((a.left = n.left), (a.top = n.top)),
            a
          );
        },
      },
    });
    var D = "iframe",
      B = function (t) {
        if (e.currTemplate[D]) {
          var i = e.currTemplate[D].find("iframe");
          i.length &&
            (t || (i[0].src = "//about:blank"),
            e.isIE8 && i.css("display", t ? "block" : "none"));
        }
      };
    t.magnificPopup.registerModule(D, {
      options: {
        markup:
          '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
        srcAction: "iframe_src",
        patterns: {
          youtube: {
            index: "youtube.com",
            id: "v=",
            src: "//www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: { index: "//maps.google.", src: "%id%&output=embed" },
        },
      },
      proto: {
        initIframe: function () {
          e.types.push(D),
            b("BeforeChange", function (t, e, i) {
              e !== i && (e === D ? B() : i === D && B(!0));
            }),
            b(a + "." + D, function () {
              B();
            });
        },
        getIframe: function (i, o) {
          var n = i.src,
            s = e.st.iframe;
          t.each(s.patterns, function () {
            return n.indexOf(this.index) > -1
              ? (this.id &&
                  (n =
                    "string" == typeof this.id
                      ? n.substr(
                          n.lastIndexOf(this.id) + this.id.length,
                          n.length
                        )
                      : this.id.call(this, n)),
                (n = this.src.replace("%id%", n)),
                !1)
              : void 0;
          });
          var r = {};
          return (
            s.srcAction && (r[s.srcAction] = n),
            e._parseMarkup(o, r, i),
            e.updateStatus("ready"),
            o
          );
        },
      },
    });
    var W = function (t) {
        var i = e.items.length;
        return t > i - 1 ? t - i : 0 > t ? i + t : t;
      },
      j = function (t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i);
      };
    t.magnificPopup.registerModule("gallery", {
      options: {
        enabled: !1,
        arrowMarkup:
          '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
        preload: [0, 2],
        navigateByImgClick: !0,
        arrows: !0,
        tPrev: "Previous (Left arrow key)",
        tNext: "Next (Right arrow key)",
        tCounter: "%curr% of %total%",
      },
      proto: {
        initGallery: function () {
          var i = e.st.gallery,
            n = ".mfp-gallery";
          return (
            (e.direction = !0),
            !(!i || !i.enabled) &&
              ((s += " mfp-gallery"),
              b(h + n, function () {
                i.navigateByImgClick &&
                  e.wrap.on("click" + n, ".mfp-img", function () {
                    return e.items.length > 1 ? (e.next(), !1) : void 0;
                  }),
                  o.on("keydown" + n, function (t) {
                    37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next();
                  });
              }),
              b("UpdateStatus" + n, function (t, i) {
                i.text &&
                  (i.text = j(i.text, e.currItem.index, e.items.length));
              }),
              b(c + n, function (t, o, n, s) {
                var r = e.items.length;
                n.counter = r > 1 ? j(i.tCounter, s.index, r) : "";
              }),
              b("BuildControls" + n, function () {
                if (e.items.length > 1 && i.arrows && !e.arrowleft) {
                  var o = i.arrowMarkup,
                    n = (e.arrowLeft = t(
                      o.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")
                    ).addClass(g)),
                    s = (e.arrowRight = t(
                      o
                        .replace(/%title%/gi, i.tNext)
                        .replace(/%dir%/gi, "right")
                    ).addClass(g));
                  n.click(function () {
                    e.prev();
                  }),
                    s.click(function () {
                      e.next();
                    }),
                    e.container.append(n.add(s));
                }
              }),
              b(d + n, function () {
                e._preloadTimeout && clearTimeout(e._preloadTimeout),
                  (e._preloadTimeout = setTimeout(function () {
                    e.preloadNearbyImages(), (e._preloadTimeout = null);
                  }, 16));
              }),
              void b(a + n, function () {
                o.off(n),
                  e.wrap.off("click" + n),
                  (e.arrowRight = e.arrowLeft = null);
              }))
          );
        },
        next: function () {
          (e.direction = !0), (e.index = W(e.index + 1)), e.updateItemHTML();
        },
        prev: function () {
          (e.direction = !1), (e.index = W(e.index - 1)), e.updateItemHTML();
        },
        goTo: function (t) {
          (e.direction = t >= e.index), (e.index = t), e.updateItemHTML();
        },
        preloadNearbyImages: function () {
          var t,
            i = e.st.gallery.preload,
            o = Math.min(i[0], e.items.length),
            n = Math.min(i[1], e.items.length);
          for (t = 1; t <= (e.direction ? n : o); t++)
            e._preloadItem(e.index + t);
          for (t = 1; t <= (e.direction ? o : n); t++)
            e._preloadItem(e.index - t);
        },
        _preloadItem: function (i) {
          if (((i = W(i)), !e.items[i].preloaded)) {
            var o = e.items[i];
            o.parsed || (o = e.parseEl(i)),
              _("LazyLoad", o),
              "image" === o.type &&
                (o.img = t('<img class="mfp-img" />')
                  .on("load.mfploader", function () {
                    o.hasSize = !0;
                  })
                  .on("error.mfploader", function () {
                    (o.hasSize = !0), (o.loadError = !0), _("LazyLoadError", o);
                  })
                  .attr("src", o.src)),
              (o.preloaded = !0);
          }
        },
      },
    });
    var H = "retina";
    t.magnificPopup.registerModule(H, {
      options: {
        replaceSrc: function (t) {
          return t.src.replace(/\.\w+$/, function (t) {
            return "@2x" + t;
          });
        },
        ratio: 1,
      },
      proto: {
        initRetina: function () {
          if (window.devicePixelRatio > 1) {
            var t = e.st.retina,
              i = t.ratio;
            (i = isNaN(i) ? i() : i) > 1 &&
              (b("ImageHasSize." + H, function (t, e) {
                e.img.css({
                  "max-width": e.img[0].naturalWidth / i,
                  width: "100%",
                });
              }),
              b("ElementParse." + H, function (e, o) {
                o.src = t.replaceSrc(o, i);
              }));
          }
        },
      },
    }),
      z();
  }),
  jQuery(document).ready(function (t) {
    var e,
      o,
      n = 2500,
      s = 3800;
    function r(t) {
      var e = h(t);
      if (t.parents(".cd-headline").hasClass("type")) {
        var i = t.parent(".cd-words-wrapper");
        i.addClass("selected").removeClass("waiting"),
          setTimeout(function () {
            i.removeClass("selected"),
              t
                .removeClass("is-visible")
                .addClass("is-hidden")
                .children("i")
                .removeClass("in")
                .addClass("out");
          }, 500),
          setTimeout(function () {
            a(e, 150);
          }, 1300);
      } else if (t.parents(".cd-headline").hasClass("letters")) {
        var o = t.children("i").length >= e.children("i").length;
        l(t.find("i").eq(0), t, o, 50), c(e.find("i").eq(0), e, o, 50);
      } else
        t.parents(".cd-headline").hasClass("clip")
          ? t
              .parents(".cd-words-wrapper")
              .animate({ width: "2px" }, 600, function () {
                d(t, e), a(e);
              })
          : t.parents(".cd-headline").hasClass("loading-bar")
          ? (t.parents(".cd-words-wrapper").removeClass("is-loading"),
            d(t, e),
            setTimeout(function () {
              r(e);
            }, s),
            setTimeout(function () {
              t.parents(".cd-words-wrapper").addClass("is-loading");
            }, 800))
          : (d(t, e),
            setTimeout(function () {
              r(e);
            }, n));
    }
    function a(t, e) {
      t.parents(".cd-headline").hasClass("type")
        ? (c(t.find("i").eq(0), t, !1, e),
          t.addClass("is-visible").removeClass("is-hidden"))
        : t.parents(".cd-headline").hasClass("clip") &&
          t
            .parents(".cd-words-wrapper")
            .animate({ width: t.width() + 10 }, 600, function () {
              setTimeout(function () {
                r(t);
              }, 1500);
            });
    }
    function l(e, i, o, s) {
      if (
        (e.removeClass("in").addClass("out"),
        e.is(":last-child")
          ? o &&
            setTimeout(function () {
              r(h(i));
            }, n)
          : setTimeout(function () {
              l(e.next(), i, o, s);
            }, s),
        e.is(":last-child") && t("html").hasClass("no-csstransitions"))
      ) {
        var a = h(i);
        d(i, a);
      }
    }
    function c(t, e, i, o) {
      t.addClass("in").removeClass("out"),
        t.is(":last-child")
          ? (e.parents(".cd-headline").hasClass("type") &&
              setTimeout(function () {
                e.parents(".cd-words-wrapper").addClass("waiting");
              }, 200),
            i ||
              setTimeout(function () {
                r(e);
              }, n))
          : setTimeout(function () {
              c(t.next(), e, i, o);
            }, o);
    }
    function h(t) {
      return t.is(":last-child") ? t.parent().children().eq(0) : t.next();
    }
    function d(t, e) {
      t.removeClass("is-visible").addClass("is-hidden"),
        e.removeClass("is-hidden").addClass("is-visible");
    }
    t(".cd-headline.letters")
      .find("b")
      .each(function () {
        var e = t(this),
          o = e.text().split(""),
          n = e.hasClass("is-visible");
        for (i in o)
          e.parents(".rotate-2").length > 0 && (o[i] = "<em>" + o[i] + "</em>"),
            (o[i] = n
              ? '<i class="in">' + o[i] + "</i>"
              : "<i>" + o[i] + "</i>");
        var s = o.join("");
        e.html(s).css("opacity", 1);
      }),
      (e = t(".cd-headline")),
      (o = n),
      e.each(function () {
        var e = t(this);
        if (e.hasClass("loading-bar"))
          (o = s),
            setTimeout(function () {
              e.find(".cd-words-wrapper").addClass("is-loading");
            }, 800);
        else if (e.hasClass("clip")) {
          var i = e.find(".cd-words-wrapper"),
            n = i.width() + 10;
          i.css("width", n);
        } else if (!e.hasClass("type")) {
          var a = e.find(".cd-words-wrapper b"),
            l = 0;
          a.each(function () {
            var e = t(this).width();
            e > l && (l = e);
          }),
            e.find(".cd-words-wrapper").css("width", l);
        }
        setTimeout(function () {
          r(e.find(".is-visible").eq(0));
        }, o);
      });
  }),
  (function (t, e, i, o) {
    function n(e, i) {
      (this.settings = null),
        (this.options = t.extend({}, n.Defaults, i)),
        (this.$element = t(e)),
        (this._handlers = {}),
        (this._plugins = {}),
        (this._supress = {}),
        (this._current = null),
        (this._speed = null),
        (this._coordinates = []),
        (this._breakpoint = null),
        (this._width = null),
        (this._items = []),
        (this._clones = []),
        (this._mergers = []),
        (this._widths = []),
        (this._invalidated = {}),
        (this._pipe = []),
        (this._drag = {
          time: null,
          target: null,
          pointer: null,
          stage: { start: null, current: null },
          direction: null,
        }),
        (this._states = {
          current: {},
          tags: {
            initializing: ["busy"],
            animating: ["busy"],
            dragging: ["interacting"],
          },
        }),
        t.each(
          ["onResize", "onThrottledResize"],
          t.proxy(function (e, i) {
            this._handlers[i] = t.proxy(this[i], this);
          }, this)
        ),
        t.each(
          n.Plugins,
          t.proxy(function (t, e) {
            this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this);
          }, this)
        ),
        t.each(
          n.Workers,
          t.proxy(function (e, i) {
            this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) });
          }, this)
        ),
        this.setup(),
        this.initialize();
    }
    (n.Defaults = {
      items: 3,
      loop: !1,
      center: !1,
      rewind: !1,
      mouseDrag: !0,
      touchDrag: !0,
      pullDrag: !0,
      freeDrag: !1,
      margin: 0,
      stagePadding: 0,
      merge: !1,
      mergeFit: !0,
      autoWidth: !1,
      startPosition: 0,
      rtl: !1,
      smartSpeed: 250,
      fluidSpeed: !1,
      dragEndSpeed: !1,
      responsive: {},
      responsiveRefreshRate: 200,
      responsiveBaseElement: e,
      fallbackEasing: "swing",
      info: !1,
      nestedItemSelector: !1,
      itemElement: "div",
      stageElement: "div",
      refreshClass: "owl-refresh",
      loadedClass: "owl-loaded",
      loadingClass: "owl-loading",
      rtlClass: "owl-rtl",
      responsiveClass: "owl-responsive",
      dragClass: "owl-drag",
      itemClass: "owl-item",
      stageClass: "owl-stage",
      stageOuterClass: "owl-stage-outer",
      grabClass: "owl-grab",
    }),
      (n.Width = { Default: "default", Inner: "inner", Outer: "outer" }),
      (n.Type = { Event: "event", State: "state" }),
      (n.Plugins = {}),
      (n.Workers = [
        {
          filter: ["width", "settings"],
          run: function () {
            this._width = this.$element.width();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            t.current =
              this._items && this._items[this.relative(this._current)];
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            this.$stage.children(".cloned").remove();
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this.settings.margin || "",
              i = !this.settings.autoWidth,
              o = this.settings.rtl,
              n = {
                width: "auto",
                "margin-left": o ? e : "",
                "margin-right": o ? "" : e,
              };
            !i && this.$stage.children().css(n), (t.css = n);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e =
                (this.width() / this.settings.items).toFixed(3) -
                this.settings.margin,
              i = null,
              o = this._items.length,
              n = !this.settings.autoWidth,
              s = [];
            for (t.items = { merge: !1, width: e }; o--; )
              (i = this._mergers[o]),
                (i =
                  (this.settings.mergeFit &&
                    Math.min(i, this.settings.items)) ||
                  i),
                (t.items.merge = i > 1 || t.items.merge),
                (s[o] = n ? e * i : this._items[o].width());
            this._widths = s;
          },
        },
        {
          filter: ["items", "settings"],
          run: function () {
            var e = [],
              i = this._items,
              o = this.settings,
              n = Math.max(2 * o.items, 4),
              s = 2 * Math.ceil(i.length / 2),
              r = o.loop && i.length ? (o.rewind ? n : Math.max(n, s)) : 0,
              a = "",
              l = "";
            for (r /= 2; r--; )
              e.push(this.normalize(e.length / 2, !0)),
                (a += i[e[e.length - 1]][0].outerHTML),
                e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)),
                (l = i[e[e.length - 1]][0].outerHTML + l);
            (this._clones = e),
              t(a).addClass("cloned").appendTo(this.$stage),
              t(l).addClass("cloned").prependTo(this.$stage);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            for (
              var t = this.settings.rtl ? 1 : -1,
                e = this._clones.length + this._items.length,
                i = -1,
                o = 0,
                n = 0,
                s = [];
              ++i < e;

            )
              (o = s[i - 1] || 0),
                (n = this._widths[this.relative(i)] + this.settings.margin),
                s.push(o + n * t);
            this._coordinates = s;
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function () {
            var t = this.settings.stagePadding,
              e = this._coordinates,
              i = {
                width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t,
                "padding-left": t || "",
                "padding-right": t || "",
              };
            this.$stage.css(i);
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            var e = this._coordinates.length,
              i = !this.settings.autoWidth,
              o = this.$stage.children();
            if (i && t.items.merge)
              for (; e--; )
                (t.css.width = this._widths[this.relative(e)]),
                  o.eq(e).css(t.css);
            else i && ((t.css.width = t.items.width), o.css(t.css));
          },
        },
        {
          filter: ["items"],
          run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style");
          },
        },
        {
          filter: ["width", "items", "settings"],
          run: function (t) {
            (t.current = t.current
              ? this.$stage.children().index(t.current)
              : 0),
              (t.current = Math.max(
                this.minimum(),
                Math.min(this.maximum(), t.current)
              )),
              this.reset(t.current);
          },
        },
        {
          filter: ["position"],
          run: function () {
            this.animate(this.coordinates(this._current));
          },
        },
        {
          filter: ["width", "position", "items", "settings"],
          run: function () {
            var t,
              e,
              i,
              o,
              n = this.settings.rtl ? 1 : -1,
              s = 2 * this.settings.stagePadding,
              r = this.coordinates(this.current()) + s,
              a = r + this.width() * n,
              l = [];
            for (i = 0, o = this._coordinates.length; i < o; i++)
              (t = this._coordinates[i - 1] || 0),
                (e = Math.abs(this._coordinates[i]) + s * n),
                ((this.op(t, "<=", r) && this.op(t, ">", a)) ||
                  (this.op(e, "<", r) && this.op(e, ">", a))) &&
                  l.push(i);
            this.$stage.children(".active").removeClass("active"),
              this.$stage
                .children(":eq(" + l.join("), :eq(") + ")")
                .addClass("active"),
              this.settings.center &&
                (this.$stage.children(".center").removeClass("center"),
                this.$stage.children().eq(this.current()).addClass("center"));
          },
        },
      ]),
      (n.prototype.initialize = function () {
        var e, i, n;
        (this.enter("initializing"),
        this.trigger("initialize"),
        this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
        this.settings.autoWidth && !this.is("pre-loading")) &&
          ((e = this.$element.find("img")),
          (i = this.settings.nestedItemSelector
            ? "." + this.settings.nestedItemSelector
            : o),
          (n = this.$element.children(i).width()),
          e.length && n <= 0 && this.preloadAutoWidthImages(e));
        this.$element.addClass(this.options.loadingClass),
          (this.$stage = t(
            "<" +
              this.settings.stageElement +
              ' class="' +
              this.settings.stageClass +
              '"/>'
          ).wrap('<div class="' + this.settings.stageOuterClass + '"/>')),
          this.$element.append(this.$stage.parent()),
          this.replace(this.$element.children().not(this.$stage.parent())),
          this.$element.is(":visible")
            ? this.refresh()
            : this.invalidate("width"),
          this.$element
            .removeClass(this.options.loadingClass)
            .addClass(this.options.loadedClass),
          this.registerEventHandlers(),
          this.leave("initializing"),
          this.trigger("initialized");
      }),
      (n.prototype.setup = function () {
        var e = this.viewport(),
          i = this.options.responsive,
          o = -1,
          n = null;
        i
          ? (t.each(i, function (t) {
              t <= e && t > o && (o = Number(t));
            }),
            "function" ==
              typeof (n = t.extend({}, this.options, i[o])).stagePadding &&
              (n.stagePadding = n.stagePadding()),
            delete n.responsive,
            n.responsiveClass &&
              this.$element.attr(
                "class",
                this.$element
                  .attr("class")
                  .replace(
                    new RegExp(
                      "(" + this.options.responsiveClass + "-)\\S+\\s",
                      "g"
                    ),
                    "$1" + o
                  )
              ))
          : (n = t.extend({}, this.options)),
          this.trigger("change", { property: { name: "settings", value: n } }),
          (this._breakpoint = o),
          (this.settings = n),
          this.invalidate("settings"),
          this.trigger("changed", {
            property: { name: "settings", value: this.settings },
          });
      }),
      (n.prototype.optionsLogic = function () {
        this.settings.autoWidth &&
          ((this.settings.stagePadding = !1), (this.settings.merge = !1));
      }),
      (n.prototype.prepare = function (e) {
        var i = this.trigger("prepare", { content: e });
        return (
          i.data ||
            (i.data = t("<" + this.settings.itemElement + "/>")
              .addClass(this.options.itemClass)
              .append(e)),
          this.trigger("prepared", { content: i.data }),
          i.data
        );
      }),
      (n.prototype.update = function () {
        for (
          var e = 0,
            i = this._pipe.length,
            o = t.proxy(function (t) {
              return this[t];
            }, this._invalidated),
            n = {};
          e < i;

        )
          (this._invalidated.all ||
            t.grep(this._pipe[e].filter, o).length > 0) &&
            this._pipe[e].run(n),
            e++;
        (this._invalidated = {}), !this.is("valid") && this.enter("valid");
      }),
      (n.prototype.width = function (t) {
        switch ((t = t || n.Width.Default)) {
          case n.Width.Inner:
          case n.Width.Outer:
            return this._width;
          default:
            return (
              this._width -
              2 * this.settings.stagePadding +
              this.settings.margin
            );
        }
      }),
      (n.prototype.refresh = function () {
        this.enter("refreshing"),
          this.trigger("refresh"),
          this.setup(),
          this.optionsLogic(),
          this.$element.addClass(this.options.refreshClass),
          this.update(),
          this.$element.removeClass(this.options.refreshClass),
          this.leave("refreshing"),
          this.trigger("refreshed");
      }),
      (n.prototype.onThrottledResize = function () {
        e.clearTimeout(this.resizeTimer),
          (this.resizeTimer = e.setTimeout(
            this._handlers.onResize,
            this.settings.responsiveRefreshRate
          ));
      }),
      (n.prototype.onResize = function () {
        return (
          !!this._items.length &&
          this._width !== this.$element.width() &&
          !!this.$element.is(":visible") &&
          (this.enter("resizing"),
          this.trigger("resize").isDefaultPrevented()
            ? (this.leave("resizing"), !1)
            : (this.invalidate("width"),
              this.refresh(),
              this.leave("resizing"),
              void this.trigger("resized")))
        );
      }),
      (n.prototype.registerEventHandlers = function () {
        t.support.transition &&
          this.$stage.on(
            t.support.transition.end + ".owl.core",
            t.proxy(this.onTransitionEnd, this)
          ),
          !1 !== this.settings.responsive &&
            this.on(e, "resize", this._handlers.onThrottledResize),
          this.settings.mouseDrag &&
            (this.$element.addClass(this.options.dragClass),
            this.$stage.on(
              "mousedown.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "dragstart.owl.core selectstart.owl.core",
              function () {
                return !1;
              }
            )),
          this.settings.touchDrag &&
            (this.$stage.on(
              "touchstart.owl.core",
              t.proxy(this.onDragStart, this)
            ),
            this.$stage.on(
              "touchcancel.owl.core",
              t.proxy(this.onDragEnd, this)
            ));
      }),
      (n.prototype.onDragStart = function (e) {
        var o = null;
        3 !== e.which &&
          (t.support.transform
            ? (o = {
                x: (o = this.$stage
                  .css("transform")
                  .replace(/.*\(|\)| /g, "")
                  .split(","))[16 === o.length ? 12 : 4],
                y: o[16 === o.length ? 13 : 5],
              })
            : ((o = this.$stage.position()),
              (o = {
                x: this.settings.rtl
                  ? o.left +
                    this.$stage.width() -
                    this.width() +
                    this.settings.margin
                  : o.left,
                y: o.top,
              })),
          this.is("animating") &&
            (t.support.transform ? this.animate(o.x) : this.$stage.stop(),
            this.invalidate("position")),
          this.$element.toggleClass(
            this.options.grabClass,
            "mousedown" === e.type
          ),
          this.speed(0),
          (this._drag.time = new Date().getTime()),
          (this._drag.target = t(e.target)),
          (this._drag.stage.start = o),
          (this._drag.stage.current = o),
          (this._drag.pointer = this.pointer(e)),
          t(i).on(
            "mouseup.owl.core touchend.owl.core",
            t.proxy(this.onDragEnd, this)
          ),
          t(i).one(
            "mousemove.owl.core touchmove.owl.core",
            t.proxy(function (e) {
              var o = this.difference(this._drag.pointer, this.pointer(e));
              t(i).on(
                "mousemove.owl.core touchmove.owl.core",
                t.proxy(this.onDragMove, this)
              ),
                (Math.abs(o.x) < Math.abs(o.y) && this.is("valid")) ||
                  (e.preventDefault(),
                  this.enter("dragging"),
                  this.trigger("drag"));
            }, this)
          ));
      }),
      (n.prototype.onDragMove = function (t) {
        var e = null,
          i = null,
          o = null,
          n = this.difference(this._drag.pointer, this.pointer(t)),
          s = this.difference(this._drag.stage.start, n);
        this.is("dragging") &&
          (t.preventDefault(),
          this.settings.loop
            ? ((e = this.coordinates(this.minimum())),
              (i = this.coordinates(this.maximum() + 1) - e),
              (s.x = ((((s.x - e) % i) + i) % i) + e))
            : ((e = this.settings.rtl
                ? this.coordinates(this.maximum())
                : this.coordinates(this.minimum())),
              (i = this.settings.rtl
                ? this.coordinates(this.minimum())
                : this.coordinates(this.maximum())),
              (o = this.settings.pullDrag ? (-1 * n.x) / 5 : 0),
              (s.x = Math.max(Math.min(s.x, e + o), i + o))),
          (this._drag.stage.current = s),
          this.animate(s.x));
      }),
      (n.prototype.onDragEnd = function (e) {
        var o = this.difference(this._drag.pointer, this.pointer(e)),
          n = this._drag.stage.current,
          s = (o.x > 0) ^ this.settings.rtl ? "left" : "right";
        t(i).off(".owl.core"),
          this.$element.removeClass(this.options.grabClass),
          ((0 !== o.x && this.is("dragging")) || !this.is("valid")) &&
            (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(
              this.closest(n.x, 0 !== o.x ? s : this._drag.direction)
            ),
            this.invalidate("position"),
            this.update(),
            (this._drag.direction = s),
            (Math.abs(o.x) > 3 ||
              new Date().getTime() - this._drag.time > 300) &&
              this._drag.target.one("click.owl.core", function () {
                return !1;
              })),
          this.is("dragging") &&
            (this.leave("dragging"), this.trigger("dragged"));
      }),
      (n.prototype.closest = function (e, i) {
        var o = -1,
          n = this.width(),
          s = this.coordinates();
        return (
          this.settings.freeDrag ||
            t.each(
              s,
              t.proxy(function (t, r) {
                return (
                  "left" === i && e > r - 30 && e < r + 30
                    ? (o = t)
                    : "right" === i && e > r - n - 30 && e < r - n + 30
                    ? (o = t + 1)
                    : this.op(e, "<", r) &&
                      this.op(e, ">", s[t + 1] || r - n) &&
                      (o = "left" === i ? t + 1 : t),
                  -1 === o
                );
              }, this)
            ),
          this.settings.loop ||
            (this.op(e, ">", s[this.minimum()])
              ? (o = e = this.minimum())
              : this.op(e, "<", s[this.maximum()]) && (o = e = this.maximum())),
          o
        );
      }),
      (n.prototype.animate = function (e) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(),
          i && (this.enter("animating"), this.trigger("translate")),
          t.support.transform3d && t.support.transition
            ? this.$stage.css({
                transform: "translate3d(" + e + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s",
              })
            : i
            ? this.$stage.animate(
                { left: e + "px" },
                this.speed(),
                this.settings.fallbackEasing,
                t.proxy(this.onTransitionEnd, this)
              )
            : this.$stage.css({ left: e + "px" });
      }),
      (n.prototype.is = function (t) {
        return this._states.current[t] && this._states.current[t] > 0;
      }),
      (n.prototype.current = function (t) {
        if (t === o) return this._current;
        if (0 === this._items.length) return o;
        if (((t = this.normalize(t)), this._current !== t)) {
          var e = this.trigger("change", {
            property: { name: "position", value: t },
          });
          e.data !== o && (t = this.normalize(e.data)),
            (this._current = t),
            this.invalidate("position"),
            this.trigger("changed", {
              property: { name: "position", value: this._current },
            });
        }
        return this._current;
      }),
      (n.prototype.invalidate = function (e) {
        return (
          "string" === t.type(e) &&
            ((this._invalidated[e] = !0),
            this.is("valid") && this.leave("valid")),
          t.map(this._invalidated, function (t, e) {
            return e;
          })
        );
      }),
      (n.prototype.reset = function (t) {
        (t = this.normalize(t)) !== o &&
          ((this._speed = 0),
          (this._current = t),
          this.suppress(["translate", "translated"]),
          this.animate(this.coordinates(t)),
          this.release(["translate", "translated"]));
      }),
      (n.prototype.normalize = function (t, e) {
        var i = this._items.length,
          n = e ? 0 : this._clones.length;
        return (
          !this.isNumeric(t) || i < 1
            ? (t = o)
            : (t < 0 || t >= i + n) &&
              (t = ((((t - n / 2) % i) + i) % i) + n / 2),
          t
        );
      }),
      (n.prototype.relative = function (t) {
        return (t -= this._clones.length / 2), this.normalize(t, !0);
      }),
      (n.prototype.maximum = function (t) {
        var e,
          i,
          o,
          n = this.settings,
          s = this._coordinates.length;
        if (n.loop) s = this._clones.length / 2 + this._items.length - 1;
        else if (n.autoWidth || n.merge) {
          for (
            e = this._items.length,
              i = this._items[--e].width(),
              o = this.$element.width();
            e-- && !((i += this._items[e].width() + this.settings.margin) > o);

          );
          s = e + 1;
        } else
          s = n.center ? this._items.length - 1 : this._items.length - n.items;
        return t && (s -= this._clones.length / 2), Math.max(s, 0);
      }),
      (n.prototype.minimum = function (t) {
        return t ? 0 : this._clones.length / 2;
      }),
      (n.prototype.items = function (t) {
        return t === o
          ? this._items.slice()
          : ((t = this.normalize(t, !0)), this._items[t]);
      }),
      (n.prototype.mergers = function (t) {
        return t === o
          ? this._mergers.slice()
          : ((t = this.normalize(t, !0)), this._mergers[t]);
      }),
      (n.prototype.clones = function (e) {
        var i = this._clones.length / 2,
          n = i + this._items.length,
          s = function (t) {
            return t % 2 == 0 ? n + t / 2 : i - (t + 1) / 2;
          };
        return e === o
          ? t.map(this._clones, function (t, e) {
              return s(e);
            })
          : t.map(this._clones, function (t, i) {
              return t === e ? s(i) : null;
            });
      }),
      (n.prototype.speed = function (t) {
        return t !== o && (this._speed = t), this._speed;
      }),
      (n.prototype.coordinates = function (e) {
        var i,
          n = 1,
          s = e - 1;
        return e === o
          ? t.map(
              this._coordinates,
              t.proxy(function (t, e) {
                return this.coordinates(e);
              }, this)
            )
          : (this.settings.center
              ? (this.settings.rtl && ((n = -1), (s = e + 1)),
                (i = this._coordinates[e]),
                (i +=
                  ((this.width() - i + (this._coordinates[s] || 0)) / 2) * n))
              : (i = this._coordinates[s] || 0),
            (i = Math.ceil(i)));
      }),
      (n.prototype.duration = function (t, e, i) {
        return 0 === i
          ? 0
          : Math.min(Math.max(Math.abs(e - t), 1), 6) *
              Math.abs(i || this.settings.smartSpeed);
      }),
      (n.prototype.to = function (t, e) {
        var i = this.current(),
          o = null,
          n = t - this.relative(i),
          s = (n > 0) - (n < 0),
          r = this._items.length,
          a = this.minimum(),
          l = this.maximum();
        this.settings.loop
          ? (!this.settings.rewind && Math.abs(n) > r / 2 && (n += -1 * s * r),
            (o = (((((t = i + n) - a) % r) + r) % r) + a) !== t &&
              o - n <= l &&
              o - n > 0 &&
              ((i = o - n), (t = o), this.reset(i)))
          : this.settings.rewind
          ? (t = ((t % (l += 1)) + l) % l)
          : (t = Math.max(a, Math.min(l, t))),
          this.speed(this.duration(i, t, e)),
          this.current(t),
          this.$element.is(":visible") && this.update();
      }),
      (n.prototype.next = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) + 1, t);
      }),
      (n.prototype.prev = function (t) {
        (t = t || !1), this.to(this.relative(this.current()) - 1, t);
      }),
      (n.prototype.onTransitionEnd = function (t) {
        if (
          t !== o &&
          (t.stopPropagation(),
          (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))
        )
          return !1;
        this.leave("animating"), this.trigger("translated");
      }),
      (n.prototype.viewport = function () {
        var o;
        return (
          this.options.responsiveBaseElement !== e
            ? (o = t(this.options.responsiveBaseElement).width())
            : e.innerWidth
            ? (o = e.innerWidth)
            : i.documentElement && i.documentElement.clientWidth
            ? (o = i.documentElement.clientWidth)
            : console.warn("Can not detect viewport width."),
          o
        );
      }),
      (n.prototype.replace = function (e) {
        this.$stage.empty(),
          (this._items = []),
          e && (e = e instanceof jQuery ? e : t(e)),
          this.settings.nestedItemSelector &&
            (e = e.find("." + this.settings.nestedItemSelector)),
          e
            .filter(function () {
              return 1 === this.nodeType;
            })
            .each(
              t.proxy(function (t, e) {
                (e = this.prepare(e)),
                  this.$stage.append(e),
                  this._items.push(e),
                  this._mergers.push(
                    1 *
                      e
                        .find("[data-merge]")
                        .addBack("[data-merge]")
                        .attr("data-merge") || 1
                  );
              }, this)
            ),
          this.reset(
            this.isNumeric(this.settings.startPosition)
              ? this.settings.startPosition
              : 0
          ),
          this.invalidate("items");
      }),
      (n.prototype.add = function (e, i) {
        var n = this.relative(this._current);
        (i = i === o ? this._items.length : this.normalize(i, !0)),
          (e = e instanceof jQuery ? e : t(e)),
          this.trigger("add", { content: e, position: i }),
          (e = this.prepare(e)),
          0 === this._items.length || i === this._items.length
            ? (0 === this._items.length && this.$stage.append(e),
              0 !== this._items.length && this._items[i - 1].after(e),
              this._items.push(e),
              this._mergers.push(
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              ))
            : (this._items[i].before(e),
              this._items.splice(i, 0, e),
              this._mergers.splice(
                i,
                0,
                1 *
                  e
                    .find("[data-merge]")
                    .addBack("[data-merge]")
                    .attr("data-merge") || 1
              )),
          this._items[n] && this.reset(this._items[n].index()),
          this.invalidate("items"),
          this.trigger("added", { content: e, position: i });
      }),
      (n.prototype.remove = function (t) {
        (t = this.normalize(t, !0)) !== o &&
          (this.trigger("remove", { content: this._items[t], position: t }),
          this._items[t].remove(),
          this._items.splice(t, 1),
          this._mergers.splice(t, 1),
          this.invalidate("items"),
          this.trigger("removed", { content: null, position: t }));
      }),
      (n.prototype.preloadAutoWidthImages = function (e) {
        e.each(
          t.proxy(function (e, i) {
            this.enter("pre-loading"),
              (i = t(i)),
              t(new Image())
                .one(
                  "load",
                  t.proxy(function (t) {
                    i.attr("src", t.target.src),
                      i.css("opacity", 1),
                      this.leave("pre-loading"),
                      !this.is("pre-loading") &&
                        !this.is("initializing") &&
                        this.refresh();
                  }, this)
                )
                .attr(
                  "src",
                  i.attr("src") ||
                    i.attr("data-src") ||
                    i.attr("data-src-retina")
                );
          }, this)
        );
      }),
      (n.prototype.destroy = function () {
        for (var o in (this.$element.off(".owl.core"),
        this.$stage.off(".owl.core"),
        t(i).off(".owl.core"),
        !1 !== this.settings.responsive &&
          (e.clearTimeout(this.resizeTimer),
          this.off(e, "resize", this._handlers.onThrottledResize)),
        this._plugins))
          this._plugins[o].destroy();
        this.$stage.children(".cloned").remove(),
          this.$stage.unwrap(),
          this.$stage.children().contents().unwrap(),
          this.$stage.children().unwrap(),
          this.$element
            .removeClass(this.options.refreshClass)
            .removeClass(this.options.loadingClass)
            .removeClass(this.options.loadedClass)
            .removeClass(this.options.rtlClass)
            .removeClass(this.options.dragClass)
            .removeClass(this.options.grabClass)
            .attr(
              "class",
              this.$element
                .attr("class")
                .replace(
                  new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"),
                  ""
                )
            )
            .removeData("owl.carousel");
      }),
      (n.prototype.op = function (t, e, i) {
        var o = this.settings.rtl;
        switch (e) {
          case "<":
            return o ? t > i : t < i;
          case ">":
            return o ? t < i : t > i;
          case ">=":
            return o ? t <= i : t >= i;
          case "<=":
            return o ? t >= i : t <= i;
        }
      }),
      (n.prototype.on = function (t, e, i, o) {
        t.addEventListener
          ? t.addEventListener(e, i, o)
          : t.attachEvent && t.attachEvent("on" + e, i);
      }),
      (n.prototype.off = function (t, e, i, o) {
        t.removeEventListener
          ? t.removeEventListener(e, i, o)
          : t.detachEvent && t.detachEvent("on" + e, i);
      }),
      (n.prototype.trigger = function (e, i, o, s, r) {
        var a = { item: { count: this._items.length, index: this.current() } },
          l = t.camelCase(
            t
              .grep(["on", e, o], function (t) {
                return t;
              })
              .join("-")
              .toLowerCase()
          ),
          c = t.Event(
            [e, "owl", o || "carousel"].join(".").toLowerCase(),
            t.extend({ relatedTarget: this }, a, i)
          );
        return (
          this._supress[e] ||
            (t.each(this._plugins, function (t, e) {
              e.onTrigger && e.onTrigger(c);
            }),
            this.register({ type: n.Type.Event, name: e }),
            this.$element.trigger(c),
            this.settings &&
              "function" == typeof this.settings[l] &&
              this.settings[l].call(this, c)),
          c
        );
      }),
      (n.prototype.enter = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e] === o && (this._states.current[e] = 0),
              this._states.current[e]++;
          }, this)
        );
      }),
      (n.prototype.leave = function (e) {
        t.each(
          [e].concat(this._states.tags[e] || []),
          t.proxy(function (t, e) {
            this._states.current[e]--;
          }, this)
        );
      }),
      (n.prototype.register = function (e) {
        if (e.type === n.Type.Event) {
          if (
            (t.event.special[e.name] || (t.event.special[e.name] = {}),
            !t.event.special[e.name].owl)
          ) {
            var i = t.event.special[e.name]._default;
            (t.event.special[e.name]._default = function (t) {
              return !i ||
                !i.apply ||
                (t.namespace && -1 !== t.namespace.indexOf("owl"))
                ? t.namespace && t.namespace.indexOf("owl") > -1
                : i.apply(this, arguments);
            }),
              (t.event.special[e.name].owl = !0);
          }
        } else
          e.type === n.Type.State &&
            (this._states.tags[e.name]
              ? (this._states.tags[e.name] = this._states.tags[e.name].concat(
                  e.tags
                ))
              : (this._states.tags[e.name] = e.tags),
            (this._states.tags[e.name] = t.grep(
              this._states.tags[e.name],
              t.proxy(function (i, o) {
                return t.inArray(i, this._states.tags[e.name]) === o;
              }, this)
            )));
      }),
      (n.prototype.suppress = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            this._supress[e] = !0;
          }, this)
        );
      }),
      (n.prototype.release = function (e) {
        t.each(
          e,
          t.proxy(function (t, e) {
            delete this._supress[e];
          }, this)
        );
      }),
      (n.prototype.pointer = function (t) {
        var i = { x: null, y: null };
        return (
          (t =
            (t = t.originalEvent || t || e.event).touches && t.touches.length
              ? t.touches[0]
              : t.changedTouches && t.changedTouches.length
              ? t.changedTouches[0]
              : t).pageX
            ? ((i.x = t.pageX), (i.y = t.pageY))
            : ((i.x = t.clientX), (i.y = t.clientY)),
          i
        );
      }),
      (n.prototype.isNumeric = function (t) {
        return !isNaN(parseFloat(t));
      }),
      (n.prototype.difference = function (t, e) {
        return { x: t.x - e.x, y: t.y - e.y };
      }),
      (t.fn.owlCarousel = function (e) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
          var o = t(this),
            s = o.data("owl.carousel");
          s ||
            ((s = new n(this, "object" == typeof e && e)),
            o.data("owl.carousel", s),
            t.each(
              [
                "next",
                "prev",
                "to",
                "destroy",
                "refresh",
                "replace",
                "add",
                "remove",
              ],
              function (e, i) {
                s.register({ type: n.Type.Event, name: i }),
                  s.$element.on(
                    i + ".owl.carousel.core",
                    t.proxy(function (t) {
                      t.namespace &&
                        t.relatedTarget !== this &&
                        (this.suppress([i]),
                        s[i].apply(this, [].slice.call(arguments, 1)),
                        this.release([i]));
                    }, s)
                  );
              }
            )),
            "string" == typeof e && "_" !== e.charAt(0) && s[e].apply(s, i);
        });
      }),
      (t.fn.owlCarousel.Constructor = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e) {
    var i = function (e) {
      (this._core = e),
        (this._interval = null),
        (this._visible = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoRefresh && this.watch();
          }, this),
        }),
        (this._core.options = t.extend({}, i.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (i.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }),
      (i.prototype.watch = function () {
        this._interval ||
          ((this._visible = this._core.$element.is(":visible")),
          (this._interval = e.setInterval(
            t.proxy(this.refresh, this),
            this._core.settings.autoRefreshInterval
          )));
      }),
      (i.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible &&
          ((this._visible = !this._visible),
          this._core.$element.toggleClass("owl-hidden", !this._visible),
          this._visible &&
            this._core.invalidate("width") &&
            this._core.refresh());
      }),
      (i.prototype.destroy = function () {
        var t, i;
        for (t in (e.clearInterval(this._interval), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e) {
    var i = function (e) {
      (this._core = e),
        (this._loaded = []),
        (this._handlers = {
          "initialized.owl.carousel change.owl.carousel resized.owl.carousel":
            t.proxy(function (e) {
              if (
                e.namespace &&
                this._core.settings &&
                this._core.settings.lazyLoad &&
                ((e.property && "position" == e.property.name) ||
                  "initialized" == e.type)
              )
                for (
                  var i = this._core.settings,
                    o = (i.center && Math.ceil(i.items / 2)) || i.items,
                    n = (i.center && -1 * o) || 0,
                    s =
                      (e.property && undefined !== e.property.value
                        ? e.property.value
                        : this._core.current()) + n,
                    r = this._core.clones().length,
                    a = t.proxy(function (t, e) {
                      this.load(e);
                    }, this);
                  n++ < o;

                )
                  this.load(r / 2 + this._core.relative(s)),
                    r && t.each(this._core.clones(this._core.relative(s)), a),
                    s++;
            }, this),
        }),
        (this._core.options = t.extend({}, i.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (i.Defaults = { lazyLoad: !1 }),
      (i.prototype.load = function (i) {
        var o = this._core.$stage.children().eq(i),
          n = o && o.find(".owl-lazy");
        !n ||
          t.inArray(o.get(0), this._loaded) > -1 ||
          (n.each(
            t.proxy(function (i, o) {
              var n,
                s = t(o),
                r =
                  (e.devicePixelRatio > 1 && s.attr("data-src-retina")) ||
                  s.attr("data-src");
              this._core.trigger("load", { element: s, url: r }, "lazy"),
                s.is("img")
                  ? s
                      .one(
                        "load.owl.lazy",
                        t.proxy(function () {
                          s.css("opacity", 1),
                            this._core.trigger(
                              "loaded",
                              { element: s, url: r },
                              "lazy"
                            );
                        }, this)
                      )
                      .attr("src", r)
                  : (((n = new Image()).onload = t.proxy(function () {
                      s.css({
                        "background-image": 'url("' + r + '")',
                        opacity: "1",
                      }),
                        this._core.trigger(
                          "loaded",
                          { element: s, url: r },
                          "lazy"
                        );
                    }, this)),
                    (n.src = r));
            }, this)
          ),
          this._loaded.push(o.get(0)));
      }),
      (i.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this._core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Lazy = i);
  })(window.Zepto || window.jQuery, window, document),
  (function (t) {
    var e = function (i) {
      (this._core = i),
        (this._handlers = {
          "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function (
            t
          ) {
            t.namespace && this._core.settings.autoHeight && this.update();
          },
          this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              "position" == t.property.name &&
              this.update();
          }, this),
          "loaded.owl.lazy": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.autoHeight &&
              t.element.closest("." + this._core.settings.itemClass).index() ===
                this._core.current() &&
              this.update();
          }, this),
        }),
        (this._core.options = t.extend({}, e.Defaults, this._core.options)),
        this._core.$element.on(this._handlers);
    };
    (e.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }),
      (e.prototype.update = function () {
        var e,
          i = this._core._current,
          o = i + this._core.settings.items,
          n = this._core.$stage.children().toArray().slice(i, o),
          s = [];
        t.each(n, function (e, i) {
          s.push(t(i).height());
        }),
          (e = Math.max.apply(null, s)),
          this._core.$stage
            .parent()
            .height(e)
            .addClass(this._core.settings.autoHeightClass);
      }),
      (e.prototype.destroy = function () {
        var t, e;
        for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.AutoHeight = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i) {
    var o = function (e) {
      (this._core = e),
        (this._videos = {}),
        (this._playing = null),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.register({
                type: "state",
                name: "playing",
                tags: ["interacting"],
              });
          }, this),
          "resize.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.video &&
              this.isInFullScreen() &&
              t.preventDefault();
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.is("resizing") &&
              this._core.$stage.find(".cloned .owl-video-frame").remove();
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" === t.property.name &&
              this._playing &&
              this.stop();
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content).find(".owl-video");
              i.length &&
                (i.css("display", "none"), this.fetch(i, t(e.content)));
            }
          }, this),
        }),
        (this._core.options = t.extend({}, o.Defaults, this._core.options)),
        this._core.$element.on(this._handlers),
        this._core.$element.on(
          "click.owl.video",
          ".owl-video-play-icon",
          t.proxy(function (t) {
            this.play(t);
          }, this)
        );
    };
    (o.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }),
      (o.prototype.fetch = function (t, e) {
        var i = t.attr("data-vimeo-id")
            ? "vimeo"
            : t.attr("data-vzaar-id")
            ? "vzaar"
            : "youtube",
          o =
            t.attr("data-vimeo-id") ||
            t.attr("data-youtube-id") ||
            t.attr("data-vzaar-id"),
          n = t.attr("data-width") || this._core.settings.videoWidth,
          s = t.attr("data-height") || this._core.settings.videoHeight,
          r = t.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (
          (o = r.match(
            /(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/
          ))[3].indexOf("youtu") > -1
        )
          i = "youtube";
        else if (o[3].indexOf("vimeo") > -1) i = "vimeo";
        else {
          if (!(o[3].indexOf("vzaar") > -1))
            throw new Error("Video URL not supported.");
          i = "vzaar";
        }
        (o = o[6]),
          (this._videos[r] = { type: i, id: o, width: n, height: s }),
          e.attr("data-video", r),
          this.thumbnail(t, this._videos[r]);
      }),
      (o.prototype.thumbnail = function (e, i) {
        var o,
          n,
          s =
            i.width && i.height
              ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"'
              : "",
          r = e.find("img"),
          a = "src",
          l = "",
          c = this._core.settings,
          h = function (t) {
            (o = c.lazyLoad
              ? '<div class="owl-video-tn ' +
                l +
                '" ' +
                a +
                '="' +
                t +
                '"></div>'
              : '<div class="owl-video-tn" style="opacity:1;background-image:url(' +
                t +
                ')"></div>'),
              e.after(o),
              e.after('<div class="owl-video-play-icon"></div>');
          };
        if (
          (e.wrap('<div class="owl-video-wrapper"' + s + "></div>"),
          this._core.settings.lazyLoad && ((a = "data-src"), (l = "owl-lazy")),
          r.length)
        )
          return h(r.attr(a)), r.remove(), !1;
        "youtube" === i.type
          ? ((n = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg"), h(n))
          : "vimeo" === i.type
          ? t.ajax({
              type: "GET",
              url: "//vimeo.com/api/v2/video/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (n = t[0].thumbnail_large), h(n);
              },
            })
          : "vzaar" === i.type &&
            t.ajax({
              type: "GET",
              url: "//vzaar.com/api/videos/" + i.id + ".json",
              jsonp: "callback",
              dataType: "jsonp",
              success: function (t) {
                (n = t.framegrab_url), h(n);
              },
            });
      }),
      (o.prototype.stop = function () {
        this._core.trigger("stop", null, "video"),
          this._playing.find(".owl-video-frame").remove(),
          this._playing.removeClass("owl-video-playing"),
          (this._playing = null),
          this._core.leave("playing"),
          this._core.trigger("stopped", null, "video");
      }),
      (o.prototype.play = function (e) {
        var i,
          o = t(e.target).closest("." + this._core.settings.itemClass),
          n = this._videos[o.attr("data-video")],
          s = n.width || "100%",
          r = n.height || this._core.$stage.height();
        this._playing ||
          (this._core.enter("playing"),
          this._core.trigger("play", null, "video"),
          (o = this._core.items(this._core.relative(o.index()))),
          this._core.reset(o.index()),
          "youtube" === n.type
            ? (i =
                '<iframe width="' +
                s +
                '" height="' +
                r +
                '" src="//www.youtube.com/embed/' +
                n.id +
                "?autoplay=1&rel=0&v=" +
                n.id +
                '" frameborder="0" allowfullscreen></iframe>')
            : "vimeo" === n.type
            ? (i =
                '<iframe src="//player.vimeo.com/video/' +
                n.id +
                '?autoplay=1" width="' +
                s +
                '" height="' +
                r +
                '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>')
            : "vzaar" === n.type &&
              (i =
                '<iframe frameborder="0"height="' +
                r +
                '"width="' +
                s +
                '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' +
                n.id +
                '/player?autoplay=true"></iframe>'),
          t('<div class="owl-video-frame">' + i + "</div>").insertAfter(
            o.find(".owl-video")
          ),
          (this._playing = o.addClass("owl-video-playing")));
      }),
      (o.prototype.isInFullScreen = function () {
        var e =
          i.fullscreenElement ||
          i.mozFullScreenElement ||
          i.webkitFullscreenElement;
        return e && t(e).parent().hasClass("owl-video-frame");
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in (this._core.$element.off("click.owl.video"), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Video = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i, o) {
    var n = function (e) {
      (this.core = e),
        (this.core.options = t.extend({}, n.Defaults, this.core.options)),
        (this.swapping = !0),
        (this.previous = o),
        (this.next = o),
        (this.handlers = {
          "change.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              "position" == t.property.name &&
              ((this.previous = this.core.current()),
              (this.next = t.property.value));
          }, this),
          "drag.owl.carousel dragged.owl.carousel translated.owl.carousel":
            t.proxy(function (t) {
              t.namespace && (this.swapping = "translated" == t.type);
            }, this),
          "translate.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this.swapping &&
              (this.core.options.animateOut || this.core.options.animateIn) &&
              this.swap();
          }, this),
        }),
        this.core.$element.on(this.handlers);
    };
    (n.Defaults = { animateOut: !1, animateIn: !1 }),
      (n.prototype.swap = function () {
        if (
          1 === this.core.settings.items &&
          t.support.animation &&
          t.support.transition
        ) {
          this.core.speed(0);
          var e,
            i = t.proxy(this.clear, this),
            o = this.core.$stage.children().eq(this.previous),
            n = this.core.$stage.children().eq(this.next),
            s = this.core.settings.animateIn,
            r = this.core.settings.animateOut;
          this.core.current() !== this.previous &&
            (r &&
              ((e =
                this.core.coordinates(this.previous) -
                this.core.coordinates(this.next)),
              o
                .one(t.support.animation.end, i)
                .css({ left: e + "px" })
                .addClass("animated owl-animated-out")
                .addClass(r)),
            s &&
              n
                .one(t.support.animation.end, i)
                .addClass("animated owl-animated-in")
                .addClass(s));
        }
      }),
      (n.prototype.clear = function (e) {
        t(e.target)
          .css({ left: "" })
          .removeClass("animated owl-animated-out owl-animated-in")
          .removeClass(this.core.settings.animateIn)
          .removeClass(this.core.settings.animateOut),
          this.core.onTransitionEnd();
      }),
      (n.prototype.destroy = function () {
        var t, e;
        for (t in this.handlers) this.core.$element.off(t, this.handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Animate = n);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e, i) {
    var o = function (e) {
      (this._core = e),
        (this._timeout = null),
        (this._paused = !1),
        (this._handlers = {
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "settings" === t.property.name
              ? this._core.settings.autoplay
                ? this.play()
                : this.stop()
              : t.namespace &&
                "position" === t.property.name &&
                this._core.settings.autoplay &&
                this._setAutoPlayInterval();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace && this._core.settings.autoplay && this.play();
          }, this),
          "play.owl.autoplay": t.proxy(function (t, e, i) {
            t.namespace && this.play(e, i);
          }, this),
          "stop.owl.autoplay": t.proxy(function (t) {
            t.namespace && this.stop();
          }, this),
          "mouseover.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "mouseleave.owl.autoplay": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.play();
          }, this),
          "touchstart.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause &&
              this._core.is("rotating") &&
              this.pause();
          }, this),
          "touchend.owl.core": t.proxy(function () {
            this._core.settings.autoplayHoverPause && this.play();
          }, this),
        }),
        this._core.$element.on(this._handlers),
        (this._core.options = t.extend({}, o.Defaults, this._core.options));
    };
    (o.Defaults = {
      autoplay: !1,
      autoplayTimeout: 5e3,
      autoplayHoverPause: !1,
      autoplaySpeed: !1,
    }),
      (o.prototype.play = function (t, e) {
        (this._paused = !1),
          this._core.is("rotating") ||
            (this._core.enter("rotating"), this._setAutoPlayInterval());
      }),
      (o.prototype._getNextTimeout = function (o, n) {
        return (
          this._timeout && e.clearTimeout(this._timeout),
          e.setTimeout(
            t.proxy(function () {
              this._paused ||
                this._core.is("busy") ||
                this._core.is("interacting") ||
                i.hidden ||
                this._core.next(n || this._core.settings.autoplaySpeed);
            }, this),
            o || this._core.settings.autoplayTimeout
          )
        );
      }),
      (o.prototype._setAutoPlayInterval = function () {
        this._timeout = this._getNextTimeout();
      }),
      (o.prototype.stop = function () {
        this._core.is("rotating") &&
          (e.clearTimeout(this._timeout), this._core.leave("rotating"));
      }),
      (o.prototype.pause = function () {
        this._core.is("rotating") && (this._paused = !0);
      }),
      (o.prototype.destroy = function () {
        var t, e;
        for (t in (this.stop(), this._handlers))
          this._core.$element.off(t, this._handlers[t]);
        for (e in Object.getOwnPropertyNames(this))
          "function" != typeof this[e] && (this[e] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.autoplay = o);
  })(window.Zepto || window.jQuery, window, document),
  (function (t) {
    "use strict";
    var e = function (i) {
      (this._core = i),
        (this._initialized = !1),
        (this._pages = []),
        (this._controls = {}),
        (this._templates = []),
        (this.$element = this._core.$element),
        (this._overrides = {
          next: this._core.next,
          prev: this._core.prev,
          to: this._core.to,
        }),
        (this._handlers = {
          "prepared.owl.carousel": t.proxy(function (e) {
            e.namespace &&
              this._core.settings.dotsData &&
              this._templates.push(
                '<div class="' +
                  this._core.settings.dotClass +
                  '">' +
                  t(e.content)
                    .find("[data-dot]")
                    .addBack("[data-dot]")
                    .attr("data-dot") +
                  "</div>"
              );
          }, this),
          "added.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 0, this._templates.pop());
          }, this),
          "remove.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._core.settings.dotsData &&
              this._templates.splice(t.position, 1);
          }, this),
          "changed.owl.carousel": t.proxy(function (t) {
            t.namespace && "position" == t.property.name && this.draw();
          }, this),
          "initialized.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              !this._initialized &&
              (this._core.trigger("initialize", null, "navigation"),
              this.initialize(),
              this.update(),
              this.draw(),
              (this._initialized = !0),
              this._core.trigger("initialized", null, "navigation"));
          }, this),
          "refreshed.owl.carousel": t.proxy(function (t) {
            t.namespace &&
              this._initialized &&
              (this._core.trigger("refresh", null, "navigation"),
              this.update(),
              this.draw(),
              this._core.trigger("refreshed", null, "navigation"));
          }, this),
        }),
        (this._core.options = t.extend({}, e.Defaults, this._core.options)),
        this.$element.on(this._handlers);
    };
    (e.Defaults = {
      nav: !1,
      navText: ["prev", "next"],
      navSpeed: !1,
      navElement: "div",
      navContainer: !1,
      navContainerClass: "owl-nav",
      navClass: ["owl-prev", "owl-next"],
      slideBy: 1,
      dotClass: "owl-dot",
      dotsClass: "owl-dots",
      dots: !0,
      dotsEach: !1,
      dotsData: !1,
      dotsSpeed: !1,
      dotsContainer: !1,
    }),
      (e.prototype.initialize = function () {
        var e,
          i = this._core.settings;
        for (e in ((this._controls.$relative = (
          i.navContainer
            ? t(i.navContainer)
            : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)
        ).addClass("disabled")),
        (this._controls.$previous = t("<" + i.navElement + ">")
          .addClass(i.navClass[0])
          .html(i.navText[0])
          .prependTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.prev(i.navSpeed);
            }, this)
          )),
        (this._controls.$next = t("<" + i.navElement + ">")
          .addClass(i.navClass[1])
          .html(i.navText[1])
          .appendTo(this._controls.$relative)
          .on(
            "click",
            t.proxy(function (t) {
              this.next(i.navSpeed);
            }, this)
          )),
        i.dotsData ||
          (this._templates = [
            t("<div>")
              .addClass(i.dotClass)
              .append(t("<span>"))
              .prop("outerHTML"),
          ]),
        (this._controls.$absolute = (
          i.dotsContainer
            ? t(i.dotsContainer)
            : t("<div>").addClass(i.dotsClass).appendTo(this.$element)
        ).addClass("disabled")),
        this._controls.$absolute.on(
          "click",
          "div",
          t.proxy(function (e) {
            var o = t(e.target).parent().is(this._controls.$absolute)
              ? t(e.target).index()
              : t(e.target).parent().index();
            e.preventDefault(), this.to(o, i.dotsSpeed);
          }, this)
        ),
        this._overrides))
          this._core[e] = t.proxy(this[e], this);
      }),
      (e.prototype.destroy = function () {
        var t, e, i, o;
        for (t in this._handlers) this.$element.off(t, this._handlers[t]);
        for (e in this._controls) this._controls[e].remove();
        for (o in this.overides) this._core[o] = this._overrides[o];
        for (i in Object.getOwnPropertyNames(this))
          "function" != typeof this[i] && (this[i] = null);
      }),
      (e.prototype.update = function () {
        var t,
          e,
          i = this._core.clones().length / 2,
          o = i + this._core.items().length,
          n = this._core.maximum(!0),
          s = this._core.settings,
          r = s.center || s.autoWidth || s.dotsData ? 1 : s.dotsEach || s.items;
        if (
          ("page" !== s.slideBy && (s.slideBy = Math.min(s.slideBy, s.items)),
          s.dots || "page" == s.slideBy)
        )
          for (this._pages = [], t = i, e = 0, 0; t < o; t++) {
            if (e >= r || 0 === e) {
              if (
                (this._pages.push({
                  start: Math.min(n, t - i),
                  end: t - i + r - 1,
                }),
                Math.min(n, t - i) === n)
              )
                break;
              e = 0;
            }
            e += this._core.mergers(this._core.relative(t));
          }
      }),
      (e.prototype.draw = function () {
        var e,
          i = this._core.settings,
          o = this._core.items().length <= i.items,
          n = this._core.relative(this._core.current()),
          s = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || o),
          i.nav &&
            (this._controls.$previous.toggleClass(
              "disabled",
              !s && n <= this._core.minimum(!0)
            ),
            this._controls.$next.toggleClass(
              "disabled",
              !s && n >= this._core.maximum(!0)
            )),
          this._controls.$absolute.toggleClass("disabled", !i.dots || o),
          i.dots &&
            ((e =
              this._pages.length - this._controls.$absolute.children().length),
            i.dotsData && 0 !== e
              ? this._controls.$absolute.html(this._templates.join(""))
              : e > 0
              ? this._controls.$absolute.append(
                  new Array(e + 1).join(this._templates[0])
                )
              : e < 0 && this._controls.$absolute.children().slice(e).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute
              .children()
              .eq(t.inArray(this.current(), this._pages))
              .addClass("active"));
      }),
      (e.prototype.onTrigger = function (e) {
        var i = this._core.settings;
        e.page = {
          index: t.inArray(this.current(), this._pages),
          count: this._pages.length,
          size:
            i &&
            (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items),
        };
      }),
      (e.prototype.current = function () {
        var e = this._core.relative(this._core.current());
        return t
          .grep(
            this._pages,
            t.proxy(function (t, i) {
              return t.start <= e && t.end >= e;
            }, this)
          )
          .pop();
      }),
      (e.prototype.getPosition = function (e) {
        var i,
          o,
          n = this._core.settings;
        return (
          "page" == n.slideBy
            ? ((i = t.inArray(this.current(), this._pages)),
              (o = this._pages.length),
              e ? ++i : --i,
              (i = this._pages[((i % o) + o) % o].start))
            : ((i = this._core.relative(this._core.current())),
              (o = this._core.items().length),
              e ? (i += n.slideBy) : (i -= n.slideBy)),
          i
        );
      }),
      (e.prototype.next = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e);
      }),
      (e.prototype.prev = function (e) {
        t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e);
      }),
      (e.prototype.to = function (e, i, o) {
        var n;
        !o && this._pages.length
          ? ((n = this._pages.length),
            t.proxy(this._overrides.to, this._core)(
              this._pages[((e % n) + n) % n].start,
              i
            ))
          : t.proxy(this._overrides.to, this._core)(e, i);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Navigation = e);
  })(window.Zepto || window.jQuery, window, document),
  (function (t, e) {
    "use strict";
    var i = function (o) {
      (this._core = o),
        (this._hashes = {}),
        (this.$element = this._core.$element),
        (this._handlers = {
          "initialized.owl.carousel": t.proxy(function (i) {
            i.namespace &&
              "URLHash" === this._core.settings.startPosition &&
              t(e).trigger("hashchange.owl.navigation");
          }, this),
          "prepared.owl.carousel": t.proxy(function (e) {
            if (e.namespace) {
              var i = t(e.content)
                .find("[data-hash]")
                .addBack("[data-hash]")
                .attr("data-hash");
              if (!i) return;
              this._hashes[i] = e.content;
            }
          }, this),
          "changed.owl.carousel": t.proxy(function (i) {
            if (i.namespace && "position" === i.property.name) {
              var o = this._core.items(
                  this._core.relative(this._core.current())
                ),
                n = t
                  .map(this._hashes, function (t, e) {
                    return t === o ? e : null;
                  })
                  .join();
              if (!n || e.location.hash.slice(1) === n) return;
              e.location.hash = n;
            }
          }, this),
        }),
        (this._core.options = t.extend({}, i.Defaults, this._core.options)),
        this.$element.on(this._handlers),
        t(e).on(
          "hashchange.owl.navigation",
          t.proxy(function (t) {
            var i = e.location.hash.substring(1),
              o = this._core.$stage.children(),
              n = this._hashes[i] && o.index(this._hashes[i]);
            undefined !== n &&
              n !== this._core.current() &&
              this._core.to(this._core.relative(n), !1, !0);
          }, this)
        );
    };
    (i.Defaults = { URLhashListener: !1 }),
      (i.prototype.destroy = function () {
        var i, o;
        for (i in (t(e).off("hashchange.owl.navigation"), this._handlers))
          this._core.$element.off(i, this._handlers[i]);
        for (o in Object.getOwnPropertyNames(this))
          "function" != typeof this[o] && (this[o] = null);
      }),
      (t.fn.owlCarousel.Constructor.Plugins.Hash = i);
  })(window.Zepto || window.jQuery, window, document),
  (function (t) {
    function e(e, i) {
      var s = !1,
        r = e.charAt(0).toUpperCase() + e.slice(1);
      return (
        t.each((e + " " + n.join(r + " ") + r).split(" "), function (t, e) {
          if (undefined !== o[e]) return (s = !i || e), !1;
        }),
        s
      );
    }
    function i(t) {
      return e(t, !0);
    }
    var o = t("<support>").get(0).style,
      n = "Webkit Moz O ms".split(" "),
      s = {
        transition: {
          end: {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd",
            transition: "transitionend",
          },
        },
        animation: {
          end: {
            WebkitAnimation: "webkitAnimationEnd",
            MozAnimation: "animationend",
            OAnimation: "oAnimationEnd",
            animation: "animationend",
          },
        },
      },
      r = function () {
        return !!e("transform");
      },
      a = function () {
        return !!e("perspective");
      },
      l = function () {
        return !!e("animation");
      };
    (function () {
      return !!e("transition");
    })() &&
      ((t.support.transition = new String(i("transition"))),
      (t.support.transition.end = s.transition.end[t.support.transition])),
      l() &&
        ((t.support.animation = new String(i("animation"))),
        (t.support.animation.end = s.animation.end[t.support.animation])),
      r() &&
        ((t.support.transform = new String(i("transform"))),
        (t.support.transform3d = a()));
  })(window.Zepto || window.jQuery, window, document),
  (function (t) {
    if ("function" == typeof define && define.amd) define(["jquery"], t);
    else if ("object" == typeof module && module.exports) {
      var e = require("jquery");
      t(e), (module.exports = e);
    } else t(jQuery);
  })(function (t) {
    function e(t) {
      this.init(t);
    }
    (e.prototype = {
      value: 0,
      size: 100,
      startAngle: -Math.PI,
      thickness: "auto",
      fill: { gradient: ["#3aeabb", "#fdd250"] },
      emptyFill: "rgba(0, 0, 0, .1)",
      animation: { duration: 1200, easing: "circleProgressEasing" },
      animationStartValue: 0,
      reverse: !1,
      lineCap: "butt",
      insertMode: "prepend",
      constructor: e,
      el: null,
      canvas: null,
      ctx: null,
      radius: 0,
      arcFill: null,
      lastFrameValue: 0,
      init: function (e) {
        t.extend(this, e),
          (this.radius = this.size / 2),
          this.initWidget(),
          this.initFill(),
          this.draw(),
          this.el.trigger("circle-inited");
      },
      initWidget: function () {
        this.canvas ||
          (this.canvas = t("<canvas>")[
            "prepend" == this.insertMode ? "prependTo" : "appendTo"
          ](this.el)[0]);
        var e = this.canvas;
        if (
          ((e.width = this.size),
          (e.height = this.size),
          (this.ctx = e.getContext("2d")),
          window.devicePixelRatio > 1)
        ) {
          var i = window.devicePixelRatio;
          (e.style.width = e.style.height = this.size + "px"),
            (e.width = e.height = this.size * i),
            this.ctx.scale(i, i);
        }
      },
      initFill: function () {
        function e() {
          var e = t("<canvas>")[0];
          (e.width = o.size),
            (e.height = o.size),
            e.getContext("2d").drawImage(i, 0, 0, r, r),
            (o.arcFill = o.ctx.createPattern(e, "no-repeat")),
            o.drawFrame(o.lastFrameValue);
        }
        var i,
          o = this,
          n = this.fill,
          s = this.ctx,
          r = this.size;
        if (!n) throw Error("The fill is not specified!");
        if (
          ("string" == typeof n && (n = { color: n }),
          n.color && (this.arcFill = n.color),
          n.gradient)
        ) {
          var a = n.gradient;
          if (1 == a.length) this.arcFill = a[0];
          else if (a.length > 1) {
            for (
              var l = n.gradientAngle || 0,
                c = n.gradientDirection || [
                  (r / 2) * (1 - Math.cos(l)),
                  (r / 2) * (1 + Math.sin(l)),
                  (r / 2) * (1 + Math.cos(l)),
                  (r / 2) * (1 - Math.sin(l)),
                ],
                h = s.createLinearGradient.apply(s, c),
                d = 0;
              d < a.length;
              d++
            ) {
              var u = a[d],
                p = d / (a.length - 1);
              t.isArray(u) && ((p = u[1]), (u = u[0])), h.addColorStop(p, u);
            }
            this.arcFill = h;
          }
        }
        n.image &&
          (n.image instanceof Image
            ? (i = n.image)
            : ((i = new Image()).src = n.image),
          i.complete ? e() : (i.onload = e));
      },
      draw: function () {
        this.animation
          ? this.drawAnimated(this.value)
          : this.drawFrame(this.value);
      },
      drawFrame: function (t) {
        (this.lastFrameValue = t),
          this.ctx.clearRect(0, 0, this.size, this.size),
          this.drawEmptyArc(t),
          this.drawArc(t);
      },
      drawArc: function (t) {
        if (0 !== t) {
          var e = this.ctx,
            i = this.radius,
            o = this.getThickness(),
            n = this.startAngle;
          e.save(),
            e.beginPath(),
            this.reverse
              ? e.arc(i, i, i - o / 2, n - 2 * Math.PI * t, n)
              : e.arc(i, i, i - o / 2, n, n + 2 * Math.PI * t),
            (e.lineWidth = o),
            (e.lineCap = this.lineCap),
            (e.strokeStyle = this.arcFill),
            e.stroke(),
            e.restore();
        }
      },
      drawEmptyArc: function (t) {
        var e = this.ctx,
          i = this.radius,
          o = this.getThickness(),
          n = this.startAngle;
        t < 1 &&
          (e.save(),
          e.beginPath(),
          t <= 0
            ? e.arc(i, i, i - o / 2, 0, 2 * Math.PI)
            : this.reverse
            ? e.arc(i, i, i - o / 2, n, n - 2 * Math.PI * t)
            : e.arc(i, i, i - o / 2, n + 2 * Math.PI * t, n),
          (e.lineWidth = o),
          (e.strokeStyle = this.emptyFill),
          e.stroke(),
          e.restore());
      },
      drawAnimated: function (e) {
        var i = this,
          o = this.el,
          n = t(this.canvas);
        n.stop(!0, !1),
          o.trigger("circle-animation-start"),
          n
            .css({ animationProgress: 0 })
            .animate(
              { animationProgress: 1 },
              t.extend({}, this.animation, {
                step: function (t) {
                  var n = i.animationStartValue * (1 - t) + e * t;
                  i.drawFrame(n),
                    o.trigger("circle-animation-progress", [t, n]);
                },
              })
            )
            .promise()
            .always(function () {
              o.trigger("circle-animation-end");
            });
      },
      getThickness: function () {
        return t.isNumeric(this.thickness) ? this.thickness : this.size / 14;
      },
      getValue: function () {
        return this.value;
      },
      setValue: function (t) {
        this.animation && (this.animationStartValue = this.lastFrameValue),
          (this.value = t),
          this.draw();
      },
    }),
      (t.circleProgress = { defaults: e.prototype }),
      (t.easing.circleProgressEasing = function (t) {
        return t < 0.5
          ? 0.5 * (t *= 2) * t * t
          : 1 - 0.5 * (t = 2 - 2 * t) * t * t;
      }),
      (t.fn.circleProgress = function (i, o) {
        var n = "circle-progress",
          s = this.data(n);
        if ("widget" == i) {
          if (!s)
            throw Error(
              'Calling "widget" method on not initialized instance is forbidden'
            );
          return s.canvas;
        }
        if ("value" == i) {
          if (!s)
            throw Error(
              'Calling "value" method on not initialized instance is forbidden'
            );
          if (void 0 === o) return s.getValue();
          var r = arguments[1];
          return this.each(function () {
            t(this).data(n).setValue(r);
          });
        }
        return this.each(function () {
          var o = t(this),
            s = o.data(n),
            r = t.isPlainObject(i) ? i : {};
          if (s) s.init(r);
          else {
            var a = t.extend({}, o.data());
            "string" == typeof a.fill && (a.fill = JSON.parse(a.fill)),
              "string" == typeof a.animation &&
                (a.animation = JSON.parse(a.animation)),
              ((r = t.extend(a, r)).el = o),
              (s = new e(r)),
              o.data(n, s);
          }
        });
      });
  }),
  (function (t) {
    "use strict";
    function e(e, n) {
      (this.element = e),
        (this.settings = t.extend({}, o, n)),
        (this._defaults = o),
        (this._name = i),
        this.init();
    }
    var i = "mgGlitch",
      o = {
        destroy: !1,
        glitch: !0,
        scale: !0,
        blend: !0,
        blendModeType: "hue",
        glitch1TimeMin: 600,
        glitch1TimeMax: 900,
        glitch2TimeMin: 10,
        glitch2TimeMax: 115,
        zIndexStart: 5,
      };
    t.extend(e.prototype, {
      init: function () {
        this.glitch();
      },
      glitch: function () {
        function e(t, e) {
          return Math.floor(Math.random() * (e - t + 1)) + t;
        }
        var i = this.element,
          o = this.settings.scale,
          n = this.settings.glitch1TimeMin,
          s = this.settings.glitch1TimeMax,
          r = this.settings.glitch2TimeMin,
          a = this.settings.glitch2TimeMax,
          l = this.settings.zIndexStart;
        if (!0 === this.settings.destroy)
          (t(i).hasClass("el-front-1") ||
            t(i).hasClass("front-3") ||
            t(i).hasClass("front-2")) &&
            t(".front-1, .front-2, .front-3").remove(),
            t(".back").removeClass("back");
        else if (!1 === this.settings.destroy) {
          if (
            (t(i)
              .clone()
              .insertBefore(i)
              .addClass("back")
              .css({ "z-index": l }),
            !0 === this.settings.blend)
          )
            t(i)
              .clone()
              .insertAfter(i)
              .addClass("front-3")
              .css({
                "z-index": l + 3,
                "mix-blend-mode": this.settings.blendModeType,
              }),
              (function n() {
                var s = e(10, 1900),
                  l = e(10, 1300),
                  c = e(0, 40),
                  h = e(0, 40),
                  d = e(r, a);
                if (!0 === o)
                  var u = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);
                else !1 === o && (u = 1);
                t(i)
                  .next()
                  .next()
                  .css({
                    clip: "rect(" + s + "px, 9999px, " + l + "px,0px)",
                    left: c,
                    right: h,
                    "-webkit-transform": "scale(" + u + ")",
                    "-ms-transform": "scale(" + u + ")",
                    transform: "scale(" + u + ")",
                  }),
                  setTimeout(n, d);
              })();
          if (!0 === this.settings.glitch)
            t(i)
              .clone()
              .insertAfter(i)
              .addClass("front-2")
              .css({ "z-index": l + 2 }),
              t(".back")
                .next()
                .addClass("front-1")
                .css({ "z-index": l + 1 }),
              (function o() {
                var r = e(10, 1900),
                  a = e(10, 1300),
                  l = e(0, 16),
                  c = e(0, 16),
                  h = e(n, s);
                t(i).css({
                  clip: "rect(" + r + "px, 9999px, " + a + "px,0px)",
                  right: c,
                  left: l,
                }),
                  setTimeout(o, h);
              })(),
              (function n() {
                var s = e(10, 1900),
                  l = e(10, 1300),
                  c = e(0, 40),
                  h = e(0, 40),
                  d = e(r, a);
                if (!0 === o)
                  var u = (Math.random() * (1.1 - 0.9) + 0.9).toFixed(2);
                else !1 === o && (u = 1);
                t(i)
                  .next()
                  .css({
                    clip: "rect(" + s + "px, 9999px, " + l + "px,0px)",
                    left: c,
                    right: h,
                    "-webkit-transform": "scale(" + u + ")",
                    "-ms-transform": "scale(" + u + ")",
                    transform: "scale(" + u + ")",
                  }),
                  setTimeout(n, d);
              })();
        }
      },
    }),
      (t.fn[i] = function (t) {
        return this.each(function () {
          new e(this, t);
        });
      });
  })(jQuery, window, document),
  $("#particles-js").length)
) {
  function hexToRgb(t) {
    t = t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (t, e, i, o) {
      return e + e + i + i + o + o;
    });
    var e = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
    return e
      ? { r: parseInt(e[1], 16), g: parseInt(e[2], 16), b: parseInt(e[3], 16) }
      : null;
  }
  function clamp(t, e, i) {
    return Math.min(Math.max(t, e), i);
  }
  function isInArray(t, e) {
    return e.indexOf(t) > -1;
  }
  var pJS = function (t, e) {
    var i = document.querySelector("#" + t + " > .particles-js-canvas-el");
    this.pJS = {
      canvas: { el: i, w: i.offsetWidth, h: i.offsetHeight },
      particles: {
        number: { value: 400, density: { enable: !0, value_area: 800 } },
        color: { value: "#fff" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#ff0000" },
          polygon: { nb_sides: 5 },
          image: { src: "", width: 100, height: 100 },
        },
        opacity: {
          value: 1,
          random: !1,
          anim: { enable: !1, speed: 2, opacity_min: 0, sync: !1 },
        },
        size: {
          value: 20,
          random: !1,
          anim: { enable: !1, speed: 20, size_min: 0, sync: !1 },
        },
        line_linked: {
          enable: !0,
          distance: 100,
          color: "#fff",
          opacity: 1,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 2,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          bounce: !1,
          attract: { enable: !1, rotateX: 3e3, rotateY: 3e3 },
        },
        array: [],
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !0, mode: "grab" },
          onclick: { enable: !0, mode: "push" },
          resize: !0,
        },
        modes: {
          grab: { distance: 100, line_linked: { opacity: 1 } },
          bubble: { distance: 200, size: 80, duration: 0.4 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
        mouse: {},
      },
      retina_detect: !1,
      fn: { interact: {}, modes: {}, vendors: {} },
      tmp: {},
    };
    var o = this.pJS;
    e && Object.deepExtend(o, e),
      (o.tmp.obj = {
        size_value: o.particles.size.value,
        size_anim_speed: o.particles.size.anim.speed,
        move_speed: o.particles.move.speed,
        line_linked_distance: o.particles.line_linked.distance,
        line_linked_width: o.particles.line_linked.width,
        mode_grab_distance: o.interactivity.modes.grab.distance,
        mode_bubble_distance: o.interactivity.modes.bubble.distance,
        mode_bubble_size: o.interactivity.modes.bubble.size,
        mode_repulse_distance: o.interactivity.modes.repulse.distance,
      }),
      (o.fn.retinaInit = function () {
        o.retina_detect && window.devicePixelRatio > 1
          ? ((o.canvas.pxratio = window.devicePixelRatio), (o.tmp.retina = !0))
          : ((o.canvas.pxratio = 1), (o.tmp.retina = !1)),
          (o.canvas.w = o.canvas.el.offsetWidth * o.canvas.pxratio),
          (o.canvas.h = o.canvas.el.offsetHeight * o.canvas.pxratio),
          (o.particles.size.value = o.tmp.obj.size_value * o.canvas.pxratio),
          (o.particles.size.anim.speed =
            o.tmp.obj.size_anim_speed * o.canvas.pxratio),
          (o.particles.move.speed = o.tmp.obj.move_speed * o.canvas.pxratio),
          (o.particles.line_linked.distance =
            o.tmp.obj.line_linked_distance * o.canvas.pxratio),
          (o.interactivity.modes.grab.distance =
            o.tmp.obj.mode_grab_distance * o.canvas.pxratio),
          (o.interactivity.modes.bubble.distance =
            o.tmp.obj.mode_bubble_distance * o.canvas.pxratio),
          (o.particles.line_linked.width =
            o.tmp.obj.line_linked_width * o.canvas.pxratio),
          (o.interactivity.modes.bubble.size =
            o.tmp.obj.mode_bubble_size * o.canvas.pxratio),
          (o.interactivity.modes.repulse.distance =
            o.tmp.obj.mode_repulse_distance * o.canvas.pxratio);
      }),
      (o.fn.canvasInit = function () {
        o.canvas.ctx = o.canvas.el.getContext("2d");
      }),
      (o.fn.canvasSize = function () {
        (o.canvas.el.width = o.canvas.w),
          (o.canvas.el.height = o.canvas.h),
          o &&
            o.interactivity.events.resize &&
            window.addEventListener("resize", function () {
              (o.canvas.w = o.canvas.el.offsetWidth),
                (o.canvas.h = o.canvas.el.offsetHeight),
                o.tmp.retina &&
                  ((o.canvas.w *= o.canvas.pxratio),
                  (o.canvas.h *= o.canvas.pxratio)),
                (o.canvas.el.width = o.canvas.w),
                (o.canvas.el.height = o.canvas.h),
                o.particles.move.enable ||
                  (o.fn.particlesEmpty(),
                  o.fn.particlesCreate(),
                  o.fn.particlesDraw(),
                  o.fn.vendors.densityAutoParticles()),
                o.fn.vendors.densityAutoParticles();
            });
      }),
      (o.fn.canvasPaint = function () {
        o.canvas.ctx.fillRect(0, 0, o.canvas.w, o.canvas.h);
      }),
      (o.fn.canvasClear = function () {
        o.canvas.ctx.clearRect(0, 0, o.canvas.w, o.canvas.h);
      }),
      (o.fn.particle = function (t, e, i) {
        if (
          ((this.radius =
            (o.particles.size.random ? Math.random() : 1) *
            o.particles.size.value),
          o.particles.size.anim.enable &&
            ((this.size_status = !1),
            (this.vs = o.particles.size.anim.speed / 100),
            o.particles.size.anim.sync || (this.vs = this.vs * Math.random())),
          (this.x = i ? i.x : Math.random() * o.canvas.w),
          (this.y = i ? i.y : Math.random() * o.canvas.h),
          this.x > o.canvas.w - 2 * this.radius
            ? (this.x = this.x - this.radius)
            : this.x < 2 * this.radius && (this.x = this.x + this.radius),
          this.y > o.canvas.h - 2 * this.radius
            ? (this.y = this.y - this.radius)
            : this.y < 2 * this.radius && (this.y = this.y + this.radius),
          o.particles.move.bounce && o.fn.vendors.checkOverlap(this, i),
          (this.color = {}),
          "object" == typeof t.value)
        )
          if (t.value instanceof Array) {
            var n =
              t.value[
                Math.floor(Math.random() * o.particles.color.value.length)
              ];
            this.color.rgb = hexToRgb(n);
          } else
            null != t.value.r &&
              null != t.value.g &&
              null != t.value.b &&
              (this.color.rgb = { r: t.value.r, g: t.value.g, b: t.value.b }),
              null != t.value.h &&
                null != t.value.s &&
                null != t.value.l &&
                (this.color.hsl = { h: t.value.h, s: t.value.s, l: t.value.l });
        else
          "random" == t.value
            ? (this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0,
              })
            : "string" == typeof t.value &&
              ((this.color = t), (this.color.rgb = hexToRgb(this.color.value)));
        (this.opacity =
          (o.particles.opacity.random ? Math.random() : 1) *
          o.particles.opacity.value),
          o.particles.opacity.anim.enable &&
            ((this.opacity_status = !1),
            (this.vo = o.particles.opacity.anim.speed / 100),
            o.particles.opacity.anim.sync ||
              (this.vo = this.vo * Math.random()));
        var s = {};
        switch (o.particles.move.direction) {
          case "top":
            s = { x: 0, y: -1 };
            break;
          case "top-right":
            s = { x: 0.5, y: -0.5 };
            break;
          case "right":
            s = { x: 1, y: -0 };
            break;
          case "bottom-right":
            s = { x: 0.5, y: 0.5 };
            break;
          case "bottom":
            s = { x: 0, y: 1 };
            break;
          case "bottom-left":
            s = { x: -0.5, y: 1 };
            break;
          case "left":
            s = { x: -1, y: 0 };
            break;
          case "top-left":
            s = { x: -0.5, y: -0.5 };
            break;
          default:
            s = { x: 0, y: 0 };
        }
        o.particles.move.straight
          ? ((this.vx = s.x),
            (this.vy = s.y),
            o.particles.move.random &&
              ((this.vx = this.vx * Math.random()),
              (this.vy = this.vy * Math.random())))
          : ((this.vx = s.x + Math.random() - 0.5),
            (this.vy = s.y + Math.random() - 0.5)),
          (this.vx_i = this.vx),
          (this.vy_i = this.vy);
        var r = o.particles.shape.type;
        if ("object" == typeof r) {
          if (r instanceof Array) {
            var a = r[Math.floor(Math.random() * r.length)];
            this.shape = a;
          }
        } else this.shape = r;
        if ("image" == this.shape) {
          var l = o.particles.shape;
          (this.img = {
            src: l.image.src,
            ratio: l.image.width / l.image.height,
          }),
            this.img.ratio || (this.img.ratio = 1),
            "svg" == o.tmp.img_type &&
              null != o.tmp.source_svg &&
              (o.fn.vendors.createSvgImg(this),
              o.tmp.pushing && (this.img.loaded = !1));
        }
      }),
      (o.fn.particle.prototype.draw = function () {
        var t = this;
        if (null != t.radius_bubble) var e = t.radius_bubble;
        else e = t.radius;
        if (null != t.opacity_bubble) var i = t.opacity_bubble;
        else i = t.opacity;
        if (t.color.rgb)
          var n =
            "rgba(" +
            t.color.rgb.r +
            "," +
            t.color.rgb.g +
            "," +
            t.color.rgb.b +
            "," +
            i +
            ")";
        else
          n =
            "hsla(" +
            t.color.hsl.h +
            "," +
            t.color.hsl.s +
            "%," +
            t.color.hsl.l +
            "%," +
            i +
            ")";
        switch (
          ((o.canvas.ctx.fillStyle = n), o.canvas.ctx.beginPath(), t.shape)
        ) {
          case "circle":
            o.canvas.ctx.arc(t.x, t.y, e, 0, 2 * Math.PI, !1);
            break;
          case "edge":
            o.canvas.ctx.rect(t.x - e, t.y - e, 2 * e, 2 * e);
            break;
          case "triangle":
            o.fn.vendors.drawShape(
              o.canvas.ctx,
              t.x - e,
              t.y + e / 1.66,
              2 * e,
              3,
              2
            );
            break;
          case "polygon":
            o.fn.vendors.drawShape(
              o.canvas.ctx,
              t.x - e / (o.particles.shape.polygon.nb_sides / 3.5),
              t.y - e / 0.76,
              (2.66 * e) / (o.particles.shape.polygon.nb_sides / 3),
              o.particles.shape.polygon.nb_sides,
              1
            );
            break;
          case "star":
            o.fn.vendors.drawShape(
              o.canvas.ctx,
              t.x - (2 * e) / (o.particles.shape.polygon.nb_sides / 4),
              t.y - e / 1.52,
              (2 * e * 2.66) / (o.particles.shape.polygon.nb_sides / 3),
              o.particles.shape.polygon.nb_sides,
              2
            );
            break;
          case "image":
            if ("svg" == o.tmp.img_type) var s = t.img.obj;
            else s = o.tmp.img_obj;
            s &&
              o.canvas.ctx.drawImage(
                s,
                t.x - e,
                t.y - e,
                2 * e,
                (2 * e) / t.img.ratio
              );
        }
        o.canvas.ctx.closePath(),
          o.particles.shape.stroke.width > 0 &&
            ((o.canvas.ctx.strokeStyle = o.particles.shape.stroke.color),
            (o.canvas.ctx.lineWidth = o.particles.shape.stroke.width),
            o.canvas.ctx.stroke()),
          o.canvas.ctx.fill();
      }),
      (o.fn.particlesCreate = function () {
        for (var t = 0; t < o.particles.number.value; t++)
          o.particles.array.push(
            new o.fn.particle(o.particles.color, o.particles.opacity.value)
          );
      }),
      (o.fn.particlesUpdate = function () {
        for (var t = 0; t < o.particles.array.length; t++) {
          var e = o.particles.array[t];
          if (o.particles.move.enable) {
            var i = o.particles.move.speed / 2;
            (e.x += e.vx * i), (e.y += e.vy * i);
          }
          if (
            (o.particles.opacity.anim.enable &&
              (1 == e.opacity_status
                ? (e.opacity >= o.particles.opacity.value &&
                    (e.opacity_status = !1),
                  (e.opacity += e.vo))
                : (e.opacity <= o.particles.opacity.anim.opacity_min &&
                    (e.opacity_status = !0),
                  (e.opacity -= e.vo)),
              e.opacity < 0 && (e.opacity = 0)),
            o.particles.size.anim.enable &&
              (1 == e.size_status
                ? (e.radius >= o.particles.size.value && (e.size_status = !1),
                  (e.radius += e.vs))
                : (e.radius <= o.particles.size.anim.size_min &&
                    (e.size_status = !0),
                  (e.radius -= e.vs)),
              e.radius < 0 && (e.radius = 0)),
            "bounce" == o.particles.move.out_mode)
          )
            var n = {
              x_left: e.radius,
              x_right: o.canvas.w,
              y_top: e.radius,
              y_bottom: o.canvas.h,
            };
          else
            n = {
              x_left: -e.radius,
              x_right: o.canvas.w + e.radius,
              y_top: -e.radius,
              y_bottom: o.canvas.h + e.radius,
            };
          if (
            "bounce" ===
            (e.x - e.radius > o.canvas.w
              ? ((e.x = n.x_left), (e.y = Math.random() * o.canvas.h))
              : e.x + e.radius < 0 &&
                ((e.x = n.x_right), (e.y = Math.random() * o.canvas.h)),
            e.y - e.radius > o.canvas.h
              ? ((e.y = n.y_top), (e.x = Math.random() * o.canvas.w))
              : e.y + e.radius < 0 &&
                ((e.y = n.y_bottom), (e.x = Math.random() * o.canvas.w)),
            o.particles.move.out_mode)
          )
            (e.x + e.radius > o.canvas.w || e.x - e.radius < 0) &&
              (e.vx = -e.vx),
              (e.y + e.radius > o.canvas.h || e.y - e.radius < 0) &&
                (e.vy = -e.vy);
          if (
            (isInArray("grab", o.interactivity.events.onhover.mode) &&
              o.fn.modes.grabParticle(e),
            (isInArray("bubble", o.interactivity.events.onhover.mode) ||
              isInArray("bubble", o.interactivity.events.onclick.mode)) &&
              o.fn.modes.bubbleParticle(e),
            (isInArray("repulse", o.interactivity.events.onhover.mode) ||
              isInArray("repulse", o.interactivity.events.onclick.mode)) &&
              o.fn.modes.repulseParticle(e),
            o.particles.line_linked.enable || o.particles.move.attract.enable)
          )
            for (var s = t + 1; s < o.particles.array.length; s++) {
              var r = o.particles.array[s];
              o.particles.line_linked.enable &&
                o.fn.interact.linkParticles(e, r),
                o.particles.move.attract.enable &&
                  o.fn.interact.attractParticles(e, r),
                o.particles.move.bounce && o.fn.interact.bounceParticles(e, r);
            }
        }
      }),
      (o.fn.particlesDraw = function () {
        o.canvas.ctx.clearRect(0, 0, o.canvas.w, o.canvas.h),
          o.fn.particlesUpdate();
        for (var t = 0; t < o.particles.array.length; t++) {
          o.particles.array[t].draw();
        }
      }),
      (o.fn.particlesEmpty = function () {
        o.particles.array = [];
      }),
      (o.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(o.fn.checkAnimFrame),
          cancelRequestAnimFrame(o.fn.drawAnimFrame),
          (o.tmp.source_svg = void 0),
          (o.tmp.img_obj = void 0),
          (o.tmp.count_svg = 0),
          o.fn.particlesEmpty(),
          o.fn.canvasClear(),
          o.fn.vendors.start();
      }),
      (o.fn.interact.linkParticles = function (t, e) {
        var i = t.x - e.x,
          n = t.y - e.y,
          s = Math.sqrt(i * i + n * n);
        if (s <= o.particles.line_linked.distance) {
          var r =
            o.particles.line_linked.opacity -
            s /
              (1 / o.particles.line_linked.opacity) /
              o.particles.line_linked.distance;
          if (r > 0) {
            var a = o.particles.line_linked.color_rgb_line;
            (o.canvas.ctx.strokeStyle =
              "rgba(" + a.r + "," + a.g + "," + a.b + "," + r + ")"),
              (o.canvas.ctx.lineWidth = o.particles.line_linked.width),
              o.canvas.ctx.beginPath(),
              o.canvas.ctx.moveTo(t.x, t.y),
              o.canvas.ctx.lineTo(e.x, e.y),
              o.canvas.ctx.stroke(),
              o.canvas.ctx.closePath();
          }
        }
      }),
      (o.fn.interact.attractParticles = function (t, e) {
        var i = t.x - e.x,
          n = t.y - e.y;
        if (Math.sqrt(i * i + n * n) <= o.particles.line_linked.distance) {
          var s = i / (1e3 * o.particles.move.attract.rotateX),
            r = n / (1e3 * o.particles.move.attract.rotateY);
          (t.vx -= s), (t.vy -= r), (e.vx += s), (e.vy += r);
        }
      }),
      (o.fn.interact.bounceParticles = function (t, e) {
        var i = t.x - e.x,
          o = t.y - e.y,
          n = Math.sqrt(i * i + o * o);
        t.radius + e.radius >= n &&
          ((t.vx = -t.vx), (t.vy = -t.vy), (e.vx = -e.vx), (e.vy = -e.vy));
      }),
      (o.fn.modes.pushParticles = function (t, e) {
        o.tmp.pushing = !0;
        for (var i = 0; t > i; i++)
          o.particles.array.push(
            new o.fn.particle(o.particles.color, o.particles.opacity.value, {
              x: e ? e.pos_x : Math.random() * o.canvas.w,
              y: e ? e.pos_y : Math.random() * o.canvas.h,
            })
          ),
            i == t - 1 &&
              (o.particles.move.enable || o.fn.particlesDraw(),
              (o.tmp.pushing = !1));
      }),
      (o.fn.modes.removeParticles = function (t) {
        o.particles.array.splice(0, t),
          o.particles.move.enable || o.fn.particlesDraw();
      }),
      (o.fn.modes.bubbleParticle = function (t) {
        function e() {
          (t.opacity_bubble = t.opacity), (t.radius_bubble = t.radius);
        }
        function i(e, i, n, s, r) {
          if (e != i)
            if (o.tmp.bubble_duration_end) {
              if (null != n)
                (l =
                  e +
                  (e -
                    (s -
                      (d * (s - e)) / o.interactivity.modes.bubble.duration))),
                  "size" == r && (t.radius_bubble = l),
                  "opacity" == r && (t.opacity_bubble = l);
            } else if (h <= o.interactivity.modes.bubble.distance) {
              if (null != n) var a = n;
              else a = s;
              if (a != e) {
                var l =
                  s - (d * (s - e)) / o.interactivity.modes.bubble.duration;
                "size" == r && (t.radius_bubble = l),
                  "opacity" == r && (t.opacity_bubble = l);
              }
            } else
              "size" == r && (t.radius_bubble = void 0),
                "opacity" == r && (t.opacity_bubble = void 0);
        }
        if (
          o.interactivity.events.onhover.enable &&
          isInArray("bubble", o.interactivity.events.onhover.mode)
        ) {
          var n = t.x - o.interactivity.mouse.pos_x,
            s = t.y - o.interactivity.mouse.pos_y,
            r =
              1 -
              (h = Math.sqrt(n * n + s * s)) /
                o.interactivity.modes.bubble.distance;
          if (h <= o.interactivity.modes.bubble.distance) {
            if (r >= 0 && "mousemove" == o.interactivity.status) {
              if (o.interactivity.modes.bubble.size != o.particles.size.value)
                if (
                  o.interactivity.modes.bubble.size > o.particles.size.value
                ) {
                  (l = t.radius + o.interactivity.modes.bubble.size * r) >= 0 &&
                    (t.radius_bubble = l);
                } else {
                  var a = t.radius - o.interactivity.modes.bubble.size,
                    l = t.radius - a * r;
                  t.radius_bubble = l > 0 ? l : 0;
                }
              if (
                o.interactivity.modes.bubble.opacity !=
                o.particles.opacity.value
              )
                if (
                  o.interactivity.modes.bubble.opacity >
                  o.particles.opacity.value
                ) {
                  (c = o.interactivity.modes.bubble.opacity * r) > t.opacity &&
                    c <= o.interactivity.modes.bubble.opacity &&
                    (t.opacity_bubble = c);
                } else {
                  var c;
                  (c =
                    t.opacity -
                    (o.particles.opacity.value -
                      o.interactivity.modes.bubble.opacity) *
                      r) < t.opacity &&
                    c >= o.interactivity.modes.bubble.opacity &&
                    (t.opacity_bubble = c);
                }
            }
          } else e();
          "mouseleave" == o.interactivity.status && e();
        } else if (
          o.interactivity.events.onclick.enable &&
          isInArray("bubble", o.interactivity.events.onclick.mode)
        ) {
          if (o.tmp.bubble_clicking) {
            (n = t.x - o.interactivity.mouse.click_pos_x),
              (s = t.y - o.interactivity.mouse.click_pos_y);
            var h = Math.sqrt(n * n + s * s),
              d =
                (new Date().getTime() - o.interactivity.mouse.click_time) / 1e3;
            d > o.interactivity.modes.bubble.duration &&
              (o.tmp.bubble_duration_end = !0),
              d > 2 * o.interactivity.modes.bubble.duration &&
                ((o.tmp.bubble_clicking = !1),
                (o.tmp.bubble_duration_end = !1));
          }
          o.tmp.bubble_clicking &&
            (i(
              o.interactivity.modes.bubble.size,
              o.particles.size.value,
              t.radius_bubble,
              t.radius,
              "size"
            ),
            i(
              o.interactivity.modes.bubble.opacity,
              o.particles.opacity.value,
              t.opacity_bubble,
              t.opacity,
              "opacity"
            ));
        }
      }),
      (o.fn.modes.repulseParticle = function (t) {
        if (
          o.interactivity.events.onhover.enable &&
          isInArray("repulse", o.interactivity.events.onhover.mode) &&
          "mousemove" == o.interactivity.status
        ) {
          var e = t.x - o.interactivity.mouse.pos_x,
            i = t.y - o.interactivity.mouse.pos_y,
            n = Math.sqrt(e * e + i * i),
            s = { x: e / n, y: i / n },
            r = clamp(
              (1 / (l = o.interactivity.modes.repulse.distance)) *
                (-1 * Math.pow(n / l, 2) + 1) *
                l *
                100,
              0,
              50
            ),
            a = { x: t.x + s.x * r, y: t.y + s.y * r };
          "bounce" == o.particles.move.out_mode
            ? (a.x - t.radius > 0 && a.x + t.radius < o.canvas.w && (t.x = a.x),
              a.y - t.radius > 0 && a.y + t.radius < o.canvas.h && (t.y = a.y))
            : ((t.x = a.x), (t.y = a.y));
        } else if (
          o.interactivity.events.onclick.enable &&
          isInArray("repulse", o.interactivity.events.onclick.mode)
        )
          if (
            (o.tmp.repulse_finish ||
              (o.tmp.repulse_count++,
              o.tmp.repulse_count == o.particles.array.length &&
                (o.tmp.repulse_finish = !0)),
            o.tmp.repulse_clicking)
          ) {
            var l = Math.pow(o.interactivity.modes.repulse.distance / 6, 3),
              c = o.interactivity.mouse.click_pos_x - t.x,
              h = o.interactivity.mouse.click_pos_y - t.y,
              d = c * c + h * h,
              u = (-l / d) * 1;
            l >= d &&
              (function () {
                var e = Math.atan2(h, c);
                if (
                  ((t.vx = u * Math.cos(e)),
                  (t.vy = u * Math.sin(e)),
                  "bounce" == o.particles.move.out_mode)
                ) {
                  var i = { x: t.x + t.vx, y: t.y + t.vy };
                  (i.x + t.radius > o.canvas.w || i.x - t.radius < 0) &&
                    (t.vx = -t.vx),
                    (i.y + t.radius > o.canvas.h || i.y - t.radius < 0) &&
                      (t.vy = -t.vy);
                }
              })();
          } else
            0 == o.tmp.repulse_clicking && ((t.vx = t.vx_i), (t.vy = t.vy_i));
      }),
      (o.fn.modes.grabParticle = function (t) {
        if (
          o.interactivity.events.onhover.enable &&
          "mousemove" == o.interactivity.status
        ) {
          var e = t.x - o.interactivity.mouse.pos_x,
            i = t.y - o.interactivity.mouse.pos_y,
            n = Math.sqrt(e * e + i * i);
          if (n <= o.interactivity.modes.grab.distance) {
            var s =
              o.interactivity.modes.grab.line_linked.opacity -
              n /
                (1 / o.interactivity.modes.grab.line_linked.opacity) /
                o.interactivity.modes.grab.distance;
            if (s > 0) {
              var r = o.particles.line_linked.color_rgb_line;
              (o.canvas.ctx.strokeStyle =
                "rgba(" + r.r + "," + r.g + "," + r.b + "," + s + ")"),
                (o.canvas.ctx.lineWidth = o.particles.line_linked.width),
                o.canvas.ctx.beginPath(),
                o.canvas.ctx.moveTo(t.x, t.y),
                o.canvas.ctx.lineTo(
                  o.interactivity.mouse.pos_x,
                  o.interactivity.mouse.pos_y
                ),
                o.canvas.ctx.stroke(),
                o.canvas.ctx.closePath();
            }
          }
        }
      }),
      (o.fn.vendors.eventsListeners = function () {
        "window" == o.interactivity.detect_on
          ? (o.interactivity.el = window)
          : (o.interactivity.el = o.canvas.el),
          (o.interactivity.events.onhover.enable ||
            o.interactivity.events.onclick.enable) &&
            (o.interactivity.el.addEventListener("mousemove", function (t) {
              if (o.interactivity.el == window)
                var e = t.clientX,
                  i = t.clientY;
              else (e = t.offsetX || t.clientX), (i = t.offsetY || t.clientY);
              (o.interactivity.mouse.pos_x = e),
                (o.interactivity.mouse.pos_y = i),
                o.tmp.retina &&
                  ((o.interactivity.mouse.pos_x *= o.canvas.pxratio),
                  (o.interactivity.mouse.pos_y *= o.canvas.pxratio)),
                (o.interactivity.status = "mousemove");
            }),
            o.interactivity.el.addEventListener("mouseleave", function (t) {
              (o.interactivity.mouse.pos_x = null),
                (o.interactivity.mouse.pos_y = null),
                (o.interactivity.status = "mouseleave");
            })),
          o.interactivity.events.onclick.enable &&
            o.interactivity.el.addEventListener("click", function () {
              if (
                ((o.interactivity.mouse.click_pos_x =
                  o.interactivity.mouse.pos_x),
                (o.interactivity.mouse.click_pos_y =
                  o.interactivity.mouse.pos_y),
                (o.interactivity.mouse.click_time = new Date().getTime()),
                o.interactivity.events.onclick.enable)
              )
                switch (o.interactivity.events.onclick.mode) {
                  case "push":
                    o.particles.move.enable ||
                    1 == o.interactivity.modes.push.particles_nb
                      ? o.fn.modes.pushParticles(
                          o.interactivity.modes.push.particles_nb,
                          o.interactivity.mouse
                        )
                      : o.interactivity.modes.push.particles_nb > 1 &&
                        o.fn.modes.pushParticles(
                          o.interactivity.modes.push.particles_nb
                        );
                    break;
                  case "remove":
                    o.fn.modes.removeParticles(
                      o.interactivity.modes.remove.particles_nb
                    );
                    break;
                  case "bubble":
                    o.tmp.bubble_clicking = !0;
                    break;
                  case "repulse":
                    (o.tmp.repulse_clicking = !0),
                      (o.tmp.repulse_count = 0),
                      (o.tmp.repulse_finish = !1),
                      setTimeout(function () {
                        o.tmp.repulse_clicking = !1;
                      }, 1e3 * o.interactivity.modes.repulse.duration);
                }
            });
      }),
      (o.fn.vendors.densityAutoParticles = function () {
        if (o.particles.number.density.enable) {
          var t = (o.canvas.el.width * o.canvas.el.height) / 1e3;
          o.tmp.retina && (t /= 2 * o.canvas.pxratio);
          var e =
              (t * o.particles.number.value) /
              o.particles.number.density.value_area,
            i = o.particles.array.length - e;
          0 > i
            ? o.fn.modes.pushParticles(Math.abs(i))
            : o.fn.modes.removeParticles(i);
        }
      }),
      (o.fn.vendors.checkOverlap = function (t, e) {
        for (var i = 0; i < o.particles.array.length; i++) {
          var n = o.particles.array[i],
            s = t.x - n.x,
            r = t.y - n.y;
          Math.sqrt(s * s + r * r) <= t.radius + n.radius &&
            ((t.x = e ? e.x : Math.random() * o.canvas.w),
            (t.y = e ? e.y : Math.random() * o.canvas.h),
            o.fn.vendors.checkOverlap(t));
        }
      }),
      (o.fn.vendors.createSvgImg = function (t) {
        var e = o.tmp.source_svg.replace(
            /#([0-9A-F]{3,6})/gi,
            function (e, i, o, n) {
              if (t.color.rgb)
                var s =
                  "rgba(" +
                  t.color.rgb.r +
                  "," +
                  t.color.rgb.g +
                  "," +
                  t.color.rgb.b +
                  "," +
                  t.opacity +
                  ")";
              else
                s =
                  "hsla(" +
                  t.color.hsl.h +
                  "," +
                  t.color.hsl.s +
                  "%," +
                  t.color.hsl.l +
                  "%," +
                  t.opacity +
                  ")";
              return s;
            }
          ),
          i = new Blob([e], { type: "image/svg+xml;charset=utf-8" }),
          n = window.URL || window.webkitURL || window,
          s = n.createObjectURL(i),
          r = new Image();
        r.addEventListener("load", function () {
          (t.img.obj = r),
            (t.img.loaded = !0),
            n.revokeObjectURL(s),
            o.tmp.count_svg++;
        }),
          (r.src = s);
      }),
      (o.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(o.fn.drawAnimFrame), i.remove(), (pJSDom = null);
      }),
      (o.fn.vendors.drawShape = function (t, e, i, o, n, s) {
        var r = n * s,
          a = n / s,
          l = (180 * (a - 2)) / a,
          c = Math.PI - (Math.PI * l) / 180;
        t.save(), t.beginPath(), t.translate(e, i), t.moveTo(0, 0);
        for (var h = 0; r > h; h++)
          t.lineTo(o, 0), t.translate(o, 0), t.rotate(c);
        t.fill(), t.restore();
      }),
      (o.fn.vendors.exportImg = function () {
        window.open(o.canvas.el.toDataURL("image/png"), "_blank");
      }),
      (o.fn.vendors.loadImg = function (t) {
        if (((o.tmp.img_error = void 0), "" != o.particles.shape.image.src))
          if ("svg" == t) {
            var e = new XMLHttpRequest();
            e.open("GET.html", o.particles.shape.image.src),
              (e.onreadystatechange = function (t) {
                4 == e.readyState &&
                  (200 == e.status
                    ? ((o.tmp.source_svg = t.currentTarget.response),
                      o.fn.vendors.checkBeforeDraw())
                    : (console.log("Error pJS - Image not found"),
                      (o.tmp.img_error = !0)));
              }),
              e.send();
          } else {
            var i = new Image();
            i.addEventListener("load", function () {
              (o.tmp.img_obj = i), o.fn.vendors.checkBeforeDraw();
            }),
              (i.src = o.particles.shape.image.src);
          }
        else
          console.log("Error%20pJS%20-%20No%20image.html"),
            (o.tmp.img_error = !0);
      }),
      (o.fn.vendors.draw = function () {
        "image" == o.particles.shape.type
          ? "svg" == o.tmp.img_type
            ? o.tmp.count_svg >= o.particles.number.value
              ? (o.fn.particlesDraw(),
                o.particles.move.enable
                  ? (o.fn.drawAnimFrame = requestAnimFrame(o.fn.vendors.draw))
                  : cancelRequestAnimFrame(o.fn.drawAnimFrame))
              : o.tmp.img_error ||
                (o.fn.drawAnimFrame = requestAnimFrame(o.fn.vendors.draw))
            : null != o.tmp.img_obj
            ? (o.fn.particlesDraw(),
              o.particles.move.enable
                ? (o.fn.drawAnimFrame = requestAnimFrame(o.fn.vendors.draw))
                : cancelRequestAnimFrame(o.fn.drawAnimFrame))
            : o.tmp.img_error ||
              (o.fn.drawAnimFrame = requestAnimFrame(o.fn.vendors.draw))
          : (o.fn.particlesDraw(),
            o.particles.move.enable
              ? (o.fn.drawAnimFrame = requestAnimFrame(o.fn.vendors.draw))
              : cancelRequestAnimFrame(o.fn.drawAnimFrame));
      }),
      (o.fn.vendors.checkBeforeDraw = function () {
        "image" == o.particles.shape.type
          ? "svg" == o.tmp.img_type && null == o.tmp.source_svg
            ? (o.tmp.checkAnimFrame = requestAnimFrame(check))
            : (cancelRequestAnimFrame(o.tmp.checkAnimFrame),
              o.tmp.img_error || (o.fn.vendors.init(), o.fn.vendors.draw()))
          : (o.fn.vendors.init(), o.fn.vendors.draw());
      }),
      (o.fn.vendors.init = function () {
        o.fn.retinaInit(),
          o.fn.canvasInit(),
          o.fn.canvasSize(),
          o.fn.canvasPaint(),
          o.fn.particlesCreate(),
          o.fn.vendors.densityAutoParticles(),
          (o.particles.line_linked.color_rgb_line = hexToRgb(
            o.particles.line_linked.color
          ));
      }),
      (o.fn.vendors.start = function () {
        isInArray("image", o.particles.shape.type)
          ? ((o.tmp.img_type = o.particles.shape.image.src.substr(
              o.particles.shape.image.src.length - 3
            )),
            o.fn.vendors.loadImg(o.tmp.img_type))
          : o.fn.vendors.checkBeforeDraw();
      }),
      o.fn.vendors.eventsListeners(),
      o.fn.vendors.start();
  };
  (Object.deepExtend = function (t, e) {
    for (var i in e)
      e[i] && e[i].constructor && e[i].constructor === Object
        ? ((t[i] = t[i] || {}), arguments.callee(t[i], e[i]))
        : (t[i] = e[i]);
    return t;
  }),
    (window.requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (t) {
        window.setTimeout(t, 1e3 / 60);
      }),
    (window.cancelRequestAnimFrame =
      window.cancelAnimationFrame ||
      window.webkitCancelRequestAnimationFrame ||
      window.mozCancelRequestAnimationFrame ||
      window.oCancelRequestAnimationFrame ||
      window.msCancelRequestAnimationFrame ||
      clearTimeout),
    (window.pJSDom = []),
    (window.particlesJS = function (t, e) {
      "string" != typeof t && ((e = t), (t = "particles-js")),
        t || (t = "particles-js");
      var i = document.getElementById(t),
        o = "particles-js-canvas-el",
        n = i.getElementsByClassName(o);
      if (n.length) for (; n.length > 0; ) i.removeChild(n[0]);
      var s = document.createElement("canvas");
      (s.className = o),
        (s.style.width = "100%"),
        (s.style.height = "100%"),
        null != document.getElementById(t).appendChild(s) &&
          pJSDom.push(new pJS(t, e));
    }),
    (window.particlesJS.load = function (t, e, i) {
      var o = new XMLHttpRequest();
      o.open("GET.html", e),
        (o.onreadystatechange = function (e) {
          if (4 == o.readyState)
            if (200 == o.status) {
              var n = JSON.parse(e.currentTarget.response);
              window.particlesJS(t, n), i && i();
            } else
              console.log("Error pJS - XMLHttpRequest status: " + o.status),
                console.log("Error pJS - File config not found");
        }),
        o.send();
    }),
    particlesJS("particles-js", {
      particles: {
        number: { value: 50, density: { enable: !0, value_area: 800 } },
        color: { value: "#888" },
        shape: {
          type: "circle",
          stroke: { width: 0, color: "#888" },
          polygon: { nb_sides: 5 },
          image: { src: "img/github.svg", width: 100, height: 100 },
        },
        opacity: {
          value: 0.5,
          random: !1,
          anim: { enable: !1, speed: 3, opacity_min: 0.1, sync: !1 },
        },
        size: {
          value: 5,
          random: !0,
          anim: { enable: !1, speed: 40, size_min: 0.1, sync: !1 },
        },
        line_linked: {
          enable: !0,
          distance: 150,
          color: "#888",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: !0,
          speed: 6,
          direction: "none",
          random: !1,
          straight: !1,
          out_mode: "out",
          attract: { enable: !1, rotateX: 600, rotateY: 1200 },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: !0, mode: "repulse" },
          onclick: { enable: !0, mode: "push" },
          resize: !0,
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: { distance: 200 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 },
        },
      },
      retina_detect: !0,
      config_demo: {
        hide_card: !1,
        background_color: "#b61924",
        background_image: "",
        background_position: "50% 50%",
        background_repeat: "no-repeat",
        background_size: "cover",
      },
    });
}
!(function (t, e) {
  "object" == typeof exports && "undefined" != typeof module
    ? e(require("jquery"))
    : "function" == typeof define && define.amd
    ? define(["jquery"], e)
    : e(t.$);
})(this, function (t) {
  "use strict";
  function e(t) {
    return "%" == t[t.length - 1];
  }
  function i(t, e, i) {
    function o(t, e) {
      var i = s.createShader(t);
      if (
        (s.shaderSource(i, e),
        s.compileShader(i),
        !s.getShaderParameter(i, s.COMPILE_STATUS))
      )
        throw new Error("compile error: " + s.getShaderInfoLog(i));
      return i;
    }
    var n = {};
    if (
      ((n.id = s.createProgram()),
      s.attachShader(n.id, o(s.VERTEX_SHADER, t)),
      s.attachShader(n.id, o(s.FRAGMENT_SHADER, e)),
      s.linkProgram(n.id),
      !s.getProgramParameter(n.id, s.LINK_STATUS))
    )
      throw new Error("link error: " + s.getProgramInfoLog(n.id));
    (n.uniforms = {}),
      (n.locations = {}),
      s.useProgram(n.id),
      s.enableVertexAttribArray(0);
    for (
      var r, a, l = /uniform (\w+) (\w+)/g, c = t + e;
      null != (r = l.exec(c));

    )
      (a = r[2]), (n.locations[a] = s.getUniformLocation(n.id, a));
    return n;
  }
  function o(t, e) {
    s.activeTexture(s.TEXTURE0 + (e || 0)), s.bindTexture(s.TEXTURE_2D, t);
  }
  function n(t) {
    var e = /url\(["']?([^"']*)["']?\)/.exec(t);
    return null == e ? null : e[1];
  }
  var s,
    r = (t = t && "default" in t ? t.default : t)(window),
    a = (function () {
      function t(t, e, o) {
        var n = "OES_texture_" + t,
          s = n + "_linear",
          r = s in i,
          a = [n];
        return (
          r && a.push(s),
          { type: e, arrayType: o, linearSupport: r, extensions: a }
        );
      }
      var e = document.createElement("canvas");
      if (!(s = e.getContext("webgl") || e.getContext("experimental-webgl")))
        return null;
      var i = {};
      if (
        ([
          "OES_texture_float",
          "OES_texture_half_float",
          "OES_texture_float_linear",
          "OES_texture_half_float_linear",
        ].forEach(function (t) {
          var e = s.getExtension(t);
          e && (i[t] = e);
        }),
        !i.OES_texture_float)
      )
        return null;
      var o = [];
      o.push(t("float", s.FLOAT, Float32Array)),
        i.OES_texture_half_float &&
          o.push(
            t("half_float", i.OES_texture_half_float.HALF_FLOAT_OES, null)
          );
      var n = s.createTexture(),
        r = s.createFramebuffer();
      s.bindFramebuffer(s.FRAMEBUFFER, r),
        s.bindTexture(s.TEXTURE_2D, n),
        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.NEAREST),
        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.NEAREST),
        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE);
      for (var a = null, l = 0; l < o.length; l++)
        if (
          (s.texImage2D(
            s.TEXTURE_2D,
            0,
            s.RGBA,
            32,
            32,
            0,
            s.RGBA,
            o[l].type,
            null
          ),
          s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.COLOR_ATTACHMENT0,
            s.TEXTURE_2D,
            n,
            0
          ),
          s.checkFramebufferStatus(s.FRAMEBUFFER) === s.FRAMEBUFFER_COMPLETE)
        ) {
          a = o[l];
          break;
        }
      return a;
    })(),
    l = (function () {
      try {
        return new ImageData(32, 32);
      } catch (t) {
        return document
          .createElement("canvas")
          .getContext("2d")
          .createImageData(32, 32);
      }
    })();
  t("head").prepend(
    "<style>.jquery-ripples { position: relative; z-index: 0; }</style>"
  );
  var c = function (e, i) {
    var o = this;
    (this.$el = t(e)),
      (this.interactive = i.interactive),
      (this.resolution = i.resolution),
      (this.textureDelta = new Float32Array([
        1 / this.resolution,
        1 / this.resolution,
      ])),
      (this.perturbance = i.perturbance),
      (this.dropRadius = i.dropRadius),
      (this.crossOrigin = i.crossOrigin),
      (this.imageUrl = i.imageUrl);
    var n = document.createElement("canvas");
    (n.width = this.$el.innerWidth()),
      (n.height = this.$el.innerHeight()),
      (this.canvas = n),
      (this.$canvas = t(n)),
      this.$canvas.css({
        position: "absolute",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
      }),
      this.$el.addClass("jquery-ripples").append(n),
      (this.context = s =
        n.getContext("webgl") || n.getContext("experimental-webgl")),
      a.extensions.forEach(function (t) {
        s.getExtension(t);
      }),
      t(window).on("resize", function () {
        o.updateSize();
      }),
      (this.textures = []),
      (this.framebuffers = []),
      (this.bufferWriteIndex = 0),
      (this.bufferReadIndex = 1);
    for (
      var r = a.arrayType,
        l = r ? new r(this.resolution * this.resolution * 4) : null,
        c = 0;
      c < 2;
      c++
    ) {
      var h = s.createTexture(),
        d = s.createFramebuffer();
      s.bindFramebuffer(s.FRAMEBUFFER, d),
        s.bindTexture(s.TEXTURE_2D, h),
        s.texParameteri(
          s.TEXTURE_2D,
          s.TEXTURE_MIN_FILTER,
          a.linearSupport ? s.LINEAR : s.NEAREST
        ),
        s.texParameteri(
          s.TEXTURE_2D,
          s.TEXTURE_MAG_FILTER,
          a.linearSupport ? s.LINEAR : s.NEAREST
        ),
        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, s.CLAMP_TO_EDGE),
        s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, s.CLAMP_TO_EDGE),
        s.texImage2D(
          s.TEXTURE_2D,
          0,
          s.RGBA,
          this.resolution,
          this.resolution,
          0,
          s.RGBA,
          a.type,
          l
        ),
        s.framebufferTexture2D(
          s.FRAMEBUFFER,
          s.COLOR_ATTACHMENT0,
          s.TEXTURE_2D,
          h,
          0
        ),
        this.textures.push(h),
        this.framebuffers.push(d);
    }
    (this.quad = s.createBuffer()),
      s.bindBuffer(s.ARRAY_BUFFER, this.quad),
      s.bufferData(
        s.ARRAY_BUFFER,
        new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]),
        s.STATIC_DRAW
      ),
      this.initShaders(),
      this.initTexture(),
      this.setTransparentTexture(),
      this.loadImage(),
      s.clearColor(0, 0, 0, 0),
      s.blendFunc(s.SRC_ALPHA, s.ONE_MINUS_SRC_ALPHA),
      (this.visible = !0),
      (this.running = !0),
      (this.inited = !0),
      (this.destroyed = !1),
      this.setupPointerEvents(),
      requestAnimationFrame(function t() {
        o.destroyed || (o.step(), requestAnimationFrame(t));
      });
  };
  (c.DEFAULTS = {
    imageUrl: null,
    resolution: 256,
    dropRadius: 20,
    perturbance: 0.03,
    interactive: !0,
    crossOrigin: "",
  }),
    (c.prototype = {
      setupPointerEvents: function () {
        function t(t, i) {
          e.visible &&
            e.running &&
            e.interactive &&
            e.dropAtPointer(t, e.dropRadius * (i ? 1.5 : 1), i ? 0.14 : 0.01);
        }
        var e = this;
        this.$el
          .on("mousemove.ripples", function (e) {
            t(e);
          })
          .on("touchmove.ripples, touchstart.ripples", function (e) {
            for (
              var i = e.originalEvent.changedTouches, o = 0;
              o < i.length;
              o++
            )
              t(i[o]);
          })
          .on("mousedown.ripples", function (e) {
            t(e, !0);
          });
      },
      loadImage: function () {
        var t = this;
        s = this.context;
        var e =
          this.imageUrl ||
          n(this.originalCssBackgroundImage) ||
          n(this.$el.css("backgroundImage"));
        if (e != this.imageSource)
          if (((this.imageSource = e), this.imageSource)) {
            var i = new Image();
            (i.onload = function () {
              function e(t) {
                return !(t & (t - 1));
              }
              s = t.context;
              var o = e(i.width) && e(i.height) ? s.REPEAT : s.CLAMP_TO_EDGE;
              s.bindTexture(s.TEXTURE_2D, t.backgroundTexture),
                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_S, o),
                s.texParameteri(s.TEXTURE_2D, s.TEXTURE_WRAP_T, o),
                s.texImage2D(
                  s.TEXTURE_2D,
                  0,
                  s.RGBA,
                  s.RGBA,
                  s.UNSIGNED_BYTE,
                  i
                ),
                (t.backgroundWidth = i.width),
                (t.backgroundHeight = i.height),
                t.hideCssBackground();
            }),
              (i.onerror = function () {
                (s = t.context), t.setTransparentTexture();
              }),
              (i.crossOrigin = (function (t) {
                return t.match(/^data:/);
              })(this.imageSource)
                ? null
                : this.crossOrigin),
              (i.src = this.imageSource);
          } else this.setTransparentTexture();
      },
      step: function () {
        (s = this.context),
          this.visible &&
            (this.computeTextureBoundaries(),
            this.running && this.update(),
            this.render());
      },
      drawQuad: function () {
        s.bindBuffer(s.ARRAY_BUFFER, this.quad),
          s.vertexAttribPointer(0, 2, s.FLOAT, !1, 0, 0),
          s.drawArrays(s.TRIANGLE_FAN, 0, 4);
      },
      render: function () {
        s.bindFramebuffer(s.FRAMEBUFFER, null),
          s.viewport(0, 0, this.canvas.width, this.canvas.height),
          s.enable(s.BLEND),
          s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT),
          s.useProgram(this.renderProgram.id),
          o(this.backgroundTexture, 0),
          o(this.textures[0], 1),
          s.uniform1f(
            this.renderProgram.locations.perturbance,
            this.perturbance
          ),
          s.uniform2fv(
            this.renderProgram.locations.topLeft,
            this.renderProgram.uniforms.topLeft
          ),
          s.uniform2fv(
            this.renderProgram.locations.bottomRight,
            this.renderProgram.uniforms.bottomRight
          ),
          s.uniform2fv(
            this.renderProgram.locations.containerRatio,
            this.renderProgram.uniforms.containerRatio
          ),
          s.uniform1i(this.renderProgram.locations.samplerBackground, 0),
          s.uniform1i(this.renderProgram.locations.samplerRipples, 1),
          this.drawQuad(),
          s.disable(s.BLEND);
      },
      update: function () {
        s.viewport(0, 0, this.resolution, this.resolution),
          s.bindFramebuffer(
            s.FRAMEBUFFER,
            this.framebuffers[this.bufferWriteIndex]
          ),
          o(this.textures[this.bufferReadIndex]),
          s.useProgram(this.updateProgram.id),
          this.drawQuad(),
          this.swapBufferIndices();
      },
      swapBufferIndices: function () {
        (this.bufferWriteIndex = 1 - this.bufferWriteIndex),
          (this.bufferReadIndex = 1 - this.bufferReadIndex);
      },
      computeTextureBoundaries: function () {
        var t,
          i = this.$el.css("background-size"),
          o = this.$el.css("background-attachment"),
          n = (function (t) {
            var e = t.split(" ");
            if (1 !== e.length)
              return e.map(function (e) {
                switch (t) {
                  case "center":
                    return "50%";
                  case "top":
                  case "left":
                    return "0";
                  case "right":
                  case "bottom":
                    return "100%";
                  default:
                    return e;
                }
              });
            switch (t) {
              case "center":
                return ["50%", "50%"];
              case "top":
                return ["50%", "0"];
              case "bottom":
                return ["50%", "100%"];
              case "left":
                return ["0", "50%"];
              case "right":
                return ["100%", "50%"];
              default:
                return [t, "50%"];
            }
          })(this.$el.css("background-position"));
        if (
          ("fixed" == o
            ? (((t = {
                left: window.pageXOffset,
                top: window.pageYOffset,
              }).width = r.width()),
              (t.height = r.height()))
            : (((t = this.$el.offset()).width = this.$el.innerWidth()),
              (t.height = this.$el.innerHeight())),
          "cover" == i)
        )
          var s = Math.max(
              t.width / this.backgroundWidth,
              t.height / this.backgroundHeight
            ),
            a = this.backgroundWidth * s,
            l = this.backgroundHeight * s;
        else if ("contain" == i)
          (s = Math.min(
            t.width / this.backgroundWidth,
            t.height / this.backgroundHeight
          )),
            (a = this.backgroundWidth * s),
            (l = this.backgroundHeight * s);
        else {
          (a = (i = i.split(" "))[0] || ""), (l = i[1] || a);
          e(a)
            ? (a = (t.width * parseFloat(a)) / 100)
            : "auto" != a && (a = parseFloat(a)),
            e(l)
              ? (l = (t.height * parseFloat(l)) / 100)
              : "auto" != l && (l = parseFloat(l)),
            "auto" == a && "auto" == l
              ? ((a = this.backgroundWidth), (l = this.backgroundHeight))
              : ("auto" == a &&
                  (a = this.backgroundWidth * (l / this.backgroundHeight)),
                "auto" == l &&
                  (l = this.backgroundHeight * (a / this.backgroundWidth)));
        }
        var c = n[0],
          h = n[1];
        (c = e(c)
          ? t.left + ((t.width - a) * parseFloat(c)) / 100
          : t.left + parseFloat(c)),
          (h = e(h)
            ? t.top + ((t.height - l) * parseFloat(h)) / 100
            : t.top + parseFloat(h));
        var d = this.$el.offset();
        (this.renderProgram.uniforms.topLeft = new Float32Array([
          (d.left - c) / a,
          (d.top - h) / l,
        ])),
          (this.renderProgram.uniforms.bottomRight = new Float32Array([
            this.renderProgram.uniforms.topLeft[0] + this.$el.innerWidth() / a,
            this.renderProgram.uniforms.topLeft[1] + this.$el.innerHeight() / l,
          ]));
        var u = Math.max(this.canvas.width, this.canvas.height);
        this.renderProgram.uniforms.containerRatio = new Float32Array([
          this.canvas.width / u,
          this.canvas.height / u,
        ]);
      },
      initShaders: function () {
        var t = [
          "attribute vec2 vertex;",
          "varying vec2 coord;",
          "void main() {",
          "coord = vertex * 0.5 + 0.5;",
          "gl_Position = vec4(vertex, 0.0, 1.0);",
          "}",
        ].join("\n");
        (this.dropProgram = i(
          t,
          [
            "precision highp float;",
            "const float PI = 3.141592653589793;",
            "uniform sampler2D texture;",
            "uniform vec2 center;",
            "uniform float radius;",
            "uniform float strength;",
            "varying vec2 coord;",
            "void main() {",
            "vec4 info = texture2D(texture, coord);",
            "float drop = max(0.0, 1.0 - length(center * 0.5 + 0.5 - coord) / radius);",
            "drop = 0.5 - cos(drop * PI) * 0.5;",
            "info.r += drop * strength;",
            "gl_FragColor = info;",
            "}",
          ].join("\n")
        )),
          (this.updateProgram = i(
            t,
            [
              "precision highp float;",
              "uniform sampler2D texture;",
              "uniform vec2 delta;",
              "varying vec2 coord;",
              "void main() {",
              "vec4 info = texture2D(texture, coord);",
              "vec2 dx = vec2(delta.x, 0.0);",
              "vec2 dy = vec2(0.0, delta.y);",
              "float average = (",
              "texture2D(texture, coord - dx).r +",
              "texture2D(texture, coord - dy).r +",
              "texture2D(texture, coord + dx).r +",
              "texture2D(texture, coord + dy).r",
              ") * 0.25;",
              "info.g += (average - info.r) * 2.0;",
              "info.g *= 0.995;",
              "info.r += info.g;",
              "gl_FragColor = info;",
              "}",
            ].join("\n")
          )),
          s.uniform2fv(this.updateProgram.locations.delta, this.textureDelta),
          (this.renderProgram = i(
            [
              "precision highp float;",
              "attribute vec2 vertex;",
              "uniform vec2 topLeft;",
              "uniform vec2 bottomRight;",
              "uniform vec2 containerRatio;",
              "varying vec2 ripplesCoord;",
              "varying vec2 backgroundCoord;",
              "void main() {",
              "backgroundCoord = mix(topLeft, bottomRight, vertex * 0.5 + 0.5);",
              "backgroundCoord.y = 1.0 - backgroundCoord.y;",
              "ripplesCoord = vec2(vertex.x, -vertex.y) * containerRatio * 0.5 + 0.5;",
              "gl_Position = vec4(vertex.x, -vertex.y, 0.0, 1.0);",
              "}",
            ].join("\n"),
            [
              "precision highp float;",
              "uniform sampler2D samplerBackground;",
              "uniform sampler2D samplerRipples;",
              "uniform vec2 delta;",
              "uniform float perturbance;",
              "varying vec2 ripplesCoord;",
              "varying vec2 backgroundCoord;",
              "void main() {",
              "float height = texture2D(samplerRipples, ripplesCoord).r;",
              "float heightX = texture2D(samplerRipples, vec2(ripplesCoord.x + delta.x, ripplesCoord.y)).r;",
              "float heightY = texture2D(samplerRipples, vec2(ripplesCoord.x, ripplesCoord.y + delta.y)).r;",
              "vec3 dx = vec3(delta.x, heightX - height, 0.0);",
              "vec3 dy = vec3(0.0, heightY - height, delta.y);",
              "vec2 offset = -normalize(cross(dy, dx)).xz;",
              "float specular = pow(max(0.0, dot(offset, normalize(vec2(-0.6, 1.0)))), 4.0);",
              "gl_FragColor = texture2D(samplerBackground, backgroundCoord + offset * perturbance) + specular;",
              "}",
            ].join("\n")
          )),
          s.uniform2fv(this.renderProgram.locations.delta, this.textureDelta);
      },
      initTexture: function () {
        (this.backgroundTexture = s.createTexture()),
          s.bindTexture(s.TEXTURE_2D, this.backgroundTexture),
          s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, 1),
          s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MAG_FILTER, s.LINEAR),
          s.texParameteri(s.TEXTURE_2D, s.TEXTURE_MIN_FILTER, s.LINEAR);
      },
      setTransparentTexture: function () {
        s.bindTexture(s.TEXTURE_2D, this.backgroundTexture),
          s.texImage2D(s.TEXTURE_2D, 0, s.RGBA, s.RGBA, s.UNSIGNED_BYTE, l);
      },
      hideCssBackground: function () {
        var t = this.$el[0].style.backgroundImage;
        "none" != t &&
          ((this.originalInlineCss = t),
          (this.originalCssBackgroundImage = this.$el.css("backgroundImage")),
          this.$el.css("backgroundImage", "none"));
      },
      restoreCssBackground: function () {
        this.$el.css("backgroundImage", this.originalInlineCss || "");
      },
      dropAtPointer: function (t, e, i) {
        var o = parseInt(this.$el.css("border-left-width")) || 0,
          n = parseInt(this.$el.css("border-top-width")) || 0;
        this.drop(
          t.pageX - this.$el.offset().left - o,
          t.pageY - this.$el.offset().top - n,
          e,
          i
        );
      },
      drop: function (t, e, i, n) {
        s = this.context;
        var r = this.$el.innerWidth(),
          a = this.$el.innerHeight(),
          l = Math.max(r, a);
        i /= l;
        var c = new Float32Array([(2 * t - r) / l, (a - 2 * e) / l]);
        s.viewport(0, 0, this.resolution, this.resolution),
          s.bindFramebuffer(
            s.FRAMEBUFFER,
            this.framebuffers[this.bufferWriteIndex]
          ),
          o(this.textures[this.bufferReadIndex]),
          s.useProgram(this.dropProgram.id),
          s.uniform2fv(this.dropProgram.locations.center, c),
          s.uniform1f(this.dropProgram.locations.radius, i),
          s.uniform1f(this.dropProgram.locations.strength, n),
          this.drawQuad(),
          this.swapBufferIndices();
      },
      updateSize: function () {
        var t = this.$el.innerWidth(),
          e = this.$el.innerHeight();
        (t == this.canvas.width && e == this.canvas.height) ||
          ((this.canvas.width = t), (this.canvas.height = e));
      },
      destroy: function () {
        this.$el
          .off(".ripples")
          .removeClass("jquery-ripples")
          .removeData("ripples"),
          this.$canvas.remove(),
          this.restoreCssBackground(),
          (this.destroyed = !0);
      },
      show: function () {
        (this.visible = !0), this.$canvas.show(), this.hideCssBackground();
      },
      hide: function () {
        (this.visible = !1), this.$canvas.hide(), this.restoreCssBackground();
      },
      pause: function () {
        this.running = !1;
      },
      play: function () {
        this.running = !0;
      },
      set: function (t, e) {
        switch (t) {
          case "dropRadius":
          case "perturbance":
          case "interactive":
          case "crossOrigin":
            this[t] = e;
            break;
          case "imageUrl":
            (this.imageUrl = e), this.loadImage();
        }
      },
    });
  var h = t.fn.ripples;
  (t.fn.ripples = function (e) {
    if (!a)
      throw new Error(
        "Your browser does not support WebGL, the OES_texture_float extension or rendering to floating point textures."
      );
    var i =
      arguments.length > 1 ? Array.prototype.slice.call(arguments, 1) : void 0;
    return this.each(function () {
      var o = t(this),
        n = o.data("ripples"),
        s = t.extend({}, c.DEFAULTS, o.data(), "object" == typeof e && e);
      (n || "string" != typeof e) &&
        (n
          ? "string" == typeof e && c.prototype[e].apply(n, i)
          : o.data("ripples", (n = new c(this, s))));
    });
  }),
    (t.fn.ripples.Constructor = c),
    (t.fn.ripples.noConflict = function () {
      return (t.fn.ripples = h), this;
    });
});
