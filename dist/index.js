var lu = (e) => {
  throw TypeError(e);
};
var iu = (e, t, n) => t.has(e) || lu("Cannot " + n);
var X = (e, t, n) => (iu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Nn = (e, t, n) => t.has(e) ? lu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Tt = (e, t, n, r) => (iu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var ws = { exports: {} }, Cl = {}, Es = { exports: {} }, R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var pr = Symbol.for("react.element"), Vc = Symbol.for("react.portal"), Wc = Symbol.for("react.fragment"), Qc = Symbol.for("react.strict_mode"), Kc = Symbol.for("react.profiler"), Yc = Symbol.for("react.provider"), Xc = Symbol.for("react.context"), Gc = Symbol.for("react.forward_ref"), Zc = Symbol.for("react.suspense"), Jc = Symbol.for("react.memo"), qc = Symbol.for("react.lazy"), ou = Symbol.iterator;
function bc(e) {
  return e === null || typeof e != "object" ? null : (e = ou && e[ou] || e["@@iterator"], typeof e == "function" ? e : null);
}
var xs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Cs = Object.assign, _s = {};
function xn(e, t, n) {
  this.props = e, this.context = t, this.refs = _s, this.updater = n || xs;
}
xn.prototype.isReactComponent = {};
xn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
xn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ps() {
}
Ps.prototype = xn.prototype;
function ao(e, t, n) {
  this.props = e, this.context = t, this.refs = _s, this.updater = n || xs;
}
var co = ao.prototype = new Ps();
co.constructor = ao;
Cs(co, xn.prototype);
co.isPureReactComponent = !0;
var uu = Array.isArray, Ns = Object.prototype.hasOwnProperty, fo = { current: null }, Ds = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ts(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) Ns.call(t, r) && !Ds.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), f = 0; f < u; f++) s[f] = arguments[f + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: pr, type: e, key: i, ref: o, props: l, _owner: fo.current };
}
function ef(e, t) {
  return { $$typeof: pr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function po(e) {
  return typeof e == "object" && e !== null && e.$$typeof === pr;
}
function tf(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var su = /\/+/g;
function $l(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? tf("" + e.key) : t.toString(36);
}
function Fr(e, t, n, r, l) {
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
        case pr:
        case Vc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + $l(o, 0) : r, uu(l) ? (n = "", e != null && (n = e.replace(su, "$&/") + "/"), Fr(l, t, n, "", function(f) {
    return f;
  })) : l != null && (po(l) && (l = ef(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(su, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", uu(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + $l(i, u);
    o += Fr(i, t, n, s, l);
  }
  else if (s = bc(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + $l(i, u++), o += Fr(i, t, n, s, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function Sr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Fr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
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
var fe = { current: null }, Ur = { transition: null }, rf = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Ur, ReactCurrentOwner: fo };
function Is() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = { map: Sr, forEach: function(e, t, n) {
  Sr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return Sr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return Sr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!po(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
R.Component = xn;
R.Fragment = Wc;
R.Profiler = Kc;
R.PureComponent = ao;
R.StrictMode = Qc;
R.Suspense = Zc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rf;
R.act = Is;
R.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Cs({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = fo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) Ns.call(t, s) && !Ds.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var f = 0; f < s; f++) u[f] = arguments[f + 2];
    r.children = u;
  }
  return { $$typeof: pr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
R.createContext = function(e) {
  return e = { $$typeof: Xc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Yc, _context: e }, e.Consumer = e;
};
R.createElement = Ts;
R.createFactory = function(e) {
  var t = Ts.bind(null, e);
  return t.type = e, t;
};
R.createRef = function() {
  return { current: null };
};
R.forwardRef = function(e) {
  return { $$typeof: Gc, render: e };
};
R.isValidElement = po;
R.lazy = function(e) {
  return { $$typeof: qc, _payload: { _status: -1, _result: e }, _init: nf };
};
R.memo = function(e, t) {
  return { $$typeof: Jc, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function(e) {
  var t = Ur.transition;
  Ur.transition = {};
  try {
    e();
  } finally {
    Ur.transition = t;
  }
};
R.unstable_act = Is;
R.useCallback = function(e, t) {
  return fe.current.useCallback(e, t);
};
R.useContext = function(e) {
  return fe.current.useContext(e);
};
R.useDebugValue = function() {
};
R.useDeferredValue = function(e) {
  return fe.current.useDeferredValue(e);
};
R.useEffect = function(e, t) {
  return fe.current.useEffect(e, t);
};
R.useId = function() {
  return fe.current.useId();
};
R.useImperativeHandle = function(e, t, n) {
  return fe.current.useImperativeHandle(e, t, n);
};
R.useInsertionEffect = function(e, t) {
  return fe.current.useInsertionEffect(e, t);
};
R.useLayoutEffect = function(e, t) {
  return fe.current.useLayoutEffect(e, t);
};
R.useMemo = function(e, t) {
  return fe.current.useMemo(e, t);
};
R.useReducer = function(e, t, n) {
  return fe.current.useReducer(e, t, n);
};
R.useRef = function(e) {
  return fe.current.useRef(e);
};
R.useState = function(e) {
  return fe.current.useState(e);
};
R.useSyncExternalStore = function(e, t, n) {
  return fe.current.useSyncExternalStore(e, t, n);
};
R.useTransition = function() {
  return fe.current.useTransition();
};
R.version = "18.3.1";
Es.exports = R;
var L = Es.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var lf = L, of = Symbol.for("react.element"), uf = Symbol.for("react.fragment"), sf = Object.prototype.hasOwnProperty, af = lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, cf = { key: !0, ref: !0, __self: !0, __source: !0 };
function zs(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) sf.call(t, r) && !cf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: of, type: e, key: i, ref: o, props: l, _owner: af.current };
}
Cl.Fragment = uf;
Cl.jsx = zs;
Cl.jsxs = zs;
ws.exports = Cl;
var v = ws.exports, Gn = {}, Rs = { exports: {} }, Ce = {}, js = { exports: {} }, Ls = {};
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
  function t(_, T) {
    var z = _.length;
    _.push(T);
    e: for (; 0 < z; ) {
      var A = z - 1 >>> 1, Y = _[A];
      if (0 < l(Y, T)) _[A] = T, _[z] = Y, z = A;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var T = _[0], z = _.pop();
    if (z !== T) {
      _[0] = z;
      e: for (var A = 0, Y = _.length, Xt = Y >>> 1; A < Xt; ) {
        var Qe = 2 * (A + 1) - 1, Hl = _[Qe], Dt = Qe + 1, kr = _[Dt];
        if (0 > l(Hl, z)) Dt < Y && 0 > l(kr, Hl) ? (_[A] = kr, _[Dt] = z, A = Dt) : (_[A] = Hl, _[Qe] = z, A = Qe);
        else if (Dt < Y && 0 > l(kr, z)) _[A] = kr, _[Dt] = z, A = Dt;
        else break e;
      }
    }
    return T;
  }
  function l(_, T) {
    var z = _.sortIndex - T.sortIndex;
    return z !== 0 ? z : _.id - T.id;
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
  var s = [], f = [], h = 1, m = null, p = 3, S = !1, y = !1, w = !1, D = typeof setTimeout == "function" ? setTimeout : null, a = typeof clearTimeout == "function" ? clearTimeout : null, c = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var T = n(f); T !== null; ) {
      if (T.callback === null) r(f);
      else if (T.startTime <= _) r(f), T.sortIndex = T.expirationTime, t(s, T);
      else break;
      T = n(f);
    }
  }
  function g(_) {
    if (w = !1, d(_), !y) if (n(s) !== null) y = !0, Ue(C);
    else {
      var T = n(f);
      T !== null && Nt(g, T.startTime - _);
    }
  }
  function C(_, T) {
    y = !1, w && (w = !1, a(x), x = -1), S = !0;
    var z = p;
    try {
      for (d(T), m = n(s); m !== null && (!(m.expirationTime > T) || _ && !pe()); ) {
        var A = m.callback;
        if (typeof A == "function") {
          m.callback = null, p = m.priorityLevel;
          var Y = A(m.expirationTime <= T);
          T = e.unstable_now(), typeof Y == "function" ? m.callback = Y : m === n(s) && r(s), d(T);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var Xt = !0;
      else {
        var Qe = n(f);
        Qe !== null && Nt(g, Qe.startTime - T), Xt = !1;
      }
      return Xt;
    } finally {
      m = null, p = z, S = !1;
    }
  }
  var N = !1, E = null, x = -1, j = 5, I = -1;
  function pe() {
    return !(e.unstable_now() - I < j);
  }
  function rt() {
    if (E !== null) {
      var _ = e.unstable_now();
      I = _;
      var T = !0;
      try {
        T = E(!0, _);
      } finally {
        T ? lt() : (N = !1, E = null);
      }
    } else N = !1;
  }
  var lt;
  if (typeof c == "function") lt = function() {
    c(rt);
  };
  else if (typeof MessageChannel < "u") {
    var Pn = new MessageChannel(), yr = Pn.port2;
    Pn.port1.onmessage = rt, lt = function() {
      yr.postMessage(null);
    };
  } else lt = function() {
    D(rt, 0);
  };
  function Ue(_) {
    E = _, N || (N = !0, lt());
  }
  function Nt(_, T) {
    x = D(function() {
      _(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    y || S || (y = !0, Ue(C));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : j = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(_) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var T = 3;
        break;
      default:
        T = p;
    }
    var z = p;
    p = T;
    try {
      return _();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, T) {
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
    var z = p;
    p = _;
    try {
      return T();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(_, T, z) {
    var A = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? A + z : A) : z = A, _) {
      case 1:
        var Y = -1;
        break;
      case 2:
        Y = 250;
        break;
      case 5:
        Y = 1073741823;
        break;
      case 4:
        Y = 1e4;
        break;
      default:
        Y = 5e3;
    }
    return Y = z + Y, _ = { id: h++, callback: T, priorityLevel: _, startTime: z, expirationTime: Y, sortIndex: -1 }, z > A ? (_.sortIndex = z, t(f, _), n(s) === null && _ === n(f) && (w ? (a(x), x = -1) : w = !0, Nt(g, z - A))) : (_.sortIndex = Y, t(s, _), y || S || (y = !0, Ue(C))), _;
  }, e.unstable_shouldYield = pe, e.unstable_wrapCallback = function(_) {
    var T = p;
    return function() {
      var z = p;
      p = T;
      try {
        return _.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(Ls);
js.exports = Ls;
var ff = js.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var df = L, xe = ff;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ms = /* @__PURE__ */ new Set(), Zn = {};
function Kt(e, t) {
  gn(e, t), gn(e + "Capture", t);
}
function gn(e, t) {
  for (Zn[e] = t, e = 0; e < t.length; e++) Ms.add(t[e]);
}
var qe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vi = Object.prototype.hasOwnProperty, pf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, au = {}, cu = {};
function mf(e) {
  return vi.call(cu, e) ? !0 : vi.call(au, e) ? !1 : pf.test(e) ? cu[e] = !0 : (au[e] = !0, !1);
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
function de(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var re = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  re[e] = new de(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  re[t] = new de(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  re[e] = new de(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  re[e] = new de(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  re[e] = new de(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  re[e] = new de(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  re[e] = new de(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  re[e] = new de(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  re[e] = new de(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var mo = /[\-:]([a-z])/g;
function ho(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    mo,
    ho
  );
  re[t] = new de(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(mo, ho);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(mo, ho);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function go(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (gf(t, n, l, r) && (n = null), r || l === null ? mf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var nt = df.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, wr = Symbol.for("react.element"), Jt = Symbol.for("react.portal"), qt = Symbol.for("react.fragment"), vo = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), Os = Symbol.for("react.provider"), As = Symbol.for("react.context"), yo = Symbol.for("react.forward_ref"), ki = Symbol.for("react.suspense"), Si = Symbol.for("react.suspense_list"), ko = Symbol.for("react.memo"), st = Symbol.for("react.lazy"), Fs = Symbol.for("react.offscreen"), fu = Symbol.iterator;
function Dn(e) {
  return e === null || typeof e != "object" ? null : (e = fu && e[fu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var W = Object.assign, Bl;
function On(e) {
  if (Bl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Bl = t && t[1] || "";
  }
  return `
` + Bl + e;
}
var Vl = !1;
function Wl(e, t) {
  if (!e || Vl) return "";
  Vl = !0;
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
    Vl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function vf(e) {
  switch (e.tag) {
    case 5:
      return On(e.type);
    case 16:
      return On("Lazy");
    case 13:
      return On("Suspense");
    case 19:
      return On("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Wl(e.type, !1), e;
    case 11:
      return e = Wl(e.type.render, !1), e;
    case 1:
      return e = Wl(e.type, !0), e;
    default:
      return "";
  }
}
function wi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case qt:
      return "Fragment";
    case Jt:
      return "Portal";
    case yi:
      return "Profiler";
    case vo:
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
    case yo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ko:
      return t = e.displayName || null, t !== null ? t : wi(e.type) || "Memo";
    case st:
      t = e._payload, e = e._init;
      try {
        return wi(e(t));
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
      return wi(t);
    case 8:
      return t === vo ? "StrictMode" : "Mode";
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
function kf(e) {
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
function Er(e) {
  e._valueTracker || (e._valueTracker = kf(e));
}
function Hs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Us(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Zr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ei(e, t) {
  var n = t.checked;
  return W({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function du(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Et(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function $s(e, t) {
  t = t.checked, t != null && go(e, "checked", t, !1);
}
function xi(e, t) {
  $s(e, t);
  var n = Et(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ci(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ci(e, t.type, Et(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function pu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ci(e, t, n) {
  (t !== "number" || Zr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var An = Array.isArray;
function cn(e, t, n, r) {
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
function _i(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return W({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function mu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (An(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Et(n) };
}
function Bs(e, t) {
  var n = Et(t.value), r = Et(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function hu(e) {
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
var xr, Ws = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (xr = xr || document.createElement("div"), xr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Jn(e, t) {
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
}, Sf = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hn).forEach(function(e) {
  Sf.forEach(function(t) {
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
var wf = W({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ni(e, t) {
  if (t) {
    if (wf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Di(e, t) {
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
var Ti = null;
function So(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ii = null, fn = null, dn = null;
function gu(e) {
  if (e = gr(e)) {
    if (typeof Ii != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = Tl(t), Ii(e.stateNode, e.type, t));
  }
}
function Ys(e) {
  fn ? dn ? dn.push(e) : dn = [e] : fn = e;
}
function Xs() {
  if (fn) {
    var e = fn, t = dn;
    if (dn = fn = null, gu(e), t) for (e = 0; e < t.length; e++) gu(t[e]);
  }
}
function Gs(e, t) {
  return e(t);
}
function Zs() {
}
var Ql = !1;
function Js(e, t, n) {
  if (Ql) return e(t, n);
  Ql = !0;
  try {
    return Gs(e, t, n);
  } finally {
    Ql = !1, (fn !== null || dn !== null) && (Zs(), Xs());
  }
}
function qn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Tl(n);
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
if (qe) try {
  var Tn = {};
  Object.defineProperty(Tn, "passive", { get: function() {
    zi = !0;
  } }), window.addEventListener("test", Tn, Tn), window.removeEventListener("test", Tn, Tn);
} catch {
  zi = !1;
}
function Ef(e, t, n, r, l, i, o, u, s) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, f);
  } catch (h) {
    this.onError(h);
  }
}
var $n = !1, Jr = null, qr = !1, Ri = null, xf = { onError: function(e) {
  $n = !0, Jr = e;
} };
function Cf(e, t, n, r, l, i, o, u, s) {
  $n = !1, Jr = null, Ef.apply(xf, arguments);
}
function _f(e, t, n, r, l, i, o, u, s) {
  if (Cf.apply(this, arguments), $n) {
    if ($n) {
      var f = Jr;
      $n = !1, Jr = null;
    } else throw Error(k(198));
    qr || (qr = !0, Ri = f);
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
function vu(e) {
  if (Yt(e) !== e) throw Error(k(188));
}
function Pf(e) {
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
        if (i === n) return vu(l), e;
        if (i === r) return vu(l), t;
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
var ta = xe.unstable_scheduleCallback, yu = xe.unstable_cancelCallback, Nf = xe.unstable_shouldYield, Df = xe.unstable_requestPaint, K = xe.unstable_now, Tf = xe.unstable_getCurrentPriorityLevel, wo = xe.unstable_ImmediatePriority, na = xe.unstable_UserBlockingPriority, br = xe.unstable_NormalPriority, If = xe.unstable_LowPriority, ra = xe.unstable_IdlePriority, _l = null, Ve = null;
function zf(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function") try {
    Ve.onCommitFiberRoot(_l, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Oe = Math.clz32 ? Math.clz32 : Lf, Rf = Math.log, jf = Math.LN2;
function Lf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Rf(e) / jf | 0) | 0;
}
var Cr = 64, _r = 4194304;
function Fn(e) {
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
function el(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = Fn(u) : (i &= o, i !== 0 && (r = Fn(i)));
  } else o = n & ~l, o !== 0 ? r = Fn(o) : i !== 0 && (r = Fn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Oe(t), l = 1 << n, r |= e[n], t &= ~l;
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
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Oe(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = Mf(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function ji(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function la() {
  var e = Cr;
  return Cr <<= 1, !(Cr & 4194240) && (Cr = 64), e;
}
function Kl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function mr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n;
}
function Af(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function Eo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var O = 0;
function ia(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var oa, xo, ua, sa, aa, Li = !1, Pr = [], mt = null, ht = null, gt = null, bn = /* @__PURE__ */ new Map(), er = /* @__PURE__ */ new Map(), ct = [], Ff = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ku(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      mt = null;
      break;
    case "dragenter":
    case "dragleave":
      ht = null;
      break;
    case "mouseover":
    case "mouseout":
      gt = null;
      break;
    case "pointerover":
    case "pointerout":
      bn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      er.delete(t.pointerId);
  }
}
function In(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = gr(t), t !== null && xo(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Uf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return mt = In(mt, e, t, n, r, l), !0;
    case "dragenter":
      return ht = In(ht, e, t, n, r, l), !0;
    case "mouseover":
      return gt = In(gt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return bn.set(i, In(bn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, er.set(i, In(er.get(i) || null, e, t, n, r, l)), !0;
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
function Hr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Mi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ti = r, n.target.dispatchEvent(r), Ti = null;
    } else return t = gr(n), t !== null && xo(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Su(e, t, n) {
  Hr(e) && n.delete(t);
}
function Hf() {
  Li = !1, mt !== null && Hr(mt) && (mt = null), ht !== null && Hr(ht) && (ht = null), gt !== null && Hr(gt) && (gt = null), bn.forEach(Su), er.forEach(Su);
}
function zn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Li || (Li = !0, xe.unstable_scheduleCallback(xe.unstable_NormalPriority, Hf)));
}
function tr(e) {
  function t(l) {
    return zn(l, e);
  }
  if (0 < Pr.length) {
    zn(Pr[0], e);
    for (var n = 1; n < Pr.length; n++) {
      var r = Pr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (mt !== null && zn(mt, e), ht !== null && zn(ht, e), gt !== null && zn(gt, e), bn.forEach(t), er.forEach(t), n = 0; n < ct.length; n++) r = ct[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ct.length && (n = ct[0], n.blockedOn === null); ) ca(n), n.blockedOn === null && ct.shift();
}
var pn = nt.ReactCurrentBatchConfig, tl = !0;
function $f(e, t, n, r) {
  var l = O, i = pn.transition;
  pn.transition = null;
  try {
    O = 1, Co(e, t, n, r);
  } finally {
    O = l, pn.transition = i;
  }
}
function Bf(e, t, n, r) {
  var l = O, i = pn.transition;
  pn.transition = null;
  try {
    O = 4, Co(e, t, n, r);
  } finally {
    O = l, pn.transition = i;
  }
}
function Co(e, t, n, r) {
  if (tl) {
    var l = Mi(e, t, n, r);
    if (l === null) ni(e, t, r, nl, n), ku(e, r);
    else if (Uf(l, e, t, n, r)) r.stopPropagation();
    else if (ku(e, r), t & 4 && -1 < Ff.indexOf(e)) {
      for (; l !== null; ) {
        var i = gr(l);
        if (i !== null && oa(i), i = Mi(e, t, n, r), i === null && ni(e, t, r, nl, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ni(e, t, r, null, n);
  }
}
var nl = null;
function Mi(e, t, n, r) {
  if (nl = null, e = So(r), e = Rt(e), e !== null) if (t = Yt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = qs(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return nl = e, null;
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
        case wo:
          return 1;
        case na:
          return 4;
        case br:
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
var dt = null, _o = null, $r = null;
function da() {
  if ($r) return $r;
  var e, t = _o, n = t.length, r, l = "value" in dt ? dt.value : dt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return $r = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Br(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Nr() {
  return !0;
}
function wu() {
  return !1;
}
function _e(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Nr : wu, this.isPropagationStopped = wu, this;
  }
  return W(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Nr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Nr);
  }, persist: function() {
  }, isPersistent: Nr }), t;
}
var Cn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Po = _e(Cn), hr = W({}, Cn, { view: 0, detail: 0 }), Vf = _e(hr), Yl, Xl, Rn, Pl = W({}, hr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: No, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Rn && (Rn && e.type === "mousemove" ? (Yl = e.screenX - Rn.screenX, Xl = e.screenY - Rn.screenY) : Xl = Yl = 0, Rn = e), Yl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Xl;
} }), Eu = _e(Pl), Wf = W({}, Pl, { dataTransfer: 0 }), Qf = _e(Wf), Kf = W({}, hr, { relatedTarget: 0 }), Gl = _e(Kf), Yf = W({}, Cn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Xf = _e(Yf), Gf = W({}, Cn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Zf = _e(Gf), Jf = W({}, Cn, { data: 0 }), xu = _e(Jf), qf = {
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
function No() {
  return td;
}
var nd = W({}, hr, { key: function(e) {
  if (e.key) {
    var t = qf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Br(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: No, charCode: function(e) {
  return e.type === "keypress" ? Br(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Br(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), rd = _e(nd), ld = W({}, Pl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Cu = _e(ld), id = W({}, hr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: No }), od = _e(id), ud = W({}, Cn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), sd = _e(ud), ad = W({}, Pl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), cd = _e(ad), fd = [9, 13, 27, 32], Do = qe && "CompositionEvent" in window, Bn = null;
qe && "documentMode" in document && (Bn = document.documentMode);
var dd = qe && "TextEvent" in window && !Bn, pa = qe && (!Do || Bn && 8 < Bn && 11 >= Bn), _u = " ", Pu = !1;
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
var bt = !1;
function pd(e, t) {
  switch (e) {
    case "compositionend":
      return ha(t);
    case "keypress":
      return t.which !== 32 ? null : (Pu = !0, _u);
    case "textInput":
      return e = t.data, e === _u && Pu ? null : e;
    default:
      return null;
  }
}
function md(e, t) {
  if (bt) return e === "compositionend" || !Do && ma(e, t) ? (e = da(), $r = _o = dt = null, bt = !1, e) : null;
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
function Nu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!hd[e.type] : t === "textarea";
}
function ga(e, t, n, r) {
  Ys(r), t = rl(t, "onChange"), 0 < t.length && (n = new Po("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Vn = null, nr = null;
function gd(e) {
  Na(e, 0);
}
function Nl(e) {
  var t = nn(e);
  if (Hs(t)) return e;
}
function vd(e, t) {
  if (e === "change") return t;
}
var va = !1;
if (qe) {
  var Zl;
  if (qe) {
    var Jl = "oninput" in document;
    if (!Jl) {
      var Du = document.createElement("div");
      Du.setAttribute("oninput", "return;"), Jl = typeof Du.oninput == "function";
    }
    Zl = Jl;
  } else Zl = !1;
  va = Zl && (!document.documentMode || 9 < document.documentMode);
}
function Tu() {
  Vn && (Vn.detachEvent("onpropertychange", ya), nr = Vn = null);
}
function ya(e) {
  if (e.propertyName === "value" && Nl(nr)) {
    var t = [];
    ga(t, nr, e, So(e)), Js(gd, t);
  }
}
function yd(e, t, n) {
  e === "focusin" ? (Tu(), Vn = t, nr = n, Vn.attachEvent("onpropertychange", ya)) : e === "focusout" && Tu();
}
function kd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Nl(nr);
}
function Sd(e, t) {
  if (e === "click") return Nl(t);
}
function wd(e, t) {
  if (e === "input" || e === "change") return Nl(t);
}
function Ed(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Fe = typeof Object.is == "function" ? Object.is : Ed;
function rr(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!vi.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function Iu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function zu(e, t) {
  var n = Iu(e);
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
    n = Iu(n);
  }
}
function ka(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ka(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Sa() {
  for (var e = window, t = Zr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Zr(e.document);
  }
  return t;
}
function To(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function xd(e) {
  var t = Sa(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ka(n.ownerDocument.documentElement, n)) {
    if (r !== null && To(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = zu(n, i);
        var o = zu(
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
var Cd = qe && "documentMode" in document && 11 >= document.documentMode, en = null, Oi = null, Wn = null, Ai = !1;
function Ru(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ai || en == null || en !== Zr(r) || (r = en, "selectionStart" in r && To(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Wn && rr(Wn, r) || (Wn = r, r = rl(Oi, "onSelect"), 0 < r.length && (t = new Po("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = en)));
}
function Dr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var tn = { animationend: Dr("Animation", "AnimationEnd"), animationiteration: Dr("Animation", "AnimationIteration"), animationstart: Dr("Animation", "AnimationStart"), transitionend: Dr("Transition", "TransitionEnd") }, ql = {}, wa = {};
qe && (wa = document.createElement("div").style, "AnimationEvent" in window || (delete tn.animationend.animation, delete tn.animationiteration.animation, delete tn.animationstart.animation), "TransitionEvent" in window || delete tn.transitionend.transition);
function Dl(e) {
  if (ql[e]) return ql[e];
  if (!tn[e]) return e;
  var t = tn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in wa) return ql[e] = t[n];
  return e;
}
var Ea = Dl("animationend"), xa = Dl("animationiteration"), Ca = Dl("animationstart"), _a = Dl("transitionend"), Pa = /* @__PURE__ */ new Map(), ju = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ct(e, t) {
  Pa.set(e, t), Kt(t, [e]);
}
for (var bl = 0; bl < ju.length; bl++) {
  var ei = ju[bl], _d = ei.toLowerCase(), Pd = ei[0].toUpperCase() + ei.slice(1);
  Ct(_d, "on" + Pd);
}
Ct(Ea, "onAnimationEnd");
Ct(xa, "onAnimationIteration");
Ct(Ca, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(_a, "onTransitionEnd");
gn("onMouseEnter", ["mouseout", "mouseover"]);
gn("onMouseLeave", ["mouseout", "mouseover"]);
gn("onPointerEnter", ["pointerout", "pointerover"]);
gn("onPointerLeave", ["pointerout", "pointerover"]);
Kt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Kt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Kt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Kt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Kt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Un = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Nd = new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));
function Lu(e, t, n) {
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
        Lu(l, u, f), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, f = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Lu(l, u, f), i = s;
      }
    }
  }
  if (qr) throw e = Ri, qr = !1, Ri = null, e;
}
function U(e, t) {
  var n = t[Bi];
  n === void 0 && (n = t[Bi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Da(t, e, 2, !1), n.add(r));
}
function ti(e, t, n) {
  var r = 0;
  t && (r |= 4), Da(n, e, r, t);
}
var Tr = "_reactListening" + Math.random().toString(36).slice(2);
function lr(e) {
  if (!e[Tr]) {
    e[Tr] = !0, Ms.forEach(function(n) {
      n !== "selectionchange" && (Nd.has(n) || ti(n, !1, e), ti(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Tr] || (t[Tr] = !0, ti("selectionchange", !1, t));
  }
}
function Da(e, t, n, r) {
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
function ni(e, t, n, r, l) {
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
    var f = i, h = So(n), m = [];
    e: {
      var p = Pa.get(e);
      if (p !== void 0) {
        var S = Po, y = e;
        switch (e) {
          case "keypress":
            if (Br(n) === 0) break e;
          case "keydown":
          case "keyup":
            S = rd;
            break;
          case "focusin":
            y = "focus", S = Gl;
            break;
          case "focusout":
            y = "blur", S = Gl;
            break;
          case "beforeblur":
          case "afterblur":
            S = Gl;
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
            S = Qf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = od;
            break;
          case Ea:
          case xa:
          case Ca:
            S = Xf;
            break;
          case _a:
            S = sd;
            break;
          case "scroll":
            S = Vf;
            break;
          case "wheel":
            S = cd;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Zf;
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
        var w = (t & 4) !== 0, D = !w && e === "scroll", a = w ? p !== null ? p + "Capture" : null : p;
        w = [];
        for (var c = f, d; c !== null; ) {
          d = c;
          var g = d.stateNode;
          if (d.tag === 5 && g !== null && (d = g, a !== null && (g = qn(c, a), g != null && w.push(ir(c, g, d)))), D) break;
          c = c.return;
        }
        0 < w.length && (p = new S(p, y, null, n, h), m.push({ event: p, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", p && n !== Ti && (y = n.relatedTarget || n.fromElement) && (Rt(y) || y[be])) break e;
        if ((S || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, S ? (y = n.relatedTarget || n.toElement, S = f, y = y ? Rt(y) : null, y !== null && (D = Yt(y), y !== D || y.tag !== 5 && y.tag !== 6) && (y = null)) : (S = null, y = f), S !== y)) {
          if (w = Eu, g = "onMouseLeave", a = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (w = Cu, g = "onPointerLeave", a = "onPointerEnter", c = "pointer"), D = S == null ? p : nn(S), d = y == null ? p : nn(y), p = new w(g, c + "leave", S, n, h), p.target = D, p.relatedTarget = d, g = null, Rt(h) === f && (w = new w(a, c + "enter", y, n, h), w.target = d, w.relatedTarget = D, g = w), D = g, S && y) t: {
            for (w = S, a = y, c = 0, d = w; d; d = Gt(d)) c++;
            for (d = 0, g = a; g; g = Gt(g)) d++;
            for (; 0 < c - d; ) w = Gt(w), c--;
            for (; 0 < d - c; ) a = Gt(a), d--;
            for (; c--; ) {
              if (w === a || a !== null && w === a.alternate) break t;
              w = Gt(w), a = Gt(a);
            }
            w = null;
          }
          else w = null;
          S !== null && Mu(m, p, S, w, !1), y !== null && D !== null && Mu(m, D, y, w, !0);
        }
      }
      e: {
        if (p = f ? nn(f) : window, S = p.nodeName && p.nodeName.toLowerCase(), S === "select" || S === "input" && p.type === "file") var C = vd;
        else if (Nu(p)) if (va) C = wd;
        else {
          C = kd;
          var N = yd;
        }
        else (S = p.nodeName) && S.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (C = Sd);
        if (C && (C = C(e, f))) {
          ga(m, C, n, h);
          break e;
        }
        N && N(e, p, f), e === "focusout" && (N = p._wrapperState) && N.controlled && p.type === "number" && Ci(p, "number", p.value);
      }
      switch (N = f ? nn(f) : window, e) {
        case "focusin":
          (Nu(N) || N.contentEditable === "true") && (en = N, Oi = f, Wn = null);
          break;
        case "focusout":
          Wn = Oi = en = null;
          break;
        case "mousedown":
          Ai = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ai = !1, Ru(m, n, h);
          break;
        case "selectionchange":
          if (Cd) break;
        case "keydown":
        case "keyup":
          Ru(m, n, h);
      }
      var E;
      if (Do) e: {
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
      else bt ? ma(e, n) && (x = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (x = "onCompositionStart");
      x && (pa && n.locale !== "ko" && (bt || x !== "onCompositionStart" ? x === "onCompositionEnd" && bt && (E = da()) : (dt = h, _o = "value" in dt ? dt.value : dt.textContent, bt = !0)), N = rl(f, x), 0 < N.length && (x = new xu(x, e, null, n, h), m.push({ event: x, listeners: N }), E ? x.data = E : (E = ha(n), E !== null && (x.data = E)))), (E = dd ? pd(e, n) : md(e, n)) && (f = rl(f, "onBeforeInput"), 0 < f.length && (h = new xu("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: f }), h.data = E));
    }
    Na(m, t);
  });
}
function ir(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function rl(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = qn(e, n), i != null && r.unshift(ir(e, i, l)), i = qn(e, t), i != null && r.push(ir(e, i, l))), e = e.return;
  }
  return r;
}
function Gt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Mu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, f = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && f !== null && (u = f, l ? (s = qn(n, i), s != null && o.unshift(ir(n, s, u))) : l || (s = qn(n, i), s != null && o.push(ir(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Dd = /\r\n?/g, Td = /\u0000|\uFFFD/g;
function Ou(e) {
  return (typeof e == "string" ? e : "" + e).replace(Dd, `
`).replace(Td, "");
}
function Ir(e, t, n) {
  if (t = Ou(t), Ou(e) !== t && n) throw Error(k(425));
}
function ll() {
}
var Fi = null, Ui = null;
function Hi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var $i = typeof setTimeout == "function" ? setTimeout : void 0, Id = typeof clearTimeout == "function" ? clearTimeout : void 0, Au = typeof Promise == "function" ? Promise : void 0, zd = typeof queueMicrotask == "function" ? queueMicrotask : typeof Au < "u" ? function(e) {
  return Au.resolve(null).then(e).catch(Rd);
} : $i;
function Rd(e) {
  setTimeout(function() {
    throw e;
  });
}
function ri(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), tr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  tr(t);
}
function vt(e) {
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
function Fu(e) {
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
var _n = Math.random().toString(36).slice(2), Be = "__reactFiber$" + _n, or = "__reactProps$" + _n, be = "__reactContainer$" + _n, Bi = "__reactEvents$" + _n, jd = "__reactListeners$" + _n, Ld = "__reactHandles$" + _n;
function Rt(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[be] || n[Be]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Fu(e); e !== null; ) {
        if (n = e[Be]) return n;
        e = Fu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function gr(e) {
  return e = e[Be] || e[be], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Tl(e) {
  return e[or] || null;
}
var Vi = [], rn = -1;
function _t(e) {
  return { current: e };
}
function H(e) {
  0 > rn || (e.current = Vi[rn], Vi[rn] = null, rn--);
}
function F(e, t) {
  rn++, Vi[rn] = e.current, e.current = t;
}
var xt = {}, se = _t(xt), ge = _t(!1), $t = xt;
function vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ve(e) {
  return e = e.childContextTypes, e != null;
}
function il() {
  H(ge), H(se);
}
function Uu(e, t, n) {
  if (se.current !== xt) throw Error(k(168));
  F(se, t), F(ge, n);
}
function Ta(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, yf(e) || "Unknown", l));
  return W({}, n, r);
}
function ol(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xt, $t = se.current, F(se, e), F(ge, ge.current), !0;
}
function Hu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = Ta(e, t, $t), r.__reactInternalMemoizedMergedChildContext = e, H(ge), H(se), F(se, e)) : H(ge), F(ge, n);
}
var Xe = null, Il = !1, li = !1;
function Ia(e) {
  Xe === null ? Xe = [e] : Xe.push(e);
}
function Md(e) {
  Il = !0, Ia(e);
}
function Pt() {
  if (!li && Xe !== null) {
    li = !0;
    var e = 0, t = O;
    try {
      var n = Xe;
      for (O = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Xe = null, Il = !1;
    } catch (l) {
      throw Xe !== null && (Xe = Xe.slice(e + 1)), ta(wo, Pt), l;
    } finally {
      O = t, li = !1;
    }
  }
  return null;
}
var ln = [], on = 0, ul = null, sl = 0, Pe = [], Ne = 0, Bt = null, Ge = 1, Ze = "";
function It(e, t) {
  ln[on++] = sl, ln[on++] = ul, ul = e, sl = t;
}
function za(e, t, n) {
  Pe[Ne++] = Ge, Pe[Ne++] = Ze, Pe[Ne++] = Bt, Bt = e;
  var r = Ge;
  e = Ze;
  var l = 32 - Oe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ge = 1 << 32 - Oe(t) + l | n << l | r, Ze = i + e;
  } else Ge = 1 << i | n << l | r, Ze = e;
}
function Io(e) {
  e.return !== null && (It(e, 1), za(e, 1, 0));
}
function zo(e) {
  for (; e === ul; ) ul = ln[--on], ln[on] = null, sl = ln[--on], ln[on] = null;
  for (; e === Bt; ) Bt = Pe[--Ne], Pe[Ne] = null, Ze = Pe[--Ne], Pe[Ne] = null, Ge = Pe[--Ne], Pe[Ne] = null;
}
var Ee = null, we = null, $ = !1, Me = null;
function Ra(e, t) {
  var n = De(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function $u(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ee = e, we = vt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ee = e, we = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Bt !== null ? { id: Ge, overflow: Ze } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = De(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ee = e, we = null, !0) : !1;
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
      if (!$u(e, t)) {
        if (Wi(e)) throw Error(k(418));
        t = vt(n.nextSibling);
        var r = Ee;
        t && $u(e, t) ? Ra(r, n) : (e.flags = e.flags & -4097 | 2, $ = !1, Ee = e);
      }
    } else {
      if (Wi(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, $ = !1, Ee = e;
    }
  }
}
function Bu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  Ee = e;
}
function zr(e) {
  if (e !== Ee) return !1;
  if (!$) return Bu(e), $ = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Hi(e.type, e.memoizedProps)), t && (t = we)) {
    if (Wi(e)) throw ja(), Error(k(418));
    for (; t; ) Ra(e, t), t = vt(t.nextSibling);
  }
  if (Bu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              we = vt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      we = null;
    }
  } else we = Ee ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function ja() {
  for (var e = we; e; ) e = vt(e.nextSibling);
}
function yn() {
  we = Ee = null, $ = !1;
}
function Ro(e) {
  Me === null ? Me = [e] : Me.push(e);
}
var Od = nt.ReactCurrentBatchConfig;
function jn(e, t, n) {
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
function Rr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Vu(e) {
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
    return a = wt(a, c), a.index = 0, a.sibling = null, a;
  }
  function i(a, c, d) {
    return a.index = d, e ? (d = a.alternate, d !== null ? (d = d.index, d < c ? (a.flags |= 2, c) : d) : (a.flags |= 2, c)) : (a.flags |= 1048576, c);
  }
  function o(a) {
    return e && a.alternate === null && (a.flags |= 2), a;
  }
  function u(a, c, d, g) {
    return c === null || c.tag !== 6 ? (c = di(d, a.mode, g), c.return = a, c) : (c = l(c, d), c.return = a, c);
  }
  function s(a, c, d, g) {
    var C = d.type;
    return C === qt ? h(a, c, d.props.children, g, d.key) : c !== null && (c.elementType === C || typeof C == "object" && C !== null && C.$$typeof === st && Vu(C) === c.type) ? (g = l(c, d.props), g.ref = jn(a, c, d), g.return = a, g) : (g = Gr(d.type, d.key, d.props, null, a.mode, g), g.ref = jn(a, c, d), g.return = a, g);
  }
  function f(a, c, d, g) {
    return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = pi(d, a.mode, g), c.return = a, c) : (c = l(c, d.children || []), c.return = a, c);
  }
  function h(a, c, d, g, C) {
    return c === null || c.tag !== 7 ? (c = Ut(d, a.mode, g, C), c.return = a, c) : (c = l(c, d), c.return = a, c);
  }
  function m(a, c, d) {
    if (typeof c == "string" && c !== "" || typeof c == "number") return c = di("" + c, a.mode, d), c.return = a, c;
    if (typeof c == "object" && c !== null) {
      switch (c.$$typeof) {
        case wr:
          return d = Gr(c.type, c.key, c.props, null, a.mode, d), d.ref = jn(a, null, c), d.return = a, d;
        case Jt:
          return c = pi(c, a.mode, d), c.return = a, c;
        case st:
          var g = c._init;
          return m(a, g(c._payload), d);
      }
      if (An(c) || Dn(c)) return c = Ut(c, a.mode, d, null), c.return = a, c;
      Rr(a, c);
    }
    return null;
  }
  function p(a, c, d, g) {
    var C = c !== null ? c.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return C !== null ? null : u(a, c, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case wr:
          return d.key === C ? s(a, c, d, g) : null;
        case Jt:
          return d.key === C ? f(a, c, d, g) : null;
        case st:
          return C = d._init, p(
            a,
            c,
            C(d._payload),
            g
          );
      }
      if (An(d) || Dn(d)) return C !== null ? null : h(a, c, d, g, null);
      Rr(a, d);
    }
    return null;
  }
  function S(a, c, d, g, C) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return a = a.get(d) || null, u(c, a, "" + g, C);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case wr:
          return a = a.get(g.key === null ? d : g.key) || null, s(c, a, g, C);
        case Jt:
          return a = a.get(g.key === null ? d : g.key) || null, f(c, a, g, C);
        case st:
          var N = g._init;
          return S(a, c, d, N(g._payload), C);
      }
      if (An(g) || Dn(g)) return a = a.get(d) || null, h(c, a, g, C, null);
      Rr(c, g);
    }
    return null;
  }
  function y(a, c, d, g) {
    for (var C = null, N = null, E = c, x = c = 0, j = null; E !== null && x < d.length; x++) {
      E.index > x ? (j = E, E = null) : j = E.sibling;
      var I = p(a, E, d[x], g);
      if (I === null) {
        E === null && (E = j);
        break;
      }
      e && E && I.alternate === null && t(a, E), c = i(I, c, x), N === null ? C = I : N.sibling = I, N = I, E = j;
    }
    if (x === d.length) return n(a, E), $ && It(a, x), C;
    if (E === null) {
      for (; x < d.length; x++) E = m(a, d[x], g), E !== null && (c = i(E, c, x), N === null ? C = E : N.sibling = E, N = E);
      return $ && It(a, x), C;
    }
    for (E = r(a, E); x < d.length; x++) j = S(E, a, x, d[x], g), j !== null && (e && j.alternate !== null && E.delete(j.key === null ? x : j.key), c = i(j, c, x), N === null ? C = j : N.sibling = j, N = j);
    return e && E.forEach(function(pe) {
      return t(a, pe);
    }), $ && It(a, x), C;
  }
  function w(a, c, d, g) {
    var C = Dn(d);
    if (typeof C != "function") throw Error(k(150));
    if (d = C.call(d), d == null) throw Error(k(151));
    for (var N = C = null, E = c, x = c = 0, j = null, I = d.next(); E !== null && !I.done; x++, I = d.next()) {
      E.index > x ? (j = E, E = null) : j = E.sibling;
      var pe = p(a, E, I.value, g);
      if (pe === null) {
        E === null && (E = j);
        break;
      }
      e && E && pe.alternate === null && t(a, E), c = i(pe, c, x), N === null ? C = pe : N.sibling = pe, N = pe, E = j;
    }
    if (I.done) return n(
      a,
      E
    ), $ && It(a, x), C;
    if (E === null) {
      for (; !I.done; x++, I = d.next()) I = m(a, I.value, g), I !== null && (c = i(I, c, x), N === null ? C = I : N.sibling = I, N = I);
      return $ && It(a, x), C;
    }
    for (E = r(a, E); !I.done; x++, I = d.next()) I = S(E, a, x, I.value, g), I !== null && (e && I.alternate !== null && E.delete(I.key === null ? x : I.key), c = i(I, c, x), N === null ? C = I : N.sibling = I, N = I);
    return e && E.forEach(function(rt) {
      return t(a, rt);
    }), $ && It(a, x), C;
  }
  function D(a, c, d, g) {
    if (typeof d == "object" && d !== null && d.type === qt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case wr:
          e: {
            for (var C = d.key, N = c; N !== null; ) {
              if (N.key === C) {
                if (C = d.type, C === qt) {
                  if (N.tag === 7) {
                    n(a, N.sibling), c = l(N, d.props.children), c.return = a, a = c;
                    break e;
                  }
                } else if (N.elementType === C || typeof C == "object" && C !== null && C.$$typeof === st && Vu(C) === N.type) {
                  n(a, N.sibling), c = l(N, d.props), c.ref = jn(a, N, d), c.return = a, a = c;
                  break e;
                }
                n(a, N);
                break;
              } else t(a, N);
              N = N.sibling;
            }
            d.type === qt ? (c = Ut(d.props.children, a.mode, g, d.key), c.return = a, a = c) : (g = Gr(d.type, d.key, d.props, null, a.mode, g), g.ref = jn(a, c, d), g.return = a, a = g);
          }
          return o(a);
        case Jt:
          e: {
            for (N = d.key; c !== null; ) {
              if (c.key === N) if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                n(a, c.sibling), c = l(c, d.children || []), c.return = a, a = c;
                break e;
              } else {
                n(a, c);
                break;
              }
              else t(a, c);
              c = c.sibling;
            }
            c = pi(d, a.mode, g), c.return = a, a = c;
          }
          return o(a);
        case st:
          return N = d._init, D(a, c, N(d._payload), g);
      }
      if (An(d)) return y(a, c, d, g);
      if (Dn(d)) return w(a, c, d, g);
      Rr(a, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (n(a, c.sibling), c = l(c, d), c.return = a, a = c) : (n(a, c), c = di(d, a.mode, g), c.return = a, a = c), o(a)) : n(a, c);
  }
  return D;
}
var kn = La(!0), Ma = La(!1), al = _t(null), cl = null, un = null, jo = null;
function Lo() {
  jo = un = cl = null;
}
function Mo(e) {
  var t = al.current;
  H(al), e._currentValue = t;
}
function Ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function mn(e, t) {
  cl = e, jo = un = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (he = !0), e.firstContext = null);
}
function Ie(e) {
  var t = e._currentValue;
  if (jo !== e) if (e = { context: e, memoizedValue: t, next: null }, un === null) {
    if (cl === null) throw Error(k(308));
    un = e, cl.dependencies = { lanes: 0, firstContext: e };
  } else un = un.next = e;
  return t;
}
var jt = null;
function Oo(e) {
  jt === null ? jt = [e] : jt.push(e);
}
function Oa(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Oo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, et(e, r);
}
function et(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var at = !1;
function Ao(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Aa(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Je(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, M & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, et(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Oo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, et(e, n);
}
function Vr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Eo(e, n);
  }
}
function Wu(e, t) {
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
function fl(e, t, n, r) {
  var l = e.updateQueue;
  at = !1;
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
              at = !0;
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
function Qu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
      l.call(r);
    }
  }
}
var vr = {}, We = _t(vr), ur = _t(vr), sr = _t(vr);
function Lt(e) {
  if (e === vr) throw Error(k(174));
  return e;
}
function Fo(e, t) {
  switch (F(sr, t), F(ur, e), F(We, vr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Pi(t, e);
  }
  H(We), F(We, t);
}
function Sn() {
  H(We), H(ur), H(sr);
}
function Fa(e) {
  Lt(sr.current);
  var t = Lt(We.current), n = Pi(t, e.type);
  t !== n && (F(ur, e), F(We, n));
}
function Uo(e) {
  ur.current === e && (H(We), H(ur));
}
var B = _t(0);
function dl(e) {
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
var ii = [];
function Ho() {
  for (var e = 0; e < ii.length; e++) ii[e]._workInProgressVersionPrimary = null;
  ii.length = 0;
}
var Wr = nt.ReactCurrentDispatcher, oi = nt.ReactCurrentBatchConfig, Vt = 0, V = null, Z = null, q = null, pl = !1, Qn = !1, ar = 0, Ad = 0;
function le() {
  throw Error(k(321));
}
function $o(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Bo(e, t, n, r, l, i) {
  if (Vt = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Wr.current = e === null || e.memoizedState === null ? $d : Bd, e = n(r, l), Qn) {
    i = 0;
    do {
      if (Qn = !1, ar = 0, 25 <= i) throw Error(k(301));
      i += 1, q = Z = null, t.updateQueue = null, Wr.current = Vd, e = n(r, l);
    } while (Qn);
  }
  if (Wr.current = ml, t = Z !== null && Z.next !== null, Vt = 0, q = Z = V = null, pl = !1, t) throw Error(k(300));
  return e;
}
function Vo() {
  var e = ar !== 0;
  return ar = 0, e;
}
function $e() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? V.memoizedState = q = e : q = q.next = e, q;
}
function ze() {
  if (Z === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Z.next;
  var t = q === null ? V.memoizedState : q.next;
  if (t !== null) q = t, Z = e;
  else {
    if (e === null) throw Error(k(310));
    Z = e, e = { memoizedState: Z.memoizedState, baseState: Z.baseState, baseQueue: Z.baseQueue, queue: Z.queue, next: null }, q === null ? V.memoizedState = q = e : q = q.next = e;
  }
  return q;
}
function cr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function si(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = Z, l = r.baseQueue, i = n.pending;
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
    s === null ? o = r : s.next = u, Fe(r, t.memoizedState) || (he = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, V.lanes |= i, Wt |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ai(e) {
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
    Fe(i, t.memoizedState) || (he = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Ua() {
}
function Ha(e, t) {
  var n = V, r = ze(), l = t(), i = !Fe(r.memoizedState, l);
  if (i && (r.memoizedState = l, he = !0), r = r.queue, Wo(Va.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || q !== null && q.memoizedState.tag & 1) {
    if (n.flags |= 2048, fr(9, Ba.bind(null, n, r, l, t), void 0, null), b === null) throw Error(k(349));
    Vt & 30 || $a(n, t, l);
  }
  return l;
}
function $a(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ba(e, t, n, r) {
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
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function Qa(e) {
  var t = et(e, 1);
  t !== null && Ae(t, e, 1, -1);
}
function Ku(e) {
  var t = $e();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Hd.bind(null, V, e), [t.memoizedState, e];
}
function fr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ka() {
  return ze().memoizedState;
}
function Qr(e, t, n, r) {
  var l = $e();
  V.flags |= e, l.memoizedState = fr(1 | t, n, void 0, r === void 0 ? null : r);
}
function zl(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (Z !== null) {
    var o = Z.memoizedState;
    if (i = o.destroy, r !== null && $o(r, o.deps)) {
      l.memoizedState = fr(t, n, i, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = fr(1 | t, n, i, r);
}
function Yu(e, t) {
  return Qr(8390656, 8, e, t);
}
function Wo(e, t) {
  return zl(2048, 8, e, t);
}
function Ya(e, t) {
  return zl(4, 2, e, t);
}
function Xa(e, t) {
  return zl(4, 4, e, t);
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
  return n = n != null ? n.concat([e]) : null, zl(4, 4, Ga.bind(null, t, e), n);
}
function Qo() {
}
function Ja(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $o(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function qa(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && $o(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function ba(e, t, n) {
  return Vt & 21 ? (Fe(n, t) || (n = la(), V.lanes |= n, Wt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, he = !0), e.memoizedState = n);
}
function Fd(e, t) {
  var n = O;
  O = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = oi.transition;
  oi.transition = {};
  try {
    e(!1), t();
  } finally {
    O = n, oi.transition = r;
  }
}
function ec() {
  return ze().memoizedState;
}
function Ud(e, t, n) {
  var r = St(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, tc(e)) nc(t, n);
  else if (n = Oa(e, t, n, r), n !== null) {
    var l = ce();
    Ae(n, e, r, l), rc(n, t, r);
  }
}
function Hd(e, t, n) {
  var r = St(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (tc(e)) nc(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Fe(u, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, Oo(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Oa(e, t, l, r), n !== null && (l = ce(), Ae(n, e, r, l), rc(n, t, r));
  }
}
function tc(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function nc(e, t) {
  Qn = pl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function rc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Eo(e, n);
  }
}
var ml = { readContext: Ie, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, $d = { readContext: Ie, useCallback: function(e, t) {
  return $e().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ie, useEffect: Yu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Qr(
    4194308,
    4,
    Ga.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Qr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Qr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = $e();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = $e();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Ud.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = $e();
  return e = { current: e }, t.memoizedState = e;
}, useState: Ku, useDebugValue: Qo, useDeferredValue: function(e) {
  return $e().memoizedState = e;
}, useTransition: function() {
  var e = Ku(!1), t = e[0];
  return e = Fd.bind(null, e[1]), $e().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = $e();
  if ($) {
    if (n === void 0) throw Error(k(407));
    n = n();
  } else {
    if (n = t(), b === null) throw Error(k(349));
    Vt & 30 || $a(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Yu(Va.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, fr(9, Ba.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = $e(), t = b.identifierPrefix;
  if ($) {
    var n = Ze, r = Ge;
    n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ad++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Bd = {
  readContext: Ie,
  useCallback: Ja,
  useContext: Ie,
  useEffect: Wo,
  useImperativeHandle: Za,
  useInsertionEffect: Ya,
  useLayoutEffect: Xa,
  useMemo: qa,
  useReducer: si,
  useRef: Ka,
  useState: function() {
    return si(cr);
  },
  useDebugValue: Qo,
  useDeferredValue: function(e) {
    var t = ze();
    return ba(t, Z.memoizedState, e);
  },
  useTransition: function() {
    var e = si(cr)[0], t = ze().memoizedState;
    return [e, t];
  },
  useMutableSource: Ua,
  useSyncExternalStore: Ha,
  useId: ec,
  unstable_isNewReconciler: !1
}, Vd = { readContext: Ie, useCallback: Ja, useContext: Ie, useEffect: Wo, useImperativeHandle: Za, useInsertionEffect: Ya, useLayoutEffect: Xa, useMemo: qa, useReducer: ai, useRef: Ka, useState: function() {
  return ai(cr);
}, useDebugValue: Qo, useDeferredValue: function(e) {
  var t = ze();
  return Z === null ? t.memoizedState = e : ba(t, Z.memoizedState, e);
}, useTransition: function() {
  var e = ai(cr)[0], t = ze().memoizedState;
  return [e, t];
}, useMutableSource: Ua, useSyncExternalStore: Ha, useId: ec, unstable_isNewReconciler: !1 };
function je(e, t) {
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
var Rl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Yt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = St(e), i = Je(r, l);
  i.payload = t, n != null && (i.callback = n), t = yt(e, i, l), t !== null && (Ae(t, e, l, r), Vr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = St(e), i = Je(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = yt(e, i, l), t !== null && (Ae(t, e, l, r), Vr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ce(), r = St(e), l = Je(n, r);
  l.tag = 2, t != null && (l.callback = t), t = yt(e, l, r), t !== null && (Ae(t, e, r, n), Vr(t, e, r));
} };
function Xu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !rr(n, r) || !rr(l, i) : !0;
}
function lc(e, t, n) {
  var r = !1, l = xt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ie(i) : (l = ve(t) ? $t : se.current, r = t.contextTypes, i = (r = r != null) ? vn(e, l) : xt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Rl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Gu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Rl.enqueueReplaceState(t, t.state, null);
}
function Xi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Ao(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ie(i) : (i = ve(t) ? $t : se.current, l.context = vn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Yi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Rl.enqueueReplaceState(l, l.state, null), fl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function wn(e, t) {
  try {
    var n = "", r = t;
    do
      n += vf(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ci(e, t, n) {
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
var Wd = typeof WeakMap == "function" ? WeakMap : Map;
function ic(e, t, n) {
  n = Je(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    gl || (gl = !0, io = r), Gi(e, t);
  }, n;
}
function oc(e, t, n) {
  n = Je(-1, n), n.tag = 3;
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
    Gi(e, t), typeof r != "function" && (kt === null ? kt = /* @__PURE__ */ new Set([this]) : kt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Zu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Wd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = lp.bind(null, e, t, n), t.then(e, e));
}
function Ju(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function qu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Je(-1, 1), t.tag = 2, yt(n, t, 1))), n.lanes |= 1), e);
}
var Qd = nt.ReactCurrentOwner, he = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Ma(t, null, n, r) : kn(t, e.child, n, r);
}
function bu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return mn(t, l), r = Bo(e, t, n, r, i, l), n = Vo(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : ($ && n && Io(t), t.flags |= 1, ae(e, t, r, l), t.child);
}
function es(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !bo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, uc(e, t, i, r, l)) : (e = Gr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : rr, n(o, r) && e.ref === t.ref) return tt(e, t, l);
  }
  return t.flags |= 1, e = wt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function uc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (rr(i, r) && e.ref === t.ref) if (he = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (he = !0);
    else return t.lanes = e.lanes, tt(e, t, l);
  }
  return Zi(e, t, n, r, l);
}
function sc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, F(an, Se), Se |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, F(an, Se), Se |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, F(an, Se), Se |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, F(an, Se), Se |= r;
  return ae(e, t, l, n), t.child;
}
function ac(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Zi(e, t, n, r, l) {
  var i = ve(n) ? $t : se.current;
  return i = vn(t, i), mn(t, l), n = Bo(e, t, n, r, i, l), r = Vo(), e !== null && !he ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, tt(e, t, l)) : ($ && r && Io(t), t.flags |= 1, ae(e, t, n, l), t.child);
}
function ts(e, t, n, r, l) {
  if (ve(n)) {
    var i = !0;
    ol(t);
  } else i = !1;
  if (mn(t, l), t.stateNode === null) Kr(e, t), lc(t, n, r), Xi(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, f = n.contextType;
    typeof f == "object" && f !== null ? f = Ie(f) : (f = ve(n) ? $t : se.current, f = vn(t, f));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== f) && Gu(t, o, r, f), at = !1;
    var p = t.memoizedState;
    o.state = p, fl(t, r, o, l), s = t.memoizedState, u !== r || p !== s || ge.current || at ? (typeof h == "function" && (Yi(t, n, h, r), s = t.memoizedState), (u = at || Xu(t, n, u, r, p, s, f)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = f, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Aa(e, t), u = t.memoizedProps, f = t.type === t.elementType ? u : je(t.type, u), o.props = f, m = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ie(s) : (s = ve(n) ? $t : se.current, s = vn(t, s));
    var S = n.getDerivedStateFromProps;
    (h = typeof S == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || p !== s) && Gu(t, o, r, s), at = !1, p = t.memoizedState, o.state = p, fl(t, r, o, l);
    var y = t.memoizedState;
    u !== m || p !== y || ge.current || at ? (typeof S == "function" && (Yi(t, n, S, r), y = t.memoizedState), (f = at || Xu(t, n, f, r, p, y, s) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, y, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, y, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = y), o.props = r, o.state = y, o.context = s, r = f) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ji(e, t, n, r, i, l);
}
function Ji(e, t, n, r, l, i) {
  ac(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Hu(t, n, !1), tt(e, t, i);
  r = t.stateNode, Qd.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = kn(t, e.child, null, i), t.child = kn(t, null, u, i)) : ae(e, t, u, i), t.memoizedState = r.state, l && Hu(t, n, !0), t.child;
}
function cc(e) {
  var t = e.stateNode;
  t.pendingContext ? Uu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Uu(e, t.context, !1), Fo(e, t.containerInfo);
}
function ns(e, t, n, r, l) {
  return yn(), Ro(l), t.flags |= 256, ae(e, t, n, r), t.child;
}
var qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function bi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function fc(e, t, n) {
  var r = t.pendingProps, l = B.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), F(B, l & 1), e === null)
    return Qi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Ml(o, r, 0, null), e = Ut(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = bi(n), t.memoizedState = qi, e) : Ko(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Kd(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = wt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = wt(u, i) : (i = Ut(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? bi(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = qi, r;
  }
  return i = e.child, e = i.sibling, r = wt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Ko(e, t) {
  return t = Ml({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function jr(e, t, n, r) {
  return r !== null && Ro(r), kn(t, e.child, null, n), e = Ko(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Kd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ci(Error(k(422))), jr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Ml({ mode: "visible", children: r.children }, l, 0, null), i = Ut(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && kn(t, e.child, null, o), t.child.memoizedState = bi(o), t.memoizedState = qi, i);
  if (!(t.mode & 1)) return jr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(k(419)), r = ci(i, r, void 0), jr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, he || u) {
    if (r = b, r !== null) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, et(e, l), Ae(r, e, l, -1));
    }
    return qo(), r = ci(Error(k(421))), jr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = ip.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, we = vt(l.nextSibling), Ee = t, $ = !0, Me = null, e !== null && (Pe[Ne++] = Ge, Pe[Ne++] = Ze, Pe[Ne++] = Bt, Ge = e.id, Ze = e.overflow, Bt = t), t = Ko(t, r.children), t.flags |= 4096, t);
}
function rs(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ki(e.return, t, n);
}
function fi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function dc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ae(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && rs(e, n, t);
      else if (e.tag === 19) rs(e, n, t);
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
  if (F(B, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && dl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), fi(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && dl(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      fi(t, !0, n, null, i);
      break;
    case "together":
      fi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Kr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function tt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Wt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = wt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Yd(e, t, n) {
  switch (t.tag) {
    case 3:
      cc(t), yn();
      break;
    case 5:
      Fa(t);
      break;
    case 1:
      ve(t.type) && ol(t);
      break;
    case 4:
      Fo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      F(al, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (F(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? fc(e, t, n) : (F(B, B.current & 1), e = tt(e, t, n), e !== null ? e.sibling : null);
      F(B, B.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return dc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), F(B, B.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, sc(e, t, n);
  }
  return tt(e, t, n);
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
    e = t.stateNode, Lt(We.current);
    var i = null;
    switch (n) {
      case "input":
        l = Ei(e, l), r = Ei(e, r), i = [];
        break;
      case "select":
        l = W({}, l, { value: void 0 }), r = W({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = _i(e, l), r = _i(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = ll);
    }
    Ni(n, r);
    var o;
    n = null;
    for (f in l) if (!r.hasOwnProperty(f) && l.hasOwnProperty(f) && l[f] != null) if (f === "style") {
      var u = l[f];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (Zn.hasOwnProperty(f) ? i || (i = []) : (i = i || []).push(f, null));
    for (f in r) {
      var s = r[f];
      if (u = l != null ? l[f] : void 0, r.hasOwnProperty(f) && s !== u && (s != null || u != null)) if (f === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (i || (i = []), i.push(
        f,
        n
      )), n = s;
      else f === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(f, s)) : f === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(f, "" + s) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (Zn.hasOwnProperty(f) ? (s != null && f === "onScroll" && U("scroll", e), i || u === s || (i = [])) : (i = i || []).push(f, s));
    }
    n && (i = i || []).push("style", n);
    var f = i;
    (t.updateQueue = f) && (t.flags |= 4);
  }
};
hc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ln(e, t) {
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
function Xd(e, t, n) {
  var r = t.pendingProps;
  switch (zo(t), t.tag) {
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
      return ve(t.type) && il(), ie(t), null;
    case 3:
      return r = t.stateNode, Sn(), H(ge), H(se), Ho(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (so(Me), Me = null))), eo(e, t), ie(t), null;
    case 5:
      Uo(t);
      var l = Lt(sr.current);
      if (n = t.type, e !== null && t.stateNode != null) mc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ie(t), null;
        }
        if (e = Lt(We.current), zr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Be] = t, r[or] = i, e = (t.mode & 1) !== 0, n) {
            case "dialog":
              U("cancel", r), U("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              U("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Un.length; l++) U(Un[l], r);
              break;
            case "source":
              U("error", r);
              break;
            case "img":
            case "image":
            case "link":
              U(
                "error",
                r
              ), U("load", r);
              break;
            case "details":
              U("toggle", r);
              break;
            case "input":
              du(r, i), U("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, U("invalid", r);
              break;
            case "textarea":
              mu(r, i), U("invalid", r);
          }
          Ni(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Ir(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Ir(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Zn.hasOwnProperty(o) && u != null && o === "onScroll" && U("scroll", r);
          }
          switch (n) {
            case "input":
              Er(r), pu(r, i, !0);
              break;
            case "textarea":
              Er(r), hu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ll);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Be] = t, e[or] = r, pc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Di(n, r), n) {
              case "dialog":
                U("cancel", e), U("close", e), l = r;
                break;
              case "iframe":
              case "object":
              case "embed":
                U("load", e), l = r;
                break;
              case "video":
              case "audio":
                for (l = 0; l < Un.length; l++) U(Un[l], e);
                l = r;
                break;
              case "source":
                U("error", e), l = r;
                break;
              case "img":
              case "image":
              case "link":
                U(
                  "error",
                  e
                ), U("load", e), l = r;
                break;
              case "details":
                U("toggle", e), l = r;
                break;
              case "input":
                du(e, r), l = Ei(e, r), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = W({}, r, { value: void 0 }), U("invalid", e);
                break;
              case "textarea":
                mu(e, r), l = _i(e, r), U("invalid", e);
                break;
              default:
                l = r;
            }
            Ni(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? Ks(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ws(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Jn(e, s) : typeof s == "number" && Jn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Zn.hasOwnProperty(i) ? s != null && i === "onScroll" && U("scroll", e) : s != null && go(e, i, s, o));
            }
            switch (n) {
              case "input":
                Er(e), pu(e, r, !1);
                break;
              case "textarea":
                Er(e), hu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + Et(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? cn(e, !!r.multiple, i, !1) : r.defaultValue != null && cn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = ll);
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
        if (n = Lt(sr.current), Lt(We.current), zr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Be] = t, (i = r.nodeValue !== n) && (e = Ee, e !== null)) switch (e.tag) {
            case 3:
              Ir(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Ir(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Be] = t, t.stateNode = r;
      }
      return ie(t), null;
    case 13:
      if (H(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if ($ && we !== null && t.mode & 1 && !(t.flags & 128)) ja(), yn(), t.flags |= 98560, i = !1;
        else if (i = zr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(k(317));
            i[Be] = t;
          } else yn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ie(t), i = !1;
        } else Me !== null && (so(Me), Me = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? J === 0 && (J = 3) : qo())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
    case 4:
      return Sn(), eo(e, t), e === null && lr(t.stateNode.containerInfo), ie(t), null;
    case 10:
      return Mo(t.type._context), ie(t), null;
    case 17:
      return ve(t.type) && il(), ie(t), null;
    case 19:
      if (H(B), i = t.memoizedState, i === null) return ie(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) Ln(i, !1);
      else {
        if (J !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = dl(e), o !== null) {
            for (t.flags |= 128, Ln(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return F(B, B.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && K() > En && (t.flags |= 128, r = !0, Ln(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = dl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Ln(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !$) return ie(t), null;
        } else 2 * K() - i.renderingStartTime > En && n !== 1073741824 && (t.flags |= 128, r = !0, Ln(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = K(), t.sibling = null, n = B.current, F(B, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
    case 22:
    case 23:
      return Jo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Se & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Gd(e, t) {
  switch (zo(t), t.tag) {
    case 1:
      return ve(t.type) && il(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Sn(), H(ge), H(se), Ho(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Uo(t), null;
    case 13:
      if (H(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        yn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(B), null;
    case 4:
      return Sn(), null;
    case 10:
      return Mo(t.type._context), null;
    case 22:
    case 23:
      return Jo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Lr = !1, ue = !1, Zd = typeof WeakSet == "function" ? WeakSet : Set, P = null;
function sn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    Q(e, t, r);
  }
  else n.current = null;
}
function to(e, t, n) {
  try {
    n();
  } catch (r) {
    Q(e, t, r);
  }
}
var ls = !1;
function Jd(e, t) {
  if (Fi = tl, e = Sa(), To(e)) {
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
  for (Ui = { focusedElem: e, selectionRange: n }, tl = !1, P = t; P !== null; ) if (t = P, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, P = e;
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
            var w = y.memoizedProps, D = y.memoizedState, a = t.stateNode, c = a.getSnapshotBeforeUpdate(t.elementType === t.type ? w : je(t.type, w), D);
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
          throw Error(k(163));
      }
    } catch (g) {
      Q(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, P = e;
      break;
    }
    P = t.return;
  }
  return y = ls, ls = !1, y;
}
function Kn(e, t, n) {
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
function jl(e, t) {
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
  t !== null && (e.alternate = null, gc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Be], delete t[or], delete t[Bi], delete t[jd], delete t[Ld])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
function ro(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = ll));
  else if (r !== 4 && (e = e.child, e !== null)) for (ro(e, t, n), e = e.sibling; e !== null; ) ro(e, t, n), e = e.sibling;
}
function lo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (lo(e, t, n), e = e.sibling; e !== null; ) lo(e, t, n), e = e.sibling;
}
var te = null, Le = !1;
function it(e, t, n) {
  for (n = n.child; n !== null; ) yc(e, t, n), n = n.sibling;
}
function yc(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function") try {
    Ve.onCommitFiberUnmount(_l, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ue || sn(n, t);
    case 6:
      var r = te, l = Le;
      te = null, it(e, t, n), te = r, Le = l, te !== null && (Le ? (e = te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null && (Le ? (e = te, n = n.stateNode, e.nodeType === 8 ? ri(e.parentNode, n) : e.nodeType === 1 && ri(e, n), tr(e)) : ri(te, n.stateNode));
      break;
    case 4:
      r = te, l = Le, te = n.stateNode.containerInfo, Le = !0, it(e, t, n), te = r, Le = l;
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
      it(e, t, n);
      break;
    case 1:
      if (!ue && (sn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
        r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
      } catch (u) {
        Q(n, t, u);
      }
      it(e, t, n);
      break;
    case 21:
      it(e, t, n);
      break;
    case 22:
      n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null, it(e, t, n), ue = r) : it(e, t, n);
      break;
    default:
      it(e, t, n);
  }
}
function os(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Zd()), t.forEach(function(r) {
      var l = op.bind(null, e, r);
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
            te = u.stateNode, Le = !1;
            break e;
          case 3:
            te = u.stateNode.containerInfo, Le = !0;
            break e;
          case 4:
            te = u.stateNode.containerInfo, Le = !0;
            break e;
        }
        u = u.return;
      }
      if (te === null) throw Error(k(160));
      yc(i, o, l), te = null, Le = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (f) {
      Q(l, t, f);
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
      if (Re(t, e), He(e), r & 4) {
        try {
          Kn(3, e, e.return), jl(3, e);
        } catch (w) {
          Q(e, e.return, w);
        }
        try {
          Kn(5, e, e.return);
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      break;
    case 1:
      Re(t, e), He(e), r & 512 && n !== null && sn(n, n.return);
      break;
    case 5:
      if (Re(t, e), He(e), r & 512 && n !== null && sn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Jn(l, "");
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && $s(l, i), Di(u, o);
          var f = Di(u, i);
          for (o = 0; o < s.length; o += 2) {
            var h = s[o], m = s[o + 1];
            h === "style" ? Ks(l, m) : h === "dangerouslySetInnerHTML" ? Ws(l, m) : h === "children" ? Jn(l, m) : go(l, h, m, f);
          }
          switch (u) {
            case "input":
              xi(l, i);
              break;
            case "textarea":
              Bs(l, i);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var S = i.value;
              S != null ? cn(l, !!i.multiple, S, !1) : p !== !!i.multiple && (i.defaultValue != null ? cn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : cn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[or] = i;
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      break;
    case 6:
      if (Re(t, e), He(e), r & 4) {
        if (e.stateNode === null) throw Error(k(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (w) {
          Q(e, e.return, w);
        }
      }
      break;
    case 3:
      if (Re(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        tr(t.containerInfo);
      } catch (w) {
        Q(e, e.return, w);
      }
      break;
    case 4:
      Re(t, e), He(e);
      break;
    case 13:
      Re(t, e), He(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Go = K())), r & 4 && os(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (f = ue) || h, Re(t, e), ue = f) : Re(t, e), He(e), r & 8192) {
        if (f = e.memoizedState !== null, (e.stateNode.isHidden = f) && !h && e.mode & 1) for (P = e, h = e.child; h !== null; ) {
          for (m = P = h; P !== null; ) {
            switch (p = P, S = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Kn(4, p, p.return);
                break;
              case 1:
                sn(p, p.return);
                var y = p.stateNode;
                if (typeof y.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, y.props = t.memoizedProps, y.state = t.memoizedState, y.componentWillUnmount();
                  } catch (w) {
                    Q(r, n, w);
                  }
                }
                break;
              case 5:
                sn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  ss(m);
                  continue;
                }
            }
            S !== null ? (S.return = p, P = S) : ss(m);
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
                Q(e, e.return, w);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = f ? "" : m.memoizedProps;
            } catch (w) {
              Q(e, e.return, w);
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
      Re(t, e), He(e), r & 4 && os(e);
      break;
    case 21:
      break;
    default:
      Re(
        t,
        e
      ), He(e);
  }
}
function He(e) {
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
          r.flags & 32 && (Jn(l, ""), r.flags &= -33);
          var i = is(e);
          lo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = is(e);
          ro(e, u, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      Q(e, e.return, s);
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
    var l = P, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Lr;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ue;
        u = Lr;
        var f = ue;
        if (Lr = o, (ue = s) && !f) for (P = l; P !== null; ) o = P, s = o.child, o.tag === 22 && o.memoizedState !== null ? as(l) : s !== null ? (s.return = o, P = s) : as(l);
        for (; i !== null; ) P = i, Sc(i), i = i.sibling;
        P = l, Lr = u, ue = f;
      }
      us(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, P = i) : us(e);
  }
}
function us(e) {
  for (; P !== null; ) {
    var t = P;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ue || jl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ue) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : je(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Qu(t, i, r);
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
              Qu(t, o, n);
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
                  m !== null && tr(m);
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
        Q(t, t.return, p);
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
function ss(e) {
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
function as(e) {
  for (; P !== null; ) {
    var t = P;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            jl(4, t);
          } catch (s) {
            Q(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              Q(t, l, s);
            }
          }
          var i = t.return;
          try {
            no(t);
          } catch (s) {
            Q(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            no(t);
          } catch (s) {
            Q(t, o, s);
          }
      }
    } catch (s) {
      Q(t, t.return, s);
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
var bd = Math.ceil, hl = nt.ReactCurrentDispatcher, Yo = nt.ReactCurrentOwner, Te = nt.ReactCurrentBatchConfig, M = 0, b = null, G = null, ne = 0, Se = 0, an = _t(0), J = 0, dr = null, Wt = 0, Ll = 0, Xo = 0, Yn = null, me = null, Go = 0, En = 1 / 0, Ye = null, gl = !1, io = null, kt = null, Mr = !1, pt = null, vl = 0, Xn = 0, oo = null, Yr = -1, Xr = 0;
function ce() {
  return M & 6 ? K() : Yr !== -1 ? Yr : Yr = K();
}
function St(e) {
  return e.mode & 1 ? M & 2 && ne !== 0 ? ne & -ne : Od.transition !== null ? (Xr === 0 && (Xr = la()), Xr) : (e = O, e !== 0 || (e = window.event, e = e === void 0 ? 16 : fa(e.type)), e) : 1;
}
function Ae(e, t, n, r) {
  if (50 < Xn) throw Xn = 0, oo = null, Error(k(185));
  mr(e, n, r), (!(M & 2) || e !== b) && (e === b && (!(M & 2) && (Ll |= n), J === 4 && ft(e, ne)), ye(e, r), n === 1 && M === 0 && !(t.mode & 1) && (En = K() + 500, Il && Pt()));
}
function ye(e, t) {
  var n = e.callbackNode;
  Of(e, t);
  var r = el(e, e === b ? ne : 0);
  if (r === 0) n !== null && yu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && yu(n), t === 1) e.tag === 0 ? Md(cs.bind(null, e)) : Ia(cs.bind(null, e)), zd(function() {
      !(M & 6) && Pt();
    }), n = null;
    else {
      switch (ia(r)) {
        case 1:
          n = wo;
          break;
        case 4:
          n = na;
          break;
        case 16:
          n = br;
          break;
        case 536870912:
          n = ra;
          break;
        default:
          n = br;
      }
      n = Dc(n, wc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function wc(e, t) {
  if (Yr = -1, Xr = 0, M & 6) throw Error(k(327));
  var n = e.callbackNode;
  if (hn() && e.callbackNode !== n) return null;
  var r = el(e, e === b ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = yl(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = xc();
    (b !== e || ne !== t) && (Ye = null, En = K() + 500, Ft(e, t));
    do
      try {
        np();
        break;
      } catch (u) {
        Ec(e, u);
      }
    while (!0);
    Lo(), hl.current = i, M = l, G !== null ? t = 0 : (b = null, ne = 0, t = J);
  }
  if (t !== 0) {
    if (t === 2 && (l = ji(e), l !== 0 && (r = l, t = uo(e, l))), t === 1) throw n = dr, Ft(e, 0), ft(e, r), ye(e, K()), n;
    if (t === 6) ft(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !ep(l) && (t = yl(e, r), t === 2 && (i = ji(e), i !== 0 && (r = i, t = uo(e, i))), t === 1)) throw n = dr, Ft(e, 0), ft(e, r), ye(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          zt(e, me, Ye);
          break;
        case 3:
          if (ft(e, r), (r & 130023424) === r && (t = Go + 500 - K(), 10 < t)) {
            if (el(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ce(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = $i(zt.bind(null, e, me, Ye), t);
            break;
          }
          zt(e, me, Ye);
          break;
        case 4:
          if (ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * bd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = $i(zt.bind(null, e, me, Ye), r);
            break;
          }
          zt(e, me, Ye);
          break;
        case 5:
          zt(e, me, Ye);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ye(e, K()), e.callbackNode === n ? wc.bind(null, e) : null;
}
function uo(e, t) {
  var n = Yn;
  return e.current.memoizedState.isDehydrated && (Ft(e, t).flags |= 256), e = yl(e, t), e !== 2 && (t = me, me = n, t !== null && so(t)), e;
}
function so(e) {
  me === null ? me = e : me.push.apply(me, e);
}
function ep(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!Fe(i(), l)) return !1;
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
function ft(e, t) {
  for (t &= ~Xo, t &= ~Ll, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Oe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function cs(e) {
  if (M & 6) throw Error(k(327));
  hn();
  var t = el(e, 0);
  if (!(t & 1)) return ye(e, K()), null;
  var n = yl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ji(e);
    r !== 0 && (t = r, n = uo(e, r));
  }
  if (n === 1) throw n = dr, Ft(e, 0), ft(e, t), ye(e, K()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, zt(e, me, Ye), ye(e, K()), null;
}
function Zo(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    M = n, M === 0 && (En = K() + 500, Il && Pt());
  }
}
function Qt(e) {
  pt !== null && pt.tag === 0 && !(M & 6) && hn();
  var t = M;
  M |= 1;
  var n = Te.transition, r = O;
  try {
    if (Te.transition = null, O = 1, e) return e();
  } finally {
    O = r, Te.transition = n, M = t, !(M & 6) && Pt();
  }
}
function Jo() {
  Se = an.current, H(an);
}
function Ft(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Id(n)), G !== null) for (n = G.return; n !== null; ) {
    var r = n;
    switch (zo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && il();
        break;
      case 3:
        Sn(), H(ge), H(se), Ho();
        break;
      case 5:
        Uo(r);
        break;
      case 4:
        Sn();
        break;
      case 13:
        H(B);
        break;
      case 19:
        H(B);
        break;
      case 10:
        Mo(r.type._context);
        break;
      case 22:
      case 23:
        Jo();
    }
    n = n.return;
  }
  if (b = e, G = e = wt(e.current, null), ne = Se = t, J = 0, dr = null, Xo = Ll = Wt = 0, me = Yn = null, jt !== null) {
    for (t = 0; t < jt.length; t++) if (n = jt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    jt = null;
  }
  return e;
}
function Ec(e, t) {
  do {
    var n = G;
    try {
      if (Lo(), Wr.current = ml, pl) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        pl = !1;
      }
      if (Vt = 0, q = Z = V = null, Qn = !1, ar = 0, Yo.current = null, n === null || n.return === null) {
        J = 1, dr = t, G = null;
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
          var S = Ju(o);
          if (S !== null) {
            S.flags &= -257, qu(S, o, u, i, t), S.mode & 1 && Zu(i, f, t), t = S, s = f;
            var y = t.updateQueue;
            if (y === null) {
              var w = /* @__PURE__ */ new Set();
              w.add(s), t.updateQueue = w;
            } else y.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Zu(i, f, t), qo();
              break e;
            }
            s = Error(k(426));
          }
        } else if ($ && u.mode & 1) {
          var D = Ju(o);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), qu(D, o, u, i, t), Ro(wn(s, u));
            break e;
          }
        }
        i = s = wn(s, u), J !== 4 && (J = 2), Yn === null ? Yn = [i] : Yn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var a = ic(i, s, t);
              Wu(i, a);
              break e;
            case 1:
              u = s;
              var c = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (kt === null || !kt.has(d)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = oc(i, u, t);
                Wu(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      _c(n);
    } catch (C) {
      t = C, G === n && n !== null && (G = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function xc() {
  var e = hl.current;
  return hl.current = ml, e === null ? ml : e;
}
function qo() {
  (J === 0 || J === 3 || J === 2) && (J = 4), b === null || !(Wt & 268435455) && !(Ll & 268435455) || ft(b, ne);
}
function yl(e, t) {
  var n = M;
  M |= 2;
  var r = xc();
  (b !== e || ne !== t) && (Ye = null, Ft(e, t));
  do
    try {
      tp();
      break;
    } catch (l) {
      Ec(e, l);
    }
  while (!0);
  if (Lo(), M = n, hl.current = r, G !== null) throw Error(k(261));
  return b = null, ne = 0, J;
}
function tp() {
  for (; G !== null; ) Cc(G);
}
function np() {
  for (; G !== null && !Nf(); ) Cc(G);
}
function Cc(e) {
  var t = Nc(e.alternate, e, Se);
  e.memoizedProps = e.pendingProps, t === null ? _c(e) : G = t, Yo.current = null;
}
function _c(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Gd(n, t), n !== null) {
        n.flags &= 32767, G = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        J = 6, G = null;
        return;
      }
    } else if (n = Xd(n, t, Se), n !== null) {
      G = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      G = t;
      return;
    }
    G = t = e;
  } while (t !== null);
  J === 0 && (J = 5);
}
function zt(e, t, n) {
  var r = O, l = Te.transition;
  try {
    Te.transition = null, O = 1, rp(e, t, n, r);
  } finally {
    Te.transition = l, O = r;
  }
  return null;
}
function rp(e, t, n, r) {
  do
    hn();
  while (pt !== null);
  if (M & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Af(e, i), e === b && (G = b = null, ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Mr || (Mr = !0, Dc(br, function() {
    return hn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Te.transition, Te.transition = null;
    var o = O;
    O = 1;
    var u = M;
    M |= 4, Yo.current = null, Jd(e, n), kc(n, e), xd(Ui), tl = !!Fi, Ui = Fi = null, e.current = n, qd(n), Df(), M = u, O = o, Te.transition = i;
  } else e.current = n;
  if (Mr && (Mr = !1, pt = e, vl = l), i = e.pendingLanes, i === 0 && (kt = null), zf(n.stateNode), ye(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (gl) throw gl = !1, e = io, io = null, e;
  return vl & 1 && e.tag !== 0 && hn(), i = e.pendingLanes, i & 1 ? e === oo ? Xn++ : (Xn = 0, oo = e) : Xn = 0, Pt(), null;
}
function hn() {
  if (pt !== null) {
    var e = ia(vl), t = Te.transition, n = O;
    try {
      if (Te.transition = null, O = 16 > e ? 16 : e, pt === null) var r = !1;
      else {
        if (e = pt, pt = null, vl = 0, M & 6) throw Error(k(331));
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
                      Kn(8, h, i);
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
                    var D = w.sibling;
                    w.sibling = null, w = D;
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
                Kn(9, i, i.return);
            }
            var a = i.sibling;
            if (a !== null) {
              a.return = i.return, P = a;
              break e;
            }
            P = i.return;
          }
        }
        var c = e.current;
        for (P = c; P !== null; ) {
          o = P;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, P = d;
          else e: for (o = c; P !== null; ) {
            if (u = P, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  jl(9, u);
              }
            } catch (C) {
              Q(u, u.return, C);
            }
            if (u === o) {
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
        if (M = l, Pt(), Ve && typeof Ve.onPostCommitFiberRoot == "function") try {
          Ve.onPostCommitFiberRoot(_l, e);
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
function fs(e, t, n) {
  t = wn(n, t), t = ic(e, t, 1), e = yt(e, t, 1), t = ce(), e !== null && (mr(e, 1, t), ye(e, t));
}
function Q(e, t, n) {
  if (e.tag === 3) fs(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      fs(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kt === null || !kt.has(r))) {
        e = wn(n, e), e = oc(t, e, 1), t = yt(t, e, 1), e = ce(), t !== null && (mr(t, 1, e), ye(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function lp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, b === e && (ne & n) === n && (J === 4 || J === 3 && (ne & 130023424) === ne && 500 > K() - Go ? Ft(e, 0) : Xo |= n), ye(e, t);
}
function Pc(e, t) {
  t === 0 && (e.mode & 1 ? (t = _r, _r <<= 1, !(_r & 130023424) && (_r = 4194304)) : t = 1);
  var n = ce();
  e = et(e, t), e !== null && (mr(e, t, n), ye(e, n));
}
function ip(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Pc(e, n);
}
function op(e, t) {
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
    if (!(e.lanes & n) && !(t.flags & 128)) return he = !1, Yd(e, t, n);
    he = !!(e.flags & 131072);
  }
  else he = !1, $ && t.flags & 1048576 && za(t, sl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Kr(e, t), e = t.pendingProps;
      var l = vn(t, se.current);
      mn(t, n), l = Bo(null, t, r, e, l, n);
      var i = Vo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ve(r) ? (i = !0, ol(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ao(t), l.updater = Rl, t.stateNode = l, l._reactInternals = t, Xi(t, r, e, n), t = Ji(null, t, r, !0, i, n)) : (t.tag = 0, $ && i && Io(t), ae(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Kr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = sp(r), e = je(r, e), l) {
          case 0:
            t = Zi(null, t, r, e, n);
            break e;
          case 1:
            t = ts(null, t, r, e, n);
            break e;
          case 11:
            t = bu(null, t, r, e, n);
            break e;
          case 14:
            t = es(null, t, r, je(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Zi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), ts(e, t, r, l, n);
    case 3:
      e: {
        if (cc(t), e === null) throw Error(k(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Aa(e, t), fl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = wn(Error(k(423)), t), t = ns(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = wn(Error(k(424)), t), t = ns(e, t, r, n, l);
          break e;
        } else for (we = vt(t.stateNode.containerInfo.firstChild), Ee = t, $ = !0, Me = null, n = Ma(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (yn(), r === l) {
            t = tt(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Fa(t), e === null && Qi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Hi(r, l) ? o = null : i !== null && Hi(r, i) && (t.flags |= 32), ac(e, t), ae(e, t, o, n), t.child;
    case 6:
      return e === null && Qi(t), null;
    case 13:
      return fc(e, t, n);
    case 4:
      return Fo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = kn(t, null, r, n) : ae(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), bu(e, t, r, l, n);
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, F(al, r._currentValue), r._currentValue = o, i !== null) if (Fe(i.value, o)) {
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
        ae(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, mn(t, n), l = Ie(l), r = r(l), t.flags |= 1, ae(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = je(r, t.pendingProps), l = je(r.type, l), es(e, t, r, l, n);
    case 15:
      return uc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : je(r, l), Kr(e, t), t.tag = 1, ve(r) ? (e = !0, ol(t)) : e = !1, mn(t, n), lc(t, r, l), Xi(t, r, l, n), Ji(null, t, r, !0, e, n);
    case 19:
      return dc(e, t, n);
    case 22:
      return sc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Dc(e, t) {
  return ta(e, t);
}
function up(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function De(e, t, n, r) {
  return new up(e, t, n, r);
}
function bo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function sp(e) {
  if (typeof e == "function") return bo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === yo) return 11;
    if (e === ko) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return n === null ? (n = De(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Gr(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") bo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case qt:
      return Ut(n.children, l, i, t);
    case vo:
      o = 8, l |= 8;
      break;
    case yi:
      return e = De(12, n, t, l | 2), e.elementType = yi, e.lanes = i, e;
    case ki:
      return e = De(13, n, t, l), e.elementType = ki, e.lanes = i, e;
    case Si:
      return e = De(19, n, t, l), e.elementType = Si, e.lanes = i, e;
    case Fs:
      return Ml(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Os:
          o = 10;
          break e;
        case As:
          o = 9;
          break e;
        case yo:
          o = 11;
          break e;
        case ko:
          o = 14;
          break e;
        case st:
          o = 16, r = null;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = De(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ut(e, t, n, r) {
  return e = De(7, e, r, t), e.lanes = n, e;
}
function Ml(e, t, n, r) {
  return e = De(22, e, r, t), e.elementType = Fs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function di(e, t, n) {
  return e = De(6, e, null, t), e.lanes = n, e;
}
function pi(e, t, n) {
  return t = De(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function ap(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Kl(0), this.expirationTimes = Kl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function eu(e, t, n, r, l, i, o, u, s) {
  return e = new ap(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = De(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ao(i), e;
}
function cp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Tc(e) {
  if (!e) return xt;
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
    if (ve(n)) return Ta(e, n, t);
  }
  return t;
}
function Ic(e, t, n, r, l, i, o, u, s) {
  return e = eu(n, r, !0, e, l, i, o, u, s), e.context = Tc(null), n = e.current, r = ce(), l = St(n), i = Je(r, l), i.callback = t ?? null, yt(n, i, l), e.current.lanes = l, mr(e, l, r), ye(e, r), e;
}
function Ol(e, t, n, r) {
  var l = t.current, i = ce(), o = St(l);
  return n = Tc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Je(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yt(l, t, o), e !== null && (Ae(e, l, o, i), Vr(e, l, o)), o;
}
function kl(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function ds(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function tu(e, t) {
  ds(e, t), (e = e.alternate) && ds(e, t);
}
function fp() {
  return null;
}
var zc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function nu(e) {
  this._internalRoot = e;
}
Al.prototype.render = nu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Ol(e, t, null, null);
};
Al.prototype.unmount = nu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Qt(function() {
      Ol(null, e, null, null);
    }), t[be] = null;
  }
};
function Al(e) {
  this._internalRoot = e;
}
Al.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = sa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++) ;
    ct.splice(n, 0, e), n === 0 && ca(e);
  }
};
function ru(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Fl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function ps() {
}
function dp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var f = kl(o);
        i.call(f);
      };
    }
    var o = Ic(t, r, e, 0, null, !1, !1, "", ps);
    return e._reactRootContainer = o, e[be] = o.current, lr(e.nodeType === 8 ? e.parentNode : e), Qt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var f = kl(s);
      u.call(f);
    };
  }
  var s = eu(e, 0, !1, null, null, !1, !1, "", ps);
  return e._reactRootContainer = s, e[be] = s.current, lr(e.nodeType === 8 ? e.parentNode : e), Qt(function() {
    Ol(t, s, n, r);
  }), s;
}
function Ul(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = kl(o);
        u.call(s);
      };
    }
    Ol(t, o, e, l);
  } else o = dp(n, t, e, l, r);
  return kl(o);
}
oa = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Fn(t.pendingLanes);
        n !== 0 && (Eo(t, n | 1), ye(t, K()), !(M & 6) && (En = K() + 500, Pt()));
      }
      break;
    case 13:
      Qt(function() {
        var r = et(e, 1);
        if (r !== null) {
          var l = ce();
          Ae(r, e, 1, l);
        }
      }), tu(e, 1);
  }
};
xo = function(e) {
  if (e.tag === 13) {
    var t = et(e, 134217728);
    if (t !== null) {
      var n = ce();
      Ae(t, e, 134217728, n);
    }
    tu(e, 134217728);
  }
};
ua = function(e) {
  if (e.tag === 13) {
    var t = St(e), n = et(e, t);
    if (n !== null) {
      var r = ce();
      Ae(n, e, t, r);
    }
    tu(e, t);
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
Ii = function(e, t, n) {
  switch (t) {
    case "input":
      if (xi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Tl(r);
            if (!l) throw Error(k(90));
            Hs(r), xi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Bs(e, n);
      break;
    case "select":
      t = n.value, t != null && cn(e, !!n.multiple, t, !1);
  }
};
Gs = Zo;
Zs = Qt;
var pp = { usingClientEntryPoint: !1, Events: [gr, nn, Tl, Ys, Xs, Zo] }, Mn = { findFiberByHostInstance: Rt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, mp = { bundleType: Mn.bundleType, version: Mn.version, rendererPackageName: Mn.rendererPackageName, rendererConfig: Mn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: nt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = bs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Mn.findFiberByHostInstance || fp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Or.isDisabled && Or.supportsFiber) try {
    _l = Or.inject(mp), Ve = Or;
  } catch {
  }
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pp;
Ce.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ru(t)) throw Error(k(200));
  return cp(e, t, null, n);
};
Ce.createRoot = function(e, t) {
  if (!ru(e)) throw Error(k(299));
  var n = !1, r = "", l = zc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = eu(e, 1, !1, null, null, n, !1, r, l), e[be] = t.current, lr(e.nodeType === 8 ? e.parentNode : e), new nu(t);
};
Ce.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = bs(t), e = e === null ? null : e.stateNode, e;
};
Ce.flushSync = function(e) {
  return Qt(e);
};
Ce.hydrate = function(e, t, n) {
  if (!Fl(t)) throw Error(k(200));
  return Ul(null, e, t, !0, n);
};
Ce.hydrateRoot = function(e, t, n) {
  if (!ru(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = zc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Ic(t, null, e, 1, n ?? null, l, !1, i, o), e[be] = t.current, lr(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Al(t);
};
Ce.render = function(e, t, n) {
  if (!Fl(t)) throw Error(k(200));
  return Ul(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function(e) {
  if (!Fl(e)) throw Error(k(40));
  return e._reactRootContainer ? (Qt(function() {
    Ul(null, null, e, !1, function() {
      e._reactRootContainer = null, e[be] = null;
    });
  }), !0) : !1;
};
Ce.unstable_batchedUpdates = Zo;
Ce.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Fl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ul(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function Rc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Rc);
    } catch (e) {
      console.error(e);
    }
}
Rc(), Rs.exports = Ce;
var hp = Rs.exports, ms = hp;
Gn.createRoot = ms.createRoot, Gn.hydrateRoot = ms.hydrateRoot;
const jc = (e) => Math.max(0, Math.floor(e)), Lc = (e, t) => jc(e * t), Mc = (e, t = 1) => jc(e - t), mi = (e) => Lc(e, 2 / 3), gp = (e) => Lc(e, 1 / 2), Ke = (e) => {
  e.getStack(e.statusId) > 0 && e.setStack(e.statusId, 0);
}, hi = (e) => {
  const t = e.getStack(e.statusId);
  t > 0 && e.setStack(e.statusId, Mc(t));
}, ke = [
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
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, mi(t)));
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
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, mi(t)));
    }
  },
  {
    id: "Bleeding",
    name: "出血",
    attribute: { stack: "stackBleeding", pending: "stackBleedingnext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || e.setStack(e.statusId, mi(t));
    }
  },
  {
    id: "Poise",
    name: "呼吸",
    attribute: { stack: "stackpoise", pending: "stackpoisenext" },
    hasPending: !0,
    onTurnEnd: (e) => hi(e)
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
    onTurnEnd: (e) => hi(e)
  },
  {
    id: "Bind",
    name: "束縛",
    attribute: { stack: "stackbind", pending: "stackbindnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "Paralysis",
    name: "麻痺",
    attribute: { stack: "stackParalysis", pending: "stackParalysisnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "Fear",
    name: "恐怖",
    attribute: { stack: "stackFear", pending: "stackFearnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "DamageUp",
    name: "ダメージ上昇",
    attribute: { stack: "stackDamageUp", pending: "stackDamageUpnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "DamageDown",
    name: "ダメージ減少",
    attribute: { stack: "stackDamageDown", pending: "stackDamageDownnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "PowerUp",
    name: "威力上昇",
    attribute: { stack: "stackPowerUp", pending: "stackPowerUpnext" },
    hasPending: !0,
    onTurnEnd: Ke
  },
  {
    id: "PowerDown",
    name: "威力減少",
    attribute: { stack: "stackPowerDown", pending: "stackPowerDownnext" },
    hasPending: !0,
    onTurnEnd: Ke
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
    onTurnEnd: Ke
  },
  {
    id: "Vulnerable",
    name: "脆弱",
    attribute: { stack: "stackVulnerable", pending: "stackVulnerablenext" },
    hasPending: !0,
    onTurnEnd: Ke
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
    onTurnEnd: (e) => hi(e)
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
    name: "濃密な煙",
    attribute: { stack: "stackSmokeGrand" }
  }
], vp = ke.map((e) => e.attribute.stack), yp = (e) => {
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
  const [e, t] = L.useState([]);
  return L.useEffect(() => {
    t(kp());
  }, []), e;
};
class Sp {
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
const ot = (e) => Math.max(0, Math.floor(e));
var oe;
class wp {
  constructor(t) {
    Nn(this, oe, /* @__PURE__ */ new Map());
    t && Object.entries(t).forEach(([n, r]) => {
      r && X(this, oe).set(n, {
        stack: ot(r.stack),
        pending: ot(r.pending)
      });
    });
  }
  getState(t) {
    const n = X(this, oe).get(t);
    return n ? { stack: n.stack, pending: n.pending } : { stack: 0, pending: 0 };
  }
  getStack(t) {
    var n;
    return ((n = X(this, oe).get(t)) == null ? void 0 : n.stack) ?? 0;
  }
  getPending(t) {
    var n;
    return ((n = X(this, oe).get(t)) == null ? void 0 : n.pending) ?? 0;
  }
  setState(t, n) {
    X(this, oe).set(t, {
      stack: ot(n.stack),
      pending: ot(n.pending)
    });
  }
  setStack(t, n) {
    const r = X(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.stack = ot(n), X(this, oe).set(t, r);
  }
  setPending(t, n) {
    const r = X(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.pending = ot(n), X(this, oe).set(t, r);
  }
  addStack(t, n) {
    const r = X(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.stack = ot(r.stack + n), X(this, oe).set(t, r);
  }
  addPending(t, n) {
    const r = X(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.pending = ot(r.pending + n), X(this, oe).set(t, r);
  }
}
oe = new WeakMap();
const ee = (e, t, n = 0) => {
  var i, o, u;
  const r = (u = (o = (i = e.system) == null ? void 0 : i.attributes) == null ? void 0 : o[t]) == null ? void 0 : u.value;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  if (typeof r == "boolean") return r ? 1 : 0;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, Ep = (e, t, n = 0) => {
  var i, o, u;
  const r = (u = (o = (i = e.system) == null ? void 0 : i.attributes) == null ? void 0 : o[t]) == null ? void 0 : u.max;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, xp = (e) => {
  const t = new wp();
  return ke.forEach((r) => {
    const l = r.attribute, i = ee(e, l.stack, 0), o = l.pending ? ee(e, l.pending, 0) : 0;
    t.setState(r.id, { stack: i, pending: o });
  }), new Sp({
    id: e.id ?? "",
    name: e.name,
    hp: ee(e, "hp", 0),
    maxHp: Ep(e, "hp", 0),
    barrier: ee(e, "barrier", 0),
    constitution: ee(e, "constitution", 0),
    san: ee(e, "san", 0),
    isPlayer: ee(e, "isPlayer", 0) > 0,
    directcheck: ee(e, "directcheck", 0) > 0,
    criticalcheck: ee(e, "criticalcheck", 0) > 0,
    resist: ee(e, "resist", 0),
    resistEnemy: ee(e, "resistEnemy", 0),
    confResist: ee(e, "confResist", 0),
    econfResistEnemy: ee(e, "econfResistEnemy", 0),
    doubleConstitution: ee(e, "doubleconstitution", 0) === 1,
    statuses: t,
    flags: {
      checkNk: ee(e, "checknk", 0) > 0,
      checkAnri: ee(e, "checkAnri", 0) > 0,
      checkHitan: ee(e, "checkhitan", 0) > 0
    }
  });
}, hs = (e) => {
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
class Ht {
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
    n && await n.update(hs(t));
  }
  async save(t) {
    await t.actor.update(hs(t.combatant));
  }
}
class Ac {
  constructor(t, n) {
    this.combatant = t, this.damage = n;
  }
  withStatus(t) {
    return {
      statusId: t,
      combatant: this.combatant,
      damage: this.damage,
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
    return this.combatant.statuses.getStack(t);
  }
  getPending(t) {
    return this.combatant.statuses.getPending(t);
  }
  setStack(t, n) {
    this.combatant.statuses.setStack(t, n);
  }
  setPending(t, n) {
    this.combatant.statuses.setPending(t, n);
  }
  addStack(t, n) {
    const r = this.combatant.statuses.getStack(t);
    this.setStack(t, r + n);
  }
  addPending(t, n) {
    const r = this.combatant.statuses.getPending(t);
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
const Cp = (e, t) => {
  const n = new Ac(e, t);
  ke.forEach((l) => {
    var i;
    (i = l.onDealDamage) == null || i.call(l, n.withStatus(l.id));
  });
}, _p = (e, t) => {
  const n = new Ac(e, t);
  ke.forEach((l) => {
    var i;
    (i = l.onTakeDamage) == null || i.call(l, n.withStatus(l.id));
  });
}, Pp = (e) => {
  const t = e.statuses.getStack("DamageUp"), n = e.statuses.getStack("DamageDown"), r = e.directcheck;
  return t * 10 - n * 10 + (r ? 50 : 0);
}, Np = (e, t) => {
  let n = 0, r = !1;
  e.criticalcheck && (n += 20);
  const i = e.statuses.getStack("Poise");
  if (i > 0) {
    const o = Math.min(i * 5, 100);
    t() * 100 < o && (n += 20, r = !0);
  }
  return { special: n, poiseCritical: r };
}, Fc = (e) => {
  const t = e.statuses.getStack("Protection"), n = e.statuses.getStack("Vulnerable");
  return t * 10 - n * 10;
}, Uc = (e) => {
  const t = e.isPlayer ? e.resist : e.resistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Dp = (e) => {
  const t = e.isPlayer ? e.confResist : e.econfResistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Tp = (e) => {
  const t = e.statuses.getStack("DamageUp"), n = e.statuses.getStack("DamageDown");
  return t * 10 - n * 10;
}, Ip = (e) => Fc(e), zp = (e) => Uc(e), Rp = (e, t = {}) => {
  const n = t.random ?? Math.random, r = Pp(e.attacker) + (e.attackerBonusNormal ?? 0), { special: l, poiseCritical: i } = Np(e.attacker, n), o = l + (e.attackerBonusSpecial ?? 0), u = Fc(e.receiver), s = Uc(e.receiver), f = Dp(e.receiver), h = (100 + r - u) / 100, m = (100 + o - s) / 100, p = (100 + o - f) / 100, S = e.baseDamage * Math.max(h, 0) * Math.max(m, 0), y = e.baseDamage * Math.max(h, 0) * Math.max(p, 0);
  return {
    attackerNormalPercentage: r,
    attackerSpecialPercentage: o,
    receiverNormalPercentage: u,
    receiverSpecialPercentage: s,
    receiverSpecialConfPercentage: f,
    normalRatio: h,
    specialRatio: m,
    specialConfRatio: p,
    dealDamage: S,
    dealConfDamage: y,
    poiseCritical: i
  };
}, jp = (e, t = {}) => {
  const n = e.attacker, r = Rp(e, t), l = e.receiver;
  let i = l.hp, o = l.barrier, u = l.constitution, s = l.san, f = l.statuses.getStack("Sink");
  const h = l.doubleConstitution, m = Math.ceil(r.dealDamage), p = Math.ceil(r.dealConfDamage);
  let S = 0, y = 0;
  o > 0 && m > 0 && (S = Math.min(o, m), o -= S);
  const w = Math.max(m - S, 0);
  w > 0 && (i -= w, y = w);
  let D = 0;
  if (p > 0) {
    const C = p * (h ? 2 : 1);
    u = Math.max(u - C, 0), D = C;
  }
  let a = 0;
  const c = l.statuses.getStack("Sink");
  if (c > 0) {
    let C = c;
    const N = Math.min(s, C);
    s -= N, C -= N, a += N, C > 0 && (i -= C, y += C), f = Math.floor(c / 2);
  }
  const d = {
    ...r,
    barrierAbsorbed: S,
    hpDamageApplied: y,
    confDamageApplied: D,
    sanDamageApplied: a,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: s
  };
  l.hp = i, l.setBarrier(o), l.setConstitution(u), l.setSan(s), l.setHp(i), l.statuses.setStack("Sink", f);
  const g = {
    baseDamage: e.baseDamage,
    normalRatio: r.normalRatio,
    specialRatio: r.specialRatio,
    specialConfRatio: r.specialConfRatio,
    dealDamage: r.dealDamage,
    dealConfDamage: r.dealConfDamage,
    hpDamageApplied: y,
    confDamageApplied: D,
    sanDamageApplied: a,
    barrierAbsorbed: S,
    poiseCritical: r.poiseCritical,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: s
  };
  return Cp(n, g), _p(l, g), { result: d, attacker: n, receiver: l };
}, Sl = {
  FRIENDLY: 1
}, Lp = (e) => {
  var t, n;
  return ((t = e.find((r) => r.disposition === Sl.FRIENDLY)) == null ? void 0 : t.actorId) ?? ((n = e[0]) == null ? void 0 : n.actorId) ?? "";
}, Mp = (e, t) => {
  var n, r;
  return ((n = e.find((l) => l.actorId !== t && l.disposition !== Sl.FRIENDLY)) == null ? void 0 : n.actorId) ?? ((r = e.find((l) => l.actorId !== t)) == null ? void 0 : r.actorId) ?? "";
}, Op = (e) => {
  const [t, n] = L.useState(""), [r, l] = L.useState(""), [i, o] = L.useState(""), [u, s] = L.useState("0"), [f, h] = L.useState("0"), [m, p] = L.useState(null), [S, y] = L.useState(!1), [w, D] = L.useState(null), [a, c] = L.useState(null), d = L.useMemo(() => {
    const E = /* @__PURE__ */ new Map();
    return e.forEach((x) => E.set(x.actorId, x)), E;
  }, [e]);
  L.useEffect(() => {
    if (!e.length) {
      t && n(""), r && l("");
      return;
    }
    const E = new Set(e.map((I) => I.actorId));
    let x = t;
    (!x || !E.has(x)) && (x = Lp(e));
    let j = r;
    (!j || !E.has(j) || j === x) && (j = Mp(e, x)), x !== t && n(x), j !== r && l(j);
  }, [e, t, r]), L.useEffect(() => {
    if (!t) {
      D(null);
      return;
    }
    try {
      const x = new Ht().loadByActorId(t);
      if (!x) {
        D(null);
        return;
      }
      D(x.combatant);
    } catch {
      D(null);
    }
  }, [t]), L.useEffect(() => {
    if (!r) {
      c(null);
      return;
    }
    try {
      const x = new Ht().loadByActorId(r);
      if (!x) {
        c(null);
        return;
      }
      c(x.combatant);
    } catch {
      c(null);
    }
  }, [r]);
  const g = L.useMemo(() => {
    if (!w) return null;
    const E = Number(u) || 0, x = Number(f) || 0;
    return {
      normal: Tp(w) + (w.directcheck ? 50 : 0) + E,
      special: (w.criticalcheck ? 20 : 0) + x
    };
  }, [w, u, f]), C = L.useMemo(() => a ? {
    normal: Ip(a),
    special: zp(a)
  } : null, [a]);
  return {
    attackerId: t,
    receiverId: r,
    baseDamage: i,
    bonusNormal: u,
    bonusSpecial: f,
    result: m,
    running: S,
    attackerPreview: g,
    receiverPreview: C,
    setAttackerId: n,
    setReceiverId: l,
    setBaseDamage: o,
    setBonusNormal: s,
    setBonusSpecial: h,
    run: async () => {
      var I, pe, rt, lt, Pn, yr;
      const E = Number(i);
      if (!Number.isFinite(E) || E <= 0) {
        (I = ui.notifications) == null || I.error("ダメージに正の数値を入力してください");
        return;
      }
      const x = t ? d.get(t) : void 0, j = r ? d.get(r) : void 0;
      if (!x || !j) {
        (pe = ui.notifications) == null || pe.error("攻撃者と防御者を選択してください");
        return;
      }
      if (t === r) {
        (rt = ui.notifications) == null || rt.error("攻撃者と防御者は別のキャラクターを選んでください");
        return;
      }
      try {
        y(!0);
        const Ue = new Ht(), Nt = Ue.loadByActorId(t), _ = Ue.loadByActorId(r);
        if (!Nt || !_) {
          (lt = ui.notifications) == null || lt.error("攻撃者または防御者のデータを取得できませんでした");
          return;
        }
        const T = Number(u) || 0, z = Number(f) || 0, { result: A, attacker: Y, receiver: Xt } = jp({
          attacker: Nt.combatant,
          receiver: _.combatant,
          baseDamage: E,
          attackerBonusNormal: T,
          attackerBonusSpecial: z
        });
        await Promise.all([
          Ue.saveActor(Y),
          Ue.saveActor(Xt)
        ]);
        const Qe = `
${x.name} → ${j.name}<br/>
基礎ダメージ: ${E}<br/>
HPダメージ: ${A.hpDamageApplied} (バリア吸収: ${A.barrierAbsorbed})<br/>
混乱ダメージ: ${A.confDamageApplied}<br/>
SANダメージ(沈潜): ${A.sanDamageApplied}<br/>
`;
        await ChatMessage.create({
          speaker: ChatMessage.getSpeaker({ actor: Nt.actor }),
          content: Qe
        }), p(A), (Pn = ui.notifications) == null || Pn.info(
          `${x.name} が ${j.name} にダメージを適用しました`
        );
      } catch (Ue) {
        console.error("[ponkotu-system] damage calc failed", Ue), (yr = ui.notifications) == null || yr.error("計算または適用に失敗しました。コンソールを確認してください。");
      } finally {
        y(!1);
      }
    }
  };
}, wl = (e) => e.name, Ap = [
  { value: "random:ally", label: "ランダム（味方）" },
  { value: "random:enemy", label: "ランダム（敵）" },
  { value: "random:all", label: "ランダム（全体）" }
], ut = (e) => Number.isFinite(e) ? e.toLocaleString() : "-", Fp = ({ result: e }) => /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage__result", children: [
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
    ut(e.hpDamageApplied),
    " （バリア吸収",
    " ",
    ut(e.barrierAbsorbed),
    "）"
  ] }),
  /* @__PURE__ */ v.jsxs("div", { children: [
    "耐性限界ダメージ: ",
    ut(e.confDamageApplied)
  ] }),
  /* @__PURE__ */ v.jsxs("div", { children: [
    "SANダメージ(沈潜): ",
    ut(e.sanDamageApplied)
  ] }),
  /* @__PURE__ */ v.jsxs("div", { children: [
    "残り HP ",
    ut(e.hpAfter),
    " / バリア",
    " ",
    ut(e.barrierAfter),
    " / CON",
    " ",
    ut(e.constitutionAfter),
    " / SAN",
    " ",
    ut(e.sanAfter)
  ] })
] }), Ar = (e) => e === 0 ? "±0%" : e > 0 ? `+${e}%` : `${e}%`, Up = ({ tokens: e }) => {
  const {
    attackerId: t,
    receiverId: n,
    baseDamage: r,
    bonusNormal: l,
    bonusSpecial: i,
    result: o,
    running: u,
    attackerPreview: s,
    receiverPreview: f,
    setAttackerId: h,
    setReceiverId: m,
    setBaseDamage: p,
    setBonusNormal: S,
    setBonusSpecial: y,
    run: w
  } = Op(e);
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ v.jsx("h3", { children: "ダメージ計算" }) }),
    /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label", children: [
        "攻撃者:",
        /* @__PURE__ */ v.jsxs("select", { value: t, onChange: (D) => h(D.target.value), children: [
          /* @__PURE__ */ v.jsx("option", { value: "", children: "選択してください" }),
          e.map((D) => /* @__PURE__ */ v.jsx("option", { value: D.actorId, children: wl(D) }, D.actorId))
        ] }),
        s !== null && /* @__PURE__ */ v.jsxs("span", { className: "ponkotu-damage__preview", children: [
          "通常 ",
          Ar(s.normal),
          " / 特殊 ",
          Ar(s.special)
        ] })
      ] }) }),
      /* @__PURE__ */ v.jsx("div", { children: /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label", children: [
        "防御者:",
        /* @__PURE__ */ v.jsxs("select", { value: n, onChange: (D) => m(D.target.value), children: [
          /* @__PURE__ */ v.jsx("option", { value: "", children: "選択してください" }),
          e.map((D) => /* @__PURE__ */ v.jsx("option", { value: D.actorId, children: wl(D) }, D.actorId))
        ] }),
        f !== null && /* @__PURE__ */ v.jsxs("span", { className: "ponkotu-damage__preview", children: [
          "通常 ",
          Ar(f.normal),
          " / 特殊 ",
          Ar(f.special)
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
            onChange: (D) => S(D.target.value),
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
            value: i,
            onChange: (D) => y(D.target.value),
            className: "ponkotu-damage__bonus-input"
          }
        ),
        "%"
      ] })
    ] }),
    /* @__PURE__ */ v.jsxs("label", { className: "ponkotu-damage__label", children: [
      "基礎ダメージ",
      /* @__PURE__ */ v.jsx(
        "input",
        {
          type: "number",
          value: r,
          onChange: (D) => p(D.target.value),
          placeholder: "例: 12"
        }
      )
    ] }),
    /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ v.jsx("button", { onClick: w, disabled: u || e.length < 2, children: u ? "計算中..." : "計算して適用" }),
      e.length < 2 && /* @__PURE__ */ v.jsx("span", { className: "ponkotu-damage__hint", children: "※ トークンが2体以上必要です" })
    ] }),
    o && /* @__PURE__ */ v.jsx(Fp, { result: o })
  ] });
};
class gs {
  constructor(t) {
    this.combatant = t;
  }
  withStatus(t) {
    return {
      statusId: t,
      combatant: this.combatant,
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
    return this.combatant.statuses.getStack(t);
  }
  getPending(t) {
    return this.combatant.statuses.getPending(t);
  }
  setStack(t, n) {
    this.combatant.statuses.setStack(t, n);
  }
  setPending(t, n) {
    this.combatant.statuses.setPending(t, n);
  }
  addStack(t, n) {
    const r = this.combatant.statuses.getStack(t);
    this.setStack(t, r + n);
  }
  addPending(t, n) {
    const r = this.combatant.statuses.getPending(t);
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
class vs {
  static turnStart(t) {
    const n = new gs(t), r = ke;
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
    const n = new gs(t);
    ke.forEach((l) => {
      var i;
      (i = l.onTurnEnd) == null || i.call(l, n.withStatus(l.id));
    }), n.setBarrier(0);
  }
}
const ys = (e) => Array.from(new Set(e.map((t) => t.actorId).filter((t) => t))), Hp = (e) => {
  const [t, n] = L.useState(!1), r = async () => {
    var u, s, f;
    const o = ys(e);
    if (!o.length)
      return (u = ui.notifications) == null || u.error("ターン開始処理の対象が見つかりません"), 0;
    try {
      const h = new Ht(), m = o.map((p) => h.loadByActorId(p)).filter((p) => !!p);
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
      const h = new Ht(), m = o.map((p) => h.loadByActorId(p)).filter((p) => !!p);
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
        const u = await l(), s = await r(), f = u > 0 ? u : s;
        f > 0 && ((o = ui.notifications) == null || o.info(`ターン処理を${f}体に適用しました`));
      } finally {
        n(!1);
      }
  } };
}, $p = ({ tokens: e }) => {
  const { turnRunning: t, runTurnProcess: n } = Hp(e);
  return /* @__PURE__ */ v.jsxs(v.Fragment, { children: [
    /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ v.jsx("h3", { style: { margin: "8px 0" }, children: "ターン処理" }) }),
    /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ v.jsx("button", { onClick: n, disabled: t || e.length < 1, children: t ? "処理中..." : "ターン処理(終了→開始)" }) })
  ] });
}, Bp = () => {
  const e = Oc();
  return /* @__PURE__ */ v.jsxs("div", { className: "ponkotu-damage", children: [
    /* @__PURE__ */ v.jsx(Up, { tokens: e }),
    /* @__PURE__ */ v.jsx($p, { tokens: e })
  ] });
}, Vp = "ponkotu-system";
var Mt;
class Wp extends Application {
  constructor() {
    super(...arguments);
    Nn(this, Mt, null);
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
    Tt(this, Mt, Gn.createRoot(r)), X(this, Mt).render(/* @__PURE__ */ v.jsx(Bp, {}));
  }
  async close(n) {
    var r;
    return (r = X(this, Mt)) == null || r.unmount(), Tt(this, Mt, null), super.close(n);
  }
}
Mt = new WeakMap();
const Qp = ({ onSubmit: e }) => {
  const [t, n] = L.useState(""), [r, l] = L.useState(""), i = L.useMemo(() => t.trim().length === 0, [t]), o = (u) => {
    u.preventDefault();
    const s = { name: t.trim(), note: r.trim() };
    console.log("[ponkotu-system] SimpleForm submit", s), e == null || e(s), l("");
  };
  return /* @__PURE__ */ v.jsxs("form", { onSubmit: o, className: "ponkotu-form", children: [
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
    /* @__PURE__ */ v.jsx("div", { className: "ponkotu-form__footer", children: /* @__PURE__ */ v.jsx("button", { type: "submit", disabled: i, children: "送信" }) })
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
    Nn(this, Ot, null);
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
    Tt(this, Ot, Gn.createRoot(r)), X(this, Ot).render(
      /* @__PURE__ */ v.jsx(
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
    return (r = X(this, Ot)) == null || r.unmount(), Tt(this, Ot, null), super.close(n);
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
let El = null;
const Jp = async (e) => {
  const t = new Ht();
  return Zp(t, e);
}, qp = (e) => {
  El = socketlib.registerModule(e), El.register("applyStatusStack", Jp);
}, bp = (e) => {
  if (!El)
    throw new Error("socketlib が初期化されていません");
  return El.executeAsGM("applyStatusStack", e);
}, em = ke.map((e) => e.id), tm = () => em[0] ?? "Burned", gi = (e) => e === "random:ally" || e === "random:enemy" || e === "random:all", nm = (e, t) => e === "random:all" ? t : e === "random:ally" ? t.filter((n) => n.disposition === Sl.FRIENDLY) : t.filter((n) => n.disposition !== Sl.FRIENDLY), rm = (e) => {
  const [t, n] = L.useState(""), [r, l] = L.useState(tm), [i, o] = L.useState("stack"), [u, s] = L.useState("1"), [f, h] = L.useState(!1), m = ke.find(
    (y) => y.id === r
  ), p = !!(m && "pending" in m.attribute && m.attribute.pending);
  return L.useEffect(() => {
    var w;
    if (!e.length) {
      t && !gi(t) && n("");
      return;
    }
    const y = new Set(e.map((D) => D.actorId));
    (!t || !gi(t) && !y.has(t)) && n(((w = e[0]) == null ? void 0 : w.actorId) ?? "");
  }, [e, t]), L.useEffect(() => {
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
      var D, a, c, d, g, C, N;
      if (f) return;
      const y = Number(u);
      if (!Number.isInteger(y) || y < 1) {
        (D = ui.notifications) == null || D.error("スタック数には1以上の整数を入力してください");
        return;
      }
      let w;
      if (gi(t)) {
        const E = nm(t, e);
        if (E.length === 0) {
          (a = ui.notifications) == null || a.error("ランダム対象の候補が0件です。対象を選び直してください。");
          return;
        }
        w = E[Math.floor(Math.random() * E.length)].actorId;
      } else
        w = t;
      if (!w) {
        (c = ui.notifications) == null || c.error("状態異常を付与する対象を選択してください");
        return;
      }
      try {
        h(!0);
        const E = await bp({
          actorId: w,
          statusId: r,
          stackDelta: y,
          target: i
        }), x = ((d = ke.find((I) => I.id === E.statusId)) == null ? void 0 : d.name) ?? E.statusId, j = E.target === "pending" ? "next" : "現在";
        (g = ui.notifications) == null || g.info(
          `${E.actorName} に ${E.statusId}(${j}) を ${y} 付与しました (${E.before}→${E.after})`
        ), await ChatMessage.create({
          speaker: { alias: ((C = game.user) == null ? void 0 : C.name) ?? "不明" },
          content: `${E.actorName} に ${x}（${j}）を ${y} 付与しました（${E.before} → ${E.after}）`
        });
      } catch (E) {
        console.error("[ponkotu-system] apply status failed", E), (N = ui.notifications) == null || N.error("状態異常の付与に失敗しました。コンソールを確認してください。");
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
  const [e, t] = L.useState(""), [n, r] = L.useState(!1), [l, i] = L.useState([]);
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
      const f = new Ht().loadByActorId(e);
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
    toggleLibrary: D
  } = im();
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
              e.map((a) => /* @__PURE__ */ v.jsx("option", { value: a.actorId, children: wl(a) }, `status-target-${a.actorId}`)),
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
            children: ke.map((a) => /* @__PURE__ */ v.jsx("option", { value: a.id, children: a.name }, a.id))
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
          value: i,
          onChange: (a) => h(a.target.value),
          placeholder: "例: 3"
        }
      )
    ] }),
    /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ v.jsx("button", { onClick: m, disabled: o || e.length < 1, children: o ? "付与中..." : "状態異常を付与" }) }),
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
              e.map((a) => /* @__PURE__ */ v.jsx("option", { value: a.actorId, children: wl(a) }, `library-target-${a.actorId}`))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ v.jsx("button", { disabled: !p, onClick: D, children: S ? "閉じる" : "表示" })
    ] }),
    S && /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage__row", style: { flexDirection: "column" }, children: y.length === 0 ? /* @__PURE__ */ v.jsx("span", { children: "状態異常なし" }) : /* @__PURE__ */ v.jsxs("table", { style: { fontSize: "0.9em", width: "100%" }, children: [
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
  return /* @__PURE__ */ v.jsx("div", { className: "ponkotu-damage", children: /* @__PURE__ */ v.jsx(om, { tokens: e }) });
}, sm = "ponkotu-system";
var At;
class am extends Application {
  constructor() {
    super(...arguments);
    Nn(this, At, null);
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
    Tt(this, At, Gn.createRoot(r)), X(this, At).render(/* @__PURE__ */ v.jsx(um, {}));
  }
  async close(n) {
    var r;
    return (r = X(this, At)) == null || r.unmount(), Tt(this, At, null), super.close(n);
  }
}
At = new WeakMap();
const xl = "ponkotu-system", Zt = (...e) => console.log(`[${xl}]`, ...e), Hc = () => new Xp().render(!0), $c = () => new Wp().render(!0), Bc = () => new am().render(!0), Ss = () => {
  var n;
  const e = (n = game.modules) == null ? void 0 : n.get(xl);
  if (!e) {
    console.warn(`[${xl}] game.modules からモジュールを取得できませんでした`);
    return;
  }
  const t = e;
  t.api || (t.api = {}), t.api.showReactForm = Hc, t.api.showDamageCalc = $c, t.api.showStatusApply = Bc, Zt("API を登録しました", t.api);
}, cm = () => {
  Zt("ES module loaded"), Hooks.once("ready", () => {
    Zt("Hooks.once ready fired"), Ss(), globalThis.ponkotuSystem = { showReactForm: Hc, showDamageCalc: $c, showStatusApply: Bc }, Zt("React フォーム API を初期化しました");
  }), Hooks.once("init", () => {
    Zt("Hooks.once init fired"), Ss();
  }), Hooks.once("socketlib.ready", () => {
    Zt("Hooks.once socketlib.ready fired"), qp(xl);
  });
};
cm();
export {
  $c as showDamageCalc,
  Hc as showReactForm,
  Bc as showStatusApply
};
