var Bo = (e) => {
  throw TypeError(e);
};
var Wo = (e, t, n) => t.has(e) || Bo("Cannot " + n);
var mn = (e, t, n) => (Wo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Pl = (e, t, n) => t.has(e) ? Bo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), hn = (e, t, n, r) => (Wo(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var ts = { exports: {} }, sl = {}, ns = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tr = Symbol.for("react.element"), yc = Symbol.for("react.portal"), gc = Symbol.for("react.fragment"), wc = Symbol.for("react.strict_mode"), kc = Symbol.for("react.profiler"), Sc = Symbol.for("react.provider"), Ec = Symbol.for("react.context"), Cc = Symbol.for("react.forward_ref"), xc = Symbol.for("react.suspense"), _c = Symbol.for("react.memo"), Nc = Symbol.for("react.lazy"), Qo = Symbol.iterator;
function Pc(e) {
  return e === null || typeof e != "object" ? null : (e = Qo && e[Qo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var rs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ls = Object.assign, us = {};
function an(e, t, n) {
  this.props = e, this.context = t, this.refs = us, this.updater = n || rs;
}
an.prototype.isReactComponent = {};
an.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
an.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function os() {
}
os.prototype = an.prototype;
function Yu(e, t, n) {
  this.props = e, this.context = t, this.refs = us, this.updater = n || rs;
}
var Xu = Yu.prototype = new os();
Xu.constructor = Yu;
ls(Xu, an.prototype);
Xu.isPureReactComponent = !0;
var Ko = Array.isArray, is = Object.prototype.hasOwnProperty, Gu = { current: null }, ss = { key: !0, ref: !0, __self: !0, __source: !0 };
function as(e, t, n) {
  var r, l = {}, u = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (u = "" + t.key), t) is.call(t, r) && !ss.hasOwnProperty(r) && (l[r] = t[r]);
  var i = arguments.length - 2;
  if (i === 1) l.children = n;
  else if (1 < i) {
    for (var s = Array(i), c = 0; c < i; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
  return { $$typeof: tr, type: e, key: u, ref: o, props: l, _owner: Gu.current };
}
function zc(e, t) {
  return { $$typeof: tr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function Zu(e) {
  return typeof e == "object" && e !== null && e.$$typeof === tr;
}
function Lc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var Yo = /\/+/g;
function zl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Lc("" + e.key) : t.toString(36);
}
function _r(e, t, n, r, l) {
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
        case yc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + zl(o, 0) : r, Ko(l) ? (n = "", e != null && (n = e.replace(Yo, "$&/") + "/"), _r(l, t, n, "", function(c) {
    return c;
  })) : l != null && (Zu(l) && (l = zc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(Yo, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", Ko(e)) for (var i = 0; i < e.length; i++) {
    u = e[i];
    var s = r + zl(u, i);
    o += _r(u, t, n, s, l);
  }
  else if (s = Pc(e), typeof s == "function") for (e = s.call(e), i = 0; !(u = e.next()).done; ) u = u.value, s = r + zl(u, i++), o += _r(u, t, n, s, l);
  else if (u === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function sr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return _r(e, r, "", "", function(u) {
    return t.call(n, u, l++);
  }), r;
}
function Tc(e) {
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
var se = { current: null }, Nr = { transition: null }, Rc = { ReactCurrentDispatcher: se, ReactCurrentBatchConfig: Nr, ReactCurrentOwner: Gu };
function cs() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: sr, forEach: function(e, t, n) {
  sr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return sr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return sr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!Zu(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = an;
L.Fragment = gc;
L.Profiler = kc;
L.PureComponent = Yu;
L.StrictMode = wc;
L.Suspense = xc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Rc;
L.act = cs;
L.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ls({}, e.props), l = e.key, u = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (u = t.ref, o = Gu.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
    for (s in t) is.call(t, s) && !ss.hasOwnProperty(s) && (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s]);
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
L.createContext = function(e) {
  return e = { $$typeof: Ec, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Sc, _context: e }, e.Consumer = e;
};
L.createElement = as;
L.createFactory = function(e) {
  var t = as.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Cc, render: e };
};
L.isValidElement = Zu;
L.lazy = function(e) {
  return { $$typeof: Nc, _payload: { _status: -1, _result: e }, _init: Tc };
};
L.memo = function(e, t) {
  return { $$typeof: _c, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = Nr.transition;
  Nr.transition = {};
  try {
    e();
  } finally {
    Nr.transition = t;
  }
};
L.unstable_act = cs;
L.useCallback = function(e, t) {
  return se.current.useCallback(e, t);
};
L.useContext = function(e) {
  return se.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return se.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
  return se.current.useEffect(e, t);
};
L.useId = function() {
  return se.current.useId();
};
L.useImperativeHandle = function(e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function(e, t) {
  return se.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
  return se.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
  return se.current.useMemo(e, t);
};
L.useReducer = function(e, t, n) {
  return se.current.useReducer(e, t, n);
};
L.useRef = function(e) {
  return se.current.useRef(e);
};
L.useState = function(e) {
  return se.current.useState(e);
};
L.useSyncExternalStore = function(e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function() {
  return se.current.useTransition();
};
L.version = "18.3.1";
ns.exports = L;
var Re = ns.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Dc = Re, Mc = Symbol.for("react.element"), Oc = Symbol.for("react.fragment"), jc = Object.prototype.hasOwnProperty, Ic = Dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Fc = { key: !0, ref: !0, __self: !0, __source: !0 };
function fs(e, t, n) {
  var r, l = {}, u = null, o = null;
  n !== void 0 && (u = "" + n), t.key !== void 0 && (u = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) jc.call(t, r) && !Fc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Mc, type: e, key: u, ref: o, props: l, _owner: Ic.current };
}
sl.Fragment = Oc;
sl.jsx = fs;
sl.jsxs = fs;
ts.exports = sl;
var M = ts.exports, Fr = {}, ds = { exports: {} }, we = {}, ps = { exports: {} }, ms = {};
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
  function t(C, P) {
    var z = C.length;
    C.push(P);
    e: for (; 0 < z; ) {
      var W = z - 1 >>> 1, Z = C[W];
      if (0 < l(Z, P)) C[W] = P, C[z] = Z, z = W;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var P = C[0], z = C.pop();
    if (z !== P) {
      C[0] = z;
      e: for (var W = 0, Z = C.length, or = Z >>> 1; W < or; ) {
        var gt = 2 * (W + 1) - 1, Nl = C[gt], wt = gt + 1, ir = C[wt];
        if (0 > l(Nl, z)) wt < Z && 0 > l(ir, Nl) ? (C[W] = ir, C[wt] = z, W = wt) : (C[W] = Nl, C[gt] = z, W = gt);
        else if (wt < Z && 0 > l(ir, z)) C[W] = ir, C[wt] = z, W = wt;
        else break e;
      }
    }
    return P;
  }
  function l(C, P) {
    var z = C.sortIndex - P.sortIndex;
    return z !== 0 ? z : C.id - P.id;
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
  var s = [], c = [], h = 1, m = null, p = 3, w = !1, k = !1, y = !1, T = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var P = n(c); P !== null; ) {
      if (P.callback === null) r(c);
      else if (P.startTime <= C) r(c), P.sortIndex = P.expirationTime, t(s, P);
      else break;
      P = n(c);
    }
  }
  function v(C) {
    if (y = !1, d(C), !k) if (n(s) !== null) k = !0, xl(S);
    else {
      var P = n(c);
      P !== null && _l(v, P.startTime - C);
    }
  }
  function S(C, P) {
    k = !1, y && (y = !1, f(N), N = -1), w = !0;
    var z = p;
    try {
      for (d(P), m = n(s); m !== null && (!(m.expirationTime > P) || C && !Pe()); ) {
        var W = m.callback;
        if (typeof W == "function") {
          m.callback = null, p = m.priorityLevel;
          var Z = W(m.expirationTime <= P);
          P = e.unstable_now(), typeof Z == "function" ? m.callback = Z : m === n(s) && r(s), d(P);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var or = !0;
      else {
        var gt = n(c);
        gt !== null && _l(v, gt.startTime - P), or = !1;
      }
      return or;
    } finally {
      m = null, p = z, w = !1;
    }
  }
  var _ = !1, x = null, N = -1, B = 5, R = -1;
  function Pe() {
    return !(e.unstable_now() - R < B);
  }
  function dn() {
    if (x !== null) {
      var C = e.unstable_now();
      R = C;
      var P = !0;
      try {
        P = x(!0, C);
      } finally {
        P ? pn() : (_ = !1, x = null);
      }
    } else _ = !1;
  }
  var pn;
  if (typeof a == "function") pn = function() {
    a(dn);
  };
  else if (typeof MessageChannel < "u") {
    var Ho = new MessageChannel(), vc = Ho.port2;
    Ho.port1.onmessage = dn, pn = function() {
      vc.postMessage(null);
    };
  } else pn = function() {
    T(dn, 0);
  };
  function xl(C) {
    x = C, _ || (_ = !0, pn());
  }
  function _l(C, P) {
    N = T(function() {
      C(e.unstable_now());
    }, P);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    k || w || (k = !0, xl(S));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : B = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(C) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var P = 3;
        break;
      default:
        P = p;
    }
    var z = p;
    p = P;
    try {
      return C();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, P) {
    switch (C) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        C = 3;
    }
    var z = p;
    p = C;
    try {
      return P();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(C, P, z) {
    var W = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? W + z : W) : z = W, C) {
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
    return Z = z + Z, C = { id: h++, callback: P, priorityLevel: C, startTime: z, expirationTime: Z, sortIndex: -1 }, z > W ? (C.sortIndex = z, t(c, C), n(s) === null && C === n(c) && (y ? (f(N), N = -1) : y = !0, _l(v, z - W))) : (C.sortIndex = Z, t(s, C), k || w || (k = !0, xl(S))), C;
  }, e.unstable_shouldYield = Pe, e.unstable_wrapCallback = function(C) {
    var P = p;
    return function() {
      var z = p;
      p = P;
      try {
        return C.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(ms);
ps.exports = ms;
var Uc = ps.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ac = Re, ge = Uc;
function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var hs = /* @__PURE__ */ new Set(), Fn = {};
function Ot(e, t) {
  tn(e, t), tn(e + "Capture", t);
}
function tn(e, t) {
  for (Fn[e] = t, e = 0; e < t.length; e++) hs.add(t[e]);
}
var Ke = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), eu = Object.prototype.hasOwnProperty, $c = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Xo = {}, Go = {};
function Vc(e) {
  return eu.call(Go, e) ? !0 : eu.call(Xo, e) ? !1 : $c.test(e) ? Go[e] = !0 : (Xo[e] = !0, !1);
}
function Hc(e, t, n, r) {
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
function Bc(e, t, n, r) {
  if (t === null || typeof t > "u" || Hc(e, t, n, r)) return !0;
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
var Ju = /[\-:]([a-z])/g;
function qu(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    Ju,
    qu
  );
  te[t] = new ae(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(Ju, qu);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(Ju, qu);
  te[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
te.xlinkHref = new ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  te[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function bu(e, t, n, r) {
  var l = te.hasOwnProperty(t) ? te[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Bc(t, n, l, r) && (n = null), r || l === null ? Vc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ze = Ac.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, ar = Symbol.for("react.element"), Ft = Symbol.for("react.portal"), Ut = Symbol.for("react.fragment"), eo = Symbol.for("react.strict_mode"), tu = Symbol.for("react.profiler"), vs = Symbol.for("react.provider"), ys = Symbol.for("react.context"), to = Symbol.for("react.forward_ref"), nu = Symbol.for("react.suspense"), ru = Symbol.for("react.suspense_list"), no = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), gs = Symbol.for("react.offscreen"), Zo = Symbol.iterator;
function vn(e) {
  return e === null || typeof e != "object" ? null : (e = Zo && e[Zo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var V = Object.assign, Ll;
function xn(e) {
  if (Ll === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ll = t && t[1] || "";
  }
  return `
` + Ll + e;
}
var Tl = !1;
function Rl(e, t) {
  if (!e || Tl) return "";
  Tl = !0;
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
    Tl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? xn(e) : "";
}
function Wc(e) {
  switch (e.tag) {
    case 5:
      return xn(e.type);
    case 16:
      return xn("Lazy");
    case 13:
      return xn("Suspense");
    case 19:
      return xn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Rl(e.type, !1), e;
    case 11:
      return e = Rl(e.type.render, !1), e;
    case 1:
      return e = Rl(e.type, !0), e;
    default:
      return "";
  }
}
function lu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ut:
      return "Fragment";
    case Ft:
      return "Portal";
    case tu:
      return "Profiler";
    case eo:
      return "StrictMode";
    case nu:
      return "Suspense";
    case ru:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case ys:
      return (e.displayName || "Context") + ".Consumer";
    case vs:
      return (e._context.displayName || "Context") + ".Provider";
    case to:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case no:
      return t = e.displayName || null, t !== null ? t : lu(e.type) || "Memo";
    case be:
      t = e._payload, e = e._init;
      try {
        return lu(e(t));
      } catch {
      }
  }
  return null;
}
function Qc(e) {
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
      return lu(t);
    case 8:
      return t === eo ? "StrictMode" : "Mode";
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
function ws(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Kc(e) {
  var t = ws(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function cr(e) {
  e._valueTracker || (e._valueTracker = Kc(e));
}
function ks(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = ws(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Ur(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function uu(e, t) {
  var n = t.checked;
  return V({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function Jo(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = pt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ss(e, t) {
  t = t.checked, t != null && bu(e, "checked", t, !1);
}
function ou(e, t) {
  Ss(e, t);
  var n = pt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? iu(e, t.type, n) : t.hasOwnProperty("defaultValue") && iu(e, t.type, pt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function qo(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function iu(e, t, n) {
  (t !== "number" || Ur(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
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
function su(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return V({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function bo(e, t) {
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
function Es(e, t) {
  var n = pt(t.value), r = pt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ei(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Cs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function au(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Cs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var fr, xs = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (fr = fr || document.createElement("div"), fr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = fr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
}, Yc = ["Webkit", "ms", "Moz", "O"];
Object.keys(zn).forEach(function(e) {
  Yc.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), zn[t] = zn[e];
  });
});
function _s(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || zn.hasOwnProperty(e) && zn[e] ? ("" + t).trim() : t + "px";
}
function Ns(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = _s(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Xc = V({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function cu(e, t) {
  if (t) {
    if (Xc[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function fu(e, t) {
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
var du = null;
function ro(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var pu = null, Zt = null, Jt = null;
function ti(e) {
  if (e = lr(e)) {
    if (typeof pu != "function") throw Error(g(280));
    var t = e.stateNode;
    t && (t = pl(t), pu(e.stateNode, e.type, t));
  }
}
function Ps(e) {
  Zt ? Jt ? Jt.push(e) : Jt = [e] : Zt = e;
}
function zs() {
  if (Zt) {
    var e = Zt, t = Jt;
    if (Jt = Zt = null, ti(e), t) for (e = 0; e < t.length; e++) ti(t[e]);
  }
}
function Ls(e, t) {
  return e(t);
}
function Ts() {
}
var Dl = !1;
function Rs(e, t, n) {
  if (Dl) return e(t, n);
  Dl = !0;
  try {
    return Ls(e, t, n);
  } finally {
    Dl = !1, (Zt !== null || Jt !== null) && (Ts(), zs());
  }
}
function An(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = pl(n);
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
var mu = !1;
if (Ke) try {
  var yn = {};
  Object.defineProperty(yn, "passive", { get: function() {
    mu = !0;
  } }), window.addEventListener("test", yn, yn), window.removeEventListener("test", yn, yn);
} catch {
  mu = !1;
}
function Gc(e, t, n, r, l, u, o, i, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Ln = !1, Ar = null, $r = !1, hu = null, Zc = { onError: function(e) {
  Ln = !0, Ar = e;
} };
function Jc(e, t, n, r, l, u, o, i, s) {
  Ln = !1, Ar = null, Gc.apply(Zc, arguments);
}
function qc(e, t, n, r, l, u, o, i, s) {
  if (Jc.apply(this, arguments), Ln) {
    if (Ln) {
      var c = Ar;
      Ln = !1, Ar = null;
    } else throw Error(g(198));
    $r || ($r = !0, hu = c);
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
function Ds(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function ni(e) {
  if (jt(e) !== e) throw Error(g(188));
}
function bc(e) {
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
        if (u === n) return ni(l), e;
        if (u === r) return ni(l), t;
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
function Ms(e) {
  return e = bc(e), e !== null ? Os(e) : null;
}
function Os(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Os(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var js = ge.unstable_scheduleCallback, ri = ge.unstable_cancelCallback, ef = ge.unstable_shouldYield, tf = ge.unstable_requestPaint, Q = ge.unstable_now, nf = ge.unstable_getCurrentPriorityLevel, lo = ge.unstable_ImmediatePriority, Is = ge.unstable_UserBlockingPriority, Vr = ge.unstable_NormalPriority, rf = ge.unstable_LowPriority, Fs = ge.unstable_IdlePriority, al = null, Ae = null;
function lf(e) {
  if (Ae && typeof Ae.onCommitFiberRoot == "function") try {
    Ae.onCommitFiberRoot(al, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Me = Math.clz32 ? Math.clz32 : sf, uf = Math.log, of = Math.LN2;
function sf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (uf(e) / of | 0) | 0;
}
var dr = 64, pr = 4194304;
function Nn(e) {
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
function Hr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, u = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var i = o & ~l;
    i !== 0 ? r = Nn(i) : (u &= o, u !== 0 && (r = Nn(u)));
  } else o = n & ~l, o !== 0 ? r = Nn(o) : u !== 0 && (r = Nn(u));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Me(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function af(e, t) {
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
function cf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
    var o = 31 - Me(u), i = 1 << o, s = l[o];
    s === -1 ? (!(i & n) || i & r) && (l[o] = af(i, t)) : s <= t && (e.expiredLanes |= i), u &= ~i;
  }
}
function vu(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Us() {
  var e = dr;
  return dr <<= 1, !(dr & 4194240) && (dr = 64), e;
}
function Ml(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function nr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Me(t), e[t] = n;
}
function ff(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n), u = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
  }
}
function uo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function As(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var $s, oo, Vs, Hs, Bs, yu = !1, mr = [], ut = null, ot = null, it = null, $n = /* @__PURE__ */ new Map(), Vn = /* @__PURE__ */ new Map(), tt = [], df = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function li(e, t) {
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
  return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = lr(t), t !== null && oo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function pf(e, t, n, r, l) {
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
function Ws(e) {
  var t = Et(e.target);
  if (t !== null) {
    var n = jt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ds(n), t !== null) {
          e.blockedOn = t, Bs(e.priority, function() {
            Vs(n);
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
function Pr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = gu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      du = r, n.target.dispatchEvent(r), du = null;
    } else return t = lr(n), t !== null && oo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function oi(e, t, n) {
  Pr(e) && n.delete(t);
}
function mf() {
  yu = !1, ut !== null && Pr(ut) && (ut = null), ot !== null && Pr(ot) && (ot = null), it !== null && Pr(it) && (it = null), $n.forEach(oi), Vn.forEach(oi);
}
function wn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, yu || (yu = !0, ge.unstable_scheduleCallback(ge.unstable_NormalPriority, mf)));
}
function Hn(e) {
  function t(l) {
    return wn(l, e);
  }
  if (0 < mr.length) {
    wn(mr[0], e);
    for (var n = 1; n < mr.length; n++) {
      var r = mr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ut !== null && wn(ut, e), ot !== null && wn(ot, e), it !== null && wn(it, e), $n.forEach(t), Vn.forEach(t), n = 0; n < tt.length; n++) r = tt[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < tt.length && (n = tt[0], n.blockedOn === null); ) Ws(n), n.blockedOn === null && tt.shift();
}
var qt = Ze.ReactCurrentBatchConfig, Br = !0;
function hf(e, t, n, r) {
  var l = O, u = qt.transition;
  qt.transition = null;
  try {
    O = 1, io(e, t, n, r);
  } finally {
    O = l, qt.transition = u;
  }
}
function vf(e, t, n, r) {
  var l = O, u = qt.transition;
  qt.transition = null;
  try {
    O = 4, io(e, t, n, r);
  } finally {
    O = l, qt.transition = u;
  }
}
function io(e, t, n, r) {
  if (Br) {
    var l = gu(e, t, n, r);
    if (l === null) Bl(e, t, r, Wr, n), li(e, r);
    else if (pf(l, e, t, n, r)) r.stopPropagation();
    else if (li(e, r), t & 4 && -1 < df.indexOf(e)) {
      for (; l !== null; ) {
        var u = lr(l);
        if (u !== null && $s(u), u = gu(e, t, n, r), u === null && Bl(e, t, r, Wr, n), u === l) break;
        l = u;
      }
      l !== null && r.stopPropagation();
    } else Bl(e, t, r, null, n);
  }
}
var Wr = null;
function gu(e, t, n, r) {
  if (Wr = null, e = ro(r), e = Et(e), e !== null) if (t = jt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ds(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Wr = e, null;
}
function Qs(e) {
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
      switch (nf()) {
        case lo:
          return 1;
        case Is:
          return 4;
        case Vr:
        case rf:
          return 16;
        case Fs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var rt = null, so = null, zr = null;
function Ks() {
  if (zr) return zr;
  var e, t = so, n = t.length, r, l = "value" in rt ? rt.value : rt.textContent, u = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[u - r]; r++) ;
  return zr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Lr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function hr() {
  return !0;
}
function ii() {
  return !1;
}
function ke(e) {
  function t(n, r, l, u, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = o, this.currentTarget = null;
    for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(u) : u[i]);
    return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? hr : ii, this.isPropagationStopped = ii, this;
  }
  return V(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = hr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = hr);
  }, persist: function() {
  }, isPersistent: hr }), t;
}
var cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ao = ke(cn), rr = V({}, cn, { view: 0, detail: 0 }), yf = ke(rr), Ol, jl, kn, cl = V({}, rr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: co, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== kn && (kn && e.type === "mousemove" ? (Ol = e.screenX - kn.screenX, jl = e.screenY - kn.screenY) : jl = Ol = 0, kn = e), Ol);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : jl;
} }), si = ke(cl), gf = V({}, cl, { dataTransfer: 0 }), wf = ke(gf), kf = V({}, rr, { relatedTarget: 0 }), Il = ke(kf), Sf = V({}, cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ef = ke(Sf), Cf = V({}, cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), xf = ke(Cf), _f = V({}, cn, { data: 0 }), ai = ke(_f), Nf = {
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
}, Pf = {
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
}, zf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Lf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = zf[e]) ? !!t[e] : !1;
}
function co() {
  return Lf;
}
var Tf = V({}, rr, { key: function(e) {
  if (e.key) {
    var t = Nf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Lr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Pf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: co, charCode: function(e) {
  return e.type === "keypress" ? Lr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Lr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Rf = ke(Tf), Df = V({}, cl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ci = ke(Df), Mf = V({}, rr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: co }), Of = ke(Mf), jf = V({}, cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), If = ke(jf), Ff = V({}, cl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Uf = ke(Ff), Af = [9, 13, 27, 32], fo = Ke && "CompositionEvent" in window, Tn = null;
Ke && "documentMode" in document && (Tn = document.documentMode);
var $f = Ke && "TextEvent" in window && !Tn, Ys = Ke && (!fo || Tn && 8 < Tn && 11 >= Tn), fi = " ", di = !1;
function Xs(e, t) {
  switch (e) {
    case "keyup":
      return Af.indexOf(t.keyCode) !== -1;
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
function Gs(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var At = !1;
function Vf(e, t) {
  switch (e) {
    case "compositionend":
      return Gs(t);
    case "keypress":
      return t.which !== 32 ? null : (di = !0, fi);
    case "textInput":
      return e = t.data, e === fi && di ? null : e;
    default:
      return null;
  }
}
function Hf(e, t) {
  if (At) return e === "compositionend" || !fo && Xs(e, t) ? (e = Ks(), zr = so = rt = null, At = !1, e) : null;
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
      return Ys && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Bf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function pi(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Bf[e.type] : t === "textarea";
}
function Zs(e, t, n, r) {
  Ps(r), t = Qr(t, "onChange"), 0 < t.length && (n = new ao("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Rn = null, Bn = null;
function Wf(e) {
  ia(e, 0);
}
function fl(e) {
  var t = Ht(e);
  if (ks(t)) return e;
}
function Qf(e, t) {
  if (e === "change") return t;
}
var Js = !1;
if (Ke) {
  var Fl;
  if (Ke) {
    var Ul = "oninput" in document;
    if (!Ul) {
      var mi = document.createElement("div");
      mi.setAttribute("oninput", "return;"), Ul = typeof mi.oninput == "function";
    }
    Fl = Ul;
  } else Fl = !1;
  Js = Fl && (!document.documentMode || 9 < document.documentMode);
}
function hi() {
  Rn && (Rn.detachEvent("onpropertychange", qs), Bn = Rn = null);
}
function qs(e) {
  if (e.propertyName === "value" && fl(Bn)) {
    var t = [];
    Zs(t, Bn, e, ro(e)), Rs(Wf, t);
  }
}
function Kf(e, t, n) {
  e === "focusin" ? (hi(), Rn = t, Bn = n, Rn.attachEvent("onpropertychange", qs)) : e === "focusout" && hi();
}
function Yf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return fl(Bn);
}
function Xf(e, t) {
  if (e === "click") return fl(t);
}
function Gf(e, t) {
  if (e === "input" || e === "change") return fl(t);
}
function Zf(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var je = typeof Object.is == "function" ? Object.is : Zf;
function Wn(e, t) {
  if (je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!eu.call(t, l) || !je(e[l], t[l])) return !1;
  }
  return !0;
}
function vi(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function yi(e, t) {
  var n = vi(e);
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
    n = vi(n);
  }
}
function bs(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? bs(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ea() {
  for (var e = window, t = Ur(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Ur(e.document);
  }
  return t;
}
function po(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Jf(e) {
  var t = ea(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && bs(n.ownerDocument.documentElement, n)) {
    if (r !== null && po(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, u = Math.min(r.start, l);
        r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = yi(n, u);
        var o = yi(
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
var qf = Ke && "documentMode" in document && 11 >= document.documentMode, $t = null, wu = null, Dn = null, ku = !1;
function gi(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  ku || $t == null || $t !== Ur(r) || (r = $t, "selectionStart" in r && po(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Dn && Wn(Dn, r) || (Dn = r, r = Qr(wu, "onSelect"), 0 < r.length && (t = new ao("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = $t)));
}
function vr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Vt = { animationend: vr("Animation", "AnimationEnd"), animationiteration: vr("Animation", "AnimationIteration"), animationstart: vr("Animation", "AnimationStart"), transitionend: vr("Transition", "TransitionEnd") }, Al = {}, ta = {};
Ke && (ta = document.createElement("div").style, "AnimationEvent" in window || (delete Vt.animationend.animation, delete Vt.animationiteration.animation, delete Vt.animationstart.animation), "TransitionEvent" in window || delete Vt.transitionend.transition);
function dl(e) {
  if (Al[e]) return Al[e];
  if (!Vt[e]) return e;
  var t = Vt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ta) return Al[e] = t[n];
  return e;
}
var na = dl("animationend"), ra = dl("animationiteration"), la = dl("animationstart"), ua = dl("transitionend"), oa = /* @__PURE__ */ new Map(), wi = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ht(e, t) {
  oa.set(e, t), Ot(t, [e]);
}
for (var $l = 0; $l < wi.length; $l++) {
  var Vl = wi[$l], bf = Vl.toLowerCase(), ed = Vl[0].toUpperCase() + Vl.slice(1);
  ht(bf, "on" + ed);
}
ht(na, "onAnimationEnd");
ht(ra, "onAnimationIteration");
ht(la, "onAnimationStart");
ht("dblclick", "onDoubleClick");
ht("focusin", "onFocus");
ht("focusout", "onBlur");
ht(ua, "onTransitionEnd");
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
var Pn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), td = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pn));
function ki(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, qc(r, t, void 0, e), e.currentTarget = null;
}
function ia(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var u = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var i = r[o], s = i.instance, c = i.currentTarget;
        if (i = i.listener, s !== u && l.isPropagationStopped()) break e;
        ki(l, i, c), u = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (i = r[o], s = i.instance, c = i.currentTarget, i = i.listener, s !== u && l.isPropagationStopped()) break e;
        ki(l, i, c), u = s;
      }
    }
  }
  if ($r) throw e = hu, $r = !1, hu = null, e;
}
function I(e, t) {
  var n = t[_u];
  n === void 0 && (n = t[_u] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (sa(t, e, 2, !1), n.add(r));
}
function Hl(e, t, n) {
  var r = 0;
  t && (r |= 4), sa(n, e, r, t);
}
var yr = "_reactListening" + Math.random().toString(36).slice(2);
function Qn(e) {
  if (!e[yr]) {
    e[yr] = !0, hs.forEach(function(n) {
      n !== "selectionchange" && (td.has(n) || Hl(n, !1, e), Hl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[yr] || (t[yr] = !0, Hl("selectionchange", !1, t));
  }
}
function sa(e, t, n, r) {
  switch (Qs(t)) {
    case 1:
      var l = hf;
      break;
    case 4:
      l = vf;
      break;
    default:
      l = io;
  }
  n = l.bind(null, t, n, e), l = void 0, !mu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Bl(e, t, n, r, l) {
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
  Rs(function() {
    var c = u, h = ro(n), m = [];
    e: {
      var p = oa.get(e);
      if (p !== void 0) {
        var w = ao, k = e;
        switch (e) {
          case "keypress":
            if (Lr(n) === 0) break e;
          case "keydown":
          case "keyup":
            w = Rf;
            break;
          case "focusin":
            k = "focus", w = Il;
            break;
          case "focusout":
            k = "blur", w = Il;
            break;
          case "beforeblur":
          case "afterblur":
            w = Il;
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
            w = si;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            w = wf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            w = Of;
            break;
          case na:
          case ra:
          case la:
            w = Ef;
            break;
          case ua:
            w = If;
            break;
          case "scroll":
            w = yf;
            break;
          case "wheel":
            w = Uf;
            break;
          case "copy":
          case "cut":
          case "paste":
            w = xf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            w = ci;
        }
        var y = (t & 4) !== 0, T = !y && e === "scroll", f = y ? p !== null ? p + "Capture" : null : p;
        y = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = An(a, f), v != null && y.push(Kn(a, v, d)))), T) break;
          a = a.return;
        }
        0 < y.length && (p = new w(p, k, null, n, h), m.push({ event: p, listeners: y }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", w = e === "mouseout" || e === "pointerout", p && n !== du && (k = n.relatedTarget || n.fromElement) && (Et(k) || k[Ye])) break e;
        if ((w || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, w ? (k = n.relatedTarget || n.toElement, w = c, k = k ? Et(k) : null, k !== null && (T = jt(k), k !== T || k.tag !== 5 && k.tag !== 6) && (k = null)) : (w = null, k = c), w !== k)) {
          if (y = si, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (y = ci, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), T = w == null ? p : Ht(w), d = k == null ? p : Ht(k), p = new y(v, a + "leave", w, n, h), p.target = T, p.relatedTarget = d, v = null, Et(h) === c && (y = new y(f, a + "enter", k, n, h), y.target = d, y.relatedTarget = T, v = y), T = v, w && k) t: {
            for (y = w, f = k, a = 0, d = y; d; d = It(d)) a++;
            for (d = 0, v = f; v; v = It(v)) d++;
            for (; 0 < a - d; ) y = It(y), a--;
            for (; 0 < d - a; ) f = It(f), d--;
            for (; a--; ) {
              if (y === f || f !== null && y === f.alternate) break t;
              y = It(y), f = It(f);
            }
            y = null;
          }
          else y = null;
          w !== null && Si(m, p, w, y, !1), k !== null && T !== null && Si(m, T, k, y, !0);
        }
      }
      e: {
        if (p = c ? Ht(c) : window, w = p.nodeName && p.nodeName.toLowerCase(), w === "select" || w === "input" && p.type === "file") var S = Qf;
        else if (pi(p)) if (Js) S = Gf;
        else {
          S = Yf;
          var _ = Kf;
        }
        else (w = p.nodeName) && w.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (S = Xf);
        if (S && (S = S(e, c))) {
          Zs(m, S, n, h);
          break e;
        }
        _ && _(e, p, c), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && iu(p, "number", p.value);
      }
      switch (_ = c ? Ht(c) : window, e) {
        case "focusin":
          (pi(_) || _.contentEditable === "true") && ($t = _, wu = c, Dn = null);
          break;
        case "focusout":
          Dn = wu = $t = null;
          break;
        case "mousedown":
          ku = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          ku = !1, gi(m, n, h);
          break;
        case "selectionchange":
          if (qf) break;
        case "keydown":
        case "keyup":
          gi(m, n, h);
      }
      var x;
      if (fo) e: {
        switch (e) {
          case "compositionstart":
            var N = "onCompositionStart";
            break e;
          case "compositionend":
            N = "onCompositionEnd";
            break e;
          case "compositionupdate":
            N = "onCompositionUpdate";
            break e;
        }
        N = void 0;
      }
      else At ? Xs(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (Ys && n.locale !== "ko" && (At || N !== "onCompositionStart" ? N === "onCompositionEnd" && At && (x = Ks()) : (rt = h, so = "value" in rt ? rt.value : rt.textContent, At = !0)), _ = Qr(c, N), 0 < _.length && (N = new ai(N, e, null, n, h), m.push({ event: N, listeners: _ }), x ? N.data = x : (x = Gs(n), x !== null && (N.data = x)))), (x = $f ? Vf(e, n) : Hf(e, n)) && (c = Qr(c, "onBeforeInput"), 0 < c.length && (h = new ai("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: c }), h.data = x));
    }
    ia(m, t);
  });
}
function Kn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Qr(e, t) {
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
function Si(e, t, n, r, l) {
  for (var u = t._reactName, o = []; n !== null && n !== r; ) {
    var i = n, s = i.alternate, c = i.stateNode;
    if (s !== null && s === r) break;
    i.tag === 5 && c !== null && (i = c, l ? (s = An(n, u), s != null && o.unshift(Kn(n, s, i))) : l || (s = An(n, u), s != null && o.push(Kn(n, s, i)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var nd = /\r\n?/g, rd = /\u0000|\uFFFD/g;
function Ei(e) {
  return (typeof e == "string" ? e : "" + e).replace(nd, `
`).replace(rd, "");
}
function gr(e, t, n) {
  if (t = Ei(t), Ei(e) !== t && n) throw Error(g(425));
}
function Kr() {
}
var Su = null, Eu = null;
function Cu(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var xu = typeof setTimeout == "function" ? setTimeout : void 0, ld = typeof clearTimeout == "function" ? clearTimeout : void 0, Ci = typeof Promise == "function" ? Promise : void 0, ud = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ci < "u" ? function(e) {
  return Ci.resolve(null).then(e).catch(od);
} : xu;
function od(e) {
  setTimeout(function() {
    throw e;
  });
}
function Wl(e, t) {
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
function xi(e) {
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
var fn = Math.random().toString(36).slice(2), Ue = "__reactFiber$" + fn, Yn = "__reactProps$" + fn, Ye = "__reactContainer$" + fn, _u = "__reactEvents$" + fn, id = "__reactListeners$" + fn, sd = "__reactHandles$" + fn;
function Et(e) {
  var t = e[Ue];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Ye] || n[Ue]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = xi(e); e !== null; ) {
        if (n = e[Ue]) return n;
        e = xi(e);
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
function pl(e) {
  return e[Yn] || null;
}
var Nu = [], Bt = -1;
function vt(e) {
  return { current: e };
}
function F(e) {
  0 > Bt || (e.current = Nu[Bt], Nu[Bt] = null, Bt--);
}
function j(e, t) {
  Bt++, Nu[Bt] = e.current, e.current = t;
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
function Yr() {
  F(de), F(ue);
}
function _i(e, t, n) {
  if (ue.current !== mt) throw Error(g(168));
  j(ue, t), j(de, n);
}
function aa(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, Qc(e) || "Unknown", l));
  return V({}, n, r);
}
function Xr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || mt, Lt = ue.current, j(ue, e), j(de, de.current), !0;
}
function Ni(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n ? (e = aa(e, t, Lt), r.__reactInternalMemoizedMergedChildContext = e, F(de), F(ue), j(ue, e)) : F(de), j(de, n);
}
var He = null, ml = !1, Ql = !1;
function ca(e) {
  He === null ? He = [e] : He.push(e);
}
function ad(e) {
  ml = !0, ca(e);
}
function yt() {
  if (!Ql && He !== null) {
    Ql = !0;
    var e = 0, t = O;
    try {
      var n = He;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      He = null, ml = !1;
    } catch (l) {
      throw He !== null && (He = He.slice(e + 1)), js(lo, yt), l;
    } finally {
      O = t, Ql = !1;
    }
  }
  return null;
}
var Wt = [], Qt = 0, Gr = null, Zr = 0, Se = [], Ee = 0, Tt = null, Be = 1, We = "";
function kt(e, t) {
  Wt[Qt++] = Zr, Wt[Qt++] = Gr, Gr = e, Zr = t;
}
function fa(e, t, n) {
  Se[Ee++] = Be, Se[Ee++] = We, Se[Ee++] = Tt, Tt = e;
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
function mo(e) {
  e.return !== null && (kt(e, 1), fa(e, 1, 0));
}
function ho(e) {
  for (; e === Gr; ) Gr = Wt[--Qt], Wt[Qt] = null, Zr = Wt[--Qt], Wt[Qt] = null;
  for (; e === Tt; ) Tt = Se[--Ee], Se[Ee] = null, We = Se[--Ee], Se[Ee] = null, Be = Se[--Ee], Se[Ee] = null;
}
var ye = null, ve = null, U = !1, De = null;
function da(e, t) {
  var n = Ce(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Pi(e, t) {
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
function Pu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function zu(e) {
  if (U) {
    var t = ve;
    if (t) {
      var n = t;
      if (!Pi(e, t)) {
        if (Pu(e)) throw Error(g(418));
        t = st(n.nextSibling);
        var r = ye;
        t && Pi(e, t) ? da(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, ye = e);
      }
    } else {
      if (Pu(e)) throw Error(g(418));
      e.flags = e.flags & -4097 | 2, U = !1, ye = e;
    }
  }
}
function zi(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  ye = e;
}
function wr(e) {
  if (e !== ye) return !1;
  if (!U) return zi(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Cu(e.type, e.memoizedProps)), t && (t = ve)) {
    if (Pu(e)) throw pa(), Error(g(418));
    for (; t; ) da(e, t), t = st(t.nextSibling);
  }
  if (zi(e), e.tag === 13) {
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
function pa() {
  for (var e = ve; e; ) e = st(e.nextSibling);
}
function rn() {
  ve = ye = null, U = !1;
}
function vo(e) {
  De === null ? De = [e] : De.push(e);
}
var cd = Ze.ReactCurrentBatchConfig;
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
function kr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Li(e) {
  var t = e._init;
  return t(e._payload);
}
function ma(e) {
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
  function i(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = ql(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var S = d.type;
    return S === Ut ? h(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === S || typeof S == "object" && S !== null && S.$$typeof === be && Li(S) === a.type) ? (v = l(a, d.props), v.ref = Sn(f, a, d), v.return = f, v) : (v = Ir(d.type, d.key, d.props, null, f.mode, v), v.ref = Sn(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = bl(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function h(f, a, d, v, S) {
    return a === null || a.tag !== 7 ? (a = zt(d, f.mode, v, S), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function m(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = ql("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case ar:
          return d = Ir(a.type, a.key, a.props, null, f.mode, d), d.ref = Sn(f, null, a), d.return = f, d;
        case Ft:
          return a = bl(a, f.mode, d), a.return = f, a;
        case be:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (_n(a) || vn(a)) return a = zt(a, f.mode, d, null), a.return = f, a;
      kr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var S = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return S !== null ? null : i(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          return d.key === S ? s(f, a, d, v) : null;
        case Ft:
          return d.key === S ? c(f, a, d, v) : null;
        case be:
          return S = d._init, p(
            f,
            a,
            S(d._payload),
            v
          );
      }
      if (_n(d) || vn(d)) return S !== null ? null : h(f, a, d, v, null);
      kr(f, d);
    }
    return null;
  }
  function w(f, a, d, v, S) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, i(a, f, "" + v, S);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case ar:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, S);
        case Ft:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, S);
        case be:
          var _ = v._init;
          return w(f, a, d, _(v._payload), S);
      }
      if (_n(v) || vn(v)) return f = f.get(d) || null, h(a, f, v, S, null);
      kr(a, v);
    }
    return null;
  }
  function k(f, a, d, v) {
    for (var S = null, _ = null, x = a, N = a = 0, B = null; x !== null && N < d.length; N++) {
      x.index > N ? (B = x, x = null) : B = x.sibling;
      var R = p(f, x, d[N], v);
      if (R === null) {
        x === null && (x = B);
        break;
      }
      e && x && R.alternate === null && t(f, x), a = u(R, a, N), _ === null ? S = R : _.sibling = R, _ = R, x = B;
    }
    if (N === d.length) return n(f, x), U && kt(f, N), S;
    if (x === null) {
      for (; N < d.length; N++) x = m(f, d[N], v), x !== null && (a = u(x, a, N), _ === null ? S = x : _.sibling = x, _ = x);
      return U && kt(f, N), S;
    }
    for (x = r(f, x); N < d.length; N++) B = w(x, f, N, d[N], v), B !== null && (e && B.alternate !== null && x.delete(B.key === null ? N : B.key), a = u(B, a, N), _ === null ? S = B : _.sibling = B, _ = B);
    return e && x.forEach(function(Pe) {
      return t(f, Pe);
    }), U && kt(f, N), S;
  }
  function y(f, a, d, v) {
    var S = vn(d);
    if (typeof S != "function") throw Error(g(150));
    if (d = S.call(d), d == null) throw Error(g(151));
    for (var _ = S = null, x = a, N = a = 0, B = null, R = d.next(); x !== null && !R.done; N++, R = d.next()) {
      x.index > N ? (B = x, x = null) : B = x.sibling;
      var Pe = p(f, x, R.value, v);
      if (Pe === null) {
        x === null && (x = B);
        break;
      }
      e && x && Pe.alternate === null && t(f, x), a = u(Pe, a, N), _ === null ? S = Pe : _.sibling = Pe, _ = Pe, x = B;
    }
    if (R.done) return n(
      f,
      x
    ), U && kt(f, N), S;
    if (x === null) {
      for (; !R.done; N++, R = d.next()) R = m(f, R.value, v), R !== null && (a = u(R, a, N), _ === null ? S = R : _.sibling = R, _ = R);
      return U && kt(f, N), S;
    }
    for (x = r(f, x); !R.done; N++, R = d.next()) R = w(x, f, N, R.value, v), R !== null && (e && R.alternate !== null && x.delete(R.key === null ? N : R.key), a = u(R, a, N), _ === null ? S = R : _.sibling = R, _ = R);
    return e && x.forEach(function(dn) {
      return t(f, dn);
    }), U && kt(f, N), S;
  }
  function T(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Ut && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case ar:
          e: {
            for (var S = d.key, _ = a; _ !== null; ) {
              if (_.key === S) {
                if (S = d.type, S === Ut) {
                  if (_.tag === 7) {
                    n(f, _.sibling), a = l(_, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (_.elementType === S || typeof S == "object" && S !== null && S.$$typeof === be && Li(S) === _.type) {
                  n(f, _.sibling), a = l(_, d.props), a.ref = Sn(f, _, d), a.return = f, f = a;
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === Ut ? (a = zt(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Ir(d.type, d.key, d.props, null, f.mode, v), v.ref = Sn(f, a, d), v.return = f, f = v);
          }
          return o(f);
        case Ft:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = bl(d, f.mode, v), a.return = f, f = a;
          }
          return o(f);
        case be:
          return _ = d._init, T(f, a, _(d._payload), v);
      }
      if (_n(d)) return k(f, a, d, v);
      if (vn(d)) return y(f, a, d, v);
      kr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = ql(d, f.mode, v), a.return = f, f = a), o(f)) : n(f, a);
  }
  return T;
}
var ln = ma(!0), ha = ma(!1), Jr = vt(null), qr = null, Kt = null, yo = null;
function go() {
  yo = Kt = qr = null;
}
function wo(e) {
  var t = Jr.current;
  F(Jr), e._currentValue = t;
}
function Lu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function bt(e, t) {
  qr = e, yo = Kt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (fe = !0), e.firstContext = null);
}
function _e(e) {
  var t = e._currentValue;
  if (yo !== e) if (e = { context: e, memoizedValue: t, next: null }, Kt === null) {
    if (qr === null) throw Error(g(308));
    Kt = e, qr.dependencies = { lanes: 0, firstContext: e };
  } else Kt = Kt.next = e;
  return t;
}
var Ct = null;
function ko(e) {
  Ct === null ? Ct = [e] : Ct.push(e);
}
function va(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, ko(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Xe(e, r);
}
function Xe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var et = !1;
function So(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ya(e, t) {
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
  return l = r.interleaved, l === null ? (t.next = t, ko(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Xe(e, n);
}
function Tr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, uo(e, n);
  }
}
function Ti(e, t) {
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
function br(e, t, n, r) {
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
      var p = i.lane, w = i.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: w,
          lane: 0,
          tag: i.tag,
          payload: i.payload,
          callback: i.callback,
          next: null
        });
        e: {
          var k = e, y = i;
          switch (p = t, w = n, y.tag) {
            case 1:
              if (k = y.payload, typeof k == "function") {
                m = k.call(w, m, p);
                break e;
              }
              m = k;
              break e;
            case 3:
              k.flags = k.flags & -65537 | 128;
            case 0:
              if (k = y.payload, p = typeof k == "function" ? k.call(w, m, p) : k, p == null) break e;
              m = V({}, m, p);
              break e;
            case 2:
              et = !0;
          }
        }
        i.callback !== null && i.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [i] : p.push(i));
      } else w = { eventTime: w, lane: p, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, h === null ? (c = h = w, s = m) : h = h.next = w, o |= p;
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
function Ri(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(g(191, l));
      l.call(r);
    }
  }
}
var ur = {}, $e = vt(ur), Xn = vt(ur), Gn = vt(ur);
function xt(e) {
  if (e === ur) throw Error(g(174));
  return e;
}
function Eo(e, t) {
  switch (j(Gn, t), j(Xn, e), j($e, ur), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : au(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = au(t, e);
  }
  F($e), j($e, t);
}
function un() {
  F($e), F(Xn), F(Gn);
}
function ga(e) {
  xt(Gn.current);
  var t = xt($e.current), n = au(t, e.type);
  t !== n && (j(Xn, e), j($e, n));
}
function Co(e) {
  Xn.current === e && (F($e), F(Xn));
}
var A = vt(0);
function el(e) {
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
var Kl = [];
function xo() {
  for (var e = 0; e < Kl.length; e++) Kl[e]._workInProgressVersionPrimary = null;
  Kl.length = 0;
}
var Rr = Ze.ReactCurrentDispatcher, Yl = Ze.ReactCurrentBatchConfig, Rt = 0, $ = null, X = null, J = null, tl = !1, Mn = !1, Zn = 0, fd = 0;
function ne() {
  throw Error(g(321));
}
function _o(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!je(e[n], t[n])) return !1;
  return !0;
}
function No(e, t, n, r, l, u) {
  if (Rt = u, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Rr.current = e === null || e.memoizedState === null ? hd : vd, e = n(r, l), Mn) {
    u = 0;
    do {
      if (Mn = !1, Zn = 0, 25 <= u) throw Error(g(301));
      u += 1, J = X = null, t.updateQueue = null, Rr.current = yd, e = n(r, l);
    } while (Mn);
  }
  if (Rr.current = nl, t = X !== null && X.next !== null, Rt = 0, J = X = $ = null, tl = !1, t) throw Error(g(300));
  return e;
}
function Po() {
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
function Xl(e) {
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
function Gl(e) {
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
function wa() {
}
function ka(e, t) {
  var n = $, r = Ne(), l = t(), u = !je(r.memoizedState, l);
  if (u && (r.memoizedState = l, fe = !0), r = r.queue, zo(Ca.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, qn(9, Ea.bind(null, n, r, l, t), void 0, null), q === null) throw Error(g(349));
    Rt & 30 || Sa(n, t, l);
  }
  return l;
}
function Sa(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ea(e, t, n, r) {
  t.value = n, t.getSnapshot = r, xa(t) && _a(e);
}
function Ca(e, t, n) {
  return n(function() {
    xa(t) && _a(e);
  });
}
function xa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !je(e, n);
  } catch {
    return !0;
  }
}
function _a(e) {
  var t = Xe(e, 1);
  t !== null && Oe(t, e, 1, -1);
}
function Di(e) {
  var t = Fe();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Jn, lastRenderedState: e }, t.queue = e, e = e.dispatch = md.bind(null, $, e), [t.memoizedState, e];
}
function qn(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Na() {
  return Ne().memoizedState;
}
function Dr(e, t, n, r) {
  var l = Fe();
  $.flags |= e, l.memoizedState = qn(1 | t, n, void 0, r === void 0 ? null : r);
}
function hl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var u = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (u = o.destroy, r !== null && _o(r, o.deps)) {
      l.memoizedState = qn(t, n, u, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = qn(1 | t, n, u, r);
}
function Mi(e, t) {
  return Dr(8390656, 8, e, t);
}
function zo(e, t) {
  return hl(2048, 8, e, t);
}
function Pa(e, t) {
  return hl(4, 2, e, t);
}
function za(e, t) {
  return hl(4, 4, e, t);
}
function La(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ta(e, t, n) {
  return n = n != null ? n.concat([e]) : null, hl(4, 4, La.bind(null, t, e), n);
}
function Lo() {
}
function Ra(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Da(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && _o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ma(e, t, n) {
  return Rt & 21 ? (je(n, t) || (n = Us(), $.lanes |= n, Dt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, fe = !0), e.memoizedState = n);
}
function dd(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Yl.transition;
  Yl.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, Yl.transition = r;
  }
}
function Oa() {
  return Ne().memoizedState;
}
function pd(e, t, n) {
  var r = ft(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ja(e)) Ia(t, n);
  else if (n = va(e, t, n, r), n !== null) {
    var l = ie();
    Oe(n, e, r, l), Fa(n, t, r);
  }
}
function md(e, t, n) {
  var r = ft(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ja(e)) Ia(t, l);
  else {
    var u = e.alternate;
    if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
      var o = t.lastRenderedState, i = u(o, n);
      if (l.hasEagerState = !0, l.eagerState = i, je(i, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, ko(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = va(e, t, l, r), n !== null && (l = ie(), Oe(n, e, r, l), Fa(n, t, r));
  }
}
function ja(e) {
  var t = e.alternate;
  return e === $ || t !== null && t === $;
}
function Ia(e, t) {
  Mn = tl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Fa(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, uo(e, n);
  }
}
var nl = { readContext: _e, useCallback: ne, useContext: ne, useEffect: ne, useImperativeHandle: ne, useInsertionEffect: ne, useLayoutEffect: ne, useMemo: ne, useReducer: ne, useRef: ne, useState: ne, useDebugValue: ne, useDeferredValue: ne, useTransition: ne, useMutableSource: ne, useSyncExternalStore: ne, useId: ne, unstable_isNewReconciler: !1 }, hd = { readContext: _e, useCallback: function(e, t) {
  return Fe().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: _e, useEffect: Mi, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Dr(
    4194308,
    4,
    La.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Dr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Dr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Fe();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Fe();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = pd.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Fe();
  return e = { current: e }, t.memoizedState = e;
}, useState: Di, useDebugValue: Lo, useDeferredValue: function(e) {
  return Fe().memoizedState = e;
}, useTransition: function() {
  var e = Di(!1), t = e[0];
  return e = dd.bind(null, e[1]), Fe().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = $, l = Fe();
  if (U) {
    if (n === void 0) throw Error(g(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(g(349));
    Rt & 30 || Sa(r, t, n);
  }
  l.memoizedState = n;
  var u = { value: n, getSnapshot: t };
  return l.queue = u, Mi(Ca.bind(
    null,
    r,
    u,
    e
  ), [e]), r.flags |= 2048, qn(9, Ea.bind(null, r, u, n, t), void 0, null), n;
}, useId: function() {
  var e = Fe(), t = q.identifierPrefix;
  if (U) {
    var n = We, r = Be;
    n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Zn++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = fd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, vd = {
  readContext: _e,
  useCallback: Ra,
  useContext: _e,
  useEffect: zo,
  useImperativeHandle: Ta,
  useInsertionEffect: Pa,
  useLayoutEffect: za,
  useMemo: Da,
  useReducer: Xl,
  useRef: Na,
  useState: function() {
    return Xl(Jn);
  },
  useDebugValue: Lo,
  useDeferredValue: function(e) {
    var t = Ne();
    return Ma(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = Xl(Jn)[0], t = Ne().memoizedState;
    return [e, t];
  },
  useMutableSource: wa,
  useSyncExternalStore: ka,
  useId: Oa,
  unstable_isNewReconciler: !1
}, yd = { readContext: _e, useCallback: Ra, useContext: _e, useEffect: zo, useImperativeHandle: Ta, useInsertionEffect: Pa, useLayoutEffect: za, useMemo: Da, useReducer: Gl, useRef: Na, useState: function() {
  return Gl(Jn);
}, useDebugValue: Lo, useDeferredValue: function(e) {
  var t = Ne();
  return X === null ? t.memoizedState = e : Ma(t, X.memoizedState, e);
}, useTransition: function() {
  var e = Gl(Jn)[0], t = Ne().memoizedState;
  return [e, t];
}, useMutableSource: wa, useSyncExternalStore: ka, useId: Oa, unstable_isNewReconciler: !1 };
function Le(e, t) {
  if (e && e.defaultProps) {
    t = V({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Tu(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : V({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var vl = { isMounted: function(e) {
  return (e = e._reactInternals) ? jt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = ft(e), u = Qe(r, l);
  u.payload = t, n != null && (u.callback = n), t = at(e, u, l), t !== null && (Oe(t, e, l, r), Tr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ie(), l = ft(e), u = Qe(r, l);
  u.tag = 1, u.payload = t, n != null && (u.callback = n), t = at(e, u, l), t !== null && (Oe(t, e, l, r), Tr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ie(), r = ft(e), l = Qe(n, r);
  l.tag = 2, t != null && (l.callback = t), t = at(e, l, r), t !== null && (Oe(t, e, r, n), Tr(t, e, r));
} };
function Oi(e, t, n, r, l, u, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, o) : t.prototype && t.prototype.isPureReactComponent ? !Wn(n, r) || !Wn(l, u) : !0;
}
function Ua(e, t, n) {
  var r = !1, l = mt, u = t.contextType;
  return typeof u == "object" && u !== null ? u = _e(u) : (l = pe(t) ? Lt : ue.current, r = t.contextTypes, u = (r = r != null) ? nn(e, l) : mt), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = vl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
}
function ji(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && vl.enqueueReplaceState(t, t.state, null);
}
function Ru(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, So(e);
  var u = t.contextType;
  typeof u == "object" && u !== null ? l.context = _e(u) : (u = pe(t) ? Lt : ue.current, l.context = nn(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Tu(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && vl.enqueueReplaceState(l, l.state, null), br(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function on(e, t) {
  try {
    var n = "", r = t;
    do
      n += Wc(r), r = r.return;
    while (r);
    var l = n;
  } catch (u) {
    l = `
Error generating stack: ` + u.message + `
` + u.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function Zl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Du(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var gd = typeof WeakMap == "function" ? WeakMap : Map;
function Aa(e, t, n) {
  n = Qe(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    ll || (ll = !0, Hu = r), Du(e, t);
  }, n;
}
function $a(e, t, n) {
  n = Qe(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Du(e, t);
    };
  }
  var u = e.stateNode;
  return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
    Du(e, t), typeof r != "function" && (ct === null ? ct = /* @__PURE__ */ new Set([this]) : ct.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ii(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new gd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Dd.bind(null, e, t, n), t.then(e, e));
}
function Fi(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ui(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Qe(-1, 1), t.tag = 2, at(n, t, 1))), n.lanes |= 1), e);
}
var wd = Ze.ReactCurrentOwner, fe = !1;
function oe(e, t, n, r) {
  t.child = e === null ? ha(t, null, n, r) : ln(t, e.child, n, r);
}
function Ai(e, t, n, r, l) {
  n = n.render;
  var u = t.ref;
  return bt(t, l), r = No(e, t, n, r, u, l), n = Po(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (U && n && mo(t), t.flags |= 1, oe(e, t, r, l), t.child);
}
function $i(e, t, n, r, l) {
  if (e === null) {
    var u = n.type;
    return typeof u == "function" && !Fo(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Va(e, t, u, r, l)) : (e = Ir(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (u = e.child, !(e.lanes & l)) {
    var o = u.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Wn, n(o, r) && e.ref === t.ref) return Ge(e, t, l);
  }
  return t.flags |= 1, e = dt(u, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Va(e, t, n, r, l) {
  if (e !== null) {
    var u = e.memoizedProps;
    if (Wn(u, r) && e.ref === t.ref) if (fe = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) e.flags & 131072 && (fe = !0);
    else return t.lanes = e.lanes, Ge(e, t, l);
  }
  return Mu(e, t, n, r, l);
}
function Ha(e, t, n) {
  var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, j(Xt, he), he |= n;
  else {
    if (!(n & 1073741824)) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, j(Xt, he), he |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, j(Xt, he), he |= r;
  }
  else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, j(Xt, he), he |= r;
  return oe(e, t, l, n), t.child;
}
function Ba(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Mu(e, t, n, r, l) {
  var u = pe(n) ? Lt : ue.current;
  return u = nn(t, u), bt(t, l), n = No(e, t, n, r, u, l), r = Po(), e !== null && !fe ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, Ge(e, t, l)) : (U && r && mo(t), t.flags |= 1, oe(e, t, n, l), t.child);
}
function Vi(e, t, n, r, l) {
  if (pe(n)) {
    var u = !0;
    Xr(t);
  } else u = !1;
  if (bt(t, l), t.stateNode === null) Mr(e, t), Ua(t, n, r), Ru(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, i = t.memoizedProps;
    o.props = i;
    var s = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = _e(c) : (c = pe(n) ? Lt : ue.current, c = nn(t, c));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== c) && ji(t, o, r, c), et = !1;
    var p = t.memoizedState;
    o.state = p, br(t, r, o, l), s = t.memoizedState, i !== r || p !== s || de.current || et ? (typeof h == "function" && (Tu(t, n, h, r), s = t.memoizedState), (i = et || Oi(t, n, i, r, p, s, c)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = c, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, ya(e, t), i = t.memoizedProps, c = t.type === t.elementType ? i : Le(t.type, i), o.props = c, m = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = _e(s) : (s = pe(n) ? Lt : ue.current, s = nn(t, s));
    var w = n.getDerivedStateFromProps;
    (h = typeof w == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== m || p !== s) && ji(t, o, r, s), et = !1, p = t.memoizedState, o.state = p, br(t, r, o, l);
    var k = t.memoizedState;
    i !== m || p !== k || de.current || et ? (typeof w == "function" && (Tu(t, n, w, r), k = t.memoizedState), (c = et || Oi(t, n, c, r, p, k, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, k, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, k, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = k), o.props = r, o.state = k, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ou(e, t, n, r, u, l);
}
function Ou(e, t, n, r, l, u) {
  Ba(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Ni(t, n, !1), Ge(e, t, u);
  r = t.stateNode, wd.current = t;
  var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = ln(t, e.child, null, u), t.child = ln(t, null, i, u)) : oe(e, t, i, u), t.memoizedState = r.state, l && Ni(t, n, !0), t.child;
}
function Wa(e) {
  var t = e.stateNode;
  t.pendingContext ? _i(e, t.pendingContext, t.pendingContext !== t.context) : t.context && _i(e, t.context, !1), Eo(e, t.containerInfo);
}
function Hi(e, t, n, r, l) {
  return rn(), vo(l), t.flags |= 256, oe(e, t, n, r), t.child;
}
var ju = { dehydrated: null, treeContext: null, retryLane: 0 };
function Iu(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Qa(e, t, n) {
  var r = t.pendingProps, l = A.current, u = !1, o = (t.flags & 128) !== 0, i;
  if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), j(A, l & 1), e === null)
    return zu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, o = { mode: "hidden", children: o }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = o) : u = wl(o, r, 0, null), e = zt(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = Iu(n), t.memoizedState = ju, e) : To(t, o));
  if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return kd(e, t, o, r, i, l, n);
  if (u) {
    u = r.fallback, o = t.mode, l = e.child, i = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = dt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? u = dt(i, u) : (u = zt(u, o, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, o = e.child.memoizedState, o = o === null ? Iu(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, u.memoizedState = o, u.childLanes = e.childLanes & ~n, t.memoizedState = ju, r;
  }
  return u = e.child, e = u.sibling, r = dt(u, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function To(e, t) {
  return t = wl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Sr(e, t, n, r) {
  return r !== null && vo(r), ln(t, e.child, null, n), e = To(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function kd(e, t, n, r, l, u, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = Zl(Error(g(422))), Sr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = wl({ mode: "visible", children: r.children }, l, 0, null), u = zt(u, l, o, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, t.mode & 1 && ln(t, e.child, null, o), t.child.memoizedState = Iu(o), t.memoizedState = ju, u);
  if (!(t.mode & 1)) return Sr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
    return r = i, u = Error(g(419)), r = Zl(u, r, void 0), Sr(e, t, o, r);
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
    return Io(), r = Zl(Error(g(421))), Sr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Md.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, ve = st(l.nextSibling), ye = t, U = !0, De = null, e !== null && (Se[Ee++] = Be, Se[Ee++] = We, Se[Ee++] = Tt, Be = e.id, We = e.overflow, Tt = t), t = To(t, r.children), t.flags |= 4096, t);
}
function Bi(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Lu(e.return, t, n);
}
function Jl(e, t, n, r, l) {
  var u = e.memoizedState;
  u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
}
function Ka(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, u = r.tail;
  if (oe(e, t, r.children, n), r = A.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Bi(e, n, t);
      else if (e.tag === 19) Bi(e, n, t);
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
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && el(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Jl(t, !1, l, n, u);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && el(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      Jl(t, !0, n, null, u);
      break;
    case "together":
      Jl(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Mr(e, t) {
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
function Sd(e, t, n) {
  switch (t.tag) {
    case 3:
      Wa(t), rn();
      break;
    case 5:
      ga(t);
      break;
    case 1:
      pe(t.type) && Xr(t);
      break;
    case 4:
      Eo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      j(Jr, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (j(A, A.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Qa(e, t, n) : (j(A, A.current & 1), e = Ge(e, t, n), e !== null ? e.sibling : null);
      j(A, A.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return Ka(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), j(A, A.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ha(e, t, n);
  }
  return Ge(e, t, n);
}
var Ya, Fu, Xa, Ga;
Ya = function(e, t) {
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
Fu = function() {
};
Xa = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, xt($e.current);
    var u = null;
    switch (n) {
      case "input":
        l = uu(e, l), r = uu(e, r), u = [];
        break;
      case "select":
        l = V({}, l, { value: void 0 }), r = V({}, r, { value: void 0 }), u = [];
        break;
      case "textarea":
        l = su(e, l), r = su(e, r), u = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Kr);
    }
    cu(n, r);
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
Ga = function(e, t, n, r) {
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
function Ed(e, t, n) {
  var r = t.pendingProps;
  switch (ho(t), t.tag) {
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
      return pe(t.type) && Yr(), re(t), null;
    case 3:
      return r = t.stateNode, un(), F(de), F(ue), xo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (wr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, De !== null && (Qu(De), De = null))), Fu(e, t), re(t), null;
    case 5:
      Co(t);
      var l = xt(Gn.current);
      if (n = t.type, e !== null && t.stateNode != null) Xa(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return re(t), null;
        }
        if (e = xt($e.current), wr(t)) {
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
              for (l = 0; l < Pn.length; l++) I(Pn[l], r);
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
              Jo(r, u), I("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!u.multiple }, I("invalid", r);
              break;
            case "textarea":
              bo(r, u), I("invalid", r);
          }
          cu(n, u), l = null;
          for (var o in u) if (u.hasOwnProperty(o)) {
            var i = u[o];
            o === "children" ? typeof i == "string" ? r.textContent !== i && (u.suppressHydrationWarning !== !0 && gr(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (u.suppressHydrationWarning !== !0 && gr(
              r.textContent,
              i,
              e
            ), l = ["children", "" + i]) : Fn.hasOwnProperty(o) && i != null && o === "onScroll" && I("scroll", r);
          }
          switch (n) {
            case "input":
              cr(r), qo(r, u, !0);
              break;
            case "textarea":
              cr(r), ei(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof u.onClick == "function" && (r.onclick = Kr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Cs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ue] = t, e[Yn] = r, Ya(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = fu(n, r), n) {
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
                for (l = 0; l < Pn.length; l++) I(Pn[l], e);
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
                Jo(e, r), l = uu(e, r), I("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = V({}, r, { value: void 0 }), I("invalid", e);
                break;
              case "textarea":
                bo(e, r), l = su(e, r), I("invalid", e);
                break;
              default:
                l = r;
            }
            cu(n, l), i = l;
            for (u in i) if (i.hasOwnProperty(u)) {
              var s = i[u];
              u === "style" ? Ns(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && xs(e, s)) : u === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Un(e, s) : typeof s == "number" && Un(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Fn.hasOwnProperty(u) ? s != null && u === "onScroll" && I("scroll", e) : s != null && bu(e, u, s, o));
            }
            switch (n) {
              case "input":
                cr(e), qo(e, r, !1);
                break;
              case "textarea":
                cr(e), ei(e);
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
                typeof l.onClick == "function" && (e.onclick = Kr);
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
      if (e && t.stateNode != null) Ga(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (n = xt(Gn.current), xt($e.current), wr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ue] = t, (u = r.nodeValue !== n) && (e = ye, e !== null)) switch (e.tag) {
            case 3:
              gr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && gr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          u && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ue] = t, t.stateNode = r;
      }
      return re(t), null;
    case 13:
      if (F(A), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && ve !== null && t.mode & 1 && !(t.flags & 128)) pa(), rn(), t.flags |= 98560, u = !1;
        else if (u = wr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!u) throw Error(g(318));
            if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(g(317));
            u[Ue] = t;
          } else rn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          re(t), u = !1;
        } else De !== null && (Qu(De), De = null), u = !0;
        if (!u) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || A.current & 1 ? G === 0 && (G = 3) : Io())), t.updateQueue !== null && (t.flags |= 4), re(t), null);
    case 4:
      return un(), Fu(e, t), e === null && Qn(t.stateNode.containerInfo), re(t), null;
    case 10:
      return wo(t.type._context), re(t), null;
    case 17:
      return pe(t.type) && Yr(), re(t), null;
    case 19:
      if (F(A), u = t.memoizedState, u === null) return re(t), null;
      if (r = (t.flags & 128) !== 0, o = u.rendering, o === null) if (r) En(u, !1);
      else {
        if (G !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = el(e), o !== null) {
            for (t.flags |= 128, En(u, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, o = u.alternate, o === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = o.childLanes, u.lanes = o.lanes, u.child = o.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = o.memoizedProps, u.memoizedState = o.memoizedState, u.updateQueue = o.updateQueue, u.type = o.type, e = o.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return j(A, A.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        u.tail !== null && Q() > sn && (t.flags |= 128, r = !0, En(u, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = el(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), En(u, !0), u.tail === null && u.tailMode === "hidden" && !o.alternate && !U) return re(t), null;
        } else 2 * Q() - u.renderingStartTime > sn && n !== 1073741824 && (t.flags |= 128, r = !0, En(u, !1), t.lanes = 4194304);
        u.isBackwards ? (o.sibling = t.child, t.child = o) : (n = u.last, n !== null ? n.sibling = o : t.child = o, u.last = o);
      }
      return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = Q(), t.sibling = null, n = A.current, j(A, r ? n & 1 | 2 : n & 1), t) : (re(t), null);
    case 22:
    case 23:
      return jo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? he & 1073741824 && (re(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : re(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function Cd(e, t) {
  switch (ho(t), t.tag) {
    case 1:
      return pe(t.type) && Yr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return un(), F(de), F(ue), xo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Co(t), null;
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
      return wo(t.type._context), null;
    case 22:
    case 23:
      return jo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Er = !1, le = !1, xd = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function Yt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    H(e, t, r);
  }
  else n.current = null;
}
function Uu(e, t, n) {
  try {
    n();
  } catch (r) {
    H(e, t, r);
  }
}
var Wi = !1;
function _d(e, t) {
  if (Su = Br, e = ea(), po(e)) {
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
          for (var w; m !== n || l !== 0 && m.nodeType !== 3 || (i = o + l), m !== u || r !== 0 && m.nodeType !== 3 || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (w = m.firstChild) !== null; )
            p = m, m = w;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++c === l && (i = o), p === u && ++h === r && (s = o), (w = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = w;
        }
        n = i === -1 || s === -1 ? null : { start: i, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Eu = { focusedElem: e, selectionRange: n }, Br = !1, E = t; E !== null; ) if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
  else for (; E !== null; ) {
    t = E;
    try {
      var k = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (k !== null) {
            var y = k.memoizedProps, T = k.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? y : Le(t.type, y), T);
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
    } catch (v) {
      H(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, E = e;
      break;
    }
    E = t.return;
  }
  return k = Wi, Wi = !1, k;
}
function On(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var u = l.destroy;
        l.destroy = void 0, u !== void 0 && Uu(t, n, u);
      }
      l = l.next;
    } while (l !== r);
  }
}
function yl(e, t) {
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
function Au(e) {
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
function Za(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, Za(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ue], delete t[Yn], delete t[_u], delete t[id], delete t[sd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Ja(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Qi(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Ja(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function $u(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Kr));
  else if (r !== 4 && (e = e.child, e !== null)) for ($u(e, t, n), e = e.sibling; e !== null; ) $u(e, t, n), e = e.sibling;
}
function Vu(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Vu(e, t, n), e = e.sibling; e !== null; ) Vu(e, t, n), e = e.sibling;
}
var b = null, Te = !1;
function Je(e, t, n) {
  for (n = n.child; n !== null; ) qa(e, t, n), n = n.sibling;
}
function qa(e, t, n) {
  if (Ae && typeof Ae.onCommitFiberUnmount == "function") try {
    Ae.onCommitFiberUnmount(al, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      le || Yt(n, t);
    case 6:
      var r = b, l = Te;
      b = null, Je(e, t, n), b = r, Te = l, b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : b.removeChild(n.stateNode));
      break;
    case 18:
      b !== null && (Te ? (e = b, n = n.stateNode, e.nodeType === 8 ? Wl(e.parentNode, n) : e.nodeType === 1 && Wl(e, n), Hn(e)) : Wl(b, n.stateNode));
      break;
    case 4:
      r = b, l = Te, b = n.stateNode.containerInfo, Te = !0, Je(e, t, n), b = r, Te = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!le && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var u = l, o = u.destroy;
          u = u.tag, o !== void 0 && (u & 2 || u & 4) && Uu(n, t, o), l = l.next;
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
function Ki(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xd()), t.forEach(function(r) {
      var l = Od.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var u = e, o = t, i = o;
      e: for (; i !== null; ) {
        switch (i.tag) {
          case 5:
            b = i.stateNode, Te = !1;
            break e;
          case 3:
            b = i.stateNode.containerInfo, Te = !0;
            break e;
          case 4:
            b = i.stateNode.containerInfo, Te = !0;
            break e;
        }
        i = i.return;
      }
      if (b === null) throw Error(g(160));
      qa(u, o, l), b = null, Te = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      H(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) ba(t, e), t = t.sibling;
}
function ba(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ze(t, e), Ie(e), r & 4) {
        try {
          On(3, e, e.return), yl(3, e);
        } catch (y) {
          H(e, e.return, y);
        }
        try {
          On(5, e, e.return);
        } catch (y) {
          H(e, e.return, y);
        }
      }
      break;
    case 1:
      ze(t, e), Ie(e), r & 512 && n !== null && Yt(n, n.return);
      break;
    case 5:
      if (ze(t, e), Ie(e), r & 512 && n !== null && Yt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Un(l, "");
        } catch (y) {
          H(e, e.return, y);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var u = e.memoizedProps, o = n !== null ? n.memoizedProps : u, i = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          i === "input" && u.type === "radio" && u.name != null && Ss(l, u), fu(i, o);
          var c = fu(i, u);
          for (o = 0; o < s.length; o += 2) {
            var h = s[o], m = s[o + 1];
            h === "style" ? Ns(l, m) : h === "dangerouslySetInnerHTML" ? xs(l, m) : h === "children" ? Un(l, m) : bu(l, h, m, c);
          }
          switch (i) {
            case "input":
              ou(l, u);
              break;
            case "textarea":
              Es(l, u);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!u.multiple;
              var w = u.value;
              w != null ? Gt(l, !!u.multiple, w, !1) : p !== !!u.multiple && (u.defaultValue != null ? Gt(
                l,
                !!u.multiple,
                u.defaultValue,
                !0
              ) : Gt(l, !!u.multiple, u.multiple ? [] : "", !1));
          }
          l[Yn] = u;
        } catch (y) {
          H(e, e.return, y);
        }
      }
      break;
    case 6:
      if (ze(t, e), Ie(e), r & 4) {
        if (e.stateNode === null) throw Error(g(162));
        l = e.stateNode, u = e.memoizedProps;
        try {
          l.nodeValue = u;
        } catch (y) {
          H(e, e.return, y);
        }
      }
      break;
    case 3:
      if (ze(t, e), Ie(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Hn(t.containerInfo);
      } catch (y) {
        H(e, e.return, y);
      }
      break;
    case 4:
      ze(t, e), Ie(e);
      break;
    case 13:
      ze(t, e), Ie(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (Mo = Q())), r & 4 && Ki(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (le = (c = le) || h, ze(t, e), le = c) : ze(t, e), Ie(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (E = e, h = e.child; h !== null; ) {
          for (m = E = h; E !== null; ) {
            switch (p = E, w = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                On(4, p, p.return);
                break;
              case 1:
                Yt(p, p.return);
                var k = p.stateNode;
                if (typeof k.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, k.props = t.memoizedProps, k.state = t.memoizedState, k.componentWillUnmount();
                  } catch (y) {
                    H(r, n, y);
                  }
                }
                break;
              case 5:
                Yt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  Xi(m);
                  continue;
                }
            }
            w !== null ? (w.return = p, E = w) : Xi(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, c ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (i = m.stateNode, s = m.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = _s("display", o));
              } catch (y) {
                H(e, e.return, y);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (y) {
              H(e, e.return, y);
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
      ze(t, e), Ie(e), r & 4 && Ki(e);
      break;
    case 21:
      break;
    default:
      ze(
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
          if (Ja(n)) {
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
          var u = Qi(e);
          Vu(e, u, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, i = Qi(e);
          $u(e, i, o);
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
function Nd(e, t, n) {
  E = e, ec(e);
}
function ec(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, u = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Er;
      if (!o) {
        var i = l.alternate, s = i !== null && i.memoizedState !== null || le;
        i = Er;
        var c = le;
        if (Er = o, (le = s) && !c) for (E = l; E !== null; ) o = E, s = o.child, o.tag === 22 && o.memoizedState !== null ? Gi(l) : s !== null ? (s.return = o, E = s) : Gi(l);
        for (; u !== null; ) E = u, ec(u), u = u.sibling;
        E = l, Er = i, le = c;
      }
      Yi(e);
    } else l.subtreeFlags & 8772 && u !== null ? (u.return = l, E = u) : Yi(e);
  }
}
function Yi(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            le || yl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !le) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var u = t.updateQueue;
            u !== null && Ri(t, u, r);
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
              Ri(t, o, n);
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
        le || t.flags & 512 && Au(t);
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
function Xi(e) {
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
function Gi(e) {
  for (; E !== null; ) {
    var t = E;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            yl(4, t);
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
            Au(t);
          } catch (s) {
            H(t, u, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Au(t);
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
var Pd = Math.ceil, rl = Ze.ReactCurrentDispatcher, Ro = Ze.ReactCurrentOwner, xe = Ze.ReactCurrentBatchConfig, D = 0, q = null, Y = null, ee = 0, he = 0, Xt = vt(0), G = 0, bn = null, Dt = 0, gl = 0, Do = 0, jn = null, ce = null, Mo = 0, sn = 1 / 0, Ve = null, ll = !1, Hu = null, ct = null, Cr = !1, lt = null, ul = 0, In = 0, Bu = null, Or = -1, jr = 0;
function ie() {
  return D & 6 ? Q() : Or !== -1 ? Or : Or = Q();
}
function ft(e) {
  return e.mode & 1 ? D & 2 && ee !== 0 ? ee & -ee : cd.transition !== null ? (jr === 0 && (jr = Us()), jr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Qs(e.type)), e) : 1;
}
function Oe(e, t, n, r) {
  if (50 < In) throw In = 0, Bu = null, Error(g(185));
  nr(e, n, r), (!(D & 2) || e !== q) && (e === q && (!(D & 2) && (gl |= n), G === 4 && nt(e, ee)), me(e, r), n === 1 && D === 0 && !(t.mode & 1) && (sn = Q() + 500, ml && yt()));
}
function me(e, t) {
  var n = e.callbackNode;
  cf(e, t);
  var r = Hr(e, e === q ? ee : 0);
  if (r === 0) n !== null && ri(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ri(n), t === 1) e.tag === 0 ? ad(Zi.bind(null, e)) : ca(Zi.bind(null, e)), ud(function() {
      !(D & 6) && yt();
    }), n = null;
    else {
      switch (As(r)) {
        case 1:
          n = lo;
          break;
        case 4:
          n = Is;
          break;
        case 16:
          n = Vr;
          break;
        case 536870912:
          n = Fs;
          break;
        default:
          n = Vr;
      }
      n = sc(n, tc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function tc(e, t) {
  if (Or = -1, jr = 0, D & 6) throw Error(g(327));
  var n = e.callbackNode;
  if (en() && e.callbackNode !== n) return null;
  var r = Hr(e, e === q ? ee : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ol(e, r);
  else {
    t = r;
    var l = D;
    D |= 2;
    var u = rc();
    (q !== e || ee !== t) && (Ve = null, sn = Q() + 500, Pt(e, t));
    do
      try {
        Td();
        break;
      } catch (i) {
        nc(e, i);
      }
    while (!0);
    go(), rl.current = u, D = l, Y !== null ? t = 0 : (q = null, ee = 0, t = G);
  }
  if (t !== 0) {
    if (t === 2 && (l = vu(e), l !== 0 && (r = l, t = Wu(e, l))), t === 1) throw n = bn, Pt(e, 0), nt(e, r), me(e, Q()), n;
    if (t === 6) nt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !zd(l) && (t = ol(e, r), t === 2 && (u = vu(e), u !== 0 && (r = u, t = Wu(e, u))), t === 1)) throw n = bn, Pt(e, 0), nt(e, r), me(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          St(e, ce, Ve);
          break;
        case 3:
          if (nt(e, r), (r & 130023424) === r && (t = Mo + 500 - Q(), 10 < t)) {
            if (Hr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ie(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = xu(St.bind(null, e, ce, Ve), t);
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
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Pd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = xu(St.bind(null, e, ce, Ve), r);
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
  return me(e, Q()), e.callbackNode === n ? tc.bind(null, e) : null;
}
function Wu(e, t) {
  var n = jn;
  return e.current.memoizedState.isDehydrated && (Pt(e, t).flags |= 256), e = ol(e, t), e !== 2 && (t = ce, ce = n, t !== null && Qu(t)), e;
}
function Qu(e) {
  ce === null ? ce = e : ce.push.apply(ce, e);
}
function zd(e) {
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
  for (t &= ~Do, t &= ~gl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Me(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function Zi(e) {
  if (D & 6) throw Error(g(327));
  en();
  var t = Hr(e, 0);
  if (!(t & 1)) return me(e, Q()), null;
  var n = ol(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = vu(e);
    r !== 0 && (t = r, n = Wu(e, r));
  }
  if (n === 1) throw n = bn, Pt(e, 0), nt(e, t), me(e, Q()), n;
  if (n === 6) throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, St(e, ce, Ve), me(e, Q()), null;
}
function Oo(e, t) {
  var n = D;
  D |= 1;
  try {
    return e(t);
  } finally {
    D = n, D === 0 && (sn = Q() + 500, ml && yt());
  }
}
function Mt(e) {
  lt !== null && lt.tag === 0 && !(D & 6) && en();
  var t = D;
  D |= 1;
  var n = xe.transition, r = O;
  try {
    if (xe.transition = null, O = 1, e) return e();
  } finally {
    O = r, xe.transition = n, D = t, !(D & 6) && yt();
  }
}
function jo() {
  he = Xt.current, F(Xt);
}
function Pt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, ld(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (ho(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Yr();
        break;
      case 3:
        un(), F(de), F(ue), xo();
        break;
      case 5:
        Co(r);
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
        wo(r.type._context);
        break;
      case 22:
      case 23:
        jo();
    }
    n = n.return;
  }
  if (q = e, Y = e = dt(e.current, null), ee = he = t, G = 0, bn = null, Do = gl = Dt = 0, ce = jn = null, Ct !== null) {
    for (t = 0; t < Ct.length; t++) if (n = Ct[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, u = n.pending;
      if (u !== null) {
        var o = u.next;
        u.next = l, r.next = o;
      }
      n.pending = r;
    }
    Ct = null;
  }
  return e;
}
function nc(e, t) {
  do {
    var n = Y;
    try {
      if (go(), Rr.current = nl, tl) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        tl = !1;
      }
      if (Rt = 0, J = X = $ = null, Mn = !1, Zn = 0, Ro.current = null, n === null || n.return === null) {
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
          var w = Fi(o);
          if (w !== null) {
            w.flags &= -257, Ui(w, o, i, u, t), w.mode & 1 && Ii(u, c, t), t = w, s = c;
            var k = t.updateQueue;
            if (k === null) {
              var y = /* @__PURE__ */ new Set();
              y.add(s), t.updateQueue = y;
            } else k.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ii(u, c, t), Io();
              break e;
            }
            s = Error(g(426));
          }
        } else if (U && i.mode & 1) {
          var T = Fi(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), Ui(T, o, i, u, t), vo(on(s, i));
            break e;
          }
        }
        u = s = on(s, i), G !== 4 && (G = 2), jn === null ? jn = [u] : jn.push(u), u = o;
        do {
          switch (u.tag) {
            case 3:
              u.flags |= 65536, t &= -t, u.lanes |= t;
              var f = Aa(u, s, t);
              Ti(u, f);
              break e;
            case 1:
              i = s;
              var a = u.type, d = u.stateNode;
              if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ct === null || !ct.has(d)))) {
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var v = $a(u, i, t);
                Ti(u, v);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      uc(n);
    } catch (S) {
      t = S, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function rc() {
  var e = rl.current;
  return rl.current = nl, e === null ? nl : e;
}
function Io() {
  (G === 0 || G === 3 || G === 2) && (G = 4), q === null || !(Dt & 268435455) && !(gl & 268435455) || nt(q, ee);
}
function ol(e, t) {
  var n = D;
  D |= 2;
  var r = rc();
  (q !== e || ee !== t) && (Ve = null, Pt(e, t));
  do
    try {
      Ld();
      break;
    } catch (l) {
      nc(e, l);
    }
  while (!0);
  if (go(), D = n, rl.current = r, Y !== null) throw Error(g(261));
  return q = null, ee = 0, G;
}
function Ld() {
  for (; Y !== null; ) lc(Y);
}
function Td() {
  for (; Y !== null && !ef(); ) lc(Y);
}
function lc(e) {
  var t = ic(e.alternate, e, he);
  e.memoizedProps = e.pendingProps, t === null ? uc(e) : Y = t, Ro.current = null;
}
function uc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Cd(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        G = 6, Y = null;
        return;
      }
    } else if (n = Ed(n, t, he), n !== null) {
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
  var r = O, l = xe.transition;
  try {
    xe.transition = null, O = 1, Rd(e, t, n, r);
  } finally {
    xe.transition = l, O = r;
  }
  return null;
}
function Rd(e, t, n, r) {
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
  if (ff(e, u), e === q && (Y = q = null, ee = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Cr || (Cr = !0, sc(Vr, function() {
    return en(), null;
  })), u = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || u) {
    u = xe.transition, xe.transition = null;
    var o = O;
    O = 1;
    var i = D;
    D |= 4, Ro.current = null, _d(e, n), ba(n, e), Jf(Eu), Br = !!Su, Eu = Su = null, e.current = n, Nd(n), tf(), D = i, O = o, xe.transition = u;
  } else e.current = n;
  if (Cr && (Cr = !1, lt = e, ul = l), u = e.pendingLanes, u === 0 && (ct = null), lf(n.stateNode), me(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (ll) throw ll = !1, e = Hu, Hu = null, e;
  return ul & 1 && e.tag !== 0 && en(), u = e.pendingLanes, u & 1 ? e === Bu ? In++ : (In = 0, Bu = e) : In = 0, yt(), null;
}
function en() {
  if (lt !== null) {
    var e = As(ul), t = xe.transition, n = O;
    try {
      if (xe.transition = null, O = 16 > e ? 16 : e, lt === null) var r = !1;
      else {
        if (e = lt, lt = null, ul = 0, D & 6) throw Error(g(331));
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
                    var p = h.sibling, w = h.return;
                    if (Za(h), h === c) {
                      E = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = w, E = p;
                      break;
                    }
                    E = w;
                  }
                }
              }
              var k = u.alternate;
              if (k !== null) {
                var y = k.child;
                if (y !== null) {
                  k.child = null;
                  do {
                    var T = y.sibling;
                    y.sibling = null, y = T;
                  } while (y !== null);
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
                  yl(9, i);
              }
            } catch (S) {
              H(i, i.return, S);
            }
            if (i === o) {
              E = null;
              break e;
            }
            var v = i.sibling;
            if (v !== null) {
              v.return = i.return, E = v;
              break e;
            }
            E = i.return;
          }
        }
        if (D = l, yt(), Ae && typeof Ae.onPostCommitFiberRoot == "function") try {
          Ae.onPostCommitFiberRoot(al, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, xe.transition = t;
    }
  }
  return !1;
}
function Ji(e, t, n) {
  t = on(n, t), t = Aa(e, t, 1), e = at(e, t, 1), t = ie(), e !== null && (nr(e, 1, t), me(e, t));
}
function H(e, t, n) {
  if (e.tag === 3) Ji(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      Ji(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ct === null || !ct.has(r))) {
        e = on(n, e), e = $a(t, e, 1), t = at(t, e, 1), e = ie(), t !== null && (nr(t, 1, e), me(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Dd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ie(), e.pingedLanes |= e.suspendedLanes & n, q === e && (ee & n) === n && (G === 4 || G === 3 && (ee & 130023424) === ee && 500 > Q() - Mo ? Pt(e, 0) : Do |= n), me(e, t);
}
function oc(e, t) {
  t === 0 && (e.mode & 1 ? (t = pr, pr <<= 1, !(pr & 130023424) && (pr = 4194304)) : t = 1);
  var n = ie();
  e = Xe(e, t), e !== null && (nr(e, t, n), me(e, n));
}
function Md(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), oc(e, n);
}
function Od(e, t) {
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
  r !== null && r.delete(t), oc(e, n);
}
var ic;
ic = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return fe = !1, Sd(e, t, n);
    fe = !!(e.flags & 131072);
  }
  else fe = !1, U && t.flags & 1048576 && fa(t, Zr, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Mr(e, t), e = t.pendingProps;
      var l = nn(t, ue.current);
      bt(t, n), l = No(null, t, r, e, l, n);
      var u = Po();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, pe(r) ? (u = !0, Xr(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, So(t), l.updater = vl, t.stateNode = l, l._reactInternals = t, Ru(t, r, e, n), t = Ou(null, t, r, !0, u, n)) : (t.tag = 0, U && u && mo(t), oe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Mr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Id(r), e = Le(r, e), l) {
          case 0:
            t = Mu(null, t, r, e, n);
            break e;
          case 1:
            t = Vi(null, t, r, e, n);
            break e;
          case 11:
            t = Ai(null, t, r, e, n);
            break e;
          case 14:
            t = $i(null, t, r, Le(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Mu(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Vi(e, t, r, l, n);
    case 3:
      e: {
        if (Wa(t), e === null) throw Error(g(387));
        r = t.pendingProps, u = t.memoizedState, l = u.element, ya(e, t), br(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
          l = on(Error(g(423)), t), t = Hi(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = on(Error(g(424)), t), t = Hi(e, t, r, n, l);
          break e;
        } else for (ve = st(t.stateNode.containerInfo.firstChild), ye = t, U = !0, De = null, n = ha(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
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
      return ga(t), e === null && zu(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, o = l.children, Cu(r, l) ? o = null : u !== null && Cu(r, u) && (t.flags |= 32), Ba(e, t), oe(e, t, o, n), t.child;
    case 6:
      return e === null && zu(t), null;
    case 13:
      return Qa(e, t, n);
    case 4:
      return Eo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = ln(t, null, r, n) : oe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Ai(e, t, r, l, n);
    case 7:
      return oe(e, t, t.pendingProps, n), t.child;
    case 8:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return oe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, o = l.value, j(Jr, r._currentValue), r._currentValue = o, u !== null) if (je(u.value, o)) {
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
                u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), Lu(
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
            o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Lu(o, n, t), o = u.sibling;
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
      return l = t.type, r = t.pendingProps.children, bt(t, n), l = _e(l), r = r(l), t.flags |= 1, oe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), $i(e, t, r, l, n);
    case 15:
      return Va(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Mr(e, t), t.tag = 1, pe(r) ? (e = !0, Xr(t)) : e = !1, bt(t, n), Ua(t, r, l), Ru(t, r, l, n), Ou(null, t, r, !0, e, n);
    case 19:
      return Ka(e, t, n);
    case 22:
      return Ha(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function sc(e, t) {
  return js(e, t);
}
function jd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ce(e, t, n, r) {
  return new jd(e, t, n, r);
}
function Fo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Id(e) {
  if (typeof e == "function") return Fo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === to) return 11;
    if (e === no) return 14;
  }
  return 2;
}
function dt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ce(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Ir(e, t, n, r, l, u) {
  var o = 2;
  if (r = e, typeof e == "function") Fo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Ut:
      return zt(n.children, l, u, t);
    case eo:
      o = 8, l |= 8;
      break;
    case tu:
      return e = Ce(12, n, t, l | 2), e.elementType = tu, e.lanes = u, e;
    case nu:
      return e = Ce(13, n, t, l), e.elementType = nu, e.lanes = u, e;
    case ru:
      return e = Ce(19, n, t, l), e.elementType = ru, e.lanes = u, e;
    case gs:
      return wl(n, l, u, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case vs:
          o = 10;
          break e;
        case ys:
          o = 9;
          break e;
        case to:
          o = 11;
          break e;
        case no:
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
function wl(e, t, n, r) {
  return e = Ce(22, e, r, t), e.elementType = gs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ql(e, t, n) {
  return e = Ce(6, e, null, t), e.lanes = n, e;
}
function bl(e, t, n) {
  return t = Ce(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Fd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ml(0), this.expirationTimes = Ml(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ml(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Uo(e, t, n, r, l, u, o, i, s) {
  return e = new Fd(e, t, n, i, s), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = Ce(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, So(u), e;
}
function Ud(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Ft, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function ac(e) {
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
    if (pe(n)) return aa(e, n, t);
  }
  return t;
}
function cc(e, t, n, r, l, u, o, i, s) {
  return e = Uo(n, r, !0, e, l, u, o, i, s), e.context = ac(null), n = e.current, r = ie(), l = ft(n), u = Qe(r, l), u.callback = t ?? null, at(n, u, l), e.current.lanes = l, nr(e, l, r), me(e, r), e;
}
function kl(e, t, n, r) {
  var l = t.current, u = ie(), o = ft(l);
  return n = ac(n), t.context === null ? t.context = n : t.pendingContext = n, t = Qe(u, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = at(l, t, o), e !== null && (Oe(e, l, o, u), Tr(e, l, o)), o;
}
function il(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function qi(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ao(e, t) {
  qi(e, t), (e = e.alternate) && qi(e, t);
}
function Ad() {
  return null;
}
var fc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function $o(e) {
  this._internalRoot = e;
}
Sl.prototype.render = $o.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  kl(e, t, null, null);
};
Sl.prototype.unmount = $o.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Mt(function() {
      kl(null, e, null, null);
    }), t[Ye] = null;
  }
};
function Sl(e) {
  this._internalRoot = e;
}
Sl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Hs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < tt.length && t !== 0 && t < tt[n].priority; n++) ;
    tt.splice(n, 0, e), n === 0 && Ws(e);
  }
};
function Vo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function El(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function bi() {
}
function $d(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var u = r;
      r = function() {
        var c = il(o);
        u.call(c);
      };
    }
    var o = cc(t, r, e, 0, null, !1, !1, "", bi);
    return e._reactRootContainer = o, e[Ye] = o.current, Qn(e.nodeType === 8 ? e.parentNode : e), Mt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var i = r;
    r = function() {
      var c = il(s);
      i.call(c);
    };
  }
  var s = Uo(e, 0, !1, null, null, !1, !1, "", bi);
  return e._reactRootContainer = s, e[Ye] = s.current, Qn(e.nodeType === 8 ? e.parentNode : e), Mt(function() {
    kl(t, s, n, r);
  }), s;
}
function Cl(e, t, n, r, l) {
  var u = n._reactRootContainer;
  if (u) {
    var o = u;
    if (typeof l == "function") {
      var i = l;
      l = function() {
        var s = il(o);
        i.call(s);
      };
    }
    kl(t, o, e, l);
  } else o = $d(n, t, e, l, r);
  return il(o);
}
$s = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Nn(t.pendingLanes);
        n !== 0 && (uo(t, n | 1), me(t, Q()), !(D & 6) && (sn = Q() + 500, yt()));
      }
      break;
    case 13:
      Mt(function() {
        var r = Xe(e, 1);
        if (r !== null) {
          var l = ie();
          Oe(r, e, 1, l);
        }
      }), Ao(e, 1);
  }
};
oo = function(e) {
  if (e.tag === 13) {
    var t = Xe(e, 134217728);
    if (t !== null) {
      var n = ie();
      Oe(t, e, 134217728, n);
    }
    Ao(e, 134217728);
  }
};
Vs = function(e) {
  if (e.tag === 13) {
    var t = ft(e), n = Xe(e, t);
    if (n !== null) {
      var r = ie();
      Oe(n, e, t, r);
    }
    Ao(e, t);
  }
};
Hs = function() {
  return O;
};
Bs = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
pu = function(e, t, n) {
  switch (t) {
    case "input":
      if (ou(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = pl(r);
            if (!l) throw Error(g(90));
            ks(r), ou(r, l);
          }
        }
      }
      break;
    case "textarea":
      Es(e, n);
      break;
    case "select":
      t = n.value, t != null && Gt(e, !!n.multiple, t, !1);
  }
};
Ls = Oo;
Ts = Mt;
var Vd = { usingClientEntryPoint: !1, Events: [lr, Ht, pl, Ps, zs, Oo] }, Cn = { findFiberByHostInstance: Et, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Hd = { bundleType: Cn.bundleType, version: Cn.version, rendererPackageName: Cn.rendererPackageName, rendererConfig: Cn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ze.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ms(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Cn.findFiberByHostInstance || Ad, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xr.isDisabled && xr.supportsFiber) try {
    al = xr.inject(Hd), Ae = xr;
  } catch {
  }
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vd;
we.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Vo(t)) throw Error(g(200));
  return Ud(e, t, null, n);
};
we.createRoot = function(e, t) {
  if (!Vo(e)) throw Error(g(299));
  var n = !1, r = "", l = fc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Uo(e, 1, !1, null, null, n, !1, r, l), e[Ye] = t.current, Qn(e.nodeType === 8 ? e.parentNode : e), new $o(t);
};
we.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = Ms(t), e = e === null ? null : e.stateNode, e;
};
we.flushSync = function(e) {
  return Mt(e);
};
we.hydrate = function(e, t, n) {
  if (!El(t)) throw Error(g(200));
  return Cl(null, e, t, !0, n);
};
we.hydrateRoot = function(e, t, n) {
  if (!Vo(e)) throw Error(g(405));
  var r = n != null && n.hydratedSources || null, l = !1, u = "", o = fc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = cc(t, null, e, 1, n ?? null, l, !1, u, o), e[Ye] = t.current, Qn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Sl(t);
};
we.render = function(e, t, n) {
  if (!El(t)) throw Error(g(200));
  return Cl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function(e) {
  if (!El(e)) throw Error(g(40));
  return e._reactRootContainer ? (Mt(function() {
    Cl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Ye] = null;
    });
  }), !0) : !1;
};
we.unstable_batchedUpdates = Oo;
we.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!El(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return Cl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function dc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dc);
    } catch (e) {
      console.error(e);
    }
}
dc(), ds.exports = we;
var Bd = ds.exports, es = Bd;
Fr.createRoot = es.createRoot, Fr.hydrateRoot = es.hydrateRoot;
const Wd = ({ onSubmit: e }) => {
  const [t, n] = Re.useState(""), [r, l] = Re.useState(""), u = Re.useMemo(() => t.trim().length === 0, [t]), o = (i) => {
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
}, Qd = "ponkotu-system";
var _t;
class Kd extends Application {
  constructor() {
    super(...arguments);
    Pl(this, _t, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-react-form",
      title: "React フォーム",
      template: `modules/${Qd}/templates/react-form.html`,
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
    hn(this, _t, Fr.createRoot(r)), mn(this, _t).render(
      /* @__PURE__ */ M.jsx(
        Wd,
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
}, Yd = (e) => {
  const t = K(e, "stackDamageUp", 0), n = K(e, "stackDamageDown", 0), r = !!K(e, "directcheck", 0);
  return t * 10 - n * 10 + (r ? 50 : 0);
}, Xd = (e) => {
  let t = 0, n = !1;
  !!K(e, "criticalcheck", 0) && (t += 20);
  const l = K(e, "stackpoise", 0);
  if (l > 0) {
    const u = Math.min(l * 5, 100);
    Math.random() * 100 < u && (t += 20, n = !0);
  }
  return { special: t, poiseCritical: n };
}, Gd = (e) => {
  const t = K(e, "stackProtection", 0), n = K(e, "stackVulnerable", 0);
  return t * 10 - n * 10;
}, Zd = (e) => {
  const n = !!K(e, "isPlayer", 0) ? K(e, "resist", 0) : K(e, "resistEnemy", 0);
  return K(e, "constitution", 0) <= 0 ? -100 : n;
}, Jd = (e) => {
  const n = !!K(e, "isPlayer", 0) ? K(e, "confResist", 0) : K(e, "econfResistEnemy", 0);
  return K(e, "constitution", 0) <= 0 ? -100 : n;
}, qd = (e) => {
  const t = Yd(e.attacker), { special: n, poiseCritical: r } = Xd(e.attacker), l = Gd(e.receiver), u = Zd(e.receiver), o = Jd(e.receiver), i = (100 + t - l) / 100, s = (100 + n - u) / 100, c = (100 + n - o) / 100, h = e.baseDamage * Math.max(i, 0) * Math.max(s, 0), m = e.baseDamage * Math.max(i, 0) * Math.max(c, 0);
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
}, bd = async (e, t) => {
  const n = e.receiver, r = {};
  let l = K(n, "hp", 0), u = K(n, "barrier", 0), o = K(n, "constitution", 0), i = K(n, "san", 0);
  const s = K(n, "doubleconstitution", 0) === 1, c = Math.ceil(t.dealDamage), h = Math.ceil(t.dealConfDamage);
  let m = 0, p = 0;
  u > 0 && c > 0 && (m = Math.min(u, c), u -= m);
  const w = Math.max(c - m, 0);
  w > 0 && (l -= w, p = w);
  let k = 0;
  if (h > 0) {
    const d = h * (s ? 2 : 1);
    o = Math.max(o - d, 0), k = d;
  }
  let y = 0;
  const T = K(n, "stacksink", 0);
  if (T > 0) {
    let d = T;
    const v = Math.min(i, d);
    i -= v, d -= v, y += v, d > 0 && (l -= d, p += d), r["system.attributes.stacksink.value"] = Math.floor(T / 2);
  }
  r["system.attributes.hp.value"] = l, r["system.attributes.barrier.value"] = u, r["system.attributes.constitution.value"] = o, r["system.attributes.san.value"] = i, await n.update(r);
  const f = {
    ...t,
    barrierAbsorbed: m,
    hpDamageApplied: p,
    confDamageApplied: k,
    sanDamageApplied: y,
    hpAfter: l,
    barrierAfter: u,
    constitutionAfter: o,
    sanAfter: i
  }, a = `
${e.attacker.name} → ${e.receiver.name}<br/>
基礎ダメージ: ${e.baseDamage}<br/>
HPダメージ: ${p} (バリア吸収: ${m})<br/>
耐性限界ダメージ: ${k}<br/>
SANダメージ(沈潜): ${y}<br/>
`;
  return await ChatMessage.create({
    speaker: ChatMessage.getSpeaker({ actor: e.attacker }),
    content: a
  }), f;
}, ep = async (e) => {
  const t = qd(e);
  return bd(e, t);
}, qe = (e) => Number.isFinite(e) ? e.toLocaleString() : "-", tp = ({ tokens: e }) => {
  var w, k;
  const [t, n] = Re.useState(((w = e[0]) == null ? void 0 : w.id) ?? ""), [r, l] = Re.useState(((k = e[1]) == null ? void 0 : k.id) ?? ""), [u, o] = Re.useState(""), [i, s] = Re.useState(null), [c, h] = Re.useState(!1), m = Re.useMemo(() => {
    const y = /* @__PURE__ */ new Map();
    return e.forEach((T) => y.set(T.id, T)), y;
  }, [e]), p = async () => {
    var a, d, v, S, _;
    const y = Number(u);
    if (!Number.isFinite(y) || y <= 0) {
      (a = ui.notifications) == null || a.error("ダメージに正の数値を入力してください");
      return;
    }
    const T = t ? m.get(t) : void 0, f = r ? m.get(r) : void 0;
    if (!T || !f) {
      (d = ui.notifications) == null || d.error("攻撃者と防御者を選択してください");
      return;
    }
    if (T.id === f.id) {
      (v = ui.notifications) == null || v.error("攻撃者と防御者は別のキャラクターを選んでください");
      return;
    }
    try {
      h(!0);
      const x = await ep({
        attacker: T.actor,
        receiver: f.actor,
        baseDamage: y
      });
      s(x), (S = ui.notifications) == null || S.info(
        `${T.name} が ${f.name} にダメージを適用しました`
      );
    } catch (x) {
      console.error("[ponkotu-system] damage calc failed", x), (_ = ui.notifications) == null || _.error("計算または適用に失敗しました。コンソールを確認してください。");
    } finally {
      h(!1);
    }
  };
  return /* @__PURE__ */ M.jsxs("div", { className: "ponkotu-damage", children: [
    /* @__PURE__ */ M.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ M.jsxs("label", { className: "ponkotu-damage__label", children: [
        "攻撃者",
        /* @__PURE__ */ M.jsxs(
          "select",
          {
            value: t,
            onChange: (y) => n(y.target.value),
            children: [
              /* @__PURE__ */ M.jsx("option", { value: "", children: "選択してください" }),
              e.map((y) => /* @__PURE__ */ M.jsx("option", { value: y.id, children: y.name }, y.id))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ M.jsxs("label", { className: "ponkotu-damage__label", children: [
        "防御者",
        /* @__PURE__ */ M.jsxs(
          "select",
          {
            value: r,
            onChange: (y) => l(y.target.value),
            children: [
              /* @__PURE__ */ M.jsx("option", { value: "", children: "選択してください" }),
              e.map((y) => /* @__PURE__ */ M.jsx("option", { value: y.id, children: y.name }, y.id))
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
          value: u,
          onChange: (y) => o(y.target.value),
          placeholder: "例: 12"
        }
      )
    ] }),
    /* @__PURE__ */ M.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ M.jsx("button", { onClick: p, disabled: c || e.length < 2, children: c ? "計算中..." : "計算して適用" }),
      e.length < 2 && /* @__PURE__ */ M.jsx("span", { className: "ponkotu-damage__hint", children: "※ トークンが2体以上必要です" })
    ] }),
    i && /* @__PURE__ */ M.jsxs("div", { className: "ponkotu-damage__result", children: [
      /* @__PURE__ */ M.jsxs("div", { children: [
        "通常倍率: 攻撃者 ",
        i.attackerNormalPercentage,
        "% / 防御者 ",
        " ",
        i.receiverNormalPercentage,
        "% → 係数 ",
        i.normalRatio.toFixed(2)
      ] }),
      /* @__PURE__ */ M.jsxs("div", { children: [
        "特殊倍率: 攻撃者 ",
        i.attackerSpecialPercentage,
        "%",
        i.poiseCritical ? " (呼吸クリティカル)" : "",
        " / 防御者 ",
        " ",
        i.receiverSpecialPercentage,
        "% → 係数 ",
        i.specialRatio.toFixed(2)
      ] }),
      /* @__PURE__ */ M.jsxs("div", { children: [
        "特殊(耐性限界)倍率: 防御者 ",
        i.receiverSpecialConfPercentage,
        "% → 係数 ",
        " ",
        i.specialConfRatio.toFixed(2)
      ] }),
      /* @__PURE__ */ M.jsxs("div", { children: [
        "HPダメージ: ",
        qe(i.hpDamageApplied),
        " （バリア吸収 ",
        " ",
        qe(i.barrierAbsorbed),
        "）"
      ] }),
      /* @__PURE__ */ M.jsxs("div", { children: [
        "耐性限界ダメージ: ",
        qe(i.confDamageApplied)
      ] }),
      /* @__PURE__ */ M.jsxs("div", { children: [
        "SANダメージ(沈潜): ",
        qe(i.sanDamageApplied)
      ] }),
      /* @__PURE__ */ M.jsxs("div", { children: [
        "残り HP ",
        qe(i.hpAfter),
        " / バリア ",
        " ",
        qe(i.barrierAfter),
        " / CON ",
        " ",
        qe(i.constitutionAfter),
        " / SAN ",
        " ",
        qe(i.sanAfter)
      ] })
    ] })
  ] });
}, np = "ponkotu-system";
var Nt;
class rp extends Application {
  constructor() {
    super(...arguments);
    Pl(this, Nt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-damage-calc",
      title: "ダメージ計算",
      template: `modules/${np}/templates/damage-calc.html`,
      width: 520,
      height: "auto",
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
        actor: i.actor
      };
    });
    hn(this, Nt, Fr.createRoot(r)), mn(this, Nt).render(/* @__PURE__ */ M.jsx(tp, { tokens: l }));
  }
  async close(n) {
    var r;
    return (r = mn(this, Nt)) == null || r.unmount(), hn(this, Nt, null), super.close(n);
  }
}
Nt = new WeakMap();
const Ku = "ponkotu-system", er = (...e) => console.log(`[${Ku}]`, ...e);
er("ES module loaded");
const pc = () => new Kd().render(!0), mc = () => new rp().render(!0), hc = () => {
  const e = game.modules.get(Ku);
  if (!e) {
    console.warn(`[${Ku}] game.modules からモジュールを取得できませんでした`);
    return;
  }
  const t = e;
  t.api || (t.api = {}), t.api.showReactForm = pc, t.api.showDamageCalc = mc, er("API を登録しました", t.api);
};
Hooks.once("ready", () => {
  er("Hooks.once ready fired"), hc(), globalThis.ponkotuSystem = { showReactForm: pc, showDamageCalc: mc }, er("React フォーム API を初期化しました");
});
Hooks.once("init", () => {
  er("Hooks.once init fired"), hc();
});
export {
  mc as showDamageCalc,
  pc as showReactForm
};
