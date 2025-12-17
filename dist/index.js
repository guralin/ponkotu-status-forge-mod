var Qo = (e) => {
  throw TypeError(e);
};
var Ll = (e, t, n) => t.has(e) || Qo("Cannot " + n);
var mn = (e, t, n) => (Ll(e, t, "read from private field"), n ? n.call(e) : t.get(e)), sr = (e, t, n) => t.has(e) ? Qo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), hn = (e, t, n, r) => (Ll(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n), Ko = (e, t, n) => (Ll(e, t, "access private method"), n);
var os = { exports: {} }, cl = {}, is = { exports: {} }, T = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = Symbol.for("react.element"), xc = Symbol.for("react.portal"), Cc = Symbol.for("react.fragment"), _c = Symbol.for("react.strict_mode"), Pc = Symbol.for("react.profiler"), Nc = Symbol.for("react.provider"), zc = Symbol.for("react.context"), Lc = Symbol.for("react.forward_ref"), Tc = Symbol.for("react.suspense"), Rc = Symbol.for("react.memo"), Dc = Symbol.for("react.lazy"), Yo = Symbol.iterator;
function Mc(e) {
  return e === null || typeof e != "object" ? null : (e = Yo && e[Yo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ss = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, as = Object.assign, cs = {};
function an(e, t, n) {
  this.props = e, this.context = t, this.refs = cs, this.updater = n || ss;
}
an.prototype.isReactComponent = {};
an.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
an.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function fs() {
}
fs.prototype = an.prototype;
function Gu(e, t, n) {
  this.props = e, this.context = t, this.refs = cs, this.updater = n || ss;
}
var Zu = Gu.prototype = new fs();
Zu.constructor = Gu;
as(Zu, an.prototype);
Zu.isPureReactComponent = !0;
var Xo = Array.isArray, ds = Object.prototype.hasOwnProperty, Ju = { current: null }, ps = { key: !0, ref: !0, __self: !0, __source: !0 };
function ms(e, t, n) {
  var r, l = {}, u = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (u = "" + t.key), t) ds.call(t, r) && !ps.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: tr, type: e, key: u, ref: o, props: l, _owner: Ju.current };
}
function Oc(e, t) {
  return { $$typeof: tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function qu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tr;
}
function jc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Go = /\/+/g;
function Tl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? jc("" + e.key) : t.toString(36);
}
function Pr(e, t, n, r, l) {
  var u = typeof e;
  (u === "undefined" || u === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (u) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case tr:
        case xc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Tl(o, 0) : r, Xo(l) ? (n = "", e != null && (n = e.replace(Go, "$&/") + "/"), Pr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (qu(l) && (l = Oc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Go, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Xo(e)) for (var i = 0; i < e.length; i++) {
    u = e[i];
    var s = r + Tl(u, i);
    o += Pr(u, t, n, s, l);
  }
  else if (s = Mc(e), typeof s == "function") for (e = s.call(e), i = 0; !(u = e.next()).done; ) u = u.value, s = r + Tl(u, i++), o += Pr(u, t, n, s, l);
  else if (u === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function ar(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Pr(e, r, "", "", function(u) {
    return t.call(n, u, l++);
  }), r;
}
function Ic(e) {
  if (e._status === -1) {
    var t = e._result;
    t = t(), t.then(function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n);
    }, function(n) {
      (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n);
    }), e._status === -1 && (e._status = 0, e._result = t);
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = { current: null }, Nr = { transition: null }, Fc = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: Nr, ReactCurrentOwner: Ju };
function hs() {
  throw Error("act(...) is not supported in production builds of React.");
}
T.Children = { map: ar, forEach: function(e, t, n) {
  ar(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return ar(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return ar(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!qu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
T.Component = an;
T.Fragment = Cc;
T.Profiler = Pc;
T.PureComponent = Gu;
T.StrictMode = _c;
T.Suspense = Tc;
T.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Fc;
T.act = hs;
T.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = as({}, e.props), l = e.key, u = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (u = t.ref, o = Ju.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (s in t) ds.call(t, s) && !ps.hasOwnProperty(s) && (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    i = Array(s);
    for (var c = 0; c < s; c++) i[c] = arguments[c + 2];
    r.children = i;
  }
  return { $$typeof: tr, type: e.type, key: l, ref: u, props: r, _owner: o };
};
T.createContext = function(e) {
  return e = { $$typeof: zc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Nc, _context: e }, e.Consumer = e;
};
T.createElement = ms;
T.createFactory = function(e) {
  var t = ms.bind(null, e);
  return t.type = e, t;
};
T.createRef = function() {
  return { current: null };
};
T.forwardRef = function(e) {
  return { $$typeof: Lc, render: e };
};
T.isValidElement = qu;
T.lazy = function(e) {
  return { $$typeof: Dc, _payload: { _status: -1, _result: e }, _init: Ic };
};
T.memo = function(e, t) {
  return { $$typeof: Rc, type: e, compare: t === void 0 ? null : t };
};
T.startTransition = function(e) {
  var t = Nr.transition;
  Nr.transition = {};
  try {
    e();
  } finally {
    Nr.transition = t;
  }
};
T.unstable_act = hs;
T.useCallback = function(e, t) {
  return se.current.useCallback(e, t);
};
T.useContext = function(e) {
  return se.current.useContext(e);
};
T.useDebugValue = function() {
};
T.useDeferredValue = function(e) {
  return se.current.useDeferredValue(e);
};
T.useEffect = function(e, t) {
  return se.current.useEffect(e, t);
};
T.useId = function() {
  return se.current.useId();
};
T.useImperativeHandle = function(e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
T.useInsertionEffect = function(e, t) {
  return se.current.useInsertionEffect(e, t);
};
T.useLayoutEffect = function(e, t) {
  return se.current.useLayoutEffect(e, t);
};
T.useMemo = function(e, t) {
  return se.current.useMemo(e, t);
};
T.useReducer = function(e, t, n) {
  return se.current.useReducer(e, t, n);
};
T.useRef = function(e) {
  return se.current.useRef(e);
};
T.useState = function(e) {
  return se.current.useState(e);
};
T.useSyncExternalStore = function(e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
T.useTransition = function() {
  return se.current.useTransition();
};
T.version = "18.3.1";
is.exports = T;
var Se = is.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Uc = Se, Ac = Symbol.for("react.element"), $c = Symbol.for("react.fragment"), Vc = Object.prototype.hasOwnProperty, Hc = Uc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Bc = { key: !0, ref: !0, __self: !0, __source: !0 };
function vs(e, t, n) {
  var r, l = {}, u = null, o = null;
  n !== void 0 && (u = "" + n), t.key !== void 0 && (u = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Vc.call(t, r) && !Bc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Ac, type: e, key: u, ref: o, props: l, _owner: Hc.current };
}
cl.Fragment = $c;
cl.jsx = vs;
cl.jsxs = vs;
os.exports = cl;
var M = os.exports, Ur = {}, ys = { exports: {} }, we = {}, gs = { exports: {} }, ws = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
  function t(x, N) {
    var L = x.length;
    x.push(N);
    e: for (; 0 < L; ) {
      var W = L - 1 >>> 1, Z = x[W];
      if (0 < l(Z, N)) x[W] = N, x[L] = Z, L = W;
      else break e;
    }
  }
  function n(x) {
    return x.length === 0 ? null : x[0];
  }
  function r(x) {
    if (x.length === 0) return null;
    var N = x[0], L = x.pop();
    if (L !== N) {
      x[0] = L;
      e: for (var W = 0, Z = x.length, or = Z >>> 1; W < or; ) {
        var gt = 2 * (W + 1) - 1, zl = x[gt], wt = gt + 1, ir = x[wt];
        if (0 > l(zl, L)) wt < Z && 0 > l(ir, zl) ? (x[W] = ir, x[wt] = L, W = wt) : (x[W] = zl, x[gt] = L, W = gt);
        else if (wt < Z && 0 > l(ir, L)) x[W] = ir, x[wt] = L, W = wt;
        else break e;
      }
    }
    return N;
  }
  function l(x, N) {
    var L = x.sortIndex - N.sortIndex;
    return L !== 0 ? L : x.id - N.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var u = performance;
    e.unstable_now = function() {
      return u.now();
    };
  } else {
    var o = Date, i = o.now();
    e.unstable_now = function() {
      return o.now() - i;
    };
  }
  var s = [], c = [], h = 1, m = null, p = 3, k = !1, v = !1, w = !1, z = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(x) {
    for (var N = n(c); N !== null; ) {
      if (N.callback === null) r(c);
      else if (N.startTime <= x) r(c), N.sortIndex = N.expirationTime, t(s, N);
      else break;
      N = n(c);
    }
  }
  function y(x) {
    if (w = !1, d(x), !v) if (n(s) !== null) v = !0, Pl(S);
    else {
      var N = n(c);
      N !== null && Nl(y, N.startTime - x);
    }
  }
  function S(x, N) {
    v = !1, w && (w = !1, f(P), P = -1), k = !0;
    var L = p;
    try {
      for (d(N), m = n(s); m !== null && (!(m.expirationTime > N) || x && !ze()); ) {
        var W = m.callback;
        if (typeof W == "function") {
          m.callback = null, p = m.priorityLevel;
          var Z = W(m.expirationTime <= N);
          N = e.unstable_now(), typeof Z == "function" ? m.callback = Z : m === n(s) && r(s), d(N);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var or = !0;
      else {
        var gt = n(c);
        gt !== null && Nl(y, gt.startTime - N), or = !1;
      }
      return or;
    } finally {
      m = null, p = L, k = !1;
    }
  }
  var C = !1, _ = null, P = -1, B = 5, R = -1;
  function ze() {
    return !(e.unstable_now() - R < B);
  }
  function dn() {
    if (_ !== null) {
      var x = e.unstable_now();
      R = x;
      var N = !0;
      try {
        N = _(!0, x);
      } finally {
        N ? pn() : (C = !1, _ = null);
      }
    } else C = !1;
  }
  var pn;
  if (typeof a == "function") pn = function() {
    a(dn);
  };
  else if (typeof MessageChannel < "u") {
    var Wo = new MessageChannel(), Ec = Wo.port2;
    Wo.port1.onmessage = dn, pn = function() {
      Ec.postMessage(null);
    };
  } else pn = function() {
    z(dn, 0);
  };
  function Pl(x) {
    _ = x, C || (C = !0, pn());
  }
  function Nl(x, N) {
    P = z(function() {
      x(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(x) {
    x.callback = null;
  }, e.unstable_continueExecution = function() {
    v || k || (v = !0, Pl(S));
  }, e.unstable_forceFrameRate = function(x) {
    0 > x || 125 < x ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < x ? Math.floor(1e3 / x) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(x) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = p;
    }
    var L = p;
    p = N;
    try {
      return x();
    } finally {
      p = L;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(x, N) {
    switch (x) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        x = 3;
    }
    var L = p;
    p = x;
    try {
      return N();
    } finally {
      p = L;
    }
  }, e.unstable_scheduleCallback = function(x, N, L) {
    var W = e.unstable_now();
    switch (typeof L == "object" && L !== null ? (L = L.delay, L = typeof L == "number" && 0 < L ? W + L : W) : L = W, x) {
      case 1:
        var Z = -1;
        break;
      case 2:
        Z = 250;
        break;
      case 5:
        Z = 1073741823;
        break;
      case 4:
        Z = 1e4;
        break;
      default:
        Z = 5e3;
    }
    return Z = L + Z, x = { id: h++, callback: N, priorityLevel: x, startTime: L, expirationTime: Z, sortIndex: -1 }, L > W ? (x.sortIndex = L, t(c, x), n(s) === null && x === n(c) && (w ? (f(P), P = -1) : w = !0, Nl(y, L - W))) : (x.sortIndex = Z, t(s, x), v || k || (v = !0, Pl(S))), x;
  }, e.unstable_shouldYield = ze, e.unstable_wrapCallback = function(x) {
    var N = p;
    return function() {
      var L = p;
      p = N;
      try {
        return x.apply(this, arguments);
      } finally {
        p = L;
      }
    };
  };
})(ws);
gs.exports = ws;
var Wc = gs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Qc = Se, ge = Wc;
function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var ks = /* @__PURE__ */ new Set(), Fn = {};
function Ot(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++) ks.add(t[e]);
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nu = Object.prototype.hasOwnProperty, Kc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Zo = {}, Jo = {};
function Yc(e) {
  return nu.call(Jo, e) ? !0 : nu.call(Zo, e) ? !1 : Kc.test(e) ? Jo[e] = !0 : (Zo[e] = !0, !1);
}
function Xc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Gc(e, t, n, r) {
  if (t === null || typeof t > "u" || Xc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null) switch (n.type) {
    case 3:
      return !t;
    case 4:
      return t === !1;
    case 5:
      return isNaN(t);
    case 6:
      return isNaN(t) || 1 > t;
  }
  return !1;
}
function ae(e, t, n, r, l, u, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = o;
}
var te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  te[e] = new ae(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  te[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  te[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  te[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  te[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  te[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  te[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  te[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var bu = /[\-:]([a-z])/g;
function eo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    bu,
    eo
  );
  te[t] = new ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(bu, eo);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(bu, eo);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function to(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Gc(t, n, l, r) && (n = null), r || l === null ? Yc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Qc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, cr = Symbol.for("react.element"), Ft = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), no = Symbol.for("react.strict_mode"), ru = Symbol.for("react.profiler"), Ss = Symbol.for("react.provider"), Es = Symbol.for("react.context"), ro = Symbol.for("react.forward_ref"), lu = Symbol.for("react.suspense"), uu = Symbol.for("react.suspense_list"), lo = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), xs = Symbol.for("react.offscreen"), qo = Symbol.iterator;
function vn(e) {
  return e === null || typeof e != "object" ? null : (e = qo && e[qo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var V = Object.assign, Rl;
function Cn(e) {
  if (Rl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Rl = t && t[1] || "";
  }
  return `
` + Rl + e;
}
var Dl = !1;
function Ml(e, t) {
  if (!e || Dl) return "";
  Dl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t) if (t = function() {
      throw Error();
    }, Object.defineProperty(t.prototype, "props", { set: function() {
      throw Error();
    } }), typeof Reflect == "object" && Reflect.construct) {
      try {
        Reflect.construct(t, []);
      } catch (c) {
        var r = c;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (c) {
        r = c;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (var l = c.stack.split(`
`), u = r.stack.split(`
`), o = l.length - 1, i = u.length - 1; 1 <= o && 0 <= i && l[o] !== u[i]; ) i--;
      for (; 1 <= o && 0 <= i; o--, i--) if (l[o] !== u[i]) {
        if (o !== 1 || i !== 1)
          do
            if (o--, i--, 0 > i || l[o] !== u[i]) {
              var s = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= o && 0 <= i);
        break;
      }
    }
  } finally {
    Dl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Cn(e) : "";
}
function Zc(e) {
  switch (e.tag) {
    case 5:
      return Cn(e.type);
    case 16:
      return Cn("Lazy");
    case 13:
      return Cn("Suspense");
    case 19:
      return Cn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ml(e.type, !1), e;
    case 11:
      return e = Ml(e.type.render, !1), e;
    case 1:
      return e = Ml(e.type, !0), e;
    default:
      return "";
  }
}
function ou(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Ft:
      return "Portal";
    case ru:
      return "Profiler";
    case no:
      return "StrictMode";
    case lu:
      return "Suspense";
    case uu:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Es:
      return (e.displayName || "Context") + ".Consumer";
    case Ss:
      return (e._context.displayName || "Context") + ".Provider";
    case ro:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case lo:
      return t = e.displayName || null, t !== null ? t : ou(e.type) || "Memo";
    case be:
      t = e._payload, e = e._init;
      try {
        return ou(e(t));
      } catch {
      }
  }
  return null;
}
function Jc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return ou(t);
    case 8:
      return t === no ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function pt(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function Cs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function qc(e) {
  var t = Cs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, u = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, u.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function fr(e) {
  e._valueTracker || (e._valueTracker = qc(e));
}
function _s(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Cs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ar(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function iu(e, t) {
  var n = t.checked;
  return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function bo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = pt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ps(e, t) {
  t = t.checked, t != null && to(e, "checked", t, !1);
}
function su(e, t) {
  Ps(e, t);
  var n = pt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? au(e, t.type, n) : t.hasOwnProperty("defaultValue") && au(e, t.type, pt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function ei(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function au(e, t, n) {
  (t !== "number" || Ar(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var _n = Array.isArray;
function Gt(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + pt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function cu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function ti(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(g(92));
      if (_n(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: pt(n) };
}
function Ns(e, t) {
  var n = pt(t.value), r = pt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ni(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function zs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function fu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? zs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var dr, Ls = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (dr = dr || document.createElement("div"), dr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = dr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Un(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var zn = {
  animationIterationCount: !0,
  aspectRatio: !0,
  borderImageOutset: !0,
  borderImageSlice: !0,
  borderImageWidth: !0,
  boxFlex: !0,
  boxFlexGroup: !0,
  boxOrdinalGroup: !0,
  columnCount: !0,
  columns: !0,
  flex: !0,
  flexGrow: !0,
  flexPositive: !0,
  flexShrink: !0,
  flexNegative: !0,
  flexOrder: !0,
  gridArea: !0,
  gridRow: !0,
  gridRowEnd: !0,
  gridRowSpan: !0,
  gridRowStart: !0,
  gridColumn: !0,
  gridColumnEnd: !0,
  gridColumnSpan: !0,
  gridColumnStart: !0,
  fontWeight: !0,
  lineClamp: !0,
  lineHeight: !0,
  opacity: !0,
  order: !0,
  orphans: !0,
  tabSize: !0,
  widows: !0,
  zIndex: !0,
  zoom: !0,
  fillOpacity: !0,
  floodOpacity: !0,
  stopOpacity: !0,
  strokeDasharray: !0,
  strokeDashoffset: !0,
  strokeMiterlimit: !0,
  strokeOpacity: !0,
  strokeWidth: !0
}, bc = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function(e) {
  bc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), zn[t] = zn[e];
  });
});
function Ts(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zn.hasOwnProperty(e) && zn[e] ? ("" + t).trim() : t + "px";
}
function Rs(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ts(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var ef = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function du(e, t) {
  if (t) {
    if (ef[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function pu(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var mu = null;
function uo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var hu = null, Zt = null, Jt = null;
function ri(e) {
  if (e = lr(e)) {
    if (typeof hu != "function") throw Error(g(280));
    var t = e.stateNode;
    t && (t = hl(t), hu(e.stateNode, e.type, t));
  }
}
function Ds(e) {
  Zt ? Jt ? Jt.push(e) : Jt = [e] : Zt = e;
}
function Ms() {
  if (Zt) {
    var e = Zt, t = Jt;
    if (Jt = Zt = null, ri(e), t) for (e = 0; e < t.length; e++) ri(t[e]);
  }
}
function Os(e, t) {
  return e(t);
}
function js() {
}
var Ol = !1;
function Is(e, t, n) {
  if (Ol) return e(t, n);
  Ol = !0;
  try {
    return Os(e, t, n);
  } finally {
    Ol = !1, (Zt !== null || Jt !== null) && (js(), Ms());
  }
}
function An(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = hl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(g(231, t, typeof n));
  return n;
}
var vu = !1;
if (Ke) try {
  var yn = {};
  Object.defineProperty(yn, "passive", { get: function() {
    vu = !0;
  } }), window.addEventListener("test", yn, yn), window.removeEventListener("test", yn, yn);
} catch {
  vu = !1;
}
function tf(e, t, n, r, l, u, o, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Ln = !1, $r = null, Vr = !1, yu = null, nf = { onError: function(e) {
  Ln = !0, $r = e;
} };
function rf(e, t, n, r, l, u, o, i, s) {
  Ln = !1, $r = null, tf.apply(nf, arguments);
}
function lf(e, t, n, r, l, u, o, i, s) {
  if (rf.apply(this, arguments), Ln) {
    if (Ln) {
      var c = $r;
      Ln = !1, $r = null;
    } else throw Error(g(198));
    Vr || (Vr = !0, yu = c);
  }
}
function jt(e) {
  var t = e, n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do
      t = e, t.flags & 4098 && (n = t.return), e = t.return;
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Fs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function li(e) {
  if (jt(e) !== e) throw Error(g(188));
}
function uf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = jt(e), t === null) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var u = l.alternate;
    if (u === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === u.child) {
      for (u = l.child; u; ) {
        if (u === n) return li(l), e;
        if (u === r) return li(l), t;
        u = u.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) n = l, r = u;
    else {
      for (var o = !1, i = l.child; i; ) {
        if (i === n) {
          o = !0, n = l, r = u;
          break;
        }
        if (i === r) {
          o = !0, r = l, n = u;
          break;
        }
        i = i.sibling;
      }
      if (!o) {
        for (i = u.child; i; ) {
          if (i === n) {
            o = !0, n = u, r = l;
            break;
          }
          if (i === r) {
            o = !0, r = u, n = l;
            break;
          }
          i = i.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Us(e) {
  return e = uf(e), e !== null ? As(e) : null;
}
function As(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = As(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var $s = ge.unstable_scheduleCallback, oi = ge.unstable_cancelCallback, of = ge.unstable_shouldYield, sf = ge.unstable_requestPaint, Q = ge.unstable_now, af = ge.unstable_getCurrentPriorityLevel, oo = ge.unstable_ImmediatePriority, Vs = ge.unstable_UserBlockingPriority, Hr = ge.unstable_NormalPriority, cf = ge.unstable_LowPriority, Hs = ge.unstable_IdlePriority, fl = null, Ae = null;
function ff(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function") try {
    Ae.onCommitFiberRoot(fl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Me = Math.clz32 ? Math.clz32 : mf, df = Math.log, pf = Math.LN2;
function mf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (df(e) / pf | 0) | 0;
}
var pr = 64, mr = 4194304;
function Pn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Br(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = Pn(i) : (u &= o, u !== 0 && (r = Pn(u)));
  } else o = n & ~l, o !== 0 ? r = Pn(o) : u !== 0 && (r = Pn(u));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Me(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function hf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function vf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
    var o = 31 - Me(u), i = 1 << o, s = l[o];
    s === -1 ? (!(i & n) || i & r) && (l[o] = hf(i, t)) : s <= t && (e.expiredLanes |= i), u &= ~i;
  }
}
function gu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Bs() {
  var e = pr;
  return pr <<= 1, !(pr & 4194240) && (pr = 64), e;
}
function jl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Me(t), e[t] = n;
}
function yf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n), u = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
  }
}
function io(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function Ws(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Qs, so, Ks, Ys, Xs, wu = !1, hr = [], ut = null, ot = null, it = null, $n = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map(), tt = [], gf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ii(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ut = null;
      break;
    case "dragenter":
    case "dragleave":
      ot = null;
      break;
    case "mouseover":
    case "mouseout":
      it = null;
      break;
    case "pointerover":
    case "pointerout":
      $n.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Vn.delete(t.pointerId);
  }
}
function gn(e, t, n, r, l, u) {
  return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = lr(t), t !== null && so(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function wf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ut = gn(ut, e, t, n, r, l), !0;
    case "dragenter":
      return ot = gn(ot, e, t, n, r, l), !0;
    case "mouseover":
      return it = gn(it, e, t, n, r, l), !0;
    case "pointerover":
      var u = l.pointerId;
      return $n.set(u, gn($n.get(u) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return u = l.pointerId, Vn.set(u, gn(Vn.get(u) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function Gs(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = jt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Fs(n), t !== null) {
          e.blockedOn = t, Xs(e.priority, function() {
            Ks(n);
          });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function zr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = ku(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      mu = r, n.target.dispatchEvent(r), mu = null;
    } else return t = lr(n), t !== null && so(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function si(e, t, n) {
  zr(e) && n.delete(t);
}
function kf() {
  wu = !1, ut !== null && zr(ut) && (ut = null), ot !== null && zr(ot) && (ot = null), it !== null && zr(it) && (it = null), $n.forEach(si), Vn.forEach(si);
}
function wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, wu || (wu = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, kf)));
}
function Hn(e) {
  function t(l) {
    return wn(l, e);
  }
  if (0 < hr.length) {
    wn(hr[0], e);
    for (var n = 1; n < hr.length; n++) {
      var r = hr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ut !== null && wn(ut, e), ot !== null && wn(ot, e), it !== null && wn(it, e), $n.forEach(t), Vn.forEach(t), n = 0; n < tt.length; n++) r = tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && (n = tt[0], n.blockedOn === null); ) Gs(n), n.blockedOn === null && tt.shift();
}
var qt = Ze.ReactCurrentBatchConfig, Wr = !0;
function Sf(e, t, n, r) {
  var l = O, u = qt.transition;
  qt.transition = null;
  try {
    O = 1, ao(e, t, n, r);
  } finally {
    O = l, qt.transition = u;
  }
}
function Ef(e, t, n, r) {
  var l = O, u = qt.transition;
  qt.transition = null;
  try {
    O = 4, ao(e, t, n, r);
  } finally {
    O = l, qt.transition = u;
  }
}
function ao(e, t, n, r) {
  if (Wr) {
    var l = ku(e, t, n, r);
    if (l === null) Ql(e, t, r, Qr, n), ii(e, r);
    else if (wf(l, e, t, n, r)) r.stopPropagation();
    else if (ii(e, r), t & 4 && -1 < gf.indexOf(e)) {
      for (; l !== null; ) {
        var u = lr(l);
        if (u !== null && Qs(u), u = ku(e, t, n, r), u === null && Ql(e, t, r, Qr, n), u === l) break;
        l = u;
      }
      l !== null && r.stopPropagation();
    } else Ql(e, t, r, null, n);
  }
}
var Qr = null;
function ku(e, t, n, r) {
  if (Qr = null, e = uo(r), e = Et(e), e !== null) if (t = jt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Fs(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Qr = e, null;
}
function Zs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (af()) {
        case oo:
          return 1;
        case Vs:
          return 4;
        case Hr:
        case cf:
          return 16;
        case Hs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null, co = null, Lr = null;
function Js() {
  if (Lr) return Lr;
  var e, t = co, n = t.length, r, l = "value" in rt ? rt.value : rt.textContent, u = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[u - r]; r++) ;
  return Lr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Tr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function vr() {
  return !0;
}
function ai() {
  return !1;
}
function ke(e) {
  function t(n, r, l, u, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(u) : u[i]);
    return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? vr : ai, this.isPropagationStopped = ai, this;
  }
  return V(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = vr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = vr);
  }, persist: function() {
  }, isPersistent: vr }), t;
}
var cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, fo = ke(cn), rr = V({}, cn, { view: 0, detail: 0 }), xf = ke(rr), Il, Fl, kn, dl = V({}, rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: po, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== kn && (kn && e.type === "mousemove" ? (Il = e.screenX - kn.screenX, Fl = e.screenY - kn.screenY) : Fl = Il = 0, kn = e), Il);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Fl;
} }), ci = ke(dl), Cf = V({}, dl, { dataTransfer: 0 }), _f = ke(Cf), Pf = V({}, rr, { relatedTarget: 0 }), Ul = ke(Pf), Nf = V({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), zf = ke(Nf), Lf = V({}, cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Tf = ke(Lf), Rf = V({}, cn, { data: 0 }), fi = ke(Rf), Df = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Mf = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Of = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function jf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Of[e]) ? !!t[e] : !1;
}
function po() {
  return jf;
}
var If = V({}, rr, { key: function(e) {
  if (e.key) {
    var t = Df[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Tr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Mf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: po, charCode: function(e) {
  return e.type === "keypress" ? Tr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Tr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Ff = ke(If), Uf = V({}, dl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), di = ke(Uf), Af = V({}, rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: po }), $f = ke(Af), Vf = V({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Hf = ke(Vf), Bf = V({}, dl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Wf = ke(Bf), Qf = [9, 13, 27, 32], mo = Ke && "CompositionEvent" in window, Tn = null;
Ke && "documentMode" in document && (Tn = document.documentMode);
var Kf = Ke && "TextEvent" in window && !Tn, qs = Ke && (!mo || Tn && 8 < Tn && 11 >= Tn), pi = " ", mi = !1;
function bs(e, t) {
  switch (e) {
    case "keyup":
      return Qf.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function ea(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var At = !1;
function Yf(e, t) {
  switch (e) {
    case "compositionend":
      return ea(t);
    case "keypress":
      return t.which !== 32 ? null : (mi = !0, pi);
    case "textInput":
      return e = t.data, e === pi && mi ? null : e;
    default:
      return null;
  }
}
function Xf(e, t) {
  if (At) return e === "compositionend" || !mo && bs(e, t) ? (e = Js(), Lr = co = rt = null, At = !1, e) : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return qs && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Gf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function hi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Gf[e.type] : t === "textarea";
}
function ta(e, t, n, r) {
  Ds(r), t = Kr(t, "onChange"), 0 < t.length && (n = new fo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Rn = null, Bn = null;
function Zf(e) {
  da(e, 0);
}
function pl(e) {
  var t = Ht(e);
  if (_s(t)) return e;
}
function Jf(e, t) {
  if (e === "change") return t;
}
var na = !1;
if (Ke) {
  var Al;
  if (Ke) {
    var $l = "oninput" in document;
    if (!$l) {
      var vi = document.createElement("div");
      vi.setAttribute("oninput", "return;"), $l = typeof vi.oninput == "function";
    }
    Al = $l;
  } else Al = !1;
  na = Al && (!document.documentMode || 9 < document.documentMode);
}
function yi() {
  Rn && (Rn.detachEvent("onpropertychange", ra), Bn = Rn = null);
}
function ra(e) {
  if (e.propertyName === "value" && pl(Bn)) {
    var t = [];
    ta(t, Bn, e, uo(e)), Is(Zf, t);
  }
}
function qf(e, t, n) {
  e === "focusin" ? (yi(), Rn = t, Bn = n, Rn.attachEvent("onpropertychange", ra)) : e === "focusout" && yi();
}
function bf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return pl(Bn);
}
function ed(e, t) {
  if (e === "click") return pl(t);
}
function td(e, t) {
  if (e === "input" || e === "change") return pl(t);
}
function nd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var je = typeof Object.is == "function" ? Object.is : nd;
function Wn(e, t) {
  if (je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!nu.call(t, l) || !je(e[l], t[l])) return !1;
  }
  return !0;
}
function gi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function wi(e, t) {
  var n = gi(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = gi(n);
  }
}
function la(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? la(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ua() {
  for (var e = window, t = Ar(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ar(e.document);
  }
  return t;
}
function ho(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function rd(e) {
  var t = ua(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && la(n.ownerDocument.documentElement, n)) {
    if (r !== null && ho(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, u = Math.min(r.start, l);
        r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = wi(n, u);
        var o = wi(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var ld = Ke && "documentMode" in document && 11 >= document.documentMode, $t = null, Su = null, Dn = null, Eu = !1;
function ki(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Eu || $t == null || $t !== Ar(r) || (r = $t, "selectionStart" in r && ho(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Dn && Wn(Dn, r) || (Dn = r, r = Kr(Su, "onSelect"), 0 < r.length && (t = new fo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = $t)));
}
function yr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vt = { animationend: yr("Animation", "AnimationEnd"), animationiteration: yr("Animation", "AnimationIteration"), animationstart: yr("Animation", "AnimationStart"), transitionend: yr("Transition", "TransitionEnd") }, Vl = {}, oa = {};
Ke && (oa = document.createElement("div").style, "AnimationEvent" in window || (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation), "TransitionEvent" in window || delete Vt.transitionend.transition);
function ml(e) {
  if (Vl[e]) return Vl[e];
  if (!Vt[e]) return e;
  var t = Vt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in oa) return Vl[e] = t[n];
  return e;
}
var ia = ml("animationend"), sa = ml("animationiteration"), aa = ml("animationstart"), ca = ml("transitionend"), fa = /* @__PURE__ */ new Map(), Si = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ht(e, t) {
  fa.set(e, t), Ot(t, [e]);
}
for (var Hl = 0; Hl < Si.length; Hl++) {
  var Bl = Si[Hl], ud = Bl.toLowerCase(), od = Bl[0].toUpperCase() + Bl.slice(1);
  ht(ud, "on" + od);
}
ht(ia, "onAnimationEnd");
ht(sa, "onAnimationIteration");
ht(aa, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(ca, "onTransitionEnd");
tn("onMouseEnter", ["mouseout", "mouseover"]);
tn("onMouseLeave", ["mouseout", "mouseover"]);
tn("onPointerEnter", ["pointerout", "pointerover"]);
tn("onPointerLeave", ["pointerout", "pointerover"]);
Ot("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ot("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ot("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ot("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ot("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ot("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Nn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), id = new Set("cancel close invalid load scroll toggle".split(" ").concat(Nn));
function Ei(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, lf(r, t, void 0, e), e.currentTarget = null;
}
function da(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var u = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], s = i.instance, c = i.currentTarget;
        if (i = i.listener, s !== u && l.isPropagationStopped()) break e;
        Ei(l, i, c), u = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], s = i.instance, c = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped()) break e;
        Ei(l, i, c), u = s;
      }
    }
  }
  if (Vr) throw e = yu, Vr = !1, yu = null, e;
}
function I(e, t) {
  var n = t[Nu];
  n === void 0 && (n = t[Nu] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (pa(t, e, 2, !1), n.add(r));
}
function Wl(e, t, n) {
  var r = 0;
  t && (r |= 4), pa(n, e, r, t);
}
var gr = "_reactListening" + Math.random().toString(36).slice(2);
function Qn(e) {
  if (!e[gr]) {
    e[gr] = !0, ks.forEach(function(n) {
      n !== "selectionchange" && (id.has(n) || Wl(n, !1, e), Wl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[gr] || (t[gr] = !0, Wl("selectionchange", !1, t));
  }
}
function pa(e, t, n, r) {
  switch (Zs(t)) {
    case 1:
      var l = Sf;
      break;
    case 4:
      l = Ef;
      break;
    default:
      l = ao;
  }
  n = l.bind(null, t, n, e), l = void 0, !vu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Ql(e, t, n, r, l) {
  var u = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var i = r.stateNode.containerInfo;
      if (i === l || i.nodeType === 8 && i.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        o = o.return;
      }
      for (; i !== null; ) {
        if (o = Et(i), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = u = o;
          continue e;
        }
        i = i.parentNode;
      }
    }
    r = r.return;
  }
  Is(function() {
    var c = u, h = uo(n), m = [];
    e: {
      var p = fa.get(e);
      if (p !== void 0) {
        var k = fo, v = e;
        switch (e) {
          case "keypress":
            if (Tr(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Ff;
            break;
          case "focusin":
            v = "focus", k = Ul;
            break;
          case "focusout":
            v = "blur", k = Ul;
            break;
          case "beforeblur":
          case "afterblur":
            k = Ul;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k = ci;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = _f;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = $f;
            break;
          case ia:
          case sa:
          case aa:
            k = zf;
            break;
          case ca:
            k = Hf;
            break;
          case "scroll":
            k = xf;
            break;
          case "wheel":
            k = Wf;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Tf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = di;
        }
        var w = (t & 4) !== 0, z = !w && e === "scroll", f = w ? p !== null ? p + "Capture" : null : p;
        w = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var y = d.stateNode;
          if (d.tag === 5 && y !== null && (d = y, f !== null && (y = An(a, f), y != null && w.push(Kn(a, y, d)))), z) break;
          a = a.return;
        }
        0 < w.length && (p = new k(p, v, null, n, h), m.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", p && n !== mu && (v = n.relatedTarget || n.fromElement) && (Et(v) || v[Ye])) break e;
        if ((k || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, k ? (v = n.relatedTarget || n.toElement, k = c, v = v ? Et(v) : null, v !== null && (z = jt(v), v !== z || v.tag !== 5 && v.tag !== 6) && (v = null)) : (k = null, v = c), k !== v)) {
          if (w = ci, y = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (w = di, y = "onPointerLeave", f = "onPointerEnter", a = "pointer"), z = k == null ? p : Ht(k), d = v == null ? p : Ht(v), p = new w(y, a + "leave", k, n, h), p.target = z, p.relatedTarget = d, y = null, Et(h) === c && (w = new w(f, a + "enter", v, n, h), w.target = d, w.relatedTarget = z, y = w), z = y, k && v) t: {
            for (w = k, f = v, a = 0, d = w; d; d = It(d)) a++;
            for (d = 0, y = f; y; y = It(y)) d++;
            for (; 0 < a - d; ) w = It(w), a--;
            for (; 0 < d - a; ) f = It(f), d--;
            for (; a--; ) {
              if (w === f || f !== null && w === f.alternate) break t;
              w = It(w), f = It(f);
            }
            w = null;
          }
          else w = null;
          k !== null && xi(m, p, k, w, !1), v !== null && z !== null && xi(m, z, v, w, !0);
        }
      }
      e: {
        if (p = c ? Ht(c) : window, k = p.nodeName && p.nodeName.toLowerCase(), k === "select" || k === "input" && p.type === "file") var S = Jf;
        else if (hi(p)) if (na) S = td;
        else {
          S = bf;
          var C = qf;
        }
        else (k = p.nodeName) && k.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = ed);
        if (S && (S = S(e, c))) {
          ta(m, S, n, h);
          break e;
        }
        C && C(e, p, c), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && au(p, "number", p.value);
      }
      switch (C = c ? Ht(c) : window, e) {
        case "focusin":
          (hi(C) || C.contentEditable === "true") && ($t = C, Su = c, Dn = null);
          break;
        case "focusout":
          Dn = Su = $t = null;
          break;
        case "mousedown":
          Eu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Eu = !1, ki(m, n, h);
          break;
        case "selectionchange":
          if (ld) break;
        case "keydown":
        case "keyup":
          ki(m, n, h);
      }
      var _;
      if (mo) e: {
        switch (e) {
          case "compositionstart":
            var P = "onCompositionStart";
            break e;
          case "compositionend":
            P = "onCompositionEnd";
            break e;
          case "compositionupdate":
            P = "onCompositionUpdate";
            break e;
        }
        P = void 0;
      }
      else At ? bs(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (qs && n.locale !== "ko" && (At || P !== "onCompositionStart" ? P === "onCompositionEnd" && At && (_ = Js()) : (rt = h, co = "value" in rt ? rt.value : rt.textContent, At = !0)), C = Kr(c, P), 0 < C.length && (P = new fi(P, e, null, n, h), m.push({ event: P, listeners: C }), _ ? P.data = _ : (_ = ea(n), _ !== null && (P.data = _)))), (_ = Kf ? Yf(e, n) : Xf(e, n)) && (c = Kr(c, "onBeforeInput"), 0 < c.length && (h = new fi("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: c }), h.data = _));
    }
    da(m, t);
  });
}
function Kn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Kr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, u = l.stateNode;
    l.tag === 5 && u !== null && (l = u, u = An(e, n), u != null && r.unshift(Kn(e, u, l)), u = An(e, t), u != null && r.push(Kn(e, u, l))), e = e.return;
  }
  return r;
}
function It(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xi(e, t, n, r, l) {
  for (var u = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, s = i.alternate, c = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 && c !== null && (i = c, l ? (s = An(n, u), s != null && o.unshift(Kn(n, s, i))) : l || (s = An(n, u), s != null && o.push(Kn(n, s, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var sd = /\r\n?/g, ad = /\u0000|\uFFFD/g;
function Ci(e) {
  return (typeof e == "string" ? e : "" + e).replace(sd, `
`).replace(ad, "");
}
function wr(e, t, n) {
  if (t = Ci(t), Ci(e) !== t && n) throw Error(g(425));
}
function Yr() {
}
var xu = null, Cu = null;
function _u(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Pu = typeof setTimeout == "function" ? setTimeout : void 0, cd = typeof clearTimeout == "function" ? clearTimeout : void 0, _i = typeof Promise == "function" ? Promise : void 0, fd = typeof queueMicrotask == "function" ? queueMicrotask : typeof _i < "u" ? function(e) {
  return _i.resolve(null).then(e).catch(dd);
} : Pu;
function dd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Kl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Hn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Hn(t);
}
function st(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Pi(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var fn = Math.random().toString(36).slice(2), Ue = "__reactFiber$" + fn, Yn = "__reactProps$" + fn, Ye = "__reactContainer$" + fn, Nu = "__reactEvents$" + fn, pd = "__reactListeners$" + fn, md = "__reactHandles$" + fn;
function Et(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ye] || n[Ue]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Pi(e); e !== null; ) {
        if (n = e[Ue]) return n;
        e = Pi(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function lr(e) {
  return e = e[Ue] || e[Ye], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Ht(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function hl(e) {
  return e[Yn] || null;
}
var zu = [], Bt = -1;
function vt(e) {
  return { current: e };
}
function F(e) {
  0 > Bt || (e.current = zu[Bt], zu[Bt] = null, Bt--);
}
function j(e, t) {
  Bt++, zu[Bt] = e.current, e.current = t;
}
var mt = {}, ue = vt(mt), de = vt(!1), Lt = mt;
function nn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return mt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, u;
  for (u in n) l[u] = t[u];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function pe(e) {
  return e = e.childContextTypes, e != null;
}
function Xr() {
  F(de), F(ue);
}
function Ni(e, t, n) {
  if (ue.current !== mt) throw Error(g(168));
  j(ue, t), j(de, n);
}
function ma(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, Jc(e) || "Unknown", l));
  return V({}, n, r);
}
function Gr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mt, Lt = ue.current, j(ue, e), j(de, de.current), !0;
}
function zi(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n ? (e = ma(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, F(de), F(ue), j(ue, e)) : F(de), j(de, n);
}
var He = null, vl = !1, Yl = !1;
function ha(e) {
  He === null ? He = [e] : He.push(e);
}
function hd(e) {
  vl = !0, ha(e);
}
function yt() {
  if (!Yl && He !== null) {
    Yl = !0;
    var e = 0, t = O;
    try {
      var n = He;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      He = null, vl = !1;
    } catch (l) {
      throw He !== null && (He = He.slice(e + 1)), $s(oo, yt), l;
    } finally {
      O = t, Yl = !1;
    }
  }
  return null;
}
var Wt = [], Qt = 0, Zr = null, Jr = 0, Ee = [], xe = 0, Tt = null, Be = 1, We = "";
function kt(e, t) {
  Wt[Qt++] = Jr, Wt[Qt++] = Zr, Zr = e, Jr = t;
}
function va(e, t, n) {
  Ee[xe++] = Be, Ee[xe++] = We, Ee[xe++] = Tt, Tt = e;
  var r = Be;
  e = We;
  var l = 32 - Me(r) - 1;
  r &= ~(1 << l), n += 1;
  var u = 32 - Me(t) + l;
  if (30 < u) {
    var o = l - l % 5;
    u = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Be = 1 << 32 - Me(t) + l | n << l | r, We = u + e;
  } else Be = 1 << u | n << l | r, We = e;
}
function vo(e) {
  e.return !== null && (kt(e, 1), va(e, 1, 0));
}
function yo(e) {
  for (; e === Zr; ) Zr = Wt[--Qt], Wt[Qt] = null, Jr = Wt[--Qt], Wt[Qt] = null;
  for (; e === Tt; ) Tt = Ee[--xe], Ee[xe] = null, We = Ee[--xe], Ee[xe] = null, Be = Ee[--xe], Ee[xe] = null;
}
var ye = null, ve = null, U = !1, De = null;
function ya(e, t) {
  var n = Ce(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Li(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = st(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, ye = e, ve = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Tt !== null ? { id: Be, overflow: We } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ce(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, ye = e, ve = null, !0) : !1;
    default:
      return !1;
  }
}
function Lu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Tu(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!Li(e, t)) {
        if (Lu(e)) throw Error(g(418));
        t = st(n.nextSibling);
        var r = ye;
        t && Li(e, t) ? ya(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, ye = e);
      }
    } else {
      if (Lu(e)) throw Error(g(418));
      e.flags = e.flags & -4097 | 2, U = !1, ye = e;
    }
  }
}
function Ti(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ye = e;
}
function kr(e) {
  if (e !== ye) return !1;
  if (!U) return Ti(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !_u(e.type, e.memoizedProps)), t && (t = ve)) {
    if (Lu(e)) throw ga(), Error(g(418));
    for (; t; ) ya(e, t), t = st(t.nextSibling);
  }
  if (Ti(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = st(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? st(e.stateNode.nextSibling) : null;
  return !0;
}
function ga() {
  for (var e = ve; e; ) e = st(e.nextSibling);
}
function rn() {
  ve = ye = null, U = !1;
}
function go(e) {
  De === null ? De = [e] : De.push(e);
}
var vd = Ze.ReactCurrentBatchConfig;
function Sn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r, u = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(o) {
        var i = l.refs;
        o === null ? delete i[u] : i[u] = o;
      }, t._stringRef = u, t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function Sr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Ri(e) {
  var t = e._init;
  return t(e._payload);
}
function wa(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [a], f.flags |= 16) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), a = a.sibling;
    return null;
  }
  function r(f, a) {
    for (f = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? f.set(a.key, a) : f.set(a.index, a), a = a.sibling;
    return f;
  }
  function l(f, a) {
    return f = dt(f, a), f.index = 0, f.sibling = null, f;
  }
  function u(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function i(f, a, d, y) {
    return a === null || a.tag !== 6 ? (a = eu(d, f.mode, y), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, y) {
    var S = d.type;
    return S === Ut ? h(f, a, d.props.children, y, d.key) : a !== null && (a.elementType === S || typeof S == "object" && S !== null && S.$$typeof === be && Ri(S) === a.type) ? (y = l(a, d.props), y.ref = Sn(f, a, d), y.return = f, y) : (y = Fr(d.type, d.key, d.props, null, f.mode, y), y.ref = Sn(f, a, d), y.return = f, y);
  }
  function c(f, a, d, y) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = tu(d, f.mode, y), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, y, S) {
    return a === null || a.tag !== 7 ? (a = zt(d, f.mode, y, S), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = eu("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case cr:
          return d = Fr(a.type, a.key, a.props, null, f.mode, d), d.ref = Sn(f, null, a), d.return = f, d;
        case Ft:
          return a = tu(a, f.mode, d), a.return = f, a;
        case be:
          var y = a._init;
          return m(f, y(a._payload), d);
      }
      if (_n(a) || vn(a)) return a = zt(a, f.mode, d, null), a.return = f, a;
      Sr(f, a);
    }
    return null;
  }
  function p(f, a, d, y) {
    var S = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return S !== null ? null : i(f, a, "" + d, y);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case cr:
          return d.key === S ? s(f, a, d, y) : null;
        case Ft:
          return d.key === S ? c(f, a, d, y) : null;
        case be:
          return S = d._init, p(
            f,
            a,
            S(d._payload),
            y
          );
      }
      if (_n(d) || vn(d)) return S !== null ? null : h(f, a, d, y, null);
      Sr(f, d);
    }
    return null;
  }
  function k(f, a, d, y, S) {
    if (typeof y == "string" && y !== "" || typeof y == "number") return f = f.get(d) || null, i(a, f, "" + y, S);
    if (typeof y == "object" && y !== null) {
      switch (y.$$typeof) {
        case cr:
          return f = f.get(y.key === null ? d : y.key) || null, s(a, f, y, S);
        case Ft:
          return f = f.get(y.key === null ? d : y.key) || null, c(a, f, y, S);
        case be:
          var C = y._init;
          return k(f, a, d, C(y._payload), S);
      }
      if (_n(y) || vn(y)) return f = f.get(d) || null, h(a, f, y, S, null);
      Sr(a, y);
    }
    return null;
  }
  function v(f, a, d, y) {
    for (var S = null, C = null, _ = a, P = a = 0, B = null; _ !== null && P < d.length; P++) {
      _.index > P ? (B = _, _ = null) : B = _.sibling;
      var R = p(f, _, d[P], y);
      if (R === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && R.alternate === null && t(f, _), a = u(R, a, P), C === null ? S = R : C.sibling = R, C = R, _ = B;
    }
    if (P === d.length) return n(f, _), U && kt(f, P), S;
    if (_ === null) {
      for (; P < d.length; P++) _ = m(f, d[P], y), _ !== null && (a = u(_, a, P), C === null ? S = _ : C.sibling = _, C = _);
      return U && kt(f, P), S;
    }
    for (_ = r(f, _); P < d.length; P++) B = k(_, f, P, d[P], y), B !== null && (e && B.alternate !== null && _.delete(B.key === null ? P : B.key), a = u(B, a, P), C === null ? S = B : C.sibling = B, C = B);
    return e && _.forEach(function(ze) {
      return t(f, ze);
    }), U && kt(f, P), S;
  }
  function w(f, a, d, y) {
    var S = vn(d);
    if (typeof S != "function") throw Error(g(150));
    if (d = S.call(d), d == null) throw Error(g(151));
    for (var C = S = null, _ = a, P = a = 0, B = null, R = d.next(); _ !== null && !R.done; P++, R = d.next()) {
      _.index > P ? (B = _, _ = null) : B = _.sibling;
      var ze = p(f, _, R.value, y);
      if (ze === null) {
        _ === null && (_ = B);
        break;
      }
      e && _ && ze.alternate === null && t(f, _), a = u(ze, a, P), C === null ? S = ze : C.sibling = ze, C = ze, _ = B;
    }
    if (R.done) return n(
      f,
      _
    ), U && kt(f, P), S;
    if (_ === null) {
      for (; !R.done; P++, R = d.next()) R = m(f, R.value, y), R !== null && (a = u(R, a, P), C === null ? S = R : C.sibling = R, C = R);
      return U && kt(f, P), S;
    }
    for (_ = r(f, _); !R.done; P++, R = d.next()) R = k(_, f, P, R.value, y), R !== null && (e && R.alternate !== null && _.delete(R.key === null ? P : R.key), a = u(R, a, P), C === null ? S = R : C.sibling = R, C = R);
    return e && _.forEach(function(dn) {
      return t(f, dn);
    }), U && kt(f, P), S;
  }
  function z(f, a, d, y) {
    if (typeof d == "object" && d !== null && d.type === Ut && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case cr:
          e: {
            for (var S = d.key, C = a; C !== null; ) {
              if (C.key === S) {
                if (S = d.type, S === Ut) {
                  if (C.tag === 7) {
                    n(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (C.elementType === S || typeof S == "object" && S !== null && S.$$typeof === be && Ri(S) === C.type) {
                  n(f, C.sibling), a = l(C, d.props), a.ref = Sn(f, C, d), a.return = f, f = a;
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Ut ? (a = zt(d.props.children, f.mode, y, d.key), a.return = f, f = a) : (y = Fr(d.type, d.key, d.props, null, f.mode, y), y.ref = Sn(f, a, d), y.return = f, f = y);
          }
          return o(f);
        case Ft:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = tu(d, f.mode, y), a.return = f, f = a;
          }
          return o(f);
        case be:
          return C = d._init, z(f, a, C(d._payload), y);
      }
      if (_n(d)) return v(f, a, d, y);
      if (vn(d)) return w(f, a, d, y);
      Sr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = eu(d, f.mode, y), a.return = f, f = a), o(f)) : n(f, a);
  }
  return z;
}
var ln = wa(!0), ka = wa(!1), qr = vt(null), br = null, Kt = null, wo = null;
function ko() {
  wo = Kt = br = null;
}
function So(e) {
  var t = qr.current;
  F(qr), e._currentValue = t;
}
function Ru(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function bt(e, t) {
  br = e, wo = Kt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null);
}
function Pe(e) {
  var t = e._currentValue;
  if (wo !== e) if (e = { context: e, memoizedValue: t, next: null }, Kt === null) {
    if (br === null) throw Error(g(308));
    Kt = e, br.dependencies = { lanes: 0, firstContext: e };
  } else Kt = Kt.next = e;
  return t;
}
var xt = null;
function Eo(e) {
  xt === null ? xt = [e] : xt.push(e);
}
function Sa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Eo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Xe(e, r);
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function xo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ea(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Qe(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function at(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, D & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Xe(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Eo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Xe(e, n);
}
function Rr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n);
  }
}
function Di(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, u = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        u === null ? l = u = o : u = u.next = o, n = n.next;
      } while (n !== null);
      u === null ? l = u = t : u = u.next = t;
    } else l = u = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function el(e, t, n, r) {
  var l = e.updateQueue;
  et = !1;
  var u = l.firstBaseUpdate, o = l.lastBaseUpdate, i = l.shared.pending;
  if (i !== null) {
    l.shared.pending = null;
    var s = i, c = s.next;
    s.next = null, o === null ? u = c : o.next = c, o = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, i = h.lastBaseUpdate, i !== o && (i === null ? h.firstBaseUpdate = c : i.next = c, h.lastBaseUpdate = s));
  }
  if (u !== null) {
    var m = l.baseState;
    o = 0, h = c = s = null, i = u;
    do {
      var p = i.lane, k = i.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: k,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var v = e, w = i;
          switch (p = t, k = n, w.tag) {
            case 1:
              if (v = w.payload, typeof v == "function") {
                m = v.call(k, m, p);
                break e;
              }
              m = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = w.payload, p = typeof v == "function" ? v.call(k, m, p) : v, p == null) break e;
              m = V({}, m, p);
              break e;
            case 2:
              et = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [i] : p.push(i));
      } else k = { eventTime: k, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (c = h = k, s = m) : h = h.next = k, o |= p;
      if (i = i.next, i === null) {
        if (i = l.shared.pending, i === null) break;
        p = i, i = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else u === null && (l.shared.lanes = 0);
    Dt |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Mi(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(g(191, l));
      l.call(r);
    }
  }
}
var ur = {}, $e = vt(ur), Xn = vt(ur), Gn = vt(ur);
function Ct(e) {
  if (e === ur) throw Error(g(174));
  return e;
}
function Co(e, t) {
  switch (j(Gn, t), j(Xn, e), j($e, ur), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : fu(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = fu(t, e);
  }
  F($e), j($e, t);
}
function un() {
  F($e), F(Xn), F(Gn);
}
function xa(e) {
  Ct(Gn.current);
  var t = Ct($e.current), n = fu(t, e.type);
  t !== n && (j(Xn, e), j($e, n));
}
function _o(e) {
  Xn.current === e && (F($e), F(Xn));
}
var A = vt(0);
function tl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      t.child.return = t, t = t.child;
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    t.sibling.return = t.return, t = t.sibling;
  }
  return null;
}
var Xl = [];
function Po() {
  for (var e = 0; e < Xl.length; e++) Xl[e]._workInProgressVersionPrimary = null;
  Xl.length = 0;
}
var Dr = Ze.ReactCurrentDispatcher, Gl = Ze.ReactCurrentBatchConfig, Rt = 0, $ = null, X = null, J = null, nl = !1, Mn = !1, Zn = 0, yd = 0;
function ne() {
  throw Error(g(321));
}
function No(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!je(e[n], t[n])) return !1;
  return !0;
}
function zo(e, t, n, r, l, u) {
  if (Rt = u, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Dr.current = e === null || e.memoizedState === null ? Sd : Ed, e = n(r, l), Mn) {
    u = 0;
    do {
      if (Mn = !1, Zn = 0, 25 <= u) throw Error(g(301));
      u += 1, J = X = null, t.updateQueue = null, Dr.current = xd, e = n(r, l);
    } while (Mn);
  }
  if (Dr.current = rl, t = X !== null && X.next !== null, Rt = 0, J = X = $ = null, nl = !1, t) throw Error(g(300));
  return e;
}
function Lo() {
  var e = Zn !== 0;
  return Zn = 0, e;
}
function Fe() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? $.memoizedState = J = e : J = J.next = e, J;
}
function Ne() {
  if (X === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = J === null ? $.memoizedState : J.next;
  if (t !== null) J = t, X = e;
  else {
    if (e === null) throw Error(g(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, J === null ? $.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function Jn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Zl(e) {
  var t = Ne(), n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = X, l = r.baseQueue, u = n.pending;
  if (u !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = u.next, u.next = o;
    }
    r.baseQueue = l = u, n.pending = null;
  }
  if (l !== null) {
    u = l.next, r = r.baseState;
    var i = o = null, s = null, c = u;
    do {
      var h = c.lane;
      if ((Rt & h) === h) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (i = s = m, o = r) : s = s.next = m, $.lanes |= h, Dt |= h;
      }
      c = c.next;
    } while (c !== null && c !== u);
    s === null ? o = r : s.next = i, je(r, t.memoizedState) || (fe = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      u = l.lane, $.lanes |= u, Dt |= u, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Jl(e) {
  var t = Ne(), n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, u = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      u = e(u, o.action), o = o.next;
    while (o !== l);
    je(u, t.memoizedState) || (fe = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
  }
  return [u, r];
}
function Ca() {
}
function _a(e, t) {
  var n = $, r = Ne(), l = t(), u = !je(r.memoizedState, l);
  if (u && (r.memoizedState = l, fe = !0), r = r.queue, To(za.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, qn(9, Na.bind(null, n, r, l, t), void 0, null), q === null) throw Error(g(349));
    Rt & 30 || Pa(n, t, l);
  }
  return l;
}
function Pa(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Na(e, t, n, r) {
  t.value = n, t.getSnapshot = r, La(t) && Ta(e);
}
function za(e, t, n) {
  return n(function() {
    La(t) && Ta(e);
  });
}
function La(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !je(e, n);
  } catch {
    return !0;
  }
}
function Ta(e) {
  var t = Xe(e, 1);
  t !== null && Oe(t, e, 1, -1);
}
function Oi(e) {
  var t = Fe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jn, lastRenderedState: e }, t.queue = e, e = e.dispatch = kd.bind(null, $, e), [t.memoizedState, e];
}
function qn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ra() {
  return Ne().memoizedState;
}
function Mr(e, t, n, r) {
  var l = Fe();
  $.flags |= e, l.memoizedState = qn(1 | t, n, void 0, r === void 0 ? null : r);
}
function yl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var u = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (u = o.destroy, r !== null && No(r, o.deps)) {
      l.memoizedState = qn(t, n, u, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = qn(1 | t, n, u, r);
}
function ji(e, t) {
  return Mr(8390656, 8, e, t);
}
function To(e, t) {
  return yl(2048, 8, e, t);
}
function Da(e, t) {
  return yl(4, 2, e, t);
}
function Ma(e, t) {
  return yl(4, 4, e, t);
}
function Oa(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function ja(e, t, n) {
  return n = n != null ? n.concat([e]) : null, yl(4, 4, Oa.bind(null, t, e), n);
}
function Ro() {
}
function Ia(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && No(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Fa(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && No(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ua(e, t, n) {
  return Rt & 21 ? (je(n, t) || (n = Bs(), $.lanes |= n, Dt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n);
}
function gd(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Gl.transition;
  Gl.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, Gl.transition = r;
  }
}
function Aa() {
  return Ne().memoizedState;
}
function wd(e, t, n) {
  var r = ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, $a(e)) Va(t, n);
  else if (n = Sa(e, t, n, r), n !== null) {
    var l = ie();
    Oe(n, e, r, l), Ha(n, t, r);
  }
}
function kd(e, t, n) {
  var r = ft(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if ($a(e)) Va(t, l);
  else {
    var u = e.alternate;
    if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
      var o = t.lastRenderedState, i = u(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, je(i, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, Eo(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Sa(e, t, l, r), n !== null && (l = ie(), Oe(n, e, r, l), Ha(n, t, r));
  }
}
function $a(e) {
  var t = e.alternate;
  return e === $ || t !== null && t === $;
}
function Va(e, t) {
  Mn = nl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ha(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, io(e, n);
  }
}
var rl = { readContext: Pe, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, Sd = { readContext: Pe, useCallback: function(e, t) {
  return Fe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Pe, useEffect: ji, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Mr(
    4194308,
    4,
    Oa.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Mr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Mr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Fe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Fe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = wd.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Fe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Oi, useDebugValue: Ro, useDeferredValue: function(e) {
  return Fe().memoizedState = e;
}, useTransition: function() {
  var e = Oi(!1), t = e[0];
  return e = gd.bind(null, e[1]), Fe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = $, l = Fe();
  if (U) {
    if (n === void 0) throw Error(g(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(g(349));
    Rt & 30 || Pa(r, t, n);
  }
  l.memoizedState = n;
  var u = { value: n, getSnapshot: t };
  return l.queue = u, ji(za.bind(
    null,
    r,
    u,
    e
  ), [e]), r.flags |= 2048, qn(9, Na.bind(null, r, u, n, t), void 0, null), n;
}, useId: function() {
  var e = Fe(), t = q.identifierPrefix;
  if (U) {
    var n = We, r = Be;
    n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = yd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ed = {
  readContext: Pe,
  useCallback: Ia,
  useContext: Pe,
  useEffect: To,
  useImperativeHandle: ja,
  useInsertionEffect: Da,
  useLayoutEffect: Ma,
  useMemo: Fa,
  useReducer: Zl,
  useRef: Ra,
  useState: function() {
    return Zl(Jn);
  },
  useDebugValue: Ro,
  useDeferredValue: function(e) {
    var t = Ne();
    return Ua(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Zl(Jn)[0], t = Ne().memoizedState;
    return [e, t];
  },
  useMutableSource: Ca,
  useSyncExternalStore: _a,
  useId: Aa,
  unstable_isNewReconciler: !1
}, xd = { readContext: Pe, useCallback: Ia, useContext: Pe, useEffect: To, useImperativeHandle: ja, useInsertionEffect: Da, useLayoutEffect: Ma, useMemo: Fa, useReducer: Jl, useRef: Ra, useState: function() {
  return Jl(Jn);
}, useDebugValue: Ro, useDeferredValue: function(e) {
  var t = Ne();
  return X === null ? t.memoizedState = e : Ua(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Jl(Jn)[0], t = Ne().memoizedState;
  return [e, t];
}, useMutableSource: Ca, useSyncExternalStore: _a, useId: Aa, unstable_isNewReconciler: !1 };
function Te(e, t) {
  if (e && e.defaultProps) {
    t = V({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Du(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var gl = { isMounted: function(e) {
  return (e = e._reactInternals) ? jt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = ft(e), u = Qe(r, l);
  u.payload = t, n != null && (u.callback = n), t = at(e, u, l), t !== null && (Oe(t, e, l, r), Rr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = ft(e), u = Qe(r, l);
  u.tag = 1, u.payload = t, n != null && (u.callback = n), t = at(e, u, l), t !== null && (Oe(t, e, l, r), Rr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ie(), r = ft(e), l = Qe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = at(e, l, r), t !== null && (Oe(t, e, r, n), Rr(t, e, r));
} };
function Ii(e, t, n, r, l, u, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : t.prototype && t.prototype.isPureReactComponent ? !Wn(n, r) || !Wn(l, u) : !0;
}
function Ba(e, t, n) {
  var r = !1, l = mt, u = t.contextType;
  return typeof u == "object" && u !== null ? u = Pe(u) : (l = pe(t) ? Lt : ue.current, r = t.contextTypes, u = (r = r != null) ? nn(e, l) : mt), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = gl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
}
function Fi(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && gl.enqueueReplaceState(t, t.state, null);
}
function Mu(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, xo(e);
  var u = t.contextType;
  typeof u == "object" && u !== null ? l.context = Pe(u) : (u = pe(t) ? Lt : ue.current, l.context = nn(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Du(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && gl.enqueueReplaceState(l, l.state, null), el(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function on(e, t) {
  try {
    var n = "", r = t;
    do
      n += Zc(r), r = r.return;
    while (r);
    var l = n;
  } catch (u) {
    l = `
Error generating stack: ` + u.message + `
` + u.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ql(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ou(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Cd = typeof WeakMap == "function" ? WeakMap : Map;
function Wa(e, t, n) {
  n = Qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ul || (ul = !0, Wu = r), Ou(e, t);
  }, n;
}
function Qa(e, t, n) {
  n = Qe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ou(e, t);
    };
  }
  var u = e.stateNode;
  return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
    Ou(e, t), typeof r != "function" && (ct === null ? ct = /* @__PURE__ */ new Set([this]) : ct.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ui(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Cd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Ud.bind(null, e, t, n), t.then(e, e));
}
function Ai(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function $i(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1), t.tag = 2, at(n, t, 1))), n.lanes |= 1), e);
}
var _d = Ze.ReactCurrentOwner, fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? ka(t, null, n, r) : ln(t, e.child, n, r);
}
function Vi(e, t, n, r, l) {
  n = n.render;
  var u = t.ref;
  return bt(t, l), r = zo(e, t, n, r, u, l), n = Lo(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (U && n && vo(t), t.flags |= 1, oe(e, t, r, l), t.child);
}
function Hi(e, t, n, r, l) {
  if (e === null) {
    var u = n.type;
    return typeof u == "function" && !Ao(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Ka(e, t, u, r, l)) : (e = Fr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (u = e.child, !(e.lanes & l)) {
    var o = u.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Wn, n(o, r) && e.ref === t.ref) return Ge(e, t, l);
  }
  return t.flags |= 1, e = dt(u, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Ka(e, t, n, r, l) {
  if (e !== null) {
    var u = e.memoizedProps;
    if (Wn(u, r) && e.ref === t.ref) if (fe = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
    else return t.lanes = e.lanes, Ge(e, t, l);
  }
  return ju(e, t, n, r, l);
}
function Ya(e, t, n) {
  var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, j(Xt, he), he |= n;
  else {
    if (!(n & 1073741824)) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, j(Xt, he), he |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, j(Xt, he), he |= r;
  }
  else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, j(Xt, he), he |= r;
  return oe(e, t, l, n), t.child;
}
function Xa(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function ju(e, t, n, r, l) {
  var u = pe(n) ? Lt : ue.current;
  return u = nn(t, u), bt(t, l), n = zo(e, t, n, r, u, l), r = Lo(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (U && r && vo(t), t.flags |= 1, oe(e, t, n, l), t.child);
}
function Bi(e, t, n, r, l) {
  if (pe(n)) {
    var u = !0;
    Gr(t);
  } else u = !1;
  if (bt(t, l), t.stateNode === null) Or(e, t), Ba(t, n, r), Mu(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var s = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Pe(c) : (c = pe(n) ? Lt : ue.current, c = nn(t, c));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== c) && Fi(t, o, r, c), et = !1;
    var p = t.memoizedState;
    o.state = p, el(t, r, o, l), s = t.memoizedState, i !== r || p !== s || de.current || et ? (typeof h == "function" && (Du(t, n, h, r), s = t.memoizedState), (i = et || Ii(t, n, i, r, p, s, c)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = c, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Ea(e, t), i = t.memoizedProps, c = t.type === t.elementType ? i : Te(t.type, i), o.props = c, m = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Pe(s) : (s = pe(n) ? Lt : ue.current, s = nn(t, s));
    var k = n.getDerivedStateFromProps;
    (h = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== m || p !== s) && Fi(t, o, r, s), et = !1, p = t.memoizedState, o.state = p, el(t, r, o, l);
    var v = t.memoizedState;
    i !== m || p !== v || de.current || et ? (typeof k == "function" && (Du(t, n, k, r), v = t.memoizedState), (c = et || Ii(t, n, c, r, p, v, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), o.props = r, o.state = v, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Iu(e, t, n, r, u, l);
}
function Iu(e, t, n, r, l, u) {
  Xa(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && zi(t, n, !1), Ge(e, t, u);
  r = t.stateNode, _d.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = ln(t, e.child, null, u), t.child = ln(t, null, i, u)) : oe(e, t, i, u), t.memoizedState = r.state, l && zi(t, n, !0), t.child;
}
function Ga(e) {
  var t = e.stateNode;
  t.pendingContext ? Ni(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ni(e, t.context, !1), Co(e, t.containerInfo);
}
function Wi(e, t, n, r, l) {
  return rn(), go(l), t.flags |= 256, oe(e, t, n, r), t.child;
}
var Fu = { dehydrated: null, treeContext: null, retryLane: 0 };
function Uu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Za(e, t, n) {
  var r = t.pendingProps, l = A.current, u = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), j(A, l & 1), e === null)
    return Tu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, o = { mode: "hidden", children: o }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = Sl(o, r, 0, null), e = zt(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Uu(n), t.memoizedState = Fu, e) : Do(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return Pd(e, t, o, r, i, l, n);
  if (u) {
    u = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = dt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = dt(i, u) : (u = zt(u, o, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, o = e.child.memoizedState, o = o === null ? Uu(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~n, t.memoizedState = Fu, r;
  }
  return u = e.child, e = u.sibling, r = dt(u, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Do(e, t) {
  return t = Sl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Er(e, t, n, r) {
  return r !== null && go(r), ln(t, e.child, null, n), e = Do(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Pd(e, t, n, r, l, u, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ql(Error(g(422))), Er(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = Sl({ mode: "visible", children: r.children }, l, 0, null), u = zt(u, l, o, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, t.mode & 1 && ln(t, e.child, null, o), t.child.memoizedState = Uu(o), t.memoizedState = Fu, u);
  if (!(t.mode & 1)) return Er(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, u = Error(g(419)), r = ql(u, r, void 0), Er(e, t, o, r);
  }
  if (i = (o & e.childLanes) !== 0, fe || i) {
    if (r = q, r !== null) {
      switch (o & -o) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Xe(e, l), Oe(r, e, l, -1));
    }
    return Uo(), r = ql(Error(g(421))), Er(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Ad.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, ve = st(l.nextSibling), ye = t, U = !0, De = null, e !== null && (Ee[xe++] = Be, Ee[xe++] = We, Ee[xe++] = Tt, Be = e.id, We = e.overflow, Tt = t), t = Do(t, r.children), t.flags |= 4096, t);
}
function Qi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ru(e.return, t, n);
}
function bl(e, t, n, r, l) {
  var u = e.memoizedState;
  u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
}
function Ja(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, u = r.tail;
  if (oe(e, t, r.children, n), r = A.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Qi(e, n, t);
      else if (e.tag === 19) Qi(e, n, t);
      else if (e.child !== null) {
        e.child.return = e, e = e.child;
        continue;
      }
      if (e === t) break e;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) break e;
        e = e.return;
      }
      e.sibling.return = e.return, e = e.sibling;
    }
    r &= 1;
  }
  if (j(A, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && tl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), bl(t, !1, l, n, u);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && tl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      bl(t, !0, n, null, u);
      break;
    case "together":
      bl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Or(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function Ge(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Dt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (e = t.child, n = dt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = dt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Nd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ga(t), rn();
      break;
    case 5:
      xa(t);
      break;
    case 1:
      pe(t.type) && Gr(t);
      break;
    case 4:
      Co(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      j(qr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (j(A, A.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Za(e, t, n) : (j(A, A.current & 1), e = Ge(e, t, n), e !== null ? e.sibling : null);
      j(A, A.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ja(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), j(A, A.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ya(e, t, n);
  }
  return Ge(e, t, n);
}
var qa, Au, ba, ec;
qa = function(e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      n.child.return = n, n = n.child;
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
  }
};
Au = function() {
};
ba = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Ct($e.current);
    var u = null;
    switch (n) {
      case "input":
        l = iu(e, l), r = iu(e, r), u = [];
        break;
      case "select":
        l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), u = [];
        break;
      case "textarea":
        l = cu(e, l), r = cu(e, r), u = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Yr);
    }
    du(n, r);
    var o;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var i = l[c];
      for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Fn.hasOwnProperty(c) ? u || (u = []) : (u = u || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (i = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== i && (s != null || i != null)) if (c === "style") if (i) {
        for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (u || (u = []), u.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (u = u || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Fn.hasOwnProperty(c) ? (s != null && c === "onScroll" && I("scroll", e), u || i === s || (u = [])) : (u = u || []).push(c, s));
    }
    n && (u = u || []).push("style", n);
    var c = u;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ec = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function En(e, t) {
  if (!U) switch (e.tailMode) {
    case "hidden":
      t = e.tail;
      for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
      n === null ? e.tail = null : n.sibling = null;
      break;
    case "collapsed":
      n = e.tail;
      for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
      r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
  }
}
function re(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function zd(e, t, n) {
  var r = t.pendingProps;
  switch (yo(t), t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return re(t), null;
    case 1:
      return pe(t.type) && Xr(), re(t), null;
    case 3:
      return r = t.stateNode, un(), F(de), F(ue), Po(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (kr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, De !== null && (Yu(De), De = null))), Au(e, t), re(t), null;
    case 5:
      _o(t);
      var l = Ct(Gn.current);
      if (n = t.type, e !== null && t.stateNode != null) ba(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return re(t), null;
        }
        if (e = Ct($e.current), kr(t)) {
          r = t.stateNode, n = t.type;
          var u = t.memoizedProps;
          switch (r[Ue] = t, r[Yn] = u, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              I("cancel", r), I("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              I("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Nn.length; l++) I(Nn[l], r);
              break;
            case "source":
              I("error", r);
              break;
            case "img":
            case "image":
            case "link":
              I(
                "error",
                r
              ), I("load", r);
              break;
            case "details":
              I("toggle", r);
              break;
            case "input":
              bo(r, u), I("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!u.multiple }, I("invalid", r);
              break;
            case "textarea":
              ti(r, u), I("invalid", r);
          }
          du(n, u), l = null;
          for (var o in u) if (u.hasOwnProperty(o)) {
            var i = u[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && wr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && wr(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Fn.hasOwnProperty(o) && i != null && o === "onScroll" && I("scroll", r);
          }
          switch (n) {
            case "input":
              fr(r), ei(r, u, !0);
              break;
            case "textarea":
              fr(r), ni(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof u.onClick == "function" && (r.onclick = Yr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = zs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ue] = t, e[Yn] = r, qa(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = pu(n, r), n) {
              case "dialog":
                I("cancel", e), I("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                I("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Nn.length; l++) I(Nn[l], e);
                l = r;
                break;
              case "source":
                I("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                I(
                  "error",
                  e
                ), I("load", e), l = r;
                break;
              case "details":
                I("toggle", e), l = r;
                break;
              case "input":
                bo(e, r), l = iu(e, r), I("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), I("invalid", e);
                break;
              case "textarea":
                ti(e, r), l = cu(e, r), I("invalid", e);
                break;
              default:
                l = r;
            }
            du(n, l), i = l;
            for (u in i) if (i.hasOwnProperty(u)) {
              var s = i[u];
              u === "style" ? Rs(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ls(e, s)) : u === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Un(e, s) : typeof s == "number" && Un(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Fn.hasOwnProperty(u) ? s != null && u === "onScroll" && I("scroll", e) : s != null && to(e, u, s, o));
            }
            switch (n) {
              case "input":
                fr(e), ei(e, r, !1);
                break;
              case "textarea":
                fr(e), ni(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + pt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, u = r.value, u != null ? Gt(e, !!r.multiple, u, !1) : r.defaultValue != null && Gt(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Yr);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
      }
      return re(t), null;
    case 6:
      if (e && t.stateNode != null) ec(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (n = Ct(Gn.current), Ct($e.current), kr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ue] = t, (u = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
            case 3:
              wr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && wr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          u && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ue] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (F(A), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128)) ga(), rn(), t.flags |= 98560, u = !1;
        else if (u = kr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!u) throw Error(g(318));
            if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(g(317));
            u[Ue] = t;
          } else rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          re(t), u = !1;
        } else De !== null && (Yu(De), De = null), u = !0;
        if (!u) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || A.current & 1 ? G === 0 && (G = 3) : Uo())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return un(), Au(e, t), e === null && Qn(t.stateNode.containerInfo), re(t), null;
    case 10:
      return So(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Xr(), re(t), null;
    case 19:
      if (F(A), u = t.memoizedState, u === null) return re(t), null;
      if (r = (t.flags & 128) !== 0, o = u.rendering, o === null) if (r) En(u, !1);
      else {
        if (G !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = tl(e), o !== null) {
            for (t.flags |= 128, En(u, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return j(A, A.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        u.tail !== null && Q() > sn && (t.flags |= 128, r = !0, En(u, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = tl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), En(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !U) return re(t), null;
        } else 2 * Q() - u.renderingStartTime > sn && n !== 1073741824 && (t.flags |= 128, r = !0, En(u, !1), t.lanes = 4194304);
        u.isBackwards ? (o.sibling = t.child, t.child = o) : (n = u.last, n !== null ? n.sibling = o : t.child = o, u.last = o);
      }
      return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Q(), t.sibling = null, n = A.current, j(A, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
    case 22:
    case 23:
      return Fo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function Ld(e, t) {
  switch (yo(t), t.tag) {
    case 1:
      return pe(t.type) && Xr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return un(), F(de), F(ue), Po(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return _o(t), null;
    case 13:
      if (F(A), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(g(340));
        rn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return F(A), null;
    case 4:
      return un(), null;
    case 10:
      return So(t.type._context), null;
    case 22:
    case 23:
      return Fo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xr = !1, le = !1, Td = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function Yt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    H(e, t, r);
  }
  else n.current = null;
}
function $u(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Ki = !1;
function Rd(e, t) {
  if (xu = Wr, e = ua(), ho(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, u = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, u.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, i = -1, s = -1, c = 0, h = 0, m = e, p = null;
        t: for (; ; ) {
          for (var k; m !== n || l !== 0 && m.nodeType !== 3 || (i = o + l), m !== u || r !== 0 && m.nodeType !== 3 || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (k = m.firstChild) !== null; )
            p = m, m = k;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++c === l && (i = o), p === u && ++h === r && (s = o), (k = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = k;
        }
        n = i === -1 || s === -1 ? null : { start: i, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Cu = { focusedElem: e, selectionRange: n }, Wr = !1, E = t; E !== null; ) if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
  else for (; E !== null; ) {
    t = E;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var w = v.memoizedProps, z = v.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Te(t.type, w), z);
            f.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var d = t.stateNode.containerInfo;
          d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(g(163));
      }
    } catch (y) {
      H(t, t.return, y);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, E = e;
      break;
    }
    E = t.return;
  }
  return v = Ki, Ki = !1, v;
}
function On(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var u = l.destroy;
        l.destroy = void 0, u !== void 0 && $u(t, n, u);
      }
      l = l.next;
    } while (l !== r);
  }
}
function wl(e, t) {
  if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
    var n = t = t.next;
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Vu(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : t.current = e;
  }
}
function tc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, tc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ue], delete t[Yn], delete t[Nu], delete t[pd], delete t[md])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function nc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Yi(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || nc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Hu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Yr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Hu(e, t, n), e = e.sibling; e !== null; ) Hu(e, t, n), e = e.sibling;
}
function Bu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Bu(e, t, n), e = e.sibling; e !== null; ) Bu(e, t, n), e = e.sibling;
}
var b = null, Re = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) rc(e, t, n), n = n.sibling;
}
function rc(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function") try {
    Ae.onCommitFiberUnmount(fl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      le || Yt(n, t);
    case 6:
      var r = b, l = Re;
      b = null, Je(e, t, n), b = r, Re = l, b !== null && (Re ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null && (Re ? (e = b, n = n.stateNode, e.nodeType === 8 ? Kl(e.parentNode, n) : e.nodeType === 1 && Kl(e, n), Hn(e)) : Kl(b, n.stateNode));
      break;
    case 4:
      r = b, l = Re, b = n.stateNode.containerInfo, Re = !0, Je(e, t, n), b = r, Re = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var u = l, o = u.destroy;
          u = u.tag, o !== void 0 && (u & 2 || u & 4) && $u(n, t, o), l = l.next;
        } while (l !== r);
      }
      Je(e, t, n);
      break;
    case 1:
      if (!le && (Yt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (i) {
        H(n, t, i);
      }
      Je(e, t, n);
      break;
    case 21:
      Je(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (le = (r = le) || n.memoizedState !== null, Je(e, t, n), le = r) : Je(e, t, n);
      break;
    default:
      Je(e, t, n);
  }
}
function Xi(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Td()), t.forEach(function(r) {
      var l = $d.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var u = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            b = i.stateNode, Re = !1;
            break e;
          case 3:
            b = i.stateNode.containerInfo, Re = !0;
            break e;
          case 4:
            b = i.stateNode.containerInfo, Re = !0;
            break e;
        }
        i = i.return;
      }
      if (b === null) throw Error(g(160));
      rc(u, o, l), b = null, Re = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      H(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) lc(t, e), t = t.sibling;
}
function lc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(t, e), Ie(e), r & 4) {
        try {
          On(3, e, e.return), wl(3, e);
        } catch (w) {
          H(e, e.return, w);
        }
        try {
          On(5, e, e.return);
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 1:
      Le(t, e), Ie(e), r & 512 && n !== null && Yt(n, n.return);
      break;
    case 5:
      if (Le(t, e), Ie(e), r & 512 && n !== null && Yt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Un(l, "");
        } catch (w) {
          H(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var u = e.memoizedProps, o = n !== null ? n.memoizedProps : u, i = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          i === "input" && u.type === "radio" && u.name != null && Ps(l, u), pu(i, o);
          var c = pu(i, u);
          for (o = 0; o < s.length; o += 2) {
            var h = s[o], m = s[o + 1];
            h === "style" ? Rs(l, m) : h === "dangerouslySetInnerHTML" ? Ls(l, m) : h === "children" ? Un(l, m) : to(l, h, m, c);
          }
          switch (i) {
            case "input":
              su(l, u);
              break;
            case "textarea":
              Ns(l, u);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!u.multiple;
              var k = u.value;
              k != null ? Gt(l, !!u.multiple, k, !1) : p !== !!u.multiple && (u.defaultValue != null ? Gt(
                l,
                !!u.multiple,
                u.defaultValue,
                !0
              ) : Gt(l, !!u.multiple, u.multiple ? [] : "", !1));
          }
          l[Yn] = u;
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Le(t, e), Ie(e), r & 4) {
        if (e.stateNode === null) throw Error(g(162));
        l = e.stateNode, u = e.memoizedProps;
        try {
          l.nodeValue = u;
        } catch (w) {
          H(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Le(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Hn(t.containerInfo);
      } catch (w) {
        H(e, e.return, w);
      }
      break;
    case 4:
      Le(t, e), Ie(e);
      break;
    case 13:
      Le(t, e), Ie(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (jo = Q())), r & 4 && Xi(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (c = le) || h, Le(t, e), le = c) : Le(t, e), Ie(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (E = e, h = e.child; h !== null; ) {
          for (m = E = h; E !== null; ) {
            switch (p = E, k = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                On(4, p, p.return);
                break;
              case 1:
                Yt(p, p.return);
                var v = p.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (w) {
                    H(r, n, w);
                  }
                }
                break;
              case 5:
                Yt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Zi(m);
                  continue;
                }
            }
            k !== null ? (k.return = p, E = k) : Zi(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, c ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = m.stateNode, s = m.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Ts("display", o));
              } catch (w) {
                H(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (w) {
              H(e, e.return, w);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), m = m.return;
          }
          h === m && (h = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Le(t, e), Ie(e), r & 4 && Xi(e);
      break;
    case 21:
      break;
    default:
      Le(
        t,
        e
      ), Ie(e);
  }
}
function Ie(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (nc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(g(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Un(l, ""), r.flags &= -33);
          var u = Yi(e);
          Bu(e, u, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = Yi(e);
          Hu(e, i, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      H(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Dd(e, t, n) {
  E = e, uc(e);
}
function uc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, u = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || xr;
      if (!o) {
        var i = l.alternate, s = i !== null && i.memoizedState !== null || le;
        i = xr;
        var c = le;
        if (xr = o, (le = s) && !c) for (E = l; E !== null; ) o = E, s = o.child, o.tag === 22 && o.memoizedState !== null ? Ji(l) : s !== null ? (s.return = o, E = s) : Ji(l);
        for (; u !== null; ) E = u, uc(u), u = u.sibling;
        E = l, xr = i, le = c;
      }
      Gi(e);
    } else l.subtreeFlags & 8772 && u !== null ? (u.return = l, E = u) : Gi(e);
  }
}
function Gi(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            le || wl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !le) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Te(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var u = t.updateQueue;
            u !== null && Mi(t, u, r);
            break;
          case 3:
            var o = t.updateQueue;
            if (o !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Mi(t, o, n);
            }
            break;
          case 5:
            var i = t.stateNode;
            if (n === null && t.flags & 4) {
              n = i;
              var s = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  s.autoFocus && n.focus();
                  break;
                case "img":
                  s.src && (n.src = s.src);
              }
            }
            break;
          case 6:
            break;
          case 4:
            break;
          case 12:
            break;
          case 13:
            if (t.memoizedState === null) {
              var c = t.alternate;
              if (c !== null) {
                var h = c.memoizedState;
                if (h !== null) {
                  var m = h.dehydrated;
                  m !== null && Hn(m);
                }
              }
            }
            break;
          case 19:
          case 17:
          case 21:
          case 22:
          case 23:
          case 25:
            break;
          default:
            throw Error(g(163));
        }
        le || t.flags & 512 && Vu(t);
      } catch (p) {
        H(t, t.return, p);
      }
    }
    if (t === e) {
      E = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function Zi(e) {
  for (; E !== null; ) {
    var t = E;
    if (t === e) {
      E = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, E = n;
      break;
    }
    E = t.return;
  }
}
function Ji(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            wl(4, t);
          } catch (s) {
            H(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              H(t, l, s);
            }
          }
          var u = t.return;
          try {
            Vu(t);
          } catch (s) {
            H(t, u, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Vu(t);
          } catch (s) {
            H(t, o, s);
          }
      }
    } catch (s) {
      H(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var i = t.sibling;
    if (i !== null) {
      i.return = t.return, E = i;
      break;
    }
    E = t.return;
  }
}
var Md = Math.ceil, ll = Ze.ReactCurrentDispatcher, Mo = Ze.ReactCurrentOwner, _e = Ze.ReactCurrentBatchConfig, D = 0, q = null, Y = null, ee = 0, he = 0, Xt = vt(0), G = 0, bn = null, Dt = 0, kl = 0, Oo = 0, jn = null, ce = null, jo = 0, sn = 1 / 0, Ve = null, ul = !1, Wu = null, ct = null, Cr = !1, lt = null, ol = 0, In = 0, Qu = null, jr = -1, Ir = 0;
function ie() {
  return D & 6 ? Q() : jr !== -1 ? jr : jr = Q();
}
function ft(e) {
  return e.mode & 1 ? D & 2 && ee !== 0 ? ee & -ee : vd.transition !== null ? (Ir === 0 && (Ir = Bs()), Ir) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Zs(e.type)), e) : 1;
}
function Oe(e, t, n, r) {
  if (50 < In) throw In = 0, Qu = null, Error(g(185));
  nr(e, n, r), (!(D & 2) || e !== q) && (e === q && (!(D & 2) && (kl |= n), G === 4 && nt(e, ee)), me(e, r), n === 1 && D === 0 && !(t.mode & 1) && (sn = Q() + 500, vl && yt()));
}
function me(e, t) {
  var n = e.callbackNode;
  vf(e, t);
  var r = Br(e, e === q ? ee : 0);
  if (r === 0) n !== null && oi(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && oi(n), t === 1) e.tag === 0 ? hd(qi.bind(null, e)) : ha(qi.bind(null, e)), fd(function() {
      !(D & 6) && yt();
    }), n = null;
    else {
      switch (Ws(r)) {
        case 1:
          n = oo;
          break;
        case 4:
          n = Vs;
          break;
        case 16:
          n = Hr;
          break;
        case 536870912:
          n = Hs;
          break;
        default:
          n = Hr;
      }
      n = pc(n, oc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function oc(e, t) {
  if (jr = -1, Ir = 0, D & 6) throw Error(g(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = Br(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = il(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var u = sc();
    (q !== e || ee !== t) && (Ve = null, sn = Q() + 500, Nt(e, t));
    do
      try {
        Id();
        break;
      } catch (i) {
        ic(e, i);
      }
    while (!0);
    ko(), ll.current = u, D = l, Y !== null ? t = 0 : (q = null, ee = 0, t = G);
  }
  if (t !== 0) {
    if (t === 2 && (l = gu(e), l !== 0 && (r = l, t = Ku(e, l))), t === 1) throw n = bn, Nt(e, 0), nt(e, r), me(e, Q()), n;
    if (t === 6) nt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Od(l) && (t = il(e, r), t === 2 && (u = gu(e), u !== 0 && (r = u, t = Ku(e, u))), t === 1)) throw n = bn, Nt(e, 0), nt(e, r), me(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          St(e, ce, Ve);
          break;
        case 3:
          if (nt(e, r), (r & 130023424) === r && (t = jo + 500 - Q(), 10 < t)) {
            if (Br(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ie(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Pu(St.bind(null, e, ce, Ve), t);
            break;
          }
          St(e, ce, Ve);
          break;
        case 4:
          if (nt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Me(r);
            u = 1 << o, o = t[o], o > l && (l = o), r &= ~u;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Md(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Pu(St.bind(null, e, ce, Ve), r);
            break;
          }
          St(e, ce, Ve);
          break;
        case 5:
          St(e, ce, Ve);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return me(e, Q()), e.callbackNode === n ? oc.bind(null, e) : null;
}
function Ku(e, t) {
  var n = jn;
  return e.current.memoizedState.isDehydrated && (Nt(e, t).flags |= 256), e = il(e, t), e !== 2 && (t = ce, ce = n, t !== null && Yu(t)), e;
}
function Yu(e) {
  ce === null ? ce = e : ce.push.apply(ce, e);
}
function Od(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], u = l.getSnapshot;
        l = l.value;
        try {
          if (!je(u(), l)) return !1;
        } catch {
          return !1;
        }
      }
    }
    if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }
  return !0;
}
function nt(e, t) {
  for (t &= ~Oo, t &= ~kl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Me(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function qi(e) {
  if (D & 6) throw Error(g(327));
  en();
  var t = Br(e, 0);
  if (!(t & 1)) return me(e, Q()), null;
  var n = il(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = gu(e);
    r !== 0 && (t = r, n = Ku(e, r));
  }
  if (n === 1) throw n = bn, Nt(e, 0), nt(e, t), me(e, Q()), n;
  if (n === 6) throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, St(e, ce, Ve), me(e, Q()), null;
}
function Io(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (sn = Q() + 500, vl && yt());
  }
}
function Mt(e) {
  lt !== null && lt.tag === 0 && !(D & 6) && en();
  var t = D;
  D |= 1;
  var n = _e.transition, r = O;
  try {
    if (_e.transition = null, O = 1, e) return e();
  } finally {
    O = r, _e.transition = n, D = t, !(D & 6) && yt();
  }
}
function Fo() {
  he = Xt.current, F(Xt);
}
function Nt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, cd(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (yo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Xr();
        break;
      case 3:
        un(), F(de), F(ue), Po();
        break;
      case 5:
        _o(r);
        break;
      case 4:
        un();
        break;
      case 13:
        F(A);
        break;
      case 19:
        F(A);
        break;
      case 10:
        So(r.type._context);
        break;
      case 22:
      case 23:
        Fo();
    }
    n = n.return;
  }
  if (q = e, Y = e = dt(e.current, null), ee = he = t, G = 0, bn = null, Oo = kl = Dt = 0, ce = jn = null, xt !== null) {
    for (t = 0; t < xt.length; t++) if (n = xt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, u = n.pending;
      if (u !== null) {
        var o = u.next;
        u.next = l, r.next = o;
      }
      n.pending = r;
    }
    xt = null;
  }
  return e;
}
function ic(e, t) {
  do {
    var n = Y;
    try {
      if (ko(), Dr.current = rl, nl) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        nl = !1;
      }
      if (Rt = 0, J = X = $ = null, Mn = !1, Zn = 0, Mo.current = null, n === null || n.return === null) {
        G = 1, bn = t, Y = null;
        break;
      }
      e: {
        var u = e, o = n.return, i = n, s = t;
        if (t = ee, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, h = i, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var k = Ai(o);
          if (k !== null) {
            k.flags &= -257, $i(k, o, i, u, t), k.mode & 1 && Ui(u, c, t), t = k, s = c;
            var v = t.updateQueue;
            if (v === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), t.updateQueue = w;
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ui(u, c, t), Uo();
              break e;
            }
            s = Error(g(426));
          }
        } else if (U && i.mode & 1) {
          var z = Ai(o);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256), $i(z, o, i, u, t), go(on(s, i));
            break e;
          }
        }
        u = s = on(s, i), G !== 4 && (G = 2), jn === null ? jn = [u] : jn.push(u), u = o;
        do {
          switch (u.tag) {
            case 3:
              u.flags |= 65536, t &= -t, u.lanes |= t;
              var f = Wa(u, s, t);
              Di(u, f);
              break e;
            case 1:
              i = s;
              var a = u.type, d = u.stateNode;
              if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ct === null || !ct.has(d)))) {
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var y = Qa(u, i, t);
                Di(u, y);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      cc(n);
    } catch (S) {
      t = S, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function sc() {
  var e = ll.current;
  return ll.current = rl, e === null ? rl : e;
}
function Uo() {
  (G === 0 || G === 3 || G === 2) && (G = 4), q === null || !(Dt & 268435455) && !(kl & 268435455) || nt(q, ee);
}
function il(e, t) {
  var n = D;
  D |= 2;
  var r = sc();
  (q !== e || ee !== t) && (Ve = null, Nt(e, t));
  do
    try {
      jd();
      break;
    } catch (l) {
      ic(e, l);
    }
  while (!0);
  if (ko(), D = n, ll.current = r, Y !== null) throw Error(g(261));
  return q = null, ee = 0, G;
}
function jd() {
  for (; Y !== null; ) ac(Y);
}
function Id() {
  for (; Y !== null && !of(); ) ac(Y);
}
function ac(e) {
  var t = dc(e.alternate, e, he);
  e.memoizedProps = e.pendingProps, t === null ? cc(e) : Y = t, Mo.current = null;
}
function cc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ld(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        G = 6, Y = null;
        return;
      }
    } else if (n = zd(n, t, he), n !== null) {
      Y = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Y = t;
      return;
    }
    Y = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function St(e, t, n) {
  var r = O, l = _e.transition;
  try {
    _e.transition = null, O = 1, Fd(e, t, n, r);
  } finally {
    _e.transition = l, O = r;
  }
  return null;
}
function Fd(e, t, n, r) {
  do
    en();
  while (lt !== null);
  if (D & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(g(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var u = n.lanes | n.childLanes;
  if (yf(e, u), e === q && (Y = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Cr || (Cr = !0, pc(Hr, function() {
    return en(), null;
  })), u = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || u) {
    u = _e.transition, _e.transition = null;
    var o = O;
    O = 1;
    var i = D;
    D |= 4, Mo.current = null, Rd(e, n), lc(n, e), rd(Cu), Wr = !!xu, Cu = xu = null, e.current = n, Dd(n), sf(), D = i, O = o, _e.transition = u;
  } else e.current = n;
  if (Cr && (Cr = !1, lt = e, ol = l), u = e.pendingLanes, u === 0 && (ct = null), ff(n.stateNode), me(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ul) throw ul = !1, e = Wu, Wu = null, e;
  return ol & 1 && e.tag !== 0 && en(), u = e.pendingLanes, u & 1 ? e === Qu ? In++ : (In = 0, Qu = e) : In = 0, yt(), null;
}
function en() {
  if (lt !== null) {
    var e = Ws(ol), t = _e.transition, n = O;
    try {
      if (_e.transition = null, O = 16 > e ? 16 : e, lt === null) var r = !1;
      else {
        if (e = lt, lt = null, ol = 0, D & 6) throw Error(g(331));
        var l = D;
        for (D |= 4, E = e.current; E !== null; ) {
          var u = E, o = u.child;
          if (E.flags & 16) {
            var i = u.deletions;
            if (i !== null) {
              for (var s = 0; s < i.length; s++) {
                var c = i[s];
                for (E = c; E !== null; ) {
                  var h = E;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      On(8, h, u);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, E = m;
                  else for (; E !== null; ) {
                    h = E;
                    var p = h.sibling, k = h.return;
                    if (tc(h), h === c) {
                      E = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = k, E = p;
                      break;
                    }
                    E = k;
                  }
                }
              }
              var v = u.alternate;
              if (v !== null) {
                var w = v.child;
                if (w !== null) {
                  v.child = null;
                  do {
                    var z = w.sibling;
                    w.sibling = null, w = z;
                  } while (w !== null);
                }
              }
              E = u;
            }
          }
          if (u.subtreeFlags & 2064 && o !== null) o.return = u, E = o;
          else e: for (; E !== null; ) {
            if (u = E, u.flags & 2048) switch (u.tag) {
              case 0:
              case 11:
              case 15:
                On(9, u, u.return);
            }
            var f = u.sibling;
            if (f !== null) {
              f.return = u.return, E = f;
              break e;
            }
            E = u.return;
          }
        }
        var a = e.current;
        for (E = a; E !== null; ) {
          o = E;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, E = d;
          else e: for (o = a; E !== null; ) {
            if (i = E, i.flags & 2048) try {
              switch (i.tag) {
                case 0:
                case 11:
                case 15:
                  wl(9, i);
              }
            } catch (S) {
              H(i, i.return, S);
            }
            if (i === o) {
              E = null;
              break e;
            }
            var y = i.sibling;
            if (y !== null) {
              y.return = i.return, E = y;
              break e;
            }
            E = i.return;
          }
        }
        if (D = l, yt(), Ae && typeof Ae.onPostCommitFiberRoot == "function") try {
          Ae.onPostCommitFiberRoot(fl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, _e.transition = t;
    }
  }
  return !1;
}
function bi(e, t, n) {
  t = on(n, t), t = Wa(e, t, 1), e = at(e, t, 1), t = ie(), e !== null && (nr(e, 1, t), me(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) bi(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      bi(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ct === null || !ct.has(r))) {
        e = on(n, e), e = Qa(t, e, 1), t = at(t, e, 1), e = ie(), t !== null && (nr(t, 1, e), me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Ud(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ie(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (G === 4 || G === 3 && (ee & 130023424) === ee && 500 > Q() - jo ? Nt(e, 0) : Oo |= n), me(e, t);
}
function fc(e, t) {
  t === 0 && (e.mode & 1 ? (t = mr, mr <<= 1, !(mr & 130023424) && (mr = 4194304)) : t = 1);
  var n = ie();
  e = Xe(e, t), e !== null && (nr(e, t, n), me(e, n));
}
function Ad(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), fc(e, n);
}
function $d(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode, l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(g(314));
  }
  r !== null && r.delete(t), fc(e, n);
}
var dc;
dc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, Nd(e, t, n);
    fe = !!(e.flags & 131072);
  }
  else fe = !1, U && t.flags & 1048576 && va(t, Jr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Or(e, t), e = t.pendingProps;
      var l = nn(t, ue.current);
      bt(t, n), l = zo(null, t, r, e, l, n);
      var u = Lo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (u = !0, Gr(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, xo(t), l.updater = gl, t.stateNode = l, l._reactInternals = t, Mu(t, r, e, n), t = Iu(null, t, r, !0, u, n)) : (t.tag = 0, U && u && vo(t), oe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Or(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Hd(r), e = Te(r, e), l) {
          case 0:
            t = ju(null, t, r, e, n);
            break e;
          case 1:
            t = Bi(null, t, r, e, n);
            break e;
          case 11:
            t = Vi(null, t, r, e, n);
            break e;
          case 14:
            t = Hi(null, t, r, Te(r.type, e), n);
            break e;
        }
        throw Error(g(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), ju(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Bi(e, t, r, l, n);
    case 3:
      e: {
        if (Ga(t), e === null) throw Error(g(387));
        r = t.pendingProps, u = t.memoizedState, l = u.element, Ea(e, t), el(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
          l = on(Error(g(423)), t), t = Wi(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = on(Error(g(424)), t), t = Wi(e, t, r, n, l);
          break e;
        } else for (ve = st(t.stateNode.containerInfo.firstChild), ye = t, U = !0, De = null, n = ka(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (rn(), r === l) {
            t = Ge(e, t, n);
            break e;
          }
          oe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return xa(t), e === null && Tu(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, _u(r, l) ? o = null : u !== null && _u(r, u) && (t.flags |= 32), Xa(e, t), oe(e, t, o, n), t.child;
    case 6:
      return e === null && Tu(t), null;
    case 13:
      return Za(e, t, n);
    case 4:
      return Co(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ln(t, null, r, n) : oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Vi(e, t, r, l, n);
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, o = l.value, j(qr, r._currentValue), r._currentValue = o, u !== null) if (je(u.value, o)) {
          if (u.children === l.children && !de.current) {
            t = Ge(e, t, n);
            break e;
          }
        } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
          var i = u.dependencies;
          if (i !== null) {
            o = u.child;
            for (var s = i.firstContext; s !== null; ) {
              if (s.context === r) {
                if (u.tag === 1) {
                  s = Qe(-1, n & -n), s.tag = 2;
                  var c = u.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), c.pending = s;
                  }
                }
                u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), Ru(
                  u.return,
                  n,
                  t
                ), i.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (u.tag === 10) o = u.type === t.type ? null : u.child;
          else if (u.tag === 18) {
            if (o = u.return, o === null) throw Error(g(341));
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Ru(o, n, t), o = u.sibling;
          } else o = u.child;
          if (o !== null) o.return = u;
          else for (o = u; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (u = o.sibling, u !== null) {
              u.return = o.return, o = u;
              break;
            }
            o = o.return;
          }
          u = o;
        }
        oe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, bt(t, n), l = Pe(l), r = r(l), t.flags |= 1, oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Te(r, t.pendingProps), l = Te(r.type, l), Hi(e, t, r, l, n);
    case 15:
      return Ka(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Te(r, l), Or(e, t), t.tag = 1, pe(r) ? (e = !0, Gr(t)) : e = !1, bt(t, n), Ba(t, r, l), Mu(t, r, l, n), Iu(null, t, r, !0, e, n);
    case 19:
      return Ja(e, t, n);
    case 22:
      return Ya(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function pc(e, t) {
  return $s(e, t);
}
function Vd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ce(e, t, n, r) {
  return new Vd(e, t, n, r);
}
function Ao(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Hd(e) {
  if (typeof e == "function") return Ao(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ro) return 11;
    if (e === lo) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ce(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Fr(e, t, n, r, l, u) {
  var o = 2;
  if (r = e, typeof e == "function") Ao(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Ut:
      return zt(n.children, l, u, t);
    case no:
      o = 8, l |= 8;
      break;
    case ru:
      return e = Ce(12, n, t, l | 2), e.elementType = ru, e.lanes = u, e;
    case lu:
      return e = Ce(13, n, t, l), e.elementType = lu, e.lanes = u, e;
    case uu:
      return e = Ce(19, n, t, l), e.elementType = uu, e.lanes = u, e;
    case xs:
      return Sl(n, l, u, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ss:
          o = 10;
          break e;
        case Es:
          o = 9;
          break e;
        case ro:
          o = 11;
          break e;
        case lo:
          o = 14;
          break e;
        case be:
          o = 16, r = null;
          break e;
      }
      throw Error(g(130, e == null ? e : typeof e, ""));
  }
  return t = Ce(o, n, t, l), t.elementType = e, t.type = r, t.lanes = u, t;
}
function zt(e, t, n, r) {
  return e = Ce(7, e, r, t), e.lanes = n, e;
}
function Sl(e, t, n, r) {
  return e = Ce(22, e, r, t), e.elementType = xs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function eu(e, t, n) {
  return e = Ce(6, e, null, t), e.lanes = n, e;
}
function tu(e, t, n) {
  return t = Ce(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Bd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = jl(0), this.expirationTimes = jl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = jl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function $o(e, t, n, r, l, u, o, i, s) {
  return e = new Bd(e, t, n, i, s), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = Ce(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, xo(u), e;
}
function Wd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ft, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function mc(e) {
  if (!e) return mt;
  e = e._reactInternals;
  e: {
    if (jt(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(g(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return ma(e, n, t);
  }
  return t;
}
function hc(e, t, n, r, l, u, o, i, s) {
  return e = $o(n, r, !0, e, l, u, o, i, s), e.context = mc(null), n = e.current, r = ie(), l = ft(n), u = Qe(r, l), u.callback = t ?? null, at(n, u, l), e.current.lanes = l, nr(e, l, r), me(e, r), e;
}
function El(e, t, n, r) {
  var l = t.current, u = ie(), o = ft(l);
  return n = mc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qe(u, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = at(l, t, o), e !== null && (Oe(e, l, o, u), Rr(e, l, o)), o;
}
function sl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function es(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Vo(e, t) {
  es(e, t), (e = e.alternate) && es(e, t);
}
function Qd() {
  return null;
}
var vc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ho(e) {
  this._internalRoot = e;
}
xl.prototype.render = Ho.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  El(e, t, null, null);
};
xl.prototype.unmount = Ho.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mt(function() {
      El(null, e, null, null);
    }), t[Ye] = null;
  }
};
function xl(e) {
  this._internalRoot = e;
}
xl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Ys();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++) ;
    tt.splice(n, 0, e), n === 0 && Gs(e);
  }
};
function Bo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Cl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ts() {
}
function Kd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var c = sl(o);
        u.call(c);
      };
    }
    var o = hc(t, r, e, 0, null, !1, !1, "", ts);
    return e._reactRootContainer = o, e[Ye] = o.current, Qn(e.nodeType === 8 ? e.parentNode : e), Mt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var c = sl(s);
      i.call(c);
    };
  }
  var s = $o(e, 0, !1, null, null, !1, !1, "", ts);
  return e._reactRootContainer = s, e[Ye] = s.current, Qn(e.nodeType === 8 ? e.parentNode : e), Mt(function() {
    El(t, s, n, r);
  }), s;
}
function _l(e, t, n, r, l) {
  var u = n._reactRootContainer;
  if (u) {
    var o = u;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var s = sl(o);
        i.call(s);
      };
    }
    El(t, o, e, l);
  } else o = Kd(n, t, e, l, r);
  return sl(o);
}
Qs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Pn(t.pendingLanes);
        n !== 0 && (io(t, n | 1), me(t, Q()), !(D & 6) && (sn = Q() + 500, yt()));
      }
      break;
    case 13:
      Mt(function() {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ie();
          Oe(r, e, 1, l);
        }
      }), Vo(e, 1);
  }
};
so = function(e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ie();
      Oe(t, e, 134217728, n);
    }
    Vo(e, 134217728);
  }
};
Ks = function(e) {
  if (e.tag === 13) {
    var t = ft(e), n = Xe(e, t);
    if (n !== null) {
      var r = ie();
      Oe(n, e, t, r);
    }
    Vo(e, t);
  }
};
Ys = function() {
  return O;
};
Xs = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
hu = function(e, t, n) {
  switch (t) {
    case "input":
      if (su(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = hl(r);
            if (!l) throw Error(g(90));
            _s(r), su(r, l);
          }
        }
      }
      break;
    case "textarea":
      Ns(e, n);
      break;
    case "select":
      t = n.value, t != null && Gt(e, !!n.multiple, t, !1);
  }
};
Os = Io;
js = Mt;
var Yd = { usingClientEntryPoint: !1, Events: [lr, Ht, hl, Ds, Ms, Io] }, xn = { findFiberByHostInstance: Et, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Xd = { bundleType: xn.bundleType, version: xn.version, rendererPackageName: xn.rendererPackageName, rendererConfig: xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Us(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xn.findFiberByHostInstance || Qd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var _r = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!_r.isDisabled && _r.supportsFiber) try {
    fl = _r.inject(Xd), Ae = _r;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yd;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Bo(t)) throw Error(g(200));
  return Wd(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Bo(e)) throw Error(g(299));
  var n = !1, r = "", l = vc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = $o(e, 1, !1, null, null, n, !1, r, l), e[Ye] = t.current, Qn(e.nodeType === 8 ? e.parentNode : e), new Ho(t);
};
we.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = Us(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return Mt(e);
};
we.hydrate = function(e, t, n) {
  if (!Cl(t)) throw Error(g(200));
  return _l(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Bo(e)) throw Error(g(405));
  var r = n != null && n.hydratedSources || null, l = !1, u = "", o = vc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = hc(t, null, e, 1, n ?? null, l, !1, u, o), e[Ye] = t.current, Qn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new xl(t);
};
we.render = function(e, t, n) {
  if (!Cl(t)) throw Error(g(200));
  return _l(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!Cl(e)) throw Error(g(40));
  return e._reactRootContainer ? (Mt(function() {
    _l(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ye] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = Io;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Cl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return _l(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function yc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(yc);
    } catch (e) {
      console.error(e);
    }
}
yc(), ys.exports = we;
var Gd = ys.exports, ns = Gd;
Ur.createRoot = ns.createRoot, Ur.hydrateRoot = ns.hydrateRoot;
const Zd = ({ onSubmit: e }) => {
  const [t, n] = Se.useState(""), [r, l] = Se.useState(""), u = Se.useMemo(() => t.trim().length === 0, [t]), o = (i) => {
    i.preventDefault();
    const s = { name: t.trim(), note: r.trim() };
    console.log("[ponkotu-system] SimpleForm submit", s), e == null || e(s), l("");
  };
  return /* @__PURE__ */ M.jsxs("form", { onSubmit: o, className: "ponkotu-form", children: [
    /* @__PURE__ */ M.jsxs("label", { className: "ponkotu-form__label", children: [
      "名前",
      /* @__PURE__ */ M.jsx(
        "input",
        {
          className: "ponkotu-form__input",
          type: "text",
          value: t,
          placeholder: "キャラクター名など",
          onChange: (i) => n(i.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ M.jsxs("label", { className: "ponkotu-form__label", children: [
      "メモ",
      /* @__PURE__ */ M.jsx(
        "textarea",
        {
          className: "ponkotu-form__textarea",
          value: r,
          placeholder: "送信したいメモ",
          onChange: (i) => l(i.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ M.jsx("div", { className: "ponkotu-form__footer", children: /* @__PURE__ */ M.jsx("button", { type: "submit", disabled: u, children: "送信" }) })
  ] });
}, Jd = "ponkotu-system";
var _t;
class qd extends Application {
  constructor() {
    super(...arguments);
    sr(this, _t, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-react-form",
      title: "React フォーム",
      template: `modules/${Jd}/templates/react-form.html`,
      width: 420,
      height: 400,
      resizable: !0
    });
  }
  activateListeners(n) {
    var l;
    super.activateListeners(n);
    const r = (l = n[0]) == null ? void 0 : l.querySelector(
      ".ponkotu-react-root"
    );
    if (!r) {
      console.warn("[ponkotu-system] ReactFormApplication: container not found");
      return;
    }
    hn(this, _t, Ur.createRoot(r)), mn(this, _t).render(
      /* @__PURE__ */ M.jsx(
        Zd,
        {
          onSubmit: (u) => {
            var i;
            const o = u.note ? `${u.name} からの送信: ${u.note}` : `${u.name} が送信しました。`;
            ChatMessage.create({
              speaker: ChatMessage.getSpeaker(),
              content: o
            }), (i = ui.notifications) == null || i.info("メッセージを送信しました");
          }
        }
      )
    );
  }
  async close(n) {
    var r;
    return (r = mn(this, _t)) == null || r.unmount(), hn(this, _t, null), super.close(n);
  }
}
_t = new WeakMap();
const K = (e, t, n = 0) => {
  var l, u, o;
  return ((o = (u = (l = e.system) == null ? void 0 : l.attributes) == null ? void 0 : u[t]) == null ? void 0 : o.value) ?? n;
}, bd = (e) => {
  const t = K(e, "stackDamageUp", 0), n = K(e, "stackDamageDown", 0), r = !!K(e, "directcheck", 0);
  return t * 10 - n * 10 + (r ? 50 : 0);
}, ep = (e) => {
  let t = 0, n = !1;
  !!K(e, "criticalcheck", 0) && (t += 20);
  const l = K(e, "stackpoise", 0);
  if (l > 0) {
    const u = Math.min(l * 5, 100);
    Math.random() * 100 < u && (t += 20, n = !0);
  }
  return { special: t, poiseCritical: n };
}, tp = (e) => {
  const t = K(e, "stackProtection", 0), n = K(e, "stackVulnerable", 0);
  return t * 10 - n * 10;
}, np = (e) => {
  const n = !!K(e, "isPlayer", 0) ? K(e, "resist", 0) : K(e, "resistEnemy", 0);
  return K(e, "constitution", 0) <= 0 ? -100 : n;
}, rp = (e) => {
  const n = !!K(e, "isPlayer", 0) ? K(e, "confResist", 0) : K(e, "econfResistEnemy", 0);
  return K(e, "constitution", 0) <= 0 ? -100 : n;
}, lp = (e) => {
  const t = bd(e.attacker), { special: n, poiseCritical: r } = ep(e.attacker), l = tp(e.receiver), u = np(e.receiver), o = rp(e.receiver), i = (100 + t - l) / 100, s = (100 + n - u) / 100, c = (100 + n - o) / 100, h = e.baseDamage * Math.max(i, 0) * Math.max(s, 0), m = e.baseDamage * Math.max(i, 0) * Math.max(c, 0);
  return {
    attackerNormalPercentage: t,
    attackerSpecialPercentage: n,
    receiverNormalPercentage: l,
    receiverSpecialPercentage: u,
    receiverSpecialConfPercentage: o,
    normalRatio: i,
    specialRatio: s,
    specialConfRatio: c,
    dealDamage: h,
    dealConfDamage: m,
    poiseCritical: r
  };
}, up = async (e, t) => {
  const n = e.receiver, r = {};
  let l = K(n, "hp", 0), u = K(n, "barrier", 0), o = K(n, "constitution", 0), i = K(n, "san", 0);
  const s = K(n, "doubleconstitution", 0) === 1, c = Math.ceil(t.dealDamage), h = Math.ceil(t.dealConfDamage);
  let m = 0, p = 0;
  u > 0 && c > 0 && (m = Math.min(u, c), u -= m);
  const k = Math.max(c - m, 0);
  k > 0 && (l -= k, p = k);
  let v = 0;
  if (h > 0) {
    const d = h * (s ? 2 : 1);
    o = Math.max(o - d, 0), v = d;
  }
  let w = 0;
  const z = K(n, "stacksink", 0);
  if (z > 0) {
    let d = z;
    const y = Math.min(i, d);
    i -= y, d -= y, w += y, d > 0 && (l -= d, p += d), r["system.attributes.stacksink.value"] = Math.floor(z / 2);
  }
  r["system.attributes.hp.value"] = l, r["system.attributes.barrier.value"] = u, r["system.attributes.constitution.value"] = o, r["system.attributes.san.value"] = i, await n.update(r);
  const f = {
    ...t,
    barrierAbsorbed: m,
    hpDamageApplied: p,
    confDamageApplied: v,
    sanDamageApplied: w,
    hpAfter: l,
    barrierAfter: u,
    constitutionAfter: o,
    sanAfter: i
  }, a = `
${e.attacker.name} → ${e.receiver.name}<br/>
基礎ダメージ: ${e.baseDamage}<br/>
HPダメージ: ${p} (バリア吸収: ${m})<br/>
耐性限界ダメージ: ${v}<br/>
SANダメージ(沈潜): ${w}<br/>
`;
  return await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor: e.attacker }),
    content: a
  }), f;
}, op = async (e) => {
  const t = lp(e);
  return up(e, t);
}, qe = (e) => Number.isFinite(e) ? e.toLocaleString() : "-", rs = (e) => {
  var t, n;
  return ((t = e.find((r) => r.isPlayer)) == null ? void 0 : t.id) ?? ((n = e[0]) == null ? void 0 : n.id) ?? "";
}, ls = (e, t) => {
  var n, r;
  return ((n = e.find((l) => l.id !== t && !l.isPlayer)) == null ? void 0 : n.id) ?? ((r = e.find((l) => l.id !== t)) == null ? void 0 : r.id) ?? "";
}, us = (e) => `${e.name} ${e.isPlayer ? "(プレイヤー)" : "(エネミー)"}`, ip = ({ tokens: e }) => {
  const t = rs(e), [n, r] = Se.useState(t), [l, u] = Se.useState(
    ls(e, t)
  ), [o, i] = Se.useState(""), [s, c] = Se.useState(null), [h, m] = Se.useState(!1), p = Se.useMemo(() => {
    const v = /* @__PURE__ */ new Map();
    return e.forEach((w) => v.set(w.id, w)), v;
  }, [e]);
  Se.useEffect(() => {
    if (!e.length) {
      n && r(""), l && u("");
      return;
    }
    const v = new Set(e.map((f) => f.id));
    let w = n;
    (!w || !v.has(w)) && (w = rs(e));
    let z = l;
    (!z || !v.has(z) || z === w) && (z = ls(e, w)), w !== n && r(w), z !== l && u(z);
  }, [e, n, l]);
  const k = async () => {
    var f, a, d, y, S;
    const v = Number(o);
    if (!Number.isFinite(v) || v <= 0) {
      (f = ui.notifications) == null || f.error("ダメージに正の数値を入力してください");
      return;
    }
    const w = n ? p.get(n) : void 0, z = l ? p.get(l) : void 0;
    if (!w || !z) {
      (a = ui.notifications) == null || a.error("攻撃者と防御者を選択してください");
      return;
    }
    if (w.id === z.id) {
      (d = ui.notifications) == null || d.error("攻撃者と防御者は別のキャラクターを選んでください");
      return;
    }
    try {
      m(!0);
      const C = await op({
        attacker: w.actor,
        receiver: z.actor,
        baseDamage: v
      });
      c(C), (y = ui.notifications) == null || y.info(
        `${w.name} が ${z.name} にダメージを適用しました`
      );
    } catch (C) {
      console.error("[ponkotu-system] damage calc failed", C), (S = ui.notifications) == null || S.error("計算または適用に失敗しました。コンソールを確認してください。");
    } finally {
      m(!1);
    }
  };
  return /* @__PURE__ */ M.jsxs("div", { className: "ponkotu-damage", children: [
    /* @__PURE__ */ M.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ M.jsxs("label", { className: "ponkotu-damage__label", children: [
        "攻撃者",
        /* @__PURE__ */ M.jsxs(
          "select",
          {
            value: n,
            onChange: (v) => r(v.target.value),
            children: [
              /* @__PURE__ */ M.jsx("option", { value: "", children: "選択してください" }),
              e.map((v) => /* @__PURE__ */ M.jsx("option", { value: v.id, children: us(v) }, v.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ M.jsxs("label", { className: "ponkotu-damage__label", children: [
        "防御者",
        /* @__PURE__ */ M.jsxs(
          "select",
          {
            value: l,
            onChange: (v) => u(v.target.value),
            children: [
              /* @__PURE__ */ M.jsx("option", { value: "", children: "選択してください" }),
              e.map((v) => /* @__PURE__ */ M.jsx("option", { value: v.id, children: us(v) }, v.id))
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ M.jsxs("label", { className: "ponkotu-damage__label", children: [
      "基礎ダメージ",
      /* @__PURE__ */ M.jsx(
        "input",
        {
          type: "number",
          value: o,
          onChange: (v) => i(v.target.value),
          placeholder: "例: 12"
        }
      )
    ] }),
    /* @__PURE__ */ M.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ M.jsx("button", { onClick: k, disabled: h || e.length < 2, children: h ? "計算中..." : "計算して適用" }),
      e.length < 2 && /* @__PURE__ */ M.jsx("span", { className: "ponkotu-damage__hint", children: "※ トークンが2体以上必要です" })
    ] }),
    s && /* @__PURE__ */ M.jsxs("div", { className: "ponkotu-damage__result", children: [
      /* @__PURE__ */ M.jsxs("div", { children: [
        "通常倍率: 攻撃者 ",
        s.attackerNormalPercentage,
        "% / 防御者 ",
        " ",
        s.receiverNormalPercentage,
        "% → 係数 ",
        s.normalRatio.toFixed(2)
      ] }),
      /* @__PURE__ */ M.jsxs("div", { children: [
        "特殊倍率: 攻撃者 ",
        s.attackerSpecialPercentage,
        "%",
        s.poiseCritical ? " (呼吸クリティカル)" : "",
        " / 防御者 ",
        " ",
        s.receiverSpecialPercentage,
        "% → 係数 ",
        s.specialRatio.toFixed(2)
      ] }),
      /* @__PURE__ */ M.jsxs("div", { children: [
        "特殊(耐性限界)倍率: 防御者 ",
        s.receiverSpecialConfPercentage,
        "% → 係数 ",
        " ",
        s.specialConfRatio.toFixed(2)
      ] }),
      /* @__PURE__ */ M.jsxs("div", { children: [
        "HPダメージ: ",
        qe(s.hpDamageApplied),
        " （バリア吸収 ",
        " ",
        qe(s.barrierAbsorbed),
        "）"
      ] }),
      /* @__PURE__ */ M.jsxs("div", { children: [
        "耐性限界ダメージ: ",
        qe(s.confDamageApplied)
      ] }),
      /* @__PURE__ */ M.jsxs("div", { children: [
        "SANダメージ(沈潜): ",
        qe(s.sanDamageApplied)
      ] }),
      /* @__PURE__ */ M.jsxs("div", { children: [
        "残り HP ",
        qe(s.hpAfter),
        " / バリア ",
        " ",
        qe(s.barrierAfter),
        " / CON ",
        " ",
        qe(s.constitutionAfter),
        " / SAN ",
        " ",
        qe(s.sanAfter)
      ] })
    ] })
  ] });
}, sp = "ponkotu-system";
var Pt, al, gc;
class ap extends Application {
  constructor() {
    super(...arguments);
    sr(this, al);
    sr(this, Pt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-damage-calc",
      title: "ダメージ計算",
      template: `modules/${sp}/templates/damage-calc.html`,
      width: 520,
      height: 400,
      resizable: !0
    });
  }
  activateListeners(n) {
    var u, o;
    super.activateListeners(n);
    const r = (u = n[0]) == null ? void 0 : u.querySelector(
      ".ponkotu-react-root"
    );
    if (!r) {
      console.warn("[ponkotu-system] DamageCalcApplication: container not found");
      return;
    }
    const l = (((o = canvas.tokens) == null ? void 0 : o.placeables) ?? []).filter((i) => !!i.actor).map((i) => {
      var s;
      return {
        id: i.id ?? crypto.randomUUID(),
        name: i.name ?? ((s = i.actor) == null ? void 0 : s.name) ?? "unknown",
        actor: i.actor,
        isPlayer: Ko(this, al, gc).call(this, i.actor)
      };
    });
    hn(this, Pt, Ur.createRoot(r)), mn(this, Pt).render(/* @__PURE__ */ M.jsx(ip, { tokens: l }));
  }
  async close(n) {
    var r;
    return (r = mn(this, Pt)) == null || r.unmount(), hn(this, Pt, null), super.close(n);
  }
}
Pt = new WeakMap(), al = new WeakSet(), gc = function(n) {
  var r, l, u;
  return !!(((u = (l = (r = n.system) == null ? void 0 : r.attributes) == null ? void 0 : l.isPlayer) == null ? void 0 : u.value) ?? 0);
};
const Xu = "ponkotu-system", er = (...e) => console.log(`[${Xu}]`, ...e);
er("ES module loaded");
const wc = () => new qd().render(!0), kc = () => new ap().render(!0), Sc = () => {
  const e = game.modules.get(Xu);
  if (!e) {
    console.warn(`[${Xu}] game.modules からモジュールを取得できませんでした`);
    return;
  }
  const t = e;
  t.api || (t.api = {}), t.api.showReactForm = wc, t.api.showDamageCalc = kc, er("API を登録しました", t.api);
};
Hooks.once("ready", () => {
  er("Hooks.once ready fired"), Sc(), globalThis.ponkotuSystem = { showReactForm: wc, showDamageCalc: kc }, er("React フォーム API を初期化しました");
});
Hooks.once("init", () => {
  er("Hooks.once init fired"), Sc();
});
export {
  kc as showDamageCalc,
  wc as showReactForm
};
