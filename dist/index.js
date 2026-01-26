var Go = (e) => {
  throw TypeError(e);
};
var Zo = (e, t, n) => t.has(e) || Go("Cannot " + n);
var Z = (e, t, n) => (Zo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), fr = (e, t, n) => t.has(e) ? Go("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), yn = (e, t, n, r) => (Zo(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var cs = { exports: {} }, dl = {}, fs = { exports: {} }, R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lr = Symbol.for("react.element"), Dc = Symbol.for("react.portal"), Tc = Symbol.for("react.fragment"), Rc = Symbol.for("react.strict_mode"), Ic = Symbol.for("react.profiler"), Lc = Symbol.for("react.provider"), Mc = Symbol.for("react.context"), Oc = Symbol.for("react.forward_ref"), Fc = Symbol.for("react.suspense"), jc = Symbol.for("react.memo"), Ac = Symbol.for("react.lazy"), Jo = Symbol.iterator;
function Uc(e) {
  return e === null || typeof e != "object" ? null : (e = Jo && e[Jo] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ds = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ps = Object.assign, ms = {};
function mn(e, t, n) {
  this.props = e, this.context = t, this.refs = ms, this.updater = n || ds;
}
mn.prototype.isReactComponent = {};
mn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
mn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function hs() {
}
hs.prototype = mn.prototype;
function bi(e, t, n) {
  this.props = e, this.context = t, this.refs = ms, this.updater = n || ds;
}
var eo = bi.prototype = new hs();
eo.constructor = bi;
ps(eo, mn.prototype);
eo.isPureReactComponent = !0;
var qo = Array.isArray, vs = Object.prototype.hasOwnProperty, to = { current: null }, gs = { key: !0, ref: !0, __self: !0, __source: !0 };
function ys(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) vs.call(t, r) && !gs.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: lr, type: e, key: i, ref: o, props: l, _owner: to.current };
}
function $c(e, t) {
  return { $$typeof: lr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function no(e) {
  return typeof e == "object" && e !== null && e.$$typeof === lr;
}
function Hc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var bo = /\/+/g;
function Rl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Hc("" + e.key) : t.toString(36);
}
function Dr(e, t, n, r, l) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else switch (i) {
    case "string":
    case "number":
      o = !0;
      break;
    case "object":
      switch (e.$$typeof) {
        case lr:
        case Dc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Rl(o, 0) : r, qo(l) ? (n = "", e != null && (n = e.replace(bo, "$&/") + "/"), Dr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (no(l) && (l = $c(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(bo, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", qo(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Rl(i, u);
    o += Dr(i, t, n, s, l);
  }
  else if (s = Uc(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Rl(i, u++), o += Dr(i, t, n, s, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function dr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Dr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Bc(e) {
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
var ce = { current: null }, Tr = { transition: null }, Vc = { ReactCurrentDispatcher: ce, ReactCurrentBatchConfig: Tr, ReactCurrentOwner: to };
function ks() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = { map: dr, forEach: function(e, t, n) {
  dr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return dr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return dr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!no(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
R.Component = mn;
R.Fragment = Tc;
R.Profiler = Ic;
R.PureComponent = bi;
R.StrictMode = Rc;
R.Suspense = Fc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vc;
R.act = ks;
R.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ps({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = to.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) vs.call(t, s) && !gs.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: lr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
R.createContext = function(e) {
  return e = { $$typeof: Mc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Lc, _context: e }, e.Consumer = e;
};
R.createElement = ys;
R.createFactory = function(e) {
  var t = ys.bind(null, e);
  return t.type = e, t;
};
R.createRef = function() {
  return { current: null };
};
R.forwardRef = function(e) {
  return { $$typeof: Oc, render: e };
};
R.isValidElement = no;
R.lazy = function(e) {
  return { $$typeof: Ac, _payload: { _status: -1, _result: e }, _init: Bc };
};
R.memo = function(e, t) {
  return { $$typeof: jc, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function(e) {
  var t = Tr.transition;
  Tr.transition = {};
  try {
    e();
  } finally {
    Tr.transition = t;
  }
};
R.unstable_act = ks;
R.useCallback = function(e, t) {
  return ce.current.useCallback(e, t);
};
R.useContext = function(e) {
  return ce.current.useContext(e);
};
R.useDebugValue = function() {
};
R.useDeferredValue = function(e) {
  return ce.current.useDeferredValue(e);
};
R.useEffect = function(e, t) {
  return ce.current.useEffect(e, t);
};
R.useId = function() {
  return ce.current.useId();
};
R.useImperativeHandle = function(e, t, n) {
  return ce.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function(e, t) {
  return ce.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function(e, t) {
  return ce.current.useLayoutEffect(e, t);
};
R.useMemo = function(e, t) {
  return ce.current.useMemo(e, t);
};
R.useReducer = function(e, t, n) {
  return ce.current.useReducer(e, t, n);
};
R.useRef = function(e) {
  return ce.current.useRef(e);
};
R.useState = function(e) {
  return ce.current.useState(e);
};
R.useSyncExternalStore = function(e, t, n) {
  return ce.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function() {
  return ce.current.useTransition();
};
R.version = "18.3.1";
fs.exports = R;
var de = fs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wc = de, Qc = Symbol.for("react.element"), Kc = Symbol.for("react.fragment"), Yc = Object.prototype.hasOwnProperty, Xc = Wc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Gc = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ss(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Yc.call(t, r) && !Gc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Qc, type: e, key: i, ref: o, props: l, _owner: Xc.current };
}
dl.Fragment = Kc;
dl.jsx = Ss;
dl.jsxs = Ss;
cs.exports = dl;
var I = cs.exports, Hr = {}, ws = { exports: {} }, Ce = {}, Es = { exports: {} }, Cs = {};
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
  function t(C, z) {
    var T = C.length;
    C.push(z);
    e: for (; 0 < T; ) {
      var W = T - 1 >>> 1, G = C[W];
      if (0 < l(G, z)) C[W] = z, C[T] = G, T = W;
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var z = C[0], T = C.pop();
    if (T !== z) {
      C[0] = T;
      e: for (var W = 0, G = C.length, ar = G >>> 1; W < ar; ) {
        var Ct = 2 * (W + 1) - 1, Tl = C[Ct], _t = Ct + 1, cr = C[_t];
        if (0 > l(Tl, T)) _t < G && 0 > l(cr, Tl) ? (C[W] = cr, C[_t] = T, W = _t) : (C[W] = Tl, C[Ct] = T, W = Ct);
        else if (_t < G && 0 > l(cr, T)) C[W] = cr, C[_t] = T, W = _t;
        else break e;
      }
    }
    return z;
  }
  function l(C, z) {
    var T = C.sortIndex - z.sortIndex;
    return T !== 0 ? T : C.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function() {
      return i.now();
    };
  } else {
    var o = Date, u = o.now();
    e.unstable_now = function() {
      return o.now() - u;
    };
  }
  var s = [], c = [], m = 1, h = null, p = 3, S = !1, y = !1, k = !1, D = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= C) r(c), z.sortIndex = z.expirationTime, t(s, z);
      else break;
      z = n(c);
    }
  }
  function v(C) {
    if (k = !1, d(C), !y) if (n(s) !== null) y = !0, zl(w);
    else {
      var z = n(c);
      z !== null && Dl(v, z.startTime - C);
    }
  }
  function w(C, z) {
    y = !1, k && (k = !1, f(x), x = -1), S = !0;
    var T = p;
    try {
      for (d(z), h = n(s); h !== null && (!(h.expirationTime > z) || C && !ye()); ) {
        var W = h.callback;
        if (typeof W == "function") {
          h.callback = null, p = h.priorityLevel;
          var G = W(h.expirationTime <= z);
          z = e.unstable_now(), typeof G == "function" ? h.callback = G : h === n(s) && r(s), d(z);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var ar = !0;
      else {
        var Ct = n(c);
        Ct !== null && Dl(v, Ct.startTime - z), ar = !1;
      }
      return ar;
    } finally {
      h = null, p = T, S = !1;
    }
  }
  var P = !1, _ = null, x = -1, A = 5, N = -1;
  function ye() {
    return !(e.unstable_now() - N < A);
  }
  function Et() {
    if (_ !== null) {
      var C = e.unstable_now();
      N = C;
      var z = !0;
      try {
        z = _(!0, C);
      } finally {
        z ? gn() : (P = !1, _ = null);
      }
    } else P = !1;
  }
  var gn;
  if (typeof a == "function") gn = function() {
    a(Et);
  };
  else if (typeof MessageChannel < "u") {
    var Xo = new MessageChannel(), zc = Xo.port2;
    Xo.port1.onmessage = Et, gn = function() {
      zc.postMessage(null);
    };
  } else gn = function() {
    D(Et, 0);
  };
  function zl(C) {
    _ = C, P || (P = !0, gn());
  }
  function Dl(C, z) {
    x = D(function() {
      C(e.unstable_now());
    }, z);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(C) {
    C.callback = null;
  }, e.unstable_continueExecution = function() {
    y || S || (y = !0, zl(w));
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
        var z = 3;
        break;
      default:
        z = p;
    }
    var T = p;
    p = z;
    try {
      return C();
    } finally {
      p = T;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(C, z) {
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
      return z();
    } finally {
      p = T;
    }
  }, e.unstable_scheduleCallback = function(C, z, T) {
    var W = e.unstable_now();
    switch (typeof T == "object" && T !== null ? (T = T.delay, T = typeof T == "number" && 0 < T ? W + T : W) : T = W, C) {
      case 1:
        var G = -1;
        break;
      case 2:
        G = 250;
        break;
      case 5:
        G = 1073741823;
        break;
      case 4:
        G = 1e4;
        break;
      default:
        G = 5e3;
    }
    return G = T + G, C = { id: m++, callback: z, priorityLevel: C, startTime: T, expirationTime: G, sortIndex: -1 }, T > W ? (C.sortIndex = T, t(c, C), n(s) === null && C === n(c) && (k ? (f(x), x = -1) : k = !0, Dl(v, T - W))) : (C.sortIndex = G, t(s, C), y || S || (y = !0, zl(w))), C;
  }, e.unstable_shouldYield = ye, e.unstable_wrapCallback = function(C) {
    var z = p;
    return function() {
      var T = p;
      p = z;
      try {
        return C.apply(this, arguments);
      } finally {
        p = T;
      }
    };
  };
})(Cs);
Es.exports = Cs;
var Zc = Es.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc = de, Ee = Zc;
function g(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var _s = /* @__PURE__ */ new Set(), Hn = {};
function Ut(e, t) {
  un(e, t), un(e + "Capture", t);
}
function un(e, t) {
  for (Hn[e] = t, e = 0; e < t.length; e++) _s.add(t[e]);
}
var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ii = Object.prototype.hasOwnProperty, qc = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, eu = {}, tu = {};
function bc(e) {
  return ii.call(tu, e) ? !0 : ii.call(eu, e) ? !1 : qc.test(e) ? tu[e] = !0 : (eu[e] = !0, !1);
}
function ef(e, t, n, r) {
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
function tf(e, t, n, r) {
  if (t === null || typeof t > "u" || ef(e, t, n, r)) return !0;
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
function fe(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ne[e] = new fe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ne[t] = new fe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ne[e] = new fe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ne[e] = new fe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ne[e] = new fe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ne[e] = new fe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ne[e] = new fe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ne[e] = new fe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ne[e] = new fe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ro = /[\-:]([a-z])/g;
function lo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ro,
    lo
  );
  ne[t] = new fe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ro, lo);
  ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ro, lo);
  ne[t] = new fe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new fe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new fe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function io(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (tf(t, n, l, r) && (n = null), r || l === null ? bc(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = Jc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, pr = Symbol.for("react.element"), Bt = Symbol.for("react.portal"), Vt = Symbol.for("react.fragment"), oo = Symbol.for("react.strict_mode"), oi = Symbol.for("react.profiler"), Ps = Symbol.for("react.provider"), xs = Symbol.for("react.context"), uo = Symbol.for("react.forward_ref"), si = Symbol.for("react.suspense"), ai = Symbol.for("react.suspense_list"), so = Symbol.for("react.memo"), rt = Symbol.for("react.lazy"), Ns = Symbol.for("react.offscreen"), nu = Symbol.iterator;
function kn(e) {
  return e === null || typeof e != "object" ? null : (e = nu && e[nu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, Il;
function Nn(e) {
  if (Il === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Il = t && t[1] || "";
  }
  return `
` + Il + e;
}
var Ll = !1;
function Ml(e, t) {
  if (!e || Ll) return "";
  Ll = !0;
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
`), i = r.stack.split(`
`), o = l.length - 1, u = i.length - 1; 1 <= o && 0 <= u && l[o] !== i[u]; ) u--;
      for (; 1 <= o && 0 <= u; o--, u--) if (l[o] !== i[u]) {
        if (o !== 1 || u !== 1)
          do
            if (o--, u--, 0 > u || l[o] !== i[u]) {
              var s = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
            }
          while (1 <= o && 0 <= u);
        break;
      }
    }
  } finally {
    Ll = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Nn(e) : "";
}
function nf(e) {
  switch (e.tag) {
    case 5:
      return Nn(e.type);
    case 16:
      return Nn("Lazy");
    case 13:
      return Nn("Suspense");
    case 19:
      return Nn("SuspenseList");
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
function ci(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Vt:
      return "Fragment";
    case Bt:
      return "Portal";
    case oi:
      return "Profiler";
    case oo:
      return "StrictMode";
    case si:
      return "Suspense";
    case ai:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case xs:
      return (e.displayName || "Context") + ".Consumer";
    case Ps:
      return (e._context.displayName || "Context") + ".Provider";
    case uo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case so:
      return t = e.displayName || null, t !== null ? t : ci(e.type) || "Memo";
    case rt:
      t = e._payload, e = e._init;
      try {
        return ci(e(t));
      } catch {
      }
  }
  return null;
}
function rf(e) {
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
      return ci(t);
    case 8:
      return t === oo ? "StrictMode" : "Mode";
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
function gt(e) {
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
function zs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function lf(e) {
  var t = zs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
  if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var l = n.get, i = n.set;
    return Object.defineProperty(e, t, { configurable: !0, get: function() {
      return l.call(this);
    }, set: function(o) {
      r = "" + o, i.call(this, o);
    } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
      return r;
    }, setValue: function(o) {
      r = "" + o;
    }, stopTracking: function() {
      e._valueTracker = null, delete e[t];
    } };
  }
}
function mr(e) {
  e._valueTracker || (e._valueTracker = lf(e));
}
function Ds(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = zs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Br(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function fi(e, t) {
  var n = t.checked;
  return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ru(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = gt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ts(e, t) {
  t = t.checked, t != null && io(e, "checked", t, !1);
}
function di(e, t) {
  Ts(e, t);
  var n = gt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? pi(e, t.type, n) : t.hasOwnProperty("defaultValue") && pi(e, t.type, gt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function lu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function pi(e, t, n) {
  (t !== "number" || Br(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var zn = Array.isArray;
function en(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + gt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function mi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(g(91));
  return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function iu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(g(92));
      if (zn(n)) {
        if (1 < n.length) throw Error(g(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: gt(n) };
}
function Rs(e, t) {
  var n = gt(t.value), r = gt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ou(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Is(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function hi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Is(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var hr, Ls = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (hr = hr || document.createElement("div"), hr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = hr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var In = {
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
}, of = ["Webkit", "ms", "Moz", "O"];
Object.keys(In).forEach(function(e) {
  of.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), In[t] = In[e];
  });
});
function Ms(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || In.hasOwnProperty(e) && In[e] ? ("" + t).trim() : t + "px";
}
function Os(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Ms(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var uf = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function vi(e, t) {
  if (t) {
    if (uf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(g(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(g(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(g(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(g(62));
  }
}
function gi(e, t) {
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
var yi = null;
function ao(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ki = null, tn = null, nn = null;
function uu(e) {
  if (e = ur(e)) {
    if (typeof ki != "function") throw Error(g(280));
    var t = e.stateNode;
    t && (t = gl(t), ki(e.stateNode, e.type, t));
  }
}
function Fs(e) {
  tn ? nn ? nn.push(e) : nn = [e] : tn = e;
}
function js() {
  if (tn) {
    var e = tn, t = nn;
    if (nn = tn = null, uu(e), t) for (e = 0; e < t.length; e++) uu(t[e]);
  }
}
function As(e, t) {
  return e(t);
}
function Us() {
}
var Ol = !1;
function $s(e, t, n) {
  if (Ol) return e(t, n);
  Ol = !0;
  try {
    return As(e, t, n);
  } finally {
    Ol = !1, (tn !== null || nn !== null) && (Us(), js());
  }
}
function Vn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = gl(n);
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
var Si = !1;
if (Ze) try {
  var Sn = {};
  Object.defineProperty(Sn, "passive", { get: function() {
    Si = !0;
  } }), window.addEventListener("test", Sn, Sn), window.removeEventListener("test", Sn, Sn);
} catch {
  Si = !1;
}
function sf(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Ln = !1, Vr = null, Wr = !1, wi = null, af = { onError: function(e) {
  Ln = !0, Vr = e;
} };
function cf(e, t, n, r, l, i, o, u, s) {
  Ln = !1, Vr = null, sf.apply(af, arguments);
}
function ff(e, t, n, r, l, i, o, u, s) {
  if (cf.apply(this, arguments), Ln) {
    if (Ln) {
      var c = Vr;
      Ln = !1, Vr = null;
    } else throw Error(g(198));
    Wr || (Wr = !0, wi = c);
  }
}
function $t(e) {
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
function Hs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function su(e) {
  if ($t(e) !== e) throw Error(g(188));
}
function df(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $t(e), t === null) throw Error(g(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var i = l.alternate;
    if (i === null) {
      if (r = l.return, r !== null) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === i.child) {
      for (i = l.child; i; ) {
        if (i === n) return su(l), e;
        if (i === r) return su(l), t;
        i = i.sibling;
      }
      throw Error(g(188));
    }
    if (n.return !== r.return) n = l, r = i;
    else {
      for (var o = !1, u = l.child; u; ) {
        if (u === n) {
          o = !0, n = l, r = i;
          break;
        }
        if (u === r) {
          o = !0, r = l, n = i;
          break;
        }
        u = u.sibling;
      }
      if (!o) {
        for (u = i.child; u; ) {
          if (u === n) {
            o = !0, n = i, r = l;
            break;
          }
          if (u === r) {
            o = !0, r = i, n = l;
            break;
          }
          u = u.sibling;
        }
        if (!o) throw Error(g(189));
      }
    }
    if (n.alternate !== r) throw Error(g(190));
  }
  if (n.tag !== 3) throw Error(g(188));
  return n.stateNode.current === n ? e : t;
}
function Bs(e) {
  return e = df(e), e !== null ? Vs(e) : null;
}
function Vs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Vs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Ws = Ee.unstable_scheduleCallback, au = Ee.unstable_cancelCallback, pf = Ee.unstable_shouldYield, mf = Ee.unstable_requestPaint, Q = Ee.unstable_now, hf = Ee.unstable_getCurrentPriorityLevel, co = Ee.unstable_ImmediatePriority, Qs = Ee.unstable_UserBlockingPriority, Qr = Ee.unstable_NormalPriority, vf = Ee.unstable_LowPriority, Ks = Ee.unstable_IdlePriority, pl = null, Be = null;
function gf(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function") try {
    Be.onCommitFiberRoot(pl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Oe = Math.clz32 ? Math.clz32 : Sf, yf = Math.log, kf = Math.LN2;
function Sf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (yf(e) / kf | 0) | 0;
}
var vr = 64, gr = 4194304;
function Dn(e) {
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
function Kr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = Dn(u) : (i &= o, i !== 0 && (r = Dn(i)));
  } else o = n & ~l, o !== 0 ? r = Dn(o) : i !== 0 && (r = Dn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Oe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function wf(e, t) {
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
function Ef(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Oe(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = wf(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Ei(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ys() {
  var e = vr;
  return vr <<= 1, !(vr & 4194240) && (vr = 64), e;
}
function Fl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function ir(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n;
}
function Cf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function fo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var M = 0;
function Xs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var Gs, po, Zs, Js, qs, Ci = !1, yr = [], at = null, ct = null, ft = null, Wn = /* @__PURE__ */ new Map(), Qn = /* @__PURE__ */ new Map(), it = [], _f = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function cu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      at = null;
      break;
    case "dragenter":
    case "dragleave":
      ct = null;
      break;
    case "mouseover":
    case "mouseout":
      ft = null;
      break;
    case "pointerover":
    case "pointerout":
      Wn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Qn.delete(t.pointerId);
  }
}
function wn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = ur(t), t !== null && po(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Pf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return at = wn(at, e, t, n, r, l), !0;
    case "dragenter":
      return ct = wn(ct, e, t, n, r, l), !0;
    case "mouseover":
      return ft = wn(ft, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Wn.set(i, wn(Wn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Qn.set(i, wn(Qn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function bs(e) {
  var t = Nt(e.target);
  if (t !== null) {
    var n = $t(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Hs(n), t !== null) {
          e.blockedOn = t, qs(e.priority, function() {
            Zs(n);
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
function Rr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      yi = r, n.target.dispatchEvent(r), yi = null;
    } else return t = ur(n), t !== null && po(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function fu(e, t, n) {
  Rr(e) && n.delete(t);
}
function xf() {
  Ci = !1, at !== null && Rr(at) && (at = null), ct !== null && Rr(ct) && (ct = null), ft !== null && Rr(ft) && (ft = null), Wn.forEach(fu), Qn.forEach(fu);
}
function En(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ci || (Ci = !0, Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, xf)));
}
function Kn(e) {
  function t(l) {
    return En(l, e);
  }
  if (0 < yr.length) {
    En(yr[0], e);
    for (var n = 1; n < yr.length; n++) {
      var r = yr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (at !== null && En(at, e), ct !== null && En(ct, e), ft !== null && En(ft, e), Wn.forEach(t), Qn.forEach(t), n = 0; n < it.length; n++) r = it[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < it.length && (n = it[0], n.blockedOn === null); ) bs(n), n.blockedOn === null && it.shift();
}
var rn = et.ReactCurrentBatchConfig, Yr = !0;
function Nf(e, t, n, r) {
  var l = M, i = rn.transition;
  rn.transition = null;
  try {
    M = 1, mo(e, t, n, r);
  } finally {
    M = l, rn.transition = i;
  }
}
function zf(e, t, n, r) {
  var l = M, i = rn.transition;
  rn.transition = null;
  try {
    M = 4, mo(e, t, n, r);
  } finally {
    M = l, rn.transition = i;
  }
}
function mo(e, t, n, r) {
  if (Yr) {
    var l = _i(e, t, n, r);
    if (l === null) Kl(e, t, r, Xr, n), cu(e, r);
    else if (Pf(l, e, t, n, r)) r.stopPropagation();
    else if (cu(e, r), t & 4 && -1 < _f.indexOf(e)) {
      for (; l !== null; ) {
        var i = ur(l);
        if (i !== null && Gs(i), i = _i(e, t, n, r), i === null && Kl(e, t, r, Xr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Kl(e, t, r, null, n);
  }
}
var Xr = null;
function _i(e, t, n, r) {
  if (Xr = null, e = ao(r), e = Nt(e), e !== null) if (t = $t(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Hs(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Xr = e, null;
}
function ea(e) {
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
      switch (hf()) {
        case co:
          return 1;
        case Qs:
          return 4;
        case Qr:
        case vf:
          return 16;
        case Ks:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var ut = null, ho = null, Ir = null;
function ta() {
  if (Ir) return Ir;
  var e, t = ho, n = t.length, r, l = "value" in ut ? ut.value : ut.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Ir = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Lr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function kr() {
  return !0;
}
function du() {
  return !1;
}
function _e(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? kr : du, this.isPropagationStopped = du, this;
  }
  return B(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = kr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = kr);
  }, persist: function() {
  }, isPersistent: kr }), t;
}
var hn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, vo = _e(hn), or = B({}, hn, { view: 0, detail: 0 }), Df = _e(or), jl, Al, Cn, ml = B({}, or, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: go, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Cn && (Cn && e.type === "mousemove" ? (jl = e.screenX - Cn.screenX, Al = e.screenY - Cn.screenY) : Al = jl = 0, Cn = e), jl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Al;
} }), pu = _e(ml), Tf = B({}, ml, { dataTransfer: 0 }), Rf = _e(Tf), If = B({}, or, { relatedTarget: 0 }), Ul = _e(If), Lf = B({}, hn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Mf = _e(Lf), Of = B({}, hn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Ff = _e(Of), jf = B({}, hn, { data: 0 }), mu = _e(jf), Af = {
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
}, Uf = {
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
}, $f = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Hf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = $f[e]) ? !!t[e] : !1;
}
function go() {
  return Hf;
}
var Bf = B({}, or, { key: function(e) {
  if (e.key) {
    var t = Af[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Lr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Uf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: go, charCode: function(e) {
  return e.type === "keypress" ? Lr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Lr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Vf = _e(Bf), Wf = B({}, ml, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), hu = _e(Wf), Qf = B({}, or, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: go }), Kf = _e(Qf), Yf = B({}, hn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xf = _e(Yf), Gf = B({}, ml, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zf = _e(Gf), Jf = [9, 13, 27, 32], yo = Ze && "CompositionEvent" in window, Mn = null;
Ze && "documentMode" in document && (Mn = document.documentMode);
var qf = Ze && "TextEvent" in window && !Mn, na = Ze && (!yo || Mn && 8 < Mn && 11 >= Mn), vu = " ", gu = !1;
function ra(e, t) {
  switch (e) {
    case "keyup":
      return Jf.indexOf(t.keyCode) !== -1;
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
function la(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Wt = !1;
function bf(e, t) {
  switch (e) {
    case "compositionend":
      return la(t);
    case "keypress":
      return t.which !== 32 ? null : (gu = !0, vu);
    case "textInput":
      return e = t.data, e === vu && gu ? null : e;
    default:
      return null;
  }
}
function ed(e, t) {
  if (Wt) return e === "compositionend" || !yo && ra(e, t) ? (e = ta(), Ir = ho = ut = null, Wt = !1, e) : null;
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
      return na && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var td = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function yu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!td[e.type] : t === "textarea";
}
function ia(e, t, n, r) {
  Fs(r), t = Gr(t, "onChange"), 0 < t.length && (n = new vo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var On = null, Yn = null;
function nd(e) {
  va(e, 0);
}
function hl(e) {
  var t = Yt(e);
  if (Ds(t)) return e;
}
function rd(e, t) {
  if (e === "change") return t;
}
var oa = !1;
if (Ze) {
  var $l;
  if (Ze) {
    var Hl = "oninput" in document;
    if (!Hl) {
      var ku = document.createElement("div");
      ku.setAttribute("oninput", "return;"), Hl = typeof ku.oninput == "function";
    }
    $l = Hl;
  } else $l = !1;
  oa = $l && (!document.documentMode || 9 < document.documentMode);
}
function Su() {
  On && (On.detachEvent("onpropertychange", ua), Yn = On = null);
}
function ua(e) {
  if (e.propertyName === "value" && hl(Yn)) {
    var t = [];
    ia(t, Yn, e, ao(e)), $s(nd, t);
  }
}
function ld(e, t, n) {
  e === "focusin" ? (Su(), On = t, Yn = n, On.attachEvent("onpropertychange", ua)) : e === "focusout" && Su();
}
function id(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return hl(Yn);
}
function od(e, t) {
  if (e === "click") return hl(t);
}
function ud(e, t) {
  if (e === "input" || e === "change") return hl(t);
}
function sd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var je = typeof Object.is == "function" ? Object.is : sd;
function Xn(e, t) {
  if (je(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ii.call(t, l) || !je(e[l], t[l])) return !1;
  }
  return !0;
}
function wu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Eu(e, t) {
  var n = wu(e);
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
    n = wu(n);
  }
}
function sa(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? sa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function aa() {
  for (var e = window, t = Br(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Br(e.document);
  }
  return t;
}
function ko(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function ad(e) {
  var t = aa(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && sa(n.ownerDocument.documentElement, n)) {
    if (r !== null && ko(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Eu(n, i);
        var o = Eu(
          n,
          r
        );
        l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), i > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
  }
}
var cd = Ze && "documentMode" in document && 11 >= document.documentMode, Qt = null, Pi = null, Fn = null, xi = !1;
function Cu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  xi || Qt == null || Qt !== Br(r) || (r = Qt, "selectionStart" in r && ko(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fn && Xn(Fn, r) || (Fn = r, r = Gr(Pi, "onSelect"), 0 < r.length && (t = new vo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Qt)));
}
function Sr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Kt = { animationend: Sr("Animation", "AnimationEnd"), animationiteration: Sr("Animation", "AnimationIteration"), animationstart: Sr("Animation", "AnimationStart"), transitionend: Sr("Transition", "TransitionEnd") }, Bl = {}, ca = {};
Ze && (ca = document.createElement("div").style, "AnimationEvent" in window || (delete Kt.animationend.animation, delete Kt.animationiteration.animation, delete Kt.animationstart.animation), "TransitionEvent" in window || delete Kt.transitionend.transition);
function vl(e) {
  if (Bl[e]) return Bl[e];
  if (!Kt[e]) return e;
  var t = Kt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ca) return Bl[e] = t[n];
  return e;
}
var fa = vl("animationend"), da = vl("animationiteration"), pa = vl("animationstart"), ma = vl("transitionend"), ha = /* @__PURE__ */ new Map(), _u = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function kt(e, t) {
  ha.set(e, t), Ut(t, [e]);
}
for (var Vl = 0; Vl < _u.length; Vl++) {
  var Wl = _u[Vl], fd = Wl.toLowerCase(), dd = Wl[0].toUpperCase() + Wl.slice(1);
  kt(fd, "on" + dd);
}
kt(fa, "onAnimationEnd");
kt(da, "onAnimationIteration");
kt(pa, "onAnimationStart");
kt("dblclick", "onDoubleClick");
kt("focusin", "onFocus");
kt("focusout", "onBlur");
kt(ma, "onTransitionEnd");
un("onMouseEnter", ["mouseout", "mouseover"]);
un("onMouseLeave", ["mouseout", "mouseover"]);
un("onPointerEnter", ["pointerout", "pointerover"]);
un("onPointerLeave", ["pointerout", "pointerover"]);
Ut("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ut("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ut("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ut("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ut("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ut("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Tn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), pd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Tn));
function Pu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, ff(r, t, void 0, e), e.currentTarget = null;
}
function va(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Pu(l, u, c), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, c = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Pu(l, u, c), i = s;
      }
    }
  }
  if (Wr) throw e = wi, Wr = !1, wi = null, e;
}
function F(e, t) {
  var n = t[Ri];
  n === void 0 && (n = t[Ri] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (ga(t, e, 2, !1), n.add(r));
}
function Ql(e, t, n) {
  var r = 0;
  t && (r |= 4), ga(n, e, r, t);
}
var wr = "_reactListening" + Math.random().toString(36).slice(2);
function Gn(e) {
  if (!e[wr]) {
    e[wr] = !0, _s.forEach(function(n) {
      n !== "selectionchange" && (pd.has(n) || Ql(n, !1, e), Ql(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[wr] || (t[wr] = !0, Ql("selectionchange", !1, t));
  }
}
function ga(e, t, n, r) {
  switch (ea(t)) {
    case 1:
      var l = Nf;
      break;
    case 4:
      l = zf;
      break;
    default:
      l = mo;
  }
  n = l.bind(null, t, n, e), l = void 0, !Si || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Kl(e, t, n, r, l) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
    if (r === null) return;
    var o = r.tag;
    if (o === 3 || o === 4) {
      var u = r.stateNode.containerInfo;
      if (u === l || u.nodeType === 8 && u.parentNode === l) break;
      if (o === 4) for (o = r.return; o !== null; ) {
        var s = o.tag;
        if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = Nt(u), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  $s(function() {
    var c = i, m = ao(n), h = [];
    e: {
      var p = ha.get(e);
      if (p !== void 0) {
        var S = vo, y = e;
        switch (e) {
          case "keypress":
            if (Lr(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = Vf;
            break;
          case "focusin":
            y = "focus", S = Ul;
            break;
          case "focusout":
            y = "blur", S = Ul;
            break;
          case "beforeblur":
          case "afterblur":
            S = Ul;
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
            S = pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Rf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = Kf;
            break;
          case fa:
          case da:
          case pa:
            S = Mf;
            break;
          case ma:
            S = Xf;
            break;
          case "scroll":
            S = Df;
            break;
          case "wheel":
            S = Zf;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Ff;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = hu;
        }
        var k = (t & 4) !== 0, D = !k && e === "scroll", f = k ? p !== null ? p + "Capture" : null : p;
        k = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Vn(a, f), v != null && k.push(Zn(a, v, d)))), D) break;
          a = a.return;
        }
        0 < k.length && (p = new S(p, y, null, n, m), h.push({ event: p, listeners: k }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", p && n !== yi && (y = n.relatedTarget || n.fromElement) && (Nt(y) || y[Je])) break e;
        if ((S || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, S ? (y = n.relatedTarget || n.toElement, S = c, y = y ? Nt(y) : null, y !== null && (D = $t(y), y !== D || y.tag !== 5 && y.tag !== 6) && (y = null)) : (S = null, y = c), S !== y)) {
          if (k = pu, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (k = hu, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), D = S == null ? p : Yt(S), d = y == null ? p : Yt(y), p = new k(v, a + "leave", S, n, m), p.target = D, p.relatedTarget = d, v = null, Nt(m) === c && (k = new k(f, a + "enter", y, n, m), k.target = d, k.relatedTarget = D, v = k), D = v, S && y) t: {
            for (k = S, f = y, a = 0, d = k; d; d = Ht(d)) a++;
            for (d = 0, v = f; v; v = Ht(v)) d++;
            for (; 0 < a - d; ) k = Ht(k), a--;
            for (; 0 < d - a; ) f = Ht(f), d--;
            for (; a--; ) {
              if (k === f || f !== null && k === f.alternate) break t;
              k = Ht(k), f = Ht(f);
            }
            k = null;
          }
          else k = null;
          S !== null && xu(h, p, S, k, !1), y !== null && D !== null && xu(h, D, y, k, !0);
        }
      }
      e: {
        if (p = c ? Yt(c) : window, S = p.nodeName && p.nodeName.toLowerCase(), S === "select" || S === "input" && p.type === "file") var w = rd;
        else if (yu(p)) if (oa) w = ud;
        else {
          w = id;
          var P = ld;
        }
        else (S = p.nodeName) && S.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (w = od);
        if (w && (w = w(e, c))) {
          ia(h, w, n, m);
          break e;
        }
        P && P(e, p, c), e === "focusout" && (P = p._wrapperState) && P.controlled && p.type === "number" && pi(p, "number", p.value);
      }
      switch (P = c ? Yt(c) : window, e) {
        case "focusin":
          (yu(P) || P.contentEditable === "true") && (Qt = P, Pi = c, Fn = null);
          break;
        case "focusout":
          Fn = Pi = Qt = null;
          break;
        case "mousedown":
          xi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          xi = !1, Cu(h, n, m);
          break;
        case "selectionchange":
          if (cd) break;
        case "keydown":
        case "keyup":
          Cu(h, n, m);
      }
      var _;
      if (yo) e: {
        switch (e) {
          case "compositionstart":
            var x = "onCompositionStart";
            break e;
          case "compositionend":
            x = "onCompositionEnd";
            break e;
          case "compositionupdate":
            x = "onCompositionUpdate";
            break e;
        }
        x = void 0;
      }
      else Wt ? ra(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x && (na && n.locale !== "ko" && (Wt || x !== "onCompositionStart" ? x === "onCompositionEnd" && Wt && (_ = ta()) : (ut = m, ho = "value" in ut ? ut.value : ut.textContent, Wt = !0)), P = Gr(c, x), 0 < P.length && (x = new mu(x, e, null, n, m), h.push({ event: x, listeners: P }), _ ? x.data = _ : (_ = la(n), _ !== null && (x.data = _)))), (_ = qf ? bf(e, n) : ed(e, n)) && (c = Gr(c, "onBeforeInput"), 0 < c.length && (m = new mu("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: c }), m.data = _));
    }
    va(h, t);
  });
}
function Zn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Gr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Vn(e, n), i != null && r.unshift(Zn(e, i, l)), i = Vn(e, t), i != null && r.push(Zn(e, i, l))), e = e.return;
  }
  return r;
}
function Ht(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function xu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Vn(n, i), s != null && o.unshift(Zn(n, s, u))) : l || (s = Vn(n, i), s != null && o.push(Zn(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var md = /\r\n?/g, hd = /\u0000|\uFFFD/g;
function Nu(e) {
  return (typeof e == "string" ? e : "" + e).replace(md, `
`).replace(hd, "");
}
function Er(e, t, n) {
  if (t = Nu(t), Nu(e) !== t && n) throw Error(g(425));
}
function Zr() {
}
var Ni = null, zi = null;
function Di(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ti = typeof setTimeout == "function" ? setTimeout : void 0, vd = typeof clearTimeout == "function" ? clearTimeout : void 0, zu = typeof Promise == "function" ? Promise : void 0, gd = typeof queueMicrotask == "function" ? queueMicrotask : typeof zu < "u" ? function(e) {
  return zu.resolve(null).then(e).catch(yd);
} : Ti;
function yd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Yl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Kn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Kn(t);
}
function dt(e) {
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
function Du(e) {
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
var vn = Math.random().toString(36).slice(2), He = "__reactFiber$" + vn, Jn = "__reactProps$" + vn, Je = "__reactContainer$" + vn, Ri = "__reactEvents$" + vn, kd = "__reactListeners$" + vn, Sd = "__reactHandles$" + vn;
function Nt(e) {
  var t = e[He];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Je] || n[He]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Du(e); e !== null; ) {
        if (n = e[He]) return n;
        e = Du(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function ur(e) {
  return e = e[He] || e[Je], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Yt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(g(33));
}
function gl(e) {
  return e[Jn] || null;
}
var Ii = [], Xt = -1;
function St(e) {
  return { current: e };
}
function j(e) {
  0 > Xt || (e.current = Ii[Xt], Ii[Xt] = null, Xt--);
}
function O(e, t) {
  Xt++, Ii[Xt] = e.current, e.current = t;
}
var yt = {}, ue = St(yt), he = St(!1), Mt = yt;
function sn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return yt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ve(e) {
  return e = e.childContextTypes, e != null;
}
function Jr() {
  j(he), j(ue);
}
function Tu(e, t, n) {
  if (ue.current !== yt) throw Error(g(168));
  O(ue, t), O(he, n);
}
function ya(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(g(108, rf(e) || "Unknown", l));
  return B({}, n, r);
}
function qr(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yt, Mt = ue.current, O(ue, e), O(he, he.current), !0;
}
function Ru(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(g(169));
  n ? (e = ya(e, t, Mt), r.__reactInternalMemoizedMergedChildContext = e, j(he), j(ue), O(ue, e)) : j(he), O(he, n);
}
var Ke = null, yl = !1, Xl = !1;
function ka(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
function wd(e) {
  yl = !0, ka(e);
}
function wt() {
  if (!Xl && Ke !== null) {
    Xl = !0;
    var e = 0, t = M;
    try {
      var n = Ke;
      for (M = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ke = null, yl = !1;
    } catch (l) {
      throw Ke !== null && (Ke = Ke.slice(e + 1)), Ws(co, wt), l;
    } finally {
      M = t, Xl = !1;
    }
  }
  return null;
}
var Gt = [], Zt = 0, br = null, el = 0, Pe = [], xe = 0, Ot = null, Ye = 1, Xe = "";
function Pt(e, t) {
  Gt[Zt++] = el, Gt[Zt++] = br, br = e, el = t;
}
function Sa(e, t, n) {
  Pe[xe++] = Ye, Pe[xe++] = Xe, Pe[xe++] = Ot, Ot = e;
  var r = Ye;
  e = Xe;
  var l = 32 - Oe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ye = 1 << 32 - Oe(t) + l | n << l | r, Xe = i + e;
  } else Ye = 1 << i | n << l | r, Xe = e;
}
function So(e) {
  e.return !== null && (Pt(e, 1), Sa(e, 1, 0));
}
function wo(e) {
  for (; e === br; ) br = Gt[--Zt], Gt[Zt] = null, el = Gt[--Zt], Gt[Zt] = null;
  for (; e === Ot; ) Ot = Pe[--xe], Pe[xe] = null, Xe = Pe[--xe], Pe[xe] = null, Ye = Pe[--xe], Pe[xe] = null;
}
var we = null, Se = null, U = !1, Me = null;
function wa(e, t) {
  var n = Ne(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Iu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, we = e, Se = dt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, we = e, Se = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ot !== null ? { id: Ye, overflow: Xe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ne(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, we = e, Se = null, !0) : !1;
    default:
      return !1;
  }
}
function Li(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Mi(e) {
  if (U) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Iu(e, t)) {
        if (Li(e)) throw Error(g(418));
        t = dt(n.nextSibling);
        var r = we;
        t && Iu(e, t) ? wa(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, we = e);
      }
    } else {
      if (Li(e)) throw Error(g(418));
      e.flags = e.flags & -4097 | 2, U = !1, we = e;
    }
  }
}
function Lu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  we = e;
}
function Cr(e) {
  if (e !== we) return !1;
  if (!U) return Lu(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Di(e.type, e.memoizedProps)), t && (t = Se)) {
    if (Li(e)) throw Ea(), Error(g(418));
    for (; t; ) wa(e, t), t = dt(t.nextSibling);
  }
  if (Lu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(g(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = dt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = we ? dt(e.stateNode.nextSibling) : null;
  return !0;
}
function Ea() {
  for (var e = Se; e; ) e = dt(e.nextSibling);
}
function an() {
  Se = we = null, U = !1;
}
function Eo(e) {
  Me === null ? Me = [e] : Me.push(e);
}
var Ed = et.ReactCurrentBatchConfig;
function _n(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(g(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(g(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(g(284));
    if (!n._owner) throw Error(g(290, e));
  }
  return e;
}
function _r(e, t) {
  throw e = Object.prototype.toString.call(t), Error(g(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Mu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ca(e) {
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
    return f = vt(f, a), f.index = 0, f.sibling = null, f;
  }
  function i(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = ti(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var w = d.type;
    return w === Vt ? m(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === w || typeof w == "object" && w !== null && w.$$typeof === rt && Mu(w) === a.type) ? (v = l(a, d.props), v.ref = _n(f, a, d), v.return = f, v) : (v = $r(d.type, d.key, d.props, null, f.mode, v), v.ref = _n(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = ni(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, v, w) {
    return a === null || a.tag !== 7 ? (a = Lt(d, f.mode, v, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = ti("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case pr:
          return d = $r(a.type, a.key, a.props, null, f.mode, d), d.ref = _n(f, null, a), d.return = f, d;
        case Bt:
          return a = ni(a, f.mode, d), a.return = f, a;
        case rt:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (zn(a) || kn(a)) return a = Lt(a, f.mode, d, null), a.return = f, a;
      _r(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var w = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return w !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case pr:
          return d.key === w ? s(f, a, d, v) : null;
        case Bt:
          return d.key === w ? c(f, a, d, v) : null;
        case rt:
          return w = d._init, p(
            f,
            a,
            w(d._payload),
            v
          );
      }
      if (zn(d) || kn(d)) return w !== null ? null : m(f, a, d, v, null);
      _r(f, d);
    }
    return null;
  }
  function S(f, a, d, v, w) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(a, f, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case pr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, w);
        case Bt:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, w);
        case rt:
          var P = v._init;
          return S(f, a, d, P(v._payload), w);
      }
      if (zn(v) || kn(v)) return f = f.get(d) || null, m(a, f, v, w, null);
      _r(a, v);
    }
    return null;
  }
  function y(f, a, d, v) {
    for (var w = null, P = null, _ = a, x = a = 0, A = null; _ !== null && x < d.length; x++) {
      _.index > x ? (A = _, _ = null) : A = _.sibling;
      var N = p(f, _, d[x], v);
      if (N === null) {
        _ === null && (_ = A);
        break;
      }
      e && _ && N.alternate === null && t(f, _), a = i(N, a, x), P === null ? w = N : P.sibling = N, P = N, _ = A;
    }
    if (x === d.length) return n(f, _), U && Pt(f, x), w;
    if (_ === null) {
      for (; x < d.length; x++) _ = h(f, d[x], v), _ !== null && (a = i(_, a, x), P === null ? w = _ : P.sibling = _, P = _);
      return U && Pt(f, x), w;
    }
    for (_ = r(f, _); x < d.length; x++) A = S(_, f, x, d[x], v), A !== null && (e && A.alternate !== null && _.delete(A.key === null ? x : A.key), a = i(A, a, x), P === null ? w = A : P.sibling = A, P = A);
    return e && _.forEach(function(ye) {
      return t(f, ye);
    }), U && Pt(f, x), w;
  }
  function k(f, a, d, v) {
    var w = kn(d);
    if (typeof w != "function") throw Error(g(150));
    if (d = w.call(d), d == null) throw Error(g(151));
    for (var P = w = null, _ = a, x = a = 0, A = null, N = d.next(); _ !== null && !N.done; x++, N = d.next()) {
      _.index > x ? (A = _, _ = null) : A = _.sibling;
      var ye = p(f, _, N.value, v);
      if (ye === null) {
        _ === null && (_ = A);
        break;
      }
      e && _ && ye.alternate === null && t(f, _), a = i(ye, a, x), P === null ? w = ye : P.sibling = ye, P = ye, _ = A;
    }
    if (N.done) return n(
      f,
      _
    ), U && Pt(f, x), w;
    if (_ === null) {
      for (; !N.done; x++, N = d.next()) N = h(f, N.value, v), N !== null && (a = i(N, a, x), P === null ? w = N : P.sibling = N, P = N);
      return U && Pt(f, x), w;
    }
    for (_ = r(f, _); !N.done; x++, N = d.next()) N = S(_, f, x, N.value, v), N !== null && (e && N.alternate !== null && _.delete(N.key === null ? x : N.key), a = i(N, a, x), P === null ? w = N : P.sibling = N, P = N);
    return e && _.forEach(function(Et) {
      return t(f, Et);
    }), U && Pt(f, x), w;
  }
  function D(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Vt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case pr:
          e: {
            for (var w = d.key, P = a; P !== null; ) {
              if (P.key === w) {
                if (w = d.type, w === Vt) {
                  if (P.tag === 7) {
                    n(f, P.sibling), a = l(P, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (P.elementType === w || typeof w == "object" && w !== null && w.$$typeof === rt && Mu(w) === P.type) {
                  n(f, P.sibling), a = l(P, d.props), a.ref = _n(f, P, d), a.return = f, f = a;
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            d.type === Vt ? (a = Lt(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = $r(d.type, d.key, d.props, null, f.mode, v), v.ref = _n(f, a, d), v.return = f, f = v);
          }
          return o(f);
        case Bt:
          e: {
            for (P = d.key; a !== null; ) {
              if (a.key === P) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = ni(d, f.mode, v), a.return = f, f = a;
          }
          return o(f);
        case rt:
          return P = d._init, D(f, a, P(d._payload), v);
      }
      if (zn(d)) return y(f, a, d, v);
      if (kn(d)) return k(f, a, d, v);
      _r(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = ti(d, f.mode, v), a.return = f, f = a), o(f)) : n(f, a);
  }
  return D;
}
var cn = Ca(!0), _a = Ca(!1), tl = St(null), nl = null, Jt = null, Co = null;
function _o() {
  Co = Jt = nl = null;
}
function Po(e) {
  var t = tl.current;
  j(tl), e._currentValue = t;
}
function Oi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function ln(e, t) {
  nl = e, Co = Jt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (me = !0), e.firstContext = null);
}
function De(e) {
  var t = e._currentValue;
  if (Co !== e) if (e = { context: e, memoizedValue: t, next: null }, Jt === null) {
    if (nl === null) throw Error(g(308));
    Jt = e, nl.dependencies = { lanes: 0, firstContext: e };
  } else Jt = Jt.next = e;
  return t;
}
var zt = null;
function xo(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function Pa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, xo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, qe(e, r);
}
function qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var lt = !1;
function No(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function xa(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ge(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function pt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, L & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, qe(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, xo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, qe(e, n);
}
function Mr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fo(e, n);
  }
}
function Ou(e, t) {
  var n = e.updateQueue, r = e.alternate;
  if (r !== null && (r = r.updateQueue, n === r)) {
    var l = null, i = null;
    if (n = n.firstBaseUpdate, n !== null) {
      do {
        var o = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
        i === null ? l = i = o : i = i.next = o, n = n.next;
      } while (n !== null);
      i === null ? l = i = t : i = i.next = t;
    } else l = i = t;
    n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: i, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
  }
  e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
}
function rl(e, t, n, r) {
  var l = e.updateQueue;
  lt = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, c = s.next;
    s.next = null, o === null ? i = c : o.next = c, o = s;
    var m = e.alternate;
    m !== null && (m = m.updateQueue, u = m.lastBaseUpdate, u !== o && (u === null ? m.firstBaseUpdate = c : u.next = c, m.lastBaseUpdate = s));
  }
  if (i !== null) {
    var h = l.baseState;
    o = 0, m = c = s = null, u = i;
    do {
      var p = u.lane, S = u.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: S,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var y = e, k = u;
          switch (p = t, S = n, k.tag) {
            case 1:
              if (y = k.payload, typeof y == "function") {
                h = y.call(S, h, p);
                break e;
              }
              h = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = k.payload, p = typeof y == "function" ? y.call(S, h, p) : y, p == null) break e;
              h = B({}, h, p);
              break e;
            case 2:
              lt = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else S = { eventTime: S, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (c = m = S, s = h) : m = m.next = S, o |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (m === null && (s = h), l.baseState = s, l.firstBaseUpdate = c, l.lastBaseUpdate = m, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    jt |= o, e.lanes = o, e.memoizedState = h;
  }
}
function Fu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(g(191, l));
      l.call(r);
    }
  }
}
var sr = {}, Ve = St(sr), qn = St(sr), bn = St(sr);
function Dt(e) {
  if (e === sr) throw Error(g(174));
  return e;
}
function zo(e, t) {
  switch (O(bn, t), O(qn, e), O(Ve, sr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : hi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = hi(t, e);
  }
  j(Ve), O(Ve, t);
}
function fn() {
  j(Ve), j(qn), j(bn);
}
function Na(e) {
  Dt(bn.current);
  var t = Dt(Ve.current), n = hi(t, e.type);
  t !== n && (O(qn, e), O(Ve, n));
}
function Do(e) {
  qn.current === e && (j(Ve), j(qn));
}
var $ = St(0);
function ll(e) {
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
var Gl = [];
function To() {
  for (var e = 0; e < Gl.length; e++) Gl[e]._workInProgressVersionPrimary = null;
  Gl.length = 0;
}
var Or = et.ReactCurrentDispatcher, Zl = et.ReactCurrentBatchConfig, Ft = 0, H = null, Y = null, J = null, il = !1, jn = !1, er = 0, Cd = 0;
function re() {
  throw Error(g(321));
}
function Ro(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!je(e[n], t[n])) return !1;
  return !0;
}
function Io(e, t, n, r, l, i) {
  if (Ft = i, H = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Or.current = e === null || e.memoizedState === null ? Nd : zd, e = n(r, l), jn) {
    i = 0;
    do {
      if (jn = !1, er = 0, 25 <= i) throw Error(g(301));
      i += 1, J = Y = null, t.updateQueue = null, Or.current = Dd, e = n(r, l);
    } while (jn);
  }
  if (Or.current = ol, t = Y !== null && Y.next !== null, Ft = 0, J = Y = H = null, il = !1, t) throw Error(g(300));
  return e;
}
function Lo() {
  var e = er !== 0;
  return er = 0, e;
}
function Ue() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? H.memoizedState = J = e : J = J.next = e, J;
}
function Te() {
  if (Y === null) {
    var e = H.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = J === null ? H.memoizedState : J.next;
  if (t !== null) J = t, Y = e;
  else {
    if (e === null) throw Error(g(310));
    Y = e, e = { memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null }, J === null ? H.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function tr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Jl(e) {
  var t = Te(), n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = Y, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var u = o = null, s = null, c = i;
    do {
      var m = c.lane;
      if ((Ft & m) === m) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = h, o = r) : s = s.next = h, H.lanes |= m, jt |= m;
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? o = r : s.next = u, je(r, t.memoizedState) || (me = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, H.lanes |= i, jt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ql(e) {
  var t = Te(), n = t.queue;
  if (n === null) throw Error(g(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    je(i, t.memoizedState) || (me = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function za() {
}
function Da(e, t) {
  var n = H, r = Te(), l = t(), i = !je(r.memoizedState, l);
  if (i && (r.memoizedState = l, me = !0), r = r.queue, Mo(Ia.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, nr(9, Ra.bind(null, n, r, l, t), void 0, null), q === null) throw Error(g(349));
    Ft & 30 || Ta(n, t, l);
  }
  return l;
}
function Ta(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = H.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, H.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ra(e, t, n, r) {
  t.value = n, t.getSnapshot = r, La(t) && Ma(e);
}
function Ia(e, t, n) {
  return n(function() {
    La(t) && Ma(e);
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
function Ma(e) {
  var t = qe(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function ju(e) {
  var t = Ue();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: tr, lastRenderedState: e }, t.queue = e, e = e.dispatch = xd.bind(null, H, e), [t.memoizedState, e];
}
function nr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = H.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, H.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Oa() {
  return Te().memoizedState;
}
function Fr(e, t, n, r) {
  var l = Ue();
  H.flags |= e, l.memoizedState = nr(1 | t, n, void 0, r === void 0 ? null : r);
}
function kl(e, t, n, r) {
  var l = Te();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (i = o.destroy, r !== null && Ro(r, o.deps)) {
      l.memoizedState = nr(t, n, i, r);
      return;
    }
  }
  H.flags |= e, l.memoizedState = nr(1 | t, n, i, r);
}
function Au(e, t) {
  return Fr(8390656, 8, e, t);
}
function Mo(e, t) {
  return kl(2048, 8, e, t);
}
function Fa(e, t) {
  return kl(4, 2, e, t);
}
function ja(e, t) {
  return kl(4, 4, e, t);
}
function Aa(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ua(e, t, n) {
  return n = n != null ? n.concat([e]) : null, kl(4, 4, Aa.bind(null, t, e), n);
}
function Oo() {
}
function $a(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ro(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ha(e, t) {
  var n = Te();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ro(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ba(e, t, n) {
  return Ft & 21 ? (je(n, t) || (n = Ys(), H.lanes |= n, jt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, me = !0), e.memoizedState = n);
}
function _d(e, t) {
  var n = M;
  M = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = Zl.transition;
  Zl.transition = {};
  try {
    e(!1), t();
  } finally {
    M = n, Zl.transition = r;
  }
}
function Va() {
  return Te().memoizedState;
}
function Pd(e, t, n) {
  var r = ht(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Wa(e)) Qa(t, n);
  else if (n = Pa(e, t, n, r), n !== null) {
    var l = ae();
    Fe(n, e, r, l), Ka(n, t, r);
  }
}
function xd(e, t, n) {
  var r = ht(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Wa(e)) Qa(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, je(u, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, xo(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Pa(e, t, l, r), n !== null && (l = ae(), Fe(n, e, r, l), Ka(n, t, r));
  }
}
function Wa(e) {
  var t = e.alternate;
  return e === H || t !== null && t === H;
}
function Qa(e, t) {
  jn = il = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ka(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, fo(e, n);
  }
}
var ol = { readContext: De, useCallback: re, useContext: re, useEffect: re, useImperativeHandle: re, useInsertionEffect: re, useLayoutEffect: re, useMemo: re, useReducer: re, useRef: re, useState: re, useDebugValue: re, useDeferredValue: re, useTransition: re, useMutableSource: re, useSyncExternalStore: re, useId: re, unstable_isNewReconciler: !1 }, Nd = { readContext: De, useCallback: function(e, t) {
  return Ue().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: De, useEffect: Au, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fr(
    4194308,
    4,
    Aa.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Fr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Fr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = Ue();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = Ue();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Pd.bind(null, H, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = Ue();
  return e = { current: e }, t.memoizedState = e;
}, useState: ju, useDebugValue: Oo, useDeferredValue: function(e) {
  return Ue().memoizedState = e;
}, useTransition: function() {
  var e = ju(!1), t = e[0];
  return e = _d.bind(null, e[1]), Ue().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = H, l = Ue();
  if (U) {
    if (n === void 0) throw Error(g(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(g(349));
    Ft & 30 || Ta(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Au(Ia.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, nr(9, Ra.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = Ue(), t = q.identifierPrefix;
  if (U) {
    var n = Xe, r = Ye;
    n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = er++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Cd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, zd = {
  readContext: De,
  useCallback: $a,
  useContext: De,
  useEffect: Mo,
  useImperativeHandle: Ua,
  useInsertionEffect: Fa,
  useLayoutEffect: ja,
  useMemo: Ha,
  useReducer: Jl,
  useRef: Oa,
  useState: function() {
    return Jl(tr);
  },
  useDebugValue: Oo,
  useDeferredValue: function(e) {
    var t = Te();
    return Ba(t, Y.memoizedState, e);
  },
  useTransition: function() {
    var e = Jl(tr)[0], t = Te().memoizedState;
    return [e, t];
  },
  useMutableSource: za,
  useSyncExternalStore: Da,
  useId: Va,
  unstable_isNewReconciler: !1
}, Dd = { readContext: De, useCallback: $a, useContext: De, useEffect: Mo, useImperativeHandle: Ua, useInsertionEffect: Fa, useLayoutEffect: ja, useMemo: Ha, useReducer: ql, useRef: Oa, useState: function() {
  return ql(tr);
}, useDebugValue: Oo, useDeferredValue: function(e) {
  var t = Te();
  return Y === null ? t.memoizedState = e : Ba(t, Y.memoizedState, e);
}, useTransition: function() {
  var e = ql(tr)[0], t = Te().memoizedState;
  return [e, t];
}, useMutableSource: za, useSyncExternalStore: Da, useId: Va, unstable_isNewReconciler: !1 };
function Ie(e, t) {
  if (e && e.defaultProps) {
    t = B({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Fi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Sl = { isMounted: function(e) {
  return (e = e._reactInternals) ? $t(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = ht(e), i = Ge(r, l);
  i.payload = t, n != null && (i.callback = n), t = pt(e, i, l), t !== null && (Fe(t, e, l, r), Mr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ae(), l = ht(e), i = Ge(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = pt(e, i, l), t !== null && (Fe(t, e, l, r), Mr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ae(), r = ht(e), l = Ge(n, r);
  l.tag = 2, t != null && (l.callback = t), t = pt(e, l, r), t !== null && (Fe(t, e, r, n), Mr(t, e, r));
} };
function Uu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Xn(n, r) || !Xn(l, i) : !0;
}
function Ya(e, t, n) {
  var r = !1, l = yt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = De(i) : (l = ve(t) ? Mt : ue.current, r = t.contextTypes, i = (r = r != null) ? sn(e, l) : yt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Sl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function $u(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Sl.enqueueReplaceState(t, t.state, null);
}
function ji(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, No(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = De(i) : (i = ve(t) ? Mt : ue.current, l.context = sn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Fi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Sl.enqueueReplaceState(l, l.state, null), rl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function dn(e, t) {
  try {
    var n = "", r = t;
    do
      n += nf(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function bl(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Ai(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Td = typeof WeakMap == "function" ? WeakMap : Map;
function Xa(e, t, n) {
  n = Ge(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    sl || (sl = !0, Xi = r), Ai(e, t);
  }, n;
}
function Ga(e, t, n) {
  n = Ge(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Ai(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Ai(e, t), typeof r != "function" && (mt === null ? mt = /* @__PURE__ */ new Set([this]) : mt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Hu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Td();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Wd.bind(null, e, t, n), t.then(e, e));
}
function Bu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Vu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ge(-1, 1), t.tag = 2, pt(n, t, 1))), n.lanes |= 1), e);
}
var Rd = et.ReactCurrentOwner, me = !1;
function se(e, t, n, r) {
  t.child = e === null ? _a(t, null, n, r) : cn(t, e.child, n, r);
}
function Wu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return ln(t, l), r = Io(e, t, n, r, i, l), n = Lo(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, be(e, t, l)) : (U && n && So(t), t.flags |= 1, se(e, t, r, l), t.child);
}
function Qu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Vo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, Za(e, t, i, r, l)) : (e = $r(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Xn, n(o, r) && e.ref === t.ref) return be(e, t, l);
  }
  return t.flags |= 1, e = vt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function Za(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Xn(i, r) && e.ref === t.ref) if (me = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (me = !0);
    else return t.lanes = e.lanes, be(e, t, l);
  }
  return Ui(e, t, n, r, l);
}
function Ja(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, O(bt, ke), ke |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, O(bt, ke), ke |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, O(bt, ke), ke |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, O(bt, ke), ke |= r;
  return se(e, t, l, n), t.child;
}
function qa(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ui(e, t, n, r, l) {
  var i = ve(n) ? Mt : ue.current;
  return i = sn(t, i), ln(t, l), n = Io(e, t, n, r, i, l), r = Lo(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, be(e, t, l)) : (U && r && So(t), t.flags |= 1, se(e, t, n, l), t.child);
}
function Ku(e, t, n, r, l) {
  if (ve(n)) {
    var i = !0;
    qr(t);
  } else i = !1;
  if (ln(t, l), t.stateNode === null) jr(e, t), Ya(t, n, r), ji(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = De(c) : (c = ve(n) ? Mt : ue.current, c = sn(t, c));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== c) && $u(t, o, r, c), lt = !1;
    var p = t.memoizedState;
    o.state = p, rl(t, r, o, l), s = t.memoizedState, u !== r || p !== s || he.current || lt ? (typeof m == "function" && (Fi(t, n, m, r), s = t.memoizedState), (u = lt || Uu(t, n, u, r, p, s, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = c, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, xa(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Ie(t.type, u), o.props = c, h = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = De(s) : (s = ve(n) ? Mt : ue.current, s = sn(t, s));
    var S = n.getDerivedStateFromProps;
    (m = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || p !== s) && $u(t, o, r, s), lt = !1, p = t.memoizedState, o.state = p, rl(t, r, o, l);
    var y = t.memoizedState;
    u !== h || p !== y || he.current || lt ? (typeof S == "function" && (Fi(t, n, S, r), y = t.memoizedState), (c = lt || Uu(t, n, c, r, p, y, s) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return $i(e, t, n, r, i, l);
}
function $i(e, t, n, r, l, i) {
  qa(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Ru(t, n, !1), be(e, t, i);
  r = t.stateNode, Rd.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = cn(t, e.child, null, i), t.child = cn(t, null, u, i)) : se(e, t, u, i), t.memoizedState = r.state, l && Ru(t, n, !0), t.child;
}
function ba(e) {
  var t = e.stateNode;
  t.pendingContext ? Tu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tu(e, t.context, !1), zo(e, t.containerInfo);
}
function Yu(e, t, n, r, l) {
  return an(), Eo(l), t.flags |= 256, se(e, t, n, r), t.child;
}
var Hi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Bi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ec(e, t, n) {
  var r = t.pendingProps, l = $.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), O($, l & 1), e === null)
    return Mi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Cl(o, r, 0, null), e = Lt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Bi(n), t.memoizedState = Hi, e) : Fo(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Id(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = vt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = vt(u, i) : (i = Lt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Bi(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Hi, r;
  }
  return i = e.child, e = i.sibling, r = vt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Fo(e, t) {
  return t = Cl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Pr(e, t, n, r) {
  return r !== null && Eo(r), cn(t, e.child, null, n), e = Fo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Id(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = bl(Error(g(422))), Pr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Cl({ mode: "visible", children: r.children }, l, 0, null), i = Lt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && cn(t, e.child, null, o), t.child.memoizedState = Bi(o), t.memoizedState = Hi, i);
  if (!(t.mode & 1)) return Pr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(g(419)), r = bl(i, r, void 0), Pr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, me || u) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, qe(e, l), Fe(r, e, l, -1));
    }
    return Bo(), r = bl(Error(g(421))), Pr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Qd.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Se = dt(l.nextSibling), we = t, U = !0, Me = null, e !== null && (Pe[xe++] = Ye, Pe[xe++] = Xe, Pe[xe++] = Ot, Ye = e.id, Xe = e.overflow, Ot = t), t = Fo(t, r.children), t.flags |= 4096, t);
}
function Xu(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Oi(e.return, t, n);
}
function ei(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function tc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (se(e, t, r.children, n), r = $.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Xu(e, n, t);
      else if (e.tag === 19) Xu(e, n, t);
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
  if (O($, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ll(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ei(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ll(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ei(t, !0, n, null, i);
      break;
    case "together":
      ei(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function jr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function be(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), jt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(g(153));
  if (t.child !== null) {
    for (e = t.child, n = vt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = vt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ld(e, t, n) {
  switch (t.tag) {
    case 3:
      ba(t), an();
      break;
    case 5:
      Na(t);
      break;
    case 1:
      ve(t.type) && qr(t);
      break;
    case 4:
      zo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      O(tl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (O($, $.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ec(e, t, n) : (O($, $.current & 1), e = be(e, t, n), e !== null ? e.sibling : null);
      O($, $.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return tc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), O($, $.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, Ja(e, t, n);
  }
  return be(e, t, n);
}
var nc, Vi, rc, lc;
nc = function(e, t) {
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
Vi = function() {
};
rc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Dt(Ve.current);
    var i = null;
    switch (n) {
      case "input":
        l = fi(e, l), r = fi(e, r), i = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = mi(e, l), r = mi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Zr);
    }
    vi(n, r);
    var o;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Hn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Hn.hasOwnProperty(c) ? (s != null && c === "onScroll" && F("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
lc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Pn(e, t) {
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
function le(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Md(e, t, n) {
  var r = t.pendingProps;
  switch (wo(t), t.tag) {
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
      return le(t), null;
    case 1:
      return ve(t.type) && Jr(), le(t), null;
    case 3:
      return r = t.stateNode, fn(), j(he), j(ue), To(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Cr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (Ji(Me), Me = null))), Vi(e, t), le(t), null;
    case 5:
      Do(t);
      var l = Dt(bn.current);
      if (n = t.type, e !== null && t.stateNode != null) rc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(g(166));
          return le(t), null;
        }
        if (e = Dt(Ve.current), Cr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[He] = t, r[Jn] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              F("cancel", r), F("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              F("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Tn.length; l++) F(Tn[l], r);
              break;
            case "source":
              F("error", r);
              break;
            case "img":
            case "image":
            case "link":
              F(
                "error",
                r
              ), F("load", r);
              break;
            case "details":
              F("toggle", r);
              break;
            case "input":
              ru(r, i), F("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, F("invalid", r);
              break;
            case "textarea":
              iu(r, i), F("invalid", r);
          }
          vi(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Er(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Er(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Hn.hasOwnProperty(o) && u != null && o === "onScroll" && F("scroll", r);
          }
          switch (n) {
            case "input":
              mr(r), lu(r, i, !0);
              break;
            case "textarea":
              mr(r), ou(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Zr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Is(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[He] = t, e[Jn] = r, nc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = gi(n, r), n) {
              case "dialog":
                F("cancel", e), F("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                F("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Tn.length; l++) F(Tn[l], e);
                l = r;
                break;
              case "source":
                F("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                F(
                  "error",
                  e
                ), F("load", e), l = r;
                break;
              case "details":
                F("toggle", e), l = r;
                break;
              case "input":
                ru(e, r), l = fi(e, r), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), F("invalid", e);
                break;
              case "textarea":
                iu(e, r), l = mi(e, r), F("invalid", e);
                break;
              default:
                l = r;
            }
            vi(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? Os(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ls(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Bn(e, s) : typeof s == "number" && Bn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Hn.hasOwnProperty(i) ? s != null && i === "onScroll" && F("scroll", e) : s != null && io(e, i, s, o));
            }
            switch (n) {
              case "input":
                mr(e), lu(e, r, !1);
                break;
              case "textarea":
                mr(e), ou(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + gt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? en(e, !!r.multiple, i, !1) : r.defaultValue != null && en(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Zr);
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
      return le(t), null;
    case 6:
      if (e && t.stateNode != null) lc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(g(166));
        if (n = Dt(bn.current), Dt(Ve.current), Cr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[He] = t, (i = r.nodeValue !== n) && (e = we, e !== null)) switch (e.tag) {
            case 3:
              Er(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Er(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[He] = t, t.stateNode = r;
      }
      return le(t), null;
    case 13:
      if (j($), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && Se !== null && t.mode & 1 && !(t.flags & 128)) Ea(), an(), t.flags |= 98560, i = !1;
        else if (i = Cr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(g(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(g(317));
            i[He] = t;
          } else an(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          le(t), i = !1;
        } else Me !== null && (Ji(Me), Me = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || $.current & 1 ? X === 0 && (X = 3) : Bo())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
    case 4:
      return fn(), Vi(e, t), e === null && Gn(t.stateNode.containerInfo), le(t), null;
    case 10:
      return Po(t.type._context), le(t), null;
    case 17:
      return ve(t.type) && Jr(), le(t), null;
    case 19:
      if (j($), i = t.memoizedState, i === null) return le(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) Pn(i, !1);
      else {
        if (X !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = ll(e), o !== null) {
            for (t.flags |= 128, Pn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return O($, $.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Q() > pn && (t.flags |= 128, r = !0, Pn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ll(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Pn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U) return le(t), null;
        } else 2 * Q() - i.renderingStartTime > pn && n !== 1073741824 && (t.flags |= 128, r = !0, Pn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Q(), t.sibling = null, n = $.current, O($, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
    case 22:
    case 23:
      return Ho(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(g(156, t.tag));
}
function Od(e, t) {
  switch (wo(t), t.tag) {
    case 1:
      return ve(t.type) && Jr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return fn(), j(he), j(ue), To(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Do(t), null;
    case 13:
      if (j($), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(g(340));
        an();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return j($), null;
    case 4:
      return fn(), null;
    case 10:
      return Po(t.type._context), null;
    case 22:
    case 23:
      return Ho(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var xr = !1, oe = !1, Fd = typeof WeakSet == "function" ? WeakSet : Set, E = null;
function qt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    V(e, t, r);
  }
  else n.current = null;
}
function Wi(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var Gu = !1;
function jd(e, t) {
  if (Ni = Yr, e = aa(), ko(e)) {
    if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
    else e: {
      n = (n = e.ownerDocument) && n.defaultView || window;
      var r = n.getSelection && n.getSelection();
      if (r && r.rangeCount !== 0) {
        n = r.anchorNode;
        var l = r.anchorOffset, i = r.focusNode;
        r = r.focusOffset;
        try {
          n.nodeType, i.nodeType;
        } catch {
          n = null;
          break e;
        }
        var o = 0, u = -1, s = -1, c = 0, m = 0, h = e, p = null;
        t: for (; ; ) {
          for (var S; h !== n || l !== 0 && h.nodeType !== 3 || (u = o + l), h !== i || r !== 0 && h.nodeType !== 3 || (s = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (S = h.firstChild) !== null; )
            p = h, h = S;
          for (; ; ) {
            if (h === e) break t;
            if (p === n && ++c === l && (u = o), p === i && ++m === r && (s = o), (S = h.nextSibling) !== null) break;
            h = p, p = h.parentNode;
          }
          h = S;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (zi = { focusedElem: e, selectionRange: n }, Yr = !1, E = t; E !== null; ) if (t = E, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, E = e;
  else for (; E !== null; ) {
    t = E;
    try {
      var y = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (y !== null) {
            var k = y.memoizedProps, D = y.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? k : Ie(t.type, k), D);
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
      V(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, E = e;
      break;
    }
    E = t.return;
  }
  return y = Gu, Gu = !1, y;
}
function An(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Wi(t, n, i);
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
function Qi(e) {
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
function ic(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, ic(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[He], delete t[Jn], delete t[Ri], delete t[kd], delete t[Sd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function oc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Zu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || oc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ki(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Zr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ki(e, t, n), e = e.sibling; e !== null; ) Ki(e, t, n), e = e.sibling;
}
function Yi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Yi(e, t, n), e = e.sibling; e !== null; ) Yi(e, t, n), e = e.sibling;
}
var ee = null, Le = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) uc(e, t, n), n = n.sibling;
}
function uc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function") try {
    Be.onCommitFiberUnmount(pl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      oe || qt(n, t);
    case 6:
      var r = ee, l = Le;
      ee = null, tt(e, t, n), ee = r, Le = l, ee !== null && (Le ? (e = ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null && (Le ? (e = ee, n = n.stateNode, e.nodeType === 8 ? Yl(e.parentNode, n) : e.nodeType === 1 && Yl(e, n), Kn(e)) : Yl(ee, n.stateNode));
      break;
    case 4:
      r = ee, l = Le, ee = n.stateNode.containerInfo, Le = !0, tt(e, t, n), ee = r, Le = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Wi(n, t, o), l = l.next;
        } while (l !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (!oe && (qt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        V(n, t, u);
      }
      tt(e, t, n);
      break;
    case 21:
      tt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (oe = (r = oe) || n.memoizedState !== null, tt(e, t, n), oe = r) : tt(e, t, n);
      break;
    default:
      tt(e, t, n);
  }
}
function Ju(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Fd()), t.forEach(function(r) {
      var l = Kd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Re(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ee = u.stateNode, Le = !1;
            break e;
          case 3:
            ee = u.stateNode.containerInfo, Le = !0;
            break e;
          case 4:
            ee = u.stateNode.containerInfo, Le = !0;
            break e;
        }
        u = u.return;
      }
      if (ee === null) throw Error(g(160));
      uc(i, o, l), ee = null, Le = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      V(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) sc(t, e), t = t.sibling;
}
function sc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Re(t, e), Ae(e), r & 4) {
        try {
          An(3, e, e.return), wl(3, e);
        } catch (k) {
          V(e, e.return, k);
        }
        try {
          An(5, e, e.return);
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 1:
      Re(t, e), Ae(e), r & 512 && n !== null && qt(n, n.return);
      break;
    case 5:
      if (Re(t, e), Ae(e), r & 512 && n !== null && qt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Bn(l, "");
        } catch (k) {
          V(e, e.return, k);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Ts(l, i), gi(u, o);
          var c = gi(u, i);
          for (o = 0; o < s.length; o += 2) {
            var m = s[o], h = s[o + 1];
            m === "style" ? Os(l, h) : m === "dangerouslySetInnerHTML" ? Ls(l, h) : m === "children" ? Bn(l, h) : io(l, m, h, c);
          }
          switch (u) {
            case "input":
              di(l, i);
              break;
            case "textarea":
              Rs(l, i);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var S = i.value;
              S != null ? en(l, !!i.multiple, S, !1) : p !== !!i.multiple && (i.defaultValue != null ? en(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : en(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[Jn] = i;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 6:
      if (Re(t, e), Ae(e), r & 4) {
        if (e.stateNode === null) throw Error(g(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (k) {
          V(e, e.return, k);
        }
      }
      break;
    case 3:
      if (Re(t, e), Ae(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Kn(t.containerInfo);
      } catch (k) {
        V(e, e.return, k);
      }
      break;
    case 4:
      Re(t, e), Ae(e);
      break;
    case 13:
      Re(t, e), Ae(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Uo = Q())), r & 4 && Ju(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (oe = (c = oe) || m, Re(t, e), oe = c) : Re(t, e), Ae(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (E = e, m = e.child; m !== null; ) {
          for (h = E = m; E !== null; ) {
            switch (p = E, S = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                An(4, p, p.return);
                break;
              case 1:
                qt(p, p.return);
                var y = p.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (k) {
                    V(r, n, k);
                  }
                }
                break;
              case 5:
                qt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  bu(h);
                  continue;
                }
            }
            S !== null ? (S.return = p, E = S) : bu(h);
          }
          m = m.sibling;
        }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                l = h.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Ms("display", o));
              } catch (k) {
                V(e, e.return, k);
              }
            }
          } else if (h.tag === 6) {
            if (m === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (k) {
              V(e, e.return, k);
            }
          } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
            h.child.return = h, h = h.child;
            continue;
          }
          if (h === e) break e;
          for (; h.sibling === null; ) {
            if (h.return === null || h.return === e) break e;
            m === h && (m = null), h = h.return;
          }
          m === h && (m = null), h.sibling.return = h.return, h = h.sibling;
        }
      }
      break;
    case 19:
      Re(t, e), Ae(e), r & 4 && Ju(e);
      break;
    case 21:
      break;
    default:
      Re(
        t,
        e
      ), Ae(e);
  }
}
function Ae(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (oc(n)) {
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
          r.flags & 32 && (Bn(l, ""), r.flags &= -33);
          var i = Zu(e);
          Yi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = Zu(e);
          Ki(e, u, o);
          break;
        default:
          throw Error(g(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Ad(e, t, n) {
  E = e, ac(e);
}
function ac(e, t, n) {
  for (var r = (e.mode & 1) !== 0; E !== null; ) {
    var l = E, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || xr;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || oe;
        u = xr;
        var c = oe;
        if (xr = o, (oe = s) && !c) for (E = l; E !== null; ) o = E, s = o.child, o.tag === 22 && o.memoizedState !== null ? es(l) : s !== null ? (s.return = o, E = s) : es(l);
        for (; i !== null; ) E = i, ac(i), i = i.sibling;
        E = l, xr = u, oe = c;
      }
      qu(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, E = i) : qu(e);
  }
}
function qu(e) {
  for (; E !== null; ) {
    var t = E;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            oe || wl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !oe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ie(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Fu(t, i, r);
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
              Fu(t, o, n);
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
              var c = t.alternate;
              if (c !== null) {
                var m = c.memoizedState;
                if (m !== null) {
                  var h = m.dehydrated;
                  h !== null && Kn(h);
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
        oe || t.flags & 512 && Qi(t);
      } catch (p) {
        V(t, t.return, p);
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
function bu(e) {
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
function es(e) {
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
            V(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              V(t, l, s);
            }
          }
          var i = t.return;
          try {
            Qi(t);
          } catch (s) {
            V(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Qi(t);
          } catch (s) {
            V(t, o, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      E = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, E = u;
      break;
    }
    E = t.return;
  }
}
var Ud = Math.ceil, ul = et.ReactCurrentDispatcher, jo = et.ReactCurrentOwner, ze = et.ReactCurrentBatchConfig, L = 0, q = null, K = null, te = 0, ke = 0, bt = St(0), X = 0, rr = null, jt = 0, El = 0, Ao = 0, Un = null, pe = null, Uo = 0, pn = 1 / 0, Qe = null, sl = !1, Xi = null, mt = null, Nr = !1, st = null, al = 0, $n = 0, Gi = null, Ar = -1, Ur = 0;
function ae() {
  return L & 6 ? Q() : Ar !== -1 ? Ar : Ar = Q();
}
function ht(e) {
  return e.mode & 1 ? L & 2 && te !== 0 ? te & -te : Ed.transition !== null ? (Ur === 0 && (Ur = Ys()), Ur) : (e = M, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ea(e.type)), e) : 1;
}
function Fe(e, t, n, r) {
  if (50 < $n) throw $n = 0, Gi = null, Error(g(185));
  ir(e, n, r), (!(L & 2) || e !== q) && (e === q && (!(L & 2) && (El |= n), X === 4 && ot(e, te)), ge(e, r), n === 1 && L === 0 && !(t.mode & 1) && (pn = Q() + 500, yl && wt()));
}
function ge(e, t) {
  var n = e.callbackNode;
  Ef(e, t);
  var r = Kr(e, e === q ? te : 0);
  if (r === 0) n !== null && au(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && au(n), t === 1) e.tag === 0 ? wd(ts.bind(null, e)) : ka(ts.bind(null, e)), gd(function() {
      !(L & 6) && wt();
    }), n = null;
    else {
      switch (Xs(r)) {
        case 1:
          n = co;
          break;
        case 4:
          n = Qs;
          break;
        case 16:
          n = Qr;
          break;
        case 536870912:
          n = Ks;
          break;
        default:
          n = Qr;
      }
      n = gc(n, cc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function cc(e, t) {
  if (Ar = -1, Ur = 0, L & 6) throw Error(g(327));
  var n = e.callbackNode;
  if (on() && e.callbackNode !== n) return null;
  var r = Kr(e, e === q ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = cl(e, r);
  else {
    t = r;
    var l = L;
    L |= 2;
    var i = dc();
    (q !== e || te !== t) && (Qe = null, pn = Q() + 500, It(e, t));
    do
      try {
        Bd();
        break;
      } catch (u) {
        fc(e, u);
      }
    while (!0);
    _o(), ul.current = i, L = l, K !== null ? t = 0 : (q = null, te = 0, t = X);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ei(e), l !== 0 && (r = l, t = Zi(e, l))), t === 1) throw n = rr, It(e, 0), ot(e, r), ge(e, Q()), n;
    if (t === 6) ot(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !$d(l) && (t = cl(e, r), t === 2 && (i = Ei(e), i !== 0 && (r = i, t = Zi(e, i))), t === 1)) throw n = rr, It(e, 0), ot(e, r), ge(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(g(345));
        case 2:
          xt(e, pe, Qe);
          break;
        case 3:
          if (ot(e, r), (r & 130023424) === r && (t = Uo + 500 - Q(), 10 < t)) {
            if (Kr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ae(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ti(xt.bind(null, e, pe, Qe), t);
            break;
          }
          xt(e, pe, Qe);
          break;
        case 4:
          if (ot(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Ud(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ti(xt.bind(null, e, pe, Qe), r);
            break;
          }
          xt(e, pe, Qe);
          break;
        case 5:
          xt(e, pe, Qe);
          break;
        default:
          throw Error(g(329));
      }
    }
  }
  return ge(e, Q()), e.callbackNode === n ? cc.bind(null, e) : null;
}
function Zi(e, t) {
  var n = Un;
  return e.current.memoizedState.isDehydrated && (It(e, t).flags |= 256), e = cl(e, t), e !== 2 && (t = pe, pe = n, t !== null && Ji(t)), e;
}
function Ji(e) {
  pe === null ? pe = e : pe.push.apply(pe, e);
}
function $d(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!je(i(), l)) return !1;
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
function ot(e, t) {
  for (t &= ~Ao, t &= ~El, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Oe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ts(e) {
  if (L & 6) throw Error(g(327));
  on();
  var t = Kr(e, 0);
  if (!(t & 1)) return ge(e, Q()), null;
  var n = cl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ei(e);
    r !== 0 && (t = r, n = Zi(e, r));
  }
  if (n === 1) throw n = rr, It(e, 0), ot(e, t), ge(e, Q()), n;
  if (n === 6) throw Error(g(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, xt(e, pe, Qe), ge(e, Q()), null;
}
function $o(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    L = n, L === 0 && (pn = Q() + 500, yl && wt());
  }
}
function At(e) {
  st !== null && st.tag === 0 && !(L & 6) && on();
  var t = L;
  L |= 1;
  var n = ze.transition, r = M;
  try {
    if (ze.transition = null, M = 1, e) return e();
  } finally {
    M = r, ze.transition = n, L = t, !(L & 6) && wt();
  }
}
function Ho() {
  ke = bt.current, j(bt);
}
function It(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, vd(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (wo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && Jr();
        break;
      case 3:
        fn(), j(he), j(ue), To();
        break;
      case 5:
        Do(r);
        break;
      case 4:
        fn();
        break;
      case 13:
        j($);
        break;
      case 19:
        j($);
        break;
      case 10:
        Po(r.type._context);
        break;
      case 22:
      case 23:
        Ho();
    }
    n = n.return;
  }
  if (q = e, K = e = vt(e.current, null), te = ke = t, X = 0, rr = null, Ao = El = jt = 0, pe = Un = null, zt !== null) {
    for (t = 0; t < zt.length; t++) if (n = zt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    zt = null;
  }
  return e;
}
function fc(e, t) {
  do {
    var n = K;
    try {
      if (_o(), Or.current = ol, il) {
        for (var r = H.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        il = !1;
      }
      if (Ft = 0, J = Y = H = null, jn = !1, er = 0, jo.current = null, n === null || n.return === null) {
        X = 1, rr = t, K = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, s = t;
        if (t = te, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, m = u, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var S = Bu(o);
          if (S !== null) {
            S.flags &= -257, Vu(S, o, u, i, t), S.mode & 1 && Hu(i, c, t), t = S, s = c;
            var y = t.updateQueue;
            if (y === null) {
              var k = /* @__PURE__ */ new Set();
              k.add(s), t.updateQueue = k;
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Hu(i, c, t), Bo();
              break e;
            }
            s = Error(g(426));
          }
        } else if (U && u.mode & 1) {
          var D = Bu(o);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), Vu(D, o, u, i, t), Eo(dn(s, u));
            break e;
          }
        }
        i = s = dn(s, u), X !== 4 && (X = 2), Un === null ? Un = [i] : Un.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = Xa(i, s, t);
              Ou(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (mt === null || !mt.has(d)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = Ga(i, u, t);
                Ou(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      mc(n);
    } catch (w) {
      t = w, K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function dc() {
  var e = ul.current;
  return ul.current = ol, e === null ? ol : e;
}
function Bo() {
  (X === 0 || X === 3 || X === 2) && (X = 4), q === null || !(jt & 268435455) && !(El & 268435455) || ot(q, te);
}
function cl(e, t) {
  var n = L;
  L |= 2;
  var r = dc();
  (q !== e || te !== t) && (Qe = null, It(e, t));
  do
    try {
      Hd();
      break;
    } catch (l) {
      fc(e, l);
    }
  while (!0);
  if (_o(), L = n, ul.current = r, K !== null) throw Error(g(261));
  return q = null, te = 0, X;
}
function Hd() {
  for (; K !== null; ) pc(K);
}
function Bd() {
  for (; K !== null && !pf(); ) pc(K);
}
function pc(e) {
  var t = vc(e.alternate, e, ke);
  e.memoizedProps = e.pendingProps, t === null ? mc(e) : K = t, jo.current = null;
}
function mc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Od(n, t), n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        X = 6, K = null;
        return;
      }
    } else if (n = Md(n, t, ke), n !== null) {
      K = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      K = t;
      return;
    }
    K = t = e;
  } while (t !== null);
  X === 0 && (X = 5);
}
function xt(e, t, n) {
  var r = M, l = ze.transition;
  try {
    ze.transition = null, M = 1, Vd(e, t, n, r);
  } finally {
    ze.transition = l, M = r;
  }
  return null;
}
function Vd(e, t, n, r) {
  do
    on();
  while (st !== null);
  if (L & 6) throw Error(g(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(g(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Cf(e, i), e === q && (K = q = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Nr || (Nr = !0, gc(Qr, function() {
    return on(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = ze.transition, ze.transition = null;
    var o = M;
    M = 1;
    var u = L;
    L |= 4, jo.current = null, jd(e, n), sc(n, e), ad(zi), Yr = !!Ni, zi = Ni = null, e.current = n, Ad(n), mf(), L = u, M = o, ze.transition = i;
  } else e.current = n;
  if (Nr && (Nr = !1, st = e, al = l), i = e.pendingLanes, i === 0 && (mt = null), gf(n.stateNode), ge(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (sl) throw sl = !1, e = Xi, Xi = null, e;
  return al & 1 && e.tag !== 0 && on(), i = e.pendingLanes, i & 1 ? e === Gi ? $n++ : ($n = 0, Gi = e) : $n = 0, wt(), null;
}
function on() {
  if (st !== null) {
    var e = Xs(al), t = ze.transition, n = M;
    try {
      if (ze.transition = null, M = 16 > e ? 16 : e, st === null) var r = !1;
      else {
        if (e = st, st = null, al = 0, L & 6) throw Error(g(331));
        var l = L;
        for (L |= 4, E = e.current; E !== null; ) {
          var i = E, o = i.child;
          if (E.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (E = c; E !== null; ) {
                  var m = E;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      An(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) h.return = m, E = h;
                  else for (; E !== null; ) {
                    m = E;
                    var p = m.sibling, S = m.return;
                    if (ic(m), m === c) {
                      E = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = S, E = p;
                      break;
                    }
                    E = S;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var k = y.child;
                if (k !== null) {
                  y.child = null;
                  do {
                    var D = k.sibling;
                    k.sibling = null, k = D;
                  } while (k !== null);
                }
              }
              E = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, E = o;
          else e: for (; E !== null; ) {
            if (i = E, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                An(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, E = f;
              break e;
            }
            E = i.return;
          }
        }
        var a = e.current;
        for (E = a; E !== null; ) {
          o = E;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, E = d;
          else e: for (o = a; E !== null; ) {
            if (u = E, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  wl(9, u);
              }
            } catch (w) {
              V(u, u.return, w);
            }
            if (u === o) {
              E = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, E = v;
              break e;
            }
            E = u.return;
          }
        }
        if (L = l, wt(), Be && typeof Be.onPostCommitFiberRoot == "function") try {
          Be.onPostCommitFiberRoot(pl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      M = n, ze.transition = t;
    }
  }
  return !1;
}
function ns(e, t, n) {
  t = dn(n, t), t = Xa(e, t, 1), e = pt(e, t, 1), t = ae(), e !== null && (ir(e, 1, t), ge(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) ns(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ns(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mt === null || !mt.has(r))) {
        e = dn(n, e), e = Ga(t, e, 1), t = pt(t, e, 1), e = ae(), t !== null && (ir(t, 1, e), ge(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Wd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ae(), e.pingedLanes |= e.suspendedLanes & n, q === e && (te & n) === n && (X === 4 || X === 3 && (te & 130023424) === te && 500 > Q() - Uo ? It(e, 0) : Ao |= n), ge(e, t);
}
function hc(e, t) {
  t === 0 && (e.mode & 1 ? (t = gr, gr <<= 1, !(gr & 130023424) && (gr = 4194304)) : t = 1);
  var n = ae();
  e = qe(e, t), e !== null && (ir(e, t, n), ge(e, n));
}
function Qd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), hc(e, n);
}
function Kd(e, t) {
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
  r !== null && r.delete(t), hc(e, n);
}
var vc;
vc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || he.current) me = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return me = !1, Ld(e, t, n);
    me = !!(e.flags & 131072);
  }
  else me = !1, U && t.flags & 1048576 && Sa(t, el, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      jr(e, t), e = t.pendingProps;
      var l = sn(t, ue.current);
      ln(t, n), l = Io(null, t, r, e, l, n);
      var i = Lo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ve(r) ? (i = !0, qr(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, No(t), l.updater = Sl, t.stateNode = l, l._reactInternals = t, ji(t, r, e, n), t = $i(null, t, r, !0, i, n)) : (t.tag = 0, U && i && So(t), se(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (jr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Xd(r), e = Ie(r, e), l) {
          case 0:
            t = Ui(null, t, r, e, n);
            break e;
          case 1:
            t = Ku(null, t, r, e, n);
            break e;
          case 11:
            t = Wu(null, t, r, e, n);
            break e;
          case 14:
            t = Qu(null, t, r, Ie(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Ui(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Ku(e, t, r, l, n);
    case 3:
      e: {
        if (ba(t), e === null) throw Error(g(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, xa(e, t), rl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = dn(Error(g(423)), t), t = Yu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = dn(Error(g(424)), t), t = Yu(e, t, r, n, l);
          break e;
        } else for (Se = dt(t.stateNode.containerInfo.firstChild), we = t, U = !0, Me = null, n = _a(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (an(), r === l) {
            t = be(e, t, n);
            break e;
          }
          se(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Na(t), e === null && Mi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Di(r, l) ? o = null : i !== null && Di(r, i) && (t.flags |= 32), qa(e, t), se(e, t, o, n), t.child;
    case 6:
      return e === null && Mi(t), null;
    case 13:
      return ec(e, t, n);
    case 4:
      return zo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = cn(t, null, r, n) : se(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Wu(e, t, r, l, n);
    case 7:
      return se(e, t, t.pendingProps, n), t.child;
    case 8:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return se(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, O(tl, r._currentValue), r._currentValue = o, i !== null) if (je(i.value, o)) {
          if (i.children === l.children && !he.current) {
            t = be(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = Ge(-1, n & -n), s.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var m = c.pending;
                    m === null ? s.next = s : (s.next = m.next, m.next = s), c.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Oi(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              s = s.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(g(341));
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Oi(o, n, t), o = i.sibling;
          } else o = i.child;
          if (o !== null) o.return = i;
          else for (o = i; o !== null; ) {
            if (o === t) {
              o = null;
              break;
            }
            if (i = o.sibling, i !== null) {
              i.return = o.return, o = i;
              break;
            }
            o = o.return;
          }
          i = o;
        }
        se(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, ln(t, n), l = De(l), r = r(l), t.flags |= 1, se(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ie(r, t.pendingProps), l = Ie(r.type, l), Qu(e, t, r, l, n);
    case 15:
      return Za(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), jr(e, t), t.tag = 1, ve(r) ? (e = !0, qr(t)) : e = !1, ln(t, n), Ya(t, r, l), ji(t, r, l, n), $i(null, t, r, !0, e, n);
    case 19:
      return tc(e, t, n);
    case 22:
      return Ja(e, t, n);
  }
  throw Error(g(156, t.tag));
};
function gc(e, t) {
  return Ws(e, t);
}
function Yd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ne(e, t, n, r) {
  return new Yd(e, t, n, r);
}
function Vo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Xd(e) {
  if (typeof e == "function") return Vo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === uo) return 11;
    if (e === so) return 14;
  }
  return 2;
}
function vt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ne(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function $r(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Vo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Vt:
      return Lt(n.children, l, i, t);
    case oo:
      o = 8, l |= 8;
      break;
    case oi:
      return e = Ne(12, n, t, l | 2), e.elementType = oi, e.lanes = i, e;
    case si:
      return e = Ne(13, n, t, l), e.elementType = si, e.lanes = i, e;
    case ai:
      return e = Ne(19, n, t, l), e.elementType = ai, e.lanes = i, e;
    case Ns:
      return Cl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ps:
          o = 10;
          break e;
        case xs:
          o = 9;
          break e;
        case uo:
          o = 11;
          break e;
        case so:
          o = 14;
          break e;
        case rt:
          o = 16, r = null;
          break e;
      }
      throw Error(g(130, e == null ? e : typeof e, ""));
  }
  return t = Ne(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Lt(e, t, n, r) {
  return e = Ne(7, e, r, t), e.lanes = n, e;
}
function Cl(e, t, n, r) {
  return e = Ne(22, e, r, t), e.elementType = Ns, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ti(e, t, n) {
  return e = Ne(6, e, null, t), e.lanes = n, e;
}
function ni(e, t, n) {
  return t = Ne(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function Gd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Fl(0), this.expirationTimes = Fl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Fl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Wo(e, t, n, r, l, i, o, u, s) {
  return e = new Gd(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ne(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, No(i), e;
}
function Zd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Bt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function yc(e) {
  if (!e) return yt;
  e = e._reactInternals;
  e: {
    if ($t(e) !== e || e.tag !== 1) throw Error(g(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ve(t.type)) {
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
    if (ve(n)) return ya(e, n, t);
  }
  return t;
}
function kc(e, t, n, r, l, i, o, u, s) {
  return e = Wo(n, r, !0, e, l, i, o, u, s), e.context = yc(null), n = e.current, r = ae(), l = ht(n), i = Ge(r, l), i.callback = t ?? null, pt(n, i, l), e.current.lanes = l, ir(e, l, r), ge(e, r), e;
}
function _l(e, t, n, r) {
  var l = t.current, i = ae(), o = ht(l);
  return n = yc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ge(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = pt(l, t, o), e !== null && (Fe(e, l, o, i), Mr(e, l, o)), o;
}
function fl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function rs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Qo(e, t) {
  rs(e, t), (e = e.alternate) && rs(e, t);
}
function Jd() {
  return null;
}
var Sc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Ko(e) {
  this._internalRoot = e;
}
Pl.prototype.render = Ko.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(g(409));
  _l(e, t, null, null);
};
Pl.prototype.unmount = Ko.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    At(function() {
      _l(null, e, null, null);
    }), t[Je] = null;
  }
};
function Pl(e) {
  this._internalRoot = e;
}
Pl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = Js();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < it.length && t !== 0 && t < it[n].priority; n++) ;
    it.splice(n, 0, e), n === 0 && bs(e);
  }
};
function Yo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function xl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ls() {
}
function qd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = fl(o);
        i.call(c);
      };
    }
    var o = kc(t, r, e, 0, null, !1, !1, "", ls);
    return e._reactRootContainer = o, e[Je] = o.current, Gn(e.nodeType === 8 ? e.parentNode : e), At(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = fl(s);
      u.call(c);
    };
  }
  var s = Wo(e, 0, !1, null, null, !1, !1, "", ls);
  return e._reactRootContainer = s, e[Je] = s.current, Gn(e.nodeType === 8 ? e.parentNode : e), At(function() {
    _l(t, s, n, r);
  }), s;
}
function Nl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = fl(o);
        u.call(s);
      };
    }
    _l(t, o, e, l);
  } else o = qd(n, t, e, l, r);
  return fl(o);
}
Gs = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Dn(t.pendingLanes);
        n !== 0 && (fo(t, n | 1), ge(t, Q()), !(L & 6) && (pn = Q() + 500, wt()));
      }
      break;
    case 13:
      At(function() {
        var r = qe(e, 1);
        if (r !== null) {
          var l = ae();
          Fe(r, e, 1, l);
        }
      }), Qo(e, 1);
  }
};
po = function(e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = ae();
      Fe(t, e, 134217728, n);
    }
    Qo(e, 134217728);
  }
};
Zs = function(e) {
  if (e.tag === 13) {
    var t = ht(e), n = qe(e, t);
    if (n !== null) {
      var r = ae();
      Fe(n, e, t, r);
    }
    Qo(e, t);
  }
};
Js = function() {
  return M;
};
qs = function(e, t) {
  var n = M;
  try {
    return M = e, t();
  } finally {
    M = n;
  }
};
ki = function(e, t, n) {
  switch (t) {
    case "input":
      if (di(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = gl(r);
            if (!l) throw Error(g(90));
            Ds(r), di(r, l);
          }
        }
      }
      break;
    case "textarea":
      Rs(e, n);
      break;
    case "select":
      t = n.value, t != null && en(e, !!n.multiple, t, !1);
  }
};
As = $o;
Us = At;
var bd = { usingClientEntryPoint: !1, Events: [ur, Yt, gl, Fs, js, $o] }, xn = { findFiberByHostInstance: Nt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ep = { bundleType: xn.bundleType, version: xn.version, rendererPackageName: xn.rendererPackageName, rendererConfig: xn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Bs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: xn.findFiberByHostInstance || Jd, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!zr.isDisabled && zr.supportsFiber) try {
    pl = zr.inject(ep), Be = zr;
  } catch {
  }
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bd;
Ce.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Yo(t)) throw Error(g(200));
  return Zd(e, t, null, n);
};
Ce.createRoot = function(e, t) {
  if (!Yo(e)) throw Error(g(299));
  var n = !1, r = "", l = Sc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Wo(e, 1, !1, null, null, n, !1, r, l), e[Je] = t.current, Gn(e.nodeType === 8 ? e.parentNode : e), new Ko(t);
};
Ce.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(g(188)) : (e = Object.keys(e).join(","), Error(g(268, e)));
  return e = Bs(t), e = e === null ? null : e.stateNode, e;
};
Ce.flushSync = function(e) {
  return At(e);
};
Ce.hydrate = function(e, t, n) {
  if (!xl(t)) throw Error(g(200));
  return Nl(null, e, t, !0, n);
};
Ce.hydrateRoot = function(e, t, n) {
  if (!Yo(e)) throw Error(g(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Sc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = kc(t, null, e, 1, n ?? null, l, !1, i, o), e[Je] = t.current, Gn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Pl(t);
};
Ce.render = function(e, t, n) {
  if (!xl(t)) throw Error(g(200));
  return Nl(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function(e) {
  if (!xl(e)) throw Error(g(40));
  return e._reactRootContainer ? (At(function() {
    Nl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Je] = null;
    });
  }), !0) : !1;
};
Ce.unstable_batchedUpdates = $o;
Ce.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!xl(n)) throw Error(g(200));
  if (e == null || e._reactInternals === void 0) throw Error(g(38));
  return Nl(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function wc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(wc);
    } catch (e) {
      console.error(e);
    }
}
wc(), ws.exports = Ce;
var tp = ws.exports, is = tp;
Hr.createRoot = is.createRoot, Hr.hydrateRoot = is.hydrateRoot;
const nt = (e) => Number.isFinite(e) ? e.toLocaleString() : "-", os = (e) => `${e.name} ${e.isPlayer ? "(プレイヤー)" : "(エネミー)"}`, np = ({
  tokens: e,
  attackerId: t,
  receiverId: n,
  baseDamage: r,
  result: l,
  running: i,
  onAttackerChange: o,
  onReceiverChange: u,
  onBaseDamageChange: s,
  onRun: c
}) => /* @__PURE__ */ I.jsxs("div", { className: "ponkotu-damage", children: [
  /* @__PURE__ */ I.jsxs("div", { className: "ponkotu-damage__row", children: [
    /* @__PURE__ */ I.jsx("h3", { children: "ver 1.0.0" }),
    /* @__PURE__ */ I.jsxs("label", { className: "ponkotu-damage__label", children: [
      "攻撃者",
      /* @__PURE__ */ I.jsxs("select", { value: t, onChange: (m) => o(m.target.value), children: [
        /* @__PURE__ */ I.jsx("option", { value: "", children: "選択してください" }),
        e.map((m) => /* @__PURE__ */ I.jsx("option", { value: m.actorId, children: os(m) }, m.actorId))
      ] })
    ] }),
    /* @__PURE__ */ I.jsxs("label", { className: "ponkotu-damage__label", children: [
      "防御者",
      /* @__PURE__ */ I.jsxs("select", { value: n, onChange: (m) => u(m.target.value), children: [
        /* @__PURE__ */ I.jsx("option", { value: "", children: "選択してください" }),
        e.map((m) => /* @__PURE__ */ I.jsx("option", { value: m.actorId, children: os(m) }, m.actorId))
      ] })
    ] })
  ] }),
  /* @__PURE__ */ I.jsxs("label", { className: "ponkotu-damage__label", children: [
    "基礎ダメージ",
    /* @__PURE__ */ I.jsx(
      "input",
      {
        type: "number",
        value: r,
        onChange: (m) => s(m.target.value),
        placeholder: "例: 12"
      }
    )
  ] }),
  /* @__PURE__ */ I.jsxs("div", { className: "ponkotu-damage__row", children: [
    /* @__PURE__ */ I.jsx("button", { onClick: c, disabled: i || e.length < 2, children: i ? "計算中..." : "計算して適用" }),
    e.length < 2 && /* @__PURE__ */ I.jsx("span", { className: "ponkotu-damage__hint", children: "※ トークンが2体以上必要です" })
  ] }),
  l && /* @__PURE__ */ I.jsxs("div", { className: "ponkotu-damage__result", children: [
    /* @__PURE__ */ I.jsxs("div", { children: [
      "通常倍率: 攻撃者 ",
      l.attackerNormalPercentage,
      "% / 防御者",
      " ",
      l.receiverNormalPercentage,
      "% → 係数 ",
      l.normalRatio.toFixed(2)
    ] }),
    /* @__PURE__ */ I.jsxs("div", { children: [
      "特殊倍率: 攻撃者 ",
      l.attackerSpecialPercentage,
      "%",
      l.poiseCritical ? " (呼吸クリティカル)" : "",
      " / 防御者",
      " ",
      l.receiverSpecialPercentage,
      "% → 係数 ",
      l.specialRatio.toFixed(2)
    ] }),
    /* @__PURE__ */ I.jsxs("div", { children: [
      "特殊(耐性限界)倍率: 防御者 ",
      l.receiverSpecialConfPercentage,
      "% → 係数",
      " ",
      l.specialConfRatio.toFixed(2)
    ] }),
    /* @__PURE__ */ I.jsxs("div", { children: [
      "HPダメージ: ",
      nt(l.hpDamageApplied),
      " （バリア吸収",
      " ",
      nt(l.barrierAbsorbed),
      "）"
    ] }),
    /* @__PURE__ */ I.jsxs("div", { children: [
      "耐性限界ダメージ: ",
      nt(l.confDamageApplied)
    ] }),
    /* @__PURE__ */ I.jsxs("div", { children: [
      "SANダメージ(沈潜): ",
      nt(l.sanDamageApplied)
    ] }),
    /* @__PURE__ */ I.jsxs("div", { children: [
      "残り HP ",
      nt(l.hpAfter),
      " / バリア",
      " ",
      nt(l.barrierAfter),
      " / CON",
      " ",
      nt(l.constitutionAfter),
      " / SAN",
      " ",
      nt(l.sanAfter)
    ] })
  ] })
] }), $e = (e) => Math.max(0, Math.floor(e)), Ec = (e, t) => $e(e * t), Cc = (e, t = 1) => $e(e - t), ri = (e) => Ec(e, 2 / 3), rp = (e) => Ec(e, 1 / 2), We = (e) => {
  e.getStack(e.statusId) > 0 && e.setStack(e.statusId, 0);
}, li = (e) => {
  const t = e.getStack(e.statusId);
  t > 0 && e.setStack(e.statusId, Cc(t));
}, _c = [
  {
    id: "DarkFire",
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
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, ri(t)));
    }
  },
  {
    id: "Poison",
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, rp(t)));
    }
  },
  {
    id: "Tremor",
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, ri(t)));
    }
  },
  {
    id: "Bleeding",
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || e.setStack(e.statusId, ri(t));
    }
  },
  {
    id: "Poise",
    hasPending: !0,
    onTurnEnd: (e) => li(e)
  },
  {
    id: "Regen",
    hasPending: !0,
    onTurnStart: (e) => {
      const t = e.getStack(e.statusId);
      if (t <= 0) return;
      const n = e.combatant.maxHp * 0.05 * t;
      n > 0 && e.healHp(n);
    },
    onTurnEnd: (e) => li(e)
  },
  {
    id: "Bind",
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "Paralysis",
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "Fear",
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "DamageUp",
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "DamageDown",
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "PowerUp",
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "PowerDown",
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "Protection",
    hasPending: !0,
    onTurnStart: (e) => {
      if (!e.combatant.flags.checkHitan) return;
      e.getStack(e.statusId) <= 1 && e.setStack(e.statusId, 1);
    },
    onTurnEnd: We
  },
  {
    id: "Vulnerable",
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "Sink",
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      if (e.combatant.flags.checkNk) {
        e.addStack(e.statusId, 2);
        return;
      }
      t > 0 && e.setStack(e.statusId, Cc(t));
    }
  },
  {
    id: "FEOAwaken",
    hasPending: !0,
    onTurnEnd: (e) => li(e)
  },
  {
    id: "Witch1",
    onTurnStart: (e) => {
      const t = e.getStack(e.statusId);
      if (t <= 0) return;
      const n = t * e.combatant.hp * 0.02;
      n > 0 && e.applyHpDamage(n);
    }
  },
  {
    id: "Frenzy",
    onTurnStart: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.addStack("DamageUp", t), e.addStack("Vulnerable", t));
    }
  },
  {
    id: "Sinsyoku",
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
    hasPending: !0
  },
  {
    id: "Smoke"
  },
  {
    id: "SmokeGrand"
  }
];
class lp {
  constructor(t) {
    var n, r, l;
    this.id = t.id, this.hp = t.hp, this.maxHp = t.maxHp, this.barrier = t.barrier, this.constitution = t.constitution, this.san = t.san, this.isPlayer = t.isPlayer, this.stackDamageUp = t.stackDamageUp, this.stackDamageDown = t.stackDamageDown, this.directcheck = t.directcheck, this.criticalcheck = t.criticalcheck, this.stackPoise = t.stackPoise, this.stackProtection = t.stackProtection, this.stackVulnerable = t.stackVulnerable, this.resist = t.resist, this.resistEnemy = t.resistEnemy, this.confResist = t.confResist, this.econfResistEnemy = t.econfResistEnemy, this.doubleConstitution = t.doubleConstitution, this.stacksink = t.stacksink, this.statuses = t.statuses, this.flags = {
      checkNk: ((n = t.flags) == null ? void 0 : n.checkNk) ?? !1,
      checkAnri: ((r = t.flags) == null ? void 0 : r.checkAnri) ?? !1,
      checkHitan: ((l = t.flags) == null ? void 0 : l.checkHitan) ?? !1
    }, this.name = t.name;
  }
}
var ie;
class ip {
  constructor(t) {
    fr(this, ie, /* @__PURE__ */ new Map());
    t && Object.entries(t).forEach(([n, r]) => {
      r && Z(this, ie).set(n, {
        stack: $e(r.stack),
        pending: $e(r.pending)
      });
    });
  }
  getState(t) {
    const n = Z(this, ie).get(t);
    return n ? { stack: n.stack, pending: n.pending } : { stack: 0, pending: 0 };
  }
  getStack(t) {
    var n;
    return ((n = Z(this, ie).get(t)) == null ? void 0 : n.stack) ?? 0;
  }
  getPending(t) {
    var n;
    return ((n = Z(this, ie).get(t)) == null ? void 0 : n.pending) ?? 0;
  }
  setState(t, n) {
    Z(this, ie).set(t, {
      stack: $e(n.stack),
      pending: $e(n.pending)
    });
  }
  setStack(t, n) {
    const r = Z(this, ie).get(t) ?? { stack: 0, pending: 0 };
    r.stack = $e(n), Z(this, ie).set(t, r);
  }
  setPending(t, n) {
    const r = Z(this, ie).get(t) ?? { stack: 0, pending: 0 };
    r.pending = $e(n), Z(this, ie).set(t, r);
  }
  addStack(t, n) {
    const r = Z(this, ie).get(t) ?? { stack: 0, pending: 0 };
    r.stack = $e(r.stack + n), Z(this, ie).set(t, r);
  }
  addPending(t, n) {
    const r = Z(this, ie).get(t) ?? { stack: 0, pending: 0 };
    r.pending = $e(r.pending + n), Z(this, ie).set(t, r);
  }
}
ie = new WeakMap();
const Pc = {
  Burned: { stack: "stackBurned", pending: "stackBurnednext" },
  Poison: { stack: "stackPoison", pending: "stackPoisonnext" },
  Tremor: { stack: "stacktremor", pending: "stacktremornext" },
  Bleeding: { stack: "stackBleeding", pending: "stackBleedingnext" },
  DarkFire: { stack: "stackDarkFire" },
  Poise: { stack: "stackpoise", pending: "stackpoisenext" },
  Regen: { stack: "stackregen", pending: "stackregennext" },
  Bind: { stack: "stackbind", pending: "stackbindnext" },
  Paralysis: { stack: "stackParalysis", pending: "stackParalysisnext" },
  Fear: { stack: "stackFear", pending: "stackFearnext" },
  DamageUp: { stack: "stackDamageUp", pending: "stackDamageUpnext" },
  DamageDown: { stack: "stackDamageDown", pending: "stackDamageDownnext" },
  PowerUp: { stack: "stackPowerUp", pending: "stackPowerUpnext" },
  PowerDown: { stack: "stackPowerDown", pending: "stackPowerDownnext" },
  Protection: { stack: "stackProtection", pending: "stackProtectionnext" },
  Vulnerable: { stack: "stackVulnerable", pending: "stackVulnerablenext" },
  Sink: { stack: "stacksink", pending: "stacksinknext" },
  Sinsyoku: { stack: "stackSinsyoku" },
  FEOAwaken: { stack: "stackFEOAwaken", pending: "stackFEOAwakenNext" },
  Witch1: { stack: "stackwitch1" },
  Frenzy: { stack: "stackfrenzy" },
  Biribiri: { stack: "stackbiribiri", pending: "stackbiribirinext" },
  Smoke: { stack: "stackSmoke" },
  SmokeGrand: { stack: "stackSmokeGrand" }
}, b = (e, t, n = 0) => {
  var i, o, u;
  const r = (u = (o = (i = e.system) == null ? void 0 : i.attributes) == null ? void 0 : o[t]) == null ? void 0 : u.value;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  if (typeof r == "boolean") return r ? 1 : 0;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, op = (e, t, n = 0) => {
  var i, o, u;
  const r = (u = (o = (i = e.system) == null ? void 0 : i.attributes) == null ? void 0 : o[t]) == null ? void 0 : u.max;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, us = (e) => {
  const t = new ip();
  _c.forEach((s) => {
    const c = Pc[s.id], m = b(e, c.stack, 0), h = c.pending ? b(e, c.pending, 0) : 0;
    t.setState(s.id, { stack: m, pending: h });
  });
  const n = t.getState("DamageUp").stack, r = t.getState("DamageDown").stack, l = t.getState("Poise").stack, i = t.getState("Protection").stack, o = t.getState("Vulnerable").stack, u = t.getState("Sink").stack;
  return new lp({
    id: e.id ?? "",
    name: e.name,
    hp: b(e, "hp", 0),
    maxHp: op(e, "hp", 0),
    barrier: b(e, "barrier", 0),
    constitution: b(e, "constitution", 0),
    san: b(e, "san", 0),
    isPlayer: b(e, "isPlayer", 0) > 0,
    stackDamageUp: n,
    stackDamageDown: r,
    directcheck: b(e, "directcheck", 0) > 0,
    criticalcheck: b(e, "criticalcheck", 0) > 0,
    stackPoise: l,
    stackProtection: i,
    stackVulnerable: o,
    resist: b(e, "resist", 0),
    resistEnemy: b(e, "resistEnemy", 0),
    confResist: b(e, "confResist", 0),
    econfResistEnemy: b(e, "econfResistEnemy", 0),
    doubleConstitution: b(e, "doubleconstitution", 0) === 1,
    stacksink: u,
    statuses: t,
    flags: {
      checkNk: b(e, "checknk", 0) > 0,
      checkAnri: b(e, "checkAnri", 0) > 0,
      checkHitan: b(e, "checkhitan", 0) > 0
    }
  });
}, ss = (e) => {
  const t = {
    "system.attributes.hp.value": e.hp,
    "system.attributes.barrier.value": e.barrier,
    "system.attributes.constitution.value": e.constitution,
    "system.attributes.san.value": e.san
  };
  return _c.forEach((n) => {
    const r = Pc[n.id], l = e.statuses.getState(n.id);
    t[`system.attributes.${r.stack}.value`] = l.stack, r.pending && (t[`system.attributes.${r.pending}.value`] = l.pending);
  }), t;
}, up = (e, t, n) => {
  var u, s, c;
  const r = (u = game.combats) == null ? void 0 : u.get(e), l = (s = r == null ? void 0 : r.combatants) == null ? void 0 : s.get(t), o = (l == null ? void 0 : l.actor) ?? null ?? (n ? (c = game.actors) == null ? void 0 : c.get(n) : null);
  return { actor: o, actorId: (o == null ? void 0 : o.id) ?? n };
};
class sp {
  loadByActorId(t) {
    var r;
    const n = t ? ((r = game.actors) == null ? void 0 : r.get(t)) ?? null : null;
    return !n || !n.id ? null : {
      combatId: "",
      combatantId: "",
      actorId: n.id,
      actor: n,
      combatant: us(n)
    };
  }
  async load(t) {
    const { actor: n, actorId: r } = up(
      t.combatId,
      t.combatantId,
      t.actorId
    );
    return !n || !r ? null : {
      combatId: t.combatId,
      combatantId: t.combatantId,
      actorId: r,
      actor: n,
      combatant: us(n)
    };
  }
  async saveActor(t) {
    var r;
    const n = t.id ? ((r = game.actors) == null ? void 0 : r.get(t.id)) ?? null : null;
    n && await n.update(ss(t));
  }
  async save(t) {
    await t.actor.update(ss(t.combatant));
  }
}
const ap = (e) => {
  const t = e.stackDamageUp, n = e.stackDamageDown, r = e.directcheck;
  return t * 10 - n * 10 + (r ? 50 : 0);
}, cp = (e, t) => {
  let n = 0, r = !1;
  e.criticalcheck && (n += 20);
  const i = e.stackPoise;
  if (i > 0) {
    const o = Math.min(i * 5, 100);
    t() * 100 < o && (n += 20, r = !0);
  }
  return { special: n, poiseCritical: r };
}, fp = (e) => {
  const t = e.stackProtection, n = e.stackVulnerable;
  return t * 10 - n * 10;
}, dp = (e) => {
  const t = e.isPlayer ? e.resist : e.resistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, pp = (e) => {
  const t = e.isPlayer ? e.confResist : e.econfResistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, mp = (e, t = {}) => {
  const n = t.random ?? Math.random, r = ap(e.attacker), { special: l, poiseCritical: i } = cp(e.attacker, n), o = fp(e.receiver), u = dp(e.receiver), s = pp(e.receiver), c = (100 + r - o) / 100, m = (100 + l - u) / 100, h = (100 + l - s) / 100, p = e.baseDamage * Math.max(c, 0) * Math.max(m, 0), S = e.baseDamage * Math.max(c, 0) * Math.max(h, 0);
  return {
    attackerNormalPercentage: r,
    attackerSpecialPercentage: l,
    receiverNormalPercentage: o,
    receiverSpecialPercentage: u,
    receiverSpecialConfPercentage: s,
    normalRatio: c,
    specialRatio: m,
    specialConfRatio: h,
    dealDamage: p,
    dealConfDamage: S,
    poiseCritical: i
  };
}, hp = (e, t = {}) => {
  const n = mp(e, t), r = e.receiver;
  let l = r.hp, i = r.barrier, o = r.constitution, u = r.san, s = r.stacksink;
  const c = r.doubleConstitution, m = Math.ceil(n.dealDamage), h = Math.ceil(n.dealConfDamage);
  let p = 0, S = 0;
  i > 0 && m > 0 && (p = Math.min(i, m), i -= p);
  const y = Math.max(m - p, 0);
  y > 0 && (l -= y, S = y);
  let k = 0;
  if (h > 0) {
    const v = h * (c ? 2 : 1);
    o = Math.max(o - v, 0), k = v;
  }
  let D = 0;
  const f = r.stacksink;
  if (f > 0) {
    let v = f;
    const w = Math.min(u, v);
    u -= w, v -= w, D += w, v > 0 && (l -= v, S += v), s = Math.floor(f / 2);
  }
  r.statuses.setStack("Sink", s);
  const a = {
    ...n,
    barrierAbsorbed: p,
    hpDamageApplied: S,
    confDamageApplied: k,
    sanDamageApplied: D,
    hpAfter: l,
    barrierAfter: i,
    constitutionAfter: o,
    sanAfter: u
  }, d = {
    ...r,
    hp: l,
    barrier: i,
    constitution: o,
    san: u,
    stacksink: s
  };
  return { result: a, receiver: d };
}, vp = (e) => {
  var t, n, r;
  return !!(((r = (n = (t = e.system) == null ? void 0 : t.attributes) == null ? void 0 : n.isPlayer) == null ? void 0 : r.value) ?? 0);
}, gp = () => {
  var e;
  return (((e = canvas == null ? void 0 : canvas.tokens) == null ? void 0 : e.placeables) ?? []).filter((t) => {
    var n;
    return !!((n = t.actor) != null && n.id);
  }).map((t) => {
    var n, r;
    return {
      actorId: ((n = t.actor) == null ? void 0 : n.id) ?? "",
      name: t.name ?? ((r = t.actor) == null ? void 0 : r.name) ?? "unknown",
      isPlayer: vp(t.actor)
    };
  }).filter((t) => t.isPlayer);
}, yp = (e) => {
  var t, n;
  return ((t = e.find((r) => r.isPlayer)) == null ? void 0 : t.actorId) ?? ((n = e[0]) == null ? void 0 : n.actorId) ?? "";
}, kp = (e, t) => {
  var n, r;
  return ((n = e.find((l) => l.actorId !== t && !l.isPlayer)) == null ? void 0 : n.actorId) ?? ((r = e.find((l) => l.actorId !== t)) == null ? void 0 : r.actorId) ?? "";
}, Sp = () => {
  const [e, t] = de.useState([]), [n, r] = de.useState(""), [l, i] = de.useState(""), [o, u] = de.useState(""), [s, c] = de.useState(null), [m, h] = de.useState(!1);
  de.useEffect(() => {
    var y;
    console.log((y = canvas == null ? void 0 : canvas.tokens) == null ? void 0 : y.placeables), t(gp());
  }, []);
  const p = de.useMemo(() => {
    const y = /* @__PURE__ */ new Map();
    return e.forEach((k) => y.set(k.actorId, k)), y;
  }, [e]);
  return de.useEffect(() => {
    if (!e.length) {
      n && r(""), l && i("");
      return;
    }
    const y = new Set(e.map((f) => f.actorId));
    let k = n;
    (!k || !y.has(k)) && (k = yp(e));
    let D = l;
    (!D || !y.has(D) || D === k) && (D = kp(e, k)), k !== n && r(k), D !== l && i(D);
  }, [e, n, l]), {
    tokens: e,
    attackerId: n,
    receiverId: l,
    baseDamage: o,
    result: s,
    running: m,
    setAttackerId: r,
    setReceiverId: i,
    setBaseDamage: u,
    run: async () => {
      var f, a, d, v, w, P;
      const y = Number(o);
      if (!Number.isFinite(y) || y <= 0) {
        (f = ui.notifications) == null || f.error("ダメージに正の数値を入力してください");
        return;
      }
      const k = n ? p.get(n) : void 0, D = l ? p.get(l) : void 0;
      if (!k || !D) {
        (a = ui.notifications) == null || a.error("攻撃者と防御者を選択してください");
        return;
      }
      if (n === l) {
        (d = ui.notifications) == null || d.error("攻撃者と防御者は別のキャラクターを選んでください");
        return;
      }
      try {
        h(!0);
        const _ = new sp(), x = _.loadByActorId(n), A = _.loadByActorId(l);
        if (!x || !A) {
          (v = ui.notifications) == null || v.error("攻撃者または防御者のデータを取得できませんでした");
          return;
        }
        const { result: N, receiver: ye } = hp(
          {
            attacker: x.combatant,
            receiver: A.combatant,
            baseDamage: y
          }
        );
        await _.saveActor(ye);
        const Et = `
${k.name} → ${D.name}<br/>
基礎ダメージ: ${y}<br/>
HPダメージ: ${N.hpDamageApplied} (バリア吸収: ${N.barrierAbsorbed})<br/>
混乱ダメージ: ${N.confDamageApplied}<br/>
SANダメージ(沈潜): ${N.sanDamageApplied}<br/>
`;
        await ChatMessage.create({
          speaker: ChatMessage.getSpeaker({ actor: x.actor }),
          content: Et
        }), c(N), (w = ui.notifications) == null || w.info(
          `${k.name} が ${D.name} にダメージを適用しました`
        );
      } catch (_) {
        console.error("[ponkotu-system] damage calc failed", _), (P = ui.notifications) == null || P.error("計算または適用に失敗しました。コンソールを確認してください。");
      } finally {
        h(!1);
      }
    }
  };
}, wp = () => {
  const {
    tokens: e,
    attackerId: t,
    receiverId: n,
    baseDamage: r,
    result: l,
    running: i,
    setAttackerId: o,
    setReceiverId: u,
    setBaseDamage: s,
    run: c
  } = Sp();
  return /* @__PURE__ */ I.jsx(
    np,
    {
      tokens: e,
      attackerId: t,
      receiverId: n,
      baseDamage: r,
      result: l,
      running: i,
      onAttackerChange: o,
      onReceiverChange: u,
      onBaseDamageChange: s,
      onRun: c
    }
  );
}, Ep = "ponkotu-system";
var Tt;
class Cp extends Application {
  constructor() {
    super(...arguments);
    fr(this, Tt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-damage-calc",
      title: "ダメージ計算",
      template: `modules/${Ep}/templates/damage-calc.html`,
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
    yn(this, Tt, Hr.createRoot(r)), Z(this, Tt).render(/* @__PURE__ */ I.jsx(wp, {}));
  }
  async close(n) {
    var r;
    return (r = Z(this, Tt)) == null || r.unmount(), yn(this, Tt, null), super.close(n);
  }
}
Tt = new WeakMap();
const _p = ({ onSubmit: e }) => {
  const [t, n] = de.useState(""), [r, l] = de.useState(""), i = de.useMemo(() => t.trim().length === 0, [t]), o = (u) => {
    u.preventDefault();
    const s = { name: t.trim(), note: r.trim() };
    console.log("[ponkotu-system] SimpleForm submit", s), e == null || e(s), l("");
  };
  return /* @__PURE__ */ I.jsxs("form", { onSubmit: o, className: "ponkotu-form", children: [
    /* @__PURE__ */ I.jsxs("label", { className: "ponkotu-form__label", children: [
      "名前",
      /* @__PURE__ */ I.jsx(
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
    /* @__PURE__ */ I.jsxs("label", { className: "ponkotu-form__label", children: [
      "メモ",
      /* @__PURE__ */ I.jsx(
        "textarea",
        {
          className: "ponkotu-form__textarea",
          value: r,
          placeholder: "送信したいメモ",
          onChange: (u) => l(u.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ I.jsx("div", { className: "ponkotu-form__footer", children: /* @__PURE__ */ I.jsx("button", { type: "submit", disabled: i, children: "送信" }) })
  ] });
}, Pp = "ponkotu-system";
var Rt;
class xp extends Application {
  constructor() {
    super(...arguments);
    fr(this, Rt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-react-form",
      title: "React フォーム",
      template: `modules/${Pp}/templates/react-form.html`,
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
    yn(this, Rt, Hr.createRoot(r)), Z(this, Rt).render(
      /* @__PURE__ */ I.jsx(
        _p,
        {
          onSubmit: (i) => {
            var u;
            const o = i.note ? `${i.name} からの送信: ${i.note}` : `${i.name} が送信しました。`;
            ChatMessage.create({
              speaker: ChatMessage.getSpeaker(),
              content: o
            }), (u = ui.notifications) == null || u.info("メッセージを送信しました");
          }
        }
      )
    );
  }
  async close(n) {
    var r;
    return (r = Z(this, Rt)) == null || r.unmount(), yn(this, Rt, null), super.close(n);
  }
}
Rt = new WeakMap();
const qi = "ponkotu-system", Rn = (...e) => console.log(`[${qi}]`, ...e), xc = () => new xp().render(!0), Nc = () => new Cp().render(!0), as = () => {
  var n;
  const e = (n = game.modules) == null ? void 0 : n.get(qi);
  if (!e) {
    console.warn(`[${qi}] game.modules からモジュールを取得できませんでした`);
    return;
  }
  const t = e;
  t.api || (t.api = {}), t.api.showReactForm = xc, t.api.showDamageCalc = Nc, Rn("API を登録しました", t.api);
}, Np = () => {
  Rn("ES module loaded"), Hooks.once("ready", () => {
    Rn("Hooks.once ready fired"), as(), globalThis.ponkotuSystem = { showReactForm: xc, showDamageCalc: Nc }, Rn("React フォーム API を初期化しました");
  }), Hooks.once("init", () => {
    Rn("Hooks.once init fired"), as();
  });
};
Np();
export {
  Nc as showDamageCalc,
  xc as showReactForm
};
