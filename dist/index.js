var tu = (e) => {
  throw TypeError(e);
};
var nu = (e, t, n) => t.has(e) || tu("Cannot " + n);
var Y = (e, t, n) => (nu(e, t, "read from private field"), n ? n.call(e) : t.get(e)), En = (e, t, n) => t.has(e) ? tu("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Nt = (e, t, n, r) => (nu(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var ys = { exports: {} }, gl = {}, ks = { exports: {} }, R = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ar = Symbol.for("react.element"), Uc = Symbol.for("react.portal"), Hc = Symbol.for("react.fragment"), $c = Symbol.for("react.strict_mode"), Bc = Symbol.for("react.profiler"), Vc = Symbol.for("react.provider"), Wc = Symbol.for("react.context"), Qc = Symbol.for("react.forward_ref"), Kc = Symbol.for("react.suspense"), Yc = Symbol.for("react.memo"), Xc = Symbol.for("react.lazy"), ru = Symbol.iterator;
function Gc(e) {
  return e === null || typeof e != "object" ? null : (e = ru && e[ru] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ss = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ws = Object.assign, Es = {};
function yn(e, t, n) {
  this.props = e, this.context = t, this.refs = Es, this.updater = n || Ss;
}
yn.prototype.isReactComponent = {};
yn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
yn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Cs() {
}
Cs.prototype = yn.prototype;
function io(e, t, n) {
  this.props = e, this.context = t, this.refs = Es, this.updater = n || Ss;
}
var oo = io.prototype = new Cs();
oo.constructor = io;
ws(oo, yn.prototype);
oo.isPureReactComponent = !0;
var lu = Array.isArray, xs = Object.prototype.hasOwnProperty, uo = { current: null }, _s = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ps(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) xs.call(t, r) && !_s.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: ar, type: e, key: i, ref: o, props: l, _owner: uo.current };
}
function Zc(e, t) {
  return { $$typeof: ar, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function so(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ar;
}
function Jc(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var iu = /\/+/g;
function Ml(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? Jc("" + e.key) : t.toString(36);
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
        case Uc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Ml(o, 0) : r, lu(l) ? (n = "", e != null && (n = e.replace(iu, "$&/") + "/"), Lr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (so(l) && (l = Zc(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(iu, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", lu(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var s = r + Ml(i, u);
    o += Lr(i, t, n, s, l);
  }
  else if (s = Gc(e), typeof s == "function") for (e = s.call(e), u = 0; !(i = e.next()).done; ) i = i.value, s = r + Ml(i, u++), o += Lr(i, t, n, s, l);
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
function qc(e) {
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
var fe = { current: null }, jr = { transition: null }, bc = { ReactCurrentDispatcher: fe, ReactCurrentBatchConfig: jr, ReactCurrentOwner: uo };
function Ns() {
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
  if (!so(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
R.Component = yn;
R.Fragment = Hc;
R.Profiler = Bc;
R.PureComponent = io;
R.StrictMode = $c;
R.Suspense = Kc;
R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bc;
R.act = Ns;
R.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ws({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = uo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (s in t) xs.call(t, s) && !_s.hasOwnProperty(s) && (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
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
  return e = { $$typeof: Wc, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: Vc, _context: e }, e.Consumer = e;
};
R.createElement = Ps;
R.createFactory = function(e) {
  var t = Ps.bind(null, e);
  return t.type = e, t;
};
R.createRef = function() {
  return { current: null };
};
R.forwardRef = function(e) {
  return { $$typeof: Qc, render: e };
};
R.isValidElement = so;
R.lazy = function(e) {
  return { $$typeof: Xc, _payload: { _status: -1, _result: e }, _init: qc };
};
R.memo = function(e, t) {
  return { $$typeof: Yc, type: e, compare: t === void 0 ? null : t };
};
R.startTransition = function(e) {
  var t = jr.transition;
  jr.transition = {};
  try {
    e();
  } finally {
    jr.transition = t;
  }
};
R.unstable_act = Ns;
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
ks.exports = R;
var W = ks.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ef = W, tf = Symbol.for("react.element"), nf = Symbol.for("react.fragment"), rf = Object.prototype.hasOwnProperty, lf = ef.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, of = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ts(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) rf.call(t, r) && !of.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: tf, type: e, key: i, ref: o, props: l, _owner: lf.current };
}
gl.Fragment = nf;
gl.jsx = Ts;
gl.jsxs = Ts;
ys.exports = gl;
var C = ys.exports, Qn = {}, Ds = { exports: {} }, Ce = {}, Is = { exports: {} }, zs = {};
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
    var I = _.length;
    _.push(T);
    e: for (; 0 < I; ) {
      var Q = I - 1 >>> 1, J = _[Q];
      if (0 < l(J, T)) _[Q] = T, _[I] = J, I = Q;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var T = _[0], I = _.pop();
    if (I !== T) {
      _[0] = I;
      e: for (var Q = 0, J = _.length, mr = J >>> 1; Q < mr; ) {
        var _t = 2 * (Q + 1) - 1, jl = _[_t], Pt = _t + 1, hr = _[Pt];
        if (0 > l(jl, I)) Pt < J && 0 > l(hr, jl) ? (_[Q] = hr, _[Pt] = I, Q = Pt) : (_[Q] = jl, _[_t] = I, Q = _t);
        else if (Pt < J && 0 > l(hr, I)) _[Q] = hr, _[Pt] = I, Q = Pt;
        else break e;
      }
    }
    return T;
  }
  function l(_, T) {
    var I = _.sortIndex - T.sortIndex;
    return I !== 0 ? I : _.id - T.id;
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
  var s = [], c = [], m = 1, h = null, p = 3, y = !1, v = !1, S = !1, D = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var T = n(c); T !== null; ) {
      if (T.callback === null) r(c);
      else if (T.startTime <= _) r(c), T.sortIndex = T.expirationTime, t(s, T);
      else break;
      T = n(c);
    }
  }
  function g(_) {
    if (S = !1, d(_), !v) if (n(s) !== null) v = !0, Rl(w);
    else {
      var T = n(c);
      T !== null && Ll(g, T.startTime - _);
    }
  }
  function w(_, T) {
    v = !1, S && (S = !1, f(N), N = -1), y = !0;
    var I = p;
    try {
      for (d(T), h = n(s); h !== null && (!(h.expirationTime > T) || _ && !ye()); ) {
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
        _t !== null && Ll(g, _t.startTime - T), mr = !1;
      }
      return mr;
    } finally {
      h = null, p = I, y = !1;
    }
  }
  var E = !1, P = null, N = -1, M = 5, z = -1;
  function ye() {
    return !(e.unstable_now() - z < M);
  }
  function xt() {
    if (P !== null) {
      var _ = e.unstable_now();
      z = _;
      var T = !0;
      try {
        T = P(!0, _);
      } finally {
        T ? wn() : (E = !1, P = null);
      }
    } else E = !1;
  }
  var wn;
  if (typeof a == "function") wn = function() {
    a(xt);
  };
  else if (typeof MessageChannel < "u") {
    var eu = new MessageChannel(), Ac = eu.port2;
    eu.port1.onmessage = xt, wn = function() {
      Ac.postMessage(null);
    };
  } else wn = function() {
    D(xt, 0);
  };
  function Rl(_) {
    P = _, E || (E = !0, wn());
  }
  function Ll(_, T) {
    N = D(function() {
      _(e.unstable_now());
    }, T);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    v || y || (v = !0, Rl(w));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : M = 0 < _ ? Math.floor(1e3 / _) : 5;
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
    var I = p;
    p = T;
    try {
      return _();
    } finally {
      p = I;
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
    var I = p;
    p = _;
    try {
      return T();
    } finally {
      p = I;
    }
  }, e.unstable_scheduleCallback = function(_, T, I) {
    var Q = e.unstable_now();
    switch (typeof I == "object" && I !== null ? (I = I.delay, I = typeof I == "number" && 0 < I ? Q + I : Q) : I = Q, _) {
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
    return J = I + J, _ = { id: m++, callback: T, priorityLevel: _, startTime: I, expirationTime: J, sortIndex: -1 }, I > Q ? (_.sortIndex = I, t(c, _), n(s) === null && _ === n(c) && (S ? (f(N), N = -1) : S = !0, Ll(g, I - Q))) : (_.sortIndex = J, t(s, _), v || y || (v = !0, Rl(w))), _;
  }, e.unstable_shouldYield = ye, e.unstable_wrapCallback = function(_) {
    var T = p;
    return function() {
      var I = p;
      p = T;
      try {
        return _.apply(this, arguments);
      } finally {
        p = I;
      }
    };
  };
})(zs);
Is.exports = zs;
var uf = Is.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sf = W, Ee = uf;
function k(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Rs = /* @__PURE__ */ new Set(), Kn = {};
function Vt(e, t) {
  fn(e, t), fn(e + "Capture", t);
}
function fn(e, t) {
  for (Kn[e] = t, e = 0; e < t.length; e++) Rs.add(t[e]);
}
var Ze = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), fi = Object.prototype.hasOwnProperty, af = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ou = {}, uu = {};
function cf(e) {
  return fi.call(uu, e) ? !0 : fi.call(ou, e) ? !1 : af.test(e) ? uu[e] = !0 : (ou[e] = !0, !1);
}
function ff(e, t, n, r) {
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
function df(e, t, n, r) {
  if (t === null || typeof t > "u" || ff(e, t, n, r)) return !0;
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
var ao = /[\-:]([a-z])/g;
function co(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    ao,
    co
  );
  re[t] = new de(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(ao, co);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(ao, co);
  re[t] = new de(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
re.xlinkHref = new de("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  re[e] = new de(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function fo(e, t, n, r) {
  var l = re.hasOwnProperty(t) ? re[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (df(t, n, l, r) && (n = null), r || l === null ? cf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var et = sf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, vr = Symbol.for("react.element"), Kt = Symbol.for("react.portal"), Yt = Symbol.for("react.fragment"), po = Symbol.for("react.strict_mode"), di = Symbol.for("react.profiler"), Ls = Symbol.for("react.provider"), js = Symbol.for("react.context"), mo = Symbol.for("react.forward_ref"), pi = Symbol.for("react.suspense"), mi = Symbol.for("react.suspense_list"), ho = Symbol.for("react.memo"), lt = Symbol.for("react.lazy"), Ms = Symbol.for("react.offscreen"), su = Symbol.iterator;
function Cn(e) {
  return e === null || typeof e != "object" ? null : (e = su && e[su] || e["@@iterator"], typeof e == "function" ? e : null);
}
var B = Object.assign, Ol;
function zn(e) {
  if (Ol === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Ol = t && t[1] || "";
  }
  return `
` + Ol + e;
}
var Fl = !1;
function Al(e, t) {
  if (!e || Fl) return "";
  Fl = !0;
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
    Fl = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? zn(e) : "";
}
function pf(e) {
  switch (e.tag) {
    case 5:
      return zn(e.type);
    case 16:
      return zn("Lazy");
    case 13:
      return zn("Suspense");
    case 19:
      return zn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return e = Al(e.type, !1), e;
    case 11:
      return e = Al(e.type.render, !1), e;
    case 1:
      return e = Al(e.type, !0), e;
    default:
      return "";
  }
}
function hi(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Yt:
      return "Fragment";
    case Kt:
      return "Portal";
    case di:
      return "Profiler";
    case po:
      return "StrictMode";
    case pi:
      return "Suspense";
    case mi:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case js:
      return (e.displayName || "Context") + ".Consumer";
    case Ls:
      return (e._context.displayName || "Context") + ".Provider";
    case mo:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case ho:
      return t = e.displayName || null, t !== null ? t : hi(e.type) || "Memo";
    case lt:
      t = e._payload, e = e._init;
      try {
        return hi(e(t));
      } catch {
      }
  }
  return null;
}
function mf(e) {
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
      return hi(t);
    case 8:
      return t === po ? "StrictMode" : "Mode";
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
function Os(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function hf(e) {
  var t = Os(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
  e._valueTracker || (e._valueTracker = hf(e));
}
function Fs(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Os(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function Qr(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function gi(e, t) {
  var n = t.checked;
  return B({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function au(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = kt(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function As(e, t) {
  t = t.checked, t != null && fo(e, "checked", t, !1);
}
function vi(e, t) {
  As(e, t);
  var n = kt(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? yi(e, t.type, n) : t.hasOwnProperty("defaultValue") && yi(e, t.type, kt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function cu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function yi(e, t, n) {
  (t !== "number" || Qr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Rn = Array.isArray;
function ln(e, t, n, r) {
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
function ki(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(k(91));
  return B({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function fu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(k(92));
      if (Rn(n)) {
        if (1 < n.length) throw Error(k(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: kt(n) };
}
function Us(e, t) {
  var n = kt(t.value), r = kt(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function du(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Hs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Si(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Hs(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var kr, $s = function(e) {
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
}, gf = ["Webkit", "ms", "Moz", "O"];
Object.keys(On).forEach(function(e) {
  gf.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), On[t] = On[e];
  });
});
function Bs(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || On.hasOwnProperty(e) && On[e] ? ("" + t).trim() : t + "px";
}
function Vs(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = Bs(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var vf = B({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function wi(e, t) {
  if (t) {
    if (vf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(k(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(k(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(k(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(k(62));
  }
}
function Ei(e, t) {
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
var Ci = null;
function go(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var xi = null, on = null, un = null;
function pu(e) {
  if (e = dr(e)) {
    if (typeof xi != "function") throw Error(k(280));
    var t = e.stateNode;
    t && (t = wl(t), xi(e.stateNode, e.type, t));
  }
}
function Ws(e) {
  on ? un ? un.push(e) : un = [e] : on = e;
}
function Qs() {
  if (on) {
    var e = on, t = un;
    if (un = on = null, pu(e), t) for (e = 0; e < t.length; e++) pu(t[e]);
  }
}
function Ks(e, t) {
  return e(t);
}
function Ys() {
}
var Ul = !1;
function Xs(e, t, n) {
  if (Ul) return e(t, n);
  Ul = !0;
  try {
    return Ks(e, t, n);
  } finally {
    Ul = !1, (on !== null || un !== null) && (Ys(), Qs());
  }
}
function Xn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = wl(n);
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
var _i = !1;
if (Ze) try {
  var xn = {};
  Object.defineProperty(xn, "passive", { get: function() {
    _i = !0;
  } }), window.addEventListener("test", xn, xn), window.removeEventListener("test", xn, xn);
} catch {
  _i = !1;
}
function yf(e, t, n, r, l, i, o, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (m) {
    this.onError(m);
  }
}
var Fn = !1, Kr = null, Yr = !1, Pi = null, kf = { onError: function(e) {
  Fn = !0, Kr = e;
} };
function Sf(e, t, n, r, l, i, o, u, s) {
  Fn = !1, Kr = null, yf.apply(kf, arguments);
}
function wf(e, t, n, r, l, i, o, u, s) {
  if (Sf.apply(this, arguments), Fn) {
    if (Fn) {
      var c = Kr;
      Fn = !1, Kr = null;
    } else throw Error(k(198));
    Yr || (Yr = !0, Pi = c);
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
function Gs(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function mu(e) {
  if (Wt(e) !== e) throw Error(k(188));
}
function Ef(e) {
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
        if (i === n) return mu(l), e;
        if (i === r) return mu(l), t;
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
function Zs(e) {
  return e = Ef(e), e !== null ? Js(e) : null;
}
function Js(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Js(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var qs = Ee.unstable_scheduleCallback, hu = Ee.unstable_cancelCallback, Cf = Ee.unstable_shouldYield, xf = Ee.unstable_requestPaint, K = Ee.unstable_now, _f = Ee.unstable_getCurrentPriorityLevel, vo = Ee.unstable_ImmediatePriority, bs = Ee.unstable_UserBlockingPriority, Xr = Ee.unstable_NormalPriority, Pf = Ee.unstable_LowPriority, ea = Ee.unstable_IdlePriority, vl = null, Be = null;
function Nf(e) {
  if (Be && typeof Be.onCommitFiberRoot == "function") try {
    Be.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Oe = Math.clz32 ? Math.clz32 : If, Tf = Math.log, Df = Math.LN2;
function If(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Tf(e) / Df | 0) | 0;
}
var Sr = 64, wr = 4194304;
function Ln(e) {
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
    u !== 0 ? r = Ln(u) : (i &= o, i !== 0 && (r = Ln(i)));
  } else o = n & ~l, o !== 0 ? r = Ln(o) : i !== 0 && (r = Ln(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Oe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function zf(e, t) {
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
function Rf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Oe(i), u = 1 << o, s = l[o];
    s === -1 ? (!(u & n) || u & r) && (l[o] = zf(u, t)) : s <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function Ni(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function ta() {
  var e = Sr;
  return Sr <<= 1, !(Sr & 4194240) && (Sr = 64), e;
}
function Hl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function cr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n;
}
function Lf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function yo(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var j = 0;
function na(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ra, ko, la, ia, oa, Ti = !1, Er = [], ft = null, dt = null, pt = null, Gn = /* @__PURE__ */ new Map(), Zn = /* @__PURE__ */ new Map(), ot = [], jf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function gu(e, t) {
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
function _n(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = dr(t), t !== null && ko(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Mf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return ft = _n(ft, e, t, n, r, l), !0;
    case "dragenter":
      return dt = _n(dt, e, t, n, r, l), !0;
    case "mouseover":
      return pt = _n(pt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return Gn.set(i, _n(Gn.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, Zn.set(i, _n(Zn.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function ua(e) {
  var t = It(e.target);
  if (t !== null) {
    var n = Wt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = Gs(n), t !== null) {
          e.blockedOn = t, oa(e.priority, function() {
            la(n);
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
function Mr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Di(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      Ci = r, n.target.dispatchEvent(r), Ci = null;
    } else return t = dr(n), t !== null && ko(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function vu(e, t, n) {
  Mr(e) && n.delete(t);
}
function Of() {
  Ti = !1, ft !== null && Mr(ft) && (ft = null), dt !== null && Mr(dt) && (dt = null), pt !== null && Mr(pt) && (pt = null), Gn.forEach(vu), Zn.forEach(vu);
}
function Pn(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Ti || (Ti = !0, Ee.unstable_scheduleCallback(Ee.unstable_NormalPriority, Of)));
}
function Jn(e) {
  function t(l) {
    return Pn(l, e);
  }
  if (0 < Er.length) {
    Pn(Er[0], e);
    for (var n = 1; n < Er.length; n++) {
      var r = Er[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (ft !== null && Pn(ft, e), dt !== null && Pn(dt, e), pt !== null && Pn(pt, e), Gn.forEach(t), Zn.forEach(t), n = 0; n < ot.length; n++) r = ot[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ot.length && (n = ot[0], n.blockedOn === null); ) ua(n), n.blockedOn === null && ot.shift();
}
var sn = et.ReactCurrentBatchConfig, Zr = !0;
function Ff(e, t, n, r) {
  var l = j, i = sn.transition;
  sn.transition = null;
  try {
    j = 1, So(e, t, n, r);
  } finally {
    j = l, sn.transition = i;
  }
}
function Af(e, t, n, r) {
  var l = j, i = sn.transition;
  sn.transition = null;
  try {
    j = 4, So(e, t, n, r);
  } finally {
    j = l, sn.transition = i;
  }
}
function So(e, t, n, r) {
  if (Zr) {
    var l = Di(e, t, n, r);
    if (l === null) Zl(e, t, r, Jr, n), gu(e, r);
    else if (Mf(l, e, t, n, r)) r.stopPropagation();
    else if (gu(e, r), t & 4 && -1 < jf.indexOf(e)) {
      for (; l !== null; ) {
        var i = dr(l);
        if (i !== null && ra(i), i = Di(e, t, n, r), i === null && Zl(e, t, r, Jr, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else Zl(e, t, r, null, n);
  }
}
var Jr = null;
function Di(e, t, n, r) {
  if (Jr = null, e = go(r), e = It(e), e !== null) if (t = Wt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = Gs(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return Jr = e, null;
}
function sa(e) {
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
      switch (_f()) {
        case vo:
          return 1;
        case bs:
          return 4;
        case Xr:
        case Pf:
          return 16;
        case ea:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var st = null, wo = null, Or = null;
function aa() {
  if (Or) return Or;
  var e, t = wo, n = t.length, r, l = "value" in st ? st.value : st.textContent, i = l.length;
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
function yu() {
  return !1;
}
function xe(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Cr : yu, this.isPropagationStopped = yu, this;
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
var kn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, Eo = xe(kn), fr = B({}, kn, { view: 0, detail: 0 }), Uf = xe(fr), $l, Bl, Nn, yl = B({}, fr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Co, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== Nn && (Nn && e.type === "mousemove" ? ($l = e.screenX - Nn.screenX, Bl = e.screenY - Nn.screenY) : Bl = $l = 0, Nn = e), $l);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Bl;
} }), ku = xe(yl), Hf = B({}, yl, { dataTransfer: 0 }), $f = xe(Hf), Bf = B({}, fr, { relatedTarget: 0 }), Vl = xe(Bf), Vf = B({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wf = xe(Vf), Qf = B({}, kn, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), Kf = xe(Qf), Yf = B({}, kn, { data: 0 }), Su = xe(Yf), Xf = {
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
}, Gf = {
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
}, Zf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Jf(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zf[e]) ? !!t[e] : !1;
}
function Co() {
  return Jf;
}
var qf = B({}, fr, { key: function(e) {
  if (e.key) {
    var t = Xf[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Fr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gf[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Co, charCode: function(e) {
  return e.type === "keypress" ? Fr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Fr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), bf = xe(qf), ed = B({}, yl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), wu = xe(ed), td = B({}, fr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Co }), nd = xe(td), rd = B({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), ld = xe(rd), id = B({}, yl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), od = xe(id), ud = [9, 13, 27, 32], xo = Ze && "CompositionEvent" in window, An = null;
Ze && "documentMode" in document && (An = document.documentMode);
var sd = Ze && "TextEvent" in window && !An, ca = Ze && (!xo || An && 8 < An && 11 >= An), Eu = " ", Cu = !1;
function fa(e, t) {
  switch (e) {
    case "keyup":
      return ud.indexOf(t.keyCode) !== -1;
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
function da(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var Xt = !1;
function ad(e, t) {
  switch (e) {
    case "compositionend":
      return da(t);
    case "keypress":
      return t.which !== 32 ? null : (Cu = !0, Eu);
    case "textInput":
      return e = t.data, e === Eu && Cu ? null : e;
    default:
      return null;
  }
}
function cd(e, t) {
  if (Xt) return e === "compositionend" || !xo && fa(e, t) ? (e = aa(), Or = wo = st = null, Xt = !1, e) : null;
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
      return ca && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var fd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function xu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!fd[e.type] : t === "textarea";
}
function pa(e, t, n, r) {
  Ws(r), t = qr(t, "onChange"), 0 < t.length && (n = new Eo("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Un = null, qn = null;
function dd(e) {
  xa(e, 0);
}
function kl(e) {
  var t = Jt(e);
  if (Fs(t)) return e;
}
function pd(e, t) {
  if (e === "change") return t;
}
var ma = !1;
if (Ze) {
  var Wl;
  if (Ze) {
    var Ql = "oninput" in document;
    if (!Ql) {
      var _u = document.createElement("div");
      _u.setAttribute("oninput", "return;"), Ql = typeof _u.oninput == "function";
    }
    Wl = Ql;
  } else Wl = !1;
  ma = Wl && (!document.documentMode || 9 < document.documentMode);
}
function Pu() {
  Un && (Un.detachEvent("onpropertychange", ha), qn = Un = null);
}
function ha(e) {
  if (e.propertyName === "value" && kl(qn)) {
    var t = [];
    pa(t, qn, e, go(e)), Xs(dd, t);
  }
}
function md(e, t, n) {
  e === "focusin" ? (Pu(), Un = t, qn = n, Un.attachEvent("onpropertychange", ha)) : e === "focusout" && Pu();
}
function hd(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return kl(qn);
}
function gd(e, t) {
  if (e === "click") return kl(t);
}
function vd(e, t) {
  if (e === "input" || e === "change") return kl(t);
}
function yd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var Ae = typeof Object.is == "function" ? Object.is : yd;
function bn(e, t) {
  if (Ae(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!fi.call(t, l) || !Ae(e[l], t[l])) return !1;
  }
  return !0;
}
function Nu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Tu(e, t) {
  var n = Nu(e);
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
    n = Nu(n);
  }
}
function ga(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? ga(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function va() {
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
function _o(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function kd(e) {
  var t = va(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && ga(n.ownerDocument.documentElement, n)) {
    if (r !== null && _o(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Tu(n, i);
        var o = Tu(
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
var Sd = Ze && "documentMode" in document && 11 >= document.documentMode, Gt = null, Ii = null, Hn = null, zi = !1;
function Du(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  zi || Gt == null || Gt !== Qr(r) || (r = Gt, "selectionStart" in r && _o(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Hn && bn(Hn, r) || (Hn = r, r = qr(Ii, "onSelect"), 0 < r.length && (t = new Eo("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = Gt)));
}
function xr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var Zt = { animationend: xr("Animation", "AnimationEnd"), animationiteration: xr("Animation", "AnimationIteration"), animationstart: xr("Animation", "AnimationStart"), transitionend: xr("Transition", "TransitionEnd") }, Kl = {}, ya = {};
Ze && (ya = document.createElement("div").style, "AnimationEvent" in window || (delete Zt.animationend.animation, delete Zt.animationiteration.animation, delete Zt.animationstart.animation), "TransitionEvent" in window || delete Zt.transitionend.transition);
function Sl(e) {
  if (Kl[e]) return Kl[e];
  if (!Zt[e]) return e;
  var t = Zt[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in ya) return Kl[e] = t[n];
  return e;
}
var ka = Sl("animationend"), Sa = Sl("animationiteration"), wa = Sl("animationstart"), Ea = Sl("transitionend"), Ca = /* @__PURE__ */ new Map(), Iu = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function wt(e, t) {
  Ca.set(e, t), Vt(t, [e]);
}
for (var Yl = 0; Yl < Iu.length; Yl++) {
  var Xl = Iu[Yl], wd = Xl.toLowerCase(), Ed = Xl[0].toUpperCase() + Xl.slice(1);
  wt(wd, "on" + Ed);
}
wt(ka, "onAnimationEnd");
wt(Sa, "onAnimationIteration");
wt(wa, "onAnimationStart");
wt("dblclick", "onDoubleClick");
wt("focusin", "onFocus");
wt("focusout", "onBlur");
wt(Ea, "onTransitionEnd");
fn("onMouseEnter", ["mouseout", "mouseover"]);
fn("onMouseLeave", ["mouseout", "mouseover"]);
fn("onPointerEnter", ["pointerout", "pointerover"]);
fn("onPointerLeave", ["pointerout", "pointerover"]);
Vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var jn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Cd = new Set("cancel close invalid load scroll toggle".split(" ").concat(jn));
function zu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, wf(r, t, void 0, e), e.currentTarget = null;
}
function xa(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], s = u.instance, c = u.currentTarget;
        if (u = u.listener, s !== i && l.isPropagationStopped()) break e;
        zu(l, u, c), i = s;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], s = u.instance, c = u.currentTarget, u = u.listener, s !== i && l.isPropagationStopped()) break e;
        zu(l, u, c), i = s;
      }
    }
  }
  if (Yr) throw e = Pi, Yr = !1, Pi = null, e;
}
function F(e, t) {
  var n = t[Oi];
  n === void 0 && (n = t[Oi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (_a(t, e, 2, !1), n.add(r));
}
function Gl(e, t, n) {
  var r = 0;
  t && (r |= 4), _a(n, e, r, t);
}
var _r = "_reactListening" + Math.random().toString(36).slice(2);
function er(e) {
  if (!e[_r]) {
    e[_r] = !0, Rs.forEach(function(n) {
      n !== "selectionchange" && (Cd.has(n) || Gl(n, !1, e), Gl(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[_r] || (t[_r] = !0, Gl("selectionchange", !1, t));
  }
}
function _a(e, t, n, r) {
  switch (sa(t)) {
    case 1:
      var l = Ff;
      break;
    case 4:
      l = Af;
      break;
    default:
      l = So;
  }
  n = l.bind(null, t, n, e), l = void 0, !_i || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
}
function Zl(e, t, n, r, l) {
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
  Xs(function() {
    var c = i, m = go(n), h = [];
    e: {
      var p = Ca.get(e);
      if (p !== void 0) {
        var y = Eo, v = e;
        switch (e) {
          case "keypress":
            if (Fr(n) === 0) break e;
          case "keydown":
          case "keyup":
            y = bf;
            break;
          case "focusin":
            v = "focus", y = Vl;
            break;
          case "focusout":
            v = "blur", y = Vl;
            break;
          case "beforeblur":
          case "afterblur":
            y = Vl;
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
            y = ku;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = $f;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = nd;
            break;
          case ka:
          case Sa:
          case wa:
            y = Wf;
            break;
          case Ea:
            y = ld;
            break;
          case "scroll":
            y = Uf;
            break;
          case "wheel":
            y = od;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Kf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = wu;
        }
        var S = (t & 4) !== 0, D = !S && e === "scroll", f = S ? p !== null ? p + "Capture" : null : p;
        S = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var g = d.stateNode;
          if (d.tag === 5 && g !== null && (d = g, f !== null && (g = Xn(a, f), g != null && S.push(tr(a, g, d)))), D) break;
          a = a.return;
        }
        0 < S.length && (p = new y(p, v, null, n, m), h.push({ event: p, listeners: S }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", p && n !== Ci && (v = n.relatedTarget || n.fromElement) && (It(v) || v[Je])) break e;
        if ((y || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : window, y ? (v = n.relatedTarget || n.toElement, y = c, v = v ? It(v) : null, v !== null && (D = Wt(v), v !== D || v.tag !== 5 && v.tag !== 6) && (v = null)) : (y = null, v = c), y !== v)) {
          if (S = ku, g = "onMouseLeave", f = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (S = wu, g = "onPointerLeave", f = "onPointerEnter", a = "pointer"), D = y == null ? p : Jt(y), d = v == null ? p : Jt(v), p = new S(g, a + "leave", y, n, m), p.target = D, p.relatedTarget = d, g = null, It(m) === c && (S = new S(f, a + "enter", v, n, m), S.target = d, S.relatedTarget = D, g = S), D = g, y && v) t: {
            for (S = y, f = v, a = 0, d = S; d; d = Qt(d)) a++;
            for (d = 0, g = f; g; g = Qt(g)) d++;
            for (; 0 < a - d; ) S = Qt(S), a--;
            for (; 0 < d - a; ) f = Qt(f), d--;
            for (; a--; ) {
              if (S === f || f !== null && S === f.alternate) break t;
              S = Qt(S), f = Qt(f);
            }
            S = null;
          }
          else S = null;
          y !== null && Ru(h, p, y, S, !1), v !== null && D !== null && Ru(h, D, v, S, !0);
        }
      }
      e: {
        if (p = c ? Jt(c) : window, y = p.nodeName && p.nodeName.toLowerCase(), y === "select" || y === "input" && p.type === "file") var w = pd;
        else if (xu(p)) if (ma) w = vd;
        else {
          w = hd;
          var E = md;
        }
        else (y = p.nodeName) && y.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (w = gd);
        if (w && (w = w(e, c))) {
          pa(h, w, n, m);
          break e;
        }
        E && E(e, p, c), e === "focusout" && (E = p._wrapperState) && E.controlled && p.type === "number" && yi(p, "number", p.value);
      }
      switch (E = c ? Jt(c) : window, e) {
        case "focusin":
          (xu(E) || E.contentEditable === "true") && (Gt = E, Ii = c, Hn = null);
          break;
        case "focusout":
          Hn = Ii = Gt = null;
          break;
        case "mousedown":
          zi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          zi = !1, Du(h, n, m);
          break;
        case "selectionchange":
          if (Sd) break;
        case "keydown":
        case "keyup":
          Du(h, n, m);
      }
      var P;
      if (xo) e: {
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
      else Xt ? fa(e, n) && (N = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
      N && (ca && n.locale !== "ko" && (Xt || N !== "onCompositionStart" ? N === "onCompositionEnd" && Xt && (P = aa()) : (st = m, wo = "value" in st ? st.value : st.textContent, Xt = !0)), E = qr(c, N), 0 < E.length && (N = new Su(N, e, null, n, m), h.push({ event: N, listeners: E }), P ? N.data = P : (P = da(n), P !== null && (N.data = P)))), (P = sd ? ad(e, n) : cd(e, n)) && (c = qr(c, "onBeforeInput"), 0 < c.length && (m = new Su("onBeforeInput", "beforeinput", null, n, m), h.push({ event: m, listeners: c }), m.data = P));
    }
    xa(h, t);
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
function Ru(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, s = u.alternate, c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (s = Xn(n, i), s != null && o.unshift(tr(n, s, u))) : l || (s = Xn(n, i), s != null && o.push(tr(n, s, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var xd = /\r\n?/g, _d = /\u0000|\uFFFD/g;
function Lu(e) {
  return (typeof e == "string" ? e : "" + e).replace(xd, `
`).replace(_d, "");
}
function Pr(e, t, n) {
  if (t = Lu(t), Lu(e) !== t && n) throw Error(k(425));
}
function br() {
}
var Ri = null, Li = null;
function ji(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Mi = typeof setTimeout == "function" ? setTimeout : void 0, Pd = typeof clearTimeout == "function" ? clearTimeout : void 0, ju = typeof Promise == "function" ? Promise : void 0, Nd = typeof queueMicrotask == "function" ? queueMicrotask : typeof ju < "u" ? function(e) {
  return ju.resolve(null).then(e).catch(Td);
} : Mi;
function Td(e) {
  setTimeout(function() {
    throw e;
  });
}
function Jl(e, t) {
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
function Mu(e) {
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
var Sn = Math.random().toString(36).slice(2), $e = "__reactFiber$" + Sn, nr = "__reactProps$" + Sn, Je = "__reactContainer$" + Sn, Oi = "__reactEvents$" + Sn, Dd = "__reactListeners$" + Sn, Id = "__reactHandles$" + Sn;
function It(e) {
  var t = e[$e];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[Je] || n[$e]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Mu(e); e !== null; ) {
        if (n = e[$e]) return n;
        e = Mu(e);
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
function Jt(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(k(33));
}
function wl(e) {
  return e[nr] || null;
}
var Fi = [], qt = -1;
function Et(e) {
  return { current: e };
}
function A(e) {
  0 > qt || (e.current = Fi[qt], Fi[qt] = null, qt--);
}
function O(e, t) {
  qt++, Fi[qt] = e.current, e.current = t;
}
var St = {}, se = Et(St), he = Et(!1), At = St;
function dn(e, t) {
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
function Ou(e, t, n) {
  if (se.current !== St) throw Error(k(168));
  O(se, t), O(he, n);
}
function Pa(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(k(108, mf(e) || "Unknown", l));
  return B({}, n, r);
}
function tl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || St, At = se.current, O(se, e), O(he, he.current), !0;
}
function Fu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(k(169));
  n ? (e = Pa(e, t, At), r.__reactInternalMemoizedMergedChildContext = e, A(he), A(se), O(se, e)) : A(he), O(he, n);
}
var Ke = null, El = !1, ql = !1;
function Na(e) {
  Ke === null ? Ke = [e] : Ke.push(e);
}
function zd(e) {
  El = !0, Na(e);
}
function Ct() {
  if (!ql && Ke !== null) {
    ql = !0;
    var e = 0, t = j;
    try {
      var n = Ke;
      for (j = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ke = null, El = !1;
    } catch (l) {
      throw Ke !== null && (Ke = Ke.slice(e + 1)), qs(vo, Ct), l;
    } finally {
      j = t, ql = !1;
    }
  }
  return null;
}
var bt = [], en = 0, nl = null, rl = 0, _e = [], Pe = 0, Ut = null, Ye = 1, Xe = "";
function Tt(e, t) {
  bt[en++] = rl, bt[en++] = nl, nl = e, rl = t;
}
function Ta(e, t, n) {
  _e[Pe++] = Ye, _e[Pe++] = Xe, _e[Pe++] = Ut, Ut = e;
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
function Po(e) {
  e.return !== null && (Tt(e, 1), Ta(e, 1, 0));
}
function No(e) {
  for (; e === nl; ) nl = bt[--en], bt[en] = null, rl = bt[--en], bt[en] = null;
  for (; e === Ut; ) Ut = _e[--Pe], _e[Pe] = null, Xe = _e[--Pe], _e[Pe] = null, Ye = _e[--Pe], _e[Pe] = null;
}
var we = null, Se = null, U = !1, Me = null;
function Da(e, t) {
  var n = Ne(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Au(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, we = e, Se = mt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, we = e, Se = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ut !== null ? { id: Ye, overflow: Xe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Ne(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, we = e, Se = null, !0) : !1;
    default:
      return !1;
  }
}
function Ai(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Ui(e) {
  if (U) {
    var t = Se;
    if (t) {
      var n = t;
      if (!Au(e, t)) {
        if (Ai(e)) throw Error(k(418));
        t = mt(n.nextSibling);
        var r = we;
        t && Au(e, t) ? Da(r, n) : (e.flags = e.flags & -4097 | 2, U = !1, we = e);
      }
    } else {
      if (Ai(e)) throw Error(k(418));
      e.flags = e.flags & -4097 | 2, U = !1, we = e;
    }
  }
}
function Uu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  we = e;
}
function Nr(e) {
  if (e !== we) return !1;
  if (!U) return Uu(e), U = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !ji(e.type, e.memoizedProps)), t && (t = Se)) {
    if (Ai(e)) throw Ia(), Error(k(418));
    for (; t; ) Da(e, t), t = mt(t.nextSibling);
  }
  if (Uu(e), e.tag === 13) {
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
function Ia() {
  for (var e = Se; e; ) e = mt(e.nextSibling);
}
function pn() {
  Se = we = null, U = !1;
}
function To(e) {
  Me === null ? Me = [e] : Me.push(e);
}
var Rd = et.ReactCurrentBatchConfig;
function Tn(e, t, n) {
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
function Hu(e) {
  var t = e._init;
  return t(e._payload);
}
function za(e) {
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
  function u(f, a, d, g) {
    return a === null || a.tag !== 6 ? (a = ii(d, f.mode, g), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function s(f, a, d, g) {
    var w = d.type;
    return w === Yt ? m(f, a, d.props.children, g, d.key) : a !== null && (a.elementType === w || typeof w == "object" && w !== null && w.$$typeof === lt && Hu(w) === a.type) ? (g = l(a, d.props), g.ref = Tn(f, a, d), g.return = f, g) : (g = Wr(d.type, d.key, d.props, null, f.mode, g), g.ref = Tn(f, a, d), g.return = f, g);
  }
  function c(f, a, d, g) {
    return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = oi(d, f.mode, g), a.return = f, a) : (a = l(a, d.children || []), a.return = f, a);
  }
  function m(f, a, d, g, w) {
    return a === null || a.tag !== 7 ? (a = Ft(d, f.mode, g, w), a.return = f, a) : (a = l(a, d), a.return = f, a);
  }
  function h(f, a, d) {
    if (typeof a == "string" && a !== "" || typeof a == "number") return a = ii("" + a, f.mode, d), a.return = f, a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case vr:
          return d = Wr(a.type, a.key, a.props, null, f.mode, d), d.ref = Tn(f, null, a), d.return = f, d;
        case Kt:
          return a = oi(a, f.mode, d), a.return = f, a;
        case lt:
          var g = a._init;
          return h(f, g(a._payload), d);
      }
      if (Rn(a) || Cn(a)) return a = Ft(a, f.mode, d, null), a.return = f, a;
      Tr(f, a);
    }
    return null;
  }
  function p(f, a, d, g) {
    var w = a !== null ? a.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return w !== null ? null : u(f, a, "" + d, g);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case vr:
          return d.key === w ? s(f, a, d, g) : null;
        case Kt:
          return d.key === w ? c(f, a, d, g) : null;
        case lt:
          return w = d._init, p(
            f,
            a,
            w(d._payload),
            g
          );
      }
      if (Rn(d) || Cn(d)) return w !== null ? null : m(f, a, d, g, null);
      Tr(f, d);
    }
    return null;
  }
  function y(f, a, d, g, w) {
    if (typeof g == "string" && g !== "" || typeof g == "number") return f = f.get(d) || null, u(a, f, "" + g, w);
    if (typeof g == "object" && g !== null) {
      switch (g.$$typeof) {
        case vr:
          return f = f.get(g.key === null ? d : g.key) || null, s(a, f, g, w);
        case Kt:
          return f = f.get(g.key === null ? d : g.key) || null, c(a, f, g, w);
        case lt:
          var E = g._init;
          return y(f, a, d, E(g._payload), w);
      }
      if (Rn(g) || Cn(g)) return f = f.get(d) || null, m(a, f, g, w, null);
      Tr(a, g);
    }
    return null;
  }
  function v(f, a, d, g) {
    for (var w = null, E = null, P = a, N = a = 0, M = null; P !== null && N < d.length; N++) {
      P.index > N ? (M = P, P = null) : M = P.sibling;
      var z = p(f, P, d[N], g);
      if (z === null) {
        P === null && (P = M);
        break;
      }
      e && P && z.alternate === null && t(f, P), a = i(z, a, N), E === null ? w = z : E.sibling = z, E = z, P = M;
    }
    if (N === d.length) return n(f, P), U && Tt(f, N), w;
    if (P === null) {
      for (; N < d.length; N++) P = h(f, d[N], g), P !== null && (a = i(P, a, N), E === null ? w = P : E.sibling = P, E = P);
      return U && Tt(f, N), w;
    }
    for (P = r(f, P); N < d.length; N++) M = y(P, f, N, d[N], g), M !== null && (e && M.alternate !== null && P.delete(M.key === null ? N : M.key), a = i(M, a, N), E === null ? w = M : E.sibling = M, E = M);
    return e && P.forEach(function(ye) {
      return t(f, ye);
    }), U && Tt(f, N), w;
  }
  function S(f, a, d, g) {
    var w = Cn(d);
    if (typeof w != "function") throw Error(k(150));
    if (d = w.call(d), d == null) throw Error(k(151));
    for (var E = w = null, P = a, N = a = 0, M = null, z = d.next(); P !== null && !z.done; N++, z = d.next()) {
      P.index > N ? (M = P, P = null) : M = P.sibling;
      var ye = p(f, P, z.value, g);
      if (ye === null) {
        P === null && (P = M);
        break;
      }
      e && P && ye.alternate === null && t(f, P), a = i(ye, a, N), E === null ? w = ye : E.sibling = ye, E = ye, P = M;
    }
    if (z.done) return n(
      f,
      P
    ), U && Tt(f, N), w;
    if (P === null) {
      for (; !z.done; N++, z = d.next()) z = h(f, z.value, g), z !== null && (a = i(z, a, N), E === null ? w = z : E.sibling = z, E = z);
      return U && Tt(f, N), w;
    }
    for (P = r(f, P); !z.done; N++, z = d.next()) z = y(P, f, N, z.value, g), z !== null && (e && z.alternate !== null && P.delete(z.key === null ? N : z.key), a = i(z, a, N), E === null ? w = z : E.sibling = z, E = z);
    return e && P.forEach(function(xt) {
      return t(f, xt);
    }), U && Tt(f, N), w;
  }
  function D(f, a, d, g) {
    if (typeof d == "object" && d !== null && d.type === Yt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case vr:
          e: {
            for (var w = d.key, E = a; E !== null; ) {
              if (E.key === w) {
                if (w = d.type, w === Yt) {
                  if (E.tag === 7) {
                    n(f, E.sibling), a = l(E, d.props.children), a.return = f, f = a;
                    break e;
                  }
                } else if (E.elementType === w || typeof w == "object" && w !== null && w.$$typeof === lt && Hu(w) === E.type) {
                  n(f, E.sibling), a = l(E, d.props), a.ref = Tn(f, E, d), a.return = f, f = a;
                  break e;
                }
                n(f, E);
                break;
              } else t(f, E);
              E = E.sibling;
            }
            d.type === Yt ? (a = Ft(d.props.children, f.mode, g, d.key), a.return = f, f = a) : (g = Wr(d.type, d.key, d.props, null, f.mode, g), g.ref = Tn(f, a, d), g.return = f, f = g);
          }
          return o(f);
        case Kt:
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
            a = oi(d, f.mode, g), a.return = f, f = a;
          }
          return o(f);
        case lt:
          return E = d._init, D(f, a, E(d._payload), g);
      }
      if (Rn(d)) return v(f, a, d, g);
      if (Cn(d)) return S(f, a, d, g);
      Tr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(f, a.sibling), a = l(a, d), a.return = f, f = a) : (n(f, a), a = ii(d, f.mode, g), a.return = f, f = a), o(f)) : n(f, a);
  }
  return D;
}
var mn = za(!0), Ra = za(!1), ll = Et(null), il = null, tn = null, Do = null;
function Io() {
  Do = tn = il = null;
}
function zo(e) {
  var t = ll.current;
  A(ll), e._currentValue = t;
}
function Hi(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function an(e, t) {
  il = e, Do = tn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (me = !0), e.firstContext = null);
}
function De(e) {
  var t = e._currentValue;
  if (Do !== e) if (e = { context: e, memoizedValue: t, next: null }, tn === null) {
    if (il === null) throw Error(k(308));
    tn = e, il.dependencies = { lanes: 0, firstContext: e };
  } else tn = tn.next = e;
  return t;
}
var zt = null;
function Ro(e) {
  zt === null ? zt = [e] : zt.push(e);
}
function La(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Ro(t)) : (n.next = l.next, l.next = n), t.interleaved = n, qe(e, r);
}
function qe(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var it = !1;
function Lo(e) {
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
  return l = r.interleaved, l === null ? (t.next = t, Ro(r)) : (t.next = l.next, l.next = t), r.interleaved = t, qe(e, n);
}
function Ar(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, yo(e, n);
  }
}
function $u(e, t) {
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
    $t |= o, e.lanes = o, e.memoizedState = h;
  }
}
function Bu(e, t, n) {
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
      t = (t = t.documentElement) ? t.namespaceURI : Si(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Si(t, e);
  }
  A(Ve), O(Ve, t);
}
function hn() {
  A(Ve), A(rr), A(lr);
}
function Ma(e) {
  Rt(lr.current);
  var t = Rt(Ve.current), n = Si(t, e.type);
  t !== n && (O(rr, e), O(Ve, n));
}
function Mo(e) {
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
var bl = [];
function Oo() {
  for (var e = 0; e < bl.length; e++) bl[e]._workInProgressVersionPrimary = null;
  bl.length = 0;
}
var Ur = et.ReactCurrentDispatcher, ei = et.ReactCurrentBatchConfig, Ht = 0, $ = null, G = null, q = null, sl = !1, $n = !1, ir = 0, Ld = 0;
function le() {
  throw Error(k(321));
}
function Fo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!Ae(e[n], t[n])) return !1;
  return !0;
}
function Ao(e, t, n, r, l, i) {
  if (Ht = i, $ = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Ur.current = e === null || e.memoizedState === null ? Fd : Ad, e = n(r, l), $n) {
    i = 0;
    do {
      if ($n = !1, ir = 0, 25 <= i) throw Error(k(301));
      i += 1, q = G = null, t.updateQueue = null, Ur.current = Ud, e = n(r, l);
    } while ($n);
  }
  if (Ur.current = al, t = G !== null && G.next !== null, Ht = 0, q = G = $ = null, sl = !1, t) throw Error(k(300));
  return e;
}
function Uo() {
  var e = ir !== 0;
  return ir = 0, e;
}
function He() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return q === null ? $.memoizedState = q = e : q = q.next = e, q;
}
function Ie() {
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
function ti(e) {
  var t = Ie(), n = t.queue;
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
function ni(e) {
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
    Ae(i, t.memoizedState) || (me = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Oa() {
}
function Fa(e, t) {
  var n = $, r = Ie(), l = t(), i = !Ae(r.memoizedState, l);
  if (i && (r.memoizedState = l, me = !0), r = r.queue, Ho(Ha.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || q !== null && q.memoizedState.tag & 1) {
    if (n.flags |= 2048, ur(9, Ua.bind(null, n, r, l, t), void 0, null), b === null) throw Error(k(349));
    Ht & 30 || Aa(n, t, l);
  }
  return l;
}
function Aa(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Ua(e, t, n, r) {
  t.value = n, t.getSnapshot = r, $a(t) && Ba(e);
}
function Ha(e, t, n) {
  return n(function() {
    $a(t) && Ba(e);
  });
}
function $a(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Ae(e, n);
  } catch {
    return !0;
  }
}
function Ba(e) {
  var t = qe(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Vu(e) {
  var t = He();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: or, lastRenderedState: e }, t.queue = e, e = e.dispatch = Od.bind(null, $, e), [t.memoizedState, e];
}
function ur(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = $.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, $.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function Va() {
  return Ie().memoizedState;
}
function Hr(e, t, n, r) {
  var l = He();
  $.flags |= e, l.memoizedState = ur(1 | t, n, void 0, r === void 0 ? null : r);
}
function Cl(e, t, n, r) {
  var l = Ie();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (G !== null) {
    var o = G.memoizedState;
    if (i = o.destroy, r !== null && Fo(r, o.deps)) {
      l.memoizedState = ur(t, n, i, r);
      return;
    }
  }
  $.flags |= e, l.memoizedState = ur(1 | t, n, i, r);
}
function Wu(e, t) {
  return Hr(8390656, 8, e, t);
}
function Ho(e, t) {
  return Cl(2048, 8, e, t);
}
function Wa(e, t) {
  return Cl(4, 2, e, t);
}
function Qa(e, t) {
  return Cl(4, 4, e, t);
}
function Ka(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function Ya(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Cl(4, 4, Ka.bind(null, t, e), n);
}
function $o() {
}
function Xa(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function Ga(e, t) {
  var n = Ie();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Fo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function Za(e, t, n) {
  return Ht & 21 ? (Ae(n, t) || (n = ta(), $.lanes |= n, $t |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, me = !0), e.memoizedState = n);
}
function jd(e, t) {
  var n = j;
  j = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = ei.transition;
  ei.transition = {};
  try {
    e(!1), t();
  } finally {
    j = n, ei.transition = r;
  }
}
function Ja() {
  return Ie().memoizedState;
}
function Md(e, t, n) {
  var r = vt(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, qa(e)) ba(t, n);
  else if (n = La(e, t, n, r), n !== null) {
    var l = ce();
    Fe(n, e, r, l), ec(n, t, r);
  }
}
function Od(e, t, n) {
  var r = vt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (qa(e)) ba(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, Ae(u, o)) {
        var s = t.interleaved;
        s === null ? (l.next = l, Ro(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = La(e, t, l, r), n !== null && (l = ce(), Fe(n, e, r, l), ec(n, t, r));
  }
}
function qa(e) {
  var t = e.alternate;
  return e === $ || t !== null && t === $;
}
function ba(e, t) {
  $n = sl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function ec(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, yo(e, n);
  }
}
var al = { readContext: De, useCallback: le, useContext: le, useEffect: le, useImperativeHandle: le, useInsertionEffect: le, useLayoutEffect: le, useMemo: le, useReducer: le, useRef: le, useState: le, useDebugValue: le, useDeferredValue: le, useTransition: le, useMutableSource: le, useSyncExternalStore: le, useId: le, unstable_isNewReconciler: !1 }, Fd = { readContext: De, useCallback: function(e, t) {
  return He().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: De, useEffect: Wu, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Hr(
    4194308,
    4,
    Ka.bind(null, t, e),
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
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Md.bind(null, $, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = He();
  return e = { current: e }, t.memoizedState = e;
}, useState: Vu, useDebugValue: $o, useDeferredValue: function(e) {
  return He().memoizedState = e;
}, useTransition: function() {
  var e = Vu(!1), t = e[0];
  return e = jd.bind(null, e[1]), He().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = $, l = He();
  if (U) {
    if (n === void 0) throw Error(k(407));
    n = n();
  } else {
    if (n = t(), b === null) throw Error(k(349));
    Ht & 30 || Aa(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Wu(Ha.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, ur(9, Ua.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = He(), t = b.identifierPrefix;
  if (U) {
    var n = Xe, r = Ye;
    n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ir++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Ld++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Ad = {
  readContext: De,
  useCallback: Xa,
  useContext: De,
  useEffect: Ho,
  useImperativeHandle: Ya,
  useInsertionEffect: Wa,
  useLayoutEffect: Qa,
  useMemo: Ga,
  useReducer: ti,
  useRef: Va,
  useState: function() {
    return ti(or);
  },
  useDebugValue: $o,
  useDeferredValue: function(e) {
    var t = Ie();
    return Za(t, G.memoizedState, e);
  },
  useTransition: function() {
    var e = ti(or)[0], t = Ie().memoizedState;
    return [e, t];
  },
  useMutableSource: Oa,
  useSyncExternalStore: Fa,
  useId: Ja,
  unstable_isNewReconciler: !1
}, Ud = { readContext: De, useCallback: Xa, useContext: De, useEffect: Ho, useImperativeHandle: Ya, useInsertionEffect: Wa, useLayoutEffect: Qa, useMemo: Ga, useReducer: ni, useRef: Va, useState: function() {
  return ni(or);
}, useDebugValue: $o, useDeferredValue: function(e) {
  var t = Ie();
  return G === null ? t.memoizedState = e : Za(t, G.memoizedState, e);
}, useTransition: function() {
  var e = ni(or)[0], t = Ie().memoizedState;
  return [e, t];
}, useMutableSource: Oa, useSyncExternalStore: Fa, useId: Ja, unstable_isNewReconciler: !1 };
function Le(e, t) {
  if (e && e.defaultProps) {
    t = B({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function $i(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : B({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var xl = { isMounted: function(e) {
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
function Qu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !bn(n, r) || !bn(l, i) : !0;
}
function tc(e, t, n) {
  var r = !1, l = St, i = t.contextType;
  return typeof i == "object" && i !== null ? i = De(i) : (l = ge(t) ? At : se.current, r = t.contextTypes, i = (r = r != null) ? dn(e, l) : St), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = xl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function Ku(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && xl.enqueueReplaceState(t, t.state, null);
}
function Bi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, Lo(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = De(i) : (i = ge(t) ? At : se.current, l.context = dn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && ($i(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && xl.enqueueReplaceState(l, l.state, null), ol(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function gn(e, t) {
  try {
    var n = "", r = t;
    do
      n += pf(r), r = r.return;
    while (r);
    var l = n;
  } catch (i) {
    l = `
Error generating stack: ` + i.message + `
` + i.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function ri(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Vi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var Hd = typeof WeakMap == "function" ? WeakMap : Map;
function nc(e, t, n) {
  n = Ge(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    fl || (fl = !0, bi = r), Vi(e, t);
  }, n;
}
function rc(e, t, n) {
  n = Ge(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Vi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Vi(e, t), typeof r != "function" && (gt === null ? gt = /* @__PURE__ */ new Set([this]) : gt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function Yu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Hd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = ep.bind(null, e, t, n), t.then(e, e));
}
function Xu(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Gu(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Ge(-1, 1), t.tag = 2, ht(n, t, 1))), n.lanes |= 1), e);
}
var $d = et.ReactCurrentOwner, me = !1;
function ae(e, t, n, r) {
  t.child = e === null ? Ra(t, null, n, r) : mn(t, e.child, n, r);
}
function Zu(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return an(t, l), r = Ao(e, t, n, r, i, l), n = Uo(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, be(e, t, l)) : (U && n && Po(t), t.flags |= 1, ae(e, t, r, l), t.child);
}
function Ju(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !Go(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, lc(e, t, i, r, l)) : (e = Wr(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : bn, n(o, r) && e.ref === t.ref) return be(e, t, l);
  }
  return t.flags |= 1, e = yt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function lc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (bn(i, r) && e.ref === t.ref) if (me = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (me = !0);
    else return t.lanes = e.lanes, be(e, t, l);
  }
  return Wi(e, t, n, r, l);
}
function ic(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, O(rn, ke), ke |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, O(rn, ke), ke |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, O(rn, ke), ke |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, O(rn, ke), ke |= r;
  return ae(e, t, l, n), t.child;
}
function oc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Wi(e, t, n, r, l) {
  var i = ge(n) ? At : se.current;
  return i = dn(t, i), an(t, l), n = Ao(e, t, n, r, i, l), r = Uo(), e !== null && !me ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, be(e, t, l)) : (U && r && Po(t), t.flags |= 1, ae(e, t, n, l), t.child);
}
function qu(e, t, n, r, l) {
  if (ge(n)) {
    var i = !0;
    tl(t);
  } else i = !1;
  if (an(t, l), t.stateNode === null) $r(e, t), tc(t, n, r), Bi(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var s = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = De(c) : (c = ge(n) ? At : se.current, c = dn(t, c));
    var m = n.getDerivedStateFromProps, h = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || s !== c) && Ku(t, o, r, c), it = !1;
    var p = t.memoizedState;
    o.state = p, ol(t, r, o, l), s = t.memoizedState, u !== r || p !== s || he.current || it ? (typeof m == "function" && ($i(t, n, m, r), s = t.memoizedState), (u = it || Qu(t, n, u, r, p, s, c)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = c, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, ja(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Le(t.type, u), o.props = c, h = t.pendingProps, p = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = De(s) : (s = ge(n) ? At : se.current, s = dn(t, s));
    var y = n.getDerivedStateFromProps;
    (m = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== h || p !== s) && Ku(t, o, r, s), it = !1, p = t.memoizedState, o.state = p, ol(t, r, o, l);
    var v = t.memoizedState;
    u !== h || p !== v || he.current || it ? (typeof y == "function" && ($i(t, n, y, r), v = t.memoizedState), (c = it || Qu(t, n, c, r, p, v, s) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, v, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, v, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = v), o.props = r, o.state = v, o.context = s, r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Qi(e, t, n, r, i, l);
}
function Qi(e, t, n, r, l, i) {
  oc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Fu(t, n, !1), be(e, t, i);
  r = t.stateNode, $d.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = mn(t, e.child, null, i), t.child = mn(t, null, u, i)) : ae(e, t, u, i), t.memoizedState = r.state, l && Fu(t, n, !0), t.child;
}
function uc(e) {
  var t = e.stateNode;
  t.pendingContext ? Ou(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Ou(e, t.context, !1), jo(e, t.containerInfo);
}
function bu(e, t, n, r, l) {
  return pn(), To(l), t.flags |= 256, ae(e, t, n, r), t.child;
}
var Ki = { dehydrated: null, treeContext: null, retryLane: 0 };
function Yi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function sc(e, t, n) {
  var r = t.pendingProps, l = H.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), O(H, l & 1), e === null)
    return Ui(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Nl(o, r, 0, null), e = Ft(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = Yi(n), t.memoizedState = Ki, e) : Bo(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return Bd(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var s = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = yt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = yt(u, i) : (i = Ft(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? Yi(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = Ki, r;
  }
  return i = e.child, e = i.sibling, r = yt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Bo(e, t) {
  return t = Nl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Dr(e, t, n, r) {
  return r !== null && To(r), mn(t, e.child, null, n), e = Bo(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function Bd(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = ri(Error(k(422))), Dr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Nl({ mode: "visible", children: r.children }, l, 0, null), i = Ft(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && mn(t, e.child, null, o), t.child.memoizedState = Yi(o), t.memoizedState = Ki, i);
  if (!(t.mode & 1)) return Dr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(k(419)), r = ri(i, r, void 0), Dr(e, t, o, r);
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
    return Xo(), r = ri(Error(k(421))), Dr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = tp.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Se = mt(l.nextSibling), we = t, U = !0, Me = null, e !== null && (_e[Pe++] = Ye, _e[Pe++] = Xe, _e[Pe++] = Ut, Ye = e.id, Xe = e.overflow, Ut = t), t = Bo(t, r.children), t.flags |= 4096, t);
}
function es(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Hi(e.return, t, n);
}
function li(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function ac(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (ae(e, t, r.children, n), r = H.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && es(e, n, t);
      else if (e.tag === 19) es(e, n, t);
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
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), li(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && ul(e) === null) {
          t.child = l;
          break;
        }
        e = l.sibling, l.sibling = n, n = l, l = e;
      }
      li(t, !0, n, null, i);
      break;
    case "together":
      li(t, !1, null, null, void 0);
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
function Vd(e, t, n) {
  switch (t.tag) {
    case 3:
      uc(t), pn();
      break;
    case 5:
      Ma(t);
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
        return r.dehydrated !== null ? (O(H, H.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? sc(e, t, n) : (O(H, H.current & 1), e = be(e, t, n), e !== null ? e.sibling : null);
      O(H, H.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return ac(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), O(H, H.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, ic(e, t, n);
  }
  return be(e, t, n);
}
var cc, Xi, fc, dc;
cc = function(e, t) {
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
Xi = function() {
};
fc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, Rt(Ve.current);
    var i = null;
    switch (n) {
      case "input":
        l = gi(e, l), r = gi(e, r), i = [];
        break;
      case "select":
        l = B({}, l, { value: void 0 }), r = B({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = ki(e, l), r = ki(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = br);
    }
    wi(n, r);
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
dc = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Dn(e, t) {
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
function Wd(e, t, n) {
  var r = t.pendingProps;
  switch (No(t), t.tag) {
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
      return r = t.stateNode, hn(), A(he), A(se), Oo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Nr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Me !== null && (no(Me), Me = null))), Xi(e, t), ie(t), null;
    case 5:
      Mo(t);
      var l = Rt(lr.current);
      if (n = t.type, e !== null && t.stateNode != null) fc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
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
              au(r, i), F("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, F("invalid", r);
              break;
            case "textarea":
              fu(r, i), F("invalid", r);
          }
          wi(n, i), l = null;
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
              yr(r), cu(r, i, !0);
              break;
            case "textarea":
              yr(r), du(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = br);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Hs(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[$e] = t, e[nr] = r, cc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Ei(n, r), n) {
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
                au(e, r), l = gi(e, r), F("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = B({}, r, { value: void 0 }), F("invalid", e);
                break;
              case "textarea":
                fu(e, r), l = ki(e, r), F("invalid", e);
                break;
              default:
                l = r;
            }
            wi(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var s = u[i];
              i === "style" ? Vs(e, s) : i === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && $s(e, s)) : i === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Yn(e, s) : typeof s == "number" && Yn(e, "" + s) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Kn.hasOwnProperty(i) ? s != null && i === "onScroll" && F("scroll", e) : s != null && fo(e, i, s, o));
            }
            switch (n) {
              case "input":
                yr(e), cu(e, r, !1);
                break;
              case "textarea":
                yr(e), du(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kt(r.value));
                break;
              case "select":
                e.multiple = !!r.multiple, i = r.value, i != null ? ln(e, !!r.multiple, i, !1) : r.defaultValue != null && ln(
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
      if (e && t.stateNode != null) dc(e, t, e.memoizedProps, r);
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
        if (U && Se !== null && t.mode & 1 && !(t.flags & 128)) Ia(), pn(), t.flags |= 98560, i = !1;
        else if (i = Nr(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(k(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(k(317));
            i[$e] = t;
          } else pn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ie(t), i = !1;
        } else Me !== null && (no(Me), Me = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || H.current & 1 ? Z === 0 && (Z = 3) : Xo())), t.updateQueue !== null && (t.flags |= 4), ie(t), null);
    case 4:
      return hn(), Xi(e, t), e === null && er(t.stateNode.containerInfo), ie(t), null;
    case 10:
      return zo(t.type._context), ie(t), null;
    case 17:
      return ge(t.type) && el(), ie(t), null;
    case 19:
      if (A(H), i = t.memoizedState, i === null) return ie(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) Dn(i, !1);
      else {
        if (Z !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = ul(e), o !== null) {
            for (t.flags |= 128, Dn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return O(H, H.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && K() > vn && (t.flags |= 128, r = !0, Dn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = ul(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Dn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !U) return ie(t), null;
        } else 2 * K() - i.renderingStartTime > vn && n !== 1073741824 && (t.flags |= 128, r = !0, Dn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = K(), t.sibling = null, n = H.current, O(H, r ? n & 1 | 2 : n & 1), t) : (ie(t), null);
    case 22:
    case 23:
      return Yo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? ke & 1073741824 && (ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ie(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(k(156, t.tag));
}
function Qd(e, t) {
  switch (No(t), t.tag) {
    case 1:
      return ge(t.type) && el(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return hn(), A(he), A(se), Oo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Mo(t), null;
    case 13:
      if (A(H), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(k(340));
        pn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return A(H), null;
    case 4:
      return hn(), null;
    case 10:
      return zo(t.type._context), null;
    case 22:
    case 23:
      return Yo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ir = !1, ue = !1, Kd = typeof WeakSet == "function" ? WeakSet : Set, x = null;
function nn(e, t) {
  var n = e.ref;
  if (n !== null) if (typeof n == "function") try {
    n(null);
  } catch (r) {
    V(e, t, r);
  }
  else n.current = null;
}
function Gi(e, t, n) {
  try {
    n();
  } catch (r) {
    V(e, t, r);
  }
}
var ts = !1;
function Yd(e, t) {
  if (Ri = Zr, e = va(), _o(e)) {
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
  for (Li = { focusedElem: e, selectionRange: n }, Zr = !1, x = t; x !== null; ) if (t = x, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, x = e;
  else for (; x !== null; ) {
    t = x;
    try {
      var v = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (v !== null) {
            var S = v.memoizedProps, D = v.memoizedState, f = t.stateNode, a = f.getSnapshotBeforeUpdate(t.elementType === t.type ? S : Le(t.type, S), D);
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
      e.return = t.return, x = e;
      break;
    }
    x = t.return;
  }
  return v = ts, ts = !1, v;
}
function Bn(e, t, n) {
  var r = t.updateQueue;
  if (r = r !== null ? r.lastEffect : null, r !== null) {
    var l = r = r.next;
    do {
      if ((l.tag & e) === e) {
        var i = l.destroy;
        l.destroy = void 0, i !== void 0 && Gi(t, n, i);
      }
      l = l.next;
    } while (l !== r);
  }
}
function _l(e, t) {
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
function Zi(e) {
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
function pc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, pc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[$e], delete t[nr], delete t[Oi], delete t[Dd], delete t[Id])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function mc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function ns(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || mc(e.return)) return null;
      e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Ji(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = br));
  else if (r !== 4 && (e = e.child, e !== null)) for (Ji(e, t, n), e = e.sibling; e !== null; ) Ji(e, t, n), e = e.sibling;
}
function qi(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (qi(e, t, n), e = e.sibling; e !== null; ) qi(e, t, n), e = e.sibling;
}
var te = null, je = !1;
function tt(e, t, n) {
  for (n = n.child; n !== null; ) hc(e, t, n), n = n.sibling;
}
function hc(e, t, n) {
  if (Be && typeof Be.onCommitFiberUnmount == "function") try {
    Be.onCommitFiberUnmount(vl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      ue || nn(n, t);
    case 6:
      var r = te, l = je;
      te = null, tt(e, t, n), te = r, je = l, te !== null && (je ? (e = te, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : te.removeChild(n.stateNode));
      break;
    case 18:
      te !== null && (je ? (e = te, n = n.stateNode, e.nodeType === 8 ? Jl(e.parentNode, n) : e.nodeType === 1 && Jl(e, n), Jn(e)) : Jl(te, n.stateNode));
      break;
    case 4:
      r = te, l = je, te = n.stateNode.containerInfo, je = !0, tt(e, t, n), te = r, je = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!ue && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && Gi(n, t, o), l = l.next;
        } while (l !== r);
      }
      tt(e, t, n);
      break;
    case 1:
      if (!ue && (nn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
function rs(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Kd()), t.forEach(function(r) {
      var l = np.bind(null, e, r);
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
            te = u.stateNode, je = !1;
            break e;
          case 3:
            te = u.stateNode.containerInfo, je = !0;
            break e;
          case 4:
            te = u.stateNode.containerInfo, je = !0;
            break e;
        }
        u = u.return;
      }
      if (te === null) throw Error(k(160));
      hc(i, o, l), te = null, je = !1;
      var s = l.alternate;
      s !== null && (s.return = null), l.return = null;
    } catch (c) {
      V(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) gc(t, e), t = t.sibling;
}
function gc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (Re(t, e), Ue(e), r & 4) {
        try {
          Bn(3, e, e.return), _l(3, e);
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
      Re(t, e), Ue(e), r & 512 && n !== null && nn(n, n.return);
      break;
    case 5:
      if (Re(t, e), Ue(e), r & 512 && n !== null && nn(n, n.return), e.flags & 32) {
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
          u === "input" && i.type === "radio" && i.name != null && As(l, i), Ei(u, o);
          var c = Ei(u, i);
          for (o = 0; o < s.length; o += 2) {
            var m = s[o], h = s[o + 1];
            m === "style" ? Vs(l, h) : m === "dangerouslySetInnerHTML" ? $s(l, h) : m === "children" ? Yn(l, h) : fo(l, m, h, c);
          }
          switch (u) {
            case "input":
              vi(l, i);
              break;
            case "textarea":
              Us(l, i);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var y = i.value;
              y != null ? ln(l, !!i.multiple, y, !1) : p !== !!i.multiple && (i.defaultValue != null ? ln(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : ln(l, !!i.multiple, i.multiple ? [] : "", !1));
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
      Re(t, e), Ue(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Qo = K())), r & 4 && rs(e);
      break;
    case 22:
      if (m = n !== null && n.memoizedState !== null, e.mode & 1 ? (ue = (c = ue) || m, Re(t, e), ue = c) : Re(t, e), Ue(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !m && e.mode & 1) for (x = e, m = e.child; m !== null; ) {
          for (h = x = m; x !== null; ) {
            switch (p = x, y = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Bn(4, p, p.return);
                break;
              case 1:
                nn(p, p.return);
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
                nn(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  is(h);
                  continue;
                }
            }
            y !== null ? (y.return = p, x = y) : is(h);
          }
          m = m.sibling;
        }
        e: for (m = null, h = e; ; ) {
          if (h.tag === 5) {
            if (m === null) {
              m = h;
              try {
                l = h.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = h.stateNode, s = h.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, u.style.display = Bs("display", o));
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
      Re(t, e), Ue(e), r & 4 && rs(e);
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
          if (mc(n)) {
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
          var i = ns(e);
          qi(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = ns(e);
          Ji(e, u, o);
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
function Xd(e, t, n) {
  x = e, vc(e);
}
function vc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; x !== null; ) {
    var l = x, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Ir;
      if (!o) {
        var u = l.alternate, s = u !== null && u.memoizedState !== null || ue;
        u = Ir;
        var c = ue;
        if (Ir = o, (ue = s) && !c) for (x = l; x !== null; ) o = x, s = o.child, o.tag === 22 && o.memoizedState !== null ? os(l) : s !== null ? (s.return = o, x = s) : os(l);
        for (; i !== null; ) x = i, vc(i), i = i.sibling;
        x = l, Ir = u, ue = c;
      }
      ls(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, x = i) : ls(e);
  }
}
function ls(e) {
  for (; x !== null; ) {
    var t = x;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            ue || _l(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !ue) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Bu(t, i, r);
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
              Bu(t, o, n);
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
        ue || t.flags & 512 && Zi(t);
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
function is(e) {
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
function os(e) {
  for (; x !== null; ) {
    var t = x;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            _l(4, t);
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
            Zi(t);
          } catch (s) {
            V(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Zi(t);
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
var Gd = Math.ceil, cl = et.ReactCurrentDispatcher, Vo = et.ReactCurrentOwner, Te = et.ReactCurrentBatchConfig, L = 0, b = null, X = null, ne = 0, ke = 0, rn = Et(0), Z = 0, sr = null, $t = 0, Pl = 0, Wo = 0, Vn = null, pe = null, Qo = 0, vn = 1 / 0, Qe = null, fl = !1, bi = null, gt = null, zr = !1, at = null, dl = 0, Wn = 0, eo = null, Br = -1, Vr = 0;
function ce() {
  return L & 6 ? K() : Br !== -1 ? Br : Br = K();
}
function vt(e) {
  return e.mode & 1 ? L & 2 && ne !== 0 ? ne & -ne : Rd.transition !== null ? (Vr === 0 && (Vr = ta()), Vr) : (e = j, e !== 0 || (e = window.event, e = e === void 0 ? 16 : sa(e.type)), e) : 1;
}
function Fe(e, t, n, r) {
  if (50 < Wn) throw Wn = 0, eo = null, Error(k(185));
  cr(e, n, r), (!(L & 2) || e !== b) && (e === b && (!(L & 2) && (Pl |= n), Z === 4 && ut(e, ne)), ve(e, r), n === 1 && L === 0 && !(t.mode & 1) && (vn = K() + 500, El && Ct()));
}
function ve(e, t) {
  var n = e.callbackNode;
  Rf(e, t);
  var r = Gr(e, e === b ? ne : 0);
  if (r === 0) n !== null && hu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && hu(n), t === 1) e.tag === 0 ? zd(us.bind(null, e)) : Na(us.bind(null, e)), Nd(function() {
      !(L & 6) && Ct();
    }), n = null;
    else {
      switch (na(r)) {
        case 1:
          n = vo;
          break;
        case 4:
          n = bs;
          break;
        case 16:
          n = Xr;
          break;
        case 536870912:
          n = ea;
          break;
        default:
          n = Xr;
      }
      n = _c(n, yc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function yc(e, t) {
  if (Br = -1, Vr = 0, L & 6) throw Error(k(327));
  var n = e.callbackNode;
  if (cn() && e.callbackNode !== n) return null;
  var r = Gr(e, e === b ? ne : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = pl(e, r);
  else {
    t = r;
    var l = L;
    L |= 2;
    var i = Sc();
    (b !== e || ne !== t) && (Qe = null, vn = K() + 500, Ot(e, t));
    do
      try {
        qd();
        break;
      } catch (u) {
        kc(e, u);
      }
    while (!0);
    Io(), cl.current = i, L = l, X !== null ? t = 0 : (b = null, ne = 0, t = Z);
  }
  if (t !== 0) {
    if (t === 2 && (l = Ni(e), l !== 0 && (r = l, t = to(e, l))), t === 1) throw n = sr, Ot(e, 0), ut(e, r), ve(e, K()), n;
    if (t === 6) ut(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !Zd(l) && (t = pl(e, r), t === 2 && (i = Ni(e), i !== 0 && (r = i, t = to(e, i))), t === 1)) throw n = sr, Ot(e, 0), ut(e, r), ve(e, K()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(k(345));
        case 2:
          Dt(e, pe, Qe);
          break;
        case 3:
          if (ut(e, r), (r & 130023424) === r && (t = Qo + 500 - K(), 10 < t)) {
            if (Gr(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              ce(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Mi(Dt.bind(null, e, pe, Qe), t);
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
          if (r = l, r = K() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Gd(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Mi(Dt.bind(null, e, pe, Qe), r);
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
  return ve(e, K()), e.callbackNode === n ? yc.bind(null, e) : null;
}
function to(e, t) {
  var n = Vn;
  return e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256), e = pl(e, t), e !== 2 && (t = pe, pe = n, t !== null && no(t)), e;
}
function no(e) {
  pe === null ? pe = e : pe.push.apply(pe, e);
}
function Zd(e) {
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
  for (t &= ~Wo, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Oe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function us(e) {
  if (L & 6) throw Error(k(327));
  cn();
  var t = Gr(e, 0);
  if (!(t & 1)) return ve(e, K()), null;
  var n = pl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Ni(e);
    r !== 0 && (t = r, n = to(e, r));
  }
  if (n === 1) throw n = sr, Ot(e, 0), ut(e, t), ve(e, K()), n;
  if (n === 6) throw Error(k(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Dt(e, pe, Qe), ve(e, K()), null;
}
function Ko(e, t) {
  var n = L;
  L |= 1;
  try {
    return e(t);
  } finally {
    L = n, L === 0 && (vn = K() + 500, El && Ct());
  }
}
function Bt(e) {
  at !== null && at.tag === 0 && !(L & 6) && cn();
  var t = L;
  L |= 1;
  var n = Te.transition, r = j;
  try {
    if (Te.transition = null, j = 1, e) return e();
  } finally {
    j = r, Te.transition = n, L = t, !(L & 6) && Ct();
  }
}
function Yo() {
  ke = rn.current, A(rn);
}
function Ot(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, Pd(n)), X !== null) for (n = X.return; n !== null; ) {
    var r = n;
    switch (No(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && el();
        break;
      case 3:
        hn(), A(he), A(se), Oo();
        break;
      case 5:
        Mo(r);
        break;
      case 4:
        hn();
        break;
      case 13:
        A(H);
        break;
      case 19:
        A(H);
        break;
      case 10:
        zo(r.type._context);
        break;
      case 22:
      case 23:
        Yo();
    }
    n = n.return;
  }
  if (b = e, X = e = yt(e.current, null), ne = ke = t, Z = 0, sr = null, Wo = Pl = $t = 0, pe = Vn = null, zt !== null) {
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
function kc(e, t) {
  do {
    var n = X;
    try {
      if (Io(), Ur.current = al, sl) {
        for (var r = $.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        sl = !1;
      }
      if (Ht = 0, q = G = $ = null, $n = !1, ir = 0, Vo.current = null, n === null || n.return === null) {
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
          var y = Xu(o);
          if (y !== null) {
            y.flags &= -257, Gu(y, o, u, i, t), y.mode & 1 && Yu(i, c, t), t = y, s = c;
            var v = t.updateQueue;
            if (v === null) {
              var S = /* @__PURE__ */ new Set();
              S.add(s), t.updateQueue = S;
            } else v.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Yu(i, c, t), Xo();
              break e;
            }
            s = Error(k(426));
          }
        } else if (U && u.mode & 1) {
          var D = Xu(o);
          if (D !== null) {
            !(D.flags & 65536) && (D.flags |= 256), Gu(D, o, u, i, t), To(gn(s, u));
            break e;
          }
        }
        i = s = gn(s, u), Z !== 4 && (Z = 2), Vn === null ? Vn = [i] : Vn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = nc(i, s, t);
              $u(i, f);
              break e;
            case 1:
              u = s;
              var a = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (gt === null || !gt.has(d)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var g = rc(i, u, t);
                $u(i, g);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ec(n);
    } catch (w) {
      t = w, X === n && n !== null && (X = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Sc() {
  var e = cl.current;
  return cl.current = al, e === null ? al : e;
}
function Xo() {
  (Z === 0 || Z === 3 || Z === 2) && (Z = 4), b === null || !($t & 268435455) && !(Pl & 268435455) || ut(b, ne);
}
function pl(e, t) {
  var n = L;
  L |= 2;
  var r = Sc();
  (b !== e || ne !== t) && (Qe = null, Ot(e, t));
  do
    try {
      Jd();
      break;
    } catch (l) {
      kc(e, l);
    }
  while (!0);
  if (Io(), L = n, cl.current = r, X !== null) throw Error(k(261));
  return b = null, ne = 0, Z;
}
function Jd() {
  for (; X !== null; ) wc(X);
}
function qd() {
  for (; X !== null && !Cf(); ) wc(X);
}
function wc(e) {
  var t = xc(e.alternate, e, ke);
  e.memoizedProps = e.pendingProps, t === null ? Ec(e) : X = t, Vo.current = null;
}
function Ec(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = Qd(n, t), n !== null) {
        n.flags &= 32767, X = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        Z = 6, X = null;
        return;
      }
    } else if (n = Wd(n, t, ke), n !== null) {
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
  var r = j, l = Te.transition;
  try {
    Te.transition = null, j = 1, bd(e, t, n, r);
  } finally {
    Te.transition = l, j = r;
  }
  return null;
}
function bd(e, t, n, r) {
  do
    cn();
  while (at !== null);
  if (L & 6) throw Error(k(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(k(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Lf(e, i), e === b && (X = b = null, ne = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || zr || (zr = !0, _c(Xr, function() {
    return cn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Te.transition, Te.transition = null;
    var o = j;
    j = 1;
    var u = L;
    L |= 4, Vo.current = null, Yd(e, n), gc(n, e), kd(Li), Zr = !!Ri, Li = Ri = null, e.current = n, Xd(n), xf(), L = u, j = o, Te.transition = i;
  } else e.current = n;
  if (zr && (zr = !1, at = e, dl = l), i = e.pendingLanes, i === 0 && (gt = null), Nf(n.stateNode), ve(e, K()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (fl) throw fl = !1, e = bi, bi = null, e;
  return dl & 1 && e.tag !== 0 && cn(), i = e.pendingLanes, i & 1 ? e === eo ? Wn++ : (Wn = 0, eo = e) : Wn = 0, Ct(), null;
}
function cn() {
  if (at !== null) {
    var e = na(dl), t = Te.transition, n = j;
    try {
      if (Te.transition = null, j = 16 > e ? 16 : e, at === null) var r = !1;
      else {
        if (e = at, at = null, dl = 0, L & 6) throw Error(k(331));
        var l = L;
        for (L |= 4, x = e.current; x !== null; ) {
          var i = x, o = i.child;
          if (x.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (x = c; x !== null; ) {
                  var m = x;
                  switch (m.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Bn(8, m, i);
                  }
                  var h = m.child;
                  if (h !== null) h.return = m, x = h;
                  else for (; x !== null; ) {
                    m = x;
                    var p = m.sibling, y = m.return;
                    if (pc(m), m === c) {
                      x = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = y, x = p;
                      break;
                    }
                    x = y;
                  }
                }
              }
              var v = i.alternate;
              if (v !== null) {
                var S = v.child;
                if (S !== null) {
                  v.child = null;
                  do {
                    var D = S.sibling;
                    S.sibling = null, S = D;
                  } while (S !== null);
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
                Bn(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, x = f;
              break e;
            }
            x = i.return;
          }
        }
        var a = e.current;
        for (x = a; x !== null; ) {
          o = x;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, x = d;
          else e: for (o = a; x !== null; ) {
            if (u = x, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  _l(9, u);
              }
            } catch (w) {
              V(u, u.return, w);
            }
            if (u === o) {
              x = null;
              break e;
            }
            var g = u.sibling;
            if (g !== null) {
              g.return = u.return, x = g;
              break e;
            }
            x = u.return;
          }
        }
        if (L = l, Ct(), Be && typeof Be.onPostCommitFiberRoot == "function") try {
          Be.onPostCommitFiberRoot(vl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      j = n, Te.transition = t;
    }
  }
  return !1;
}
function ss(e, t, n) {
  t = gn(n, t), t = nc(e, t, 1), e = ht(e, t, 1), t = ce(), e !== null && (cr(e, 1, t), ve(e, t));
}
function V(e, t, n) {
  if (e.tag === 3) ss(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ss(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (gt === null || !gt.has(r))) {
        e = gn(n, e), e = rc(t, e, 1), t = ht(t, e, 1), e = ce(), t !== null && (cr(t, 1, e), ve(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function ep(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = ce(), e.pingedLanes |= e.suspendedLanes & n, b === e && (ne & n) === n && (Z === 4 || Z === 3 && (ne & 130023424) === ne && 500 > K() - Qo ? Ot(e, 0) : Wo |= n), ve(e, t);
}
function Cc(e, t) {
  t === 0 && (e.mode & 1 ? (t = wr, wr <<= 1, !(wr & 130023424) && (wr = 4194304)) : t = 1);
  var n = ce();
  e = qe(e, t), e !== null && (cr(e, t, n), ve(e, n));
}
function tp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), Cc(e, n);
}
function np(e, t) {
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
  r !== null && r.delete(t), Cc(e, n);
}
var xc;
xc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || he.current) me = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return me = !1, Vd(e, t, n);
    me = !!(e.flags & 131072);
  }
  else me = !1, U && t.flags & 1048576 && Ta(t, rl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      $r(e, t), e = t.pendingProps;
      var l = dn(t, se.current);
      an(t, n), l = Ao(null, t, r, e, l, n);
      var i = Uo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ge(r) ? (i = !0, tl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Lo(t), l.updater = xl, t.stateNode = l, l._reactInternals = t, Bi(t, r, e, n), t = Qi(null, t, r, !0, i, n)) : (t.tag = 0, U && i && Po(t), ae(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch ($r(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = lp(r), e = Le(r, e), l) {
          case 0:
            t = Wi(null, t, r, e, n);
            break e;
          case 1:
            t = qu(null, t, r, e, n);
            break e;
          case 11:
            t = Zu(null, t, r, e, n);
            break e;
          case 14:
            t = Ju(null, t, r, Le(r.type, e), n);
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
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Wi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), qu(e, t, r, l, n);
    case 3:
      e: {
        if (uc(t), e === null) throw Error(k(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, ja(e, t), ol(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = gn(Error(k(423)), t), t = bu(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = gn(Error(k(424)), t), t = bu(e, t, r, n, l);
          break e;
        } else for (Se = mt(t.stateNode.containerInfo.firstChild), we = t, U = !0, Me = null, n = Ra(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (pn(), r === l) {
            t = be(e, t, n);
            break e;
          }
          ae(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Ma(t), e === null && Ui(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, ji(r, l) ? o = null : i !== null && ji(r, i) && (t.flags |= 32), oc(e, t), ae(e, t, o, n), t.child;
    case 6:
      return e === null && Ui(t), null;
    case 13:
      return sc(e, t, n);
    case 4:
      return jo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = mn(t, null, r, n) : ae(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Zu(e, t, r, l, n);
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
                i.lanes |= n, s = i.alternate, s !== null && (s.lanes |= n), Hi(
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
            o.lanes |= n, u = o.alternate, u !== null && (u.lanes |= n), Hi(o, n, t), o = i.sibling;
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
      return l = t.type, r = t.pendingProps.children, an(t, n), l = De(l), r = r(l), t.flags |= 1, ae(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), Ju(e, t, r, l, n);
    case 15:
      return lc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), $r(e, t), t.tag = 1, ge(r) ? (e = !0, tl(t)) : e = !1, an(t, n), tc(t, r, l), Bi(t, r, l, n), Qi(null, t, r, !0, e, n);
    case 19:
      return ac(e, t, n);
    case 22:
      return ic(e, t, n);
  }
  throw Error(k(156, t.tag));
};
function _c(e, t) {
  return qs(e, t);
}
function rp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function Ne(e, t, n, r) {
  return new rp(e, t, n, r);
}
function Go(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function lp(e) {
  if (typeof e == "function") return Go(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === mo) return 11;
    if (e === ho) return 14;
  }
  return 2;
}
function yt(e, t) {
  var n = e.alternate;
  return n === null ? (n = Ne(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function Wr(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") Go(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case Yt:
      return Ft(n.children, l, i, t);
    case po:
      o = 8, l |= 8;
      break;
    case di:
      return e = Ne(12, n, t, l | 2), e.elementType = di, e.lanes = i, e;
    case pi:
      return e = Ne(13, n, t, l), e.elementType = pi, e.lanes = i, e;
    case mi:
      return e = Ne(19, n, t, l), e.elementType = mi, e.lanes = i, e;
    case Ms:
      return Nl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ls:
          o = 10;
          break e;
        case js:
          o = 9;
          break e;
        case mo:
          o = 11;
          break e;
        case ho:
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
function Ft(e, t, n, r) {
  return e = Ne(7, e, r, t), e.lanes = n, e;
}
function Nl(e, t, n, r) {
  return e = Ne(22, e, r, t), e.elementType = Ms, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function ii(e, t, n) {
  return e = Ne(6, e, null, t), e.lanes = n, e;
}
function oi(e, t, n) {
  return t = Ne(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function ip(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Hl(0), this.expirationTimes = Hl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Hl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function Zo(e, t, n, r, l, i, o, u, s) {
  return e = new ip(e, t, n, u, s), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = Ne(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Lo(i), e;
}
function op(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Kt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Pc(e) {
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
    if (ge(n)) return Pa(e, n, t);
  }
  return t;
}
function Nc(e, t, n, r, l, i, o, u, s) {
  return e = Zo(n, r, !0, e, l, i, o, u, s), e.context = Pc(null), n = e.current, r = ce(), l = vt(n), i = Ge(r, l), i.callback = t ?? null, ht(n, i, l), e.current.lanes = l, cr(e, l, r), ve(e, r), e;
}
function Tl(e, t, n, r) {
  var l = t.current, i = ce(), o = vt(l);
  return n = Pc(n), t.context === null ? t.context = n : t.pendingContext = n, t = Ge(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ht(l, t, o), e !== null && (Fe(e, l, o, i), Ar(e, l, o)), o;
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
function as(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Jo(e, t) {
  as(e, t), (e = e.alternate) && as(e, t);
}
function up() {
  return null;
}
var Tc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function qo(e) {
  this._internalRoot = e;
}
Dl.prototype.render = qo.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(k(409));
  Tl(e, t, null, null);
};
Dl.prototype.unmount = qo.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function() {
      Tl(null, e, null, null);
    }), t[Je] = null;
  }
};
function Dl(e) {
  this._internalRoot = e;
}
Dl.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = ia();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ot.length && t !== 0 && t < ot[n].priority; n++) ;
    ot.splice(n, 0, e), n === 0 && ua(e);
  }
};
function bo(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Il(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function cs() {
}
function sp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = ml(o);
        i.call(c);
      };
    }
    var o = Nc(t, r, e, 0, null, !1, !1, "", cs);
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
  var s = Zo(e, 0, !1, null, null, !1, !1, "", cs);
  return e._reactRootContainer = s, e[Je] = s.current, er(e.nodeType === 8 ? e.parentNode : e), Bt(function() {
    Tl(t, s, n, r);
  }), s;
}
function zl(e, t, n, r, l) {
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
    Tl(t, o, e, l);
  } else o = sp(n, t, e, l, r);
  return ml(o);
}
ra = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ln(t.pendingLanes);
        n !== 0 && (yo(t, n | 1), ve(t, K()), !(L & 6) && (vn = K() + 500, Ct()));
      }
      break;
    case 13:
      Bt(function() {
        var r = qe(e, 1);
        if (r !== null) {
          var l = ce();
          Fe(r, e, 1, l);
        }
      }), Jo(e, 1);
  }
};
ko = function(e) {
  if (e.tag === 13) {
    var t = qe(e, 134217728);
    if (t !== null) {
      var n = ce();
      Fe(t, e, 134217728, n);
    }
    Jo(e, 134217728);
  }
};
la = function(e) {
  if (e.tag === 13) {
    var t = vt(e), n = qe(e, t);
    if (n !== null) {
      var r = ce();
      Fe(n, e, t, r);
    }
    Jo(e, t);
  }
};
ia = function() {
  return j;
};
oa = function(e, t) {
  var n = j;
  try {
    return j = e, t();
  } finally {
    j = n;
  }
};
xi = function(e, t, n) {
  switch (t) {
    case "input":
      if (vi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = wl(r);
            if (!l) throw Error(k(90));
            Fs(r), vi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Us(e, n);
      break;
    case "select":
      t = n.value, t != null && ln(e, !!n.multiple, t, !1);
  }
};
Ks = Ko;
Ys = Bt;
var ap = { usingClientEntryPoint: !1, Events: [dr, Jt, wl, Ws, Qs, Ko] }, In = { findFiberByHostInstance: It, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, cp = { bundleType: In.bundleType, version: In.version, rendererPackageName: In.rendererPackageName, rendererConfig: In.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: et.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = Zs(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: In.findFiberByHostInstance || up, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Rr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Rr.isDisabled && Rr.supportsFiber) try {
    vl = Rr.inject(cp), Be = Rr;
  } catch {
  }
}
Ce.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ap;
Ce.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!bo(t)) throw Error(k(200));
  return op(e, t, null, n);
};
Ce.createRoot = function(e, t) {
  if (!bo(e)) throw Error(k(299));
  var n = !1, r = "", l = Tc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Zo(e, 1, !1, null, null, n, !1, r, l), e[Je] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new qo(t);
};
Ce.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(k(188)) : (e = Object.keys(e).join(","), Error(k(268, e)));
  return e = Zs(t), e = e === null ? null : e.stateNode, e;
};
Ce.flushSync = function(e) {
  return Bt(e);
};
Ce.hydrate = function(e, t, n) {
  if (!Il(t)) throw Error(k(200));
  return zl(null, e, t, !0, n);
};
Ce.hydrateRoot = function(e, t, n) {
  if (!bo(e)) throw Error(k(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Tc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Nc(t, null, e, 1, n ?? null, l, !1, i, o), e[Je] = t.current, er(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Dl(t);
};
Ce.render = function(e, t, n) {
  if (!Il(t)) throw Error(k(200));
  return zl(null, e, t, !1, n);
};
Ce.unmountComponentAtNode = function(e) {
  if (!Il(e)) throw Error(k(40));
  return e._reactRootContainer ? (Bt(function() {
    zl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[Je] = null;
    });
  }), !0) : !1;
};
Ce.unstable_batchedUpdates = Ko;
Ce.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Il(n)) throw Error(k(200));
  if (e == null || e._reactInternals === void 0) throw Error(k(38));
  return zl(e, t, n, !1, r);
};
Ce.version = "18.3.1-next-f1338f8080-20240426";
function Dc() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Dc);
    } catch (e) {
      console.error(e);
    }
}
Dc(), Ds.exports = Ce;
var fp = Ds.exports, fs = fp;
Qn.createRoot = fs.createRoot, Qn.hydrateRoot = fs.hydrateRoot;
const Ic = (e) => Math.max(0, Math.floor(e)), zc = (e, t) => Ic(e * t), Rc = (e, t = 1) => Ic(e - t), si = (e) => zc(e, 2 / 3), dp = (e) => zc(e, 1 / 2), We = (e) => {
  e.getStack(e.statusId) > 0 && e.setStack(e.statusId, 0);
}, ai = (e) => {
  const t = e.getStack(e.statusId);
  t > 0 && e.setStack(e.statusId, Rc(t));
}, ze = [
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
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, si(t)));
    }
  },
  {
    id: "Poison",
    name: "毒",
    attribute: { stack: "stackPoison", pending: "stackPoisonnext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, dp(t)));
    }
  },
  {
    id: "Tremor",
    name: "振動",
    attribute: { stack: "stacktremor", pending: "stacktremornext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || (e.applyHpDamage(t), e.setStack(e.statusId, si(t)));
    }
  },
  {
    id: "Bleeding",
    name: "出血",
    attribute: { stack: "stackBleeding", pending: "stackBleedingnext" },
    hasPending: !0,
    onTurnEnd: (e) => {
      const t = e.getStack(e.statusId);
      t <= 0 || e.setStack(e.statusId, si(t));
    }
  },
  {
    id: "Poise",
    name: "呼吸",
    attribute: { stack: "stackpoise", pending: "stackpoisenext" },
    hasPending: !0,
    onTurnEnd: (e) => ai(e)
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
    onTurnEnd: (e) => ai(e)
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
      t > 0 && e.setStack(e.statusId, Rc(t));
    }
  },
  {
    id: "FEOAwaken",
    name: "覚醒",
    attribute: { stack: "stackFEOAwaken", pending: "stackFEOAwakenNext" },
    hasPending: !0,
    onTurnEnd: (e) => ai(e)
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
], pp = ze.map((e) => e.attribute.stack), mp = (e) => {
  var n;
  const t = (n = e.system) == null ? void 0 : n.attributes;
  return t != null && t.hp ? pp.some((r) => r in t) : !1;
}, hp = () => {
  var e;
  return (((e = canvas == null ? void 0 : canvas.tokens) == null ? void 0 : e.placeables) ?? []).filter((t) => {
    var n;
    return !!((n = t.actor) != null && n.id) && mp(t.actor);
  }).map((t) => {
    var n, r, l;
    return {
      actorId: ((n = t.actor) == null ? void 0 : n.id) ?? "",
      name: t.name ?? ((r = t.actor) == null ? void 0 : r.name) ?? "unknown",
      actorName: ((l = t.actor) == null ? void 0 : l.name) ?? "",
      disposition: t.document.disposition
    };
  });
}, Lc = () => {
  const [e, t] = W.useState([]);
  return W.useEffect(() => {
    t(hp());
  }, []), e;
};
class gp {
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
class vp {
  constructor(t) {
    En(this, oe, /* @__PURE__ */ new Map());
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
}, yp = (e, t, n = 0) => {
  var i, o, u;
  const r = (u = (o = (i = e.system) == null ? void 0 : i.attributes) == null ? void 0 : o[t]) == null ? void 0 : u.max;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, kp = (e) => {
  const t = new vp();
  return ze.forEach((r) => {
    const l = r.attribute, i = ee(e, l.stack, 0), o = l.pending ? ee(e, l.pending, 0) : 0;
    t.setState(r.id, { stack: i, pending: o });
  }), new gp({
    id: e.id ?? "",
    name: e.name,
    hp: ee(e, "hp", 0),
    maxHp: yp(e, "hp", 0),
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
}, ds = (e) => {
  const t = {
    "system.attributes.hp.value": e.hp,
    "system.attributes.barrier.value": e.barrier,
    "system.attributes.constitution.value": e.constitution,
    "system.attributes.san.value": e.san
  };
  return ze.forEach((r) => {
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
      combatant: kp(n)
    };
  }
  async saveActor(t) {
    var r;
    const n = t.id ? ((r = game.actors) == null ? void 0 : r.get(t.id)) ?? null : null;
    n && await n.update(ds(t));
  }
  async save(t) {
    await t.actor.update(ds(t.combatant));
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
const Sp = (e, t) => {
  const n = new jc(e, t);
  ze.forEach((l) => {
    var i;
    (i = l.onDealDamage) == null || i.call(l, n.withStatus(l.id));
  });
}, wp = (e, t) => {
  const n = new jc(e, t);
  ze.forEach((l) => {
    var i;
    (i = l.onTakeDamage) == null || i.call(l, n.withStatus(l.id));
  });
}, Ep = (e) => {
  const t = e.statuses.getStack("DamageUp"), n = e.statuses.getStack("DamageDown"), r = e.directcheck;
  return t * 10 - n * 10 + (r ? 50 : 0);
}, Cp = (e, t) => {
  let n = 0, r = !1;
  e.criticalcheck && (n += 20);
  const i = e.statuses.getStack("Poise");
  if (i > 0) {
    const o = Math.min(i * 5, 100);
    t() * 100 < o && (n += 20, r = !0);
  }
  return { special: n, poiseCritical: r };
}, xp = (e) => {
  const t = e.statuses.getStack("Protection"), n = e.statuses.getStack("Vulnerable");
  return t * 10 - n * 10;
}, _p = (e) => {
  const t = e.isPlayer ? e.resist : e.resistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Pp = (e) => {
  const t = e.isPlayer ? e.confResist : e.econfResistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Np = (e, t = {}) => {
  const n = t.random ?? Math.random, r = Ep(e.attacker), { special: l, poiseCritical: i } = Cp(e.attacker, n), o = xp(e.receiver), u = _p(e.receiver), s = Pp(e.receiver), c = (100 + r - o) / 100, m = (100 + l - u) / 100, h = (100 + l - s) / 100, p = e.baseDamage * Math.max(c, 0) * Math.max(m, 0), y = e.baseDamage * Math.max(c, 0) * Math.max(h, 0);
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
}, Tp = (e, t = {}) => {
  const n = e.attacker, r = Np(e, t), l = e.receiver;
  let i = l.hp, o = l.barrier, u = l.constitution, s = l.san, c = l.statuses.getStack("Sink");
  const m = l.doubleConstitution, h = Math.ceil(r.dealDamage), p = Math.ceil(r.dealConfDamage);
  let y = 0, v = 0;
  o > 0 && h > 0 && (y = Math.min(o, h), o -= y);
  const S = Math.max(h - y, 0);
  S > 0 && (i -= S, v = S);
  let D = 0;
  if (p > 0) {
    const w = p * (m ? 2 : 1);
    u = Math.max(u - w, 0), D = w;
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
    confDamageApplied: D,
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
    confDamageApplied: D,
    sanDamageApplied: f,
    barrierAbsorbed: y,
    poiseCritical: r.poiseCritical,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: s
  };
  return Sp(n, g), wp(l, g), { result: d, attacker: n, receiver: l };
}, ct = {
  SECRET: -2,
  HOSTILE: -1,
  NEUTRAL: 0,
  FRIENDLY: 1
}, Dp = (e) => {
  var t, n;
  return ((t = e.find((r) => r.disposition === ct.FRIENDLY)) == null ? void 0 : t.actorId) ?? ((n = e[0]) == null ? void 0 : n.actorId) ?? "";
}, Ip = (e, t) => {
  var n, r;
  return ((n = e.find((l) => l.actorId !== t && l.disposition !== ct.FRIENDLY)) == null ? void 0 : n.actorId) ?? ((r = e.find((l) => l.actorId !== t)) == null ? void 0 : r.actorId) ?? "";
}, zp = (e) => {
  const [t, n] = W.useState(""), [r, l] = W.useState(""), [i, o] = W.useState(""), [u, s] = W.useState(null), [c, m] = W.useState(!1), h = W.useMemo(() => {
    const y = /* @__PURE__ */ new Map();
    return e.forEach((v) => y.set(v.actorId, v)), y;
  }, [e]);
  return W.useEffect(() => {
    if (!e.length) {
      t && n(""), r && l("");
      return;
    }
    const y = new Set(e.map((D) => D.actorId));
    let v = t;
    (!v || !y.has(v)) && (v = Dp(e));
    let S = r;
    (!S || !y.has(S) || S === v) && (S = Ip(e, v)), v !== t && n(v), S !== r && l(S);
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
      var D, f, a, d, g, w;
      const y = Number(i);
      if (!Number.isFinite(y) || y <= 0) {
        (D = ui.notifications) == null || D.error("ダメージに正の数値を入力してください");
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
        const E = new hl(), P = E.loadByActorId(t), N = E.loadByActorId(r);
        if (!P || !N) {
          (d = ui.notifications) == null || d.error("攻撃者または防御者のデータを取得できませんでした");
          return;
        }
        const { result: M, attacker: z, receiver: ye } = Tp({
          attacker: P.combatant,
          receiver: N.combatant,
          baseDamage: y
        });
        await Promise.all([
          E.saveActor(z),
          E.saveActor(ye)
        ]);
        const xt = `
${v.name} → ${S.name}<br/>
基礎ダメージ: ${y}<br/>
HPダメージ: ${M.hpDamageApplied} (バリア吸収: ${M.barrierAbsorbed})<br/>
混乱ダメージ: ${M.confDamageApplied}<br/>
SANダメージ(沈潜): ${M.sanDamageApplied}<br/>
`;
        await ChatMessage.create({
          speaker: ChatMessage.getSpeaker({ actor: P.actor }),
          content: xt
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
}, Rp = (e) => {
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
}, ro = (e) => `${e.name}（${e.actorName}） (${Rp(e.disposition)})`, Lp = [
  { value: "random:ally", label: "ランダム（味方）" },
  { value: "random:enemy", label: "ランダム（敵）" },
  { value: "random:all", label: "ランダム（全体）" }
], rt = (e) => Number.isFinite(e) ? e.toLocaleString() : "-", jp = ({ result: e }) => /* @__PURE__ */ C.jsxs("div", { className: "ponkotu-damage__result", children: [
  /* @__PURE__ */ C.jsxs("div", { children: [
    "通常倍率: 攻撃者 ",
    e.attackerNormalPercentage,
    "% / 防御者",
    " ",
    e.receiverNormalPercentage,
    "% → 係数 ",
    e.normalRatio.toFixed(2)
  ] }),
  /* @__PURE__ */ C.jsxs("div", { children: [
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
  /* @__PURE__ */ C.jsxs("div", { children: [
    "特殊(耐性限界)倍率: 防御者 ",
    e.receiverSpecialConfPercentage,
    "% → 係数",
    " ",
    e.specialConfRatio.toFixed(2)
  ] }),
  /* @__PURE__ */ C.jsxs("div", { children: [
    "HPダメージ: ",
    rt(e.hpDamageApplied),
    " （バリア吸収",
    " ",
    rt(e.barrierAbsorbed),
    "）"
  ] }),
  /* @__PURE__ */ C.jsxs("div", { children: [
    "耐性限界ダメージ: ",
    rt(e.confDamageApplied)
  ] }),
  /* @__PURE__ */ C.jsxs("div", { children: [
    "SANダメージ(沈潜): ",
    rt(e.sanDamageApplied)
  ] }),
  /* @__PURE__ */ C.jsxs("div", { children: [
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
] }), Mp = ({ tokens: e }) => {
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
  } = zp(e);
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ C.jsx("h3", { children: "ダメージ計算" }) }),
    /* @__PURE__ */ C.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ C.jsxs("label", { className: "ponkotu-damage__label", children: [
        "攻撃者",
        /* @__PURE__ */ C.jsxs("select", { value: t, onChange: (m) => o(m.target.value), children: [
          /* @__PURE__ */ C.jsx("option", { value: "", children: "選択してください" }),
          e.map((m) => /* @__PURE__ */ C.jsx("option", { value: m.actorId, children: ro(m) }, m.actorId))
        ] })
      ] }),
      /* @__PURE__ */ C.jsxs("label", { className: "ponkotu-damage__label", children: [
        "防御者",
        /* @__PURE__ */ C.jsxs("select", { value: n, onChange: (m) => u(m.target.value), children: [
          /* @__PURE__ */ C.jsx("option", { value: "", children: "選択してください" }),
          e.map((m) => /* @__PURE__ */ C.jsx("option", { value: m.actorId, children: ro(m) }, m.actorId))
        ] })
      ] })
    ] }),
    /* @__PURE__ */ C.jsxs("label", { className: "ponkotu-damage__label", children: [
      "基礎ダメージ",
      /* @__PURE__ */ C.jsx(
        "input",
        {
          type: "number",
          value: r,
          onChange: (m) => s(m.target.value),
          placeholder: "例: 12"
        }
      )
    ] }),
    /* @__PURE__ */ C.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ C.jsx("button", { onClick: c, disabled: i || e.length < 2, children: i ? "計算中..." : "計算して適用" }),
      e.length < 2 && /* @__PURE__ */ C.jsx("span", { className: "ponkotu-damage__hint", children: "※ トークンが2体以上必要です" })
    ] }),
    l && /* @__PURE__ */ C.jsx(jp, { result: l })
  ] });
};
class ps {
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
class ms {
  static turnStart(t) {
    const n = new ps(t), r = ze;
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
    const n = new ps(t);
    ze.forEach((l) => {
      var i;
      (i = l.onTurnEnd) == null || i.call(l, n.withStatus(l.id));
    }), n.setBarrier(0);
  }
}
const hs = (e) => Array.from(new Set(e.map((t) => t.actorId).filter((t) => t))), Op = (e) => {
  const [t, n] = W.useState(!1), r = async () => {
    var u, s, c;
    const o = hs(e);
    if (!o.length)
      return (u = ui.notifications) == null || u.error("ターン開始処理の対象が見つかりません"), 0;
    try {
      const m = new hl(), h = o.map((p) => m.loadByActorId(p)).filter((p) => !!p);
      return h.length ? (h.forEach((p) => {
        ms.turnStart(p.combatant);
      }), await Promise.all(h.map((p) => m.saveActor(p.combatant))), h.length) : ((s = ui.notifications) == null || s.error("ターン開始処理の対象を取得できませんでした"), 0);
    } catch (m) {
      console.error("[ponkotu-system] turn process failed", m), (c = ui.notifications) == null || c.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  }, l = async () => {
    var u, s, c;
    const o = hs(e);
    if (!o.length)
      return (u = ui.notifications) == null || u.error("ターン終了処理の対象が見つかりません"), 0;
    try {
      const m = new hl(), h = o.map((p) => m.loadByActorId(p)).filter((p) => !!p);
      return h.length ? (h.forEach((p) => {
        ms.turnEnd(p.combatant);
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
}, Fp = ({ tokens: e }) => {
  const { turnRunning: t, runTurnProcess: n } = Op(e);
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ C.jsx("h3", { style: { margin: "8px 0" }, children: "ターン処理" }) }),
    /* @__PURE__ */ C.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ C.jsx("button", { onClick: n, disabled: t || e.length < 1, children: t ? "処理中..." : "ターン処理(終了→開始)" }) })
  ] });
}, Ap = () => {
  const e = Lc();
  return /* @__PURE__ */ C.jsxs("div", { className: "ponkotu-damage", children: [
    /* @__PURE__ */ C.jsx(Mp, { tokens: e }),
    /* @__PURE__ */ C.jsx(Fp, { tokens: e })
  ] });
}, Up = "ponkotu-system";
var Lt;
class Hp extends Application {
  constructor() {
    super(...arguments);
    En(this, Lt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-damage-calc",
      title: "管理者用フォーム",
      template: `modules/${Up}/templates/damage-calc.html`,
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
    Nt(this, Lt, Qn.createRoot(r)), Y(this, Lt).render(/* @__PURE__ */ C.jsx(Ap, {}));
  }
  async close(n) {
    var r;
    return (r = Y(this, Lt)) == null || r.unmount(), Nt(this, Lt, null), super.close(n);
  }
}
Lt = new WeakMap();
const $p = ({ onSubmit: e }) => {
  const [t, n] = W.useState(""), [r, l] = W.useState(""), i = W.useMemo(() => t.trim().length === 0, [t]), o = (u) => {
    u.preventDefault();
    const s = { name: t.trim(), note: r.trim() };
    console.log("[ponkotu-system] SimpleForm submit", s), e == null || e(s), l("");
  };
  return /* @__PURE__ */ C.jsxs("form", { onSubmit: o, className: "ponkotu-form", children: [
    /* @__PURE__ */ C.jsxs("label", { className: "ponkotu-form__label", children: [
      "名前",
      /* @__PURE__ */ C.jsx(
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
    /* @__PURE__ */ C.jsxs("label", { className: "ponkotu-form__label", children: [
      "メモ",
      /* @__PURE__ */ C.jsx(
        "textarea",
        {
          className: "ponkotu-form__textarea",
          value: r,
          placeholder: "送信したいメモ",
          onChange: (u) => l(u.target.value)
        }
      )
    ] }),
    /* @__PURE__ */ C.jsx("div", { className: "ponkotu-form__footer", children: /* @__PURE__ */ C.jsx("button", { type: "submit", disabled: i, children: "送信" }) })
  ] });
}, Bp = () => {
  const e = [];
  return ze.forEach((n) => {
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
}, Vp = "ponkotu-system";
let gs = !1;
var jt;
class Wp extends Application {
  constructor() {
    super(...arguments);
    En(this, jt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-react-form",
      title: "React フォーム",
      template: `modules/${Vp}/templates/react-form.html`,
      width: 420,
      height: 400,
      resizable: !0
    });
  }
  activateListeners(n) {
    var l;
    if (super.activateListeners(n), !gs) {
      const i = Bp();
      if (i.length > 0) {
        gs = !0;
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
    Nt(this, jt, Qn.createRoot(r)), Y(this, jt).render(
      /* @__PURE__ */ C.jsx(
        $p,
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
    return (r = Y(this, jt)) == null || r.unmount(), Nt(this, jt, null), super.close(n);
  }
}
jt = new WeakMap();
const Qp = (e) => Number.isInteger(e) && e >= 1, Kp = async (e, t) => {
  if (!t.actorId)
    throw new Error("actorId is required");
  if (!Qp(t.stackDelta))
    throw new Error("stackDelta must be a positive integer");
  const n = t.target ?? "stack", r = ze.find((s) => s.id === t.statusId);
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
}, Yp = ze.map((e) => e.id), Xp = () => Yp[0] ?? "Burned", ci = (e) => e === "random:ally" || e === "random:enemy" || e === "random:all", Gp = (e, t) => e === "random:all" ? t : e === "random:ally" ? t.filter((n) => n.disposition === ct.FRIENDLY) : t.filter((n) => n.disposition !== ct.FRIENDLY), Zp = (e) => {
  const [t, n] = W.useState(""), [r, l] = W.useState(Xp), [i, o] = W.useState("stack"), [u, s] = W.useState("1"), [c, m] = W.useState(!1), h = ze.find(
    (v) => v.id === r
  ), p = !!(h && "pending" in h.attribute && h.attribute.pending);
  return W.useEffect(() => {
    var S;
    if (!e.length) {
      t && !ci(t) && n("");
      return;
    }
    const v = new Set(e.map((D) => D.actorId));
    (!t || !ci(t) && !v.has(t)) && n(((S = e[0]) == null ? void 0 : S.actorId) ?? "");
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
      var D, f, a, d, g;
      if (c) return;
      const v = Number(u);
      if (!Number.isInteger(v) || v < 1) {
        (D = ui.notifications) == null || D.error("スタック数には1以上の整数を入力してください");
        return;
      }
      let S;
      if (ci(t)) {
        const w = Gp(t, e);
        if (w.length === 0) {
          (f = ui.notifications) == null || f.error("ランダム対象の候補が0件です。対象を選び直してください。");
          return;
        }
        S = w[Math.floor(Math.random() * w.length)].actorId;
      } else
        S = t;
      if (!S) {
        (a = ui.notifications) == null || a.error("状態異常を付与する対象を選択してください");
        return;
      }
      try {
        m(!0);
        const w = new hl(), E = await Kp(w, {
          actorId: S,
          statusId: r,
          stackDelta: v,
          target: i
        }), P = E.target === "pending" ? "next" : "現在";
        (d = ui.notifications) == null || d.info(
          `${E.actorName} に ${E.statusId}(${P}) を ${v} 付与しました (${E.before}→${E.after})`
        );
      } catch (w) {
        console.error("[ponkotu-system] apply status failed", w), (g = ui.notifications) == null || g.error("状態異常の付与に失敗しました。コンソールを確認してください。");
      } finally {
        m(!1);
      }
    }
  };
}, Jp = ({ tokens: e }) => {
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
  } = Zp(e);
  return /* @__PURE__ */ C.jsxs(C.Fragment, { children: [
    /* @__PURE__ */ C.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ C.jsx("h3", { style: { margin: "8px 0" }, children: "状態異常付与" }) }),
    /* @__PURE__ */ C.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ C.jsxs("label", { className: "ponkotu-damage__label", children: [
        "対象キャラ",
        /* @__PURE__ */ C.jsxs(
          "select",
          {
            value: t,
            onChange: (p) => u(p.target.value),
            children: [
              /* @__PURE__ */ C.jsx("option", { value: "", children: "選択してください" }),
              e.map((p) => /* @__PURE__ */ C.jsx("option", { value: p.actorId, children: ro(p) }, `status-target-${p.actorId}`)),
              /* @__PURE__ */ C.jsx("optgroup", { label: "ランダム", children: Lp.map((p) => /* @__PURE__ */ C.jsx("option", { value: p.value, children: p.label }, p.value)) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ C.jsxs("label", { className: "ponkotu-damage__label", children: [
        "状態異常",
        /* @__PURE__ */ C.jsx(
          "select",
          {
            value: n,
            onChange: (p) => s(p.target.value),
            children: ze.map((p) => /* @__PURE__ */ C.jsx("option", { value: p.id, children: p.name }, p.id))
          }
        )
      ] }),
      /* @__PURE__ */ C.jsxs("label", { className: "ponkotu-damage__label", children: [
        "付与先",
        /* @__PURE__ */ C.jsxs(
          "select",
          {
            value: r,
            onChange: (p) => c(p.target.value),
            children: [
              /* @__PURE__ */ C.jsx("option", { value: "stack", children: "現在" }),
              /* @__PURE__ */ C.jsx("option", { value: "pending", disabled: !l, children: "次ターン(next)" })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ C.jsxs("label", { className: "ponkotu-damage__label", children: [
      "スタック数",
      /* @__PURE__ */ C.jsx(
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
    /* @__PURE__ */ C.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ C.jsx("button", { onClick: h, disabled: o || e.length < 1, children: o ? "付与中..." : "状態異常を付与" }) })
  ] });
}, qp = () => {
  const e = Lc();
  return /* @__PURE__ */ C.jsx("div", { className: "ponkotu-damage", children: /* @__PURE__ */ C.jsx(Jp, { tokens: e }) });
}, bp = "ponkotu-system";
var Mt;
class em extends Application {
  constructor() {
    super(...arguments);
    En(this, Mt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      id: "ponkotu-status-apply",
      title: "状態異常付与フォーム",
      template: `modules/${bp}/templates/status-apply.html`,
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
    Nt(this, Mt, Qn.createRoot(r)), Y(this, Mt).render(/* @__PURE__ */ C.jsx(qp, {}));
  }
  async close(n) {
    var r;
    return (r = Y(this, Mt)) == null || r.unmount(), Nt(this, Mt, null), super.close(n);
  }
}
Mt = new WeakMap();
const lo = "ponkotu-system", Mn = (...e) => console.log(`[${lo}]`, ...e), Mc = () => new Wp().render(!0), Oc = () => new Hp().render(!0), Fc = () => new em().render(!0), vs = () => {
  var n;
  const e = (n = game.modules) == null ? void 0 : n.get(lo);
  if (!e) {
    console.warn(`[${lo}] game.modules からモジュールを取得できませんでした`);
    return;
  }
  const t = e;
  t.api || (t.api = {}), t.api.showReactForm = Mc, t.api.showDamageCalc = Oc, t.api.showStatusApply = Fc, Mn("API を登録しました", t.api);
}, tm = () => {
  Mn("ES module loaded"), Hooks.once("ready", () => {
    Mn("Hooks.once ready fired"), vs(), globalThis.ponkotuSystem = { showReactForm: Mc, showDamageCalc: Oc, showStatusApply: Fc }, Mn("React フォーム API を初期化しました");
  }), Hooks.once("init", () => {
    Mn("Hooks.once init fired"), vs();
  });
};
tm();
export {
  Oc as showDamageCalc,
  Mc as showReactForm,
  Fc as showStatusApply
};
