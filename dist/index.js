var qo = (e) => {
  throw TypeError(e);
};
var bo = (e, t, n) => t.has(e) || qo("Cannot " + n);
var Z = (e, t, n) => (bo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), gr = (e, t, n) => t.has(e) ? qo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Cn = (e, t, n, r) => (bo(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var hs = { exports: {} }, vl = {}, gs = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar = Symbol.for("react.element"), Lc = Symbol.for("react.portal"), Ic = Symbol.for("react.fragment"), Mc = Symbol.for("react.strict_mode"), Oc = Symbol.for("react.profiler"), jc = Symbol.for("react.provider"), Fc = Symbol.for("react.context"), Ac = Symbol.for("react.forward_ref"), Uc = Symbol.for("react.suspense"), Hc = Symbol.for("react.memo"), Bc = Symbol.for("react.lazy"), eu = Symbol.iterator;
function $c(e) {
  return e === null || typeof e != "object" ? null : (e = eu && e[eu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var vs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ys = Object.assign, ks = {};
function vn(e, t, n) {
  this.props = e, this.context = t, this.refs = ks, this.updater = n || vs;
}
vn.prototype.isReactComponent = {};
vn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
vn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ss() {
}
Ss.prototype = vn.prototype;
function ro(e, t, n) {
  this.props = e, this.context = t, this.refs = ks, this.updater = n || vs;
}
var lo = ro.prototype = new Ss();
lo.constructor = ro;
ys(lo, vn.prototype);
lo.isPureReactComponent = !0;
var tu = Array.isArray, ws = Object.prototype.hasOwnProperty, io = { current: null }, Es = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cs(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) ws.call(t, r) && !Es.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: ar, type: e, key: i, ref: o, props: l, _owner: io.current };
}
function Vc(e, t) {
  return { $$typeof: ar, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function oo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ar;
}
function Wc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var nu = /\/+/g;
function Ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Wc("" + e.key) : t.toString(36);
}
function Mr(e, t, n, r, l) {
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
        case ar:
        case Lc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Ml(o, 0) : r, tu(l) ? (n = "", e != null && (n = e.replace(nu, "$&/") + "/"), Mr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (oo(l) && (l = Vc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(nu, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", tu(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Ml(i, u);
    o += Mr(i, t, n, s, l);
  }
  else if (s = $c(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Ml(i, u++), o += Mr(i, t, n, s, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function vr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Mr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Qc(e) {
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
var fe = { current: null }, Or = { transition: null }, Kc = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Or, ReactCurrentOwner: io };
function Ps() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: vr, forEach: function(e, t, n) {
  vr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return vr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return vr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!oo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = vn;
L.Fragment = Ic;
L.Profiler = Oc;
L.PureComponent = ro;
L.StrictMode = Mc;
L.Suspense = Uc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kc;
L.act = Ps;
L.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ys({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = io.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ws.call(t, s) && !Es.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: ar, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function(e) {
  return e = { $$typeof: Fc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: jc, _context: e }, e.Consumer = e;
};
L.createElement = Cs;
L.createFactory = function(e) {
  var t = Cs.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Ac, render: e };
};
L.isValidElement = oo;
L.lazy = function(e) {
  return { $$typeof: Bc, _payload: { _status: -1, _result: e }, _init: Qc };
};
L.memo = function(e, t) {
  return { $$typeof: Hc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = Or.transition;
  Or.transition = {};
  try {
    e();
  } finally {
    Or.transition = t;
  }
};
L.unstable_act = Ps;
L.useCallback = function(e, t) {
  return fe.current.useCallback(e, t);
};
L.useContext = function(e) {
  return fe.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return fe.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
  return fe.current.useEffect(e, t);
};
L.useId = function() {
  return fe.current.useId();
};
L.useImperativeHandle = function(e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function(e, t) {
  return fe.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
  return fe.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
  return fe.current.useMemo(e, t);
};
L.useReducer = function(e, t, n) {
  return fe.current.useReducer(e, t, n);
};
L.useRef = function(e) {
  return fe.current.useRef(e);
};
L.useState = function(e) {
  return fe.current.useState(e);
};
L.useSyncExternalStore = function(e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function() {
  return fe.current.useTransition();
};
L.version = "18.3.1";
gs.exports = L;
var se = gs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yc = se, Xc = Symbol.for("react.element"), Gc = Symbol.for("react.fragment"), Zc = Object.prototype.hasOwnProperty, Jc = Yc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, qc = { key: !0, ref: !0, __self: !0, __source: !0 };
function _s(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) Zc.call(t, r) && !qc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Xc, type: e, key: i, ref: o, props: l, _owner: Jc.current };
}
vl.Fragment = Gc;
vl.jsx = _s;
vl.jsxs = _s;
hs.exports = vl;
var T = hs.exports, Kr = {}, xs = { exports: {} }, Ce = {}, Ns = { exports: {} }, Ds = {};
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
  function t(_, N) {
    var R = _.length;
    _.push(N);
    e: for (; 0 < R; ) {
      var W = R - 1 >>> 1, G = _[W];
      if (0 < l(G, N)) _[W] = N, _[R] = G, R = W;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var N = _[0], R = _.pop();
    if (R !== N) {
      _[0] = R;
      e: for (var W = 0, G = _.length, mr = G >>> 1; W < mr; ) {
        var _t = 2 * (W + 1) - 1, Il = _[_t], xt = _t + 1, hr = _[xt];
        if (0 > l(Il, R)) xt < G && 0 > l(hr, Il) ? (_[W] = hr, _[xt] = R, W = xt) : (_[W] = Il, _[_t] = R, W = _t);
        else if (xt < G && 0 > l(hr, R)) _[W] = hr, _[xt] = R, W = xt;
        else break e;
      }
    }
    return N;
  }
  function l(_, N) {
    var R = _.sortIndex - N.sortIndex;
    return R !== 0 ? R : _.id - N.id;
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
  var s = [], f = [], g = 1, m = null, p = 3, k = !1, S = !1, C = !1, M = typeof setTimeout == "function" ? setTimeout : null, d = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function c(_) {
    for (var N = n(f); N !== null; ) {
      if (N.callback === null) r(f);
      else if (N.startTime <= _) r(f), N.sortIndex = N.expirationTime, t(s, N);
      else break;
      N = n(f);
    }
  }
  function h(_) {
    if (C = !1, c(_), !S) if (n(s) !== null) S = !0, wn(y);
    else {
      var N = n(f);
      N !== null && En(h, N.startTime - _);
    }
  }
  function y(_, N) {
    S = !1, C && (C = !1, d(P), P = -1), k = !0;
    var R = p;
    try {
      for (c(N), m = n(s); m !== null && (!(m.expirationTime > N) || _ && !pe()); ) {
        var W = m.callback;
        if (typeof W == "function") {
          m.callback = null, p = m.priorityLevel;
          var G = W(m.expirationTime <= N);
          N = e.unstable_now(), typeof G == "function" ? m.callback = G : m === n(s) && r(s), c(N);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var mr = !0;
      else {
        var _t = n(f);
        _t !== null && En(h, _t.startTime - N), mr = !1;
      }
      return mr;
    } finally {
      m = null, p = R, k = !1;
    }
  }
  var E = !1, w = null, P = -1, D = 5, z = -1;
  function pe() {
    return !(e.unstable_now() - z < D);
  }
  function _e() {
    if (w !== null) {
      var _ = e.unstable_now();
      z = _;
      var N = !0;
      try {
        N = w(!0, _);
      } finally {
        N ? Qe() : (E = !1, w = null);
      }
    } else E = !1;
  }
  var Qe;
  if (typeof a == "function") Qe = function() {
    a(_e);
  };
  else if (typeof MessageChannel < "u") {
    var Sn = new MessageChannel(), Pt = Sn.port2;
    Sn.port1.onmessage = _e, Qe = function() {
      Pt.postMessage(null);
    };
  } else Qe = function() {
    M(_e, 0);
  };
  function wn(_) {
    w = _, E || (E = !0, Qe());
  }
  function En(_, N) {
    P = M(function() {
      _(e.unstable_now());
    }, N);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    S || k || (S = !0, wn(y));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(_) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var N = 3;
        break;
      default:
        N = p;
    }
    var R = p;
    p = N;
    try {
      return _();
    } finally {
      p = R;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, N) {
    switch (_) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        _ = 3;
    }
    var R = p;
    p = _;
    try {
      return N();
    } finally {
      p = R;
    }
  }, e.unstable_scheduleCallback = function(_, N, R) {
    var W = e.unstable_now();
    switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? W + R : W) : R = W, _) {
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
    return G = R + G, _ = { id: g++, callback: N, priorityLevel: _, startTime: R, expirationTime: G, sortIndex: -1 }, R > W ? (_.sortIndex = R, t(f, _), n(s) === null && _ === n(f) && (C ? (d(P), P = -1) : C = !0, En(h, R - W))) : (_.sortIndex = G, t(s, _), S || k || (S = !0, wn(y))), _;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(_) {
    var N = p;
    return function() {
      var R = p;
      p = N;
      try {
        return _.apply(this, arguments);
      } finally {
        p = R;
      }
    };
  };
})(Ds);
Ns.exports = Ds;
var bc = Ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ef = se, Ee = bc;
function v(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ts = /* @__PURE__ */ new Set(), Kn = {};
function $t(e, t) {
  cn(e, t), cn(e + "Capture", t);
}
function cn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Ts.add(t[e]);
}
var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ci = Object.prototype.hasOwnProperty, tf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ru = {}, lu = {};
function nf(e) {
  return ci.call(lu, e) ? !0 : ci.call(ru, e) ? !1 : tf.test(e) ? lu[e] = !0 : (ru[e] = !0, !1);
}
function rf(e, t, n, r) {
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
function lf(e, t, n, r) {
  if (t === null || typeof t > "u" || rf(e, t, n, r)) return !0;
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
function de(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var ne = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ne[e] = new de(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ne[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ne[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ne[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ne[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ne[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ne[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ne[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ne[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var uo = /[\-:]([a-z])/g;
function so(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    uo,
    so
  );
  ne[t] = new de(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(uo, so);
  ne[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(uo, so);
  ne[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ne.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ne[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function ao(e, t, n, r) {
  var l = ne.hasOwnProperty(t) ? ne[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (lf(t, n, l, r) && (n = null), r || l === null ? nf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nt = ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, yr = Symbol.for("react.element"), Qt = Symbol.for("react.portal"), Kt = Symbol.for("react.fragment"), co = Symbol.for("react.strict_mode"), fi = Symbol.for("react.profiler"), zs = Symbol.for("react.provider"), Rs = Symbol.for("react.context"), fo = Symbol.for("react.forward_ref"), di = Symbol.for("react.suspense"), pi = Symbol.for("react.suspense_list"), po = Symbol.for("react.memo"), it = Symbol.for("react.lazy"), Ls = Symbol.for("react.offscreen"), iu = Symbol.iterator;
function Pn(e) {
  return e === null || typeof e != "object" ? null : (e = iu && e[iu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var $ = Object.assign, Ol;
function Ln(e) {
  if (Ol === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ol = t && t[1] || "";
  }
  return `
` + Ol + e;
}
var jl = !1;
function Fl(e, t) {
  if (!e || jl) return "";
  jl = !0;
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
    jl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Ln(e) : "";
}
function of(e) {
  switch (e.tag) {
    case 5:
      return Ln(e.type);
    case 16:
      return Ln("Lazy");
    case 13:
      return Ln("Suspense");
    case 19:
      return Ln("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Fl(e.type, !1), e;
    case 11:
      return e = Fl(e.type.render, !1), e;
    case 1:
      return e = Fl(e.type, !0), e;
    default:
      return "";
  }
}
function mi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Kt:
      return "Fragment";
    case Qt:
      return "Portal";
    case fi:
      return "Profiler";
    case co:
      return "StrictMode";
    case di:
      return "Suspense";
    case pi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Rs:
      return (e.displayName || "Context") + ".Consumer";
    case zs:
      return (e._context.displayName || "Context") + ".Provider";
    case fo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case po:
      return t = e.displayName || null, t !== null ? t : mi(e.type) || "Memo";
    case it:
      t = e._payload, e = e._init;
      try {
        return mi(e(t));
      } catch {
      }
  }
  return null;
}
function uf(e) {
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
      return mi(t);
    case 8:
      return t === co ? "StrictMode" : "Mode";
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
function kt(e) {
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
function Is(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function sf(e) {
  var t = Is(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function kr(e) {
  e._valueTracker || (e._valueTracker = sf(e));
}
function Ms(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Is(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Yr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function hi(e, t) {
  var n = t.checked;
  return $({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ou(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = kt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Os(e, t) {
  t = t.checked, t != null && ao(e, "checked", t, !1);
}
function gi(e, t) {
  Os(e, t);
  var n = kt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? vi(e, t.type, n) : t.hasOwnProperty("defaultValue") && vi(e, t.type, kt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function vi(e, t, n) {
  (t !== "number" || Yr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var In = Array.isArray;
function rn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function yi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(v(91));
  return $({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function su(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(v(92));
      if (In(n)) {
        if (1 < n.length) throw Error(v(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: kt(n) };
}
function js(e, t) {
  var n = kt(t.value), r = kt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function au(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Fs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function ki(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Fs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Sr, As = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (Sr = Sr || document.createElement("div"), Sr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = Sr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Yn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Fn = {
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
}, af = ["Webkit", "ms", "Moz", "O"];
Object.keys(Fn).forEach(function(e) {
  af.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Fn[t] = Fn[e];
  });
});
function Us(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Fn.hasOwnProperty(e) && Fn[e] ? ("" + t).trim() : t + "px";
}
function Hs(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Us(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var cf = $({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Si(e, t) {
  if (t) {
    if (cf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(v(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(v(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(v(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(v(62));
  }
}
function wi(e, t) {
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
var Ei = null;
function mo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ci = null, ln = null, on = null;
function cu(e) {
  if (e = dr(e)) {
    if (typeof Ci != "function") throw Error(v(280));
    var t = e.stateNode;
    t && (t = El(t), Ci(e.stateNode, e.type, t));
  }
}
function Bs(e) {
  ln ? on ? on.push(e) : on = [e] : ln = e;
}
function $s() {
  if (ln) {
    var e = ln, t = on;
    if (on = ln = null, cu(e), t) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function Vs(e, t) {
  return e(t);
}
function Ws() {
}
var Al = !1;
function Qs(e, t, n) {
  if (Al) return e(t, n);
  Al = !0;
  try {
    return Vs(e, t, n);
  } finally {
    Al = !1, (ln !== null || on !== null) && (Ws(), $s());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = El(n);
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
  if (n && typeof n != "function") throw Error(v(231, t, typeof n));
  return n;
}
var Pi = !1;
if (qe) try {
  var _n = {};
  Object.defineProperty(_n, "passive", { get: function() {
    Pi = !0;
  } }), window.addEventListener("test", _n, _n), window.removeEventListener("test", _n, _n);
} catch {
  Pi = !1;
}
function ff(e, t, n, r, l, i, o, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (g) {
    this.onError(g);
  }
}
var An = !1, Xr = null, Gr = !1, _i = null, df = { onError: function(e) {
  An = !0, Xr = e;
} };
function pf(e, t, n, r, l, i, o, u, s) {
  An = !1, Xr = null, ff.apply(df, arguments);
}
function mf(e, t, n, r, l, i, o, u, s) {
  if (pf.apply(this, arguments), An) {
    if (An) {
      var f = Xr;
      An = !1, Xr = null;
    } else throw Error(v(198));
    Gr || (Gr = !0, _i = f);
  }
}
function Vt(e) {
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
function Ks(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function fu(e) {
  if (Vt(e) !== e) throw Error(v(188));
}
function hf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Vt(e), t === null) throw Error(v(188));
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
        if (i === n) return fu(l), e;
        if (i === r) return fu(l), t;
        i = i.sibling;
      }
      throw Error(v(188));
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
        if (!o) throw Error(v(189));
      }
    }
    if (n.alternate !== r) throw Error(v(190));
  }
  if (n.tag !== 3) throw Error(v(188));
  return n.stateNode.current === n ? e : t;
}
function Ys(e) {
  return e = hf(e), e !== null ? Xs(e) : null;
}
function Xs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Xs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Gs = Ee.unstable_scheduleCallback, du = Ee.unstable_cancelCallback, gf = Ee.unstable_shouldYield, vf = Ee.unstable_requestPaint, Q = Ee.unstable_now, yf = Ee.unstable_getCurrentPriorityLevel, ho = Ee.unstable_ImmediatePriority, Zs = Ee.unstable_UserBlockingPriority, Zr = Ee.unstable_NormalPriority, kf = Ee.unstable_LowPriority, Js = Ee.unstable_IdlePriority, yl = null, Ve = null;
function Sf(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function") try {
    Ve.onCommitFiberRoot(yl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var je = Math.clz32 ? Math.clz32 : Cf, wf = Math.log, Ef = Math.LN2;
function Cf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (wf(e) / Ef | 0) | 0;
}
var wr = 64, Er = 4194304;
function Mn(e) {
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
function Jr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = Mn(u) : (i &= o, i !== 0 && (r = Mn(i)));
  } else o = n & ~l, o !== 0 ? r = Mn(o) : i !== 0 && (r = Mn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - je(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Pf(e, t) {
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
function _f(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - je(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = Pf(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function xi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function qs() {
  var e = wr;
  return wr <<= 1, !(wr & 4194240) && (wr = 64), e;
}
function Ul(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - je(t), e[t] = n;
}
function xf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - je(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function go(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - je(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function bs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ea, vo, ta, na, ra, Ni = !1, Cr = [], ft = null, dt = null, pt = null, Gn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map(), ut = [], Nf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ft = null;
      break;
    case "dragenter":
    case "dragleave":
      dt = null;
      break;
    case "mouseover":
    case "mouseout":
      pt = null;
      break;
    case "pointerover":
    case "pointerout":
      Gn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Zn.delete(t.pointerId);
  }
}
function xn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = dr(t), t !== null && vo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Df(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ft = xn(ft, e, t, n, r, l), !0;
    case "dragenter":
      return dt = xn(dt, e, t, n, r, l), !0;
    case "mouseover":
      return pt = xn(pt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Gn.set(i, xn(Gn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Zn.set(i, xn(Zn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function la(e) {
  var t = Tt(e.target);
  if (t !== null) {
    var n = Vt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Ks(n), t !== null) {
          e.blockedOn = t, ra(e.priority, function() {
            ta(n);
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
function jr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ei = r, n.target.dispatchEvent(r), Ei = null;
    } else return t = dr(n), t !== null && vo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function mu(e, t, n) {
  jr(e) && n.delete(t);
}
function Tf() {
  Ni = !1, ft !== null && jr(ft) && (ft = null), dt !== null && jr(dt) && (dt = null), pt !== null && jr(pt) && (pt = null), Gn.forEach(mu), Zn.forEach(mu);
}
function Nn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ni || (Ni = !0, Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Tf)));
}
function Jn(e) {
  function t(l) {
    return Nn(l, e);
  }
  if (0 < Cr.length) {
    Nn(Cr[0], e);
    for (var n = 1; n < Cr.length; n++) {
      var r = Cr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ft !== null && Nn(ft, e), dt !== null && Nn(dt, e), pt !== null && Nn(pt, e), Gn.forEach(t), Zn.forEach(t), n = 0; n < ut.length; n++) r = ut[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ut.length && (n = ut[0], n.blockedOn === null); ) la(n), n.blockedOn === null && ut.shift();
}
var un = nt.ReactCurrentBatchConfig, qr = !0;
function zf(e, t, n, r) {
  var l = O, i = un.transition;
  un.transition = null;
  try {
    O = 1, yo(e, t, n, r);
  } finally {
    O = l, un.transition = i;
  }
}
function Rf(e, t, n, r) {
  var l = O, i = un.transition;
  un.transition = null;
  try {
    O = 4, yo(e, t, n, r);
  } finally {
    O = l, un.transition = i;
  }
}
function yo(e, t, n, r) {
  if (qr) {
    var l = Di(e, t, n, r);
    if (l === null) Gl(e, t, r, br, n), pu(e, r);
    else if (Df(l, e, t, n, r)) r.stopPropagation();
    else if (pu(e, r), t & 4 && -1 < Nf.indexOf(e)) {
      for (; l !== null; ) {
        var i = dr(l);
        if (i !== null && ea(i), i = Di(e, t, n, r), i === null && Gl(e, t, r, br, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Gl(e, t, r, null, n);
  }
}
var br = null;
function Di(e, t, n, r) {
  if (br = null, e = mo(r), e = Tt(e), e !== null) if (t = Vt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ks(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return br = e, null;
}
function ia(e) {
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
      switch (yf()) {
        case ho:
          return 1;
        case Zs:
          return 4;
        case Zr:
        case kf:
          return 16;
        case Js:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var at = null, ko = null, Fr = null;
function oa() {
  if (Fr) return Fr;
  var e, t = ko, n = t.length, r, l = "value" in at ? at.value : at.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Fr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Ar(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Pr() {
  return !0;
}
function hu() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Pr : hu, this.isPropagationStopped = hu, this;
  }
  return $(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Pr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Pr);
  }, persist: function() {
  }, isPersistent: Pr }), t;
}
var yn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, So = Pe(yn), fr = $({}, yn, { view: 0, detail: 0 }), Lf = Pe(fr), Hl, Bl, Dn, kl = $({}, fr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: wo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Dn && (Dn && e.type === "mousemove" ? (Hl = e.screenX - Dn.screenX, Bl = e.screenY - Dn.screenY) : Bl = Hl = 0, Dn = e), Hl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Bl;
} }), gu = Pe(kl), If = $({}, kl, { dataTransfer: 0 }), Mf = Pe(If), Of = $({}, fr, { relatedTarget: 0 }), $l = Pe(Of), jf = $({}, yn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Ff = Pe(jf), Af = $({}, yn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Uf = Pe(Af), Hf = $({}, yn, { data: 0 }), vu = Pe(Hf), Bf = {
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
}, $f = {
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
}, Vf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Wf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Vf[e]) ? !!t[e] : !1;
}
function wo() {
  return Wf;
}
var Qf = $({}, fr, { key: function(e) {
  if (e.key) {
    var t = Bf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Ar(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? $f[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: wo, charCode: function(e) {
  return e.type === "keypress" ? Ar(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Ar(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Kf = Pe(Qf), Yf = $({}, kl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), yu = Pe(Yf), Xf = $({}, fr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: wo }), Gf = Pe(Xf), Zf = $({}, yn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jf = Pe(Zf), qf = $({}, kl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), bf = Pe(qf), ed = [9, 13, 27, 32], Eo = qe && "CompositionEvent" in window, Un = null;
qe && "documentMode" in document && (Un = document.documentMode);
var td = qe && "TextEvent" in window && !Un, ua = qe && (!Eo || Un && 8 < Un && 11 >= Un), ku = " ", Su = !1;
function sa(e, t) {
  switch (e) {
    case "keyup":
      return ed.indexOf(t.keyCode) !== -1;
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
function aa(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Yt = !1;
function nd(e, t) {
  switch (e) {
    case "compositionend":
      return aa(t);
    case "keypress":
      return t.which !== 32 ? null : (Su = !0, ku);
    case "textInput":
      return e = t.data, e === ku && Su ? null : e;
    default:
      return null;
  }
}
function rd(e, t) {
  if (Yt) return e === "compositionend" || !Eo && sa(e, t) ? (e = oa(), Fr = ko = at = null, Yt = !1, e) : null;
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
      return ua && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var ld = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!ld[e.type] : t === "textarea";
}
function ca(e, t, n, r) {
  Bs(r), t = el(t, "onChange"), 0 < t.length && (n = new So("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Hn = null, qn = null;
function id(e) {
  wa(e, 0);
}
function Sl(e) {
  var t = Zt(e);
  if (Ms(t)) return e;
}
function od(e, t) {
  if (e === "change") return t;
}
var fa = !1;
if (qe) {
  var Vl;
  if (qe) {
    var Wl = "oninput" in document;
    if (!Wl) {
      var Eu = document.createElement("div");
      Eu.setAttribute("oninput", "return;"), Wl = typeof Eu.oninput == "function";
    }
    Vl = Wl;
  } else Vl = !1;
  fa = Vl && (!document.documentMode || 9 < document.documentMode);
}
function Cu() {
  Hn && (Hn.detachEvent("onpropertychange", da), qn = Hn = null);
}
function da(e) {
  if (e.propertyName === "value" && Sl(qn)) {
    var t = [];
    ca(t, qn, e, mo(e)), Qs(id, t);
  }
}
function ud(e, t, n) {
  e === "focusin" ? (Cu(), Hn = t, qn = n, Hn.attachEvent("onpropertychange", da)) : e === "focusout" && Cu();
}
function sd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Sl(qn);
}
function ad(e, t) {
  if (e === "click") return Sl(t);
}
function cd(e, t) {
  if (e === "input" || e === "change") return Sl(t);
}
function fd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ae = typeof Object.is == "function" ? Object.is : fd;
function bn(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!ci.call(t, l) || !Ae(e[l], t[l])) return !1;
  }
  return !0;
}
function Pu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function _u(e, t) {
  var n = Pu(e);
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
    n = Pu(n);
  }
}
function pa(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ma() {
  for (var e = window, t = Yr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Yr(e.document);
  }
  return t;
}
function Co(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function dd(e) {
  var t = ma(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && pa(n.ownerDocument.documentElement, n)) {
    if (r !== null && Co(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = _u(n, i);
        var o = _u(
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
var pd = qe && "documentMode" in document && 11 >= document.documentMode, Xt = null, Ti = null, Bn = null, zi = !1;
function xu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zi || Xt == null || Xt !== Yr(r) || (r = Xt, "selectionStart" in r && Co(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Bn && bn(Bn, r) || (Bn = r, r = el(Ti, "onSelect"), 0 < r.length && (t = new So("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Xt)));
}
function _r(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Gt = { animationend: _r("Animation", "AnimationEnd"), animationiteration: _r("Animation", "AnimationIteration"), animationstart: _r("Animation", "AnimationStart"), transitionend: _r("Transition", "TransitionEnd") }, Ql = {}, ha = {};
qe && (ha = document.createElement("div").style, "AnimationEvent" in window || (delete Gt.animationend.animation, delete Gt.animationiteration.animation, delete Gt.animationstart.animation), "TransitionEvent" in window || delete Gt.transitionend.transition);
function wl(e) {
  if (Ql[e]) return Ql[e];
  if (!Gt[e]) return e;
  var t = Gt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ha) return Ql[e] = t[n];
  return e;
}
var ga = wl("animationend"), va = wl("animationiteration"), ya = wl("animationstart"), ka = wl("transitionend"), Sa = /* @__PURE__ */ new Map(), Nu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function wt(e, t) {
  Sa.set(e, t), $t(t, [e]);
}
for (var Kl = 0; Kl < Nu.length; Kl++) {
  var Yl = Nu[Kl], md = Yl.toLowerCase(), hd = Yl[0].toUpperCase() + Yl.slice(1);
  wt(md, "on" + hd);
}
wt(ga, "onAnimationEnd");
wt(va, "onAnimationIteration");
wt(ya, "onAnimationStart");
wt("dblclick", "onDoubleClick");
wt("focusin", "onFocus");
wt("focusout", "onBlur");
wt(ka, "onTransitionEnd");
cn("onMouseEnter", ["mouseout", "mouseover"]);
cn("onMouseLeave", ["mouseout", "mouseover"]);
cn("onPointerEnter", ["pointerout", "pointerover"]);
cn("onPointerLeave", ["pointerout", "pointerover"]);
$t("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
$t("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
$t("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
$t("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
$t("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
$t("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var On = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), gd = new Set("cancel close invalid load scroll toggle".split(" ").concat(On));
function Du(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, mf(r, t, void 0, e), e.currentTarget = null;
}
function wa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, f = u.currentTarget;
        if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Du(l, u, f), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, f = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Du(l, u, f), i = s;
      }
    }
  }
  if (Gr) throw e = _i, Gr = !1, _i = null, e;
}
function F(e, t) {
  var n = t[Oi];
  n === void 0 && (n = t[Oi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ea(t, e, 2, !1), n.add(r));
}
function Xl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ea(n, e, r, t);
}
var xr = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[xr]) {
    e[xr] = !0, Ts.forEach(function(n) {
      n !== "selectionchange" && (gd.has(n) || Xl(n, !1, e), Xl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[xr] || (t[xr] = !0, Xl("selectionchange", !1, t));
  }
}
function Ea(e, t, n, r) {
  switch (ia(t)) {
    case 1:
      var l = zf;
      break;
    case 4:
      l = Rf;
      break;
    default:
      l = yo;
  }
  n = l.bind(null, t, n, e), l = void 0, !Pi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Gl(e, t, n, r, l) {
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
        if (o = Tt(u), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Qs(function() {
    var f = i, g = mo(n), m = [];
    e: {
      var p = Sa.get(e);
      if (p !== void 0) {
        var k = So, S = e;
        switch (e) {
          case "keypress":
            if (Ar(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = Kf;
            break;
          case "focusin":
            S = "focus", k = $l;
            break;
          case "focusout":
            S = "blur", k = $l;
            break;
          case "beforeblur":
          case "afterblur":
            k = $l;
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
            k = gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = Mf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = Gf;
            break;
          case ga:
          case va:
          case ya:
            k = Ff;
            break;
          case ka:
            k = Jf;
            break;
          case "scroll":
            k = Lf;
            break;
          case "wheel":
            k = bf;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = Uf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = yu;
        }
        var C = (t & 4) !== 0, M = !C && e === "scroll", d = C ? p !== null ? p + "Capture" : null : p;
        C = [];
        for (var a = f, c; a !== null; ) {
          c = a;
          var h = c.stateNode;
          if (c.tag === 5 && h !== null && (c = h, d !== null && (h = Xn(a, d), h != null && C.push(tr(a, h, c)))), M) break;
          a = a.return;
        }
        0 < C.length && (p = new k(p, S, null, n, g), m.push({ event: p, listeners: C }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", p && n !== Ei && (S = n.relatedTarget || n.fromElement) && (Tt(S) || S[be])) break e;
        if ((k || p) && (p = g.window === g ? g : (p = g.ownerDocument) ? p.defaultView || p.parentWindow : window, k ? (S = n.relatedTarget || n.toElement, k = f, S = S ? Tt(S) : null, S !== null && (M = Vt(S), S !== M || S.tag !== 5 && S.tag !== 6) && (S = null)) : (k = null, S = f), k !== S)) {
          if (C = gu, h = "onMouseLeave", d = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (C = yu, h = "onPointerLeave", d = "onPointerEnter", a = "pointer"), M = k == null ? p : Zt(k), c = S == null ? p : Zt(S), p = new C(h, a + "leave", k, n, g), p.target = M, p.relatedTarget = c, h = null, Tt(g) === f && (C = new C(d, a + "enter", S, n, g), C.target = c, C.relatedTarget = M, h = C), M = h, k && S) t: {
            for (C = k, d = S, a = 0, c = C; c; c = Wt(c)) a++;
            for (c = 0, h = d; h; h = Wt(h)) c++;
            for (; 0 < a - c; ) C = Wt(C), a--;
            for (; 0 < c - a; ) d = Wt(d), c--;
            for (; a--; ) {
              if (C === d || d !== null && C === d.alternate) break t;
              C = Wt(C), d = Wt(d);
            }
            C = null;
          }
          else C = null;
          k !== null && Tu(m, p, k, C, !1), S !== null && M !== null && Tu(m, M, S, C, !0);
        }
      }
      e: {
        if (p = f ? Zt(f) : window, k = p.nodeName && p.nodeName.toLowerCase(), k === "select" || k === "input" && p.type === "file") var y = od;
        else if (wu(p)) if (fa) y = cd;
        else {
          y = sd;
          var E = ud;
        }
        else (k = p.nodeName) && k.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (y = ad);
        if (y && (y = y(e, f))) {
          ca(m, y, n, g);
          break e;
        }
        E && E(e, p, f), e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && vi(p, "number", p.value);
      }
      switch (E = f ? Zt(f) : window, e) {
        case "focusin":
          (wu(E) || E.contentEditable === "true") && (Xt = E, Ti = f, Bn = null);
          break;
        case "focusout":
          Bn = Ti = Xt = null;
          break;
        case "mousedown":
          zi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          zi = !1, xu(m, n, g);
          break;
        case "selectionchange":
          if (pd) break;
        case "keydown":
        case "keyup":
          xu(m, n, g);
      }
      var w;
      if (Eo) e: {
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
      else Yt ? sa(e, n) && (P = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P && (ua && n.locale !== "ko" && (Yt || P !== "onCompositionStart" ? P === "onCompositionEnd" && Yt && (w = oa()) : (at = g, ko = "value" in at ? at.value : at.textContent, Yt = !0)), E = el(f, P), 0 < E.length && (P = new vu(P, e, null, n, g), m.push({ event: P, listeners: E }), w ? P.data = w : (w = aa(n), w !== null && (P.data = w)))), (w = td ? nd(e, n) : rd(e, n)) && (f = el(f, "onBeforeInput"), 0 < f.length && (g = new vu("onBeforeInput", "beforeinput", null, n, g), m.push({ event: g, listeners: f }), g.data = w));
    }
    wa(m, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function el(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Xn(e, n), i != null && r.unshift(tr(e, i, l)), i = Xn(e, t), i != null && r.push(tr(e, i, l))), e = e.return;
  }
  return r;
}
function Wt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, l ? (s = Xn(n, i), s != null && o.unshift(tr(n, s, u))) : l || (s = Xn(n, i), s != null && o.push(tr(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var vd = /\r\n?/g, yd = /\u0000|\uFFFD/g;
function zu(e) {
  return (typeof e == "string" ? e : "" + e).replace(vd, `
`).replace(yd, "");
}
function Nr(e, t, n) {
  if (t = zu(t), zu(e) !== t && n) throw Error(v(425));
}
function tl() {
}
var Ri = null, Li = null;
function Ii(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Mi = typeof setTimeout == "function" ? setTimeout : void 0, kd = typeof clearTimeout == "function" ? clearTimeout : void 0, Ru = typeof Promise == "function" ? Promise : void 0, Sd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ru < "u" ? function(e) {
  return Ru.resolve(null).then(e).catch(wd);
} : Mi;
function wd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Zl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Jn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Jn(t);
}
function mt(e) {
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
function Lu(e) {
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
var kn = Math.random().toString(36).slice(2), $e = "__reactFiber$" + kn, nr = "__reactProps$" + kn, be = "__reactContainer$" + kn, Oi = "__reactEvents$" + kn, Ed = "__reactListeners$" + kn, Cd = "__reactHandles$" + kn;
function Tt(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[be] || n[$e]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Lu(e); e !== null; ) {
        if (n = e[$e]) return n;
        e = Lu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function dr(e) {
  return e = e[$e] || e[be], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Zt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(v(33));
}
function El(e) {
  return e[nr] || null;
}
var ji = [], Jt = -1;
function Et(e) {
  return { current: e };
}
function A(e) {
  0 > Jt || (e.current = ji[Jt], ji[Jt] = null, Jt--);
}
function j(e, t) {
  Jt++, ji[Jt] = e.current, e.current = t;
}
var St = {}, ue = Et(St), ge = Et(!1), jt = St;
function fn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ve(e) {
  return e = e.childContextTypes, e != null;
}
function nl() {
  A(ge), A(ue);
}
function Iu(e, t, n) {
  if (ue.current !== St) throw Error(v(168));
  j(ue, t), j(ge, n);
}
function Ca(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(v(108, uf(e) || "Unknown", l));
  return $({}, n, r);
}
function rl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || St, jt = ue.current, j(ue, e), j(ge, ge.current), !0;
}
function Mu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(v(169));
  n ? (e = Ca(e, t, jt), r.__reactInternalMemoizedMergedChildContext = e, A(ge), A(ue), j(ue, e)) : A(ge), j(ge, n);
}
var Xe = null, Cl = !1, Jl = !1;
function Pa(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
function Pd(e) {
  Cl = !0, Pa(e);
}
function Ct() {
  if (!Jl && Xe !== null) {
    Jl = !0;
    var e = 0, t = O;
    try {
      var n = Xe;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Xe = null, Cl = !1;
    } catch (l) {
      throw Xe !== null && (Xe = Xe.slice(e + 1)), Gs(ho, Ct), l;
    } finally {
      O = t, Jl = !1;
    }
  }
  return null;
}
var qt = [], bt = 0, ll = null, il = 0, xe = [], Ne = 0, Ft = null, Ge = 1, Ze = "";
function Nt(e, t) {
  qt[bt++] = il, qt[bt++] = ll, ll = e, il = t;
}
function _a(e, t, n) {
  xe[Ne++] = Ge, xe[Ne++] = Ze, xe[Ne++] = Ft, Ft = e;
  var r = Ge;
  e = Ze;
  var l = 32 - je(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - je(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ge = 1 << 32 - je(t) + l | n << l | r, Ze = i + e;
  } else Ge = 1 << i | n << l | r, Ze = e;
}
function Po(e) {
  e.return !== null && (Nt(e, 1), _a(e, 1, 0));
}
function _o(e) {
  for (; e === ll; ) ll = qt[--bt], qt[bt] = null, il = qt[--bt], qt[bt] = null;
  for (; e === Ft; ) Ft = xe[--Ne], xe[Ne] = null, Ze = xe[--Ne], xe[Ne] = null, Ge = xe[--Ne], xe[Ne] = null;
}
var we = null, Se = null, U = !1, Oe = null;
function xa(e, t) {
  var n = De(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Ou(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, we = e, Se = mt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, we = e, Se = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ft !== null ? { id: Ge, overflow: Ze } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = De(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, we = e, Se = null, !0) : !1;
    default:
      return !1;
  }
}
function Fi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ai(e) {
  if (U) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Ou(e, t)) {
        if (Fi(e)) throw Error(v(418));
        t = mt(n.nextSibling);
        var r = we;
        t && Ou(e, t) ? xa(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, we = e);
      }
    } else {
      if (Fi(e)) throw Error(v(418));
      e.flags = e.flags & -4097 | 2, U = !1, we = e;
    }
  }
}
function ju(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  we = e;
}
function Dr(e) {
  if (e !== we) return !1;
  if (!U) return ju(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ii(e.type, e.memoizedProps)), t && (t = Se)) {
    if (Fi(e)) throw Na(), Error(v(418));
    for (; t; ) xa(e, t), t = mt(t.nextSibling);
  }
  if (ju(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(v(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = mt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = we ? mt(e.stateNode.nextSibling) : null;
  return !0;
}
function Na() {
  for (var e = Se; e; ) e = mt(e.nextSibling);
}
function dn() {
  Se = we = null, U = !1;
}
function xo(e) {
  Oe === null ? Oe = [e] : Oe.push(e);
}
var _d = nt.ReactCurrentBatchConfig;
function Tn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(v(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(v(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(v(284));
    if (!n._owner) throw Error(v(290, e));
  }
  return e;
}
function Tr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(v(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Fu(e) {
  var t = e._init;
  return t(e._payload);
}
function Da(e) {
  function t(d, a) {
    if (e) {
      var c = d.deletions;
      c === null ? (d.deletions = [a], d.flags |= 16) : c.push(a);
    }
  }
  function n(d, a) {
    if (!e) return null;
    for (; a !== null; ) t(d, a), a = a.sibling;
    return null;
  }
  function r(d, a) {
    for (d = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? d.set(a.key, a) : d.set(a.index, a), a = a.sibling;
    return d;
  }
  function l(d, a) {
    return d = yt(d, a), d.index = 0, d.sibling = null, d;
  }
  function i(d, a, c) {
    return d.index = c, e ? (c = d.alternate, c !== null ? (c = c.index, c < a ? (d.flags |= 2, a) : c) : (d.flags |= 2, a)) : (d.flags |= 1048576, a);
  }
  function o(d) {
    return e && d.alternate === null && (d.flags |= 2), d;
  }
  function u(d, a, c, h) {
    return a === null || a.tag !== 6 ? (a = li(c, d.mode, h), a.return = d, a) : (a = l(a, c), a.return = d, a);
  }
  function s(d, a, c, h) {
    var y = c.type;
    return y === Kt ? g(d, a, c.props.children, h, c.key) : a !== null && (a.elementType === y || typeof y == "object" && y !== null && y.$$typeof === it && Fu(y) === a.type) ? (h = l(a, c.props), h.ref = Tn(d, a, c), h.return = d, h) : (h = Qr(c.type, c.key, c.props, null, d.mode, h), h.ref = Tn(d, a, c), h.return = d, h);
  }
  function f(d, a, c, h) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== c.containerInfo || a.stateNode.implementation !== c.implementation ? (a = ii(c, d.mode, h), a.return = d, a) : (a = l(a, c.children || []), a.return = d, a);
  }
  function g(d, a, c, h, y) {
    return a === null || a.tag !== 7 ? (a = Ot(c, d.mode, h, y), a.return = d, a) : (a = l(a, c), a.return = d, a);
  }
  function m(d, a, c) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = li("" + a, d.mode, c), a.return = d, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case yr:
          return c = Qr(a.type, a.key, a.props, null, d.mode, c), c.ref = Tn(d, null, a), c.return = d, c;
        case Qt:
          return a = ii(a, d.mode, c), a.return = d, a;
        case it:
          var h = a._init;
          return m(d, h(a._payload), c);
      }
      if (In(a) || Pn(a)) return a = Ot(a, d.mode, c, null), a.return = d, a;
      Tr(d, a);
    }
    return null;
  }
  function p(d, a, c, h) {
    var y = a !== null ? a.key : null;
    if (typeof c == "string" && c !== "" || typeof c == "number") return y !== null ? null : u(d, a, "" + c, h);
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case yr:
          return c.key === y ? s(d, a, c, h) : null;
        case Qt:
          return c.key === y ? f(d, a, c, h) : null;
        case it:
          return y = c._init, p(
            d,
            a,
            y(c._payload),
            h
          );
      }
      if (In(c) || Pn(c)) return y !== null ? null : g(d, a, c, h, null);
      Tr(d, c);
    }
    return null;
  }
  function k(d, a, c, h, y) {
    if (typeof h == "string" && h !== "" || typeof h == "number") return d = d.get(c) || null, u(a, d, "" + h, y);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case yr:
          return d = d.get(h.key === null ? c : h.key) || null, s(a, d, h, y);
        case Qt:
          return d = d.get(h.key === null ? c : h.key) || null, f(a, d, h, y);
        case it:
          var E = h._init;
          return k(d, a, c, E(h._payload), y);
      }
      if (In(h) || Pn(h)) return d = d.get(c) || null, g(a, d, h, y, null);
      Tr(a, h);
    }
    return null;
  }
  function S(d, a, c, h) {
    for (var y = null, E = null, w = a, P = a = 0, D = null; w !== null && P < c.length; P++) {
      w.index > P ? (D = w, w = null) : D = w.sibling;
      var z = p(d, w, c[P], h);
      if (z === null) {
        w === null && (w = D);
        break;
      }
      e && w && z.alternate === null && t(d, w), a = i(z, a, P), E === null ? y = z : E.sibling = z, E = z, w = D;
    }
    if (P === c.length) return n(d, w), U && Nt(d, P), y;
    if (w === null) {
      for (; P < c.length; P++) w = m(d, c[P], h), w !== null && (a = i(w, a, P), E === null ? y = w : E.sibling = w, E = w);
      return U && Nt(d, P), y;
    }
    for (w = r(d, w); P < c.length; P++) D = k(w, d, P, c[P], h), D !== null && (e && D.alternate !== null && w.delete(D.key === null ? P : D.key), a = i(D, a, P), E === null ? y = D : E.sibling = D, E = D);
    return e && w.forEach(function(pe) {
      return t(d, pe);
    }), U && Nt(d, P), y;
  }
  function C(d, a, c, h) {
    var y = Pn(c);
    if (typeof y != "function") throw Error(v(150));
    if (c = y.call(c), c == null) throw Error(v(151));
    for (var E = y = null, w = a, P = a = 0, D = null, z = c.next(); w !== null && !z.done; P++, z = c.next()) {
      w.index > P ? (D = w, w = null) : D = w.sibling;
      var pe = p(d, w, z.value, h);
      if (pe === null) {
        w === null && (w = D);
        break;
      }
      e && w && pe.alternate === null && t(d, w), a = i(pe, a, P), E === null ? y = pe : E.sibling = pe, E = pe, w = D;
    }
    if (z.done) return n(
      d,
      w
    ), U && Nt(d, P), y;
    if (w === null) {
      for (; !z.done; P++, z = c.next()) z = m(d, z.value, h), z !== null && (a = i(z, a, P), E === null ? y = z : E.sibling = z, E = z);
      return U && Nt(d, P), y;
    }
    for (w = r(d, w); !z.done; P++, z = c.next()) z = k(w, d, P, z.value, h), z !== null && (e && z.alternate !== null && w.delete(z.key === null ? P : z.key), a = i(z, a, P), E === null ? y = z : E.sibling = z, E = z);
    return e && w.forEach(function(_e) {
      return t(d, _e);
    }), U && Nt(d, P), y;
  }
  function M(d, a, c, h) {
    if (typeof c == "object" && c !== null && c.type === Kt && c.key === null && (c = c.props.children), typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case yr:
          e: {
            for (var y = c.key, E = a; E !== null; ) {
              if (E.key === y) {
                if (y = c.type, y === Kt) {
                  if (E.tag === 7) {
                    n(d, E.sibling), a = l(E, c.props.children), a.return = d, d = a;
                    break e;
                  }
                } else if (E.elementType === y || typeof y == "object" && y !== null && y.$$typeof === it && Fu(y) === E.type) {
                  n(d, E.sibling), a = l(E, c.props), a.ref = Tn(d, E, c), a.return = d, d = a;
                  break e;
                }
                n(d, E);
                break;
              } else t(d, E);
              E = E.sibling;
            }
            c.type === Kt ? (a = Ot(c.props.children, d.mode, h, c.key), a.return = d, d = a) : (h = Qr(c.type, c.key, c.props, null, d.mode, h), h.ref = Tn(d, a, c), h.return = d, d = h);
          }
          return o(d);
        case Qt:
          e: {
            for (E = c.key; a !== null; ) {
              if (a.key === E) if (a.tag === 4 && a.stateNode.containerInfo === c.containerInfo && a.stateNode.implementation === c.implementation) {
                n(d, a.sibling), a = l(a, c.children || []), a.return = d, d = a;
                break e;
              } else {
                n(d, a);
                break;
              }
              else t(d, a);
              a = a.sibling;
            }
            a = ii(c, d.mode, h), a.return = d, d = a;
          }
          return o(d);
        case it:
          return E = c._init, M(d, a, E(c._payload), h);
      }
      if (In(c)) return S(d, a, c, h);
      if (Pn(c)) return C(d, a, c, h);
      Tr(d, c);
    }
    return typeof c == "string" && c !== "" || typeof c == "number" ? (c = "" + c, a !== null && a.tag === 6 ? (n(d, a.sibling), a = l(a, c), a.return = d, d = a) : (n(d, a), a = li(c, d.mode, h), a.return = d, d = a), o(d)) : n(d, a);
  }
  return M;
}
var pn = Da(!0), Ta = Da(!1), ol = Et(null), ul = null, en = null, No = null;
function Do() {
  No = en = ul = null;
}
function To(e) {
  var t = ol.current;
  A(ol), e._currentValue = t;
}
function Ui(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function sn(e, t) {
  ul = e, No = en = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (he = !0), e.firstContext = null);
}
function ze(e) {
  var t = e._currentValue;
  if (No !== e) if (e = { context: e, memoizedValue: t, next: null }, en === null) {
    if (ul === null) throw Error(v(308));
    en = e, ul.dependencies = { lanes: 0, firstContext: e };
  } else en = en.next = e;
  return t;
}
var zt = null;
function zo(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function za(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, zo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, et(e, r);
}
function et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ot = !1;
function Ro(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Ra(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Je(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, I & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, et(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, zo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, et(e, n);
}
function Ur(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, go(e, n);
  }
}
function Au(e, t) {
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
function sl(e, t, n, r) {
  var l = e.updateQueue;
  ot = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, o === null ? i = f : o.next = f, o = s;
    var g = e.alternate;
    g !== null && (g = g.updateQueue, u = g.lastBaseUpdate, u !== o && (u === null ? g.firstBaseUpdate = f : u.next = f, g.lastBaseUpdate = s));
  }
  if (i !== null) {
    var m = l.baseState;
    o = 0, g = f = s = null, u = i;
    do {
      var p = u.lane, k = u.eventTime;
      if ((r & p) === p) {
        g !== null && (g = g.next = {
          eventTime: k,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var S = e, C = u;
          switch (p = t, k = n, C.tag) {
            case 1:
              if (S = C.payload, typeof S == "function") {
                m = S.call(k, m, p);
                break e;
              }
              m = S;
              break e;
            case 3:
              S.flags = S.flags & -65537 | 128;
            case 0:
              if (S = C.payload, p = typeof S == "function" ? S.call(k, m, p) : S, p == null) break e;
              m = $({}, m, p);
              break e;
            case 2:
              ot = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else k = { eventTime: k, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, g === null ? (f = g = k, s = m) : g = g.next = k, o |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (g === null && (s = m), l.baseState = s, l.firstBaseUpdate = f, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Ut |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Uu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(v(191, l));
      l.call(r);
    }
  }
}
var pr = {}, We = Et(pr), rr = Et(pr), lr = Et(pr);
function Rt(e) {
  if (e === pr) throw Error(v(174));
  return e;
}
function Lo(e, t) {
  switch (j(lr, t), j(rr, e), j(We, pr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : ki(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = ki(t, e);
  }
  A(We), j(We, t);
}
function mn() {
  A(We), A(rr), A(lr);
}
function La(e) {
  Rt(lr.current);
  var t = Rt(We.current), n = ki(t, e.type);
  t !== n && (j(rr, e), j(We, n));
}
function Io(e) {
  rr.current === e && (A(We), A(rr));
}
var H = Et(0);
function al(e) {
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
var ql = [];
function Mo() {
  for (var e = 0; e < ql.length; e++) ql[e]._workInProgressVersionPrimary = null;
  ql.length = 0;
}
var Hr = nt.ReactCurrentDispatcher, bl = nt.ReactCurrentBatchConfig, At = 0, B = null, Y = null, J = null, cl = !1, $n = !1, ir = 0, xd = 0;
function re() {
  throw Error(v(321));
}
function Oo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function jo(e, t, n, r, l, i) {
  if (At = i, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Hr.current = e === null || e.memoizedState === null ? zd : Rd, e = n(r, l), $n) {
    i = 0;
    do {
      if ($n = !1, ir = 0, 25 <= i) throw Error(v(301));
      i += 1, J = Y = null, t.updateQueue = null, Hr.current = Ld, e = n(r, l);
    } while ($n);
  }
  if (Hr.current = fl, t = Y !== null && Y.next !== null, At = 0, J = Y = B = null, cl = !1, t) throw Error(v(300));
  return e;
}
function Fo() {
  var e = ir !== 0;
  return ir = 0, e;
}
function He() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return J === null ? B.memoizedState = J = e : J = J.next = e, J;
}
function Re() {
  if (Y === null) {
    var e = B.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = J === null ? B.memoizedState : J.next;
  if (t !== null) J = t, Y = e;
  else {
    if (e === null) throw Error(v(310));
    Y = e, e = { memoizedState: Y.memoizedState, baseState: Y.baseState, baseQueue: Y.baseQueue, queue: Y.queue, next: null }, J === null ? B.memoizedState = J = e : J = J.next = e;
  }
  return J;
}
function or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ei(e) {
  var t = Re(), n = t.queue;
  if (n === null) throw Error(v(311));
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
    var u = o = null, s = null, f = i;
    do {
      var g = f.lane;
      if ((At & g) === g) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var m = {
          lane: g,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (u = s = m, o = r) : s = s.next = m, B.lanes |= g, Ut |= g;
      }
      f = f.next;
    } while (f !== null && f !== i);
    s === null ? o = r : s.next = u, Ae(r, t.memoizedState) || (he = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, B.lanes |= i, Ut |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ti(e) {
  var t = Re(), n = t.queue;
  if (n === null) throw Error(v(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Ae(i, t.memoizedState) || (he = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Ia() {
}
function Ma(e, t) {
  var n = B, r = Re(), l = t(), i = !Ae(r.memoizedState, l);
  if (i && (r.memoizedState = l, he = !0), r = r.queue, Ao(Fa.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || J !== null && J.memoizedState.tag & 1) {
    if (n.flags |= 2048, ur(9, ja.bind(null, n, r, l, t), void 0, null), q === null) throw Error(v(349));
    At & 30 || Oa(n, t, l);
  }
  return l;
}
function Oa(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = B.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, B.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function ja(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Aa(t) && Ua(e);
}
function Fa(e, t, n) {
  return n(function() {
    Aa(t) && Ua(e);
  });
}
function Aa(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function Ua(e) {
  var t = et(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Hu(e) {
  var t = He();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: or, lastRenderedState: e }, t.queue = e, e = e.dispatch = Td.bind(null, B, e), [t.memoizedState, e];
}
function ur(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = B.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, B.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ha() {
  return Re().memoizedState;
}
function Br(e, t, n, r) {
  var l = He();
  B.flags |= e, l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r);
}
function Pl(e, t, n, r) {
  var l = Re();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Y !== null) {
    var o = Y.memoizedState;
    if (i = o.destroy, r !== null && Oo(r, o.deps)) {
      l.memoizedState = ur(t, n, i, r);
      return;
    }
  }
  B.flags |= e, l.memoizedState = ur(1 | t, n, i, r);
}
function Bu(e, t) {
  return Br(8390656, 8, e, t);
}
function Ao(e, t) {
  return Pl(2048, 8, e, t);
}
function Ba(e, t) {
  return Pl(4, 2, e, t);
}
function $a(e, t) {
  return Pl(4, 4, e, t);
}
function Va(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Wa(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Pl(4, 4, Va.bind(null, t, e), n);
}
function Uo() {
}
function Qa(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ka(e, t) {
  var n = Re();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Oo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ya(e, t, n) {
  return At & 21 ? (Ae(n, t) || (n = qs(), B.lanes |= n, Ut |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, he = !0), e.memoizedState = n);
}
function Nd(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = bl.transition;
  bl.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, bl.transition = r;
  }
}
function Xa() {
  return Re().memoizedState;
}
function Dd(e, t, n) {
  var r = vt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ga(e)) Za(t, n);
  else if (n = za(e, t, n, r), n !== null) {
    var l = ce();
    Fe(n, e, r, l), Ja(n, t, r);
  }
}
function Td(e, t, n) {
  var r = vt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ga(e)) Za(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ae(u, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, zo(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = za(e, t, l, r), n !== null && (l = ce(), Fe(n, e, r, l), Ja(n, t, r));
  }
}
function Ga(e) {
  var t = e.alternate;
  return e === B || t !== null && t === B;
}
function Za(e, t) {
  $n = cl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ja(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, go(e, n);
  }
}
var fl = { readContext: ze, useCallback: re, useContext: re, useEffect: re, useImperativeHandle: re, useInsertionEffect: re, useLayoutEffect: re, useMemo: re, useReducer: re, useRef: re, useState: re, useDebugValue: re, useDeferredValue: re, useTransition: re, useMutableSource: re, useSyncExternalStore: re, useId: re, unstable_isNewReconciler: !1 }, zd = { readContext: ze, useCallback: function(e, t) {
  return He().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: ze, useEffect: Bu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Br(
    4194308,
    4,
    Va.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Br(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Br(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = He();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = He();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Dd.bind(null, B, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = He();
  return e = { current: e }, t.memoizedState = e;
}, useState: Hu, useDebugValue: Uo, useDeferredValue: function(e) {
  return He().memoizedState = e;
}, useTransition: function() {
  var e = Hu(!1), t = e[0];
  return e = Nd.bind(null, e[1]), He().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = B, l = He();
  if (U) {
    if (n === void 0) throw Error(v(407));
    n = n();
  } else {
    if (n = t(), q === null) throw Error(v(349));
    At & 30 || Oa(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Bu(Fa.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ur(9, ja.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = He(), t = q.identifierPrefix;
  if (U) {
    var n = Ze, r = Ge;
    n = (r & ~(1 << 32 - je(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = xd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Rd = {
  readContext: ze,
  useCallback: Qa,
  useContext: ze,
  useEffect: Ao,
  useImperativeHandle: Wa,
  useInsertionEffect: Ba,
  useLayoutEffect: $a,
  useMemo: Ka,
  useReducer: ei,
  useRef: Ha,
  useState: function() {
    return ei(or);
  },
  useDebugValue: Uo,
  useDeferredValue: function(e) {
    var t = Re();
    return Ya(t, Y.memoizedState, e);
  },
  useTransition: function() {
    var e = ei(or)[0], t = Re().memoizedState;
    return [e, t];
  },
  useMutableSource: Ia,
  useSyncExternalStore: Ma,
  useId: Xa,
  unstable_isNewReconciler: !1
}, Ld = { readContext: ze, useCallback: Qa, useContext: ze, useEffect: Ao, useImperativeHandle: Wa, useInsertionEffect: Ba, useLayoutEffect: $a, useMemo: Ka, useReducer: ti, useRef: Ha, useState: function() {
  return ti(or);
}, useDebugValue: Uo, useDeferredValue: function(e) {
  var t = Re();
  return Y === null ? t.memoizedState = e : Ya(t, Y.memoizedState, e);
}, useTransition: function() {
  var e = ti(or)[0], t = Re().memoizedState;
  return [e, t];
}, useMutableSource: Ia, useSyncExternalStore: Ma, useId: Xa, unstable_isNewReconciler: !1 };
function Ie(e, t) {
  if (e && e.defaultProps) {
    t = $({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : $({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var _l = { isMounted: function(e) {
  return (e = e._reactInternals) ? Vt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = vt(e), i = Je(r, l);
  i.payload = t, n != null && (i.callback = n), t = ht(e, i, l), t !== null && (Fe(t, e, l, r), Ur(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = vt(e), i = Je(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ht(e, i, l), t !== null && (Fe(t, e, l, r), Ur(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ce(), r = vt(e), l = Je(n, r);
  l.tag = 2, t != null && (l.callback = t), t = ht(e, l, r), t !== null && (Fe(t, e, r, n), Ur(t, e, r));
} };
function $u(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !bn(n, r) || !bn(l, i) : !0;
}
function qa(e, t, n) {
  var r = !1, l = St, i = t.contextType;
  return typeof i == "object" && i !== null ? i = ze(i) : (l = ve(t) ? jt : ue.current, r = t.contextTypes, i = (r = r != null) ? fn(e, l) : St), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = _l, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Vu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && _l.enqueueReplaceState(t, t.state, null);
}
function Bi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ro(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = ze(i) : (i = ve(t) ? jt : ue.current, l.context = fn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Hi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && _l.enqueueReplaceState(l, l.state, null), sl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function hn(e, t) {
  try {
    var n = "", r = t;
    do
      n += of(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ni(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function $i(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Id = typeof WeakMap == "function" ? WeakMap : Map;
function ba(e, t, n) {
  n = Je(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    pl || (pl = !0, qi = r), $i(e, t);
  }, n;
}
function ec(e, t, n) {
  n = Je(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      $i(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    $i(e, t), typeof r != "function" && (gt === null ? gt = /* @__PURE__ */ new Set([this]) : gt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Wu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Id();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Yd.bind(null, e, t, n), t.then(e, e));
}
function Qu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ku(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Je(-1, 1), t.tag = 2, ht(n, t, 1))), n.lanes |= 1), e);
}
var Md = nt.ReactCurrentOwner, he = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Ta(t, null, n, r) : pn(t, e.child, n, r);
}
function Yu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return sn(t, l), r = jo(e, t, n, r, i, l), n = Fo(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : (U && n && Po(t), t.flags |= 1, ae(e, t, r, l), t.child);
}
function Xu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Yo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, tc(e, t, i, r, l)) : (e = Qr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : bn, n(o, r) && e.ref === t.ref) return tt(e, t, l);
  }
  return t.flags |= 1, e = yt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function tc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bn(i, r) && e.ref === t.ref) if (he = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (he = !0);
    else return t.lanes = e.lanes, tt(e, t, l);
  }
  return Vi(e, t, n, r, l);
}
function nc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, j(nn, ke), ke |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, j(nn, ke), ke |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, j(nn, ke), ke |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, j(nn, ke), ke |= r;
  return ae(e, t, l, n), t.child;
}
function rc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Vi(e, t, n, r, l) {
  var i = ve(n) ? jt : ue.current;
  return i = fn(t, i), sn(t, l), n = jo(e, t, n, r, i, l), r = Fo(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : (U && r && Po(t), t.flags |= 1, ae(e, t, n, l), t.child);
}
function Gu(e, t, n, r, l) {
  if (ve(n)) {
    var i = !0;
    rl(t);
  } else i = !1;
  if (sn(t, l), t.stateNode === null) $r(e, t), qa(t, n, r), Bi(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = ze(f) : (f = ve(n) ? jt : ue.current, f = fn(t, f));
    var g = n.getDerivedStateFromProps, m = typeof g == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== f) && Vu(t, o, r, f), ot = !1;
    var p = t.memoizedState;
    o.state = p, sl(t, r, o, l), s = t.memoizedState, u !== r || p !== s || ge.current || ot ? (typeof g == "function" && (Hi(t, n, g, r), s = t.memoizedState), (u = ot || $u(t, n, u, r, p, s, f)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = f, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Ra(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : Ie(t.type, u), o.props = f, m = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = ze(s) : (s = ve(n) ? jt : ue.current, s = fn(t, s));
    var k = n.getDerivedStateFromProps;
    (g = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || p !== s) && Vu(t, o, r, s), ot = !1, p = t.memoizedState, o.state = p, sl(t, r, o, l);
    var S = t.memoizedState;
    u !== m || p !== S || ge.current || ot ? (typeof k == "function" && (Hi(t, n, k, r), S = t.memoizedState), (f = ot || $u(t, n, f, r, p, S, s) || !1) ? (g || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, S, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, S, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = S), o.props = r, o.state = S, o.context = s, r = f) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Wi(e, t, n, r, i, l);
}
function Wi(e, t, n, r, l, i) {
  rc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Mu(t, n, !1), tt(e, t, i);
  r = t.stateNode, Md.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = pn(t, e.child, null, i), t.child = pn(t, null, u, i)) : ae(e, t, u, i), t.memoizedState = r.state, l && Mu(t, n, !0), t.child;
}
function lc(e) {
  var t = e.stateNode;
  t.pendingContext ? Iu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Iu(e, t.context, !1), Lo(e, t.containerInfo);
}
function Zu(e, t, n, r, l) {
  return dn(), xo(l), t.flags |= 256, ae(e, t, n, r), t.child;
}
var Qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Ki(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ic(e, t, n) {
  var r = t.pendingProps, l = H.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), j(H, l & 1), e === null)
    return Ai(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Dl(o, r, 0, null), e = Ot(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Ki(n), t.memoizedState = Qi, e) : Ho(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Od(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = yt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = yt(u, i) : (i = Ot(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Ki(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Qi, r;
  }
  return i = e.child, e = i.sibling, r = yt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ho(e, t) {
  return t = Dl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function zr(e, t, n, r) {
  return r !== null && xo(r), pn(t, e.child, null, n), e = Ho(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Od(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ni(Error(v(422))), zr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Dl({ mode: "visible", children: r.children }, l, 0, null), i = Ot(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && pn(t, e.child, null, o), t.child.memoizedState = Ki(o), t.memoizedState = Qi, i);
  if (!(t.mode & 1)) return zr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(v(419)), r = ni(i, r, void 0), zr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, he || u) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, et(e, l), Fe(r, e, l, -1));
    }
    return Ko(), r = ni(Error(v(421))), zr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Xd.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Se = mt(l.nextSibling), we = t, U = !0, Oe = null, e !== null && (xe[Ne++] = Ge, xe[Ne++] = Ze, xe[Ne++] = Ft, Ge = e.id, Ze = e.overflow, Ft = t), t = Ho(t, r.children), t.flags |= 4096, t);
}
function Ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ui(e.return, t, n);
}
function ri(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function oc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ae(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && Ju(e, n, t);
      else if (e.tag === 19) Ju(e, n, t);
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
  if (j(H, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && al(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ri(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && al(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ri(t, !0, n, null, i);
      break;
    case "together":
      ri(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function $r(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function tt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Ut |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(v(153));
  if (t.child !== null) {
    for (e = t.child, n = yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = yt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function jd(e, t, n) {
  switch (t.tag) {
    case 3:
      lc(t), dn();
      break;
    case 5:
      La(t);
      break;
    case 1:
      ve(t.type) && rl(t);
      break;
    case 4:
      Lo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      j(ol, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (j(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ic(e, t, n) : (j(H, H.current & 1), e = tt(e, t, n), e !== null ? e.sibling : null);
      j(H, H.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return oc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), j(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, nc(e, t, n);
  }
  return tt(e, t, n);
}
var uc, Yi, sc, ac;
uc = function(e, t) {
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
Yi = function() {
};
sc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Rt(We.current);
    var i = null;
    switch (n) {
      case "input":
        l = hi(e, l), r = hi(e, r), i = [];
        break;
      case "select":
        l = $({}, l, { value: void 0 }), r = $({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = yi(e, l), r = yi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = tl);
    }
    Si(n, r);
    var o;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var u = l[f];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Kn.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Kn.hasOwnProperty(f) ? (s != null && f === "onScroll" && F("scroll", e), i || u === s || (i = [])) : (i = i || []).push(f, s));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
ac = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function zn(e, t) {
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
function Fd(e, t, n) {
  var r = t.pendingProps;
  switch (_o(t), t.tag) {
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
      return ve(t.type) && nl(), le(t), null;
    case 3:
      return r = t.stateNode, mn(), A(ge), A(ue), Mo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Dr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Oe !== null && (to(Oe), Oe = null))), Yi(e, t), le(t), null;
    case 5:
      Io(t);
      var l = Rt(lr.current);
      if (n = t.type, e !== null && t.stateNode != null) sc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(v(166));
          return le(t), null;
        }
        if (e = Rt(We.current), Dr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[$e] = t, r[nr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < On.length; l++) F(On[l], r);
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
              ou(r, i), F("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, F("invalid", r);
              break;
            case "textarea":
              su(r, i), F("invalid", r);
          }
          Si(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Nr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Nr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Kn.hasOwnProperty(o) && u != null && o === "onScroll" && F("scroll", r);
          }
          switch (n) {
            case "input":
              kr(r), uu(r, i, !0);
              break;
            case "textarea":
              kr(r), au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = tl);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Fs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[$e] = t, e[nr] = r, uc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = wi(n, r), n) {
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
                for (l = 0; l < On.length; l++) F(On[l], e);
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
                ou(e, r), l = hi(e, r), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = $({}, r, { value: void 0 }), F("invalid", e);
                break;
              case "textarea":
                su(e, r), l = yi(e, r), F("invalid", e);
                break;
              default:
                l = r;
            }
            Si(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? Hs(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && As(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Yn(e, s) : typeof s == "number" && Yn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Kn.hasOwnProperty(i) ? s != null && i === "onScroll" && F("scroll", e) : s != null && ao(e, i, s, o));
            }
            switch (n) {
              case "input":
                kr(e), uu(e, r, !1);
                break;
              case "textarea":
                kr(e), au(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? rn(e, !!r.multiple, i, !1) : r.defaultValue != null && rn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = tl);
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
      if (e && t.stateNode != null) ac(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(v(166));
        if (n = Rt(lr.current), Rt(We.current), Dr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[$e] = t, (i = r.nodeValue !== n) && (e = we, e !== null)) switch (e.tag) {
            case 3:
              Nr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Nr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$e] = t, t.stateNode = r;
      }
      return le(t), null;
    case 13:
      if (A(H), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && Se !== null && t.mode & 1 && !(t.flags & 128)) Na(), dn(), t.flags |= 98560, i = !1;
        else if (i = Dr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(v(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(v(317));
            i[$e] = t;
          } else dn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          le(t), i = !1;
        } else Oe !== null && (to(Oe), Oe = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? X === 0 && (X = 3) : Ko())), t.updateQueue !== null && (t.flags |= 4), le(t), null);
    case 4:
      return mn(), Yi(e, t), e === null && er(t.stateNode.containerInfo), le(t), null;
    case 10:
      return To(t.type._context), le(t), null;
    case 17:
      return ve(t.type) && nl(), le(t), null;
    case 19:
      if (A(H), i = t.memoizedState, i === null) return le(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) zn(i, !1);
      else {
        if (X !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = al(e), o !== null) {
            for (t.flags |= 128, zn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return j(H, H.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Q() > gn && (t.flags |= 128, r = !0, zn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = al(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), zn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U) return le(t), null;
        } else 2 * Q() - i.renderingStartTime > gn && n !== 1073741824 && (t.flags |= 128, r = !0, zn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Q(), t.sibling = null, n = H.current, j(H, r ? n & 1 | 2 : n & 1), t) : (le(t), null);
    case 22:
    case 23:
      return Qo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (le(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : le(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(v(156, t.tag));
}
function Ad(e, t) {
  switch (_o(t), t.tag) {
    case 1:
      return ve(t.type) && nl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return mn(), A(ge), A(ue), Mo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Io(t), null;
    case 13:
      if (A(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(v(340));
        dn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return A(H), null;
    case 4:
      return mn(), null;
    case 10:
      return To(t.type._context), null;
    case 22:
    case 23:
      return Qo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Rr = !1, oe = !1, Ud = typeof WeakSet == "function" ? WeakSet : Set, x = null;
function tn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    V(e, t, r);
  }
  else n.current = null;
}
function Xi(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var qu = !1;
function Hd(e, t) {
  if (Ri = qr, e = ma(), Co(e)) {
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
        var o = 0, u = -1, s = -1, f = 0, g = 0, m = e, p = null;
        t: for (; ; ) {
          for (var k; m !== n || l !== 0 && m.nodeType !== 3 || (u = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (k = m.firstChild) !== null; )
            p = m, m = k;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++f === l && (u = o), p === i && ++g === r && (s = o), (k = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = k;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Li = { focusedElem: e, selectionRange: n }, qr = !1, x = t; x !== null; ) if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, x = e;
  else for (; x !== null; ) {
    t = x;
    try {
      var S = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (S !== null) {
            var C = S.memoizedProps, M = S.memoizedState, d = t.stateNode, a = d.getSnapshotBeforeUpdate(t.elementType === t.type ? C : Ie(t.type, C), M);
            d.__reactInternalSnapshotBeforeUpdate = a;
          }
          break;
        case 3:
          var c = t.stateNode.containerInfo;
          c.nodeType === 1 ? c.textContent = "" : c.nodeType === 9 && c.documentElement && c.removeChild(c.documentElement);
          break;
        case 5:
        case 6:
        case 4:
        case 17:
          break;
        default:
          throw Error(v(163));
      }
    } catch (h) {
      V(t, t.return, h);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, x = e;
      break;
    }
    x = t.return;
  }
  return S = qu, qu = !1, S;
}
function Vn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Xi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function xl(e, t) {
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
function Gi(e) {
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
function cc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, cc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$e], delete t[nr], delete t[Oi], delete t[Ed], delete t[Cd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function fc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function bu(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || fc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Zi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = tl));
  else if (r !== 4 && (e = e.child, e !== null)) for (Zi(e, t, n), e = e.sibling; e !== null; ) Zi(e, t, n), e = e.sibling;
}
function Ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Ji(e, t, n), e = e.sibling; e !== null; ) Ji(e, t, n), e = e.sibling;
}
var ee = null, Me = !1;
function rt(e, t, n) {
  for (n = n.child; n !== null; ) dc(e, t, n), n = n.sibling;
}
function dc(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function") try {
    Ve.onCommitFiberUnmount(yl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      oe || tn(n, t);
    case 6:
      var r = ee, l = Me;
      ee = null, rt(e, t, n), ee = r, Me = l, ee !== null && (Me ? (e = ee, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : ee.removeChild(n.stateNode));
      break;
    case 18:
      ee !== null && (Me ? (e = ee, n = n.stateNode, e.nodeType === 8 ? Zl(e.parentNode, n) : e.nodeType === 1 && Zl(e, n), Jn(e)) : Zl(ee, n.stateNode));
      break;
    case 4:
      r = ee, l = Me, ee = n.stateNode.containerInfo, Me = !0, rt(e, t, n), ee = r, Me = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!oe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Xi(n, t, o), l = l.next;
        } while (l !== r);
      }
      rt(e, t, n);
      break;
    case 1:
      if (!oe && (tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        V(n, t, u);
      }
      rt(e, t, n);
      break;
    case 21:
      rt(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (oe = (r = oe) || n.memoizedState !== null, rt(e, t, n), oe = r) : rt(e, t, n);
      break;
    default:
      rt(e, t, n);
  }
}
function es(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Ud()), t.forEach(function(r) {
      var l = Gd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function Le(e, t) {
  var n = t.deletions;
  if (n !== null) for (var r = 0; r < n.length; r++) {
    var l = n[r];
    try {
      var i = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            ee = u.stateNode, Me = !1;
            break e;
          case 3:
            ee = u.stateNode.containerInfo, Me = !0;
            break e;
          case 4:
            ee = u.stateNode.containerInfo, Me = !0;
            break e;
        }
        u = u.return;
      }
      if (ee === null) throw Error(v(160));
      dc(i, o, l), ee = null, Me = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (f) {
      V(l, t, f);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) pc(t, e), t = t.sibling;
}
function pc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Le(t, e), Ue(e), r & 4) {
        try {
          Vn(3, e, e.return), xl(3, e);
        } catch (C) {
          V(e, e.return, C);
        }
        try {
          Vn(5, e, e.return);
        } catch (C) {
          V(e, e.return, C);
        }
      }
      break;
    case 1:
      Le(t, e), Ue(e), r & 512 && n !== null && tn(n, n.return);
      break;
    case 5:
      if (Le(t, e), Ue(e), r & 512 && n !== null && tn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Yn(l, "");
        } catch (C) {
          V(e, e.return, C);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Os(l, i), wi(u, o);
          var f = wi(u, i);
          for (o = 0; o < s.length; o += 2) {
            var g = s[o], m = s[o + 1];
            g === "style" ? Hs(l, m) : g === "dangerouslySetInnerHTML" ? As(l, m) : g === "children" ? Yn(l, m) : ao(l, g, m, f);
          }
          switch (u) {
            case "input":
              gi(l, i);
              break;
            case "textarea":
              js(l, i);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var k = i.value;
              k != null ? rn(l, !!i.multiple, k, !1) : p !== !!i.multiple && (i.defaultValue != null ? rn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : rn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[nr] = i;
        } catch (C) {
          V(e, e.return, C);
        }
      }
      break;
    case 6:
      if (Le(t, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(v(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (C) {
          V(e, e.return, C);
        }
      }
      break;
    case 3:
      if (Le(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Jn(t.containerInfo);
      } catch (C) {
        V(e, e.return, C);
      }
      break;
    case 4:
      Le(t, e), Ue(e);
      break;
    case 13:
      Le(t, e), Ue(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Vo = Q())), r & 4 && es(e);
      break;
    case 22:
      if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (oe = (f = oe) || g, Le(t, e), oe = f) : Le(t, e), Ue(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !g && e.mode & 1) for (x = e, g = e.child; g !== null; ) {
          for (m = x = g; x !== null; ) {
            switch (p = x, k = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Vn(4, p, p.return);
                break;
              case 1:
                tn(p, p.return);
                var S = p.stateNode;
                if (typeof S.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, S.props = t.memoizedProps, S.state = t.memoizedState, S.componentWillUnmount();
                  } catch (C) {
                    V(r, n, C);
                  }
                }
                break;
              case 5:
                tn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  ns(m);
                  continue;
                }
            }
            k !== null ? (k.return = p, x = k) : ns(m);
          }
          g = g.sibling;
        }
        e: for (g = null, m = e; ; ) {
          if (m.tag === 5) {
            if (g === null) {
              g = m;
              try {
                l = m.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Us("display", o));
              } catch (C) {
                V(e, e.return, C);
              }
            }
          } else if (m.tag === 6) {
            if (g === null) try {
              m.stateNode.nodeValue = f ? "" : m.memoizedProps;
            } catch (C) {
              V(e, e.return, C);
            }
          } else if ((m.tag !== 22 && m.tag !== 23 || m.memoizedState === null || m === e) && m.child !== null) {
            m.child.return = m, m = m.child;
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            g === m && (g = null), m = m.return;
          }
          g === m && (g = null), m.sibling.return = m.return, m = m.sibling;
        }
      }
      break;
    case 19:
      Le(t, e), Ue(e), r & 4 && es(e);
      break;
    case 21:
      break;
    default:
      Le(
        t,
        e
      ), Ue(e);
  }
}
function Ue(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (fc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(v(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Yn(l, ""), r.flags &= -33);
          var i = bu(e);
          Ji(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = bu(e);
          Zi(e, u, o);
          break;
        default:
          throw Error(v(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Bd(e, t, n) {
  x = e, mc(e);
}
function mc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Rr;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || oe;
        u = Rr;
        var f = oe;
        if (Rr = o, (oe = s) && !f) for (x = l; x !== null; ) o = x, s = o.child, o.tag === 22 && o.memoizedState !== null ? rs(l) : s !== null ? (s.return = o, x = s) : rs(l);
        for (; i !== null; ) x = i, mc(i), i = i.sibling;
        x = l, Rr = u, oe = f;
      }
      ts(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, x = i) : ts(e);
  }
}
function ts(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            oe || xl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !oe) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ie(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Uu(t, i, r);
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
              Uu(t, o, n);
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
                var g = f.memoizedState;
                if (g !== null) {
                  var m = g.dehydrated;
                  m !== null && Jn(m);
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
            throw Error(v(163));
        }
        oe || t.flags & 512 && Gi(t);
      } catch (p) {
        V(t, t.return, p);
      }
    }
    if (t === e) {
      x = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function ns(e) {
  for (; x !== null; ) {
    var t = x;
    if (t === e) {
      x = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, x = n;
      break;
    }
    x = t.return;
  }
}
function rs(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            xl(4, t);
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
            Gi(t);
          } catch (s) {
            V(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Gi(t);
          } catch (s) {
            V(t, o, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      x = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, x = u;
      break;
    }
    x = t.return;
  }
}
var $d = Math.ceil, dl = nt.ReactCurrentDispatcher, Bo = nt.ReactCurrentOwner, Te = nt.ReactCurrentBatchConfig, I = 0, q = null, K = null, te = 0, ke = 0, nn = Et(0), X = 0, sr = null, Ut = 0, Nl = 0, $o = 0, Wn = null, me = null, Vo = 0, gn = 1 / 0, Ye = null, pl = !1, qi = null, gt = null, Lr = !1, ct = null, ml = 0, Qn = 0, bi = null, Vr = -1, Wr = 0;
function ce() {
  return I & 6 ? Q() : Vr !== -1 ? Vr : Vr = Q();
}
function vt(e) {
  return e.mode & 1 ? I & 2 && te !== 0 ? te & -te : _d.transition !== null ? (Wr === 0 && (Wr = qs()), Wr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ia(e.type)), e) : 1;
}
function Fe(e, t, n, r) {
  if (50 < Qn) throw Qn = 0, bi = null, Error(v(185));
  cr(e, n, r), (!(I & 2) || e !== q) && (e === q && (!(I & 2) && (Nl |= n), X === 4 && st(e, te)), ye(e, r), n === 1 && I === 0 && !(t.mode & 1) && (gn = Q() + 500, Cl && Ct()));
}
function ye(e, t) {
  var n = e.callbackNode;
  _f(e, t);
  var r = Jr(e, e === q ? te : 0);
  if (r === 0) n !== null && du(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && du(n), t === 1) e.tag === 0 ? Pd(ls.bind(null, e)) : Pa(ls.bind(null, e)), Sd(function() {
      !(I & 6) && Ct();
    }), n = null;
    else {
      switch (bs(r)) {
        case 1:
          n = ho;
          break;
        case 4:
          n = Zs;
          break;
        case 16:
          n = Zr;
          break;
        case 536870912:
          n = Js;
          break;
        default:
          n = Zr;
      }
      n = Ec(n, hc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function hc(e, t) {
  if (Vr = -1, Wr = 0, I & 6) throw Error(v(327));
  var n = e.callbackNode;
  if (an() && e.callbackNode !== n) return null;
  var r = Jr(e, e === q ? te : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = hl(e, r);
  else {
    t = r;
    var l = I;
    I |= 2;
    var i = vc();
    (q !== e || te !== t) && (Ye = null, gn = Q() + 500, Mt(e, t));
    do
      try {
        Qd();
        break;
      } catch (u) {
        gc(e, u);
      }
    while (!0);
    Do(), dl.current = i, I = l, K !== null ? t = 0 : (q = null, te = 0, t = X);
  }
  if (t !== 0) {
    if (t === 2 && (l = xi(e), l !== 0 && (r = l, t = eo(e, l))), t === 1) throw n = sr, Mt(e, 0), st(e, r), ye(e, Q()), n;
    if (t === 6) st(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Vd(l) && (t = hl(e, r), t === 2 && (i = xi(e), i !== 0 && (r = i, t = eo(e, i))), t === 1)) throw n = sr, Mt(e, 0), st(e, r), ye(e, Q()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(v(345));
        case 2:
          Dt(e, me, Ye);
          break;
        case 3:
          if (st(e, r), (r & 130023424) === r && (t = Vo + 500 - Q(), 10 < t)) {
            if (Jr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ce(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Mi(Dt.bind(null, e, me, Ye), t);
            break;
          }
          Dt(e, me, Ye);
          break;
        case 4:
          if (st(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - je(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = Q() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * $d(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Mi(Dt.bind(null, e, me, Ye), r);
            break;
          }
          Dt(e, me, Ye);
          break;
        case 5:
          Dt(e, me, Ye);
          break;
        default:
          throw Error(v(329));
      }
    }
  }
  return ye(e, Q()), e.callbackNode === n ? hc.bind(null, e) : null;
}
function eo(e, t) {
  var n = Wn;
  return e.current.memoizedState.isDehydrated && (Mt(e, t).flags |= 256), e = hl(e, t), e !== 2 && (t = me, me = n, t !== null && to(t)), e;
}
function to(e) {
  me === null ? me = e : me.push.apply(me, e);
}
function Vd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Ae(i(), l)) return !1;
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
function st(e, t) {
  for (t &= ~$o, t &= ~Nl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - je(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ls(e) {
  if (I & 6) throw Error(v(327));
  an();
  var t = Jr(e, 0);
  if (!(t & 1)) return ye(e, Q()), null;
  var n = hl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xi(e);
    r !== 0 && (t = r, n = eo(e, r));
  }
  if (n === 1) throw n = sr, Mt(e, 0), st(e, t), ye(e, Q()), n;
  if (n === 6) throw Error(v(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Dt(e, me, Ye), ye(e, Q()), null;
}
function Wo(e, t) {
  var n = I;
  I |= 1;
  try {
    return e(t);
  } finally {
    I = n, I === 0 && (gn = Q() + 500, Cl && Ct());
  }
}
function Ht(e) {
  ct !== null && ct.tag === 0 && !(I & 6) && an();
  var t = I;
  I |= 1;
  var n = Te.transition, r = O;
  try {
    if (Te.transition = null, O = 1, e) return e();
  } finally {
    O = r, Te.transition = n, I = t, !(I & 6) && Ct();
  }
}
function Qo() {
  ke = nn.current, A(nn);
}
function Mt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, kd(n)), K !== null) for (n = K.return; n !== null; ) {
    var r = n;
    switch (_o(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && nl();
        break;
      case 3:
        mn(), A(ge), A(ue), Mo();
        break;
      case 5:
        Io(r);
        break;
      case 4:
        mn();
        break;
      case 13:
        A(H);
        break;
      case 19:
        A(H);
        break;
      case 10:
        To(r.type._context);
        break;
      case 22:
      case 23:
        Qo();
    }
    n = n.return;
  }
  if (q = e, K = e = yt(e.current, null), te = ke = t, X = 0, sr = null, $o = Nl = Ut = 0, me = Wn = null, zt !== null) {
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
function gc(e, t) {
  do {
    var n = K;
    try {
      if (Do(), Hr.current = fl, cl) {
        for (var r = B.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        cl = !1;
      }
      if (At = 0, J = Y = B = null, $n = !1, ir = 0, Bo.current = null, n === null || n.return === null) {
        X = 1, sr = t, K = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, s = t;
        if (t = te, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, g = u, m = g.tag;
          if (!(g.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = g.alternate;
            p ? (g.updateQueue = p.updateQueue, g.memoizedState = p.memoizedState, g.lanes = p.lanes) : (g.updateQueue = null, g.memoizedState = null);
          }
          var k = Qu(o);
          if (k !== null) {
            k.flags &= -257, Ku(k, o, u, i, t), k.mode & 1 && Wu(i, f, t), t = k, s = f;
            var S = t.updateQueue;
            if (S === null) {
              var C = /* @__PURE__ */ new Set();
              C.add(s), t.updateQueue = C;
            } else S.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Wu(i, f, t), Ko();
              break e;
            }
            s = Error(v(426));
          }
        } else if (U && u.mode & 1) {
          var M = Qu(o);
          if (M !== null) {
            !(M.flags & 65536) && (M.flags |= 256), Ku(M, o, u, i, t), xo(hn(s, u));
            break e;
          }
        }
        i = s = hn(s, u), X !== 4 && (X = 2), Wn === null ? Wn = [i] : Wn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var d = ba(i, s, t);
              Au(i, d);
              break e;
            case 1:
              u = s;
              var a = i.type, c = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || c !== null && typeof c.componentDidCatch == "function" && (gt === null || !gt.has(c)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var h = ec(i, u, t);
                Au(i, h);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kc(n);
    } catch (y) {
      t = y, K === n && n !== null && (K = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vc() {
  var e = dl.current;
  return dl.current = fl, e === null ? fl : e;
}
function Ko() {
  (X === 0 || X === 3 || X === 2) && (X = 4), q === null || !(Ut & 268435455) && !(Nl & 268435455) || st(q, te);
}
function hl(e, t) {
  var n = I;
  I |= 2;
  var r = vc();
  (q !== e || te !== t) && (Ye = null, Mt(e, t));
  do
    try {
      Wd();
      break;
    } catch (l) {
      gc(e, l);
    }
  while (!0);
  if (Do(), I = n, dl.current = r, K !== null) throw Error(v(261));
  return q = null, te = 0, X;
}
function Wd() {
  for (; K !== null; ) yc(K);
}
function Qd() {
  for (; K !== null && !gf(); ) yc(K);
}
function yc(e) {
  var t = wc(e.alternate, e, ke);
  e.memoizedProps = e.pendingProps, t === null ? kc(e) : K = t, Bo.current = null;
}
function kc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Ad(n, t), n !== null) {
        n.flags &= 32767, K = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        X = 6, K = null;
        return;
      }
    } else if (n = Fd(n, t, ke), n !== null) {
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
function Dt(e, t, n) {
  var r = O, l = Te.transition;
  try {
    Te.transition = null, O = 1, Kd(e, t, n, r);
  } finally {
    Te.transition = l, O = r;
  }
  return null;
}
function Kd(e, t, n, r) {
  do
    an();
  while (ct !== null);
  if (I & 6) throw Error(v(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(v(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (xf(e, i), e === q && (K = q = null, te = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Lr || (Lr = !0, Ec(Zr, function() {
    return an(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Te.transition, Te.transition = null;
    var o = O;
    O = 1;
    var u = I;
    I |= 4, Bo.current = null, Hd(e, n), pc(n, e), dd(Li), qr = !!Ri, Li = Ri = null, e.current = n, Bd(n), vf(), I = u, O = o, Te.transition = i;
  } else e.current = n;
  if (Lr && (Lr = !1, ct = e, ml = l), i = e.pendingLanes, i === 0 && (gt = null), Sf(n.stateNode), ye(e, Q()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (pl) throw pl = !1, e = qi, qi = null, e;
  return ml & 1 && e.tag !== 0 && an(), i = e.pendingLanes, i & 1 ? e === bi ? Qn++ : (Qn = 0, bi = e) : Qn = 0, Ct(), null;
}
function an() {
  if (ct !== null) {
    var e = bs(ml), t = Te.transition, n = O;
    try {
      if (Te.transition = null, O = 16 > e ? 16 : e, ct === null) var r = !1;
      else {
        if (e = ct, ct = null, ml = 0, I & 6) throw Error(v(331));
        var l = I;
        for (I |= 4, x = e.current; x !== null; ) {
          var i = x, o = i.child;
          if (x.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (x = f; x !== null; ) {
                  var g = x;
                  switch (g.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Vn(8, g, i);
                  }
                  var m = g.child;
                  if (m !== null) m.return = g, x = m;
                  else for (; x !== null; ) {
                    g = x;
                    var p = g.sibling, k = g.return;
                    if (cc(g), g === f) {
                      x = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = k, x = p;
                      break;
                    }
                    x = k;
                  }
                }
              }
              var S = i.alternate;
              if (S !== null) {
                var C = S.child;
                if (C !== null) {
                  S.child = null;
                  do {
                    var M = C.sibling;
                    C.sibling = null, C = M;
                  } while (C !== null);
                }
              }
              x = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, x = o;
          else e: for (; x !== null; ) {
            if (i = x, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Vn(9, i, i.return);
            }
            var d = i.sibling;
            if (d !== null) {
              d.return = i.return, x = d;
              break e;
            }
            x = i.return;
          }
        }
        var a = e.current;
        for (x = a; x !== null; ) {
          o = x;
          var c = o.child;
          if (o.subtreeFlags & 2064 && c !== null) c.return = o, x = c;
          else e: for (o = a; x !== null; ) {
            if (u = x, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  xl(9, u);
              }
            } catch (y) {
              V(u, u.return, y);
            }
            if (u === o) {
              x = null;
              break e;
            }
            var h = u.sibling;
            if (h !== null) {
              h.return = u.return, x = h;
              break e;
            }
            x = u.return;
          }
        }
        if (I = l, Ct(), Ve && typeof Ve.onPostCommitFiberRoot == "function") try {
          Ve.onPostCommitFiberRoot(yl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, Te.transition = t;
    }
  }
  return !1;
}
function is(e, t, n) {
  t = hn(n, t), t = ba(e, t, 1), e = ht(e, t, 1), t = ce(), e !== null && (cr(e, 1, t), ye(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) is(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      is(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gt === null || !gt.has(r))) {
        e = hn(n, e), e = ec(t, e, 1), t = ht(t, e, 1), e = ce(), t !== null && (cr(t, 1, e), ye(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Yd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, q === e && (te & n) === n && (X === 4 || X === 3 && (te & 130023424) === te && 500 > Q() - Vo ? Mt(e, 0) : $o |= n), ye(e, t);
}
function Sc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Er, Er <<= 1, !(Er & 130023424) && (Er = 4194304)) : t = 1);
  var n = ce();
  e = et(e, t), e !== null && (cr(e, t, n), ye(e, n));
}
function Xd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Sc(e, n);
}
function Gd(e, t) {
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
      throw Error(v(314));
  }
  r !== null && r.delete(t), Sc(e, n);
}
var wc;
wc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ge.current) he = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return he = !1, jd(e, t, n);
    he = !!(e.flags & 131072);
  }
  else he = !1, U && t.flags & 1048576 && _a(t, il, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      $r(e, t), e = t.pendingProps;
      var l = fn(t, ue.current);
      sn(t, n), l = jo(null, t, r, e, l, n);
      var i = Fo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ve(r) ? (i = !0, rl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ro(t), l.updater = _l, t.stateNode = l, l._reactInternals = t, Bi(t, r, e, n), t = Wi(null, t, r, !0, i, n)) : (t.tag = 0, U && i && Po(t), ae(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch ($r(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Jd(r), e = Ie(r, e), l) {
          case 0:
            t = Vi(null, t, r, e, n);
            break e;
          case 1:
            t = Gu(null, t, r, e, n);
            break e;
          case 11:
            t = Yu(null, t, r, e, n);
            break e;
          case 14:
            t = Xu(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(v(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Vi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Gu(e, t, r, l, n);
    case 3:
      e: {
        if (lc(t), e === null) throw Error(v(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Ra(e, t), sl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = hn(Error(v(423)), t), t = Zu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = hn(Error(v(424)), t), t = Zu(e, t, r, n, l);
          break e;
        } else for (Se = mt(t.stateNode.containerInfo.firstChild), we = t, U = !0, Oe = null, n = Ta(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (dn(), r === l) {
            t = tt(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return La(t), e === null && Ai(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Ii(r, l) ? o = null : i !== null && Ii(r, i) && (t.flags |= 32), rc(e, t), ae(e, t, o, n), t.child;
    case 6:
      return e === null && Ai(t), null;
    case 13:
      return ic(e, t, n);
    case 4:
      return Lo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = pn(t, null, r, n) : ae(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Yu(e, t, r, l, n);
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, j(ol, r._currentValue), r._currentValue = o, i !== null) if (Ae(i.value, o)) {
          if (i.children === l.children && !ge.current) {
            t = tt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = Je(-1, n & -n), s.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var g = f.pending;
                    g === null ? s.next = s : (s.next = g.next, g.next = s), f.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Ui(
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
            if (o = i.return, o === null) throw Error(v(341));
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Ui(o, n, t), o = i.sibling;
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
        ae(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, sn(t, n), l = ze(l), r = r(l), t.flags |= 1, ae(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ie(r, t.pendingProps), l = Ie(r.type, l), Xu(e, t, r, l, n);
    case 15:
      return tc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), $r(e, t), t.tag = 1, ve(r) ? (e = !0, rl(t)) : e = !1, sn(t, n), qa(t, r, l), Bi(t, r, l, n), Wi(null, t, r, !0, e, n);
    case 19:
      return oc(e, t, n);
    case 22:
      return nc(e, t, n);
  }
  throw Error(v(156, t.tag));
};
function Ec(e, t) {
  return Gs(e, t);
}
function Zd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function De(e, t, n, r) {
  return new Zd(e, t, n, r);
}
function Yo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function Jd(e) {
  if (typeof e == "function") return Yo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === fo) return 11;
    if (e === po) return 14;
  }
  return 2;
}
function yt(e, t) {
  var n = e.alternate;
  return n === null ? (n = De(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Qr(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Yo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Kt:
      return Ot(n.children, l, i, t);
    case co:
      o = 8, l |= 8;
      break;
    case fi:
      return e = De(12, n, t, l | 2), e.elementType = fi, e.lanes = i, e;
    case di:
      return e = De(13, n, t, l), e.elementType = di, e.lanes = i, e;
    case pi:
      return e = De(19, n, t, l), e.elementType = pi, e.lanes = i, e;
    case Ls:
      return Dl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case zs:
          o = 10;
          break e;
        case Rs:
          o = 9;
          break e;
        case fo:
          o = 11;
          break e;
        case po:
          o = 14;
          break e;
        case it:
          o = 16, r = null;
          break e;
      }
      throw Error(v(130, e == null ? e : typeof e, ""));
  }
  return t = De(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ot(e, t, n, r) {
  return e = De(7, e, r, t), e.lanes = n, e;
}
function Dl(e, t, n, r) {
  return e = De(22, e, r, t), e.elementType = Ls, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function li(e, t, n) {
  return e = De(6, e, null, t), e.lanes = n, e;
}
function ii(e, t, n) {
  return t = De(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function qd(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ul(0), this.expirationTimes = Ul(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ul(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Xo(e, t, n, r, l, i, o, u, s) {
  return e = new qd(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = De(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ro(i), e;
}
function bd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Qt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Cc(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Vt(e) !== e || e.tag !== 1) throw Error(v(170));
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
    throw Error(v(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Ca(e, n, t);
  }
  return t;
}
function Pc(e, t, n, r, l, i, o, u, s) {
  return e = Xo(n, r, !0, e, l, i, o, u, s), e.context = Cc(null), n = e.current, r = ce(), l = vt(n), i = Je(r, l), i.callback = t ?? null, ht(n, i, l), e.current.lanes = l, cr(e, l, r), ye(e, r), e;
}
function Tl(e, t, n, r) {
  var l = t.current, i = ce(), o = vt(l);
  return n = Cc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Je(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ht(l, t, o), e !== null && (Fe(e, l, o, i), Ur(e, l, o)), o;
}
function gl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function os(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Go(e, t) {
  os(e, t), (e = e.alternate) && os(e, t);
}
function ep() {
  return null;
}
var _c = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Zo(e) {
  this._internalRoot = e;
}
zl.prototype.render = Zo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(v(409));
  Tl(e, t, null, null);
};
zl.prototype.unmount = Zo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ht(function() {
      Tl(null, e, null, null);
    }), t[be] = null;
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = na();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ut.length && t !== 0 && t < ut[n].priority; n++) ;
    ut.splice(n, 0, e), n === 0 && la(e);
  }
};
function Jo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Rl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function us() {
}
function tp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = gl(o);
        i.call(f);
      };
    }
    var o = Pc(t, r, e, 0, null, !1, !1, "", us);
    return e._reactRootContainer = o, e[be] = o.current, er(e.nodeType === 8 ? e.parentNode : e), Ht(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = gl(s);
      u.call(f);
    };
  }
  var s = Xo(e, 0, !1, null, null, !1, !1, "", us);
  return e._reactRootContainer = s, e[be] = s.current, er(e.nodeType === 8 ? e.parentNode : e), Ht(function() {
    Tl(t, s, n, r);
  }), s;
}
function Ll(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = gl(o);
        u.call(s);
      };
    }
    Tl(t, o, e, l);
  } else o = tp(n, t, e, l, r);
  return gl(o);
}
ea = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 && (go(t, n | 1), ye(t, Q()), !(I & 6) && (gn = Q() + 500, Ct()));
      }
      break;
    case 13:
      Ht(function() {
        var r = et(e, 1);
        if (r !== null) {
          var l = ce();
          Fe(r, e, 1, l);
        }
      }), Go(e, 1);
  }
};
vo = function(e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = ce();
      Fe(t, e, 134217728, n);
    }
    Go(e, 134217728);
  }
};
ta = function(e) {
  if (e.tag === 13) {
    var t = vt(e), n = et(e, t);
    if (n !== null) {
      var r = ce();
      Fe(n, e, t, r);
    }
    Go(e, t);
  }
};
na = function() {
  return O;
};
ra = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
Ci = function(e, t, n) {
  switch (t) {
    case "input":
      if (gi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = El(r);
            if (!l) throw Error(v(90));
            Ms(r), gi(r, l);
          }
        }
      }
      break;
    case "textarea":
      js(e, n);
      break;
    case "select":
      t = n.value, t != null && rn(e, !!n.multiple, t, !1);
  }
};
Vs = Wo;
Ws = Ht;
var np = { usingClientEntryPoint: !1, Events: [dr, Zt, El, Bs, $s, Wo] }, Rn = { findFiberByHostInstance: Tt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, rp = { bundleType: Rn.bundleType, version: Rn.version, rendererPackageName: Rn.rendererPackageName, rendererConfig: Rn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: nt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ys(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Rn.findFiberByHostInstance || ep, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ir = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ir.isDisabled && Ir.supportsFiber) try {
    yl = Ir.inject(rp), Ve = Ir;
  } catch {
  }
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = np;
Ce.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Jo(t)) throw Error(v(200));
  return bd(e, t, null, n);
};
Ce.createRoot = function(e, t) {
  if (!Jo(e)) throw Error(v(299));
  var n = !1, r = "", l = _c;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Xo(e, 1, !1, null, null, n, !1, r, l), e[be] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new Zo(t);
};
Ce.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(v(188)) : (e = Object.keys(e).join(","), Error(v(268, e)));
  return e = Ys(t), e = e === null ? null : e.stateNode, e;
};
Ce.flushSync = function(e) {
  return Ht(e);
};
Ce.hydrate = function(e, t, n) {
  if (!Rl(t)) throw Error(v(200));
  return Ll(null, e, t, !0, n);
};
Ce.hydrateRoot = function(e, t, n) {
  if (!Jo(e)) throw Error(v(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = _c;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Pc(t, null, e, 1, n ?? null, l, !1, i, o), e[be] = t.current, er(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new zl(t);
};
Ce.render = function(e, t, n) {
  if (!Rl(t)) throw Error(v(200));
  return Ll(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function(e) {
  if (!Rl(e)) throw Error(v(40));
  return e._reactRootContainer ? (Ht(function() {
    Ll(null, null, e, !1, function() {
      e._reactRootContainer = null, e[be] = null;
    });
  }), !0) : !1;
};
Ce.unstable_batchedUpdates = Wo;
Ce.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Rl(n)) throw Error(v(200));
  if (e == null || e._reactInternals === void 0) throw Error(v(38));
  return Ll(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function xc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(xc);
    } catch (e) {
      console.error(e);
    }
}
xc(), xs.exports = Ce;
var lp = xs.exports, ss = lp;
Kr.createRoot = ss.createRoot, Kr.hydrateRoot = ss.hydrateRoot;
const lt = (e) => Number.isFinite(e) ? e.toLocaleString() : "-", as = (e) => `${e.name} ${e.isPlayer ? "(プレイヤー)" : "(エネミー)"}`, ip = ({
  tokens: e,
  attackerId: t,
  receiverId: n,
  baseDamage: r,
  result: l,
  running: i,
  turnRunning: o,
  onAttackerChange: u,
  onReceiverChange: s,
  onBaseDamageChange: f,
  onRun: g,
  onRunTurnProcess: m
}) => /* @__PURE__ */ T.jsxs("div", { className: "ponkotu-damage", children: [
  /* @__PURE__ */ T.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ T.jsx("h3", { children: "ダメージ計算" }) }),
  /* @__PURE__ */ T.jsxs("div", { className: "ponkotu-damage__row", children: [
    /* @__PURE__ */ T.jsxs("label", { className: "ponkotu-damage__label", children: [
      "攻撃者",
      /* @__PURE__ */ T.jsxs("select", { value: t, onChange: (p) => u(p.target.value), children: [
        /* @__PURE__ */ T.jsx("option", { value: "", children: "選択してください" }),
        e.map((p) => /* @__PURE__ */ T.jsx("option", { value: p.actorId, children: as(p) }, p.actorId))
      ] })
    ] }),
    /* @__PURE__ */ T.jsxs("label", { className: "ponkotu-damage__label", children: [
      "防御者",
      /* @__PURE__ */ T.jsxs("select", { value: n, onChange: (p) => s(p.target.value), children: [
        /* @__PURE__ */ T.jsx("option", { value: "", children: "選択してください" }),
        e.map((p) => /* @__PURE__ */ T.jsx("option", { value: p.actorId, children: as(p) }, p.actorId))
      ] })
    ] })
  ] }),
  /* @__PURE__ */ T.jsxs("label", { className: "ponkotu-damage__label", children: [
    "基礎ダメージ",
    /* @__PURE__ */ T.jsx(
      "input",
      {
        type: "number",
        value: r,
        onChange: (p) => f(p.target.value),
        placeholder: "例: 12"
      }
    )
  ] }),
  /* @__PURE__ */ T.jsxs("div", { className: "ponkotu-damage__row", children: [
    /* @__PURE__ */ T.jsx("button", { onClick: g, disabled: i || e.length < 2, children: i ? "計算中..." : "計算して適用" }),
    e.length < 2 && /* @__PURE__ */ T.jsx("span", { className: "ponkotu-damage__hint", children: "※ トークンが2体以上必要です" })
  ] }),
  /* @__PURE__ */ T.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ T.jsx("h3", { style: { margin: "8px 0" }, children: "ターン処理" }) }),
  /* @__PURE__ */ T.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ T.jsx(
    "button",
    {
      onClick: m,
      disabled: o || e.length < 1,
      children: o ? "処理中..." : "ターン処理(終了→開始)"
    }
  ) }),
  l && /* @__PURE__ */ T.jsxs("div", { className: "ponkotu-damage__result", children: [
    /* @__PURE__ */ T.jsxs("div", { children: [
      "通常倍率: 攻撃者 ",
      l.attackerNormalPercentage,
      "% / 防御者",
      " ",
      l.receiverNormalPercentage,
      "% → 係数 ",
      l.normalRatio.toFixed(2)
    ] }),
    /* @__PURE__ */ T.jsxs("div", { children: [
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
    /* @__PURE__ */ T.jsxs("div", { children: [
      "特殊(耐性限界)倍率: 防御者 ",
      l.receiverSpecialConfPercentage,
      "% → 係数",
      " ",
      l.specialConfRatio.toFixed(2)
    ] }),
    /* @__PURE__ */ T.jsxs("div", { children: [
      "HPダメージ: ",
      lt(l.hpDamageApplied),
      " （バリア吸収",
      " ",
      lt(l.barrierAbsorbed),
      "）"
    ] }),
    /* @__PURE__ */ T.jsxs("div", { children: [
      "耐性限界ダメージ: ",
      lt(l.confDamageApplied)
    ] }),
    /* @__PURE__ */ T.jsxs("div", { children: [
      "SANダメージ(沈潜): ",
      lt(l.sanDamageApplied)
    ] }),
    /* @__PURE__ */ T.jsxs("div", { children: [
      "残り HP ",
      lt(l.hpAfter),
      " / バリア",
      " ",
      lt(l.barrierAfter),
      " / CON",
      " ",
      lt(l.constitutionAfter),
      " / SAN",
      " ",
      lt(l.sanAfter)
    ] })
  ] })
] }), Be = (e) => Math.max(0, Math.floor(e)), Nc = (e, t) => Be(e * t), Dc = (e, t = 1) => Be(e - t), oi = (e) => Nc(e, 2 / 3), op = (e) => Nc(e, 1 / 2), Ke = (e) => {
  e.getStack(e.statusId) > 0 && e.setStack(e.statusId, 0);
}, si = (e) => {
  const t = e.getStack(e.statusId);
  t > 0 && e.setStack(e.statusId, Dc(t));
}, Bt = [
  {
    id: "DarkFire",
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
    attribute: { stack: "stackBurned", pending: "stackBurnednext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, oi(t)));
    }
  },
  {
    id: "Poison",
    attribute: { stack: "stackPoison", pending: "stackPoisonnext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, op(t)));
    }
  },
  {
    id: "Tremor",
    attribute: { stack: "stacktremor", pending: "stacktremornext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, oi(t)));
    }
  },
  {
    id: "Bleeding",
    attribute: { stack: "stackBleeding", pending: "stackBleedingnext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || e.setStack(e.statusId, oi(t));
    }
  },
  {
    id: "Poise",
    attribute: { stack: "stackpoise", pending: "stackpoisenext" },
    hasPending: !0,
    onTurnEnd: (e) => si(e)
  },
  {
    id: "Regen",
    attribute: { stack: "stackregen", pending: "stackregennext" },
    hasPending: !0,
    onTurnStart: (e) => {
      const t = e.getStack(e.statusId);
      if (t <= 0) return;
      const n = e.combatant.maxHp * 0.05 * t;
      n > 0 && e.healHp(n);
    },
    onTurnEnd: (e) => si(e)
  },
  {
    id: "Bind",
    attribute: { stack: "stackbind", pending: "stackbindnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "Paralysis",
    attribute: { stack: "stackParalysis", pending: "stackParalysisnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "Fear",
    attribute: { stack: "stackFear", pending: "stackFearnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "DamageUp",
    attribute: { stack: "stackDamageUp", pending: "stackDamageUpnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "DamageDown",
    attribute: { stack: "stackDamageDown", pending: "stackDamageDownnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "PowerUp",
    attribute: { stack: "stackPowerUp", pending: "stackPowerUpnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "PowerDown",
    attribute: { stack: "stackPowerDown", pending: "stackPowerDownnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "Protection",
    attribute: { stack: "stackProtection", pending: "stackProtectionnext" },
    hasPending: !0,
    onTurnStart: (e) => {
      if (!e.combatant.flags.checkHitan) return;
      e.getStack(e.statusId) <= 1 && e.setStack(e.statusId, 1);
    },
    onTurnEnd: Ke
  },
  {
    id: "Vulnerable",
    attribute: { stack: "stackVulnerable", pending: "stackVulnerablenext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "Sink",
    attribute: { stack: "stacksink", pending: "stacksinknext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      if (e.combatant.flags.checkNk) {
        e.addStack(e.statusId, 2);
        return;
      }
      t > 0 && e.setStack(e.statusId, Dc(t));
    }
  },
  {
    id: "FEOAwaken",
    attribute: { stack: "stackFEOAwaken", pending: "stackFEOAwakenNext" },
    hasPending: !0,
    onTurnEnd: (e) => si(e)
  },
  {
    id: "Witch1",
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
    attribute: { stack: "stackfrenzy" },
    onTurnStart: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.addStack("DamageUp", t), e.addStack("Vulnerable", t));
    }
  },
  {
    id: "Sinsyoku",
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
    attribute: { stack: "stackbiribiri", pending: "stackbiribirinext" },
    hasPending: !0
  },
  {
    id: "Smoke",
    attribute: { stack: "stackSmoke" }
  },
  {
    id: "SmokeGrand",
    attribute: { stack: "stackSmokeGrand" }
  }
];
class up {
  constructor(t) {
    var n, r, l;
    this.id = t.id, this.hp = t.hp, this.maxHp = t.maxHp, this.barrier = t.barrier, this.constitution = t.constitution, this.san = t.san, this.isPlayer = t.isPlayer, this.directcheck = t.directcheck, this.criticalcheck = t.criticalcheck, this.resist = t.resist, this.resistEnemy = t.resistEnemy, this.confResist = t.confResist, this.econfResistEnemy = t.econfResistEnemy, this.doubleConstitution = t.doubleConstitution, this.statuses = t.statuses, this.flags = {
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
      const l = this.hp, i = Math.min(l, r);
      i > 0 && (this.hp = l - i);
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
    const r = this.hp, l = this.maxHp, i = Math.min(Math.max(l - r, 0), n);
    i > 0 && (this.hp = r + i);
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
var ie;
class sp {
  constructor(t) {
    gr(this, ie, /* @__PURE__ */ new Map());
    t && Object.entries(t).forEach(([n, r]) => {
      r && Z(this, ie).set(n, {
        stack: Be(r.stack),
        pending: Be(r.pending)
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
      stack: Be(n.stack),
      pending: Be(n.pending)
    });
  }
  setStack(t, n) {
    const r = Z(this, ie).get(t) ?? { stack: 0, pending: 0 };
    r.stack = Be(n), Z(this, ie).set(t, r);
  }
  setPending(t, n) {
    const r = Z(this, ie).get(t) ?? { stack: 0, pending: 0 };
    r.pending = Be(n), Z(this, ie).set(t, r);
  }
  addStack(t, n) {
    const r = Z(this, ie).get(t) ?? { stack: 0, pending: 0 };
    r.stack = Be(r.stack + n), Z(this, ie).set(t, r);
  }
  addPending(t, n) {
    const r = Z(this, ie).get(t) ?? { stack: 0, pending: 0 };
    r.pending = Be(r.pending + n), Z(this, ie).set(t, r);
  }
}
ie = new WeakMap();
const b = (e, t, n = 0) => {
  var i, o, u;
  const r = (u = (o = (i = e.system) == null ? void 0 : i.attributes) == null ? void 0 : o[t]) == null ? void 0 : u.value;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  if (typeof r == "boolean") return r ? 1 : 0;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, ap = (e, t, n = 0) => {
  var i, o, u;
  const r = (u = (o = (i = e.system) == null ? void 0 : i.attributes) == null ? void 0 : o[t]) == null ? void 0 : u.max;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, cp = (e) => {
  const t = new sp();
  return Bt.forEach((r) => {
    const l = r.attribute, i = b(e, l.stack, 0), o = l.pending ? b(e, l.pending, 0) : 0;
    t.setState(r.id, { stack: i, pending: o });
  }), new up({
    id: e.id ?? "",
    name: e.name,
    hp: b(e, "hp", 0),
    maxHp: ap(e, "hp", 0),
    barrier: b(e, "barrier", 0),
    constitution: b(e, "constitution", 0),
    san: b(e, "san", 0),
    isPlayer: b(e, "isPlayer", 0) > 0,
    directcheck: b(e, "directcheck", 0) > 0,
    criticalcheck: b(e, "criticalcheck", 0) > 0,
    resist: b(e, "resist", 0),
    resistEnemy: b(e, "resistEnemy", 0),
    confResist: b(e, "confResist", 0),
    econfResistEnemy: b(e, "econfResistEnemy", 0),
    doubleConstitution: b(e, "doubleconstitution", 0) === 1,
    statuses: t,
    flags: {
      checkNk: b(e, "checknk", 0) > 0,
      checkAnri: b(e, "checkAnri", 0) > 0,
      checkHitan: b(e, "checkhitan", 0) > 0
    }
  });
}, cs = (e) => {
  const t = {
    "system.attributes.hp.value": e.hp,
    "system.attributes.barrier.value": e.barrier,
    "system.attributes.constitution.value": e.constitution,
    "system.attributes.san.value": e.san
  };
  return Bt.forEach((r) => {
    const l = r.attribute, i = e.statuses.getState(r.id);
    t[`system.attributes.${l.stack}.value`] = i.stack, l.pending && (t[`system.attributes.${l.pending}.value`] = i.pending);
  }), t;
};
class ai {
  loadByActorId(t) {
    var r;
    const n = t ? ((r = game.actors) == null ? void 0 : r.get(t)) ?? null : null;
    return !n || !n.id ? null : {
      actorId: n.id,
      actor: n,
      combatant: cp(n)
    };
  }
  async saveActor(t) {
    var r;
    const n = t.id ? ((r = game.actors) == null ? void 0 : r.get(t.id)) ?? null : null;
    n && await n.update(cs(t));
  }
  async save(t) {
    await t.actor.update(cs(t.combatant));
  }
}
class fs {
  constructor(t) {
    this.combatant = t, this.statuses = t.statuses;
  }
  withStatus(t) {
    return {
      statusId: t,
      combatant: this.combatant,
      statuses: this.statuses,
      getStack: this.getStack.bind(this),
      getPending: this.getPending.bind(this),
      setStack: this.setStack.bind(this),
      setPending: this.setPending.bind(this),
      addStack: this.addStack.bind(this),
      addPending: this.addPending.bind(this),
      applyHpDamage: this.applyHpDamage.bind(this),
      applyConstitutionDamage: this.applyConstitutionDamage.bind(this),
      healHp: this.healHp.bind(this),
      setBarrier: this.setBarrier.bind(this)
    };
  }
  getStack(t) {
    return this.statuses.getStack(t);
  }
  getPending(t) {
    return this.statuses.getPending(t);
  }
  setStack(t, n) {
    this.statuses.setStack(t, n);
  }
  setPending(t, n) {
    this.statuses.setPending(t, n);
  }
  addStack(t, n) {
    const r = this.statuses.getStack(t);
    this.setStack(t, r + n);
  }
  addPending(t, n) {
    const r = this.statuses.getPending(t);
    this.setPending(t, r + n);
  }
  applyHpDamage(t) {
    this.combatant.applyHpDamage(t);
  }
  applyConstitutionDamage(t) {
    this.combatant.applyConstitutionDamage(t);
  }
  healHp(t) {
    this.combatant.healHp(t);
  }
  setBarrier(t) {
    this.combatant.setBarrier(t);
  }
}
class ds {
  static turnStart(t) {
    const n = new fs(t), r = Bt;
    r.forEach((l) => {
      if (!l.hasPending) return;
      const i = n.getPending(l.id);
      if (i <= 0) return;
      const o = n.getStack(l.id);
      n.setStack(l.id, o + i), n.setPending(l.id, 0);
    }), r.forEach((l) => {
      var i;
      (i = l.onTurnStart) == null || i.call(l, n.withStatus(l.id));
    });
  }
  static turnEnd(t) {
    const n = new fs(t);
    Bt.forEach((l) => {
      var i;
      (i = l.onTurnEnd) == null || i.call(l, n.withStatus(l.id));
    }), n.setBarrier(0);
  }
}
class Tc {
  constructor(t, n) {
    this.combatant = t, this.damage = n, this.statuses = t.statuses;
  }
  withStatus(t) {
    return {
      statusId: t,
      combatant: this.combatant,
      damage: this.damage,
      statuses: this.statuses,
      getStack: this.getStack.bind(this),
      getPending: this.getPending.bind(this),
      setStack: this.setStack.bind(this),
      setPending: this.setPending.bind(this),
      addStack: this.addStack.bind(this),
      addPending: this.addPending.bind(this),
      applyHpDamage: this.applyHpDamage.bind(this),
      applyConstitutionDamage: this.applyConstitutionDamage.bind(this),
      healHp: this.healHp.bind(this),
      setBarrier: this.setBarrier.bind(this)
    };
  }
  getStack(t) {
    return this.statuses.getStack(t);
  }
  getPending(t) {
    return this.statuses.getPending(t);
  }
  setStack(t, n) {
    this.statuses.setStack(t, n);
  }
  setPending(t, n) {
    this.statuses.setPending(t, n);
  }
  addStack(t, n) {
    const r = this.statuses.getStack(t);
    this.setStack(t, r + n);
  }
  addPending(t, n) {
    const r = this.statuses.getPending(t);
    this.setPending(t, r + n);
  }
  applyHpDamage(t) {
    this.combatant.applyHpDamage(t);
  }
  applyConstitutionDamage(t) {
    this.combatant.applyConstitutionDamage(t);
  }
  healHp(t) {
    this.combatant.healHp(t);
  }
  setBarrier(t) {
    this.combatant.setBarrier(t);
  }
}
const fp = (e, t) => {
  const n = new Tc(e, t);
  Bt.forEach((l) => {
    var i;
    (i = l.onDealDamage) == null || i.call(l, n.withStatus(l.id));
  });
}, dp = (e, t) => {
  const n = new Tc(e, t);
  Bt.forEach((l) => {
    var i;
    (i = l.onTakeDamage) == null || i.call(l, n.withStatus(l.id));
  });
}, pp = (e) => {
  const t = e.statuses.getStack("DamageUp"), n = e.statuses.getStack("DamageDown"), r = e.directcheck;
  return t * 10 - n * 10 + (r ? 50 : 0);
}, mp = (e, t) => {
  let n = 0, r = !1;
  e.criticalcheck && (n += 20);
  const i = e.statuses.getStack("Poise");
  if (i > 0) {
    const o = Math.min(i * 5, 100);
    t() * 100 < o && (n += 20, r = !0);
  }
  return { special: n, poiseCritical: r };
}, hp = (e) => {
  const t = e.statuses.getStack("Protection"), n = e.statuses.getStack("Vulnerable");
  return t * 10 - n * 10;
}, gp = (e) => {
  const t = e.isPlayer ? e.resist : e.resistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, vp = (e) => {
  const t = e.isPlayer ? e.confResist : e.econfResistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, yp = (e, t = {}) => {
  const n = t.random ?? Math.random, r = pp(e.attacker), { special: l, poiseCritical: i } = mp(e.attacker, n), o = hp(e.receiver), u = gp(e.receiver), s = vp(e.receiver), f = (100 + r - o) / 100, g = (100 + l - u) / 100, m = (100 + l - s) / 100, p = e.baseDamage * Math.max(f, 0) * Math.max(g, 0), k = e.baseDamage * Math.max(f, 0) * Math.max(m, 0);
  return {
    attackerNormalPercentage: r,
    attackerSpecialPercentage: l,
    receiverNormalPercentage: o,
    receiverSpecialPercentage: u,
    receiverSpecialConfPercentage: s,
    normalRatio: f,
    specialRatio: g,
    specialConfRatio: m,
    dealDamage: p,
    dealConfDamage: k,
    poiseCritical: i
  };
}, kp = (e, t = {}) => {
  const n = e.attacker, r = yp(e, t), l = e.receiver;
  let i = l.hp, o = l.barrier, u = l.constitution, s = l.san, f = l.statuses.getStack("Sink");
  const g = l.doubleConstitution, m = Math.ceil(r.dealDamage), p = Math.ceil(r.dealConfDamage);
  let k = 0, S = 0;
  o > 0 && m > 0 && (k = Math.min(o, m), o -= k);
  const C = Math.max(m - k, 0);
  C > 0 && (i -= C, S = C);
  let M = 0;
  if (p > 0) {
    const y = p * (g ? 2 : 1);
    u = Math.max(u - y, 0), M = y;
  }
  let d = 0;
  const a = l.statuses.getStack("Sink");
  if (a > 0) {
    let y = a;
    const E = Math.min(s, y);
    s -= E, y -= E, d += E, y > 0 && (i -= y, S += y), f = Math.floor(a / 2);
  }
  const c = {
    ...r,
    barrierAbsorbed: k,
    hpDamageApplied: S,
    confDamageApplied: M,
    sanDamageApplied: d,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: s
  };
  l.hp = i, l.setBarrier(o), l.setConstitution(u), l.setSan(s), l.setHp(i), l.statuses.setStack("Sink", f);
  const h = {
    baseDamage: e.baseDamage,
    normalRatio: r.normalRatio,
    specialRatio: r.specialRatio,
    specialConfRatio: r.specialConfRatio,
    dealDamage: r.dealDamage,
    dealConfDamage: r.dealConfDamage,
    hpDamageApplied: S,
    confDamageApplied: M,
    sanDamageApplied: d,
    barrierAbsorbed: k,
    poiseCritical: r.poiseCritical,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: s
  };
  return fp(n, h), dp(l, h), { result: c, attacker: n, receiver: l };
}, Sp = (e) => {
  var t, n, r;
  return !!(((r = (n = (t = e.system) == null ? void 0 : t.attributes) == null ? void 0 : n.isPlayer) == null ? void 0 : r.value) ?? 0);
}, wp = () => {
  var e;
  return (((e = canvas == null ? void 0 : canvas.tokens) == null ? void 0 : e.placeables) ?? []).filter((t) => {
    var n;
    return !!((n = t.actor) != null && n.id);
  }).map((t) => {
    var n, r;
    return {
      actorId: ((n = t.actor) == null ? void 0 : n.id) ?? "",
      name: t.name ?? ((r = t.actor) == null ? void 0 : r.name) ?? "unknown",
      isPlayer: Sp(t.actor)
    };
  }).filter((t) => t.isPlayer);
}, Ep = (e) => {
  var t, n;
  return ((t = e.find((r) => r.isPlayer)) == null ? void 0 : t.actorId) ?? ((n = e[0]) == null ? void 0 : n.actorId) ?? "";
}, Cp = (e, t) => {
  var n, r;
  return ((n = e.find((l) => l.actorId !== t && !l.isPlayer)) == null ? void 0 : n.actorId) ?? ((r = e.find((l) => l.actorId !== t)) == null ? void 0 : r.actorId) ?? "";
}, Pp = () => {
  const [e, t] = se.useState([]), [n, r] = se.useState(""), [l, i] = se.useState(""), [o, u] = se.useState(""), [s, f] = se.useState(null), [g, m] = se.useState(!1), [p, k] = se.useState(!1);
  se.useEffect(() => {
    var c;
    console.log((c = canvas == null ? void 0 : canvas.tokens) == null ? void 0 : c.placeables), t(wp());
  }, []);
  const S = se.useMemo(() => {
    const c = /* @__PURE__ */ new Map();
    return e.forEach((h) => c.set(h.actorId, h)), c;
  }, [e]);
  se.useEffect(() => {
    if (!e.length) {
      n && r(""), l && i("");
      return;
    }
    const c = new Set(e.map((E) => E.actorId));
    let h = n;
    (!h || !c.has(h)) && (h = Ep(e));
    let y = l;
    (!y || !c.has(y) || y === h) && (y = Cp(e, h)), h !== n && r(h), y !== l && i(y);
  }, [e, n, l]);
  const C = async () => {
    var E, w, P, D, z, pe;
    const c = Number(o);
    if (!Number.isFinite(c) || c <= 0) {
      (E = ui.notifications) == null || E.error("ダメージに正の数値を入力してください");
      return;
    }
    const h = n ? S.get(n) : void 0, y = l ? S.get(l) : void 0;
    if (!h || !y) {
      (w = ui.notifications) == null || w.error("攻撃者と防御者を選択してください");
      return;
    }
    if (n === l) {
      (P = ui.notifications) == null || P.error("攻撃者と防御者は別のキャラクターを選んでください");
      return;
    }
    try {
      m(!0);
      const _e = new ai(), Qe = _e.loadByActorId(n), Sn = _e.loadByActorId(l);
      if (!Qe || !Sn) {
        (D = ui.notifications) == null || D.error("攻撃者または防御者のデータを取得できませんでした");
        return;
      }
      const { result: Pt, attacker: wn, receiver: En } = kp(
        {
          attacker: Qe.combatant,
          receiver: Sn.combatant,
          baseDamage: c
        }
      );
      await Promise.all([
        _e.saveActor(wn),
        _e.saveActor(En)
      ]);
      const _ = `
${h.name} → ${y.name}<br/>
基礎ダメージ: ${c}<br/>
HPダメージ: ${Pt.hpDamageApplied} (バリア吸収: ${Pt.barrierAbsorbed})<br/>
混乱ダメージ: ${Pt.confDamageApplied}<br/>
SANダメージ(沈潜): ${Pt.sanDamageApplied}<br/>
`;
      await ChatMessage.create({
        speaker: ChatMessage.getSpeaker({ actor: Qe.actor }),
        content: _
      }), f(Pt), (z = ui.notifications) == null || z.info(
        `${h.name} が ${y.name} にダメージを適用しました`
      );
    } catch (_e) {
      console.error("[ponkotu-system] damage calc failed", _e), (pe = ui.notifications) == null || pe.error("計算または適用に失敗しました。コンソールを確認してください。");
    } finally {
      m(!1);
    }
  }, M = async () => {
    var h, y, E;
    const c = Array.from(
      new Set(e.map((w) => w.actorId).filter((w) => w))
    );
    if (!c.length)
      return (h = ui.notifications) == null || h.error("ターン開始処理の対象が見つかりません"), 0;
    try {
      const w = new ai(), P = c.map((D) => w.loadByActorId(D)).filter((D) => !!D);
      return P.length ? (P.forEach((D) => {
        ds.turnStart(D.combatant);
      }), await Promise.all(P.map((D) => w.saveActor(D.combatant))), P.length) : ((y = ui.notifications) == null || y.error("ターン開始処理の対象を取得できませんでした"), 0);
    } catch (w) {
      console.error("[ponkotu-system] turn process failed", w), (E = ui.notifications) == null || E.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  }, d = async () => {
    var h, y, E;
    const c = Array.from(
      new Set(e.map((w) => w.actorId).filter((w) => w))
    );
    if (!c.length)
      return (h = ui.notifications) == null || h.error("ターン終了処理の対象が見つかりません"), 0;
    try {
      const w = new ai(), P = c.map((D) => w.loadByActorId(D)).filter((D) => !!D);
      return P.length ? (P.forEach((D) => {
        ds.turnEnd(D.combatant);
      }), await Promise.all(P.map((D) => w.saveActor(D.combatant))), P.length) : ((y = ui.notifications) == null || y.error("ターン終了処理の対象を取得できませんでした"), 0);
    } catch (w) {
      console.error("[ponkotu-system] turn end failed", w), (E = ui.notifications) == null || E.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  };
  return {
    tokens: e,
    attackerId: n,
    receiverId: l,
    baseDamage: o,
    result: s,
    running: g,
    turnRunning: p,
    setAttackerId: r,
    setReceiverId: i,
    setBaseDamage: u,
    run: C,
    runTurnProcess: async () => {
      var c;
      if (!p)
        try {
          k(!0);
          const h = await d(), y = await M(), E = h > 0 ? h : y;
          E > 0 && ((c = ui.notifications) == null || c.info(`ターン処理を${E}体に適用しました`));
        } finally {
          k(!1);
        }
    }
  };
}, _p = () => {
  const {
    tokens: e,
    attackerId: t,
    receiverId: n,
    baseDamage: r,
    result: l,
    running: i,
    turnRunning: o,
    setAttackerId: u,
    setReceiverId: s,
    setBaseDamage: f,
    run: g,
    runTurnProcess: m
  } = Pp();
  return /* @__PURE__ */ T.jsx(
    ip,
    {
      tokens: e,
      attackerId: t,
      receiverId: n,
      baseDamage: r,
      result: l,
      running: i,
      turnRunning: o,
      onAttackerChange: u,
      onReceiverChange: s,
      onBaseDamageChange: f,
      onRun: g,
      onRunTurnProcess: m
    }
  );
}, xp = "ponkotu-system";
var Lt;
class Np extends Application {
  constructor() {
    super(...arguments);
    gr(this, Lt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-damage-calc",
      title: "管理者用フォーム",
      template: `modules/${xp}/templates/damage-calc.html`,
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
    Cn(this, Lt, Kr.createRoot(r)), Z(this, Lt).render(/* @__PURE__ */ T.jsx(_p, {}));
  }
  async close(n) {
    var r;
    return (r = Z(this, Lt)) == null || r.unmount(), Cn(this, Lt, null), super.close(n);
  }
}
Lt = new WeakMap();
const Dp = ({ onSubmit: e }) => {
  const [t, n] = se.useState(""), [r, l] = se.useState(""), i = se.useMemo(() => t.trim().length === 0, [t]), o = (u) => {
    u.preventDefault();
    const s = { name: t.trim(), note: r.trim() };
    console.log("[ponkotu-system] SimpleForm submit", s), e == null || e(s), l("");
  };
  return /* @__PURE__ */ T.jsxs("form", { onSubmit: o, className: "ponkotu-form", children: [
    /* @__PURE__ */ T.jsxs("label", { className: "ponkotu-form__label", children: [
      "名前",
      /* @__PURE__ */ T.jsx(
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
    /* @__PURE__ */ T.jsxs("label", { className: "ponkotu-form__label", children: [
      "メモ",
      /* @__PURE__ */ T.jsx(
        "textarea",
        {
          className: "ponkotu-form__textarea",
          value: r,
          placeholder: "送信したいメモ",
          onChange: (u) => l(u.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ T.jsx("div", { className: "ponkotu-form__footer", children: /* @__PURE__ */ T.jsx("button", { type: "submit", disabled: i, children: "送信" }) })
  ] });
}, Tp = () => {
  const e = [];
  return Bt.forEach((n) => {
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
}, zp = "ponkotu-system";
let ps = !1;
var It;
class Rp extends Application {
  constructor() {
    super(...arguments);
    gr(this, It, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-react-form",
      title: "React フォーム",
      template: `modules/${zp}/templates/react-form.html`,
      width: 420,
      height: 400,
      resizable: !0
    });
  }
  activateListeners(n) {
    var l;
    if (super.activateListeners(n), !ps) {
      const i = Tp();
      if (i.length > 0) {
        ps = !0;
        const o = [
          "<p>ステータスの属性マッピングに問題があります。</p>",
          "<ul>",
          ...i.map((u) => `<li>${u}</li>`),
          "</ul>"
        ].join("");
        new Dialog({
          title: "ポンコツシステム: 設定エラー",
          content: o,
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
    Cn(this, It, Kr.createRoot(r)), Z(this, It).render(
      /* @__PURE__ */ T.jsx(
        Dp,
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
    return (r = Z(this, It)) == null || r.unmount(), Cn(this, It, null), super.close(n);
  }
}
It = new WeakMap();
const no = "ponkotu-system", jn = (...e) => console.log(`[${no}]`, ...e), zc = () => new Rp().render(!0), Rc = () => new Np().render(!0), ms = () => {
  var n;
  const e = (n = game.modules) == null ? void 0 : n.get(no);
  if (!e) {
    console.warn(`[${no}] game.modules からモジュールを取得できませんでした`);
    return;
  }
  const t = e;
  t.api || (t.api = {}), t.api.showReactForm = zc, t.api.showDamageCalc = Rc, jn("API を登録しました", t.api);
}, Lp = () => {
  jn("ES module loaded"), Hooks.once("ready", () => {
    jn("Hooks.once ready fired"), ms(), globalThis.ponkotuSystem = { showReactForm: zc, showDamageCalc: Rc }, jn("React フォーム API を初期化しました");
  }), Hooks.once("init", () => {
    jn("Hooks.once init fired"), ms();
  });
};
Lp();
export {
  Rc as showDamageCalc,
  zc as showReactForm
};
