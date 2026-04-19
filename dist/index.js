var ou = (e) => {
  throw TypeError(e);
};
var iu = (e, t, n) => t.has(e) || ou("Cannot " + n);
var Z = (e, t, n) => (iu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), In = (e, t, n) => t.has(e) ? ou("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Dt = (e, t, n, r) => (iu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var ws = { exports: {} }, Pl = {}, Es = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var gr = Symbol.for("react.element"), Vc = Symbol.for("react.portal"), Wc = Symbol.for("react.fragment"), Qc = Symbol.for("react.strict_mode"), Kc = Symbol.for("react.profiler"), Yc = Symbol.for("react.provider"), Xc = Symbol.for("react.context"), Gc = Symbol.for("react.forward_ref"), Zc = Symbol.for("react.suspense"), Jc = Symbol.for("react.memo"), qc = Symbol.for("react.lazy"), uu = Symbol.iterator;
function bc(e) {
  return e === null || typeof e != "object" ? null : (e = uu && e[uu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var xs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, _s = Object.assign, Cs = {};
function Nn(e, t, n) {
  this.props = e, this.context = t, this.refs = Cs, this.updater = n || xs;
}
Nn.prototype.isReactComponent = {};
Nn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Nn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ps() {
}
Ps.prototype = Nn.prototype;
function fi(e, t, n) {
  this.props = e, this.context = t, this.refs = Cs, this.updater = n || xs;
}
var di = fi.prototype = new Ps();
di.constructor = fi;
_s(di, Nn.prototype);
di.isPureReactComponent = !0;
var su = Array.isArray, Ns = Object.prototype.hasOwnProperty, pi = { current: null }, Ts = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ds(e, t, n) {
  var r, l = {}, o = null, i = null;
  if (t != null) for (r in t.ref !== void 0 && (i = t.ref), t.key !== void 0 && (o = "" + t.key), t) Ns.call(t, r) && !Ts.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: gr, type: e, key: o, ref: i, props: l, _owner: pi.current };
}
function ef(e, t) {
  return { $$typeof: gr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mi(e) {
  return typeof e == "object" && e !== null && e.$$typeof === gr;
}
function tf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var au = /\/+/g;
function Hl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? tf("" + e.key) : t.toString(36);
}
function Ur(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else switch (o) {
    case "string":
    case "number":
      i = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case gr:
        case Vc:
          i = !0;
      }
  }
  if (i) return i = e, l = l(i), e = r === "" ? "." + Hl(i, 0) : r, su(l) ? (n = "", e != null && (n = e.replace(au, "$&/") + "/"), Ur(l, t, n, "", function(f) {
    return f;
  })) : l != null && (mi(l) && (l = ef(l, n + (!l.key || i && i.key === l.key ? "" : ("" + l.key).replace(au, "$&/") + "/") + e)), t.push(l)), 1;
  if (i = 0, r = r === "" ? "." : r + ":", su(e)) for (var u = 0; u < e.length; u++) {
    o = e[u];
    var s = r + Hl(o, u);
    i += Ur(o, t, n, s, l);
  }
  else if (s = bc(e), typeof s == "function") for (e = s.call(e), u = 0; !(o = e.next()).done; ) o = o.value, s = r + Hl(o, u++), i += Ur(o, t, n, s, l);
  else if (o === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return i;
}
function Er(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Ur(e, r, "", "", function(o) {
    return t.call(n, o, l++);
  }), r;
}
function nf(e) {
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
var me = { current: null }, $r = { transition: null }, rf = { ReactCurrentDispatcher: me, ReactCurrentBatchConfig: $r, ReactCurrentOwner: pi };
function Is() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = { map: Er, forEach: function(e, t, n) {
  Er(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Er(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Er(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!mi(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
z.Component = Nn;
z.Fragment = Wc;
z.Profiler = Kc;
z.PureComponent = fi;
z.StrictMode = Qc;
z.Suspense = Zc;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rf;
z.act = Is;
z.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = _s({}, e.props), l = e.key, o = e.ref, i = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (o = t.ref, i = pi.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) Ns.call(t, s) && !Ts.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: gr, type: e.type, key: l, ref: o, props: r, _owner: i };
};
z.createContext = function(e) {
  return e = { $$typeof: Xc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Yc, _context: e }, e.Consumer = e;
};
z.createElement = Ds;
z.createFactory = function(e) {
  var t = Ds.bind(null, e);
  return t.type = e, t;
};
z.createRef = function() {
  return { current: null };
};
z.forwardRef = function(e) {
  return { $$typeof: Gc, render: e };
};
z.isValidElement = mi;
z.lazy = function(e) {
  return { $$typeof: qc, _payload: { _status: -1, _result: e }, _init: nf };
};
z.memo = function(e, t) {
  return { $$typeof: Jc, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function(e) {
  var t = $r.transition;
  $r.transition = {};
  try {
    e();
  } finally {
    $r.transition = t;
  }
};
z.unstable_act = Is;
z.useCallback = function(e, t) {
  return me.current.useCallback(e, t);
};
z.useContext = function(e) {
  return me.current.useContext(e);
};
z.useDebugValue = function() {
};
z.useDeferredValue = function(e) {
  return me.current.useDeferredValue(e);
};
z.useEffect = function(e, t) {
  return me.current.useEffect(e, t);
};
z.useId = function() {
  return me.current.useId();
};
z.useImperativeHandle = function(e, t, n) {
  return me.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function(e, t) {
  return me.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function(e, t) {
  return me.current.useLayoutEffect(e, t);
};
z.useMemo = function(e, t) {
  return me.current.useMemo(e, t);
};
z.useReducer = function(e, t, n) {
  return me.current.useReducer(e, t, n);
};
z.useRef = function(e) {
  return me.current.useRef(e);
};
z.useState = function(e) {
  return me.current.useState(e);
};
z.useSyncExternalStore = function(e, t, n) {
  return me.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function() {
  return me.current.useTransition();
};
z.version = "18.3.1";
Es.exports = z;
var R = Es.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lf = R, of = Symbol.for("react.element"), uf = Symbol.for("react.fragment"), sf = Object.prototype.hasOwnProperty, af = lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, cf = { key: !0, ref: !0, __self: !0, __source: !0 };
function js(e, t, n) {
  var r, l = {}, o = null, i = null;
  n !== void 0 && (o = "" + n), t.key !== void 0 && (o = "" + t.key), t.ref !== void 0 && (i = t.ref);
  for (r in t) sf.call(t, r) && !cf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: of, type: e, key: o, ref: i, props: l, _owner: af.current };
}
Pl.Fragment = uf;
Pl.jsx = js;
Pl.jsxs = js;
ws.exports = Pl;
var v = ws.exports, qn = {}, zs = { exports: {} }, Pe = {}, Rs = { exports: {} }, Ls = {};
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
  function t(C, D) {
    var T = C.length;
    C.push(D);
    e: for (; 0 < T; ) {
      var $ = T - 1 >>> 1, X = C[$];
      if (0 < l(X, D)) C[$] = D, C[T] = X, T = $;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var D = C[0], T = C.pop();
    if (T !== D) {
      C[0] = T;
      e: for (var $ = 0, X = C.length, Jt = X >>> 1; $ < Jt; ) {
        var Ke = 2 * ($ + 1) - 1, Ye = C[Ke], Xe = Ke + 1, qt = C[Xe];
        if (0 > l(Ye, T)) Xe < X && 0 > l(qt, Ye) ? (C[$] = qt, C[Xe] = T, $ = Xe) : (C[$] = Ye, C[Ke] = T, $ = Ke);
        else if (Xe < X && 0 > l(qt, T)) C[$] = qt, C[Xe] = T, $ = Xe;
        else break e;
      }
    }
    return D;
  }
  function l(C, D) {
    var T = C.sortIndex - D.sortIndex;
    return T !== 0 ? T : C.id - D.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function() {
      return o.now();
    };
  } else {
    var i = Date, u = i.now();
    e.unstable_now = function() {
      return i.now() - u;
    };
  }
  var s = [], f = [], h = 1, m = null, p = 3, k = !1, y = !1, w = !1, I = typeof setTimeout == "function" ? setTimeout : null, a = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var D = n(f); D !== null; ) {
      if (D.callback === null) r(f);
      else if (D.startTime <= C) r(f), D.sortIndex = D.expirationTime, t(s, D);
      else break;
      D = n(f);
    }
  }
  function g(C) {
    if (w = !1, d(C), !y) if (n(s) !== null) y = !0, Gt(E);
    else {
      var D = n(f);
      D !== null && Zt(g, D.startTime - C);
    }
  }
  function E(C, D) {
    y = !1, w && (w = !1, a(N), N = -1), k = !0;
    var T = p;
    try {
      for (d(D), m = n(s); m !== null && (!(m.expirationTime > D) || C && !F()); ) {
        var $ = m.callback;
        if (typeof $ == "function") {
          m.callback = null, p = m.priorityLevel;
          var X = $(m.expirationTime <= D);
          D = e.unstable_now(), typeof X == "function" ? m.callback = X : m === n(s) && r(s), d(D);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var Jt = !0;
      else {
        var Ke = n(f);
        Ke !== null && Zt(g, Ke.startTime - D), Jt = !1;
      }
      return Jt;
    } finally {
      m = null, p = T, k = !1;
    }
  }
  var _ = !1, x = null, N = -1, A = 5, j = -1;
  function F() {
    return !(e.unstable_now() - j < A);
  }
  function O() {
    if (x !== null) {
      var C = e.unstable_now();
      j = C;
      var D = !0;
      try {
        D = x(!0, C);
      } finally {
        D ? oe() : (_ = !1, x = null);
      }
    } else _ = !1;
  }
  var oe;
  if (typeof c == "function") oe = function() {
    c(O);
  };
  else if (typeof MessageChannel < "u") {
    var Tt = new MessageChannel(), wr = Tt.port2;
    Tt.port1.onmessage = O, oe = function() {
      wr.postMessage(null);
    };
  } else oe = function() {
    I(O, 0);
  };
  function Gt(C) {
    x = C, _ || (_ = !0, oe());
  }
  function Zt(C, D) {
    N = I(function() {
      C(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    y || k || (y = !0, Gt(E));
  }, e.unstable_forceFrameRate = function(C) {
    0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < C ? Math.floor(1e3 / C) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(C) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = p;
    }
    var T = p;
    p = D;
    try {
      return C();
    } finally {
      p = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, D) {
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
    var T = p;
    p = C;
    try {
      return D();
    } finally {
      p = T;
    }
  }, e.unstable_scheduleCallback = function(C, D, T) {
    var $ = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? $ + T : $) : T = $, C) {
      case 1:
        var X = -1;
        break;
      case 2:
        X = 250;
        break;
      case 5:
        X = 1073741823;
        break;
      case 4:
        X = 1e4;
        break;
      default:
        X = 5e3;
    }
    return X = T + X, C = { id: h++, callback: D, priorityLevel: C, startTime: T, expirationTime: X, sortIndex: -1 }, T > $ ? (C.sortIndex = T, t(f, C), n(s) === null && C === n(f) && (w ? (a(N), N = -1) : w = !0, Zt(g, T - $))) : (C.sortIndex = X, t(s, C), y || k || (y = !0, Gt(E))), C;
  }, e.unstable_shouldYield = F, e.unstable_wrapCallback = function(C) {
    var D = p;
    return function() {
      var T = p;
      p = D;
      try {
        return C.apply(this, arguments);
      } finally {
        p = T;
      }
    };
  };
})(Ls);
Rs.exports = Ls;
var ff = Rs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var df = R, Ce = ff;
function S(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ms = /* @__PURE__ */ new Set(), bn = {};
function Yt(e, t) {
  Sn(e, t), Sn(e + "Capture", t);
}
function Sn(e, t) {
  for (bn[e] = t, e = 0; e < t.length; e++) Ms.add(t[e]);
}
var tt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), yo = Object.prototype.hasOwnProperty, pf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, cu = {}, fu = {};
function mf(e) {
  return yo.call(fu, e) ? !0 : yo.call(cu, e) ? !1 : pf.test(e) ? fu[e] = !0 : (cu[e] = !0, !1);
}
function hf(e, t, n, r) {
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
function gf(e, t, n, r) {
  if (t === null || typeof t > "u" || hf(e, t, n, r)) return !0;
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
function he(e, t, n, r, l, o, i) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = o, this.removeEmptyString = i;
}
var le = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  le[e] = new he(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  le[t] = new he(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  le[e] = new he(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  le[e] = new he(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  le[e] = new he(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  le[e] = new he(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  le[e] = new he(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  le[e] = new he(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  le[e] = new he(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var hi = /[\-:]([a-z])/g;
function gi(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    hi,
    gi
  );
  le[t] = new he(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(hi, gi);
  le[t] = new he(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(hi, gi);
  le[t] = new he(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  le[e] = new he(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
le.xlinkHref = new he("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  le[e] = new he(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vi(e, t, n, r) {
  var l = le.hasOwnProperty(t) ? le[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gf(t, n, l, r) && (n = null), r || l === null ? mf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var ot = df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, xr = Symbol.for("react.element"), tn = Symbol.for("react.portal"), nn = Symbol.for("react.fragment"), yi = Symbol.for("react.strict_mode"), ko = Symbol.for("react.profiler"), Os = Symbol.for("react.provider"), As = Symbol.for("react.context"), ki = Symbol.for("react.forward_ref"), So = Symbol.for("react.suspense"), wo = Symbol.for("react.suspense_list"), Si = Symbol.for("react.memo"), at = Symbol.for("react.lazy"), Fs = Symbol.for("react.offscreen"), du = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object" ? null : (e = du && e[du] || e["@@iterator"], typeof e == "function" ? e : null);
}
var K = Object.assign, Vl;
function Un(e) {
  if (Vl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Vl = t && t[1] || "";
  }
  return `
` + Vl + e;
}
var Wl = !1;
function Ql(e, t) {
  if (!e || Wl) return "";
  Wl = !0;
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
      } catch (f) {
        var r = f;
      }
      Reflect.construct(e, [], t);
    } else {
      try {
        t.call();
      } catch (f) {
        r = f;
      }
      e.call(t.prototype);
    }
    else {
      try {
        throw Error();
      } catch (f) {
        r = f;
      }
      e();
    }
  } catch (f) {
    if (f && r && typeof f.stack == "string") {
      for (var l = f.stack.split(`
`), o = r.stack.split(`
`), i = l.length - 1, u = o.length - 1; 1 <= i && 0 <= u && l[i] !== o[u]; ) u--;
      for (; 1 <= i && 0 <= u; i--, u--) if (l[i] !== o[u]) {
        if (i !== 1 || u !== 1)
          do
            if (i--, u--, 0 > u || l[i] !== o[u]) {
              var s = `
` + l[i].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= i && 0 <= u);
        break;
      }
    }
  } finally {
    Wl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Un(e) : "";
}
function vf(e) {
  switch (e.tag) {
    case 5:
      return Un(e.type);
    case 16:
      return Un("Lazy");
    case 13:
      return Un("Suspense");
    case 19:
      return Un("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ql(e.type, !1), e;
    case 11:
      return e = Ql(e.type.render, !1), e;
    case 1:
      return e = Ql(e.type, !0), e;
    default:
      return "";
  }
}
function Eo(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case nn:
      return "Fragment";
    case tn:
      return "Portal";
    case ko:
      return "Profiler";
    case yi:
      return "StrictMode";
    case So:
      return "Suspense";
    case wo:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case As:
      return (e.displayName || "Context") + ".Consumer";
    case Os:
      return (e._context.displayName || "Context") + ".Provider";
    case ki:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case Si:
      return t = e.displayName || null, t !== null ? t : Eo(e.type) || "Memo";
    case at:
      t = e._payload, e = e._init;
      try {
        return Eo(e(t));
      } catch {
      }
  }
  return null;
}
function yf(e) {
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
      return Eo(t);
    case 8:
      return t === yi ? "StrictMode" : "Mode";
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
function xt(e) {
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
function Us(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function kf(e) {
  var t = Us(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, o = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(i) {
      r = "" + i, o.call(this, i);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(i) {
      r = "" + i;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function _r(e) {
  e._valueTracker || (e._valueTracker = kf(e));
}
function $s(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Us(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Jr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xo(e, t) {
  var n = t.checked;
  return K({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function pu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = xt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Bs(e, t) {
  t = t.checked, t != null && vi(e, "checked", t, !1);
}
function _o(e, t) {
  Bs(e, t);
  var n = xt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Co(e, t.type, n) : t.hasOwnProperty("defaultValue") && Co(e, t.type, xt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function mu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Co(e, t, n) {
  (t !== "number" || Jr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var $n = Array.isArray;
function mn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + xt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Po(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(S(91));
  return K({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function hu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(S(92));
      if ($n(n)) {
        if (1 < n.length) throw Error(S(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: xt(n) };
}
function Hs(e, t) {
  var n = xt(t.value), r = xt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function gu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Vs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function No(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Vs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Cr, Ws = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Cr = Cr || document.createElement("div"), Cr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Cr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function er(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Vn = {
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
}, Sf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Vn).forEach(function(e) {
  Sf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Vn[t] = Vn[e];
  });
});
function Qs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Vn.hasOwnProperty(e) && Vn[e] ? ("" + t).trim() : t + "px";
}
function Ks(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Qs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var wf = K({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function To(e, t) {
  if (t) {
    if (wf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(S(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(S(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(S(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(S(62));
  }
}
function Do(e, t) {
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
var Io = null;
function wi(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var jo = null, hn = null, gn = null;
function vu(e) {
  if (e = kr(e)) {
    if (typeof jo != "function") throw Error(S(280));
    var t = e.stateNode;
    t && (t = jl(t), jo(e.stateNode, e.type, t));
  }
}
function Ys(e) {
  hn ? gn ? gn.push(e) : gn = [e] : hn = e;
}
function Xs() {
  if (hn) {
    var e = hn, t = gn;
    if (gn = hn = null, vu(e), t) for (e = 0; e < t.length; e++) vu(t[e]);
  }
}
function Gs(e, t) {
  return e(t);
}
function Zs() {
}
var Kl = !1;
function Js(e, t, n) {
  if (Kl) return e(t, n);
  Kl = !0;
  try {
    return Gs(e, t, n);
  } finally {
    Kl = !1, (hn !== null || gn !== null) && (Zs(), Xs());
  }
}
function tr(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = jl(n);
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
  if (n && typeof n != "function") throw Error(S(231, t, typeof n));
  return n;
}
var zo = !1;
if (tt) try {
  var zn = {};
  Object.defineProperty(zn, "passive", { get: function() {
    zo = !0;
  } }), window.addEventListener("test", zn, zn), window.removeEventListener("test", zn, zn);
} catch {
  zo = !1;
}
function Ef(e, t, n, r, l, o, i, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
var Wn = !1, qr = null, br = !1, Ro = null, xf = { onError: function(e) {
  Wn = !0, qr = e;
} };
function _f(e, t, n, r, l, o, i, u, s) {
  Wn = !1, qr = null, Ef.apply(xf, arguments);
}
function Cf(e, t, n, r, l, o, i, u, s) {
  if (_f.apply(this, arguments), Wn) {
    if (Wn) {
      var f = qr;
      Wn = !1, qr = null;
    } else throw Error(S(198));
    br || (br = !0, Ro = f);
  }
}
function Xt(e) {
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
function qs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function yu(e) {
  if (Xt(e) !== e) throw Error(S(188));
}
function Pf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Xt(e), t === null) throw Error(S(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return yu(l), e;
        if (o === r) return yu(l), t;
        o = o.sibling;
      }
      throw Error(S(188));
    }
    if (n.return !== r.return) n = l, r = o;
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          i = !0, n = l, r = o;
          break;
        }
        if (u === r) {
          i = !0, r = l, n = o;
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            i = !0, n = o, r = l;
            break;
          }
          if (u === r) {
            i = !0, r = o, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(S(189));
      }
    }
    if (n.alternate !== r) throw Error(S(190));
  }
  if (n.tag !== 3) throw Error(S(188));
  return n.stateNode.current === n ? e : t;
}
function bs(e) {
  return e = Pf(e), e !== null ? ea(e) : null;
}
function ea(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = ea(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var ta = Ce.unstable_scheduleCallback, ku = Ce.unstable_cancelCallback, Nf = Ce.unstable_shouldYield, Tf = Ce.unstable_requestPaint, G = Ce.unstable_now, Df = Ce.unstable_getCurrentPriorityLevel, Ei = Ce.unstable_ImmediatePriority, na = Ce.unstable_UserBlockingPriority, el = Ce.unstable_NormalPriority, If = Ce.unstable_LowPriority, ra = Ce.unstable_IdlePriority, Nl = null, We = null;
function jf(e) {
  if (We && typeof We.onCommitFiberRoot == "function") try {
    We.onCommitFiberRoot(Nl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Fe = Math.clz32 ? Math.clz32 : Lf, zf = Math.log, Rf = Math.LN2;
function Lf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zf(e) / Rf | 0) | 0;
}
var Pr = 64, Nr = 4194304;
function Bn(e) {
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
function tl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, o = e.pingedLanes, i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? r = Bn(u) : (o &= i, o !== 0 && (r = Bn(o)));
  } else i = n & ~l, i !== 0 ? r = Bn(i) : o !== 0 && (r = Bn(o));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, o = t & -t, l >= o || l === 16 && (o & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Fe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Mf(e, t) {
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
function Of(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
    var i = 31 - Fe(o), u = 1 << i, s = l[i];
    s === -1 ? (!(u & n) || u & r) && (l[i] = Mf(u, t)) : s <= t && (e.expiredLanes |= u), o &= ~u;
  }
}
function Lo(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function la() {
  var e = Pr;
  return Pr <<= 1, !(Pr & 4194240) && (Pr = 64), e;
}
function Yl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Fe(t), e[t] = n;
}
function Af(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Fe(n), o = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~o;
  }
}
function xi(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Fe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var M = 0;
function oa(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ia, _i, ua, sa, aa, Mo = !1, Tr = [], ht = null, gt = null, vt = null, nr = /* @__PURE__ */ new Map(), rr = /* @__PURE__ */ new Map(), ft = [], Ff = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Su(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ht = null;
      break;
    case "dragenter":
    case "dragleave":
      gt = null;
      break;
    case "mouseover":
    case "mouseout":
      vt = null;
      break;
    case "pointerover":
    case "pointerout":
      nr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      rr.delete(t.pointerId);
  }
}
function Rn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, t !== null && (t = kr(t), t !== null && _i(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Uf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ht = Rn(ht, e, t, n, r, l), !0;
    case "dragenter":
      return gt = Rn(gt, e, t, n, r, l), !0;
    case "mouseover":
      return vt = Rn(vt, e, t, n, r, l), !0;
    case "pointerover":
      var o = l.pointerId;
      return nr.set(o, Rn(nr.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return o = l.pointerId, rr.set(o, Rn(rr.get(o) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function ca(e) {
  var t = Rt(e.target);
  if (t !== null) {
    var n = Xt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = qs(n), t !== null) {
          e.blockedOn = t, aa(e.priority, function() {
            ua(n);
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
function Br(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Oo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Io = r, n.target.dispatchEvent(r), Io = null;
    } else return t = kr(n), t !== null && _i(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function wu(e, t, n) {
  Br(e) && n.delete(t);
}
function $f() {
  Mo = !1, ht !== null && Br(ht) && (ht = null), gt !== null && Br(gt) && (gt = null), vt !== null && Br(vt) && (vt = null), nr.forEach(wu), rr.forEach(wu);
}
function Ln(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Mo || (Mo = !0, Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, $f)));
}
function lr(e) {
  function t(l) {
    return Ln(l, e);
  }
  if (0 < Tr.length) {
    Ln(Tr[0], e);
    for (var n = 1; n < Tr.length; n++) {
      var r = Tr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ht !== null && Ln(ht, e), gt !== null && Ln(gt, e), vt !== null && Ln(vt, e), nr.forEach(t), rr.forEach(t), n = 0; n < ft.length; n++) r = ft[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ft.length && (n = ft[0], n.blockedOn === null); ) ca(n), n.blockedOn === null && ft.shift();
}
var vn = ot.ReactCurrentBatchConfig, nl = !0;
function Bf(e, t, n, r) {
  var l = M, o = vn.transition;
  vn.transition = null;
  try {
    M = 1, Ci(e, t, n, r);
  } finally {
    M = l, vn.transition = o;
  }
}
function Hf(e, t, n, r) {
  var l = M, o = vn.transition;
  vn.transition = null;
  try {
    M = 4, Ci(e, t, n, r);
  } finally {
    M = l, vn.transition = o;
  }
}
function Ci(e, t, n, r) {
  if (nl) {
    var l = Oo(e, t, n, r);
    if (l === null) ro(e, t, r, rl, n), Su(e, r);
    else if (Uf(l, e, t, n, r)) r.stopPropagation();
    else if (Su(e, r), t & 4 && -1 < Ff.indexOf(e)) {
      for (; l !== null; ) {
        var o = kr(l);
        if (o !== null && ia(o), o = Oo(e, t, n, r), o === null && ro(e, t, r, rl, n), o === l) break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else ro(e, t, r, null, n);
  }
}
var rl = null;
function Oo(e, t, n, r) {
  if (rl = null, e = wi(r), e = Rt(e), e !== null) if (t = Xt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = qs(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return rl = e, null;
}
function fa(e) {
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
      switch (Df()) {
        case Ei:
          return 1;
        case na:
          return 4;
        case el:
        case If:
          return 16;
        case ra:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var pt = null, Pi = null, Hr = null;
function da() {
  if (Hr) return Hr;
  var e, t = Pi, n = t.length, r, l = "value" in pt ? pt.value : pt.textContent, o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++) ;
  return Hr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Vr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Dr() {
  return !0;
}
function Eu() {
  return !1;
}
function Ne(e) {
  function t(n, r, l, o, i) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = i, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(o) : o[u]);
    return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Dr : Eu, this.isPropagationStopped = Eu, this;
  }
  return K(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Dr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Dr);
  }, persist: function() {
  }, isPersistent: Dr }), t;
}
var Tn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Ni = Ne(Tn), yr = K({}, Tn, { view: 0, detail: 0 }), Vf = Ne(yr), Xl, Gl, Mn, Tl = K({}, yr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Ti, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Mn && (Mn && e.type === "mousemove" ? (Xl = e.screenX - Mn.screenX, Gl = e.screenY - Mn.screenY) : Gl = Xl = 0, Mn = e), Xl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Gl;
} }), xu = Ne(Tl), Wf = K({}, Tl, { dataTransfer: 0 }), Qf = Ne(Wf), Kf = K({}, yr, { relatedTarget: 0 }), Zl = Ne(Kf), Yf = K({}, Tn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xf = Ne(Yf), Gf = K({}, Tn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Zf = Ne(Gf), Jf = K({}, Tn, { data: 0 }), _u = Ne(Jf), qf = {
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
}, bf = {
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
}, ed = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function td(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = ed[e]) ? !!t[e] : !1;
}
function Ti() {
  return td;
}
var nd = K({}, yr, { key: function(e) {
  if (e.key) {
    var t = qf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Vr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Ti, charCode: function(e) {
  return e.type === "keypress" ? Vr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Vr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), rd = Ne(nd), ld = K({}, Tl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cu = Ne(ld), od = K({}, yr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ti }), id = Ne(od), ud = K({}, Tn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), sd = Ne(ud), ad = K({}, Tl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), cd = Ne(ad), fd = [9, 13, 27, 32], Di = tt && "CompositionEvent" in window, Qn = null;
tt && "documentMode" in document && (Qn = document.documentMode);
var dd = tt && "TextEvent" in window && !Qn, pa = tt && (!Di || Qn && 8 < Qn && 11 >= Qn), Pu = " ", Nu = !1;
function ma(e, t) {
  switch (e) {
    case "keyup":
      return fd.indexOf(t.keyCode) !== -1;
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
function ha(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var rn = !1;
function pd(e, t) {
  switch (e) {
    case "compositionend":
      return ha(t);
    case "keypress":
      return t.which !== 32 ? null : (Nu = !0, Pu);
    case "textInput":
      return e = t.data, e === Pu && Nu ? null : e;
    default:
      return null;
  }
}
function md(e, t) {
  if (rn) return e === "compositionend" || !Di && ma(e, t) ? (e = da(), Hr = Pi = pt = null, rn = !1, e) : null;
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
      return pa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var hd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hd[e.type] : t === "textarea";
}
function ga(e, t, n, r) {
  Ys(r), t = ll(t, "onChange"), 0 < t.length && (n = new Ni("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Kn = null, or = null;
function gd(e) {
  Na(e, 0);
}
function Dl(e) {
  var t = un(e);
  if ($s(t)) return e;
}
function vd(e, t) {
  if (e === "change") return t;
}
var va = !1;
if (tt) {
  var Jl;
  if (tt) {
    var ql = "oninput" in document;
    if (!ql) {
      var Du = document.createElement("div");
      Du.setAttribute("oninput", "return;"), ql = typeof Du.oninput == "function";
    }
    Jl = ql;
  } else Jl = !1;
  va = Jl && (!document.documentMode || 9 < document.documentMode);
}
function Iu() {
  Kn && (Kn.detachEvent("onpropertychange", ya), or = Kn = null);
}
function ya(e) {
  if (e.propertyName === "value" && Dl(or)) {
    var t = [];
    ga(t, or, e, wi(e)), Js(gd, t);
  }
}
function yd(e, t, n) {
  e === "focusin" ? (Iu(), Kn = t, or = n, Kn.attachEvent("onpropertychange", ya)) : e === "focusout" && Iu();
}
function kd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Dl(or);
}
function Sd(e, t) {
  if (e === "click") return Dl(t);
}
function wd(e, t) {
  if (e === "input" || e === "change") return Dl(t);
}
function Ed(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var $e = typeof Object.is == "function" ? Object.is : Ed;
function ir(e, t) {
  if ($e(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!yo.call(t, l) || !$e(e[l], t[l])) return !1;
  }
  return !0;
}
function ju(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zu(e, t) {
  var n = ju(e);
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
    n = ju(n);
  }
}
function ka(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ka(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Sa() {
  for (var e = window, t = Jr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jr(e.document);
  }
  return t;
}
function Ii(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function xd(e) {
  var t = Sa(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ka(n.ownerDocument.documentElement, n)) {
    if (r !== null && Ii(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, o = Math.min(r.start, l);
        r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = zu(n, o);
        var i = zu(
          n,
          r
        );
        l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var _d = tt && "documentMode" in document && 11 >= document.documentMode, ln = null, Ao = null, Yn = null, Fo = !1;
function Ru(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Fo || ln == null || ln !== Jr(r) || (r = ln, "selectionStart" in r && Ii(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Yn && ir(Yn, r) || (Yn = r, r = ll(Ao, "onSelect"), 0 < r.length && (t = new Ni("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = ln)));
}
function Ir(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var on = { animationend: Ir("Animation", "AnimationEnd"), animationiteration: Ir("Animation", "AnimationIteration"), animationstart: Ir("Animation", "AnimationStart"), transitionend: Ir("Transition", "TransitionEnd") }, bl = {}, wa = {};
tt && (wa = document.createElement("div").style, "AnimationEvent" in window || (delete on.animationend.animation, delete on.animationiteration.animation, delete on.animationstart.animation), "TransitionEvent" in window || delete on.transitionend.transition);
function Il(e) {
  if (bl[e]) return bl[e];
  if (!on[e]) return e;
  var t = on[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in wa) return bl[e] = t[n];
  return e;
}
var Ea = Il("animationend"), xa = Il("animationiteration"), _a = Il("animationstart"), Ca = Il("transitionend"), Pa = /* @__PURE__ */ new Map(), Lu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ct(e, t) {
  Pa.set(e, t), Yt(t, [e]);
}
for (var eo = 0; eo < Lu.length; eo++) {
  var to = Lu[eo], Cd = to.toLowerCase(), Pd = to[0].toUpperCase() + to.slice(1);
  Ct(Cd, "on" + Pd);
}
Ct(Ea, "onAnimationEnd");
Ct(xa, "onAnimationIteration");
Ct(_a, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(Ca, "onTransitionEnd");
Sn("onMouseEnter", ["mouseout", "mouseover"]);
Sn("onMouseLeave", ["mouseout", "mouseover"]);
Sn("onPointerEnter", ["pointerout", "pointerover"]);
Sn("onPointerLeave", ["pointerout", "pointerover"]);
Yt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Yt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Yt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Yt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Yt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Yt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Hn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Nd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Hn));
function Mu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Cf(r, t, void 0, e), e.currentTarget = null;
}
function Na(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t) for (var i = r.length - 1; 0 <= i; i--) {
        var u = r[i], s = u.instance, f = u.currentTarget;
        if (u = u.listener, s !== o && l.isPropagationStopped()) break e;
        Mu(l, u, f), o = s;
      }
      else for (i = 0; i < r.length; i++) {
        if (u = r[i], s = u.instance, f = u.currentTarget, u = u.listener, s !== o && l.isPropagationStopped()) break e;
        Mu(l, u, f), o = s;
      }
    }
  }
  if (br) throw e = Ro, br = !1, Ro = null, e;
}
function B(e, t) {
  var n = t[Vo];
  n === void 0 && (n = t[Vo] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ta(t, e, 2, !1), n.add(r));
}
function no(e, t, n) {
  var r = 0;
  t && (r |= 4), Ta(n, e, r, t);
}
var jr = "_reactListening" + Math.random().toString(36).slice(2);
function ur(e) {
  if (!e[jr]) {
    e[jr] = !0, Ms.forEach(function(n) {
      n !== "selectionchange" && (Nd.has(n) || no(n, !1, e), no(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[jr] || (t[jr] = !0, no("selectionchange", !1, t));
  }
}
function Ta(e, t, n, r) {
  switch (fa(t)) {
    case 1:
      var l = Bf;
      break;
    case 4:
      l = Hf;
      break;
    default:
      l = Ci;
  }
  n = l.bind(null, t, n, e), l = void 0, !zo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ro(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var i = r.tag;
    if (i === 3 || i === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (i === 4) for (i = r.return; i !== null; ) {
        var s = i.tag;
        if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        i = i.return;
      }
      for (; u !== null; ) {
        if (i = Rt(u), i === null) return;
        if (s = i.tag, s === 5 || s === 6) {
          r = o = i;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Js(function() {
    var f = o, h = wi(n), m = [];
    e: {
      var p = Pa.get(e);
      if (p !== void 0) {
        var k = Ni, y = e;
        switch (e) {
          case "keypress":
            if (Vr(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = rd;
            break;
          case "focusin":
            y = "focus", k = Zl;
            break;
          case "focusout":
            y = "blur", k = Zl;
            break;
          case "beforeblur":
          case "afterblur":
            k = Zl;
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
            k = xu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Qf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = id;
            break;
          case Ea:
          case xa:
          case _a:
            k = Xf;
            break;
          case Ca:
            k = sd;
            break;
          case "scroll":
            k = Vf;
            break;
          case "wheel":
            k = cd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Zf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Cu;
        }
        var w = (t & 4) !== 0, I = !w && e === "scroll", a = w ? p !== null ? p + "Capture" : null : p;
        w = [];
        for (var c = f, d; c !== null; ) {
          d = c;
          var g = d.stateNode;
          if (d.tag === 5 && g !== null && (d = g, a !== null && (g = tr(c, a), g != null && w.push(sr(c, g, d)))), I) break;
          c = c.return;
        }
        0 < w.length && (p = new k(p, y, null, n, h), m.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", p && n !== Io && (y = n.relatedTarget || n.fromElement) && (Rt(y) || y[nt])) break e;
        if ((k || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, k ? (y = n.relatedTarget || n.toElement, k = f, y = y ? Rt(y) : null, y !== null && (I = Xt(y), y !== I || y.tag !== 5 && y.tag !== 6) && (y = null)) : (k = null, y = f), k !== y)) {
          if (w = xu, g = "onMouseLeave", a = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = Cu, g = "onPointerLeave", a = "onPointerEnter", c = "pointer"), I = k == null ? p : un(k), d = y == null ? p : un(y), p = new w(g, c + "leave", k, n, h), p.target = I, p.relatedTarget = d, g = null, Rt(h) === f && (w = new w(a, c + "enter", y, n, h), w.target = d, w.relatedTarget = I, g = w), I = g, k && y) t: {
            for (w = k, a = y, c = 0, d = w; d; d = bt(d)) c++;
            for (d = 0, g = a; g; g = bt(g)) d++;
            for (; 0 < c - d; ) w = bt(w), c--;
            for (; 0 < d - c; ) a = bt(a), d--;
            for (; c--; ) {
              if (w === a || a !== null && w === a.alternate) break t;
              w = bt(w), a = bt(a);
            }
            w = null;
          }
          else w = null;
          k !== null && Ou(m, p, k, w, !1), y !== null && I !== null && Ou(m, I, y, w, !0);
        }
      }
      e: {
        if (p = f ? un(f) : window, k = p.nodeName && p.nodeName.toLowerCase(), k === "select" || k === "input" && p.type === "file") var E = vd;
        else if (Tu(p)) if (va) E = wd;
        else {
          E = kd;
          var _ = yd;
        }
        else (k = p.nodeName) && k.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Sd);
        if (E && (E = E(e, f))) {
          ga(m, E, n, h);
          break e;
        }
        _ && _(e, p, f), e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && Co(p, "number", p.value);
      }
      switch (_ = f ? un(f) : window, e) {
        case "focusin":
          (Tu(_) || _.contentEditable === "true") && (ln = _, Ao = f, Yn = null);
          break;
        case "focusout":
          Yn = Ao = ln = null;
          break;
        case "mousedown":
          Fo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Fo = !1, Ru(m, n, h);
          break;
        case "selectionchange":
          if (_d) break;
        case "keydown":
        case "keyup":
          Ru(m, n, h);
      }
      var x;
      if (Di) e: {
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
      else rn ? ma(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (pa && n.locale !== "ko" && (rn || N !== "onCompositionStart" ? N === "onCompositionEnd" && rn && (x = da()) : (pt = h, Pi = "value" in pt ? pt.value : pt.textContent, rn = !0)), _ = ll(f, N), 0 < _.length && (N = new _u(N, e, null, n, h), m.push({ event: N, listeners: _ }), x ? N.data = x : (x = ha(n), x !== null && (N.data = x)))), (x = dd ? pd(e, n) : md(e, n)) && (f = ll(f, "onBeforeInput"), 0 < f.length && (h = new _u("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: f }), h.data = x));
    }
    Na(m, t);
  });
}
function sr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ll(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, o = l.stateNode;
    l.tag === 5 && o !== null && (l = o, o = tr(e, n), o != null && r.unshift(sr(e, o, l)), o = tr(e, t), o != null && r.push(sr(e, o, l))), e = e.return;
  }
  return r;
}
function bt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ou(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, l ? (s = tr(n, o), s != null && i.unshift(sr(n, s, u))) : l || (s = tr(n, o), s != null && i.push(sr(n, s, u)))), n = n.return;
  }
  i.length !== 0 && e.push({ event: t, listeners: i });
}
var Td = /\r\n?/g, Dd = /\u0000|\uFFFD/g;
function Au(e) {
  return (typeof e == "string" ? e : "" + e).replace(Td, `
`).replace(Dd, "");
}
function zr(e, t, n) {
  if (t = Au(t), Au(e) !== t && n) throw Error(S(425));
}
function ol() {
}
var Uo = null, $o = null;
function Bo(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ho = typeof setTimeout == "function" ? setTimeout : void 0, Id = typeof clearTimeout == "function" ? clearTimeout : void 0, Fu = typeof Promise == "function" ? Promise : void 0, jd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fu < "u" ? function(e) {
  return Fu.resolve(null).then(e).catch(zd);
} : Ho;
function zd(e) {
  setTimeout(function() {
    throw e;
  });
}
function lo(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), lr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  lr(t);
}
function yt(e) {
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
function Uu(e) {
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
var Dn = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + Dn, ar = "__reactProps$" + Dn, nt = "__reactContainer$" + Dn, Vo = "__reactEvents$" + Dn, Rd = "__reactListeners$" + Dn, Ld = "__reactHandles$" + Dn;
function Rt(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[nt] || n[Ve]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Uu(e); e !== null; ) {
        if (n = e[Ve]) return n;
        e = Uu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function kr(e) {
  return e = e[Ve] || e[nt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function un(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(S(33));
}
function jl(e) {
  return e[ar] || null;
}
var Wo = [], sn = -1;
function Pt(e) {
  return { current: e };
}
function H(e) {
  0 > sn || (e.current = Wo[sn], Wo[sn] = null, sn--);
}
function U(e, t) {
  sn++, Wo[sn] = e.current, e.current = t;
}
var _t = {}, ce = Pt(_t), ye = Pt(!1), Ht = _t;
function wn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, o;
  for (o in n) l[o] = t[o];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ke(e) {
  return e = e.childContextTypes, e != null;
}
function il() {
  H(ye), H(ce);
}
function $u(e, t, n) {
  if (ce.current !== _t) throw Error(S(168));
  U(ce, t), U(ye, n);
}
function Da(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(S(108, yf(e) || "Unknown", l));
  return K({}, n, r);
}
function ul(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _t, Ht = ce.current, U(ce, e), U(ye, ye.current), !0;
}
function Bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(S(169));
  n ? (e = Da(e, t, Ht), r.__reactInternalMemoizedMergedChildContext = e, H(ye), H(ce), U(ce, e)) : H(ye), U(ye, n);
}
var Je = null, zl = !1, oo = !1;
function Ia(e) {
  Je === null ? Je = [e] : Je.push(e);
}
function Md(e) {
  zl = !0, Ia(e);
}
function Nt() {
  if (!oo && Je !== null) {
    oo = !0;
    var e = 0, t = M;
    try {
      var n = Je;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Je = null, zl = !1;
    } catch (l) {
      throw Je !== null && (Je = Je.slice(e + 1)), ta(Ei, Nt), l;
    } finally {
      M = t, oo = !1;
    }
  }
  return null;
}
var an = [], cn = 0, sl = null, al = 0, Te = [], De = 0, Vt = null, qe = 1, be = "";
function jt(e, t) {
  an[cn++] = al, an[cn++] = sl, sl = e, al = t;
}
function ja(e, t, n) {
  Te[De++] = qe, Te[De++] = be, Te[De++] = Vt, Vt = e;
  var r = qe;
  e = be;
  var l = 32 - Fe(r) - 1;
  r &= ~(1 << l), n += 1;
  var o = 32 - Fe(t) + l;
  if (30 < o) {
    var i = l - l % 5;
    o = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, qe = 1 << 32 - Fe(t) + l | n << l | r, be = o + e;
  } else qe = 1 << o | n << l | r, be = e;
}
function ji(e) {
  e.return !== null && (jt(e, 1), ja(e, 1, 0));
}
function zi(e) {
  for (; e === sl; ) sl = an[--cn], an[cn] = null, al = an[--cn], an[cn] = null;
  for (; e === Vt; ) Vt = Te[--De], Te[De] = null, be = Te[--De], Te[De] = null, qe = Te[--De], Te[De] = null;
}
var _e = null, xe = null, V = !1, Ae = null;
function za(e, t) {
  var n = Ie(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, _e = e, xe = yt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, _e = e, xe = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Vt !== null ? { id: qe, overflow: be } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ie(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, _e = e, xe = null, !0) : !1;
    default:
      return !1;
  }
}
function Qo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ko(e) {
  if (V) {
    var t = xe;
    if (t) {
      var n = t;
      if (!Hu(e, t)) {
        if (Qo(e)) throw Error(S(418));
        t = yt(n.nextSibling);
        var r = _e;
        t && Hu(e, t) ? za(r, n) : (e.flags = e.flags & -4097 | 2, V = !1, _e = e);
      }
    } else {
      if (Qo(e)) throw Error(S(418));
      e.flags = e.flags & -4097 | 2, V = !1, _e = e;
    }
  }
}
function Vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  _e = e;
}
function Rr(e) {
  if (e !== _e) return !1;
  if (!V) return Vu(e), V = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Bo(e.type, e.memoizedProps)), t && (t = xe)) {
    if (Qo(e)) throw Ra(), Error(S(418));
    for (; t; ) za(e, t), t = yt(t.nextSibling);
  }
  if (Vu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(S(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              xe = yt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      xe = null;
    }
  } else xe = _e ? yt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ra() {
  for (var e = xe; e; ) e = yt(e.nextSibling);
}
function En() {
  xe = _e = null, V = !1;
}
function Ri(e) {
  Ae === null ? Ae = [e] : Ae.push(e);
}
var Od = ot.ReactCurrentBatchConfig;
function On(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(S(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(S(147, e));
      var l = r, o = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === o ? t.ref : (t = function(i) {
        var u = l.refs;
        i === null ? delete u[o] : u[o] = i;
      }, t._stringRef = o, t);
    }
    if (typeof e != "string") throw Error(S(284));
    if (!n._owner) throw Error(S(290, e));
  }
  return e;
}
function Lr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(S(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Wu(e) {
  var t = e._init;
  return t(e._payload);
}
function La(e) {
  function t(a, c) {
    if (e) {
      var d = a.deletions;
      d === null ? (a.deletions = [c], a.flags |= 16) : d.push(c);
    }
  }
  function n(a, c) {
    if (!e) return null;
    for (; c !== null; ) t(a, c), c = c.sibling;
    return null;
  }
  function r(a, c) {
    for (a = /* @__PURE__ */ new Map(); c !== null; ) c.key !== null ? a.set(c.key, c) : a.set(c.index, c), c = c.sibling;
    return a;
  }
  function l(a, c) {
    return a = Et(a, c), a.index = 0, a.sibling = null, a;
  }
  function o(a, c, d) {
    return a.index = d, e ? (d = a.alternate, d !== null ? (d = d.index, d < c ? (a.flags |= 2, c) : d) : (a.flags |= 2, c)) : (a.flags |= 1048576, c);
  }
  function i(a) {
    return e && a.alternate === null && (a.flags |= 2), a;
  }
  function u(a, c, d, g) {
    return c === null || c.tag !== 6 ? (c = po(d, a.mode, g), c.return = a, c) : (c = l(c, d), c.return = a, c);
  }
  function s(a, c, d, g) {
    var E = d.type;
    return E === nn ? h(a, c, d.props.children, g, d.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === at && Wu(E) === c.type) ? (g = l(c, d.props), g.ref = On(a, c, d), g.return = a, g) : (g = Zr(d.type, d.key, d.props, null, a.mode, g), g.ref = On(a, c, d), g.return = a, g);
  }
  function f(a, c, d, g) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = mo(d, a.mode, g), c.return = a, c) : (c = l(c, d.children || []), c.return = a, c);
  }
  function h(a, c, d, g, E) {
    return c === null || c.tag !== 7 ? (c = $t(d, a.mode, g, E), c.return = a, c) : (c = l(c, d), c.return = a, c);
  }
  function m(a, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = po("" + c, a.mode, d), c.return = a, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case xr:
          return d = Zr(c.type, c.key, c.props, null, a.mode, d), d.ref = On(a, null, c), d.return = a, d;
        case tn:
          return c = mo(c, a.mode, d), c.return = a, c;
        case at:
          var g = c._init;
          return m(a, g(c._payload), d);
      }
      if ($n(c) || jn(c)) return c = $t(c, a.mode, d, null), c.return = a, c;
      Lr(a, c);
    }
    return null;
  }
  function p(a, c, d, g) {
    var E = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return E !== null ? null : u(a, c, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case xr:
          return d.key === E ? s(a, c, d, g) : null;
        case tn:
          return d.key === E ? f(a, c, d, g) : null;
        case at:
          return E = d._init, p(
            a,
            c,
            E(d._payload),
            g
          );
      }
      if ($n(d) || jn(d)) return E !== null ? null : h(a, c, d, g, null);
      Lr(a, d);
    }
    return null;
  }
  function k(a, c, d, g, E) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return a = a.get(d) || null, u(c, a, "" + g, E);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case xr:
          return a = a.get(g.key === null ? d : g.key) || null, s(c, a, g, E);
        case tn:
          return a = a.get(g.key === null ? d : g.key) || null, f(c, a, g, E);
        case at:
          var _ = g._init;
          return k(a, c, d, _(g._payload), E);
      }
      if ($n(g) || jn(g)) return a = a.get(d) || null, h(c, a, g, E, null);
      Lr(c, g);
    }
    return null;
  }
  function y(a, c, d, g) {
    for (var E = null, _ = null, x = c, N = c = 0, A = null; x !== null && N < d.length; N++) {
      x.index > N ? (A = x, x = null) : A = x.sibling;
      var j = p(a, x, d[N], g);
      if (j === null) {
        x === null && (x = A);
        break;
      }
      e && x && j.alternate === null && t(a, x), c = o(j, c, N), _ === null ? E = j : _.sibling = j, _ = j, x = A;
    }
    if (N === d.length) return n(a, x), V && jt(a, N), E;
    if (x === null) {
      for (; N < d.length; N++) x = m(a, d[N], g), x !== null && (c = o(x, c, N), _ === null ? E = x : _.sibling = x, _ = x);
      return V && jt(a, N), E;
    }
    for (x = r(a, x); N < d.length; N++) A = k(x, a, N, d[N], g), A !== null && (e && A.alternate !== null && x.delete(A.key === null ? N : A.key), c = o(A, c, N), _ === null ? E = A : _.sibling = A, _ = A);
    return e && x.forEach(function(F) {
      return t(a, F);
    }), V && jt(a, N), E;
  }
  function w(a, c, d, g) {
    var E = jn(d);
    if (typeof E != "function") throw Error(S(150));
    if (d = E.call(d), d == null) throw Error(S(151));
    for (var _ = E = null, x = c, N = c = 0, A = null, j = d.next(); x !== null && !j.done; N++, j = d.next()) {
      x.index > N ? (A = x, x = null) : A = x.sibling;
      var F = p(a, x, j.value, g);
      if (F === null) {
        x === null && (x = A);
        break;
      }
      e && x && F.alternate === null && t(a, x), c = o(F, c, N), _ === null ? E = F : _.sibling = F, _ = F, x = A;
    }
    if (j.done) return n(
      a,
      x
    ), V && jt(a, N), E;
    if (x === null) {
      for (; !j.done; N++, j = d.next()) j = m(a, j.value, g), j !== null && (c = o(j, c, N), _ === null ? E = j : _.sibling = j, _ = j);
      return V && jt(a, N), E;
    }
    for (x = r(a, x); !j.done; N++, j = d.next()) j = k(x, a, N, j.value, g), j !== null && (e && j.alternate !== null && x.delete(j.key === null ? N : j.key), c = o(j, c, N), _ === null ? E = j : _.sibling = j, _ = j);
    return e && x.forEach(function(O) {
      return t(a, O);
    }), V && jt(a, N), E;
  }
  function I(a, c, d, g) {
    if (typeof d == "object" && d !== null && d.type === nn && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case xr:
          e: {
            for (var E = d.key, _ = c; _ !== null; ) {
              if (_.key === E) {
                if (E = d.type, E === nn) {
                  if (_.tag === 7) {
                    n(a, _.sibling), c = l(_, d.props.children), c.return = a, a = c;
                    break e;
                  }
                } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === at && Wu(E) === _.type) {
                  n(a, _.sibling), c = l(_, d.props), c.ref = On(a, _, d), c.return = a, a = c;
                  break e;
                }
                n(a, _);
                break;
              } else t(a, _);
              _ = _.sibling;
            }
            d.type === nn ? (c = $t(d.props.children, a.mode, g, d.key), c.return = a, a = c) : (g = Zr(d.type, d.key, d.props, null, a.mode, g), g.ref = On(a, c, d), g.return = a, a = g);
          }
          return i(a);
        case tn:
          e: {
            for (_ = d.key; c !== null; ) {
              if (c.key === _) if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                n(a, c.sibling), c = l(c, d.children || []), c.return = a, a = c;
                break e;
              } else {
                n(a, c);
                break;
              }
              else t(a, c);
              c = c.sibling;
            }
            c = mo(d, a.mode, g), c.return = a, a = c;
          }
          return i(a);
        case at:
          return _ = d._init, I(a, c, _(d._payload), g);
      }
      if ($n(d)) return y(a, c, d, g);
      if (jn(d)) return w(a, c, d, g);
      Lr(a, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(a, c.sibling), c = l(c, d), c.return = a, a = c) : (n(a, c), c = po(d, a.mode, g), c.return = a, a = c), i(a)) : n(a, c);
  }
  return I;
}
var xn = La(!0), Ma = La(!1), cl = Pt(null), fl = null, fn = null, Li = null;
function Mi() {
  Li = fn = fl = null;
}
function Oi(e) {
  var t = cl.current;
  H(cl), e._currentValue = t;
}
function Yo(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function yn(e, t) {
  fl = e, Li = fn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ve = !0), e.firstContext = null);
}
function ze(e) {
  var t = e._currentValue;
  if (Li !== e) if (e = { context: e, memoizedValue: t, next: null }, fn === null) {
    if (fl === null) throw Error(S(308));
    fn = e, fl.dependencies = { lanes: 0, firstContext: e };
  } else fn = fn.next = e;
  return t;
}
var Lt = null;
function Ai(e) {
  Lt === null ? Lt = [e] : Lt.push(e);
}
function Oa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ai(t)) : (n.next = l.next, l.next = n), t.interleaved = n, rt(e, r);
}
function rt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ct = !1;
function Fi(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Aa(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function et(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, L & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, rt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ai(r)) : (t.next = l.next, l.next = t), r.interleaved = t, rt(e, n);
}
function Wr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, xi(e, n);
  }
}
function Qu(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, o = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        o === null ? l = o = i : o = o.next = i, n = n.next;
      } while (n !== null);
      o === null ? l = o = t : o = o.next = t;
    } else l = o = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function dl(e, t, n, r) {
  var l = e.updateQueue;
  ct = !1;
  var o = l.firstBaseUpdate, i = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, i === null ? o = f : i.next = f, i = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== i && (u === null ? h.firstBaseUpdate = f : u.next = f, h.lastBaseUpdate = s));
  }
  if (o !== null) {
    var m = l.baseState;
    i = 0, h = f = s = null, u = o;
    do {
      var p = u.lane, k = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: k,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var y = e, w = u;
          switch (p = t, k = n, w.tag) {
            case 1:
              if (y = w.payload, typeof y == "function") {
                m = y.call(k, m, p);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = w.payload, p = typeof y == "function" ? y.call(k, m, p) : y, p == null) break e;
              m = K({}, m, p);
              break e;
            case 2:
              ct = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else k = { eventTime: k, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (f = h = k, s = m) : h = h.next = k, i |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = f, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        i |= l.lane, l = l.next;
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    Qt |= i, e.lanes = i, e.memoizedState = m;
  }
}
function Ku(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(S(191, l));
      l.call(r);
    }
  }
}
var Sr = {}, Qe = Pt(Sr), cr = Pt(Sr), fr = Pt(Sr);
function Mt(e) {
  if (e === Sr) throw Error(S(174));
  return e;
}
function Ui(e, t) {
  switch (U(fr, t), U(cr, e), U(Qe, Sr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : No(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = No(t, e);
  }
  H(Qe), U(Qe, t);
}
function _n() {
  H(Qe), H(cr), H(fr);
}
function Fa(e) {
  Mt(fr.current);
  var t = Mt(Qe.current), n = No(t, e.type);
  t !== n && (U(cr, e), U(Qe, n));
}
function $i(e) {
  cr.current === e && (H(Qe), H(cr));
}
var W = Pt(0);
function pl(e) {
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
var io = [];
function Bi() {
  for (var e = 0; e < io.length; e++) io[e]._workInProgressVersionPrimary = null;
  io.length = 0;
}
var Qr = ot.ReactCurrentDispatcher, uo = ot.ReactCurrentBatchConfig, Wt = 0, Q = null, q = null, ee = null, ml = !1, Xn = !1, dr = 0, Ad = 0;
function ie() {
  throw Error(S(321));
}
function Hi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!$e(e[n], t[n])) return !1;
  return !0;
}
function Vi(e, t, n, r, l, o) {
  if (Wt = o, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Qr.current = e === null || e.memoizedState === null ? Bd : Hd, e = n(r, l), Xn) {
    o = 0;
    do {
      if (Xn = !1, dr = 0, 25 <= o) throw Error(S(301));
      o += 1, ee = q = null, t.updateQueue = null, Qr.current = Vd, e = n(r, l);
    } while (Xn);
  }
  if (Qr.current = hl, t = q !== null && q.next !== null, Wt = 0, ee = q = Q = null, ml = !1, t) throw Error(S(300));
  return e;
}
function Wi() {
  var e = dr !== 0;
  return dr = 0, e;
}
function He() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return ee === null ? Q.memoizedState = ee = e : ee = ee.next = e, ee;
}
function Re() {
  if (q === null) {
    var e = Q.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = ee === null ? Q.memoizedState : ee.next;
  if (t !== null) ee = t, q = e;
  else {
    if (e === null) throw Error(S(310));
    q = e, e = { memoizedState: q.memoizedState, baseState: q.baseState, baseQueue: q.baseQueue, queue: q.queue, next: null }, ee === null ? Q.memoizedState = ee = e : ee = ee.next = e;
  }
  return ee;
}
function pr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function so(e) {
  var t = Re(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = q, l = r.baseQueue, o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      l.next = o.next, o.next = i;
    }
    r.baseQueue = l = o, n.pending = null;
  }
  if (l !== null) {
    o = l.next, r = r.baseState;
    var u = i = null, s = null, f = o;
    do {
      var h = f.lane;
      if ((Wt & h) === h) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var m = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (u = s = m, i = r) : s = s.next = m, Q.lanes |= h, Qt |= h;
      }
      f = f.next;
    } while (f !== null && f !== o);
    s === null ? i = r : s.next = u, $e(r, t.memoizedState) || (ve = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      o = l.lane, Q.lanes |= o, Qt |= o, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ao(e) {
  var t = Re(), n = t.queue;
  if (n === null) throw Error(S(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = l = l.next;
    do
      o = e(o, i.action), i = i.next;
    while (i !== l);
    $e(o, t.memoizedState) || (ve = !0), t.memoizedState = o, t.baseQueue === null && (t.baseState = o), n.lastRenderedState = o;
  }
  return [o, r];
}
function Ua() {
}
function $a(e, t) {
  var n = Q, r = Re(), l = t(), o = !$e(r.memoizedState, l);
  if (o && (r.memoizedState = l, ve = !0), r = r.queue, Qi(Va.bind(null, n, r, e), [e]), r.getSnapshot !== t || o || ee !== null && ee.memoizedState.tag & 1) {
    if (n.flags |= 2048, mr(9, Ha.bind(null, n, r, l, t), void 0, null), te === null) throw Error(S(349));
    Wt & 30 || Ba(n, t, l);
  }
  return l;
}
function Ba(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ha(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Wa(t) && Qa(e);
}
function Va(e, t, n) {
  return n(function() {
    Wa(t) && Qa(e);
  });
}
function Wa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$e(e, n);
  } catch {
    return !0;
  }
}
function Qa(e) {
  var t = rt(e, 1);
  t !== null && Ue(t, e, 1, -1);
}
function Yu(e) {
  var t = He();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: pr, lastRenderedState: e }, t.queue = e, e = e.dispatch = $d.bind(null, Q, e), [t.memoizedState, e];
}
function mr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = Q.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, Q.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ka() {
  return Re().memoizedState;
}
function Kr(e, t, n, r) {
  var l = He();
  Q.flags |= e, l.memoizedState = mr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Rl(e, t, n, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (q !== null) {
    var i = q.memoizedState;
    if (o = i.destroy, r !== null && Hi(r, i.deps)) {
      l.memoizedState = mr(t, n, o, r);
      return;
    }
  }
  Q.flags |= e, l.memoizedState = mr(1 | t, n, o, r);
}
function Xu(e, t) {
  return Kr(8390656, 8, e, t);
}
function Qi(e, t) {
  return Rl(2048, 8, e, t);
}
function Ya(e, t) {
  return Rl(4, 2, e, t);
}
function Xa(e, t) {
  return Rl(4, 4, e, t);
}
function Ga(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Za(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Rl(4, 4, Ga.bind(null, t, e), n);
}
function Ki() {
}
function Ja(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function qa(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Hi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ba(e, t, n) {
  return Wt & 21 ? ($e(n, t) || (n = la(), Q.lanes |= n, Qt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ve = !0), e.memoizedState = n);
}
function Fd(e, t) {
  var n = M;
  M = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = uo.transition;
  uo.transition = {};
  try {
    e(!1), t();
  } finally {
    M = n, uo.transition = r;
  }
}
function ec() {
  return Re().memoizedState;
}
function Ud(e, t, n) {
  var r = wt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, tc(e)) nc(t, n);
  else if (n = Oa(e, t, n, r), n !== null) {
    var l = pe();
    Ue(n, e, r, l), rc(n, t, r);
  }
}
function $d(e, t, n) {
  var r = wt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tc(e)) nc(t, l);
  else {
    var o = e.alternate;
    if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = t.lastRenderedReducer, o !== null)) try {
      var i = t.lastRenderedState, u = o(i, n);
      if (l.hasEagerState = !0, l.eagerState = u, $e(u, i)) {
        var s = t.interleaved;
        s === null ? (l.next = l, Ai(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Oa(e, t, l, r), n !== null && (l = pe(), Ue(n, e, r, l), rc(n, t, r));
  }
}
function tc(e) {
  var t = e.alternate;
  return e === Q || t !== null && t === Q;
}
function nc(e, t) {
  Xn = ml = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function rc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, xi(e, n);
  }
}
var hl = { readContext: ze, useCallback: ie, useContext: ie, useEffect: ie, useImperativeHandle: ie, useInsertionEffect: ie, useLayoutEffect: ie, useMemo: ie, useReducer: ie, useRef: ie, useState: ie, useDebugValue: ie, useDeferredValue: ie, useTransition: ie, useMutableSource: ie, useSyncExternalStore: ie, useId: ie, unstable_isNewReconciler: !1 }, Bd = { readContext: ze, useCallback: function(e, t) {
  return He().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ze, useEffect: Xu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Kr(
    4194308,
    4,
    Ga.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Kr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Kr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = He();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = He();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ud.bind(null, Q, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = He();
  return e = { current: e }, t.memoizedState = e;
}, useState: Yu, useDebugValue: Ki, useDeferredValue: function(e) {
  return He().memoizedState = e;
}, useTransition: function() {
  var e = Yu(!1), t = e[0];
  return e = Fd.bind(null, e[1]), He().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = Q, l = He();
  if (V) {
    if (n === void 0) throw Error(S(407));
    n = n();
  } else {
    if (n = t(), te === null) throw Error(S(349));
    Wt & 30 || Ba(r, t, n);
  }
  l.memoizedState = n;
  var o = { value: n, getSnapshot: t };
  return l.queue = o, Xu(Va.bind(
    null,
    r,
    o,
    e
  ), [e]), r.flags |= 2048, mr(9, Ha.bind(null, r, o, n, t), void 0, null), n;
}, useId: function() {
  var e = He(), t = te.identifierPrefix;
  if (V) {
    var n = be, r = qe;
    n = (r & ~(1 << 32 - Fe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = dr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ad++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Hd = {
  readContext: ze,
  useCallback: Ja,
  useContext: ze,
  useEffect: Qi,
  useImperativeHandle: Za,
  useInsertionEffect: Ya,
  useLayoutEffect: Xa,
  useMemo: qa,
  useReducer: so,
  useRef: Ka,
  useState: function() {
    return so(pr);
  },
  useDebugValue: Ki,
  useDeferredValue: function(e) {
    var t = Re();
    return ba(t, q.memoizedState, e);
  },
  useTransition: function() {
    var e = so(pr)[0], t = Re().memoizedState;
    return [e, t];
  },
  useMutableSource: Ua,
  useSyncExternalStore: $a,
  useId: ec,
  unstable_isNewReconciler: !1
}, Vd = { readContext: ze, useCallback: Ja, useContext: ze, useEffect: Qi, useImperativeHandle: Za, useInsertionEffect: Ya, useLayoutEffect: Xa, useMemo: qa, useReducer: ao, useRef: Ka, useState: function() {
  return ao(pr);
}, useDebugValue: Ki, useDeferredValue: function(e) {
  var t = Re();
  return q === null ? t.memoizedState = e : ba(t, q.memoizedState, e);
}, useTransition: function() {
  var e = ao(pr)[0], t = Re().memoizedState;
  return [e, t];
}, useMutableSource: Ua, useSyncExternalStore: $a, useId: ec, unstable_isNewReconciler: !1 };
function Me(e, t) {
  if (e && e.defaultProps) {
    t = K({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Xo(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : K({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ll = { isMounted: function(e) {
  return (e = e._reactInternals) ? Xt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = pe(), l = wt(e), o = et(r, l);
  o.payload = t, n != null && (o.callback = n), t = kt(e, o, l), t !== null && (Ue(t, e, l, r), Wr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = pe(), l = wt(e), o = et(r, l);
  o.tag = 1, o.payload = t, n != null && (o.callback = n), t = kt(e, o, l), t !== null && (Ue(t, e, l, r), Wr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = pe(), r = wt(e), l = et(n, r);
  l.tag = 2, t != null && (l.callback = t), t = kt(e, l, r), t !== null && (Ue(t, e, r, n), Wr(t, e, r));
} };
function Gu(e, t, n, r, l, o, i) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, i) : t.prototype && t.prototype.isPureReactComponent ? !ir(n, r) || !ir(l, o) : !0;
}
function lc(e, t, n) {
  var r = !1, l = _t, o = t.contextType;
  return typeof o == "object" && o !== null ? o = ze(o) : (l = ke(t) ? Ht : ce.current, r = t.contextTypes, o = (r = r != null) ? wn(e, l) : _t), t = new t(n, o), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ll, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), t;
}
function Zu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ll.enqueueReplaceState(t, t.state, null);
}
function Go(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Fi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null ? l.context = ze(o) : (o = ke(t) ? Ht : ce.current, l.context = wn(e, o)), l.state = e.memoizedState, o = t.getDerivedStateFromProps, typeof o == "function" && (Xo(e, t, o, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ll.enqueueReplaceState(l, l.state, null), dl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function Cn(e, t) {
  try {
    var n = "", r = t;
    do
      n += vf(r), r = r.return;
    while (r);
    var l = n;
  } catch (o) {
    l = `
Error generating stack: ` + o.message + `
` + o.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function co(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Zo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Wd = typeof WeakMap == "function" ? WeakMap : Map;
function oc(e, t, n) {
  n = et(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    vl || (vl = !0, ii = r), Zo(e, t);
  }, n;
}
function ic(e, t, n) {
  n = et(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Zo(e, t);
    };
  }
  var o = e.stateNode;
  return o !== null && typeof o.componentDidCatch == "function" && (n.callback = function() {
    Zo(e, t), typeof r != "function" && (St === null ? St = /* @__PURE__ */ new Set([this]) : St.add(this));
    var i = t.stack;
    this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
  }), n;
}
function Ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Wd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = lp.bind(null, e, t, n), t.then(e, e));
}
function qu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function bu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = et(-1, 1), t.tag = 2, kt(n, t, 1))), n.lanes |= 1), e);
}
var Qd = ot.ReactCurrentOwner, ve = !1;
function de(e, t, n, r) {
  t.child = e === null ? Ma(t, null, n, r) : xn(t, e.child, n, r);
}
function es(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return yn(t, l), r = Vi(e, t, n, r, o, l), n = Wi(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, lt(e, t, l)) : (V && n && ji(t), t.flags |= 1, de(e, t, r, l), t.child);
}
function ts(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" && !eu(o) && o.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = o, uc(e, t, o, r, l)) : (e = Zr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (o = e.child, !(e.lanes & l)) {
    var i = o.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ir, n(i, r) && e.ref === t.ref) return lt(e, t, l);
  }
  return t.flags |= 1, e = Et(o, r), e.ref = t.ref, e.return = t, t.child = e;
}
function uc(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (ir(o, r) && e.ref === t.ref) if (ve = !1, t.pendingProps = r = o, (e.lanes & l) !== 0) e.flags & 131072 && (ve = !0);
    else return t.lanes = e.lanes, lt(e, t, l);
  }
  return Jo(e, t, n, r, l);
}
function sc(e, t, n) {
  var r = t.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, U(pn, Ee), Ee |= n;
  else {
    if (!(n & 1073741824)) return e = o !== null ? o.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, U(pn, Ee), Ee |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : n, U(pn, Ee), Ee |= r;
  }
  else o !== null ? (r = o.baseLanes | n, t.memoizedState = null) : r = n, U(pn, Ee), Ee |= r;
  return de(e, t, l, n), t.child;
}
function ac(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Jo(e, t, n, r, l) {
  var o = ke(n) ? Ht : ce.current;
  return o = wn(t, o), yn(t, l), n = Vi(e, t, n, r, o, l), r = Wi(), e !== null && !ve ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, lt(e, t, l)) : (V && r && ji(t), t.flags |= 1, de(e, t, n, l), t.child);
}
function ns(e, t, n, r, l) {
  if (ke(n)) {
    var o = !0;
    ul(t);
  } else o = !1;
  if (yn(t, l), t.stateNode === null) Yr(e, t), lc(t, n, r), Go(t, n, r, l), r = !0;
  else if (e === null) {
    var i = t.stateNode, u = t.memoizedProps;
    i.props = u;
    var s = i.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = ze(f) : (f = ke(n) ? Ht : ce.current, f = wn(t, f));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof i.getSnapshotBeforeUpdate == "function";
    m || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== r || s !== f) && Zu(t, i, r, f), ct = !1;
    var p = t.memoizedState;
    i.state = p, dl(t, r, i, l), s = t.memoizedState, u !== r || p !== s || ye.current || ct ? (typeof h == "function" && (Xo(t, n, h, r), s = t.memoizedState), (u = ct || Gu(t, n, u, r, p, s, f)) ? (m || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = f, r = u) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    i = t.stateNode, Aa(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : Me(t.type, u), i.props = f, m = t.pendingProps, p = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = ze(s) : (s = ke(n) ? Ht : ce.current, s = wn(t, s));
    var k = n.getDerivedStateFromProps;
    (h = typeof k == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (u !== m || p !== s) && Zu(t, i, r, s), ct = !1, p = t.memoizedState, i.state = p, dl(t, r, i, l);
    var y = t.memoizedState;
    u !== m || p !== y || ye.current || ct ? (typeof k == "function" && (Xo(t, n, k, r), y = t.memoizedState), (f = ct || Gu(t, n, f, r, p, y, s) || !1) ? (h || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, y, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, y, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), i.props = r, i.state = y, i.context = s, r = f) : (typeof i.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return qo(e, t, n, r, o, l);
}
function qo(e, t, n, r, l, o) {
  ac(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && Bu(t, n, !1), lt(e, t, o);
  r = t.stateNode, Qd.current = t;
  var u = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && i ? (t.child = xn(t, e.child, null, o), t.child = xn(t, null, u, o)) : de(e, t, u, o), t.memoizedState = r.state, l && Bu(t, n, !0), t.child;
}
function cc(e) {
  var t = e.stateNode;
  t.pendingContext ? $u(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $u(e, t.context, !1), Ui(e, t.containerInfo);
}
function rs(e, t, n, r, l) {
  return En(), Ri(l), t.flags |= 256, de(e, t, n, r), t.child;
}
var bo = { dehydrated: null, treeContext: null, retryLane: 0 };
function ei(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fc(e, t, n) {
  var r = t.pendingProps, l = W.current, o = !1, i = (t.flags & 128) !== 0, u;
  if ((u = i) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (o = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), U(W, l & 1), e === null)
    return Ko(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, o ? (r = t.mode, o = t.child, i = { mode: "hidden", children: i }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = i) : o = Al(i, r, 0, null), e = $t(e, r, n, null), o.return = t, e.return = t, o.sibling = e, t.child = o, t.child.memoizedState = ei(n), t.memoizedState = bo, e) : Yi(t, i));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Kd(e, t, i, r, u, l, n);
  if (o) {
    o = r.fallback, i = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Et(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? o = Et(u, o) : (o = $t(o, i, n, null), o.flags |= 2), o.return = t, r.return = t, r.sibling = o, t.child = r, r = o, o = t.child, i = e.child.memoizedState, i = i === null ? ei(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, o.memoizedState = i, o.childLanes = e.childLanes & ~n, t.memoizedState = bo, r;
  }
  return o = e.child, e = o.sibling, r = Et(o, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Yi(e, t) {
  return t = Al({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Mr(e, t, n, r) {
  return r !== null && Ri(r), xn(t, e.child, null, n), e = Yi(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Kd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = co(Error(S(422))), Mr(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (o = r.fallback, l = t.mode, r = Al({ mode: "visible", children: r.children }, l, 0, null), o = $t(o, l, i, null), o.flags |= 2, r.return = t, o.return = t, r.sibling = o, t.child = r, t.mode & 1 && xn(t, e.child, null, i), t.child.memoizedState = ei(i), t.memoizedState = bo, o);
  if (!(t.mode & 1)) return Mr(e, t, i, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, o = Error(S(419)), r = co(o, r, void 0), Mr(e, t, i, r);
  }
  if (u = (i & e.childLanes) !== 0, ve || u) {
    if (r = te, r !== null) {
      switch (i & -i) {
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
      l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, rt(e, l), Ue(r, e, l, -1));
    }
    return bi(), r = co(Error(S(421))), Mr(e, t, i, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = op.bind(null, e), l._reactRetry = t, null) : (e = o.treeContext, xe = yt(l.nextSibling), _e = t, V = !0, Ae = null, e !== null && (Te[De++] = qe, Te[De++] = be, Te[De++] = Vt, qe = e.id, be = e.overflow, Vt = t), t = Yi(t, r.children), t.flags |= 4096, t);
}
function ls(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yo(e.return, t, n);
}
function fo(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (o.isBackwards = t, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = n, o.tailMode = l);
}
function dc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, o = r.tail;
  if (de(e, t, r.children, n), r = W.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ls(e, n, t);
      else if (e.tag === 19) ls(e, n, t);
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
  if (U(W, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && pl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), fo(t, !1, l, n, o);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && pl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      fo(t, !0, n, null, o);
      break;
    case "together":
      fo(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Yr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function lt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Qt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(S(153));
  if (t.child !== null) {
    for (e = t.child, n = Et(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = Et(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Yd(e, t, n) {
  switch (t.tag) {
    case 3:
      cc(t), En();
      break;
    case 5:
      Fa(t);
      break;
    case 1:
      ke(t.type) && ul(t);
      break;
    case 4:
      Ui(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      U(cl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (U(W, W.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? fc(e, t, n) : (U(W, W.current & 1), e = lt(e, t, n), e !== null ? e.sibling : null);
      U(W, W.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return dc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), U(W, W.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, sc(e, t, n);
  }
  return lt(e, t, n);
}
var pc, ti, mc, hc;
pc = function(e, t) {
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
ti = function() {
};
mc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Mt(Qe.current);
    var o = null;
    switch (n) {
      case "input":
        l = xo(e, l), r = xo(e, r), o = [];
        break;
      case "select":
        l = K({}, l, { value: void 0 }), r = K({}, r, { value: void 0 }), o = [];
        break;
      case "textarea":
        l = Po(e, l), r = Po(e, r), o = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ol);
    }
    To(n, r);
    var i;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var u = l[f];
      for (i in u) u.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (bn.hasOwnProperty(f) ? o || (o = []) : (o = o || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (i in u) !u.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
        for (i in s) s.hasOwnProperty(i) && u[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
      } else n || (o || (o = []), o.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (o = o || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (bn.hasOwnProperty(f) ? (s != null && f === "onScroll" && B("scroll", e), o || u === s || (o = [])) : (o = o || []).push(f, s));
    }
    n && (o = o || []).push("style", n);
    var f = o;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
hc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function An(e, t) {
  if (!V) switch (e.tailMode) {
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
function ue(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Xd(e, t, n) {
  var r = t.pendingProps;
  switch (zi(t), t.tag) {
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
      return ue(t), null;
    case 1:
      return ke(t.type) && il(), ue(t), null;
    case 3:
      return r = t.stateNode, _n(), H(ye), H(ce), Bi(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Rr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ae !== null && (ci(Ae), Ae = null))), ti(e, t), ue(t), null;
    case 5:
      $i(t);
      var l = Mt(fr.current);
      if (n = t.type, e !== null && t.stateNode != null) mc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(S(166));
          return ue(t), null;
        }
        if (e = Mt(Qe.current), Rr(t)) {
          r = t.stateNode, n = t.type;
          var o = t.memoizedProps;
          switch (r[Ve] = t, r[ar] = o, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              B("cancel", r), B("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              B("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Hn.length; l++) B(Hn[l], r);
              break;
            case "source":
              B("error", r);
              break;
            case "img":
            case "image":
            case "link":
              B(
                "error",
                r
              ), B("load", r);
              break;
            case "details":
              B("toggle", r);
              break;
            case "input":
              pu(r, o), B("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!o.multiple }, B("invalid", r);
              break;
            case "textarea":
              hu(r, o), B("invalid", r);
          }
          To(n, o), l = null;
          for (var i in o) if (o.hasOwnProperty(i)) {
            var u = o[i];
            i === "children" ? typeof u == "string" ? r.textContent !== u && (o.suppressHydrationWarning !== !0 && zr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (o.suppressHydrationWarning !== !0 && zr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : bn.hasOwnProperty(i) && u != null && i === "onScroll" && B("scroll", r);
          }
          switch (n) {
            case "input":
              _r(r), mu(r, o, !0);
              break;
            case "textarea":
              _r(r), gu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = ol);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[Ve] = t, e[ar] = r, pc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (i = Do(n, r), n) {
              case "dialog":
                B("cancel", e), B("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                B("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Hn.length; l++) B(Hn[l], e);
                l = r;
                break;
              case "source":
                B("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                B(
                  "error",
                  e
                ), B("load", e), l = r;
                break;
              case "details":
                B("toggle", e), l = r;
                break;
              case "input":
                pu(e, r), l = xo(e, r), B("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = K({}, r, { value: void 0 }), B("invalid", e);
                break;
              case "textarea":
                hu(e, r), l = Po(e, r), B("invalid", e);
                break;
              default:
                l = r;
            }
            To(n, l), u = l;
            for (o in u) if (u.hasOwnProperty(o)) {
              var s = u[o];
              o === "style" ? Ks(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ws(e, s)) : o === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && er(e, s) : typeof s == "number" && er(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (bn.hasOwnProperty(o) ? s != null && o === "onScroll" && B("scroll", e) : s != null && vi(e, o, s, i));
            }
            switch (n) {
              case "input":
                _r(e), mu(e, r, !1);
                break;
              case "textarea":
                _r(e), gu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + xt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, o = r.value, o != null ? mn(e, !!r.multiple, o, !1) : r.defaultValue != null && mn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ol);
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
      return ue(t), null;
    case 6:
      if (e && t.stateNode != null) hc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(S(166));
        if (n = Mt(fr.current), Mt(Qe.current), Rr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ve] = t, (o = r.nodeValue !== n) && (e = _e, e !== null)) switch (e.tag) {
            case 3:
              zr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && zr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          o && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ve] = t, t.stateNode = r;
      }
      return ue(t), null;
    case 13:
      if (H(W), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (V && xe !== null && t.mode & 1 && !(t.flags & 128)) Ra(), En(), t.flags |= 98560, o = !1;
        else if (o = Rr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!o) throw Error(S(318));
            if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(S(317));
            o[Ve] = t;
          } else En(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ue(t), o = !1;
        } else Ae !== null && (ci(Ae), Ae = null), o = !0;
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || W.current & 1 ? b === 0 && (b = 3) : bi())), t.updateQueue !== null && (t.flags |= 4), ue(t), null);
    case 4:
      return _n(), ti(e, t), e === null && ur(t.stateNode.containerInfo), ue(t), null;
    case 10:
      return Oi(t.type._context), ue(t), null;
    case 17:
      return ke(t.type) && il(), ue(t), null;
    case 19:
      if (H(W), o = t.memoizedState, o === null) return ue(t), null;
      if (r = (t.flags & 128) !== 0, i = o.rendering, i === null) if (r) An(o, !1);
      else {
        if (b !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (i = pl(e), i !== null) {
            for (t.flags |= 128, An(o, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) o = n, e = r, o.flags &= 14680066, i = o.alternate, i === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = i.childLanes, o.lanes = i.lanes, o.child = i.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = i.memoizedProps, o.memoizedState = i.memoizedState, o.updateQueue = i.updateQueue, o.type = i.type, e = i.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return U(W, W.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        o.tail !== null && G() > Pn && (t.flags |= 128, r = !0, An(o, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = pl(i), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), An(o, !0), o.tail === null && o.tailMode === "hidden" && !i.alternate && !V) return ue(t), null;
        } else 2 * G() - o.renderingStartTime > Pn && n !== 1073741824 && (t.flags |= 128, r = !0, An(o, !1), t.lanes = 4194304);
        o.isBackwards ? (i.sibling = t.child, t.child = i) : (n = o.last, n !== null ? n.sibling = i : t.child = i, o.last = i);
      }
      return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = G(), t.sibling = null, n = W.current, U(W, r ? n & 1 | 2 : n & 1), t) : (ue(t), null);
    case 22:
    case 23:
      return qi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Ee & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ue(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(S(156, t.tag));
}
function Gd(e, t) {
  switch (zi(t), t.tag) {
    case 1:
      return ke(t.type) && il(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return _n(), H(ye), H(ce), Bi(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return $i(t), null;
    case 13:
      if (H(W), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(S(340));
        En();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(W), null;
    case 4:
      return _n(), null;
    case 10:
      return Oi(t.type._context), null;
    case 22:
    case 23:
      return qi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Or = !1, ae = !1, Zd = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function dn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Y(e, t, r);
  }
  else n.current = null;
}
function ni(e, t, n) {
  try {
    n();
  } catch (r) {
    Y(e, t, r);
  }
}
var os = !1;
function Jd(e, t) {
  if (Uo = nl, e = Sa(), Ii(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, o = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, o.nodeType;
        } catch {
          n = null;
          break e;
        }
        var i = 0, u = -1, s = -1, f = 0, h = 0, m = e, p = null;
        t: for (; ; ) {
          for (var k; m !== n || l !== 0 && m.nodeType !== 3 || (u = i + l), m !== o || r !== 0 && m.nodeType !== 3 || (s = i + r), m.nodeType === 3 && (i += m.nodeValue.length), (k = m.firstChild) !== null; )
            p = m, m = k;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++f === l && (u = i), p === o && ++h === r && (s = i), (k = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = k;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($o = { focusedElem: e, selectionRange: n }, nl = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
  else for (; P !== null; ) {
    t = P;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var w = y.memoizedProps, I = y.memoizedState, a = t.stateNode, c = a.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Me(t.type, w), I);
            a.__reactInternalSnapshotBeforeUpdate = c;
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
          throw Error(S(163));
      }
    } catch (g) {
      Y(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return y = os, os = !1, y;
}
function Gn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        l.destroy = void 0, o !== void 0 && ni(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ml(e, t) {
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
function ri(e) {
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
function gc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, gc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ve], delete t[ar], delete t[Vo], delete t[Rd], delete t[Ld])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function vc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function is(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || vc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function li(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ol));
  else if (r !== 4 && (e = e.child, e !== null)) for (li(e, t, n), e = e.sibling; e !== null; ) li(e, t, n), e = e.sibling;
}
function oi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (oi(e, t, n), e = e.sibling; e !== null; ) oi(e, t, n), e = e.sibling;
}
var ne = null, Oe = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) yc(e, t, n), n = n.sibling;
}
function yc(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == "function") try {
    We.onCommitFiberUnmount(Nl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ae || dn(n, t);
    case 6:
      var r = ne, l = Oe;
      ne = null, it(e, t, n), ne = r, Oe = l, ne !== null && (Oe ? (e = ne, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ne.removeChild(n.stateNode));
      break;
    case 18:
      ne !== null && (Oe ? (e = ne, n = n.stateNode, e.nodeType === 8 ? lo(e.parentNode, n) : e.nodeType === 1 && lo(e, n), lr(e)) : lo(ne, n.stateNode));
      break;
    case 4:
      r = ne, l = Oe, ne = n.stateNode.containerInfo, Oe = !0, it(e, t, n), ne = r, Oe = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ae && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var o = l, i = o.destroy;
          o = o.tag, i !== void 0 && (o & 2 || o & 4) && ni(n, t, i), l = l.next;
        } while (l !== r);
      }
      it(e, t, n);
      break;
    case 1:
      if (!ae && (dn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Y(n, t, u);
      }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ae = (r = ae) || n.memoizedState !== null, it(e, t, n), ae = r) : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function us(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Zd()), t.forEach(function(r) {
      var l = ip.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var o = e, i = t, u = i;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ne = u.stateNode, Oe = !1;
            break e;
          case 3:
            ne = u.stateNode.containerInfo, Oe = !0;
            break e;
          case 4:
            ne = u.stateNode.containerInfo, Oe = !0;
            break e;
        }
        u = u.return;
      }
      if (ne === null) throw Error(S(160));
      yc(o, i, l), ne = null, Oe = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (f) {
      Y(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) kc(t, e), t = t.sibling;
}
function kc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(t, e), Be(e), r & 4) {
        try {
          Gn(3, e, e.return), Ml(3, e);
        } catch (w) {
          Y(e, e.return, w);
        }
        try {
          Gn(5, e, e.return);
        } catch (w) {
          Y(e, e.return, w);
        }
      }
      break;
    case 1:
      Le(t, e), Be(e), r & 512 && n !== null && dn(n, n.return);
      break;
    case 5:
      if (Le(t, e), Be(e), r & 512 && n !== null && dn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          er(l, "");
        } catch (w) {
          Y(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var o = e.memoizedProps, i = n !== null ? n.memoizedProps : o, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && o.type === "radio" && o.name != null && Bs(l, o), Do(u, i);
          var f = Do(u, o);
          for (i = 0; i < s.length; i += 2) {
            var h = s[i], m = s[i + 1];
            h === "style" ? Ks(l, m) : h === "dangerouslySetInnerHTML" ? Ws(l, m) : h === "children" ? er(l, m) : vi(l, h, m, f);
          }
          switch (u) {
            case "input":
              _o(l, o);
              break;
            case "textarea":
              Hs(l, o);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!o.multiple;
              var k = o.value;
              k != null ? mn(l, !!o.multiple, k, !1) : p !== !!o.multiple && (o.defaultValue != null ? mn(
                l,
                !!o.multiple,
                o.defaultValue,
                !0
              ) : mn(l, !!o.multiple, o.multiple ? [] : "", !1));
          }
          l[ar] = o;
        } catch (w) {
          Y(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Le(t, e), Be(e), r & 4) {
        if (e.stateNode === null) throw Error(S(162));
        l = e.stateNode, o = e.memoizedProps;
        try {
          l.nodeValue = o;
        } catch (w) {
          Y(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Le(t, e), Be(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        lr(t.containerInfo);
      } catch (w) {
        Y(e, e.return, w);
      }
      break;
    case 4:
      Le(t, e), Be(e);
      break;
    case 13:
      Le(t, e), Be(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (Zi = G())), r & 4 && us(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ae = (f = ae) || h, Le(t, e), ae = f) : Le(t, e), Be(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !h && e.mode & 1) for (P = e, h = e.child; h !== null; ) {
          for (m = P = h; P !== null; ) {
            switch (p = P, k = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Gn(4, p, p.return);
                break;
              case 1:
                dn(p, p.return);
                var y = p.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (w) {
                    Y(r, n, w);
                  }
                }
                break;
              case 5:
                dn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  as(m);
                  continue;
                }
            }
            k !== null ? (k.return = p, P = k) : as(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, f ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Qs("display", i));
              } catch (w) {
                Y(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = f ? "" : m.memoizedProps;
            } catch (w) {
              Y(e, e.return, w);
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
      Le(t, e), Be(e), r & 4 && us(e);
      break;
    case 21:
      break;
    default:
      Le(
        t,
        e
      ), Be(e);
  }
}
function Be(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (vc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(S(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (er(l, ""), r.flags &= -33);
          var o = is(e);
          oi(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo, u = is(e);
          li(e, u, i);
          break;
        default:
          throw Error(S(161));
      }
    } catch (s) {
      Y(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function qd(e, t, n) {
  P = e, Sc(e);
}
function Sc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P, o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || Or;
      if (!i) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ae;
        u = Or;
        var f = ae;
        if (Or = i, (ae = s) && !f) for (P = l; P !== null; ) i = P, s = i.child, i.tag === 22 && i.memoizedState !== null ? cs(l) : s !== null ? (s.return = i, P = s) : cs(l);
        for (; o !== null; ) P = o, Sc(o), o = o.sibling;
        P = l, Or = u, ae = f;
      }
      ss(e);
    } else l.subtreeFlags & 8772 && o !== null ? (o.return = l, P = o) : ss(e);
  }
}
function ss(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ae || Ml(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ae) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Me(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var o = t.updateQueue;
            o !== null && Ku(t, o, r);
            break;
          case 3:
            var i = t.updateQueue;
            if (i !== null) {
              if (n = null, t.child !== null) switch (t.child.tag) {
                case 5:
                  n = t.child.stateNode;
                  break;
                case 1:
                  n = t.child.stateNode;
              }
              Ku(t, i, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
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
              var f = t.alternate;
              if (f !== null) {
                var h = f.memoizedState;
                if (h !== null) {
                  var m = h.dehydrated;
                  m !== null && lr(m);
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
            throw Error(S(163));
        }
        ae || t.flags & 512 && ri(t);
      } catch (p) {
        Y(t, t.return, p);
      }
    }
    if (t === e) {
      P = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function as(e) {
  for (; P !== null; ) {
    var t = P;
    if (t === e) {
      P = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, P = n;
      break;
    }
    P = t.return;
  }
}
function cs(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ml(4, t);
          } catch (s) {
            Y(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Y(t, l, s);
            }
          }
          var o = t.return;
          try {
            ri(t);
          } catch (s) {
            Y(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            ri(t);
          } catch (s) {
            Y(t, i, s);
          }
      }
    } catch (s) {
      Y(t, t.return, s);
    }
    if (t === e) {
      P = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, P = u;
      break;
    }
    P = t.return;
  }
}
var bd = Math.ceil, gl = ot.ReactCurrentDispatcher, Xi = ot.ReactCurrentOwner, je = ot.ReactCurrentBatchConfig, L = 0, te = null, J = null, re = 0, Ee = 0, pn = Pt(0), b = 0, hr = null, Qt = 0, Ol = 0, Gi = 0, Zn = null, ge = null, Zi = 0, Pn = 1 / 0, Ze = null, vl = !1, ii = null, St = null, Ar = !1, mt = null, yl = 0, Jn = 0, si = null, Xr = -1, Gr = 0;
function pe() {
  return L & 6 ? G() : Xr !== -1 ? Xr : Xr = G();
}
function wt(e) {
  return e.mode & 1 ? L & 2 && re !== 0 ? re & -re : Od.transition !== null ? (Gr === 0 && (Gr = la()), Gr) : (e = M, e !== 0 || (e = window.event, e = e === void 0 ? 16 : fa(e.type)), e) : 1;
}
function Ue(e, t, n, r) {
  if (50 < Jn) throw Jn = 0, si = null, Error(S(185));
  vr(e, n, r), (!(L & 2) || e !== te) && (e === te && (!(L & 2) && (Ol |= n), b === 4 && dt(e, re)), Se(e, r), n === 1 && L === 0 && !(t.mode & 1) && (Pn = G() + 500, zl && Nt()));
}
function Se(e, t) {
  var n = e.callbackNode;
  Of(e, t);
  var r = tl(e, e === te ? re : 0);
  if (r === 0) n !== null && ku(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ku(n), t === 1) e.tag === 0 ? Md(fs.bind(null, e)) : Ia(fs.bind(null, e)), jd(function() {
      !(L & 6) && Nt();
    }), n = null;
    else {
      switch (oa(r)) {
        case 1:
          n = Ei;
          break;
        case 4:
          n = na;
          break;
        case 16:
          n = el;
          break;
        case 536870912:
          n = ra;
          break;
        default:
          n = el;
      }
      n = Tc(n, wc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function wc(e, t) {
  if (Xr = -1, Gr = 0, L & 6) throw Error(S(327));
  var n = e.callbackNode;
  if (kn() && e.callbackNode !== n) return null;
  var r = tl(e, e === te ? re : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = kl(e, r);
  else {
    t = r;
    var l = L;
    L |= 2;
    var o = xc();
    (te !== e || re !== t) && (Ze = null, Pn = G() + 500, Ut(e, t));
    do
      try {
        np();
        break;
      } catch (u) {
        Ec(e, u);
      }
    while (!0);
    Mi(), gl.current = o, L = l, J !== null ? t = 0 : (te = null, re = 0, t = b);
  }
  if (t !== 0) {
    if (t === 2 && (l = Lo(e), l !== 0 && (r = l, t = ai(e, l))), t === 1) throw n = hr, Ut(e, 0), dt(e, r), Se(e, G()), n;
    if (t === 6) dt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !ep(l) && (t = kl(e, r), t === 2 && (o = Lo(e), o !== 0 && (r = o, t = ai(e, o))), t === 1)) throw n = hr, Ut(e, 0), dt(e, r), Se(e, G()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(S(345));
        case 2:
          zt(e, ge, Ze);
          break;
        case 3:
          if (dt(e, r), (r & 130023424) === r && (t = Zi + 500 - G(), 10 < t)) {
            if (tl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              pe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ho(zt.bind(null, e, ge, Ze), t);
            break;
          }
          zt(e, ge, Ze);
          break;
        case 4:
          if (dt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Fe(r);
            o = 1 << i, i = t[i], i > l && (l = i), r &= ~o;
          }
          if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * bd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ho(zt.bind(null, e, ge, Ze), r);
            break;
          }
          zt(e, ge, Ze);
          break;
        case 5:
          zt(e, ge, Ze);
          break;
        default:
          throw Error(S(329));
      }
    }
  }
  return Se(e, G()), e.callbackNode === n ? wc.bind(null, e) : null;
}
function ai(e, t) {
  var n = Zn;
  return e.current.memoizedState.isDehydrated && (Ut(e, t).flags |= 256), e = kl(e, t), e !== 2 && (t = ge, ge = n, t !== null && ci(t)), e;
}
function ci(e) {
  ge === null ? ge = e : ge.push.apply(ge, e);
}
function ep(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], o = l.getSnapshot;
        l = l.value;
        try {
          if (!$e(o(), l)) return !1;
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
function dt(e, t) {
  for (t &= ~Gi, t &= ~Ol, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Fe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fs(e) {
  if (L & 6) throw Error(S(327));
  kn();
  var t = tl(e, 0);
  if (!(t & 1)) return Se(e, G()), null;
  var n = kl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Lo(e);
    r !== 0 && (t = r, n = ai(e, r));
  }
  if (n === 1) throw n = hr, Ut(e, 0), dt(e, t), Se(e, G()), n;
  if (n === 6) throw Error(S(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, zt(e, ge, Ze), Se(e, G()), null;
}
function Ji(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    L = n, L === 0 && (Pn = G() + 500, zl && Nt());
  }
}
function Kt(e) {
  mt !== null && mt.tag === 0 && !(L & 6) && kn();
  var t = L;
  L |= 1;
  var n = je.transition, r = M;
  try {
    if (je.transition = null, M = 1, e) return e();
  } finally {
    M = r, je.transition = n, L = t, !(L & 6) && Nt();
  }
}
function qi() {
  Ee = pn.current, H(pn);
}
function Ut(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Id(n)), J !== null) for (n = J.return; n !== null; ) {
    var r = n;
    switch (zi(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && il();
        break;
      case 3:
        _n(), H(ye), H(ce), Bi();
        break;
      case 5:
        $i(r);
        break;
      case 4:
        _n();
        break;
      case 13:
        H(W);
        break;
      case 19:
        H(W);
        break;
      case 10:
        Oi(r.type._context);
        break;
      case 22:
      case 23:
        qi();
    }
    n = n.return;
  }
  if (te = e, J = e = Et(e.current, null), re = Ee = t, b = 0, hr = null, Gi = Ol = Qt = 0, ge = Zn = null, Lt !== null) {
    for (t = 0; t < Lt.length; t++) if (n = Lt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, o = n.pending;
      if (o !== null) {
        var i = o.next;
        o.next = l, r.next = i;
      }
      n.pending = r;
    }
    Lt = null;
  }
  return e;
}
function Ec(e, t) {
  do {
    var n = J;
    try {
      if (Mi(), Qr.current = hl, ml) {
        for (var r = Q.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ml = !1;
      }
      if (Wt = 0, ee = q = Q = null, Xn = !1, dr = 0, Xi.current = null, n === null || n.return === null) {
        b = 1, hr = t, J = null;
        break;
      }
      e: {
        var o = e, i = n.return, u = n, s = t;
        if (t = re, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var k = qu(i);
          if (k !== null) {
            k.flags &= -257, bu(k, i, u, o, t), k.mode & 1 && Ju(o, f, t), t = k, s = f;
            var y = t.updateQueue;
            if (y === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), t.updateQueue = w;
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ju(o, f, t), bi();
              break e;
            }
            s = Error(S(426));
          }
        } else if (V && u.mode & 1) {
          var I = qu(i);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), bu(I, i, u, o, t), Ri(Cn(s, u));
            break e;
          }
        }
        o = s = Cn(s, u), b !== 4 && (b = 2), Zn === null ? Zn = [o] : Zn.push(o), o = i;
        do {
          switch (o.tag) {
            case 3:
              o.flags |= 65536, t &= -t, o.lanes |= t;
              var a = oc(o, s, t);
              Qu(o, a);
              break e;
            case 1:
              u = s;
              var c = o.type, d = o.stateNode;
              if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (St === null || !St.has(d)))) {
                o.flags |= 65536, t &= -t, o.lanes |= t;
                var g = ic(o, u, t);
                Qu(o, g);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      Cc(n);
    } catch (E) {
      t = E, J === n && n !== null && (J = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xc() {
  var e = gl.current;
  return gl.current = hl, e === null ? hl : e;
}
function bi() {
  (b === 0 || b === 3 || b === 2) && (b = 4), te === null || !(Qt & 268435455) && !(Ol & 268435455) || dt(te, re);
}
function kl(e, t) {
  var n = L;
  L |= 2;
  var r = xc();
  (te !== e || re !== t) && (Ze = null, Ut(e, t));
  do
    try {
      tp();
      break;
    } catch (l) {
      Ec(e, l);
    }
  while (!0);
  if (Mi(), L = n, gl.current = r, J !== null) throw Error(S(261));
  return te = null, re = 0, b;
}
function tp() {
  for (; J !== null; ) _c(J);
}
function np() {
  for (; J !== null && !Nf(); ) _c(J);
}
function _c(e) {
  var t = Nc(e.alternate, e, Ee);
  e.memoizedProps = e.pendingProps, t === null ? Cc(e) : J = t, Xi.current = null;
}
function Cc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Gd(n, t), n !== null) {
        n.flags &= 32767, J = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        b = 6, J = null;
        return;
      }
    } else if (n = Xd(n, t, Ee), n !== null) {
      J = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      J = t;
      return;
    }
    J = t = e;
  } while (t !== null);
  b === 0 && (b = 5);
}
function zt(e, t, n) {
  var r = M, l = je.transition;
  try {
    je.transition = null, M = 1, rp(e, t, n, r);
  } finally {
    je.transition = l, M = r;
  }
  return null;
}
function rp(e, t, n, r) {
  do
    kn();
  while (mt !== null);
  if (L & 6) throw Error(S(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(S(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var o = n.lanes | n.childLanes;
  if (Af(e, o), e === te && (J = te = null, re = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ar || (Ar = !0, Tc(el, function() {
    return kn(), null;
  })), o = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || o) {
    o = je.transition, je.transition = null;
    var i = M;
    M = 1;
    var u = L;
    L |= 4, Xi.current = null, Jd(e, n), kc(n, e), xd($o), nl = !!Uo, $o = Uo = null, e.current = n, qd(n), Tf(), L = u, M = i, je.transition = o;
  } else e.current = n;
  if (Ar && (Ar = !1, mt = e, yl = l), o = e.pendingLanes, o === 0 && (St = null), jf(n.stateNode), Se(e, G()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (vl) throw vl = !1, e = ii, ii = null, e;
  return yl & 1 && e.tag !== 0 && kn(), o = e.pendingLanes, o & 1 ? e === si ? Jn++ : (Jn = 0, si = e) : Jn = 0, Nt(), null;
}
function kn() {
  if (mt !== null) {
    var e = oa(yl), t = je.transition, n = M;
    try {
      if (je.transition = null, M = 16 > e ? 16 : e, mt === null) var r = !1;
      else {
        if (e = mt, mt = null, yl = 0, L & 6) throw Error(S(331));
        var l = L;
        for (L |= 4, P = e.current; P !== null; ) {
          var o = P, i = o.child;
          if (P.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (P = f; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Gn(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, P = m;
                  else for (; P !== null; ) {
                    h = P;
                    var p = h.sibling, k = h.return;
                    if (gc(h), h === f) {
                      P = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = k, P = p;
                      break;
                    }
                    P = k;
                  }
                }
              }
              var y = o.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var I = w.sibling;
                    w.sibling = null, w = I;
                  } while (w !== null);
                }
              }
              P = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) i.return = o, P = i;
          else e: for (; P !== null; ) {
            if (o = P, o.flags & 2048) switch (o.tag) {
              case 0:
              case 11:
              case 15:
                Gn(9, o, o.return);
            }
            var a = o.sibling;
            if (a !== null) {
              a.return = o.return, P = a;
              break e;
            }
            P = o.return;
          }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          i = P;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) d.return = i, P = d;
          else e: for (i = c; P !== null; ) {
            if (u = P, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ml(9, u);
              }
            } catch (E) {
              Y(u, u.return, E);
            }
            if (u === i) {
              P = null;
              break e;
            }
            var g = u.sibling;
            if (g !== null) {
              g.return = u.return, P = g;
              break e;
            }
            P = u.return;
          }
        }
        if (L = l, Nt(), We && typeof We.onPostCommitFiberRoot == "function") try {
          We.onPostCommitFiberRoot(Nl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      M = n, je.transition = t;
    }
  }
  return !1;
}
function ds(e, t, n) {
  t = Cn(n, t), t = oc(e, t, 1), e = kt(e, t, 1), t = pe(), e !== null && (vr(e, 1, t), Se(e, t));
}
function Y(e, t, n) {
  if (e.tag === 3) ds(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ds(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (St === null || !St.has(r))) {
        e = Cn(n, e), e = ic(t, e, 1), t = kt(t, e, 1), e = pe(), t !== null && (vr(t, 1, e), Se(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function lp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = pe(), e.pingedLanes |= e.suspendedLanes & n, te === e && (re & n) === n && (b === 4 || b === 3 && (re & 130023424) === re && 500 > G() - Zi ? Ut(e, 0) : Gi |= n), Se(e, t);
}
function Pc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : t = 1);
  var n = pe();
  e = rt(e, t), e !== null && (vr(e, t, n), Se(e, n));
}
function op(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Pc(e, n);
}
function ip(e, t) {
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
      throw Error(S(314));
  }
  r !== null && r.delete(t), Pc(e, n);
}
var Nc;
Nc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ye.current) ve = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ve = !1, Yd(e, t, n);
    ve = !!(e.flags & 131072);
  }
  else ve = !1, V && t.flags & 1048576 && ja(t, al, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Yr(e, t), e = t.pendingProps;
      var l = wn(t, ce.current);
      yn(t, n), l = Vi(null, t, r, e, l, n);
      var o = Wi();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ke(r) ? (o = !0, ul(t)) : o = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Fi(t), l.updater = Ll, t.stateNode = l, l._reactInternals = t, Go(t, r, e, n), t = qo(null, t, r, !0, o, n)) : (t.tag = 0, V && o && ji(t), de(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Yr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = sp(r), e = Me(r, e), l) {
          case 0:
            t = Jo(null, t, r, e, n);
            break e;
          case 1:
            t = ns(null, t, r, e, n);
            break e;
          case 11:
            t = es(null, t, r, e, n);
            break e;
          case 14:
            t = ts(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(S(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Jo(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), ns(e, t, r, l, n);
    case 3:
      e: {
        if (cc(t), e === null) throw Error(S(387));
        r = t.pendingProps, o = t.memoizedState, l = o.element, Aa(e, t), dl(t, r, null, n);
        var i = t.memoizedState;
        if (r = i.element, o.isDehydrated) if (o = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = o, t.memoizedState = o, t.flags & 256) {
          l = Cn(Error(S(423)), t), t = rs(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = Cn(Error(S(424)), t), t = rs(e, t, r, n, l);
          break e;
        } else for (xe = yt(t.stateNode.containerInfo.firstChild), _e = t, V = !0, Ae = null, n = Ma(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (En(), r === l) {
            t = lt(e, t, n);
            break e;
          }
          de(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Fa(t), e === null && Ko(t), r = t.type, l = t.pendingProps, o = e !== null ? e.memoizedProps : null, i = l.children, Bo(r, l) ? i = null : o !== null && Bo(r, o) && (t.flags |= 32), ac(e, t), de(e, t, i, n), t.child;
    case 6:
      return e === null && Ko(t), null;
    case 13:
      return fc(e, t, n);
    case 4:
      return Ui(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = xn(t, null, r, n) : de(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), es(e, t, r, l, n);
    case 7:
      return de(e, t, t.pendingProps, n), t.child;
    case 8:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return de(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, o = t.memoizedProps, i = l.value, U(cl, r._currentValue), r._currentValue = i, o !== null) if ($e(o.value, i)) {
          if (o.children === l.children && !ye.current) {
            t = lt(e, t, n);
            break e;
          }
        } else for (o = t.child, o !== null && (o.return = t); o !== null; ) {
          var u = o.dependencies;
          if (u !== null) {
            i = o.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (o.tag === 1) {
                  s = et(-1, n & -n), s.tag = 2;
                  var f = o.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var h = f.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), f.pending = s;
                  }
                }
                o.lanes |= n, s = o.alternate, s !== null && (s.lanes |= n), Yo(
                  o.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
          else if (o.tag === 18) {
            if (i = o.return, i === null) throw Error(S(341));
            i.lanes |= n, u = i.alternate, u !== null && (u.lanes |= n), Yo(i, n, t), i = o.sibling;
          } else i = o.child;
          if (i !== null) i.return = o;
          else for (i = o; i !== null; ) {
            if (i === t) {
              i = null;
              break;
            }
            if (o = i.sibling, o !== null) {
              o.return = i.return, i = o;
              break;
            }
            i = i.return;
          }
          o = i;
        }
        de(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, yn(t, n), l = ze(l), r = r(l), t.flags |= 1, de(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Me(r, t.pendingProps), l = Me(r.type, l), ts(e, t, r, l, n);
    case 15:
      return uc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Me(r, l), Yr(e, t), t.tag = 1, ke(r) ? (e = !0, ul(t)) : e = !1, yn(t, n), lc(t, r, l), Go(t, r, l, n), qo(null, t, r, !0, e, n);
    case 19:
      return dc(e, t, n);
    case 22:
      return sc(e, t, n);
  }
  throw Error(S(156, t.tag));
};
function Tc(e, t) {
  return ta(e, t);
}
function up(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ie(e, t, n, r) {
  return new up(e, t, n, r);
}
function eu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function sp(e) {
  if (typeof e == "function") return eu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ki) return 11;
    if (e === Si) return 14;
  }
  return 2;
}
function Et(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ie(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Zr(e, t, n, r, l, o) {
  var i = 2;
  if (r = e, typeof e == "function") eu(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else e: switch (e) {
    case nn:
      return $t(n.children, l, o, t);
    case yi:
      i = 8, l |= 8;
      break;
    case ko:
      return e = Ie(12, n, t, l | 2), e.elementType = ko, e.lanes = o, e;
    case So:
      return e = Ie(13, n, t, l), e.elementType = So, e.lanes = o, e;
    case wo:
      return e = Ie(19, n, t, l), e.elementType = wo, e.lanes = o, e;
    case Fs:
      return Al(n, l, o, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Os:
          i = 10;
          break e;
        case As:
          i = 9;
          break e;
        case ki:
          i = 11;
          break e;
        case Si:
          i = 14;
          break e;
        case at:
          i = 16, r = null;
          break e;
      }
      throw Error(S(130, e == null ? e : typeof e, ""));
  }
  return t = Ie(i, n, t, l), t.elementType = e, t.type = r, t.lanes = o, t;
}
function $t(e, t, n, r) {
  return e = Ie(7, e, r, t), e.lanes = n, e;
}
function Al(e, t, n, r) {
  return e = Ie(22, e, r, t), e.elementType = Fs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function po(e, t, n) {
  return e = Ie(6, e, null, t), e.lanes = n, e;
}
function mo(e, t, n) {
  return t = Ie(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function ap(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yl(0), this.expirationTimes = Yl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function tu(e, t, n, r, l, o, i, u, s) {
  return e = new ap(e, t, n, u, s), t === 1 ? (t = 1, o === !0 && (t |= 8)) : t = 0, o = Ie(3, null, null, t), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fi(o), e;
}
function cp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: tn, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Dc(e) {
  if (!e) return _t;
  e = e._reactInternals;
  e: {
    if (Xt(e) !== e || e.tag !== 1) throw Error(S(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ke(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(S(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ke(n)) return Da(e, n, t);
  }
  return t;
}
function Ic(e, t, n, r, l, o, i, u, s) {
  return e = tu(n, r, !0, e, l, o, i, u, s), e.context = Dc(null), n = e.current, r = pe(), l = wt(n), o = et(r, l), o.callback = t ?? null, kt(n, o, l), e.current.lanes = l, vr(e, l, r), Se(e, r), e;
}
function Fl(e, t, n, r) {
  var l = t.current, o = pe(), i = wt(l);
  return n = Dc(n), t.context === null ? t.context = n : t.pendingContext = n, t = et(o, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = kt(l, t, i), e !== null && (Ue(e, l, i, o), Wr(e, l, i)), i;
}
function Sl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ps(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function nu(e, t) {
  ps(e, t), (e = e.alternate) && ps(e, t);
}
function fp() {
  return null;
}
var jc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ru(e) {
  this._internalRoot = e;
}
Ul.prototype.render = ru.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(S(409));
  Fl(e, t, null, null);
};
Ul.prototype.unmount = ru.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Kt(function() {
      Fl(null, e, null, null);
    }), t[nt] = null;
  }
};
function Ul(e) {
  this._internalRoot = e;
}
Ul.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = sa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ft.length && t !== 0 && t < ft[n].priority; n++) ;
    ft.splice(n, 0, e), n === 0 && ca(e);
  }
};
function lu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function $l(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ms() {
}
function dp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var f = Sl(i);
        o.call(f);
      };
    }
    var i = Ic(t, r, e, 0, null, !1, !1, "", ms);
    return e._reactRootContainer = i, e[nt] = i.current, ur(e.nodeType === 8 ? e.parentNode : e), Kt(), i;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = Sl(s);
      u.call(f);
    };
  }
  var s = tu(e, 0, !1, null, null, !1, !1, "", ms);
  return e._reactRootContainer = s, e[nt] = s.current, ur(e.nodeType === 8 ? e.parentNode : e), Kt(function() {
    Fl(t, s, n, r);
  }), s;
}
function Bl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = Sl(i);
        u.call(s);
      };
    }
    Fl(t, i, e, l);
  } else i = dp(n, t, e, l, r);
  return Sl(i);
}
ia = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bn(t.pendingLanes);
        n !== 0 && (xi(t, n | 1), Se(t, G()), !(L & 6) && (Pn = G() + 500, Nt()));
      }
      break;
    case 13:
      Kt(function() {
        var r = rt(e, 1);
        if (r !== null) {
          var l = pe();
          Ue(r, e, 1, l);
        }
      }), nu(e, 1);
  }
};
_i = function(e) {
  if (e.tag === 13) {
    var t = rt(e, 134217728);
    if (t !== null) {
      var n = pe();
      Ue(t, e, 134217728, n);
    }
    nu(e, 134217728);
  }
};
ua = function(e) {
  if (e.tag === 13) {
    var t = wt(e), n = rt(e, t);
    if (n !== null) {
      var r = pe();
      Ue(n, e, t, r);
    }
    nu(e, t);
  }
};
sa = function() {
  return M;
};
aa = function(e, t) {
  var n = M;
  try {
    return M = e, t();
  } finally {
    M = n;
  }
};
jo = function(e, t, n) {
  switch (t) {
    case "input":
      if (_o(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = jl(r);
            if (!l) throw Error(S(90));
            $s(r), _o(r, l);
          }
        }
      }
      break;
    case "textarea":
      Hs(e, n);
      break;
    case "select":
      t = n.value, t != null && mn(e, !!n.multiple, t, !1);
  }
};
Gs = Ji;
Zs = Kt;
var pp = { usingClientEntryPoint: !1, Events: [kr, un, jl, Ys, Xs, Ji] }, Fn = { findFiberByHostInstance: Rt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, mp = { bundleType: Fn.bundleType, version: Fn.version, rendererPackageName: Fn.rendererPackageName, rendererConfig: Fn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ot.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = bs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Fn.findFiberByHostInstance || fp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fr.isDisabled && Fr.supportsFiber) try {
    Nl = Fr.inject(mp), We = Fr;
  } catch {
  }
}
Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pp;
Pe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lu(t)) throw Error(S(200));
  return cp(e, t, null, n);
};
Pe.createRoot = function(e, t) {
  if (!lu(e)) throw Error(S(299));
  var n = !1, r = "", l = jc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = tu(e, 1, !1, null, null, n, !1, r, l), e[nt] = t.current, ur(e.nodeType === 8 ? e.parentNode : e), new ru(t);
};
Pe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(S(188)) : (e = Object.keys(e).join(","), Error(S(268, e)));
  return e = bs(t), e = e === null ? null : e.stateNode, e;
};
Pe.flushSync = function(e) {
  return Kt(e);
};
Pe.hydrate = function(e, t, n) {
  if (!$l(t)) throw Error(S(200));
  return Bl(null, e, t, !0, n);
};
Pe.hydrateRoot = function(e, t, n) {
  if (!lu(e)) throw Error(S(405));
  var r = n != null && n.hydratedSources || null, l = !1, o = "", i = jc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = Ic(t, null, e, 1, n ?? null, l, !1, o, i), e[nt] = t.current, ur(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ul(t);
};
Pe.render = function(e, t, n) {
  if (!$l(t)) throw Error(S(200));
  return Bl(null, e, t, !1, n);
};
Pe.unmountComponentAtNode = function(e) {
  if (!$l(e)) throw Error(S(40));
  return e._reactRootContainer ? (Kt(function() {
    Bl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[nt] = null;
    });
  }), !0) : !1;
};
Pe.unstable_batchedUpdates = Ji;
Pe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!$l(n)) throw Error(S(200));
  if (e == null || e._reactInternals === void 0) throw Error(S(38));
  return Bl(e, t, n, !1, r);
};
Pe.version = "18.3.1-next-f1338f8080-20240426";
function zc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(zc);
    } catch (e) {
      console.error(e);
    }
}
zc(), zs.exports = Pe;
var hp = zs.exports, hs = hp;
qn.createRoot = hs.createRoot, qn.hydrateRoot = hs.hydrateRoot;
const Rc = (e) => Math.max(0, Math.floor(e)), Lc = (e, t) => Rc(e * t), Mc = (e, t = 1) => Rc(e - t), ho = (e) => Lc(e, 2 / 3), gp = (e) => Lc(e, 1 / 2), Ge = (e) => {
  e.getStack(e.statusId) > 0 && e.setStack(e.statusId, 0);
}, go = (e) => {
  const t = e.getStack(e.statusId);
  t > 0 && e.setStack(e.statusId, Mc(t));
}, we = [
  {
    id: "DarkFire",
    name: "黒炎",
    attribute: { stack: "stackDarkFire" },
    onTurnStart: (e) => {
      e.getStack(e.statusId) > 0 && e.setStack(e.statusId, 0);
    },
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId), n = e.getStack("Burned");
      t > 0 && n > 0 && (e.applyHpDamage(t * n), e.setStack(e.statusId, 0));
    }
  },
  {
    id: "Burned",
    name: "やけど",
    attribute: { stack: "stackBurned", pending: "stackBurnednext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, ho(t)));
    }
  },
  {
    id: "Poison",
    name: "毒",
    attribute: { stack: "stackPoison", pending: "stackPoisonnext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, gp(t)));
    }
  },
  {
    id: "Tremor",
    name: "振動",
    attribute: { stack: "stacktremor", pending: "stacktremornext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, ho(t)));
    }
  },
  {
    id: "Bleeding",
    name: "出血",
    attribute: { stack: "stackBleeding", pending: "stackBleedingnext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || e.setStack(e.statusId, ho(t));
    }
  },
  {
    id: "Poise",
    name: "呼吸",
    attribute: { stack: "stackpoise", pending: "stackpoisenext" },
    hasPending: !0,
    onTurnEnd: (e) => go(e)
  },
  {
    id: "Regen",
    name: "再生",
    attribute: { stack: "stackregen", pending: "stackregennext" },
    hasPending: !0,
    onTurnStart: (e) => {
      const t = e.getStack(e.statusId);
      if (t <= 0) return;
      const n = e.combatant.maxHp * 0.05 * t;
      n > 0 && e.healHp(n);
    },
    onTurnEnd: (e) => go(e)
  },
  {
    id: "Bind",
    name: "束縛",
    attribute: { stack: "stackbind", pending: "stackbindnext" },
    hasPending: !0,
    onTurnEnd: Ge
  },
  {
    id: "Paralysis",
    name: "麻痺",
    attribute: { stack: "stackParalysis", pending: "stackParalysisnext" },
    hasPending: !0,
    onTurnEnd: Ge
  },
  {
    id: "Fear",
    name: "恐怖",
    attribute: { stack: "stackFear", pending: "stackFearnext" },
    hasPending: !0,
    onTurnEnd: Ge
  },
  {
    id: "DamageUp",
    name: "ダメージ上昇",
    attribute: { stack: "stackDamageUp", pending: "stackDamageUpnext" },
    hasPending: !0,
    onTurnEnd: Ge
  },
  {
    id: "DamageDown",
    name: "ダメージ減少",
    attribute: { stack: "stackDamageDown", pending: "stackDamageDownnext" },
    hasPending: !0,
    onTurnEnd: Ge
  },
  {
    id: "PowerUp",
    name: "威力上昇",
    attribute: { stack: "stackPowerUp", pending: "stackPowerUpnext" },
    hasPending: !0,
    onTurnEnd: Ge
  },
  {
    id: "PowerDown",
    name: "威力減少",
    attribute: { stack: "stackPowerDown", pending: "stackPowerDownnext" },
    hasPending: !0,
    onTurnEnd: Ge
  },
  {
    id: "Protection",
    name: "保護",
    attribute: { stack: "stackProtection", pending: "stackProtectionnext" },
    hasPending: !0,
    onTurnStart: (e) => {
      if (!e.combatant.flags.checkHitan) return;
      e.getStack(e.statusId) <= 1 && e.setStack(e.statusId, 1);
    },
    onTurnEnd: Ge
  },
  {
    id: "Vulnerable",
    name: "脆弱",
    attribute: { stack: "stackVulnerable", pending: "stackVulnerablenext" },
    hasPending: !0,
    onTurnEnd: Ge
  },
  {
    id: "Sink",
    name: "沈潜",
    attribute: { stack: "stacksink", pending: "stacksinknext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      if (e.combatant.flags.checkNk) {
        e.addStack(e.statusId, 2);
        return;
      }
      t > 0 && e.setStack(e.statusId, Mc(t));
    }
  },
  {
    id: "FEOAwaken",
    name: "覚醒",
    attribute: { stack: "stackFEOAwaken", pending: "stackFEOAwakenNext" },
    hasPending: !0,
    onTurnEnd: (e) => go(e)
  },
  {
    id: "Witch1",
    name: "呪詛",
    attribute: { stack: "stackwitch1" },
    onTurnStart: (e) => {
      const t = e.getStack(e.statusId);
      if (t <= 0) return;
      const n = t * e.combatant.hp * 0.02;
      n > 0 && e.applyHpDamage(n);
    }
  },
  {
    id: "Frenzy",
    name: "狂乱",
    attribute: { stack: "stackfrenzy" },
    onTurnStart: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.addStack("DamageUp", t), e.addStack("Vulnerable", t));
    }
  },
  {
    id: "Sinsyoku",
    name: "侵食",
    attribute: { stack: "stackSinsyoku" },
    onTurnStart: (e) => {
      const t = e.getStack(e.statusId);
      t > 0 && e.addStack("DamageUp", t);
    },
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t >= 3 && !e.combatant.flags.checkAnri && (e.applyHpDamage(t), e.applyConstitutionDamage(t));
    }
  },
  {
    id: "Biribiri",
    name: "ビリビリ",
    attribute: { stack: "stackbiribiri", pending: "stackbiribirinext" },
    hasPending: !0
  },
  {
    id: "Smoke",
    name: "煙",
    attribute: { stack: "stackSmoke" }
  },
  {
    id: "SmokeGrand",
    name: "立ち込める煙",
    attribute: { stack: "stackSmokeGrand" },
    onTurnStart: (e) => {
      const t = e.getStack(e.statusId);
      t > 0 && (e.addStack("DamageUp", Math.min(t / 10, 5)), e.addStack("Protection", Math.min(t / 10, 5)));
    }
  },
  {
    id: "StackSealBleed",
    name: "呪印【出血】",
    attribute: { stack: "stackSealBleed" },
    hasPending: !0
    // TODO: 出血ダメージ分を５回与える実装が必要（ただし、スタックが５になったのを監視するタイミング実装自体に検討が必要)
  },
  {
    id: "checkSora",
    name: "soraのチェック",
    attribute: { stack: "checkSora" },
    onTurnEnd: (e) => {
      e.getStack(e.statusId) > 0 && (console.log(e, "コアSoraを所持しているため、煙スタックを7増加させる"), e.addStack("Smoke", 7));
    }
  }
], vp = we.map((e) => e.attribute.stack), yp = (e) => {
  var n;
  const t = (n = e.system) == null ? void 0 : n.attributes;
  return t != null && t.hp ? vp.some((r) => r in t) : !1;
}, kp = () => {
  var e;
  return (((e = canvas == null ? void 0 : canvas.tokens) == null ? void 0 : e.placeables) ?? []).filter((t) => {
    var n;
    return !!((n = t.actor) != null && n.id) && yp(t.actor);
  }).map((t) => {
    var n, r, l;
    return {
      actorId: ((n = t.actor) == null ? void 0 : n.id) ?? "",
      name: t.name ?? ((r = t.actor) == null ? void 0 : r.name) ?? "unknown",
      actorName: ((l = t.actor) == null ? void 0 : l.name) ?? "",
      disposition: t.document.disposition
    };
  }).sort((t, n) => n.disposition - t.disposition);
}, Oc = () => {
  const [e, t] = R.useState([]);
  return R.useEffect(() => {
    t(kp());
  }, []), e;
};
class Sp {
  constructor(t) {
    var n, r, l;
    this.id = t.id, this.hp = t.hp, this.maxHp = t.maxHp, this.barrier = t.barrier, this.constitution = t.constitution, this.san = t.san, this.isPlayer = t.isPlayer, this.resist = t.resist, this.resistEnemy = t.resistEnemy, this.confResist = t.confResist, this.econfResistEnemy = t.econfResistEnemy, this.doubleConstitution = t.doubleConstitution, this.statuses = t.statuses, this.flags = {
      checkNk: ((n = t.flags) == null ? void 0 : n.checkNk) ?? !1,
      checkAnri: ((r = t.flags) == null ? void 0 : r.checkAnri) ?? !1,
      checkHitan: ((l = t.flags) == null ? void 0 : l.checkHitan) ?? !1
    }, this.name = t.name;
  }
  applyHpDamage(t) {
    const n = Math.max(0, t);
    if (n <= 0) return;
    let r = n;
    if (this.barrier > 0) {
      const l = Math.min(this.barrier, r);
      l > 0 && (this.barrier = this.barrier - l, r -= l);
    }
    if (r > 0) {
      const l = this.hp, o = Math.min(l, r);
      o > 0 && (this.hp = l - o);
    }
  }
  applyConstitutionDamage(t) {
    const n = Math.max(0, t);
    if (n <= 0) return;
    const r = this.constitution, l = Math.min(r, n);
    l > 0 && (this.constitution = r - l);
  }
  healHp(t) {
    const n = Math.max(0, t);
    if (n <= 0) return;
    const r = this.hp, l = this.maxHp, o = Math.min(Math.max(l - r, 0), n);
    o > 0 && (this.hp = r + o);
  }
  setBarrier(t) {
    const n = Math.max(0, t);
    this.barrier !== n && (this.barrier = n);
  }
  setHp(t) {
    this.hp = t;
  }
  setConstitution(t) {
    this.constitution = t;
  }
  setSan(t) {
    this.san = t;
  }
}
const ut = (e) => Math.max(0, Math.floor(e));
var se;
class wp {
  constructor(t) {
    In(this, se, /* @__PURE__ */ new Map());
    t && Object.entries(t).forEach(([n, r]) => {
      r && Z(this, se).set(n, {
        stack: ut(r.stack),
        pending: ut(r.pending)
      });
    });
  }
  getState(t) {
    const n = Z(this, se).get(t);
    return n ? { stack: n.stack, pending: n.pending } : { stack: 0, pending: 0 };
  }
  getStack(t) {
    var n;
    return ((n = Z(this, se).get(t)) == null ? void 0 : n.stack) ?? 0;
  }
  getPending(t) {
    var n;
    return ((n = Z(this, se).get(t)) == null ? void 0 : n.pending) ?? 0;
  }
  setState(t, n) {
    Z(this, se).set(t, {
      stack: ut(n.stack),
      pending: ut(n.pending)
    });
  }
  setStack(t, n) {
    const r = Z(this, se).get(t) ?? { stack: 0, pending: 0 };
    r.stack = ut(n), Z(this, se).set(t, r);
  }
  setPending(t, n) {
    const r = Z(this, se).get(t) ?? { stack: 0, pending: 0 };
    r.pending = ut(n), Z(this, se).set(t, r);
  }
  addStack(t, n) {
    const r = Z(this, se).get(t) ?? { stack: 0, pending: 0 };
    r.stack = ut(r.stack + n), Z(this, se).set(t, r);
  }
  addPending(t, n) {
    const r = Z(this, se).get(t) ?? { stack: 0, pending: 0 };
    r.pending = ut(r.pending + n), Z(this, se).set(t, r);
  }
}
se = new WeakMap();
const fe = (e, t, n = 0) => {
  var o, i, u;
  const r = (u = (i = (o = e.system) == null ? void 0 : o.attributes) == null ? void 0 : i[t]) == null ? void 0 : u.value;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  if (typeof r == "boolean") return r ? 1 : 0;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, Ep = (e, t, n = 0) => {
  var o, i, u;
  const r = (u = (i = (o = e.system) == null ? void 0 : o.attributes) == null ? void 0 : i[t]) == null ? void 0 : u.max;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, xp = (e) => {
  const t = new wp();
  return we.forEach((r) => {
    const l = r.attribute, o = fe(e, l.stack, 0), i = l.pending ? fe(e, l.pending, 0) : 0;
    t.setState(r.id, { stack: o, pending: i });
  }), new Sp({
    id: e.id ?? "",
    name: e.name,
    hp: fe(e, "hp", 0),
    maxHp: Ep(e, "hp", 0),
    barrier: fe(e, "barrier", 0),
    constitution: fe(e, "constitution", 0),
    san: fe(e, "san", 0),
    isPlayer: fe(e, "isPlayer", 0) > 0,
    resist: fe(e, "resist", 0),
    resistEnemy: fe(e, "resistEnemy", 0),
    confResist: fe(e, "confResist", 0),
    econfResistEnemy: fe(e, "econfResistEnemy", 0),
    doubleConstitution: fe(e, "doubleconstitution", 0) === 1,
    statuses: t,
    flags: {
      checkNk: fe(e, "checknk", 0) > 0,
      checkAnri: fe(e, "checkAnri", 0) > 0,
      checkHitan: fe(e, "checkhitan", 0) > 0
    }
  });
}, gs = (e) => {
  const t = {
    "system.attributes.hp.value": e.hp,
    "system.attributes.barrier.value": e.barrier,
    "system.attributes.constitution.value": e.constitution,
    "system.attributes.san.value": e.san
  };
  return we.forEach((r) => {
    const l = r.attribute, o = e.statuses.getState(r.id);
    t[`system.attributes.${l.stack}.value`] = o.stack, l.pending && (t[`system.attributes.${l.pending}.value`] = o.pending);
  }), t;
};
class Bt {
  loadByActorId(t) {
    var r;
    const n = t ? ((r = game.actors) == null ? void 0 : r.get(t)) ?? null : null;
    return !n || !n.id ? null : {
      actorId: n.id,
      actor: n,
      combatant: xp(n)
    };
  }
  async saveActor(t) {
    var r;
    const n = t.id ? ((r = game.actors) == null ? void 0 : r.get(t.id)) ?? null : null;
    n && await n.update(gs(t));
  }
  async save(t) {
    await t.actor.update(gs(t.combatant));
  }
}
const wl = (e) => {
  const t = {
    combatant: e,
    getStack: (n) => e.statuses.getStack(n),
    getPending: (n) => e.statuses.getPending(n),
    setStack: (n, r) => e.statuses.setStack(n, r),
    setPending: (n, r) => e.statuses.setPending(n, r),
    addStack: (n, r) => {
      const l = e.statuses.getStack(n);
      e.statuses.setStack(n, l + r);
    },
    addPending: (n, r) => {
      const l = e.statuses.getPending(n);
      e.statuses.setPending(n, l + r);
    },
    applyHpDamage: (n) => e.applyHpDamage(n),
    applyConstitutionDamage: (n) => e.applyConstitutionDamage(n),
    healHp: (n) => e.healHp(n),
    setBarrier: (n) => e.setBarrier(n)
  };
  return {
    ...t,
    withStatus: (n) => ({
      ...t,
      statusId: n
    }),
    withDamageStatus: (n, r) => ({
      ...t,
      statusId: n,
      damage: r
    })
  };
}, _p = (e, t) => {
  const n = wl(e);
  we.forEach((l) => {
    var o;
    (o = l.onDealDamage) == null || o.call(l, n.withDamageStatus(l.id, t));
  });
}, Cp = (e, t) => {
  const n = wl(e);
  we.forEach((l) => {
    var o;
    (o = l.onTakeDamage) == null || o.call(l, n.withDamageStatus(l.id, t));
  });
}, Pp = (e, t) => {
  const n = e.statuses.getStack("DamageUp"), r = e.statuses.getStack("DamageDown");
  return n * 10 - r * 10 + (t ? 50 : 0);
}, Np = (e, t, n) => {
  let r = 0, l = !1;
  n && (r += 20);
  const o = e.statuses.getStack("Poise");
  if (o > 0) {
    const i = Math.min(o * 5, 100);
    t() * 100 < i && (r += 20, l = !0);
  }
  return { special: r, poiseCritical: l };
}, Ac = (e) => {
  const t = e.statuses.getStack("Protection"), n = e.statuses.getStack("Vulnerable");
  return t * 10 - n * 10;
}, Fc = (e) => {
  const t = e.isPlayer ? e.resist : e.resistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Tp = (e) => {
  const t = e.isPlayer ? e.confResist : e.econfResistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Dp = (e) => {
  const t = e.statuses.getStack("DamageUp"), n = e.statuses.getStack("DamageDown");
  return t * 10 - n * 10;
}, Ip = (e) => Ac(e), jp = (e) => Fc(e), zp = (e, t = {}) => {
  const n = t.random ?? Math.random, r = e.directcheck ?? !1, l = e.criticalcheck ?? !1, o = Pp(e.attacker, r) + (e.attackerBonusNormal ?? 0), { special: i, poiseCritical: u } = Np(e.attacker, n, l), s = i + (e.attackerBonusSpecial ?? 0), f = Ac(e.receiver), h = Fc(e.receiver), m = Tp(e.receiver), p = (100 + o - f) / 100, k = (100 + s - h) / 100, y = (100 + s - m) / 100, w = e.baseDamage * Math.max(p, 0) * Math.max(k, 0), I = e.baseDamage * Math.max(p, 0) * Math.max(y, 0);
  return {
    attackerNormalPercentage: o,
    attackerSpecialPercentage: s,
    receiverNormalPercentage: f,
    receiverSpecialPercentage: h,
    receiverSpecialConfPercentage: m,
    normalRatio: p,
    specialRatio: k,
    specialConfRatio: y,
    dealDamage: w,
    dealConfDamage: I,
    poiseCritical: u
  };
}, Rp = (e, t = {}) => {
  const n = e.attacker, r = zp(e, t), l = e.receiver;
  let o = l.hp, i = l.barrier, u = l.constitution, s = l.san, f = l.statuses.getStack("Sink");
  const h = l.doubleConstitution, m = Math.ceil(r.dealDamage), p = Math.ceil(r.dealConfDamage);
  let k = 0, y = 0;
  i > 0 && m > 0 && (k = Math.min(i, m), i -= k);
  const w = Math.max(m - k, 0);
  w > 0 && (o -= w, y = w);
  let I = 0;
  if (p > 0) {
    const E = p * (h ? 2 : 1);
    u = Math.max(u - E, 0), I = E;
  }
  let a = 0;
  const c = l.statuses.getStack("Sink");
  if (c > 0) {
    let E = c;
    const _ = Math.min(s, E);
    s -= _, E -= _, a += _, E > 0 && (o -= E, y += E), f = Math.floor(c / 2);
  }
  const d = {
    ...r,
    barrierAbsorbed: k,
    hpDamageApplied: y,
    confDamageApplied: I,
    sanDamageApplied: a,
    hpAfter: o,
    barrierAfter: i,
    constitutionAfter: u,
    sanAfter: s
  };
  l.hp = o, l.setBarrier(i), l.setConstitution(u), l.setSan(s), l.setHp(o), l.statuses.setStack("Sink", f);
  const g = {
    baseDamage: e.baseDamage,
    normalRatio: r.normalRatio,
    specialRatio: r.specialRatio,
    specialConfRatio: r.specialConfRatio,
    dealDamage: r.dealDamage,
    dealConfDamage: r.dealConfDamage,
    hpDamageApplied: y,
    confDamageApplied: I,
    sanDamageApplied: a,
    barrierAbsorbed: k,
    poiseCritical: r.poiseCritical,
    hpAfter: o,
    barrierAfter: i,
    constitutionAfter: u,
    sanAfter: s
  };
  return _p(n, g), Cp(l, g), { result: d, attacker: n, receiver: l };
}, El = {
  FRIENDLY: 1
}, Lp = (e) => {
  var t, n;
  return ((t = e.find((r) => r.disposition === El.FRIENDLY)) == null ? void 0 : t.actorId) ?? ((n = e[0]) == null ? void 0 : n.actorId) ?? "";
}, Mp = (e, t) => {
  var n, r;
  return ((n = e.find((l) => l.actorId !== t && l.disposition !== El.FRIENDLY)) == null ? void 0 : n.actorId) ?? ((r = e.find((l) => l.actorId !== t)) == null ? void 0 : r.actorId) ?? "";
}, Op = (e) => {
  const [t, n] = R.useState(""), [r, l] = R.useState(""), [o, i] = R.useState(""), [u, s] = R.useState("0"), [f, h] = R.useState("0"), [m, p] = R.useState(!1), [k, y] = R.useState(!1), [w, I] = R.useState(null), [a, c] = R.useState(!1), [d, g] = R.useState(null), [E, _] = R.useState(null), x = R.useMemo(() => {
    const F = /* @__PURE__ */ new Map();
    return e.forEach((O) => F.set(O.actorId, O)), F;
  }, [e]);
  R.useEffect(() => {
    if (!e.length) {
      t && n(""), r && l("");
      return;
    }
    const F = new Set(e.map((Tt) => Tt.actorId));
    let O = t;
    (!O || !F.has(O)) && (O = Lp(e));
    let oe = r;
    (!oe || !F.has(oe) || oe === O) && (oe = Mp(e, O)), O !== t && n(O), oe !== r && l(oe);
  }, [e, t, r]), R.useEffect(() => {
    if (!t) {
      g(null);
      return;
    }
    try {
      const O = new Bt().loadByActorId(t);
      if (!O) {
        g(null);
        return;
      }
      g(O.combatant);
    } catch {
      g(null);
    }
  }, [t]), R.useEffect(() => {
    if (!r) {
      _(null);
      return;
    }
    try {
      const O = new Bt().loadByActorId(r);
      if (!O) {
        _(null);
        return;
      }
      _(O.combatant);
    } catch {
      _(null);
    }
  }, [r]);
  const N = R.useMemo(() => {
    if (!d) return null;
    const F = Number(u) || 0, O = Number(f) || 0;
    return {
      normal: Dp(d) + (k ? 50 : 0) + F,
      special: (m ? 20 : 0) + O
    };
  }, [d, k, m, u, f]), A = R.useMemo(() => E ? {
    normal: Ip(E),
    special: jp(E)
  } : null, [E]);
  return {
    attackerId: t,
    receiverId: r,
    baseDamage: o,
    bonusNormal: u,
    bonusSpecial: f,
    criticalcheck: m,
    directcheck: k,
    result: w,
    running: a,
    attackerPreview: N,
    receiverPreview: A,
    setAttackerId: n,
    setReceiverId: l,
    setBaseDamage: i,
    setBonusNormal: s,
    setBonusSpecial: h,
    setCriticalcheck: p,
    setDirectcheck: y,
    run: async () => {
      var Tt, wr, Gt, Zt, C, D;
      const F = Number(o);
      if (!Number.isFinite(F) || F <= 0) {
        (Tt = ui.notifications) == null || Tt.error("ダメージに正の数値を入力してください");
        return;
      }
      const O = t ? x.get(t) : void 0, oe = r ? x.get(r) : void 0;
      if (!O || !oe) {
        (wr = ui.notifications) == null || wr.error("攻撃者と防御者を選択してください");
        return;
      }
      if (t === r) {
        (Gt = ui.notifications) == null || Gt.error("攻撃者と防御者は別のキャラクターを選んでください");
        return;
      }
      try {
        c(!0);
        const T = new Bt(), $ = T.loadByActorId(t), X = T.loadByActorId(r);
        if (!$ || !X) {
          (Zt = ui.notifications) == null || Zt.error("攻撃者または防御者のデータを取得できませんでした");
          return;
        }
        const Jt = Number(u) || 0, Ke = Number(f) || 0, { result: Ye, attacker: Xe, receiver: qt } = Rp({
          attacker: $.combatant,
          receiver: X.combatant,
          baseDamage: F,
          criticalcheck: m,
          directcheck: k,
          attackerBonusNormal: Jt,
          attackerBonusSpecial: Ke
        });
        await Promise.all([
          T.saveActor(Xe),
          T.saveActor(qt)
        ]);
        const Hc = `
${O.name} → ${oe.name}<br/>
基礎ダメージ: ${F}<br/>
HPダメージ: ${Ye.hpDamageApplied} (バリア吸収: ${Ye.barrierAbsorbed})<br/>
混乱ダメージ: ${Ye.confDamageApplied}<br/>
SANダメージ(沈潜): ${Ye.sanDamageApplied}<br/>
`;
        await ChatMessage.create({
          speaker: ChatMessage.getSpeaker({ actor: $.actor }),
          content: Hc
        }), I(Ye), (C = ui.notifications) == null || C.info(
          `${O.name} が ${oe.name} にダメージを適用しました`
        );
      } catch (T) {
        console.error("[ponkotu-system] damage calc failed", T), (D = ui.notifications) == null || D.error("計算または適用に失敗しました。コンソールを確認してください。");
      } finally {
        c(!1);
      }
    }
  };
}, xl = (e) => e.name, Ap = [
  { value: "random:ally", label: "ランダム（味方）" },
  { value: "random:enemy", label: "ランダム（敵）" },
  { value: "random:all", label: "ランダム（全体）" }
], st = (e) => Number.isFinite(e) ? e.toLocaleString() : "-", Fp = ({ result: e }) => /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage__result", children: [
  /* @__PURE__ */ v.jsxs("div", { children: [
    "通常倍率: 攻撃者 ",
    e.attackerNormalPercentage,
    "% / 防御者",
    " ",
    e.receiverNormalPercentage,
    "% → 係数 ",
    e.normalRatio.toFixed(2)
  ] }),
  /* @__PURE__ */ v.jsxs("div", { children: [
    "特殊倍率: 攻撃者 ",
    e.attackerSpecialPercentage,
    "%",
    e.poiseCritical ? " (呼吸クリティカル)" : "",
    " / 防御者",
    " ",
    e.receiverSpecialPercentage,
    "% → 係数 ",
    e.specialRatio.toFixed(2)
  ] }),
  /* @__PURE__ */ v.jsxs("div", { children: [
    "特殊(耐性限界)倍率: 防御者 ",
    e.receiverSpecialConfPercentage,
    "% → 係数",
    " ",
    e.specialConfRatio.toFixed(2)
  ] }),
  /* @__PURE__ */ v.jsxs("div", { children: [
    "HPダメージ: ",
    st(e.hpDamageApplied),
    " （バリア吸収",
    " ",
    st(e.barrierAbsorbed),
    "）"
  ] }),
  /* @__PURE__ */ v.jsxs("div", { children: [
    "耐性限界ダメージ: ",
    st(e.confDamageApplied)
  ] }),
  /* @__PURE__ */ v.jsxs("div", { children: [
    "SANダメージ(沈潜): ",
    st(e.sanDamageApplied)
  ] }),
  /* @__PURE__ */ v.jsxs("div", { children: [
    "残り HP ",
    st(e.hpAfter),
    " / バリア",
    " ",
    st(e.barrierAfter),
    " / CON",
    " ",
    st(e.constitutionAfter),
    " / SAN",
    " ",
    st(e.sanAfter)
  ] })
] }), It = (e) => e === 0 ? "±0%" : e > 0 ? `+${e}%` : `${e}%`, Up = ({ tokens: e }) => {
  const {
    attackerId: t,
    receiverId: n,
    baseDamage: r,
    bonusNormal: l,
    bonusSpecial: o,
    criticalcheck: i,
    directcheck: u,
    result: s,
    running: f,
    attackerPreview: h,
    receiverPreview: m,
    setAttackerId: p,
    setReceiverId: k,
    setBaseDamage: y,
    setBonusNormal: w,
    setBonusSpecial: I,
    setCriticalcheck: a,
    setDirectcheck: c,
    run: d
  } = Op(e);
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ v.jsx("h3", { children: "ダメージ計算" }) }),
    /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label", children: [
        "攻撃者:",
        /* @__PURE__ */ v.jsxs("select", { value: t, onChange: (g) => p(g.target.value), children: [
          /* @__PURE__ */ v.jsx("option", { value: "", children: "選択してください" }),
          e.map((g) => /* @__PURE__ */ v.jsx("option", { value: g.actorId, children: xl(g) }, g.actorId))
        ] }),
        h !== null && /* @__PURE__ */ v.jsxs("span", { className: "ponkotu-damage__preview", children: [
          "通常 ",
          It(h.normal),
          " / 特殊 ",
          It(h.special)
        ] })
      ] }) }),
      /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label", children: [
        "防御者:",
        /* @__PURE__ */ v.jsxs("select", { value: n, onChange: (g) => k(g.target.value), children: [
          /* @__PURE__ */ v.jsx("option", { value: "", children: "選択してください" }),
          e.map((g) => /* @__PURE__ */ v.jsx("option", { value: g.actorId, children: xl(g) }, g.actorId))
        ] }),
        m !== null && /* @__PURE__ */ v.jsxs("span", { className: "ponkotu-damage__preview", children: [
          "通常 ",
          It(m.normal),
          " / 特殊 ",
          It(m.special)
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label ponkotu-damage__label--inline", children: [
        "通常補正",
        /* @__PURE__ */ v.jsx(
          "input",
          {
            type: "number",
            value: l,
            onChange: (g) => w(g.target.value),
            className: "ponkotu-damage__bonus-input"
          }
        ),
        "%"
      ] }),
      /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label ponkotu-damage__label--inline", children: [
        "特殊補正",
        /* @__PURE__ */ v.jsx(
          "input",
          {
            type: "number",
            value: o,
            onChange: (g) => I(g.target.value),
            className: "ponkotu-damage__bonus-input"
          }
        ),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label ponkotu-damage__label--inline", children: [
        /* @__PURE__ */ v.jsx(
          "input",
          {
            type: "checkbox",
            checked: i,
            onChange: (g) => a(g.target.checked)
          }
        ),
        "クリティカル"
      ] }),
      /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label ponkotu-damage__label--inline", children: [
        /* @__PURE__ */ v.jsx(
          "input",
          {
            type: "checkbox",
            checked: u,
            onChange: (g) => c(g.target.checked)
          }
        ),
        "直接攻撃"
      ] })
    ] }),
    h !== null && m !== null && /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage__row ponkotu-damage__total-preview", children: [
      /* @__PURE__ */ v.jsx("span", { children: "攻撃者 - 防御者 の倍率差" }),
      /* @__PURE__ */ v.jsx("div", {}),
      /* @__PURE__ */ v.jsxs("span", { children: [
        "通常倍率: ",
        It(h.normal - m.normal)
      ] }),
      /* @__PURE__ */ v.jsx("span", { children: "  +  " }),
      /* @__PURE__ */ v.jsxs("span", { children: [
        "特殊倍率: ",
        It(h.special - m.special)
      ] }),
      /* @__PURE__ */ v.jsx("div", {}),
      /* @__PURE__ */ v.jsx("span", { children: " → " }),
      /* @__PURE__ */ v.jsxs("span", { children: [
        "合計倍率: ",
        It(h.normal - m.normal + h.special - m.special)
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label", children: [
      "基礎ダメージ",
      /* @__PURE__ */ v.jsx(
        "input",
        {
          type: "number",
          value: r,
          onChange: (g) => y(g.target.value),
          placeholder: "例: 12"
        }
      )
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ v.jsx("button", { onClick: d, disabled: f || e.length < 2, children: f ? "計算中..." : "計算して適用" }),
      e.length < 2 && /* @__PURE__ */ v.jsx("span", { className: "ponkotu-damage__hint", children: "※ トークンが2体以上必要です" })
    ] }),
    s && /* @__PURE__ */ v.jsx(Fp, { result: s })
  ] });
};
class vs {
  static turnStart(t) {
    const n = wl(t), r = we;
    r.forEach((l) => {
      if (!l.hasPending) return;
      const o = n.getPending(l.id);
      if (o <= 0) return;
      const i = n.getStack(l.id);
      n.setStack(l.id, i + o), n.setPending(l.id, 0);
    }), r.forEach((l) => {
      var o;
      (o = l.onTurnStart) == null || o.call(l, n.withStatus(l.id));
    });
  }
  static turnEnd(t) {
    const n = wl(t);
    we.forEach((l) => {
      var o;
      (o = l.onTurnEnd) == null || o.call(l, n.withStatus(l.id));
    }), n.setBarrier(0);
  }
}
const ys = (e) => Array.from(new Set(e.map((t) => t.actorId).filter((t) => t))), $p = (e) => {
  const [t, n] = R.useState(!1), r = async () => {
    var u, s, f;
    const i = ys(e);
    if (!i.length)
      return (u = ui.notifications) == null || u.error("ターン開始処理の対象が見つかりません"), 0;
    try {
      const h = new Bt(), m = i.map((p) => h.loadByActorId(p)).filter((p) => !!p);
      return m.length ? (m.forEach((p) => {
        vs.turnStart(p.combatant);
      }), await Promise.all(m.map((p) => h.saveActor(p.combatant))), m.length) : ((s = ui.notifications) == null || s.error("ターン開始処理の対象を取得できませんでした"), 0);
    } catch (h) {
      console.error("[ponkotu-system] turn process failed", h), (f = ui.notifications) == null || f.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  }, l = async () => {
    var u, s, f;
    const i = ys(e);
    if (!i.length)
      return (u = ui.notifications) == null || u.error("ターン終了処理の対象が見つかりません"), 0;
    try {
      const h = new Bt(), m = i.map((p) => h.loadByActorId(p)).filter((p) => !!p);
      return m.length ? (m.forEach((p) => {
        vs.turnEnd(p.combatant);
      }), await Promise.all(m.map((p) => h.saveActor(p.combatant))), m.length) : ((s = ui.notifications) == null || s.error("ターン終了処理の対象を取得できませんでした"), 0);
    } catch (h) {
      console.error("[ponkotu-system] turn end failed", h), (f = ui.notifications) == null || f.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  };
  return { turnRunning: t, runTurnProcess: async () => {
    var i;
    if (!t)
      try {
        n(!0);
        const u = await l();
        game.combat && game.combat.nextRound();
        const s = await r(), f = u > 0 ? u : s;
        f > 0 && ((i = ui.notifications) == null || i.info(`ターン処理を${f}体に適用しました`));
      } finally {
        n(!1);
      }
  } };
}, Bp = ({ tokens: e }) => {
  const { turnRunning: t, runTurnProcess: n } = $p(e);
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ v.jsx("h3", { style: { margin: "8px 0" }, children: "ターン処理" }) }),
    /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ v.jsx("button", { onClick: n, disabled: t || e.length < 1, children: t ? "処理中..." : "ターン処理(終了→開始)" }) })
  ] });
}, Hp = () => {
  const e = Oc();
  return /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage", children: [
    /* @__PURE__ */ v.jsx(Up, { tokens: e }),
    /* @__PURE__ */ v.jsx(Bp, { tokens: e })
  ] });
}, Vp = "ponkotu-system";
var Ot;
class Wp extends Application {
  constructor() {
    super(...arguments);
    In(this, Ot, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      classes: ["ponkotu-damage-calc"],
      title: "管理者用フォーム",
      template: `modules/${Vp}/templates/damage-calc.html`,
      width: 520,
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
      console.warn("[ponkotu-system] DamageCalcApplication: container not found");
      return;
    }
    Dt(this, Ot, qn.createRoot(r)), Z(this, Ot).render(/* @__PURE__ */ v.jsx(Hp, {}));
  }
  async close(n) {
    var r;
    return (r = Z(this, Ot)) == null || r.unmount(), Dt(this, Ot, null), super.close(n);
  }
}
Ot = new WeakMap();
const Qp = ({ onSubmit: e }) => {
  const [t, n] = R.useState(""), [r, l] = R.useState(""), o = R.useMemo(() => t.trim().length === 0, [t]), i = (u) => {
    u.preventDefault();
    const s = { name: t.trim(), note: r.trim() };
    console.log("[ponkotu-system] SimpleForm submit", s), e == null || e(s), l("");
  };
  return /* @__PURE__ */ v.jsxs("form", { onSubmit: i, className: "ponkotu-form", children: [
    /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-form__label", children: [
      "名前",
      /* @__PURE__ */ v.jsx(
        "input",
        {
          className: "ponkotu-form__input",
          type: "text",
          value: t,
          placeholder: "キャラクター名など",
          onChange: (u) => n(u.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-form__label", children: [
      "メモ",
      /* @__PURE__ */ v.jsx(
        "textarea",
        {
          className: "ponkotu-form__textarea",
          value: r,
          placeholder: "送信したいメモ",
          onChange: (u) => l(u.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx("div", { className: "ponkotu-form__footer", children: /* @__PURE__ */ v.jsx("button", { type: "submit", disabled: o, children: "送信" }) })
  ] });
}, Kp = () => {
  const e = [];
  return we.forEach((n) => {
    const r = n.attribute;
    if (!r || !r.stack) {
      e.push(`ステータス ${n.id} の stack 属性がありません`);
      return;
    }
    n.hasPending && !r.pending && e.push(
      `ステータス ${n.id} は pending を持つのに対応する属性がありません`
    ), !n.hasPending && r.pending && e.push(
      `ステータス ${n.id} は pending を持たないのに pending 属性が定義されています`
    );
  }), e;
}, Yp = "ponkotu-system";
let ks = !1;
var At;
class Xp extends Application {
  constructor() {
    super(...arguments);
    In(this, At, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      classes: ["ponkotu-react-form"],
      title: "React フォーム",
      template: `modules/${Yp}/templates/react-form.html`,
      width: 420,
      height: 400,
      resizable: !0
    });
  }
  activateListeners(n) {
    var l;
    if (super.activateListeners(n), !ks) {
      const o = Kp();
      if (o.length > 0) {
        ks = !0;
        const i = [
          "<p>ステータスの属性マッピングに問題があります。</p>",
          "<ul>",
          ...o.map((u) => `<li>${u}</li>`),
          "</ul>"
        ].join("");
        new Dialog({
          title: "ポンコツシステム: 設定エラー",
          content: i,
          buttons: {
            ok: { label: "OK" }
          },
          default: "ok"
        }).render(!0);
      }
    }
    const r = (l = n[0]) == null ? void 0 : l.querySelector(
      ".ponkotu-react-root"
    );
    if (!r) {
      console.warn("[ponkotu-system] ReactFormApplication: container not found");
      return;
    }
    Dt(this, At, qn.createRoot(r)), Z(this, At).render(
      /* @__PURE__ */ v.jsx(
        Qp,
        {
          onSubmit: (o) => {
            var u;
            const i = o.note ? `${o.name} からの送信: ${o.note}` : `${o.name} が送信しました。`;
            ChatMessage.create({
              speaker: ChatMessage.getSpeaker(),
              content: i
            }), (u = ui.notifications) == null || u.info("メッセージを送信しました");
          }
        }
      )
    );
  }
  async close(n) {
    var r;
    return (r = Z(this, At)) == null || r.unmount(), Dt(this, At, null), super.close(n);
  }
}
At = new WeakMap();
const Gp = (e) => Number.isInteger(e) && e >= 1, Zp = async (e, t) => {
  if (!t.actorId)
    throw new Error("actorId is required");
  if (!Gp(t.stackDelta))
    throw new Error("stackDelta must be a positive integer");
  const n = t.target ?? "stack", r = we.find((s) => s.id === t.statusId);
  if (!r)
    throw new Error("status definition not found");
  const l = "pending" in r.attribute && !!r.attribute.pending;
  if (n === "pending" && !l)
    throw new Error("selected status does not support pending");
  const o = e.loadByActorId(t.actorId);
  if (!o)
    throw new Error("combatant record not found");
  const i = n === "pending" ? o.combatant.statuses.getPending(t.statusId) : o.combatant.statuses.getStack(t.statusId);
  n === "pending" ? o.combatant.statuses.addPending(t.statusId, t.stackDelta) : o.combatant.statuses.addStack(t.statusId, t.stackDelta), await e.saveActor(o.combatant);
  const u = n === "pending" ? o.combatant.statuses.getPending(t.statusId) : o.combatant.statuses.getStack(t.statusId);
  return {
    actorId: o.actorId,
    actorName: o.combatant.name ?? o.actor.name ?? "unknown",
    statusId: t.statusId,
    target: n,
    before: i,
    after: u
  };
};
let _l = null;
const Jp = async (e) => {
  const t = new Bt();
  return Zp(t, e);
}, qp = (e) => {
  _l = socketlib.registerModule(e), _l.register("applyStatusStack", Jp);
}, bp = (e) => {
  if (!_l)
    throw new Error("socketlib が初期化されていません");
  return _l.executeAsGM("applyStatusStack", e);
}, em = we.map((e) => e.id), tm = () => em[0] ?? "Burned", vo = (e) => e === "random:ally" || e === "random:enemy" || e === "random:all", nm = (e, t) => e === "random:all" ? t : e === "random:ally" ? t.filter((n) => n.disposition === El.FRIENDLY) : t.filter((n) => n.disposition !== El.FRIENDLY), rm = (e) => {
  const [t, n] = R.useState(""), [r, l] = R.useState(tm), [o, i] = R.useState("stack"), [u, s] = R.useState("1"), [f, h] = R.useState(!1), m = we.find(
    (y) => y.id === r
  ), p = !!(m && "pending" in m.attribute && m.attribute.pending);
  return R.useEffect(() => {
    var w;
    if (!e.length) {
      t && !vo(t) && n("");
      return;
    }
    const y = new Set(e.map((I) => I.actorId));
    (!t || !vo(t) && !y.has(t)) && n(((w = e[0]) == null ? void 0 : w.actorId) ?? "");
  }, [e, t]), R.useEffect(() => {
    !p && o === "pending" && i("stack");
  }, [p, o]), {
    statusTargetValue: t,
    statusId: r,
    applyTarget: o,
    canApplyPending: p,
    statusStack: u,
    statusRunning: f,
    setStatusTargetValue: n,
    setStatusId: l,
    setApplyTarget: i,
    setStatusStack: s,
    runApplyStatus: async () => {
      var I, a, c, d, g, E, _;
      if (f) return;
      const y = Number(u);
      if (!Number.isInteger(y) || y < 1) {
        (I = ui.notifications) == null || I.error("スタック数には1以上の整数を入力してください");
        return;
      }
      let w;
      if (vo(t)) {
        const x = nm(t, e);
        if (x.length === 0) {
          (a = ui.notifications) == null || a.error("ランダム対象の候補が0件です。対象を選び直してください。");
          return;
        }
        w = x[Math.floor(Math.random() * x.length)].actorId;
      } else
        w = t;
      if (!w) {
        (c = ui.notifications) == null || c.error("状態異常を付与する対象を選択してください");
        return;
      }
      try {
        h(!0);
        const x = await bp({
          actorId: w,
          statusId: r,
          stackDelta: y,
          target: o
        }), N = ((d = we.find((j) => j.id === x.statusId)) == null ? void 0 : d.name) ?? x.statusId, A = x.target === "pending" ? "next" : "現在";
        (g = ui.notifications) == null || g.info(
          `${x.actorName} に ${x.statusId}(${A}) を ${y} 付与しました (${x.before}→${x.after})`
        ), await ChatMessage.create({
          speaker: { alias: ((E = game.user) == null ? void 0 : E.name) ?? "不明" },
          content: `${x.actorName} に ${N}（${A}）を ${y} 付与しました（${x.before} → ${x.after}）`
        });
      } catch (x) {
        console.error("[ponkotu-system] apply status failed", x), (_ = ui.notifications) == null || _.error("状態異常の付与に失敗しました。コンソールを確認してください。");
      } finally {
        h(!1);
      }
    }
  };
}, lm = (e, t) => t.map((n) => ({
  id: n.id,
  name: n.name,
  stack: e.getStack(n.id),
  pending: e.getPending(n.id),
  hasPending: !!n.hasPending
})).filter((n) => n.stack > 0 || n.pending > 0), om = () => {
  const [e, t] = R.useState(""), [n, r] = R.useState(!1), [l, o] = R.useState([]);
  return {
    libraryTargetValue: e,
    libraryOpen: n,
    libraryEntries: l,
    setLibraryTargetValue: (s) => {
      t(s), r(!1), o([]);
    },
    toggleLibrary: () => {
      if (n) {
        r(!1), o([]);
        return;
      }
      if (!e) return;
      const f = new Bt().loadByActorId(e);
      if (!f) return;
      const h = lm(
        f.combatant.statuses,
        we
      );
      o(h), r(!0);
    }
  };
}, im = ({ tokens: e }) => {
  const {
    statusTargetValue: t,
    statusId: n,
    applyTarget: r,
    canApplyPending: l,
    statusStack: o,
    statusRunning: i,
    setStatusTargetValue: u,
    setStatusId: s,
    setApplyTarget: f,
    setStatusStack: h,
    runApplyStatus: m
  } = rm(e), {
    libraryTargetValue: p,
    libraryOpen: k,
    libraryEntries: y,
    setLibraryTargetValue: w,
    toggleLibrary: I
  } = om();
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ v.jsx("h3", { style: { margin: "8px 0" }, children: "状態異常付与" }) }),
    /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label", children: [
        "対象キャラ",
        /* @__PURE__ */ v.jsxs(
          "select",
          {
            value: t,
            onChange: (a) => u(a.target.value),
            children: [
              /* @__PURE__ */ v.jsx("option", { value: "", children: "選択してください" }),
              e.map((a) => /* @__PURE__ */ v.jsx("option", { value: a.actorId, children: xl(a) }, `status-target-${a.actorId}`)),
              /* @__PURE__ */ v.jsx("optgroup", { label: "ランダム", children: Ap.map((a) => /* @__PURE__ */ v.jsx("option", { value: a.value, children: a.label }, a.value)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label", children: [
        "状態異常",
        /* @__PURE__ */ v.jsx(
          "select",
          {
            value: n,
            onChange: (a) => s(a.target.value),
            children: we.map((a) => /* @__PURE__ */ v.jsx("option", { value: a.id, children: a.name }, a.id))
          }
        )
      ] }),
      /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label", children: [
        "付与先",
        /* @__PURE__ */ v.jsxs(
          "select",
          {
            value: r,
            onChange: (a) => f(a.target.value),
            children: [
              /* @__PURE__ */ v.jsx("option", { value: "stack", children: "現在" }),
              /* @__PURE__ */ v.jsx("option", { value: "pending", disabled: !l, children: "次ターン(next)" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label", children: [
      "スタック数",
      /* @__PURE__ */ v.jsx(
        "input",
        {
          type: "number",
          min: 1,
          step: 1,
          value: o,
          onChange: (a) => h(a.target.value),
          placeholder: "例: 3"
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ v.jsx("button", { onClick: m, disabled: i || e.length < 1, children: i ? "付与中..." : "状態異常を付与" }) }),
    /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ v.jsx("h3", { style: { margin: "8px 0" }, children: "ライブラ！" }) }),
    /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label", children: [
        "対象キャラ",
        /* @__PURE__ */ v.jsxs(
          "select",
          {
            value: p,
            onChange: (a) => w(a.target.value),
            children: [
              /* @__PURE__ */ v.jsx("option", { value: "", children: "選択してください" }),
              e.map((a) => /* @__PURE__ */ v.jsx("option", { value: a.actorId, children: xl(a) }, `library-target-${a.actorId}`))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("button", { disabled: !p, onClick: I, children: k ? "閉じる" : "表示" })
    ] }),
    k && /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage__row", style: { flexDirection: "column" }, children: y.length === 0 ? /* @__PURE__ */ v.jsx("span", { children: "状態異常なし" }) : /* @__PURE__ */ v.jsxs("table", { style: { fontSize: "0.9em", width: "100%" }, children: [
      /* @__PURE__ */ v.jsx("thead", { children: /* @__PURE__ */ v.jsxs("tr", { children: [
        /* @__PURE__ */ v.jsx("th", { children: "ステータス" }),
        /* @__PURE__ */ v.jsx("th", { children: "スタック" }),
        /* @__PURE__ */ v.jsx("th", { children: "次ターン" })
      ] }) }),
      /* @__PURE__ */ v.jsx("tbody", { children: y.map((a) => /* @__PURE__ */ v.jsxs("tr", { children: [
        /* @__PURE__ */ v.jsx("td", { children: a.name }),
        /* @__PURE__ */ v.jsx("td", { children: a.stack }),
        /* @__PURE__ */ v.jsx("td", { children: a.hasPending ? a.pending : "-" })
      ] }, a.id)) })
    ] }) })
  ] });
}, um = () => {
  const e = Oc();
  return /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage", children: /* @__PURE__ */ v.jsx(im, { tokens: e }) });
}, sm = "ponkotu-system";
var Ft;
class am extends Application {
  constructor() {
    super(...arguments);
    In(this, Ft, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      classes: ["ponkotu-status-apply"],
      title: "状態異常付与フォーム",
      template: `modules/${sm}/templates/status-apply.html`,
      width: 520,
      height: 600,
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
      console.warn("[ponkotu-system] StatusApplyApplication: container not found");
      return;
    }
    Dt(this, Ft, qn.createRoot(r)), Z(this, Ft).render(/* @__PURE__ */ v.jsx(um, {}));
  }
  async close(n) {
    var r;
    return (r = Z(this, Ft)) == null || r.unmount(), Dt(this, Ft, null), super.close(n);
  }
}
Ft = new WeakMap();
const Cl = "ponkotu-system", en = (...e) => console.log(`[${Cl}]`, ...e), Uc = () => new Xp().render(!0), $c = () => new Wp().render(!0), Bc = () => new am().render(!0), Ss = () => {
  var n;
  const e = (n = game.modules) == null ? void 0 : n.get(Cl);
  if (!e) {
    console.warn(`[${Cl}] game.modules からモジュールを取得できませんでした`);
    return;
  }
  const t = e;
  t.api || (t.api = {}), t.api.showReactForm = Uc, t.api.showDamageCalc = $c, t.api.showStatusApply = Bc, en("API を登録しました", t.api);
}, cm = () => {
  en("ES module loaded"), Hooks.once("ready", () => {
    en("Hooks.once ready fired"), Ss(), globalThis.ponkotuSystem = { showReactForm: Uc, showDamageCalc: $c, showStatusApply: Bc }, en("React フォーム API を初期化しました");
  }), Hooks.once("init", () => {
    en("Hooks.once init fired"), Ss();
  }), Hooks.once("socketlib.ready", () => {
    en("Hooks.once socketlib.ready fired"), qp(Cl);
  });
};
cm();
export {
  $c as showDamageCalc,
  Uc as showReactForm,
  Bc as showStatusApply
};
