var nu = (e) => {
  throw TypeError(e);
};
var ru = (e, t, n) => t.has(e) || nu("Cannot " + n);
var Y = (e, t, n) => (ru(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Cn = (e, t, n) => t.has(e) ? nu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Nt = (e, t, n, r) => (ru(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var ks = { exports: {} }, yl = {}, Ss = { exports: {} }, R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar = Symbol.for("react.element"), Hc = Symbol.for("react.portal"), $c = Symbol.for("react.fragment"), Bc = Symbol.for("react.strict_mode"), Vc = Symbol.for("react.profiler"), Wc = Symbol.for("react.provider"), Qc = Symbol.for("react.context"), Kc = Symbol.for("react.forward_ref"), Yc = Symbol.for("react.suspense"), Xc = Symbol.for("react.memo"), Gc = Symbol.for("react.lazy"), lu = Symbol.iterator;
function Zc(e) {
  return e === null || typeof e != "object" ? null : (e = lu && e[lu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var ws = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, Es = Object.assign, Cs = {};
function kn(e, t, n) {
  this.props = e, this.context = t, this.refs = Cs, this.updater = n || ws;
}
kn.prototype.isReactComponent = {};
kn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
kn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function xs() {
}
xs.prototype = kn.prototype;
function oo(e, t, n) {
  this.props = e, this.context = t, this.refs = Cs, this.updater = n || ws;
}
var uo = oo.prototype = new xs();
uo.constructor = oo;
Es(uo, kn.prototype);
uo.isPureReactComponent = !0;
var iu = Array.isArray, _s = Object.prototype.hasOwnProperty, so = { current: null }, Ps = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ns(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) _s.call(t, r) && !Ps.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: ar, type: e, key: i, ref: o, props: l, _owner: so.current };
}
function Jc(e, t) {
  return { $$typeof: ar, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ao(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ar;
}
function qc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var ou = /\/+/g;
function Fl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? qc("" + e.key) : t.toString(36);
}
function Lr(e, t, n, r, l) {
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
        case Hc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Fl(o, 0) : r, iu(l) ? (n = "", e != null && (n = e.replace(ou, "$&/") + "/"), Lr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (ao(l) && (l = Jc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(ou, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", iu(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Fl(i, u);
    o += Lr(i, t, n, s, l);
  }
  else if (s = Zc(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Fl(i, u++), o += Lr(i, t, n, s, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function gr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Lr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function bc(e) {
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
var fe = { current: null }, Mr = { transition: null }, ef = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: Mr, ReactCurrentOwner: so };
function Ts() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = { map: gr, forEach: function(e, t, n) {
  gr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return gr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return gr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ao(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
R.Component = kn;
R.Fragment = $c;
R.Profiler = Vc;
R.PureComponent = oo;
R.StrictMode = Bc;
R.Suspense = Yc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ef;
R.act = Ts;
R.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = Es({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = so.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) _s.call(t, s) && !Ps.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: ar, type: e.type, key: l, ref: i, props: r, _owner: o };
};
R.createContext = function(e) {
  return e = { $$typeof: Qc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Wc, _context: e }, e.Consumer = e;
};
R.createElement = Ns;
R.createFactory = function(e) {
  var t = Ns.bind(null, e);
  return t.type = e, t;
};
R.createRef = function() {
  return { current: null };
};
R.forwardRef = function(e) {
  return { $$typeof: Kc, render: e };
};
R.isValidElement = ao;
R.lazy = function(e) {
  return { $$typeof: Gc, _payload: { _status: -1, _result: e }, _init: bc };
};
R.memo = function(e, t) {
  return { $$typeof: Xc, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function(e) {
  var t = Mr.transition;
  Mr.transition = {};
  try {
    e();
  } finally {
    Mr.transition = t;
  }
};
R.unstable_act = Ts;
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
Ss.exports = R;
var W = Ss.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tf = W, nf = Symbol.for("react.element"), rf = Symbol.for("react.fragment"), lf = Object.prototype.hasOwnProperty, of = tf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, uf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ds(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) lf.call(t, r) && !uf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: nf, type: e, key: i, ref: o, props: l, _owner: of.current };
}
yl.Fragment = rf;
yl.jsx = Ds;
yl.jsxs = Ds;
ks.exports = yl;
var x = ks.exports, Qn = {}, Is = { exports: {} }, xe = {}, zs = { exports: {} }, Rs = {};
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
  function t(P, T) {
    var z = P.length;
    P.push(T);
    e: for (; 0 < z; ) {
      var Q = z - 1 >>> 1, J = P[Q];
      if (0 < l(J, T)) P[Q] = T, P[z] = J, z = Q;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var T = P[0], z = P.pop();
    if (z !== T) {
      P[0] = z;
      e: for (var Q = 0, J = P.length, mr = J >>> 1; Q < mr; ) {
        var _t = 2 * (Q + 1) - 1, Ol = P[_t], Pt = _t + 1, hr = P[Pt];
        if (0 > l(Ol, z)) Pt < J && 0 > l(hr, Ol) ? (P[Q] = hr, P[Pt] = z, Q = Pt) : (P[Q] = Ol, P[_t] = z, Q = _t);
        else if (Pt < J && 0 > l(hr, z)) P[Q] = hr, P[Pt] = z, Q = Pt;
        else break e;
      }
    }
    return T;
  }
  function l(P, T) {
    var z = P.sortIndex - T.sortIndex;
    return z !== 0 ? z : P.id - T.id;
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
  var s = [], c = [], m = 1, h = null, p = 3, y = !1, g = !1, S = !1, I = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(P) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= P) r(c), T.sortIndex = T.expirationTime, t(s, T);
      else break;
      T = n(c);
    }
  }
  function v(P) {
    if (S = !1, d(P), !g) if (n(s) !== null) g = !0, Ml(w);
    else {
      var T = n(c);
      T !== null && jl(v, T.startTime - P);
    }
  }
  function w(P, T) {
    g = !1, S && (S = !1, f(N), N = -1), y = !0;
    var z = p;
    try {
      for (d(T), h = n(s); h !== null && (!(h.expirationTime > T) || P && !ye()); ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          h.callback = null, p = h.priorityLevel;
          var J = Q(h.expirationTime <= T);
          T = e.unstable_now(), typeof J == "function" ? h.callback = J : h === n(s) && r(s), d(T);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var mr = !0;
      else {
        var _t = n(c);
        _t !== null && jl(v, _t.startTime - T), mr = !1;
      }
      return mr;
    } finally {
      h = null, p = z, y = !1;
    }
  }
  var C = !1, E = null, N = -1, M = 5, D = -1;
  function ye() {
    return !(e.unstable_now() - D < M);
  }
  function xt() {
    if (E !== null) {
      var P = e.unstable_now();
      D = P;
      var T = !0;
      try {
        T = E(!0, P);
      } finally {
        T ? En() : (C = !1, E = null);
      }
    } else C = !1;
  }
  var En;
  if (typeof a == "function") En = function() {
    a(xt);
  };
  else if (typeof MessageChannel < "u") {
    var tu = new MessageChannel(), Uc = tu.port2;
    tu.port1.onmessage = xt, En = function() {
      Uc.postMessage(null);
    };
  } else En = function() {
    I(xt, 0);
  };
  function Ml(P) {
    E = P, C || (C = !0, En());
  }
  function jl(P, T) {
    N = I(function() {
      P(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    g || y || (g = !0, Ml(w));
  }, e.unstable_forceFrameRate = function(P) {
    0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < P ? Math.floor(1e3 / P) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(s);
  }, e.unstable_next = function(P) {
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
      return P();
    } finally {
      p = z;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, T) {
    switch (P) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        P = 3;
    }
    var z = p;
    p = P;
    try {
      return T();
    } finally {
      p = z;
    }
  }, e.unstable_scheduleCallback = function(P, T, z) {
    var Q = e.unstable_now();
    switch (typeof z == "object" && z !== null ? (z = z.delay, z = typeof z == "number" && 0 < z ? Q + z : Q) : z = Q, P) {
      case 1:
        var J = -1;
        break;
      case 2:
        J = 250;
        break;
      case 5:
        J = 1073741823;
        break;
      case 4:
        J = 1e4;
        break;
      default:
        J = 5e3;
    }
    return J = z + J, P = { id: m++, callback: T, priorityLevel: P, startTime: z, expirationTime: J, sortIndex: -1 }, z > Q ? (P.sortIndex = z, t(c, P), n(s) === null && P === n(c) && (S ? (f(N), N = -1) : S = !0, jl(v, z - Q))) : (P.sortIndex = J, t(s, P), g || y || (g = !0, Ml(w))), P;
  }, e.unstable_shouldYield = ye, e.unstable_wrapCallback = function(P) {
    var T = p;
    return function() {
      var z = p;
      p = T;
      try {
        return P.apply(this, arguments);
      } finally {
        p = z;
      }
    };
  };
})(Rs);
zs.exports = Rs;
var sf = zs.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var af = W, Ee = sf;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ls = /* @__PURE__ */ new Set(), Kn = {};
function Vt(e, t) {
  dn(e, t), dn(e + "Capture", t);
}
function dn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Ls.add(t[e]);
}
var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), pi = Object.prototype.hasOwnProperty, cf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, uu = {}, su = {};
function ff(e) {
  return pi.call(su, e) ? !0 : pi.call(uu, e) ? !1 : cf.test(e) ? su[e] = !0 : (uu[e] = !0, !1);
}
function df(e, t, n, r) {
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
function pf(e, t, n, r) {
  if (t === null || typeof t > "u" || df(e, t, n, r)) return !0;
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
var co = /[\-:]([a-z])/g;
function fo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    co,
    fo
  );
  re[t] = new de(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(co, fo);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(co, fo);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function po(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (pf(t, n, l, r) && (n = null), r || l === null ? ff(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vr = Symbol.for("react.element"), Yt = Symbol.for("react.portal"), Xt = Symbol.for("react.fragment"), mo = Symbol.for("react.strict_mode"), mi = Symbol.for("react.profiler"), Ms = Symbol.for("react.provider"), js = Symbol.for("react.context"), ho = Symbol.for("react.forward_ref"), hi = Symbol.for("react.suspense"), gi = Symbol.for("react.suspense_list"), go = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), Os = Symbol.for("react.offscreen"), au = Symbol.iterator;
function xn(e) {
  return e === null || typeof e != "object" ? null : (e = au && e[au] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, Al;
function Rn(e) {
  if (Al === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Al = t && t[1] || "";
  }
  return `
` + Al + e;
}
var Ul = !1;
function Hl(e, t) {
  if (!e || Ul) return "";
  Ul = !0;
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
    Ul = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Rn(e) : "";
}
function mf(e) {
  switch (e.tag) {
    case 5:
      return Rn(e.type);
    case 16:
      return Rn("Lazy");
    case 13:
      return Rn("Suspense");
    case 19:
      return Rn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Hl(e.type, !1), e;
    case 11:
      return e = Hl(e.type.render, !1), e;
    case 1:
      return e = Hl(e.type, !0), e;
    default:
      return "";
  }
}
function vi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Xt:
      return "Fragment";
    case Yt:
      return "Portal";
    case mi:
      return "Profiler";
    case mo:
      return "StrictMode";
    case hi:
      return "Suspense";
    case gi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case js:
      return (e.displayName || "Context") + ".Consumer";
    case Ms:
      return (e._context.displayName || "Context") + ".Provider";
    case ho:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case go:
      return t = e.displayName || null, t !== null ? t : vi(e.type) || "Memo";
    case lt:
      t = e._payload, e = e._init;
      try {
        return vi(e(t));
      } catch {
      }
  }
  return null;
}
function hf(e) {
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
      return vi(t);
    case 8:
      return t === mo ? "StrictMode" : "Mode";
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
function Fs(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function gf(e) {
  var t = Fs(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function yr(e) {
  e._valueTracker || (e._valueTracker = gf(e));
}
function As(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Fs(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Qr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function yi(e, t) {
  var n = t.checked;
  return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function cu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = kt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Us(e, t) {
  t = t.checked, t != null && po(e, "checked", t, !1);
}
function ki(e, t) {
  Us(e, t);
  var n = kt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Si(e, t.type, n) : t.hasOwnProperty("defaultValue") && Si(e, t.type, kt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function fu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Si(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ln = Array.isArray;
function on(e, t, n, r) {
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
function wi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function du(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (Ln(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: kt(n) };
}
function Hs(e, t) {
  var n = kt(t.value), r = kt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function pu(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function $s(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Ei(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? $s(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var kr, Bs = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
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
var On = {
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
}, vf = ["Webkit", "ms", "Moz", "O"];
Object.keys(On).forEach(function(e) {
  vf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), On[t] = On[e];
  });
});
function Vs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px";
}
function Ws(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Vs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var yf = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ci(e, t) {
  if (t) {
    if (yf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function xi(e, t) {
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
var _i = null;
function vo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Pi = null, un = null, sn = null;
function mu(e) {
  if (e = dr(e)) {
    if (typeof Pi != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = Cl(t), Pi(e.stateNode, e.type, t));
  }
}
function Qs(e) {
  un ? sn ? sn.push(e) : sn = [e] : un = e;
}
function Ks() {
  if (un) {
    var e = un, t = sn;
    if (sn = un = null, mu(e), t) for (e = 0; e < t.length; e++) mu(t[e]);
  }
}
function Ys(e, t) {
  return e(t);
}
function Xs() {
}
var $l = !1;
function Gs(e, t, n) {
  if ($l) return e(t, n);
  $l = !0;
  try {
    return Ys(e, t, n);
  } finally {
    $l = !1, (un !== null || sn !== null) && (Xs(), Ks());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Cl(n);
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
var Ni = !1;
if (Ze) try {
  var _n = {};
  Object.defineProperty(_n, "passive", { get: function() {
    Ni = !0;
  } }), window.addEventListener("test", _n, _n), window.removeEventListener("test", _n, _n);
} catch {
  Ni = !1;
}
function kf(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Fn = !1, Kr = null, Yr = !1, Ti = null, Sf = { onError: function(e) {
  Fn = !0, Kr = e;
} };
function wf(e, t, n, r, l, i, o, u, s) {
  Fn = !1, Kr = null, kf.apply(Sf, arguments);
}
function Ef(e, t, n, r, l, i, o, u, s) {
  if (wf.apply(this, arguments), Fn) {
    if (Fn) {
      var c = Kr;
      Fn = !1, Kr = null;
    } else throw Error(k(198));
    Yr || (Yr = !0, Ti = c);
  }
}
function Wt(e) {
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
function Zs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function hu(e) {
  if (Wt(e) !== e) throw Error(k(188));
}
function Cf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Wt(e), t === null) throw Error(k(188));
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
        if (i === n) return hu(l), e;
        if (i === r) return hu(l), t;
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
function Js(e) {
  return e = Cf(e), e !== null ? qs(e) : null;
}
function qs(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = qs(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var bs = Ee.unstable_scheduleCallback, gu = Ee.unstable_cancelCallback, xf = Ee.unstable_shouldYield, _f = Ee.unstable_requestPaint, K = Ee.unstable_now, Pf = Ee.unstable_getCurrentPriorityLevel, yo = Ee.unstable_ImmediatePriority, ea = Ee.unstable_UserBlockingPriority, Xr = Ee.unstable_NormalPriority, Nf = Ee.unstable_LowPriority, ta = Ee.unstable_IdlePriority, kl = null, Be = null;
function Tf(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function") try {
    Be.onCommitFiberRoot(kl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Oe = Math.clz32 ? Math.clz32 : zf, Df = Math.log, If = Math.LN2;
function zf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Df(e) / If | 0) | 0;
}
var Sr = 64, wr = 4194304;
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
function Gr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = Mn(u) : (i &= o, i !== 0 && (r = Mn(i)));
  } else o = n & ~l, o !== 0 ? r = Mn(o) : i !== 0 && (r = Mn(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Oe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Rf(e, t) {
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
function Lf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Oe(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = Rf(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Di(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function na() {
  var e = Sr;
  return Sr <<= 1, !(Sr & 4194240) && (Sr = 64), e;
}
function Bl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n;
}
function Mf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function ko(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var j = 0;
function ra(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var la, So, ia, oa, ua, Ii = !1, Er = [], ft = null, dt = null, pt = null, Gn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map(), ot = [], jf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function vu(e, t) {
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
function Pn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = dr(t), t !== null && So(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Of(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ft = Pn(ft, e, t, n, r, l), !0;
    case "dragenter":
      return dt = Pn(dt, e, t, n, r, l), !0;
    case "mouseover":
      return pt = Pn(pt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Gn.set(i, Pn(Gn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Zn.set(i, Pn(Zn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function sa(e) {
  var t = It(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Zs(n), t !== null) {
          e.blockedOn = t, ua(e.priority, function() {
            ia(n);
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
    var n = zi(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      _i = r, n.target.dispatchEvent(r), _i = null;
    } else return t = dr(n), t !== null && So(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function yu(e, t, n) {
  jr(e) && n.delete(t);
}
function Ff() {
  Ii = !1, ft !== null && jr(ft) && (ft = null), dt !== null && jr(dt) && (dt = null), pt !== null && jr(pt) && (pt = null), Gn.forEach(yu), Zn.forEach(yu);
}
function Nn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ii || (Ii = !0, Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Ff)));
}
function Jn(e) {
  function t(l) {
    return Nn(l, e);
  }
  if (0 < Er.length) {
    Nn(Er[0], e);
    for (var n = 1; n < Er.length; n++) {
      var r = Er[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ft !== null && Nn(ft, e), dt !== null && Nn(dt, e), pt !== null && Nn(pt, e), Gn.forEach(t), Zn.forEach(t), n = 0; n < ot.length; n++) r = ot[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ot.length && (n = ot[0], n.blockedOn === null); ) sa(n), n.blockedOn === null && ot.shift();
}
var an = et.ReactCurrentBatchConfig, Zr = !0;
function Af(e, t, n, r) {
  var l = j, i = an.transition;
  an.transition = null;
  try {
    j = 1, wo(e, t, n, r);
  } finally {
    j = l, an.transition = i;
  }
}
function Uf(e, t, n, r) {
  var l = j, i = an.transition;
  an.transition = null;
  try {
    j = 4, wo(e, t, n, r);
  } finally {
    j = l, an.transition = i;
  }
}
function wo(e, t, n, r) {
  if (Zr) {
    var l = zi(e, t, n, r);
    if (l === null) ql(e, t, r, Jr, n), vu(e, r);
    else if (Of(l, e, t, n, r)) r.stopPropagation();
    else if (vu(e, r), t & 4 && -1 < jf.indexOf(e)) {
      for (; l !== null; ) {
        var i = dr(l);
        if (i !== null && la(i), i = zi(e, t, n, r), i === null && ql(e, t, r, Jr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else ql(e, t, r, null, n);
  }
}
var Jr = null;
function zi(e, t, n, r) {
  if (Jr = null, e = vo(r), e = It(e), e !== null) if (t = Wt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Zs(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Jr = e, null;
}
function aa(e) {
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
      switch (Pf()) {
        case yo:
          return 1;
        case ea:
          return 4;
        case Xr:
        case Nf:
          return 16;
        case ta:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var st = null, Eo = null, Or = null;
function ca() {
  if (Or) return Or;
  var e, t = Eo, n = t.length, r, l = "value" in st ? st.value : st.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Or = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Fr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Cr() {
  return !0;
}
function ku() {
  return !1;
}
function _e(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Cr : ku, this.isPropagationStopped = ku, this;
  }
  return B(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Cr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Cr);
  }, persist: function() {
  }, isPersistent: Cr }), t;
}
var Sn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Co = _e(Sn), fr = B({}, Sn, { view: 0, detail: 0 }), Hf = _e(fr), Vl, Wl, Tn, Sl = B({}, fr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: xo, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Tn && (Tn && e.type === "mousemove" ? (Vl = e.screenX - Tn.screenX, Wl = e.screenY - Tn.screenY) : Wl = Vl = 0, Tn = e), Vl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Wl;
} }), Su = _e(Sl), $f = B({}, Sl, { dataTransfer: 0 }), Bf = _e($f), Vf = B({}, fr, { relatedTarget: 0 }), Ql = _e(Vf), Wf = B({}, Sn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Qf = _e(Wf), Kf = B({}, Sn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Yf = _e(Kf), Xf = B({}, Sn, { data: 0 }), wu = _e(Xf), Gf = {
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
}, Zf = {
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
}, Jf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function qf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Jf[e]) ? !!t[e] : !1;
}
function xo() {
  return qf;
}
var bf = B({}, fr, { key: function(e) {
  if (e.key) {
    var t = Gf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Fr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: xo, charCode: function(e) {
  return e.type === "keypress" ? Fr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Fr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), ed = _e(bf), td = B({}, Sl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Eu = _e(td), nd = B({}, fr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: xo }), rd = _e(nd), ld = B({}, Sn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), id = _e(ld), od = B({}, Sl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), ud = _e(od), sd = [9, 13, 27, 32], _o = Ze && "CompositionEvent" in window, An = null;
Ze && "documentMode" in document && (An = document.documentMode);
var ad = Ze && "TextEvent" in window && !An, fa = Ze && (!_o || An && 8 < An && 11 >= An), Cu = " ", xu = !1;
function da(e, t) {
  switch (e) {
    case "keyup":
      return sd.indexOf(t.keyCode) !== -1;
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
function pa(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Gt = !1;
function cd(e, t) {
  switch (e) {
    case "compositionend":
      return pa(t);
    case "keypress":
      return t.which !== 32 ? null : (xu = !0, Cu);
    case "textInput":
      return e = t.data, e === Cu && xu ? null : e;
    default:
      return null;
  }
}
function fd(e, t) {
  if (Gt) return e === "compositionend" || !_o && da(e, t) ? (e = ca(), Or = Eo = st = null, Gt = !1, e) : null;
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
      return fa && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var dd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function _u(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!dd[e.type] : t === "textarea";
}
function ma(e, t, n, r) {
  Qs(r), t = qr(t, "onChange"), 0 < t.length && (n = new Co("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Un = null, qn = null;
function pd(e) {
  _a(e, 0);
}
function wl(e) {
  var t = qt(e);
  if (As(t)) return e;
}
function md(e, t) {
  if (e === "change") return t;
}
var ha = !1;
if (Ze) {
  var Kl;
  if (Ze) {
    var Yl = "oninput" in document;
    if (!Yl) {
      var Pu = document.createElement("div");
      Pu.setAttribute("oninput", "return;"), Yl = typeof Pu.oninput == "function";
    }
    Kl = Yl;
  } else Kl = !1;
  ha = Kl && (!document.documentMode || 9 < document.documentMode);
}
function Nu() {
  Un && (Un.detachEvent("onpropertychange", ga), qn = Un = null);
}
function ga(e) {
  if (e.propertyName === "value" && wl(qn)) {
    var t = [];
    ma(t, qn, e, vo(e)), Gs(pd, t);
  }
}
function hd(e, t, n) {
  e === "focusin" ? (Nu(), Un = t, qn = n, Un.attachEvent("onpropertychange", ga)) : e === "focusout" && Nu();
}
function gd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return wl(qn);
}
function vd(e, t) {
  if (e === "click") return wl(t);
}
function yd(e, t) {
  if (e === "input" || e === "change") return wl(t);
}
function kd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ae = typeof Object.is == "function" ? Object.is : kd;
function bn(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!pi.call(t, l) || !Ae(e[l], t[l])) return !1;
  }
  return !0;
}
function Tu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Du(e, t) {
  var n = Tu(e);
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
    n = Tu(n);
  }
}
function va(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? va(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ya() {
  for (var e = window, t = Qr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Qr(e.document);
  }
  return t;
}
function Po(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Sd(e) {
  var t = ya(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && va(n.ownerDocument.documentElement, n)) {
    if (r !== null && Po(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Du(n, i);
        var o = Du(
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
var wd = Ze && "documentMode" in document && 11 >= document.documentMode, Zt = null, Ri = null, Hn = null, Li = !1;
function Iu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Li || Zt == null || Zt !== Qr(r) || (r = Zt, "selectionStart" in r && Po(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Hn && bn(Hn, r) || (Hn = r, r = qr(Ri, "onSelect"), 0 < r.length && (t = new Co("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Zt)));
}
function xr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Jt = { animationend: xr("Animation", "AnimationEnd"), animationiteration: xr("Animation", "AnimationIteration"), animationstart: xr("Animation", "AnimationStart"), transitionend: xr("Transition", "TransitionEnd") }, Xl = {}, ka = {};
Ze && (ka = document.createElement("div").style, "AnimationEvent" in window || (delete Jt.animationend.animation, delete Jt.animationiteration.animation, delete Jt.animationstart.animation), "TransitionEvent" in window || delete Jt.transitionend.transition);
function El(e) {
  if (Xl[e]) return Xl[e];
  if (!Jt[e]) return e;
  var t = Jt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ka) return Xl[e] = t[n];
  return e;
}
var Sa = El("animationend"), wa = El("animationiteration"), Ea = El("animationstart"), Ca = El("transitionend"), xa = /* @__PURE__ */ new Map(), zu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function wt(e, t) {
  xa.set(e, t), Vt(t, [e]);
}
for (var Gl = 0; Gl < zu.length; Gl++) {
  var Zl = zu[Gl], Ed = Zl.toLowerCase(), Cd = Zl[0].toUpperCase() + Zl.slice(1);
  wt(Ed, "on" + Cd);
}
wt(Sa, "onAnimationEnd");
wt(wa, "onAnimationIteration");
wt(Ea, "onAnimationStart");
wt("dblclick", "onDoubleClick");
wt("focusin", "onFocus");
wt("focusout", "onBlur");
wt(Ca, "onTransitionEnd");
dn("onMouseEnter", ["mouseout", "mouseover"]);
dn("onMouseLeave", ["mouseout", "mouseover"]);
dn("onPointerEnter", ["pointerout", "pointerover"]);
dn("onPointerLeave", ["pointerout", "pointerover"]);
Vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), xd = new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));
function Ru(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Ef(r, t, void 0, e), e.currentTarget = null;
}
function _a(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Ru(l, u, c), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, c = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Ru(l, u, c), i = s;
      }
    }
  }
  if (Yr) throw e = Ti, Yr = !1, Ti = null, e;
}
function F(e, t) {
  var n = t[Ai];
  n === void 0 && (n = t[Ai] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Pa(t, e, 2, !1), n.add(r));
}
function Jl(e, t, n) {
  var r = 0;
  t && (r |= 4), Pa(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[_r]) {
    e[_r] = !0, Ls.forEach(function(n) {
      n !== "selectionchange" && (xd.has(n) || Jl(n, !1, e), Jl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || (t[_r] = !0, Jl("selectionchange", !1, t));
  }
}
function Pa(e, t, n, r) {
  switch (aa(t)) {
    case 1:
      var l = Af;
      break;
    case 4:
      l = Uf;
      break;
    default:
      l = wo;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ni || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function ql(e, t, n, r, l) {
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
        if (o = It(u), o === null) return;
        if (s = o.tag, s === 5 || s === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  Gs(function() {
    var c = i, m = vo(n), h = [];
    e: {
      var p = xa.get(e);
      if (p !== void 0) {
        var y = Co, g = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = ed;
            break;
          case "focusin":
            g = "focus", y = Ql;
            break;
          case "focusout":
            g = "blur", y = Ql;
            break;
          case "beforeblur":
          case "afterblur":
            y = Ql;
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
            y = Su;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Bf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = rd;
            break;
          case Sa:
          case wa:
          case Ea:
            y = Qf;
            break;
          case Ca:
            y = id;
            break;
          case "scroll":
            y = Hf;
            break;
          case "wheel":
            y = ud;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Yf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Eu;
        }
        var S = (t & 4) !== 0, I = !S && e === "scroll", f = S ? p !== null ? p + "Capture" : null : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = Xn(a, f), v != null && S.push(tr(a, v, d)))), I) break;
          a = a.return;
        }
        0 < S.length && (p = new y(p, g, null, n, m), h.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", p && n !== _i && (g = n.relatedTarget || n.fromElement) && (It(g) || g[Je])) break e;
        if ((y || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, y ? (g = n.relatedTarget || n.toElement, y = c, g = g ? It(g) : null, g !== null && (I = Wt(g), g !== I || g.tag !== 5 && g.tag !== 6) && (g = null)) : (y = null, g = c), y !== g)) {
          if (S = Su, v = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (S = Eu, v = "onPointerLeave", f = "onPointerEnter", a = "pointer"), I = y == null ? p : qt(y), d = g == null ? p : qt(g), p = new S(v, a + "leave", y, n, m), p.target = I, p.relatedTarget = d, v = null, It(m) === c && (S = new S(f, a + "enter", g, n, m), S.target = d, S.relatedTarget = I, v = S), I = v, y && g) t: {
            for (S = y, f = g, a = 0, d = S; d; d = Qt(d)) a++;
            for (d = 0, v = f; v; v = Qt(v)) d++;
            for (; 0 < a - d; ) S = Qt(S), a--;
            for (; 0 < d - a; ) f = Qt(f), d--;
            for (; a--; ) {
              if (S === f || f !== null && S === f.alternate) break t;
              S = Qt(S), f = Qt(f);
            }
            S = null;
          }
          else S = null;
          y !== null && Lu(h, p, y, S, !1), g !== null && I !== null && Lu(h, I, g, S, !0);
        }
      }
      e: {
        if (p = c ? qt(c) : window, y = p.nodeName && p.nodeName.toLowerCase(), y === "select" || y === "input" && p.type === "file") var w = md;
        else if (_u(p)) if (ha) w = yd;
        else {
          w = gd;
          var C = hd;
        }
        else (y = p.nodeName) && y.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (w = vd);
        if (w && (w = w(e, c))) {
          ma(h, w, n, m);
          break e;
        }
        C && C(e, p, c), e === "focusout" && (C = p._wrapperState) && C.controlled && p.type === "number" && Si(p, "number", p.value);
      }
      switch (C = c ? qt(c) : window, e) {
        case "focusin":
          (_u(C) || C.contentEditable === "true") && (Zt = C, Ri = c, Hn = null);
          break;
        case "focusout":
          Hn = Ri = Zt = null;
          break;
        case "mousedown":
          Li = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Li = !1, Iu(h, n, m);
          break;
        case "selectionchange":
          if (wd) break;
        case "keydown":
        case "keyup":
          Iu(h, n, m);
      }
      var E;
      if (_o) e: {
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
      else Gt ? da(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (fa && n.locale !== "ko" && (Gt || N !== "onCompositionStart" ? N === "onCompositionEnd" && Gt && (E = ca()) : (st = m, Eo = "value" in st ? st.value : st.textContent, Gt = !0)), C = qr(c, N), 0 < C.length && (N = new wu(N, e, null, n, m), h.push({ event: N, listeners: C }), E ? N.data = E : (E = pa(n), E !== null && (N.data = E)))), (E = ad ? cd(e, n) : fd(e, n)) && (c = qr(c, "onBeforeInput"), 0 < c.length && (m = new wu("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: c }), m.data = E));
    }
    _a(h, t);
  });
}
function tr(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function qr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Xn(e, n), i != null && r.unshift(tr(e, i, l)), i = Xn(e, t), i != null && r.push(tr(e, i, l))), e = e.return;
  }
  return r;
}
function Qt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Lu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Xn(n, i), s != null && o.unshift(tr(n, s, u))) : l || (s = Xn(n, i), s != null && o.push(tr(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var _d = /\r\n?/g, Pd = /\u0000|\uFFFD/g;
function Mu(e) {
  return (typeof e == "string" ? e : "" + e).replace(_d, `
`).replace(Pd, "");
}
function Pr(e, t, n) {
  if (t = Mu(t), Mu(e) !== t && n) throw Error(k(425));
}
function br() {
}
var Mi = null, ji = null;
function Oi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Fi = typeof setTimeout == "function" ? setTimeout : void 0, Nd = typeof clearTimeout == "function" ? clearTimeout : void 0, ju = typeof Promise == "function" ? Promise : void 0, Td = typeof queueMicrotask == "function" ? queueMicrotask : typeof ju < "u" ? function(e) {
  return ju.resolve(null).then(e).catch(Dd);
} : Fi;
function Dd(e) {
  setTimeout(function() {
    throw e;
  });
}
function bl(e, t) {
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
function Ou(e) {
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
var wn = Math.random().toString(36).slice(2), $e = "__reactFiber$" + wn, nr = "__reactProps$" + wn, Je = "__reactContainer$" + wn, Ai = "__reactEvents$" + wn, Id = "__reactListeners$" + wn, zd = "__reactHandles$" + wn;
function It(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Je] || n[$e]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ou(e); e !== null; ) {
        if (n = e[$e]) return n;
        e = Ou(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function dr(e) {
  return e = e[$e] || e[Je], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function qt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function Cl(e) {
  return e[nr] || null;
}
var Ui = [], bt = -1;
function Et(e) {
  return { current: e };
}
function A(e) {
  0 > bt || (e.current = Ui[bt], Ui[bt] = null, bt--);
}
function O(e, t) {
  bt++, Ui[bt] = e.current, e.current = t;
}
var St = {}, se = Et(St), he = Et(!1), At = St;
function pn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return St;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ge(e) {
  return e = e.childContextTypes, e != null;
}
function el() {
  A(he), A(se);
}
function Fu(e, t, n) {
  if (se.current !== St) throw Error(k(168));
  O(se, t), O(he, n);
}
function Na(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, hf(e) || "Unknown", l));
  return B({}, n, r);
}
function tl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || St, At = se.current, O(se, e), O(he, he.current), !0;
}
function Au(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = Na(e, t, At), r.__reactInternalMemoizedMergedChildContext = e, A(he), A(se), O(se, e)) : A(he), O(he, n);
}
var Ke = null, xl = !1, ei = !1;
function Ta(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
function Rd(e) {
  xl = !0, Ta(e);
}
function Ct() {
  if (!ei && Ke !== null) {
    ei = !0;
    var e = 0, t = j;
    try {
      var n = Ke;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ke = null, xl = !1;
    } catch (l) {
      throw Ke !== null && (Ke = Ke.slice(e + 1)), bs(yo, Ct), l;
    } finally {
      j = t, ei = !1;
    }
  }
  return null;
}
var en = [], tn = 0, nl = null, rl = 0, Pe = [], Ne = 0, Ut = null, Ye = 1, Xe = "";
function Tt(e, t) {
  en[tn++] = rl, en[tn++] = nl, nl = e, rl = t;
}
function Da(e, t, n) {
  Pe[Ne++] = Ye, Pe[Ne++] = Xe, Pe[Ne++] = Ut, Ut = e;
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
function No(e) {
  e.return !== null && (Tt(e, 1), Da(e, 1, 0));
}
function To(e) {
  for (; e === nl; ) nl = en[--tn], en[tn] = null, rl = en[--tn], en[tn] = null;
  for (; e === Ut; ) Ut = Pe[--Ne], Pe[Ne] = null, Xe = Pe[--Ne], Pe[Ne] = null, Ye = Pe[--Ne], Pe[Ne] = null;
}
var we = null, Se = null, U = !1, je = null;
function Ia(e, t) {
  var n = Te(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Uu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, we = e, Se = mt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, we = e, Se = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ut !== null ? { id: Ye, overflow: Xe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Te(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, we = e, Se = null, !0) : !1;
    default:
      return !1;
  }
}
function Hi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $i(e) {
  if (U) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Uu(e, t)) {
        if (Hi(e)) throw Error(k(418));
        t = mt(n.nextSibling);
        var r = we;
        t && Uu(e, t) ? Ia(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, we = e);
      }
    } else {
      if (Hi(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, U = !1, we = e;
    }
  }
}
function Hu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  we = e;
}
function Nr(e) {
  if (e !== we) return !1;
  if (!U) return Hu(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Oi(e.type, e.memoizedProps)), t && (t = Se)) {
    if (Hi(e)) throw za(), Error(k(418));
    for (; t; ) Ia(e, t), t = mt(t.nextSibling);
  }
  if (Hu(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
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
function za() {
  for (var e = Se; e; ) e = mt(e.nextSibling);
}
function mn() {
  Se = we = null, U = !1;
}
function Do(e) {
  je === null ? je = [e] : je.push(e);
}
var Ld = et.ReactCurrentBatchConfig;
function Dn(e, t, n) {
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
function Tr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function $u(e) {
  var t = e._init;
  return t(e._payload);
}
function Ra(e) {
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
    return f = yt(f, a), f.index = 0, f.sibling = null, f;
  }
  function i(f, a, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < a ? (f.flags |= 2, a) : d) : (f.flags |= 2, a)) : (f.flags |= 1048576, a);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6 ? (a = si(d, f.mode, v), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, v) {
    var w = d.type;
    return w === Xt ? m(f, a, d.props.children, v, d.key) : a !== null && (a.elementType === w || typeof w == "object" && w !== null && w.$$typeof === lt && $u(w) === a.type) ? (v = l(a, d.props), v.ref = Dn(f, a, d), v.return = f, v) : (v = Wr(d.type, d.key, d.props, null, f.mode, v), v.ref = Dn(f, a, d), v.return = f, v);
  }
  function c(f, a, d, v) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = ai(d, f.mode, v), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, v, w) {
    return a === null || a.tag !== 7 ? (a = Ft(d, f.mode, v, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = si("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case vr:
          return d = Wr(a.type, a.key, a.props, null, f.mode, d), d.ref = Dn(f, null, a), d.return = f, d;
        case Yt:
          return a = ai(a, f.mode, d), a.return = f, a;
        case lt:
          var v = a._init;
          return h(f, v(a._payload), d);
      }
      if (Ln(a) || xn(a)) return a = Ft(a, f.mode, d, null), a.return = f, a;
      Tr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var w = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return w !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case vr:
          return d.key === w ? s(f, a, d, v) : null;
        case Yt:
          return d.key === w ? c(f, a, d, v) : null;
        case lt:
          return w = d._init, p(
            f,
            a,
            w(d._payload),
            v
          );
      }
      if (Ln(d) || xn(d)) return w !== null ? null : m(f, a, d, v, null);
      Tr(f, d);
    }
    return null;
  }
  function y(f, a, d, v, w) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(a, f, "" + v, w);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case vr:
          return f = f.get(v.key === null ? d : v.key) || null, s(a, f, v, w);
        case Yt:
          return f = f.get(v.key === null ? d : v.key) || null, c(a, f, v, w);
        case lt:
          var C = v._init;
          return y(f, a, d, C(v._payload), w);
      }
      if (Ln(v) || xn(v)) return f = f.get(d) || null, m(a, f, v, w, null);
      Tr(a, v);
    }
    return null;
  }
  function g(f, a, d, v) {
    for (var w = null, C = null, E = a, N = a = 0, M = null; E !== null && N < d.length; N++) {
      E.index > N ? (M = E, E = null) : M = E.sibling;
      var D = p(f, E, d[N], v);
      if (D === null) {
        E === null && (E = M);
        break;
      }
      e && E && D.alternate === null && t(f, E), a = i(D, a, N), C === null ? w = D : C.sibling = D, C = D, E = M;
    }
    if (N === d.length) return n(f, E), U && Tt(f, N), w;
    if (E === null) {
      for (; N < d.length; N++) E = h(f, d[N], v), E !== null && (a = i(E, a, N), C === null ? w = E : C.sibling = E, C = E);
      return U && Tt(f, N), w;
    }
    for (E = r(f, E); N < d.length; N++) M = y(E, f, N, d[N], v), M !== null && (e && M.alternate !== null && E.delete(M.key === null ? N : M.key), a = i(M, a, N), C === null ? w = M : C.sibling = M, C = M);
    return e && E.forEach(function(ye) {
      return t(f, ye);
    }), U && Tt(f, N), w;
  }
  function S(f, a, d, v) {
    var w = xn(d);
    if (typeof w != "function") throw Error(k(150));
    if (d = w.call(d), d == null) throw Error(k(151));
    for (var C = w = null, E = a, N = a = 0, M = null, D = d.next(); E !== null && !D.done; N++, D = d.next()) {
      E.index > N ? (M = E, E = null) : M = E.sibling;
      var ye = p(f, E, D.value, v);
      if (ye === null) {
        E === null && (E = M);
        break;
      }
      e && E && ye.alternate === null && t(f, E), a = i(ye, a, N), C === null ? w = ye : C.sibling = ye, C = ye, E = M;
    }
    if (D.done) return n(
      f,
      E
    ), U && Tt(f, N), w;
    if (E === null) {
      for (; !D.done; N++, D = d.next()) D = h(f, D.value, v), D !== null && (a = i(D, a, N), C === null ? w = D : C.sibling = D, C = D);
      return U && Tt(f, N), w;
    }
    for (E = r(f, E); !D.done; N++, D = d.next()) D = y(E, f, N, D.value, v), D !== null && (e && D.alternate !== null && E.delete(D.key === null ? N : D.key), a = i(D, a, N), C === null ? w = D : C.sibling = D, C = D);
    return e && E.forEach(function(xt) {
      return t(f, xt);
    }), U && Tt(f, N), w;
  }
  function I(f, a, d, v) {
    if (typeof d == "object" && d !== null && d.type === Xt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case vr:
          e: {
            for (var w = d.key, C = a; C !== null; ) {
              if (C.key === w) {
                if (w = d.type, w === Xt) {
                  if (C.tag === 7) {
                    n(f, C.sibling), a = l(C, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (C.elementType === w || typeof w == "object" && w !== null && w.$$typeof === lt && $u(w) === C.type) {
                  n(f, C.sibling), a = l(C, d.props), a.ref = Dn(f, C, d), a.return = f, f = a;
                  break e;
                }
                n(f, C);
                break;
              } else t(f, C);
              C = C.sibling;
            }
            d.type === Xt ? (a = Ft(d.props.children, f.mode, v, d.key), a.return = f, f = a) : (v = Wr(d.type, d.key, d.props, null, f.mode, v), v.ref = Dn(f, a, d), v.return = f, f = v);
          }
          return o(f);
        case Yt:
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
            a = ai(d, f.mode, v), a.return = f, f = a;
          }
          return o(f);
        case lt:
          return C = d._init, I(f, a, C(d._payload), v);
      }
      if (Ln(d)) return g(f, a, d, v);
      if (xn(d)) return S(f, a, d, v);
      Tr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = si(d, f.mode, v), a.return = f, f = a), o(f)) : n(f, a);
  }
  return I;
}
var hn = Ra(!0), La = Ra(!1), ll = Et(null), il = null, nn = null, Io = null;
function zo() {
  Io = nn = il = null;
}
function Ro(e) {
  var t = ll.current;
  A(ll), e._currentValue = t;
}
function Bi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function cn(e, t) {
  il = e, Io = nn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (me = !0), e.firstContext = null);
}
function Ie(e) {
  var t = e._currentValue;
  if (Io !== e) if (e = { context: e, memoizedValue: t, next: null }, nn === null) {
    if (il === null) throw Error(k(308));
    nn = e, il.dependencies = { lanes: 0, firstContext: e };
  } else nn = nn.next = e;
  return t;
}
var zt = null;
function Lo(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function Ma(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Lo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, qe(e, r);
}
function qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var it = !1;
function Mo(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function ja(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ge(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function ht(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, L & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, qe(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Lo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, qe(e, n);
}
function Ar(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ko(e, n);
  }
}
function Bu(e, t) {
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
function ol(e, t, n, r) {
  var l = e.updateQueue;
  it = !1;
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
      var p = u.lane, y = u.eventTime;
      if ((r & p) === p) {
        m !== null && (m = m.next = {
          eventTime: y,
          lane: 0,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null
        });
        e: {
          var g = e, S = u;
          switch (p = t, y = n, S.tag) {
            case 1:
              if (g = S.payload, typeof g == "function") {
                h = g.call(y, h, p);
                break e;
              }
              h = g;
              break e;
            case 3:
              g.flags = g.flags & -65537 | 128;
            case 0:
              if (g = S.payload, p = typeof g == "function" ? g.call(y, h, p) : g, p == null) break e;
              h = B({}, h, p);
              break e;
            case 2:
              it = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else y = { eventTime: y, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, m === null ? (c = m = y, s = h) : m = m.next = y, o |= p;
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
    $t |= o, e.lanes = o, e.memoizedState = h;
  }
}
function Vu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
      l.call(r);
    }
  }
}
var pr = {}, Ve = Et(pr), rr = Et(pr), lr = Et(pr);
function Rt(e) {
  if (e === pr) throw Error(k(174));
  return e;
}
function jo(e, t) {
  switch (O(lr, t), O(rr, e), O(Ve, pr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Ei(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Ei(t, e);
  }
  A(Ve), O(Ve, t);
}
function gn() {
  A(Ve), A(rr), A(lr);
}
function Oa(e) {
  Rt(lr.current);
  var t = Rt(Ve.current), n = Ei(t, e.type);
  t !== n && (O(rr, e), O(Ve, n));
}
function Oo(e) {
  rr.current === e && (A(Ve), A(rr));
}
var H = Et(0);
function ul(e) {
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
var ti = [];
function Fo() {
  for (var e = 0; e < ti.length; e++) ti[e]._workInProgressVersionPrimary = null;
  ti.length = 0;
}
var Ur = et.ReactCurrentDispatcher, ni = et.ReactCurrentBatchConfig, Ht = 0, $ = null, G = null, q = null, sl = !1, $n = !1, ir = 0, Md = 0;
function le() {
  throw Error(k(321));
}
function Ao(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function Uo(e, t, n, r, l, i) {
  if (Ht = i, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ur.current = e === null || e.memoizedState === null ? Ad : Ud, e = n(r, l), $n) {
    i = 0;
    do {
      if ($n = !1, ir = 0, 25 <= i) throw Error(k(301));
      i += 1, q = G = null, t.updateQueue = null, Ur.current = Hd, e = n(r, l);
    } while ($n);
  }
  if (Ur.current = al, t = G !== null && G.next !== null, Ht = 0, q = G = $ = null, sl = !1, t) throw Error(k(300));
  return e;
}
function Ho() {
  var e = ir !== 0;
  return ir = 0, e;
}
function He() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? $.memoizedState = q = e : q = q.next = e, q;
}
function ze() {
  if (G === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = G.next;
  var t = q === null ? $.memoizedState : q.next;
  if (t !== null) q = t, G = e;
  else {
    if (e === null) throw Error(k(310));
    G = e, e = { memoizedState: G.memoizedState, baseState: G.baseState, baseQueue: G.baseQueue, queue: G.queue, next: null }, q === null ? $.memoizedState = q = e : q = q.next = e;
  }
  return q;
}
function or(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ri(e) {
  var t = ze(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = G, l = r.baseQueue, i = n.pending;
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
      if ((Ht & m) === m) s !== null && (s = s.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var h = {
          lane: m,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        s === null ? (u = s = h, o = r) : s = s.next = h, $.lanes |= m, $t |= m;
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? o = r : s.next = u, Ae(r, t.memoizedState) || (me = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, $.lanes |= i, $t |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function li(e) {
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
    Ae(i, t.memoizedState) || (me = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Fa() {
}
function Aa(e, t) {
  var n = $, r = ze(), l = t(), i = !Ae(r.memoizedState, l);
  if (i && (r.memoizedState = l, me = !0), r = r.queue, $o($a.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || q !== null && q.memoizedState.tag & 1) {
    if (n.flags |= 2048, ur(9, Ha.bind(null, n, r, l, t), void 0, null), b === null) throw Error(k(349));
    Ht & 30 || Ua(n, t, l);
  }
  return l;
}
function Ua(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ha(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Ba(t) && Va(e);
}
function $a(e, t, n) {
  return n(function() {
    Ba(t) && Va(e);
  });
}
function Ba(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function Va(e) {
  var t = qe(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Wu(e) {
  var t = He();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: or, lastRenderedState: e }, t.queue = e, e = e.dispatch = Fd.bind(null, $, e), [t.memoizedState, e];
}
function ur(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Wa() {
  return ze().memoizedState;
}
function Hr(e, t, n, r) {
  var l = He();
  $.flags |= e, l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r);
}
function _l(e, t, n, r) {
  var l = ze();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (i = o.destroy, r !== null && Ao(r, o.deps)) {
      l.memoizedState = ur(t, n, i, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = ur(1 | t, n, i, r);
}
function Qu(e, t) {
  return Hr(8390656, 8, e, t);
}
function $o(e, t) {
  return _l(2048, 8, e, t);
}
function Qa(e, t) {
  return _l(4, 2, e, t);
}
function Ka(e, t) {
  return _l(4, 4, e, t);
}
function Ya(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Xa(e, t, n) {
  return n = n != null ? n.concat([e]) : null, _l(4, 4, Ya.bind(null, t, e), n);
}
function Bo() {
}
function Ga(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ao(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Za(e, t) {
  var n = ze();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Ao(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ja(e, t, n) {
  return Ht & 21 ? (Ae(n, t) || (n = na(), $.lanes |= n, $t |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, me = !0), e.memoizedState = n);
}
function jd(e, t) {
  var n = j;
  j = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ni.transition;
  ni.transition = {};
  try {
    e(!1), t();
  } finally {
    j = n, ni.transition = r;
  }
}
function qa() {
  return ze().memoizedState;
}
function Od(e, t, n) {
  var r = vt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ba(e)) ec(t, n);
  else if (n = Ma(e, t, n, r), n !== null) {
    var l = ce();
    Fe(n, e, r, l), tc(n, t, r);
  }
}
function Fd(e, t, n) {
  var r = vt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ba(e)) ec(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ae(u, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, Lo(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Ma(e, t, l, r), n !== null && (l = ce(), Fe(n, e, r, l), tc(n, t, r));
  }
}
function ba(e) {
  var t = e.alternate;
  return e === $ || t !== null && t === $;
}
function ec(e, t) {
  $n = sl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function tc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ko(e, n);
  }
}
var al = { readContext: Ie, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, Ad = { readContext: Ie, useCallback: function(e, t) {
  return He().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Ie, useEffect: Qu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hr(
    4194308,
    4,
    Ya.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Hr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Hr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = He();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = He();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Od.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = He();
  return e = { current: e }, t.memoizedState = e;
}, useState: Wu, useDebugValue: Bo, useDeferredValue: function(e) {
  return He().memoizedState = e;
}, useTransition: function() {
  var e = Wu(!1), t = e[0];
  return e = jd.bind(null, e[1]), He().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = $, l = He();
  if (U) {
    if (n === void 0) throw Error(k(407));
    n = n();
  } else {
    if (n = t(), b === null) throw Error(k(349));
    Ht & 30 || Ua(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Qu($a.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ur(9, Ha.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = He(), t = b.identifierPrefix;
  if (U) {
    var n = Xe, r = Ye;
    n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Md++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ud = {
  readContext: Ie,
  useCallback: Ga,
  useContext: Ie,
  useEffect: $o,
  useImperativeHandle: Xa,
  useInsertionEffect: Qa,
  useLayoutEffect: Ka,
  useMemo: Za,
  useReducer: ri,
  useRef: Wa,
  useState: function() {
    return ri(or);
  },
  useDebugValue: Bo,
  useDeferredValue: function(e) {
    var t = ze();
    return Ja(t, G.memoizedState, e);
  },
  useTransition: function() {
    var e = ri(or)[0], t = ze().memoizedState;
    return [e, t];
  },
  useMutableSource: Fa,
  useSyncExternalStore: Aa,
  useId: qa,
  unstable_isNewReconciler: !1
}, Hd = { readContext: Ie, useCallback: Ga, useContext: Ie, useEffect: $o, useImperativeHandle: Xa, useInsertionEffect: Qa, useLayoutEffect: Ka, useMemo: Za, useReducer: li, useRef: Wa, useState: function() {
  return li(or);
}, useDebugValue: Bo, useDeferredValue: function(e) {
  var t = ze();
  return G === null ? t.memoizedState = e : Ja(t, G.memoizedState, e);
}, useTransition: function() {
  var e = li(or)[0], t = ze().memoizedState;
  return [e, t];
}, useMutableSource: Fa, useSyncExternalStore: Aa, useId: qa, unstable_isNewReconciler: !1 };
function Le(e, t) {
  if (e && e.defaultProps) {
    t = B({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Vi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Pl = { isMounted: function(e) {
  return (e = e._reactInternals) ? Wt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = vt(e), i = Ge(r, l);
  i.payload = t, n != null && (i.callback = n), t = ht(e, i, l), t !== null && (Fe(t, e, l, r), Ar(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = vt(e), i = Ge(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = ht(e, i, l), t !== null && (Fe(t, e, l, r), Ar(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ce(), r = vt(e), l = Ge(n, r);
  l.tag = 2, t != null && (l.callback = t), t = ht(e, l, r), t !== null && (Fe(t, e, r, n), Ar(t, e, r));
} };
function Ku(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !bn(n, r) || !bn(l, i) : !0;
}
function nc(e, t, n) {
  var r = !1, l = St, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Ie(i) : (l = ge(t) ? At : se.current, r = t.contextTypes, i = (r = r != null) ? pn(e, l) : St), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Pl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Yu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Pl.enqueueReplaceState(t, t.state, null);
}
function Wi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Mo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Ie(i) : (i = ge(t) ? At : se.current, l.context = pn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Vi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Pl.enqueueReplaceState(l, l.state, null), ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function vn(e, t) {
  try {
    var n = "", r = t;
    do
      n += mf(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ii(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var $d = typeof WeakMap == "function" ? WeakMap : Map;
function rc(e, t, n) {
  n = Ge(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    fl || (fl = !0, to = r), Qi(e, t);
  }, n;
}
function lc(e, t, n) {
  n = Ge(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Qi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Qi(e, t), typeof r != "function" && (gt === null ? gt = /* @__PURE__ */ new Set([this]) : gt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Xu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new $d();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = tp.bind(null, e, t, n), t.then(e, e));
}
function Gu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Zu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ge(-1, 1), t.tag = 2, ht(n, t, 1))), n.lanes |= 1), e);
}
var Bd = et.ReactCurrentOwner, me = !1;
function ae(e, t, n, r) {
  t.child = e === null ? La(t, null, n, r) : hn(t, e.child, n, r);
}
function Ju(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return cn(t, l), r = Uo(e, t, n, r, i, l), n = Ho(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, be(e, t, l)) : (U && n && No(t), t.flags |= 1, ae(e, t, r, l), t.child);
}
function qu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Zo(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, ic(e, t, i, r, l)) : (e = Wr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : bn, n(o, r) && e.ref === t.ref) return be(e, t, l);
  }
  return t.flags |= 1, e = yt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function ic(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bn(i, r) && e.ref === t.ref) if (me = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (me = !0);
    else return t.lanes = e.lanes, be(e, t, l);
  }
  return Ki(e, t, n, r, l);
}
function oc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, O(ln, ke), ke |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, O(ln, ke), ke |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, O(ln, ke), ke |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, O(ln, ke), ke |= r;
  return ae(e, t, l, n), t.child;
}
function uc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Ki(e, t, n, r, l) {
  var i = ge(n) ? At : se.current;
  return i = pn(t, i), cn(t, l), n = Uo(e, t, n, r, i, l), r = Ho(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, be(e, t, l)) : (U && r && No(t), t.flags |= 1, ae(e, t, n, l), t.child);
}
function bu(e, t, n, r, l) {
  if (ge(n)) {
    var i = !0;
    tl(t);
  } else i = !1;
  if (cn(t, l), t.stateNode === null) $r(e, t), nc(t, n, r), Wi(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Ie(c) : (c = ge(n) ? At : se.current, c = pn(t, c));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== c) && Yu(t, o, r, c), it = !1;
    var p = t.memoizedState;
    o.state = p, ol(t, r, o, l), s = t.memoizedState, u !== r || p !== s || he.current || it ? (typeof m == "function" && (Vi(t, n, m, r), s = t.memoizedState), (u = it || Ku(t, n, u, r, p, s, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = c, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, ja(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Le(t.type, u), o.props = c, h = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ie(s) : (s = ge(n) ? At : se.current, s = pn(t, s));
    var y = n.getDerivedStateFromProps;
    (m = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || p !== s) && Yu(t, o, r, s), it = !1, p = t.memoizedState, o.state = p, ol(t, r, o, l);
    var g = t.memoizedState;
    u !== h || p !== g || he.current || it ? (typeof y == "function" && (Vi(t, n, y, r), g = t.memoizedState), (c = it || Ku(t, n, c, r, p, g, s) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, g, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, g, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = g), o.props = r, o.state = g, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Yi(e, t, n, r, i, l);
}
function Yi(e, t, n, r, l, i) {
  uc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Au(t, n, !1), be(e, t, i);
  r = t.stateNode, Bd.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = hn(t, e.child, null, i), t.child = hn(t, null, u, i)) : ae(e, t, u, i), t.memoizedState = r.state, l && Au(t, n, !0), t.child;
}
function sc(e) {
  var t = e.stateNode;
  t.pendingContext ? Fu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Fu(e, t.context, !1), jo(e, t.containerInfo);
}
function es(e, t, n, r, l) {
  return mn(), Do(l), t.flags |= 256, ae(e, t, n, r), t.child;
}
var Xi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Gi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ac(e, t, n) {
  var r = t.pendingProps, l = H.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), O(H, l & 1), e === null)
    return $i(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Dl(o, r, 0, null), e = Ft(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Gi(n), t.memoizedState = Xi, e) : Vo(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Vd(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = yt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = yt(u, i) : (i = Ft(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Gi(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Xi, r;
  }
  return i = e.child, e = i.sibling, r = yt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Vo(e, t) {
  return t = Dl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Dr(e, t, n, r) {
  return r !== null && Do(r), hn(t, e.child, null, n), e = Vo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Vd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ii(Error(k(422))), Dr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Dl({ mode: "visible", children: r.children }, l, 0, null), i = Ft(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && hn(t, e.child, null, o), t.child.memoizedState = Gi(o), t.memoizedState = Xi, i);
  if (!(t.mode & 1)) return Dr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(k(419)), r = ii(i, r, void 0), Dr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, me || u) {
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, qe(e, l), Fe(r, e, l, -1));
    }
    return Go(), r = ii(Error(k(421))), Dr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = np.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Se = mt(l.nextSibling), we = t, U = !0, je = null, e !== null && (Pe[Ne++] = Ye, Pe[Ne++] = Xe, Pe[Ne++] = Ut, Ye = e.id, Xe = e.overflow, Ut = t), t = Vo(t, r.children), t.flags |= 4096, t);
}
function ts(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Bi(e.return, t, n);
}
function oi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function cc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ae(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ts(e, n, t);
      else if (e.tag === 19) ts(e, n, t);
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
  if (O(H, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && ul(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), oi(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ul(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      oi(t, !0, n, null, i);
      break;
    case "together":
      oi(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function $r(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function be(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), $t |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = yt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = yt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Wd(e, t, n) {
  switch (t.tag) {
    case 3:
      sc(t), mn();
      break;
    case 5:
      Oa(t);
      break;
    case 1:
      ge(t.type) && tl(t);
      break;
    case 4:
      jo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      O(ll, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (O(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ac(e, t, n) : (O(H, H.current & 1), e = be(e, t, n), e !== null ? e.sibling : null);
      O(H, H.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return cc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), O(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, oc(e, t, n);
  }
  return be(e, t, n);
}
var fc, Zi, dc, pc;
fc = function(e, t) {
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
Zi = function() {
};
dc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Rt(Ve.current);
    var i = null;
    switch (n) {
      case "input":
        l = yi(e, l), r = yi(e, r), i = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = wi(e, l), r = wi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = br);
    }
    Ci(n, r);
    var o;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Kn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Kn.hasOwnProperty(c) ? (s != null && c === "onScroll" && F("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
pc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function In(e, t) {
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
function ie(e) {
  var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
  if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
  else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
  return e.subtreeFlags |= r, e.childLanes = n, t;
}
function Qd(e, t, n) {
  var r = t.pendingProps;
  switch (To(t), t.tag) {
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
      return ge(t.type) && el(), ie(t), null;
    case 3:
      return r = t.stateNode, gn(), A(he), A(se), Fo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Nr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, je !== null && (lo(je), je = null))), Zi(e, t), ie(t), null;
    case 5:
      Oo(t);
      var l = Rt(lr.current);
      if (n = t.type, e !== null && t.stateNode != null) dc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ie(t), null;
        }
        if (e = Rt(Ve.current), Nr(t)) {
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
              for (l = 0; l < jn.length; l++) F(jn[l], r);
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
              cu(r, i), F("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, F("invalid", r);
              break;
            case "textarea":
              du(r, i), F("invalid", r);
          }
          Ci(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Pr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Pr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Kn.hasOwnProperty(o) && u != null && o === "onScroll" && F("scroll", r);
          }
          switch (n) {
            case "input":
              yr(r), fu(r, i, !0);
              break;
            case "textarea":
              yr(r), pu(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = br);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = $s(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[$e] = t, e[nr] = r, fc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = xi(n, r), n) {
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
                for (l = 0; l < jn.length; l++) F(jn[l], e);
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
                cu(e, r), l = yi(e, r), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), F("invalid", e);
                break;
              case "textarea":
                du(e, r), l = wi(e, r), F("invalid", e);
                break;
              default:
                l = r;
            }
            Ci(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? Ws(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Bs(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Yn(e, s) : typeof s == "number" && Yn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Kn.hasOwnProperty(i) ? s != null && i === "onScroll" && F("scroll", e) : s != null && po(e, i, s, o));
            }
            switch (n) {
              case "input":
                yr(e), fu(e, r, !1);
                break;
              case "textarea":
                yr(e), pu(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? on(e, !!r.multiple, i, !1) : r.defaultValue != null && on(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = br);
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
      if (e && t.stateNode != null) pc(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (n = Rt(lr.current), Rt(Ve.current), Nr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[$e] = t, (i = r.nodeValue !== n) && (e = we, e !== null)) switch (e.tag) {
            case 3:
              Pr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Pr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$e] = t, t.stateNode = r;
      }
      return ie(t), null;
    case 13:
      if (A(H), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && Se !== null && t.mode & 1 && !(t.flags & 128)) za(), mn(), t.flags |= 98560, i = !1;
        else if (i = Nr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(k(317));
            i[$e] = t;
          } else mn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ie(t), i = !1;
        } else je !== null && (lo(je), je = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? Z === 0 && (Z = 3) : Go())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
    case 4:
      return gn(), Zi(e, t), e === null && er(t.stateNode.containerInfo), ie(t), null;
    case 10:
      return Ro(t.type._context), ie(t), null;
    case 17:
      return ge(t.type) && el(), ie(t), null;
    case 19:
      if (A(H), i = t.memoizedState, i === null) return ie(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) In(i, !1);
      else {
        if (Z !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = ul(e), o !== null) {
            for (t.flags |= 128, In(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return O(H, H.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && K() > yn && (t.flags |= 128, r = !0, In(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ul(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), In(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U) return ie(t), null;
        } else 2 * K() - i.renderingStartTime > yn && n !== 1073741824 && (t.flags |= 128, r = !0, In(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = K(), t.sibling = null, n = H.current, O(H, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
    case 22:
    case 23:
      return Xo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Kd(e, t) {
  switch (To(t), t.tag) {
    case 1:
      return ge(t.type) && el(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return gn(), A(he), A(se), Fo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Oo(t), null;
    case 13:
      if (A(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        mn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return A(H), null;
    case 4:
      return gn(), null;
    case 10:
      return Ro(t.type._context), null;
    case 22:
    case 23:
      return Xo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ir = !1, ue = !1, Yd = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
function rn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    V(e, t, r);
  }
  else n.current = null;
}
function Ji(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var ns = !1;
function Xd(e, t) {
  if (Mi = Zr, e = ya(), Po(e)) {
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
          for (var y; h !== n || l !== 0 && h.nodeType !== 3 || (u = o + l), h !== i || r !== 0 && h.nodeType !== 3 || (s = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (y = h.firstChild) !== null; )
            p = h, h = y;
          for (; ; ) {
            if (h === e) break t;
            if (p === n && ++c === l && (u = o), p === i && ++m === r && (s = o), (y = h.nextSibling) !== null) break;
            h = p, p = h.parentNode;
          }
          h = y;
        }
        n = u === -1 || s === -1 ? null : { start: u, end: s };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (ji = { focusedElem: e, selectionRange: n }, Zr = !1, _ = t; _ !== null; ) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
  else for (; _ !== null; ) {
    t = _;
    try {
      var g = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (g !== null) {
            var S = g.memoizedProps, I = g.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Le(t.type, S), I);
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
          throw Error(k(163));
      }
    } catch (v) {
      V(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, _ = e;
      break;
    }
    _ = t.return;
  }
  return g = ns, ns = !1, g;
}
function Bn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Ji(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Nl(e, t) {
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
function qi(e) {
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
function mc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, mc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$e], delete t[nr], delete t[Ai], delete t[Id], delete t[zd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function hc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function rs(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || hc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function bi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = br));
  else if (r !== 4 && (e = e.child, e !== null)) for (bi(e, t, n), e = e.sibling; e !== null; ) bi(e, t, n), e = e.sibling;
}
function eo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (eo(e, t, n), e = e.sibling; e !== null; ) eo(e, t, n), e = e.sibling;
}
var te = null, Me = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) gc(e, t, n), n = n.sibling;
}
function gc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function") try {
    Be.onCommitFiberUnmount(kl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ue || rn(n, t);
    case 6:
      var r = te, l = Me;
      te = null, tt(e, t, n), te = r, Me = l, te !== null && (Me ? (e = te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null && (Me ? (e = te, n = n.stateNode, e.nodeType === 8 ? bl(e.parentNode, n) : e.nodeType === 1 && bl(e, n), Jn(e)) : bl(te, n.stateNode));
      break;
    case 4:
      r = te, l = Me, te = n.stateNode.containerInfo, Me = !0, tt(e, t, n), te = r, Me = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Ji(n, t, o), l = l.next;
        } while (l !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (!ue && (rn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n.mode & 1 ? (ue = (r = ue) || n.memoizedState !== null, tt(e, t, n), ue = r) : tt(e, t, n);
      break;
    default:
      tt(e, t, n);
  }
}
function ls(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Yd()), t.forEach(function(r) {
      var l = rp.bind(null, e, r);
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
      gc(i, o, l), te = null, Me = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      V(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) vc(t, e), t = t.sibling;
}
function vc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Re(t, e), Ue(e), r & 4) {
        try {
          Bn(3, e, e.return), Nl(3, e);
        } catch (S) {
          V(e, e.return, S);
        }
        try {
          Bn(5, e, e.return);
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 1:
      Re(t, e), Ue(e), r & 512 && n !== null && rn(n, n.return);
      break;
    case 5:
      if (Re(t, e), Ue(e), r & 512 && n !== null && rn(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Yn(l, "");
        } catch (S) {
          V(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Us(l, i), xi(u, o);
          var c = xi(u, i);
          for (o = 0; o < s.length; o += 2) {
            var m = s[o], h = s[o + 1];
            m === "style" ? Ws(l, h) : m === "dangerouslySetInnerHTML" ? Bs(l, h) : m === "children" ? Yn(l, h) : po(l, m, h, c);
          }
          switch (u) {
            case "input":
              ki(l, i);
              break;
            case "textarea":
              Hs(l, i);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? on(l, !!i.multiple, y, !1) : p !== !!i.multiple && (i.defaultValue != null ? on(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : on(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[nr] = i;
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 6:
      if (Re(t, e), Ue(e), r & 4) {
        if (e.stateNode === null) throw Error(k(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 3:
      if (Re(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Jn(t.containerInfo);
      } catch (S) {
        V(e, e.return, S);
      }
      break;
    case 4:
      Re(t, e), Ue(e);
      break;
    case 13:
      Re(t, e), Ue(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Ko = K())), r & 4 && ls(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (c = ue) || m, Re(t, e), ue = c) : Re(t, e), Ue(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (_ = e, m = e.child; m !== null; ) {
          for (h = _ = m; _ !== null; ) {
            switch (p = _, y = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Bn(4, p, p.return);
                break;
              case 1:
                rn(p, p.return);
                var g = p.stateNode;
                if (typeof g.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, g.props = t.memoizedProps, g.state = t.memoizedState, g.componentWillUnmount();
                  } catch (S) {
                    V(r, n, S);
                  }
                }
                break;
              case 5:
                rn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  os(h);
                  continue;
                }
            }
            y !== null ? (y.return = p, _ = y) : os(h);
          }
          m = m.sibling;
        }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                l = h.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Vs("display", o));
              } catch (S) {
                V(e, e.return, S);
              }
            }
          } else if (h.tag === 6) {
            if (m === null) try {
              h.stateNode.nodeValue = c ? "" : h.memoizedProps;
            } catch (S) {
              V(e, e.return, S);
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
      Re(t, e), Ue(e), r & 4 && ls(e);
      break;
    case 21:
      break;
    default:
      Re(
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
          if (hc(n)) {
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
          r.flags & 32 && (Yn(l, ""), r.flags &= -33);
          var i = rs(e);
          eo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = rs(e);
          bi(e, u, o);
          break;
        default:
          throw Error(k(161));
      }
    } catch (s) {
      V(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Gd(e, t, n) {
  _ = e, yc(e);
}
function yc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; _ !== null; ) {
    var l = _, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Ir;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ue;
        u = Ir;
        var c = ue;
        if (Ir = o, (ue = s) && !c) for (_ = l; _ !== null; ) o = _, s = o.child, o.tag === 22 && o.memoizedState !== null ? us(l) : s !== null ? (s.return = o, _ = s) : us(l);
        for (; i !== null; ) _ = i, yc(i), i = i.sibling;
        _ = l, Ir = u, ue = c;
      }
      is(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, _ = i) : is(e);
  }
}
function is(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ue || Nl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ue) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Vu(t, i, r);
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
              Vu(t, o, n);
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
                  h !== null && Jn(h);
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
        ue || t.flags & 512 && qi(t);
      } catch (p) {
        V(t, t.return, p);
      }
    }
    if (t === e) {
      _ = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, _ = n;
      break;
    }
    _ = t.return;
  }
}
function os(e) {
  for (; _ !== null; ) {
    var t = _;
    if (t === e) {
      _ = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, _ = n;
      break;
    }
    _ = t.return;
  }
}
function us(e) {
  for (; _ !== null; ) {
    var t = _;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Nl(4, t);
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
            qi(t);
          } catch (s) {
            V(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            qi(t);
          } catch (s) {
            V(t, o, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      _ = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, _ = u;
      break;
    }
    _ = t.return;
  }
}
var Zd = Math.ceil, cl = et.ReactCurrentDispatcher, Wo = et.ReactCurrentOwner, De = et.ReactCurrentBatchConfig, L = 0, b = null, X = null, ne = 0, ke = 0, ln = Et(0), Z = 0, sr = null, $t = 0, Tl = 0, Qo = 0, Vn = null, pe = null, Ko = 0, yn = 1 / 0, Qe = null, fl = !1, to = null, gt = null, zr = !1, at = null, dl = 0, Wn = 0, no = null, Br = -1, Vr = 0;
function ce() {
  return L & 6 ? K() : Br !== -1 ? Br : Br = K();
}
function vt(e) {
  return e.mode & 1 ? L & 2 && ne !== 0 ? ne & -ne : Ld.transition !== null ? (Vr === 0 && (Vr = na()), Vr) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : aa(e.type)), e) : 1;
}
function Fe(e, t, n, r) {
  if (50 < Wn) throw Wn = 0, no = null, Error(k(185));
  cr(e, n, r), (!(L & 2) || e !== b) && (e === b && (!(L & 2) && (Tl |= n), Z === 4 && ut(e, ne)), ve(e, r), n === 1 && L === 0 && !(t.mode & 1) && (yn = K() + 500, xl && Ct()));
}
function ve(e, t) {
  var n = e.callbackNode;
  Lf(e, t);
  var r = Gr(e, e === b ? ne : 0);
  if (r === 0) n !== null && gu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && gu(n), t === 1) e.tag === 0 ? Rd(ss.bind(null, e)) : Ta(ss.bind(null, e)), Td(function() {
      !(L & 6) && Ct();
    }), n = null;
    else {
      switch (ra(r)) {
        case 1:
          n = yo;
          break;
        case 4:
          n = ea;
          break;
        case 16:
          n = Xr;
          break;
        case 536870912:
          n = ta;
          break;
        default:
          n = Xr;
      }
      n = Pc(n, kc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function kc(e, t) {
  if (Br = -1, Vr = 0, L & 6) throw Error(k(327));
  var n = e.callbackNode;
  if (fn() && e.callbackNode !== n) return null;
  var r = Gr(e, e === b ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var l = L;
    L |= 2;
    var i = wc();
    (b !== e || ne !== t) && (Qe = null, yn = K() + 500, Ot(e, t));
    do
      try {
        bd();
        break;
      } catch (u) {
        Sc(e, u);
      }
    while (!0);
    zo(), cl.current = i, L = l, X !== null ? t = 0 : (b = null, ne = 0, t = Z);
  }
  if (t !== 0) {
    if (t === 2 && (l = Di(e), l !== 0 && (r = l, t = ro(e, l))), t === 1) throw n = sr, Ot(e, 0), ut(e, r), ve(e, K()), n;
    if (t === 6) ut(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Jd(l) && (t = pl(e, r), t === 2 && (i = Di(e), i !== 0 && (r = i, t = ro(e, i))), t === 1)) throw n = sr, Ot(e, 0), ut(e, r), ve(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Dt(e, pe, Qe);
          break;
        case 3:
          if (ut(e, r), (r & 130023424) === r && (t = Ko + 500 - K(), 10 < t)) {
            if (Gr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ce(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Fi(Dt.bind(null, e, pe, Qe), t);
            break;
          }
          Dt(e, pe, Qe);
          break;
        case 4:
          if (ut(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Zd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Fi(Dt.bind(null, e, pe, Qe), r);
            break;
          }
          Dt(e, pe, Qe);
          break;
        case 5:
          Dt(e, pe, Qe);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ve(e, K()), e.callbackNode === n ? kc.bind(null, e) : null;
}
function ro(e, t) {
  var n = Vn;
  return e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256), e = pl(e, t), e !== 2 && (t = pe, pe = n, t !== null && lo(t)), e;
}
function lo(e) {
  pe === null ? pe = e : pe.push.apply(pe, e);
}
function Jd(e) {
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
function ut(e, t) {
  for (t &= ~Qo, t &= ~Tl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Oe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ss(e) {
  if (L & 6) throw Error(k(327));
  fn();
  var t = Gr(e, 0);
  if (!(t & 1)) return ve(e, K()), null;
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Di(e);
    r !== 0 && (t = r, n = ro(e, r));
  }
  if (n === 1) throw n = sr, Ot(e, 0), ut(e, t), ve(e, K()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Dt(e, pe, Qe), ve(e, K()), null;
}
function Yo(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    L = n, L === 0 && (yn = K() + 500, xl && Ct());
  }
}
function Bt(e) {
  at !== null && at.tag === 0 && !(L & 6) && fn();
  var t = L;
  L |= 1;
  var n = De.transition, r = j;
  try {
    if (De.transition = null, j = 1, e) return e();
  } finally {
    j = r, De.transition = n, L = t, !(L & 6) && Ct();
  }
}
function Xo() {
  ke = ln.current, A(ln);
}
function Ot(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Nd(n)), X !== null) for (n = X.return; n !== null; ) {
    var r = n;
    switch (To(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && el();
        break;
      case 3:
        gn(), A(he), A(se), Fo();
        break;
      case 5:
        Oo(r);
        break;
      case 4:
        gn();
        break;
      case 13:
        A(H);
        break;
      case 19:
        A(H);
        break;
      case 10:
        Ro(r.type._context);
        break;
      case 22:
      case 23:
        Xo();
    }
    n = n.return;
  }
  if (b = e, X = e = yt(e.current, null), ne = ke = t, Z = 0, sr = null, Qo = Tl = $t = 0, pe = Vn = null, zt !== null) {
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
function Sc(e, t) {
  do {
    var n = X;
    try {
      if (zo(), Ur.current = al, sl) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        sl = !1;
      }
      if (Ht = 0, q = G = $ = null, $n = !1, ir = 0, Wo.current = null, n === null || n.return === null) {
        Z = 1, sr = t, X = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, s = t;
        if (t = ne, u.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
          var c = s, m = u, h = m.tag;
          if (!(m.mode & 1) && (h === 0 || h === 11 || h === 15)) {
            var p = m.alternate;
            p ? (m.updateQueue = p.updateQueue, m.memoizedState = p.memoizedState, m.lanes = p.lanes) : (m.updateQueue = null, m.memoizedState = null);
          }
          var y = Gu(o);
          if (y !== null) {
            y.flags &= -257, Zu(y, o, u, i, t), y.mode & 1 && Xu(i, c, t), t = y, s = c;
            var g = t.updateQueue;
            if (g === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(s), t.updateQueue = S;
            } else g.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Xu(i, c, t), Go();
              break e;
            }
            s = Error(k(426));
          }
        } else if (U && u.mode & 1) {
          var I = Gu(o);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256), Zu(I, o, u, i, t), Do(vn(s, u));
            break e;
          }
        }
        i = s = vn(s, u), Z !== 4 && (Z = 2), Vn === null ? Vn = [i] : Vn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = rc(i, s, t);
              Bu(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (gt === null || !gt.has(d)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = lc(i, u, t);
                Bu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Cc(n);
    } catch (w) {
      t = w, X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function wc() {
  var e = cl.current;
  return cl.current = al, e === null ? al : e;
}
function Go() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4), b === null || !($t & 268435455) && !(Tl & 268435455) || ut(b, ne);
}
function pl(e, t) {
  var n = L;
  L |= 2;
  var r = wc();
  (b !== e || ne !== t) && (Qe = null, Ot(e, t));
  do
    try {
      qd();
      break;
    } catch (l) {
      Sc(e, l);
    }
  while (!0);
  if (zo(), L = n, cl.current = r, X !== null) throw Error(k(261));
  return b = null, ne = 0, Z;
}
function qd() {
  for (; X !== null; ) Ec(X);
}
function bd() {
  for (; X !== null && !xf(); ) Ec(X);
}
function Ec(e) {
  var t = _c(e.alternate, e, ke);
  e.memoizedProps = e.pendingProps, t === null ? Cc(e) : X = t, Wo.current = null;
}
function Cc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Kd(n, t), n !== null) {
        n.flags &= 32767, X = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Z = 6, X = null;
        return;
      }
    } else if (n = Qd(n, t, ke), n !== null) {
      X = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      X = t;
      return;
    }
    X = t = e;
  } while (t !== null);
  Z === 0 && (Z = 5);
}
function Dt(e, t, n) {
  var r = j, l = De.transition;
  try {
    De.transition = null, j = 1, ep(e, t, n, r);
  } finally {
    De.transition = l, j = r;
  }
  return null;
}
function ep(e, t, n, r) {
  do
    fn();
  while (at !== null);
  if (L & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Mf(e, i), e === b && (X = b = null, ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || zr || (zr = !0, Pc(Xr, function() {
    return fn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = De.transition, De.transition = null;
    var o = j;
    j = 1;
    var u = L;
    L |= 4, Wo.current = null, Xd(e, n), vc(n, e), Sd(ji), Zr = !!Mi, ji = Mi = null, e.current = n, Gd(n), _f(), L = u, j = o, De.transition = i;
  } else e.current = n;
  if (zr && (zr = !1, at = e, dl = l), i = e.pendingLanes, i === 0 && (gt = null), Tf(n.stateNode), ve(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (fl) throw fl = !1, e = to, to = null, e;
  return dl & 1 && e.tag !== 0 && fn(), i = e.pendingLanes, i & 1 ? e === no ? Wn++ : (Wn = 0, no = e) : Wn = 0, Ct(), null;
}
function fn() {
  if (at !== null) {
    var e = ra(dl), t = De.transition, n = j;
    try {
      if (De.transition = null, j = 16 > e ? 16 : e, at === null) var r = !1;
      else {
        if (e = at, at = null, dl = 0, L & 6) throw Error(k(331));
        var l = L;
        for (L |= 4, _ = e.current; _ !== null; ) {
          var i = _, o = i.child;
          if (_.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (_ = c; _ !== null; ) {
                  var m = _;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bn(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) h.return = m, _ = h;
                  else for (; _ !== null; ) {
                    m = _;
                    var p = m.sibling, y = m.return;
                    if (mc(m), m === c) {
                      _ = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = y, _ = p;
                      break;
                    }
                    _ = y;
                  }
                }
              }
              var g = i.alternate;
              if (g !== null) {
                var S = g.child;
                if (S !== null) {
                  g.child = null;
                  do {
                    var I = S.sibling;
                    S.sibling = null, S = I;
                  } while (S !== null);
                }
              }
              _ = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, _ = o;
          else e: for (; _ !== null; ) {
            if (i = _, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Bn(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, _ = f;
              break e;
            }
            _ = i.return;
          }
        }
        var a = e.current;
        for (_ = a; _ !== null; ) {
          o = _;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, _ = d;
          else e: for (o = a; _ !== null; ) {
            if (u = _, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Nl(9, u);
              }
            } catch (w) {
              V(u, u.return, w);
            }
            if (u === o) {
              _ = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, _ = v;
              break e;
            }
            _ = u.return;
          }
        }
        if (L = l, Ct(), Be && typeof Be.onPostCommitFiberRoot == "function") try {
          Be.onPostCommitFiberRoot(kl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      j = n, De.transition = t;
    }
  }
  return !1;
}
function as(e, t, n) {
  t = vn(n, t), t = rc(e, t, 1), e = ht(e, t, 1), t = ce(), e !== null && (cr(e, 1, t), ve(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) as(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      as(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gt === null || !gt.has(r))) {
        e = vn(n, e), e = lc(t, e, 1), t = ht(t, e, 1), e = ce(), t !== null && (cr(t, 1, e), ve(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function tp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, b === e && (ne & n) === n && (Z === 4 || Z === 3 && (ne & 130023424) === ne && 500 > K() - Ko ? Ot(e, 0) : Qo |= n), ve(e, t);
}
function xc(e, t) {
  t === 0 && (e.mode & 1 ? (t = wr, wr <<= 1, !(wr & 130023424) && (wr = 4194304)) : t = 1);
  var n = ce();
  e = qe(e, t), e !== null && (cr(e, t, n), ve(e, n));
}
function np(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), xc(e, n);
}
function rp(e, t) {
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
  r !== null && r.delete(t), xc(e, n);
}
var _c;
_c = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || he.current) me = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return me = !1, Wd(e, t, n);
    me = !!(e.flags & 131072);
  }
  else me = !1, U && t.flags & 1048576 && Da(t, rl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      $r(e, t), e = t.pendingProps;
      var l = pn(t, se.current);
      cn(t, n), l = Uo(null, t, r, e, l, n);
      var i = Ho();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ge(r) ? (i = !0, tl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Mo(t), l.updater = Pl, t.stateNode = l, l._reactInternals = t, Wi(t, r, e, n), t = Yi(null, t, r, !0, i, n)) : (t.tag = 0, U && i && No(t), ae(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch ($r(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = ip(r), e = Le(r, e), l) {
          case 0:
            t = Ki(null, t, r, e, n);
            break e;
          case 1:
            t = bu(null, t, r, e, n);
            break e;
          case 11:
            t = Ju(null, t, r, e, n);
            break e;
          case 14:
            t = qu(null, t, r, Le(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Ki(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), bu(e, t, r, l, n);
    case 3:
      e: {
        if (sc(t), e === null) throw Error(k(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, ja(e, t), ol(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = vn(Error(k(423)), t), t = es(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = vn(Error(k(424)), t), t = es(e, t, r, n, l);
          break e;
        } else for (Se = mt(t.stateNode.containerInfo.firstChild), we = t, U = !0, je = null, n = La(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (mn(), r === l) {
            t = be(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Oa(t), e === null && $i(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Oi(r, l) ? o = null : i !== null && Oi(r, i) && (t.flags |= 32), uc(e, t), ae(e, t, o, n), t.child;
    case 6:
      return e === null && $i(t), null;
    case 13:
      return ac(e, t, n);
    case 4:
      return jo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = hn(t, null, r, n) : ae(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Ju(e, t, r, l, n);
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, O(ll, r._currentValue), r._currentValue = o, i !== null) if (Ae(i.value, o)) {
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
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Bi(
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
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Bi(o, n, t), o = i.sibling;
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
      return l = t.type, r = t.pendingProps.children, cn(t, n), l = Ie(l), r = r(l), t.flags |= 1, ae(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), qu(e, t, r, l, n);
    case 15:
      return ic(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), $r(e, t), t.tag = 1, ge(r) ? (e = !0, tl(t)) : e = !1, cn(t, n), nc(t, r, l), Wi(t, r, l, n), Yi(null, t, r, !0, e, n);
    case 19:
      return cc(e, t, n);
    case 22:
      return oc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Pc(e, t) {
  return bs(e, t);
}
function lp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Te(e, t, n, r) {
  return new lp(e, t, n, r);
}
function Zo(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function ip(e) {
  if (typeof e == "function") return Zo(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === ho) return 11;
    if (e === go) return 14;
  }
  return 2;
}
function yt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Te(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Wr(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Zo(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Xt:
      return Ft(n.children, l, i, t);
    case mo:
      o = 8, l |= 8;
      break;
    case mi:
      return e = Te(12, n, t, l | 2), e.elementType = mi, e.lanes = i, e;
    case hi:
      return e = Te(13, n, t, l), e.elementType = hi, e.lanes = i, e;
    case gi:
      return e = Te(19, n, t, l), e.elementType = gi, e.lanes = i, e;
    case Os:
      return Dl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ms:
          o = 10;
          break e;
        case js:
          o = 9;
          break e;
        case ho:
          o = 11;
          break e;
        case go:
          o = 14;
          break e;
        case lt:
          o = 16, r = null;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = Te(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ft(e, t, n, r) {
  return e = Te(7, e, r, t), e.lanes = n, e;
}
function Dl(e, t, n, r) {
  return e = Te(22, e, r, t), e.elementType = Os, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function si(e, t, n) {
  return e = Te(6, e, null, t), e.lanes = n, e;
}
function ai(e, t, n) {
  return t = Te(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function op(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Bl(0), this.expirationTimes = Bl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Bl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Jo(e, t, n, r, l, i, o, u, s) {
  return e = new op(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Te(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mo(i), e;
}
function up(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Yt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Nc(e) {
  if (!e) return St;
  e = e._reactInternals;
  e: {
    if (Wt(e) !== e || e.tag !== 1) throw Error(k(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ge(t.type)) {
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
    if (ge(n)) return Na(e, n, t);
  }
  return t;
}
function Tc(e, t, n, r, l, i, o, u, s) {
  return e = Jo(n, r, !0, e, l, i, o, u, s), e.context = Nc(null), n = e.current, r = ce(), l = vt(n), i = Ge(r, l), i.callback = t ?? null, ht(n, i, l), e.current.lanes = l, cr(e, l, r), ve(e, r), e;
}
function Il(e, t, n, r) {
  var l = t.current, i = ce(), o = vt(l);
  return n = Nc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ge(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ht(l, t, o), e !== null && (Fe(e, l, o, i), Ar(e, l, o)), o;
}
function ml(e) {
  if (e = e.current, !e.child) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function cs(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qo(e, t) {
  cs(e, t), (e = e.alternate) && cs(e, t);
}
function sp() {
  return null;
}
var Dc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function bo(e) {
  this._internalRoot = e;
}
zl.prototype.render = bo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Il(e, t, null, null);
};
zl.prototype.unmount = bo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function() {
      Il(null, e, null, null);
    }), t[Je] = null;
  }
};
function zl(e) {
  this._internalRoot = e;
}
zl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = oa();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++) ;
    ot.splice(n, 0, e), n === 0 && sa(e);
  }
};
function eu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Rl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function fs() {
}
function ap(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = ml(o);
        i.call(c);
      };
    }
    var o = Tc(t, r, e, 0, null, !1, !1, "", fs);
    return e._reactRootContainer = o, e[Je] = o.current, er(e.nodeType === 8 ? e.parentNode : e), Bt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = ml(s);
      u.call(c);
    };
  }
  var s = Jo(e, 0, !1, null, null, !1, !1, "", fs);
  return e._reactRootContainer = s, e[Je] = s.current, er(e.nodeType === 8 ? e.parentNode : e), Bt(function() {
    Il(t, s, n, r);
  }), s;
}
function Ll(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = ml(o);
        u.call(s);
      };
    }
    Il(t, o, e, l);
  } else o = ap(n, t, e, l, r);
  return ml(o);
}
la = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Mn(t.pendingLanes);
        n !== 0 && (ko(t, n | 1), ve(t, K()), !(L & 6) && (yn = K() + 500, Ct()));
      }
      break;
    case 13:
      Bt(function() {
        var r = qe(e, 1);
        if (r !== null) {
          var l = ce();
          Fe(r, e, 1, l);
        }
      }), qo(e, 1);
  }
};
So = function(e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = ce();
      Fe(t, e, 134217728, n);
    }
    qo(e, 134217728);
  }
};
ia = function(e) {
  if (e.tag === 13) {
    var t = vt(e), n = qe(e, t);
    if (n !== null) {
      var r = ce();
      Fe(n, e, t, r);
    }
    qo(e, t);
  }
};
oa = function() {
  return j;
};
ua = function(e, t) {
  var n = j;
  try {
    return j = e, t();
  } finally {
    j = n;
  }
};
Pi = function(e, t, n) {
  switch (t) {
    case "input":
      if (ki(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Cl(r);
            if (!l) throw Error(k(90));
            As(r), ki(r, l);
          }
        }
      }
      break;
    case "textarea":
      Hs(e, n);
      break;
    case "select":
      t = n.value, t != null && on(e, !!n.multiple, t, !1);
  }
};
Ys = Yo;
Xs = Bt;
var cp = { usingClientEntryPoint: !1, Events: [dr, qt, Cl, Qs, Ks, Yo] }, zn = { findFiberByHostInstance: It, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, fp = { bundleType: zn.bundleType, version: zn.version, rendererPackageName: zn.rendererPackageName, rendererConfig: zn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Js(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: zn.findFiberByHostInstance || sp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber) try {
    kl = Rr.inject(fp), Be = Rr;
  } catch {
  }
}
xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = cp;
xe.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!eu(t)) throw Error(k(200));
  return up(e, t, null, n);
};
xe.createRoot = function(e, t) {
  if (!eu(e)) throw Error(k(299));
  var n = !1, r = "", l = Dc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Jo(e, 1, !1, null, null, n, !1, r, l), e[Je] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new bo(t);
};
xe.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = Js(t), e = e === null ? null : e.stateNode, e;
};
xe.flushSync = function(e) {
  return Bt(e);
};
xe.hydrate = function(e, t, n) {
  if (!Rl(t)) throw Error(k(200));
  return Ll(null, e, t, !0, n);
};
xe.hydrateRoot = function(e, t, n) {
  if (!eu(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Dc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Tc(t, null, e, 1, n ?? null, l, !1, i, o), e[Je] = t.current, er(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new zl(t);
};
xe.render = function(e, t, n) {
  if (!Rl(t)) throw Error(k(200));
  return Ll(null, e, t, !1, n);
};
xe.unmountComponentAtNode = function(e) {
  if (!Rl(e)) throw Error(k(40));
  return e._reactRootContainer ? (Bt(function() {
    Ll(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Je] = null;
    });
  }), !0) : !1;
};
xe.unstable_batchedUpdates = Yo;
xe.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Rl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Ll(e, t, n, !1, r);
};
xe.version = "18.3.1-next-f1338f8080-20240426";
function Ic() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Ic);
    } catch (e) {
      console.error(e);
    }
}
Ic(), Is.exports = xe;
var dp = Is.exports, ds = dp;
Qn.createRoot = ds.createRoot, Qn.hydrateRoot = ds.hydrateRoot;
const zc = (e) => Math.max(0, Math.floor(e)), Rc = (e, t) => zc(e * t), Lc = (e, t = 1) => zc(e - t), ci = (e) => Rc(e, 2 / 3), pp = (e) => Rc(e, 1 / 2), We = (e) => {
  e.getStack(e.statusId) > 0 && e.setStack(e.statusId, 0);
}, fi = (e) => {
  const t = e.getStack(e.statusId);
  t > 0 && e.setStack(e.statusId, Lc(t));
}, Ce = [
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
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, ci(t)));
    }
  },
  {
    id: "Poison",
    name: "毒",
    attribute: { stack: "stackPoison", pending: "stackPoisonnext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, pp(t)));
    }
  },
  {
    id: "Tremor",
    name: "振動",
    attribute: { stack: "stacktremor", pending: "stacktremornext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, ci(t)));
    }
  },
  {
    id: "Bleeding",
    name: "出血",
    attribute: { stack: "stackBleeding", pending: "stackBleedingnext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || e.setStack(e.statusId, ci(t));
    }
  },
  {
    id: "Poise",
    name: "呼吸",
    attribute: { stack: "stackpoise", pending: "stackpoisenext" },
    hasPending: !0,
    onTurnEnd: (e) => fi(e)
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
    onTurnEnd: (e) => fi(e)
  },
  {
    id: "Bind",
    name: "束縛",
    attribute: { stack: "stackbind", pending: "stackbindnext" },
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "Paralysis",
    name: "麻痺",
    attribute: { stack: "stackParalysis", pending: "stackParalysisnext" },
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "Fear",
    name: "恐怖",
    attribute: { stack: "stackFear", pending: "stackFearnext" },
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "DamageUp",
    name: "ダメージ上昇",
    attribute: { stack: "stackDamageUp", pending: "stackDamageUpnext" },
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "DamageDown",
    name: "ダメージ減少",
    attribute: { stack: "stackDamageDown", pending: "stackDamageDownnext" },
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "PowerUp",
    name: "威力上昇",
    attribute: { stack: "stackPowerUp", pending: "stackPowerUpnext" },
    hasPending: !0,
    onTurnEnd: We
  },
  {
    id: "PowerDown",
    name: "威力減少",
    attribute: { stack: "stackPowerDown", pending: "stackPowerDownnext" },
    hasPending: !0,
    onTurnEnd: We
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
    onTurnEnd: We
  },
  {
    id: "Vulnerable",
    name: "脆弱",
    attribute: { stack: "stackVulnerable", pending: "stackVulnerablenext" },
    hasPending: !0,
    onTurnEnd: We
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
      t > 0 && e.setStack(e.statusId, Lc(t));
    }
  },
  {
    id: "FEOAwaken",
    name: "覚醒",
    attribute: { stack: "stackFEOAwaken", pending: "stackFEOAwakenNext" },
    hasPending: !0,
    onTurnEnd: (e) => fi(e)
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
], mp = Ce.map((e) => e.attribute.stack), hp = (e) => {
  var n;
  const t = (n = e.system) == null ? void 0 : n.attributes;
  return t != null && t.hp ? mp.some((r) => r in t) : !1;
}, gp = () => {
  var e;
  return (((e = canvas == null ? void 0 : canvas.tokens) == null ? void 0 : e.placeables) ?? []).filter((t) => {
    var n;
    return !!((n = t.actor) != null && n.id) && hp(t.actor);
  }).map((t) => {
    var n, r, l;
    return {
      actorId: ((n = t.actor) == null ? void 0 : n.id) ?? "",
      name: t.name ?? ((r = t.actor) == null ? void 0 : r.name) ?? "unknown",
      actorName: ((l = t.actor) == null ? void 0 : l.name) ?? "",
      disposition: t.document.disposition
    };
  });
}, Mc = () => {
  const [e, t] = W.useState([]);
  return W.useEffect(() => {
    t(gp());
  }, []), e;
};
class vp {
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
const nt = (e) => Math.max(0, Math.floor(e));
var oe;
class yp {
  constructor(t) {
    Cn(this, oe, /* @__PURE__ */ new Map());
    t && Object.entries(t).forEach(([n, r]) => {
      r && Y(this, oe).set(n, {
        stack: nt(r.stack),
        pending: nt(r.pending)
      });
    });
  }
  getState(t) {
    const n = Y(this, oe).get(t);
    return n ? { stack: n.stack, pending: n.pending } : { stack: 0, pending: 0 };
  }
  getStack(t) {
    var n;
    return ((n = Y(this, oe).get(t)) == null ? void 0 : n.stack) ?? 0;
  }
  getPending(t) {
    var n;
    return ((n = Y(this, oe).get(t)) == null ? void 0 : n.pending) ?? 0;
  }
  setState(t, n) {
    Y(this, oe).set(t, {
      stack: nt(n.stack),
      pending: nt(n.pending)
    });
  }
  setStack(t, n) {
    const r = Y(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.stack = nt(n), Y(this, oe).set(t, r);
  }
  setPending(t, n) {
    const r = Y(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.pending = nt(n), Y(this, oe).set(t, r);
  }
  addStack(t, n) {
    const r = Y(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.stack = nt(r.stack + n), Y(this, oe).set(t, r);
  }
  addPending(t, n) {
    const r = Y(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.pending = nt(r.pending + n), Y(this, oe).set(t, r);
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
}, kp = (e, t, n = 0) => {
  var i, o, u;
  const r = (u = (o = (i = e.system) == null ? void 0 : i.attributes) == null ? void 0 : o[t]) == null ? void 0 : u.max;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, Sp = (e) => {
  const t = new yp();
  return Ce.forEach((r) => {
    const l = r.attribute, i = ee(e, l.stack, 0), o = l.pending ? ee(e, l.pending, 0) : 0;
    t.setState(r.id, { stack: i, pending: o });
  }), new vp({
    id: e.id ?? "",
    name: e.name,
    hp: ee(e, "hp", 0),
    maxHp: kp(e, "hp", 0),
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
}, ps = (e) => {
  const t = {
    "system.attributes.hp.value": e.hp,
    "system.attributes.barrier.value": e.barrier,
    "system.attributes.constitution.value": e.constitution,
    "system.attributes.san.value": e.san
  };
  return Ce.forEach((r) => {
    const l = r.attribute, i = e.statuses.getState(r.id);
    t[`system.attributes.${l.stack}.value`] = i.stack, l.pending && (t[`system.attributes.${l.pending}.value`] = i.pending);
  }), t;
};
class hl {
  loadByActorId(t) {
    var r;
    const n = t ? ((r = game.actors) == null ? void 0 : r.get(t)) ?? null : null;
    return !n || !n.id ? null : {
      actorId: n.id,
      actor: n,
      combatant: Sp(n)
    };
  }
  async saveActor(t) {
    var r;
    const n = t.id ? ((r = game.actors) == null ? void 0 : r.get(t.id)) ?? null : null;
    n && await n.update(ps(t));
  }
  async save(t) {
    await t.actor.update(ps(t.combatant));
  }
}
class jc {
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
const wp = (e, t) => {
  const n = new jc(e, t);
  Ce.forEach((l) => {
    var i;
    (i = l.onDealDamage) == null || i.call(l, n.withStatus(l.id));
  });
}, Ep = (e, t) => {
  const n = new jc(e, t);
  Ce.forEach((l) => {
    var i;
    (i = l.onTakeDamage) == null || i.call(l, n.withStatus(l.id));
  });
}, Cp = (e) => {
  const t = e.statuses.getStack("DamageUp"), n = e.statuses.getStack("DamageDown"), r = e.directcheck;
  return t * 10 - n * 10 + (r ? 50 : 0);
}, xp = (e, t) => {
  let n = 0, r = !1;
  e.criticalcheck && (n += 20);
  const i = e.statuses.getStack("Poise");
  if (i > 0) {
    const o = Math.min(i * 5, 100);
    t() * 100 < o && (n += 20, r = !0);
  }
  return { special: n, poiseCritical: r };
}, _p = (e) => {
  const t = e.statuses.getStack("Protection"), n = e.statuses.getStack("Vulnerable");
  return t * 10 - n * 10;
}, Pp = (e) => {
  const t = e.isPlayer ? e.resist : e.resistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Np = (e) => {
  const t = e.isPlayer ? e.confResist : e.econfResistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Tp = (e, t = {}) => {
  const n = t.random ?? Math.random, r = Cp(e.attacker), { special: l, poiseCritical: i } = xp(e.attacker, n), o = _p(e.receiver), u = Pp(e.receiver), s = Np(e.receiver), c = (100 + r - o) / 100, m = (100 + l - u) / 100, h = (100 + l - s) / 100, p = e.baseDamage * Math.max(c, 0) * Math.max(m, 0), y = e.baseDamage * Math.max(c, 0) * Math.max(h, 0);
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
    dealConfDamage: y,
    poiseCritical: i
  };
}, Dp = (e, t = {}) => {
  const n = e.attacker, r = Tp(e, t), l = e.receiver;
  let i = l.hp, o = l.barrier, u = l.constitution, s = l.san, c = l.statuses.getStack("Sink");
  const m = l.doubleConstitution, h = Math.ceil(r.dealDamage), p = Math.ceil(r.dealConfDamage);
  let y = 0, g = 0;
  o > 0 && h > 0 && (y = Math.min(o, h), o -= y);
  const S = Math.max(h - y, 0);
  S > 0 && (i -= S, g = S);
  let I = 0;
  if (p > 0) {
    const w = p * (m ? 2 : 1);
    u = Math.max(u - w, 0), I = w;
  }
  let f = 0;
  const a = l.statuses.getStack("Sink");
  if (a > 0) {
    let w = a;
    const C = Math.min(s, w);
    s -= C, w -= C, f += C, w > 0 && (i -= w, g += w), c = Math.floor(a / 2);
  }
  const d = {
    ...r,
    barrierAbsorbed: y,
    hpDamageApplied: g,
    confDamageApplied: I,
    sanDamageApplied: f,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: s
  };
  l.hp = i, l.setBarrier(o), l.setConstitution(u), l.setSan(s), l.setHp(i), l.statuses.setStack("Sink", c);
  const v = {
    baseDamage: e.baseDamage,
    normalRatio: r.normalRatio,
    specialRatio: r.specialRatio,
    specialConfRatio: r.specialConfRatio,
    dealDamage: r.dealDamage,
    dealConfDamage: r.dealConfDamage,
    hpDamageApplied: g,
    confDamageApplied: I,
    sanDamageApplied: f,
    barrierAbsorbed: y,
    poiseCritical: r.poiseCritical,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: s
  };
  return wp(n, v), Ep(l, v), { result: d, attacker: n, receiver: l };
}, ct = {
  SECRET: -2,
  HOSTILE: -1,
  NEUTRAL: 0,
  FRIENDLY: 1
}, Ip = (e) => {
  var t, n;
  return ((t = e.find((r) => r.disposition === ct.FRIENDLY)) == null ? void 0 : t.actorId) ?? ((n = e[0]) == null ? void 0 : n.actorId) ?? "";
}, zp = (e, t) => {
  var n, r;
  return ((n = e.find((l) => l.actorId !== t && l.disposition !== ct.FRIENDLY)) == null ? void 0 : n.actorId) ?? ((r = e.find((l) => l.actorId !== t)) == null ? void 0 : r.actorId) ?? "";
}, Rp = (e) => {
  const [t, n] = W.useState(""), [r, l] = W.useState(""), [i, o] = W.useState(""), [u, s] = W.useState(null), [c, m] = W.useState(!1), h = W.useMemo(() => {
    const y = /* @__PURE__ */ new Map();
    return e.forEach((g) => y.set(g.actorId, g)), y;
  }, [e]);
  return W.useEffect(() => {
    if (!e.length) {
      t && n(""), r && l("");
      return;
    }
    const y = new Set(e.map((I) => I.actorId));
    let g = t;
    (!g || !y.has(g)) && (g = Ip(e));
    let S = r;
    (!S || !y.has(S) || S === g) && (S = zp(e, g)), g !== t && n(g), S !== r && l(S);
  }, [e, t, r]), {
    attackerId: t,
    receiverId: r,
    baseDamage: i,
    result: u,
    running: c,
    setAttackerId: n,
    setReceiverId: l,
    setBaseDamage: o,
    run: async () => {
      var I, f, a, d, v, w;
      const y = Number(i);
      if (!Number.isFinite(y) || y <= 0) {
        (I = ui.notifications) == null || I.error("ダメージに正の数値を入力してください");
        return;
      }
      const g = t ? h.get(t) : void 0, S = r ? h.get(r) : void 0;
      if (!g || !S) {
        (f = ui.notifications) == null || f.error("攻撃者と防御者を選択してください");
        return;
      }
      if (t === r) {
        (a = ui.notifications) == null || a.error("攻撃者と防御者は別のキャラクターを選んでください");
        return;
      }
      try {
        m(!0);
        const C = new hl(), E = C.loadByActorId(t), N = C.loadByActorId(r);
        if (!E || !N) {
          (d = ui.notifications) == null || d.error("攻撃者または防御者のデータを取得できませんでした");
          return;
        }
        const { result: M, attacker: D, receiver: ye } = Dp({
          attacker: E.combatant,
          receiver: N.combatant,
          baseDamage: y
        });
        await Promise.all([
          C.saveActor(D),
          C.saveActor(ye)
        ]);
        const xt = `
${g.name} → ${S.name}<br/>
基礎ダメージ: ${y}<br/>
HPダメージ: ${M.hpDamageApplied} (バリア吸収: ${M.barrierAbsorbed})<br/>
混乱ダメージ: ${M.confDamageApplied}<br/>
SANダメージ(沈潜): ${M.sanDamageApplied}<br/>
`;
        await ChatMessage.create({
          speaker: ChatMessage.getSpeaker({ actor: E.actor }),
          content: xt
        }), s(M), (v = ui.notifications) == null || v.info(
          `${g.name} が ${S.name} にダメージを適用しました`
        );
      } catch (C) {
        console.error("[ponkotu-system] damage calc failed", C), (w = ui.notifications) == null || w.error("計算または適用に失敗しました。コンソールを確認してください。");
      } finally {
        m(!1);
      }
    }
  };
}, Lp = (e) => {
  switch (e) {
    case ct.FRIENDLY:
      return "友好的";
    case ct.NEUTRAL:
      return "中立";
    case ct.HOSTILE:
      return "敵対的";
    case ct.SECRET:
      return "秘密";
    default:
      return "不明";
  }
}, io = (e) => `${e.name}（${e.actorName}） (${Lp(e.disposition)})`, Mp = [
  { value: "random:ally", label: "ランダム（味方）" },
  { value: "random:enemy", label: "ランダム（敵）" },
  { value: "random:all", label: "ランダム（全体）" }
], rt = (e) => Number.isFinite(e) ? e.toLocaleString() : "-", jp = ({ result: e }) => /* @__PURE__ */ x.jsxs("div", { className: "ponkotu-damage__result", children: [
  /* @__PURE__ */ x.jsxs("div", { children: [
    "通常倍率: 攻撃者 ",
    e.attackerNormalPercentage,
    "% / 防御者",
    " ",
    e.receiverNormalPercentage,
    "% → 係数 ",
    e.normalRatio.toFixed(2)
  ] }),
  /* @__PURE__ */ x.jsxs("div", { children: [
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
  /* @__PURE__ */ x.jsxs("div", { children: [
    "特殊(耐性限界)倍率: 防御者 ",
    e.receiverSpecialConfPercentage,
    "% → 係数",
    " ",
    e.specialConfRatio.toFixed(2)
  ] }),
  /* @__PURE__ */ x.jsxs("div", { children: [
    "HPダメージ: ",
    rt(e.hpDamageApplied),
    " （バリア吸収",
    " ",
    rt(e.barrierAbsorbed),
    "）"
  ] }),
  /* @__PURE__ */ x.jsxs("div", { children: [
    "耐性限界ダメージ: ",
    rt(e.confDamageApplied)
  ] }),
  /* @__PURE__ */ x.jsxs("div", { children: [
    "SANダメージ(沈潜): ",
    rt(e.sanDamageApplied)
  ] }),
  /* @__PURE__ */ x.jsxs("div", { children: [
    "残り HP ",
    rt(e.hpAfter),
    " / バリア",
    " ",
    rt(e.barrierAfter),
    " / CON",
    " ",
    rt(e.constitutionAfter),
    " / SAN",
    " ",
    rt(e.sanAfter)
  ] })
] }), Op = ({ tokens: e }) => {
  const {
    attackerId: t,
    receiverId: n,
    baseDamage: r,
    result: l,
    running: i,
    setAttackerId: o,
    setReceiverId: u,
    setBaseDamage: s,
    run: c
  } = Rp(e);
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ x.jsx("h3", { children: "ダメージ計算" }) }),
    /* @__PURE__ */ x.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ x.jsxs("label", { className: "ponkotu-damage__label", children: [
        "攻撃者",
        /* @__PURE__ */ x.jsxs("select", { value: t, onChange: (m) => o(m.target.value), children: [
          /* @__PURE__ */ x.jsx("option", { value: "", children: "選択してください" }),
          e.map((m) => /* @__PURE__ */ x.jsx("option", { value: m.actorId, children: io(m) }, m.actorId))
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs("label", { className: "ponkotu-damage__label", children: [
        "防御者",
        /* @__PURE__ */ x.jsxs("select", { value: n, onChange: (m) => u(m.target.value), children: [
          /* @__PURE__ */ x.jsx("option", { value: "", children: "選択してください" }),
          e.map((m) => /* @__PURE__ */ x.jsx("option", { value: m.actorId, children: io(m) }, m.actorId))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ x.jsxs("label", { className: "ponkotu-damage__label", children: [
      "基礎ダメージ",
      /* @__PURE__ */ x.jsx(
        "input",
        {
          type: "number",
          value: r,
          onChange: (m) => s(m.target.value),
          placeholder: "例: 12"
        }
      )
    ] }),
    /* @__PURE__ */ x.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ x.jsx("button", { onClick: c, disabled: i || e.length < 2, children: i ? "計算中..." : "計算して適用" }),
      e.length < 2 && /* @__PURE__ */ x.jsx("span", { className: "ponkotu-damage__hint", children: "※ トークンが2体以上必要です" })
    ] }),
    l && /* @__PURE__ */ x.jsx(jp, { result: l })
  ] });
};
class ms {
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
class hs {
  static turnStart(t) {
    const n = new ms(t), r = Ce;
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
    const n = new ms(t);
    Ce.forEach((l) => {
      var i;
      (i = l.onTurnEnd) == null || i.call(l, n.withStatus(l.id));
    }), n.setBarrier(0);
  }
}
const gs = (e) => Array.from(new Set(e.map((t) => t.actorId).filter((t) => t))), Fp = (e) => {
  const [t, n] = W.useState(!1), r = async () => {
    var u, s, c;
    const o = gs(e);
    if (!o.length)
      return (u = ui.notifications) == null || u.error("ターン開始処理の対象が見つかりません"), 0;
    try {
      const m = new hl(), h = o.map((p) => m.loadByActorId(p)).filter((p) => !!p);
      return h.length ? (h.forEach((p) => {
        hs.turnStart(p.combatant);
      }), await Promise.all(h.map((p) => m.saveActor(p.combatant))), h.length) : ((s = ui.notifications) == null || s.error("ターン開始処理の対象を取得できませんでした"), 0);
    } catch (m) {
      console.error("[ponkotu-system] turn process failed", m), (c = ui.notifications) == null || c.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  }, l = async () => {
    var u, s, c;
    const o = gs(e);
    if (!o.length)
      return (u = ui.notifications) == null || u.error("ターン終了処理の対象が見つかりません"), 0;
    try {
      const m = new hl(), h = o.map((p) => m.loadByActorId(p)).filter((p) => !!p);
      return h.length ? (h.forEach((p) => {
        hs.turnEnd(p.combatant);
      }), await Promise.all(h.map((p) => m.saveActor(p.combatant))), h.length) : ((s = ui.notifications) == null || s.error("ターン終了処理の対象を取得できませんでした"), 0);
    } catch (m) {
      console.error("[ponkotu-system] turn end failed", m), (c = ui.notifications) == null || c.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  };
  return { turnRunning: t, runTurnProcess: async () => {
    var o;
    if (!t)
      try {
        n(!0);
        const u = await l(), s = await r(), c = u > 0 ? u : s;
        c > 0 && ((o = ui.notifications) == null || o.info(`ターン処理を${c}体に適用しました`));
      } finally {
        n(!1);
      }
  } };
}, Ap = ({ tokens: e }) => {
  const { turnRunning: t, runTurnProcess: n } = Fp(e);
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ x.jsx("h3", { style: { margin: "8px 0" }, children: "ターン処理" }) }),
    /* @__PURE__ */ x.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ x.jsx("button", { onClick: n, disabled: t || e.length < 1, children: t ? "処理中..." : "ターン処理(終了→開始)" }) })
  ] });
}, Up = () => {
  const e = Mc();
  return /* @__PURE__ */ x.jsxs("div", { className: "ponkotu-damage", children: [
    /* @__PURE__ */ x.jsx(Op, { tokens: e }),
    /* @__PURE__ */ x.jsx(Ap, { tokens: e })
  ] });
}, Hp = "ponkotu-system";
var Lt;
class $p extends Application {
  constructor() {
    super(...arguments);
    Cn(this, Lt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-damage-calc",
      title: "管理者用フォーム",
      template: `modules/${Hp}/templates/damage-calc.html`,
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
    Nt(this, Lt, Qn.createRoot(r)), Y(this, Lt).render(/* @__PURE__ */ x.jsx(Up, {}));
  }
  async close(n) {
    var r;
    return (r = Y(this, Lt)) == null || r.unmount(), Nt(this, Lt, null), super.close(n);
  }
}
Lt = new WeakMap();
const Bp = ({ onSubmit: e }) => {
  const [t, n] = W.useState(""), [r, l] = W.useState(""), i = W.useMemo(() => t.trim().length === 0, [t]), o = (u) => {
    u.preventDefault();
    const s = { name: t.trim(), note: r.trim() };
    console.log("[ponkotu-system] SimpleForm submit", s), e == null || e(s), l("");
  };
  return /* @__PURE__ */ x.jsxs("form", { onSubmit: o, className: "ponkotu-form", children: [
    /* @__PURE__ */ x.jsxs("label", { className: "ponkotu-form__label", children: [
      "名前",
      /* @__PURE__ */ x.jsx(
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
    /* @__PURE__ */ x.jsxs("label", { className: "ponkotu-form__label", children: [
      "メモ",
      /* @__PURE__ */ x.jsx(
        "textarea",
        {
          className: "ponkotu-form__textarea",
          value: r,
          placeholder: "送信したいメモ",
          onChange: (u) => l(u.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ x.jsx("div", { className: "ponkotu-form__footer", children: /* @__PURE__ */ x.jsx("button", { type: "submit", disabled: i, children: "送信" }) })
  ] });
}, Vp = () => {
  const e = [];
  return Ce.forEach((n) => {
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
}, Wp = "ponkotu-system";
let vs = !1;
var Mt;
class Qp extends Application {
  constructor() {
    super(...arguments);
    Cn(this, Mt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-react-form",
      title: "React フォーム",
      template: `modules/${Wp}/templates/react-form.html`,
      width: 420,
      height: 400,
      resizable: !0
    });
  }
  activateListeners(n) {
    var l;
    if (super.activateListeners(n), !vs) {
      const i = Vp();
      if (i.length > 0) {
        vs = !0;
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
    Nt(this, Mt, Qn.createRoot(r)), Y(this, Mt).render(
      /* @__PURE__ */ x.jsx(
        Bp,
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
    return (r = Y(this, Mt)) == null || r.unmount(), Nt(this, Mt, null), super.close(n);
  }
}
Mt = new WeakMap();
const Kp = (e) => Number.isInteger(e) && e >= 1, Yp = async (e, t) => {
  if (!t.actorId)
    throw new Error("actorId is required");
  if (!Kp(t.stackDelta))
    throw new Error("stackDelta must be a positive integer");
  const n = t.target ?? "stack", r = Ce.find((s) => s.id === t.statusId);
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
let gl = null;
const Xp = async (e) => {
  const t = new hl();
  return Yp(t, e);
}, Gp = (e) => {
  gl = socketlib.registerModule(e), gl.register("applyStatusStack", Xp);
}, Zp = (e) => {
  if (!gl)
    throw new Error("socketlib が初期化されていません");
  return gl.executeAsGM("applyStatusStack", e);
}, Jp = Ce.map((e) => e.id), qp = () => Jp[0] ?? "Burned", di = (e) => e === "random:ally" || e === "random:enemy" || e === "random:all", bp = (e, t) => e === "random:all" ? t : e === "random:ally" ? t.filter((n) => n.disposition === ct.FRIENDLY) : t.filter((n) => n.disposition !== ct.FRIENDLY), em = (e) => {
  const [t, n] = W.useState(""), [r, l] = W.useState(qp), [i, o] = W.useState("stack"), [u, s] = W.useState("1"), [c, m] = W.useState(!1), h = Ce.find(
    (g) => g.id === r
  ), p = !!(h && "pending" in h.attribute && h.attribute.pending);
  return W.useEffect(() => {
    var S;
    if (!e.length) {
      t && !di(t) && n("");
      return;
    }
    const g = new Set(e.map((I) => I.actorId));
    (!t || !di(t) && !g.has(t)) && n(((S = e[0]) == null ? void 0 : S.actorId) ?? "");
  }, [e, t]), W.useEffect(() => {
    !p && i === "pending" && o("stack");
  }, [p, i]), {
    statusTargetValue: t,
    statusId: r,
    applyTarget: i,
    canApplyPending: p,
    statusStack: u,
    statusRunning: c,
    setStatusTargetValue: n,
    setStatusId: l,
    setApplyTarget: o,
    setStatusStack: s,
    runApplyStatus: async () => {
      var I, f, a, d, v, w, C;
      if (c) return;
      const g = Number(u);
      if (!Number.isInteger(g) || g < 1) {
        (I = ui.notifications) == null || I.error("スタック数には1以上の整数を入力してください");
        return;
      }
      let S;
      if (di(t)) {
        const E = bp(t, e);
        if (E.length === 0) {
          (f = ui.notifications) == null || f.error("ランダム対象の候補が0件です。対象を選び直してください。");
          return;
        }
        S = E[Math.floor(Math.random() * E.length)].actorId;
      } else
        S = t;
      if (!S) {
        (a = ui.notifications) == null || a.error("状態異常を付与する対象を選択してください");
        return;
      }
      try {
        m(!0);
        const E = await Zp({
          actorId: S,
          statusId: r,
          stackDelta: g,
          target: i
        }), N = ((d = Ce.find((D) => D.id === E.statusId)) == null ? void 0 : d.name) ?? E.statusId, M = E.target === "pending" ? "next" : "現在";
        (v = ui.notifications) == null || v.info(
          `${E.actorName} に ${E.statusId}(${M}) を ${g} 付与しました (${E.before}→${E.after})`
        ), await ChatMessage.create({
          speaker: { alias: ((w = game.user) == null ? void 0 : w.name) ?? "不明" },
          content: `${E.actorName} に ${N}（${M}）を ${g} 付与しました（${E.before} → ${E.after}）`
        });
      } catch (E) {
        console.error("[ponkotu-system] apply status failed", E), (C = ui.notifications) == null || C.error("状態異常の付与に失敗しました。コンソールを確認してください。");
      } finally {
        m(!1);
      }
    }
  };
}, tm = ({ tokens: e }) => {
  const {
    statusTargetValue: t,
    statusId: n,
    applyTarget: r,
    canApplyPending: l,
    statusStack: i,
    statusRunning: o,
    setStatusTargetValue: u,
    setStatusId: s,
    setApplyTarget: c,
    setStatusStack: m,
    runApplyStatus: h
  } = em(e);
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ x.jsx("h3", { style: { margin: "8px 0" }, children: "状態異常付与" }) }),
    /* @__PURE__ */ x.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ x.jsxs("label", { className: "ponkotu-damage__label", children: [
        "対象キャラ",
        /* @__PURE__ */ x.jsxs(
          "select",
          {
            value: t,
            onChange: (p) => u(p.target.value),
            children: [
              /* @__PURE__ */ x.jsx("option", { value: "", children: "選択してください" }),
              e.map((p) => /* @__PURE__ */ x.jsx("option", { value: p.actorId, children: io(p) }, `status-target-${p.actorId}`)),
              /* @__PURE__ */ x.jsx("optgroup", { label: "ランダム", children: Mp.map((p) => /* @__PURE__ */ x.jsx("option", { value: p.value, children: p.label }, p.value)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ x.jsxs("label", { className: "ponkotu-damage__label", children: [
        "状態異常",
        /* @__PURE__ */ x.jsx(
          "select",
          {
            value: n,
            onChange: (p) => s(p.target.value),
            children: Ce.map((p) => /* @__PURE__ */ x.jsx("option", { value: p.id, children: p.name }, p.id))
          }
        )
      ] }),
      /* @__PURE__ */ x.jsxs("label", { className: "ponkotu-damage__label", children: [
        "付与先",
        /* @__PURE__ */ x.jsxs(
          "select",
          {
            value: r,
            onChange: (p) => c(p.target.value),
            children: [
              /* @__PURE__ */ x.jsx("option", { value: "stack", children: "現在" }),
              /* @__PURE__ */ x.jsx("option", { value: "pending", disabled: !l, children: "次ターン(next)" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ x.jsxs("label", { className: "ponkotu-damage__label", children: [
      "スタック数",
      /* @__PURE__ */ x.jsx(
        "input",
        {
          type: "number",
          min: 1,
          step: 1,
          value: i,
          onChange: (p) => m(p.target.value),
          placeholder: "例: 3"
        }
      )
    ] }),
    /* @__PURE__ */ x.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ x.jsx("button", { onClick: h, disabled: o || e.length < 1, children: o ? "付与中..." : "状態異常を付与" }) })
  ] });
}, nm = () => {
  const e = Mc();
  return /* @__PURE__ */ x.jsx("div", { className: "ponkotu-damage", children: /* @__PURE__ */ x.jsx(tm, { tokens: e }) });
}, rm = "ponkotu-system";
var jt;
class lm extends Application {
  constructor() {
    super(...arguments);
    Cn(this, jt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-status-apply",
      title: "状態異常付与フォーム",
      template: `modules/${rm}/templates/status-apply.html`,
      width: 520,
      height: 300,
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
    Nt(this, jt, Qn.createRoot(r)), Y(this, jt).render(/* @__PURE__ */ x.jsx(nm, {}));
  }
  async close(n) {
    var r;
    return (r = Y(this, jt)) == null || r.unmount(), Nt(this, jt, null), super.close(n);
  }
}
jt = new WeakMap();
const vl = "ponkotu-system", Kt = (...e) => console.log(`[${vl}]`, ...e), Oc = () => new Qp().render(!0), Fc = () => new $p().render(!0), Ac = () => new lm().render(!0), ys = () => {
  var n;
  const e = (n = game.modules) == null ? void 0 : n.get(vl);
  if (!e) {
    console.warn(`[${vl}] game.modules からモジュールを取得できませんでした`);
    return;
  }
  const t = e;
  t.api || (t.api = {}), t.api.showReactForm = Oc, t.api.showDamageCalc = Fc, t.api.showStatusApply = Ac, Kt("API を登録しました", t.api);
}, im = () => {
  Kt("ES module loaded"), Hooks.once("ready", () => {
    Kt("Hooks.once ready fired"), ys(), globalThis.ponkotuSystem = { showReactForm: Oc, showDamageCalc: Fc, showStatusApply: Ac }, Kt("React フォーム API を初期化しました");
  }), Hooks.once("init", () => {
    Kt("Hooks.once init fired"), ys();
  }), Hooks.once("socketlib.ready", () => {
    Kt("Hooks.once socketlib.ready fired"), Gp(vl);
  });
};
im();
export {
  Fc as showDamageCalc,
  Oc as showReactForm,
  Ac as showStatusApply
};
