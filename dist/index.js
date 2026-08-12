var au = (e) => {
  throw TypeError(e);
};
var su = (e, t, n) => t.has(e) || au("Cannot " + n);
var X = (e, t, n) => (su(e, t, "read from private field"), n ? n.call(e) : t.get(e)), Tn = (e, t, n) => t.has(e) ? au("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), Nt = (e, t, n, r) => (su(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
var Ta = { exports: {} }, Nl = {}, Da = { exports: {} }, z = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mr = Symbol.for("react.element"), qc = Symbol.for("react.portal"), bc = Symbol.for("react.fragment"), ef = Symbol.for("react.strict_mode"), tf = Symbol.for("react.profiler"), nf = Symbol.for("react.provider"), rf = Symbol.for("react.context"), lf = Symbol.for("react.forward_ref"), of = Symbol.for("react.suspense"), uf = Symbol.for("react.memo"), af = Symbol.for("react.lazy"), cu = Symbol.iterator;
function sf(e) {
  return e === null || typeof e != "object" ? null : (e = cu && e[cu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Ra = { isMounted: function() {
  return !1;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, ja = Object.assign, Aa = {};
function Cn(e, t, n) {
  this.props = e, this.context = t, this.refs = Aa, this.updater = n || Ra;
}
Cn.prototype.isReactComponent = {};
Cn.prototype.setState = function(e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, e, t, "setState");
};
Cn.prototype.forceUpdate = function(e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function za() {
}
za.prototype = Cn.prototype;
function fo(e, t, n) {
  this.props = e, this.context = t, this.refs = Aa, this.updater = n || Ra;
}
var po = fo.prototype = new za();
po.constructor = fo;
ja(po, Cn.prototype);
po.isPureReactComponent = !0;
var fu = Array.isArray, La = Object.prototype.hasOwnProperty, mo = { current: null }, Ma = { key: !0, ref: !0, __self: !0, __source: !0 };
function Ia(e, t, n) {
  var r, l = {}, i = null, o = null;
  if (t != null) for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (i = "" + t.key), t) La.call(t, r) && !Ma.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var a = Array(u), c = 0; c < u; c++) a[c] = arguments[c + 2];
    l.children = a;
  }
  if (e && e.defaultProps) for (r in u = e.defaultProps, u) l[r] === void 0 && (l[r] = u[r]);
  return { $$typeof: mr, type: e, key: i, ref: o, props: l, _owner: mo.current };
}
function cf(e, t) {
  return { $$typeof: mr, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function ho(e) {
  return typeof e == "object" && e !== null && e.$$typeof === mr;
}
function ff(e) {
  var t = { "=": "=0", ":": "=2" };
  return "$" + e.replace(/[=:]/g, function(n) {
    return t[n];
  });
}
var du = /\/+/g;
function Bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null ? ff("" + e.key) : t.toString(36);
}
function Wr(e, t, n, r, l) {
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
        case mr:
        case qc:
          o = !0;
      }
  }
  if (o) return o = e, l = l(o), e = r === "" ? "." + Bl(o, 0) : r, fu(l) ? (n = "", e != null && (n = e.replace(du, "$&/") + "/"), Wr(l, t, n, "", function(c) {
    return c;
  })) : l != null && (ho(l) && (l = cf(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(du, "$&/") + "/") + e)), t.push(l)), 1;
  if (o = 0, r = r === "" ? "." : r + ":", fu(e)) for (var u = 0; u < e.length; u++) {
    i = e[u];
    var a = r + Bl(i, u);
    o += Wr(i, t, n, a, l);
  }
  else if (a = sf(e), typeof a == "function") for (e = a.call(e), u = 0; !(i = e.next()).done; ) i = i.value, a = r + Bl(i, u++), o += Wr(i, t, n, a, l);
  else if (i === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
  return o;
}
function wr(e, t, n) {
  if (e == null) return e;
  var r = [], l = 0;
  return Wr(e, r, "", "", function(i) {
    return t.call(n, i, l++);
  }), r;
}
function df(e) {
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
var pe = { current: null }, Br = { transition: null }, pf = { ReactCurrentDispatcher: pe, ReactCurrentBatchConfig: Br, ReactCurrentOwner: mo };
function Oa() {
  throw Error("act(...) is not supported in production builds of React.");
}
z.Children = { map: wr, forEach: function(e, t, n) {
  wr(e, function() {
    t.apply(this, arguments);
  }, n);
}, count: function(e) {
  var t = 0;
  return wr(e, function() {
    t++;
  }), t;
}, toArray: function(e) {
  return wr(e, function(t) {
    return t;
  }) || [];
}, only: function(e) {
  if (!ho(e)) throw Error("React.Children.only expected to receive a single React element child.");
  return e;
} };
z.Component = Cn;
z.Fragment = bc;
z.Profiler = tf;
z.PureComponent = fo;
z.StrictMode = ef;
z.Suspense = of;
z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = pf;
z.act = Oa;
z.cloneElement = function(e, t, n) {
  if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
  var r = ja({}, e.props), l = e.key, i = e.ref, o = e._owner;
  if (t != null) {
    if (t.ref !== void 0 && (i = t.ref, o = mo.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
    for (a in t) La.call(t, a) && !Ma.hasOwnProperty(a) && (r[a] = t[a] === void 0 && u !== void 0 ? u[a] : t[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) r.children = n;
  else if (1 < a) {
    u = Array(a);
    for (var c = 0; c < a; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return { $$typeof: mr, type: e.type, key: l, ref: i, props: r, _owner: o };
};
z.createContext = function(e) {
  return e = { $$typeof: rf, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: nf, _context: e }, e.Consumer = e;
};
z.createElement = Ia;
z.createFactory = function(e) {
  var t = Ia.bind(null, e);
  return t.type = e, t;
};
z.createRef = function() {
  return { current: null };
};
z.forwardRef = function(e) {
  return { $$typeof: lf, render: e };
};
z.isValidElement = ho;
z.lazy = function(e) {
  return { $$typeof: af, _payload: { _status: -1, _result: e }, _init: df };
};
z.memo = function(e, t) {
  return { $$typeof: uf, type: e, compare: t === void 0 ? null : t };
};
z.startTransition = function(e) {
  var t = Br.transition;
  Br.transition = {};
  try {
    e();
  } finally {
    Br.transition = t;
  }
};
z.unstable_act = Oa;
z.useCallback = function(e, t) {
  return pe.current.useCallback(e, t);
};
z.useContext = function(e) {
  return pe.current.useContext(e);
};
z.useDebugValue = function() {
};
z.useDeferredValue = function(e) {
  return pe.current.useDeferredValue(e);
};
z.useEffect = function(e, t) {
  return pe.current.useEffect(e, t);
};
z.useId = function() {
  return pe.current.useId();
};
z.useImperativeHandle = function(e, t, n) {
  return pe.current.useImperativeHandle(e, t, n);
};
z.useInsertionEffect = function(e, t) {
  return pe.current.useInsertionEffect(e, t);
};
z.useLayoutEffect = function(e, t) {
  return pe.current.useLayoutEffect(e, t);
};
z.useMemo = function(e, t) {
  return pe.current.useMemo(e, t);
};
z.useReducer = function(e, t, n) {
  return pe.current.useReducer(e, t, n);
};
z.useRef = function(e) {
  return pe.current.useRef(e);
};
z.useState = function(e) {
  return pe.current.useState(e);
};
z.useSyncExternalStore = function(e, t, n) {
  return pe.current.useSyncExternalStore(e, t, n);
};
z.useTransition = function() {
  return pe.current.useTransition();
};
z.version = "18.3.1";
Da.exports = z;
var L = Da.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mf = L, hf = Symbol.for("react.element"), gf = Symbol.for("react.fragment"), vf = Object.prototype.hasOwnProperty, yf = mf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, kf = { key: !0, ref: !0, __self: !0, __source: !0 };
function Fa(e, t, n) {
  var r, l = {}, i = null, o = null;
  n !== void 0 && (i = "" + n), t.key !== void 0 && (i = "" + t.key), t.ref !== void 0 && (o = t.ref);
  for (r in t) vf.call(t, r) && !kf.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps) for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
  return { $$typeof: hf, type: e, key: i, ref: o, props: l, _owner: yf.current };
}
Nl.Fragment = gf;
Nl.jsx = Fa;
Nl.jsxs = Fa;
Ta.exports = Nl;
var g = Ta.exports, Zn = {}, $a = { exports: {} }, _e = {}, Ua = { exports: {} }, Ha = {};
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
  function t(_, R) {
    var A = _.length;
    _.push(R);
    e: for (; 0 < A; ) {
      var $ = A - 1 >>> 1, Y = _[$];
      if (0 < l(Y, R)) _[$] = R, _[A] = Y, A = $;
      else break e;
    }
  }
  function n(_) {
    return _.length === 0 ? null : _[0];
  }
  function r(_) {
    if (_.length === 0) return null;
    var R = _[0], A = _.pop();
    if (A !== R) {
      _[0] = A;
      e: for (var $ = 0, Y = _.length, Gt = Y >>> 1; $ < Gt; ) {
        var Ke = 2 * ($ + 1) - 1, J = _[Ke], Ye = Ke + 1, Xt = _[Ye];
        if (0 > l(J, A)) Ye < Y && 0 > l(Xt, J) ? (_[$] = Xt, _[Ye] = A, $ = Ye) : (_[$] = J, _[Ke] = A, $ = Ke);
        else if (Ye < Y && 0 > l(Xt, A)) _[$] = Xt, _[Ye] = A, $ = Ye;
        else break e;
      }
    }
    return R;
  }
  function l(_, R) {
    var A = _.sortIndex - R.sortIndex;
    return A !== 0 ? A : _.id - R.id;
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
  var a = [], c = [], h = 1, m = null, p = 3, k = !1, w = !1, x = !1, j = typeof setTimeout == "function" ? setTimeout : null, f = typeof clearTimeout == "function" ? clearTimeout : null, s = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(_) {
    for (var R = n(c); R !== null; ) {
      if (R.callback === null) r(c);
      else if (R.startTime <= _) r(c), R.sortIndex = R.expirationTime, t(a, R);
      else break;
      R = n(c);
    }
  }
  function v(_) {
    if (x = !1, d(_), !w) if (n(a) !== null) w = !0, Kt(y);
    else {
      var R = n(c);
      R !== null && Yt(v, R.startTime - _);
    }
  }
  function y(_, R) {
    w = !1, x && (x = !1, f(T), T = -1), k = !0;
    var A = p;
    try {
      for (d(R), m = n(a); m !== null && (!(m.expirationTime > R) || _ && !O()); ) {
        var $ = m.callback;
        if (typeof $ == "function") {
          m.callback = null, p = m.priorityLevel;
          var Y = $(m.expirationTime <= R);
          R = e.unstable_now(), typeof Y == "function" ? m.callback = Y : m === n(a) && r(a), d(R);
        } else r(a);
        m = n(a);
      }
      if (m !== null) var Gt = !0;
      else {
        var Ke = n(c);
        Ke !== null && Yt(v, Ke.startTime - R), Gt = !1;
      }
      return Gt;
    } finally {
      m = null, p = A, k = !1;
    }
  }
  var P = !1, C = null, T = -1, D = 5, S = -1;
  function O() {
    return !(e.unstable_now() - S < D);
  }
  function Ue() {
    if (C !== null) {
      var _ = e.unstable_now();
      S = _;
      var R = !0;
      try {
        R = C(!0, _);
      } finally {
        R ? it() : (P = !1, C = null);
      }
    } else P = !1;
  }
  var it;
  if (typeof s == "function") it = function() {
    s(Ue);
  };
  else if (typeof MessageChannel < "u") {
    var Nn = new MessageChannel(), kr = Nn.port2;
    Nn.port1.onmessage = Ue, it = function() {
      kr.postMessage(null);
    };
  } else it = function() {
    j(Ue, 0);
  };
  function Kt(_) {
    C = _, P || (P = !0, it());
  }
  function Yt(_, R) {
    T = j(function() {
      _(e.unstable_now());
    }, R);
  }
  e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(_) {
    _.callback = null;
  }, e.unstable_continueExecution = function() {
    w || k || (w = !0, Kt(y));
  }, e.unstable_forceFrameRate = function(_) {
    0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : D = 0 < _ ? Math.floor(1e3 / _) : 5;
  }, e.unstable_getCurrentPriorityLevel = function() {
    return p;
  }, e.unstable_getFirstCallbackNode = function() {
    return n(a);
  }, e.unstable_next = function(_) {
    switch (p) {
      case 1:
      case 2:
      case 3:
        var R = 3;
        break;
      default:
        R = p;
    }
    var A = p;
    p = R;
    try {
      return _();
    } finally {
      p = A;
    }
  }, e.unstable_pauseExecution = function() {
  }, e.unstable_requestPaint = function() {
  }, e.unstable_runWithPriority = function(_, R) {
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
    var A = p;
    p = _;
    try {
      return R();
    } finally {
      p = A;
    }
  }, e.unstable_scheduleCallback = function(_, R, A) {
    var $ = e.unstable_now();
    switch (typeof A == "object" && A !== null ? (A = A.delay, A = typeof A == "number" && 0 < A ? $ + A : $) : A = $, _) {
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
    return Y = A + Y, _ = { id: h++, callback: R, priorityLevel: _, startTime: A, expirationTime: Y, sortIndex: -1 }, A > $ ? (_.sortIndex = A, t(c, _), n(a) === null && _ === n(c) && (x ? (f(T), T = -1) : x = !0, Yt(v, A - $))) : (_.sortIndex = Y, t(a, _), w || k || (w = !0, Kt(y))), _;
  }, e.unstable_shouldYield = O, e.unstable_wrapCallback = function(_) {
    var R = p;
    return function() {
      var A = p;
      p = R;
      try {
        return _.apply(this, arguments);
      } finally {
        p = A;
      }
    };
  };
})(Ha);
Ua.exports = Ha;
var Sf = Ua.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wf = L, Ce = Sf;
function E(e) {
  for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
  return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var Wa = /* @__PURE__ */ new Set(), Jn = {};
function Vt(e, t) {
  gn(e, t), gn(e + "Capture", t);
}
function gn(e, t) {
  for (Jn[e] = t, e = 0; e < t.length; e++) Wa.add(t[e]);
}
var et = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), vi = Object.prototype.hasOwnProperty, Ef = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, pu = {}, mu = {};
function xf(e) {
  return vi.call(mu, e) ? !0 : vi.call(pu, e) ? !1 : Ef.test(e) ? mu[e] = !0 : (pu[e] = !0, !1);
}
function Cf(e, t, n, r) {
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
function _f(e, t, n, r) {
  if (t === null || typeof t > "u" || Cf(e, t, n, r)) return !0;
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
function me(e, t, n, r, l, i, o) {
  this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = i, this.removeEmptyString = o;
}
var ie = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
  ie[e] = new me(e, 0, !1, e, null, !1, !1);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
  var t = e[0];
  ie[t] = new me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
  ie[e] = new me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
  ie[e] = new me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
  ie[e] = new me(e, 3, !1, e.toLowerCase(), null, !1, !1);
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
  ie[e] = new me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function(e) {
  ie[e] = new me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function(e) {
  ie[e] = new me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function(e) {
  ie[e] = new me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var go = /[\-:]([a-z])/g;
function vo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
  var t = e.replace(
    go,
    vo
  );
  ie[t] = new me(t, 1, !1, e, null, !1, !1);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
  var t = e.replace(go, vo);
  ie[t] = new me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
  var t = e.replace(go, vo);
  ie[t] = new me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function(e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ie.xlinkHref = new me("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
  ie[e] = new me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function yo(e, t, n, r) {
  var l = ie.hasOwnProperty(t) ? ie[t] : null;
  (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (_f(t, n, l, r) && (n = null), r || l === null ? xf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var lt = wf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Er = Symbol.for("react.element"), Jt = Symbol.for("react.portal"), qt = Symbol.for("react.fragment"), ko = Symbol.for("react.strict_mode"), yi = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Va = Symbol.for("react.context"), So = Symbol.for("react.forward_ref"), ki = Symbol.for("react.suspense"), Si = Symbol.for("react.suspense_list"), wo = Symbol.for("react.memo"), at = Symbol.for("react.lazy"), Qa = Symbol.for("react.offscreen"), hu = Symbol.iterator;
function Dn(e) {
  return e === null || typeof e != "object" ? null : (e = hu && e[hu] || e["@@iterator"], typeof e == "function" ? e : null);
}
var Q = Object.assign, Vl;
function On(e) {
  if (Vl === void 0) try {
    throw Error();
  } catch (n) {
    var t = n.stack.trim().match(/\n( *(at )?)/);
    Vl = t && t[1] || "";
  }
  return `
` + Vl + e;
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
              var a = `
` + l[o].replace(" at new ", " at ");
              return e.displayName && a.includes("<anonymous>") && (a = a.replace("<anonymous>", e.displayName)), a;
            }
          while (1 <= o && 0 <= u);
        break;
      }
    }
  } finally {
    Ql = !1, Error.prepareStackTrace = n;
  }
  return (e = e ? e.displayName || e.name : "") ? On(e) : "";
}
function Pf(e) {
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
    case qt:
      return "Fragment";
    case Jt:
      return "Portal";
    case yi:
      return "Profiler";
    case ko:
      return "StrictMode";
    case ki:
      return "Suspense";
    case Si:
      return "SuspenseList";
  }
  if (typeof e == "object") switch (e.$$typeof) {
    case Va:
      return (e.displayName || "Context") + ".Consumer";
    case Ba:
      return (e._context.displayName || "Context") + ".Provider";
    case So:
      var t = e.render;
      return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
    case wo:
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
function Nf(e) {
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
      return t === ko ? "StrictMode" : "Mode";
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
function Ka(e) {
  var t = e.type;
  return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function Tf(e) {
  var t = Ka(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
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
function xr(e) {
  e._valueTracker || (e._valueTracker = Tf(e));
}
function Ya(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(), r = "";
  return e && (r = Ka(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
}
function el(e) {
  if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Ei(e, t) {
  var n = t.checked;
  return Q({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
}
function gu(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
  n = Et(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
}
function Ga(e, t) {
  t = t.checked, t != null && yo(e, "checked", t, !1);
}
function xi(e, t) {
  Ga(e, t);
  var n = Et(t.value), r = t.type;
  if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value") ? Ci(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ci(e, t.type, Et(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function vu(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
    t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
  }
  n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
}
function Ci(e, t, n) {
  (t !== "number" || el(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Fn = Array.isArray;
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
  if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
  return Q({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function yu(e, t) {
  var n = t.value;
  if (n == null) {
    if (n = t.children, t = t.defaultValue, n != null) {
      if (t != null) throw Error(E(92));
      if (Fn(n)) {
        if (1 < n.length) throw Error(E(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), n = t;
  }
  e._wrapperState = { initialValue: Et(n) };
}
function Xa(e, t) {
  var n = Et(t.value), r = Et(t.defaultValue);
  n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
}
function ku(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Za(e) {
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
  return e == null || e === "http://www.w3.org/1999/xhtml" ? Za(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
}
var Cr, Ja = function(e) {
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
function qn(e, t) {
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
}, Df = ["Webkit", "ms", "Moz", "O"];
Object.keys(Hn).forEach(function(e) {
  Df.forEach(function(t) {
    t = t + e.charAt(0).toUpperCase() + e.substring(1), Hn[t] = Hn[e];
  });
});
function qa(e, t, n) {
  return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Hn.hasOwnProperty(e) && Hn[e] ? ("" + t).trim() : t + "px";
}
function ba(e, t) {
  e = e.style;
  for (var n in t) if (t.hasOwnProperty(n)) {
    var r = n.indexOf("--") === 0, l = qa(n, t[n], r);
    n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
  }
}
var Rf = Q({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function Ni(e, t) {
  if (t) {
    if (Rf[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(E(60));
      if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(E(62));
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
function Eo(e) {
  return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
}
var Ri = null, fn = null, dn = null;
function Su(e) {
  if (e = vr(e)) {
    if (typeof Ri != "function") throw Error(E(280));
    var t = e.stateNode;
    t && (t = Al(t), Ri(e.stateNode, e.type, t));
  }
}
function es(e) {
  fn ? dn ? dn.push(e) : dn = [e] : fn = e;
}
function ts() {
  if (fn) {
    var e = fn, t = dn;
    if (dn = fn = null, Su(e), t) for (e = 0; e < t.length; e++) Su(t[e]);
  }
}
function ns(e, t) {
  return e(t);
}
function rs() {
}
var Yl = !1;
function ls(e, t, n) {
  if (Yl) return e(t, n);
  Yl = !0;
  try {
    return ns(e, t, n);
  } finally {
    Yl = !1, (fn !== null || dn !== null) && (rs(), ts());
  }
}
function bn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Al(n);
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
  if (n && typeof n != "function") throw Error(E(231, t, typeof n));
  return n;
}
var ji = !1;
if (et) try {
  var Rn = {};
  Object.defineProperty(Rn, "passive", { get: function() {
    ji = !0;
  } }), window.addEventListener("test", Rn, Rn), window.removeEventListener("test", Rn, Rn);
} catch {
  ji = !1;
}
function jf(e, t, n, r, l, i, o, u, a) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Wn = !1, tl = null, nl = !1, Ai = null, Af = { onError: function(e) {
  Wn = !0, tl = e;
} };
function zf(e, t, n, r, l, i, o, u, a) {
  Wn = !1, tl = null, jf.apply(Af, arguments);
}
function Lf(e, t, n, r, l, i, o, u, a) {
  if (zf.apply(this, arguments), Wn) {
    if (Wn) {
      var c = tl;
      Wn = !1, tl = null;
    } else throw Error(E(198));
    nl || (nl = !0, Ai = c);
  }
}
function Qt(e) {
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
function is(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
  }
  return null;
}
function wu(e) {
  if (Qt(e) !== e) throw Error(E(188));
}
function Mf(e) {
  var t = e.alternate;
  if (!t) {
    if (t = Qt(e), t === null) throw Error(E(188));
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
        if (i === n) return wu(l), e;
        if (i === r) return wu(l), t;
        i = i.sibling;
      }
      throw Error(E(188));
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
        if (!o) throw Error(E(189));
      }
    }
    if (n.alternate !== r) throw Error(E(190));
  }
  if (n.tag !== 3) throw Error(E(188));
  return n.stateNode.current === n ? e : t;
}
function os(e) {
  return e = Mf(e), e !== null ? us(e) : null;
}
function us(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = us(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var as = Ce.unstable_scheduleCallback, Eu = Ce.unstable_cancelCallback, If = Ce.unstable_shouldYield, Of = Ce.unstable_requestPaint, G = Ce.unstable_now, Ff = Ce.unstable_getCurrentPriorityLevel, xo = Ce.unstable_ImmediatePriority, ss = Ce.unstable_UserBlockingPriority, rl = Ce.unstable_NormalPriority, $f = Ce.unstable_LowPriority, cs = Ce.unstable_IdlePriority, Tl = null, Ve = null;
function Uf(e) {
  if (Ve && typeof Ve.onCommitFiberRoot == "function") try {
    Ve.onCommitFiberRoot(Tl, e, void 0, (e.current.flags & 128) === 128);
  } catch {
  }
}
var Oe = Math.clz32 ? Math.clz32 : Bf, Hf = Math.log, Wf = Math.LN2;
function Bf(e) {
  return e >>>= 0, e === 0 ? 32 : 31 - (Hf(e) / Wf | 0) | 0;
}
var _r = 64, Pr = 4194304;
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
function ll(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0, l = e.suspendedLanes, i = e.pingedLanes, o = n & 268435455;
  if (o !== 0) {
    var u = o & ~l;
    u !== 0 ? r = $n(u) : (i &= o, i !== 0 && (r = $n(i)));
  } else o = n & ~l, o !== 0 ? r = $n(o) : i !== 0 && (r = $n(i));
  if (r === 0) return 0;
  if (t !== 0 && t !== r && !(t & l) && (l = r & -r, i = t & -t, l >= i || l === 16 && (i & 4194240) !== 0)) return t;
  if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - Oe(t), l = 1 << n, r |= e[n], t &= ~l;
  return r;
}
function Vf(e, t) {
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
function Qf(e, t) {
  for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
    var o = 31 - Oe(i), u = 1 << o, a = l[o];
    a === -1 ? (!(u & n) || u & r) && (l[o] = Vf(u, t)) : a <= t && (e.expiredLanes |= u), i &= ~u;
  }
}
function zi(e) {
  return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function fs() {
  var e = _r;
  return _r <<= 1, !(_r & 4194240) && (_r = 64), e;
}
function Gl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function hr(e, t, n) {
  e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - Oe(t), e[t] = n;
}
function Kf(e, t) {
  var n = e.pendingLanes & ~t;
  e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Oe(n), i = 1 << l;
    t[l] = 0, r[l] = -1, e[l] = -1, n &= ~i;
  }
}
function Co(e, t) {
  var n = e.entangledLanes |= t;
  for (e = e.entanglements; n; ) {
    var r = 31 - Oe(n), l = 1 << r;
    l & t | e[r] & t && (e[r] |= t), n &= ~l;
  }
}
var I = 0;
function ds(e) {
  return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
}
var ps, _o, ms, hs, gs, Li = !1, Nr = [], mt = null, ht = null, gt = null, er = /* @__PURE__ */ new Map(), tr = /* @__PURE__ */ new Map(), ct = [], Yf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function xu(e, t) {
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
      er.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      tr.delete(t.pointerId);
  }
}
function jn(e, t, n, r, l, i) {
  return e === null || e.nativeEvent !== i ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: i, targetContainers: [l] }, t !== null && (t = vr(t), t !== null && _o(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
}
function Gf(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return mt = jn(mt, e, t, n, r, l), !0;
    case "dragenter":
      return ht = jn(ht, e, t, n, r, l), !0;
    case "mouseover":
      return gt = jn(gt, e, t, n, r, l), !0;
    case "pointerover":
      var i = l.pointerId;
      return er.set(i, jn(er.get(i) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return i = l.pointerId, tr.set(i, jn(tr.get(i) || null, e, t, n, r, l)), !0;
  }
  return !1;
}
function vs(e) {
  var t = jt(e.target);
  if (t !== null) {
    var n = Qt(t);
    if (n !== null) {
      if (t = n.tag, t === 13) {
        if (t = is(n), t !== null) {
          e.blockedOn = t, gs(e.priority, function() {
            ms(n);
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
    } else return t = vr(n), t !== null && _o(t), e.blockedOn = n, !1;
    t.shift();
  }
  return !0;
}
function Cu(e, t, n) {
  Vr(e) && n.delete(t);
}
function Xf() {
  Li = !1, mt !== null && Vr(mt) && (mt = null), ht !== null && Vr(ht) && (ht = null), gt !== null && Vr(gt) && (gt = null), er.forEach(Cu), tr.forEach(Cu);
}
function An(e, t) {
  e.blockedOn === t && (e.blockedOn = null, Li || (Li = !0, Ce.unstable_scheduleCallback(Ce.unstable_NormalPriority, Xf)));
}
function nr(e) {
  function t(l) {
    return An(l, e);
  }
  if (0 < Nr.length) {
    An(Nr[0], e);
    for (var n = 1; n < Nr.length; n++) {
      var r = Nr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (mt !== null && An(mt, e), ht !== null && An(ht, e), gt !== null && An(gt, e), er.forEach(t), tr.forEach(t), n = 0; n < ct.length; n++) r = ct[n], r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < ct.length && (n = ct[0], n.blockedOn === null); ) vs(n), n.blockedOn === null && ct.shift();
}
var pn = lt.ReactCurrentBatchConfig, il = !0;
function Zf(e, t, n, r) {
  var l = I, i = pn.transition;
  pn.transition = null;
  try {
    I = 1, Po(e, t, n, r);
  } finally {
    I = l, pn.transition = i;
  }
}
function Jf(e, t, n, r) {
  var l = I, i = pn.transition;
  pn.transition = null;
  try {
    I = 4, Po(e, t, n, r);
  } finally {
    I = l, pn.transition = i;
  }
}
function Po(e, t, n, r) {
  if (il) {
    var l = Mi(e, t, n, r);
    if (l === null) li(e, t, r, ol, n), xu(e, r);
    else if (Gf(l, e, t, n, r)) r.stopPropagation();
    else if (xu(e, r), t & 4 && -1 < Yf.indexOf(e)) {
      for (; l !== null; ) {
        var i = vr(l);
        if (i !== null && ps(i), i = Mi(e, t, n, r), i === null && li(e, t, r, ol, n), i === l) break;
        l = i;
      }
      l !== null && r.stopPropagation();
    } else li(e, t, r, null, n);
  }
}
var ol = null;
function Mi(e, t, n, r) {
  if (ol = null, e = Eo(r), e = jt(e), e !== null) if (t = Qt(e), t === null) e = null;
  else if (n = t.tag, n === 13) {
    if (e = is(t), e !== null) return e;
    e = null;
  } else if (n === 3) {
    if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
    e = null;
  } else t !== e && (e = null);
  return ol = e, null;
}
function ys(e) {
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
      switch (Ff()) {
        case xo:
          return 1;
        case ss:
          return 4;
        case rl:
        case $f:
          return 16;
        case cs:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var dt = null, No = null, Qr = null;
function ks() {
  if (Qr) return Qr;
  var e, t = No, n = t.length, r, l = "value" in dt ? dt.value : dt.textContent, i = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++) ;
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === l[i - r]; r++) ;
  return Qr = l.slice(e, 1 < r ? 1 - r : void 0);
}
function Kr(e) {
  var t = e.keyCode;
  return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
}
function Tr() {
  return !0;
}
function _u() {
  return !1;
}
function Pe(e) {
  function t(n, r, l, i, o) {
    this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = i, this.target = o, this.currentTarget = null;
    for (var u in e) e.hasOwnProperty(u) && (n = e[u], this[u] = n ? n(i) : i[u]);
    return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Tr : _u, this.isPropagationStopped = _u, this;
  }
  return Q(t.prototype, { preventDefault: function() {
    this.defaultPrevented = !0;
    var n = this.nativeEvent;
    n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Tr);
  }, stopPropagation: function() {
    var n = this.nativeEvent;
    n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Tr);
  }, persist: function() {
  }, isPersistent: Tr }), t;
}
var _n = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
  return e.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, To = Pe(_n), gr = Q({}, _n, { view: 0, detail: 0 }), qf = Pe(gr), Xl, Zl, zn, Dl = Q({}, gr, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Do, button: 0, buttons: 0, relatedTarget: function(e) {
  return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
}, movementX: function(e) {
  return "movementX" in e ? e.movementX : (e !== zn && (zn && e.type === "mousemove" ? (Xl = e.screenX - zn.screenX, Zl = e.screenY - zn.screenY) : Zl = Xl = 0, zn = e), Xl);
}, movementY: function(e) {
  return "movementY" in e ? e.movementY : Zl;
} }), Pu = Pe(Dl), bf = Q({}, Dl, { dataTransfer: 0 }), ed = Pe(bf), td = Q({}, gr, { relatedTarget: 0 }), Jl = Pe(td), nd = Q({}, _n, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), rd = Pe(nd), ld = Q({}, _n, { clipboardData: function(e) {
  return "clipboardData" in e ? e.clipboardData : window.clipboardData;
} }), id = Pe(ld), od = Q({}, _n, { data: 0 }), Nu = Pe(od), ud = {
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
}, ad = {
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
}, sd = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function cd(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = sd[e]) ? !!t[e] : !1;
}
function Do() {
  return cd;
}
var fd = Q({}, gr, { key: function(e) {
  if (e.key) {
    var t = ud[e.key] || e.key;
    if (t !== "Unidentified") return t;
  }
  return e.type === "keypress" ? (e = Kr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ad[e.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Do, charCode: function(e) {
  return e.type === "keypress" ? Kr(e) : 0;
}, keyCode: function(e) {
  return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
}, which: function(e) {
  return e.type === "keypress" ? Kr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
} }), dd = Pe(fd), pd = Q({}, Dl, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Tu = Pe(pd), md = Q({}, gr, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Do }), hd = Pe(md), gd = Q({}, _n, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), vd = Pe(gd), yd = Q({}, Dl, {
  deltaX: function(e) {
    return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
  },
  deltaY: function(e) {
    return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), kd = Pe(yd), Sd = [9, 13, 27, 32], Ro = et && "CompositionEvent" in window, Bn = null;
et && "documentMode" in document && (Bn = document.documentMode);
var wd = et && "TextEvent" in window && !Bn, Ss = et && (!Ro || Bn && 8 < Bn && 11 >= Bn), Du = " ", Ru = !1;
function ws(e, t) {
  switch (e) {
    case "keyup":
      return Sd.indexOf(t.keyCode) !== -1;
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
function Es(e) {
  return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
}
var bt = !1;
function Ed(e, t) {
  switch (e) {
    case "compositionend":
      return Es(t);
    case "keypress":
      return t.which !== 32 ? null : (Ru = !0, Du);
    case "textInput":
      return e = t.data, e === Du && Ru ? null : e;
    default:
      return null;
  }
}
function xd(e, t) {
  if (bt) return e === "compositionend" || !Ro && ws(e, t) ? (e = ks(), Qr = No = dt = null, bt = !1, e) : null;
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
      return Ss && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Cd = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function ju(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Cd[e.type] : t === "textarea";
}
function xs(e, t, n, r) {
  es(r), t = ul(t, "onChange"), 0 < t.length && (n = new To("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
}
var Vn = null, rr = null;
function _d(e) {
  Ls(e, 0);
}
function Rl(e) {
  var t = nn(e);
  if (Ya(t)) return e;
}
function Pd(e, t) {
  if (e === "change") return t;
}
var Cs = !1;
if (et) {
  var ql;
  if (et) {
    var bl = "oninput" in document;
    if (!bl) {
      var Au = document.createElement("div");
      Au.setAttribute("oninput", "return;"), bl = typeof Au.oninput == "function";
    }
    ql = bl;
  } else ql = !1;
  Cs = ql && (!document.documentMode || 9 < document.documentMode);
}
function zu() {
  Vn && (Vn.detachEvent("onpropertychange", _s), rr = Vn = null);
}
function _s(e) {
  if (e.propertyName === "value" && Rl(rr)) {
    var t = [];
    xs(t, rr, e, Eo(e)), ls(_d, t);
  }
}
function Nd(e, t, n) {
  e === "focusin" ? (zu(), Vn = t, rr = n, Vn.attachEvent("onpropertychange", _s)) : e === "focusout" && zu();
}
function Td(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown") return Rl(rr);
}
function Dd(e, t) {
  if (e === "click") return Rl(t);
}
function Rd(e, t) {
  if (e === "input" || e === "change") return Rl(t);
}
function jd(e, t) {
  return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
}
var $e = typeof Object.is == "function" ? Object.is : jd;
function lr(e, t) {
  if ($e(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
  var n = Object.keys(e), r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!vi.call(t, l) || !$e(e[l], t[l])) return !1;
  }
  return !0;
}
function Lu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Mu(e, t) {
  var n = Lu(e);
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
    n = Lu(n);
  }
}
function Ps(e, t) {
  return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ps(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
}
function Ns() {
  for (var e = window, t = el(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = el(e.document);
  }
  return t;
}
function jo(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
}
function Ad(e) {
  var t = Ns(), n = e.focusedElem, r = e.selectionRange;
  if (t !== n && n && n.ownerDocument && Ps(n.ownerDocument.documentElement, n)) {
    if (r !== null && jo(n)) {
      if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
      else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
        e = e.getSelection();
        var l = n.textContent.length, i = Math.min(r.start, l);
        r = r.end === void 0 ? i : Math.min(r.end, l), !e.extend && i > r && (l = r, r = i, i = l), l = Mu(n, i);
        var o = Mu(
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
var zd = et && "documentMode" in document && 11 >= document.documentMode, en = null, Ii = null, Qn = null, Oi = !1;
function Iu(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Oi || en == null || en !== el(r) || (r = en, "selectionStart" in r && jo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Qn && lr(Qn, r) || (Qn = r, r = ul(Ii, "onSelect"), 0 < r.length && (t = new To("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = en)));
}
function Dr(e, t) {
  var n = {};
  return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
}
var tn = { animationend: Dr("Animation", "AnimationEnd"), animationiteration: Dr("Animation", "AnimationIteration"), animationstart: Dr("Animation", "AnimationStart"), transitionend: Dr("Transition", "TransitionEnd") }, ei = {}, Ts = {};
et && (Ts = document.createElement("div").style, "AnimationEvent" in window || (delete tn.animationend.animation, delete tn.animationiteration.animation, delete tn.animationstart.animation), "TransitionEvent" in window || delete tn.transitionend.transition);
function jl(e) {
  if (ei[e]) return ei[e];
  if (!tn[e]) return e;
  var t = tn[e], n;
  for (n in t) if (t.hasOwnProperty(n) && n in Ts) return ei[e] = t[n];
  return e;
}
var Ds = jl("animationend"), Rs = jl("animationiteration"), js = jl("animationstart"), As = jl("transitionend"), zs = /* @__PURE__ */ new Map(), Ou = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Ct(e, t) {
  zs.set(e, t), Vt(t, [e]);
}
for (var ti = 0; ti < Ou.length; ti++) {
  var ni = Ou[ti], Ld = ni.toLowerCase(), Md = ni[0].toUpperCase() + ni.slice(1);
  Ct(Ld, "on" + Md);
}
Ct(Ds, "onAnimationEnd");
Ct(Rs, "onAnimationIteration");
Ct(js, "onAnimationStart");
Ct("dblclick", "onDoubleClick");
Ct("focusin", "onFocus");
Ct("focusout", "onBlur");
Ct(As, "onTransitionEnd");
gn("onMouseEnter", ["mouseout", "mouseover"]);
gn("onMouseLeave", ["mouseout", "mouseover"]);
gn("onPointerEnter", ["pointerout", "pointerover"]);
gn("onPointerLeave", ["pointerout", "pointerover"]);
Vt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Vt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Vt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Vt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Vt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Un = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Id = new Set("cancel close invalid load scroll toggle".split(" ").concat(Un));
function Fu(e, t, n) {
  var r = e.type || "unknown-event";
  e.currentTarget = n, Lf(r, t, void 0, e), e.currentTarget = null;
}
function Ls(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n], l = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t) for (var o = r.length - 1; 0 <= o; o--) {
        var u = r[o], a = u.instance, c = u.currentTarget;
        if (u = u.listener, a !== i && l.isPropagationStopped()) break e;
        Fu(l, u, c), i = a;
      }
      else for (o = 0; o < r.length; o++) {
        if (u = r[o], a = u.instance, c = u.currentTarget, u = u.listener, a !== i && l.isPropagationStopped()) break e;
        Fu(l, u, c), i = a;
      }
    }
  }
  if (nl) throw e = Ai, nl = !1, Ai = null, e;
}
function U(e, t) {
  var n = t[Wi];
  n === void 0 && (n = t[Wi] = /* @__PURE__ */ new Set());
  var r = e + "__bubble";
  n.has(r) || (Ms(t, e, 2, !1), n.add(r));
}
function ri(e, t, n) {
  var r = 0;
  t && (r |= 4), Ms(n, e, r, t);
}
var Rr = "_reactListening" + Math.random().toString(36).slice(2);
function ir(e) {
  if (!e[Rr]) {
    e[Rr] = !0, Wa.forEach(function(n) {
      n !== "selectionchange" && (Id.has(n) || ri(n, !1, e), ri(n, !0, e));
    });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[Rr] || (t[Rr] = !0, ri("selectionchange", !1, t));
  }
}
function Ms(e, t, n, r) {
  switch (ys(t)) {
    case 1:
      var l = Zf;
      break;
    case 4:
      l = Jf;
      break;
    default:
      l = Po;
  }
  n = l.bind(null, t, n, e), l = void 0, !ji || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
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
        var a = o.tag;
        if ((a === 3 || a === 4) && (a = o.stateNode.containerInfo, a === l || a.nodeType === 8 && a.parentNode === l)) return;
        o = o.return;
      }
      for (; u !== null; ) {
        if (o = jt(u), o === null) return;
        if (a = o.tag, a === 5 || a === 6) {
          r = i = o;
          continue e;
        }
        u = u.parentNode;
      }
    }
    r = r.return;
  }
  ls(function() {
    var c = i, h = Eo(n), m = [];
    e: {
      var p = zs.get(e);
      if (p !== void 0) {
        var k = To, w = e;
        switch (e) {
          case "keypress":
            if (Kr(n) === 0) break e;
          case "keydown":
          case "keyup":
            k = dd;
            break;
          case "focusin":
            w = "focus", k = Jl;
            break;
          case "focusout":
            w = "blur", k = Jl;
            break;
          case "beforeblur":
          case "afterblur":
            k = Jl;
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
            k = Pu;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k = ed;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k = hd;
            break;
          case Ds:
          case Rs:
          case js:
            k = rd;
            break;
          case As:
            k = vd;
            break;
          case "scroll":
            k = qf;
            break;
          case "wheel":
            k = kd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k = id;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k = Tu;
        }
        var x = (t & 4) !== 0, j = !x && e === "scroll", f = x ? p !== null ? p + "Capture" : null : p;
        x = [];
        for (var s = c, d; s !== null; ) {
          d = s;
          var v = d.stateNode;
          if (d.tag === 5 && v !== null && (d = v, f !== null && (v = bn(s, f), v != null && x.push(or(s, v, d)))), j) break;
          s = s.return;
        }
        0 < x.length && (p = new k(p, w, null, n, h), m.push({ event: p, listeners: x }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (p = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", p && n !== Di && (w = n.relatedTarget || n.fromElement) && (jt(w) || w[tt])) break e;
        if ((k || p) && (p = h.window === h ? h : (p = h.ownerDocument) ? p.defaultView || p.parentWindow : window, k ? (w = n.relatedTarget || n.toElement, k = c, w = w ? jt(w) : null, w !== null && (j = Qt(w), w !== j || w.tag !== 5 && w.tag !== 6) && (w = null)) : (k = null, w = c), k !== w)) {
          if (x = Pu, v = "onMouseLeave", f = "onMouseEnter", s = "mouse", (e === "pointerout" || e === "pointerover") && (x = Tu, v = "onPointerLeave", f = "onPointerEnter", s = "pointer"), j = k == null ? p : nn(k), d = w == null ? p : nn(w), p = new x(v, s + "leave", k, n, h), p.target = j, p.relatedTarget = d, v = null, jt(h) === c && (x = new x(f, s + "enter", w, n, h), x.target = d, x.relatedTarget = j, v = x), j = v, k && w) t: {
            for (x = k, f = w, s = 0, d = x; d; d = Zt(d)) s++;
            for (d = 0, v = f; v; v = Zt(v)) d++;
            for (; 0 < s - d; ) x = Zt(x), s--;
            for (; 0 < d - s; ) f = Zt(f), d--;
            for (; s--; ) {
              if (x === f || f !== null && x === f.alternate) break t;
              x = Zt(x), f = Zt(f);
            }
            x = null;
          }
          else x = null;
          k !== null && $u(m, p, k, x, !1), w !== null && j !== null && $u(m, j, w, x, !0);
        }
      }
      e: {
        if (p = c ? nn(c) : window, k = p.nodeName && p.nodeName.toLowerCase(), k === "select" || k === "input" && p.type === "file") var y = Pd;
        else if (ju(p)) if (Cs) y = Rd;
        else {
          y = Td;
          var P = Nd;
        }
        else (k = p.nodeName) && k.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (y = Dd);
        if (y && (y = y(e, c))) {
          xs(m, y, n, h);
          break e;
        }
        P && P(e, p, c), e === "focusout" && (P = p._wrapperState) && P.controlled && p.type === "number" && Ci(p, "number", p.value);
      }
      switch (P = c ? nn(c) : window, e) {
        case "focusin":
          (ju(P) || P.contentEditable === "true") && (en = P, Ii = c, Qn = null);
          break;
        case "focusout":
          Qn = Ii = en = null;
          break;
        case "mousedown":
          Oi = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Oi = !1, Iu(m, n, h);
          break;
        case "selectionchange":
          if (zd) break;
        case "keydown":
        case "keyup":
          Iu(m, n, h);
      }
      var C;
      if (Ro) e: {
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
      else bt ? ws(e, n) && (T = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T && (Ss && n.locale !== "ko" && (bt || T !== "onCompositionStart" ? T === "onCompositionEnd" && bt && (C = ks()) : (dt = h, No = "value" in dt ? dt.value : dt.textContent, bt = !0)), P = ul(c, T), 0 < P.length && (T = new Nu(T, e, null, n, h), m.push({ event: T, listeners: P }), C ? T.data = C : (C = Es(n), C !== null && (T.data = C)))), (C = wd ? Ed(e, n) : xd(e, n)) && (c = ul(c, "onBeforeInput"), 0 < c.length && (h = new Nu("onBeforeInput", "beforeinput", null, n, h), m.push({ event: h, listeners: c }), h.data = C));
    }
    Ls(m, t);
  });
}
function or(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ul(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e, i = l.stateNode;
    l.tag === 5 && i !== null && (l = i, i = bn(e, n), i != null && r.unshift(or(e, i, l)), i = bn(e, t), i != null && r.push(or(e, i, l))), e = e.return;
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
function $u(e, t, n, r, l) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var u = n, a = u.alternate, c = u.stateNode;
    if (a !== null && a === r) break;
    u.tag === 5 && c !== null && (u = c, l ? (a = bn(n, i), a != null && o.unshift(or(n, a, u))) : l || (a = bn(n, i), a != null && o.push(or(n, a, u)))), n = n.return;
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Od = /\r\n?/g, Fd = /\u0000|\uFFFD/g;
function Uu(e) {
  return (typeof e == "string" ? e : "" + e).replace(Od, `
`).replace(Fd, "");
}
function jr(e, t, n) {
  if (t = Uu(t), Uu(e) !== t && n) throw Error(E(425));
}
function al() {
}
var Fi = null, $i = null;
function Ui(e, t) {
  return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
}
var Hi = typeof setTimeout == "function" ? setTimeout : void 0, $d = typeof clearTimeout == "function" ? clearTimeout : void 0, Hu = typeof Promise == "function" ? Promise : void 0, Ud = typeof queueMicrotask == "function" ? queueMicrotask : typeof Hu < "u" ? function(e) {
  return Hu.resolve(null).then(e).catch(Hd);
} : Hi;
function Hd(e) {
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
        e.removeChild(l), nr(t);
        return;
      }
      r--;
    } else n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = l;
  } while (n);
  nr(t);
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
function Wu(e) {
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
var Pn = Math.random().toString(36).slice(2), Be = "__reactFiber$" + Pn, ur = "__reactProps$" + Pn, tt = "__reactContainer$" + Pn, Wi = "__reactEvents$" + Pn, Wd = "__reactListeners$" + Pn, Bd = "__reactHandles$" + Pn;
function jt(e) {
  var t = e[Be];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if (t = n[tt] || n[Be]) {
      if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Wu(e); e !== null; ) {
        if (n = e[Be]) return n;
        e = Wu(e);
      }
      return t;
    }
    e = n, n = e.parentNode;
  }
  return null;
}
function vr(e) {
  return e = e[Be] || e[tt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
}
function nn(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(E(33));
}
function Al(e) {
  return e[ur] || null;
}
var Bi = [], rn = -1;
function _t(e) {
  return { current: e };
}
function H(e) {
  0 > rn || (e.current = Bi[rn], Bi[rn] = null, rn--);
}
function F(e, t) {
  rn++, Bi[rn] = e.current, e.current = t;
}
var xt = {}, ce = _t(xt), ve = _t(!1), $t = xt;
function vn(e, t) {
  var n = e.type.contextTypes;
  if (!n) return xt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
  var l = {}, i;
  for (i in n) l[i] = t[i];
  return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
}
function ye(e) {
  return e = e.childContextTypes, e != null;
}
function sl() {
  H(ve), H(ce);
}
function Bu(e, t, n) {
  if (ce.current !== xt) throw Error(E(168));
  F(ce, t), F(ve, n);
}
function Is(e, t, n) {
  var r = e.stateNode;
  if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(E(108, Nf(e) || "Unknown", l));
  return Q({}, n, r);
}
function cl(e) {
  return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || xt, $t = ce.current, F(ce, e), F(ve, ve.current), !0;
}
function Vu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(E(169));
  n ? (e = Is(e, t, $t), r.__reactInternalMemoizedMergedChildContext = e, H(ve), H(ce), F(ce, e)) : H(ve), F(ve, n);
}
var Ze = null, zl = !1, oi = !1;
function Os(e) {
  Ze === null ? Ze = [e] : Ze.push(e);
}
function Vd(e) {
  zl = !0, Os(e);
}
function Pt() {
  if (!oi && Ze !== null) {
    oi = !0;
    var e = 0, t = I;
    try {
      var n = Ze;
      for (I = 1; e < n.length; e++) {
        var r = n[e];
        do
          r = r(!0);
        while (r !== null);
      }
      Ze = null, zl = !1;
    } catch (l) {
      throw Ze !== null && (Ze = Ze.slice(e + 1)), as(xo, Pt), l;
    } finally {
      I = t, oi = !1;
    }
  }
  return null;
}
var ln = [], on = 0, fl = null, dl = 0, Ne = [], Te = 0, Ut = null, Je = 1, qe = "";
function Dt(e, t) {
  ln[on++] = dl, ln[on++] = fl, fl = e, dl = t;
}
function Fs(e, t, n) {
  Ne[Te++] = Je, Ne[Te++] = qe, Ne[Te++] = Ut, Ut = e;
  var r = Je;
  e = qe;
  var l = 32 - Oe(r) - 1;
  r &= ~(1 << l), n += 1;
  var i = 32 - Oe(t) + l;
  if (30 < i) {
    var o = l - l % 5;
    i = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, Je = 1 << 32 - Oe(t) + l | n << l | r, qe = i + e;
  } else Je = 1 << i | n << l | r, qe = e;
}
function Ao(e) {
  e.return !== null && (Dt(e, 1), Fs(e, 1, 0));
}
function zo(e) {
  for (; e === fl; ) fl = ln[--on], ln[on] = null, dl = ln[--on], ln[on] = null;
  for (; e === Ut; ) Ut = Ne[--Te], Ne[Te] = null, qe = Ne[--Te], Ne[Te] = null, Je = Ne[--Te], Ne[Te] = null;
}
var xe = null, Ee = null, W = !1, Ie = null;
function $s(e, t) {
  var n = De(5, null, null, 0);
  n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
}
function Qu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, xe = e, Ee = vt(t.firstChild), !0) : !1;
    case 6:
      return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, xe = e, Ee = null, !0) : !1;
    case 13:
      return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Ut !== null ? { id: Je, overflow: qe } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = De(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, xe = e, Ee = null, !0) : !1;
    default:
      return !1;
  }
}
function Vi(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Qi(e) {
  if (W) {
    var t = Ee;
    if (t) {
      var n = t;
      if (!Qu(e, t)) {
        if (Vi(e)) throw Error(E(418));
        t = vt(n.nextSibling);
        var r = xe;
        t && Qu(e, t) ? $s(r, n) : (e.flags = e.flags & -4097 | 2, W = !1, xe = e);
      }
    } else {
      if (Vi(e)) throw Error(E(418));
      e.flags = e.flags & -4097 | 2, W = !1, xe = e;
    }
  }
}
function Ku(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
  xe = e;
}
function Ar(e) {
  if (e !== xe) return !1;
  if (!W) return Ku(e), W = !0, !1;
  var t;
  if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Ui(e.type, e.memoizedProps)), t && (t = Ee)) {
    if (Vi(e)) throw Us(), Error(E(418));
    for (; t; ) $s(e, t), t = vt(t.nextSibling);
  }
  if (Ku(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Ee = vt(e.nextSibling);
              break e;
            }
            t--;
          } else n !== "$" && n !== "$!" && n !== "$?" || t++;
        }
        e = e.nextSibling;
      }
      Ee = null;
    }
  } else Ee = xe ? vt(e.stateNode.nextSibling) : null;
  return !0;
}
function Us() {
  for (var e = Ee; e; ) e = vt(e.nextSibling);
}
function yn() {
  Ee = xe = null, W = !1;
}
function Lo(e) {
  Ie === null ? Ie = [e] : Ie.push(e);
}
var Qd = lt.ReactCurrentBatchConfig;
function Ln(e, t, n) {
  if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
      if (n = n._owner, n) {
        if (n.tag !== 1) throw Error(E(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(E(147, e));
      var l = r, i = "" + e;
      return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(o) {
        var u = l.refs;
        o === null ? delete u[i] : u[i] = o;
      }, t._stringRef = i, t);
    }
    if (typeof e != "string") throw Error(E(284));
    if (!n._owner) throw Error(E(290, e));
  }
  return e;
}
function zr(e, t) {
  throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
}
function Yu(e) {
  var t = e._init;
  return t(e._payload);
}
function Hs(e) {
  function t(f, s) {
    if (e) {
      var d = f.deletions;
      d === null ? (f.deletions = [s], f.flags |= 16) : d.push(s);
    }
  }
  function n(f, s) {
    if (!e) return null;
    for (; s !== null; ) t(f, s), s = s.sibling;
    return null;
  }
  function r(f, s) {
    for (f = /* @__PURE__ */ new Map(); s !== null; ) s.key !== null ? f.set(s.key, s) : f.set(s.index, s), s = s.sibling;
    return f;
  }
  function l(f, s) {
    return f = wt(f, s), f.index = 0, f.sibling = null, f;
  }
  function i(f, s, d) {
    return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < s ? (f.flags |= 2, s) : d) : (f.flags |= 2, s)) : (f.flags |= 1048576, s);
  }
  function o(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, s, d, v) {
    return s === null || s.tag !== 6 ? (s = mi(d, f.mode, v), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function a(f, s, d, v) {
    var y = d.type;
    return y === qt ? h(f, s, d.props.children, v, d.key) : s !== null && (s.elementType === y || typeof y == "object" && y !== null && y.$$typeof === at && Yu(y) === s.type) ? (v = l(s, d.props), v.ref = Ln(f, s, d), v.return = f, v) : (v = br(d.type, d.key, d.props, null, f.mode, v), v.ref = Ln(f, s, d), v.return = f, v);
  }
  function c(f, s, d, v) {
    return s === null || s.tag !== 4 || s.stateNode.containerInfo !== d.containerInfo || s.stateNode.implementation !== d.implementation ? (s = hi(d, f.mode, v), s.return = f, s) : (s = l(s, d.children || []), s.return = f, s);
  }
  function h(f, s, d, v, y) {
    return s === null || s.tag !== 7 ? (s = Ft(d, f.mode, v, y), s.return = f, s) : (s = l(s, d), s.return = f, s);
  }
  function m(f, s, d) {
    if (typeof s == "string" && s !== "" || typeof s == "number") return s = mi("" + s, f.mode, d), s.return = f, s;
    if (typeof s == "object" && s !== null) {
      switch (s.$$typeof) {
        case Er:
          return d = br(s.type, s.key, s.props, null, f.mode, d), d.ref = Ln(f, null, s), d.return = f, d;
        case Jt:
          return s = hi(s, f.mode, d), s.return = f, s;
        case at:
          var v = s._init;
          return m(f, v(s._payload), d);
      }
      if (Fn(s) || Dn(s)) return s = Ft(s, f.mode, d, null), s.return = f, s;
      zr(f, s);
    }
    return null;
  }
  function p(f, s, d, v) {
    var y = s !== null ? s.key : null;
    if (typeof d == "string" && d !== "" || typeof d == "number") return y !== null ? null : u(f, s, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Er:
          return d.key === y ? a(f, s, d, v) : null;
        case Jt:
          return d.key === y ? c(f, s, d, v) : null;
        case at:
          return y = d._init, p(
            f,
            s,
            y(d._payload),
            v
          );
      }
      if (Fn(d) || Dn(d)) return y !== null ? null : h(f, s, d, v, null);
      zr(f, d);
    }
    return null;
  }
  function k(f, s, d, v, y) {
    if (typeof v == "string" && v !== "" || typeof v == "number") return f = f.get(d) || null, u(s, f, "" + v, y);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case Er:
          return f = f.get(v.key === null ? d : v.key) || null, a(s, f, v, y);
        case Jt:
          return f = f.get(v.key === null ? d : v.key) || null, c(s, f, v, y);
        case at:
          var P = v._init;
          return k(f, s, d, P(v._payload), y);
      }
      if (Fn(v) || Dn(v)) return f = f.get(d) || null, h(s, f, v, y, null);
      zr(s, v);
    }
    return null;
  }
  function w(f, s, d, v) {
    for (var y = null, P = null, C = s, T = s = 0, D = null; C !== null && T < d.length; T++) {
      C.index > T ? (D = C, C = null) : D = C.sibling;
      var S = p(f, C, d[T], v);
      if (S === null) {
        C === null && (C = D);
        break;
      }
      e && C && S.alternate === null && t(f, C), s = i(S, s, T), P === null ? y = S : P.sibling = S, P = S, C = D;
    }
    if (T === d.length) return n(f, C), W && Dt(f, T), y;
    if (C === null) {
      for (; T < d.length; T++) C = m(f, d[T], v), C !== null && (s = i(C, s, T), P === null ? y = C : P.sibling = C, P = C);
      return W && Dt(f, T), y;
    }
    for (C = r(f, C); T < d.length; T++) D = k(C, f, T, d[T], v), D !== null && (e && D.alternate !== null && C.delete(D.key === null ? T : D.key), s = i(D, s, T), P === null ? y = D : P.sibling = D, P = D);
    return e && C.forEach(function(O) {
      return t(f, O);
    }), W && Dt(f, T), y;
  }
  function x(f, s, d, v) {
    var y = Dn(d);
    if (typeof y != "function") throw Error(E(150));
    if (d = y.call(d), d == null) throw Error(E(151));
    for (var P = y = null, C = s, T = s = 0, D = null, S = d.next(); C !== null && !S.done; T++, S = d.next()) {
      C.index > T ? (D = C, C = null) : D = C.sibling;
      var O = p(f, C, S.value, v);
      if (O === null) {
        C === null && (C = D);
        break;
      }
      e && C && O.alternate === null && t(f, C), s = i(O, s, T), P === null ? y = O : P.sibling = O, P = O, C = D;
    }
    if (S.done) return n(
      f,
      C
    ), W && Dt(f, T), y;
    if (C === null) {
      for (; !S.done; T++, S = d.next()) S = m(f, S.value, v), S !== null && (s = i(S, s, T), P === null ? y = S : P.sibling = S, P = S);
      return W && Dt(f, T), y;
    }
    for (C = r(f, C); !S.done; T++, S = d.next()) S = k(C, f, T, S.value, v), S !== null && (e && S.alternate !== null && C.delete(S.key === null ? T : S.key), s = i(S, s, T), P === null ? y = S : P.sibling = S, P = S);
    return e && C.forEach(function(Ue) {
      return t(f, Ue);
    }), W && Dt(f, T), y;
  }
  function j(f, s, d, v) {
    if (typeof d == "object" && d !== null && d.type === qt && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case Er:
          e: {
            for (var y = d.key, P = s; P !== null; ) {
              if (P.key === y) {
                if (y = d.type, y === qt) {
                  if (P.tag === 7) {
                    n(f, P.sibling), s = l(P, d.props.children), s.return = f, f = s;
                    break e;
                  }
                } else if (P.elementType === y || typeof y == "object" && y !== null && y.$$typeof === at && Yu(y) === P.type) {
                  n(f, P.sibling), s = l(P, d.props), s.ref = Ln(f, P, d), s.return = f, f = s;
                  break e;
                }
                n(f, P);
                break;
              } else t(f, P);
              P = P.sibling;
            }
            d.type === qt ? (s = Ft(d.props.children, f.mode, v, d.key), s.return = f, f = s) : (v = br(d.type, d.key, d.props, null, f.mode, v), v.ref = Ln(f, s, d), v.return = f, f = v);
          }
          return o(f);
        case Jt:
          e: {
            for (P = d.key; s !== null; ) {
              if (s.key === P) if (s.tag === 4 && s.stateNode.containerInfo === d.containerInfo && s.stateNode.implementation === d.implementation) {
                n(f, s.sibling), s = l(s, d.children || []), s.return = f, f = s;
                break e;
              } else {
                n(f, s);
                break;
              }
              else t(f, s);
              s = s.sibling;
            }
            s = hi(d, f.mode, v), s.return = f, f = s;
          }
          return o(f);
        case at:
          return P = d._init, j(f, s, P(d._payload), v);
      }
      if (Fn(d)) return w(f, s, d, v);
      if (Dn(d)) return x(f, s, d, v);
      zr(f, d);
    }
    return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, s !== null && s.tag === 6 ? (n(f, s.sibling), s = l(s, d), s.return = f, f = s) : (n(f, s), s = mi(d, f.mode, v), s.return = f, f = s), o(f)) : n(f, s);
  }
  return j;
}
var kn = Hs(!0), Ws = Hs(!1), pl = _t(null), ml = null, un = null, Mo = null;
function Io() {
  Mo = un = ml = null;
}
function Oo(e) {
  var t = pl.current;
  H(pl), e._currentValue = t;
}
function Ki(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
    e = e.return;
  }
}
function mn(e, t) {
  ml = e, Mo = un = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ge = !0), e.firstContext = null);
}
function je(e) {
  var t = e._currentValue;
  if (Mo !== e) if (e = { context: e, memoizedValue: t, next: null }, un === null) {
    if (ml === null) throw Error(E(308));
    un = e, ml.dependencies = { lanes: 0, firstContext: e };
  } else un = un.next = e;
  return t;
}
var At = null;
function Fo(e) {
  At === null ? At = [e] : At.push(e);
}
function Bs(e, t, n, r) {
  var l = t.interleaved;
  return l === null ? (n.next = n, Fo(t)) : (n.next = l.next, l.next = n), t.interleaved = n, nt(e, r);
}
function nt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
  return n.tag === 3 ? n.stateNode : null;
}
var st = !1;
function $o(e) {
  e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function Vs(e, t) {
  e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
}
function be(e, t) {
  return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function yt(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (r = r.shared, M & 2) {
    var l = r.pending;
    return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, nt(e, n);
  }
  return l = r.interleaved, l === null ? (t.next = t, Fo(r)) : (t.next = l.next, l.next = t), r.interleaved = t, nt(e, n);
}
function Yr(e, t, n) {
  if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Co(e, n);
  }
}
function Gu(e, t) {
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
function hl(e, t, n, r) {
  var l = e.updateQueue;
  st = !1;
  var i = l.firstBaseUpdate, o = l.lastBaseUpdate, u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var a = u, c = a.next;
    a.next = null, o === null ? i = c : o.next = c, o = a;
    var h = e.alternate;
    h !== null && (h = h.updateQueue, u = h.lastBaseUpdate, u !== o && (u === null ? h.firstBaseUpdate = c : u.next = c, h.lastBaseUpdate = a));
  }
  if (i !== null) {
    var m = l.baseState;
    o = 0, h = c = a = null, u = i;
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
          var w = e, x = u;
          switch (p = t, k = n, x.tag) {
            case 1:
              if (w = x.payload, typeof w == "function") {
                m = w.call(k, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = w.flags & -65537 | 128;
            case 0:
              if (w = x.payload, p = typeof w == "function" ? w.call(k, m, p) : w, p == null) break e;
              m = Q({}, m, p);
              break e;
            case 2:
              st = !0;
          }
        }
        u.callback !== null && u.lane !== 0 && (e.flags |= 64, p = l.effects, p === null ? l.effects = [u] : p.push(u));
      } else k = { eventTime: k, lane: p, tag: u.tag, payload: u.payload, callback: u.callback, next: null }, h === null ? (c = h = k, a = m) : h = h.next = k, o |= p;
      if (u = u.next, u === null) {
        if (u = l.shared.pending, u === null) break;
        p = u, u = p.next, p.next = null, l.lastBaseUpdate = p, l.shared.pending = null;
      }
    } while (!0);
    if (h === null && (a = m), l.baseState = a, l.firstBaseUpdate = c, l.lastBaseUpdate = h, t = l.shared.interleaved, t !== null) {
      l = t;
      do
        o |= l.lane, l = l.next;
      while (l !== t);
    } else i === null && (l.shared.lanes = 0);
    Wt |= o, e.lanes = o, e.memoizedState = m;
  }
}
function Xu(e, t, n) {
  if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
    var r = e[t], l = r.callback;
    if (l !== null) {
      if (r.callback = null, r = n, typeof l != "function") throw Error(E(191, l));
      l.call(r);
    }
  }
}
var yr = {}, Qe = _t(yr), ar = _t(yr), sr = _t(yr);
function zt(e) {
  if (e === yr) throw Error(E(174));
  return e;
}
function Uo(e, t) {
  switch (F(sr, t), F(ar, e), F(Qe, yr), e = t.nodeType, e) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Pi(null, "");
      break;
    default:
      e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Pi(t, e);
  }
  H(Qe), F(Qe, t);
}
function Sn() {
  H(Qe), H(ar), H(sr);
}
function Qs(e) {
  zt(sr.current);
  var t = zt(Qe.current), n = Pi(t, e.type);
  t !== n && (F(ar, e), F(Qe, n));
}
function Ho(e) {
  ar.current === e && (H(Qe), H(ar));
}
var B = _t(0);
function gl(e) {
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
var ai = [];
function Wo() {
  for (var e = 0; e < ai.length; e++) ai[e]._workInProgressVersionPrimary = null;
  ai.length = 0;
}
var Gr = lt.ReactCurrentDispatcher, si = lt.ReactCurrentBatchConfig, Ht = 0, V = null, q = null, te = null, vl = !1, Kn = !1, cr = 0, Kd = 0;
function oe() {
  throw Error(E(321));
}
function Bo(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++) if (!$e(e[n], t[n])) return !1;
  return !0;
}
function Vo(e, t, n, r, l, i) {
  if (Ht = i, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Gr.current = e === null || e.memoizedState === null ? Zd : Jd, e = n(r, l), Kn) {
    i = 0;
    do {
      if (Kn = !1, cr = 0, 25 <= i) throw Error(E(301));
      i += 1, te = q = null, t.updateQueue = null, Gr.current = qd, e = n(r, l);
    } while (Kn);
  }
  if (Gr.current = yl, t = q !== null && q.next !== null, Ht = 0, te = q = V = null, vl = !1, t) throw Error(E(300));
  return e;
}
function Qo() {
  var e = cr !== 0;
  return cr = 0, e;
}
function We() {
  var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  return te === null ? V.memoizedState = te = e : te = te.next = e, te;
}
function Ae() {
  if (q === null) {
    var e = V.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = q.next;
  var t = te === null ? V.memoizedState : te.next;
  if (t !== null) te = t, q = e;
  else {
    if (e === null) throw Error(E(310));
    q = e, e = { memoizedState: q.memoizedState, baseState: q.baseState, baseQueue: q.baseQueue, queue: q.queue, next: null }, te === null ? V.memoizedState = te = e : te = te.next = e;
  }
  return te;
}
function fr(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function ci(e) {
  var t = Ae(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = q, l = r.baseQueue, i = n.pending;
  if (i !== null) {
    if (l !== null) {
      var o = l.next;
      l.next = i.next, i.next = o;
    }
    r.baseQueue = l = i, n.pending = null;
  }
  if (l !== null) {
    i = l.next, r = r.baseState;
    var u = o = null, a = null, c = i;
    do {
      var h = c.lane;
      if ((Ht & h) === h) a !== null && (a = a.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null
        };
        a === null ? (u = a = m, o = r) : a = a.next = m, V.lanes |= h, Wt |= h;
      }
      c = c.next;
    } while (c !== null && c !== i);
    a === null ? o = r : a.next = u, $e(r, t.memoizedState) || (ge = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = a, n.lastRenderedState = r;
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
  var t = Ae(), n = t.queue;
  if (n === null) throw Error(E(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch, l = n.pending, i = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var o = l = l.next;
    do
      i = e(i, o.action), o = o.next;
    while (o !== l);
    $e(i, t.memoizedState) || (ge = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
  }
  return [i, r];
}
function Ks() {
}
function Ys(e, t) {
  var n = V, r = Ae(), l = t(), i = !$e(r.memoizedState, l);
  if (i && (r.memoizedState = l, ge = !0), r = r.queue, Ko(Zs.bind(null, n, r, e), [e]), r.getSnapshot !== t || i || te !== null && te.memoizedState.tag & 1) {
    if (n.flags |= 2048, dr(9, Xs.bind(null, n, r, l, t), void 0, null), ne === null) throw Error(E(349));
    Ht & 30 || Gs(n, t, l);
  }
  return l;
}
function Gs(e, t, n) {
  e.flags |= 16384, e = { getSnapshot: t, value: n }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
}
function Xs(e, t, n, r) {
  t.value = n, t.getSnapshot = r, Js(t) && qs(e);
}
function Zs(e, t, n) {
  return n(function() {
    Js(t) && qs(e);
  });
}
function Js(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !$e(e, n);
  } catch {
    return !0;
  }
}
function qs(e) {
  var t = nt(e, 1);
  t !== null && Fe(t, e, 1, -1);
}
function Zu(e) {
  var t = We();
  return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = Xd.bind(null, V, e), [t.memoizedState, e];
}
function dr(e, t, n, r) {
  return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = V.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, V.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
}
function bs() {
  return Ae().memoizedState;
}
function Xr(e, t, n, r) {
  var l = We();
  V.flags |= e, l.memoizedState = dr(1 | t, n, void 0, r === void 0 ? null : r);
}
function Ll(e, t, n, r) {
  var l = Ae();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (q !== null) {
    var o = q.memoizedState;
    if (i = o.destroy, r !== null && Bo(r, o.deps)) {
      l.memoizedState = dr(t, n, i, r);
      return;
    }
  }
  V.flags |= e, l.memoizedState = dr(1 | t, n, i, r);
}
function Ju(e, t) {
  return Xr(8390656, 8, e, t);
}
function Ko(e, t) {
  return Ll(2048, 8, e, t);
}
function ec(e, t) {
  return Ll(4, 2, e, t);
}
function tc(e, t) {
  return Ll(4, 4, e, t);
}
function nc(e, t) {
  if (typeof t == "function") return e = e(), t(e), function() {
    t(null);
  };
  if (t != null) return e = e(), t.current = e, function() {
    t.current = null;
  };
}
function rc(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Ll(4, 4, nc.bind(null, t, e), n);
}
function Yo() {
}
function lc(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bo(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
}
function ic(e, t) {
  var n = Ae();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && Bo(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
}
function oc(e, t, n) {
  return Ht & 21 ? ($e(n, t) || (n = fs(), V.lanes |= n, Wt |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ge = !0), e.memoizedState = n);
}
function Yd(e, t) {
  var n = I;
  I = n !== 0 && 4 > n ? n : 4, e(!0);
  var r = si.transition;
  si.transition = {};
  try {
    e(!1), t();
  } finally {
    I = n, si.transition = r;
  }
}
function uc() {
  return Ae().memoizedState;
}
function Gd(e, t, n) {
  var r = St(e);
  if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, ac(e)) sc(t, n);
  else if (n = Bs(e, t, n, r), n !== null) {
    var l = de();
    Fe(n, e, r, l), cc(n, t, r);
  }
}
function Xd(e, t, n) {
  var r = St(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (ac(e)) sc(t, l);
  else {
    var i = e.alternate;
    if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null)) try {
      var o = t.lastRenderedState, u = i(o, n);
      if (l.hasEagerState = !0, l.eagerState = u, $e(u, o)) {
        var a = t.interleaved;
        a === null ? (l.next = l, Fo(t)) : (l.next = a.next, a.next = l), t.interleaved = l;
        return;
      }
    } catch {
    } finally {
    }
    n = Bs(e, t, l, r), n !== null && (l = de(), Fe(n, e, r, l), cc(n, t, r));
  }
}
function ac(e) {
  var t = e.alternate;
  return e === V || t !== null && t === V;
}
function sc(e, t) {
  Kn = vl = !0;
  var n = e.pending;
  n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
}
function cc(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    r &= e.pendingLanes, n |= r, t.lanes = n, Co(e, n);
  }
}
var yl = { readContext: je, useCallback: oe, useContext: oe, useEffect: oe, useImperativeHandle: oe, useInsertionEffect: oe, useLayoutEffect: oe, useMemo: oe, useReducer: oe, useRef: oe, useState: oe, useDebugValue: oe, useDeferredValue: oe, useTransition: oe, useMutableSource: oe, useSyncExternalStore: oe, useId: oe, unstable_isNewReconciler: !1 }, Zd = { readContext: je, useCallback: function(e, t) {
  return We().memoizedState = [e, t === void 0 ? null : t], e;
}, useContext: je, useEffect: Ju, useImperativeHandle: function(e, t, n) {
  return n = n != null ? n.concat([e]) : null, Xr(
    4194308,
    4,
    nc.bind(null, t, e),
    n
  );
}, useLayoutEffect: function(e, t) {
  return Xr(4194308, 4, e, t);
}, useInsertionEffect: function(e, t) {
  return Xr(4, 2, e, t);
}, useMemo: function(e, t) {
  var n = We();
  return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
}, useReducer: function(e, t, n) {
  var r = We();
  return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = Gd.bind(null, V, e), [r.memoizedState, e];
}, useRef: function(e) {
  var t = We();
  return e = { current: e }, t.memoizedState = e;
}, useState: Zu, useDebugValue: Yo, useDeferredValue: function(e) {
  return We().memoizedState = e;
}, useTransition: function() {
  var e = Zu(!1), t = e[0];
  return e = Yd.bind(null, e[1]), We().memoizedState = e, [t, e];
}, useMutableSource: function() {
}, useSyncExternalStore: function(e, t, n) {
  var r = V, l = We();
  if (W) {
    if (n === void 0) throw Error(E(407));
    n = n();
  } else {
    if (n = t(), ne === null) throw Error(E(349));
    Ht & 30 || Gs(r, t, n);
  }
  l.memoizedState = n;
  var i = { value: n, getSnapshot: t };
  return l.queue = i, Ju(Zs.bind(
    null,
    r,
    i,
    e
  ), [e]), r.flags |= 2048, dr(9, Xs.bind(null, r, i, n, t), void 0, null), n;
}, useId: function() {
  var e = We(), t = ne.identifierPrefix;
  if (W) {
    var n = qe, r = Je;
    n = (r & ~(1 << 32 - Oe(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = cr++, 0 < n && (t += "H" + n.toString(32)), t += ":";
  } else n = Kd++, t = ":" + t + "r" + n.toString(32) + ":";
  return e.memoizedState = t;
}, unstable_isNewReconciler: !1 }, Jd = {
  readContext: je,
  useCallback: lc,
  useContext: je,
  useEffect: Ko,
  useImperativeHandle: rc,
  useInsertionEffect: ec,
  useLayoutEffect: tc,
  useMemo: ic,
  useReducer: ci,
  useRef: bs,
  useState: function() {
    return ci(fr);
  },
  useDebugValue: Yo,
  useDeferredValue: function(e) {
    var t = Ae();
    return oc(t, q.memoizedState, e);
  },
  useTransition: function() {
    var e = ci(fr)[0], t = Ae().memoizedState;
    return [e, t];
  },
  useMutableSource: Ks,
  useSyncExternalStore: Ys,
  useId: uc,
  unstable_isNewReconciler: !1
}, qd = { readContext: je, useCallback: lc, useContext: je, useEffect: Ko, useImperativeHandle: rc, useInsertionEffect: ec, useLayoutEffect: tc, useMemo: ic, useReducer: fi, useRef: bs, useState: function() {
  return fi(fr);
}, useDebugValue: Yo, useDeferredValue: function(e) {
  var t = Ae();
  return q === null ? t.memoizedState = e : oc(t, q.memoizedState, e);
}, useTransition: function() {
  var e = fi(fr)[0], t = Ae().memoizedState;
  return [e, t];
}, useMutableSource: Ks, useSyncExternalStore: Ys, useId: uc, unstable_isNewReconciler: !1 };
function Le(e, t) {
  if (e && e.defaultProps) {
    t = Q({}, t), e = e.defaultProps;
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Yi(e, t, n, r) {
  t = e.memoizedState, n = n(r, t), n = n == null ? t : Q({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ml = { isMounted: function(e) {
  return (e = e._reactInternals) ? Qt(e) === e : !1;
}, enqueueSetState: function(e, t, n) {
  e = e._reactInternals;
  var r = de(), l = St(e), i = be(r, l);
  i.payload = t, n != null && (i.callback = n), t = yt(e, i, l), t !== null && (Fe(t, e, l, r), Yr(t, e, l));
}, enqueueReplaceState: function(e, t, n) {
  e = e._reactInternals;
  var r = de(), l = St(e), i = be(r, l);
  i.tag = 1, i.payload = t, n != null && (i.callback = n), t = yt(e, i, l), t !== null && (Fe(t, e, l, r), Yr(t, e, l));
}, enqueueForceUpdate: function(e, t) {
  e = e._reactInternals;
  var n = de(), r = St(e), l = be(n, r);
  l.tag = 2, t != null && (l.callback = t), t = yt(e, l, r), t !== null && (Fe(t, e, r, n), Yr(t, e, r));
} };
function qu(e, t, n, r, l, i, o) {
  return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, o) : t.prototype && t.prototype.isPureReactComponent ? !lr(n, r) || !lr(l, i) : !0;
}
function fc(e, t, n) {
  var r = !1, l = xt, i = t.contextType;
  return typeof i == "object" && i !== null ? i = je(i) : (l = ye(t) ? $t : ce.current, r = t.contextTypes, i = (r = r != null) ? vn(e, l) : xt), t = new t(n, i), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ml, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = i), t;
}
function bu(e, t, n, r) {
  e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ml.enqueueReplaceState(t, t.state, null);
}
function Gi(e, t, n, r) {
  var l = e.stateNode;
  l.props = n, l.state = e.memoizedState, l.refs = {}, $o(e);
  var i = t.contextType;
  typeof i == "object" && i !== null ? l.context = je(i) : (i = ye(t) ? $t : ce.current, l.context = vn(e, i)), l.state = e.memoizedState, i = t.getDerivedStateFromProps, typeof i == "function" && (Yi(e, t, i, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && Ml.enqueueReplaceState(l, l.state, null), hl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function wn(e, t) {
  try {
    var n = "", r = t;
    do
      n += Pf(r), r = r.return;
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
function Xi(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function() {
      throw n;
    });
  }
}
var bd = typeof WeakMap == "function" ? WeakMap : Map;
function dc(e, t, n) {
  n = be(-1, n), n.tag = 3, n.payload = { element: null };
  var r = t.value;
  return n.callback = function() {
    Sl || (Sl = !0, io = r), Xi(e, t);
  }, n;
}
function pc(e, t, n) {
  n = be(-1, n), n.tag = 3;
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    n.payload = function() {
      return r(l);
    }, n.callback = function() {
      Xi(e, t);
    };
  }
  var i = e.stateNode;
  return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
    Xi(e, t), typeof r != "function" && (kt === null ? kt = /* @__PURE__ */ new Set([this]) : kt.add(this));
    var o = t.stack;
    this.componentDidCatch(t.value, { componentStack: o !== null ? o : "" });
  }), n;
}
function ea(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new bd();
    var l = /* @__PURE__ */ new Set();
    r.set(t, l);
  } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
  l.has(n) || (l.add(n), e = pp.bind(null, e, t, n), t.then(e, e));
}
function ta(e) {
  do {
    var t;
    if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function na(e, t, n, r, l) {
  return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = be(-1, 1), t.tag = 2, yt(n, t, 1))), n.lanes |= 1), e);
}
var ep = lt.ReactCurrentOwner, ge = !1;
function fe(e, t, n, r) {
  t.child = e === null ? Ws(t, null, n, r) : kn(t, e.child, n, r);
}
function ra(e, t, n, r, l) {
  n = n.render;
  var i = t.ref;
  return mn(t, l), r = Vo(e, t, n, r, i, l), n = Qo(), e !== null && !ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, rt(e, t, l)) : (W && n && Ao(t), t.flags |= 1, fe(e, t, r, l), t.child);
}
function la(e, t, n, r, l) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" && !tu(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = i, mc(e, t, i, r, l)) : (e = br(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
  }
  if (i = e.child, !(e.lanes & l)) {
    var o = i.memoizedProps;
    if (n = n.compare, n = n !== null ? n : lr, n(o, r) && e.ref === t.ref) return rt(e, t, l);
  }
  return t.flags |= 1, e = wt(i, r), e.ref = t.ref, e.return = t, t.child = e;
}
function mc(e, t, n, r, l) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (lr(i, r) && e.ref === t.ref) if (ge = !1, t.pendingProps = r = i, (e.lanes & l) !== 0) e.flags & 131072 && (ge = !0);
    else return t.lanes = e.lanes, rt(e, t, l);
  }
  return Zi(e, t, n, r, l);
}
function hc(e, t, n) {
  var r = t.pendingProps, l = r.children, i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, F(sn, we), we |= n;
  else {
    if (!(n & 1073741824)) return e = i !== null ? i.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, F(sn, we), we |= e, null;
    t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = i !== null ? i.baseLanes : n, F(sn, we), we |= r;
  }
  else i !== null ? (r = i.baseLanes | n, t.memoizedState = null) : r = n, F(sn, we), we |= r;
  return fe(e, t, l, n), t.child;
}
function gc(e, t) {
  var n = t.ref;
  (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
}
function Zi(e, t, n, r, l) {
  var i = ye(n) ? $t : ce.current;
  return i = vn(t, i), mn(t, l), n = Vo(e, t, n, r, i, l), r = Qo(), e !== null && !ge ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, rt(e, t, l)) : (W && r && Ao(t), t.flags |= 1, fe(e, t, n, l), t.child);
}
function ia(e, t, n, r, l) {
  if (ye(n)) {
    var i = !0;
    cl(t);
  } else i = !1;
  if (mn(t, l), t.stateNode === null) Zr(e, t), fc(t, n, r), Gi(t, n, r, l), r = !0;
  else if (e === null) {
    var o = t.stateNode, u = t.memoizedProps;
    o.props = u;
    var a = o.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = je(c) : (c = ye(n) ? $t : ce.current, c = vn(t, c));
    var h = n.getDerivedStateFromProps, m = typeof h == "function" || typeof o.getSnapshotBeforeUpdate == "function";
    m || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== r || a !== c) && bu(t, o, r, c), st = !1;
    var p = t.memoizedState;
    o.state = p, hl(t, r, o, l), a = t.memoizedState, u !== r || p !== a || ve.current || st ? (typeof h == "function" && (Yi(t, n, h, r), a = t.memoizedState), (u = st || qu(t, n, u, r, p, a, c)) ? (m || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = a), o.props = r, o.state = a, o.context = c, r = u) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
  } else {
    o = t.stateNode, Vs(e, t), u = t.memoizedProps, c = t.type === t.elementType ? u : Le(t.type, u), o.props = c, m = t.pendingProps, p = o.context, a = n.contextType, typeof a == "object" && a !== null ? a = je(a) : (a = ye(n) ? $t : ce.current, a = vn(t, a));
    var k = n.getDerivedStateFromProps;
    (h = typeof k == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (u !== m || p !== a) && bu(t, o, r, a), st = !1, p = t.memoizedState, o.state = p, hl(t, r, o, l);
    var w = t.memoizedState;
    u !== m || p !== w || ve.current || st ? (typeof k == "function" && (Yi(t, n, k, r), w = t.memoizedState), (c = st || qu(t, n, c, r, p, w, a) || !1) ? (h || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, a), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, a)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = a, r = c) : (typeof o.componentDidUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || u === e.memoizedProps && p === e.memoizedState || (t.flags |= 1024), r = !1);
  }
  return Ji(e, t, n, r, i, l);
}
function Ji(e, t, n, r, l, i) {
  gc(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return l && Vu(t, n, !1), rt(e, t, i);
  r = t.stateNode, ep.current = t;
  var u = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return t.flags |= 1, e !== null && o ? (t.child = kn(t, e.child, null, i), t.child = kn(t, null, u, i)) : fe(e, t, u, i), t.memoizedState = r.state, l && Vu(t, n, !0), t.child;
}
function vc(e) {
  var t = e.stateNode;
  t.pendingContext ? Bu(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Bu(e, t.context, !1), Uo(e, t.containerInfo);
}
function oa(e, t, n, r, l) {
  return yn(), Lo(l), t.flags |= 256, fe(e, t, n, r), t.child;
}
var qi = { dehydrated: null, treeContext: null, retryLane: 0 };
function bi(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function yc(e, t, n) {
  var r = t.pendingProps, l = B.current, i = !1, o = (t.flags & 128) !== 0, u;
  if ((u = o) || (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), u ? (i = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), F(B, l & 1), e === null)
    return Qi(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, i ? (r = t.mode, i = t.child, o = { mode: "hidden", children: o }, !(r & 1) && i !== null ? (i.childLanes = 0, i.pendingProps = o) : i = Fl(o, r, 0, null), e = Ft(e, r, n, null), i.return = t, e.return = t, i.sibling = e, t.child = i, t.child.memoizedState = bi(n), t.memoizedState = qi, e) : Go(t, o));
  if (l = e.memoizedState, l !== null && (u = l.dehydrated, u !== null)) return tp(e, t, o, r, u, l, n);
  if (i) {
    i = r.fallback, o = t.mode, l = e.child, u = l.sibling;
    var a = { mode: "hidden", children: r.children };
    return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = a, t.deletions = null) : (r = wt(l, a), r.subtreeFlags = l.subtreeFlags & 14680064), u !== null ? i = wt(u, i) : (i = Ft(i, o, n, null), i.flags |= 2), i.return = t, r.return = t, r.sibling = i, t.child = r, r = i, i = t.child, o = e.child.memoizedState, o = o === null ? bi(n) : { baseLanes: o.baseLanes | n, cachePool: null, transitions: o.transitions }, i.memoizedState = o, i.childLanes = e.childLanes & ~n, t.memoizedState = qi, r;
  }
  return i = e.child, e = i.sibling, r = wt(i, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
}
function Go(e, t) {
  return t = Fl({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
}
function Lr(e, t, n, r) {
  return r !== null && Lo(r), kn(t, e.child, null, n), e = Go(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
}
function tp(e, t, n, r, l, i, o) {
  if (n)
    return t.flags & 256 ? (t.flags &= -257, r = di(Error(E(422))), Lr(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (i = r.fallback, l = t.mode, r = Fl({ mode: "visible", children: r.children }, l, 0, null), i = Ft(i, l, o, null), i.flags |= 2, r.return = t, i.return = t, r.sibling = i, t.child = r, t.mode & 1 && kn(t, e.child, null, o), t.child.memoizedState = bi(o), t.memoizedState = qi, i);
  if (!(t.mode & 1)) return Lr(e, t, o, null);
  if (l.data === "$!") {
    if (r = l.nextSibling && l.nextSibling.dataset, r) var u = r.dgst;
    return r = u, i = Error(E(419)), r = di(i, r, void 0), Lr(e, t, o, r);
  }
  if (u = (o & e.childLanes) !== 0, ge || u) {
    if (r = ne, r !== null) {
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
    return eu(), r = di(Error(E(421))), Lr(e, t, o, r);
  }
  return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = mp.bind(null, e), l._reactRetry = t, null) : (e = i.treeContext, Ee = vt(l.nextSibling), xe = t, W = !0, Ie = null, e !== null && (Ne[Te++] = Je, Ne[Te++] = qe, Ne[Te++] = Ut, Je = e.id, qe = e.overflow, Ut = t), t = Go(t, r.children), t.flags |= 4096, t);
}
function ua(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Ki(e.return, t, n);
}
function pi(e, t, n, r, l) {
  var i = e.memoizedState;
  i === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (i.isBackwards = t, i.rendering = null, i.renderingStartTime = 0, i.last = r, i.tail = n, i.tailMode = l);
}
function kc(e, t, n) {
  var r = t.pendingProps, l = r.revealOrder, i = r.tail;
  if (fe(e, t, r.children, n), r = B.current, r & 2) r = r & 1 | 2, t.flags |= 128;
  else {
    if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
      if (e.tag === 13) e.memoizedState !== null && ua(e, n, t);
      else if (e.tag === 19) ua(e, n, t);
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
      for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && gl(e) === null && (l = n), n = n.sibling;
      n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), pi(t, !1, l, n, i);
      break;
    case "backwards":
      for (n = null, l = t.child, t.child = null; l !== null; ) {
        if (e = l.alternate, e !== null && gl(e) === null) {
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
function Zr(e, t) {
  !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
}
function rt(e, t, n) {
  if (e !== null && (t.dependencies = e.dependencies), Wt |= t.lanes, !(n & t.childLanes)) return null;
  if (e !== null && t.child !== e.child) throw Error(E(153));
  if (t.child !== null) {
    for (e = t.child, n = wt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = wt(e, e.pendingProps), n.return = t;
    n.sibling = null;
  }
  return t.child;
}
function np(e, t, n) {
  switch (t.tag) {
    case 3:
      vc(t), yn();
      break;
    case 5:
      Qs(t);
      break;
    case 1:
      ye(t.type) && cl(t);
      break;
    case 4:
      Uo(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context, l = t.memoizedProps.value;
      F(pl, r._currentValue), r._currentValue = l;
      break;
    case 13:
      if (r = t.memoizedState, r !== null)
        return r.dehydrated !== null ? (F(B, B.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? yc(e, t, n) : (F(B, B.current & 1), e = rt(e, t, n), e !== null ? e.sibling : null);
      F(B, B.current & 1);
      break;
    case 19:
      if (r = (n & t.childLanes) !== 0, e.flags & 128) {
        if (r) return kc(e, t, n);
        t.flags |= 128;
      }
      if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), F(B, B.current), r) break;
      return null;
    case 22:
    case 23:
      return t.lanes = 0, hc(e, t, n);
  }
  return rt(e, t, n);
}
var Sc, eo, wc, Ec;
Sc = function(e, t) {
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
wc = function(e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    e = t.stateNode, zt(Qe.current);
    var i = null;
    switch (n) {
      case "input":
        l = Ei(e, l), r = Ei(e, r), i = [];
        break;
      case "select":
        l = Q({}, l, { value: void 0 }), r = Q({}, r, { value: void 0 }), i = [];
        break;
      case "textarea":
        l = _i(e, l), r = _i(e, r), i = [];
        break;
      default:
        typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = al);
    }
    Ni(n, r);
    var o;
    n = null;
    for (c in l) if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null) if (c === "style") {
      var u = l[c];
      for (o in u) u.hasOwnProperty(o) && (n || (n = {}), n[o] = "");
    } else c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (Jn.hasOwnProperty(c) ? i || (i = []) : (i = i || []).push(c, null));
    for (c in r) {
      var a = r[c];
      if (u = l != null ? l[c] : void 0, r.hasOwnProperty(c) && a !== u && (a != null || u != null)) if (c === "style") if (u) {
        for (o in u) !u.hasOwnProperty(o) || a && a.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
        for (o in a) a.hasOwnProperty(o) && u[o] !== a[o] && (n || (n = {}), n[o] = a[o]);
      } else n || (i || (i = []), i.push(
        c,
        n
      )), n = a;
      else c === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, u = u ? u.__html : void 0, a != null && u !== a && (i = i || []).push(c, a)) : c === "children" ? typeof a != "string" && typeof a != "number" || (i = i || []).push(c, "" + a) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (Jn.hasOwnProperty(c) ? (a != null && c === "onScroll" && U("scroll", e), i || u === a || (i = [])) : (i = i || []).push(c, a));
    }
    n && (i = i || []).push("style", n);
    var c = i;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
Ec = function(e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Mn(e, t) {
  if (!W) switch (e.tailMode) {
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
function rp(e, t, n) {
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
      return ue(t), null;
    case 1:
      return ye(t.type) && sl(), ue(t), null;
    case 3:
      return r = t.stateNode, Sn(), H(ve), H(ce), Wo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Ar(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, Ie !== null && (ao(Ie), Ie = null))), eo(e, t), ue(t), null;
    case 5:
      Ho(t);
      var l = zt(sr.current);
      if (n = t.type, e !== null && t.stateNode != null) wc(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(E(166));
          return ue(t), null;
        }
        if (e = zt(Qe.current), Ar(t)) {
          r = t.stateNode, n = t.type;
          var i = t.memoizedProps;
          switch (r[Be] = t, r[ur] = i, e = (t.mode & 1) !== 0, n) {
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
              gu(r, i), U("invalid", r);
              break;
            case "select":
              r._wrapperState = { wasMultiple: !!i.multiple }, U("invalid", r);
              break;
            case "textarea":
              yu(r, i), U("invalid", r);
          }
          Ni(n, i), l = null;
          for (var o in i) if (i.hasOwnProperty(o)) {
            var u = i[o];
            o === "children" ? typeof u == "string" ? r.textContent !== u && (i.suppressHydrationWarning !== !0 && jr(r.textContent, u, e), l = ["children", u]) : typeof u == "number" && r.textContent !== "" + u && (i.suppressHydrationWarning !== !0 && jr(
              r.textContent,
              u,
              e
            ), l = ["children", "" + u]) : Jn.hasOwnProperty(o) && u != null && o === "onScroll" && U("scroll", r);
          }
          switch (n) {
            case "input":
              xr(r), vu(r, i, !0);
              break;
            case "textarea":
              xr(r), ku(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = al);
          }
          r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
        } else {
          o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Za(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, { is: r.is }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[Be] = t, e[ur] = r, Sc(e, t, !1, !1), t.stateNode = e;
          e: {
            switch (o = Ti(n, r), n) {
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
                gu(e, r), l = Ei(e, r), U("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                e._wrapperState = { wasMultiple: !!r.multiple }, l = Q({}, r, { value: void 0 }), U("invalid", e);
                break;
              case "textarea":
                yu(e, r), l = _i(e, r), U("invalid", e);
                break;
              default:
                l = r;
            }
            Ni(n, l), u = l;
            for (i in u) if (u.hasOwnProperty(i)) {
              var a = u[i];
              i === "style" ? ba(e, a) : i === "dangerouslySetInnerHTML" ? (a = a ? a.__html : void 0, a != null && Ja(e, a)) : i === "children" ? typeof a == "string" ? (n !== "textarea" || a !== "") && qn(e, a) : typeof a == "number" && qn(e, "" + a) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (Jn.hasOwnProperty(i) ? a != null && i === "onScroll" && U("scroll", e) : a != null && yo(e, i, a, o));
            }
            switch (n) {
              case "input":
                xr(e), vu(e, r, !1);
                break;
              case "textarea":
                xr(e), ku(e);
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
                typeof l.onClick == "function" && (e.onclick = al);
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
      if (e && t.stateNode != null) Ec(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
        if (n = zt(sr.current), zt(Qe.current), Ar(t)) {
          if (r = t.stateNode, n = t.memoizedProps, r[Be] = t, (i = r.nodeValue !== n) && (e = xe, e !== null)) switch (e.tag) {
            case 3:
              jr(r.nodeValue, n, (e.mode & 1) !== 0);
              break;
            case 5:
              e.memoizedProps.suppressHydrationWarning !== !0 && jr(r.nodeValue, n, (e.mode & 1) !== 0);
          }
          i && (t.flags |= 4);
        } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Be] = t, t.stateNode = r;
      }
      return ue(t), null;
    case 13:
      if (H(B), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
        if (W && Ee !== null && t.mode & 1 && !(t.flags & 128)) Us(), yn(), t.flags |= 98560, i = !1;
        else if (i = Ar(t), r !== null && r.dehydrated !== null) {
          if (e === null) {
            if (!i) throw Error(E(318));
            if (i = t.memoizedState, i = i !== null ? i.dehydrated : null, !i) throw Error(E(317));
            i[Be] = t;
          } else yn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
          ue(t), i = !1;
        } else Ie !== null && (ao(Ie), Ie = null), i = !0;
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || B.current & 1 ? b === 0 && (b = 3) : eu())), t.updateQueue !== null && (t.flags |= 4), ue(t), null);
    case 4:
      return Sn(), eo(e, t), e === null && ir(t.stateNode.containerInfo), ue(t), null;
    case 10:
      return Oo(t.type._context), ue(t), null;
    case 17:
      return ye(t.type) && sl(), ue(t), null;
    case 19:
      if (H(B), i = t.memoizedState, i === null) return ue(t), null;
      if (r = (t.flags & 128) !== 0, o = i.rendering, o === null) if (r) Mn(i, !1);
      else {
        if (b !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
          if (o = gl(e), o !== null) {
            for (t.flags |= 128, Mn(i, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) i = n, e = r, i.flags &= 14680066, o = i.alternate, o === null ? (i.childLanes = 0, i.lanes = e, i.child = null, i.subtreeFlags = 0, i.memoizedProps = null, i.memoizedState = null, i.updateQueue = null, i.dependencies = null, i.stateNode = null) : (i.childLanes = o.childLanes, i.lanes = o.lanes, i.child = o.child, i.subtreeFlags = 0, i.deletions = null, i.memoizedProps = o.memoizedProps, i.memoizedState = o.memoizedState, i.updateQueue = o.updateQueue, i.type = o.type, e = o.dependencies, i.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
            return F(B, B.current & 1 | 2), t.child;
          }
          e = e.sibling;
        }
        i.tail !== null && G() > En && (t.flags |= 128, r = !0, Mn(i, !1), t.lanes = 4194304);
      }
      else {
        if (!r) if (e = gl(o), e !== null) {
          if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), Mn(i, !0), i.tail === null && i.tailMode === "hidden" && !o.alternate && !W) return ue(t), null;
        } else 2 * G() - i.renderingStartTime > En && n !== 1073741824 && (t.flags |= 128, r = !0, Mn(i, !1), t.lanes = 4194304);
        i.isBackwards ? (o.sibling = t.child, t.child = o) : (n = i.last, n !== null ? n.sibling = o : t.child = o, i.last = o);
      }
      return i.tail !== null ? (t = i.tail, i.rendering = t, i.tail = t.sibling, i.renderingStartTime = G(), t.sibling = null, n = B.current, F(B, r ? n & 1 | 2 : n & 1), t) : (ue(t), null);
    case 22:
    case 23:
      return bo(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? we & 1073741824 && (ue(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ue(t), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(E(156, t.tag));
}
function lp(e, t) {
  switch (zo(t), t.tag) {
    case 1:
      return ye(t.type) && sl(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 3:
      return Sn(), H(ve), H(ce), Wo(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
    case 5:
      return Ho(t), null;
    case 13:
      if (H(B), e = t.memoizedState, e !== null && e.dehydrated !== null) {
        if (t.alternate === null) throw Error(E(340));
        yn();
      }
      return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
    case 19:
      return H(B), null;
    case 4:
      return Sn(), null;
    case 10:
      return Oo(t.type._context), null;
    case 22:
    case 23:
      return bo(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Mr = !1, se = !1, ip = typeof WeakSet == "function" ? WeakSet : Set, N = null;
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
var aa = !1;
function op(e, t) {
  if (Fi = il, e = Ns(), jo(e)) {
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
        var o = 0, u = -1, a = -1, c = 0, h = 0, m = e, p = null;
        t: for (; ; ) {
          for (var k; m !== n || l !== 0 && m.nodeType !== 3 || (u = o + l), m !== i || r !== 0 && m.nodeType !== 3 || (a = o + r), m.nodeType === 3 && (o += m.nodeValue.length), (k = m.firstChild) !== null; )
            p = m, m = k;
          for (; ; ) {
            if (m === e) break t;
            if (p === n && ++c === l && (u = o), p === i && ++h === r && (a = o), (k = m.nextSibling) !== null) break;
            m = p, p = m.parentNode;
          }
          m = k;
        }
        n = u === -1 || a === -1 ? null : { start: u, end: a };
      } else n = null;
    }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for ($i = { focusedElem: e, selectionRange: n }, il = !1, N = t; N !== null; ) if (t = N, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, N = e;
  else for (; N !== null; ) {
    t = N;
    try {
      var w = t.alternate;
      if (t.flags & 1024) switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if (w !== null) {
            var x = w.memoizedProps, j = w.memoizedState, f = t.stateNode, s = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Le(t.type, x), j);
            f.__reactInternalSnapshotBeforeUpdate = s;
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
          throw Error(E(163));
      }
    } catch (v) {
      K(t, t.return, v);
    }
    if (e = t.sibling, e !== null) {
      e.return = t.return, N = e;
      break;
    }
    N = t.return;
  }
  return w = aa, aa = !1, w;
}
function Yn(e, t, n) {
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
function Il(e, t) {
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
function xc(e) {
  var t = e.alternate;
  t !== null && (e.alternate = null, xc(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Be], delete t[ur], delete t[Wi], delete t[Wd], delete t[Bd])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
}
function Cc(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sa(e) {
  e: for (; ; ) {
    for (; e.sibling === null; ) {
      if (e.return === null || Cc(e.return)) return null;
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
  if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = al));
  else if (r !== 4 && (e = e.child, e !== null)) for (ro(e, t, n), e = e.sibling; e !== null; ) ro(e, t, n), e = e.sibling;
}
function lo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && (e = e.child, e !== null)) for (lo(e, t, n), e = e.sibling; e !== null; ) lo(e, t, n), e = e.sibling;
}
var re = null, Me = !1;
function ot(e, t, n) {
  for (n = n.child; n !== null; ) _c(e, t, n), n = n.sibling;
}
function _c(e, t, n) {
  if (Ve && typeof Ve.onCommitFiberUnmount == "function") try {
    Ve.onCommitFiberUnmount(Tl, n);
  } catch {
  }
  switch (n.tag) {
    case 5:
      se || an(n, t);
    case 6:
      var r = re, l = Me;
      re = null, ot(e, t, n), re = r, Me = l, re !== null && (Me ? (e = re, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : re.removeChild(n.stateNode));
      break;
    case 18:
      re !== null && (Me ? (e = re, n = n.stateNode, e.nodeType === 8 ? ii(e.parentNode, n) : e.nodeType === 1 && ii(e, n), nr(e)) : ii(re, n.stateNode));
      break;
    case 4:
      r = re, l = Me, re = n.stateNode.containerInfo, Me = !0, ot(e, t, n), re = r, Me = l;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!se && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
        l = r = r.next;
        do {
          var i = l, o = i.destroy;
          i = i.tag, o !== void 0 && (i & 2 || i & 4) && to(n, t, o), l = l.next;
        } while (l !== r);
      }
      ot(e, t, n);
      break;
    case 1:
      if (!se && (an(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
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
      n.mode & 1 ? (se = (r = se) || n.memoizedState !== null, ot(e, t, n), se = r) : ot(e, t, n);
      break;
    default:
      ot(e, t, n);
  }
}
function ca(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new ip()), t.forEach(function(r) {
      var l = hp.bind(null, e, r);
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
            re = u.stateNode, Me = !1;
            break e;
          case 3:
            re = u.stateNode.containerInfo, Me = !0;
            break e;
          case 4:
            re = u.stateNode.containerInfo, Me = !0;
            break e;
        }
        u = u.return;
      }
      if (re === null) throw Error(E(160));
      _c(i, o, l), re = null, Me = !1;
      var a = l.alternate;
      a !== null && (a.return = null), l.return = null;
    } catch (c) {
      K(l, t, c);
    }
  }
  if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) Pc(t, e), t = t.sibling;
}
function Pc(e, t) {
  var n = e.alternate, r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if (ze(t, e), He(e), r & 4) {
        try {
          Yn(3, e, e.return), Il(3, e);
        } catch (x) {
          K(e, e.return, x);
        }
        try {
          Yn(5, e, e.return);
        } catch (x) {
          K(e, e.return, x);
        }
      }
      break;
    case 1:
      ze(t, e), He(e), r & 512 && n !== null && an(n, n.return);
      break;
    case 5:
      if (ze(t, e), He(e), r & 512 && n !== null && an(n, n.return), e.flags & 32) {
        var l = e.stateNode;
        try {
          qn(l, "");
        } catch (x) {
          K(e, e.return, x);
        }
      }
      if (r & 4 && (l = e.stateNode, l != null)) {
        var i = e.memoizedProps, o = n !== null ? n.memoizedProps : i, u = e.type, a = e.updateQueue;
        if (e.updateQueue = null, a !== null) try {
          u === "input" && i.type === "radio" && i.name != null && Ga(l, i), Ti(u, o);
          var c = Ti(u, i);
          for (o = 0; o < a.length; o += 2) {
            var h = a[o], m = a[o + 1];
            h === "style" ? ba(l, m) : h === "dangerouslySetInnerHTML" ? Ja(l, m) : h === "children" ? qn(l, m) : yo(l, h, m, c);
          }
          switch (u) {
            case "input":
              xi(l, i);
              break;
            case "textarea":
              Xa(l, i);
              break;
            case "select":
              var p = l._wrapperState.wasMultiple;
              l._wrapperState.wasMultiple = !!i.multiple;
              var k = i.value;
              k != null ? cn(l, !!i.multiple, k, !1) : p !== !!i.multiple && (i.defaultValue != null ? cn(
                l,
                !!i.multiple,
                i.defaultValue,
                !0
              ) : cn(l, !!i.multiple, i.multiple ? [] : "", !1));
          }
          l[ur] = i;
        } catch (x) {
          K(e, e.return, x);
        }
      }
      break;
    case 6:
      if (ze(t, e), He(e), r & 4) {
        if (e.stateNode === null) throw Error(E(162));
        l = e.stateNode, i = e.memoizedProps;
        try {
          l.nodeValue = i;
        } catch (x) {
          K(e, e.return, x);
        }
      }
      break;
    case 3:
      if (ze(t, e), He(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
        nr(t.containerInfo);
      } catch (x) {
        K(e, e.return, x);
      }
      break;
    case 4:
      ze(t, e), He(e);
      break;
    case 13:
      ze(t, e), He(e), l = e.child, l.flags & 8192 && (i = l.memoizedState !== null, l.stateNode.isHidden = i, !i || l.alternate !== null && l.alternate.memoizedState !== null || (Jo = G())), r & 4 && ca(e);
      break;
    case 22:
      if (h = n !== null && n.memoizedState !== null, e.mode & 1 ? (se = (c = se) || h, ze(t, e), se = c) : ze(t, e), He(e), r & 8192) {
        if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !h && e.mode & 1) for (N = e, h = e.child; h !== null; ) {
          for (m = N = h; N !== null; ) {
            switch (p = N, k = p.child, p.tag) {
              case 0:
              case 11:
              case 14:
              case 15:
                Yn(4, p, p.return);
                break;
              case 1:
                an(p, p.return);
                var w = p.stateNode;
                if (typeof w.componentWillUnmount == "function") {
                  r = p, n = p.return;
                  try {
                    t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount();
                  } catch (x) {
                    K(r, n, x);
                  }
                }
                break;
              case 5:
                an(p, p.return);
                break;
              case 22:
                if (p.memoizedState !== null) {
                  da(m);
                  continue;
                }
            }
            k !== null ? (k.return = p, N = k) : da(m);
          }
          h = h.sibling;
        }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                l = m.stateNode, c ? (i = l.style, typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (u = m.stateNode, a = m.memoizedProps.style, o = a != null && a.hasOwnProperty("display") ? a.display : null, u.style.display = qa("display", o));
              } catch (x) {
                K(e, e.return, x);
              }
            }
          } else if (m.tag === 6) {
            if (h === null) try {
              m.stateNode.nodeValue = c ? "" : m.memoizedProps;
            } catch (x) {
              K(e, e.return, x);
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
      ze(t, e), He(e), r & 4 && ca(e);
      break;
    case 21:
      break;
    default:
      ze(
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
          if (Cc(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(E(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (qn(l, ""), r.flags &= -33);
          var i = sa(e);
          lo(e, i, l);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo, u = sa(e);
          ro(e, u, o);
          break;
        default:
          throw Error(E(161));
      }
    } catch (a) {
      K(e, e.return, a);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function up(e, t, n) {
  N = e, Nc(e);
}
function Nc(e, t, n) {
  for (var r = (e.mode & 1) !== 0; N !== null; ) {
    var l = N, i = l.child;
    if (l.tag === 22 && r) {
      var o = l.memoizedState !== null || Mr;
      if (!o) {
        var u = l.alternate, a = u !== null && u.memoizedState !== null || se;
        u = Mr;
        var c = se;
        if (Mr = o, (se = a) && !c) for (N = l; N !== null; ) o = N, a = o.child, o.tag === 22 && o.memoizedState !== null ? pa(l) : a !== null ? (a.return = o, N = a) : pa(l);
        for (; i !== null; ) N = i, Nc(i), i = i.sibling;
        N = l, Mr = u, se = c;
      }
      fa(e);
    } else l.subtreeFlags & 8772 && i !== null ? (i.return = l, N = i) : fa(e);
  }
}
function fa(e) {
  for (; N !== null; ) {
    var t = N;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            se || Il(5, t);
            break;
          case 1:
            var r = t.stateNode;
            if (t.flags & 4 && !se) if (n === null) r.componentDidMount();
            else {
              var l = t.elementType === t.type ? n.memoizedProps : Le(t.type, n.memoizedProps);
              r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
            }
            var i = t.updateQueue;
            i !== null && Xu(t, i, r);
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
              Xu(t, o, n);
            }
            break;
          case 5:
            var u = t.stateNode;
            if (n === null && t.flags & 4) {
              n = u;
              var a = t.memoizedProps;
              switch (t.type) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  a.autoFocus && n.focus();
                  break;
                case "img":
                  a.src && (n.src = a.src);
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
                  m !== null && nr(m);
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
            throw Error(E(163));
        }
        se || t.flags & 512 && no(t);
      } catch (p) {
        K(t, t.return, p);
      }
    }
    if (t === e) {
      N = null;
      break;
    }
    if (n = t.sibling, n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function da(e) {
  for (; N !== null; ) {
    var t = N;
    if (t === e) {
      N = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      n.return = t.return, N = n;
      break;
    }
    N = t.return;
  }
}
function pa(e) {
  for (; N !== null; ) {
    var t = N;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Il(4, t);
          } catch (a) {
            K(t, n, a);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (a) {
              K(t, l, a);
            }
          }
          var i = t.return;
          try {
            no(t);
          } catch (a) {
            K(t, i, a);
          }
          break;
        case 5:
          var o = t.return;
          try {
            no(t);
          } catch (a) {
            K(t, o, a);
          }
      }
    } catch (a) {
      K(t, t.return, a);
    }
    if (t === e) {
      N = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      u.return = t.return, N = u;
      break;
    }
    N = t.return;
  }
}
var ap = Math.ceil, kl = lt.ReactCurrentDispatcher, Xo = lt.ReactCurrentOwner, Re = lt.ReactCurrentBatchConfig, M = 0, ne = null, Z = null, le = 0, we = 0, sn = _t(0), b = 0, pr = null, Wt = 0, Ol = 0, Zo = 0, Gn = null, he = null, Jo = 0, En = 1 / 0, Xe = null, Sl = !1, io = null, kt = null, Ir = !1, pt = null, wl = 0, Xn = 0, oo = null, Jr = -1, qr = 0;
function de() {
  return M & 6 ? G() : Jr !== -1 ? Jr : Jr = G();
}
function St(e) {
  return e.mode & 1 ? M & 2 && le !== 0 ? le & -le : Qd.transition !== null ? (qr === 0 && (qr = fs()), qr) : (e = I, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ys(e.type)), e) : 1;
}
function Fe(e, t, n, r) {
  if (50 < Xn) throw Xn = 0, oo = null, Error(E(185));
  hr(e, n, r), (!(M & 2) || e !== ne) && (e === ne && (!(M & 2) && (Ol |= n), b === 4 && ft(e, le)), ke(e, r), n === 1 && M === 0 && !(t.mode & 1) && (En = G() + 500, zl && Pt()));
}
function ke(e, t) {
  var n = e.callbackNode;
  Qf(e, t);
  var r = ll(e, e === ne ? le : 0);
  if (r === 0) n !== null && Eu(n), e.callbackNode = null, e.callbackPriority = 0;
  else if (t = r & -r, e.callbackPriority !== t) {
    if (n != null && Eu(n), t === 1) e.tag === 0 ? Vd(ma.bind(null, e)) : Os(ma.bind(null, e)), Ud(function() {
      !(M & 6) && Pt();
    }), n = null;
    else {
      switch (ds(r)) {
        case 1:
          n = xo;
          break;
        case 4:
          n = ss;
          break;
        case 16:
          n = rl;
          break;
        case 536870912:
          n = cs;
          break;
        default:
          n = rl;
      }
      n = Mc(n, Tc.bind(null, e));
    }
    e.callbackPriority = t, e.callbackNode = n;
  }
}
function Tc(e, t) {
  if (Jr = -1, qr = 0, M & 6) throw Error(E(327));
  var n = e.callbackNode;
  if (hn() && e.callbackNode !== n) return null;
  var r = ll(e, e === ne ? le : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = El(e, r);
  else {
    t = r;
    var l = M;
    M |= 2;
    var i = Rc();
    (ne !== e || le !== t) && (Xe = null, En = G() + 500, Ot(e, t));
    do
      try {
        fp();
        break;
      } catch (u) {
        Dc(e, u);
      }
    while (!0);
    Io(), kl.current = i, M = l, Z !== null ? t = 0 : (ne = null, le = 0, t = b);
  }
  if (t !== 0) {
    if (t === 2 && (l = zi(e), l !== 0 && (r = l, t = uo(e, l))), t === 1) throw n = pr, Ot(e, 0), ft(e, r), ke(e, G()), n;
    if (t === 6) ft(e, r);
    else {
      if (l = e.current.alternate, !(r & 30) && !sp(l) && (t = El(e, r), t === 2 && (i = zi(e), i !== 0 && (r = i, t = uo(e, i))), t === 1)) throw n = pr, Ot(e, 0), ft(e, r), ke(e, G()), n;
      switch (e.finishedWork = l, e.finishedLanes = r, t) {
        case 0:
        case 1:
          throw Error(E(345));
        case 2:
          Rt(e, he, Xe);
          break;
        case 3:
          if (ft(e, r), (r & 130023424) === r && (t = Jo + 500 - G(), 10 < t)) {
            if (ll(e, 0) !== 0) break;
            if (l = e.suspendedLanes, (l & r) !== r) {
              de(), e.pingedLanes |= e.suspendedLanes & l;
              break;
            }
            e.timeoutHandle = Hi(Rt.bind(null, e, he, Xe), t);
            break;
          }
          Rt(e, he, Xe);
          break;
        case 4:
          if (ft(e, r), (r & 4194240) === r) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var o = 31 - Oe(r);
            i = 1 << o, o = t[o], o > l && (l = o), r &= ~i;
          }
          if (r = l, r = G() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * ap(r / 1960)) - r, 10 < r) {
            e.timeoutHandle = Hi(Rt.bind(null, e, he, Xe), r);
            break;
          }
          Rt(e, he, Xe);
          break;
        case 5:
          Rt(e, he, Xe);
          break;
        default:
          throw Error(E(329));
      }
    }
  }
  return ke(e, G()), e.callbackNode === n ? Tc.bind(null, e) : null;
}
function uo(e, t) {
  var n = Gn;
  return e.current.memoizedState.isDehydrated && (Ot(e, t).flags |= 256), e = El(e, t), e !== 2 && (t = he, he = n, t !== null && ao(t)), e;
}
function ao(e) {
  he === null ? he = e : he.push.apply(he, e);
}
function sp(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
        var l = n[r], i = l.getSnapshot;
        l = l.value;
        try {
          if (!$e(i(), l)) return !1;
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
  for (t &= ~Zo, t &= ~Ol, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
    var n = 31 - Oe(t), r = 1 << n;
    e[n] = -1, t &= ~r;
  }
}
function ma(e) {
  if (M & 6) throw Error(E(327));
  hn();
  var t = ll(e, 0);
  if (!(t & 1)) return ke(e, G()), null;
  var n = El(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = zi(e);
    r !== 0 && (t = r, n = uo(e, r));
  }
  if (n === 1) throw n = pr, Ot(e, 0), ft(e, t), ke(e, G()), n;
  if (n === 6) throw Error(E(345));
  return e.finishedWork = e.current.alternate, e.finishedLanes = t, Rt(e, he, Xe), ke(e, G()), null;
}
function qo(e, t) {
  var n = M;
  M |= 1;
  try {
    return e(t);
  } finally {
    M = n, M === 0 && (En = G() + 500, zl && Pt());
  }
}
function Bt(e) {
  pt !== null && pt.tag === 0 && !(M & 6) && hn();
  var t = M;
  M |= 1;
  var n = Re.transition, r = I;
  try {
    if (Re.transition = null, I = 1, e) return e();
  } finally {
    I = r, Re.transition = n, M = t, !(M & 6) && Pt();
  }
}
function bo() {
  we = sn.current, H(sn);
}
function Ot(e, t) {
  e.finishedWork = null, e.finishedLanes = 0;
  var n = e.timeoutHandle;
  if (n !== -1 && (e.timeoutHandle = -1, $d(n)), Z !== null) for (n = Z.return; n !== null; ) {
    var r = n;
    switch (zo(r), r.tag) {
      case 1:
        r = r.type.childContextTypes, r != null && sl();
        break;
      case 3:
        Sn(), H(ve), H(ce), Wo();
        break;
      case 5:
        Ho(r);
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
        Oo(r.type._context);
        break;
      case 22:
      case 23:
        bo();
    }
    n = n.return;
  }
  if (ne = e, Z = e = wt(e.current, null), le = we = t, b = 0, pr = null, Zo = Ol = Wt = 0, he = Gn = null, At !== null) {
    for (t = 0; t < At.length; t++) if (n = At[t], r = n.interleaved, r !== null) {
      n.interleaved = null;
      var l = r.next, i = n.pending;
      if (i !== null) {
        var o = i.next;
        i.next = l, r.next = o;
      }
      n.pending = r;
    }
    At = null;
  }
  return e;
}
function Dc(e, t) {
  do {
    var n = Z;
    try {
      if (Io(), Gr.current = yl, vl) {
        for (var r = V.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), r = r.next;
        }
        vl = !1;
      }
      if (Ht = 0, te = q = V = null, Kn = !1, cr = 0, Xo.current = null, n === null || n.return === null) {
        b = 1, pr = t, Z = null;
        break;
      }
      e: {
        var i = e, o = n.return, u = n, a = t;
        if (t = le, u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
          var c = a, h = u, m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p ? (h.updateQueue = p.updateQueue, h.memoizedState = p.memoizedState, h.lanes = p.lanes) : (h.updateQueue = null, h.memoizedState = null);
          }
          var k = ta(o);
          if (k !== null) {
            k.flags &= -257, na(k, o, u, i, t), k.mode & 1 && ea(i, c, t), t = k, a = c;
            var w = t.updateQueue;
            if (w === null) {
              var x = /* @__PURE__ */ new Set();
              x.add(a), t.updateQueue = x;
            } else w.add(a);
            break e;
          } else {
            if (!(t & 1)) {
              ea(i, c, t), eu();
              break e;
            }
            a = Error(E(426));
          }
        } else if (W && u.mode & 1) {
          var j = ta(o);
          if (j !== null) {
            !(j.flags & 65536) && (j.flags |= 256), na(j, o, u, i, t), Lo(wn(a, u));
            break e;
          }
        }
        i = a = wn(a, u), b !== 4 && (b = 2), Gn === null ? Gn = [i] : Gn.push(i), i = o;
        do {
          switch (i.tag) {
            case 3:
              i.flags |= 65536, t &= -t, i.lanes |= t;
              var f = dc(i, a, t);
              Gu(i, f);
              break e;
            case 1:
              u = a;
              var s = i.type, d = i.stateNode;
              if (!(i.flags & 128) && (typeof s.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (kt === null || !kt.has(d)))) {
                i.flags |= 65536, t &= -t, i.lanes |= t;
                var v = pc(i, u, t);
                Gu(i, v);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      Ac(n);
    } catch (y) {
      t = y, Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Rc() {
  var e = kl.current;
  return kl.current = yl, e === null ? yl : e;
}
function eu() {
  (b === 0 || b === 3 || b === 2) && (b = 4), ne === null || !(Wt & 268435455) && !(Ol & 268435455) || ft(ne, le);
}
function El(e, t) {
  var n = M;
  M |= 2;
  var r = Rc();
  (ne !== e || le !== t) && (Xe = null, Ot(e, t));
  do
    try {
      cp();
      break;
    } catch (l) {
      Dc(e, l);
    }
  while (!0);
  if (Io(), M = n, kl.current = r, Z !== null) throw Error(E(261));
  return ne = null, le = 0, b;
}
function cp() {
  for (; Z !== null; ) jc(Z);
}
function fp() {
  for (; Z !== null && !If(); ) jc(Z);
}
function jc(e) {
  var t = Lc(e.alternate, e, we);
  e.memoizedProps = e.pendingProps, t === null ? Ac(e) : Z = t, Xo.current = null;
}
function Ac(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (e = t.return, t.flags & 32768) {
      if (n = lp(n, t), n !== null) {
        n.flags &= 32767, Z = n;
        return;
      }
      if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
      else {
        b = 6, Z = null;
        return;
      }
    } else if (n = rp(n, t, we), n !== null) {
      Z = n;
      return;
    }
    if (t = t.sibling, t !== null) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  b === 0 && (b = 5);
}
function Rt(e, t, n) {
  var r = I, l = Re.transition;
  try {
    Re.transition = null, I = 1, dp(e, t, n, r);
  } finally {
    Re.transition = l, I = r;
  }
  return null;
}
function dp(e, t, n, r) {
  do
    hn();
  while (pt !== null);
  if (M & 6) throw Error(E(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
  e.callbackNode = null, e.callbackPriority = 0;
  var i = n.lanes | n.childLanes;
  if (Kf(e, i), e === ne && (Z = ne = null, le = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || Ir || (Ir = !0, Mc(rl, function() {
    return hn(), null;
  })), i = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || i) {
    i = Re.transition, Re.transition = null;
    var o = I;
    I = 1;
    var u = M;
    M |= 4, Xo.current = null, op(e, n), Pc(n, e), Ad($i), il = !!Fi, $i = Fi = null, e.current = n, up(n), Of(), M = u, I = o, Re.transition = i;
  } else e.current = n;
  if (Ir && (Ir = !1, pt = e, wl = l), i = e.pendingLanes, i === 0 && (kt = null), Uf(n.stateNode), ke(e, G()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
  if (Sl) throw Sl = !1, e = io, io = null, e;
  return wl & 1 && e.tag !== 0 && hn(), i = e.pendingLanes, i & 1 ? e === oo ? Xn++ : (Xn = 0, oo = e) : Xn = 0, Pt(), null;
}
function hn() {
  if (pt !== null) {
    var e = ds(wl), t = Re.transition, n = I;
    try {
      if (Re.transition = null, I = 16 > e ? 16 : e, pt === null) var r = !1;
      else {
        if (e = pt, pt = null, wl = 0, M & 6) throw Error(E(331));
        var l = M;
        for (M |= 4, N = e.current; N !== null; ) {
          var i = N, o = i.child;
          if (N.flags & 16) {
            var u = i.deletions;
            if (u !== null) {
              for (var a = 0; a < u.length; a++) {
                var c = u[a];
                for (N = c; N !== null; ) {
                  var h = N;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Yn(8, h, i);
                  }
                  var m = h.child;
                  if (m !== null) m.return = h, N = m;
                  else for (; N !== null; ) {
                    h = N;
                    var p = h.sibling, k = h.return;
                    if (xc(h), h === c) {
                      N = null;
                      break;
                    }
                    if (p !== null) {
                      p.return = k, N = p;
                      break;
                    }
                    N = k;
                  }
                }
              }
              var w = i.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var j = x.sibling;
                    x.sibling = null, x = j;
                  } while (x !== null);
                }
              }
              N = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) o.return = i, N = o;
          else e: for (; N !== null; ) {
            if (i = N, i.flags & 2048) switch (i.tag) {
              case 0:
              case 11:
              case 15:
                Yn(9, i, i.return);
            }
            var f = i.sibling;
            if (f !== null) {
              f.return = i.return, N = f;
              break e;
            }
            N = i.return;
          }
        }
        var s = e.current;
        for (N = s; N !== null; ) {
          o = N;
          var d = o.child;
          if (o.subtreeFlags & 2064 && d !== null) d.return = o, N = d;
          else e: for (o = s; N !== null; ) {
            if (u = N, u.flags & 2048) try {
              switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  Il(9, u);
              }
            } catch (y) {
              K(u, u.return, y);
            }
            if (u === o) {
              N = null;
              break e;
            }
            var v = u.sibling;
            if (v !== null) {
              v.return = u.return, N = v;
              break e;
            }
            N = u.return;
          }
        }
        if (M = l, Pt(), Ve && typeof Ve.onPostCommitFiberRoot == "function") try {
          Ve.onPostCommitFiberRoot(Tl, e);
        } catch {
        }
        r = !0;
      }
      return r;
    } finally {
      I = n, Re.transition = t;
    }
  }
  return !1;
}
function ha(e, t, n) {
  t = wn(n, t), t = dc(e, t, 1), e = yt(e, t, 1), t = de(), e !== null && (hr(e, 1, t), ke(e, t));
}
function K(e, t, n) {
  if (e.tag === 3) ha(e, e, n);
  else for (; t !== null; ) {
    if (t.tag === 3) {
      ha(t, e, n);
      break;
    } else if (t.tag === 1) {
      var r = t.stateNode;
      if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (kt === null || !kt.has(r))) {
        e = wn(n, e), e = pc(t, e, 1), t = yt(t, e, 1), e = de(), t !== null && (hr(t, 1, e), ke(t, e));
        break;
      }
    }
    t = t.return;
  }
}
function pp(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t), t = de(), e.pingedLanes |= e.suspendedLanes & n, ne === e && (le & n) === n && (b === 4 || b === 3 && (le & 130023424) === le && 500 > G() - Jo ? Ot(e, 0) : Zo |= n), ke(e, t);
}
function zc(e, t) {
  t === 0 && (e.mode & 1 ? (t = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : t = 1);
  var n = de();
  e = nt(e, t), e !== null && (hr(e, t, n), ke(e, n));
}
function mp(e) {
  var t = e.memoizedState, n = 0;
  t !== null && (n = t.retryLane), zc(e, n);
}
function hp(e, t) {
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
      throw Error(E(314));
  }
  r !== null && r.delete(t), zc(e, n);
}
var Lc;
Lc = function(e, t, n) {
  if (e !== null) if (e.memoizedProps !== t.pendingProps || ve.current) ge = !0;
  else {
    if (!(e.lanes & n) && !(t.flags & 128)) return ge = !1, np(e, t, n);
    ge = !!(e.flags & 131072);
  }
  else ge = !1, W && t.flags & 1048576 && Fs(t, dl, t.index);
  switch (t.lanes = 0, t.tag) {
    case 2:
      var r = t.type;
      Zr(e, t), e = t.pendingProps;
      var l = vn(t, ce.current);
      mn(t, n), l = Vo(null, t, r, e, l, n);
      var i = Qo();
      return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, ye(r) ? (i = !0, cl(t)) : i = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, $o(t), l.updater = Ml, t.stateNode = l, l._reactInternals = t, Gi(t, r, e, n), t = Ji(null, t, r, !0, i, n)) : (t.tag = 0, W && i && Ao(t), fe(null, t, l, n), t = t.child), t;
    case 16:
      r = t.elementType;
      e: {
        switch (Zr(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = vp(r), e = Le(r, e), l) {
          case 0:
            t = Zi(null, t, r, e, n);
            break e;
          case 1:
            t = ia(null, t, r, e, n);
            break e;
          case 11:
            t = ra(null, t, r, e, n);
            break e;
          case 14:
            t = la(null, t, r, Le(r.type, e), n);
            break e;
        }
        throw Error(E(
          306,
          r,
          ""
        ));
      }
      return t;
    case 0:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Zi(e, t, r, l, n);
    case 1:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), ia(e, t, r, l, n);
    case 3:
      e: {
        if (vc(t), e === null) throw Error(E(387));
        r = t.pendingProps, i = t.memoizedState, l = i.element, Vs(e, t), hl(t, r, null, n);
        var o = t.memoizedState;
        if (r = o.element, i.isDehydrated) if (i = { element: r, isDehydrated: !1, cache: o.cache, pendingSuspenseBoundaries: o.pendingSuspenseBoundaries, transitions: o.transitions }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
          l = wn(Error(E(423)), t), t = oa(e, t, r, n, l);
          break e;
        } else if (r !== l) {
          l = wn(Error(E(424)), t), t = oa(e, t, r, n, l);
          break e;
        } else for (Ee = vt(t.stateNode.containerInfo.firstChild), xe = t, W = !0, Ie = null, n = Ws(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
        else {
          if (yn(), r === l) {
            t = rt(e, t, n);
            break e;
          }
          fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return Qs(t), e === null && Qi(t), r = t.type, l = t.pendingProps, i = e !== null ? e.memoizedProps : null, o = l.children, Ui(r, l) ? o = null : i !== null && Ui(r, i) && (t.flags |= 32), gc(e, t), fe(e, t, o, n), t.child;
    case 6:
      return e === null && Qi(t), null;
    case 13:
      return yc(e, t, n);
    case 4:
      return Uo(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = kn(t, null, r, n) : fe(e, t, r, n), t.child;
    case 11:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), ra(e, t, r, l, n);
    case 7:
      return fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (r = t.type._context, l = t.pendingProps, i = t.memoizedProps, o = l.value, F(pl, r._currentValue), r._currentValue = o, i !== null) if ($e(i.value, o)) {
          if (i.children === l.children && !ve.current) {
            t = rt(e, t, n);
            break e;
          }
        } else for (i = t.child, i !== null && (i.return = t); i !== null; ) {
          var u = i.dependencies;
          if (u !== null) {
            o = i.child;
            for (var a = u.firstContext; a !== null; ) {
              if (a.context === r) {
                if (i.tag === 1) {
                  a = be(-1, n & -n), a.tag = 2;
                  var c = i.updateQueue;
                  if (c !== null) {
                    c = c.shared;
                    var h = c.pending;
                    h === null ? a.next = a : (a.next = h.next, h.next = a), c.pending = a;
                  }
                }
                i.lanes |= n, a = i.alternate, a !== null && (a.lanes |= n), Ki(
                  i.return,
                  n,
                  t
                ), u.lanes |= n;
                break;
              }
              a = a.next;
            }
          } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
          else if (i.tag === 18) {
            if (o = i.return, o === null) throw Error(E(341));
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
        fe(e, t, l.children, n), t = t.child;
      }
      return t;
    case 9:
      return l = t.type, r = t.pendingProps.children, mn(t, n), l = je(l), r = r(l), t.flags |= 1, fe(e, t, r, n), t.child;
    case 14:
      return r = t.type, l = Le(r, t.pendingProps), l = Le(r.type, l), la(e, t, r, l, n);
    case 15:
      return mc(e, t, t.type, t.pendingProps, n);
    case 17:
      return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Le(r, l), Zr(e, t), t.tag = 1, ye(r) ? (e = !0, cl(t)) : e = !1, mn(t, n), fc(t, r, l), Gi(t, r, l, n), Ji(null, t, r, !0, e, n);
    case 19:
      return kc(e, t, n);
    case 22:
      return hc(e, t, n);
  }
  throw Error(E(156, t.tag));
};
function Mc(e, t) {
  return as(e, t);
}
function gp(e, t, n, r) {
  this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
}
function De(e, t, n, r) {
  return new gp(e, t, n, r);
}
function tu(e) {
  return e = e.prototype, !(!e || !e.isReactComponent);
}
function vp(e) {
  if (typeof e == "function") return tu(e) ? 1 : 0;
  if (e != null) {
    if (e = e.$$typeof, e === So) return 11;
    if (e === wo) return 14;
  }
  return 2;
}
function wt(e, t) {
  var n = e.alternate;
  return n === null ? (n = De(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
}
function br(e, t, n, r, l, i) {
  var o = 2;
  if (r = e, typeof e == "function") tu(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else e: switch (e) {
    case qt:
      return Ft(n.children, l, i, t);
    case ko:
      o = 8, l |= 8;
      break;
    case yi:
      return e = De(12, n, t, l | 2), e.elementType = yi, e.lanes = i, e;
    case ki:
      return e = De(13, n, t, l), e.elementType = ki, e.lanes = i, e;
    case Si:
      return e = De(19, n, t, l), e.elementType = Si, e.lanes = i, e;
    case Qa:
      return Fl(n, l, i, t);
    default:
      if (typeof e == "object" && e !== null) switch (e.$$typeof) {
        case Ba:
          o = 10;
          break e;
        case Va:
          o = 9;
          break e;
        case So:
          o = 11;
          break e;
        case wo:
          o = 14;
          break e;
        case at:
          o = 16, r = null;
          break e;
      }
      throw Error(E(130, e == null ? e : typeof e, ""));
  }
  return t = De(o, n, t, l), t.elementType = e, t.type = r, t.lanes = i, t;
}
function Ft(e, t, n, r) {
  return e = De(7, e, r, t), e.lanes = n, e;
}
function Fl(e, t, n, r) {
  return e = De(22, e, r, t), e.elementType = Qa, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
}
function mi(e, t, n) {
  return e = De(6, e, null, t), e.lanes = n, e;
}
function hi(e, t, n) {
  return t = De(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
}
function yp(e, t, n, r, l) {
  this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Gl(0), this.expirationTimes = Gl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
}
function nu(e, t, n, r, l, i, o, u, a) {
  return e = new yp(e, t, n, u, a), t === 1 ? (t = 1, i === !0 && (t |= 8)) : t = 0, i = De(3, null, null, t), e.current = i, i.stateNode = e, i.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, $o(i), e;
}
function kp(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return { $$typeof: Jt, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function Ic(e) {
  if (!e) return xt;
  e = e._reactInternals;
  e: {
    if (Qt(e) !== e || e.tag !== 1) throw Error(E(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (ye(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(E(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (ye(n)) return Is(e, n, t);
  }
  return t;
}
function Oc(e, t, n, r, l, i, o, u, a) {
  return e = nu(n, r, !0, e, l, i, o, u, a), e.context = Ic(null), n = e.current, r = de(), l = St(n), i = be(r, l), i.callback = t ?? null, yt(n, i, l), e.current.lanes = l, hr(e, l, r), ke(e, r), e;
}
function $l(e, t, n, r) {
  var l = t.current, i = de(), o = St(l);
  return n = Ic(n), t.context === null ? t.context = n : t.pendingContext = n, t = be(i, o), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = yt(l, t, o), e !== null && (Fe(e, l, o, i), Yr(e, l, o)), o;
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
function ga(e, t) {
  if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function ru(e, t) {
  ga(e, t), (e = e.alternate) && ga(e, t);
}
function Sp() {
  return null;
}
var Fc = typeof reportError == "function" ? reportError : function(e) {
  console.error(e);
};
function lu(e) {
  this._internalRoot = e;
}
Ul.prototype.render = lu.prototype.render = function(e) {
  var t = this._internalRoot;
  if (t === null) throw Error(E(409));
  $l(e, t, null, null);
};
Ul.prototype.unmount = lu.prototype.unmount = function() {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Bt(function() {
      $l(null, e, null, null);
    }), t[tt] = null;
  }
};
function Ul(e) {
  this._internalRoot = e;
}
Ul.prototype.unstable_scheduleHydration = function(e) {
  if (e) {
    var t = hs();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < ct.length && t !== 0 && t < ct[n].priority; n++) ;
    ct.splice(n, 0, e), n === 0 && vs(e);
  }
};
function iu(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
}
function Hl(e) {
  return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
}
function va() {
}
function wp(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var c = xl(o);
        i.call(c);
      };
    }
    var o = Oc(t, r, e, 0, null, !1, !1, "", va);
    return e._reactRootContainer = o, e[tt] = o.current, ir(e.nodeType === 8 ? e.parentNode : e), Bt(), o;
  }
  for (; l = e.lastChild; ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function() {
      var c = xl(a);
      u.call(c);
    };
  }
  var a = nu(e, 0, !1, null, null, !1, !1, "", va);
  return e._reactRootContainer = a, e[tt] = a.current, ir(e.nodeType === 8 ? e.parentNode : e), Bt(function() {
    $l(t, a, n, r);
  }), a;
}
function Wl(e, t, n, r, l) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof l == "function") {
      var u = l;
      l = function() {
        var a = xl(o);
        u.call(a);
      };
    }
    $l(t, o, e, l);
  } else o = wp(n, t, e, l, r);
  return xl(o);
}
ps = function(e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = $n(t.pendingLanes);
        n !== 0 && (Co(t, n | 1), ke(t, G()), !(M & 6) && (En = G() + 500, Pt()));
      }
      break;
    case 13:
      Bt(function() {
        var r = nt(e, 1);
        if (r !== null) {
          var l = de();
          Fe(r, e, 1, l);
        }
      }), ru(e, 1);
  }
};
_o = function(e) {
  if (e.tag === 13) {
    var t = nt(e, 134217728);
    if (t !== null) {
      var n = de();
      Fe(t, e, 134217728, n);
    }
    ru(e, 134217728);
  }
};
ms = function(e) {
  if (e.tag === 13) {
    var t = St(e), n = nt(e, t);
    if (n !== null) {
      var r = de();
      Fe(n, e, t, r);
    }
    ru(e, t);
  }
};
hs = function() {
  return I;
};
gs = function(e, t) {
  var n = I;
  try {
    return I = e, t();
  } finally {
    I = n;
  }
};
Ri = function(e, t, n) {
  switch (t) {
    case "input":
      if (xi(e, n), t = n.name, n.type === "radio" && t != null) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = Al(r);
            if (!l) throw Error(E(90));
            Ya(r), xi(r, l);
          }
        }
      }
      break;
    case "textarea":
      Xa(e, n);
      break;
    case "select":
      t = n.value, t != null && cn(e, !!n.multiple, t, !1);
  }
};
ns = qo;
rs = Bt;
var Ep = { usingClientEntryPoint: !1, Events: [vr, nn, Al, es, ts, qo] }, In = { findFiberByHostInstance: jt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, xp = { bundleType: In.bundleType, version: In.version, rendererPackageName: In.rendererPackageName, rendererConfig: In.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: lt.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
  return e = os(e), e === null ? null : e.stateNode;
}, findFiberByHostInstance: In.findFiberByHostInstance || Sp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Or.isDisabled && Or.supportsFiber) try {
    Tl = Or.inject(xp), Ve = Or;
  } catch {
  }
}
_e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ep;
_e.createPortal = function(e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!iu(t)) throw Error(E(200));
  return kp(e, t, null, n);
};
_e.createRoot = function(e, t) {
  if (!iu(e)) throw Error(E(299));
  var n = !1, r = "", l = Fc;
  return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = nu(e, 1, !1, null, null, n, !1, r, l), e[tt] = t.current, ir(e.nodeType === 8 ? e.parentNode : e), new lu(t);
};
_e.findDOMNode = function(e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
  return e = os(t), e = e === null ? null : e.stateNode, e;
};
_e.flushSync = function(e) {
  return Bt(e);
};
_e.hydrate = function(e, t, n) {
  if (!Hl(t)) throw Error(E(200));
  return Wl(null, e, t, !0, n);
};
_e.hydrateRoot = function(e, t, n) {
  if (!iu(e)) throw Error(E(405));
  var r = n != null && n.hydratedSources || null, l = !1, i = "", o = Fc;
  if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (i = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Oc(t, null, e, 1, n ?? null, l, !1, i, o), e[tt] = t.current, ir(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
    n,
    l
  );
  return new Ul(t);
};
_e.render = function(e, t, n) {
  if (!Hl(t)) throw Error(E(200));
  return Wl(null, e, t, !1, n);
};
_e.unmountComponentAtNode = function(e) {
  if (!Hl(e)) throw Error(E(40));
  return e._reactRootContainer ? (Bt(function() {
    Wl(null, null, e, !1, function() {
      e._reactRootContainer = null, e[tt] = null;
    });
  }), !0) : !1;
};
_e.unstable_batchedUpdates = qo;
_e.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
  if (!Hl(n)) throw Error(E(200));
  if (e == null || e._reactInternals === void 0) throw Error(E(38));
  return Wl(e, t, n, !1, r);
};
_e.version = "18.3.1-next-f1338f8080-20240426";
function $c() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($c);
    } catch (e) {
      console.error(e);
    }
}
$c(), $a.exports = _e;
var Cp = $a.exports, ya = Cp;
Zn.createRoot = ya.createRoot, Zn.hydrateRoot = ya.hydrateRoot;
const ka = (e) => e.name, _p = [
  { value: "random:ally", label: "ランダム（味方）" },
  { value: "random:enemy", label: "ランダム（敵）" },
  { value: "random:all", label: "ランダム（全体）" }
], ut = (e) => Number.isFinite(e) ? e.toLocaleString() : "-", Pp = ({ result: e }) => /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__result", children: [
  e.attackerWhiteEffect.applies && /* @__PURE__ */ g.jsxs("div", { children: [
    "白化（他の味方",
    e.attackerWhiteEffect.otherWhiteCount,
    "人）: 与ダメージ +",
    e.attackerWhiteEffect.percentage,
    "%"
  ] }),
  e.receiverWhiteEffect.applies && /* @__PURE__ */ g.jsxs("div", { children: [
    "白化（他の味方",
    e.receiverWhiteEffect.otherWhiteCount,
    "人）: 被ダメージ +",
    e.receiverWhiteEffect.percentage,
    "%"
  ] }),
  e.receiverAnkaEffect.stack > 0 && /* @__PURE__ */ g.jsxs("div", { children: [
    "アンカの渦潮 ",
    e.receiverAnkaEffect.stack,
    ": 被ダメージ +",
    e.receiverAnkaEffect.percentage,
    "%"
  ] }),
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
    ut(e.hpDamageApplied),
    " （バリア吸収",
    " ",
    ut(e.barrierAbsorbed),
    "）"
  ] }),
  /* @__PURE__ */ g.jsxs("div", { children: [
    "耐性限界ダメージ: ",
    ut(e.confDamageApplied)
  ] }),
  /* @__PURE__ */ g.jsxs("div", { children: [
    "SANダメージ(沈潜): ",
    ut(e.sanDamageApplied)
  ] }),
  /* @__PURE__ */ g.jsxs("div", { children: [
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
] }), Tt = (e) => e === 0 ? "±0%" : e > 0 ? `+${e}%` : `${e}%`, Np = ({ tokens: e, model: t, actions: n }) => {
  const {
    selectedAttackerId: r,
    selectedReceiverId: l,
    baseDamage: i,
    bonusNormal: o,
    bonusSpecial: u,
    directAttack: a,
    result: c,
    isRunning: h,
    canRun: m,
    attackerPreview: p,
    receiverPreview: k
  } = t, {
    onAttackerChange: w,
    onReceiverChange: x,
    onBaseDamageChange: j,
    onBonusNormalChange: f,
    onBonusSpecialChange: s,
    onDirectAttackChange: d,
    onRunClick: v
  } = n;
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsx("h3", { children: "ダメージ計算" }) }),
    /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
        "攻撃者:",
        /* @__PURE__ */ g.jsxs("select", { value: r, onChange: (y) => w(y.target.value), children: [
          /* @__PURE__ */ g.jsx("option", { value: "", children: "選択してください" }),
          e.map((y) => /* @__PURE__ */ g.jsx("option", { value: y.actorId, children: ka(y) }, y.actorId))
        ] }),
        p !== null && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
          /* @__PURE__ */ g.jsxs("span", { className: "ponkotu-damage__preview", children: [
            "通常 ",
            Tt(p.normal),
            " / 特殊 ",
            Tt(p.special),
            (p.criticalChance ?? 0) >= 1 ? ` / Crit + ${p.criticalChance} %` : ""
          ] }),
          p.whiteApplies && /* @__PURE__ */ g.jsxs("span", { className: "ponkotu-damage__preview", children: [
            "白化（他の味方",
            p.whiteOtherCount,
            "人）: 与ダメージ +",
            p.whitePercentage,
            "%"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ g.jsx("div", { children: /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
        "防御者:",
        /* @__PURE__ */ g.jsxs("select", { value: l, onChange: (y) => x(y.target.value), children: [
          /* @__PURE__ */ g.jsx("option", { value: "", children: "選択してください" }),
          e.map((y) => /* @__PURE__ */ g.jsx("option", { value: y.actorId, children: ka(y) }, y.actorId))
        ] }),
        k !== null && /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
          /* @__PURE__ */ g.jsxs("span", { className: "ponkotu-damage__preview", children: [
            "通常 ",
            Tt(k.normal),
            " / 特殊 ",
            Tt(k.special)
          ] }),
          k.whiteApplies && /* @__PURE__ */ g.jsxs("span", { className: "ponkotu-damage__preview", children: [
            "白化（他の味方",
            k.whiteOtherCount,
            "人）: 被ダメージ +",
            k.whitePercentage,
            "%"
          ] }),
          k.ankaStack > 0 && /* @__PURE__ */ g.jsxs("span", { className: "ponkotu-damage__preview", children: [
            "アンカの渦潮 ",
            k.ankaStack,
            ": 被ダメージ +",
            k.ankaPercentage,
            "%"
          ] })
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
            value: o,
            onChange: (y) => f(y.target.value),
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
            value: u,
            onChange: (y) => s(y.target.value),
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
          checked: a,
          onChange: (y) => d(y.target.checked)
        }
      ),
      "直接攻撃"
    ] }) }),
    p !== null && k !== null && /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__row ponkotu-damage__total-preview", children: [
      /* @__PURE__ */ g.jsx("span", { children: "攻撃者 - 防御者 の倍率差" }),
      /* @__PURE__ */ g.jsx("div", {}),
      /* @__PURE__ */ g.jsxs("span", { children: [
        "通常倍率: ",
        Tt(p.normal - k.normal)
      ] }),
      /* @__PURE__ */ g.jsx("span", { children: "  +  " }),
      /* @__PURE__ */ g.jsxs("span", { children: [
        "特殊倍率: ",
        Tt(p.special - k.special)
      ] }),
      /* @__PURE__ */ g.jsx("div", {}),
      /* @__PURE__ */ g.jsx("span", { children: " → " }),
      /* @__PURE__ */ g.jsxs("span", { children: [
        "合計倍率: ",
        Tt(p.normal - k.normal + p.special - k.special)
      ] })
    ] }),
    /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
      "基礎ダメージ",
      /* @__PURE__ */ g.jsx(
        "input",
        {
          type: "number",
          value: i,
          onChange: (y) => j(y.target.value),
          placeholder: "例: 12"
        }
      )
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ g.jsx("button", { onClick: v, disabled: h || !m, children: h ? "計算中..." : "計算して適用" }),
      e.length < 2 && /* @__PURE__ */ g.jsx("span", { className: "ponkotu-damage__hint", children: "※ トークンが2体以上必要です" })
    ] }),
    c && /* @__PURE__ */ g.jsx(Pp, { result: c })
  ] });
}, Tp = ({ model: e, actions: t }) => {
  const { isRunning: n, canRun: r } = e, { onRunClick: l } = t;
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsx("h3", { style: { margin: "8px 0" }, children: "ターン処理" }) }),
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsx("button", { onClick: l, disabled: n || !r, children: n ? "処理中..." : "ターン処理(終了→開始)" }) })
  ] });
}, Dp = ({
  tokens: e,
  damageModel: t,
  damageActions: n,
  turnModel: r,
  turnActions: l
}) => /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage", children: [
  /* @__PURE__ */ g.jsx(
    Np,
    {
      tokens: e,
      model: t,
      actions: n
    }
  ),
  /* @__PURE__ */ g.jsx(Tp, { model: r, actions: l })
] }), Uc = 5, Rp = 5, ou = (e) => {
  const t = Math.min(e.getStatusStack("Anka"), Uc);
  return {
    stack: t,
    percentage: t * Rp
  };
}, Hc = (e) => Math.max(0, Math.ceil(e)), Wc = (e, t) => Hc(e * t), so = (e, t = 1) => Hc(e - t), Fr = (e) => Wc(e, 2 / 3), jp = (e) => Wc(e, 1 / 2), Ge = (e, t) => {
  e.getStatusStack(t) > 0 && e.setStatusStack(t, 0);
}, $r = (e, t) => {
  const n = e.getStatusStack(t);
  n > 0 && e.setStatusStack(t, so(n));
}, Se = [
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
      n <= 0 || (e.applyHpDamage(n), e.setStatusStack(t, Fr(n)));
    }
  },
  {
    id: "Poison",
    name: "毒",
    attribute: { stack: "stackPoison", pending: "stackPoisonnext" },
    hasPending: !0,
    onTurnEnd: (e, t) => {
      const n = e.getStatusStack(t);
      n <= 0 || (e.applyHpDamage(n), e.setStatusStack(t, jp(n)));
    }
  },
  {
    id: "Tremor",
    name: "振動",
    attribute: { stack: "stacktremor", pending: "stacktremornext" },
    hasPending: !0,
    onTurnEnd: (e, t) => {
      const n = e.getStatusStack(t);
      n <= 0 || (e.applyHpDamage(n), e.setStatusStack(t, Fr(n)));
    }
  },
  {
    id: "Bleeding",
    name: "出血",
    attribute: { stack: "stackBleeding", pending: "stackBleedingnext" },
    hasPending: !0,
    onTurnEnd: (e, t) => {
      const n = e.getStatusStack(t);
      n <= 0 || e.setStatusStack(t, Fr(n));
    },
    onMatchDamage: (e, t) => {
      const n = e.getStatusStack(t);
      n <= 0 || (e.applyHpDamage(n), e.setStatusStack(t, Fr(n)));
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
    onTurnStart: (e, t) => {
      if (!e.flags.checkHitan) return;
      e.getStatusStack(t) <= 1 && e.setStatusStack(t, 1);
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
    onTurnEnd: (e, t) => {
      const n = e.getStatusStack(t);
      if (e.flags.checkNk) {
        e.addStatusStack(t, 2);
        return;
      }
      n > 0 && e.setStatusStack(t, so(n));
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
    id: "Anka",
    name: "アンカの渦潮",
    attribute: { stack: "stackAnka" },
    maxStack: Uc
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
      l > 0 && e.applyHpDamage(l), e.setStatusStack(t, so(r));
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
], Ap = (e) => {
  var t;
  return (t = Se.find((n) => n.id === e)) == null ? void 0 : t.maxStack;
}, zp = Se.map((e) => e.attribute.stack), Lp = (e) => {
  var n;
  const t = (n = e.system) == null ? void 0 : n.attributes;
  return t != null && t.hp ? zp.some((r) => r in t) : !1;
}, Mp = () => {
  var t;
  const e = (((t = canvas == null ? void 0 : canvas.tokens) == null ? void 0 : t.placeables) ?? []).filter((n) => {
    var r;
    return !!((r = n.actor) != null && r.id) && Lp(n.actor);
  }).map((n) => {
    var r, l, i;
    return {
      actorId: ((r = n.actor) == null ? void 0 : r.id) ?? "",
      name: n.name ?? ((l = n.actor) == null ? void 0 : l.name) ?? "unknown",
      actorName: ((i = n.actor) == null ? void 0 : i.name) ?? "",
      disposition: n.document.disposition
    };
  });
  return Array.from(
    new Map(e.map((n) => [n.actorId, n])).values()
  ).sort((n, r) => r.disposition - n.disposition);
}, Bc = () => {
  const [e, t] = L.useState([]);
  return L.useEffect(() => {
    const n = () => t(Mp()), r = () => n(), l = () => n(), i = () => n();
    return n(), Hooks.on("canvasReady", r), Hooks.on("createToken", l), Hooks.on("updateToken", l), Hooks.on("deleteToken", l), Hooks.on("updateActor", i), () => {
      Hooks.off("canvasReady", r), Hooks.off("createToken", l), Hooks.off("updateToken", l), Hooks.off("deleteToken", l), Hooks.off("updateActor", i);
    };
  }, []), e;
}, Ip = 5, Op = () => ({
  applies: !1,
  otherWhiteCount: 0,
  percentage: 0
}), Cl = (e, t) => {
  if (!e.isPlayer || !e.isWhite()) return Op();
  const r = new Set(
    t.filter(
      (l) => l.id !== e.id && l.isPlayer && l.isWhite()
    ).map((l) => l.id)
  ).size;
  return {
    applies: !0,
    otherWhiteCount: r,
    percentage: r * Ip
  };
};
class Fp {
  constructor(t) {
    var n, r, l, i, o, u;
    this.id = t.id, this.hp = t.hp, this.maxHp = t.maxHp, this.barrier = t.barrier, this.constitution = t.constitution, this.san = t.san, this.isPlayer = t.isPlayer, this.resist = t.resist, this.resistEnemy = t.resistEnemy, this.confResist = t.confResist, this.econfResistEnemy = t.econfResistEnemy, this.doubleConstitution = t.doubleConstitution, this.statuses = t.statuses, this.flags = {
      checkNk: ((n = t.flags) == null ? void 0 : n.checkNk) ?? !1,
      checkAnri: ((r = t.flags) == null ? void 0 : r.checkAnri) ?? !1,
      checkHitan: ((l = t.flags) == null ? void 0 : l.checkHitan) ?? !1,
      checkWhiteAlly: ((i = t.flags) == null ? void 0 : i.checkWhiteAlly) ?? !1,
      checkWhiteLeader: ((o = t.flags) == null ? void 0 : o.checkWhiteLeader) ?? !1,
      checkWhiteEnemy: ((u = t.flags) == null ? void 0 : u.checkWhiteEnemy) ?? !1
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
  isWhite() {
    return this.flags.checkWhiteAlly || this.flags.checkWhiteLeader || this.flags.checkWhiteEnemy;
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
const Ur = (e, t) => {
  const n = Math.max(0, Math.floor(t)), r = Ap(e);
  return r === void 0 ? n : Math.min(n, r);
}, Hr = (e) => Math.max(0, Math.floor(e));
var ae;
class $p {
  constructor(t) {
    Tn(this, ae, /* @__PURE__ */ new Map());
    t && Object.entries(t).forEach(([n, r]) => {
      r && X(this, ae).set(n, {
        stack: Ur(n, r.stack),
        pending: Hr(r.pending)
      });
    });
  }
  getState(t) {
    const n = X(this, ae).get(t);
    return n ? { stack: n.stack, pending: n.pending } : { stack: 0, pending: 0 };
  }
  getStack(t) {
    var n;
    return ((n = X(this, ae).get(t)) == null ? void 0 : n.stack) ?? 0;
  }
  getPending(t) {
    var n;
    return ((n = X(this, ae).get(t)) == null ? void 0 : n.pending) ?? 0;
  }
  setState(t, n) {
    X(this, ae).set(t, {
      stack: Ur(t, n.stack),
      pending: Hr(n.pending)
    });
  }
  setStack(t, n) {
    const r = X(this, ae).get(t) ?? { stack: 0, pending: 0 };
    r.stack = Ur(t, n), X(this, ae).set(t, r);
  }
  setPending(t, n) {
    const r = X(this, ae).get(t) ?? { stack: 0, pending: 0 };
    r.pending = Hr(n), X(this, ae).set(t, r);
  }
  addStack(t, n) {
    const r = X(this, ae).get(t) ?? { stack: 0, pending: 0 };
    r.stack = Ur(t, r.stack + n), X(this, ae).set(t, r);
  }
  addPending(t, n) {
    const r = X(this, ae).get(t) ?? { stack: 0, pending: 0 };
    r.pending = Hr(r.pending + n), X(this, ae).set(t, r);
  }
}
ae = new WeakMap();
const Vc = (e) => e.system.attributes ?? {}, ee = (e, t, n = 0) => {
  var i;
  const r = (i = Vc(e)[t]) == null ? void 0 : i.value;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  if (typeof r == "boolean") return r ? 1 : 0;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, Up = (e, t, n = 0) => {
  var i;
  const r = (i = Vc(e)[t]) == null ? void 0 : i.max;
  if (typeof r == "number" && Number.isFinite(r)) return r;
  const l = Number(r);
  return Number.isFinite(l) ? l : n;
}, Hp = (e) => {
  const t = new $p();
  return Se.forEach((r) => {
    const l = r.attribute, i = ee(e, l.stack, 0), o = l.pending ? ee(e, l.pending, 0) : 0;
    t.setState(r.id, { stack: i, pending: o });
  }), new Fp({
    id: e.id ?? "",
    name: e.name,
    hp: ee(e, "hp", 0),
    maxHp: Up(e, "hp", 0),
    barrier: ee(e, "barrier", 0),
    constitution: ee(e, "constitution", 0),
    san: ee(e, "san", 0),
    isPlayer: ee(e, "isPlayer", 0) > 0,
    resist: ee(e, "resist", 0),
    resistEnemy: ee(e, "resistEnemy", 0),
    confResist: ee(e, "confResist", 0),
    econfResistEnemy: ee(e, "econfResistEnemy", 0),
    doubleConstitution: ee(e, "doubleconstitution", 0) === 1,
    statuses: t,
    flags: {
      checkNk: ee(e, "checknk", 0) > 0,
      checkAnri: ee(e, "checkAnri", 0) > 0,
      checkHitan: ee(e, "checkhitan", 0) > 0,
      checkWhiteAlly: ee(e, "checkWhiteAlly", 0) > 0,
      checkWhiteLeader: ee(e, "checkWhiteLeader", 0) > 0,
      checkWhiteEnemy: ee(e, "checkWhiteEnemy", 0) > 0
    }
  });
}, Sa = (e) => {
  const t = {
    "system.attributes.hp.value": e.hp,
    "system.attributes.barrier.value": e.barrier,
    "system.attributes.constitution.value": e.constitution,
    "system.attributes.san.value": e.san
  };
  return Se.forEach((r) => {
    const l = r.attribute, i = e.statuses.getState(r.id);
    t[`system.attributes.${l.stack}.value`] = i.stack, l.pending && (t[`system.attributes.${l.pending}.value`] = i.pending);
  }), t;
};
class xn {
  loadByActorId(t) {
    var r;
    const n = t ? ((r = game.actors) == null ? void 0 : r.get(t)) ?? null : null;
    return !n || !n.id ? null : {
      actorId: n.id,
      actor: n,
      combatant: Hp(n)
    };
  }
  async saveActor(t) {
    var r;
    const n = t.id ? ((r = game.actors) == null ? void 0 : r.get(t.id)) ?? null : null;
    n && await n.update(Sa(t));
  }
  async save(t) {
    await t.actor.update(Sa(t.combatant));
  }
}
const _l = {
  FRIENDLY: 1
}, uu = Se, Wp = (e, t) => {
  uu.forEach((n) => {
    var r;
    (r = n.onDealDamage) == null || r.call(n, e, n.id, t);
  });
}, wa = (e, t) => {
  uu.forEach((n) => {
    var r;
    (r = n.onMatchDamage) == null || r.call(n, e, n.id, t);
  });
}, Bp = (e, t) => {
  uu.forEach((n) => {
    var r;
    (r = n.onTakeDamage) == null || r.call(n, e, n.id, t);
  });
}, Vp = (e, t) => {
  const n = e.statuses.getStack("DamageUp"), r = e.statuses.getStack("DamageDown");
  return n * 10 - r * 10 + (t ? 50 : 0);
}, Qc = (e) => {
  const t = e.statuses.getStack("Poise"), n = e.statuses.getStack("Sword");
  return Math.min(t * 5 + n, 100);
}, Qp = (e, t) => {
  let n = 0, r = !1;
  const l = e.statuses.getStack("Sword"), i = Qc(e);
  return i > 0 && t() * 100 < i && (n += 20 + Math.floor(l / 2), r = !0), { special: n, criticalHit: r };
}, Kc = (e) => {
  const t = e.statuses.getStack("Protection"), n = e.statuses.getStack("Vulnerable"), r = ou(e);
  return t * 10 - n * 10 - r.percentage;
}, Yc = (e) => {
  const t = e.isPlayer ? e.resist : e.resistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Kp = (e) => {
  const t = e.isPlayer ? e.confResist : e.econfResistEnemy;
  return e.constitution <= 0 ? -100 : t;
}, Yp = (e) => {
  const t = e.statuses.getStack("DamageUp"), n = e.statuses.getStack("DamageDown");
  return t * 10 - n * 10;
}, Gp = (e) => Qc(e), Xp = (e) => Kc(e), Zp = (e) => Yc(e), Ea = (e) => {
  const t = Math.round(e), n = Number.EPSILON * Math.max(1, Math.abs(e)) * 8, r = Math.abs(e - t) <= n ? t : e;
  return Math.ceil(r);
}, Jp = (e, t = {}) => {
  const n = t.random ?? Math.random, r = e.directcheck ?? !1, l = e.sceneCombatants ?? [], i = Cl(
    e.attacker,
    l
  ), o = Cl(
    e.receiver,
    l
  ), u = ou(e.receiver), a = Vp(e.attacker, r) + (e.attackerBonusNormal ?? 0) + i.percentage, { special: c, criticalHit: h } = Qp(e.attacker, n), m = c + (e.attackerBonusSpecial ?? 0), p = Kc(e.receiver) - o.percentage, k = Yc(e.receiver), w = Kp(e.receiver), x = (100 + a - p) / 100, j = (100 + m - k) / 100, f = (100 + m - w) / 100, s = e.baseDamage * Math.max(x, 0) * Math.max(j, 0), d = e.baseDamage * Math.max(x, 0) * Math.max(f, 0);
  return {
    attackerWhiteEffect: i,
    receiverWhiteEffect: o,
    receiverAnkaEffect: u,
    attackerNormalPercentage: a,
    attackerSpecialPercentage: m,
    receiverNormalPercentage: p,
    receiverSpecialPercentage: k,
    receiverSpecialConfPercentage: w,
    normalRatio: x,
    specialRatio: j,
    specialConfRatio: f,
    dealDamage: s,
    dealConfDamage: d,
    criticalHit: h
  };
}, qp = (e, t = {}) => {
  const n = e.attacker, r = Jp(e, t), l = e.receiver;
  let i = l.hp, o = l.barrier, u = l.constitution, a = l.san, c = l.statuses.getStack("Sink");
  const h = l.doubleConstitution, m = Ea(r.dealDamage), p = Ea(r.dealConfDamage);
  let k = 0, w = 0;
  o > 0 && m > 0 && (k = Math.min(o, m), o -= k);
  const x = Math.max(m - k, 0);
  x > 0 && (i -= x, w = x);
  let j = 0;
  if (p > 0) {
    const y = p * (h ? 2 : 1);
    u = Math.max(u - y, 0), j = y;
  }
  let f = 0;
  const s = l.statuses.getStack("Sink");
  if (s > 0) {
    let y = s;
    const P = Math.min(a, y);
    a -= P, y -= P, f += P, y > 0 && (i -= y, w += y), c = Math.floor(s / 2);
  }
  const d = {
    ...r,
    barrierAbsorbed: k,
    hpDamageApplied: w,
    confDamageApplied: j,
    sanDamageApplied: f,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: a
  };
  l.setHp(i), l.setBarrier(o), l.setConstitution(u), l.setSan(a), l.statuses.setStack("Sink", c);
  const v = {
    baseDamage: e.baseDamage,
    normalRatio: r.normalRatio,
    specialRatio: r.specialRatio,
    specialConfRatio: r.specialConfRatio,
    dealDamage: r.dealDamage,
    dealConfDamage: r.dealConfDamage,
    hpDamageApplied: w,
    confDamageApplied: j,
    sanDamageApplied: f,
    barrierAbsorbed: k,
    criticalHit: r.criticalHit,
    hpAfter: i,
    barrierAfter: o,
    constitutionAfter: u,
    sanAfter: a
  };
  return wa(n, v), wa(l, v), Wp(n, v), Bp(l, v), { result: d, attacker: n, receiver: l };
}, bp = (e) => {
  var t, n;
  return ((t = e.find((r) => r.disposition === _l.FRIENDLY)) == null ? void 0 : t.actorId) ?? ((n = e[0]) == null ? void 0 : n.actorId) ?? "";
}, em = (e, t) => {
  var n, r;
  return ((n = e.find((l) => l.actorId !== t && l.disposition !== _l.FRIENDLY)) == null ? void 0 : n.actorId) ?? ((r = e.find((l) => l.actorId !== t)) == null ? void 0 : r.actorId) ?? "";
}, xa = (e, t) => Array.from(new Set(e.map((n) => n.actorId))).map((n) => t.loadByActorId(n)).filter((n) => n !== null), tm = (e) => {
  const [t, n] = L.useState(""), [r, l] = L.useState(""), [i, o] = L.useState(""), [u, a] = L.useState("0"), [c, h] = L.useState("0"), [m, p] = L.useState(!1), [k, w] = L.useState(null), [x, j] = L.useState(!1), [f, s] = L.useState([]), d = L.useMemo(() => {
    const D = /* @__PURE__ */ new Map();
    return e.forEach((S) => D.set(S.actorId, S)), D;
  }, [e]);
  L.useEffect(() => {
    if (!e.length) {
      t && n(""), r && l("");
      return;
    }
    const D = new Set(e.map((Ue) => Ue.actorId));
    let S = t;
    (!S || !D.has(S)) && (S = bp(e));
    let O = r;
    (!O || !D.has(O) || O === S) && (O = em(e, S)), S !== t && n(S), O !== r && l(O);
  }, [e, t, r]), L.useEffect(() => {
    try {
      const D = new xn();
      s(
        xa(e, D).map(
          (S) => S.combatant
        )
      );
    } catch {
      s([]);
    }
  }, [e]);
  const v = L.useMemo(
    () => f.find((D) => D.id === t) ?? null,
    [f, t]
  ), y = L.useMemo(
    () => f.find((D) => D.id === r) ?? null,
    [f, r]
  ), P = L.useMemo(() => {
    if (!v) return null;
    const D = Number(u) || 0, S = Number(c) || 0, O = Cl(v, f);
    return {
      normal: Yp(v) + (m ? 50 : 0) + D + O.percentage,
      special: S,
      criticalChance: Gp(v),
      whiteApplies: O.applies,
      whiteOtherCount: O.otherWhiteCount,
      whitePercentage: O.percentage,
      ankaStack: 0,
      ankaPercentage: 0
    };
  }, [v, f, m, u, c]), C = L.useMemo(() => {
    if (!y) return null;
    const D = Cl(y, f), S = ou(y);
    return {
      normal: Xp(y) - D.percentage,
      special: Zp(y),
      whiteApplies: D.applies,
      whiteOtherCount: D.otherWhiteCount,
      whitePercentage: D.percentage,
      ankaStack: S.stack,
      ankaPercentage: S.percentage
    };
  }, [y, f]);
  return {
    attackerId: t,
    receiverId: r,
    baseDamage: i,
    bonusNormal: u,
    bonusSpecial: c,
    directcheck: m,
    result: k,
    running: x,
    attackerPreview: P,
    receiverPreview: C,
    setAttackerId: n,
    setReceiverId: l,
    setBaseDamage: o,
    setBonusNormal: a,
    setBonusSpecial: h,
    setDirectcheck: p,
    run: async () => {
      var Ue, it, Nn, kr, Kt, Yt;
      const D = Number(i);
      if (!Number.isFinite(D) || D <= 0) {
        (Ue = ui.notifications) == null || Ue.error("ダメージに正の数値を入力してください");
        return;
      }
      const S = t ? d.get(t) : void 0, O = r ? d.get(r) : void 0;
      if (!S || !O) {
        (it = ui.notifications) == null || it.error("攻撃者と防御者を選択してください");
        return;
      }
      if (t === r) {
        (Nn = ui.notifications) == null || Nn.error("攻撃者と防御者は別のキャラクターを選んでください");
        return;
      }
      try {
        j(!0);
        const _ = new xn(), R = xa(e, _), A = new Map(
          R.map((Sr) => [Sr.actorId, Sr])
        ), $ = A.get(t), Y = A.get(r);
        if (!$ || !Y) {
          (kr = ui.notifications) == null || kr.error("攻撃者または防御者のデータを取得できませんでした");
          return;
        }
        const Gt = Number(u) || 0, Ke = Number(c) || 0, { result: J, attacker: Ye, receiver: Xt } = qp({
          attacker: $.combatant,
          receiver: Y.combatant,
          sceneCombatants: R.map((Sr) => Sr.combatant),
          baseDamage: D,
          directcheck: m,
          attackerBonusNormal: Gt,
          attackerBonusSpecial: Ke
        });
        await Promise.all([
          _.saveActor(Ye),
          _.saveActor(Xt)
        ]);
        const Jc = `
${S.name} → ${O.name}<br/>
${J.criticalHit ? "クリティカル発生!!<br/>" : ""}
基礎ダメージ: ${D}<br/>
${J.attackerWhiteEffect.applies ? `白化（他の味方${J.attackerWhiteEffect.otherWhiteCount}人）: 与ダメージ +${J.attackerWhiteEffect.percentage}%<br/>` : ""}
${J.receiverWhiteEffect.applies ? `白化（他の味方${J.receiverWhiteEffect.otherWhiteCount}人）: 被ダメージ +${J.receiverWhiteEffect.percentage}%<br/>` : ""}
${J.receiverAnkaEffect.stack > 0 ? `アンカの渦潮 ${J.receiverAnkaEffect.stack}: 被ダメージ +${J.receiverAnkaEffect.percentage}%<br/>` : ""}
HPダメージ: ${J.hpDamageApplied} (バリア吸収: ${J.barrierAbsorbed})<br/>
混乱ダメージ: ${J.confDamageApplied}<br/>
SANダメージ(沈潜): ${J.sanDamageApplied}<br/>
`;
        await ChatMessage.create({
          speaker: ChatMessage.getSpeaker({ actor: $.actor }),
          content: Jc
        }), w(J), (Kt = ui.notifications) == null || Kt.info(
          `${S.name} が ${O.name} にダメージを適用しました`
        );
      } catch (_) {
        console.error("[ponkotu-system] damage calc failed", _), (Yt = ui.notifications) == null || Yt.error("計算または適用に失敗しました。コンソールを確認してください。");
      } finally {
        j(!1);
      }
    }
  };
};
class Ca {
  static turnStart(t) {
    const n = Se;
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
    Se.forEach((r) => {
      var l;
      (l = r.onTurnEnd) == null || l.call(r, t, r.id);
    }), t.setBarrier(0);
  }
}
const _a = (e) => Array.from(new Set(e.map((t) => t.actorId).filter((t) => t))), nm = (e) => {
  const [t, n] = L.useState(!1), r = async () => {
    var u, a, c;
    const o = _a(e);
    if (!o.length)
      return (u = ui.notifications) == null || u.error("ターン開始処理の対象が見つかりません"), 0;
    try {
      const h = new xn(), m = o.map((p) => h.loadByActorId(p)).filter((p) => !!p);
      return m.length ? (m.forEach((p) => {
        Ca.turnStart(p.combatant);
      }), await Promise.all(m.map((p) => h.saveActor(p.combatant))), m.length) : ((a = ui.notifications) == null || a.error("ターン開始処理の対象を取得できませんでした"), 0);
    } catch (h) {
      console.error("[ponkotu-system] turn process failed", h), (c = ui.notifications) == null || c.error("ターン処理に失敗しました。コンソールを確認してください。");
    }
    return 0;
  }, l = async () => {
    var u, a, c;
    const o = _a(e);
    if (!o.length)
      return (u = ui.notifications) == null || u.error("ターン終了処理の対象が見つかりません"), 0;
    try {
      const h = new xn(), m = o.map((p) => h.loadByActorId(p)).filter((p) => !!p);
      return m.length ? (m.forEach((p) => {
        Ca.turnEnd(p.combatant);
      }), await Promise.all(m.map((p) => h.saveActor(p.combatant))), m.length) : ((a = ui.notifications) == null || a.error("ターン終了処理の対象を取得できませんでした"), 0);
    } catch (h) {
      console.error("[ponkotu-system] turn end failed", h), (c = ui.notifications) == null || c.error("ターン処理に失敗しました。コンソールを確認してください。");
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
        const a = await r(), c = u > 0 ? u : a;
        c > 0 && ((o = ui.notifications) == null || o.info(`ターン処理を${c}体に適用しました`));
      } finally {
        n(!1);
      }
  } };
}, rm = (e) => ({
  attackerWhiteEffect: e.attackerWhiteEffect,
  receiverWhiteEffect: e.receiverWhiteEffect,
  receiverAnkaEffect: e.receiverAnkaEffect,
  attackerNormalPercentage: e.attackerNormalPercentage,
  receiverNormalPercentage: e.receiverNormalPercentage,
  normalRatio: e.normalRatio,
  attackerSpecialPercentage: e.attackerSpecialPercentage,
  receiverSpecialPercentage: e.receiverSpecialPercentage,
  specialRatio: e.specialRatio,
  criticalHit: e.criticalHit,
  receiverSpecialConfPercentage: e.receiverSpecialConfPercentage,
  specialConfRatio: e.specialConfRatio,
  hpDamageApplied: e.hpDamageApplied,
  barrierAbsorbed: e.barrierAbsorbed,
  confDamageApplied: e.confDamageApplied,
  sanDamageApplied: e.sanDamageApplied,
  hpAfter: e.hpAfter,
  barrierAfter: e.barrierAfter,
  constitutionAfter: e.constitutionAfter,
  sanAfter: e.sanAfter
}), lm = () => {
  const e = Bc(), t = tm(e), n = nm(e), r = {
    selectedAttackerId: t.attackerId,
    selectedReceiverId: t.receiverId,
    baseDamage: t.baseDamage,
    bonusNormal: t.bonusNormal,
    bonusSpecial: t.bonusSpecial,
    directAttack: t.directcheck,
    isRunning: t.running,
    canRun: e.length >= 2,
    attackerPreview: t.attackerPreview,
    receiverPreview: t.receiverPreview,
    result: t.result ? rm(t.result) : null
  }, l = {
    onAttackerChange: t.setAttackerId,
    onReceiverChange: t.setReceiverId,
    onBaseDamageChange: t.setBaseDamage,
    onBonusNormalChange: t.setBonusNormal,
    onBonusSpecialChange: t.setBonusSpecial,
    onDirectAttackChange: t.setDirectcheck,
    onRunClick: t.run
  }, i = {
    isRunning: n.turnRunning,
    canRun: e.length >= 1
  }, o = {
    onRunClick: n.runTurnProcess
  };
  return /* @__PURE__ */ g.jsx(
    Dp,
    {
      tokens: e,
      damageModel: r,
      damageActions: l,
      turnModel: i,
      turnActions: o
    }
  );
}, im = "ponkotu-system";
var Lt;
class om extends Application {
  constructor() {
    super(...arguments);
    Tn(this, Lt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      classes: ["ponkotu-damage-calc"],
      title: "管理者用フォーム",
      template: `modules/${im}/templates/damage-calc.html`,
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
    Nt(this, Lt, Zn.createRoot(r)), X(this, Lt).render(/* @__PURE__ */ g.jsx(lm, {}));
  }
  async close(n) {
    var r;
    return (r = X(this, Lt)) == null || r.unmount(), Nt(this, Lt, null), super.close(n);
  }
}
Lt = new WeakMap();
const um = ({ onSubmit: e }) => {
  const [t, n] = L.useState(""), [r, l] = L.useState(""), i = L.useMemo(() => t.trim().length === 0, [t]), o = (u) => {
    u.preventDefault();
    const a = { name: t.trim(), note: r.trim() };
    e == null || e(a), l("");
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
}, am = () => {
  const e = [];
  return Se.forEach((n) => {
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
}, sm = "ponkotu-system";
let Pa = !1;
var Mt;
class cm extends Application {
  constructor() {
    super(...arguments);
    Tn(this, Mt, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      classes: ["ponkotu-react-form"],
      title: "React フォーム",
      template: `modules/${sm}/templates/react-form.html`,
      width: 420,
      height: 400,
      resizable: !0
    });
  }
  activateListeners(n) {
    var l;
    if (super.activateListeners(n), !Pa) {
      const i = am();
      if (i.length > 0) {
        Pa = !0;
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
    Nt(this, Mt, Zn.createRoot(r)), X(this, Mt).render(
      /* @__PURE__ */ g.jsx(
        um,
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
    return (r = X(this, Mt)) == null || r.unmount(), Nt(this, Mt, null), super.close(n);
  }
}
Mt = new WeakMap();
const fm = (e) => e.filter((t) => !t.group), dm = (e, t) => e.filter((n) => n.group === t), pm = ({
  statusModel: e,
  statusActions: t,
  libraryModel: n,
  libraryActions: r
}) => {
  const {
    selectedTargetValue: l,
    targetOptions: i,
    selectedStatusValue: o,
    statusOptions: u,
    selectedApplyTargetValue: a,
    applyTargetOptions: c,
    stack: h,
    isRunning: m,
    canRun: p
  } = e, {
    onTargetChange: k,
    onStatusChange: w,
    onApplyTargetChange: x,
    onStackChange: j,
    onRunClick: f
  } = t, {
    selectedTargetValue: s,
    targetOptions: d,
    isOpen: v,
    canToggle: y,
    entries: P
  } = n, {
    onTargetChange: C,
    onToggleClick: T
  } = r, D = dm(i, "ランダム");
  return /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsx("h3", { style: { margin: "8px 0" }, children: "状態異常付与" }) }),
    /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
        "対象キャラ",
        /* @__PURE__ */ g.jsxs(
          "select",
          {
            value: l,
            onChange: (S) => k(S.target.value),
            children: [
              /* @__PURE__ */ g.jsx("option", { value: "", children: "選択してください" }),
              fm(i).map((S) => /* @__PURE__ */ g.jsx(
                "option",
                {
                  value: S.value,
                  disabled: S.disabled,
                  children: S.label
                },
                `status-target-${S.value}`
              )),
              D.length > 0 && /* @__PURE__ */ g.jsx("optgroup", { label: "ランダム", children: D.map((S) => /* @__PURE__ */ g.jsx(
                "option",
                {
                  value: S.value,
                  disabled: S.disabled,
                  children: S.label
                },
                `status-target-${S.value}`
              )) })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
        "状態異常",
        /* @__PURE__ */ g.jsx(
          "select",
          {
            value: o,
            onChange: (S) => w(S.target.value),
            children: u.map((S) => /* @__PURE__ */ g.jsx("option", { value: S.value, disabled: S.disabled, children: S.label }, S.value))
          }
        )
      ] }),
      /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
        "付与先",
        /* @__PURE__ */ g.jsx(
          "select",
          {
            value: a,
            onChange: (S) => x(S.target.value),
            children: c.map((S) => /* @__PURE__ */ g.jsx("option", { value: S.value, disabled: S.disabled, children: S.label }, S.value))
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
          value: h,
          onChange: (S) => j(S.target.value),
          placeholder: "例: 3"
        }
      )
    ] }),
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsx("button", { onClick: f, disabled: m || !p, children: m ? "付与中..." : "状態異常を付与" }) }),
    /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", children: /* @__PURE__ */ g.jsx("h3", { style: { margin: "8px 0" }, children: "ライブラ！" }) }),
    /* @__PURE__ */ g.jsxs("div", { className: "ponkotu-damage__row", children: [
      /* @__PURE__ */ g.jsxs("label", { className: "ponkotu-damage__label", children: [
        "対象キャラ",
        /* @__PURE__ */ g.jsxs(
          "select",
          {
            value: s,
            onChange: (S) => C(S.target.value),
            children: [
              /* @__PURE__ */ g.jsx("option", { value: "", children: "選択してください" }),
              d.map((S) => /* @__PURE__ */ g.jsx(
                "option",
                {
                  value: S.value,
                  disabled: S.disabled,
                  children: S.label
                },
                `library-target-${S.value}`
              ))
            ]
          }
        )
      ] }),
      /* @__PURE__ */ g.jsx("button", { disabled: !y, onClick: T, children: v ? "閉じる" : "表示" })
    ] }),
    v && /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage__row", style: { flexDirection: "column" }, children: P.length === 0 ? /* @__PURE__ */ g.jsx("span", { children: "状態異常なし" }) : /* @__PURE__ */ g.jsxs("table", { style: { fontSize: "0.9em", width: "100%" }, children: [
      /* @__PURE__ */ g.jsx("thead", { children: /* @__PURE__ */ g.jsxs("tr", { children: [
        /* @__PURE__ */ g.jsx("th", { children: "ステータス" }),
        /* @__PURE__ */ g.jsx("th", { children: "スタック" }),
        /* @__PURE__ */ g.jsx("th", { children: "次ターン" })
      ] }) }),
      /* @__PURE__ */ g.jsx("tbody", { children: P.map((S) => /* @__PURE__ */ g.jsxs("tr", { children: [
        /* @__PURE__ */ g.jsx("td", { children: S.name }),
        /* @__PURE__ */ g.jsx("td", { children: S.stack }),
        /* @__PURE__ */ g.jsx("td", { children: S.hasPending ? S.pending : "-" })
      ] }, S.id)) })
    ] }) })
  ] });
}, mm = ({
  statusModel: e,
  statusActions: t,
  libraryModel: n,
  libraryActions: r
}) => /* @__PURE__ */ g.jsx("div", { className: "ponkotu-damage", children: /* @__PURE__ */ g.jsx(
  pm,
  {
    statusModel: e,
    statusActions: t,
    libraryModel: n,
    libraryActions: r
  }
) }), hm = (e) => Number.isInteger(e) && e >= 1, gm = async (e, t) => {
  if (!t.actorId)
    throw new Error("actorId is required");
  if (!hm(t.stackDelta))
    throw new Error("stackDelta must be a positive integer");
  const n = t.target ?? "stack", r = Se.find((a) => a.id === t.statusId);
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
let Pl = null;
const vm = async (e) => {
  const t = new xn();
  return gm(t, e);
}, ym = (e) => {
  Pl = socketlib.registerModule(e), Pl.register("applyStatusStack", vm);
}, km = (e) => {
  if (!Pl)
    throw new Error("socketlib が初期化されていません");
  return Pl.executeAsGM("applyStatusStack", e);
}, gi = (e) => e === "random:ally" || e === "random:enemy" || e === "random:all", Sm = (e, t) => e === "random:all" ? t : e === "random:ally" ? t.filter((n) => n.disposition === _l.FRIENDLY) : t.filter((n) => n.disposition !== _l.FRIENDLY), wm = Se.map((e) => e.id), Em = () => wm[0] ?? "Burned", xm = (e) => {
  const [t, n] = L.useState(""), [r, l] = L.useState(Em), [i, o] = L.useState("stack"), [u, a] = L.useState("1"), [c, h] = L.useState(!1), m = Se.find(
    (w) => w.id === r
  ), p = !!(m && "pending" in m.attribute && m.attribute.pending);
  return L.useEffect(() => {
    var x;
    if (!e.length) {
      t && !gi(t) && n("");
      return;
    }
    const w = new Set(e.map((j) => j.actorId));
    (!t || !gi(t) && !w.has(t)) && n(((x = e[0]) == null ? void 0 : x.actorId) ?? "");
  }, [e, t]), L.useEffect(() => {
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
    setStatusStack: a,
    runApplyStatus: async () => {
      var j, f, s, d, v, y, P;
      if (c) return;
      const w = Number(u);
      if (!Number.isInteger(w) || w < 1) {
        (j = ui.notifications) == null || j.error("スタック数には1以上の整数を入力してください");
        return;
      }
      let x;
      if (gi(t)) {
        const C = Sm(t, e);
        if (C.length === 0) {
          (f = ui.notifications) == null || f.error("ランダム対象の候補が0件です。対象を選び直してください。");
          return;
        }
        x = C[Math.floor(Math.random() * C.length)].actorId;
      } else
        x = t;
      if (!x) {
        (s = ui.notifications) == null || s.error("状態異常を付与する対象を選択してください");
        return;
      }
      try {
        h(!0);
        const C = await km({
          actorId: x,
          statusId: r,
          stackDelta: w,
          target: i
        }), T = ((d = Se.find((S) => S.id === C.statusId)) == null ? void 0 : d.name) ?? C.statusId, D = C.target === "pending" ? "next" : "現在";
        (v = ui.notifications) == null || v.info(
          `${C.actorName} に ${C.statusId}(${D}) を ${w} 付与しました (${C.before}→${C.after})`
        ), await ChatMessage.create({
          speaker: { alias: ((y = game.user) == null ? void 0 : y.name) ?? "不明" },
          content: `${C.actorName} に ${T}（${D}）を ${w} 付与しました（${C.before} → ${C.after}）`
        });
      } catch (C) {
        console.error("[ponkotu-system] apply status failed", C), (P = ui.notifications) == null || P.error("状態異常の付与に失敗しました。コンソールを確認してください。");
      } finally {
        h(!1);
      }
    }
  };
}, Cm = (e, t) => t.map((n) => ({
  id: n.id,
  name: n.name,
  stack: e.getStack(n.id),
  pending: e.getPending(n.id),
  hasPending: !!n.hasPending
})).filter((n) => n.stack > 0 || n.pending > 0), _m = (e) => Cm(
  e,
  Se
), Pm = () => {
  const [e, t] = L.useState(""), [n, r] = L.useState(!1), [l, i] = L.useState([]);
  return {
    libraryTargetValue: e,
    libraryOpen: n,
    libraryEntries: l,
    setLibraryTargetValue: (a) => {
      t(a), r(!1), i([]);
    },
    toggleLibrary: () => {
      if (n) {
        r(!1), i([]);
        return;
      }
      if (!e)
        return;
      const c = new xn().loadByActorId(e);
      c && (i(_m(c.combatant.statuses)), r(!0));
    }
  };
}, Nm = (e) => e.map((t) => ({
  value: t.actorId,
  label: t.name
})), Tm = Se.map((e) => ({
  value: e.id,
  label: e.name
})), Dm = (e) => ({
  id: e.id,
  name: e.name,
  stack: e.stack,
  pending: e.pending,
  hasPending: e.hasPending
}), Rm = () => {
  const e = Bc(), t = xm(e), n = Pm(), r = Nm(e), l = {
    selectedTargetValue: t.statusTargetValue,
    targetOptions: [
      ...r,
      ..._p.map((a) => ({
        ...a,
        group: "ランダム"
      }))
    ],
    selectedStatusValue: t.statusId,
    statusOptions: Tm,
    selectedApplyTargetValue: t.applyTarget,
    applyTargetOptions: [
      { value: "stack", label: "現在" },
      {
        value: "pending",
        label: "次ターン(next)",
        disabled: !t.canApplyPending
      }
    ],
    stack: t.statusStack,
    isRunning: t.statusRunning,
    canRun: e.length >= 1
  }, i = {
    onTargetChange: t.setStatusTargetValue,
    onStatusChange: (a) => t.setStatusId(a),
    onApplyTargetChange: (a) => t.setApplyTarget(a),
    onStackChange: t.setStatusStack,
    onRunClick: t.runApplyStatus
  }, o = {
    selectedTargetValue: n.libraryTargetValue,
    targetOptions: r,
    isOpen: n.libraryOpen,
    canToggle: !!n.libraryTargetValue,
    entries: n.libraryEntries.map(Dm)
  }, u = {
    onTargetChange: n.setLibraryTargetValue,
    onToggleClick: n.toggleLibrary
  };
  return /* @__PURE__ */ g.jsx(
    mm,
    {
      statusModel: l,
      statusActions: i,
      libraryModel: o,
      libraryActions: u
    }
  );
}, jm = "ponkotu-system";
var It;
class Am extends Application {
  constructor() {
    super(...arguments);
    Tn(this, It, null);
  }
  static get defaultOptions() {
    const n = super.defaultOptions;
    return foundry.utils.mergeObject(n, {
      classes: ["ponkotu-status-apply"],
      title: "状態異常付与フォーム",
      template: `modules/${jm}/templates/status-apply.html`,
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
    Nt(this, It, Zn.createRoot(r)), X(this, It).render(/* @__PURE__ */ g.jsx(Rm, {}));
  }
  async close(n) {
    var r;
    return (r = X(this, It)) == null || r.unmount(), Nt(this, It, null), super.close(n);
  }
}
It = new WeakMap();
const co = "ponkotu-system", Gc = () => new cm().render(!0), Xc = () => new om().render(!0), Zc = () => new Am().render(!0), Na = () => {
  var n;
  const e = (n = game.modules) == null ? void 0 : n.get(co);
  if (!e) {
    console.warn(`[${co}] game.modules からモジュールを取得できませんでした`);
    return;
  }
  const t = e;
  t.api || (t.api = {}), t.api.showReactForm = Gc, t.api.showDamageCalc = Xc, t.api.showStatusApply = Zc;
}, zm = () => {
  Hooks.once("ready", () => {
    Na(), globalThis.ponkotuSystem = { showReactForm: Gc, showDamageCalc: Xc, showStatusApply: Zc };
  }), Hooks.once("init", () => {
    Na();
  }), Hooks.once("socketlib.ready", () => {
    ym(co);
  });
};
zm();
export {
  Xc as showDamageCalc,
  Gc as showReactForm,
  Zc as showStatusApply
};
