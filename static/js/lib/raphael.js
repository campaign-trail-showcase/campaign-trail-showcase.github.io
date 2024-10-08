!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = e())
    : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
        ? (exports.Raphael = e())
        : (t.Raphael = e());
})(window, function () {
  return (
    (i = {}),
    (n.m = r =
      {
        "./dev/raphael.amd.js": function (t, e, r) {
          var r = [
              r("./dev/raphael.core.js"),
              r("./dev/raphael.svg.js"),
              r("./dev/raphael.vml.js"),
            ],
            r = function (t) {
              return t;
            }.apply(e, r);
          void 0 === r || (t.exports = r);
        },
        "./dev/raphael.core.js": function (t, e, r) {
          var r = [r("./node_modules/eve-raphael/eve.js")],
            r = function (M) {
              function E(t) {
                if (E.is(t, "function"))
                  return i ? t() : M.on("raphael.DOMload", t);
                if (E.is(t, v))
                  return E._engine.create[b](
                    E,
                    t.splice(0, 3 + E.is(t[0], F)),
                  ).add(t);
                var e = Array.prototype.slice.call(arguments, 0);
                if (E.is(e[e.length - 1], "function")) {
                  var r = e.pop();
                  return i
                    ? r.call(E._engine.create[b](E, e))
                    : M.on("raphael.DOMload", function () {
                        r.call(E._engine.create[b](E, e));
                      });
                }
                return E._engine.create[b](E, arguments);
              }
              (E.version = "2.3.0"), (E.eve = M);
              function e(t, e, r, i) {
                return (
                  null == i && (i = r),
                  [
                    ["M", t, e],
                    ["m", 0, -i],
                    ["a", r, i, 0, 1, 1, 0, 2 * i],
                    ["a", r, i, 0, 1, 1, 0, -2 * i],
                    ["z"],
                  ]
                );
              }
              var i,
                N = /[, ]+/,
                s = {
                  circle: 1,
                  rect: 1,
                  path: 1,
                  ellipse: 1,
                  text: 1,
                  image: 1,
                },
                n = /\{(\d+)\}/g,
                P = "hasOwnProperty",
                d = { doc: document, win: window },
                t = {
                  was: Object.prototype[P].call(d.win, "Raphael"),
                  is: d.win.Raphael,
                },
                r = function () {
                  this.ca = this.customAttributes = {};
                },
                b = "apply",
                L = "concat",
                g =
                  "ontouchstart" in window ||
                  window.TouchEvent ||
                  (window.DocumentTouch && document instanceof DocumentTouch),
                _ = "",
                w = " ",
                j = String,
                z = "split",
                a =
                  "click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[
                    z
                  ](w),
                l = {
                  mousedown: "touchstart",
                  mousemove: "touchmove",
                  mouseup: "touchend",
                },
                y = j.prototype.toLowerCase,
                C = Math,
                k = C.max,
                B = C.min,
                S = C.abs,
                x = C.pow,
                T = C.PI,
                F = "number",
                u = "string",
                v = "array",
                o = Object.prototype.toString,
                h =
                  ((E._ISURL = /^url\(['"]?(.+?)['"]?\)$/i),
                  /^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),
                c = { NaN: 1, Infinity: 1, "-Infinity": 1 },
                R = /^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,
                A = C.round,
                I = parseFloat,
                f = parseInt,
                m = j.prototype.toUpperCase,
                q = (E._availableAttrs = {
                  "arrow-end": "none",
                  "arrow-start": "none",
                  blur: 0,
                  "clip-rect": "0 0 1e9 1e9",
                  cursor: "default",
                  cx: 0,
                  cy: 0,
                  fill: "#fff",
                  "fill-opacity": 1,
                  font: '10px "Arial"',
                  "font-family": '"Arial"',
                  "font-size": "10",
                  "font-style": "normal",
                  "font-weight": 400,
                  gradient: 0,
                  height: 0,
                  href: "http://raphaeljs.com/",
                  "letter-spacing": 0,
                  opacity: 1,
                  path: "M0,0",
                  r: 0,
                  rx: 0,
                  ry: 0,
                  src: "",
                  stroke: "#000",
                  "stroke-dasharray": "",
                  "stroke-linecap": "butt",
                  "stroke-linejoin": "butt",
                  "stroke-miterlimit": 0,
                  "stroke-opacity": 1,
                  "stroke-width": 1,
                  target: "_blank",
                  "text-anchor": "middle",
                  title: "Raphael",
                  transform: "",
                  width: 0,
                  x: 0,
                  y: 0,
                  class: "",
                }),
                D = (E._availableAnimAttrs = {
                  blur: F,
                  "clip-rect": "csv",
                  cx: F,
                  cy: F,
                  fill: "colour",
                  "fill-opacity": F,
                  "font-size": F,
                  height: F,
                  opacity: F,
                  path: "path",
                  r: F,
                  rx: F,
                  ry: F,
                  stroke: "colour",
                  "stroke-opacity": F,
                  "stroke-width": F,
                  transform: "transform",
                  width: F,
                  x: F,
                  y: F,
                }),
                p =
                  /[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,
                O = { hs: 1, rg: 1 },
                V = /,?([achlmqrstvxz]),?/gi,
                W =
                  /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                Y =
                  /([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,
                G =
                  /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,
                H =
                  ((E._radial_gradient =
                    /^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/),
                  {}),
                X = function (t, e) {
                  return I(t) - I(e);
                },
                U = function (t) {
                  return t;
                },
                $ = (E._rectPath = function (t, e, r, i, n) {
                  return n
                    ? [
                        ["M", t + n, e],
                        ["l", r - 2 * n, 0],
                        ["a", n, n, 0, 0, 1, n, n],
                        ["l", 0, i - 2 * n],
                        ["a", n, n, 0, 0, 1, -n, n],
                        ["l", 2 * n - r, 0],
                        ["a", n, n, 0, 0, 1, -n, -n],
                        ["l", 0, 2 * n - i],
                        ["a", n, n, 0, 0, 1, n, -n],
                        ["z"],
                      ]
                    : [
                        ["M", t, e],
                        ["l", r, 0],
                        ["l", 0, i],
                        ["l", -r, 0],
                        ["z"],
                      ];
                }),
                Z = (E._getPath = {
                  path: function (t) {
                    return t.attr("path");
                  },
                  circle: function (t) {
                    t = t.attrs;
                    return e(t.cx, t.cy, t.r);
                  },
                  ellipse: function (t) {
                    t = t.attrs;
                    return e(t.cx, t.cy, t.rx, t.ry);
                  },
                  rect: function (t) {
                    t = t.attrs;
                    return $(t.x, t.y, t.width, t.height, t.r);
                  },
                  image: function (t) {
                    t = t.attrs;
                    return $(t.x, t.y, t.width, t.height);
                  },
                  text: function (t) {
                    t = t._getBBox();
                    return $(t.x, t.y, t.width, t.height);
                  },
                  set: function (t) {
                    t = t._getBBox();
                    return $(t.x, t.y, t.width, t.height);
                  },
                }),
                Q = (E.mapPath = function (t, e) {
                  if (!e) return t;
                  for (
                    var r, i, n, s, a, o = 0, l = (t = St(t)).length;
                    o < l;
                    o++
                  )
                    for (n = 1, s = (a = t[o]).length; n < s; n += 2)
                      (r = e.x(a[n], a[n + 1])),
                        (i = e.y(a[n], a[n + 1])),
                        (a[n] = r),
                        (a[n + 1] = i);
                  return t;
                });
              if (
                ((E._g = d),
                (E.type =
                  d.win.SVGAngle ||
                  d.doc.implementation.hasFeature(
                    "http://www.w3.org/TR/SVG11/feature#BasicStructure",
                    "1.1",
                  )
                    ? "SVG"
                    : "VML"),
                "VML" == E.type)
              ) {
                var J,
                  K = d.doc.createElement("div");
                if (
                  ((K.innerHTML = '<v:shape adj="1"/>'),
                  ((J = K.firstChild).style.behavior = "url(#default#VML)"),
                  !J || "object" != typeof J.adj)
                )
                  return (E.type = _);
                K = null;
              }
              function tt(t) {
                if ("function" == typeof t || Object(t) !== t) return t;
                var e,
                  r = new t.constructor();
                for (e in t) t[P](e) && (r[e] = tt(t[e]));
                return r;
              }
              (E.svg = !(E.vml = "VML" == E.type)),
                (E._Paper = r),
                (E.fn = K = r.prototype = E.prototype),
                (E._id = 0),
                (E.is = function (t, e) {
                  return "finite" == (e = y.call(e))
                    ? !c[P](+t)
                    : "array" == e
                      ? t instanceof Array
                      : ("null" == e && null === t) ||
                        (e == typeof t && null !== t) ||
                        ("object" == e && t === Object(t)) ||
                        ("array" == e && Array.isArray && Array.isArray(t)) ||
                        o.call(t).slice(8, -1).toLowerCase() == e;
                }),
                (E.angle = function (t, e, r, i, n, s) {
                  if (null != n)
                    return E.angle(t, e, n, s) - E.angle(r, i, n, s);
                  (r = t - r), (i = e - i);
                  return r || i
                    ? (180 + (180 * C.atan2(-i, -r)) / T + 360) % 360
                    : 0;
                }),
                (E.rad = function (t) {
                  return ((t % 360) * T) / 180;
                }),
                (E.deg = function (t) {
                  return Math.round((((180 * t) / T) % 360) * 1e3) / 1e3;
                }),
                (E.snapTo = function (t, e, r) {
                  if (((r = E.is(r, "finite") ? r : 10), E.is(t, v))) {
                    for (var i = t.length; i--; )
                      if (S(t[i] - e) <= r) return t[i];
                  } else {
                    var n = e % (t = +t);
                    if (n < r) return e - n;
                    if (t - r < n) return e - n + t;
                  }
                  return e;
                });
              var et, rt;
              E.createUUID =
                ((et = /[xy]/g),
                (rt = function (t) {
                  var e = (16 * C.random()) | 0;
                  return ("x" == t ? e : (3 & e) | 8).toString(16);
                }),
                function () {
                  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx"
                    .replace(et, rt)
                    .toUpperCase();
                });
              E.setWindow = function (t) {
                M("raphael.setWindow", E, d.win, t),
                  (d.win = t),
                  (d.doc = d.win.document),
                  E._engine.initWin && E._engine.initWin(d.win);
              };
              function it() {
                return "hsb(" + [this.h, this.s, this.b] + ")";
              }
              function nt() {
                return "hsl(" + [this.h, this.s, this.l] + ")";
              }
              function st() {
                return this.hex;
              }
              function at(t, e, r) {
                var i;
                return (
                  null == e &&
                    E.is(t, "object") &&
                    "r" in t &&
                    "g" in t &&
                    "b" in t &&
                    ((r = t.b), (e = t.g), (t = t.r)),
                  null == e &&
                    E.is(t, u) &&
                    ((t = (i = E.getRGB(t)).r), (e = i.g), (r = i.b)),
                  (1 < t || 1 < e || 1 < r) &&
                    ((t /= 255), (e /= 255), (r /= 255)),
                  [t, e, r]
                );
              }
              function ot(t, e, r, i) {
                return (
                  (r = {
                    r: (t *= 255),
                    g: (e *= 255),
                    b: (r *= 255),
                    hex: E.rgb(t, e, r),
                    toString: st,
                  }),
                  E.is(i, "finite") && (r.opacity = i),
                  r
                );
              }
              var lt = function (t) {
                if (E.vml) {
                  var r,
                    i = /^\s+|\s+$/g;
                  try {
                    var e = new ActiveXObject("htmlfile");
                    e.write("<body>"), e.close(), (r = e.body);
                  } catch (t) {
                    r = createPopup().document.body;
                  }
                  var n = r.createTextRange();
                  lt = ht(function (t) {
                    try {
                      r.style.color = j(t).replace(i, _);
                      var e = n.queryCommandValue("ForeColor");
                      return (
                        "#" +
                        (
                          "000000" +
                          (e =
                            ((255 & e) << 16) |
                            (65280 & e) |
                            ((16711680 & e) >>> 16)).toString(16)
                        ).slice(-6)
                      );
                    } catch (t) {
                      return "none";
                    }
                  });
                } else {
                  var s = d.doc.createElement("i");
                  (s.title = "Raphaël Colour Picker"),
                    (s.style.display = "none"),
                    d.doc.body.appendChild(s),
                    (lt = ht(function (t) {
                      return (
                        (s.style.color = t),
                        d.doc.defaultView
                          .getComputedStyle(s, _)
                          .getPropertyValue("color")
                      );
                    }));
                }
                return lt(t);
              };
              function ht(n, s, a) {
                function o() {
                  var t = Array.prototype.slice.call(arguments, 0),
                    e = t.join("␀"),
                    r = (o.cache = o.cache || {}),
                    i = (o.count = o.count || []);
                  return (
                    r[P](e)
                      ? (function (t, e) {
                          for (var r = 0, i = t.length; r < i; r++)
                            if (t[r] === e) return t.push(t.splice(r, 1)[0]);
                        })(i, e)
                      : (1e3 <= i.length && delete r[i.shift()],
                        i.push(e),
                        (r[e] = n[b](s, t))),
                    a ? a(r[e]) : r[e]
                  );
                }
                return o;
              }
              (E.color = function (t) {
                var e;
                return (
                  E.is(t, "object") && "h" in t && "s" in t && "b" in t
                    ? ((e = E.hsb2rgb(t)),
                      (t.r = e.r),
                      (t.g = e.g),
                      (t.b = e.b),
                      (t.hex = e.hex))
                    : E.is(t, "object") && "h" in t && "s" in t && "l" in t
                      ? ((e = E.hsl2rgb(t)),
                        (t.r = e.r),
                        (t.g = e.g),
                        (t.b = e.b),
                        (t.hex = e.hex))
                      : (E.is(t, "string") && (t = E.getRGB(t)),
                        E.is(t, "object") && "r" in t && "g" in t && "b" in t
                          ? ((e = E.rgb2hsl(t)),
                            (t.h = e.h),
                            (t.s = e.s),
                            (t.l = e.l),
                            (e = E.rgb2hsb(t)),
                            (t.v = e.b))
                          : ((t = { hex: "none" }).r =
                              t.g =
                              t.b =
                              t.h =
                              t.s =
                              t.v =
                              t.l =
                                -1)),
                  (t.toString = st),
                  t
                );
              }),
                (E.hsb2rgb = function (t, e, r, i) {
                  var n, s, a;
                  return (
                    this.is(t, "object") &&
                      "h" in t &&
                      "s" in t &&
                      "b" in t &&
                      ((r = t.b), (e = t.s), (i = t.o), (t = t.h)),
                    (s =
                      (a = r * e) *
                      (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
                    (r = e = n = r - a),
                    ot(
                      (r += [a, s, 0, 0, s, a][(t = ~~t)]),
                      (e += [s, a, a, s, 0, 0][t]),
                      (n += [0, 0, s, a, a, s][t]),
                      i,
                    )
                  );
                }),
                (E.hsl2rgb = function (t, e, r, i) {
                  var n, s, a;
                  return (
                    this.is(t, "object") &&
                      "h" in t &&
                      "s" in t &&
                      "l" in t &&
                      ((r = t.l), (e = t.s), (t = t.h)),
                    (1 < t || 1 < e || 1 < r) &&
                      ((t /= 360), (e /= 100), (r /= 100)),
                    (s =
                      (a = 2 * e * (r < 0.5 ? r : 1 - r)) *
                      (1 - S(((t = ((t *= 360) % 360) / 60) % 2) - 1))),
                    (r = e = n = r - a / 2),
                    ot(
                      (r += [a, s, 0, 0, s, a][(t = ~~t)]),
                      (e += [s, a, a, s, 0, 0][t]),
                      (n += [0, 0, s, a, a, s][t]),
                      i,
                    )
                  );
                }),
                (E.rgb2hsb = function (t, e, r) {
                  var i, n;
                  return (
                    (t = (r = at(t, e, r))[0]),
                    (e = r[1]),
                    (r = r[2]),
                    {
                      h:
                        ((((0 == (n = (i = k(t, e, r)) - B(t, e, r))
                          ? null
                          : i == t
                            ? (e - r) / n
                            : i == e
                              ? (r - t) / n + 2
                              : (t - e) / n + 4) +
                          360) %
                          6) *
                          60) /
                        360,
                      s: 0 == n ? 0 : n / i,
                      b: i,
                      toString: it,
                    }
                  );
                }),
                (E.rgb2hsl = function (t, e, r) {
                  var i, n, s;
                  return (
                    (t = (r = at(t, e, r))[0]),
                    (e = r[1]),
                    (r = r[2]),
                    (i = ((n = k(t, e, r)) + (s = B(t, e, r))) / 2),
                    {
                      h:
                        ((((0 == (s = n - s)
                          ? null
                          : n == t
                            ? (e - r) / s
                            : n == e
                              ? (r - t) / s + 2
                              : (t - e) / s + 4) +
                          360) %
                          6) *
                          60) /
                        360,
                      s: 0 == s ? 0 : i < 0.5 ? s / (2 * i) : s / (2 - 2 * i),
                      l: i,
                      toString: nt,
                    }
                  );
                }),
                (E._path2string = function () {
                  return this.join(",").replace(V, "$1");
                });
              E._preload = function (t, e) {
                var r = d.doc.createElement("img");
                (r.style.cssText =
                  "position:absolute;left:-9999em;top:-9999em"),
                  (r.onload = function () {
                    e.call(this),
                      (this.onload = null),
                      d.doc.body.removeChild(this);
                  }),
                  (r.onerror = function () {
                    d.doc.body.removeChild(this);
                  }),
                  d.doc.body.appendChild(r),
                  (r.src = t);
              };
              function ut() {
                return this.hex;
              }
              function ct(t, e) {
                for (var r = [], i = 0, n = t.length; i < n - 2 * !e; i += 2) {
                  var s = [
                    { x: +t[i - 2], y: +t[i - 1] },
                    { x: +t[i], y: +t[i + 1] },
                    { x: +t[i + 2], y: +t[i + 3] },
                    { x: +t[i + 4], y: +t[i + 5] },
                  ];
                  e
                    ? i
                      ? n - 4 == i
                        ? (s[3] = { x: +t[0], y: +t[1] })
                        : n - 2 == i &&
                          ((s[2] = { x: +t[0], y: +t[1] }),
                          (s[3] = { x: +t[2], y: +t[3] }))
                      : (s[0] = { x: +t[n - 2], y: +t[n - 1] })
                    : n - 4 == i
                      ? (s[3] = s[2])
                      : i || (s[0] = { x: +t[i], y: +t[i + 1] }),
                    r.push([
                      "C",
                      (-s[0].x + 6 * s[1].x + s[2].x) / 6,
                      (-s[0].y + 6 * s[1].y + s[2].y) / 6,
                      (s[1].x + 6 * s[2].x - s[3].x) / 6,
                      (s[1].y + 6 * s[2].y - s[3].y) / 6,
                      s[2].x,
                      s[2].y,
                    ]);
                }
                return r;
              }
              (E.getRGB = ht(function (t) {
                if (!t || (t = j(t)).indexOf("-") + 1)
                  return {
                    r: -1,
                    g: -1,
                    b: -1,
                    hex: "none",
                    error: 1,
                    toString: ut,
                  };
                if ("none" == t)
                  return { r: -1, g: -1, b: -1, hex: "none", toString: ut };
                O[P](t.toLowerCase().substring(0, 2)) ||
                  "#" == t.charAt() ||
                  (t = lt(t));
                var e,
                  r,
                  i,
                  n,
                  s,
                  a = t.match(h);
                return a
                  ? (a[2] &&
                      ((i = f(a[2].substring(5), 16)),
                      (r = f(a[2].substring(3, 5), 16)),
                      (e = f(a[2].substring(1, 3), 16))),
                    a[3] &&
                      ((i = f((t = a[3].charAt(3)) + t, 16)),
                      (r = f((t = a[3].charAt(2)) + t, 16)),
                      (e = f((t = a[3].charAt(1)) + t, 16))),
                    a[4] &&
                      ((s = a[4][z](p)),
                      (e = I(s[0])),
                      "%" == s[0].slice(-1) && (e *= 2.55),
                      (r = I(s[1])),
                      "%" == s[1].slice(-1) && (r *= 2.55),
                      (i = I(s[2])),
                      "%" == s[2].slice(-1) && (i *= 2.55),
                      "rgba" == a[1].toLowerCase().slice(0, 4) && (n = I(s[3])),
                      s[3] && "%" == s[3].slice(-1) && (n /= 100)),
                    a[5]
                      ? ((s = a[5][z](p)),
                        (e = I(s[0])),
                        "%" == s[0].slice(-1) && (e *= 2.55),
                        (r = I(s[1])),
                        "%" == s[1].slice(-1) && (r *= 2.55),
                        (i = I(s[2])),
                        "%" == s[2].slice(-1) && (i *= 2.55),
                        ("deg" != s[0].slice(-3) && "°" != s[0].slice(-1)) ||
                          (e /= 360),
                        "hsba" == a[1].toLowerCase().slice(0, 4) &&
                          (n = I(s[3])),
                        s[3] && "%" == s[3].slice(-1) && (n /= 100),
                        E.hsb2rgb(e, r, i, n))
                      : a[6]
                        ? ((s = a[6][z](p)),
                          (e = I(s[0])),
                          "%" == s[0].slice(-1) && (e *= 2.55),
                          (r = I(s[1])),
                          "%" == s[1].slice(-1) && (r *= 2.55),
                          (i = I(s[2])),
                          "%" == s[2].slice(-1) && (i *= 2.55),
                          ("deg" != s[0].slice(-3) && "°" != s[0].slice(-1)) ||
                            (e /= 360),
                          "hsla" == a[1].toLowerCase().slice(0, 4) &&
                            (n = I(s[3])),
                          s[3] && "%" == s[3].slice(-1) && (n /= 100),
                          E.hsl2rgb(e, r, i, n))
                        : (((a = { r: e, g: r, b: i, toString: ut }).hex =
                            "#" +
                            (16777216 | i | (r << 8) | (e << 16))
                              .toString(16)
                              .slice(1)),
                          E.is(n, "finite") && (a.opacity = n),
                          a))
                  : {
                      r: -1,
                      g: -1,
                      b: -1,
                      hex: "none",
                      error: 1,
                      toString: ut,
                    };
              }, E)),
                (E.hsb = ht(function (t, e, r) {
                  return E.hsb2rgb(t, e, r).hex;
                })),
                (E.hsl = ht(function (t, e, r) {
                  return E.hsl2rgb(t, e, r).hex;
                })),
                (E.rgb = ht(function (t, e, r) {
                  function i(t) {
                    return (t + 0.5) | 0;
                  }
                  return (
                    "#" +
                    (16777216 | i(r) | (i(e) << 8) | (i(t) << 16))
                      .toString(16)
                      .slice(1)
                  );
                })),
                (E.getColor = function (t) {
                  var e = (this.getColor.start = this.getColor.start || {
                      h: 0,
                      s: 1,
                      b: t || 0.75,
                    }),
                    t = this.hsb2rgb(e.h, e.s, e.b);
                  return (
                    (e.h += 0.075),
                    1 < e.h &&
                      ((e.h = 0),
                      (e.s -= 0.2),
                      e.s <= 0 &&
                        (this.getColor.start = { h: 0, s: 1, b: e.b })),
                    t.hex
                  );
                }),
                (E.getColor.reset = function () {
                  delete this.start;
                }),
                (E.parsePathString = function (t) {
                  if (!t) return null;
                  var e = ft(t);
                  if (e.arr) return wt(e.arr);
                  var s = {
                      a: 7,
                      c: 6,
                      h: 1,
                      l: 2,
                      m: 2,
                      r: 4,
                      q: 4,
                      s: 4,
                      t: 2,
                      v: 1,
                      z: 0,
                    },
                    a = [];
                  return (
                    E.is(t, v) && E.is(t[0], v) && (a = wt(t)),
                    a.length ||
                      j(t).replace(W, function (t, e, r) {
                        var i = [],
                          n = e.toLowerCase();
                        if (
                          (r.replace(G, function (t, e) {
                            e && i.push(+e);
                          }),
                          "m" == n &&
                            2 < i.length &&
                            (a.push([e][L](i.splice(0, 2))),
                            (n = "l"),
                            (e = "m" == e ? "l" : "L")),
                          "r" == n)
                        )
                          a.push([e][L](i));
                        else
                          for (
                            ;
                            i.length >= s[n] &&
                            (a.push([e][L](i.splice(0, s[n]))), s[n]);

                          );
                      }),
                    (a.toString = E._path2string),
                    (e.arr = wt(a)),
                    a
                  );
                }),
                (E.parseTransformString = ht(
                  function (t) {
                    if (!t) return null;
                    var n = [];
                    return (
                      E.is(t, v) && E.is(t[0], v) && (n = wt(t)),
                      n.length ||
                        j(t).replace(Y, function (t, e, r) {
                          var i = [];
                          y.call(e);
                          r.replace(G, function (t, e) {
                            e && i.push(+e);
                          }),
                            n.push([e][L](i));
                        }),
                      (n.toString = E._path2string),
                      n
                    );
                  },
                  this,
                  function (t) {
                    if (!t) return t;
                    for (var e = [], r = 0; r < t.length; r++) {
                      for (var i = [], n = 0; n < t[r].length; n++)
                        i.push(t[r][n]);
                      e.push(i);
                    }
                    return e;
                  },
                ));
              var ft = function (e) {
                var r = (ft.ps = ft.ps || {});
                return (
                  r[e] ? (r[e].sleep = 100) : (r[e] = { sleep: 100 }),
                  setTimeout(function () {
                    for (var t in r)
                      r[P](t) &&
                        t != e &&
                        (r[t].sleep--, r[t].sleep || delete r[t]);
                  }),
                  r[e]
                );
              };
              function pt(t, e, r, i, n) {
                return (
                  t *
                    (t * (-3 * e + 9 * r - 9 * i + 3 * n) +
                      6 * e -
                      12 * r +
                      6 * i) -
                  3 * e +
                  3 * r
                );
              }
              function dt(t, e, r, i, n, s, a, o, l) {
                null == l && (l = 1);
                for (
                  var h = (l = 1 < l ? 1 : l < 0 ? 0 : l) / 2,
                    u = [
                      -0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873,
                      -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816,
                    ],
                    c = [
                      0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601,
                      0.1601, 0.1069, 0.1069, 0.0472, 0.0472,
                    ],
                    f = 0,
                    p = 0;
                  p < 12;
                  p++
                ) {
                  var d = h * u[p] + h,
                    g = pt(d, t, r, n, a),
                    d = pt(d, e, i, s, o),
                    d = g * g + d * d;
                  f += c[p] * C.sqrt(d);
                }
                return h * f;
              }
              function gt(t, e, r) {
                var i = E.bezierBBox(t),
                  n = E.bezierBBox(e);
                if (!E.isBBoxIntersect(i, n)) return r ? 0 : [];
                for (
                  var i = dt.apply(0, t),
                    n = dt.apply(0, e),
                    s = k(~~(i / 5), 1),
                    a = k(~~(n / 5), 1),
                    o = [],
                    l = [],
                    h = {},
                    u = r ? 0 : [],
                    c = 0;
                  c < s + 1;
                  c++
                ) {
                  var f = E.findDotsAtSegment.apply(E, t.concat(c / s));
                  o.push({ x: f.x, y: f.y, t: c / s });
                }
                for (c = 0; c < a + 1; c++)
                  (f = E.findDotsAtSegment.apply(E, e.concat(c / a))),
                    l.push({ x: f.x, y: f.y, t: c / a });
                for (c = 0; c < s; c++)
                  for (var p = 0; p < a; p++) {
                    var d = o[c],
                      g = o[c + 1],
                      x = l[p],
                      y = l[p + 1],
                      v = S(g.x - d.x) < 0.001 ? "y" : "x",
                      m = S(y.x - x.x) < 0.001 ? "y" : "x",
                      b = (function (t, e, r, i, n, s, a, o) {
                        if (
                          !(
                            k(t, r) < B(n, a) ||
                            B(t, r) > k(n, a) ||
                            k(e, i) < B(s, o) ||
                            B(e, i) > k(s, o)
                          )
                        ) {
                          var l =
                              (t * i - e * r) * (n - a) -
                              (t - r) * (n * o - s * a),
                            h =
                              (t * i - e * r) * (s - o) -
                              (e - i) * (n * o - s * a),
                            u = (t - r) * (s - o) - (e - i) * (n - a);
                          if (u) {
                            var c = l / u,
                              l = h / u,
                              h = +c.toFixed(2),
                              u = +l.toFixed(2);
                            if (
                              !(
                                h < +B(t, r).toFixed(2) ||
                                h > +k(t, r).toFixed(2) ||
                                h < +B(n, a).toFixed(2) ||
                                h > +k(n, a).toFixed(2) ||
                                u < +B(e, i).toFixed(2) ||
                                u > +k(e, i).toFixed(2) ||
                                u < +B(s, o).toFixed(2) ||
                                u > +k(s, o).toFixed(2)
                              )
                            )
                              return { x: c, y: l };
                          }
                        }
                      })(d.x, d.y, g.x, g.y, x.x, x.y, y.x, y.y);
                    b &&
                      h[b.x.toFixed(4)] != b.y.toFixed(4) &&
                      ((h[b.x.toFixed(4)] = b.y.toFixed(4)),
                      (d =
                        d.t + S((b[v] - d[v]) / (g[v] - d[v])) * (g.t - d.t)),
                      (x =
                        x.t + S((b[m] - x[m]) / (y[m] - x[m])) * (y.t - x.t)),
                      0 <= d &&
                        d <= 1.001 &&
                        0 <= x &&
                        x <= 1.001 &&
                        (r
                          ? u++
                          : u.push({
                              x: b.x,
                              y: b.y,
                              t1: B(d, 1),
                              t2: B(x, 1),
                            })));
                  }
                return u;
              }
              function xt(t, e, r) {
                (t = E._path2curve(t)), (e = E._path2curve(e));
                for (
                  var i,
                    n,
                    s,
                    a,
                    o,
                    l,
                    h,
                    u,
                    c,
                    f,
                    p = r ? 0 : [],
                    d = 0,
                    g = t.length;
                  d < g;
                  d++
                ) {
                  var x = t[d];
                  if ("M" == x[0]) (i = o = x[1]), (n = l = x[2]);
                  else {
                    n =
                      "C" == x[0]
                        ? ((i = (c = [i, n].concat(x.slice(1)))[6]), c[7])
                        : ((c = [i, n, i, n, o, l, o, l]), (i = o), l);
                    for (var y = 0, v = e.length; y < v; y++) {
                      var m = e[y];
                      if ("M" == m[0]) (s = h = m[1]), (a = u = m[2]);
                      else {
                        a =
                          "C" == m[0]
                            ? ((s = (f = [s, a].concat(m.slice(1)))[6]), f[7])
                            : ((f = [s, a, s, a, h, u, h, u]), (s = h), u);
                        var b = gt(c, f, r);
                        if (r) p += b;
                        else {
                          for (var _ = 0, w = b.length; _ < w; _++)
                            (b[_].segment1 = d),
                              (b[_].segment2 = y),
                              (b[_].bez1 = c),
                              (b[_].bez2 = f);
                          p = p.concat(b);
                        }
                      }
                    }
                  }
                }
                return p;
              }
              (E.findDotsAtSegment = function (t, e, r, i, n, s, a, o, l) {
                var h = 1 - l,
                  u = x(h, 3),
                  c = x(h, 2),
                  f = l * l,
                  p = f * l,
                  d = u * t + 3 * c * l * r + 3 * h * l * l * n + p * a,
                  g = u * e + 3 * c * l * i + 3 * h * l * l * s + p * o,
                  u = t + 2 * l * (r - t) + f * (n - 2 * r + t),
                  c = e + 2 * l * (i - e) + f * (s - 2 * i + e),
                  p = r + 2 * l * (n - r) + f * (a - 2 * n + r),
                  f = i + 2 * l * (s - i) + f * (o - 2 * s + i),
                  r = h * t + l * r,
                  i = h * e + l * i,
                  a = h * n + l * a,
                  l = h * s + l * o,
                  o = 90 - (180 * C.atan2(u - p, c - f)) / T;
                return (
                  (p < u || c < f) && (o += 180),
                  {
                    x: d,
                    y: g,
                    m: { x: u, y: c },
                    n: { x: p, y: f },
                    start: { x: r, y: i },
                    end: { x: a, y: l },
                    alpha: o,
                  }
                );
              }),
                (E.bezierBBox = function (t, e, r, i, n, s, a, o) {
                  E.is(t, "array") || (t = [t, e, r, i, n, s, a, o]);
                  t = Ct.apply(null, t);
                  return {
                    x: t.min.x,
                    y: t.min.y,
                    x2: t.max.x,
                    y2: t.max.y,
                    width: t.max.x - t.min.x,
                    height: t.max.y - t.min.y,
                  };
                }),
                (E.isPointInsideBBox = function (t, e, r) {
                  return e >= t.x && e <= t.x2 && r >= t.y && r <= t.y2;
                }),
                (E.isBBoxIntersect = function (t, e) {
                  var r = E.isPointInsideBBox;
                  return (
                    r(e, t.x, t.y) ||
                    r(e, t.x2, t.y) ||
                    r(e, t.x, t.y2) ||
                    r(e, t.x2, t.y2) ||
                    r(t, e.x, e.y) ||
                    r(t, e.x2, e.y) ||
                    r(t, e.x, e.y2) ||
                    r(t, e.x2, e.y2) ||
                    (((t.x < e.x2 && t.x > e.x) || (e.x < t.x2 && e.x > t.x)) &&
                      ((t.y < e.y2 && t.y > e.y) || (e.y < t.y2 && e.y > t.y)))
                  );
                }),
                (E.pathIntersection = function (t, e) {
                  return xt(t, e);
                }),
                (E.pathIntersectionNumber = function (t, e) {
                  return xt(t, e, 1);
                }),
                (E.isPointInsidePath = function (t, e, r) {
                  var i = E.pathBBox(t);
                  return (
                    E.isPointInsideBBox(i, e, r) &&
                    xt(
                      t,
                      [
                        ["M", e, r],
                        ["H", i.x2 + 10],
                      ],
                      1,
                    ) %
                      2 ==
                      1
                  );
                }),
                (E._removedFactory = function (t) {
                  return function () {
                    M(
                      "raphael.log",
                      null,
                      "Raphaël: you are calling to method “" +
                        t +
                        "” of removed object",
                      t,
                    );
                  };
                });
              function yt(t, e, r, i) {
                return [t, e, r, i, r, i];
              }
              function vt(t, e, r, i, n, s) {
                return [
                  (1 / 3) * t + (2 / 3) * r,
                  (1 / 3) * e + (2 / 3) * i,
                  (1 / 3) * n + (2 / 3) * r,
                  (1 / 3) * s + (2 / 3) * i,
                  n,
                  s,
                ];
              }
              function mt(t, e, r, i, n, s, a, o, l) {
                var h = 1 - l;
                return {
                  x:
                    x(h, 3) * t +
                    3 * x(h, 2) * l * r +
                    3 * h * l * l * n +
                    x(l, 3) * a,
                  y:
                    x(h, 3) * e +
                    3 * x(h, 2) * l * i +
                    3 * h * l * l * s +
                    x(l, 3) * o,
                };
              }
              function bt(t) {
                var e = t[0];
                switch (e.toLowerCase()) {
                  case "t":
                    return [e, 0, 0];
                  case "m":
                    return [e, 1, 0, 0, 1, 0, 0];
                  case "r":
                    return 4 == t.length ? [e, 0, t[2], t[3]] : [e, 0];
                  case "s":
                    return 5 == t.length
                      ? [e, 1, 1, t[3], t[4]]
                      : 3 == t.length
                        ? [e, 1, 1]
                        : [e, 1];
                }
              }
              var _t = (E.pathBBox = function (t) {
                  var e = ft(t);
                  if (e.bbox) return tt(e.bbox);
                  if (!t)
                    return { x: 0, y: 0, width: 0, height: 0, x2: 0, y2: 0 };
                  for (
                    var r,
                      i,
                      n = 0,
                      s = 0,
                      a = [],
                      o = [],
                      l = 0,
                      h = (t = St(t)).length;
                    l < h;
                    l++
                  )
                    "M" == (i = t[l])[0]
                      ? ((n = i[1]), (s = i[2]), a.push(n), o.push(s))
                      : ((r = Ct(n, s, i[1], i[2], i[3], i[4], i[5], i[6])),
                        (a = a[L](r.min.x, r.max.x)),
                        (o = o[L](r.min.y, r.max.y)),
                        (n = i[5]),
                        (s = i[6]));
                  var u = B[b](0, a),
                    c = B[b](0, o),
                    f = k[b](0, a),
                    p = k[b](0, o),
                    d = f - u,
                    g = p - c,
                    g = {
                      x: u,
                      y: c,
                      x2: f,
                      y2: p,
                      width: d,
                      height: g,
                      cx: u + d / 2,
                      cy: c + g / 2,
                    };
                  return (e.bbox = tt(g)), g;
                }),
                wt = function (t) {
                  t = tt(t);
                  return (t.toString = E._path2string), t;
                },
                r = (E._pathToRelative = function (t) {
                  var e = ft(t);
                  if (e.rel) return wt(e.rel);
                  (E.is(t, v) && E.is(t && t[0], v)) ||
                    (t = E.parsePathString(t));
                  var r = [],
                    i = 0,
                    n = 0,
                    s = 0,
                    a = 0,
                    o = 0;
                  "M" == t[0][0] &&
                    ((s = i = t[0][1]),
                    (a = n = t[0][2]),
                    o++,
                    r.push(["M", i, n]));
                  for (var l = o, h = t.length; l < h; l++) {
                    var u = (r[l] = []),
                      c = t[l];
                    if (c[0] != y.call(c[0]))
                      switch (((u[0] = y.call(c[0])), u[0])) {
                        case "a":
                          (u[1] = c[1]),
                            (u[2] = c[2]),
                            (u[3] = c[3]),
                            (u[4] = c[4]),
                            (u[5] = c[5]),
                            (u[6] = +(c[6] - i).toFixed(3)),
                            (u[7] = +(c[7] - n).toFixed(3));
                          break;
                        case "v":
                          u[1] = +(c[1] - n).toFixed(3);
                          break;
                        case "m":
                          (s = c[1]), (a = c[2]);
                        default:
                          for (var f = 1, p = c.length; f < p; f++)
                            u[f] = +(c[f] - (f % 2 ? i : n)).toFixed(3);
                      }
                    else {
                      (u = r[l] = []),
                        "m" == c[0] && ((s = c[1] + i), (a = c[2] + n));
                      for (var d = 0, g = c.length; d < g; d++) r[l][d] = c[d];
                    }
                    var x = r[l].length;
                    switch (r[l][0]) {
                      case "z":
                        (i = s), (n = a);
                        break;
                      case "h":
                        i += +r[l][x - 1];
                        break;
                      case "v":
                        n += +r[l][x - 1];
                        break;
                      default:
                        (i += +r[l][x - 2]), (n += +r[l][x - 1]);
                    }
                  }
                  return (r.toString = E._path2string), (e.rel = wt(r)), r;
                }),
                kt = (E._pathToAbsolute = function (t) {
                  var e = ft(t);
                  if (e.abs) return wt(e.abs);
                  if (
                    ((E.is(t, v) && E.is(t && t[0], v)) ||
                      (t = E.parsePathString(t)),
                    !t || !t.length)
                  )
                    return [["M", 0, 0]];
                  var r = [],
                    i = 0,
                    n = 0,
                    s = 0,
                    a = 0,
                    o = 0;
                  "M" == t[0][0] &&
                    ((s = i = +t[0][1]),
                    (a = n = +t[0][2]),
                    o++,
                    (r[0] = ["M", i, n]));
                  for (
                    var l,
                      h,
                      u =
                        3 == t.length &&
                        "M" == t[0][0] &&
                        "R" == t[1][0].toUpperCase() &&
                        "Z" == t[2][0].toUpperCase(),
                      c = o,
                      f = t.length;
                    c < f;
                    c++
                  ) {
                    if ((r.push((l = [])), (h = t[c])[0] != m.call(h[0])))
                      switch (((l[0] = m.call(h[0])), l[0])) {
                        case "A":
                          (l[1] = h[1]),
                            (l[2] = h[2]),
                            (l[3] = h[3]),
                            (l[4] = h[4]),
                            (l[5] = h[5]),
                            (l[6] = +(h[6] + i)),
                            (l[7] = +(h[7] + n));
                          break;
                        case "V":
                          l[1] = +h[1] + n;
                          break;
                        case "H":
                          l[1] = +h[1] + i;
                          break;
                        case "R":
                          for (
                            var p = [i, n][L](h.slice(1)), d = 2, g = p.length;
                            d < g;
                            d++
                          )
                            (p[d] = +p[d] + i), (p[++d] = +p[d] + n);
                          r.pop(), (r = r[L](ct(p, u)));
                          break;
                        case "M":
                          (s = +h[1] + i), (a = +h[2] + n);
                        default:
                          for (d = 1, g = h.length; d < g; d++)
                            l[d] = +h[d] + (d % 2 ? i : n);
                      }
                    else if ("R" == h[0])
                      (p = [i, n][L](h.slice(1))),
                        r.pop(),
                        (r = r[L](ct(p, u))),
                        (l = ["R"][L](h.slice(-2)));
                    else for (var x = 0, y = h.length; x < y; x++) l[x] = h[x];
                    switch (l[0]) {
                      case "Z":
                        (i = s), (n = a);
                        break;
                      case "H":
                        i = l[1];
                        break;
                      case "V":
                        n = l[1];
                        break;
                      case "M":
                        (s = l[l.length - 2]), (a = l[l.length - 1]);
                      default:
                        (i = l[l.length - 2]), (n = l[l.length - 1]);
                    }
                  }
                  return (r.toString = E._path2string), (e.abs = wt(r)), r;
                }),
                Bt = function (t, e, r, i, n, s, a, o, l, h) {
                  var u = (120 * T) / 180,
                    c = (T / 180) * (+n || 0),
                    f = [],
                    p = ht(function (t, e, r) {
                      return {
                        x: t * C.cos(r) - e * C.sin(r),
                        y: t * C.sin(r) + e * C.cos(r),
                      };
                    });
                  h
                    ? ((b = h[0]), (_ = h[1]), (v = h[2]), (m = h[3]))
                    : ((t = (g = p(t, e, -c)).x),
                      (e = g.y),
                      (o = (g = p(o, l, -c)).x),
                      (l = g.y),
                      C.cos((T / 180) * n),
                      C.sin((T / 180) * n),
                      1 <
                        (y =
                          ((x = (t - o) / 2) * x) / (r * r) +
                          ((d = (e - l) / 2) * d) / (i * i)) &&
                        ((r *= y = C.sqrt(y)), (i *= y)),
                      (g = r * r),
                      (y = i * i),
                      (v =
                        ((g =
                          (s == a ? -1 : 1) *
                          C.sqrt(
                            S(
                              (g * y - g * d * d - y * x * x) /
                                (g * d * d + y * x * x),
                            ),
                          )) *
                          r *
                          d) /
                          i +
                        (t + o) / 2),
                      (m = (g * -i * x) / r + (e + l) / 2),
                      (b = C.asin(((e - m) / i).toFixed(9))),
                      (_ = C.asin(((l - m) / i).toFixed(9))),
                      (b = t < v ? T - b : b) < 0 && (b = 2 * T + b),
                      (_ = o < v ? T - _ : _) < 0 && (_ = 2 * T + _),
                      a && _ < b && (b -= 2 * T),
                      !a && b < _ && (_ -= 2 * T));
                  var d,
                    g,
                    x,
                    y = _ - b;
                  S(y) > u &&
                    ((d = _),
                    (g = o),
                    (x = l),
                    (_ = b + u * (a && b < _ ? 1 : -1)),
                    (o = v + r * C.cos(_)),
                    (l = m + i * C.sin(_)),
                    (f = Bt(o, l, r, i, n, 0, a, g, x, [_, d, v, m]))),
                    (y = _ - b);
                  var v = C.cos(b),
                    m = C.sin(b),
                    b = C.cos(_),
                    _ = C.sin(_),
                    y = C.tan(y / 4),
                    r = (4 / 3) * r * y,
                    i = (4 / 3) * i * y,
                    y = [t, e],
                    v = [t + r * m, e - i * v],
                    b = [o + r * _, l - i * b],
                    l = [o, l];
                  if (((v[0] = 2 * y[0] - v[0]), (v[1] = 2 * y[1] - v[1]), h))
                    return [v, b, l][L](f);
                  for (
                    var w = [],
                      k = 0,
                      B = (f = [v, b, l][L](f).join()[z](",")).length;
                    k < B;
                    k++
                  )
                    w[k] =
                      k % 2 ? p(f[k - 1], f[k], c).y : p(f[k], f[k + 1], c).x;
                  return w;
                },
                Ct = ht(function (t, e, r, i, n, s, a, o) {
                  var l,
                    h = n - 2 * r + t - (a - 2 * n + r),
                    u = 2 * (r - t) - 2 * (n - r),
                    c = t - r,
                    f = (-u + C.sqrt(u * u - 4 * h * c)) / 2 / h,
                    p = (-u - C.sqrt(u * u - 4 * h * c)) / 2 / h,
                    d = [e, o],
                    g = [t, a];
                  return (
                    "1e12" < S(f) && (f = 0.5),
                    "1e12" < S(p) && (p = 0.5),
                    0 < f &&
                      f < 1 &&
                      ((l = mt(t, e, r, i, n, s, a, o, f)),
                      g.push(l.x),
                      d.push(l.y)),
                    0 < p &&
                      p < 1 &&
                      ((l = mt(t, e, r, i, n, s, a, o, p)),
                      g.push(l.x),
                      d.push(l.y)),
                    (h = s - 2 * i + e - (o - 2 * s + i)),
                    (c = e - i),
                    (f =
                      (-(u = 2 * (i - e) - 2 * (s - i)) +
                        C.sqrt(u * u - 4 * h * c)) /
                      2 /
                      h),
                    (p = (-u - C.sqrt(u * u - 4 * h * c)) / 2 / h),
                    "1e12" < S(f) && (f = 0.5),
                    "1e12" < S(p) && (p = 0.5),
                    0 < f &&
                      f < 1 &&
                      ((l = mt(t, e, r, i, n, s, a, o, f)),
                      g.push(l.x),
                      d.push(l.y)),
                    0 < p &&
                      p < 1 &&
                      ((l = mt(t, e, r, i, n, s, a, o, p)),
                      g.push(l.x),
                      d.push(l.y)),
                    {
                      min: { x: B[b](0, g), y: B[b](0, d) },
                      max: { x: k[b](0, g), y: k[b](0, d) },
                    }
                  );
                }),
                St = (E._path2curve = ht(
                  function (t, e) {
                    var r = !e && ft(t);
                    if (!e && r.curve) return wt(r.curve);
                    function i(t, e, r) {
                      var i, n;
                      if (!t) return ["C", e.x, e.y, e.x, e.y, e.x, e.y];
                      switch (
                        (t[0] in { T: 1, Q: 1 } || (e.qx = e.qy = null), t[0])
                      ) {
                        case "M":
                          (e.X = t[1]), (e.Y = t[2]);
                          break;
                        case "A":
                          t = ["C"][L](Bt[b](0, [e.x, e.y][L](t.slice(1))));
                          break;
                        case "S":
                          (n =
                            "C" == r || "S" == r
                              ? ((i = 2 * e.x - e.bx), 2 * e.y - e.by)
                              : ((i = e.x), e.y)),
                            (t = ["C", i, n][L](t.slice(1)));
                          break;
                        case "T":
                          "Q" == r || "T" == r
                            ? ((e.qx = 2 * e.x - e.qx), (e.qy = 2 * e.y - e.qy))
                            : ((e.qx = e.x), (e.qy = e.y)),
                            (t = ["C"][L](
                              vt(e.x, e.y, e.qx, e.qy, t[1], t[2]),
                            ));
                          break;
                        case "Q":
                          (e.qx = t[1]),
                            (e.qy = t[2]),
                            (t = ["C"][L](
                              vt(e.x, e.y, t[1], t[2], t[3], t[4]),
                            ));
                          break;
                        case "L":
                          t = ["C"][L](yt(e.x, e.y, t[1], t[2]));
                          break;
                        case "H":
                          t = ["C"][L](yt(e.x, e.y, t[1], e.y));
                          break;
                        case "V":
                          t = ["C"][L](yt(e.x, e.y, e.x, t[1]));
                          break;
                        case "Z":
                          t = ["C"][L](yt(e.x, e.y, e.X, e.Y));
                      }
                      return t;
                    }
                    function n(t, e) {
                      if (7 < t[e].length) {
                        t[e].shift();
                        for (var r = t[e]; r.length; )
                          (u[e] = "A"),
                            o && (c[e] = "A"),
                            t.splice(e++, 0, ["C"][L](r.splice(0, 6)));
                        t.splice(e, 1), (g = k(a.length, (o && o.length) || 0));
                      }
                    }
                    function s(t, e, r, i, n) {
                      t &&
                        e &&
                        "M" == t[n][0] &&
                        "M" != e[n][0] &&
                        (e.splice(n, 0, ["M", i.x, i.y]),
                        (r.bx = 0),
                        (r.by = 0),
                        (r.x = t[n][1]),
                        (r.y = t[n][2]),
                        (g = k(a.length, (o && o.length) || 0)));
                    }
                    for (
                      var a = kt(t),
                        o = e && kt(e),
                        l = {
                          x: 0,
                          y: 0,
                          bx: 0,
                          by: 0,
                          X: 0,
                          Y: 0,
                          qx: null,
                          qy: null,
                        },
                        h = {
                          x: 0,
                          y: 0,
                          bx: 0,
                          by: 0,
                          X: 0,
                          Y: 0,
                          qx: null,
                          qy: null,
                        },
                        u = [],
                        c = [],
                        f = "",
                        p = "",
                        d = 0,
                        g = k(a.length, (o && o.length) || 0);
                      d < g;
                      d++
                    ) {
                      a[d] && (f = a[d][0]),
                        "C" != f && ((u[d] = f), d && (p = u[d - 1])),
                        (a[d] = i(a[d], l, p)),
                        "A" != u[d] && "C" == f && (u[d] = "C"),
                        n(a, d),
                        o &&
                          (o[d] && (f = o[d][0]),
                          "C" != f && ((c[d] = f), d && (p = c[d - 1])),
                          (o[d] = i(o[d], h, p)),
                          "A" != c[d] && "C" == f && (c[d] = "C"),
                          n(o, d)),
                        s(a, o, l, h, d),
                        s(o, a, h, l, d);
                      var x = a[d],
                        y = o && o[d],
                        v = x.length,
                        m = o && y.length;
                      (l.x = x[v - 2]),
                        (l.y = x[v - 1]),
                        (l.bx = I(x[v - 4]) || l.x),
                        (l.by = I(x[v - 3]) || l.y),
                        (h.bx = o && (I(y[m - 4]) || h.x)),
                        (h.by = o && (I(y[m - 3]) || h.y)),
                        (h.x = o && y[m - 2]),
                        (h.y = o && y[m - 1]);
                    }
                    return o || (r.curve = wt(a)), o ? [a, o] : a;
                  },
                  null,
                  wt,
                )),
                Tt =
                  ((E._parseDots = ht(function (t) {
                    for (var e = [], r = 0, i = t.length; r < i; r++) {
                      var n = {},
                        s = t[r].match(/^([^:]*):?([\d\.]*)/);
                      if (((n.color = E.getRGB(s[1])), n.color.error))
                        return null;
                      (n.opacity = n.color.opacity),
                        (n.color = n.color.hex),
                        s[2] && (n.offset = s[2] + "%"),
                        e.push(n);
                    }
                    for (r = 1, i = e.length - 1; r < i; r++)
                      if (!e[r].offset) {
                        for (
                          var a = I(e[r - 1].offset || 0), o = 0, l = r + 1;
                          l < i;
                          l++
                        )
                          if (e[l].offset) {
                            o = e[l].offset;
                            break;
                          }
                        o || ((o = 100), (l = i));
                        for (var h = ((o = I(o)) - a) / (l - r + 1); r < l; r++)
                          (a += h), (e[r].offset = a + "%");
                      }
                    return e;
                  })),
                  (E._tear = function (t, e) {
                    t == e.top && (e.top = t.prev),
                      t == e.bottom && (e.bottom = t.next),
                      t.next && (t.next.prev = t.prev),
                      t.prev && (t.prev.next = t.next);
                  })),
                At =
                  ((E._tofront = function (t, e) {
                    e.top !== t &&
                      (Tt(t, e),
                      (t.next = null),
                      (t.prev = e.top),
                      (e.top.next = t),
                      (e.top = t));
                  }),
                  (E._toback = function (t, e) {
                    e.bottom !== t &&
                      (Tt(t, e),
                      (t.next = e.bottom),
                      (t.prev = null),
                      (e.bottom.prev = t),
                      (e.bottom = t));
                  }),
                  (E._insertafter = function (t, e, r) {
                    Tt(t, r),
                      e == r.top && (r.top = t),
                      e.next && (e.next.prev = t),
                      (t.next = e.next),
                      ((t.prev = e).next = t);
                  }),
                  (E._insertbefore = function (t, e, r) {
                    Tt(t, r),
                      e == r.bottom && (r.bottom = t),
                      e.prev && (e.prev.next = t),
                      (t.prev = e.prev),
                      ((e.prev = t).next = e);
                  }),
                  (E.toMatrix = function (t, e) {
                    var r = _t(t),
                      t = {
                        _: { transform: _ },
                        getBBox: function () {
                          return r;
                        },
                      };
                    return Mt(t, e), t.matrix;
                  })),
                Mt =
                  ((E.transformPath = function (t, e) {
                    return Q(t, At(t, e));
                  }),
                  (E._extractTransform = function (t, e) {
                    if (null == e) return t._.transform;
                    e = j(e).replace(/\.{3}|\u2026/g, t._.transform || _);
                    var r,
                      i = E.parseTransformString(e),
                      n = 0,
                      e = 0,
                      s = 1,
                      a = 1,
                      o = t._,
                      l = new Nt();
                    if (((o.transform = i || []), i))
                      for (var h = 0, u = i.length; h < u; h++) {
                        var c,
                          f,
                          p,
                          d,
                          g,
                          x = i[h],
                          y = x.length,
                          v = j(x[0]).toLowerCase(),
                          m = x[0] != v,
                          b = m ? l.invert() : 0;
                        "t" == v && 3 == y
                          ? m
                            ? ((c = b.x(0, 0)),
                              (f = b.y(0, 0)),
                              (p = b.x(x[1], x[2])),
                              (d = b.y(x[1], x[2])),
                              l.translate(p - c, d - f))
                            : l.translate(x[1], x[2])
                          : "r" == v
                            ? 2 == y
                              ? ((g = g || t.getBBox(1)),
                                l.rotate(
                                  x[1],
                                  g.x + g.width / 2,
                                  g.y + g.height / 2,
                                ),
                                (n += x[1]))
                              : 4 == y &&
                                (m
                                  ? ((p = b.x(x[2], x[3])),
                                    (d = b.y(x[2], x[3])),
                                    l.rotate(x[1], p, d))
                                  : l.rotate(x[1], x[2], x[3]),
                                (n += x[1]))
                            : "s" == v
                              ? 2 == y || 3 == y
                                ? ((g = g || t.getBBox(1)),
                                  l.scale(
                                    x[1],
                                    x[y - 1],
                                    g.x + g.width / 2,
                                    g.y + g.height / 2,
                                  ),
                                  (s *= x[1]),
                                  (a *= x[y - 1]))
                                : 5 == y &&
                                  (m
                                    ? ((p = b.x(x[3], x[4])),
                                      (d = b.y(x[3], x[4])),
                                      l.scale(x[1], x[2], p, d))
                                    : l.scale(x[1], x[2], x[3], x[4]),
                                  (s *= x[1]),
                                  (a *= x[2]))
                              : "m" == v &&
                                7 == y &&
                                l.add(x[1], x[2], x[3], x[4], x[5], x[6]),
                          (o.dirtyT = 1),
                          (t.matrix = l);
                      }
                    (t.matrix = l),
                      (o.sx = s),
                      (o.sy = a),
                      (o.deg = n),
                      (o.dx = r = l.e),
                      (o.dy = e = l.f),
                      1 == s && 1 == a && !n && o.bbox
                        ? ((o.bbox.x += +r), (o.bbox.y += +e))
                        : (o.dirtyT = 1);
                  })),
                Et = (E._equaliseTransform = function (t, e) {
                  (e = j(e).replace(/\.{3}|\u2026/g, t)),
                    (t = E.parseTransformString(t) || []),
                    (e = E.parseTransformString(e) || []);
                  for (
                    var r,
                      i,
                      n,
                      s,
                      a = k(t.length, e.length),
                      o = [],
                      l = [],
                      h = 0;
                    h < a;
                    h++
                  ) {
                    if (
                      ((n = t[h] || bt(e[h])),
                      (s = e[h] || bt(n)),
                      n[0] != s[0] ||
                        ("r" == n[0].toLowerCase() &&
                          (n[2] != s[2] || n[3] != s[3])) ||
                        ("s" == n[0].toLowerCase() &&
                          (n[3] != s[3] || n[4] != s[4])))
                    )
                      return;
                    for (
                      o[h] = [], l[h] = [], r = 0, i = k(n.length, s.length);
                      r < i;
                      r++
                    )
                      r in n && (o[h][r] = n[r]), r in s && (l[h][r] = s[r]);
                  }
                  return { from: o, to: l };
                });
              function Nt(t, e, r, i, n, s) {
                null != t
                  ? ((this.a = +t),
                    (this.b = +e),
                    (this.c = +r),
                    (this.d = +i),
                    (this.e = +n),
                    (this.f = +s))
                  : ((this.a = 1),
                    (this.b = 0),
                    (this.c = 0),
                    (this.d = 1),
                    (this.e = 0),
                    (this.f = 0));
              }
              function Pt(t) {
                return t[0] * t[0] + t[1] * t[1];
              }
              function Lt(t) {
                var e = C.sqrt(Pt(t));
                t[0] && (t[0] /= e), t[1] && (t[1] /= e);
              }
              (E._getContainer = function (t, e, r, i) {
                var n =
                  null != i || E.is(t, "object") ? t : d.doc.getElementById(t);
                if (null != n)
                  return n.tagName
                    ? null == e
                      ? {
                          container: n,
                          width: n.style.pixelWidth || n.offsetWidth,
                          height: n.style.pixelHeight || n.offsetHeight,
                        }
                      : { container: n, width: e, height: r }
                    : { container: 1, x: t, y: e, width: r, height: i };
              }),
                (E.pathToRelative = r),
                (E._engine = {}),
                (E.path2curve = St),
                (E.matrix = function (t, e, r, i, n, s) {
                  return new Nt(t, e, r, i, n, s);
                }),
                ((r = Nt.prototype).add = function (t, e, r, i, n, s) {
                  var a,
                    o,
                    l,
                    h,
                    u = [[], [], []],
                    c = [
                      [this.a, this.c, this.e],
                      [this.b, this.d, this.f],
                      [0, 0, 1],
                    ],
                    f = [
                      [t, r, n],
                      [e, i, s],
                      [0, 0, 1],
                    ];
                  for (
                    t &&
                      t instanceof Nt &&
                      (f = [
                        [t.a, t.c, t.e],
                        [t.b, t.d, t.f],
                        [0, 0, 1],
                      ]),
                      a = 0;
                    a < 3;
                    a++
                  )
                    for (o = 0; o < 3; o++) {
                      for (l = h = 0; l < 3; l++) h += c[a][l] * f[l][o];
                      u[a][o] = h;
                    }
                  (this.a = u[0][0]),
                    (this.b = u[1][0]),
                    (this.c = u[0][1]),
                    (this.d = u[1][1]),
                    (this.e = u[0][2]),
                    (this.f = u[1][2]);
                }),
                (r.invert = function () {
                  var t = this,
                    e = t.a * t.d - t.b * t.c;
                  return new Nt(
                    t.d / e,
                    -t.b / e,
                    -t.c / e,
                    t.a / e,
                    (t.c * t.f - t.d * t.e) / e,
                    (t.b * t.e - t.a * t.f) / e,
                  );
                }),
                (r.clone = function () {
                  return new Nt(this.a, this.b, this.c, this.d, this.e, this.f);
                }),
                (r.translate = function (t, e) {
                  this.add(1, 0, 0, 1, t, e);
                }),
                (r.scale = function (t, e, r, i) {
                  null == e && (e = t),
                    (r || i) && this.add(1, 0, 0, 1, r, i),
                    this.add(t, 0, 0, e, 0, 0),
                    (r || i) && this.add(1, 0, 0, 1, -r, -i);
                }),
                (r.rotate = function (t, e, r) {
                  (t = E.rad(t)), (e = e || 0), (r = r || 0);
                  var i = +C.cos(t).toFixed(9),
                    t = +C.sin(t).toFixed(9);
                  this.add(i, t, -t, i, e, r), this.add(1, 0, 0, 1, -e, -r);
                }),
                (r.x = function (t, e) {
                  return t * this.a + e * this.c + this.e;
                }),
                (r.y = function (t, e) {
                  return t * this.b + e * this.d + this.f;
                }),
                (r.get = function (t) {
                  return +this[j.fromCharCode(97 + t)].toFixed(4);
                }),
                (r.toString = function () {
                  return E.svg
                    ? "matrix(" +
                        [
                          this.get(0),
                          this.get(1),
                          this.get(2),
                          this.get(3),
                          this.get(4),
                          this.get(5),
                        ].join() +
                        ")"
                    : [
                        this.get(0),
                        this.get(2),
                        this.get(1),
                        this.get(3),
                        0,
                        0,
                      ].join();
                }),
                (r.toFilter = function () {
                  return (
                    "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                    this.get(0) +
                    ", M12=" +
                    this.get(2) +
                    ", M21=" +
                    this.get(1) +
                    ", M22=" +
                    this.get(3) +
                    ", Dx=" +
                    this.get(4) +
                    ", Dy=" +
                    this.get(5) +
                    ", sizingmethod='auto expand')"
                  );
                }),
                (r.offset = function () {
                  return [this.e.toFixed(4), this.f.toFixed(4)];
                }),
                (r.split = function () {
                  var t = {};
                  (t.dx = this.e), (t.dy = this.f);
                  var e = [
                    [this.a, this.c],
                    [this.b, this.d],
                  ];
                  (t.scalex = C.sqrt(Pt(e[0]))),
                    Lt(e[0]),
                    (t.shear = e[0][0] * e[1][0] + e[0][1] * e[1][1]),
                    (e[1] = [
                      e[1][0] - e[0][0] * t.shear,
                      e[1][1] - e[0][1] * t.shear,
                    ]),
                    (t.scaley = C.sqrt(Pt(e[1]))),
                    Lt(e[1]),
                    (t.shear /= t.scaley);
                  var r = -e[0][1],
                    e = e[1][1];
                  return (
                    e < 0
                      ? ((t.rotate = E.deg(C.acos(e))),
                        r < 0 && (t.rotate = 360 - t.rotate))
                      : (t.rotate = E.deg(C.asin(r))),
                    (t.isSimple = !(
                      +t.shear.toFixed(9) ||
                      (t.scalex.toFixed(9) != t.scaley.toFixed(9) && t.rotate)
                    )),
                    (t.isSuperSimple =
                      !+t.shear.toFixed(9) &&
                      t.scalex.toFixed(9) == t.scaley.toFixed(9) &&
                      !t.rotate),
                    (t.noRotation = !+t.shear.toFixed(9) && !t.rotate),
                    t
                  );
                }),
                (r.toTransformString = function (t) {
                  t = t || this[z]();
                  return t.isSimple
                    ? ((t.scalex = +t.scalex.toFixed(4)),
                      (t.scaley = +t.scaley.toFixed(4)),
                      (t.rotate = +t.rotate.toFixed(4)),
                      (t.dx || t.dy ? "t" + [t.dx, t.dy] : _) +
                        (1 != t.scalex || 1 != t.scaley
                          ? "s" + [t.scalex, t.scaley, 0, 0]
                          : _) +
                        (t.rotate ? "r" + [t.rotate, 0, 0] : _))
                    : "m" +
                        [
                          this.get(0),
                          this.get(1),
                          this.get(2),
                          this.get(3),
                          this.get(4),
                          this.get(5),
                        ];
                });
              function jt() {
                this.returnValue = !1;
              }
              function zt() {
                return this.originalEvent.preventDefault();
              }
              function Ft() {
                this.cancelBubble = !0;
              }
              function Rt() {
                return this.originalEvent.stopPropagation();
              }
              function It(t) {
                var e = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                  r = d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
                return { x: t.clientX + r, y: t.clientY + e };
              }
              function qt(t) {
                for (
                  var e,
                    r = t.clientX,
                    i = t.clientY,
                    n = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    s =
                      d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft,
                    a = Ot.length;
                  a--;

                ) {
                  if (((e = Ot[a]), g && t.touches)) {
                    for (var o, l = t.touches.length; l--; )
                      if ((o = t.touches[l]).identifier == e.el._drag.id) {
                        (r = o.clientX),
                          (i = o.clientY),
                          (t.originalEvent || t).preventDefault();
                        break;
                      }
                  } else t.preventDefault();
                  var h,
                    u = e.el.node,
                    c = u.nextSibling,
                    f = u.parentNode,
                    p = u.style.display;
                  d.win.opera && f.removeChild(u),
                    (u.style.display = "none"),
                    (h = e.el.paper.getElementByPoint(r, i)),
                    (u.style.display = p),
                    d.win.opera &&
                      (c ? f.insertBefore(u, c) : f.appendChild(u)),
                    h && M("raphael.drag.over." + e.el.id, e.el, h),
                    (r += s),
                    (i += n),
                    M(
                      "raphael.drag.move." + e.el.id,
                      e.move_scope || e.el,
                      r - e.el._drag.x,
                      i - e.el._drag.y,
                      r,
                      i,
                      t,
                    );
                }
              }
              for (
                var Dt = d.doc.addEventListener
                    ? function (s, t, a, o) {
                        function e(t) {
                          var e = It(t);
                          return a.call(o, t, e.x, e.y);
                        }
                        var r;
                        return (
                          s.addEventListener(t, e, !1),
                          g &&
                            l[t] &&
                            ((r = function (t) {
                              for (
                                var e = It(t),
                                  r = t,
                                  i = 0,
                                  n = t.targetTouches && t.targetTouches.length;
                                i < n;
                                i++
                              )
                                if (t.targetTouches[i].target == s) {
                                  ((t = t.targetTouches[i]).originalEvent = r),
                                    (t.preventDefault = zt),
                                    (t.stopPropagation = Rt);
                                  break;
                                }
                              return a.call(o, t, e.x, e.y);
                            }),
                            s.addEventListener(l[t], r, !1)),
                          function () {
                            return (
                              s.removeEventListener(t, e, !1),
                              g && l[t] && s.removeEventListener(l[t], r, !1),
                              !0
                            );
                          }
                        );
                      }
                    : d.doc.attachEvent
                      ? function (t, e, i, n) {
                          function r(t) {
                            t = t || d.win.event;
                            var e =
                                d.doc.documentElement.scrollTop ||
                                d.doc.body.scrollTop,
                              r =
                                d.doc.documentElement.scrollLeft ||
                                d.doc.body.scrollLeft,
                              r = t.clientX + r,
                              e = t.clientY + e;
                            return (
                              (t.preventDefault = t.preventDefault || jt),
                              (t.stopPropagation = t.stopPropagation || Ft),
                              i.call(n, t, r, e)
                            );
                          }
                          t.attachEvent("on" + e, r);
                          return function () {
                            return t.detachEvent("on" + e, r), !0;
                          };
                        }
                      : void 0,
                  Ot = [],
                  Vt = function (t) {
                    E.unmousemove(qt).unmouseup(Vt);
                    for (var e, r = Ot.length; r--; )
                      ((e = Ot[r]).el._drag = {}),
                        M(
                          "raphael.drag.end." + e.el.id,
                          e.end_scope || e.start_scope || e.move_scope || e.el,
                          t,
                        );
                    Ot = [];
                  },
                  Wt = (E.el = {}),
                  Yt = a.length;
                Yt--;

              )
                !(function (i) {
                  (E[i] = Wt[i] =
                    function (t, e) {
                      return (
                        E.is(t, "function") &&
                          ((this.events = this.events || []),
                          this.events.push({
                            name: i,
                            f: t,
                            unbind: Dt(
                              this.shape || this.node || d.doc,
                              i,
                              t,
                              e || this,
                            ),
                          })),
                        this
                      );
                    }),
                    (E["un" + i] = Wt["un" + i] =
                      function (t) {
                        for (var e = this.events || [], r = e.length; r--; )
                          e[r].name != i ||
                            (!E.is(t, "undefined") && e[r].f != t) ||
                            (e[r].unbind(),
                            e.splice(r, 1),
                            e.length || delete this.events);
                        return this;
                      });
                })(a[Yt]);
              (Wt.data = function (t, e) {
                var r = (H[this.id] = H[this.id] || {});
                if (0 == arguments.length) return r;
                if (1 != arguments.length)
                  return (
                    (r[t] = e),
                    M("raphael.data.set." + this.id, this, e, t),
                    this
                  );
                if (E.is(t, "object")) {
                  for (var i in t) t[P](i) && this.data(i, t[i]);
                  return this;
                }
                return M("raphael.data.get." + this.id, this, r[t], t), r[t];
              }),
                (Wt.removeData = function (t) {
                  return (
                    null == t
                      ? delete H[this.id]
                      : H[this.id] && delete H[this.id][t],
                    this
                  );
                }),
                (Wt.getData = function () {
                  return tt(H[this.id] || {});
                }),
                (Wt.hover = function (t, e, r, i) {
                  return this.mouseover(t, r).mouseout(e, i || r);
                }),
                (Wt.unhover = function (t, e) {
                  return this.unmouseover(t).unmouseout(e);
                });
              var Gt = [];
              (Wt.drag = function (o, l, h, u, c, f) {
                function t(t) {
                  (t.originalEvent || t).preventDefault();
                  var e = t.clientX,
                    r = t.clientY,
                    i = d.doc.documentElement.scrollTop || d.doc.body.scrollTop,
                    n =
                      d.doc.documentElement.scrollLeft || d.doc.body.scrollLeft;
                  if (((this._drag.id = t.identifier), g && t.touches))
                    for (var s, a = t.touches.length; a--; )
                      if (
                        ((s = t.touches[a]),
                        (this._drag.id = s.identifier),
                        s.identifier == this._drag.id)
                      ) {
                        (e = s.clientX), (r = s.clientY);
                        break;
                      }
                  (this._drag.x = e + n),
                    (this._drag.y = r + i),
                    Ot.length || E.mousemove(qt).mouseup(Vt),
                    Ot.push({
                      el: this,
                      move_scope: u,
                      start_scope: c,
                      end_scope: f,
                    }),
                    l && M.on("raphael.drag.start." + this.id, l),
                    o && M.on("raphael.drag.move." + this.id, o),
                    h && M.on("raphael.drag.end." + this.id, h),
                    M(
                      "raphael.drag.start." + this.id,
                      c || u || this,
                      this._drag.x,
                      this._drag.y,
                      t,
                    );
                }
                return (
                  (this._drag = {}),
                  Gt.push({ el: this, start: t }),
                  this.mousedown(t),
                  this
                );
              }),
                (Wt.onDragOver = function (t) {
                  t
                    ? M.on("raphael.drag.over." + this.id, t)
                    : M.unbind("raphael.drag.over." + this.id);
                }),
                (Wt.undrag = function () {
                  for (var t = Gt.length; t--; )
                    Gt[t].el == this &&
                      (this.unmousedown(Gt[t].start),
                      Gt.splice(t, 1),
                      M.unbind("raphael.drag.*." + this.id));
                  Gt.length || E.unmousemove(qt).unmouseup(Vt), (Ot = []);
                }),
                (K.circle = function (t, e, r) {
                  r = E._engine.circle(this, t || 0, e || 0, r || 0);
                  return this.__set__ && this.__set__.push(r), r;
                }),
                (K.rect = function (t, e, r, i, n) {
                  n = E._engine.rect(
                    this,
                    t || 0,
                    e || 0,
                    r || 0,
                    i || 0,
                    n || 0,
                  );
                  return this.__set__ && this.__set__.push(n), n;
                }),
                (K.ellipse = function (t, e, r, i) {
                  i = E._engine.ellipse(this, t || 0, e || 0, r || 0, i || 0);
                  return this.__set__ && this.__set__.push(i), i;
                }),
                (K.path = function (t) {
                  !t || E.is(t, u) || E.is(t[0], v) || (t += _);
                  var e = E._engine.path(E.format[b](E, arguments), this);
                  return this.__set__ && this.__set__.push(e), e;
                }),
                (K.image = function (t, e, r, i, n) {
                  n = E._engine.image(
                    this,
                    t || "about:blank",
                    e || 0,
                    r || 0,
                    i || 0,
                    n || 0,
                  );
                  return this.__set__ && this.__set__.push(n), n;
                }),
                (K.text = function (t, e, r) {
                  r = E._engine.text(this, t || 0, e || 0, j(r));
                  return this.__set__ && this.__set__.push(r), r;
                }),
                (K.set = function (t) {
                  E.is(t, "array") ||
                    (t = Array.prototype.splice.call(
                      arguments,
                      0,
                      arguments.length,
                    ));
                  var e = new ce(t);
                  return (
                    this.__set__ && this.__set__.push(e),
                    (e.paper = this),
                    (e.type = "set"),
                    e
                  );
                }),
                (K.setStart = function (t) {
                  this.__set__ = t || this.set();
                }),
                (K.setFinish = function (t) {
                  var e = this.__set__;
                  return delete this.__set__, e;
                }),
                (K.getSize = function () {
                  var t = this.canvas.parentNode;
                  return { width: t.offsetWidth, height: t.offsetHeight };
                }),
                (K.setSize = function (t, e) {
                  return E._engine.setSize.call(this, t, e);
                }),
                (K.setViewBox = function (t, e, r, i, n) {
                  return E._engine.setViewBox.call(this, t, e, r, i, n);
                }),
                (K.safari = () => {}),
                (K.top = K.bottom = null),
                (K.raphael = E);
              function Ht() {
                return (
                  this.x + w + this.y + w + this.width + " × " + this.height
                );
              }
              (K.getElementByPoint = function (t, e) {
                var r,
                  i,
                  n,
                  s,
                  a,
                  o = this.canvas,
                  l = d.doc.elementFromPoint(t, e);
                if (
                  (d.win.opera &&
                    "svg" == l.tagName &&
                    ((i = (r = o).getBoundingClientRect()),
                    (n = r.ownerDocument),
                    (s = n.body),
                    (a = n.documentElement),
                    (r = a.clientTop || s.clientTop || 0),
                    (n = a.clientLeft || s.clientLeft || 0),
                    (s = {
                      y:
                        i.top +
                        (d.win.pageYOffset || a.scrollTop || s.scrollTop) -
                        r,
                      x:
                        i.left +
                        (d.win.pageXOffset || a.scrollLeft || s.scrollLeft) -
                        n,
                    }),
                    ((n = o.createSVGRect()).x = t - s.x),
                    (n.y = e - s.y),
                    (n.width = n.height = 1),
                    (n = o.getIntersectionList(n, null)).length &&
                      (l = n[n.length - 1])),
                  !l)
                )
                  return null;
                for (; l.parentNode && l != o.parentNode && !l.raphael; )
                  l = l.parentNode;
                return (
                  l == this.canvas.parentNode && (l = o),
                  (l = l && l.raphael ? this.getById(l.raphaelid) : null)
                );
              }),
                (K.getElementsByBBox = function (e) {
                  var r = this.set();
                  return (
                    this.forEach(function (t) {
                      E.isBBoxIntersect(t.getBBox(), e) && r.push(t);
                    }),
                    r
                  );
                }),
                (K.getById = function (t) {
                  for (var e = this.bottom; e; ) {
                    if (e.id == t) return e;
                    e = e.next;
                  }
                  return null;
                }),
                (K.forEach = function (t, e) {
                  for (var r = this.bottom; r; ) {
                    if (!1 === t.call(e, r)) return this;
                    r = r.next;
                  }
                  return this;
                }),
                (K.getElementsByPoint = function (e, r) {
                  var i = this.set();
                  return (
                    this.forEach(function (t) {
                      t.isPointInside(e, r) && i.push(t);
                    }),
                    i
                  );
                }),
                (Wt.isPointInside = function (t, e) {
                  var r = (this.realPath = Z[this.type](this));
                  return (
                    this.attr("transform") &&
                      this.attr("transform").length &&
                      (r = E.transformPath(r, this.attr("transform"))),
                    E.isPointInsidePath(r, t, e)
                  );
                }),
                (Wt.getBBox = function (t) {
                  if (this.removed) return {};
                  var e = this._;
                  return t
                    ? ((!e.dirty && e.bboxwt) ||
                        ((this.realPath = Z[this.type](this)),
                        (e.bboxwt = _t(this.realPath)),
                        (e.bboxwt.toString = Ht),
                        (e.dirty = 0)),
                      e.bboxwt)
                    : ((!e.dirty && !e.dirtyT && e.bbox) ||
                        ((!e.dirty && this.realPath) ||
                          ((e.bboxwt = 0),
                          (this.realPath = Z[this.type](this))),
                        (e.bbox = _t(Q(this.realPath, this.matrix))),
                        (e.bbox.toString = Ht),
                        (e.dirty = e.dirtyT = 0)),
                      e.bbox);
                }),
                (Wt.clone = function () {
                  if (this.removed) return null;
                  var t = this.paper[this.type]().attr(this.attr());
                  return this.__set__ && this.__set__.push(t), t;
                }),
                (Wt.glow = function (t) {
                  if ("text" == this.type) return null;
                  for (
                    var e = {
                        width:
                          ((t = t || {}).width || 10) +
                          (+this.attr("stroke-width") || 1),
                        fill: t.fill || !1,
                        opacity: null == t.opacity ? 0.5 : t.opacity,
                        offsetx: t.offsetx || 0,
                        offsety: t.offsety || 0,
                        color: t.color || "#000",
                      },
                      r = e.width / 2,
                      i = this.paper,
                      n = i.set(),
                      s = this.realPath || Z[this.type](this),
                      s = this.matrix ? Q(s, this.matrix) : s,
                      a = 1;
                    a < 1 + r;
                    a++
                  )
                    n.push(
                      i
                        .path(s)
                        .attr({
                          stroke: e.color,
                          fill: e.fill ? e.color : "none",
                          "stroke-linejoin": "round",
                          "stroke-linecap": "round",
                          "stroke-width": +((e.width / r) * a).toFixed(3),
                          opacity: +(e.opacity / r).toFixed(3),
                        }),
                    );
                  return n.insertBefore(this).translate(e.offsetx, e.offsety);
                });
              function Xt(t, e, r, i, n, s, a, o, l) {
                return null == l
                  ? dt(t, e, r, i, n, s, a, o)
                  : E.findDotsAtSegment(
                      t,
                      e,
                      r,
                      i,
                      n,
                      s,
                      a,
                      o,
                      (function (t, e, r, i, n, s, a, o, l) {
                        if (!(l < 0 || dt(t, e, r, i, n, s, a, o) < l)) {
                          for (
                            var h = 0.5,
                              u = 1 - h,
                              c = dt(t, e, r, i, n, s, a, o, u);
                            0.01 < S(c - l);

                          )
                            c = dt(
                              t,
                              e,
                              r,
                              i,
                              n,
                              s,
                              a,
                              o,
                              (u += (c < l ? 1 : -1) * (h /= 2)),
                            );
                          return u;
                        }
                      })(t, e, r, i, n, s, a, o, l),
                    );
              }
              var r = function (p, d) {
                  return function (t, e, r) {
                    for (
                      var i,
                        n,
                        s,
                        a,
                        o,
                        l = "",
                        h = {},
                        u = 0,
                        c = 0,
                        f = (t = St(t)).length;
                      c < f;
                      c++
                    ) {
                      if ("M" == (s = t[c])[0]) (i = +s[1]), (n = +s[2]);
                      else {
                        if (
                          e <
                          u + (a = Xt(i, n, s[1], s[2], s[3], s[4], s[5], s[6]))
                        ) {
                          if (d && !h.start) {
                            if (
                              ((l += [
                                "C" +
                                  (o = Xt(
                                    i,
                                    n,
                                    s[1],
                                    s[2],
                                    s[3],
                                    s[4],
                                    s[5],
                                    s[6],
                                    e - u,
                                  )).start.x,
                                o.start.y,
                                o.m.x,
                                o.m.y,
                                o.x,
                                o.y,
                              ]),
                              r)
                            )
                              return l;
                            (h.start = l),
                              (l = [
                                "M" + o.x,
                                o.y + "C" + o.n.x,
                                o.n.y,
                                o.end.x,
                                o.end.y,
                                s[5],
                                s[6],
                              ].join()),
                              (u += a),
                              (i = +s[5]),
                              (n = +s[6]);
                            continue;
                          }
                          if (!p && !d)
                            return {
                              x: (o = Xt(
                                i,
                                n,
                                s[1],
                                s[2],
                                s[3],
                                s[4],
                                s[5],
                                s[6],
                                e - u,
                              )).x,
                              y: o.y,
                              alpha: o.alpha,
                            };
                        }
                        (u += a), (i = +s[5]), (n = +s[6]);
                      }
                      l += s.shift() + s;
                    }
                    return (
                      (h.end = l),
                      (o = p
                        ? u
                        : d
                          ? h
                          : E.findDotsAtSegment(
                              i,
                              n,
                              s[0],
                              s[1],
                              s[2],
                              s[3],
                              s[4],
                              s[5],
                              1,
                            )).alpha &&
                        (o = { x: o.x, y: o.y, alpha: o.alpha }),
                      o
                    );
                  };
                },
                Ut = r(1),
                $t = r(),
                Zt = r(0, 1);
              (E.getTotalLength = Ut),
                (E.getPointAtLength = $t),
                (E.getSubpath = function (t, e, r) {
                  if (this.getTotalLength(t) - r < 1e-6) return Zt(t, e).end;
                  r = Zt(t, r, 1);
                  return e ? Zt(r, e).end : r;
                }),
                (Wt.getTotalLength = function () {
                  var t = this.getPath();
                  if (t)
                    return this.node.getTotalLength
                      ? this.node.getTotalLength()
                      : Ut(t);
                }),
                (Wt.getPointAtLength = function (t) {
                  var e = this.getPath();
                  if (e) return $t(e, t);
                }),
                (Wt.getPath = function () {
                  var t,
                    e = E._getPath[this.type];
                  if ("text" != this.type && "set" != this.type)
                    return e && (t = e(this)), t;
                }),
                (Wt.getSubpath = function (t, e) {
                  var r = this.getPath();
                  if (r) return E.getSubpath(r, t, e);
                });
              r = E.easing_formulas = {
                linear: function (t) {
                  return t;
                },
                "<": function (t) {
                  return x(t, 1.7);
                },
                ">": function (t) {
                  return x(t, 0.48);
                },
                "<>": function (t) {
                  var e = 0.48 - t / 1.04,
                    r = C.sqrt(0.1734 + e * e),
                    t = r - e,
                    e = -r - e,
                    e =
                      x(S(t), 1 / 3) * (t < 0 ? -1 : 1) +
                      x(S(e), 1 / 3) * (e < 0 ? -1 : 1) +
                      0.5;
                  return 3 * (1 - e) * e * e + e * e * e;
                },
                backIn: function (t) {
                  return t * t * (2.70158 * t - 1.70158);
                },
                backOut: function (t) {
                  return --t * t * (2.70158 * t + 1.70158) + 1;
                },
                elastic: function (t) {
                  return t == !!t
                    ? t
                    : x(2, -10 * t) * C.sin((2 * T * (t - 0.075)) / 0.3) + 1;
                },
                bounce: function (t) {
                  var e = 7.5625,
                    r = 2.75,
                    t =
                      t < 1 / r
                        ? e * t * t
                        : t < 2 / r
                          ? e * (t -= 1.5 / r) * t + 0.75
                          : t < 2.5 / r
                            ? e * (t -= 2.25 / r) * t + 0.9375
                            : e * (t -= 2.625 / r) * t + 0.984375;
                  return t;
                },
              };
              (r.easeIn = r["ease-in"] = r["<"]),
                (r.easeOut = r["ease-out"] = r[">"]),
                (r.easeInOut = r["ease-in-out"] = r["<>"]),
                (r["back-in"] = r.backIn),
                (r["back-out"] = r.backOut);
              var Qt = [],
                Jt =
                  window.requestAnimationFrame ||
                  window.webkitRequestAnimationFrame ||
                  window.mozRequestAnimationFrame ||
                  window.oRequestAnimationFrame ||
                  window.msRequestAnimationFrame ||
                  function (t) {
                    setTimeout(t, 16);
                  },
                Kt = function () {
                  for (var t = +new Date(), e = 0; e < Qt.length; e++) {
                    var r = Qt[e];
                    if (!r.el.removed && !r.paused) {
                      var i,
                        n = t - r.start,
                        s = r.ms,
                        a = r.easing,
                        o = r.from,
                        l = r.diff,
                        h = r.to,
                        u = (r.t, r.el),
                        c = {},
                        f = {};
                      if (
                        (r.initstatus
                          ? ((n =
                              ((r.initstatus * r.anim.top - r.prev) /
                                (r.percent - r.prev)) *
                              s),
                            (r.status = r.initstatus),
                            delete r.initstatus,
                            r.stop && Qt.splice(e--, 1))
                          : (r.status =
                              (r.prev + (r.percent - r.prev) * (n / s)) /
                              r.anim.top),
                        !(n < 0))
                      )
                        if (n < s) {
                          var p,
                            d = a(n / s);
                          for (p in o)
                            if (o[P](p)) {
                              switch (D[p]) {
                                case F:
                                  b = +o[p] + d * s * l[p];
                                  break;
                                case "colour":
                                  b =
                                    "rgb(" +
                                    [
                                      te(A(o[p].r + d * s * l[p].r)),
                                      te(A(o[p].g + d * s * l[p].g)),
                                      te(A(o[p].b + d * s * l[p].b)),
                                    ].join(",") +
                                    ")";
                                  break;
                                case "path":
                                  b = [];
                                  for (var g = 0, x = o[p].length; g < x; g++) {
                                    b[g] = [o[p][g][0]];
                                    for (
                                      var y = 1, v = o[p][g].length;
                                      y < v;
                                      y++
                                    )
                                      b[g][y] =
                                        +o[p][g][y] + d * s * l[p][g][y];
                                    b[g] = b[g].join(w);
                                  }
                                  b = b.join(w);
                                  break;
                                case "transform":
                                  if (l[p].real)
                                    for (
                                      b = [], g = 0, x = o[p].length;
                                      g < x;
                                      g++
                                    )
                                      for (
                                        b[g] = [o[p][g][0]],
                                          y = 1,
                                          v = o[p][g].length;
                                        y < v;
                                        y++
                                      )
                                        b[g][y] =
                                          o[p][g][y] + d * s * l[p][g][y];
                                  else {
                                    function m(t) {
                                      return +o[p][t] + d * s * l[p][t];
                                    }
                                    var b = [
                                      ["m", m(0), m(1), m(2), m(3), m(4), m(5)],
                                    ];
                                  }
                                  break;
                                case "csv":
                                  if ("clip-rect" == p)
                                    for (b = [], g = 4; g--; )
                                      b[g] = +o[p][g] + d * s * l[p][g];
                                  break;
                                default:
                                  var _ = [][L](o[p]);
                                  for (
                                    b = [],
                                      g = u.paper.customAttributes[p].length;
                                    g--;

                                  )
                                    b[g] = +_[g] + d * s * l[p][g];
                              }
                              c[p] = b;
                            }
                          u.attr(c),
                            (function (t, e, r) {
                              setTimeout(function () {
                                M("raphael.anim.frame." + t, e, r);
                              });
                            })(u.id, u, r.anim);
                        } else {
                          if (
                            (!(function (t, e, r) {
                              setTimeout(function () {
                                M("raphael.anim.frame." + e.id, e, r),
                                  M("raphael.anim.finish." + e.id, e, r),
                                  E.is(t, "function") && t.call(e);
                              });
                            })(r.callback, u, r.anim),
                            u.attr(h),
                            Qt.splice(e--, 1),
                            1 < r.repeat && !r.next)
                          ) {
                            for (i in h) h[P](i) && (f[i] = r.totalOrigin[i]);
                            r.el.attr(f),
                              ie(
                                r.anim,
                                r.el,
                                r.anim.percents[0],
                                null,
                                r.totalOrigin,
                                r.repeat - 1,
                              );
                          }
                          r.next &&
                            !r.stop &&
                            ie(
                              r.anim,
                              r.el,
                              r.next,
                              null,
                              r.totalOrigin,
                              r.repeat,
                            );
                        }
                    }
                  }
                  Qt.length && Jt(Kt);
                },
                te = function (t) {
                  return 255 < t ? 255 : t < 0 ? 0 : t;
                };
              function ee(t, e, r, i, n, s) {
                var a,
                  l = 3 * e,
                  h = 3 * (i - e) - l,
                  u = 1 - l - h,
                  o = 3 * r,
                  c = 3 * (n - r) - o,
                  f = 1 - o - c;
                function p(t) {
                  return ((u * t + h) * t + l) * t;
                }
                return (
                  (a = (function (t, e) {
                    var r, i, n, s, a, o;
                    for (n = t, o = 0; o < 8; o++) {
                      if (((s = p(n) - t), S(s) < e)) return n;
                      if (S((a = (3 * u * n + 2 * h) * n + l)) < 1e-6) break;
                      n -= s / a;
                    }
                    if (((i = 1), (n = t) < (r = 0))) return r;
                    if (i < n) return i;
                    for (; r < i; ) {
                      if (((s = p(n)), S(s - t) < e)) return n;
                      s < t ? (r = n) : (i = n), (n = (i - r) / 2 + r);
                    }
                    return n;
                  })(t, (a = 1 / (200 * s)))),
                  ((f * a + c) * a + o) * a
                );
              }
              function re(t, e) {
                var r = [],
                  i = {};
                if (((this.ms = e), (this.times = 1), t)) {
                  for (var n in t) t[P](n) && ((i[I(n)] = t[n]), r.push(I(n)));
                  r.sort(X);
                }
                (this.anim = i),
                  (this.top = r[r.length - 1]),
                  (this.percents = r);
              }
              function ie(t, e, r, i, n, s) {
                r = I(r);
                var a,
                  o,
                  l,
                  h,
                  u,
                  c = t.ms,
                  f = {},
                  p = {},
                  d = {};
                if (i)
                  for (x = 0, y = Qt.length; x < y; x++) {
                    var g = Qt[x];
                    if (g.el.id == e.id && g.anim == t) {
                      g.percent != r ? (Qt.splice(x, 1), (l = 1)) : (o = g),
                        e.attr(g.totalOrigin);
                      break;
                    }
                  }
                else i = +p;
                for (var x = 0, y = t.percents.length; x < y; x++) {
                  if (t.percents[x] == r || t.percents[x] > i * t.top) {
                    (r = t.percents[x]),
                      (u = t.percents[x - 1] || 0),
                      (c = (c / t.top) * (r - u)),
                      (h = t.percents[x + 1]),
                      (a = t.anim[r]);
                    break;
                  }
                  i && e.attr(t.anim[t.percents[x]]);
                }
                if (a) {
                  if (o) (o.initstatus = i), (o.start = new Date() - o.ms * i);
                  else {
                    for (var v in a)
                      if (
                        a[P](v) &&
                        (D[P](v) || e.paper.customAttributes[P](v))
                      )
                        switch (
                          ((f[v] = e.attr(v)),
                          null == f[v] && (f[v] = q[v]),
                          (p[v] = a[v]),
                          D[v])
                        ) {
                          case F:
                            d[v] = (p[v] - f[v]) / c;
                            break;
                          case "colour":
                            f[v] = E.getRGB(f[v]);
                            var m = E.getRGB(p[v]);
                            d[v] = {
                              r: (m.r - f[v].r) / c,
                              g: (m.g - f[v].g) / c,
                              b: (m.b - f[v].b) / c,
                            };
                            break;
                          case "path":
                            var b = St(f[v], p[v]),
                              _ = b[1];
                            for (
                              f[v] = b[0], d[v] = [], x = 0, y = f[v].length;
                              x < y;
                              x++
                            ) {
                              d[v][x] = [0];
                              for (var w = 1, k = f[v][x].length; w < k; w++)
                                d[v][x][w] = (_[x][w] - f[v][x][w]) / c;
                            }
                            break;
                          case "transform":
                            (m = e._), (b = Et(m[v], p[v]));
                            if (b)
                              for (
                                f[v] = b.from,
                                  p[v] = b.to,
                                  d[v] = [],
                                  d[v].real = !0,
                                  x = 0,
                                  y = f[v].length;
                                x < y;
                                x++
                              )
                                for (
                                  d[v][x] = [f[v][x][0]],
                                    w = 1,
                                    k = f[v][x].length;
                                  w < k;
                                  w++
                                )
                                  d[v][x][w] = (p[v][x][w] - f[v][x][w]) / c;
                            else {
                              (b = e.matrix || new Nt()),
                                (m = {
                                  _: { transform: m.transform },
                                  getBBox: function () {
                                    return e.getBBox(1);
                                  },
                                });
                              (f[v] = [b.a, b.b, b.c, b.d, b.e, b.f]),
                                Mt(m, p[v]),
                                (p[v] = m._.transform),
                                (d[v] = [
                                  (m.matrix.a - b.a) / c,
                                  (m.matrix.b - b.b) / c,
                                  (m.matrix.c - b.c) / c,
                                  (m.matrix.d - b.d) / c,
                                  (m.matrix.e - b.e) / c,
                                  (m.matrix.f - b.f) / c,
                                ]);
                            }
                            break;
                          case "csv":
                            var B = j(a[v])[z](N),
                              C = j(f[v])[z](N);
                            if ("clip-rect" == v)
                              for (f[v] = C, d[v] = [], x = C.length; x--; )
                                d[v][x] = (B[x] - f[v][x]) / c;
                            p[v] = B;
                            break;
                          default:
                            for (
                              B = [][L](a[v]),
                                C = [][L](f[v]),
                                d[v] = [],
                                x = e.paper.customAttributes[v].length;
                              x--;

                            )
                              d[v][x] = ((B[x] || 0) - (C[x] || 0)) / c;
                        }
                    var S,
                      T = a.easing,
                      A = E.easing_formulas[T];
                    if (
                      ((A =
                        A ||
                        ((A = j(T).match(R)) && 5 == A.length
                          ? ((S = A),
                            function (t) {
                              return ee(t, +S[1], +S[2], +S[3], +S[4], c);
                            })
                          : U)),
                      (T = a.start || t.start || +new Date()),
                      (g = {
                        anim: t,
                        percent: r,
                        timestamp: T,
                        start: T + (t.del || 0),
                        status: 0,
                        initstatus: i || 0,
                        stop: !1,
                        ms: c,
                        easing: A,
                        from: f,
                        diff: d,
                        to: p,
                        el: e,
                        callback: a.callback,
                        prev: u,
                        next: h,
                        repeat: s || t.times,
                        origin: e.attr(),
                        totalOrigin: n,
                      }),
                      Qt.push(g),
                      i &&
                        !o &&
                        !l &&
                        ((g.stop = !0),
                        (g.start = new Date() - c * i),
                        1 == Qt.length))
                    )
                      return Kt();
                    l && (g.start = new Date() - g.ms * i),
                      1 == Qt.length && Jt(Kt);
                  }
                  M("raphael.anim.start." + e.id, e, t);
                }
              }
              function ne(t) {
                for (var e = 0; e < Qt.length; e++)
                  Qt[e].el.paper == t && Qt.splice(e--, 1);
              }
              (Wt.animateWith = function (t, e, r, i, n, s) {
                var a = this;
                if (a.removed) return s && s.call(a), a;
                s = r instanceof re ? r : E.animation(r, i, n, s);
                ie(s, a, s.percents[0], null, a.attr());
                for (var o = 0, l = Qt.length; o < l; o++)
                  if (Qt[o].anim == e && Qt[o].el == t) {
                    Qt[l - 1].start = Qt[o].start;
                    break;
                  }
                return a;
              }),
                (Wt.onAnimation = function (t) {
                  return (
                    t
                      ? M.on("raphael.anim.frame." + this.id, t)
                      : M.unbind("raphael.anim.frame." + this.id),
                    this
                  );
                }),
                (re.prototype.delay = function (t) {
                  var e = new re(this.anim, this.ms);
                  return (e.times = this.times), (e.del = +t || 0), e;
                }),
                (re.prototype.repeat = function (t) {
                  var e = new re(this.anim, this.ms);
                  return (
                    (e.del = this.del), (e.times = C.floor(k(t, 0)) || 1), e
                  );
                }),
                (E.animation = function (t, e, r, i) {
                  if (t instanceof re) return t;
                  (!E.is(r, "function") && r) ||
                    ((i = i || r || null), (r = null)),
                    (e = +e || 0);
                  var n,
                    s,
                    a = {};
                  for (s in (t = Object(t)))
                    t[P](s) &&
                      I(s) != s &&
                      I(s) + "%" != s &&
                      ((n = !0), (a[s] = t[s]));
                  if (n)
                    return (
                      r && (a.easing = r),
                      i && (a.callback = i),
                      new re({ 100: a }, e)
                    );
                  if (i) {
                    var o,
                      l = 0;
                    for (o in t) {
                      var h = f(o);
                      t[P](o) && l < h && (l = h);
                    }
                    t[(l += "%")].callback || (t[l].callback = i);
                  }
                  return new re(t, e);
                }),
                (Wt.animate = function (t, e, r, i) {
                  var n = this;
                  if (n.removed) return i && i.call(n), n;
                  i = t instanceof re ? t : E.animation(t, e, r, i);
                  return ie(i, n, i.percents[0], null, n.attr()), n;
                }),
                (Wt.setTime = function (t, e) {
                  return (
                    t && null != e && this.status(t, B(e, t.ms) / t.ms), this
                  );
                }),
                (Wt.status = function (t, e) {
                  var r,
                    i,
                    n = [],
                    s = 0;
                  if (null != e) return ie(t, this, -1, B(e, 1)), this;
                  for (r = Qt.length; s < r; s++)
                    if ((i = Qt[s]).el.id == this.id && (!t || i.anim == t)) {
                      if (t) return i.status;
                      n.push({ anim: i.anim, status: i.status });
                    }
                  return t ? 0 : n;
                }),
                (Wt.pause = function (t) {
                  for (var e = 0; e < Qt.length; e++)
                    Qt[e].el.id != this.id ||
                      (t && Qt[e].anim != t) ||
                      (!1 !==
                        M("raphael.anim.pause." + this.id, this, Qt[e].anim) &&
                        (Qt[e].paused = !0));
                  return this;
                }),
                (Wt.resume = function (t) {
                  for (var e, r = 0; r < Qt.length; r++)
                    Qt[r].el.id != this.id ||
                      (t && Qt[r].anim != t) ||
                      ((e = Qt[r]),
                      !1 !==
                        M("raphael.anim.resume." + this.id, this, e.anim) &&
                        (delete e.paused, this.status(e.anim, e.status)));
                  return this;
                }),
                (Wt.stop = function (t) {
                  for (var e = 0; e < Qt.length; e++)
                    Qt[e].el.id != this.id ||
                      (t && Qt[e].anim != t) ||
                      (!1 !==
                        M("raphael.anim.stop." + this.id, this, Qt[e].anim) &&
                        Qt.splice(e--, 1));
                  return this;
                }),
                M.on("raphael.remove", ne),
                M.on("raphael.clear", ne),
                (Wt.toString = function () {
                  return "Raphaël’s object";
                });
              var se,
                ae,
                oe,
                le,
                he,
                ue,
                ce = function (t) {
                  if (
                    ((this.items = []),
                    (this.length = 0),
                    (this.type = "set"),
                    t)
                  )
                    for (var e = 0, r = t.length; e < r; e++)
                      !t[e] ||
                        (t[e].constructor != Wt.constructor &&
                          t[e].constructor != ce) ||
                        ((this[this.items.length] = this.items[
                          this.items.length
                        ] =
                          t[e]),
                        this.length++);
                },
                fe = ce.prototype;
              for (se in ((fe.push = function () {
                for (var t, e, r = 0, i = arguments.length; r < i; r++)
                  !(t = arguments[r]) ||
                    (t.constructor != Wt.constructor && t.constructor != ce) ||
                    ((this[(e = this.items.length)] = this.items[e] = t),
                    this.length++);
                return this;
              }),
              (fe.pop = function () {
                return (
                  this.length && delete this[this.length--], this.items.pop()
                );
              }),
              (fe.forEach = function (t, e) {
                for (var r = 0, i = this.items.length; r < i; r++)
                  if (!1 === t.call(e, this.items[r], r)) return this;
                return this;
              }),
              Wt))
                Wt[P](se) &&
                  (fe[se] = (function (r) {
                    return function () {
                      var e = arguments;
                      return this.forEach(function (t) {
                        t[r][b](t, e);
                      });
                    };
                  })(se));
              return (
                (fe.attr = function (t, e) {
                  if (t && E.is(t, v) && E.is(t[0], "object"))
                    for (var r = 0, i = t.length; r < i; r++)
                      this.items[r].attr(t[r]);
                  else
                    for (var n = 0, s = this.items.length; n < s; n++)
                      this.items[n].attr(t, e);
                  return this;
                }),
                (fe.clear = function () {
                  for (; this.length; ) this.pop();
                }),
                (fe.splice = function (t, e, r) {
                  (t = t < 0 ? k(this.length + t, 0) : t),
                    (e = k(0, B(this.length - t, e)));
                  for (
                    var i = [], n = [], s = [], a = 2;
                    a < arguments.length;
                    a++
                  )
                    s.push(arguments[a]);
                  for (a = 0; a < e; a++) n.push(this[t + a]);
                  for (; a < this.length - t; a++) i.push(this[t + a]);
                  var o = s.length;
                  for (a = 0; a < o + i.length; a++)
                    this.items[t + a] = this[t + a] = a < o ? s[a] : i[a - o];
                  for (a = this.items.length = this.length -= e - o; this[a]; )
                    delete this[a++];
                  return new ce(n);
                }),
                (fe.exclude = function (t) {
                  for (var e = 0, r = this.length; e < r; e++)
                    if (this[e] == t) return this.splice(e, 1), !0;
                }),
                (fe.animate = function (t, e, r, i) {
                  (!E.is(r, "function") && r) || (i = r || null);
                  var n,
                    s = this.items.length,
                    a = s,
                    o = this;
                  if (!s) return this;
                  i &&
                    (n = function () {
                      --s || i.call(o);
                    }),
                    (r = E.is(r, u) ? r : n);
                  for (
                    var l = E.animation(t, e, r, n),
                      h = this.items[--a].animate(l);
                    a--;

                  )
                    this.items[a] &&
                      !this.items[a].removed &&
                      this.items[a].animateWith(h, l, l),
                      (this.items[a] && !this.items[a].removed) || s--;
                  return this;
                }),
                (fe.insertAfter = function (t) {
                  for (var e = this.items.length; e--; )
                    this.items[e].insertAfter(t);
                  return this;
                }),
                (fe.getBBox = function () {
                  for (
                    var t,
                      e = [],
                      r = [],
                      i = [],
                      n = [],
                      s = this.items.length;
                    s--;

                  )
                    this.items[s].removed ||
                      ((t = this.items[s].getBBox()),
                      e.push(t.x),
                      r.push(t.y),
                      i.push(t.x + t.width),
                      n.push(t.y + t.height));
                  return {
                    x: (e = B[b](0, e)),
                    y: (r = B[b](0, r)),
                    x2: (i = k[b](0, i)),
                    y2: (n = k[b](0, n)),
                    width: i - e,
                    height: n - r,
                  };
                }),
                (fe.clone = function (t) {
                  t = this.paper.set();
                  for (var e = 0, r = this.items.length; e < r; e++)
                    t.push(this.items[e].clone());
                  return t;
                }),
                (fe.toString = function () {
                  return "Raphaël‘s set";
                }),
                (fe.glow = function (r) {
                  var i = this.paper.set();
                  return (
                    this.forEach(function (t, e) {
                      t = t.glow(r);
                      null != t &&
                        t.forEach(function (t, e) {
                          i.push(t);
                        });
                    }),
                    i
                  );
                }),
                (fe.isPointInside = function (e, r) {
                  var i = !1;
                  return (
                    this.forEach(function (t) {
                      if (t.isPointInside(e, r)) return !(i = !0);
                    }),
                    i
                  );
                }),
                (E.registerFont = function (t) {
                  if (!t.face) return t;
                  this.fonts = this.fonts || {};
                  var e,
                    r = { w: t.w, face: {}, glyphs: {} },
                    i = t.face["font-family"];
                  for (e in t.face) t.face[P](e) && (r.face[e] = t.face[e]);
                  if (
                    (this.fonts[i]
                      ? this.fonts[i].push(r)
                      : (this.fonts[i] = [r]),
                    !t.svg)
                  )
                    for (var n in ((r.face["units-per-em"] = f(
                      t.face["units-per-em"],
                      10,
                    )),
                    t.glyphs))
                      if (t.glyphs[P](n)) {
                        var s = t.glyphs[n];
                        if (
                          ((r.glyphs[n] = {
                            w: s.w,
                            k: {},
                            d:
                              s.d &&
                              "M" +
                                s.d.replace(/[mlcxtrv]/g, function (t) {
                                  return (
                                    {
                                      l: "L",
                                      c: "C",
                                      x: "z",
                                      t: "m",
                                      r: "l",
                                      v: "c",
                                    }[t] || "M"
                                  );
                                }) +
                                "z",
                          }),
                          s.k)
                        )
                          for (var a in s.k)
                            s[P](a) && (r.glyphs[n].k[a] = s.k[a]);
                      }
                  return t;
                }),
                (K.getFont = function (t, e, r, i) {
                  if (
                    ((i = i || "normal"),
                    (r = r || "normal"),
                    (e =
                      +e ||
                      { normal: 400, bold: 700, lighter: 300, bolder: 800 }[
                        e
                      ] ||
                      400),
                    E.fonts)
                  ) {
                    var n,
                      s = E.fonts[t];
                    if (!s) {
                      var a,
                        o = new RegExp(
                          "(^|\\s)" +
                            t.replace(/[^\w\d\s+!~.:_-]/g, _) +
                            "(\\s|$)",
                          "i",
                        );
                      for (a in E.fonts)
                        if (E.fonts[P](a) && o.test(a)) {
                          s = E.fonts[a];
                          break;
                        }
                    }
                    if (s)
                      for (
                        var l = 0, h = s.length;
                        l < h &&
                        ((n = s[l]).face["font-weight"] != e ||
                          (n.face["font-style"] != r && n.face["font-style"]) ||
                          n.face["font-stretch"] != i);
                        l++
                      );
                    return n;
                  }
                }),
                (K.print = function (t, e, r, i, n, s, a, o) {
                  (s = s || "middle"),
                    (a = k(B(a || 0, 1), -1)),
                    (o = k(B(o || 1, 3), 1));
                  var l,
                    h = j(r)[z](_),
                    u = 0,
                    c = 0,
                    f = _;
                  if ((E.is(i, "string") && (i = this.getFont(i)), i)) {
                    l = (n || 16) / i.face["units-per-em"];
                    for (
                      var p,
                        d,
                        n = i.face.bbox[z](N),
                        g = +n[0],
                        x = n[3] - n[1],
                        y = 0,
                        v =
                          +n[1] +
                          ("baseline" == s ? x + +i.face.descent : x / 2),
                        m = 0,
                        b = h.length;
                      m < b;
                      m++
                    )
                      "\n" == h[m]
                        ? ((c = d = u = 0), (y += x * o))
                        : ((p = (c && i.glyphs[h[m - 1]]) || {}),
                          (d = i.glyphs[h[m]]),
                          (u += c
                            ? (p.w || i.w) + ((p.k && p.k[h[m]]) || 0) + i.w * a
                            : 0),
                          (c = 1)),
                        d &&
                          d.d &&
                          (f += E.transformPath(d.d, [
                            "t",
                            u * l,
                            y * l,
                            "s",
                            l,
                            l,
                            g,
                            v,
                            "t",
                            (t - g) / l,
                            (e - v) / l,
                          ]));
                  }
                  return this.path(f).attr({ fill: "#000", stroke: "none" });
                }),
                (K.add = function (t) {
                  if (E.is(t, "array"))
                    for (var e, r = this.set(), i = 0, n = t.length; i < n; i++)
                      (e = t[i] || {}),
                        s[P](e.type) && r.push(this[e.type]().attr(e));
                  return r;
                }),
                (E.format = function (t, e) {
                  var r = E.is(e, v) ? [0][L](e) : arguments;
                  return (
                    t &&
                      E.is(t, u) &&
                      r.length - 1 &&
                      (t = t.replace(n, function (t, e) {
                        return null == r[++e] ? _ : r[e];
                      })),
                    t || _
                  );
                }),
                (E.fullfill =
                  ((ae = /\{([^\}]+)\}/g),
                  (oe =
                    /(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g),
                  function (t, i) {
                    return String(t).replace(ae, function (t, e) {
                      return (
                        (r = t),
                        (s = t = i),
                        e.replace(oe, function (t, e, r, i, n) {
                          (e = e || i),
                            s &&
                              (e in s && (s = s[e]),
                              "function" == typeof s && n && (s = s()));
                        }),
                        (s = (null == s || s == t ? r : s) + "")
                      );
                      var r, s;
                    });
                  })),
                (E.ninja = function () {
                  if (t.was) d.win.Raphael = t.is;
                  else {
                    window.Raphael = void 0;
                    try {
                      delete window.Raphael;
                    } catch (t) {}
                  }
                  return E;
                }),
                (E.st = fe),
                M.on("raphael.DOMload", function () {
                  i = !0;
                }),
                (le = document),
                (he = "DOMContentLoaded"),
                null == le.readyState &&
                  le.addEventListener &&
                  (le.addEventListener(
                    he,
                    (ue = function () {
                      le.removeEventListener(he, ue, !1),
                        (le.readyState = "complete");
                    }),
                    !1,
                  ),
                  (le.readyState = "loading")),
                (function t() {
                  /in/.test(le.readyState)
                    ? setTimeout(t, 9)
                    : E.eve("raphael.DOMload");
                })(),
                E
              );
            }.apply(e, r);
          void 0 === r || (t.exports = r);
        },
        "./dev/raphael.svg.js": function (t, e, r) {
          var r = [r("./dev/raphael.core.js")],
            r = function (k) {
              if (!k || k.svg) {
                var B = "hasOwnProperty",
                  C = String,
                  g = parseFloat,
                  v = parseInt,
                  x = Math,
                  m = x.max,
                  b = x.abs,
                  y = x.pow,
                  _ = /[, ]+/,
                  f = k.eve,
                  w = "http://www.w3.org/1999/xlink",
                  S = {
                    block: "M5,0 0,2.5 5,5z",
                    classic: "M5,0 0,2.5 5,5 3.5,3 3.5,2z",
                    diamond: "M2.5,0 5,2.5 2.5,5 0,2.5z",
                    open: "M6,1 1,3.5 6,6",
                    oval: "M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z",
                  },
                  T = {};
                k.toString = function () {
                  return (
                    "Your browser supports SVG.\nYou are running Raphaël " +
                    this.version
                  );
                };
                function A(t, e) {
                  var i = "linear",
                    r = t.id + e,
                    n = 0.5,
                    s = 0.5,
                    a = t.node,
                    o = t.paper,
                    l = a.style,
                    h = k._g.doc.getElementById(r);
                  if (!h) {
                    if (
                      ((e = (e = C(e).replace(
                        k._radial_gradient,
                        function (t, e, r) {
                          return (
                            (i = "radial"),
                            e &&
                              r &&
                              ((n = g(e)),
                              (r = 2 * (0.5 < (s = g(r))) - 1),
                              0.25 < y(n - 0.5, 2) + y(s - 0.5, 2) &&
                                (s = x.sqrt(0.25 - y(n - 0.5, 2)) * r + 0.5) &&
                                0.5 != s &&
                                (s = s.toFixed(5) - 1e-5 * r)),
                            ""
                          );
                        },
                      )).split(/\s*\-\s*/)),
                      "linear" == i)
                    ) {
                      var u = e.shift(),
                        u = -g(u);
                      if (isNaN(u)) return null;
                      var c = [0, 0, x.cos(k.rad(u)), x.sin(k.rad(u))],
                        u = 1 / (m(b(c[2]), b(c[3])) || 1);
                      (c[2] *= u),
                        (c[3] *= u),
                        c[2] < 0 && ((c[0] = -c[2]), (c[2] = 0)),
                        c[3] < 0 && ((c[1] = -c[3]), (c[3] = 0));
                    }
                    var f = k._parseDots(e);
                    if (!f) return null;
                    if (
                      ((r = r.replace(/[\(\)\s,\xb0#]/g, "_")),
                      t.gradient &&
                        r != t.gradient.id &&
                        (o.defs.removeChild(t.gradient), delete t.gradient),
                      !t.gradient)
                    ) {
                      (h = P(i + "Gradient", { id: r })),
                        (t.gradient = h),
                        P(
                          h,
                          "radial" == i
                            ? { fx: n, fy: s }
                            : {
                                x1: c[0],
                                y1: c[1],
                                x2: c[2],
                                y2: c[3],
                                gradientTransform: t.matrix.invert(),
                              },
                        ),
                        o.defs.appendChild(h);
                      for (var p = 0, d = f.length; p < d; p++)
                        h.appendChild(
                          P("stop", {
                            offset: f[p].offset || (p ? "100%" : "0%"),
                            "stop-color": f[p].color || "#fff",
                            "stop-opacity": isFinite(f[p].opacity)
                              ? f[p].opacity
                              : 1,
                          }),
                        );
                    }
                  }
                  return (
                    P(a, { fill: L(r), opacity: 1, "fill-opacity": 1 }),
                    (l.fill = ""),
                    (l.opacity = 1),
                    (l.fillOpacity = 1)
                  );
                }
                function M(t) {
                  var e = t.getBBox(1);
                  P(t.pattern, {
                    patternTransform:
                      t.matrix.invert() + " translate(" + e.x + "," + e.y + ")",
                  });
                }
                function E(t, e, r) {
                  if ("path" == t.type) {
                    for (
                      var i,
                        n,
                        s,
                        a,
                        o,
                        l,
                        h,
                        u,
                        c,
                        f = C(e).toLowerCase().split("-"),
                        p = t.paper,
                        d = r ? "end" : "start",
                        g = t.node,
                        x = t.attrs,
                        y = x["stroke-width"],
                        v = f.length,
                        m = "classic",
                        b = 3,
                        _ = 3,
                        w = 5;
                      v--;

                    )
                      switch (f[v]) {
                        case "block":
                        case "classic":
                        case "oval":
                        case "diamond":
                        case "open":
                        case "none":
                          m = f[v];
                          break;
                        case "wide":
                          _ = 5;
                          break;
                        case "narrow":
                          _ = 2;
                          break;
                        case "long":
                          b = 5;
                          break;
                        case "short":
                          b = 2;
                      }
                    for (u in ((u =
                      "open" == m
                        ? ((b += 2),
                          (_ += 2),
                          (w += 2),
                          (l = 1),
                          (n = r ? 4 : 1),
                          { fill: "none", stroke: x.stroke })
                        : ((n = l = b / 2),
                          { fill: x.stroke, stroke: "none" })),
                    t._.arrows
                      ? r
                        ? (t._.arrows.endPath && T[t._.arrows.endPath]--,
                          t._.arrows.endMarker && T[t._.arrows.endMarker]--)
                        : (t._.arrows.startPath && T[t._.arrows.startPath]--,
                          t._.arrows.startMarker && T[t._.arrows.startMarker]--)
                      : (t._.arrows = {}),
                    "none" != m
                      ? ((s = "raphael-marker-" + m),
                        (a = "raphael-marker-" + d + m + b + _ + "-obj" + t.id),
                        k._g.doc.getElementById(s)
                          ? T[s]++
                          : (p.defs.appendChild(
                              P(P("path"), {
                                "stroke-linecap": "round",
                                d: S[m],
                                id: s,
                              }),
                            ),
                            (T[s] = 1)),
                        (o = k._g.doc.getElementById(a))
                          ? (T[a]++, (h = o.getElementsByTagName("use")[0]))
                          : ((o = P(P("marker"), {
                              id: a,
                              markerHeight: _,
                              markerWidth: b,
                              orient: "auto",
                              refX: n,
                              refY: _ / 2,
                            })),
                            (h = P(P("use"), {
                              "xlink:href": "#" + s,
                              transform:
                                (r
                                  ? "rotate(180 " + b / 2 + " " + _ / 2 + ") "
                                  : "") +
                                "scale(" +
                                b / w +
                                "," +
                                _ / w +
                                ")",
                              "stroke-width": (
                                1 /
                                ((b / w + _ / w) / 2)
                              ).toFixed(4),
                            })),
                            o.appendChild(h),
                            p.defs.appendChild(o),
                            (T[a] = 1)),
                        P(h, u),
                        (l = l * ("diamond" != m && "oval" != m)),
                        (h = r
                          ? ((i = t._.arrows.startdx * y || 0),
                            k.getTotalLength(x.path) - l * y)
                          : ((i = l * y),
                            k.getTotalLength(x.path) -
                              (t._.arrows.enddx * y || 0))),
                        ((u = {})["marker-" + d] = "url(#" + a + ")"),
                        (h || i) && (u.d = k.getSubpath(x.path, i, h)),
                        P(g, u),
                        (t._.arrows[d + "Path"] = s),
                        (t._.arrows[d + "Marker"] = a),
                        (t._.arrows[d + "dx"] = l),
                        (t._.arrows[d + "Type"] = m),
                        (t._.arrows[d + "String"] = e))
                      : ((h = r
                          ? ((i = t._.arrows.startdx * y || 0),
                            k.getTotalLength(x.path) - i)
                          : ((i = 0),
                            k.getTotalLength(x.path) -
                              (t._.arrows.enddx * y || 0))),
                        t._.arrows[d + "Path"] &&
                          P(g, { d: k.getSubpath(x.path, i, h) }),
                        delete t._.arrows[d + "Path"],
                        delete t._.arrows[d + "Marker"],
                        delete t._.arrows[d + "dx"],
                        delete t._.arrows[d + "Type"],
                        delete t._.arrows[d + "String"]),
                    T))
                      !T[B](u) ||
                        T[u] ||
                        ((c = k._g.doc.getElementById(u)) &&
                          c.parentNode.removeChild(c));
                  }
                }
                function N(t, e, r) {
                  if ((e = l[C(e).toLowerCase()])) {
                    for (
                      var i = t.attrs["stroke-width"] || "1",
                        n =
                          { round: i, square: i, butt: 0 }[
                            t.attrs["stroke-linecap"] || r["stroke-linecap"]
                          ] || 0,
                        s = [],
                        a = e.length;
                      a--;

                    )
                      s[a] = e[a] * i + (a % 2 ? 1 : -1) * n;
                    P(t.node, { "stroke-dasharray": s.join(",") });
                  } else P(t.node, { "stroke-dasharray": "none" });
                }
                function p(t, e) {
                  var r,
                    i = t.node,
                    n = t.attrs,
                    s = i.style.visibility;
                  for (r in ((i.style.visibility = "hidden"), e))
                    if (e[B](r) && k._availableAttrs[B](r)) {
                      var a = e[r];
                      switch (((n[r] = a), r)) {
                        case "blur":
                          t.blur(a);
                          break;
                        case "title":
                          var o,
                            l = i.getElementsByTagName("title");
                          l.length && (l = l[0])
                            ? (l.firstChild.nodeValue = a)
                            : ((l = P("title")),
                              (o = k._g.doc.createTextNode(a)),
                              l.appendChild(o),
                              i.appendChild(l));
                          break;
                        case "href":
                        case "target":
                          var h = i.parentNode;
                          "a" != h.tagName.toLowerCase() &&
                            ((l = P("a")),
                            h.insertBefore(l, i),
                            l.appendChild(i),
                            (h = l)),
                            "target" == r
                              ? h.setAttributeNS(
                                  w,
                                  "show",
                                  "blank" == a ? "new" : a,
                                )
                              : h.setAttributeNS(w, r, a);
                          break;
                        case "cursor":
                          i.style.cursor = a;
                          break;
                        case "transform":
                          t.transform(a);
                          break;
                        case "arrow-start":
                          E(t, a);
                          break;
                        case "arrow-end":
                          E(t, a, 1);
                          break;
                        case "clip-rect":
                          var u,
                            c,
                            h = C(a).split(_);
                          4 == h.length &&
                            (t.clip &&
                              t.clip.parentNode.parentNode.removeChild(
                                t.clip.parentNode,
                              ),
                            (u = P("clipPath")),
                            (c = P("rect")),
                            (u.id = k.createUUID()),
                            P(c, {
                              x: h[0],
                              y: h[1],
                              width: h[2],
                              height: h[3],
                            }),
                            u.appendChild(c),
                            t.paper.defs.appendChild(u),
                            P(i, { "clip-path": "url(#" + u.id + ")" }),
                            (t.clip = c)),
                            a ||
                              ((c = i.getAttribute("clip-path")) &&
                                ((y = k._g.doc.getElementById(
                                  c.replace(/(^url\(#|\)$)/g, ""),
                                )) && y.parentNode.removeChild(y),
                                P(i, { "clip-path": "" }),
                                delete t.clip));
                          break;
                        case "path":
                          "path" == t.type &&
                            (P(i, {
                              d: a ? (n.path = k._pathToAbsolute(a)) : "M0,0",
                            }),
                            (t._.dirty = 1),
                            t._.arrows &&
                              ("startString" in t._.arrows &&
                                E(t, t._.arrows.startString),
                              "endString" in t._.arrows &&
                                E(t, t._.arrows.endString, 1)));
                          break;
                        case "width":
                          if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fx))
                            break;
                          (r = "x"), (a = n.x);
                        case "x":
                          n.fx && (a = -n.x - (n.width || 0));
                        case "rx":
                          if ("rx" == r && "rect" == t.type) break;
                        case "cx":
                          i.setAttribute(r, a),
                            t.pattern && M(t),
                            (t._.dirty = 1);
                          break;
                        case "height":
                          if ((i.setAttribute(r, a), (t._.dirty = 1), !n.fy))
                            break;
                          (r = "y"), (a = n.y);
                        case "y":
                          n.fy && (a = -n.y - (n.height || 0));
                        case "ry":
                          if ("ry" == r && "rect" == t.type) break;
                        case "cy":
                          i.setAttribute(r, a),
                            t.pattern && M(t),
                            (t._.dirty = 1);
                          break;
                        case "r":
                          "rect" == t.type
                            ? P(i, { rx: a, ry: a })
                            : i.setAttribute(r, a),
                            (t._.dirty = 1);
                          break;
                        case "src":
                          "image" == t.type && i.setAttributeNS(w, "href", a);
                          break;
                        case "stroke-width":
                          (1 == t._.sx && 1 == t._.sy) ||
                            (a /= m(b(t._.sx), b(t._.sy)) || 1),
                            i.setAttribute(r, a),
                            n["stroke-dasharray"] &&
                              N(t, n["stroke-dasharray"], e),
                            t._.arrows &&
                              ("startString" in t._.arrows &&
                                E(t, t._.arrows.startString),
                              "endString" in t._.arrows &&
                                E(t, t._.arrows.endString, 1));
                          break;
                        case "stroke-dasharray":
                          N(t, a, e);
                          break;
                        case "fill":
                          var f = C(a).match(k._ISURL);
                          if (f) {
                            u = P("pattern");
                            var p = P("image");
                            (u.id = k.createUUID()),
                              P(u, {
                                x: 0,
                                y: 0,
                                patternUnits: "userSpaceOnUse",
                                height: 1,
                                width: 1,
                              }),
                              P(p, { x: 0, y: 0, "xlink:href": f[1] }),
                              u.appendChild(p),
                              (function (r) {
                                k._preload(f[1], function () {
                                  var t = this.offsetWidth,
                                    e = this.offsetHeight;
                                  P(r, { width: t, height: e }),
                                    P(p, { width: t, height: e });
                                });
                              })(u),
                              t.paper.defs.appendChild(u),
                              P(i, { fill: "url(#" + u.id + ")" }),
                              (t.pattern = u),
                              t.pattern && M(t);
                            break;
                          }
                          var d,
                            g,
                            x = k.getRGB(a);
                          if (x.error) {
                            if (
                              ("circle" == t.type ||
                                "ellipse" == t.type ||
                                "r" != C(a).charAt()) &&
                              A(t, a)
                            ) {
                              !("opacity" in n || "fill-opacity" in n) ||
                                ((d = k._g.doc.getElementById(
                                  i
                                    .getAttribute("fill")
                                    .replace(/^url\(#|\)$/g, ""),
                                )) &&
                                  ((g = d.getElementsByTagName("stop")),
                                  P(g[g.length - 1], {
                                    "stop-opacity":
                                      ("opacity" in n ? n.opacity : 1) *
                                      ("fill-opacity" in n
                                        ? n["fill-opacity"]
                                        : 1),
                                  }))),
                                (n.gradient = a),
                                (n.fill = "none");
                              break;
                            }
                          } else
                            delete e.gradient,
                              delete n.gradient,
                              !k.is(n.opacity, "undefined") &&
                                k.is(e.opacity, "undefined") &&
                                P(i, { opacity: n.opacity }),
                              !k.is(n["fill-opacity"], "undefined") &&
                                k.is(e["fill-opacity"], "undefined") &&
                                P(i, { "fill-opacity": n["fill-opacity"] });
                          x[B]("opacity") &&
                            P(i, {
                              "fill-opacity":
                                1 < x.opacity ? x.opacity / 100 : x.opacity,
                            });
                        case "stroke":
                          (x = k.getRGB(a)),
                            i.setAttribute(r, x.hex),
                            "stroke" == r &&
                              x[B]("opacity") &&
                              P(i, {
                                "stroke-opacity":
                                  1 < x.opacity ? x.opacity / 100 : x.opacity,
                              }),
                            "stroke" == r &&
                              t._.arrows &&
                              ("startString" in t._.arrows &&
                                E(t, t._.arrows.startString),
                              "endString" in t._.arrows &&
                                E(t, t._.arrows.endString, 1));
                          break;
                        case "gradient":
                          ("circle" != t.type &&
                            "ellipse" != t.type &&
                            "r" == C(a).charAt()) ||
                            A(t, a);
                          break;
                        case "opacity":
                          n.gradient &&
                            !n[B]("stroke-opacity") &&
                            P(i, { "stroke-opacity": 1 < a ? a / 100 : a });
                        case "fill-opacity":
                          if (n.gradient) {
                            (d = k._g.doc.getElementById(
                              i
                                .getAttribute("fill")
                                .replace(/^url\(#|\)$/g, ""),
                            )) &&
                              ((g = d.getElementsByTagName("stop")),
                              P(g[g.length - 1], { "stop-opacity": a }));
                            break;
                          }
                        default:
                          "font-size" == r && (a = v(a, 10) + "px");
                          var y = r.replace(/(\-.)/g, function (t) {
                            return t.substring(1).toUpperCase();
                          });
                          (i.style[y] = a),
                            (t._.dirty = 1),
                            i.setAttribute(r, a);
                      }
                    }
                  j(t, e), (i.style.visibility = s);
                }
                function i(t) {
                  return t.parentNode &&
                    "a" === t.parentNode.tagName.toLowerCase()
                    ? t.parentNode
                    : t;
                }
                function o(t, e) {
                  ((this[0] = this.node = t).raphael = !0),
                    (this.id = (
                      "0000" +
                      ((Math.random() * Math.pow(36, 5)) << 0).toString(36)
                    ).slice(-5)),
                    (t.raphaelid = this.id),
                    (this.matrix = k.matrix()),
                    (this.realPath = null),
                    (this.paper = e),
                    (this.attrs = this.attrs || {}),
                    (this._ = {
                      transform: [],
                      sx: 1,
                      sy: 1,
                      deg: 0,
                      dx: 0,
                      dy: 0,
                      dirty: 1,
                    }),
                    e.bottom || (e.bottom = this),
                    (this.prev = e.top),
                    e.top && (e.top.next = this),
                    ((e.top = this).next = null);
                }
                var P = function (t, e) {
                    if (e)
                      for (var r in ("string" == typeof t && (t = P(t)), e))
                        e[B](r) &&
                          ("xlink:" == r.substring(0, 6)
                            ? t.setAttributeNS(w, r.substring(6), C(e[r]))
                            : t.setAttribute(r, C(e[r])));
                    else
                      (t = k._g.doc.createElementNS(
                        "http://www.w3.org/2000/svg",
                        t,
                      )).style &&
                        (t.style.webkitTapHighlightColor = "rgba(0,0,0,0)");
                    return t;
                  },
                  L = function (t) {
                    if ((e = document.documentMode) && (9 === e || 10 === e))
                      return "url('#" + t + "')";
                    var e = document.location;
                    return (
                      "url('" +
                      (e.protocol + "//" + e.host + e.pathname + e.search) +
                      "#" +
                      t +
                      "')"
                    );
                  },
                  l = {
                    "-": [3, 1],
                    ".": [1, 1],
                    "-.": [3, 1, 1, 1],
                    "-..": [3, 1, 1, 1, 1, 1],
                    ". ": [1, 3],
                    "- ": [4, 3],
                    "--": [8, 3],
                    "- .": [4, 3, 1, 3],
                    "--.": [8, 3, 1, 3],
                    "--..": [8, 3, 1, 3, 1, 3],
                  },
                  j = function (t, e) {
                    if (
                      "text" == t.type &&
                      (e[B]("text") ||
                        e[B]("font") ||
                        e[B]("font-size") ||
                        e[B]("x") ||
                        e[B]("y"))
                    ) {
                      var r = t.attrs,
                        i = t.node,
                        n = i.firstChild
                          ? v(
                              k._g.doc.defaultView
                                .getComputedStyle(i.firstChild, "")
                                .getPropertyValue("font-size"),
                              10,
                            )
                          : 10;
                      if (e[B]("text")) {
                        for (r.text = e.text; i.firstChild; )
                          i.removeChild(i.firstChild);
                        for (
                          var s,
                            a = C(e.text).split("\n"),
                            o = [],
                            l = 0,
                            h = a.length;
                          l < h;
                          l++
                        )
                          (s = P("tspan")),
                            l && P(s, { dy: 1.2 * n, x: r.x }),
                            s.appendChild(k._g.doc.createTextNode(a[l])),
                            i.appendChild(s),
                            (o[l] = s);
                      } else
                        for (
                          l = 0,
                            h = (o = i.getElementsByTagName("tspan")).length;
                          l < h;
                          l++
                        )
                          l
                            ? P(o[l], { dy: 1.2 * n, x: r.x })
                            : P(o[0], { dy: 0 });
                      P(i, { x: r.x, y: r.y }), (t._.dirty = 1);
                      (t = t._getBBox()), (t = r.y - (t.y + t.height / 2));
                      t && k.is(t, "finite") && P(o[0], { dy: t });
                    }
                  },
                  t = k.el;
                ((o.prototype = t).constructor = o),
                  (k._engine.path = function (t, e) {
                    var r = P("path");
                    e.canvas && e.canvas.appendChild(r);
                    e = new o(r, e);
                    return (
                      (e.type = "path"),
                      p(e, { fill: "none", stroke: "#000", path: t }),
                      e
                    );
                  }),
                  (t.rotate = function (t, e, r) {
                    return (
                      this.removed ||
                        ((t = C(t).split(_)).length - 1 &&
                          ((e = g(t[1])), (r = g(t[2]))),
                        (t = g(t[0])),
                        null == r && (e = r),
                        (null != e && null != r) ||
                          ((e = (i = this.getBBox(1)).x + i.width / 2),
                          (r = i.y + i.height / 2)),
                        this.transform(
                          this._.transform.concat([["r", t, e, r]]),
                        )),
                      this
                    );
                    var i;
                  }),
                  (t.scale = function (t, e, r, i) {
                    return (
                      this.removed ||
                        ((t = C(t).split(_)).length - 1 &&
                          ((e = g(t[1])), (r = g(t[2])), (i = g(t[3]))),
                        (t = g(t[0])),
                        null == e && (e = t),
                        null == i && (r = i),
                        (null != r && null != i) || (n = this.getBBox(1)),
                        (r = null == r ? n.x + n.width / 2 : r),
                        (i = null == i ? n.y + n.height / 2 : i),
                        this.transform(
                          this._.transform.concat([["s", t, e, r, i]]),
                        )),
                      this
                    );
                    var n;
                  }),
                  (t.translate = function (t, e) {
                    return (
                      this.removed ||
                        ((t = C(t).split(_)).length - 1 && (e = g(t[1])),
                        (t = g(t[0]) || 0),
                        (e = +e || 0),
                        this.transform(this._.transform.concat([["t", t, e]]))),
                      this
                    );
                  }),
                  (t.transform = function (t) {
                    var e = this._;
                    return null == t
                      ? e.transform
                      : (k._extractTransform(this, t),
                        this.clip &&
                          P(this.clip, { transform: this.matrix.invert() }),
                        this.pattern && M(this),
                        this.node && P(this.node, { transform: this.matrix }),
                        (1 == e.sx && 1 == e.sy) ||
                          ((e = this.attrs[B]("stroke-width")
                            ? this.attrs["stroke-width"]
                            : 1),
                          this.attr({ "stroke-width": e })),
                        this);
                  }),
                  (t.hide = function () {
                    return (
                      this.removed || (this.node.style.display = "none"), this
                    );
                  }),
                  (t.show = function () {
                    return this.removed || (this.node.style.display = ""), this;
                  }),
                  (t.remove = function () {
                    var t = i(this.node);
                    if (!this.removed && t.parentNode) {
                      var e,
                        r = this.paper;
                      for (e in (r.__set__ && r.__set__.exclude(this),
                      f.unbind("raphael.*.*." + this.id),
                      this.gradient && r.defs.removeChild(this.gradient),
                      k._tear(this, r),
                      t.parentNode.removeChild(t),
                      this.removeData(),
                      this))
                        this[e] =
                          "function" == typeof this[e]
                            ? k._removedFactory(e)
                            : null;
                      this.removed = !0;
                    }
                  }),
                  (t._getBBox = function () {
                    var t;
                    "none" == this.node.style.display &&
                      (this.show(), (t = !0));
                    var e,
                      r = !1;
                    this.paper.canvas.parentElement
                      ? (e = this.paper.canvas.parentElement.style)
                      : this.paper.canvas.parentNode &&
                        (e = this.paper.canvas.parentNode.style),
                      e && "none" == e.display && ((r = !0), (e.display = ""));
                    var i = {};
                    try {
                      i = this.node.getBBox();
                    } catch (t) {
                      i = {
                        x: this.node.clientLeft,
                        y: this.node.clientTop,
                        width: this.node.clientWidth,
                        height: this.node.clientHeight,
                      };
                    } finally {
                      (i = i || {}), r && (e.display = "none");
                    }
                    return t && this.hide(), i;
                  }),
                  (t.attr = function (t, e) {
                    if (this.removed) return this;
                    if (null == t) {
                      var r,
                        i = {};
                      for (r in this.attrs)
                        this.attrs[B](r) && (i[r] = this.attrs[r]);
                      return (
                        i.gradient &&
                          "none" == i.fill &&
                          (i.fill = i.gradient) &&
                          delete i.gradient,
                        (i.transform = this._.transform),
                        i
                      );
                    }
                    if (null == e && k.is(t, "string")) {
                      if (
                        "fill" == t &&
                        "none" == this.attrs.fill &&
                        this.attrs.gradient
                      )
                        return this.attrs.gradient;
                      if ("transform" == t) return this._.transform;
                      for (
                        var n = t.split(_), s = {}, a = 0, o = n.length;
                        a < o;
                        a++
                      )
                        (t = n[a]) in this.attrs
                          ? (s[t] = this.attrs[t])
                          : k.is(this.paper.customAttributes[t], "function")
                            ? (s[t] = this.paper.customAttributes[t].def)
                            : (s[t] = k._availableAttrs[t]);
                      return o - 1 ? s : s[n[0]];
                    }
                    if (null == e && k.is(t, "array")) {
                      for (s = {}, a = 0, o = t.length; a < o; a++)
                        s[t[a]] = this.attr(t[a]);
                      return s;
                    }
                    var l, h;
                    for (h in (null != e
                      ? ((l = {})[t] = e)
                      : null != t && k.is(t, "object") && (l = t),
                    l))
                      f("raphael.attr." + h + "." + this.id, this, l[h]);
                    for (h in this.paper.customAttributes)
                      if (
                        this.paper.customAttributes[B](h) &&
                        l[B](h) &&
                        k.is(this.paper.customAttributes[h], "function")
                      ) {
                        var u,
                          c = this.paper.customAttributes[h].apply(
                            this,
                            [].concat(l[h]),
                          );
                        for (u in ((this.attrs[h] = l[h]), c))
                          c[B](u) && (l[u] = c[u]);
                      }
                    return p(this, l), this;
                  }),
                  (t.toFront = function () {
                    if (this.removed) return this;
                    var t = i(this.node);
                    t.parentNode.appendChild(t);
                    t = this.paper;
                    return t.top != this && k._tofront(this, t), this;
                  }),
                  (t.toBack = function () {
                    if (this.removed) return this;
                    var t = i(this.node),
                      e = t.parentNode;
                    e.insertBefore(t, e.firstChild),
                      k._toback(this, this.paper);
                    this.paper;
                    return this;
                  }),
                  (t.insertAfter = function (t) {
                    if (this.removed || !t) return this;
                    var e = i(this.node),
                      r = i(t.node || t[t.length - 1].node);
                    return (
                      r.nextSibling
                        ? r.parentNode.insertBefore(e, r.nextSibling)
                        : r.parentNode.appendChild(e),
                      k._insertafter(this, t, this.paper),
                      this
                    );
                  }),
                  (t.insertBefore = function (t) {
                    if (this.removed || !t) return this;
                    var e = i(this.node),
                      r = i(t.node || t[0].node);
                    return (
                      r.parentNode.insertBefore(e, r),
                      k._insertbefore(this, t, this.paper),
                      this
                    );
                  }),
                  (t.blur = function (t) {
                    var e,
                      r,
                      i = this;
                    return (
                      0 != +t
                        ? ((e = P("filter")),
                          (r = P("feGaussianBlur")),
                          (i.attrs.blur = t),
                          (e.id = k.createUUID()),
                          P(r, { stdDeviation: +t || 1.5 }),
                          e.appendChild(r),
                          i.paper.defs.appendChild(e),
                          (i._blur = e),
                          P(i.node, { filter: "url(#" + e.id + ")" }))
                        : (i._blur &&
                            (i._blur.parentNode.removeChild(i._blur),
                            delete i._blur,
                            delete i.attrs.blur),
                          i.node.removeAttribute("filter")),
                      i
                    );
                  }),
                  (k._engine.circle = function (t, e, r, i) {
                    var n = P("circle");
                    t.canvas && t.canvas.appendChild(n);
                    t = new o(n, t);
                    return (
                      (t.attrs = {
                        cx: e,
                        cy: r,
                        r: i,
                        fill: "none",
                        stroke: "#000",
                      }),
                      (t.type = "circle"),
                      P(n, t.attrs),
                      t
                    );
                  }),
                  (k._engine.rect = function (t, e, r, i, n, s) {
                    var a = P("rect");
                    t.canvas && t.canvas.appendChild(a);
                    t = new o(a, t);
                    return (
                      (t.attrs = {
                        x: e,
                        y: r,
                        width: i,
                        height: n,
                        rx: s || 0,
                        ry: s || 0,
                        fill: "none",
                        stroke: "#000",
                      }),
                      (t.type = "rect"),
                      P(a, t.attrs),
                      t
                    );
                  }),
                  (k._engine.ellipse = function (t, e, r, i, n) {
                    var s = P("ellipse");
                    t.canvas && t.canvas.appendChild(s);
                    t = new o(s, t);
                    return (
                      (t.attrs = {
                        cx: e,
                        cy: r,
                        rx: i,
                        ry: n,
                        fill: "none",
                        stroke: "#000",
                      }),
                      (t.type = "ellipse"),
                      P(s, t.attrs),
                      t
                    );
                  }),
                  (k._engine.image = function (t, e, r, i, n, s) {
                    var a = P("image");
                    P(a, {
                      x: r,
                      y: i,
                      width: n,
                      height: s,
                      preserveAspectRatio: "none",
                    }),
                      a.setAttributeNS(w, "href", e),
                      t.canvas && t.canvas.appendChild(a);
                    t = new o(a, t);
                    return (
                      (t.attrs = { x: r, y: i, width: n, height: s, src: e }),
                      (t.type = "image"),
                      t
                    );
                  }),
                  (k._engine.text = function (t, e, r, i) {
                    var n = P("text");
                    t.canvas && t.canvas.appendChild(n);
                    t = new o(n, t);
                    return (
                      (t.attrs = {
                        x: e,
                        y: r,
                        "text-anchor": "middle",
                        text: i,
                        "font-family": k._availableAttrs["font-family"],
                        "font-size": k._availableAttrs["font-size"],
                        stroke: "none",
                        fill: "#000",
                      }),
                      (t.type = "text"),
                      p(t, t.attrs),
                      t
                    );
                  }),
                  (k._engine.setSize = function (t, e) {
                    return (
                      (this.width = t || this.width),
                      (this.height = e || this.height),
                      this.canvas.setAttribute("width", this.width),
                      this.canvas.setAttribute("height", this.height),
                      this._viewBox &&
                        this.setViewBox.apply(this, this._viewBox),
                      this
                    );
                  }),
                  (k._engine.create = function () {
                    var t = k._getContainer.apply(0, arguments),
                      e = t && t.container;
                    if (!e) throw new Error("SVG container not found.");
                    var r,
                      i = t.x,
                      n = t.y,
                      s = t.width,
                      a = t.height,
                      o = P("svg"),
                      t = "overflow:hidden;",
                      i = i || 0,
                      n = n || 0;
                    return (
                      P(o, {
                        height: (a = a || 342),
                        version: 1.1,
                        width: (s = s || 512),
                        xmlns: "http://www.w3.org/2000/svg",
                        "xmlns:xlink": "http://www.w3.org/1999/xlink",
                      }),
                      1 == e
                        ? ((o.style.cssText =
                            t +
                            "position:absolute;left:" +
                            i +
                            "px;top:" +
                            n +
                            "px"),
                          k._g.doc.body.appendChild(o),
                          (r = 1))
                        : ((o.style.cssText = t + "position:relative"),
                          e.firstChild
                            ? e.insertBefore(o, e.firstChild)
                            : e.appendChild(o)),
                      ((e = new k._Paper()).width = s),
                      (e.height = a),
                      (e.canvas = o),
                      e.clear(),
                      (e._left = e._top = 0),
                      r && (e.renderfix = function () {}),
                      e.renderfix(),
                      e
                    );
                  }),
                  (k._engine.setViewBox = function (t, e, r, i, n) {
                    f("raphael.setViewBox", this, this._viewBox, [
                      t,
                      e,
                      r,
                      i,
                      n,
                    ]);
                    var s,
                      a = this.getSize(),
                      o = m(r / a.width, i / a.height),
                      l = this.top,
                      h = n ? "xMidYMid meet" : "xMinYMin",
                      a =
                        null == t
                          ? (this._vbSize && (o = 1),
                            delete this._vbSize,
                            "0 0 " + this.width + " " + this.height)
                          : ((this._vbSize = o),
                            t + " " + e + " " + r + " " + i);
                    for (
                      P(this.canvas, { viewBox: a, preserveAspectRatio: h });
                      o && l;

                    )
                      (s =
                        "stroke-width" in l.attrs
                          ? l.attrs["stroke-width"]
                          : 1),
                        l.attr({ "stroke-width": s }),
                        (l._.dirty = 1),
                        (l._.dirtyT = 1),
                        (l = l.prev);
                    return (this._viewBox = [t, e, r, i, !!n]), this;
                  }),
                  (k.prototype.renderfix = function () {
                    var e,
                      r = this.canvas,
                      t = r.style;
                    try {
                      e = r.getScreenCTM() || r.createSVGMatrix();
                    } catch (t) {
                      e = r.createSVGMatrix();
                    }
                    var i = -e.e % 1,
                      n = -e.f % 1;
                    (i || n) &&
                      (i &&
                        ((this._left = (this._left + i) % 1),
                        (t.left = this._left + "px")),
                      n &&
                        ((this._top = (this._top + n) % 1),
                        (t.top = this._top + "px")));
                  }),
                  (k.prototype.clear = function () {
                    k.eve("raphael.clear", this);
                    for (var t = this.canvas; t.firstChild; )
                      t.removeChild(t.firstChild);
                    (this.bottom = this.top = null),
                      (this.desc = P("desc")).appendChild(
                        k._g.doc.createTextNode(
                          "Created with Raphaël " + k.version,
                        ),
                      ),
                      t.appendChild(this.desc),
                      t.appendChild((this.defs = P("defs")));
                  }),
                  (k.prototype.remove = function () {
                    for (var t in (f("raphael.remove", this),
                    this.canvas.parentNode &&
                      this.canvas.parentNode.removeChild(this.canvas),
                    this))
                      this[t] =
                        "function" == typeof this[t]
                          ? k._removedFactory(t)
                          : null;
                  });
                var e,
                  r = k.st;
                for (e in t)
                  t[B](e) &&
                    !r[B](e) &&
                    (r[e] = (function (r) {
                      return function () {
                        var e = arguments;
                        return this.forEach(function (t) {
                          t[r].apply(t, e);
                        });
                      };
                    })(e));
              }
            }.apply(e, r);
          void 0 === r || (t.exports = r);
        },
        "./dev/raphael.vml.js": function (t, e, r) {
          var r = [r("./dev/raphael.core.js")],
            r = function (m) {
              if (!m || m.vml) {
                function g(t, e, r) {
                  var i = m.matrix();
                  return (
                    i.rotate(-t, 0.5, 0.5), { dx: i.x(e, r), dy: i.y(e, r) }
                  );
                }
                function b(t, e, r, i, n, s) {
                  var a,
                    o = t._,
                    l = t.matrix,
                    h = o.fillpos,
                    u = t.node,
                    c = u.style,
                    f = 1,
                    p = "",
                    d = L / e,
                    t = L / r;
                  (c.visibility = "hidden"),
                    e &&
                      r &&
                      ((u.coordsize = x(d) + M + x(t)),
                      (c.rotation = s * (e * r < 0 ? -1 : 1)),
                      s && ((i = (a = g(s, i, n)).dx), (n = a.dy)),
                      e < 0 && (p += "x"),
                      r < 0 && (p += " y") && (f = -1),
                      (c.flip = p),
                      (u.coordorigin = i * -d + M + n * -t),
                      (h || o.fillsize) &&
                        ((t = (t = u.getElementsByTagName(T)) && t[0]),
                        u.removeChild(t),
                        h &&
                          ((a = g(s, l.x(h[0], h[1]), l.y(h[0], h[1]))),
                          (t.position = a.dx * f + M + a.dy * f)),
                        o.fillsize &&
                          (t.size =
                            o.fillsize[0] * x(e) + M + o.fillsize[1] * x(r)),
                        u.appendChild(t)),
                      (c.visibility = "visible"));
                }
                var _ = "hasOwnProperty",
                  w = String,
                  k = parseFloat,
                  c = Math,
                  B = c.round,
                  C = c.max,
                  S = c.min,
                  x = c.abs,
                  T = "fill",
                  A = /[, ]+/,
                  f = m.eve,
                  M = " ",
                  E = {
                    M: "m",
                    L: "l",
                    C: "c",
                    Z: "x",
                    m: "t",
                    l: "r",
                    c: "v",
                    z: "x",
                  },
                  N = /([clmz]),?([^clmz]*)/gi,
                  i = / progid:\S+Blur\([^\)]+\)/g,
                  P = /-?[^,\s-]+/g,
                  h =
                    "position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)",
                  L = 21600,
                  j = { path: 1, rect: 1, image: 1 },
                  z = { circle: 1, ellipse: 1 };
                m.toString = function () {
                  return (
                    "Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël " +
                    this.version
                  );
                };
                function F(t, e, r) {
                  for (
                    var i = w(e).toLowerCase().split("-"),
                      r = r ? "end" : "start",
                      n = i.length,
                      s = "classic",
                      a = "medium",
                      o = "medium";
                    n--;

                  )
                    switch (i[n]) {
                      case "block":
                      case "classic":
                      case "oval":
                      case "diamond":
                      case "open":
                      case "none":
                        s = i[n];
                        break;
                      case "wide":
                      case "narrow":
                        o = i[n];
                        break;
                      case "long":
                      case "short":
                        a = i[n];
                    }
                  t = t.node.getElementsByTagName("stroke")[0];
                  (t[r + "arrow"] = s),
                    (t[r + "arrowlength"] = a),
                    (t[r + "arrowwidth"] = o);
                }
                function p(t, e) {
                  t.attrs = t.attrs || {};
                  var r,
                    i,
                    n,
                    s,
                    a,
                    o,
                    l,
                    h = t.node,
                    u = t.attrs,
                    c = h.style,
                    f =
                      j[t.type] &&
                      (e.x != u.x ||
                        e.y != u.y ||
                        e.width != u.width ||
                        e.height != u.height ||
                        e.cx != u.cx ||
                        e.cy != u.cy ||
                        e.rx != u.rx ||
                        e.ry != u.ry ||
                        e.r != u.r),
                    p =
                      z[t.type] &&
                      (u.cx != e.cx ||
                        u.cy != e.cy ||
                        u.r != e.r ||
                        u.rx != e.rx ||
                        u.ry != e.ry),
                    d = t;
                  for (r in e) e[_](r) && (u[r] = e[r]);
                  if (
                    (f && ((u.path = m._getPath[t.type](t)), (t._.dirty = 1)),
                    e.href && (h.href = e.href),
                    e.title && (h.title = e.title),
                    e.target && (h.target = e.target),
                    e.cursor && (c.cursor = e.cursor),
                    "blur" in e && t.blur(e.blur),
                    ((e.path && "path" == t.type) || f) &&
                      ((h.path = (function (t) {
                        var e = /[ahqstv]/gi,
                          r = m._pathToAbsolute;
                        if (
                          (w(t).match(e) && (r = m._path2curve),
                          (e = /[clmz]/g),
                          r == m._pathToAbsolute && !w(t).match(e))
                        ) {
                          var i = w(t).replace(N, function (t, e, r) {
                            var i = [],
                              n = "m" == e.toLowerCase(),
                              s = E[e];
                            return (
                              r.replace(P, function (t) {
                                n &&
                                  2 == i.length &&
                                  ((s += i + E["m" == e ? "l" : "L"]),
                                  (i = [])),
                                  i.push(B(t * L));
                              }),
                              s + i
                            );
                          });
                          return i;
                        }
                        for (
                          var n, s, a = r(t), i = [], o = 0, l = a.length;
                          o < l;
                          o++
                        ) {
                          (n = a[o]),
                            "z" == (s = a[o][0].toLowerCase()) && (s = "x");
                          for (var h = 1, u = n.length; h < u; h++)
                            s += B(n[h] * L) + (h != u - 1 ? "," : "");
                          i.push(s);
                        }
                        return i.join(M);
                      })(
                        ~w(u.path).toLowerCase().indexOf("r")
                          ? m._pathToAbsolute(u.path)
                          : u.path,
                      )),
                      (t._.dirty = 1),
                      "image" == t.type &&
                        ((t._.fillpos = [u.x, u.y]),
                        (t._.fillsize = [u.width, u.height]),
                        b(t, 1, 1, 0, 0, 0))),
                    "transform" in e && t.transform(e.transform),
                    p &&
                      ((s = +u.cx),
                      (i = +u.cy),
                      (p = +u.rx || +u.r || 0),
                      (n = +u.ry || +u.r || 0),
                      (h.path = m.format(
                        "ar{0},{1},{2},{3},{4},{1},{4},{1}x",
                        B((s - p) * L),
                        B((i - n) * L),
                        B((s + p) * L),
                        B((i + n) * L),
                        B(s * L),
                      )),
                      (t._.dirty = 1)),
                    "clip-rect" in e &&
                      (4 == (i = w(e["clip-rect"]).split(A)).length &&
                        ((i[2] = +i[2] + +i[0]),
                        (i[3] = +i[3] + +i[1]),
                        ((s = (n = h.clipRect || m._g.doc.createElement("div"))
                          .style).clip = m.format(
                          "rect({1}px {2}px {3}px {0}px)",
                          i,
                        )),
                        h.clipRect ||
                          ((s.position = "absolute"),
                          (s.top = 0),
                          (s.left = 0),
                          (s.width = t.paper.width + "px"),
                          (s.height = t.paper.height + "px"),
                          h.parentNode.insertBefore(n, h),
                          n.appendChild(h),
                          (h.clipRect = n))),
                      e["clip-rect"] ||
                        (h.clipRect && (h.clipRect.style.clip = "auto"))),
                    t.textpath &&
                      ((o = t.textpath.style),
                      e.font && (o.font = e.font),
                      e["font-family"] &&
                        (o.fontFamily =
                          '"' +
                          e["font-family"]
                            .split(",")[0]
                            .replace(/^['"]+|['"]+$/g, "") +
                          '"'),
                      e["font-size"] && (o.fontSize = e["font-size"]),
                      e["font-weight"] && (o.fontWeight = e["font-weight"]),
                      e["font-style"] && (o.fontStyle = e["font-style"])),
                    "arrow-start" in e && F(d, e["arrow-start"]),
                    "arrow-end" in e && F(d, e["arrow-end"], 1),
                    (null == e.opacity &&
                      null == e.fill &&
                      null == e.src &&
                      null == e.stroke &&
                      null == e["stroke-width"] &&
                      null == e["stroke-opacity"] &&
                      null == e["fill-opacity"] &&
                      null == e["stroke-dasharray"] &&
                      null == e["stroke-miterlimit"] &&
                      null == e["stroke-linejoin"] &&
                      null == e["stroke-linecap"]) ||
                      ((o = (o = h.getElementsByTagName(T)) && o[0]) ||
                        (o = R(T)),
                      "image" == t.type && e.src && (o.src = e.src),
                      e.fill && (o.on = !0),
                      (null != o.on && "none" != e.fill && null !== e.fill) ||
                        (o.on = !1),
                      o.on &&
                        e.fill &&
                        ((g = w(e.fill).match(m._ISURL))
                          ? (o.parentNode == h && h.removeChild(o),
                            (o.rotate = !0),
                            (o.src = g[1]),
                            (o.type = "tile"),
                            (a = t.getBBox(1)),
                            (o.position = a.x + M + a.y),
                            (t._.fillpos = [a.x, a.y]),
                            m._preload(g[1], function () {
                              t._.fillsize = [
                                this.offsetWidth,
                                this.offsetHeight,
                              ];
                            }))
                          : ((o.color = m.getRGB(e.fill).hex),
                            (o.src = ""),
                            (o.type = "solid"),
                            m.getRGB(e.fill).error &&
                              (d.type in { circle: 1, ellipse: 1 } ||
                                "r" != w(e.fill).charAt()) &&
                              I(d, e.fill, o) &&
                              ((u.fill = "none"),
                              (u.gradient = e.fill),
                              (o.rotate = !1)))),
                      ("fill-opacity" in e || "opacity" in e) &&
                        ((l =
                          ((+u["fill-opacity"] + 1 || 2) - 1) *
                          ((+u.opacity + 1 || 2) - 1) *
                          ((+m.getRGB(e.fill).o + 1 || 2) - 1)),
                        (l = S(C(l, 0), 1)),
                        (o.opacity = l),
                        o.src && (o.color = "none")),
                      h.appendChild(o),
                      (a = !1),
                      (g =
                        h.getElementsByTagName("stroke") &&
                        h.getElementsByTagName("stroke")[0]) ||
                        (a = g = R("stroke")),
                      ((e.stroke && "none" != e.stroke) ||
                        e["stroke-width"] ||
                        null != e["stroke-opacity"] ||
                        e["stroke-dasharray"] ||
                        e["stroke-miterlimit"] ||
                        e["stroke-linejoin"] ||
                        e["stroke-linecap"]) &&
                        (g.on = !0),
                      ("none" != e.stroke &&
                        null !== e.stroke &&
                        null != g.on &&
                        0 != e.stroke &&
                        0 != e["stroke-width"]) ||
                        (g.on = !1),
                      (o = m.getRGB(e.stroke)),
                      g.on && e.stroke && (g.color = o.hex),
                      (l =
                        ((+u["stroke-opacity"] + 1 || 2) - 1) *
                        ((+u.opacity + 1 || 2) - 1) *
                        ((+o.o + 1 || 2) - 1)),
                      (o = 0.75 * (k(e["stroke-width"]) || 1)),
                      (l = S(C(l, 0), 1)),
                      null == e["stroke-width"] && (o = u["stroke-width"]),
                      e["stroke-width"] && (g.weight = o),
                      o && o < 1 && (l *= o) && (g.weight = 1),
                      (g.opacity = l),
                      e["stroke-linejoin"] &&
                        (g.joinstyle = e["stroke-linejoin"] || "miter"),
                      (g.miterlimit = e["stroke-miterlimit"] || 8),
                      e["stroke-linecap"] &&
                        (g.endcap =
                          "butt" == e["stroke-linecap"]
                            ? "flat"
                            : "square" == e["stroke-linecap"]
                              ? "square"
                              : "round"),
                      "stroke-dasharray" in e &&
                        ((l = {
                          "-": "shortdash",
                          ".": "shortdot",
                          "-.": "shortdashdot",
                          "-..": "shortdashdotdot",
                          ". ": "dot",
                          "- ": "dash",
                          "--": "longdash",
                          "- .": "dashdot",
                          "--.": "longdashdot",
                          "--..": "longdashdotdot",
                        }),
                        (g.dashstyle = l[_](e["stroke-dasharray"])
                          ? l[e["stroke-dasharray"]]
                          : "")),
                      a && h.appendChild(g)),
                    "text" == d.type)
                  ) {
                    d.paper.canvas.style.display = "";
                    var h = d.paper.span,
                      g = u.font && u.font.match(/\d+(?:\.\d*)?(?=px)/),
                      c = h.style;
                    u.font && (c.font = u.font),
                      u["font-family"] && (c.fontFamily = u["font-family"]),
                      u["font-weight"] && (c.fontWeight = u["font-weight"]),
                      u["font-style"] && (c.fontStyle = u["font-style"]),
                      (g = k(u["font-size"] || (g && g[0])) || 10),
                      (c.fontSize = 100 * g + "px"),
                      d.textpath.string &&
                        (h.innerHTML = w(d.textpath.string)
                          .replace(/</g, "&#60;")
                          .replace(/&/g, "&#38;")
                          .replace(/\n/g, "<br>"));
                    h = h.getBoundingClientRect();
                    (d.W = u.w = (h.right - h.left) / 100),
                      (d.H = u.h = (h.bottom - h.top) / 100),
                      (d.X = u.x),
                      (d.Y = u.y + d.H / 2),
                      ("x" in e || "y" in e) &&
                        (d.path.v = m.format(
                          "m{0},{1}l{2},{1}",
                          B(u.x * L),
                          B(u.y * L),
                          B(u.x * L) + 1,
                        ));
                    for (
                      var x = [
                          "x",
                          "y",
                          "text",
                          "font",
                          "font-family",
                          "font-weight",
                          "font-style",
                          "font-size",
                        ],
                        y = 0,
                        v = x.length;
                      y < v;
                      y++
                    )
                      if (x[y] in e) {
                        d._.dirty = 1;
                        break;
                      }
                    switch (u["text-anchor"]) {
                      case "start":
                        (d.textpath.style["v-text-align"] = "left"),
                          (d.bbx = d.W / 2);
                        break;
                      case "end":
                        (d.textpath.style["v-text-align"] = "right"),
                          (d.bbx = -d.W / 2);
                        break;
                      default:
                        (d.textpath.style["v-text-align"] = "center"),
                          (d.bbx = 0);
                    }
                    d.textpath.style["v-text-kern"] = !0;
                  }
                }
                function u(t, e) {
                  ((this[0] = this.node = t).raphael = !0),
                    (this.id = m._oid++),
                    (t.raphaelid = this.id),
                    (this.X = 0),
                    (this.Y = 0),
                    (this.attrs = {}),
                    (this.paper = e),
                    (this.matrix = m.matrix()),
                    (this._ = {
                      transform: [],
                      sx: 1,
                      sy: 1,
                      dx: 0,
                      dy: 0,
                      deg: 0,
                      dirty: 1,
                      dirtyT: 1,
                    }),
                    e.bottom || (e.bottom = this),
                    (this.prev = e.top),
                    e.top && (e.top.next = this),
                    ((e.top = this).next = null);
                }
                var R,
                  I = function (t, e, r) {
                    t.attrs = t.attrs || {};
                    t.attrs;
                    var i = Math.pow,
                      n = "linear",
                      s = ".5 .5";
                    if (
                      ((t.attrs.gradient = e),
                      (e = (e = w(e).replace(
                        m._radial_gradient,
                        function (t, e, r) {
                          return (
                            (n = "radial"),
                            e &&
                              r &&
                              ((e = k(e)),
                              (r = k(r)),
                              0.25 < i(e - 0.5, 2) + i(r - 0.5, 2) &&
                                (r =
                                  c.sqrt(0.25 - i(e - 0.5, 2)) *
                                    (2 * (0.5 < r) - 1) +
                                  0.5),
                              (s = e + M + r)),
                            ""
                          );
                        },
                      )).split(/\s*\-\s*/)),
                      "linear" == n)
                    ) {
                      var a = e.shift(),
                        a = -k(a);
                      if (isNaN(a)) return null;
                    }
                    var o = m._parseDots(e);
                    if (!o) return null;
                    if (((t = t.shape || t.node), o.length)) {
                      t.removeChild(r),
                        (r.on = !0),
                        (r.method = "none"),
                        (r.color = o[0].color),
                        (r.color2 = o[o.length - 1].color);
                      for (var l = [], h = 0, u = o.length; h < u; h++)
                        o[h].offset && l.push(o[h].offset + M + o[h].color);
                      (r.colors = l.length ? l.join() : "0% " + r.color),
                        "radial" == n
                          ? ((r.type = "gradientTitle"),
                            (r.focus = "100%"),
                            (r.focussize = "0 0"),
                            (r.focusposition = s),
                            (r.angle = 0))
                          : ((r.type = "gradient"),
                            (r.angle = (270 - a) % 360)),
                        t.appendChild(r);
                    }
                    return 1;
                  },
                  t = m.el;
                ((u.prototype = t).constructor = u),
                  (t.transform = function (t) {
                    if (null == t) return this._.transform;
                    var e,
                      r = this.paper._viewBoxShift,
                      i = r
                        ? "s" + [r.scale, r.scale] + "-1-1t" + [r.dx, r.dy]
                        : "";
                    r &&
                      (e = t =
                        w(t).replace(/\.{3}|\u2026/g, this._.transform || "")),
                      m._extractTransform(this, i + t);
                    var n = this.matrix.clone(),
                      s = this.skew,
                      a = this.node,
                      o = ~w(this.attrs.fill).indexOf("-"),
                      r = !w(this.attrs.fill).indexOf("url(");
                    return (
                      n.translate(1, 1),
                      r || o || "image" == this.type
                        ? ((s.matrix = "1 0 0 1"),
                          (s.offset = "0 0"),
                          (i = n.split()),
                          (o && i.noRotation) || !i.isSimple
                            ? ((a.style.filter = n.toFilter()),
                              (t = this.getBBox()),
                              (r = this.getBBox(1)),
                              (o = t.x - r.x),
                              (r = t.y - r.y),
                              (a.coordorigin = o * -L + M + r * -L),
                              b(this, 1, 1, o, r, 0))
                            : ((a.style.filter = ""),
                              b(
                                this,
                                i.scalex,
                                i.scaley,
                                i.dx,
                                i.dy,
                                i.rotate,
                              )))
                        : ((a.style.filter = ""),
                          (s.matrix = w(n)),
                          (s.offset = n.offset())),
                      null !== e &&
                        ((this._.transform = e), m._extractTransform(this, e)),
                      this
                    );
                  }),
                  (t.rotate = function (t, e, r) {
                    return this.removed
                      ? this
                      : null != t
                        ? ((t = w(t).split(A)).length - 1 &&
                            ((e = k(t[1])), (r = k(t[2]))),
                          (t = k(t[0])),
                          null == r && (e = r),
                          (null != e && null != r) ||
                            ((e = (i = this.getBBox(1)).x + i.width / 2),
                            (r = i.y + i.height / 2)),
                          (this._.dirtyT = 1),
                          this.transform(
                            this._.transform.concat([["r", t, e, r]]),
                          ),
                          this)
                        : void 0;
                    var i;
                  }),
                  (t.translate = function (t, e) {
                    return (
                      this.removed ||
                        ((t = w(t).split(A)).length - 1 && (e = k(t[1])),
                        (t = k(t[0]) || 0),
                        (e = +e || 0),
                        this._.bbox &&
                          ((this._.bbox.x += t), (this._.bbox.y += e)),
                        this.transform(this._.transform.concat([["t", t, e]]))),
                      this
                    );
                  }),
                  (t.scale = function (t, e, r, i) {
                    return (
                      this.removed ||
                        ((t = w(t).split(A)).length - 1 &&
                          ((e = k(t[1])),
                          (r = k(t[2])),
                          (i = k(t[3])),
                          isNaN(r) && (r = null),
                          isNaN(i) && (i = null)),
                        (t = k(t[0])),
                        null == e && (e = t),
                        null == i && (r = i),
                        (null != r && null != i) || (n = this.getBBox(1)),
                        (r = null == r ? n.x + n.width / 2 : r),
                        (i = null == i ? n.y + n.height / 2 : i),
                        this.transform(
                          this._.transform.concat([["s", t, e, r, i]]),
                        ),
                        (this._.dirtyT = 1)),
                      this
                    );
                    var n;
                  }),
                  (t.hide = function () {
                    return (
                      this.removed || (this.node.style.display = "none"), this
                    );
                  }),
                  (t.show = function () {
                    return this.removed || (this.node.style.display = ""), this;
                  }),
                  (t.auxGetBBox = m.el.getBBox),
                  (t.getBBox = function () {
                    var t = this.auxGetBBox();
                    if (this.paper && this.paper._viewBoxShift) {
                      var e = {},
                        r = 1 / this.paper._viewBoxShift.scale;
                      return (
                        (e.x = t.x - this.paper._viewBoxShift.dx),
                        (e.x *= r),
                        (e.y = t.y - this.paper._viewBoxShift.dy),
                        (e.y *= r),
                        (e.width = t.width * r),
                        (e.height = t.height * r),
                        (e.x2 = e.x + e.width),
                        (e.y2 = e.y + e.height),
                        e
                      );
                    }
                    return t;
                  }),
                  (t._getBBox = function () {
                    return this.removed
                      ? {}
                      : {
                          x: this.X + (this.bbx || 0) - this.W / 2,
                          y: this.Y - this.H,
                          width: this.W,
                          height: this.H,
                        };
                  }),
                  (t.remove = function () {
                    if (!this.removed && this.node.parentNode) {
                      for (var t in (this.paper.__set__ &&
                        this.paper.__set__.exclude(this),
                      m.eve.unbind("raphael.*.*." + this.id),
                      m._tear(this, this.paper),
                      this.node.parentNode.removeChild(this.node),
                      this.shape &&
                        this.shape.parentNode.removeChild(this.shape),
                      this))
                        this[t] =
                          "function" == typeof this[t]
                            ? m._removedFactory(t)
                            : null;
                      this.removed = !0;
                    }
                  }),
                  (t.attr = function (t, e) {
                    if (this.removed) return this;
                    if (null == t) {
                      var r,
                        i = {};
                      for (r in this.attrs)
                        this.attrs[_](r) && (i[r] = this.attrs[r]);
                      return (
                        i.gradient &&
                          "none" == i.fill &&
                          (i.fill = i.gradient) &&
                          delete i.gradient,
                        (i.transform = this._.transform),
                        i
                      );
                    }
                    if (null == e && m.is(t, "string")) {
                      if (
                        t == T &&
                        "none" == this.attrs.fill &&
                        this.attrs.gradient
                      )
                        return this.attrs.gradient;
                      for (
                        var n = t.split(A), s = {}, a = 0, o = n.length;
                        a < o;
                        a++
                      )
                        (t = n[a]) in this.attrs
                          ? (s[t] = this.attrs[t])
                          : m.is(this.paper.customAttributes[t], "function")
                            ? (s[t] = this.paper.customAttributes[t].def)
                            : (s[t] = m._availableAttrs[t]);
                      return o - 1 ? s : s[n[0]];
                    }
                    if (this.attrs && null == e && m.is(t, "array")) {
                      for (s = {}, a = 0, o = t.length; a < o; a++)
                        s[t[a]] = this.attr(t[a]);
                      return s;
                    }
                    var l, h;
                    for (h in (null != e && ((l = {})[t] = e),
                    null == e && m.is(t, "object") && (l = t),
                    l))
                      f("raphael.attr." + h + "." + this.id, this, l[h]);
                    if (l) {
                      for (h in this.paper.customAttributes)
                        if (
                          this.paper.customAttributes[_](h) &&
                          l[_](h) &&
                          m.is(this.paper.customAttributes[h], "function")
                        ) {
                          var u,
                            c = this.paper.customAttributes[h].apply(
                              this,
                              [].concat(l[h]),
                            );
                          for (u in ((this.attrs[h] = l[h]), c))
                            c[_](u) && (l[u] = c[u]);
                        }
                      l.text &&
                        "text" == this.type &&
                        (this.textpath.string = l.text),
                        p(this, l);
                    }
                    return this;
                  }),
                  (t.toFront = function () {
                    return (
                      this.removed ||
                        this.node.parentNode.appendChild(this.node),
                      this.paper &&
                        this.paper.top != this &&
                        m._tofront(this, this.paper),
                      this
                    );
                  }),
                  (t.toBack = function () {
                    return (
                      this.removed ||
                        (this.node.parentNode.firstChild != this.node &&
                          (this.node.parentNode.insertBefore(
                            this.node,
                            this.node.parentNode.firstChild,
                          ),
                          m._toback(this, this.paper))),
                      this
                    );
                  }),
                  (t.insertAfter = function (t) {
                    return (
                      this.removed ||
                        (t.constructor == m.st.constructor &&
                          (t = t[t.length - 1]),
                        t.node.nextSibling
                          ? t.node.parentNode.insertBefore(
                              this.node,
                              t.node.nextSibling,
                            )
                          : t.node.parentNode.appendChild(this.node),
                        m._insertafter(this, t, this.paper)),
                      this
                    );
                  }),
                  (t.insertBefore = function (t) {
                    return (
                      this.removed ||
                        (t.constructor == m.st.constructor && (t = t[0]),
                        t.node.parentNode.insertBefore(this.node, t.node),
                        m._insertbefore(this, t, this.paper)),
                      this
                    );
                  }),
                  (t.blur = function (t) {
                    var e = this.node.runtimeStyle,
                      r = (r = e.filter).replace(i, "");
                    return (
                      0 != +t
                        ? ((this.attrs.blur = t),
                          (e.filter =
                            r +
                            M +
                            " progid:DXImageTransform.Microsoft.Blur(pixelradius=" +
                            (+t || 1.5) +
                            ")"),
                          (e.margin = m.format(
                            "-{0}px 0 0 -{0}px",
                            B(+t || 1.5),
                          )))
                        : ((e.filter = r),
                          (e.margin = 0),
                          delete this.attrs.blur),
                      this
                    );
                  }),
                  (m._engine.path = function (t, e) {
                    var r = R("shape");
                    (r.style.cssText = h),
                      (r.coordsize = L + M + L),
                      (r.coordorigin = e.coordorigin);
                    var i = new u(r, e),
                      n = { fill: "none", stroke: "#000" };
                    t && (n.path = t),
                      (i.type = "path"),
                      (i.path = []),
                      (i.Path = ""),
                      p(i, n),
                      e.canvas && e.canvas.appendChild(r);
                    e = R("skew");
                    return (
                      (e.on = !0),
                      r.appendChild(e),
                      (i.skew = e),
                      i.transform(""),
                      i
                    );
                  }),
                  (m._engine.rect = function (t, e, r, i, n, s) {
                    var a = m._rectPath(e, r, i, n, s),
                      o = t.path(a),
                      t = o.attrs;
                    return (
                      (o.X = t.x = e),
                      (o.Y = t.y = r),
                      (o.W = t.width = i),
                      (o.H = t.height = n),
                      (t.r = s),
                      (t.path = a),
                      (o.type = "rect"),
                      o
                    );
                  }),
                  (m._engine.ellipse = function (t, e, r, i, n) {
                    (t = t.path()), t.attrs;
                    return (
                      (t.X = e - i),
                      (t.Y = r - n),
                      (t.W = 2 * i),
                      (t.H = 2 * n),
                      (t.type = "ellipse"),
                      p(t, { cx: e, cy: r, rx: i, ry: n }),
                      t
                    );
                  }),
                  (m._engine.circle = function (t, e, r, i) {
                    (t = t.path()), t.attrs;
                    return (
                      (t.X = e - i),
                      (t.Y = r - i),
                      (t.W = t.H = 2 * i),
                      (t.type = "circle"),
                      p(t, { cx: e, cy: r, r: i }),
                      t
                    );
                  }),
                  (m._engine.image = function (t, e, r, i, n, s) {
                    var a = m._rectPath(r, i, n, s),
                      o = t.path(a).attr({ stroke: "none" }),
                      l = o.attrs,
                      h = o.node,
                      t = h.getElementsByTagName(T)[0];
                    return (
                      (l.src = e),
                      (o.X = l.x = r),
                      (o.Y = l.y = i),
                      (o.W = l.width = n),
                      (o.H = l.height = s),
                      (l.path = a),
                      (o.type = "image"),
                      t.parentNode == h && h.removeChild(t),
                      (t.rotate = !0),
                      (t.src = e),
                      (t.type = "tile"),
                      (o._.fillpos = [r, i]),
                      (o._.fillsize = [n, s]),
                      h.appendChild(t),
                      b(o, 1, 1, 0, 0, 0),
                      o
                    );
                  }),
                  (m._engine.text = function (t, e, r, i) {
                    var n = R("shape"),
                      s = R("path"),
                      a = R("textpath");
                    (e = e || 0),
                      (r = r || 0),
                      (i = i || ""),
                      (s.v = m.format(
                        "m{0},{1}l{2},{1}",
                        B(e * L),
                        B(r * L),
                        B(e * L) + 1,
                      )),
                      (s.textpathok = !0),
                      (a.string = w(i)),
                      (a.on = !0),
                      (n.style.cssText = h),
                      (n.coordsize = L + M + L),
                      (n.coordorigin = "0 0");
                    var o = new u(n, t),
                      l = {
                        fill: "#000",
                        stroke: "none",
                        font: m._availableAttrs.font,
                        text: i,
                      };
                    (o.shape = n),
                      (o.path = s),
                      (o.textpath = a),
                      (o.type = "text"),
                      (o.attrs.text = w(i)),
                      (o.attrs.x = e),
                      (o.attrs.y = r),
                      (o.attrs.w = 1),
                      (o.attrs.h = 1),
                      p(o, l),
                      n.appendChild(a),
                      n.appendChild(s),
                      t.canvas.appendChild(n);
                    t = R("skew");
                    return (
                      (t.on = !0),
                      n.appendChild(t),
                      (o.skew = t),
                      o.transform(""),
                      o
                    );
                  }),
                  (m._engine.setSize = function (t, e) {
                    var r = this.canvas.style;
                    return (
                      (this.width = t) == +t && (t += "px"),
                      (this.height = e) == +e && (e += "px"),
                      (r.width = t),
                      (r.height = e),
                      (r.clip = "rect(0 " + t + " " + e + " 0)"),
                      this._viewBox &&
                        m._engine.setViewBox.apply(this, this._viewBox),
                      this
                    );
                  }),
                  (m._engine.setViewBox = function (t, e, r, i, n) {
                    m.eve("raphael.setViewBox", this, this._viewBox, [
                      t,
                      e,
                      r,
                      i,
                      n,
                    ]);
                    var s,
                      a = this.getSize(),
                      o = a.width,
                      l = a.height;
                    return (
                      n &&
                        (r * (s = l / i) < o && (t -= (o - r * s) / 2 / s),
                        i * (o = o / r) < l && (e -= (l - i * o) / 2 / o)),
                      (this._viewBox = [t, e, r, i, !!n]),
                      (this._viewBoxShift = { dx: -t, dy: -e, scale: a }),
                      this.forEach(function (t) {
                        t.transform("...");
                      }),
                      this
                    );
                  }),
                  (m._engine.initWin = function (t) {
                    var e = t.document;
                    (e.styleSheets.length < 31
                      ? e.createStyleSheet()
                      : e.styleSheets[0]
                    ).addRule(".rvml", "behavior:url(#default#VML)");
                    try {
                      e.namespaces.rvml ||
                        e.namespaces.add(
                          "rvml",
                          "urn:schemas-microsoft-com:vml",
                        ),
                        (R = function (t) {
                          return e.createElement(
                            "<rvml:" + t + ' class="rvml">',
                          );
                        });
                    } catch (t) {
                      R = function (t) {
                        return e.createElement(
                          "<" +
                            t +
                            ' xmlns="urn:schemas-microsoft.com:vml" class="rvml">',
                        );
                      };
                    }
                  }),
                  m._engine.initWin(m._g.win),
                  (m._engine.create = function () {
                    var t = m._getContainer.apply(0, arguments),
                      e = t.container,
                      r = t.height,
                      i = t.width,
                      n = t.x,
                      s = t.y;
                    if (!e) throw new Error("VML container not found.");
                    var a = new m._Paper(),
                      o = (a.canvas = m._g.doc.createElement("div")),
                      t = o.style,
                      n = n || 0,
                      s = s || 0,
                      i = i || 512,
                      r = r || 342;
                    return (
                      (a.width = i) == +i && (i += "px"),
                      (a.height = r) == +r && (r += "px"),
                      (a.coordsize = 216e5 + M + 216e5),
                      (a.coordorigin = "0 0"),
                      (a.span = m._g.doc.createElement("span")),
                      (a.span.style.cssText =
                        "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;"),
                      o.appendChild(a.span),
                      (t.cssText = m.format(
                        "top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",
                        i,
                        r,
                      )),
                      1 == e
                        ? (m._g.doc.body.appendChild(o),
                          (t.left = n + "px"),
                          (t.top = s + "px"),
                          (t.position = "absolute"))
                        : e.firstChild
                          ? e.insertBefore(o, e.firstChild)
                          : e.appendChild(o),
                      (a.renderfix = function () {}),
                      a
                    );
                  }),
                  (m.prototype.clear = function () {
                    m.eve("raphael.clear", this),
                      (this.canvas.innerHTML = ""),
                      (this.span = m._g.doc.createElement("span")),
                      (this.span.style.cssText =
                        "position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;"),
                      this.canvas.appendChild(this.span),
                      (this.bottom = this.top = null);
                  }),
                  (m.prototype.remove = function () {
                    for (var t in (m.eve("raphael.remove", this),
                    this.canvas.parentNode.removeChild(this.canvas),
                    this))
                      this[t] =
                        "function" == typeof this[t]
                          ? m._removedFactory(t)
                          : null;
                    return !0;
                  });
                var e,
                  r = m.st;
                for (e in t)
                  t[_](e) &&
                    !r[_](e) &&
                    (r[e] = (function (r) {
                      return function () {
                        var e = arguments;
                        return this.forEach(function (t) {
                          t[r].apply(t, e);
                        });
                      };
                    })(e));
              }
            }.apply(e, r);
          void 0 === r || (t.exports = r);
        },
        "./node_modules/eve-raphael/eve.js": function (t, e, r) {
          var p, d, f, g, x, y, i, v, m, b;
          function _(t, e) {
            return t - e;
          }
          function w() {
            for (var t = 0, e = this.length; t < e; t++)
              if (void 0 !== this[t]) return this[t];
          }
          function k() {
            for (var t = this.length; --t; )
              if (void 0 !== this[t]) return this[t];
          }
          (f = "hasOwnProperty"),
            (g = /[\.\/]/),
            (x = /\s*,\s*/),
            (y = { n: {} }),
            (i = Object.prototype.toString),
            (v = String),
            (m =
              Array.isArray ||
              function (t) {
                return t instanceof Array || "[object Array]" == i.call(t);
              }),
            ((b = function (t, e) {
              var r,
                i = d,
                n = Array.prototype.slice.call(arguments, 2),
                s = b.listeners(t),
                a = 0,
                o = [],
                l = {},
                h = [],
                u = p;
              (h.firstDefined = w), (h.lastDefined = k), (p = t);
              for (var c = (d = 0), f = s.length; c < f; c++)
                "zIndex" in s[c] &&
                  (o.push(s[c].zIndex),
                  s[c].zIndex < 0 && (l[s[c].zIndex] = s[c]));
              for (o.sort(_); o[a] < 0; )
                if (((r = l[o[a++]]), h.push(r.apply(e, n)), d))
                  return (d = i), h;
              for (c = 0; c < f; c++)
                if ("zIndex" in (r = s[c]))
                  if (r.zIndex == o[a]) {
                    if ((h.push(r.apply(e, n)), d)) break;
                    do {
                      if (((r = l[o[++a]]) && h.push(r.apply(e, n)), d)) break;
                    } while (r);
                  } else l[r.zIndex] = r;
                else if ((h.push(r.apply(e, n)), d)) break;
              return (d = i), (p = u), h;
            })._events = y),
            (b.listeners = function (t) {
              for (
                var e,
                  r,
                  i,
                  n,
                  s,
                  a,
                  o = m(t) ? t : t.split(g),
                  l = y,
                  h = [l],
                  u = [],
                  c = 0,
                  f = o.length;
                c < f;
                c++
              ) {
                for (a = [], n = 0, s = h.length; n < s; n++)
                  for (r = [(l = h[n].n)[o[c]], l["*"]], i = 2; i--; )
                    (e = r[i]) && (a.push(e), (u = u.concat(e.f || [])));
                h = a;
              }
              return u;
            }),
            (b.separator = function (t) {
              g = t
                ? ((t =
                    "[" + (t = v(t).replace(/(?=[\.\^\]\[\-])/g, "\\")) + "]"),
                  new RegExp(t))
                : /[\.\/]/;
            }),
            (b.on = function (t, a) {
              if ("function" != typeof a) return function () {};
              for (
                var e = m(t) ? (m(t[0]) ? t : [t]) : v(t).split(x),
                  r = 0,
                  i = e.length;
                r < i;
                r++
              )
                !(function (t) {
                  for (
                    var e,
                      r = m(t) ? t : v(t).split(g),
                      i = y,
                      n = 0,
                      s = r.length;
                    n < s;
                    n++
                  )
                    i =
                      ((i = i.n).hasOwnProperty(r[n]) && i[r[n]]) ||
                      (i[r[n]] = { n: {} });
                  for (i.f = i.f || [], n = 0, s = i.f.length; n < s; n++)
                    if (i.f[n] == a) {
                      e = !0;
                      break;
                    }
                  e || i.f.push(a);
                })(e[r]);
              return function (t) {
                +t == +t && (a.zIndex = +t);
              };
            }),
            (b.f = function (t) {
              var e = [].slice.call(arguments, 1);
              return function () {
                b.apply(
                  null,
                  [t, null].concat(e).concat([].slice.call(arguments, 0)),
                );
              };
            }),
            (b.stop = function () {
              d = 1;
            }),
            (b.nt = function (t) {
              var e = m(p) ? p.join(".") : p;
              return t
                ? new RegExp("(?:\\.|\\/|^)" + t + "(?:\\.|\\/|$)").test(e)
                : e;
            }),
            (b.nts = function () {
              return m(p) ? p : p.split(g);
            }),
            (b.off = b.unbind =
              function (t, e) {
                if (t) {
                  var r = m(t) ? (m(t[0]) ? t : [t]) : v(t).split(x);
                  if (1 < r.length)
                    for (var i = 0, n = r.length; i < n; i++) b.off(r[i], e);
                  else {
                    r = m(t) ? t : v(t).split(g);
                    var s,
                      a,
                      o,
                      l = [y];
                    for (i = 0, n = r.length; i < n; i++)
                      for (u = 0; u < l.length; u += o.length - 2) {
                        if (((o = [u, 1]), (s = l[u].n), "*" != r[i]))
                          s[r[i]] && o.push(s[r[i]]);
                        else for (a in s) s[f](a) && o.push(s[a]);
                        l.splice.apply(l, o);
                      }
                    for (i = 0, n = l.length; i < n; i++)
                      for (s = l[i]; s.n; ) {
                        if (e) {
                          if (s.f) {
                            for (u = 0, c = s.f.length; u < c; u++)
                              if (s.f[u] == e) {
                                s.f.splice(u, 1);
                                break;
                              }
                            s.f.length || delete s.f;
                          }
                          for (a in s.n)
                            if (s.n[f](a) && s.n[a].f) {
                              for (
                                var h = s.n[a].f, u = 0, c = h.length;
                                u < c;
                                u++
                              )
                                if (h[u] == e) {
                                  h.splice(u, 1);
                                  break;
                                }
                              h.length || delete s.n[a].f;
                            }
                        } else
                          for (a in (delete s.f, s.n))
                            s.n[f](a) && s.n[a].f && delete s.n[a].f;
                        s = s.n;
                      }
                  }
                } else b._events = y = { n: {} };
              }),
            (b.once = function (t, e) {
              var r = function () {
                return b.off(t, r), e.apply(this, arguments);
              };
              return b.on(t, r);
            }),
            (b.version = "0.5.0"),
            (b.toString = function () {
              return "You are running Eve 0.5.0";
            }),
            t.exports
              ? (t.exports = b)
              : void 0 ===
                  (e = function () {
                    return b;
                  }.apply(e, [])) || (t.exports = e);
        },
      }),
    (n.c = i),
    (n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }),
    (n.r = function (t) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(t, "__esModule", { value: !0 });
    }),
    (n.t = function (e, t) {
      if ((1 & t && (e = n(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (
        (n.r(r),
        Object.defineProperty(r, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var i in e)
          n.d(
            r,
            i,
            function (t) {
              return e[t];
            }.bind(null, i),
          );
      return r;
    }),
    (n.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t.default;
            }
          : function () {
              return t;
            };
      return n.d(e, "a", e), e;
    }),
    (n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (n.p = ""),
    n((n.s = "./dev/raphael.amd.js"))
  );
  function n(t) {
    if (i[t]) return i[t].exports;
    var e = (i[t] = { i: t, l: !1, exports: {} });
    return r[t].call(e.exports, e, e.exports, n), (e.l = !0), e.exports;
  }
  var r, i;
});
