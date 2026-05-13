var iu = (e) => {
  throw TypeError(e);
};
var ou = (e, t, n) => t.has(e) || iu("Cannot " + n);
var G = (e, t, n) => (ou(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Dn = (e, t, n) => t.has(e) ? iu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Tt = (e, t, n, r) => (ou(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var ws = { exports: {} }, Nl = {}, xs = { exports: {} }, L = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hr = Symbol.for("react.element"), Hc = Symbol.for("react.portal"), Vc = Symbol.for("react.fragment"), Wc = Symbol.for("react.strict_mode"), Qc = Symbol.for("react.profiler"), Kc = Symbol.for("react.provider"), Yc = Symbol.for("react.context"), Xc = Symbol.for("react.forward_ref"), Gc = Symbol.for("react.suspense"), Zc = Symbol.for("react.memo"), Jc = Symbol.for("react.lazy"), uu = Symbol.iterator;
function qc(e) {
  return e === null || typeof e != "object" ? null : (e = uu && e[uu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Es = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, _s = Object.assign, Cs = {};
function _n(e, t, n) {
  this.props = e, this.context = t, this.refs = Cs, this.updater = n || Es;
}
_n.prototype.isReactComponent = {};
_n.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
_n.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ps() {
}
Ps.prototype = _n.prototype;
function co(e, t, n) {
  this.props = e, this.context = t, this.refs = Cs, this.updater = n || Es;
}
var fo = co.prototype = new Ps();
fo.constructor = co;
_s(fo, _n.prototype);
fo.isPureReactComponent = !0;
var su = Array.isArray, Ns = Object.prototype.hasOwnProperty, po = { current: null }, Ts = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ds(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) Ns.call(t, r) && !Ts.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: hr, type: e, key: i, ref: o, props: l, _owner: po.current };
}
function bc(e, t) {
  return { $$typeof: hr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function mo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === hr;
}
function ef(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var au = /\/+/g;
function Vl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ef("" + e.key) : t.toString(36);
}
function Br(e, t, n, r, l) {
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
        case hr:
        case Hc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Vl(o, 0) : r, su(l) ? (n = "", e != null && (n = e.replace(au, "$&/") + "/"), Br(l, t, n, "", function(f) {
    return f;
  })) : l != null && (mo(l) && (l = bc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(au, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", su(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Vl(i, u);
    o += Br(i, t, n, s, l);
  }
  else if (s = qc(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Vl(i, u++), o += Br(i, t, n, s, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function xr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Br(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function tf(e) {
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
var de = { current: null }, Hr = { transition: null }, nf = { ReactCurrentDispatcher: de, ReactCurrentBatchConfig: Hr, ReactCurrentOwner: po };
function js() {
  throw Error("act(...) is not supported in production builds of React.");
}
L.Children = { map: xr, forEach: function(e, t, n) {
  xr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return xr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return xr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!mo(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
L.Component = _n;
L.Fragment = Vc;
L.Profiler = Qc;
L.PureComponent = co;
L.StrictMode = Wc;
L.Suspense = Gc;
L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = nf;
L.act = js;
L.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = _s({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = po.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) Ns.call(t, s) && !Ts.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: hr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
L.createContext = function(e) {
  return e = { $$typeof: Yc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Kc, _context: e }, e.Consumer = e;
};
L.createElement = Ds;
L.createFactory = function(e) {
  var t = Ds.bind(null, e);
  return t.type = e, t;
};
L.createRef = function() {
  return { current: null };
};
L.forwardRef = function(e) {
  return { $$typeof: Xc, render: e };
};
L.isValidElement = mo;
L.lazy = function(e) {
  return { $$typeof: Jc, _payload: { _status: -1, _result: e }, _init: tf };
};
L.memo = function(e, t) {
  return { $$typeof: Zc, type: e, compare: t === void 0 ? null : t };
};
L.startTransition = function(e) {
  var t = Hr.transition;
  Hr.transition = {};
  try {
    e();
  } finally {
    Hr.transition = t;
  }
};
L.unstable_act = js;
L.useCallback = function(e, t) {
  return de.current.useCallback(e, t);
};
L.useContext = function(e) {
  return de.current.useContext(e);
};
L.useDebugValue = function() {
};
L.useDeferredValue = function(e) {
  return de.current.useDeferredValue(e);
};
L.useEffect = function(e, t) {
  return de.current.useEffect(e, t);
};
L.useId = function() {
  return de.current.useId();
};
L.useImperativeHandle = function(e, t, n) {
  return de.current.useImperativeHandle(e, t, n);
};
L.useInsertionEffect = function(e, t) {
  return de.current.useInsertionEffect(e, t);
};
L.useLayoutEffect = function(e, t) {
  return de.current.useLayoutEffect(e, t);
};
L.useMemo = function(e, t) {
  return de.current.useMemo(e, t);
};
L.useReducer = function(e, t, n) {
  return de.current.useReducer(e, t, n);
};
L.useRef = function(e) {
  return de.current.useRef(e);
};
L.useState = function(e) {
  return de.current.useState(e);
};
L.useSyncExternalStore = function(e, t, n) {
  return de.current.useSyncExternalStore(e, t, n);
};
L.useTransition = function() {
  return de.current.useTransition();
};
L.version = "18.3.1";
xs.exports = L;
var I = xs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rf = I, lf = Symbol.for("react.element"), of = Symbol.for("react.fragment"), uf = Object.prototype.hasOwnProperty, sf = rf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, af = { key: !0, ref: !0, __self: !0, __source: !0 };
function zs(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) uf.call(t, r) && !af.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: lf, type: e, key: i, ref: o, props: l, _owner: sf.current };
}
Nl.Fragment = of;
Nl.jsx = zs;
Nl.jsxs = zs;
ws.exports = Nl;
var g = ws.exports, Jn = {}, Rs = { exports: {} }, _e = {}, Ls = { exports: {} }, Is = {};
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
  function t(_, D) {
    var j = _.length;
    _.push(D);
    e: for (; 0 < j; ) {
      var B = j - 1 >>> 1, X = _[B];
      if (0 < l(X, D)) _[B] = D, _[j] = X, j = B;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var D = _[0], j = _.pop();
    if (j !== D) {
      _[0] = j;
      e: for (var B = 0, X = _.length, Re = X >>> 1; B < Re; ) {
        var Ke = 2 * (B + 1) - 1, Tn = _[Ke], Ye = Ke + 1, wr = _[Ye];
        if (0 > l(Tn, j)) Ye < X && 0 > l(wr, Tn) ? (_[B] = wr, _[Ye] = j, B = Ye) : (_[B] = Tn, _[Ke] = j, B = Ke);
        else if (Ye < X && 0 > l(wr, j)) _[B] = wr, _[Ye] = j, B = Ye;
        else break e;
      }
    }
    return D;
  }
  function l(_, D) {
    var j = _.sortIndex - D.sortIndex;
    return j !== 0 ? j : _.id - D.id;
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
  var s = [], f = [], h = 1, m = null, p = 3, S = !1, y = !1, w = !1, z = typeof setTimeout == "function" ? setTimeout : null, c = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var D = n(f); D !== null; ) {
      if (D.callback === null) r(f);
      else if (D.startTime <= _) r(f), D.sortIndex = D.expirationTime, t(s, D);
      else break;
      D = n(f);
    }
  }
  function v(_) {
    if (w = !1, d(_), !y) if (n(s) !== null) y = !0, Xt(x);
    else {
      var D = n(f);
      D !== null && Gt(v, D.startTime - _);
    }
  }
  function x(_, D) {
    y = !1, w && (w = !1, c(T), T = -1), S = !0;
    var j = p;
    try {
      for (d(D), m = n(s); m !== null && (!(m.expirationTime > D) || _ && !Q()); ) {
        var B = m.callback;
        if (typeof B == "function") {
          m.callback = null, p = m.priorityLevel;
          var X = B(m.expirationTime <= D);
          D = e.unstable_now(), typeof X == "function" ? m.callback = X : m === n(s) && r(s), d(D);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var Re = !0;
      else {
        var Ke = n(f);
        Ke !== null && Gt(v, Ke.startTime - D), Re = !1;
      }
      return Re;
    } finally {
      m = null, p = j, S = !1;
    }
  }
  var C = !1, E = null, T = -1, R = 5, N = -1;
  function Q() {
    return !(e.unstable_now() - N < R);
  }
  function $e() {
    if (E !== null) {
      var _ = e.unstable_now();
      N = _;
      var D = !0;
      try {
        D = E(!0, _);
      } finally {
        D ? it() : (C = !1, E = null);
      }
    } else C = !1;
  }
  var it;
  if (typeof a == "function") it = function() {
    a($e);
  };
  else if (typeof MessageChannel < "u") {
    var Nn = new MessageChannel(), Sr = Nn.port2;
    Nn.port1.onmessage = $e, it = function() {
      Sr.postMessage(null);
    };
  } else it = function() {
    z($e, 0);
  };
  function Xt(_) {
    E = _, C || (C = !0, it());
  }
  function Gt(_, D) {
    T = z(function() {
      _(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    y || S || (y = !0, Xt(x));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : R = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(_) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var D = 3;
        break;
      default:
        D = p;
    }
    var j = p;
    p = D;
    try {
      return _();
    } finally {
      p = j;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, D) {
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
    var j = p;
    p = _;
    try {
      return D();
    } finally {
      p = j;
    }
  }, e.unstable_scheduleCallback = function(_, D, j) {
    var B = e.unstable_now();
    switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? B + j : B) : j = B, _) {
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
    return X = j + X, _ = { id: h++, callback: D, priorityLevel: _, startTime: j, expirationTime: X, sortIndex: -1 }, j > B ? (_.sortIndex = j, t(f, _), n(s) === null && _ === n(f) && (w ? (c(T), T = -1) : w = !0, Gt(v, j - B))) : (_.sortIndex = X, t(s, _), y || S || (y = !0, Xt(x))), _;
  }, e.unstable_shouldYield = Q, e.unstable_wrapCallback = function(_) {
    var D = p;
    return function() {
      var j = p;
      p = D;
      try {
        return _.apply(this, arguments);
      } finally {
        p = j;
      }
    };
  };
})(Is);
Ls.exports = Is;
var cf = Ls.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ff = I, Ee = cf;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ms = /* @__PURE__ */ new Set(), qn = {};
function Kt(e, t) {
  vn(e, t), vn(e + "Capture", t);
}
function vn(e, t) {
  for (qn[e] = t, e = 0; e < t.length; e++) Ms.add(t[e]);
}
var et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vi = Object.prototype.hasOwnProperty, df = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, cu = {}, fu = {};
function pf(e) {
  return vi.call(fu, e) ? !0 : vi.call(cu, e) ? !1 : df.test(e) ? fu[e] = !0 : (cu[e] = !0, !1);
}
function mf(e, t, n, r) {
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
function hf(e, t, n, r) {
  if (t === null || typeof t > "u" || mf(e, t, n, r)) return !0;
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
function pe(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  re[e] = new pe(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  re[t] = new pe(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  re[e] = new pe(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  re[e] = new pe(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  re[e] = new pe(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  re[e] = new pe(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  re[e] = new pe(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  re[e] = new pe(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  re[e] = new pe(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var ho = /[\-:]([a-z])/g;
function go(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ho,
    go
  );
  re[t] = new pe(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ho, go);
  re[t] = new pe(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ho, go);
  re[t] = new pe(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  re[e] = new pe(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function vo(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (hf(t, n, l, r) && (n = null), r || l === null ? pf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = ff.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Er = Symbol.for("react.element"), qt = Symbol.for("react.portal"), bt = Symbol.for("react.fragment"), yo = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), Os = Symbol.for("react.provider"), As = Symbol.for("react.context"), ko = Symbol.for("react.forward_ref"), ki = Symbol.for("react.suspense"), Si = Symbol.for("react.suspense_list"), So = Symbol.for("react.memo"), at = Symbol.for("react.lazy"), Fs = Symbol.for("react.offscreen"), du = Symbol.iterator;
function jn(e) {
  return e === null || typeof e != "object" ? null : (e = du && e[du] || e["@@iterator"], typeof e == "function" ? e : null);
}
var W = Object.assign, Wl;
function Fn(e) {
  if (Wl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Wl = t && t[1] || "";
  }
  return `
` + Wl + e;
}
var Ql = !1;
function Kl(e, t) {
  if (!e || Ql) return "";
  Ql = !0;
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
    Ql = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Fn(e) : "";
}
function gf(e) {
  switch (e.tag) {
    case 5:
      return Fn(e.type);
    case 16:
      return Fn("Lazy");
    case 13:
      return Fn("Suspense");
    case 19:
      return Fn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Kl(e.type, !1), e;
    case 11:
      return e = Kl(e.type.render, !1), e;
    case 1:
      return e = Kl(e.type, !0), e;
    default:
      return "";
  }
}
function wi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case bt:
      return "Fragment";
    case qt:
      return "Portal";
    case yi:
      return "Profiler";
    case yo:
      return "StrictMode";
    case ki:
      return "Suspense";
    case Si:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case As:
      return (e.displayName || "Context") + ".Consumer";
    case Os:
      return (e._context.displayName || "Context") + ".Provider";
    case ko:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case So:
      return t = e.displayName || null, t !== null ? t : wi(e.type) || "Memo";
    case at:
      t = e._payload, e = e._init;
      try {
        return wi(e(t));
      } catch {
      }
  }
  return null;
}
function vf(e) {
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
      return wi(t);
    case 8:
      return t === yo ? "StrictMode" : "Mode";
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
function Et(e) {
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
function yf(e) {
  var t = Us(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function _r(e) {
  e._valueTracker || (e._valueTracker = yf(e));
}
function $s(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Us(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function br(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function xi(e, t) {
  var n = t.checked;
  return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function pu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Et(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Bs(e, t) {
  t = t.checked, t != null && vo(e, "checked", t, !1);
}
function Ei(e, t) {
  Bs(e, t);
  var n = Et(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? _i(e, t.type, n) : t.hasOwnProperty("defaultValue") && _i(e, t.type, Et(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function mu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function _i(e, t, n) {
  (t !== "number" || br(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Un = Array.isArray;
function fn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Et(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ci(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function hu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (Un(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Et(n) };
}
function Hs(e, t) {
  var n = Et(t.value), r = Et(t.defaultValue);
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
function Pi(e, t) {
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
function bn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Hn = {
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
}, kf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hn).forEach(function(e) {
  kf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Hn[t] = Hn[e];
  });
});
function Qs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Hn.hasOwnProperty(e) && Hn[e] ? ("" + t).trim() : t + "px";
}
function Ks(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Qs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Sf = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ni(e, t) {
  if (t) {
    if (Sf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Ti(e, t) {
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
var Di = null;
function wo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var ji = null, dn = null, pn = null;
function vu(e) {
  if (e = yr(e)) {
    if (typeof ji != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = Rl(t), ji(e.stateNode, e.type, t));
  }
}
function Ys(e) {
  dn ? pn ? pn.push(e) : pn = [e] : dn = e;
}
function Xs() {
  if (dn) {
    var e = dn, t = pn;
    if (pn = dn = null, vu(e), t) for (e = 0; e < t.length; e++) vu(t[e]);
  }
}
function Gs(e, t) {
  return e(t);
}
function Zs() {
}
var Yl = !1;
function Js(e, t, n) {
  if (Yl) return e(t, n);
  Yl = !0;
  try {
    return Gs(e, t, n);
  } finally {
    Yl = !1, (dn !== null || pn !== null) && (Zs(), Xs());
  }
}
function er(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Rl(n);
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
  if (n && typeof n != "function") throw Error(k(231, t, typeof n));
  return n;
}
var zi = !1;
if (et) try {
  var zn = {};
  Object.defineProperty(zn, "passive", { get: function() {
    zi = !0;
  } }), window.addEventListener("test", zn, zn), window.removeEventListener("test", zn, zn);
} catch {
  zi = !1;
}
function wf(e, t, n, r, l, i, o, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
var Vn = !1, el = null, tl = !1, Ri = null, xf = { onError: function(e) {
  Vn = !0, el = e;
} };
function Ef(e, t, n, r, l, i, o, u, s) {
  Vn = !1, el = null, wf.apply(xf, arguments);
}
function _f(e, t, n, r, l, i, o, u, s) {
  if (Ef.apply(this, arguments), Vn) {
    if (Vn) {
      var f = el;
      Vn = !1, el = null;
    } else throw Error(k(198));
    tl || (tl = !0, Ri = f);
  }
}
function Yt(e) {
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
  if (Yt(e) !== e) throw Error(k(188));
}
function Cf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Yt(e), t === null) throw Error(k(188));
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
        if (i === n) return yu(l), e;
        if (i === r) return yu(l), t;
        i = i.sibling;
      }
      throw Error(k(188));
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
        if (!o) throw Error(k(189));
      }
    }
    if (n.alternate !== r) throw Error(k(190));
  }
  if (n.tag !== 3) throw Error(k(188));
  return n.stateNode.current === n ? e : t;
}
function bs(e) {
  return e = Cf(e), e !== null ? ea(e) : null;
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
var ta = Ee.unstable_scheduleCallback, ku = Ee.unstable_cancelCallback, Pf = Ee.unstable_shouldYield, Nf = Ee.unstable_requestPaint, Y = Ee.unstable_now, Tf = Ee.unstable_getCurrentPriorityLevel, xo = Ee.unstable_ImmediatePriority, na = Ee.unstable_UserBlockingPriority, nl = Ee.unstable_NormalPriority, Df = Ee.unstable_LowPriority, ra = Ee.unstable_IdlePriority, Tl = null, We = null;
function jf(e) {
  if (We && typeof We.onCommitFiberRoot == "function") try {
    We.onCommitFiberRoot(Tl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Ae = Math.clz32 ? Math.clz32 : Lf, zf = Math.log, Rf = Math.LN2;
function Lf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (zf(e) / Rf | 0) | 0;
}
var Pr = 64, Nr = 4194304;
function $n(e) {
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
function rl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = $n(u) : (i &= o, i !== 0 && (r = $n(i)));
  } else o = n & ~l, o !== 0 ? r = $n(o) : i !== 0 && (r = $n(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Ae(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function If(e, t) {
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
function Mf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Ae(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = If(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Li(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function la() {
  var e = Pr;
  return Pr <<= 1, !(Pr & 4194240) && (Pr = 64), e;
}
function Xl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function gr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Ae(t), e[t] = n;
}
function Of(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Ae(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function Eo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Ae(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function ia(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var oa, _o, ua, sa, aa, Ii = !1, Tr = [], ht = null, gt = null, vt = null, tr = /* @__PURE__ */ new Map(), nr = /* @__PURE__ */ new Map(), ft = [], Af = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
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
      tr.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      nr.delete(t.pointerId);
  }
}
function Rn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = yr(t), t !== null && _o(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Ff(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ht = Rn(ht, e, t, n, r, l), !0;
    case "dragenter":
      return gt = Rn(gt, e, t, n, r, l), !0;
    case "mouseover":
      return vt = Rn(vt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return tr.set(i, Rn(tr.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, nr.set(i, Rn(nr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function ca(e) {
  var t = Rt(e.target);
  if (t !== null) {
    var n = Yt(t);
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
function Vr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Di = r, n.target.dispatchEvent(r), Di = null;
    } else return t = yr(n), t !== null && _o(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function wu(e, t, n) {
  Vr(e) && n.delete(t);
}
function Uf() {
  Ii = !1, ht !== null && Vr(ht) && (ht = null), gt !== null && Vr(gt) && (gt = null), vt !== null && Vr(vt) && (vt = null), tr.forEach(wu), nr.forEach(wu);
}
function Ln(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ii || (Ii = !0, Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Uf)));
}
function rr(e) {
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
  for (ht !== null && Ln(ht, e), gt !== null && Ln(gt, e), vt !== null && Ln(vt, e), tr.forEach(t), nr.forEach(t), n = 0; n < ft.length; n++) r = ft[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ft.length && (n = ft[0], n.blockedOn === null); ) ca(n), n.blockedOn === null && ft.shift();
}
var mn = lt.ReactCurrentBatchConfig, ll = !0;
function $f(e, t, n, r) {
  var l = O, i = mn.transition;
  mn.transition = null;
  try {
    O = 1, Co(e, t, n, r);
  } finally {
    O = l, mn.transition = i;
  }
}
function Bf(e, t, n, r) {
  var l = O, i = mn.transition;
  mn.transition = null;
  try {
    O = 4, Co(e, t, n, r);
  } finally {
    O = l, mn.transition = i;
  }
}
function Co(e, t, n, r) {
  if (ll) {
    var l = Mi(e, t, n, r);
    if (l === null) li(e, t, r, il, n), Su(e, r);
    else if (Ff(l, e, t, n, r)) r.stopPropagation();
    else if (Su(e, r), t & 4 && -1 < Af.indexOf(e)) {
      for (; l !== null; ) {
        var i = yr(l);
        if (i !== null && oa(i), i = Mi(e, t, n, r), i === null && li(e, t, r, il, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else li(e, t, r, null, n);
  }
}
var il = null;
function Mi(e, t, n, r) {
  if (il = null, e = wo(r), e = Rt(e), e !== null) if (t = Yt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = qs(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return il = e, null;
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
      switch (Tf()) {
        case xo:
          return 1;
        case na:
          return 4;
        case nl:
        case Df:
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
var pt = null, Po = null, Wr = null;
function da() {
  if (Wr) return Wr;
  var e, t = Po, n = t.length, r, l = "value" in pt ? pt.value : pt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Wr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Qr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Dr() {
  return !0;
}
function xu() {
  return !1;
}
function Ce(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Dr : xu, this.isPropagationStopped = xu, this;
  }
  return W(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Dr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Dr);
  }, persist: function() {
  }, isPersistent: Dr }), t;
}
var Cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, No = Ce(Cn), vr = W({}, Cn, { view: 0, detail: 0 }), Hf = Ce(vr), Gl, Zl, In, Dl = W({}, vr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: To, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== In && (In && e.type === "mousemove" ? (Gl = e.screenX - In.screenX, Zl = e.screenY - In.screenY) : Zl = Gl = 0, In = e), Gl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Zl;
} }), Eu = Ce(Dl), Vf = W({}, Dl, { dataTransfer: 0 }), Wf = Ce(Vf), Qf = W({}, vr, { relatedTarget: 0 }), Jl = Ce(Qf), Kf = W({}, Cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Yf = Ce(Kf), Xf = W({}, Cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Gf = Ce(Xf), Zf = W({}, Cn, { data: 0 }), _u = Ce(Zf), Jf = {
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
}, qf = {
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
}, bf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function ed(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = bf[e]) ? !!t[e] : !1;
}
function To() {
  return ed;
}
var td = W({}, vr, { key: function(e) {
  if (e.key) {
    var t = Jf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Qr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? qf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: To, charCode: function(e) {
  return e.type === "keypress" ? Qr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Qr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), nd = Ce(td), rd = W({}, Dl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cu = Ce(rd), ld = W({}, vr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: To }), id = Ce(ld), od = W({}, Cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ud = Ce(od), sd = W({}, Dl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ad = Ce(sd), cd = [9, 13, 27, 32], Do = et && "CompositionEvent" in window, Wn = null;
et && "documentMode" in document && (Wn = document.documentMode);
var fd = et && "TextEvent" in window && !Wn, pa = et && (!Do || Wn && 8 < Wn && 11 >= Wn), Pu = " ", Nu = !1;
function ma(e, t) {
  switch (e) {
    case "keyup":
      return cd.indexOf(t.keyCode) !== -1;
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
var en = !1;
function dd(e, t) {
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
function pd(e, t) {
  if (en) return e === "compositionend" || !Do && ma(e, t) ? (e = da(), Wr = Po = pt = null, en = !1, e) : null;
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
var md = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Tu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!md[e.type] : t === "textarea";
}
function ga(e, t, n, r) {
  Ys(r), t = ol(t, "onChange"), 0 < t.length && (n = new No("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Qn = null, lr = null;
function hd(e) {
  Na(e, 0);
}
function jl(e) {
  var t = rn(e);
  if ($s(t)) return e;
}
function gd(e, t) {
  if (e === "change") return t;
}
var va = !1;
if (et) {
  var ql;
  if (et) {
    var bl = "oninput" in document;
    if (!bl) {
      var Du = document.createElement("div");
      Du.setAttribute("oninput", "return;"), bl = typeof Du.oninput == "function";
    }
    ql = bl;
  } else ql = !1;
  va = ql && (!document.documentMode || 9 < document.documentMode);
}
function ju() {
  Qn && (Qn.detachEvent("onpropertychange", ya), lr = Qn = null);
}
function ya(e) {
  if (e.propertyName === "value" && jl(lr)) {
    var t = [];
    ga(t, lr, e, wo(e)), Js(hd, t);
  }
}
function vd(e, t, n) {
  e === "focusin" ? (ju(), Qn = t, lr = n, Qn.attachEvent("onpropertychange", ya)) : e === "focusout" && ju();
}
function yd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return jl(lr);
}
function kd(e, t) {
  if (e === "click") return jl(t);
}
function Sd(e, t) {
  if (e === "input" || e === "change") return jl(t);
}
function wd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ue = typeof Object.is == "function" ? Object.is : wd;
function ir(e, t) {
  if (Ue(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!vi.call(t, l) || !Ue(e[l], t[l])) return !1;
  }
  return !0;
}
function zu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Ru(e, t) {
  var n = zu(e);
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
    n = zu(n);
  }
}
function ka(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ka(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Sa() {
  for (var e = window, t = br(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = br(e.document);
  }
  return t;
}
function jo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function xd(e) {
  var t = Sa(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ka(n.ownerDocument.documentElement, n)) {
    if (r !== null && jo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Ru(n, i);
        var o = Ru(
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
var Ed = et && "documentMode" in document && 11 >= document.documentMode, tn = null, Oi = null, Kn = null, Ai = !1;
function Lu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ai || tn == null || tn !== br(r) || (r = tn, "selectionStart" in r && jo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Kn && ir(Kn, r) || (Kn = r, r = ol(Oi, "onSelect"), 0 < r.length && (t = new No("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = tn)));
}
function jr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var nn = { animationend: jr("Animation", "AnimationEnd"), animationiteration: jr("Animation", "AnimationIteration"), animationstart: jr("Animation", "AnimationStart"), transitionend: jr("Transition", "TransitionEnd") }, ei = {}, wa = {};
et && (wa = document.createElement("div").style, "AnimationEvent" in window || (delete nn.animationend.animation, delete nn.animationiteration.animation, delete nn.animationstart.animation), "TransitionEvent" in window || delete nn.transitionend.transition);
function zl(e) {
  if (ei[e]) return ei[e];
  if (!nn[e]) return e;
  var t = nn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in wa) return ei[e] = t[n];
  return e;
}
var xa = zl("animationend"), Ea = zl("animationiteration"), _a = zl("animationstart"), Ca = zl("transitionend"), Pa = /* @__PURE__ */ new Map(), Iu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ct(e, t) {
  Pa.set(e, t), Kt(t, [e]);
}
for (var ti = 0; ti < Iu.length; ti++) {
  var ni = Iu[ti], _d = ni.toLowerCase(), Cd = ni[0].toUpperCase() + ni.slice(1);
  Ct(_d, "on" + Cd);
}
Ct(xa, "onAnimationEnd");
Ct(Ea, "onAnimationIteration");
Ct(_a, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(Ca, "onTransitionEnd");
vn("onMouseEnter", ["mouseout", "mouseover"]);
vn("onMouseLeave", ["mouseout", "mouseover"]);
vn("onPointerEnter", ["pointerout", "pointerover"]);
vn("onPointerLeave", ["pointerout", "pointerover"]);
Kt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Pd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Bn));
function Mu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, _f(r, t, void 0, e), e.currentTarget = null;
}
function Na(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, f = u.currentTarget;
        if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Mu(l, u, f), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, f = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Mu(l, u, f), i = s;
      }
    }
  }
  if (tl) throw e = Ri, tl = !1, Ri = null, e;
}
function F(e, t) {
  var n = t[Hi];
  n === void 0 && (n = t[Hi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ta(t, e, 2, !1), n.add(r));
}
function ri(e, t, n) {
  var r = 0;
  t && (r |= 4), Ta(n, e, r, t);
}
var zr = "_reactListening" + Math.random().toString(36).slice(2);
function or(e) {
  if (!e[zr]) {
    e[zr] = !0, Ms.forEach(function(n) {
      n !== "selectionchange" && (Pd.has(n) || ri(n, !1, e), ri(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[zr] || (t[zr] = !0, ri("selectionchange", !1, t));
  }
}
function Ta(e, t, n, r) {
  switch (fa(t)) {
    case 1:
      var l = $f;
      break;
    case 4:
      l = Bf;
      break;
    default:
      l = Co;
  }
  n = l.bind(null, t, n, e), l = void 0, !zi || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function li(e, t, n, r, l) {
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
        if (o = Rt(u), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Js(function() {
    var f = i, h = wo(n), m = [];
    e: {
      var p = Pa.get(e);
      if (p !== void 0) {
        var S = No, y = e;
        switch (e) {
          case "keypress":
            if (Qr(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = nd;
            break;
          case "focusin":
            y = "focus", S = Jl;
            break;
          case "focusout":
            y = "blur", S = Jl;
            break;
          case "beforeblur":
          case "afterblur":
            S = Jl;
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
            S = Eu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Wf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = id;
            break;
          case xa:
          case Ea:
          case _a:
            S = Yf;
            break;
          case Ca:
            S = ud;
            break;
          case "scroll":
            S = Hf;
            break;
          case "wheel":
            S = ad;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Gf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = Cu;
        }
        var w = (t & 4) !== 0, z = !w && e === "scroll", c = w ? p !== null ? p + "Capture" : null : p;
        w = [];
        for (var a = f, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, c !== null && (v = er(a, c), v != null && w.push(ur(a, v, d)))), z) break;
          a = a.return;
        }
        0 < w.length && (p = new S(p, y, null, n, h), m.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", p && n !== Di && (y = n.relatedTarget || n.fromElement) && (Rt(y) || y[tt])) break e;
        if ((S || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, S ? (y = n.relatedTarget || n.toElement, S = f, y = y ? Rt(y) : null, y !== null && (z = Yt(y), y !== z || y.tag !== 5 && y.tag !== 6) && (y = null)) : (S = null, y = f), S !== y)) {
          if (w = Eu, v = "onMouseLeave", c = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (w = Cu, v = "onPointerLeave", c = "onPointerEnter", a = "pointer"), z = S == null ? p : rn(S), d = y == null ? p : rn(y), p = new w(v, a + "leave", S, n, h), p.target = z, p.relatedTarget = d, v = null, Rt(h) === f && (w = new w(c, a + "enter", y, n, h), w.target = d, w.relatedTarget = z, v = w), z = v, S && y) t: {
            for (w = S, c = y, a = 0, d = w; d; d = Zt(d)) a++;
            for (d = 0, v = c; v; v = Zt(v)) d++;
            for (; 0 < a - d; ) w = Zt(w), a--;
            for (; 0 < d - a; ) c = Zt(c), d--;
            for (; a--; ) {
              if (w === c || c !== null && w === c.alternate) break t;
              w = Zt(w), c = Zt(c);
            }
            w = null;
          }
          else w = null;
          S !== null && Ou(m, p, S, w, !1), y !== null && z !== null && Ou(m, z, y, w, !0);
        }
      }
      e: {
        if (p = f ? rn(f) : window, S = p.nodeName && p.nodeName.toLowerCase(), S === "select" || S === "input" && p.type === "file") var x = gd;
        else if (Tu(p)) if (va) x = Sd;
        else {
          x = yd;
          var C = vd;
        }
        else (S = p.nodeName) && S.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (x = kd);
        if (x && (x = x(e, f))) {
          ga(m, x, n, h);
          break e;
        }
        C && C(e, p, f), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && _i(p, "number", p.value);
      }
      switch (C = f ? rn(f) : window, e) {
        case "focusin":
          (Tu(C) || C.contentEditable === "true") && (tn = C, Oi = f, Kn = null);
          break;
        case "focusout":
          Kn = Oi = tn = null;
          break;
        case "mousedown":
          Ai = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ai = !1, Lu(m, n, h);
          break;
        case "selectionchange":
          if (Ed) break;
        case "keydown":
        case "keyup":
          Lu(m, n, h);
      }
      var E;
      if (Do) e: {
        switch (e) {
          case "compositionstart":
            var T = "onCompositionStart";
            break e;
          case "compositionend":
            T = "onCompositionEnd";
            break e;
          case "compositionupdate":
            T = "onCompositionUpdate";
            break e;
        }
        T = void 0;
      }
      else en ? ma(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (pa && n.locale !== "ko" && (en || T !== "onCompositionStart" ? T === "onCompositionEnd" && en && (E = da()) : (pt = h, Po = "value" in pt ? pt.value : pt.textContent, en = !0)), C = ol(f, T), 0 < C.length && (T = new _u(T, e, null, n, h), m.push({ event: T, listeners: C }), E ? T.data = E : (E = ha(n), E !== null && (T.data = E)))), (E = fd ? dd(e, n) : pd(e, n)) && (f = ol(f, "onBeforeInput"), 0 < f.length && (h = new _u("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: f }), h.data = E));
    }
    Na(m, t);
  });
}
function ur(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ol(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = er(e, n), i != null && r.unshift(ur(e, i, l)), i = er(e, t), i != null && r.push(ur(e, i, l))), e = e.return;
  }
  return r;
}
function Zt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ou(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, l ? (s = er(n, i), s != null && o.unshift(ur(n, s, u))) : l || (s = er(n, i), s != null && o.push(ur(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Nd = /\r\n?/g, Td = /\u0000|\uFFFD/g;
function Au(e) {
  return (typeof e == "string" ? e : "" + e).replace(Nd, `
`).replace(Td, "");
}
function Rr(e, t, n) {
  if (t = Au(t), Au(e) !== t && n) throw Error(k(425));
}
function ul() {
}
var Fi = null, Ui = null;
function $i(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Bi = typeof setTimeout == "function" ? setTimeout : void 0, Dd = typeof clearTimeout == "function" ? clearTimeout : void 0, Fu = typeof Promise == "function" ? Promise : void 0, jd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fu < "u" ? function(e) {
  return Fu.resolve(null).then(e).catch(zd);
} : Bi;
function zd(e) {
  setTimeout(function() {
    throw e;
  });
}
function ii(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), rr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  rr(t);
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
var Pn = Math.random().toString(36).slice(2), Ve = "__reactFiber$" + Pn, sr = "__reactProps$" + Pn, tt = "__reactContainer$" + Pn, Hi = "__reactEvents$" + Pn, Rd = "__reactListeners$" + Pn, Ld = "__reactHandles$" + Pn;
function Rt(e) {
  var t = e[Ve];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[tt] || n[Ve]) {
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
function yr(e) {
  return e = e[Ve] || e[tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function rn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Rl(e) {
  return e[sr] || null;
}
var Vi = [], ln = -1;
function Pt(e) {
  return { current: e };
}
function U(e) {
  0 > ln || (e.current = Vi[ln], Vi[ln] = null, ln--);
}
function A(e, t) {
  ln++, Vi[ln] = e.current, e.current = t;
}
var _t = {}, se = Pt(_t), ge = Pt(!1), Bt = _t;
function yn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return _t;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ve(e) {
  return e = e.childContextTypes, e != null;
}
function sl() {
  U(ge), U(se);
}
function $u(e, t, n) {
  if (se.current !== _t) throw Error(k(168));
  A(se, t), A(ge, n);
}
function Da(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, vf(e) || "Unknown", l));
  return W({}, n, r);
}
function al(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || _t, Bt = se.current, A(se, e), A(ge, ge.current), !0;
}
function Bu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = Da(e, t, Bt), r.__reactInternalMemoizedMergedChildContext = e, U(ge), U(se), A(se, e)) : U(ge), A(ge, n);
}
var Ze = null, Ll = !1, oi = !1;
function ja(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
function Id(e) {
  Ll = !0, ja(e);
}
function Nt() {
  if (!oi && Ze !== null) {
    oi = !0;
    var e = 0, t = O;
    try {
      var n = Ze;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ze = null, Ll = !1;
    } catch (l) {
      throw Ze !== null && (Ze = Ze.slice(e + 1)), ta(xo, Nt), l;
    } finally {
      O = t, oi = !1;
    }
  }
  return null;
}
var on = [], un = 0, cl = null, fl = 0, Pe = [], Ne = 0, Ht = null, Je = 1, qe = "";
function jt(e, t) {
  on[un++] = fl, on[un++] = cl, cl = e, fl = t;
}
function za(e, t, n) {
  Pe[Ne++] = Je, Pe[Ne++] = qe, Pe[Ne++] = Ht, Ht = e;
  var r = Je;
  e = qe;
  var l = 32 - Ae(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Ae(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Je = 1 << 32 - Ae(t) + l | n << l | r, qe = i + e;
  } else Je = 1 << i | n << l | r, qe = e;
}
function zo(e) {
  e.return !== null && (jt(e, 1), za(e, 1, 0));
}
function Ro(e) {
  for (; e === cl; ) cl = on[--un], on[un] = null, fl = on[--un], on[un] = null;
  for (; e === Ht; ) Ht = Pe[--Ne], Pe[Ne] = null, qe = Pe[--Ne], Pe[Ne] = null, Je = Pe[--Ne], Pe[Ne] = null;
}
var xe = null, we = null, $ = !1, Oe = null;
function Ra(e, t) {
  var n = Te(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Hu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xe = e, we = yt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xe = e, we = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ht !== null ? { id: Je, overflow: qe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Te(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xe = e, we = null, !0) : !1;
    default:
      return !1;
  }
}
function Wi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qi(e) {
  if ($) {
    var t = we;
    if (t) {
      var n = t;
      if (!Hu(e, t)) {
        if (Wi(e)) throw Error(k(418));
        t = yt(n.nextSibling);
        var r = xe;
        t && Hu(e, t) ? Ra(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, xe = e);
      }
    } else {
      if (Wi(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, $ = !1, xe = e;
    }
  }
}
function Vu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  xe = e;
}
function Lr(e) {
  if (e !== xe) return !1;
  if (!$) return Vu(e), $ = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !$i(e.type, e.memoizedProps)), t && (t = we)) {
    if (Wi(e)) throw La(), Error(k(418));
    for (; t; ) Ra(e, t), t = yt(t.nextSibling);
  }
  if (Vu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = yt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = xe ? yt(e.stateNode.nextSibling) : null;
  return !0;
}
function La() {
  for (var e = we; e; ) e = yt(e.nextSibling);
}
function kn() {
  we = xe = null, $ = !1;
}
function Lo(e) {
  Oe === null ? Oe = [e] : Oe.push(e);
}
var Md = lt.ReactCurrentBatchConfig;
function Mn(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(k(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(k(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(k(284));
    if (!n._owner) throw Error(k(290, e));
  }
  return e;
}
function Ir(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Wu(e) {
  var t = e._init;
  return t(e._payload);
}
function Ia(e) {
  function t(c, a) {
    if (e) {
      var d = c.deletions;
      d === null ? (c.deletions = [a], c.flags |= 16) : d.push(a);
    }
  }
  function n(c, a) {
    if (!e) return null;
    for (; a !== null; ) t(c, a), a = a.sibling;
    return null;
  }
  function r(c, a) {
    for (c = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
    return c;
  }
  function l(c, a) {
    return c = xt(c, a), c.index = 0, c.sibling = null, c;
  }
  function i(c, a, d) {
    return c.index = d, e ? (d = c.alternate, d !== null ? (d = d.index, d < a ? (c.flags |= 2, a) : d) : (c.flags |= 2, a)) : (c.flags |= 1048576, a);
  }
  function o(c) {
    return e && c.alternate === null && (c.flags |= 2), c;
  }
  function u(c, a, d, v) {
    return a === null || a.tag !== 6 ? (a = mi(d, c.mode, v), a.return = c, a) : (a = l(a, d), a.return = c, a);
  }
  function s(c, a, d, v) {
    var x = d.type;
    return x === bt ? h(c, a, d.props.children, v, d.key) : a !== null && (a.elementType === x || typeof x == "object" && x !== null && x.$$typeof === at && Wu(x) === a.type) ? (v = l(a, d.props), v.ref = Mn(c, a, d), v.return = c, v) : (v = qr(d.type, d.key, d.props, null, c.mode, v), v.ref = Mn(c, a, d), v.return = c, v);
  }
  function f(c, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = hi(d, c.mode, v), a.return = c, a) : (a = l(a, d.children || []), a.return = c, a);
  }
  function h(c, a, d, v, x) {
    return a === null || a.tag !== 7 ? (a = Ut(d, c.mode, v, x), a.return = c, a) : (a = l(a, d), a.return = c, a);
  }
  function m(c, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = mi("" + a, c.mode, d), a.return = c, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case Er:
          return d = qr(a.type, a.key, a.props, null, c.mode, d), d.ref = Mn(c, null, a), d.return = c, d;
        case qt:
          return a = hi(a, c.mode, d), a.return = c, a;
        case at:
          var v = a._init;
          return m(c, v(a._payload), d);
      }
      if (Un(a) || jn(a)) return a = Ut(a, c.mode, d, null), a.return = c, a;
      Ir(c, a);
    }
    return null;
  }
  function p(c, a, d, v) {
    var x = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return x !== null ? null : u(c, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Er:
          return d.key === x ? s(c, a, d, v) : null;
        case qt:
          return d.key === x ? f(c, a, d, v) : null;
        case at:
          return x = d._init, p(
            c,
            a,
            x(d._payload),
            v
          );
      }
      if (Un(d) || jn(d)) return x !== null ? null : h(c, a, d, v, null);
      Ir(c, d);
    }
    return null;
  }
  function S(c, a, d, v, x) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return c = c.get(d) || null, u(a, c, "" + v, x);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Er:
          return c = c.get(v.key === null ? d : v.key) || null, s(a, c, v, x);
        case qt:
          return c = c.get(v.key === null ? d : v.key) || null, f(a, c, v, x);
        case at:
          var C = v._init;
          return S(c, a, d, C(v._payload), x);
      }
      if (Un(v) || jn(v)) return c = c.get(d) || null, h(a, c, v, x, null);
      Ir(a, v);
    }
    return null;
  }
  function y(c, a, d, v) {
    for (var x = null, C = null, E = a, T = a = 0, R = null; E !== null && T < d.length; T++) {
      E.index > T ? (R = E, E = null) : R = E.sibling;
      var N = p(c, E, d[T], v);
      if (N === null) {
        E === null && (E = R);
        break;
      }
      e && E && N.alternate === null && t(c, E), a = i(N, a, T), C === null ? x = N : C.sibling = N, C = N, E = R;
    }
    if (T === d.length) return n(c, E), $ && jt(c, T), x;
    if (E === null) {
      for (; T < d.length; T++) E = m(c, d[T], v), E !== null && (a = i(E, a, T), C === null ? x = E : C.sibling = E, C = E);
      return $ && jt(c, T), x;
    }
    for (E = r(c, E); T < d.length; T++) R = S(E, c, T, d[T], v), R !== null && (e && R.alternate !== null && E.delete(R.key === null ? T : R.key), a = i(R, a, T), C === null ? x = R : C.sibling = R, C = R);
    return e && E.forEach(function(Q) {
      return t(c, Q);
    }), $ && jt(c, T), x;
  }
  function w(c, a, d, v) {
    var x = jn(d);
    if (typeof x != "function") throw Error(k(150));
    if (d = x.call(d), d == null) throw Error(k(151));
    for (var C = x = null, E = a, T = a = 0, R = null, N = d.next(); E !== null && !N.done; T++, N = d.next()) {
      E.index > T ? (R = E, E = null) : R = E.sibling;
      var Q = p(c, E, N.value, v);
      if (Q === null) {
        E === null && (E = R);
        break;
      }
      e && E && Q.alternate === null && t(c, E), a = i(Q, a, T), C === null ? x = Q : C.sibling = Q, C = Q, E = R;
    }
    if (N.done) return n(
      c,
      E
    ), $ && jt(c, T), x;
    if (E === null) {
      for (; !N.done; T++, N = d.next()) N = m(c, N.value, v), N !== null && (a = i(N, a, T), C === null ? x = N : C.sibling = N, C = N);
      return $ && jt(c, T), x;
    }
    for (E = r(c, E); !N.done; T++, N = d.next()) N = S(E, c, T, N.value, v), N !== null && (e && N.alternate !== null && E.delete(N.key === null ? T : N.key), a = i(N, a, T), C === null ? x = N : C.sibling = N, C = N);
    return e && E.forEach(function($e) {
      return t(c, $e);
    }), $ && jt(c, T), x;
  }
  function z(c, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === bt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Er:
          e: {
            for (var x = d.key, C = a; C !== null; ) {
              if (C.key === x) {
                if (x = d.type, x === bt) {
                  if (C.tag === 7) {
                    n(c, C.sibling), a = l(C, d.props.children), a.return = c, c = a;
                    break e;
                  }
                } else if (C.elementType === x || typeof x == "object" && x !== null && x.$$typeof === at && Wu(x) === C.type) {
                  n(c, C.sibling), a = l(C, d.props), a.ref = Mn(c, C, d), a.return = c, c = a;
                  break e;
                }
                n(c, C);
                break;
              } else t(c, C);
              C = C.sibling;
            }
            d.type === bt ? (a = Ut(d.props.children, c.mode, v, d.key), a.return = c, c = a) : (v = qr(d.type, d.key, d.props, null, c.mode, v), v.ref = Mn(c, a, d), v.return = c, c = v);
          }
          return o(c);
        case qt:
          e: {
            for (C = d.key; a !== null; ) {
              if (a.key === C) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(c, a.sibling), a = l(a, d.children || []), a.return = c, c = a;
                break e;
              } else {
                n(c, a);
                break;
              }
              else t(c, a);
              a = a.sibling;
            }
            a = hi(d, c.mode, v), a.return = c, c = a;
          }
          return o(c);
        case at:
          return C = d._init, z(c, a, C(d._payload), v);
      }
      if (Un(d)) return y(c, a, d, v);
      if (jn(d)) return w(c, a, d, v);
      Ir(c, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(c, a.sibling), a = l(a, d), a.return = c, c = a) : (n(c, a), a = mi(d, c.mode, v), a.return = c, c = a), o(c)) : n(c, a);
  }
  return z;
}
var Sn = Ia(!0), Ma = Ia(!1), dl = Pt(null), pl = null, sn = null, Io = null;
function Mo() {
  Io = sn = pl = null;
}
function Oo(e) {
  var t = dl.current;
  U(dl), e._currentValue = t;
}
function Ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function hn(e, t) {
  pl = e, Io = sn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (he = !0), e.firstContext = null);
}
function je(e) {
  var t = e._currentValue;
  if (Io !== e) if (e = { context: e, memoizedValue: t, next: null }, sn === null) {
    if (pl === null) throw Error(k(308));
    sn = e, pl.dependencies = { lanes: 0, firstContext: e };
  } else sn = sn.next = e;
  return t;
}
var Lt = null;
function Ao(e) {
  Lt === null ? Lt = [e] : Lt.push(e);
}
function Oa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ao(t)) : (n.next = l.next, l.next = n), t.interleaved = n, nt(e, r);
}
function nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var ct = !1;
function Fo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Aa(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function be(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function kt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, M & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, nt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Ao(r)) : (t.next = l.next, l.next = t), r.interleaved = t, nt(e, n);
}
function Kr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Eo(e, n);
  }
}
function Qu(e, t) {
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
function ml(e, t, n, r) {
  var l = e.updateQueue;
  ct = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u, f = s.next;
    s.next = null, o === null ? i = f : o.next = f, o = s;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== o && (u === null ? h.firstBaseUpdate = f : u.next = f, h.lastBaseUpdate = s));
  }
  if (i !== null) {
    var m = l.baseState;
    o = 0, h = f = s = null, u = i;
    do {
      var p = u.lane, S = u.eventTime;
      if ((r & p) === p) {
        h !== null && (h = h.next = {
          eventTime: S,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var y = e, w = u;
          switch (p = t, S = n, w.tag) {
            case 1:
              if (y = w.payload, typeof y == "function") {
                m = y.call(S, m, p);
                break e;
              }
              m = y;
              break e;
            case 3:
              y.flags = y.flags & -65537 | 128;
            case 0:
              if (y = w.payload, p = typeof y == "function" ? y.call(S, m, p) : y, p == null) break e;
              m = W({}, m, p);
              break e;
            case 2:
              ct = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else S = { eventTime: S, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (f = h = S, s = m) : h = h.next = S, o |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (s = m), l.baseState = s, l.firstBaseUpdate = f, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Wt |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Ku(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
      l.call(r);
    }
  }
}
var kr = {}, Qe = Pt(kr), ar = Pt(kr), cr = Pt(kr);
function It(e) {
  if (e === kr) throw Error(k(174));
  return e;
}
function Uo(e, t) {
  switch (A(cr, t), A(ar, e), A(Qe, kr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Pi(t, e);
  }
  U(Qe), A(Qe, t);
}
function wn() {
  U(Qe), U(ar), U(cr);
}
function Fa(e) {
  It(cr.current);
  var t = It(Qe.current), n = Pi(t, e.type);
  t !== n && (A(ar, e), A(Qe, n));
}
function $o(e) {
  ar.current === e && (U(Qe), U(ar));
}
var H = Pt(0);
function hl(e) {
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
var si = [];
function Bo() {
  for (var e = 0; e < si.length; e++) si[e]._workInProgressVersionPrimary = null;
  si.length = 0;
}
var Yr = lt.ReactCurrentDispatcher, ai = lt.ReactCurrentBatchConfig, Vt = 0, V = null, J = null, b = null, gl = !1, Yn = !1, fr = 0, Od = 0;
function le() {
  throw Error(k(321));
}
function Ho(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ue(e[n], t[n])) return !1;
  return !0;
}
function Vo(e, t, n, r, l, i) {
  if (Vt = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Yr.current = e === null || e.memoizedState === null ? $d : Bd, e = n(r, l), Yn) {
    i = 0;
    do {
      if (Yn = !1, fr = 0, 25 <= i) throw Error(k(301));
      i += 1, b = J = null, t.updateQueue = null, Yr.current = Hd, e = n(r, l);
    } while (Yn);
  }
  if (Yr.current = vl, t = J !== null && J.next !== null, Vt = 0, b = J = V = null, gl = !1, t) throw Error(k(300));
  return e;
}
function Wo() {
  var e = fr !== 0;
  return fr = 0, e;
}
function He() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return b === null ? V.memoizedState = b = e : b = b.next = e, b;
}
function ze() {
  if (J === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = J.next;
  var t = b === null ? V.memoizedState : b.next;
  if (t !== null) b = t, J = e;
  else {
    if (e === null) throw Error(k(310));
    J = e, e = { memoizedState: J.memoizedState, baseState: J.baseState, baseQueue: J.baseQueue, queue: J.queue, next: null }, b === null ? V.memoizedState = b = e : b = b.next = e;
  }
  return b;
}
function dr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ci(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = J, l = r.baseQueue, i = n.pending;
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
      var h = f.lane;
      if ((Vt & h) === h) s !== null && (s = s.next = { lane: 0, action: f.action, hasEagerState: f.hasEagerState, eagerState: f.eagerState, next: null }), r = f.hasEagerState ? f.eagerState : e(r, f.action);
      else {
        var m = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null
        };
        s === null ? (u = s = m, o = r) : s = s.next = m, V.lanes |= h, Wt |= h;
      }
      f = f.next;
    } while (f !== null && f !== i);
    s === null ? o = r : s.next = u, Ue(r, t.memoizedState) || (he = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, V.lanes |= i, Wt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function fi(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Ue(i, t.memoizedState) || (he = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Ua() {
}
function $a(e, t) {
  var n = V, r = ze(), l = t(), i = !Ue(r.memoizedState, l);
  if (i && (r.memoizedState = l, he = !0), r = r.queue, Qo(Va.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || b !== null && b.memoizedState.tag & 1) {
    if (n.flags |= 2048, pr(9, Ha.bind(null, n, r, l, t), void 0, null), ee === null) throw Error(k(349));
    Vt & 30 || Ba(n, t, l);
  }
  return l;
}
function Ba(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
    return !Ue(e, n);
  } catch {
    return !0;
  }
}
function Qa(e) {
  var t = nt(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Yu(e) {
  var t = He();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: dr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Ud.bind(null, V, e), [t.memoizedState, e];
}
function pr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ka() {
  return ze().memoizedState;
}
function Xr(e, t, n, r) {
  var l = He();
  V.flags |= e, l.memoizedState = pr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Il(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (J !== null) {
    var o = J.memoizedState;
    if (i = o.destroy, r !== null && Ho(r, o.deps)) {
      l.memoizedState = pr(t, n, i, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = pr(1 | t, n, i, r);
}
function Xu(e, t) {
  return Xr(8390656, 8, e, t);
}
function Qo(e, t) {
  return Il(2048, 8, e, t);
}
function Ya(e, t) {
  return Il(4, 2, e, t);
}
function Xa(e, t) {
  return Il(4, 4, e, t);
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
  return n = n != null ? n.concat([e]) : null, Il(4, 4, Ga.bind(null, t, e), n);
}
function Ko() {
}
function Ja(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function qa(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ho(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ba(e, t, n) {
  return Vt & 21 ? (Ue(n, t) || (n = la(), V.lanes |= n, Wt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, he = !0), e.memoizedState = n);
}
function Ad(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ai.transition;
  ai.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, ai.transition = r;
  }
}
function ec() {
  return ze().memoizedState;
}
function Fd(e, t, n) {
  var r = wt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, tc(e)) nc(t, n);
  else if (n = Oa(e, t, n, r), n !== null) {
    var l = fe();
    Fe(n, e, r, l), rc(n, t, r);
  }
}
function Ud(e, t, n) {
  var r = wt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tc(e)) nc(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ue(u, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, Ao(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Oa(e, t, l, r), n !== null && (l = fe(), Fe(n, e, r, l), rc(n, t, r));
  }
}
function tc(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function nc(e, t) {
  Yn = gl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function rc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Eo(e, n);
  }
}
var vl = { readContext: je, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, $d = { readContext: je, useCallback: function(e, t) {
  return He().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: je, useEffect: Xu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Xr(
    4194308,
    4,
    Ga.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Xr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Xr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = He();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = He();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Fd.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = He();
  return e = { current: e }, t.memoizedState = e;
}, useState: Yu, useDebugValue: Ko, useDeferredValue: function(e) {
  return He().memoizedState = e;
}, useTransition: function() {
  var e = Yu(!1), t = e[0];
  return e = Ad.bind(null, e[1]), He().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = He();
  if ($) {
    if (n === void 0) throw Error(k(407));
    n = n();
  } else {
    if (n = t(), ee === null) throw Error(k(349));
    Vt & 30 || Ba(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Xu(Va.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, pr(9, Ha.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = He(), t = ee.identifierPrefix;
  if ($) {
    var n = qe, r = Je;
    n = (r & ~(1 << 32 - Ae(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = fr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Od++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Bd = {
  readContext: je,
  useCallback: Ja,
  useContext: je,
  useEffect: Qo,
  useImperativeHandle: Za,
  useInsertionEffect: Ya,
  useLayoutEffect: Xa,
  useMemo: qa,
  useReducer: ci,
  useRef: Ka,
  useState: function() {
    return ci(dr);
  },
  useDebugValue: Ko,
  useDeferredValue: function(e) {
    var t = ze();
    return ba(t, J.memoizedState, e);
  },
  useTransition: function() {
    var e = ci(dr)[0], t = ze().memoizedState;
    return [e, t];
  },
  useMutableSource: Ua,
  useSyncExternalStore: $a,
  useId: ec,
  unstable_isNewReconciler: !1
}, Hd = { readContext: je, useCallback: Ja, useContext: je, useEffect: Qo, useImperativeHandle: Za, useInsertionEffect: Ya, useLayoutEffect: Xa, useMemo: qa, useReducer: fi, useRef: Ka, useState: function() {
  return fi(dr);
}, useDebugValue: Ko, useDeferredValue: function(e) {
  var t = ze();
  return J === null ? t.memoizedState = e : ba(t, J.memoizedState, e);
}, useTransition: function() {
  var e = fi(dr)[0], t = ze().memoizedState;
  return [e, t];
}, useMutableSource: Ua, useSyncExternalStore: $a, useId: ec, unstable_isNewReconciler: !1 };
function Ie(e, t) {
  if (e && e.defaultProps) {
    t = W({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Yi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : W({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ml = { isMounted: function(e) {
  return (e = e._reactInternals) ? Yt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = fe(), l = wt(e), i = be(r, l);
  i.payload = t, n != null && (i.callback = n), t = kt(e, i, l), t !== null && (Fe(t, e, l, r), Kr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = fe(), l = wt(e), i = be(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = kt(e, i, l), t !== null && (Fe(t, e, l, r), Kr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = fe(), r = wt(e), l = be(n, r);
  l.tag = 2, t != null && (l.callback = t), t = kt(e, l, r), t !== null && (Fe(t, e, r, n), Kr(t, e, r));
} };
function Gu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !ir(n, r) || !ir(l, i) : !0;
}
function lc(e, t, n) {
  var r = !1, l = _t, i = t.contextType;
  return typeof i == "object" && i !== null ? i = je(i) : (l = ve(t) ? Bt : se.current, r = t.contextTypes, i = (r = r != null) ? yn(e, l) : _t), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ml, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Zu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ml.enqueueReplaceState(t, t.state, null);
}
function Xi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Fo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = je(i) : (i = ve(t) ? Bt : se.current, l.context = yn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Yi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ml.enqueueReplaceState(l, l.state, null), ml(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function xn(e, t) {
  try {
    var n = "", r = t;
    do
      n += gf(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function di(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Gi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Vd = typeof WeakMap == "function" ? WeakMap : Map;
function ic(e, t, n) {
  n = be(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    kl || (kl = !0, io = r), Gi(e, t);
  }, n;
}
function oc(e, t, n) {
  n = be(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Gi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Gi(e, t), typeof r != "function" && (St === null ? St = /* @__PURE__ */ new Set([this]) : St.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Ju(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Vd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = rp.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = be(-1, 1), t.tag = 2, kt(n, t, 1))), n.lanes |= 1), e);
}
var Wd = lt.ReactCurrentOwner, he = !1;
function ce(e, t, n, r) {
  t.child = e === null ? Ma(t, null, n, r) : Sn(t, e.child, n, r);
}
function es(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return hn(t, l), r = Vo(e, t, n, r, i, l), n = Wo(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, rt(e, t, l)) : ($ && n && zo(t), t.flags |= 1, ce(e, t, r, l), t.child);
}
function ts(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !eu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, uc(e, t, i, r, l)) : (e = qr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : ir, n(o, r) && e.ref === t.ref) return rt(e, t, l);
  }
  return t.flags |= 1, e = xt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function uc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (ir(i, r) && e.ref === t.ref) if (he = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (he = !0);
    else return t.lanes = e.lanes, rt(e, t, l);
  }
  return Zi(e, t, n, r, l);
}
function sc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, A(cn, Se), Se |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, A(cn, Se), Se |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, A(cn, Se), Se |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, A(cn, Se), Se |= r;
  return ce(e, t, l, n), t.child;
}
function ac(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Zi(e, t, n, r, l) {
  var i = ve(n) ? Bt : se.current;
  return i = yn(t, i), hn(t, l), n = Vo(e, t, n, r, i, l), r = Wo(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, rt(e, t, l)) : ($ && r && zo(t), t.flags |= 1, ce(e, t, n, l), t.child);
}
function ns(e, t, n, r, l) {
  if (ve(n)) {
    var i = !0;
    al(t);
  } else i = !1;
  if (hn(t, l), t.stateNode === null) Gr(e, t), lc(t, n, r), Xi(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = je(f) : (f = ve(n) ? Bt : se.current, f = yn(t, f));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== f) && Zu(t, o, r, f), ct = !1;
    var p = t.memoizedState;
    o.state = p, ml(t, r, o, l), s = t.memoizedState, u !== r || p !== s || ge.current || ct ? (typeof h == "function" && (Yi(t, n, h, r), s = t.memoizedState), (u = ct || Gu(t, n, u, r, p, s, f)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = f, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Aa(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : Ie(t.type, u), o.props = f, m = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = je(s) : (s = ve(n) ? Bt : se.current, s = yn(t, s));
    var S = n.getDerivedStateFromProps;
    (h = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || p !== s) && Zu(t, o, r, s), ct = !1, p = t.memoizedState, o.state = p, ml(t, r, o, l);
    var y = t.memoizedState;
    u !== m || p !== y || ge.current || ct ? (typeof S == "function" && (Yi(t, n, S, r), y = t.memoizedState), (f = ct || Gu(t, n, f, r, p, y, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = s, r = f) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ji(e, t, n, r, i, l);
}
function Ji(e, t, n, r, l, i) {
  ac(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Bu(t, n, !1), rt(e, t, i);
  r = t.stateNode, Wd.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = Sn(t, e.child, null, i), t.child = Sn(t, null, u, i)) : ce(e, t, u, i), t.memoizedState = r.state, l && Bu(t, n, !0), t.child;
}
function cc(e) {
  var t = e.stateNode;
  t.pendingContext ? $u(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $u(e, t.context, !1), Uo(e, t.containerInfo);
}
function rs(e, t, n, r, l) {
  return kn(), Lo(l), t.flags |= 256, ce(e, t, n, r), t.child;
}
var qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function bi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fc(e, t, n) {
  var r = t.pendingProps, l = H.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), A(H, l & 1), e === null)
    return Qi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Fl(o, r, 0, null), e = Ut(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = bi(n), t.memoizedState = qi, e) : Yo(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Qd(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = xt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = xt(u, i) : (i = Ut(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? bi(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = qi, r;
  }
  return i = e.child, e = i.sibling, r = xt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Yo(e, t) {
  return t = Fl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Mr(e, t, n, r) {
  return r !== null && Lo(r), Sn(t, e.child, null, n), e = Yo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Qd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = di(Error(k(422))), Mr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Fl({ mode: "visible", children: r.children }, l, 0, null), i = Ut(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && Sn(t, e.child, null, o), t.child.memoizedState = bi(o), t.memoizedState = qi, i);
  if (!(t.mode & 1)) return Mr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(k(419)), r = di(i, r, void 0), Mr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, he || u) {
    if (r = ee, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, nt(e, l), Fe(r, e, l, -1));
    }
    return bo(), r = di(Error(k(421))), Mr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = lp.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, we = yt(l.nextSibling), xe = t, $ = !0, Oe = null, e !== null && (Pe[Ne++] = Je, Pe[Ne++] = qe, Pe[Ne++] = Ht, Je = e.id, qe = e.overflow, Ht = t), t = Yo(t, r.children), t.flags |= 4096, t);
}
function ls(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ki(e.return, t, n);
}
function pi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function dc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ce(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.flags |= 128;
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
  if (A(H, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && hl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), pi(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && hl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      pi(t, !0, n, null, i);
      break;
    case "together":
      pi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Gr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function rt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Wt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = xt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = xt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Kd(e, t, n) {
  switch (t.tag) {
    case 3:
      cc(t), kn();
      break;
    case 5:
      Fa(t);
      break;
    case 1:
      ve(t.type) && al(t);
      break;
    case 4:
      Uo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      A(dl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (A(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? fc(e, t, n) : (A(H, H.current & 1), e = rt(e, t, n), e !== null ? e.sibling : null);
      A(H, H.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return dc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), A(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, sc(e, t, n);
  }
  return rt(e, t, n);
}
var pc, eo, mc, hc;
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
eo = function() {
};
mc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, It(Qe.current);
    var i = null;
    switch (n) {
      case "input":
        l = xi(e, l), r = xi(e, r), i = [];
        break;
      case "select":
        l = W({}, l, { value: void 0 }), r = W({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = Ci(e, l), r = Ci(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ul);
    }
    Ni(n, r);
    var o;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var u = l[f];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (qn.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (qn.hasOwnProperty(f) ? (s != null && f === "onScroll" && F("scroll", e), i || u === s || (i = [])) : (i = i || []).push(f, s));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
hc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function On(e, t) {
  if (!$) switch (e.tailMode) {
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
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Yd(e, t, n) {
  var r = t.pendingProps;
  switch (Ro(t), t.tag) {
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
      return ie(t), null;
    case 1:
      return ve(t.type) && sl(), ie(t), null;
    case 3:
      return r = t.stateNode, wn(), U(ge), U(se), Bo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Lr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Oe !== null && (so(Oe), Oe = null))), eo(e, t), ie(t), null;
    case 5:
      $o(t);
      var l = It(cr.current);
      if (n = t.type, e !== null && t.stateNode != null) mc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ie(t), null;
        }
        if (e = It(Qe.current), Lr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Ve] = t, r[sr] = i, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < Bn.length; l++) F(Bn[l], r);
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
              pu(r, i), F("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, F("invalid", r);
              break;
            case "textarea":
              hu(r, i), F("invalid", r);
          }
          Ni(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Rr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Rr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : qn.hasOwnProperty(o) && u != null && o === "onScroll" && F("scroll", r);
          }
          switch (n) {
            case "input":
              _r(r), mu(r, i, !0);
              break;
            case "textarea":
              _r(r), gu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ul);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Ve] = t, e[sr] = r, pc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Ti(n, r), n) {
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
                for (l = 0; l < Bn.length; l++) F(Bn[l], e);
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
                pu(e, r), l = xi(e, r), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = W({}, r, { value: void 0 }), F("invalid", e);
                break;
              case "textarea":
                hu(e, r), l = Ci(e, r), F("invalid", e);
                break;
              default:
                l = r;
            }
            Ni(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? Ks(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ws(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && bn(e, s) : typeof s == "number" && bn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (qn.hasOwnProperty(i) ? s != null && i === "onScroll" && F("scroll", e) : s != null && vo(e, i, s, o));
            }
            switch (n) {
              case "input":
                _r(e), mu(e, r, !1);
                break;
              case "textarea":
                _r(e), gu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Et(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? fn(e, !!r.multiple, i, !1) : r.defaultValue != null && fn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ul);
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
      return ie(t), null;
    case 6:
      if (e && t.stateNode != null) hc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (n = It(cr.current), It(Qe.current), Lr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Ve] = t, (i = r.nodeValue !== n) && (e = xe, e !== null)) switch (e.tag) {
            case 3:
              Rr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Rr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Ve] = t, t.stateNode = r;
      }
      return ie(t), null;
    case 13:
      if (U(H), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && we !== null && t.mode & 1 && !(t.flags & 128)) La(), kn(), t.flags |= 98560, i = !1;
        else if (i = Lr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(k(317));
            i[Ve] = t;
          } else kn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ie(t), i = !1;
        } else Oe !== null && (so(Oe), Oe = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? q === 0 && (q = 3) : bo())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
    case 4:
      return wn(), eo(e, t), e === null && or(t.stateNode.containerInfo), ie(t), null;
    case 10:
      return Oo(t.type._context), ie(t), null;
    case 17:
      return ve(t.type) && sl(), ie(t), null;
    case 19:
      if (U(H), i = t.memoizedState, i === null) return ie(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) On(i, !1);
      else {
        if (q !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = hl(e), o !== null) {
            for (t.flags |= 128, On(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return A(H, H.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && Y() > En && (t.flags |= 128, r = !0, On(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = hl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), On(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !$) return ie(t), null;
        } else 2 * Y() - i.renderingStartTime > En && n !== 1073741824 && (t.flags |= 128, r = !0, On(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = Y(), t.sibling = null, n = H.current, A(H, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
    case 22:
    case 23:
      return qo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Se & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Xd(e, t) {
  switch (Ro(t), t.tag) {
    case 1:
      return ve(t.type) && sl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return wn(), U(ge), U(se), Bo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return $o(t), null;
    case 13:
      if (U(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        kn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return U(H), null;
    case 4:
      return wn(), null;
    case 10:
      return Oo(t.type._context), null;
    case 22:
    case 23:
      return qo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Or = !1, ue = !1, Gd = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function an(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    K(e, t, r);
  }
  else n.current = null;
}
function to(e, t, n) {
  try {
    n();
  } catch (r) {
    K(e, t, r);
  }
}
var is = !1;
function Zd(e, t) {
  if (Fi = ll, e = Sa(), jo(e)) {
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
        var o = 0, u = -1, s = -1, f = 0, h = 0, m = e, p = null;
        t: for (; ; ) {
          for (var S; m !== n || l !== 0 && m.nodeType !== 3 || (u = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (s = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (S = m.firstChild) !== null; )
            p = m, m = S;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++f === l && (u = o), p === i && ++h === r && (s = o), (S = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = S;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Ui = { focusedElem: e, selectionRange: n }, ll = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
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
            var w = y.memoizedProps, z = y.memoizedState, c = t.stateNode, a = c.getSnapshotBeforeUpdate(t.elementType === t.type ? w : Ie(t.type, w), z);
            c.__reactInternalSnapshotBeforeUpdate = a;
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
          throw Error(k(163));
      }
    } catch (v) {
      K(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return y = is, is = !1, y;
}
function Xn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && to(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Ol(e, t) {
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
function no(e) {
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
  t !== null && (e.alternate = null, gc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Ve], delete t[sr], delete t[Hi], delete t[Rd], delete t[Ld])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function vc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function os(e) {
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
function ro(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ul));
  else if (r !== 4 && (e = e.child, e !== null)) for (ro(e, t, n), e = e.sibling; e !== null; ) ro(e, t, n), e = e.sibling;
}
function lo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (lo(e, t, n), e = e.sibling; e !== null; ) lo(e, t, n), e = e.sibling;
}
var te = null, Me = !1;
function ot(e, t, n) {
  for (n = n.child; n !== null; ) yc(e, t, n), n = n.sibling;
}
function yc(e, t, n) {
  if (We && typeof We.onCommitFiberUnmount == "function") try {
    We.onCommitFiberUnmount(Tl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ue || an(n, t);
    case 6:
      var r = te, l = Me;
      te = null, ot(e, t, n), te = r, Me = l, te !== null && (Me ? (e = te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null && (Me ? (e = te, n = n.stateNode, e.nodeType === 8 ? ii(e.parentNode, n) : e.nodeType === 1 && ii(e, n), rr(e)) : ii(te, n.stateNode));
      break;
    case 4:
      r = te, l = Me, te = n.stateNode.containerInfo, Me = !0, ot(e, t, n), te = r, Me = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && to(n, t, o), l = l.next;
        } while (l !== r);
      }
      ot(e, t, n);
      break;
    case 1:
      if (!ue && (an(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        K(n, t, u);
      }
      ot(e, t, n);
      break;
    case 21:
      ot(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null, ot(e, t, n), ue = r) : ot(e, t, n);
      break;
    default:
      ot(e, t, n);
  }
}
function us(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Gd()), t.forEach(function(r) {
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
      var i = e, o = t, u = o;
      e: for (; u !== null; ) {
        switch (u.tag) {
          case 5:
            te = u.stateNode, Me = !1;
            break e;
          case 3:
            te = u.stateNode.containerInfo, Me = !0;
            break e;
          case 4:
            te = u.stateNode.containerInfo, Me = !0;
            break e;
        }
        u = u.return;
      }
      if (te === null) throw Error(k(160));
      yc(i, o, l), te = null, Me = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (f) {
      K(l, t, f);
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
          Xn(3, e, e.return), Ol(3, e);
        } catch (w) {
          K(e, e.return, w);
        }
        try {
          Xn(5, e, e.return);
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 1:
      Le(t, e), Be(e), r & 512 && n !== null && an(n, n.return);
      break;
    case 5:
      if (Le(t, e), Be(e), r & 512 && n !== null && an(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          bn(l, "");
        } catch (w) {
          K(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Bs(l, i), Ti(u, o);
          var f = Ti(u, i);
          for (o = 0; o < s.length; o += 2) {
            var h = s[o], m = s[o + 1];
            h === "style" ? Ks(l, m) : h === "dangerouslySetInnerHTML" ? Ws(l, m) : h === "children" ? bn(l, m) : vo(l, h, m, f);
          }
          switch (u) {
            case "input":
              Ei(l, i);
              break;
            case "textarea":
              Hs(l, i);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var S = i.value;
              S != null ? fn(l, !!i.multiple, S, !1) : p !== !!i.multiple && (i.defaultValue != null ? fn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : fn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[sr] = i;
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Le(t, e), Be(e), r & 4) {
        if (e.stateNode === null) throw Error(k(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (w) {
          K(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Le(t, e), Be(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        rr(t.containerInfo);
      } catch (w) {
        K(e, e.return, w);
      }
      break;
    case 4:
      Le(t, e), Be(e);
      break;
    case 13:
      Le(t, e), Be(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Zo = Y())), r & 4 && us(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (f = ue) || h, Le(t, e), ue = f) : Le(t, e), Be(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !h && e.mode & 1) for (P = e, h = e.child; h !== null; ) {
          for (m = P = h; P !== null; ) {
            switch (p = P, S = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Xn(4, p, p.return);
                break;
              case 1:
                an(p, p.return);
                var y = p.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (w) {
                    K(r, n, w);
                  }
                }
                break;
              case 5:
                an(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  as(m);
                  continue;
                }
            }
            S !== null ? (S.return = p, P = S) : as(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, f ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, s = m.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Qs("display", o));
              } catch (w) {
                K(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = f ? "" : m.memoizedProps;
            } catch (w) {
              K(e, e.return, w);
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
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (bn(l, ""), r.flags &= -33);
          var i = os(e);
          lo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = os(e);
          ro(e, u, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      K(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Jd(e, t, n) {
  P = e, Sc(e);
}
function Sc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; P !== null; ) {
    var l = P, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Or;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ue;
        u = Or;
        var f = ue;
        if (Or = o, (ue = s) && !f) for (P = l; P !== null; ) o = P, s = o.child, o.tag === 22 && o.memoizedState !== null ? cs(l) : s !== null ? (s.return = o, P = s) : cs(l);
        for (; i !== null; ) P = i, Sc(i), i = i.sibling;
        P = l, Or = u, ue = f;
      }
      ss(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, P = i) : ss(e);
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
            ue || Ol(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ue) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Ie(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Ku(t, i, r);
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
              Ku(t, o, n);
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
                  m !== null && rr(m);
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
            throw Error(k(163));
        }
        ue || t.flags & 512 && no(t);
      } catch (p) {
        K(t, t.return, p);
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
            Ol(4, t);
          } catch (s) {
            K(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              K(t, l, s);
            }
          }
          var i = t.return;
          try {
            no(t);
          } catch (s) {
            K(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            no(t);
          } catch (s) {
            K(t, o, s);
          }
      }
    } catch (s) {
      K(t, t.return, s);
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
var qd = Math.ceil, yl = lt.ReactCurrentDispatcher, Xo = lt.ReactCurrentOwner, De = lt.ReactCurrentBatchConfig, M = 0, ee = null, Z = null, ne = 0, Se = 0, cn = Pt(0), q = 0, mr = null, Wt = 0, Al = 0, Go = 0, Gn = null, me = null, Zo = 0, En = 1 / 0, Ge = null, kl = !1, io = null, St = null, Ar = !1, mt = null, Sl = 0, Zn = 0, oo = null, Zr = -1, Jr = 0;
function fe() {
  return M & 6 ? Y() : Zr !== -1 ? Zr : Zr = Y();
}
function wt(e) {
  return e.mode & 1 ? M & 2 && ne !== 0 ? ne & -ne : Md.transition !== null ? (Jr === 0 && (Jr = la()), Jr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : fa(e.type)), e) : 1;
}
function Fe(e, t, n, r) {
  if (50 < Zn) throw Zn = 0, oo = null, Error(k(185));
  gr(e, n, r), (!(M & 2) || e !== ee) && (e === ee && (!(M & 2) && (Al |= n), q === 4 && dt(e, ne)), ye(e, r), n === 1 && M === 0 && !(t.mode & 1) && (En = Y() + 500, Ll && Nt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Mf(e, t);
  var r = rl(e, e === ee ? ne : 0);
  if (r === 0) n !== null && ku(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && ku(n), t === 1) e.tag === 0 ? Id(fs.bind(null, e)) : ja(fs.bind(null, e)), jd(function() {
      !(M & 6) && Nt();
    }), n = null;
    else {
      switch (ia(r)) {
        case 1:
          n = xo;
          break;
        case 4:
          n = na;
          break;
        case 16:
          n = nl;
          break;
        case 536870912:
          n = ra;
          break;
        default:
          n = nl;
      }
      n = Tc(n, wc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function wc(e, t) {
  if (Zr = -1, Jr = 0, M & 6) throw Error(k(327));
  var n = e.callbackNode;
  if (gn() && e.callbackNode !== n) return null;
  var r = rl(e, e === ee ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Ec();
    (ee !== e || ne !== t) && (Ge = null, En = Y() + 500, Ft(e, t));
    do
      try {
        tp();
        break;
      } catch (u) {
        xc(e, u);
      }
    while (!0);
    Mo(), yl.current = i, M = l, Z !== null ? t = 0 : (ee = null, ne = 0, t = q);
  }
  if (t !== 0) {
    if (t === 2 && (l = Li(e), l !== 0 && (r = l, t = uo(e, l))), t === 1) throw n = mr, Ft(e, 0), dt(e, r), ye(e, Y()), n;
    if (t === 6) dt(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !bd(l) && (t = wl(e, r), t === 2 && (i = Li(e), i !== 0 && (r = i, t = uo(e, i))), t === 1)) throw n = mr, Ft(e, 0), dt(e, r), ye(e, Y()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          zt(e, me, Ge);
          break;
        case 3:
          if (dt(e, r), (r & 130023424) === r && (t = Zo + 500 - Y(), 10 < t)) {
            if (rl(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              fe(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Bi(zt.bind(null, e, me, Ge), t);
            break;
          }
          zt(e, me, Ge);
          break;
        case 4:
          if (dt(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Ae(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = Y() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * qd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Bi(zt.bind(null, e, me, Ge), r);
            break;
          }
          zt(e, me, Ge);
          break;
        case 5:
          zt(e, me, Ge);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ye(e, Y()), e.callbackNode === n ? wc.bind(null, e) : null;
}
function uo(e, t) {
  var n = Gn;
  return e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256), e = wl(e, t), e !== 2 && (t = me, me = n, t !== null && so(t)), e;
}
function so(e) {
  me === null ? me = e : me.push.apply(me, e);
}
function bd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Ue(i(), l)) return !1;
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
  for (t &= ~Go, t &= ~Al, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Ae(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function fs(e) {
  if (M & 6) throw Error(k(327));
  gn();
  var t = rl(e, 0);
  if (!(t & 1)) return ye(e, Y()), null;
  var n = wl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Li(e);
    r !== 0 && (t = r, n = uo(e, r));
  }
  if (n === 1) throw n = mr, Ft(e, 0), dt(e, t), ye(e, Y()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, zt(e, me, Ge), ye(e, Y()), null;
}
function Jo(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    M = n, M === 0 && (En = Y() + 500, Ll && Nt());
  }
}
function Qt(e) {
  mt !== null && mt.tag === 0 && !(M & 6) && gn();
  var t = M;
  M |= 1;
  var n = De.transition, r = O;
  try {
    if (De.transition = null, O = 1, e) return e();
  } finally {
    O = r, De.transition = n, M = t, !(M & 6) && Nt();
  }
}
function qo() {
  Se = cn.current, U(cn);
}
function Ft(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Dd(n)), Z !== null) for (n = Z.return; n !== null; ) {
    var r = n;
    switch (Ro(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && sl();
        break;
      case 3:
        wn(), U(ge), U(se), Bo();
        break;
      case 5:
        $o(r);
        break;
      case 4:
        wn();
        break;
      case 13:
        U(H);
        break;
      case 19:
        U(H);
        break;
      case 10:
        Oo(r.type._context);
        break;
      case 22:
      case 23:
        qo();
    }
    n = n.return;
  }
  if (ee = e, Z = e = xt(e.current, null), ne = Se = t, q = 0, mr = null, Go = Al = Wt = 0, me = Gn = null, Lt !== null) {
    for (t = 0; t < Lt.length; t++) if (n = Lt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    Lt = null;
  }
  return e;
}
function xc(e, t) {
  do {
    var n = Z;
    try {
      if (Mo(), Yr.current = vl, gl) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        gl = !1;
      }
      if (Vt = 0, b = J = V = null, Yn = !1, fr = 0, Xo.current = null, n === null || n.return === null) {
        q = 1, mr = t, Z = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, s = t;
        if (t = ne, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var f = s, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var S = qu(o);
          if (S !== null) {
            S.flags &= -257, bu(S, o, u, i, t), S.mode & 1 && Ju(i, f, t), t = S, s = f;
            var y = t.updateQueue;
            if (y === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), t.updateQueue = w;
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Ju(i, f, t), bo();
              break e;
            }
            s = Error(k(426));
          }
        } else if ($ && u.mode & 1) {
          var z = qu(o);
          if (z !== null) {
            !(z.flags & 65536) && (z.flags |= 256), bu(z, o, u, i, t), Lo(xn(s, u));
            break e;
          }
        }
        i = s = xn(s, u), q !== 4 && (q = 2), Gn === null ? Gn = [i] : Gn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var c = ic(i, s, t);
              Qu(i, c);
              break e;
            case 1:
              u = s;
              var a = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (St === null || !St.has(d)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = oc(i, u, t);
                Qu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Cc(n);
    } catch (x) {
      t = x, Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Ec() {
  var e = yl.current;
  return yl.current = vl, e === null ? vl : e;
}
function bo() {
  (q === 0 || q === 3 || q === 2) && (q = 4), ee === null || !(Wt & 268435455) && !(Al & 268435455) || dt(ee, ne);
}
function wl(e, t) {
  var n = M;
  M |= 2;
  var r = Ec();
  (ee !== e || ne !== t) && (Ge = null, Ft(e, t));
  do
    try {
      ep();
      break;
    } catch (l) {
      xc(e, l);
    }
  while (!0);
  if (Mo(), M = n, yl.current = r, Z !== null) throw Error(k(261));
  return ee = null, ne = 0, q;
}
function ep() {
  for (; Z !== null; ) _c(Z);
}
function tp() {
  for (; Z !== null && !Pf(); ) _c(Z);
}
function _c(e) {
  var t = Nc(e.alternate, e, Se);
  e.memoizedProps = e.pendingProps, t === null ? Cc(e) : Z = t, Xo.current = null;
}
function Cc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Xd(n, t), n !== null) {
        n.flags &= 32767, Z = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        q = 6, Z = null;
        return;
      }
    } else if (n = Yd(n, t, Se), n !== null) {
      Z = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  q === 0 && (q = 5);
}
function zt(e, t, n) {
  var r = O, l = De.transition;
  try {
    De.transition = null, O = 1, np(e, t, n, r);
  } finally {
    De.transition = l, O = r;
  }
  return null;
}
function np(e, t, n, r) {
  do
    gn();
  while (mt !== null);
  if (M & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Of(e, i), e === ee && (Z = ee = null, ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ar || (Ar = !0, Tc(nl, function() {
    return gn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = De.transition, De.transition = null;
    var o = O;
    O = 1;
    var u = M;
    M |= 4, Xo.current = null, Zd(e, n), kc(n, e), xd(Ui), ll = !!Fi, Ui = Fi = null, e.current = n, Jd(n), Nf(), M = u, O = o, De.transition = i;
  } else e.current = n;
  if (Ar && (Ar = !1, mt = e, Sl = l), i = e.pendingLanes, i === 0 && (St = null), jf(n.stateNode), ye(e, Y()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (kl) throw kl = !1, e = io, io = null, e;
  return Sl & 1 && e.tag !== 0 && gn(), i = e.pendingLanes, i & 1 ? e === oo ? Zn++ : (Zn = 0, oo = e) : Zn = 0, Nt(), null;
}
function gn() {
  if (mt !== null) {
    var e = ia(Sl), t = De.transition, n = O;
    try {
      if (De.transition = null, O = 16 > e ? 16 : e, mt === null) var r = !1;
      else {
        if (e = mt, mt = null, Sl = 0, M & 6) throw Error(k(331));
        var l = M;
        for (M |= 4, P = e.current; P !== null; ) {
          var i = P, o = i.child;
          if (P.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var f = u[s];
                for (P = f; P !== null; ) {
                  var h = P;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xn(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, P = m;
                  else for (; P !== null; ) {
                    h = P;
                    var p = h.sibling, S = h.return;
                    if (gc(h), h === f) {
                      P = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = S, P = p;
                      break;
                    }
                    P = S;
                  }
                }
              }
              var y = i.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var z = w.sibling;
                    w.sibling = null, w = z;
                  } while (w !== null);
                }
              }
              P = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, P = o;
          else e: for (; P !== null; ) {
            if (i = P, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Xn(9, i, i.return);
            }
            var c = i.sibling;
            if (c !== null) {
              c.return = i.return, P = c;
              break e;
            }
            P = i.return;
          }
        }
        var a = e.current;
        for (P = a; P !== null; ) {
          o = P;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, P = d;
          else e: for (o = a; P !== null; ) {
            if (u = P, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Ol(9, u);
              }
            } catch (x) {
              K(u, u.return, x);
            }
            if (u === o) {
              P = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, P = v;
              break e;
            }
            P = u.return;
          }
        }
        if (M = l, Nt(), We && typeof We.onPostCommitFiberRoot == "function") try {
          We.onPostCommitFiberRoot(Tl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      O = n, De.transition = t;
    }
  }
  return !1;
}
function ds(e, t, n) {
  t = xn(n, t), t = ic(e, t, 1), e = kt(e, t, 1), t = fe(), e !== null && (gr(e, 1, t), ye(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) ds(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ds(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (St === null || !St.has(r))) {
        e = xn(n, e), e = oc(t, e, 1), t = kt(t, e, 1), e = fe(), t !== null && (gr(t, 1, e), ye(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function rp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = fe(), e.pingedLanes |= e.suspendedLanes & n, ee === e && (ne & n) === n && (q === 4 || q === 3 && (ne & 130023424) === ne && 500 > Y() - Zo ? Ft(e, 0) : Go |= n), ye(e, t);
}
function Pc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : t = 1);
  var n = fe();
  e = nt(e, t), e !== null && (gr(e, t, n), ye(e, n));
}
function lp(e) {
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
      throw Error(k(314));
  }
  r !== null && r.delete(t), Pc(e, n);
}
var Nc;
Nc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ge.current) he = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return he = !1, Kd(e, t, n);
    he = !!(e.flags & 131072);
  }
  else he = !1, $ && t.flags & 1048576 && za(t, fl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Gr(e, t), e = t.pendingProps;
      var l = yn(t, se.current);
      hn(t, n), l = Vo(null, t, r, e, l, n);
      var i = Wo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ve(r) ? (i = !0, al(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Fo(t), l.updater = Ml, t.stateNode = l, l._reactInternals = t, Xi(t, r, e, n), t = Ji(null, t, r, !0, i, n)) : (t.tag = 0, $ && i && zo(t), ce(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Gr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = up(r), e = Ie(r, e), l) {
          case 0:
            t = Zi(null, t, r, e, n);
            break e;
          case 1:
            t = ns(null, t, r, e, n);
            break e;
          case 11:
            t = es(null, t, r, e, n);
            break e;
          case 14:
            t = ts(null, t, r, Ie(r.type, e), n);
            break e;
        }
        throw Error(k(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Zi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), ns(e, t, r, l, n);
    case 3:
      e: {
        if (cc(t), e === null) throw Error(k(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Aa(e, t), ml(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = xn(Error(k(423)), t), t = rs(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = xn(Error(k(424)), t), t = rs(e, t, r, n, l);
          break e;
        } else for (we = yt(t.stateNode.containerInfo.firstChild), xe = t, $ = !0, Oe = null, n = Ma(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (kn(), r === l) {
            t = rt(e, t, n);
            break e;
          }
          ce(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Fa(t), e === null && Qi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, $i(r, l) ? o = null : i !== null && $i(r, i) && (t.flags |= 32), ac(e, t), ce(e, t, o, n), t.child;
    case 6:
      return e === null && Qi(t), null;
    case 13:
      return fc(e, t, n);
    case 4:
      return Uo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Sn(t, null, r, n) : ce(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), es(e, t, r, l, n);
    case 7:
      return ce(e, t, t.pendingProps, n), t.child;
    case 8:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ce(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, A(dl, r._currentValue), r._currentValue = o, i !== null) if (Ue(i.value, o)) {
          if (i.children === l.children && !ge.current) {
            t = rt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var s = u.firstContext; s !== null; ) {
              if (s.context === r) {
                if (i.tag === 1) {
                  s = be(-1, n & -n), s.tag = 2;
                  var f = i.updateQueue;
                  if (f !== null) {
                    f = f.shared;
                    var h = f.pending;
                    h === null ? s.next = s : (s.next = h.next, h.next = s), f.pending = s;
                  }
                }
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Ki(
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
            if (o = i.return, o === null) throw Error(k(341));
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Ki(o, n, t), o = i.sibling;
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
        ce(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, hn(t, n), l = je(l), r = r(l), t.flags |= 1, ce(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Ie(r, t.pendingProps), l = Ie(r.type, l), ts(e, t, r, l, n);
    case 15:
      return uc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ie(r, l), Gr(e, t), t.tag = 1, ve(r) ? (e = !0, al(t)) : e = !1, hn(t, n), lc(t, r, l), Xi(t, r, l, n), Ji(null, t, r, !0, e, n);
    case 19:
      return dc(e, t, n);
    case 22:
      return sc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Tc(e, t) {
  return ta(e, t);
}
function op(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Te(e, t, n, r) {
  return new op(e, t, n, r);
}
function eu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function up(e) {
  if (typeof e == "function") return eu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ko) return 11;
    if (e === So) return 14;
  }
  return 2;
}
function xt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Te(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function qr(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") eu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case bt:
      return Ut(n.children, l, i, t);
    case yo:
      o = 8, l |= 8;
      break;
    case yi:
      return e = Te(12, n, t, l | 2), e.elementType = yi, e.lanes = i, e;
    case ki:
      return e = Te(13, n, t, l), e.elementType = ki, e.lanes = i, e;
    case Si:
      return e = Te(19, n, t, l), e.elementType = Si, e.lanes = i, e;
    case Fs:
      return Fl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Os:
          o = 10;
          break e;
        case As:
          o = 9;
          break e;
        case ko:
          o = 11;
          break e;
        case So:
          o = 14;
          break e;
        case at:
          o = 16, r = null;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = Te(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ut(e, t, n, r) {
  return e = Te(7, e, r, t), e.lanes = n, e;
}
function Fl(e, t, n, r) {
  return e = Te(22, e, r, t), e.elementType = Fs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function mi(e, t, n) {
  return e = Te(6, e, null, t), e.lanes = n, e;
}
function hi(e, t, n) {
  return t = Te(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function sp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Xl(0), this.expirationTimes = Xl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function tu(e, t, n, r, l, i, o, u, s) {
  return e = new sp(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Te(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Fo(i), e;
}
function ap(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: qt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Dc(e) {
  if (!e) return _t;
  e = e._reactInternals;
  e: {
    if (Yt(e) !== e || e.tag !== 1) throw Error(k(170));
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
    throw Error(k(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ve(n)) return Da(e, n, t);
  }
  return t;
}
function jc(e, t, n, r, l, i, o, u, s) {
  return e = tu(n, r, !0, e, l, i, o, u, s), e.context = Dc(null), n = e.current, r = fe(), l = wt(n), i = be(r, l), i.callback = t ?? null, kt(n, i, l), e.current.lanes = l, gr(e, l, r), ye(e, r), e;
}
function Ul(e, t, n, r) {
  var l = t.current, i = fe(), o = wt(l);
  return n = Dc(n), t.context === null ? t.context = n : t.pendingContext = n, t = be(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = kt(l, t, o), e !== null && (Fe(e, l, o, i), Kr(e, l, o)), o;
}
function xl(e) {
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
function cp() {
  return null;
}
var zc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function ru(e) {
  this._internalRoot = e;
}
$l.prototype.render = ru.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Ul(e, t, null, null);
};
$l.prototype.unmount = ru.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qt(function() {
      Ul(null, e, null, null);
    }), t[tt] = null;
  }
};
function $l(e) {
  this._internalRoot = e;
}
$l.prototype.unstable_scheduleHydration = function(e) {
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
function Bl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ms() {
}
function fp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = xl(o);
        i.call(f);
      };
    }
    var o = jc(t, r, e, 0, null, !1, !1, "", ms);
    return e._reactRootContainer = o, e[tt] = o.current, or(e.nodeType === 8 ? e.parentNode : e), Qt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = xl(s);
      u.call(f);
    };
  }
  var s = tu(e, 0, !1, null, null, !1, !1, "", ms);
  return e._reactRootContainer = s, e[tt] = s.current, or(e.nodeType === 8 ? e.parentNode : e), Qt(function() {
    Ul(t, s, n, r);
  }), s;
}
function Hl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = xl(o);
        u.call(s);
      };
    }
    Ul(t, o, e, l);
  } else o = fp(n, t, e, l, r);
  return xl(o);
}
oa = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $n(t.pendingLanes);
        n !== 0 && (Eo(t, n | 1), ye(t, Y()), !(M & 6) && (En = Y() + 500, Nt()));
      }
      break;
    case 13:
      Qt(function() {
        var r = nt(e, 1);
        if (r !== null) {
          var l = fe();
          Fe(r, e, 1, l);
        }
      }), nu(e, 1);
  }
};
_o = function(e) {
  if (e.tag === 13) {
    var t = nt(e, 134217728);
    if (t !== null) {
      var n = fe();
      Fe(t, e, 134217728, n);
    }
    nu(e, 134217728);
  }
};
ua = function(e) {
  if (e.tag === 13) {
    var t = wt(e), n = nt(e, t);
    if (n !== null) {
      var r = fe();
      Fe(n, e, t, r);
    }
    nu(e, t);
  }
};
sa = function() {
  return O;
};
aa = function(e, t) {
  var n = O;
  try {
    return O = e, t();
  } finally {
    O = n;
  }
};
ji = function(e, t, n) {
  switch (t) {
    case "input":
      if (Ei(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Rl(r);
            if (!l) throw Error(k(90));
            $s(r), Ei(r, l);
          }
        }
      }
      break;
    case "textarea":
      Hs(e, n);
      break;
    case "select":
      t = n.value, t != null && fn(e, !!n.multiple, t, !1);
  }
};
Gs = Jo;
Zs = Qt;
var dp = { usingClientEntryPoint: !1, Events: [yr, rn, Rl, Ys, Xs, Jo] }, An = { findFiberByHostInstance: Rt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, pp = { bundleType: An.bundleType, version: An.version, rendererPackageName: An.rendererPackageName, rendererConfig: An.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = bs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: An.findFiberByHostInstance || cp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Fr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Fr.isDisabled && Fr.supportsFiber) try {
    Tl = Fr.inject(pp), We = Fr;
  } catch {
  }
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = dp;
_e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!lu(t)) throw Error(k(200));
  return ap(e, t, null, n);
};
_e.createRoot = function(e, t) {
  if (!lu(e)) throw Error(k(299));
  var n = !1, r = "", l = zc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = tu(e, 1, !1, null, null, n, !1, r, l), e[tt] = t.current, or(e.nodeType === 8 ? e.parentNode : e), new ru(t);
};
_e.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = bs(t), e = e === null ? null : e.stateNode, e;
};
_e.flushSync = function(e) {
  return Qt(e);
};
_e.hydrate = function(e, t, n) {
  if (!Bl(t)) throw Error(k(200));
  return Hl(null, e, t, !0, n);
};
_e.hydrateRoot = function(e, t, n) {
  if (!lu(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = zc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = jc(t, null, e, 1, n ?? null, l, !1, i, o), e[tt] = t.current, or(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new $l(t);
};
_e.render = function(e, t, n) {
  if (!Bl(t)) throw Error(k(200));
  return Hl(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function(e) {
  if (!Bl(e)) throw Error(k(40));
  return e._reactRootContainer ? (Qt(function() {
    Hl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[tt] = null;
    });
  }), !0) : !1;
};
_e.unstable_batchedUpdates = Jo;
_e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Bl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Hl(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function Rc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc);
    } catch (e) {
      console.error(e);
    }
}
Rc(), Rs.exports = _e;
var mp = Rs.exports, hs = mp;
Jn.createRoot = hs.createRoot, Jn.hydrateRoot = hs.hydrateRoot;
const Lc = (e) => Math.max(0, Math.ceil(e)), Ic = (e, t) => Lc(e * t), ao = (e, t = 1) => Lc(e - t), Ur = (e) => Ic(e, 2 / 3), hp = (e) => Ic(e, 1 / 2), Xe = (e, t) => {
  e.getStatusStack(t) > 0 && e.setStatusStack(t, 0);
}, $r = (e, t) => {
  const n = e.getStatusStack(t);
  n > 0 && e.setStatusStack(t, ao(n));
}, ke = [
  {
    id: "DarkFire",
    name: "黒炎",
    attribute: { stack: "stackDarkFire" },
    onTurnStart: (e, t) => {
      e.getStatusStack(t) > 0 && e.setStatusStack(t, 0);
    },
    onTurnEnd: (e, t) => {
      const n = e.getStatusStack(t), r = e.getStatusStack("Burned");
      n > 0 && r > 0 && (e.applyHpDamage(n * r), e.setStatusStack(t, 0));
    }
  },
  {
    id: "Burned",
    name: "やけど",
    attribute: { stack: "stackBurned", pending: "stackBurnednext" },
    hasPending: !0,
    onTurnEnd: (e, t) => {
      const n = e.getStatusStack(t);
      n <= 0 || (e.applyHpDamage(n), e.setStatusStack(t, Ur(n)));
    }
  },
  {
    id: "Poison",
    name: "毒",
    attribute: { stack: "stackPoison", pending: "stackPoisonnext" },
    hasPending: !0,
    onTurnEnd: (e, t) => {
      const n = e.getStatusStack(t);
      n <= 0 || (e.applyHpDamage(n), e.setStatusStack(t, hp(n)));
    }
  },
  {
    id: "Tremor",
    name: "振動",
    attribute: { stack: "stacktremor", pending: "stacktremornext" },
    hasPending: !0,
    onTurnEnd: (e, t) => {
      const n = e.getStatusStack(t);
      n <= 0 || (e.applyHpDamage(n), e.setStatusStack(t, Ur(n)));
    }
  },
  {
    id: "Bleeding",
    name: "出血",
    attribute: { stack: "stackBleeding", pending: "stackBleedingnext" },
    hasPending: !0,
    onTurnEnd: (e, t) => {
      const n = e.getStatusStack(t);
      n <= 0 || e.setStatusStack(t, Ur(n));
    },
    onMatchDamage: (e, t) => {
      const n = e.getStatusStack(t);
      n <= 0 || (e.applyHpDamage(n), e.setStatusStack(t, Ur(n)));
    }
  },
  {
    id: "Poise",
    name: "呼吸",
    attribute: { stack: "stackpoise", pending: "stackpoisenext" },
    hasPending: !0,
    onTurnEnd: $r
  },
  {
    id: "Sword",
    name: "剣気",
    attribute: { stack: "stackSword" }
  },
  {
    id: "Regen",
    name: "再生",
    attribute: { stack: "stackregen", pending: "stackregennext" },
    hasPending: !0,
    onTurnStart: (e, t) => {
      const n = e.getStatusStack(t);
      if (n <= 0) return;
      const r = e.maxHp * 0.05 * n;
      r > 0 && e.healHp(r);
    },
    onTurnEnd: $r
  },
  {
    id: "Bind",
    name: "束縛",
    attribute: { stack: "stackbind", pending: "stackbindnext" },
    hasPending: !0,
    onTurnEnd: Xe
  },
  {
    id: "Paralysis",
    name: "麻痺",
    attribute: { stack: "stackParalysis", pending: "stackParalysisnext" },
    hasPending: !0,
    onTurnEnd: Xe
  },
  {
    id: "Fear",
    name: "恐怖",
    attribute: { stack: "stackFear", pending: "stackFearnext" },
    hasPending: !0,
    onTurnEnd: Xe
  },
  {
    id: "DamageUp",
    name: "ダメージ上昇",
    attribute: { stack: "stackDamageUp", pending: "stackDamageUpnext" },
    hasPending: !0,
    onTurnEnd: Xe
  },
  {
    id: "DamageDown",
    name: "ダメージ減少",
    attribute: { stack: "stackDamageDown", pending: "stackDamageDownnext" },
    hasPending: !0,
    onTurnEnd: Xe
  },
  {
    id: "PowerUp",
    name: "威力上昇",
    attribute: { stack: "stackPowerUp", pending: "stackPowerUpnext" },
    hasPending: !0,
    onTurnEnd: Xe
  },
  {
    id: "PowerDown",
    name: "威力減少",
    attribute: { stack: "stackPowerDown", pending: "stackPowerDownnext" },
    hasPending: !0,
    onTurnEnd: Xe
  },
  {
    id: "Protection",
    name: "保護",
    attribute: { stack: "stackProtection", pending: "stackProtectionnext" },
    hasPending: !0,
    onTurnStart: (e, t) => {
      if (!e.flags.checkHitan) return;
      e.getStatusStack(t) <= 1 && e.setStatusStack(t, 1);
    },
    onTurnEnd: Xe
  },
  {
    id: "Vulnerable",
    name: "脆弱",
    attribute: { stack: "stackVulnerable", pending: "stackVulnerablenext" },
    hasPending: !0,
    onTurnEnd: Xe
  },
  {
    id: "Sink",
    name: "沈潜",
    attribute: { stack: "stacksink", pending: "stacksinknext" },
    hasPending: !0,
    onTurnEnd: (e, t) => {
      const n = e.getStatusStack(t);
      if (e.flags.checkNk) {
        e.addStatusStack(t, 2);
        return;
      }
      n > 0 && e.setStatusStack(t, ao(n));
    }
  },
  {
    id: "FEOAwaken",
    name: "覚醒",
    attribute: { stack: "stackFEOAwaken", pending: "stackFEOAwakenNext" },
    hasPending: !0,
    onTurnEnd: $r
  },
  {
    id: "Witch1",
    name: "呪詛",
    attribute: { stack: "stackwitch1" },
    onTurnStart: (e, t) => {
      const n = e.getStatusStack(t);
      if (n <= 0) return;
      const r = n * e.hp * 0.02;
      r > 0 && e.applyHpDamage(r);
    }
  },
  {
    id: "Frenzy",
    name: "狂乱",
    attribute: { stack: "stackfrenzy" },
    onTurnStart: (e, t) => {
      const n = e.getStatusStack(t);
      n <= 0 || (e.addStatusStack("DamageUp", n), e.addStatusStack("Vulnerable", n));
    }
  },
  {
    id: "Sinsyoku",
    name: "侵食",
    attribute: { stack: "stackSinsyoku" },
    onTurnStart: (e, t) => {
      const n = e.getStatusStack(t);
      n > 0 && e.addStatusStack("DamageUp", n);
    },
    onTurnEnd: (e, t) => {
      const n = e.getStatusStack(t);
      n >= 3 && !e.flags.checkAnri && (e.applyHpDamage(n), e.applyConstitutionDamage(n));
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
    onTurnStart: (e, t) => {
      const n = e.getStatusStack(t);
      n > 0 && (e.addStatusStack("DamageUp", Math.min(n / 10, 5)), e.addStatusStack("Protection", Math.min(n / 10, 5)));
    }
  },
  {
    id: "StackSealBleed",
    name: "呪印【出血】",
    attribute: { stack: "stackSealBleed" },
    hasPending: !0,
    onTakeDamage: (e, t, n) => {
      const r = e.getStatusStack(t);
      if (r <= 0 || !n.criticalHit) return;
      const l = e.getStatusStack("Bleeding");
      l > 0 && e.applyHpDamage(l), e.setStatusStack(t, ao(r));
    },
    onTurnEnd: $r
  },
  {
    id: "checkSora",
    name: "soraチェック",
    attribute: { stack: "checkSora" },
    onTurnEnd: (e, t) => {
      e.getStatusStack(t) > 0 && e.addStatusStack("Smoke", 7);
    }
  }
], gp = ke.map((e) => e.attribute.stack), vp = (e) => {
  var n;
  const t = (n = e.system) == null ? void 0 : n.attributes;
  return t != null && t.hp ? gp.some((r) => r in t) : !1;
}, yp = () => {
  var e;
  return (((e = canvas == null ? void 0 : canvas.tokens) == null ? void 0 : e.placeables) ?? []).filter((t) => {
    var n;
    return !!((n = t.actor) != null && n.id) && vp(t.actor);
  }).map((t) => {
    var n, r, l;
    return {
      actorId: ((n = t.actor) == null ? void 0 : n.id) ?? "",
      name: t.name ?? ((r = t.actor) == null ? void 0 : r.name) ?? "unknown",
      actorName: ((l = t.actor) == null ? void 0 : l.name) ?? "",
      disposition: t.document.disposition
    };
  }).sort((t, n) => n.disposition - t.disposition);
}, Mc = () => {
  const [e, t] = I.useState([]);
  return I.useEffect(() => {
    t(yp());
  }, []), e;
};
class kp {
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
  getStatusStack(t) {
    return this.statuses.getStack(t);
  }
  getStatusPending(t) {
    return this.statuses.getPending(t);
  }
  setStatusStack(t, n) {
    this.statuses.setStack(t, n);
  }
  setStatusPending(t, n) {
    this.statuses.setPending(t, n);
  }
  addStatusStack(t, n) {
    this.statuses.addStack(t, n);
  }
  addStatusPending(t, n) {
    this.statuses.addPending(t, n);
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
var oe;
class Sp {
  constructor(t) {
    Dn(this, oe, /* @__PURE__ */ new Map());
    t && Object.entries(t).forEach(([n, r]) => {
      r && G(this, oe).set(n, {
        stack: ut(r.stack),
        pending: ut(r.pending)
      });
    });
  }
  getState(t) {
    const n = G(this, oe).get(t);
    return n ? { stack: n.stack, pending: n.pending } : { stack: 0, pending: 0 };
  }
  getStack(t) {
    var n;
    return ((n = G(this, oe).get(t)) == null ? void 0 : n.stack) ?? 0;
  }
  getPending(t) {
    var n;
    return ((n = G(this, oe).get(t)) == null ? void 0 : n.pending) ?? 0;
  }
  setState(t, n) {
    G(this, oe).set(t, {
      stack: ut(n.stack),
      pending: ut(n.pending)
    });
  }
  setStack(t, n) {
    const r = G(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.stack = ut(n), G(this, oe).set(t, r);
  }
  setPending(t, n) {
    const r = G(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.pending = ut(n), G(this, oe).set(t, r);
  }
  addStack(t, n) {
    const r = G(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.stack = ut(r.stack + n), G(this, oe).set(t, r);
  }
  addPending(t, n) {
    const r = G(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.pending = ut(r.pending + n), G(this, oe).set(t, r);
  }
}
oe = new WeakMap();
const ae = (e, t, n = 0) => {
  var i, o, u;
  const r = (u = (o = (i = e.system) == null ? void 0 : i.attributes) == null ? void 0 : o[t]) == null ? void 0 : u.value;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  if (typeof r == "boolean") return r ? 1 : 0;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, wp = (e, t, n = 0) => {
  var i, o, u;
  const r = (u = (o = (i = e.system) == null ? void 0 : i.attributes) == null ? void 0 : o[t]) == null ? void 0 : u.max;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, xp = (e) => {
  const t = new Sp();
  return ke.forEach((r) => {
    const l = r.attribute, i = ae(e, l.stack, 0), o = l.pending ? ae(e, l.pending, 0) : 0;
    t.setState(r.id, { stack: i, pending: o });
  }), new kp({
    id: e.id ?? "",
    name: e.name,
    hp: ae(e, "hp", 0),
    maxHp: wp(e, "hp", 0),
    barrier: ae(e, "barrier", 0),
    constitution: ae(e, "constitution", 0),
    san: ae(e, "san", 0),
    isPlayer: ae(e, "isPlayer", 0) > 0,
    resist: ae(e, "resist", 0),
    resistEnemy: ae(e, "resistEnemy", 0),
    confResist: ae(e, "confResist", 0),
    econfResistEnemy: ae(e, "econfResistEnemy", 0),
    doubleConstitution: ae(e, "doubleconstitution", 0) === 1,
    statuses: t,
    flags: {
      checkNk: ae(e, "checknk", 0) > 0,
      checkAnri: ae(e, "checkAnri", 0) > 0,
      checkHitan: ae(e, "checkhitan", 0) > 0
    }
  });
}, gs = (e) => {
  const t = {
    "system.attributes.hp.value": e.hp,
    "system.attributes.barrier.value": e.barrier,
    "system.attributes.constitution.value": e.constitution,
    "system.attributes.san.value": e.san
  };
  return ke.forEach((r) => {
    const l = r.attribute, i = e.statuses.getState(r.id);
    t[`system.attributes.${l.stack}.value`] = i.stack, l.pending && (t[`system.attributes.${l.pending}.value`] = i.pending);
  }), t;
};
class $t {
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
const Ep = (e, t) => {
  ke.forEach((r) => {
    var l;
    (l = r.onDealDamage) == null || l.call(r, e, r.id, t);
  });
}, _p = (e, t) => {
  ke.forEach((r) => {
    var l;
    (l = r.onTakeDamage) == null || l.call(r, e, r.id, t);
  });
}, Cp = (e, t) => {
  const n = e.statuses.getStack("DamageUp"), r = e.statuses.getStack("DamageDown");
  return n * 10 - r * 10 + (t ? 50 : 0);
}, Oc = (e) => {
  const t = e.statuses.getStack("Poise"), n = e.statuses.getStack("Sword");
  return Math.min(t * 5 + n, 100);
}, Pp = (e, t) => {
  let n = 0, r = !1;
  const l = e.statuses.getStack("Sword"), i = Oc(e);
  return i > 0 && t() * 100 < i && (n += 20 + Math.floor(l / 2), r = !0), { special: n, criticalHit: r };
}, Ac = (e) => {
  const t = e.statuses.getStack("Protection"), n = e.statuses.getStack("Vulnerable");
  return t * 10 - n * 10;
}, Fc = (e) => {
  const t = e.isPlayer ? e.resist : e.resistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Np = (e) => {
  const t = e.isPlayer ? e.confResist : e.econfResistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Tp = (e) => {
  const t = e.statuses.getStack("DamageUp"), n = e.statuses.getStack("DamageDown");
  return t * 10 - n * 10;
}, Dp = (e) => Oc(e), jp = (e) => Ac(e), zp = (e) => Fc(e), Rp = (e, t = {}) => {
  const n = t.random ?? Math.random, r = e.directcheck ?? !1, l = Cp(e.attacker, r) + (e.attackerBonusNormal ?? 0), { special: i, criticalHit: o } = Pp(e.attacker, n), u = i + (e.attackerBonusSpecial ?? 0), s = Ac(e.receiver), f = Fc(e.receiver), h = Np(e.receiver), m = (100 + l - s) / 100, p = (100 + u - f) / 100, S = (100 + u - h) / 100, y = e.baseDamage * Math.max(m, 0) * Math.max(p, 0), w = e.baseDamage * Math.max(m, 0) * Math.max(S, 0);
  return {
    attackerNormalPercentage: l,
    attackerSpecialPercentage: u,
    receiverNormalPercentage: s,
    receiverSpecialPercentage: f,
    receiverSpecialConfPercentage: h,
    normalRatio: m,
    specialRatio: p,
    specialConfRatio: S,
    dealDamage: y,
    dealConfDamage: w,
    criticalHit: o
  };
}, Lp = (e, t = {}) => {
  const n = e.attacker, r = Rp(e, t), l = e.receiver;
  let i = l.hp, o = l.barrier, u = l.constitution, s = l.san, f = l.statuses.getStack("Sink");
  const h = l.doubleConstitution, m = Math.ceil(r.dealDamage), p = Math.ceil(r.dealConfDamage);
  let S = 0, y = 0;
  o > 0 && m > 0 && (S = Math.min(o, m), o -= S);
  const w = Math.max(m - S, 0);
  w > 0 && (i -= w, y = w);
  let z = 0;
  if (p > 0) {
    const x = p * (h ? 2 : 1);
    u = Math.max(u - x, 0), z = x;
  }
  let c = 0;
  const a = l.statuses.getStack("Sink");
  if (a > 0) {
    let x = a;
    const C = Math.min(s, x);
    s -= C, x -= C, c += C, x > 0 && (i -= x, y += x), f = Math.floor(a / 2);
  }
  const d = {
    ...r,
    barrierAbsorbed: S,
    hpDamageApplied: y,
    confDamageApplied: z,
    sanDamageApplied: c,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: s
  };
  l.hp = i, l.setBarrier(o), l.setConstitution(u), l.setSan(s), l.setHp(i), l.statuses.setStack("Sink", f);
  const v = {
    baseDamage: e.baseDamage,
    normalRatio: r.normalRatio,
    specialRatio: r.specialRatio,
    specialConfRatio: r.specialConfRatio,
    dealDamage: r.dealDamage,
    dealConfDamage: r.dealConfDamage,
    hpDamageApplied: y,
    confDamageApplied: z,
    sanDamageApplied: c,
    barrierAbsorbed: S,
    criticalHit: r.criticalHit,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: s
  };
  return Ep(n, v), _p(l, v), { result: d, attacker: n, receiver: l };
}, El = {
  FRIENDLY: 1
}, Ip = (e) => {
  var t, n;
  return ((t = e.find((r) => r.disposition === El.FRIENDLY)) == null ? void 0 : t.actorId) ?? ((n = e[0]) == null ? void 0 : n.actorId) ?? "";
}, Mp = (e, t) => {
  var n, r;
  return ((n = e.find((l) => l.actorId !== t && l.disposition !== El.FRIENDLY)) == null ? void 0 : n.actorId) ?? ((r = e.find((l) => l.actorId !== t)) == null ? void 0 : r.actorId) ?? "";
}, Op = (e) => {
  const [t, n] = I.useState(""), [r, l] = I.useState(""), [i, o] = I.useState(""), [u, s] = I.useState("0"), [f, h] = I.useState("0"), [m, p] = I.useState(!1), [S, y] = I.useState(null), [w, z] = I.useState(!1), [c, a] = I.useState(null), [d, v] = I.useState(null), x = I.useMemo(() => {
    const R = /* @__PURE__ */ new Map();
    return e.forEach((N) => R.set(N.actorId, N)), R;
  }, [e]);
  I.useEffect(() => {
    if (!e.length) {
      t && n(""), r && l("");
      return;
    }
    const R = new Set(e.map(($e) => $e.actorId));
    let N = t;
    (!N || !R.has(N)) && (N = Ip(e));
    let Q = r;
    (!Q || !R.has(Q) || Q === N) && (Q = Mp(e, N)), N !== t && n(N), Q !== r && l(Q);
  }, [e, t, r]), I.useEffect(() => {
    if (!t) {
      a(null);
      return;
    }
    try {
      const N = new $t().loadByActorId(t);
      if (!N) {
        a(null);
        return;
      }
      a(N.combatant);
    } catch {
      a(null);
    }
  }, [t]), I.useEffect(() => {
    if (!r) {
      v(null);
      return;
    }
    try {
      const N = new $t().loadByActorId(r);
      if (!N) {
        v(null);
        return;
      }
      v(N.combatant);
    } catch {
      v(null);
    }
  }, [r]);
  const C = I.useMemo(() => {
    if (!c) return null;
    const R = Number(u) || 0, N = Number(f) || 0;
    return {
      normal: Tp(c) + (m ? 50 : 0) + R,
      special: N,
      criticalChance: Dp(c)
    };
  }, [c, m, u, f]), E = I.useMemo(() => d ? {
    normal: jp(d),
    special: zp(d)
  } : null, [d]);
  return {
    attackerId: t,
    receiverId: r,
    baseDamage: i,
    bonusNormal: u,
    bonusSpecial: f,
    directcheck: m,
    result: S,
    running: w,
    attackerPreview: C,
    receiverPreview: E,
    setAttackerId: n,
    setReceiverId: l,
    setBaseDamage: o,
    setBonusNormal: s,
    setBonusSpecial: h,
    setDirectcheck: p,
    run: async () => {
      var $e, it, Nn, Sr, Xt, Gt;
      const R = Number(i);
      if (!Number.isFinite(R) || R <= 0) {
        ($e = ui.notifications) == null || $e.error("ダメージに正の数値を入力してください");
        return;
      }
      const N = t ? x.get(t) : void 0, Q = r ? x.get(r) : void 0;
      if (!N || !Q) {
        (it = ui.notifications) == null || it.error("攻撃者と防御者を選択してください");
        return;
      }
      if (t === r) {
        (Nn = ui.notifications) == null || Nn.error("攻撃者と防御者は別のキャラクターを選んでください");
        return;
      }
      try {
        z(!0);
        const _ = new $t(), D = _.loadByActorId(t), j = _.loadByActorId(r);
        if (!D || !j) {
          (Sr = ui.notifications) == null || Sr.error("攻撃者または防御者のデータを取得できませんでした");
          return;
        }
        const B = Number(u) || 0, X = Number(f) || 0, { result: Re, attacker: Ke, receiver: Tn } = Lp({
          attacker: D.combatant,
          receiver: j.combatant,
          baseDamage: R,
          directcheck: m,
          attackerBonusNormal: B,
          attackerBonusSpecial: X
        });
        await Promise.all([
          _.saveActor(Ke),
          _.saveActor(Tn)
        ]);
        const Ye = `
${N.name} → ${Q.name}<br/>
${Re.criticalHit ? "クリティカル発生!!<br/>" : ""}
基礎ダメージ: ${R}<br/>
HPダメージ: ${Re.hpDamageApplied} (バリア吸収: ${Re.barrierAbsorbed})<br/>
混乱ダメージ: ${Re.confDamageApplied}<br/>
SANダメージ(沈潜): ${Re.sanDamageApplied}<br/>
`;
        await ChatMessage.create({
          speaker: ChatMessage.getSpeaker({ actor: D.actor }),
          content: Ye
        }), y(Re), (Xt = ui.notifications) == null || Xt.info(
          `${N.name} が ${Q.name} にダメージを適用しました`
        );
      } catch (_) {
        console.error("[ponkotu-system] damage calc failed", _), (Gt = ui.notifications) == null || Gt.error("計算または適用に失敗しました。コンソールを確認してください。");
      } finally {
        z(!1);
      }
    }
  };
}, _l = (e) => e.name, Ap = [
  { value: "random:ally", label: "ランダム（味方）" },
  { value: "random:enemy", label: "ランダム（敵）" },
  { value: "random:all", label: "ランダム（全体）" }
], st = (e) => Number.isFinite(e) ? e.toLocaleString() : "-", Fp = ({ result: e }) => /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__result", children: [
  /* @__PURE__ */ g.jsxs("div", { children: [
    "通常倍率: 攻撃者 ",
    e.attackerNormalPercentage,
    "% / 防御者",
    " ",
    e.receiverNormalPercentage,
    "% → 係数 ",
    e.normalRatio.toFixed(2)
  ] }),
  /* @__PURE__ */ g.jsxs("div", { children: [
    "特殊倍率: 攻撃者 ",
    e.attackerSpecialPercentage,
    "%",
    e.criticalHit ? " (クリティカル)" : "",
    " / 防御者",
    " ",
    e.receiverSpecialPercentage,
    "% → 係数 ",
    e.specialRatio.toFixed(2)
  ] }),
  /* @__PURE__ */ g.jsxs("div", { children: [
    "特殊(耐性限界)倍率: 防御者 ",
    e.receiverSpecialConfPercentage,
    "% → 係数",
    " ",
    e.specialConfRatio.toFixed(2)
  ] }),
  /* @__PURE__ */ g.jsxs("div", { children: [
    "HPダメージ: ",
    st(e.hpDamageApplied),
    " （バリア吸収",
    " ",
    st(e.barrierAbsorbed),
    "）"
  ] }),
  /* @__PURE__ */ g.jsxs("div", { children: [
    "耐性限界ダメージ: ",
    st(e.confDamageApplied)
  ] }),
  /* @__PURE__ */ g.jsxs("div", { children: [
    "SANダメージ(沈潜): ",
    st(e.sanDamageApplied)
  ] }),
  /* @__PURE__ */ g.jsxs("div", { children: [
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
] }), Dt = (e) => e === 0 ? "±0%" : e > 0 ? `+${e}%` : `${e}%`, Up = ({ tokens: e }) => {
  const {
    attackerId: t,
    receiverId: n,
    baseDamage: r,
    bonusNormal: l,
    bonusSpecial: i,
    directcheck: o,
    result: u,
    running: s,
    attackerPreview: f,
    receiverPreview: h,
    setAttackerId: m,
    setReceiverId: p,
    setBaseDamage: S,
    setBonusNormal: y,
    setBonusSpecial: w,
    setDirectcheck: z,
    run: c
  } = Op(e);
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsx("h3", { children: "ダメージ計算" }) }),
    /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
        "攻撃者:",
        /* @__PURE__ */ g.jsxs("select", { value: t, onChange: (a) => m(a.target.value), children: [
          /* @__PURE__ */ g.jsx("option", { value: "", children: "選択してください" }),
          e.map((a) => /* @__PURE__ */ g.jsx("option", { value: a.actorId, children: _l(a) }, a.actorId))
        ] }),
        f !== null && /* @__PURE__ */ g.jsxs("span", { className: "ponkotu-damage__preview", children: [
          "通常 ",
          Dt(f.normal),
          " / 特殊 ",
          Dt(f.special),
          (f.criticalChance ?? 0) >= 1 ? ` / Crit + ${f.criticalChance} %` : ""
        ] })
      ] }) }),
      /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
        "防御者:",
        /* @__PURE__ */ g.jsxs("select", { value: n, onChange: (a) => p(a.target.value), children: [
          /* @__PURE__ */ g.jsx("option", { value: "", children: "選択してください" }),
          e.map((a) => /* @__PURE__ */ g.jsx("option", { value: a.actorId, children: _l(a) }, a.actorId))
        ] }),
        h !== null && /* @__PURE__ */ g.jsxs("span", { className: "ponkotu-damage__preview", children: [
          "通常 ",
          Dt(h.normal),
          " / 特殊 ",
          Dt(h.special)
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label ponkotu-damage__label--inline", children: [
        "通常補正",
        /* @__PURE__ */ g.jsx(
          "input",
          {
            type: "number",
            value: l,
            onChange: (a) => y(a.target.value),
            className: "ponkotu-damage__bonus-input"
          }
        ),
        "%"
      ] }),
      /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label ponkotu-damage__label--inline", children: [
        "特殊補正",
        /* @__PURE__ */ g.jsx(
          "input",
          {
            type: "number",
            value: i,
            onChange: (a) => w(a.target.value),
            className: "ponkotu-damage__bonus-input"
          }
        ),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label ponkotu-damage__label--inline", children: [
      /* @__PURE__ */ g.jsx(
        "input",
        {
          type: "checkbox",
          checked: o,
          onChange: (a) => z(a.target.checked)
        }
      ),
      "直接攻撃"
    ] }) }),
    f !== null && h !== null && /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__row ponkotu-damage__total-preview", children: [
      /* @__PURE__ */ g.jsx("span", { children: "攻撃者 - 防御者 の倍率差" }),
      /* @__PURE__ */ g.jsx("div", {}),
      /* @__PURE__ */ g.jsxs("span", { children: [
        "通常倍率: ",
        Dt(f.normal - h.normal)
      ] }),
      /* @__PURE__ */ g.jsx("span", { children: "  +  " }),
      /* @__PURE__ */ g.jsxs("span", { children: [
        "特殊倍率: ",
        Dt(f.special - h.special)
      ] }),
      /* @__PURE__ */ g.jsx("div", {}),
      /* @__PURE__ */ g.jsx("span", { children: " → " }),
      /* @__PURE__ */ g.jsxs("span", { children: [
        "合計倍率: ",
        Dt(f.normal - h.normal + f.special - h.special)
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
      "基礎ダメージ",
      /* @__PURE__ */ g.jsx(
        "input",
        {
          type: "number",
          value: r,
          onChange: (a) => S(a.target.value),
          placeholder: "例: 12"
        }
      )
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ g.jsx("button", { onClick: c, disabled: s || e.length < 2, children: s ? "計算中..." : "計算して適用" }),
      e.length < 2 && /* @__PURE__ */ g.jsx("span", { className: "ponkotu-damage__hint", children: "※ トークンが2体以上必要です" })
    ] }),
    u && /* @__PURE__ */ g.jsx(Fp, { result: u })
  ] });
};
class vs {
  static turnStart(t) {
    const n = ke;
    n.forEach((r) => {
      if (!r.hasPending) return;
      const l = t.getStatusPending(r.id);
      if (l <= 0) return;
      const i = t.getStatusStack(r.id);
      t.setStatusStack(r.id, i + l), t.setStatusPending(r.id, 0);
    }), n.forEach((r) => {
      var l;
      (l = r.onTurnStart) == null || l.call(r, t, r.id);
    });
  }
  static turnEnd(t) {
    ke.forEach((r) => {
      var l;
      (l = r.onTurnEnd) == null || l.call(r, t, r.id);
    }), t.setBarrier(0);
  }
}
const ys = (e) => Array.from(new Set(e.map((t) => t.actorId).filter((t) => t))), $p = (e) => {
  const [t, n] = I.useState(!1), r = async () => {
    var u, s, f;
    const o = ys(e);
    if (!o.length)
      return (u = ui.notifications) == null || u.error("ターン開始処理の対象が見つかりません"), 0;
    try {
      const h = new $t(), m = o.map((p) => h.loadByActorId(p)).filter((p) => !!p);
      return m.length ? (m.forEach((p) => {
        vs.turnStart(p.combatant);
      }), await Promise.all(m.map((p) => h.saveActor(p.combatant))), m.length) : ((s = ui.notifications) == null || s.error("ターン開始処理の対象を取得できませんでした"), 0);
    } catch (h) {
      console.error("[ponkotu-system] turn process failed", h), (f = ui.notifications) == null || f.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  }, l = async () => {
    var u, s, f;
    const o = ys(e);
    if (!o.length)
      return (u = ui.notifications) == null || u.error("ターン終了処理の対象が見つかりません"), 0;
    try {
      const h = new $t(), m = o.map((p) => h.loadByActorId(p)).filter((p) => !!p);
      return m.length ? (m.forEach((p) => {
        vs.turnEnd(p.combatant);
      }), await Promise.all(m.map((p) => h.saveActor(p.combatant))), m.length) : ((s = ui.notifications) == null || s.error("ターン終了処理の対象を取得できませんでした"), 0);
    } catch (h) {
      console.error("[ponkotu-system] turn end failed", h), (f = ui.notifications) == null || f.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  };
  return { turnRunning: t, runTurnProcess: async () => {
    var o;
    if (!t)
      try {
        n(!0);
        const u = await l();
        game.combat && game.combat.nextRound();
        const s = await r(), f = u > 0 ? u : s;
        f > 0 && ((o = ui.notifications) == null || o.info(`ターン処理を${f}体に適用しました`));
      } finally {
        n(!1);
      }
  } };
}, Bp = ({ tokens: e }) => {
  const { turnRunning: t, runTurnProcess: n } = $p(e);
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsx("h3", { style: { margin: "8px 0" }, children: "ターン処理" }) }),
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsx("button", { onClick: n, disabled: t || e.length < 1, children: t ? "処理中..." : "ターン処理(終了→開始)" }) })
  ] });
}, Hp = () => {
  const e = Mc();
  return /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage", children: [
    /* @__PURE__ */ g.jsx(Up, { tokens: e }),
    /* @__PURE__ */ g.jsx(Bp, { tokens: e })
  ] });
}, Vp = "ponkotu-system";
var Mt;
class Wp extends Application {
  constructor() {
    super(...arguments);
    Dn(this, Mt, null);
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
    Tt(this, Mt, Jn.createRoot(r)), G(this, Mt).render(/* @__PURE__ */ g.jsx(Hp, {}));
  }
  async close(n) {
    var r;
    return (r = G(this, Mt)) == null || r.unmount(), Tt(this, Mt, null), super.close(n);
  }
}
Mt = new WeakMap();
const Qp = ({ onSubmit: e }) => {
  const [t, n] = I.useState(""), [r, l] = I.useState(""), i = I.useMemo(() => t.trim().length === 0, [t]), o = (u) => {
    u.preventDefault();
    const s = { name: t.trim(), note: r.trim() };
    console.log("[ponkotu-system] SimpleForm submit", s), e == null || e(s), l("");
  };
  return /* @__PURE__ */ g.jsxs("form", { onSubmit: o, className: "ponkotu-form", children: [
    /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-form__label", children: [
      "名前",
      /* @__PURE__ */ g.jsx(
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
    /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-form__label", children: [
      "メモ",
      /* @__PURE__ */ g.jsx(
        "textarea",
        {
          className: "ponkotu-form__textarea",
          value: r,
          placeholder: "送信したいメモ",
          onChange: (u) => l(u.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-form__footer", children: /* @__PURE__ */ g.jsx("button", { type: "submit", disabled: i, children: "送信" }) })
  ] });
}, Kp = () => {
  const e = [];
  return ke.forEach((n) => {
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
var Ot;
class Xp extends Application {
  constructor() {
    super(...arguments);
    Dn(this, Ot, null);
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
      const i = Kp();
      if (i.length > 0) {
        ks = !0;
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
    Tt(this, Ot, Jn.createRoot(r)), G(this, Ot).render(
      /* @__PURE__ */ g.jsx(
        Qp,
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
    return (r = G(this, Ot)) == null || r.unmount(), Tt(this, Ot, null), super.close(n);
  }
}
Ot = new WeakMap();
const Gp = (e) => Number.isInteger(e) && e >= 1, Zp = async (e, t) => {
  if (!t.actorId)
    throw new Error("actorId is required");
  if (!Gp(t.stackDelta))
    throw new Error("stackDelta must be a positive integer");
  const n = t.target ?? "stack", r = ke.find((s) => s.id === t.statusId);
  if (!r)
    throw new Error("status definition not found");
  const l = "pending" in r.attribute && !!r.attribute.pending;
  if (n === "pending" && !l)
    throw new Error("selected status does not support pending");
  const i = e.loadByActorId(t.actorId);
  if (!i)
    throw new Error("combatant record not found");
  const o = n === "pending" ? i.combatant.statuses.getPending(t.statusId) : i.combatant.statuses.getStack(t.statusId);
  n === "pending" ? i.combatant.statuses.addPending(t.statusId, t.stackDelta) : i.combatant.statuses.addStack(t.statusId, t.stackDelta), await e.saveActor(i.combatant);
  const u = n === "pending" ? i.combatant.statuses.getPending(t.statusId) : i.combatant.statuses.getStack(t.statusId);
  return {
    actorId: i.actorId,
    actorName: i.combatant.name ?? i.actor.name ?? "unknown",
    statusId: t.statusId,
    target: n,
    before: o,
    after: u
  };
};
let Cl = null;
const Jp = async (e) => {
  const t = new $t();
  return Zp(t, e);
}, qp = (e) => {
  Cl = socketlib.registerModule(e), Cl.register("applyStatusStack", Jp);
}, bp = (e) => {
  if (!Cl)
    throw new Error("socketlib が初期化されていません");
  return Cl.executeAsGM("applyStatusStack", e);
}, em = ke.map((e) => e.id), tm = () => em[0] ?? "Burned", gi = (e) => e === "random:ally" || e === "random:enemy" || e === "random:all", nm = (e, t) => e === "random:all" ? t : e === "random:ally" ? t.filter((n) => n.disposition === El.FRIENDLY) : t.filter((n) => n.disposition !== El.FRIENDLY), rm = (e) => {
  const [t, n] = I.useState(""), [r, l] = I.useState(tm), [i, o] = I.useState("stack"), [u, s] = I.useState("1"), [f, h] = I.useState(!1), m = ke.find(
    (y) => y.id === r
  ), p = !!(m && "pending" in m.attribute && m.attribute.pending);
  return I.useEffect(() => {
    var w;
    if (!e.length) {
      t && !gi(t) && n("");
      return;
    }
    const y = new Set(e.map((z) => z.actorId));
    (!t || !gi(t) && !y.has(t)) && n(((w = e[0]) == null ? void 0 : w.actorId) ?? "");
  }, [e, t]), I.useEffect(() => {
    !p && i === "pending" && o("stack");
  }, [p, i]), {
    statusTargetValue: t,
    statusId: r,
    applyTarget: i,
    canApplyPending: p,
    statusStack: u,
    statusRunning: f,
    setStatusTargetValue: n,
    setStatusId: l,
    setApplyTarget: o,
    setStatusStack: s,
    runApplyStatus: async () => {
      var z, c, a, d, v, x, C;
      if (f) return;
      const y = Number(u);
      if (!Number.isInteger(y) || y < 1) {
        (z = ui.notifications) == null || z.error("スタック数には1以上の整数を入力してください");
        return;
      }
      let w;
      if (gi(t)) {
        const E = nm(t, e);
        if (E.length === 0) {
          (c = ui.notifications) == null || c.error("ランダム対象の候補が0件です。対象を選び直してください。");
          return;
        }
        w = E[Math.floor(Math.random() * E.length)].actorId;
      } else
        w = t;
      if (!w) {
        (a = ui.notifications) == null || a.error("状態異常を付与する対象を選択してください");
        return;
      }
      try {
        h(!0);
        const E = await bp({
          actorId: w,
          statusId: r,
          stackDelta: y,
          target: i
        }), T = ((d = ke.find((N) => N.id === E.statusId)) == null ? void 0 : d.name) ?? E.statusId, R = E.target === "pending" ? "next" : "現在";
        (v = ui.notifications) == null || v.info(
          `${E.actorName} に ${E.statusId}(${R}) を ${y} 付与しました (${E.before}→${E.after})`
        ), await ChatMessage.create({
          speaker: { alias: ((x = game.user) == null ? void 0 : x.name) ?? "不明" },
          content: `${E.actorName} に ${T}（${R}）を ${y} 付与しました（${E.before} → ${E.after}）`
        });
      } catch (E) {
        console.error("[ponkotu-system] apply status failed", E), (C = ui.notifications) == null || C.error("状態異常の付与に失敗しました。コンソールを確認してください。");
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
})).filter((n) => n.stack > 0 || n.pending > 0), im = () => {
  const [e, t] = I.useState(""), [n, r] = I.useState(!1), [l, i] = I.useState([]);
  return {
    libraryTargetValue: e,
    libraryOpen: n,
    libraryEntries: l,
    setLibraryTargetValue: (s) => {
      t(s), r(!1), i([]);
    },
    toggleLibrary: () => {
      if (n) {
        r(!1), i([]);
        return;
      }
      if (!e) return;
      const f = new $t().loadByActorId(e);
      if (!f) return;
      const h = lm(
        f.combatant.statuses,
        ke
      );
      i(h), r(!0);
    }
  };
}, om = ({ tokens: e }) => {
  const {
    statusTargetValue: t,
    statusId: n,
    applyTarget: r,
    canApplyPending: l,
    statusStack: i,
    statusRunning: o,
    setStatusTargetValue: u,
    setStatusId: s,
    setApplyTarget: f,
    setStatusStack: h,
    runApplyStatus: m
  } = rm(e), {
    libraryTargetValue: p,
    libraryOpen: S,
    libraryEntries: y,
    setLibraryTargetValue: w,
    toggleLibrary: z
  } = im();
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsx("h3", { style: { margin: "8px 0" }, children: "状態異常付与" }) }),
    /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
        "対象キャラ",
        /* @__PURE__ */ g.jsxs(
          "select",
          {
            value: t,
            onChange: (c) => u(c.target.value),
            children: [
              /* @__PURE__ */ g.jsx("option", { value: "", children: "選択してください" }),
              e.map((c) => /* @__PURE__ */ g.jsx("option", { value: c.actorId, children: _l(c) }, `status-target-${c.actorId}`)),
              /* @__PURE__ */ g.jsx("optgroup", { label: "ランダム", children: Ap.map((c) => /* @__PURE__ */ g.jsx("option", { value: c.value, children: c.label }, c.value)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
        "状態異常",
        /* @__PURE__ */ g.jsx(
          "select",
          {
            value: n,
            onChange: (c) => s(c.target.value),
            children: ke.map((c) => /* @__PURE__ */ g.jsx("option", { value: c.id, children: c.name }, c.id))
          }
        )
      ] }),
      /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
        "付与先",
        /* @__PURE__ */ g.jsxs(
          "select",
          {
            value: r,
            onChange: (c) => f(c.target.value),
            children: [
              /* @__PURE__ */ g.jsx("option", { value: "stack", children: "現在" }),
              /* @__PURE__ */ g.jsx("option", { value: "pending", disabled: !l, children: "次ターン(next)" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
      "スタック数",
      /* @__PURE__ */ g.jsx(
        "input",
        {
          type: "number",
          min: 1,
          step: 1,
          value: i,
          onChange: (c) => h(c.target.value),
          placeholder: "例: 3"
        }
      )
    ] }),
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsx("button", { onClick: m, disabled: o || e.length < 1, children: o ? "付与中..." : "状態異常を付与" }) }),
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsx("h3", { style: { margin: "8px 0" }, children: "ライブラ！" }) }),
    /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
        "対象キャラ",
        /* @__PURE__ */ g.jsxs(
          "select",
          {
            value: p,
            onChange: (c) => w(c.target.value),
            children: [
              /* @__PURE__ */ g.jsx("option", { value: "", children: "選択してください" }),
              e.map((c) => /* @__PURE__ */ g.jsx("option", { value: c.actorId, children: _l(c) }, `library-target-${c.actorId}`))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ g.jsx("button", { disabled: !p, onClick: z, children: S ? "閉じる" : "表示" })
    ] }),
    S && /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", style: { flexDirection: "column" }, children: y.length === 0 ? /* @__PURE__ */ g.jsx("span", { children: "状態異常なし" }) : /* @__PURE__ */ g.jsxs("table", { style: { fontSize: "0.9em", width: "100%" }, children: [
      /* @__PURE__ */ g.jsx("thead", { children: /* @__PURE__ */ g.jsxs("tr", { children: [
        /* @__PURE__ */ g.jsx("th", { children: "ステータス" }),
        /* @__PURE__ */ g.jsx("th", { children: "スタック" }),
        /* @__PURE__ */ g.jsx("th", { children: "次ターン" })
      ] }) }),
      /* @__PURE__ */ g.jsx("tbody", { children: y.map((c) => /* @__PURE__ */ g.jsxs("tr", { children: [
        /* @__PURE__ */ g.jsx("td", { children: c.name }),
        /* @__PURE__ */ g.jsx("td", { children: c.stack }),
        /* @__PURE__ */ g.jsx("td", { children: c.hasPending ? c.pending : "-" })
      ] }, c.id)) })
    ] }) })
  ] });
}, um = () => {
  const e = Mc();
  return /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage", children: /* @__PURE__ */ g.jsx(om, { tokens: e }) });
}, sm = "ponkotu-system";
var At;
class am extends Application {
  constructor() {
    super(...arguments);
    Dn(this, At, null);
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
    Tt(this, At, Jn.createRoot(r)), G(this, At).render(/* @__PURE__ */ g.jsx(um, {}));
  }
  async close(n) {
    var r;
    return (r = G(this, At)) == null || r.unmount(), Tt(this, At, null), super.close(n);
  }
}
At = new WeakMap();
const Pl = "ponkotu-system", Jt = (...e) => console.log(`[${Pl}]`, ...e), Uc = () => new Xp().render(!0), $c = () => new Wp().render(!0), Bc = () => new am().render(!0), Ss = () => {
  var n;
  const e = (n = game.modules) == null ? void 0 : n.get(Pl);
  if (!e) {
    console.warn(`[${Pl}] game.modules からモジュールを取得できませんでした`);
    return;
  }
  const t = e;
  t.api || (t.api = {}), t.api.showReactForm = Uc, t.api.showDamageCalc = $c, t.api.showStatusApply = Bc, Jt("API を登録しました", t.api);
}, cm = () => {
  Jt("ES module loaded"), Hooks.once("ready", () => {
    Jt("Hooks.once ready fired"), Ss(), globalThis.ponkotuSystem = { showReactForm: Uc, showDamageCalc: $c, showStatusApply: Bc }, Jt("React フォーム API を初期化しました");
  }), Hooks.once("init", () => {
    Jt("Hooks.once init fired"), Ss();
  }), Hooks.once("socketlib.ready", () => {
    Jt("Hooks.once socketlib.ready fired"), qp(Pl);
  });
};
cm();
export {
  $c as showDamageCalc,
  Uc as showReactForm,
  Bc as showStatusApply
};
