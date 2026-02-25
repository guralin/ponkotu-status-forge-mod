var qo = (e) => {
  throw TypeError(e);
};
var bo = (e, t, n) => t.has(e) || qo("Cannot " + n);
var J = (e, t, n) => (bo(e, t, "read from private field"), n ? n.call(e) : t.get(e)), dr = (e, t, n) => t.has(e) ? qo("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), kn = (e, t, n, r) => (bo(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var hs = { exports: {} }, ml = {}, gs = { exports: {} }, R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ir = Symbol.for("react.element"), jc = Symbol.for("react.portal"), Mc = Symbol.for("react.fragment"), Oc = Symbol.for("react.strict_mode"), Fc = Symbol.for("react.profiler"), Ac = Symbol.for("react.provider"), Uc = Symbol.for("react.context"), Hc = Symbol.for("react.forward_ref"), $c = Symbol.for("react.suspense"), Bc = Symbol.for("react.memo"), Vc = Symbol.for("react.lazy"), eu = Symbol.iterator;
function Wc(e) {
  return e === null || typeof e != "object" ? null : (e = eu && e[eu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var vs = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ys = Object.assign, ks = {};
function hn(e, t, n) {
  this.props = e, this.context = t, this.refs = ks, this.updater = n || vs;
}
hn.prototype.isReactComponent = {};
hn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
hn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Ss() {
}
Ss.prototype = hn.prototype;
function no(e, t, n) {
  this.props = e, this.context = t, this.refs = ks, this.updater = n || vs;
}
var ro = no.prototype = new Ss();
ro.constructor = no;
ys(ro, hn.prototype);
ro.isPureReactComponent = !0;
var tu = Array.isArray, ws = Object.prototype.hasOwnProperty, lo = { current: null }, Es = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cs(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) ws.call(t, r) && !Es.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: ir, type: e, key: i, ref: o, props: l, _owner: lo.current };
}
function Qc(e, t) {
  return { $$typeof: ir, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function io(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ir;
}
function Kc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var nu = /\/+/g;
function Ll(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Kc("" + e.key) : t.toString(36);
}
function Ir(e, t, n, r, l) {
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
        case ir:
        case jc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Ll(o, 0) : r, tu(l) ? (n = "", e != null && (n = e.replace(nu, "$&/") + "/"), Ir(l, t, n, "", function(c) {
    return c;
  })) : l != null && (io(l) && (l = Qc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(nu, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", tu(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Ll(i, u);
    o += Ir(i, t, n, s, l);
  }
  else if (s = Wc(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Ll(i, u++), o += Ir(i, t, n, s, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function pr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Ir(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function Yc(e) {
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
var fe = { current: null }, zr = { transition: null }, Xc = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: zr, ReactCurrentOwner: lo };
function xs() {
  throw Error("act(...) is not supported in production builds of React.");
}
R.Children = { map: pr, forEach: function(e, t, n) {
  pr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return pr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return pr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!io(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
R.Component = hn;
R.Fragment = Mc;
R.Profiler = Fc;
R.PureComponent = no;
R.StrictMode = Oc;
R.Suspense = $c;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Xc;
R.act = xs;
R.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ys({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = lo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) ws.call(t, s) && !Es.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: ir, type: e.type, key: l, ref: i, props: r, _owner: o };
};
R.createContext = function(e) {
  return e = { $$typeof: Uc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Ac, _context: e }, e.Consumer = e;
};
R.createElement = Cs;
R.createFactory = function(e) {
  var t = Cs.bind(null, e);
  return t.type = e, t;
};
R.createRef = function() {
  return { current: null };
};
R.forwardRef = function(e) {
  return { $$typeof: Hc, render: e };
};
R.isValidElement = io;
R.lazy = function(e) {
  return { $$typeof: Vc, _payload: { _status: -1, _result: e }, _init: Yc };
};
R.memo = function(e, t) {
  return { $$typeof: Bc, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function(e) {
  var t = zr.transition;
  zr.transition = {};
  try {
    e();
  } finally {
    zr.transition = t;
  }
};
R.unstable_act = xs;
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
gs.exports = R;
var W = gs.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gc = W, Zc = Symbol.for("react.element"), Jc = Symbol.for("react.fragment"), qc = Object.prototype.hasOwnProperty, bc = Gc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ef = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ps(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) qc.call(t, r) && !ef.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: Zc, type: e, key: i, ref: o, props: l, _owner: bc.current };
}
ml.Fragment = Jc;
ml.jsx = Ps;
ml.jsxs = Ps;
hs.exports = ml;
var x = hs.exports, Br = {}, _s = { exports: {} }, Ce = {}, Ns = { exports: {} }, Ds = {};
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
  function t(P, D) {
    var I = P.length;
    P.push(D);
    e: for (; 0 < I; ) {
      var Q = I - 1 >>> 1, Z = P[Q];
      if (0 < l(Z, D)) P[Q] = D, P[I] = Z, I = Q;
      else break e;
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0];
  }
  function r(P) {
    if (P.length === 0) return null;
    var D = P[0], I = P.pop();
    if (I !== D) {
      P[0] = I;
      e: for (var Q = 0, Z = P.length, cr = Z >>> 1; Q < cr; ) {
        var xt = 2 * (Q + 1) - 1, Rl = P[xt], Pt = xt + 1, fr = P[Pt];
        if (0 > l(Rl, I)) Pt < Z && 0 > l(fr, Rl) ? (P[Q] = fr, P[Pt] = I, Q = Pt) : (P[Q] = Rl, P[xt] = I, Q = xt);
        else if (Pt < Z && 0 > l(fr, I)) P[Q] = fr, P[Pt] = I, Q = Pt;
        else break e;
      }
    }
    return D;
  }
  function l(P, D) {
    var I = P.sortIndex - D.sortIndex;
    return I !== 0 ? I : P.id - D.id;
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
  var s = [], c = [], m = 1, h = null, p = 3, y = !1, v = !1, S = !1, T = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(P) {
    for (var D = n(c); D !== null; ) {
      if (D.callback === null) r(c);
      else if (D.startTime <= P) r(c), D.sortIndex = D.expirationTime, t(s, D);
      else break;
      D = n(c);
    }
  }
  function g(P) {
    if (S = !1, d(P), !v) if (n(s) !== null) v = !0, Il(w);
    else {
      var D = n(c);
      D !== null && zl(g, D.startTime - P);
    }
  }
  function w(P, D) {
    v = !1, S && (S = !1, f(N), N = -1), y = !0;
    var I = p;
    try {
      for (d(D), h = n(s); h !== null && (!(h.expirationTime > D) || P && !ye()); ) {
        var Q = h.callback;
        if (typeof Q == "function") {
          h.callback = null, p = h.priorityLevel;
          var Z = Q(h.expirationTime <= D);
          D = e.unstable_now(), typeof Z == "function" ? h.callback = Z : h === n(s) && r(s), d(D);
        } else r(s);
        h = n(s);
      }
      if (h !== null) var cr = !0;
      else {
        var xt = n(c);
        xt !== null && zl(g, xt.startTime - D), cr = !1;
      }
      return cr;
    } finally {
      h = null, p = I, y = !1;
    }
  }
  var E = !1, _ = null, N = -1, M = 5, z = -1;
  function ye() {
    return !(e.unstable_now() - z < M);
  }
  function Ct() {
    if (_ !== null) {
      var P = e.unstable_now();
      z = P;
      var D = !0;
      try {
        D = _(!0, P);
      } finally {
        D ? yn() : (E = !1, _ = null);
      }
    } else E = !1;
  }
  var yn;
  if (typeof a == "function") yn = function() {
    a(Ct);
  };
  else if (typeof MessageChannel < "u") {
    var Jo = new MessageChannel(), Lc = Jo.port2;
    Jo.port1.onmessage = Ct, yn = function() {
      Lc.postMessage(null);
    };
  } else yn = function() {
    T(Ct, 0);
  };
  function Il(P) {
    _ = P, E || (E = !0, yn());
  }
  function zl(P, D) {
    N = T(function() {
      P(e.unstable_now());
    }, D);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(P) {
    P.callback = null;
  }, e.unstable_continueExecution = function() {
    v || y || (v = !0, Il(w));
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
        var D = 3;
        break;
      default:
        D = p;
    }
    var I = p;
    p = D;
    try {
      return P();
    } finally {
      p = I;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(P, D) {
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
    var I = p;
    p = P;
    try {
      return D();
    } finally {
      p = I;
    }
  }, e.unstable_scheduleCallback = function(P, D, I) {
    var Q = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? Q + I : Q) : I = Q, P) {
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
    return Z = I + Z, P = { id: m++, callback: D, priorityLevel: P, startTime: I, expirationTime: Z, sortIndex: -1 }, I > Q ? (P.sortIndex = I, t(c, P), n(s) === null && P === n(c) && (S ? (f(N), N = -1) : S = !0, zl(g, I - Q))) : (P.sortIndex = Z, t(s, P), v || y || (v = !0, Il(w))), P;
  }, e.unstable_shouldYield = ye, e.unstable_wrapCallback = function(P) {
    var D = p;
    return function() {
      var I = p;
      p = D;
      try {
        return P.apply(this, arguments);
      } finally {
        p = I;
      }
    };
  };
})(Ds);
Ns.exports = Ds;
var tf = Ns.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nf = W, Ee = tf;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Ts = /* @__PURE__ */ new Set(), Bn = {};
function Ht(e, t) {
  sn(e, t), sn(e + "Capture", t);
}
function sn(e, t) {
  for (Bn[e] = t, e = 0; e < t.length; e++) Ts.add(t[e]);
}
var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), si = Object.prototype.hasOwnProperty, rf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ru = {}, lu = {};
function lf(e) {
  return si.call(lu, e) ? !0 : si.call(ru, e) ? !1 : rf.test(e) ? lu[e] = !0 : (ru[e] = !0, !1);
}
function of(e, t, n, r) {
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
function uf(e, t, n, r) {
  if (t === null || typeof t > "u" || of(e, t, n, r)) return !0;
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
var oo = /[\-:]([a-z])/g;
function uo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    oo,
    uo
  );
  re[t] = new de(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(oo, uo);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(oo, uo);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function so(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (uf(t, n, l, r) && (n = null), r || l === null ? lf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = nf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, mr = Symbol.for("react.element"), Vt = Symbol.for("react.portal"), Wt = Symbol.for("react.fragment"), ao = Symbol.for("react.strict_mode"), ai = Symbol.for("react.profiler"), Is = Symbol.for("react.provider"), zs = Symbol.for("react.context"), co = Symbol.for("react.forward_ref"), ci = Symbol.for("react.suspense"), fi = Symbol.for("react.suspense_list"), fo = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), Rs = Symbol.for("react.offscreen"), iu = Symbol.iterator;
function Sn(e) {
  return e === null || typeof e != "object" ? null : (e = iu && e[iu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, jl;
function Dn(e) {
  if (jl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    jl = t && t[1] || "";
  }
  return `
` + jl + e;
}
var Ml = !1;
function Ol(e, t) {
  if (!e || Ml) return "";
  Ml = !0;
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
    Ml = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? Dn(e) : "";
}
function sf(e) {
  switch (e.tag) {
    case 5:
      return Dn(e.type);
    case 16:
      return Dn("Lazy");
    case 13:
      return Dn("Suspense");
    case 19:
      return Dn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Ol(e.type, !1), e;
    case 11:
      return e = Ol(e.type.render, !1), e;
    case 1:
      return e = Ol(e.type, !0), e;
    default:
      return "";
  }
}
function di(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Wt:
      return "Fragment";
    case Vt:
      return "Portal";
    case ai:
      return "Profiler";
    case ao:
      return "StrictMode";
    case ci:
      return "Suspense";
    case fi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case zs:
      return (e.displayName || "Context") + ".Consumer";
    case Is:
      return (e._context.displayName || "Context") + ".Provider";
    case co:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case fo:
      return t = e.displayName || null, t !== null ? t : di(e.type) || "Memo";
    case lt:
      t = e._payload, e = e._init;
      try {
        return di(e(t));
      } catch {
      }
  }
  return null;
}
function af(e) {
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
      return di(t);
    case 8:
      return t === ao ? "StrictMode" : "Mode";
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
function yt(e) {
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
function Ls(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function cf(e) {
  var t = Ls(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function hr(e) {
  e._valueTracker || (e._valueTracker = cf(e));
}
function js(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ls(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Vr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function pi(e, t) {
  var n = t.checked;
  return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function ou(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = yt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ms(e, t) {
  t = t.checked, t != null && so(e, "checked", t, !1);
}
function mi(e, t) {
  Ms(e, t);
  var n = yt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? hi(e, t.type, n) : t.hasOwnProperty("defaultValue") && hi(e, t.type, yt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function uu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function hi(e, t, n) {
  (t !== "number" || Vr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Tn = Array.isArray;
function tn(e, t, n, r) {
  if (e = e.options, t) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + yt(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        e[l].selected = !0, r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function gi(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function su(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (Tn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: yt(n) };
}
function Os(e, t) {
  var n = yt(t.value), r = yt(t.defaultValue);
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
function vi(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Fs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var gr, As = function(e) {
  return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
    MSApp.execUnsafeLocalFunction(function() {
      return e(t, n, r, l);
    });
  } : e;
}(function(e, t) {
  if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
  else {
    for (gr = gr || document.createElement("div"), gr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = gr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
    for (; t.firstChild; ) e.appendChild(t.firstChild);
  }
});
function Vn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ln = {
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
}, ff = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ln).forEach(function(e) {
  ff.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Ln[t] = Ln[e];
  });
});
function Us(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Ln.hasOwnProperty(e) && Ln[e] ? ("" + t).trim() : t + "px";
}
function Hs(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Us(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var df = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function yi(e, t) {
  if (t) {
    if (df[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function ki(e, t) {
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
var Si = null;
function po(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var wi = null, nn = null, rn = null;
function cu(e) {
  if (e = sr(e)) {
    if (typeof wi != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = kl(t), wi(e.stateNode, e.type, t));
  }
}
function $s(e) {
  nn ? rn ? rn.push(e) : rn = [e] : nn = e;
}
function Bs() {
  if (nn) {
    var e = nn, t = rn;
    if (rn = nn = null, cu(e), t) for (e = 0; e < t.length; e++) cu(t[e]);
  }
}
function Vs(e, t) {
  return e(t);
}
function Ws() {
}
var Fl = !1;
function Qs(e, t, n) {
  if (Fl) return e(t, n);
  Fl = !0;
  try {
    return Vs(e, t, n);
  } finally {
    Fl = !1, (nn !== null || rn !== null) && (Ws(), Bs());
  }
}
function Wn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = kl(n);
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
var Ei = !1;
if (Ze) try {
  var wn = {};
  Object.defineProperty(wn, "passive", { get: function() {
    Ei = !0;
  } }), window.addEventListener("test", wn, wn), window.removeEventListener("test", wn, wn);
} catch {
  Ei = !1;
}
function pf(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var jn = !1, Wr = null, Qr = !1, Ci = null, mf = { onError: function(e) {
  jn = !0, Wr = e;
} };
function hf(e, t, n, r, l, i, o, u, s) {
  jn = !1, Wr = null, pf.apply(mf, arguments);
}
function gf(e, t, n, r, l, i, o, u, s) {
  if (hf.apply(this, arguments), jn) {
    if (jn) {
      var c = Wr;
      jn = !1, Wr = null;
    } else throw Error(k(198));
    Qr || (Qr = !0, Ci = c);
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
function Ks(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function fu(e) {
  if ($t(e) !== e) throw Error(k(188));
}
function vf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = $t(e), t === null) throw Error(k(188));
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
function Ys(e) {
  return e = vf(e), e !== null ? Xs(e) : null;
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
var Gs = Ee.unstable_scheduleCallback, du = Ee.unstable_cancelCallback, yf = Ee.unstable_shouldYield, kf = Ee.unstable_requestPaint, K = Ee.unstable_now, Sf = Ee.unstable_getCurrentPriorityLevel, mo = Ee.unstable_ImmediatePriority, Zs = Ee.unstable_UserBlockingPriority, Kr = Ee.unstable_NormalPriority, wf = Ee.unstable_LowPriority, Js = Ee.unstable_IdlePriority, hl = null, Be = null;
function Ef(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function") try {
    Be.onCommitFiberRoot(hl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Me = Math.clz32 ? Math.clz32 : Pf, Cf = Math.log, xf = Math.LN2;
function Pf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Cf(e) / xf | 0) | 0;
}
var vr = 64, yr = 4194304;
function In(e) {
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
function Yr(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = In(u) : (i &= o, i !== 0 && (r = In(i)));
  } else o = n & ~l, o !== 0 ? r = In(o) : i !== 0 && (r = In(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Me(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function _f(e, t) {
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
function Nf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Me(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = _f(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function xi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function qs() {
  var e = vr;
  return vr <<= 1, !(vr & 4194240) && (vr = 64), e;
}
function Al(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function or(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Me(t), e[t] = n;
}
function Df(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Me(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function ho(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Me(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var j = 0;
function bs(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ea, go, ta, na, ra, Pi = !1, kr = [], ct = null, ft = null, dt = null, Qn = /* @__PURE__ */ new Map(), Kn = /* @__PURE__ */ new Map(), ot = [], Tf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function pu(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      ct = null;
      break;
    case "dragenter":
    case "dragleave":
      ft = null;
      break;
    case "mouseover":
    case "mouseout":
      dt = null;
      break;
    case "pointerover":
    case "pointerout":
      Qn.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Kn.delete(t.pointerId);
  }
}
function En(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = sr(t), t !== null && go(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function If(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ct = En(ct, e, t, n, r, l), !0;
    case "dragenter":
      return ft = En(ft, e, t, n, r, l), !0;
    case "mouseover":
      return dt = En(dt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Qn.set(i, En(Qn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Kn.set(i, En(Kn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function la(e) {
  var t = Dt(e.target);
  if (t !== null) {
    var n = $t(t);
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
function Rr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = _i(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Si = r, n.target.dispatchEvent(r), Si = null;
    } else return t = sr(n), t !== null && go(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function mu(e, t, n) {
  Rr(e) && n.delete(t);
}
function zf() {
  Pi = !1, ct !== null && Rr(ct) && (ct = null), ft !== null && Rr(ft) && (ft = null), dt !== null && Rr(dt) && (dt = null), Qn.forEach(mu), Kn.forEach(mu);
}
function Cn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Pi || (Pi = !0, Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, zf)));
}
function Yn(e) {
  function t(l) {
    return Cn(l, e);
  }
  if (0 < kr.length) {
    Cn(kr[0], e);
    for (var n = 1; n < kr.length; n++) {
      var r = kr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ct !== null && Cn(ct, e), ft !== null && Cn(ft, e), dt !== null && Cn(dt, e), Qn.forEach(t), Kn.forEach(t), n = 0; n < ot.length; n++) r = ot[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ot.length && (n = ot[0], n.blockedOn === null); ) la(n), n.blockedOn === null && ot.shift();
}
var ln = et.ReactCurrentBatchConfig, Xr = !0;
function Rf(e, t, n, r) {
  var l = j, i = ln.transition;
  ln.transition = null;
  try {
    j = 1, vo(e, t, n, r);
  } finally {
    j = l, ln.transition = i;
  }
}
function Lf(e, t, n, r) {
  var l = j, i = ln.transition;
  ln.transition = null;
  try {
    j = 4, vo(e, t, n, r);
  } finally {
    j = l, ln.transition = i;
  }
}
function vo(e, t, n, r) {
  if (Xr) {
    var l = _i(e, t, n, r);
    if (l === null) Xl(e, t, r, Gr, n), pu(e, r);
    else if (If(l, e, t, n, r)) r.stopPropagation();
    else if (pu(e, r), t & 4 && -1 < Tf.indexOf(e)) {
      for (; l !== null; ) {
        var i = sr(l);
        if (i !== null && ea(i), i = _i(e, t, n, r), i === null && Xl(e, t, r, Gr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Xl(e, t, r, null, n);
  }
}
var Gr = null;
function _i(e, t, n, r) {
  if (Gr = null, e = po(r), e = Dt(e), e !== null) if (t = $t(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Ks(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Gr = e, null;
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
      switch (Sf()) {
        case mo:
          return 1;
        case Zs:
          return 4;
        case Kr:
        case wf:
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
var st = null, yo = null, Lr = null;
function oa() {
  if (Lr) return Lr;
  var e, t = yo, n = t.length, r, l = "value" in st ? st.value : st.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Lr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function jr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Sr() {
  return !0;
}
function hu() {
  return !1;
}
function xe(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Sr : hu, this.isPropagationStopped = hu, this;
  }
  return B(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Sr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Sr);
  }, persist: function() {
  }, isPersistent: Sr }), t;
}
var gn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, ko = xe(gn), ur = B({}, gn, { view: 0, detail: 0 }), jf = xe(ur), Ul, Hl, xn, gl = B({}, ur, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: So, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== xn && (xn && e.type === "mousemove" ? (Ul = e.screenX - xn.screenX, Hl = e.screenY - xn.screenY) : Hl = Ul = 0, xn = e), Ul);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Hl;
} }), gu = xe(gl), Mf = B({}, gl, { dataTransfer: 0 }), Of = xe(Mf), Ff = B({}, ur, { relatedTarget: 0 }), $l = xe(Ff), Af = B({}, gn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Uf = xe(Af), Hf = B({}, gn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), $f = xe(Hf), Bf = B({}, gn, { data: 0 }), vu = xe(Bf), Vf = {
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
}, Wf = {
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
}, Qf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Kf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Qf[e]) ? !!t[e] : !1;
}
function So() {
  return Kf;
}
var Yf = B({}, ur, { key: function(e) {
  if (e.key) {
    var t = Vf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = jr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Wf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: So, charCode: function(e) {
  return e.type === "keypress" ? jr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? jr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), Xf = xe(Yf), Gf = B({}, gl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), yu = xe(Gf), Zf = B({}, ur, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: So }), Jf = xe(Zf), qf = B({}, gn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), bf = xe(qf), ed = B({}, gl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), td = xe(ed), nd = [9, 13, 27, 32], wo = Ze && "CompositionEvent" in window, Mn = null;
Ze && "documentMode" in document && (Mn = document.documentMode);
var rd = Ze && "TextEvent" in window && !Mn, ua = Ze && (!wo || Mn && 8 < Mn && 11 >= Mn), ku = " ", Su = !1;
function sa(e, t) {
  switch (e) {
    case "keyup":
      return nd.indexOf(t.keyCode) !== -1;
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
var Qt = !1;
function ld(e, t) {
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
function id(e, t) {
  if (Qt) return e === "compositionend" || !wo && sa(e, t) ? (e = oa(), Lr = yo = st = null, Qt = !1, e) : null;
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
var od = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function wu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!od[e.type] : t === "textarea";
}
function ca(e, t, n, r) {
  $s(r), t = Zr(t, "onChange"), 0 < t.length && (n = new ko("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var On = null, Xn = null;
function ud(e) {
  wa(e, 0);
}
function vl(e) {
  var t = Xt(e);
  if (js(t)) return e;
}
function sd(e, t) {
  if (e === "change") return t;
}
var fa = !1;
if (Ze) {
  var Bl;
  if (Ze) {
    var Vl = "oninput" in document;
    if (!Vl) {
      var Eu = document.createElement("div");
      Eu.setAttribute("oninput", "return;"), Vl = typeof Eu.oninput == "function";
    }
    Bl = Vl;
  } else Bl = !1;
  fa = Bl && (!document.documentMode || 9 < document.documentMode);
}
function Cu() {
  On && (On.detachEvent("onpropertychange", da), Xn = On = null);
}
function da(e) {
  if (e.propertyName === "value" && vl(Xn)) {
    var t = [];
    ca(t, Xn, e, po(e)), Qs(ud, t);
  }
}
function ad(e, t, n) {
  e === "focusin" ? (Cu(), On = t, Xn = n, On.attachEvent("onpropertychange", da)) : e === "focusout" && Cu();
}
function cd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return vl(Xn);
}
function fd(e, t) {
  if (e === "click") return vl(t);
}
function dd(e, t) {
  if (e === "input" || e === "change") return vl(t);
}
function pd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Fe = typeof Object.is == "function" ? Object.is : pd;
function Gn(e, t) {
  if (Fe(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!si.call(t, l) || !Fe(e[l], t[l])) return !1;
  }
  return !0;
}
function xu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Pu(e, t) {
  var n = xu(e);
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
    n = xu(n);
  }
}
function pa(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? pa(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function ma() {
  for (var e = window, t = Vr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Vr(e.document);
  }
  return t;
}
function Eo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function md(e) {
  var t = ma(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && pa(n.ownerDocument.documentElement, n)) {
    if (r !== null && Eo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Pu(n, i);
        var o = Pu(
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
var hd = Ze && "documentMode" in document && 11 >= document.documentMode, Kt = null, Ni = null, Fn = null, Di = !1;
function _u(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Di || Kt == null || Kt !== Vr(r) || (r = Kt, "selectionStart" in r && Eo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Fn && Gn(Fn, r) || (Fn = r, r = Zr(Ni, "onSelect"), 0 < r.length && (t = new ko("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Kt)));
}
function wr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Yt = { animationend: wr("Animation", "AnimationEnd"), animationiteration: wr("Animation", "AnimationIteration"), animationstart: wr("Animation", "AnimationStart"), transitionend: wr("Transition", "TransitionEnd") }, Wl = {}, ha = {};
Ze && (ha = document.createElement("div").style, "AnimationEvent" in window || (delete Yt.animationend.animation, delete Yt.animationiteration.animation, delete Yt.animationstart.animation), "TransitionEvent" in window || delete Yt.transitionend.transition);
function yl(e) {
  if (Wl[e]) return Wl[e];
  if (!Yt[e]) return e;
  var t = Yt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ha) return Wl[e] = t[n];
  return e;
}
var ga = yl("animationend"), va = yl("animationiteration"), ya = yl("animationstart"), ka = yl("transitionend"), Sa = /* @__PURE__ */ new Map(), Nu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function St(e, t) {
  Sa.set(e, t), Ht(t, [e]);
}
for (var Ql = 0; Ql < Nu.length; Ql++) {
  var Kl = Nu[Ql], gd = Kl.toLowerCase(), vd = Kl[0].toUpperCase() + Kl.slice(1);
  St(gd, "on" + vd);
}
St(ga, "onAnimationEnd");
St(va, "onAnimationIteration");
St(ya, "onAnimationStart");
St("dblclick", "onDoubleClick");
St("focusin", "onFocus");
St("focusout", "onBlur");
St(ka, "onTransitionEnd");
sn("onMouseEnter", ["mouseout", "mouseover"]);
sn("onMouseLeave", ["mouseout", "mouseover"]);
sn("onPointerEnter", ["pointerout", "pointerover"]);
sn("onPointerLeave", ["pointerout", "pointerover"]);
Ht("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Ht("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Ht("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Ht("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Ht("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Ht("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var zn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), yd = new Set("cancel close invalid load scroll toggle".split(" ").concat(zn));
function Du(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, gf(r, t, void 0, e), e.currentTarget = null;
}
function wa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Du(l, u, c), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, c = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        Du(l, u, c), i = s;
      }
    }
  }
  if (Qr) throw e = Ci, Qr = !1, Ci = null, e;
}
function F(e, t) {
  var n = t[Li];
  n === void 0 && (n = t[Li] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ea(t, e, 2, !1), n.add(r));
}
function Yl(e, t, n) {
  var r = 0;
  t && (r |= 4), Ea(n, e, r, t);
}
var Er = "_reactListening" + Math.random().toString(36).slice(2);
function Zn(e) {
  if (!e[Er]) {
    e[Er] = !0, Ts.forEach(function(n) {
      n !== "selectionchange" && (yd.has(n) || Yl(n, !1, e), Yl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Er] || (t[Er] = !0, Yl("selectionchange", !1, t));
  }
}
function Ea(e, t, n, r) {
  switch (ia(t)) {
    case 1:
      var l = Rf;
      break;
    case 4:
      l = Lf;
      break;
    default:
      l = vo;
  }
  n = l.bind(null, t, n, e), l = void 0, !Ei || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Xl(e, t, n, r, l) {
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
        if (o = Dt(u), o === null) return;
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
    var c = i, m = po(n), h = [];
    e: {
      var p = Sa.get(e);
      if (p !== void 0) {
        var y = ko, v = e;
        switch (e) {
          case "keypress":
            if (jr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = Xf;
            break;
          case "focusin":
            v = "focus", y = $l;
            break;
          case "focusout":
            v = "blur", y = $l;
            break;
          case "beforeblur":
          case "afterblur":
            y = $l;
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
            y = gu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Of;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = Jf;
            break;
          case ga:
          case va:
          case ya:
            y = Uf;
            break;
          case ka:
            y = bf;
            break;
          case "scroll":
            y = jf;
            break;
          case "wheel":
            y = td;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = $f;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = yu;
        }
        var S = (t & 4) !== 0, T = !S && e === "scroll", f = S ? p !== null ? p + "Capture" : null : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var g = d.stateNode;
          if (d.tag === 5 && g !== null && (d = g, f !== null && (g = Wn(a, f), g != null && S.push(Jn(a, g, d)))), T) break;
          a = a.return;
        }
        0 < S.length && (p = new y(p, v, null, n, m), h.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", p && n !== Si && (v = n.relatedTarget || n.fromElement) && (Dt(v) || v[Je])) break e;
        if ((y || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, y ? (v = n.relatedTarget || n.toElement, y = c, v = v ? Dt(v) : null, v !== null && (T = $t(v), v !== T || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = c), y !== v)) {
          if (S = gu, g = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (S = yu, g = "onPointerLeave", f = "onPointerEnter", a = "pointer"), T = y == null ? p : Xt(y), d = v == null ? p : Xt(v), p = new S(g, a + "leave", y, n, m), p.target = T, p.relatedTarget = d, g = null, Dt(m) === c && (S = new S(f, a + "enter", v, n, m), S.target = d, S.relatedTarget = T, g = S), T = g, y && v) t: {
            for (S = y, f = v, a = 0, d = S; d; d = Bt(d)) a++;
            for (d = 0, g = f; g; g = Bt(g)) d++;
            for (; 0 < a - d; ) S = Bt(S), a--;
            for (; 0 < d - a; ) f = Bt(f), d--;
            for (; a--; ) {
              if (S === f || f !== null && S === f.alternate) break t;
              S = Bt(S), f = Bt(f);
            }
            S = null;
          }
          else S = null;
          y !== null && Tu(h, p, y, S, !1), v !== null && T !== null && Tu(h, T, v, S, !0);
        }
      }
      e: {
        if (p = c ? Xt(c) : window, y = p.nodeName && p.nodeName.toLowerCase(), y === "select" || y === "input" && p.type === "file") var w = sd;
        else if (wu(p)) if (fa) w = dd;
        else {
          w = cd;
          var E = ad;
        }
        else (y = p.nodeName) && y.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (w = fd);
        if (w && (w = w(e, c))) {
          ca(h, w, n, m);
          break e;
        }
        E && E(e, p, c), e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && hi(p, "number", p.value);
      }
      switch (E = c ? Xt(c) : window, e) {
        case "focusin":
          (wu(E) || E.contentEditable === "true") && (Kt = E, Ni = c, Fn = null);
          break;
        case "focusout":
          Fn = Ni = Kt = null;
          break;
        case "mousedown":
          Di = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Di = !1, _u(h, n, m);
          break;
        case "selectionchange":
          if (hd) break;
        case "keydown":
        case "keyup":
          _u(h, n, m);
      }
      var _;
      if (wo) e: {
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
      else Qt ? sa(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (ua && n.locale !== "ko" && (Qt || N !== "onCompositionStart" ? N === "onCompositionEnd" && Qt && (_ = oa()) : (st = m, yo = "value" in st ? st.value : st.textContent, Qt = !0)), E = Zr(c, N), 0 < E.length && (N = new vu(N, e, null, n, m), h.push({ event: N, listeners: E }), _ ? N.data = _ : (_ = aa(n), _ !== null && (N.data = _)))), (_ = rd ? ld(e, n) : id(e, n)) && (c = Zr(c, "onBeforeInput"), 0 < c.length && (m = new vu("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: c }), m.data = _));
    }
    wa(h, t);
  });
}
function Jn(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Zr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = Wn(e, n), i != null && r.unshift(Jn(e, i, l)), i = Wn(e, t), i != null && r.push(Jn(e, i, l))), e = e.return;
  }
  return r;
}
function Bt(e) {
  if (e === null) return null;
  do
    e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Tu(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Wn(n, i), s != null && o.unshift(Jn(n, s, u))) : l || (s = Wn(n, i), s != null && o.push(Jn(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var kd = /\r\n?/g, Sd = /\u0000|\uFFFD/g;
function Iu(e) {
  return (typeof e == "string" ? e : "" + e).replace(kd, `
`).replace(Sd, "");
}
function Cr(e, t, n) {
  if (t = Iu(t), Iu(e) !== t && n) throw Error(k(425));
}
function Jr() {
}
var Ti = null, Ii = null;
function zi(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Ri = typeof setTimeout == "function" ? setTimeout : void 0, wd = typeof clearTimeout == "function" ? clearTimeout : void 0, zu = typeof Promise == "function" ? Promise : void 0, Ed = typeof queueMicrotask == "function" ? queueMicrotask : typeof zu < "u" ? function(e) {
  return zu.resolve(null).then(e).catch(Cd);
} : Ri;
function Cd(e) {
  setTimeout(function() {
    throw e;
  });
}
function Gl(e, t) {
  var n = t, r = 0;
  do {
    var l = n.nextSibling;
    if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
      if (r === 0) {
        e.removeChild(l), Yn(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  Yn(t);
}
function pt(e) {
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
function Ru(e) {
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
var vn = Math.random().toString(36).slice(2), $e = "__reactFiber$" + vn, qn = "__reactProps$" + vn, Je = "__reactContainer$" + vn, Li = "__reactEvents$" + vn, xd = "__reactListeners$" + vn, Pd = "__reactHandles$" + vn;
function Dt(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Je] || n[$e]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Ru(e); e !== null; ) {
        if (n = e[$e]) return n;
        e = Ru(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function sr(e) {
  return e = e[$e] || e[Je], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function Xt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function kl(e) {
  return e[qn] || null;
}
var ji = [], Gt = -1;
function wt(e) {
  return { current: e };
}
function A(e) {
  0 > Gt || (e.current = ji[Gt], ji[Gt] = null, Gt--);
}
function O(e, t) {
  Gt++, ji[Gt] = e.current, e.current = t;
}
var kt = {}, se = wt(kt), he = wt(!1), Mt = kt;
function an(e, t) {
  var n = e.type.contextTypes;
  if (!n) return kt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ge(e) {
  return e = e.childContextTypes, e != null;
}
function qr() {
  A(he), A(se);
}
function Lu(e, t, n) {
  if (se.current !== kt) throw Error(k(168));
  O(se, t), O(he, n);
}
function Ca(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, af(e) || "Unknown", l));
  return B({}, n, r);
}
function br(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || kt, Mt = se.current, O(se, e), O(he, he.current), !0;
}
function ju(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = Ca(e, t, Mt), r.__reactInternalMemoizedMergedChildContext = e, A(he), A(se), O(se, e)) : A(he), O(he, n);
}
var Ke = null, Sl = !1, Zl = !1;
function xa(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
function _d(e) {
  Sl = !0, xa(e);
}
function Et() {
  if (!Zl && Ke !== null) {
    Zl = !0;
    var e = 0, t = j;
    try {
      var n = Ke;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ke = null, Sl = !1;
    } catch (l) {
      throw Ke !== null && (Ke = Ke.slice(e + 1)), Gs(mo, Et), l;
    } finally {
      j = t, Zl = !1;
    }
  }
  return null;
}
var Zt = [], Jt = 0, el = null, tl = 0, Pe = [], _e = 0, Ot = null, Ye = 1, Xe = "";
function _t(e, t) {
  Zt[Jt++] = tl, Zt[Jt++] = el, el = e, tl = t;
}
function Pa(e, t, n) {
  Pe[_e++] = Ye, Pe[_e++] = Xe, Pe[_e++] = Ot, Ot = e;
  var r = Ye;
  e = Xe;
  var l = 32 - Me(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Me(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Ye = 1 << 32 - Me(t) + l | n << l | r, Xe = i + e;
  } else Ye = 1 << i | n << l | r, Xe = e;
}
function Co(e) {
  e.return !== null && (_t(e, 1), Pa(e, 1, 0));
}
function xo(e) {
  for (; e === el; ) el = Zt[--Jt], Zt[Jt] = null, tl = Zt[--Jt], Zt[Jt] = null;
  for (; e === Ot; ) Ot = Pe[--_e], Pe[_e] = null, Xe = Pe[--_e], Pe[_e] = null, Ye = Pe[--_e], Pe[_e] = null;
}
var we = null, Se = null, U = !1, je = null;
function _a(e, t) {
  var n = Ne(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Mu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, we = e, Se = pt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, we = e, Se = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ot !== null ? { id: Ye, overflow: Xe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ne(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, we = e, Se = null, !0) : !1;
    default:
      return !1;
  }
}
function Mi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Oi(e) {
  if (U) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Mu(e, t)) {
        if (Mi(e)) throw Error(k(418));
        t = pt(n.nextSibling);
        var r = we;
        t && Mu(e, t) ? _a(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, we = e);
      }
    } else {
      if (Mi(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, U = !1, we = e;
    }
  }
}
function Ou(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  we = e;
}
function xr(e) {
  if (e !== we) return !1;
  if (!U) return Ou(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !zi(e.type, e.memoizedProps)), t && (t = Se)) {
    if (Mi(e)) throw Na(), Error(k(418));
    for (; t; ) _a(e, t), t = pt(t.nextSibling);
  }
  if (Ou(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(k(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Se = pt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Se = null;
    }
  } else Se = we ? pt(e.stateNode.nextSibling) : null;
  return !0;
}
function Na() {
  for (var e = Se; e; ) e = pt(e.nextSibling);
}
function cn() {
  Se = we = null, U = !1;
}
function Po(e) {
  je === null ? je = [e] : je.push(e);
}
var Nd = et.ReactCurrentBatchConfig;
function Pn(e, t, n) {
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
function Pr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(k(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Fu(e) {
  var t = e._init;
  return t(e._payload);
}
function Da(e) {
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
  function u(f, a, d, g) {
    return a === null || a.tag !== 6 ? (a = ri(d, f.mode, g), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, g) {
    var w = d.type;
    return w === Wt ? m(f, a, d.props.children, g, d.key) : a !== null && (a.elementType === w || typeof w == "object" && w !== null && w.$$typeof === lt && Fu(w) === a.type) ? (g = l(a, d.props), g.ref = Pn(f, a, d), g.return = f, g) : (g = $r(d.type, d.key, d.props, null, f.mode, g), g.ref = Pn(f, a, d), g.return = f, g);
  }
  function c(f, a, d, g) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = li(d, f.mode, g), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, g, w) {
    return a === null || a.tag !== 7 ? (a = jt(d, f.mode, g, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = ri("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case mr:
          return d = $r(a.type, a.key, a.props, null, f.mode, d), d.ref = Pn(f, null, a), d.return = f, d;
        case Vt:
          return a = li(a, f.mode, d), a.return = f, a;
        case lt:
          var g = a._init;
          return h(f, g(a._payload), d);
      }
      if (Tn(a) || Sn(a)) return a = jt(a, f.mode, d, null), a.return = f, a;
      Pr(f, a);
    }
    return null;
  }
  function p(f, a, d, g) {
    var w = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return w !== null ? null : u(f, a, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case mr:
          return d.key === w ? s(f, a, d, g) : null;
        case Vt:
          return d.key === w ? c(f, a, d, g) : null;
        case lt:
          return w = d._init, p(
            f,
            a,
            w(d._payload),
            g
          );
      }
      if (Tn(d) || Sn(d)) return w !== null ? null : m(f, a, d, g, null);
      Pr(f, d);
    }
    return null;
  }
  function y(f, a, d, g, w) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(d) || null, u(a, f, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case mr:
          return f = f.get(g.key === null ? d : g.key) || null, s(a, f, g, w);
        case Vt:
          return f = f.get(g.key === null ? d : g.key) || null, c(a, f, g, w);
        case lt:
          var E = g._init;
          return y(f, a, d, E(g._payload), w);
      }
      if (Tn(g) || Sn(g)) return f = f.get(d) || null, m(a, f, g, w, null);
      Pr(a, g);
    }
    return null;
  }
  function v(f, a, d, g) {
    for (var w = null, E = null, _ = a, N = a = 0, M = null; _ !== null && N < d.length; N++) {
      _.index > N ? (M = _, _ = null) : M = _.sibling;
      var z = p(f, _, d[N], g);
      if (z === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && z.alternate === null && t(f, _), a = i(z, a, N), E === null ? w = z : E.sibling = z, E = z, _ = M;
    }
    if (N === d.length) return n(f, _), U && _t(f, N), w;
    if (_ === null) {
      for (; N < d.length; N++) _ = h(f, d[N], g), _ !== null && (a = i(_, a, N), E === null ? w = _ : E.sibling = _, E = _);
      return U && _t(f, N), w;
    }
    for (_ = r(f, _); N < d.length; N++) M = y(_, f, N, d[N], g), M !== null && (e && M.alternate !== null && _.delete(M.key === null ? N : M.key), a = i(M, a, N), E === null ? w = M : E.sibling = M, E = M);
    return e && _.forEach(function(ye) {
      return t(f, ye);
    }), U && _t(f, N), w;
  }
  function S(f, a, d, g) {
    var w = Sn(d);
    if (typeof w != "function") throw Error(k(150));
    if (d = w.call(d), d == null) throw Error(k(151));
    for (var E = w = null, _ = a, N = a = 0, M = null, z = d.next(); _ !== null && !z.done; N++, z = d.next()) {
      _.index > N ? (M = _, _ = null) : M = _.sibling;
      var ye = p(f, _, z.value, g);
      if (ye === null) {
        _ === null && (_ = M);
        break;
      }
      e && _ && ye.alternate === null && t(f, _), a = i(ye, a, N), E === null ? w = ye : E.sibling = ye, E = ye, _ = M;
    }
    if (z.done) return n(
      f,
      _
    ), U && _t(f, N), w;
    if (_ === null) {
      for (; !z.done; N++, z = d.next()) z = h(f, z.value, g), z !== null && (a = i(z, a, N), E === null ? w = z : E.sibling = z, E = z);
      return U && _t(f, N), w;
    }
    for (_ = r(f, _); !z.done; N++, z = d.next()) z = y(_, f, N, z.value, g), z !== null && (e && z.alternate !== null && _.delete(z.key === null ? N : z.key), a = i(z, a, N), E === null ? w = z : E.sibling = z, E = z);
    return e && _.forEach(function(Ct) {
      return t(f, Ct);
    }), U && _t(f, N), w;
  }
  function T(f, a, d, g) {
    if (typeof d == "object" && d !== null && d.type === Wt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case mr:
          e: {
            for (var w = d.key, E = a; E !== null; ) {
              if (E.key === w) {
                if (w = d.type, w === Wt) {
                  if (E.tag === 7) {
                    n(f, E.sibling), a = l(E, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (E.elementType === w || typeof w == "object" && w !== null && w.$$typeof === lt && Fu(w) === E.type) {
                  n(f, E.sibling), a = l(E, d.props), a.ref = Pn(f, E, d), a.return = f, f = a;
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            d.type === Wt ? (a = jt(d.props.children, f.mode, g, d.key), a.return = f, f = a) : (g = $r(d.type, d.key, d.props, null, f.mode, g), g.ref = Pn(f, a, d), g.return = f, f = g);
          }
          return o(f);
        case Vt:
          e: {
            for (E = d.key; a !== null; ) {
              if (a.key === E) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                n(f, a.sibling), a = l(a, d.children || []), a.return = f, f = a;
                break e;
              } else {
                n(f, a);
                break;
              }
              else t(f, a);
              a = a.sibling;
            }
            a = li(d, f.mode, g), a.return = f, f = a;
          }
          return o(f);
        case lt:
          return E = d._init, T(f, a, E(d._payload), g);
      }
      if (Tn(d)) return v(f, a, d, g);
      if (Sn(d)) return S(f, a, d, g);
      Pr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = ri(d, f.mode, g), a.return = f, f = a), o(f)) : n(f, a);
  }
  return T;
}
var fn = Da(!0), Ta = Da(!1), nl = wt(null), rl = null, qt = null, _o = null;
function No() {
  _o = qt = rl = null;
}
function Do(e) {
  var t = nl.current;
  A(nl), e._currentValue = t;
}
function Fi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function on(e, t) {
  rl = e, _o = qt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (me = !0), e.firstContext = null);
}
function Te(e) {
  var t = e._currentValue;
  if (_o !== e) if (e = { context: e, memoizedValue: t, next: null }, qt === null) {
    if (rl === null) throw Error(k(308));
    qt = e, rl.dependencies = { lanes: 0, firstContext: e };
  } else qt = qt.next = e;
  return t;
}
var Tt = null;
function To(e) {
  Tt === null ? Tt = [e] : Tt.push(e);
}
function Ia(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, To(t)) : (n.next = l.next, l.next = n), t.interleaved = n, qe(e, r);
}
function qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var it = !1;
function Io(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function za(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function Ge(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function mt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, L & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, qe(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, To(r)) : (t.next = l.next, l.next = t), r.interleaved = t, qe(e, n);
}
function Mr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ho(e, n);
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
function ll(e, t, n, r) {
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
          var v = e, S = u;
          switch (p = t, y = n, S.tag) {
            case 1:
              if (v = S.payload, typeof v == "function") {
                h = v.call(y, h, p);
                break e;
              }
              h = v;
              break e;
            case 3:
              v.flags = v.flags & -65537 | 128;
            case 0:
              if (v = S.payload, p = typeof v == "function" ? v.call(y, h, p) : v, p == null) break e;
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
    At |= o, e.lanes = o, e.memoizedState = h;
  }
}
function Uu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(k(191, l));
      l.call(r);
    }
  }
}
var ar = {}, Ve = wt(ar), bn = wt(ar), er = wt(ar);
function It(e) {
  if (e === ar) throw Error(k(174));
  return e;
}
function zo(e, t) {
  switch (O(er, t), O(bn, e), O(Ve, ar), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : vi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = vi(t, e);
  }
  A(Ve), O(Ve, t);
}
function dn() {
  A(Ve), A(bn), A(er);
}
function Ra(e) {
  It(er.current);
  var t = It(Ve.current), n = vi(t, e.type);
  t !== n && (O(bn, e), O(Ve, n));
}
function Ro(e) {
  bn.current === e && (A(Ve), A(bn));
}
var H = wt(0);
function il(e) {
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
var Jl = [];
function Lo() {
  for (var e = 0; e < Jl.length; e++) Jl[e]._workInProgressVersionPrimary = null;
  Jl.length = 0;
}
var Or = et.ReactCurrentDispatcher, ql = et.ReactCurrentBatchConfig, Ft = 0, $ = null, X = null, q = null, ol = !1, An = !1, tr = 0, Dd = 0;
function le() {
  throw Error(k(321));
}
function jo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Fe(e[n], t[n])) return !1;
  return !0;
}
function Mo(e, t, n, r, l, i) {
  if (Ft = i, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Or.current = e === null || e.memoizedState === null ? Rd : Ld, e = n(r, l), An) {
    i = 0;
    do {
      if (An = !1, tr = 0, 25 <= i) throw Error(k(301));
      i += 1, q = X = null, t.updateQueue = null, Or.current = jd, e = n(r, l);
    } while (An);
  }
  if (Or.current = ul, t = X !== null && X.next !== null, Ft = 0, q = X = $ = null, ol = !1, t) throw Error(k(300));
  return e;
}
function Oo() {
  var e = tr !== 0;
  return tr = 0, e;
}
function He() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? $.memoizedState = q = e : q = q.next = e, q;
}
function Ie() {
  if (X === null) {
    var e = $.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = X.next;
  var t = q === null ? $.memoizedState : q.next;
  if (t !== null) q = t, X = e;
  else {
    if (e === null) throw Error(k(310));
    X = e, e = { memoizedState: X.memoizedState, baseState: X.baseState, baseQueue: X.baseQueue, queue: X.queue, next: null }, q === null ? $.memoizedState = q = e : q = q.next = e;
  }
  return q;
}
function nr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function bl(e) {
  var t = Ie(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = X, l = r.baseQueue, i = n.pending;
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
        s === null ? (u = s = h, o = r) : s = s.next = h, $.lanes |= m, At |= m;
      }
      c = c.next;
    } while (c !== null && c !== i);
    s === null ? o = r : s.next = u, Fe(r, t.memoizedState) || (me = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r;
  }
  if (e = n.interleaved, e !== null) {
    l = e;
    do
      i = l.lane, $.lanes |= i, At |= i, l = l.next;
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function ei(e) {
  var t = Ie(), n = t.queue;
  if (n === null) throw Error(k(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    Fe(i, t.memoizedState) || (me = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function La() {
}
function ja(e, t) {
  var n = $, r = Ie(), l = t(), i = !Fe(r.memoizedState, l);
  if (i && (r.memoizedState = l, me = !0), r = r.queue, Fo(Fa.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || q !== null && q.memoizedState.tag & 1) {
    if (n.flags |= 2048, rr(9, Oa.bind(null, n, r, l, t), void 0, null), b === null) throw Error(k(349));
    Ft & 30 || Ma(n, t, l);
  }
  return l;
}
function Ma(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Oa(e, t, n, r) {
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
    return !Fe(e, n);
  } catch {
    return !0;
  }
}
function Ua(e) {
  var t = qe(e, 1);
  t !== null && Oe(t, e, 1, -1);
}
function Hu(e) {
  var t = He();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nr, lastRenderedState: e }, t.queue = e, e = e.dispatch = zd.bind(null, $, e), [t.memoizedState, e];
}
function rr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Ha() {
  return Ie().memoizedState;
}
function Fr(e, t, n, r) {
  var l = He();
  $.flags |= e, l.memoizedState = rr(1 | t, n, void 0, r === void 0 ? null : r);
}
function wl(e, t, n, r) {
  var l = Ie();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (X !== null) {
    var o = X.memoizedState;
    if (i = o.destroy, r !== null && jo(r, o.deps)) {
      l.memoizedState = rr(t, n, i, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = rr(1 | t, n, i, r);
}
function $u(e, t) {
  return Fr(8390656, 8, e, t);
}
function Fo(e, t) {
  return wl(2048, 8, e, t);
}
function $a(e, t) {
  return wl(4, 2, e, t);
}
function Ba(e, t) {
  return wl(4, 4, e, t);
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
  return n = n != null ? n.concat([e]) : null, wl(4, 4, Va.bind(null, t, e), n);
}
function Ao() {
}
function Qa(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ka(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && jo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Ya(e, t, n) {
  return Ft & 21 ? (Fe(n, t) || (n = qs(), $.lanes |= n, At |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, me = !0), e.memoizedState = n);
}
function Td(e, t) {
  var n = j;
  j = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ql.transition;
  ql.transition = {};
  try {
    e(!1), t();
  } finally {
    j = n, ql.transition = r;
  }
}
function Xa() {
  return Ie().memoizedState;
}
function Id(e, t, n) {
  var r = gt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ga(e)) Za(t, n);
  else if (n = Ia(e, t, n, r), n !== null) {
    var l = ce();
    Oe(n, e, r, l), Ja(n, t, r);
  }
}
function zd(e, t, n) {
  var r = gt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Ga(e)) Za(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Fe(u, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, To(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Ia(e, t, l, r), n !== null && (l = ce(), Oe(n, e, r, l), Ja(n, t, r));
  }
}
function Ga(e) {
  var t = e.alternate;
  return e === $ || t !== null && t === $;
}
function Za(e, t) {
  An = ol = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function Ja(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, ho(e, n);
  }
}
var ul = { readContext: Te, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, Rd = { readContext: Te, useCallback: function(e, t) {
  return He().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: Te, useEffect: $u, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Fr(
    4194308,
    4,
    Va.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Fr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Fr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = He();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = He();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Id.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = He();
  return e = { current: e }, t.memoizedState = e;
}, useState: Hu, useDebugValue: Ao, useDeferredValue: function(e) {
  return He().memoizedState = e;
}, useTransition: function() {
  var e = Hu(!1), t = e[0];
  return e = Td.bind(null, e[1]), He().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = $, l = He();
  if (U) {
    if (n === void 0) throw Error(k(407));
    n = n();
  } else {
    if (n = t(), b === null) throw Error(k(349));
    Ft & 30 || Ma(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, $u(Fa.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, rr(9, Oa.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = He(), t = b.identifierPrefix;
  if (U) {
    var n = Xe, r = Ye;
    n = (r & ~(1 << 32 - Me(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = tr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Dd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ld = {
  readContext: Te,
  useCallback: Qa,
  useContext: Te,
  useEffect: Fo,
  useImperativeHandle: Wa,
  useInsertionEffect: $a,
  useLayoutEffect: Ba,
  useMemo: Ka,
  useReducer: bl,
  useRef: Ha,
  useState: function() {
    return bl(nr);
  },
  useDebugValue: Ao,
  useDeferredValue: function(e) {
    var t = Ie();
    return Ya(t, X.memoizedState, e);
  },
  useTransition: function() {
    var e = bl(nr)[0], t = Ie().memoizedState;
    return [e, t];
  },
  useMutableSource: La,
  useSyncExternalStore: ja,
  useId: Xa,
  unstable_isNewReconciler: !1
}, jd = { readContext: Te, useCallback: Qa, useContext: Te, useEffect: Fo, useImperativeHandle: Wa, useInsertionEffect: $a, useLayoutEffect: Ba, useMemo: Ka, useReducer: ei, useRef: Ha, useState: function() {
  return ei(nr);
}, useDebugValue: Ao, useDeferredValue: function(e) {
  var t = Ie();
  return X === null ? t.memoizedState = e : Ya(t, X.memoizedState, e);
}, useTransition: function() {
  var e = ei(nr)[0], t = Ie().memoizedState;
  return [e, t];
}, useMutableSource: La, useSyncExternalStore: ja, useId: Xa, unstable_isNewReconciler: !1 };
function Re(e, t) {
  if (e && e.defaultProps) {
    t = B({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Ai(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var El = { isMounted: function(e) {
  return (e = e._reactInternals) ? $t(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = gt(e), i = Ge(r, l);
  i.payload = t, n != null && (i.callback = n), t = mt(e, i, l), t !== null && (Oe(t, e, l, r), Mr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = ce(), l = gt(e), i = Ge(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = mt(e, i, l), t !== null && (Oe(t, e, l, r), Mr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = ce(), r = gt(e), l = Ge(n, r);
  l.tag = 2, t != null && (l.callback = t), t = mt(e, l, r), t !== null && (Oe(t, e, r, n), Mr(t, e, r));
} };
function Bu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !Gn(n, r) || !Gn(l, i) : !0;
}
function qa(e, t, n) {
  var r = !1, l = kt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = Te(i) : (l = ge(t) ? Mt : se.current, r = t.contextTypes, i = (r = r != null) ? an(e, l) : kt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = El, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Vu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && El.enqueueReplaceState(t, t.state, null);
}
function Ui(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Io(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = Te(i) : (i = ge(t) ? Mt : se.current, l.context = an(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Ai(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && El.enqueueReplaceState(l, l.state, null), ll(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function pn(e, t) {
  try {
    var n = "", r = t;
    do
      n += sf(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ti(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Hi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Md = typeof WeakMap == "function" ? WeakMap : Map;
function ba(e, t, n) {
  n = Ge(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    al || (al = !0, Zi = r), Hi(e, t);
  }, n;
}
function ec(e, t, n) {
  n = Ge(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Hi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Hi(e, t), typeof r != "function" && (ht === null ? ht = /* @__PURE__ */ new Set([this]) : ht.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Wu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Md();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = Gd.bind(null, e, t, n), t.then(e, e));
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
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ge(-1, 1), t.tag = 2, mt(n, t, 1))), n.lanes |= 1), e);
}
var Od = et.ReactCurrentOwner, me = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Ta(t, null, n, r) : fn(t, e.child, n, r);
}
function Yu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return on(t, l), r = Mo(e, t, n, r, i, l), n = Oo(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, be(e, t, l)) : (U && n && Co(t), t.flags |= 1, ae(e, t, r, l), t.child);
}
function Xu(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Ko(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, tc(e, t, i, r, l)) : (e = $r(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : Gn, n(o, r) && e.ref === t.ref) return be(e, t, l);
  }
  return t.flags |= 1, e = vt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function tc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (Gn(i, r) && e.ref === t.ref) if (me = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (me = !0);
    else return t.lanes = e.lanes, be(e, t, l);
  }
  return $i(e, t, n, r, l);
}
function nc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, O(en, ke), ke |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, O(en, ke), ke |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, O(en, ke), ke |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, O(en, ke), ke |= r;
  return ae(e, t, l, n), t.child;
}
function rc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function $i(e, t, n, r, l) {
  var i = ge(n) ? Mt : se.current;
  return i = an(t, i), on(t, l), n = Mo(e, t, n, r, i, l), r = Oo(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, be(e, t, l)) : (U && r && Co(t), t.flags |= 1, ae(e, t, n, l), t.child);
}
function Gu(e, t, n, r, l) {
  if (ge(n)) {
    var i = !0;
    br(t);
  } else i = !1;
  if (on(t, l), t.stateNode === null) Ar(e, t), qa(t, n, r), Ui(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = Te(c) : (c = ge(n) ? Mt : se.current, c = an(t, c));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== c) && Vu(t, o, r, c), it = !1;
    var p = t.memoizedState;
    o.state = p, ll(t, r, o, l), s = t.memoizedState, u !== r || p !== s || he.current || it ? (typeof m == "function" && (Ai(t, n, m, r), s = t.memoizedState), (u = it || Bu(t, n, u, r, p, s, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = c, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, za(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Re(t.type, u), o.props = c, h = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Te(s) : (s = ge(n) ? Mt : se.current, s = an(t, s));
    var y = n.getDerivedStateFromProps;
    (m = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || p !== s) && Vu(t, o, r, s), it = !1, p = t.memoizedState, o.state = p, ll(t, r, o, l);
    var v = t.memoizedState;
    u !== h || p !== v || he.current || it ? (typeof y == "function" && (Ai(t, n, y, r), v = t.memoizedState), (c = it || Bu(t, n, c, r, p, v, s) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), o.props = r, o.state = v, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Bi(e, t, n, r, i, l);
}
function Bi(e, t, n, r, l, i) {
  rc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && ju(t, n, !1), be(e, t, i);
  r = t.stateNode, Od.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = fn(t, e.child, null, i), t.child = fn(t, null, u, i)) : ae(e, t, u, i), t.memoizedState = r.state, l && ju(t, n, !0), t.child;
}
function lc(e) {
  var t = e.stateNode;
  t.pendingContext ? Lu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Lu(e, t.context, !1), zo(e, t.containerInfo);
}
function Zu(e, t, n, r, l) {
  return cn(), Po(l), t.flags |= 256, ae(e, t, n, r), t.child;
}
var Vi = { dehydrated: null, treeContext: null, retryLane: 0 };
function Wi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function ic(e, t, n) {
  var r = t.pendingProps, l = H.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), O(H, l & 1), e === null)
    return Oi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Pl(o, r, 0, null), e = jt(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Wi(n), t.memoizedState = Vi, e) : Uo(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Fd(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = vt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = vt(u, i) : (i = jt(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Wi(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Vi, r;
  }
  return i = e.child, e = i.sibling, r = vt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Uo(e, t) {
  return t = Pl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function _r(e, t, n, r) {
  return r !== null && Po(r), fn(t, e.child, null, n), e = Uo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Fd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ti(Error(k(422))), _r(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Pl({ mode: "visible", children: r.children }, l, 0, null), i = jt(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && fn(t, e.child, null, o), t.child.memoizedState = Wi(o), t.memoizedState = Vi, i);
  if (!(t.mode & 1)) return _r(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(k(419)), r = ti(i, r, void 0), _r(e, t, o, r);
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
      l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== i.retryLane && (i.retryLane = l, qe(e, l), Oe(r, e, l, -1));
    }
    return Qo(), r = ti(Error(k(421))), _r(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Zd.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Se = pt(l.nextSibling), we = t, U = !0, je = null, e !== null && (Pe[_e++] = Ye, Pe[_e++] = Xe, Pe[_e++] = Ot, Ye = e.id, Xe = e.overflow, Ot = t), t = Uo(t, r.children), t.flags |= 4096, t);
}
function Ju(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Fi(e.return, t, n);
}
function ni(e, t, n, r, l) {
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
  if (O(H, r), !(t.mode & 1)) t.memoizedState = null;
  else switch (l) {
    case "forwards":
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && il(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ni(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && il(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      ni(t, !0, n, null, i);
      break;
    case "together":
      ni(t, !1, null, null, void 0);
      break;
    default:
      t.memoizedState = null;
  }
  return t.child;
}
function Ar(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function be(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), At |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(k(153));
  if (t.child !== null) {
    for (e = t.child, n = vt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = vt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function Ad(e, t, n) {
  switch (t.tag) {
    case 3:
      lc(t), cn();
      break;
    case 5:
      Ra(t);
      break;
    case 1:
      ge(t.type) && br(t);
      break;
    case 4:
      zo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      O(nl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (O(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ic(e, t, n) : (O(H, H.current & 1), e = be(e, t, n), e !== null ? e.sibling : null);
      O(H, H.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return oc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), O(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, nc(e, t, n);
  }
  return be(e, t, n);
}
var uc, Qi, sc, ac;
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
Qi = function() {
};
sc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, It(Ve.current);
    var i = null;
    switch (n) {
      case "input":
        l = pi(e, l), r = pi(e, r), i = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = gi(e, l), r = gi(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Jr);
    }
    yi(n, r);
    var o;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Bn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && s !== u && (s != null || u != null)) if (c === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in s) s.hasOwnProperty(o) && u[o] !== s[o] && (n || (n = {}), n[o] = s[o]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = s;
      else c === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, u = u ? u.__html : void 0, s != null && u !== s && (i = i || []).push(c, s)) : c === "children" ? typeof s != "string" && typeof s != "number" || (i = i || []).push(c, "" + s) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Bn.hasOwnProperty(c) ? (s != null && c === "onScroll" && F("scroll", e), i || u === s || (i = [])) : (i = i || []).push(c, s));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
ac = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function _n(e, t) {
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
function Ud(e, t, n) {
  var r = t.pendingProps;
  switch (xo(t), t.tag) {
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
      return ge(t.type) && qr(), ie(t), null;
    case 3:
      return r = t.stateNode, dn(), A(he), A(se), Lo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (xr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, je !== null && (bi(je), je = null))), Qi(e, t), ie(t), null;
    case 5:
      Ro(t);
      var l = It(er.current);
      if (n = t.type, e !== null && t.stateNode != null) sc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(k(166));
          return ie(t), null;
        }
        if (e = It(Ve.current), xr(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[$e] = t, r[qn] = i, e = (t.mode & 1) !== 0, n) {
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
              for (l = 0; l < zn.length; l++) F(zn[l], r);
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
          yi(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && Cr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && Cr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Bn.hasOwnProperty(o) && u != null && o === "onScroll" && F("scroll", r);
          }
          switch (n) {
            case "input":
              hr(r), uu(r, i, !0);
              break;
            case "textarea":
              hr(r), au(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = Jr);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Fs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[$e] = t, e[qn] = r, uc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = ki(n, r), n) {
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
                for (l = 0; l < zn.length; l++) F(zn[l], e);
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
                ou(e, r), l = pi(e, r), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), F("invalid", e);
                break;
              case "textarea":
                su(e, r), l = gi(e, r), F("invalid", e);
                break;
              default:
                l = r;
            }
            yi(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? Hs(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && As(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Vn(e, s) : typeof s == "number" && Vn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Bn.hasOwnProperty(i) ? s != null && i === "onScroll" && F("scroll", e) : s != null && so(e, i, s, o));
            }
            switch (n) {
              case "input":
                hr(e), uu(e, r, !1);
                break;
              case "textarea":
                hr(e), au(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + yt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? tn(e, !!r.multiple, i, !1) : r.defaultValue != null && tn(
                  e,
                  !!r.multiple,
                  r.defaultValue,
                  !0
                );
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Jr);
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
      if (e && t.stateNode != null) ac(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(k(166));
        if (n = It(er.current), It(Ve.current), xr(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[$e] = t, (i = r.nodeValue !== n) && (e = we, e !== null)) switch (e.tag) {
            case 3:
              Cr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && Cr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[$e] = t, t.stateNode = r;
      }
      return ie(t), null;
    case 13:
      if (A(H), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (U && Se !== null && t.mode & 1 && !(t.flags & 128)) Na(), cn(), t.flags |= 98560, i = !1;
        else if (i = xr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(k(317));
            i[$e] = t;
          } else cn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ie(t), i = !1;
        } else je !== null && (bi(je), je = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? G === 0 && (G = 3) : Qo())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
    case 4:
      return dn(), Qi(e, t), e === null && Zn(t.stateNode.containerInfo), ie(t), null;
    case 10:
      return Do(t.type._context), ie(t), null;
    case 17:
      return ge(t.type) && qr(), ie(t), null;
    case 19:
      if (A(H), i = t.memoizedState, i === null) return ie(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) _n(i, !1);
      else {
        if (G !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = il(e), o !== null) {
            for (t.flags |= 128, _n(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return O(H, H.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && K() > mn && (t.flags |= 128, r = !0, _n(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = il(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), _n(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U) return ie(t), null;
        } else 2 * K() - i.renderingStartTime > mn && n !== 1073741824 && (t.flags |= 128, r = !0, _n(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = K(), t.sibling = null, n = H.current, O(H, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
    case 22:
    case 23:
      return Wo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Hd(e, t) {
  switch (xo(t), t.tag) {
    case 1:
      return ge(t.type) && qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return dn(), A(he), A(se), Lo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ro(t), null;
    case 13:
      if (A(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        cn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return A(H), null;
    case 4:
      return dn(), null;
    case 10:
      return Do(t.type._context), null;
    case 22:
    case 23:
      return Wo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Nr = !1, ue = !1, $d = typeof WeakSet == "function" ? WeakSet : Set, C = null;
function bt(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    V(e, t, r);
  }
  else n.current = null;
}
function Ki(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var qu = !1;
function Bd(e, t) {
  if (Ti = Xr, e = ma(), Eo(e)) {
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
  for (Ii = { focusedElem: e, selectionRange: n }, Xr = !1, C = t; C !== null; ) if (t = C, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, C = e;
  else for (; C !== null; ) {
    t = C;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var S = v.memoizedProps, T = v.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Re(t.type, S), T);
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
    } catch (g) {
      V(t, t.return, g);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, C = e;
      break;
    }
    C = t.return;
  }
  return v = qu, qu = !1, v;
}
function Un(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Ki(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function Cl(e, t) {
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
function Yi(e) {
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
  t !== null && (e.alternate = null, cc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$e], delete t[qn], delete t[Li], delete t[xd], delete t[Pd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
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
function Xi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Jr));
  else if (r !== 4 && (e = e.child, e !== null)) for (Xi(e, t, n), e = e.sibling; e !== null; ) Xi(e, t, n), e = e.sibling;
}
function Gi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (Gi(e, t, n), e = e.sibling; e !== null; ) Gi(e, t, n), e = e.sibling;
}
var te = null, Le = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) dc(e, t, n), n = n.sibling;
}
function dc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function") try {
    Be.onCommitFiberUnmount(hl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ue || bt(n, t);
    case 6:
      var r = te, l = Le;
      te = null, tt(e, t, n), te = r, Le = l, te !== null && (Le ? (e = te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null && (Le ? (e = te, n = n.stateNode, e.nodeType === 8 ? Gl(e.parentNode, n) : e.nodeType === 1 && Gl(e, n), Yn(e)) : Gl(te, n.stateNode));
      break;
    case 4:
      r = te, l = Le, te = n.stateNode.containerInfo, Le = !0, tt(e, t, n), te = r, Le = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Ki(n, t, o), l = l.next;
        } while (l !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (!ue && (bt(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
function es(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new $d()), t.forEach(function(r) {
      var l = Jd.bind(null, e, r);
      n.has(r) || (n.add(r), r.then(l, l));
    });
  }
}
function ze(e, t) {
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
      dc(i, o, l), te = null, Le = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      V(l, t, c);
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
      if (ze(t, e), Ue(e), r & 4) {
        try {
          Un(3, e, e.return), Cl(3, e);
        } catch (S) {
          V(e, e.return, S);
        }
        try {
          Un(5, e, e.return);
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 1:
      ze(t, e), Ue(e), r & 512 && n !== null && bt(n, n.return);
      break;
    case 5:
      if (ze(t, e), Ue(e), r & 512 && n !== null && bt(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          Vn(l, "");
        } catch (S) {
          V(e, e.return, S);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, s = e.updateQueue;
        if (e.updateQueue = null, s !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Ms(l, i), ki(u, o);
          var c = ki(u, i);
          for (o = 0; o < s.length; o += 2) {
            var m = s[o], h = s[o + 1];
            m === "style" ? Hs(l, h) : m === "dangerouslySetInnerHTML" ? As(l, h) : m === "children" ? Vn(l, h) : so(l, m, h, c);
          }
          switch (u) {
            case "input":
              mi(l, i);
              break;
            case "textarea":
              Os(l, i);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? tn(l, !!i.multiple, y, !1) : p !== !!i.multiple && (i.defaultValue != null ? tn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : tn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[qn] = i;
        } catch (S) {
          V(e, e.return, S);
        }
      }
      break;
    case 6:
      if (ze(t, e), Ue(e), r & 4) {
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
      if (ze(t, e), Ue(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        Yn(t.containerInfo);
      } catch (S) {
        V(e, e.return, S);
      }
      break;
    case 4:
      ze(t, e), Ue(e);
      break;
    case 13:
      ze(t, e), Ue(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Bo = K())), r & 4 && es(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (c = ue) || m, ze(t, e), ue = c) : ze(t, e), Ue(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (C = e, m = e.child; m !== null; ) {
          for (h = C = m; C !== null; ) {
            switch (p = C, y = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Un(4, p, p.return);
                break;
              case 1:
                bt(p, p.return);
                var v = p.stateNode;
                if (typeof v.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, v.props = t.memoizedProps, v.state = t.memoizedState, v.componentWillUnmount();
                  } catch (S) {
                    V(r, n, S);
                  }
                }
                break;
              case 5:
                bt(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  ns(h);
                  continue;
                }
            }
            y !== null ? (y.return = p, C = y) : ns(h);
          }
          m = m.sibling;
        }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                l = h.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Us("display", o));
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
      ze(t, e), Ue(e), r & 4 && es(e);
      break;
    case 21:
      break;
    default:
      ze(
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
        throw Error(k(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Vn(l, ""), r.flags &= -33);
          var i = bu(e);
          Gi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = bu(e);
          Xi(e, u, o);
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
function Vd(e, t, n) {
  C = e, mc(e);
}
function mc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; C !== null; ) {
    var l = C, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Nr;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ue;
        u = Nr;
        var c = ue;
        if (Nr = o, (ue = s) && !c) for (C = l; C !== null; ) o = C, s = o.child, o.tag === 22 && o.memoizedState !== null ? rs(l) : s !== null ? (s.return = o, C = s) : rs(l);
        for (; i !== null; ) C = i, mc(i), i = i.sibling;
        C = l, Nr = u, ue = c;
      }
      ts(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, C = i) : ts(e);
  }
}
function ts(e) {
  for (; C !== null; ) {
    var t = C;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ue || Cl(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ue) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Re(t.type, n.memoizedProps);
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
              var c = t.alternate;
              if (c !== null) {
                var m = c.memoizedState;
                if (m !== null) {
                  var h = m.dehydrated;
                  h !== null && Yn(h);
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
        ue || t.flags & 512 && Yi(t);
      } catch (p) {
        V(t, t.return, p);
      }
    }
    if (t === e) {
      C = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function ns(e) {
  for (; C !== null; ) {
    var t = C;
    if (t === e) {
      C = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, C = n;
      break;
    }
    C = t.return;
  }
}
function rs(e) {
  for (; C !== null; ) {
    var t = C;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Cl(4, t);
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
            Yi(t);
          } catch (s) {
            V(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Yi(t);
          } catch (s) {
            V(t, o, s);
          }
      }
    } catch (s) {
      V(t, t.return, s);
    }
    if (t === e) {
      C = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, C = u;
      break;
    }
    C = t.return;
  }
}
var Wd = Math.ceil, sl = et.ReactCurrentDispatcher, Ho = et.ReactCurrentOwner, De = et.ReactCurrentBatchConfig, L = 0, b = null, Y = null, ne = 0, ke = 0, en = wt(0), G = 0, lr = null, At = 0, xl = 0, $o = 0, Hn = null, pe = null, Bo = 0, mn = 1 / 0, Qe = null, al = !1, Zi = null, ht = null, Dr = !1, at = null, cl = 0, $n = 0, Ji = null, Ur = -1, Hr = 0;
function ce() {
  return L & 6 ? K() : Ur !== -1 ? Ur : Ur = K();
}
function gt(e) {
  return e.mode & 1 ? L & 2 && ne !== 0 ? ne & -ne : Nd.transition !== null ? (Hr === 0 && (Hr = qs()), Hr) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ia(e.type)), e) : 1;
}
function Oe(e, t, n, r) {
  if (50 < $n) throw $n = 0, Ji = null, Error(k(185));
  or(e, n, r), (!(L & 2) || e !== b) && (e === b && (!(L & 2) && (xl |= n), G === 4 && ut(e, ne)), ve(e, r), n === 1 && L === 0 && !(t.mode & 1) && (mn = K() + 500, Sl && Et()));
}
function ve(e, t) {
  var n = e.callbackNode;
  Nf(e, t);
  var r = Yr(e, e === b ? ne : 0);
  if (r === 0) n !== null && du(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && du(n), t === 1) e.tag === 0 ? _d(ls.bind(null, e)) : xa(ls.bind(null, e)), Ed(function() {
      !(L & 6) && Et();
    }), n = null;
    else {
      switch (bs(r)) {
        case 1:
          n = mo;
          break;
        case 4:
          n = Zs;
          break;
        case 16:
          n = Kr;
          break;
        case 536870912:
          n = Js;
          break;
        default:
          n = Kr;
      }
      n = Ec(n, hc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function hc(e, t) {
  if (Ur = -1, Hr = 0, L & 6) throw Error(k(327));
  var n = e.callbackNode;
  if (un() && e.callbackNode !== n) return null;
  var r = Yr(e, e === b ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = fl(e, r);
  else {
    t = r;
    var l = L;
    L |= 2;
    var i = vc();
    (b !== e || ne !== t) && (Qe = null, mn = K() + 500, Lt(e, t));
    do
      try {
        Yd();
        break;
      } catch (u) {
        gc(e, u);
      }
    while (!0);
    No(), sl.current = i, L = l, Y !== null ? t = 0 : (b = null, ne = 0, t = G);
  }
  if (t !== 0) {
    if (t === 2 && (l = xi(e), l !== 0 && (r = l, t = qi(e, l))), t === 1) throw n = lr, Lt(e, 0), ut(e, r), ve(e, K()), n;
    if (t === 6) ut(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Qd(l) && (t = fl(e, r), t === 2 && (i = xi(e), i !== 0 && (r = i, t = qi(e, i))), t === 1)) throw n = lr, Lt(e, 0), ut(e, r), ve(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Nt(e, pe, Qe);
          break;
        case 3:
          if (ut(e, r), (r & 130023424) === r && (t = Bo + 500 - K(), 10 < t)) {
            if (Yr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ce(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Ri(Nt.bind(null, e, pe, Qe), t);
            break;
          }
          Nt(e, pe, Qe);
          break;
        case 4:
          if (ut(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Me(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Wd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Ri(Nt.bind(null, e, pe, Qe), r);
            break;
          }
          Nt(e, pe, Qe);
          break;
        case 5:
          Nt(e, pe, Qe);
          break;
        default:
          throw Error(k(329));
      }
    }
  }
  return ve(e, K()), e.callbackNode === n ? hc.bind(null, e) : null;
}
function qi(e, t) {
  var n = Hn;
  return e.current.memoizedState.isDehydrated && (Lt(e, t).flags |= 256), e = fl(e, t), e !== 2 && (t = pe, pe = n, t !== null && bi(t)), e;
}
function bi(e) {
  pe === null ? pe = e : pe.push.apply(pe, e);
}
function Qd(e) {
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
function ut(e, t) {
  for (t &= ~$o, t &= ~xl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Me(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ls(e) {
  if (L & 6) throw Error(k(327));
  un();
  var t = Yr(e, 0);
  if (!(t & 1)) return ve(e, K()), null;
  var n = fl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = xi(e);
    r !== 0 && (t = r, n = qi(e, r));
  }
  if (n === 1) throw n = lr, Lt(e, 0), ut(e, t), ve(e, K()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Nt(e, pe, Qe), ve(e, K()), null;
}
function Vo(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    L = n, L === 0 && (mn = K() + 500, Sl && Et());
  }
}
function Ut(e) {
  at !== null && at.tag === 0 && !(L & 6) && un();
  var t = L;
  L |= 1;
  var n = De.transition, r = j;
  try {
    if (De.transition = null, j = 1, e) return e();
  } finally {
    j = r, De.transition = n, L = t, !(L & 6) && Et();
  }
}
function Wo() {
  ke = en.current, A(en);
}
function Lt(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, wd(n)), Y !== null) for (n = Y.return; n !== null; ) {
    var r = n;
    switch (xo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && qr();
        break;
      case 3:
        dn(), A(he), A(se), Lo();
        break;
      case 5:
        Ro(r);
        break;
      case 4:
        dn();
        break;
      case 13:
        A(H);
        break;
      case 19:
        A(H);
        break;
      case 10:
        Do(r.type._context);
        break;
      case 22:
      case 23:
        Wo();
    }
    n = n.return;
  }
  if (b = e, Y = e = vt(e.current, null), ne = ke = t, G = 0, lr = null, $o = xl = At = 0, pe = Hn = null, Tt !== null) {
    for (t = 0; t < Tt.length; t++) if (n = Tt[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    Tt = null;
  }
  return e;
}
function gc(e, t) {
  do {
    var n = Y;
    try {
      if (No(), Or.current = ul, ol) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        ol = !1;
      }
      if (Ft = 0, q = X = $ = null, An = !1, tr = 0, Ho.current = null, n === null || n.return === null) {
        G = 1, lr = t, Y = null;
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
          var y = Qu(o);
          if (y !== null) {
            y.flags &= -257, Ku(y, o, u, i, t), y.mode & 1 && Wu(i, c, t), t = y, s = c;
            var v = t.updateQueue;
            if (v === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(s), t.updateQueue = S;
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Wu(i, c, t), Qo();
              break e;
            }
            s = Error(k(426));
          }
        } else if (U && u.mode & 1) {
          var T = Qu(o);
          if (T !== null) {
            !(T.flags & 65536) && (T.flags |= 256), Ku(T, o, u, i, t), Po(pn(s, u));
            break e;
          }
        }
        i = s = pn(s, u), G !== 4 && (G = 2), Hn === null ? Hn = [i] : Hn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = ba(i, s, t);
              Au(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (ht === null || !ht.has(d)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = ec(i, u, t);
                Au(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      kc(n);
    } catch (w) {
      t = w, Y === n && n !== null && (Y = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function vc() {
  var e = sl.current;
  return sl.current = ul, e === null ? ul : e;
}
function Qo() {
  (G === 0 || G === 3 || G === 2) && (G = 4), b === null || !(At & 268435455) && !(xl & 268435455) || ut(b, ne);
}
function fl(e, t) {
  var n = L;
  L |= 2;
  var r = vc();
  (b !== e || ne !== t) && (Qe = null, Lt(e, t));
  do
    try {
      Kd();
      break;
    } catch (l) {
      gc(e, l);
    }
  while (!0);
  if (No(), L = n, sl.current = r, Y !== null) throw Error(k(261));
  return b = null, ne = 0, G;
}
function Kd() {
  for (; Y !== null; ) yc(Y);
}
function Yd() {
  for (; Y !== null && !yf(); ) yc(Y);
}
function yc(e) {
  var t = wc(e.alternate, e, ke);
  e.memoizedProps = e.pendingProps, t === null ? kc(e) : Y = t, Ho.current = null;
}
function kc(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Hd(n, t), n !== null) {
        n.flags &= 32767, Y = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        G = 6, Y = null;
        return;
      }
    } else if (n = Ud(n, t, ke), n !== null) {
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
function Nt(e, t, n) {
  var r = j, l = De.transition;
  try {
    De.transition = null, j = 1, Xd(e, t, n, r);
  } finally {
    De.transition = l, j = r;
  }
  return null;
}
function Xd(e, t, n, r) {
  do
    un();
  while (at !== null);
  if (L & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Df(e, i), e === b && (Y = b = null, ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Dr || (Dr = !0, Ec(Kr, function() {
    return un(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = De.transition, De.transition = null;
    var o = j;
    j = 1;
    var u = L;
    L |= 4, Ho.current = null, Bd(e, n), pc(n, e), md(Ii), Xr = !!Ti, Ii = Ti = null, e.current = n, Vd(n), kf(), L = u, j = o, De.transition = i;
  } else e.current = n;
  if (Dr && (Dr = !1, at = e, cl = l), i = e.pendingLanes, i === 0 && (ht = null), Ef(n.stateNode), ve(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (al) throw al = !1, e = Zi, Zi = null, e;
  return cl & 1 && e.tag !== 0 && un(), i = e.pendingLanes, i & 1 ? e === Ji ? $n++ : ($n = 0, Ji = e) : $n = 0, Et(), null;
}
function un() {
  if (at !== null) {
    var e = bs(cl), t = De.transition, n = j;
    try {
      if (De.transition = null, j = 16 > e ? 16 : e, at === null) var r = !1;
      else {
        if (e = at, at = null, cl = 0, L & 6) throw Error(k(331));
        var l = L;
        for (L |= 4, C = e.current; C !== null; ) {
          var i = C, o = i.child;
          if (C.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (C = c; C !== null; ) {
                  var m = C;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Un(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) h.return = m, C = h;
                  else for (; C !== null; ) {
                    m = C;
                    var p = m.sibling, y = m.return;
                    if (cc(m), m === c) {
                      C = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = y, C = p;
                      break;
                    }
                    C = y;
                  }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var S = v.child;
                if (S !== null) {
                  v.child = null;
                  do {
                    var T = S.sibling;
                    S.sibling = null, S = T;
                  } while (S !== null);
                }
              }
              C = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, C = o;
          else e: for (; C !== null; ) {
            if (i = C, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Un(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, C = f;
              break e;
            }
            C = i.return;
          }
        }
        var a = e.current;
        for (C = a; C !== null; ) {
          o = C;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, C = d;
          else e: for (o = a; C !== null; ) {
            if (u = C, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Cl(9, u);
              }
            } catch (w) {
              V(u, u.return, w);
            }
            if (u === o) {
              C = null;
              break e;
            }
            var g = u.sibling;
            if (g !== null) {
              g.return = u.return, C = g;
              break e;
            }
            C = u.return;
          }
        }
        if (L = l, Et(), Be && typeof Be.onPostCommitFiberRoot == "function") try {
          Be.onPostCommitFiberRoot(hl, e);
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
function is(e, t, n) {
  t = pn(n, t), t = ba(e, t, 1), e = mt(e, t, 1), t = ce(), e !== null && (or(e, 1, t), ve(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) is(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      is(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (ht === null || !ht.has(r))) {
        e = pn(n, e), e = ec(t, e, 1), t = mt(t, e, 1), e = ce(), t !== null && (or(t, 1, e), ve(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function Gd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, b === e && (ne & n) === n && (G === 4 || G === 3 && (ne & 130023424) === ne && 500 > K() - Bo ? Lt(e, 0) : $o |= n), ve(e, t);
}
function Sc(e, t) {
  t === 0 && (e.mode & 1 ? (t = yr, yr <<= 1, !(yr & 130023424) && (yr = 4194304)) : t = 1);
  var n = ce();
  e = qe(e, t), e !== null && (or(e, t, n), ve(e, n));
}
function Zd(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Sc(e, n);
}
function Jd(e, t) {
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
  r !== null && r.delete(t), Sc(e, n);
}
var wc;
wc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || he.current) me = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return me = !1, Ad(e, t, n);
    me = !!(e.flags & 131072);
  }
  else me = !1, U && t.flags & 1048576 && Pa(t, tl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Ar(e, t), e = t.pendingProps;
      var l = an(t, se.current);
      on(t, n), l = Mo(null, t, r, e, l, n);
      var i = Oo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ge(r) ? (i = !0, br(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Io(t), l.updater = El, t.stateNode = l, l._reactInternals = t, Ui(t, r, e, n), t = Bi(null, t, r, !0, i, n)) : (t.tag = 0, U && i && Co(t), ae(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Ar(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = bd(r), e = Re(r, e), l) {
          case 0:
            t = $i(null, t, r, e, n);
            break e;
          case 1:
            t = Gu(null, t, r, e, n);
            break e;
          case 11:
            t = Yu(null, t, r, e, n);
            break e;
          case 14:
            t = Xu(null, t, r, Re(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), $i(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Gu(e, t, r, l, n);
    case 3:
      e: {
        if (lc(t), e === null) throw Error(k(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, za(e, t), ll(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = pn(Error(k(423)), t), t = Zu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = pn(Error(k(424)), t), t = Zu(e, t, r, n, l);
          break e;
        } else for (Se = pt(t.stateNode.containerInfo.firstChild), we = t, U = !0, je = null, n = Ta(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (cn(), r === l) {
            t = be(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ra(t), e === null && Oi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, zi(r, l) ? o = null : i !== null && zi(r, i) && (t.flags |= 32), rc(e, t), ae(e, t, o, n), t.child;
    case 6:
      return e === null && Oi(t), null;
    case 13:
      return ic(e, t, n);
    case 4:
      return zo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = fn(t, null, r, n) : ae(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Yu(e, t, r, l, n);
    case 7:
      return ae(e, t, t.pendingProps, n), t.child;
    case 8:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ae(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, O(nl, r._currentValue), r._currentValue = o, i !== null) if (Fe(i.value, o)) {
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
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Fi(
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
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Fi(o, n, t), o = i.sibling;
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
      return l = t.type, r = t.pendingProps.children, on(t, n), l = Te(l), r = r(l), t.flags |= 1, ae(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Re(r, t.pendingProps), l = Re(r.type, l), Xu(e, t, r, l, n);
    case 15:
      return tc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Re(r, l), Ar(e, t), t.tag = 1, ge(r) ? (e = !0, br(t)) : e = !1, on(t, n), qa(t, r, l), Ui(t, r, l, n), Bi(null, t, r, !0, e, n);
    case 19:
      return oc(e, t, n);
    case 22:
      return nc(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function Ec(e, t) {
  return Gs(e, t);
}
function qd(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ne(e, t, n, r) {
  return new qd(e, t, n, r);
}
function Ko(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function bd(e) {
  if (typeof e == "function") return Ko(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === co) return 11;
    if (e === fo) return 14;
  }
  return 2;
}
function vt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ne(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function $r(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Ko(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Wt:
      return jt(n.children, l, i, t);
    case ao:
      o = 8, l |= 8;
      break;
    case ai:
      return e = Ne(12, n, t, l | 2), e.elementType = ai, e.lanes = i, e;
    case ci:
      return e = Ne(13, n, t, l), e.elementType = ci, e.lanes = i, e;
    case fi:
      return e = Ne(19, n, t, l), e.elementType = fi, e.lanes = i, e;
    case Rs:
      return Pl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Is:
          o = 10;
          break e;
        case zs:
          o = 9;
          break e;
        case co:
          o = 11;
          break e;
        case fo:
          o = 14;
          break e;
        case lt:
          o = 16, r = null;
          break e;
      }
      throw Error(k(130, e == null ? e : typeof e, ""));
  }
  return t = Ne(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function jt(e, t, n, r) {
  return e = Ne(7, e, r, t), e.lanes = n, e;
}
function Pl(e, t, n, r) {
  return e = Ne(22, e, r, t), e.elementType = Rs, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ri(e, t, n) {
  return e = Ne(6, e, null, t), e.lanes = n, e;
}
function li(e, t, n) {
  return t = Ne(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function ep(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Al(0), this.expirationTimes = Al(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Al(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Yo(e, t, n, r, l, i, o, u, s) {
  return e = new ep(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ne(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Io(i), e;
}
function tp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Vt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Cc(e) {
  if (!e) return kt;
  e = e._reactInternals;
  e: {
    if ($t(e) !== e || e.tag !== 1) throw Error(k(170));
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
    if (ge(n)) return Ca(e, n, t);
  }
  return t;
}
function xc(e, t, n, r, l, i, o, u, s) {
  return e = Yo(n, r, !0, e, l, i, o, u, s), e.context = Cc(null), n = e.current, r = ce(), l = gt(n), i = Ge(r, l), i.callback = t ?? null, mt(n, i, l), e.current.lanes = l, or(e, l, r), ve(e, r), e;
}
function _l(e, t, n, r) {
  var l = t.current, i = ce(), o = gt(l);
  return n = Cc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ge(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = mt(l, t, o), e !== null && (Oe(e, l, o, i), Mr(e, l, o)), o;
}
function dl(e) {
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
function Xo(e, t) {
  os(e, t), (e = e.alternate) && os(e, t);
}
function np() {
  return null;
}
var Pc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function Go(e) {
  this._internalRoot = e;
}
Nl.prototype.render = Go.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  _l(e, t, null, null);
};
Nl.prototype.unmount = Go.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Ut(function() {
      _l(null, e, null, null);
    }), t[Je] = null;
  }
};
function Nl(e) {
  this._internalRoot = e;
}
Nl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = na();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++) ;
    ot.splice(n, 0, e), n === 0 && la(e);
  }
};
function Zo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Dl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function us() {
}
function rp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = dl(o);
        i.call(c);
      };
    }
    var o = xc(t, r, e, 0, null, !1, !1, "", us);
    return e._reactRootContainer = o, e[Je] = o.current, Zn(e.nodeType === 8 ? e.parentNode : e), Ut(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = dl(s);
      u.call(c);
    };
  }
  var s = Yo(e, 0, !1, null, null, !1, !1, "", us);
  return e._reactRootContainer = s, e[Je] = s.current, Zn(e.nodeType === 8 ? e.parentNode : e), Ut(function() {
    _l(t, s, n, r);
  }), s;
}
function Tl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var s = dl(o);
        u.call(s);
      };
    }
    _l(t, o, e, l);
  } else o = rp(n, t, e, l, r);
  return dl(o);
}
ea = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = In(t.pendingLanes);
        n !== 0 && (ho(t, n | 1), ve(t, K()), !(L & 6) && (mn = K() + 500, Et()));
      }
      break;
    case 13:
      Ut(function() {
        var r = qe(e, 1);
        if (r !== null) {
          var l = ce();
          Oe(r, e, 1, l);
        }
      }), Xo(e, 1);
  }
};
go = function(e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = ce();
      Oe(t, e, 134217728, n);
    }
    Xo(e, 134217728);
  }
};
ta = function(e) {
  if (e.tag === 13) {
    var t = gt(e), n = qe(e, t);
    if (n !== null) {
      var r = ce();
      Oe(n, e, t, r);
    }
    Xo(e, t);
  }
};
na = function() {
  return j;
};
ra = function(e, t) {
  var n = j;
  try {
    return j = e, t();
  } finally {
    j = n;
  }
};
wi = function(e, t, n) {
  switch (t) {
    case "input":
      if (mi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = kl(r);
            if (!l) throw Error(k(90));
            js(r), mi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Os(e, n);
      break;
    case "select":
      t = n.value, t != null && tn(e, !!n.multiple, t, !1);
  }
};
Vs = Vo;
Ws = Ut;
var lp = { usingClientEntryPoint: !1, Events: [sr, Xt, kl, $s, Bs, Vo] }, Nn = { findFiberByHostInstance: Dt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, ip = { bundleType: Nn.bundleType, version: Nn.version, rendererPackageName: Nn.rendererPackageName, rendererConfig: Nn.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Ys(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: Nn.findFiberByHostInstance || np, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Tr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Tr.isDisabled && Tr.supportsFiber) try {
    hl = Tr.inject(ip), Be = Tr;
  } catch {
  }
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = lp;
Ce.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Zo(t)) throw Error(k(200));
  return tp(e, t, null, n);
};
Ce.createRoot = function(e, t) {
  if (!Zo(e)) throw Error(k(299));
  var n = !1, r = "", l = Pc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Yo(e, 1, !1, null, null, n, !1, r, l), e[Je] = t.current, Zn(e.nodeType === 8 ? e.parentNode : e), new Go(t);
};
Ce.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = Ys(t), e = e === null ? null : e.stateNode, e;
};
Ce.flushSync = function(e) {
  return Ut(e);
};
Ce.hydrate = function(e, t, n) {
  if (!Dl(t)) throw Error(k(200));
  return Tl(null, e, t, !0, n);
};
Ce.hydrateRoot = function(e, t, n) {
  if (!Zo(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Pc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = xc(t, null, e, 1, n ?? null, l, !1, i, o), e[Je] = t.current, Zn(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Nl(t);
};
Ce.render = function(e, t, n) {
  if (!Dl(t)) throw Error(k(200));
  return Tl(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function(e) {
  if (!Dl(e)) throw Error(k(40));
  return e._reactRootContainer ? (Ut(function() {
    Tl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Je] = null;
    });
  }), !0) : !1;
};
Ce.unstable_batchedUpdates = Vo;
Ce.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Dl(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return Tl(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function _c() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_c);
    } catch (e) {
      console.error(e);
    }
}
_c(), _s.exports = Ce;
var op = _s.exports, ss = op;
Br.createRoot = ss.createRoot, Br.hydrateRoot = ss.hydrateRoot;
const up = (e) => {
  var t, n, r;
  return !!(((r = (n = (t = e.system) == null ? void 0 : t.attributes) == null ? void 0 : n.isPlayer) == null ? void 0 : r.value) ?? 0);
}, sp = () => {
  var e;
  return (((e = canvas == null ? void 0 : canvas.tokens) == null ? void 0 : e.placeables) ?? []).filter((t) => {
    var n;
    return !!((n = t.actor) != null && n.id);
  }).map((t) => {
    var n, r;
    return {
      actorId: ((n = t.actor) == null ? void 0 : n.id) ?? "",
      name: t.name ?? ((r = t.actor) == null ? void 0 : r.name) ?? "unknown",
      isPlayer: up(t.actor)
    };
  });
}, ap = () => {
  const [e, t] = W.useState([]);
  return W.useEffect(() => {
    var n;
    console.log((n = canvas == null ? void 0 : canvas.tokens) == null ? void 0 : n.placeables), t(sp());
  }, []), e;
}, Nc = (e) => Math.max(0, Math.floor(e)), Dc = (e, t) => Nc(e * t), Tc = (e, t = 1) => Nc(e - t), ii = (e) => Dc(e, 2 / 3), cp = (e) => Dc(e, 1 / 2), We = (e) => {
  e.getStack(e.statusId) > 0 && e.setStack(e.statusId, 0);
}, oi = (e) => {
  const t = e.getStack(e.statusId);
  t > 0 && e.setStack(e.statusId, Tc(t));
}, Ae = [
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
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, ii(t)));
    }
  },
  {
    id: "Poison",
    name: "毒",
    attribute: { stack: "stackPoison", pending: "stackPoisonnext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, cp(t)));
    }
  },
  {
    id: "Tremor",
    name: "振動",
    attribute: { stack: "stacktremor", pending: "stacktremornext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, ii(t)));
    }
  },
  {
    id: "Bleeding",
    name: "出血",
    attribute: { stack: "stackBleeding", pending: "stackBleedingnext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || e.setStack(e.statusId, ii(t));
    }
  },
  {
    id: "Poise",
    name: "呼吸",
    attribute: { stack: "stackpoise", pending: "stackpoisenext" },
    hasPending: !0,
    onTurnEnd: (e) => oi(e)
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
    onTurnEnd: (e) => oi(e)
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
      t > 0 && e.setStack(e.statusId, Tc(t));
    }
  },
  {
    id: "FEOAwaken",
    name: "覚醒",
    attribute: { stack: "stackFEOAwaken", pending: "stackFEOAwakenNext" },
    hasPending: !0,
    onTurnEnd: (e) => oi(e)
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
];
class fp {
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
class dp {
  constructor(t) {
    dr(this, oe, /* @__PURE__ */ new Map());
    t && Object.entries(t).forEach(([n, r]) => {
      r && J(this, oe).set(n, {
        stack: nt(r.stack),
        pending: nt(r.pending)
      });
    });
  }
  getState(t) {
    const n = J(this, oe).get(t);
    return n ? { stack: n.stack, pending: n.pending } : { stack: 0, pending: 0 };
  }
  getStack(t) {
    var n;
    return ((n = J(this, oe).get(t)) == null ? void 0 : n.stack) ?? 0;
  }
  getPending(t) {
    var n;
    return ((n = J(this, oe).get(t)) == null ? void 0 : n.pending) ?? 0;
  }
  setState(t, n) {
    J(this, oe).set(t, {
      stack: nt(n.stack),
      pending: nt(n.pending)
    });
  }
  setStack(t, n) {
    const r = J(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.stack = nt(n), J(this, oe).set(t, r);
  }
  setPending(t, n) {
    const r = J(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.pending = nt(n), J(this, oe).set(t, r);
  }
  addStack(t, n) {
    const r = J(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.stack = nt(r.stack + n), J(this, oe).set(t, r);
  }
  addPending(t, n) {
    const r = J(this, oe).get(t) ?? { stack: 0, pending: 0 };
    r.pending = nt(r.pending + n), J(this, oe).set(t, r);
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
}, pp = (e, t, n = 0) => {
  var i, o, u;
  const r = (u = (o = (i = e.system) == null ? void 0 : i.attributes) == null ? void 0 : o[t]) == null ? void 0 : u.max;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, mp = (e) => {
  const t = new dp();
  return Ae.forEach((r) => {
    const l = r.attribute, i = ee(e, l.stack, 0), o = l.pending ? ee(e, l.pending, 0) : 0;
    t.setState(r.id, { stack: i, pending: o });
  }), new fp({
    id: e.id ?? "",
    name: e.name,
    hp: ee(e, "hp", 0),
    maxHp: pp(e, "hp", 0),
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
}, as = (e) => {
  const t = {
    "system.attributes.hp.value": e.hp,
    "system.attributes.barrier.value": e.barrier,
    "system.attributes.constitution.value": e.constitution,
    "system.attributes.san.value": e.san
  };
  return Ae.forEach((r) => {
    const l = r.attribute, i = e.statuses.getState(r.id);
    t[`system.attributes.${l.stack}.value`] = i.stack, l.pending && (t[`system.attributes.${l.pending}.value`] = i.pending);
  }), t;
};
class pl {
  loadByActorId(t) {
    var r;
    const n = t ? ((r = game.actors) == null ? void 0 : r.get(t)) ?? null : null;
    return !n || !n.id ? null : {
      actorId: n.id,
      actor: n,
      combatant: mp(n)
    };
  }
  async saveActor(t) {
    var r;
    const n = t.id ? ((r = game.actors) == null ? void 0 : r.get(t.id)) ?? null : null;
    n && await n.update(as(t));
  }
  async save(t) {
    await t.actor.update(as(t.combatant));
  }
}
class Ic {
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
const hp = (e, t) => {
  const n = new Ic(e, t);
  Ae.forEach((l) => {
    var i;
    (i = l.onDealDamage) == null || i.call(l, n.withStatus(l.id));
  });
}, gp = (e, t) => {
  const n = new Ic(e, t);
  Ae.forEach((l) => {
    var i;
    (i = l.onTakeDamage) == null || i.call(l, n.withStatus(l.id));
  });
}, vp = (e) => {
  const t = e.statuses.getStack("DamageUp"), n = e.statuses.getStack("DamageDown"), r = e.directcheck;
  return t * 10 - n * 10 + (r ? 50 : 0);
}, yp = (e, t) => {
  let n = 0, r = !1;
  e.criticalcheck && (n += 20);
  const i = e.statuses.getStack("Poise");
  if (i > 0) {
    const o = Math.min(i * 5, 100);
    t() * 100 < o && (n += 20, r = !0);
  }
  return { special: n, poiseCritical: r };
}, kp = (e) => {
  const t = e.statuses.getStack("Protection"), n = e.statuses.getStack("Vulnerable");
  return t * 10 - n * 10;
}, Sp = (e) => {
  const t = e.isPlayer ? e.resist : e.resistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, wp = (e) => {
  const t = e.isPlayer ? e.confResist : e.econfResistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Ep = (e, t = {}) => {
  const n = t.random ?? Math.random, r = vp(e.attacker), { special: l, poiseCritical: i } = yp(e.attacker, n), o = kp(e.receiver), u = Sp(e.receiver), s = wp(e.receiver), c = (100 + r - o) / 100, m = (100 + l - u) / 100, h = (100 + l - s) / 100, p = e.baseDamage * Math.max(c, 0) * Math.max(m, 0), y = e.baseDamage * Math.max(c, 0) * Math.max(h, 0);
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
}, Cp = (e, t = {}) => {
  const n = e.attacker, r = Ep(e, t), l = e.receiver;
  let i = l.hp, o = l.barrier, u = l.constitution, s = l.san, c = l.statuses.getStack("Sink");
  const m = l.doubleConstitution, h = Math.ceil(r.dealDamage), p = Math.ceil(r.dealConfDamage);
  let y = 0, v = 0;
  o > 0 && h > 0 && (y = Math.min(o, h), o -= y);
  const S = Math.max(h - y, 0);
  S > 0 && (i -= S, v = S);
  let T = 0;
  if (p > 0) {
    const w = p * (m ? 2 : 1);
    u = Math.max(u - w, 0), T = w;
  }
  let f = 0;
  const a = l.statuses.getStack("Sink");
  if (a > 0) {
    let w = a;
    const E = Math.min(s, w);
    s -= E, w -= E, f += E, w > 0 && (i -= w, v += w), c = Math.floor(a / 2);
  }
  const d = {
    ...r,
    barrierAbsorbed: y,
    hpDamageApplied: v,
    confDamageApplied: T,
    sanDamageApplied: f,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: s
  };
  l.hp = i, l.setBarrier(o), l.setConstitution(u), l.setSan(s), l.setHp(i), l.statuses.setStack("Sink", c);
  const g = {
    baseDamage: e.baseDamage,
    normalRatio: r.normalRatio,
    specialRatio: r.specialRatio,
    specialConfRatio: r.specialConfRatio,
    dealDamage: r.dealDamage,
    dealConfDamage: r.dealConfDamage,
    hpDamageApplied: v,
    confDamageApplied: T,
    sanDamageApplied: f,
    barrierAbsorbed: y,
    poiseCritical: r.poiseCritical,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: s
  };
  return hp(n, g), gp(l, g), { result: d, attacker: n, receiver: l };
}, xp = (e) => {
  var t, n;
  return ((t = e.find((r) => r.isPlayer)) == null ? void 0 : t.actorId) ?? ((n = e[0]) == null ? void 0 : n.actorId) ?? "";
}, Pp = (e, t) => {
  var n, r;
  return ((n = e.find((l) => l.actorId !== t && !l.isPlayer)) == null ? void 0 : n.actorId) ?? ((r = e.find((l) => l.actorId !== t)) == null ? void 0 : r.actorId) ?? "";
}, _p = (e) => {
  const [t, n] = W.useState(""), [r, l] = W.useState(""), [i, o] = W.useState(""), [u, s] = W.useState(null), [c, m] = W.useState(!1), h = W.useMemo(() => {
    const y = /* @__PURE__ */ new Map();
    return e.forEach((v) => y.set(v.actorId, v)), y;
  }, [e]);
  return W.useEffect(() => {
    if (!e.length) {
      t && n(""), r && l("");
      return;
    }
    const y = new Set(e.map((T) => T.actorId));
    let v = t;
    (!v || !y.has(v)) && (v = xp(e));
    let S = r;
    (!S || !y.has(S) || S === v) && (S = Pp(e, v)), v !== t && n(v), S !== r && l(S);
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
      var T, f, a, d, g, w;
      const y = Number(i);
      if (!Number.isFinite(y) || y <= 0) {
        (T = ui.notifications) == null || T.error("ダメージに正の数値を入力してください");
        return;
      }
      const v = t ? h.get(t) : void 0, S = r ? h.get(r) : void 0;
      if (!v || !S) {
        (f = ui.notifications) == null || f.error("攻撃者と防御者を選択してください");
        return;
      }
      if (t === r) {
        (a = ui.notifications) == null || a.error("攻撃者と防御者は別のキャラクターを選んでください");
        return;
      }
      try {
        m(!0);
        const E = new pl(), _ = E.loadByActorId(t), N = E.loadByActorId(r);
        if (!_ || !N) {
          (d = ui.notifications) == null || d.error("攻撃者または防御者のデータを取得できませんでした");
          return;
        }
        const { result: M, attacker: z, receiver: ye } = Cp({
          attacker: _.combatant,
          receiver: N.combatant,
          baseDamage: y
        });
        await Promise.all([
          E.saveActor(z),
          E.saveActor(ye)
        ]);
        const Ct = `
${v.name} → ${S.name}<br/>
基礎ダメージ: ${y}<br/>
HPダメージ: ${M.hpDamageApplied} (バリア吸収: ${M.barrierAbsorbed})<br/>
混乱ダメージ: ${M.confDamageApplied}<br/>
SANダメージ(沈潜): ${M.sanDamageApplied}<br/>
`;
        await ChatMessage.create({
          speaker: ChatMessage.getSpeaker({ actor: _.actor }),
          content: Ct
        }), s(M), (g = ui.notifications) == null || g.info(
          `${v.name} が ${S.name} にダメージを適用しました`
        );
      } catch (E) {
        console.error("[ponkotu-system] damage calc failed", E), (w = ui.notifications) == null || w.error("計算または適用に失敗しました。コンソールを確認してください。");
      } finally {
        m(!1);
      }
    }
  };
}, eo = (e) => `${e.name} ${e.isPlayer ? "(プレイヤー)" : "(エネミー)"}`, rt = (e) => Number.isFinite(e) ? e.toLocaleString() : "-", Np = ({ result: e }) => /* @__PURE__ */ x.jsxs("div", { className: "ponkotu-damage__result", children: [
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
] }), Dp = ({ tokens: e }) => {
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
  } = _p(e);
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ x.jsx("h3", { children: "ダメージ計算" }) }),
    /* @__PURE__ */ x.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ x.jsxs("label", { className: "ponkotu-damage__label", children: [
        "攻撃者",
        /* @__PURE__ */ x.jsxs("select", { value: t, onChange: (m) => o(m.target.value), children: [
          /* @__PURE__ */ x.jsx("option", { value: "", children: "選択してください" }),
          e.map((m) => /* @__PURE__ */ x.jsx("option", { value: m.actorId, children: eo(m) }, m.actorId))
        ] })
      ] }),
      /* @__PURE__ */ x.jsxs("label", { className: "ponkotu-damage__label", children: [
        "防御者",
        /* @__PURE__ */ x.jsxs("select", { value: n, onChange: (m) => u(m.target.value), children: [
          /* @__PURE__ */ x.jsx("option", { value: "", children: "選択してください" }),
          e.map((m) => /* @__PURE__ */ x.jsx("option", { value: m.actorId, children: eo(m) }, m.actorId))
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
    l && /* @__PURE__ */ x.jsx(Np, { result: l })
  ] });
}, Tp = (e) => Number.isInteger(e) && e >= 1, Ip = async (e, t) => {
  if (!t.actorId)
    throw new Error("actorId is required");
  if (!Tp(t.stackDelta))
    throw new Error("stackDelta must be a positive integer");
  const n = t.target ?? "stack", r = Ae.find((s) => s.id === t.statusId);
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
}, zp = Ae.map((e) => e.id), Rp = () => zp[0] ?? "Burned", Lp = (e) => {
  const [t, n] = W.useState(""), [r, l] = W.useState(Rp), [i, o] = W.useState("stack"), [u, s] = W.useState("1"), [c, m] = W.useState(!1), h = Ae.find(
    (v) => v.id === r
  ), p = !!(h && "pending" in h.attribute && h.attribute.pending);
  return W.useEffect(() => {
    var S;
    if (!e.length) {
      t && n("");
      return;
    }
    const v = new Set(e.map((T) => T.actorId));
    (!t || !v.has(t)) && n(((S = e[0]) == null ? void 0 : S.actorId) ?? "");
  }, [e, t]), W.useEffect(() => {
    !p && i === "pending" && o("stack");
  }, [p, i]), {
    statusTargetId: t,
    statusId: r,
    applyTarget: i,
    canApplyPending: p,
    statusStack: u,
    statusRunning: c,
    setStatusTargetId: n,
    setStatusId: l,
    setApplyTarget: o,
    setStatusStack: s,
    runApplyStatus: async () => {
      var S, T, f, a;
      if (c) return;
      if (!t) {
        (S = ui.notifications) == null || S.error("状態異常を付与する対象を選択してください");
        return;
      }
      const v = Number(u);
      if (!Number.isInteger(v) || v < 1) {
        (T = ui.notifications) == null || T.error("スタック数には1以上の整数を入力してください");
        return;
      }
      try {
        m(!0);
        const d = new pl(), g = await Ip(d, {
          actorId: t,
          statusId: r,
          stackDelta: v,
          target: i
        }), w = g.target === "pending" ? "next" : "現在";
        (f = ui.notifications) == null || f.info(
          `${g.actorName} に ${g.statusId}(${w}) を ${v} 付与しました (${g.before}→${g.after})`
        );
      } catch (d) {
        console.error("[ponkotu-system] apply status failed", d), (a = ui.notifications) == null || a.error("状態異常の付与に失敗しました。コンソールを確認してください。");
      } finally {
        m(!1);
      }
    }
  };
}, jp = ({ tokens: e }) => {
  const {
    statusTargetId: t,
    statusId: n,
    applyTarget: r,
    canApplyPending: l,
    statusStack: i,
    statusRunning: o,
    setStatusTargetId: u,
    setStatusId: s,
    setApplyTarget: c,
    setStatusStack: m,
    runApplyStatus: h
  } = Lp(e);
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
              e.map((p) => /* @__PURE__ */ x.jsx("option", { value: p.actorId, children: eo(p) }, `status-target-${p.actorId}`))
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
            children: Ae.map((p) => /* @__PURE__ */ x.jsx("option", { value: p.id, children: p.name }, p.id))
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
};
class cs {
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
class fs {
  static turnStart(t) {
    const n = new cs(t), r = Ae;
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
    const n = new cs(t);
    Ae.forEach((l) => {
      var i;
      (i = l.onTurnEnd) == null || i.call(l, n.withStatus(l.id));
    }), n.setBarrier(0);
  }
}
const ds = (e) => Array.from(new Set(e.map((t) => t.actorId).filter((t) => t))), Mp = (e) => {
  const [t, n] = W.useState(!1), r = async () => {
    var u, s, c;
    const o = ds(e);
    if (!o.length)
      return (u = ui.notifications) == null || u.error("ターン開始処理の対象が見つかりません"), 0;
    try {
      const m = new pl(), h = o.map((p) => m.loadByActorId(p)).filter((p) => !!p);
      return h.length ? (h.forEach((p) => {
        fs.turnStart(p.combatant);
      }), await Promise.all(h.map((p) => m.saveActor(p.combatant))), h.length) : ((s = ui.notifications) == null || s.error("ターン開始処理の対象を取得できませんでした"), 0);
    } catch (m) {
      console.error("[ponkotu-system] turn process failed", m), (c = ui.notifications) == null || c.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  }, l = async () => {
    var u, s, c;
    const o = ds(e);
    if (!o.length)
      return (u = ui.notifications) == null || u.error("ターン終了処理の対象が見つかりません"), 0;
    try {
      const m = new pl(), h = o.map((p) => m.loadByActorId(p)).filter((p) => !!p);
      return h.length ? (h.forEach((p) => {
        fs.turnEnd(p.combatant);
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
}, Op = ({ tokens: e }) => {
  const { turnRunning: t, runTurnProcess: n } = Mp(e);
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ x.jsx("h3", { style: { margin: "8px 0" }, children: "ターン処理" }) }),
    /* @__PURE__ */ x.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ x.jsx("button", { onClick: n, disabled: t || e.length < 1, children: t ? "処理中..." : "ターン処理(終了→開始)" }) })
  ] });
}, Fp = () => {
  const e = ap();
  return /* @__PURE__ */ x.jsxs("div", { className: "ponkotu-damage", children: [
    /* @__PURE__ */ x.jsx(Dp, { tokens: e }),
    /* @__PURE__ */ x.jsx(Op, { tokens: e }),
    /* @__PURE__ */ x.jsx(jp, { tokens: e })
  ] });
}, Ap = "ponkotu-system";
var zt;
class Up extends Application {
  constructor() {
    super(...arguments);
    dr(this, zt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-damage-calc",
      title: "管理者用フォーム",
      template: `modules/${Ap}/templates/damage-calc.html`,
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
    kn(this, zt, Br.createRoot(r)), J(this, zt).render(/* @__PURE__ */ x.jsx(Fp, {}));
  }
  async close(n) {
    var r;
    return (r = J(this, zt)) == null || r.unmount(), kn(this, zt, null), super.close(n);
  }
}
zt = new WeakMap();
const Hp = ({ onSubmit: e }) => {
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
}, $p = () => {
  const e = [];
  return Ae.forEach((n) => {
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
}, Bp = "ponkotu-system";
let ps = !1;
var Rt;
class Vp extends Application {
  constructor() {
    super(...arguments);
    dr(this, Rt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-react-form",
      title: "React フォーム",
      template: `modules/${Bp}/templates/react-form.html`,
      width: 420,
      height: 400,
      resizable: !0
    });
  }
  activateListeners(n) {
    var l;
    if (super.activateListeners(n), !ps) {
      const i = $p();
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
    kn(this, Rt, Br.createRoot(r)), J(this, Rt).render(
      /* @__PURE__ */ x.jsx(
        Hp,
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
    return (r = J(this, Rt)) == null || r.unmount(), kn(this, Rt, null), super.close(n);
  }
}
Rt = new WeakMap();
const to = "ponkotu-system", Rn = (...e) => console.log(`[${to}]`, ...e), zc = () => new Vp().render(!0), Rc = () => new Up().render(!0), ms = () => {
  var n;
  const e = (n = game.modules) == null ? void 0 : n.get(to);
  if (!e) {
    console.warn(`[${to}] game.modules からモジュールを取得できませんでした`);
    return;
  }
  const t = e;
  t.api || (t.api = {}), t.api.showReactForm = zc, t.api.showDamageCalc = Rc, Rn("API を登録しました", t.api);
}, Wp = () => {
  Rn("ES module loaded"), Hooks.once("ready", () => {
    Rn("Hooks.once ready fired"), ms(), globalThis.ponkotuSystem = { showReactForm: zc, showDamageCalc: Rc }, Rn("React フォーム API を初期化しました");
  }), Hooks.once("init", () => {
    Rn("Hooks.once init fired"), ms();
  });
};
Wp();
export {
  Rc as showDamageCalc,
  zc as showReactForm
};
