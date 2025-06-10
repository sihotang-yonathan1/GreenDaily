import { app as Je, BrowserWindow as Ka, ipcMain as Ya, Notification as wo } from "electron";
import X from "node:path";
import { fileURLToPath as _o } from "node:url";
import ve from "util";
import $, { Readable as ko } from "stream";
import Xa from "path";
import Qa from "http";
import Za from "https";
import Ke from "url";
import vi from "fs";
import Eo from "crypto";
import Ro from "assert";
import hi from "tty";
import So from "os";
import Q from "zlib";
import { EventEmitter as jo } from "events";
function bi(e, a) {
  return function() {
    return e.apply(a, arguments);
  };
}
const { toString: Ao } = Object.prototype, { getPrototypeOf: en } = Object, { iterator: Ye, toStringTag: gi } = Symbol, Xe = /* @__PURE__ */ ((e) => (a) => {
  const n = Ao.call(a);
  return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), H = (e) => (e = e.toLowerCase(), (a) => Xe(a) === e), Qe = (e) => (a) => typeof a === e, { isArray: he } = Array, we = Qe("undefined");
function To(e) {
  return e !== null && !we(e) && e.constructor !== null && !we(e.constructor) && z(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const yi = H("ArrayBuffer");
function Co(e) {
  let a;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(e) : a = e && e.buffer && yi(e.buffer), a;
}
const Oo = Qe("string"), z = Qe("function"), wi = Qe("number"), Ze = (e) => e !== null && typeof e == "object", Fo = (e) => e === !0 || e === !1, Ue = (e) => {
  if (Xe(e) !== "object")
    return !1;
  const a = en(e);
  return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(gi in e) && !(Ye in e);
}, Po = H("Date"), qo = H("File"), Lo = H("Blob"), Uo = H("FileList"), Bo = (e) => Ze(e) && z(e.pipe), zo = (e) => {
  let a;
  return e && (typeof FormData == "function" && e instanceof FormData || z(e.append) && ((a = Xe(e)) === "formdata" || // detect form-data instance
  a === "object" && z(e.toString) && e.toString() === "[object FormData]"));
}, No = H("URLSearchParams"), [Io, Do, $o, Mo] = ["ReadableStream", "Request", "Response", "Headers"].map(H), Ho = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Re(e, a, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let i, o;
  if (typeof e != "object" && (e = [e]), he(e))
    for (i = 0, o = e.length; i < o; i++)
      a.call(null, e[i], i, e);
  else {
    const t = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = t.length;
    let p;
    for (i = 0; i < s; i++)
      p = t[i], a.call(null, e[p], p, e);
  }
}
function _i(e, a) {
  a = a.toLowerCase();
  const n = Object.keys(e);
  let i = n.length, o;
  for (; i-- > 0; )
    if (o = n[i], a === o.toLowerCase())
      return o;
  return null;
}
const ae = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, ki = (e) => !we(e) && e !== ae;
function Na() {
  const { caseless: e } = ki(this) && this || {}, a = {}, n = (i, o) => {
    const t = e && _i(a, o) || o;
    Ue(a[t]) && Ue(i) ? a[t] = Na(a[t], i) : Ue(i) ? a[t] = Na({}, i) : he(i) ? a[t] = i.slice() : a[t] = i;
  };
  for (let i = 0, o = arguments.length; i < o; i++)
    arguments[i] && Re(arguments[i], n);
  return a;
}
const Go = (e, a, n, { allOwnKeys: i } = {}) => (Re(a, (o, t) => {
  n && z(o) ? e[t] = bi(o, n) : e[t] = o;
}, { allOwnKeys: i }), e), Vo = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Wo = (e, a, n, i) => {
  e.prototype = Object.create(a.prototype, i), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: a.prototype
  }), n && Object.assign(e.prototype, n);
}, Jo = (e, a, n, i) => {
  let o, t, s;
  const p = {};
  if (a = a || {}, e == null) return a;
  do {
    for (o = Object.getOwnPropertyNames(e), t = o.length; t-- > 0; )
      s = o[t], (!i || i(s, e, a)) && !p[s] && (a[s] = e[s], p[s] = !0);
    e = n !== !1 && en(e);
  } while (e && (!n || n(e, a)) && e !== Object.prototype);
  return a;
}, Ko = (e, a, n) => {
  e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= a.length;
  const i = e.indexOf(a, n);
  return i !== -1 && i === n;
}, Yo = (e) => {
  if (!e) return null;
  if (he(e)) return e;
  let a = e.length;
  if (!wi(a)) return null;
  const n = new Array(a);
  for (; a-- > 0; )
    n[a] = e[a];
  return n;
}, Xo = /* @__PURE__ */ ((e) => (a) => e && a instanceof e)(typeof Uint8Array < "u" && en(Uint8Array)), Qo = (e, a) => {
  const i = (e && e[Ye]).call(e);
  let o;
  for (; (o = i.next()) && !o.done; ) {
    const t = o.value;
    a.call(e, t[0], t[1]);
  }
}, Zo = (e, a) => {
  let n;
  const i = [];
  for (; (n = e.exec(a)) !== null; )
    i.push(n);
  return i;
}, et = H("HTMLFormElement"), at = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(n, i, o) {
    return i.toUpperCase() + o;
  }
), wn = (({ hasOwnProperty: e }) => (a, n) => e.call(a, n))(Object.prototype), nt = H("RegExp"), Ei = (e, a) => {
  const n = Object.getOwnPropertyDescriptors(e), i = {};
  Re(n, (o, t) => {
    let s;
    (s = a(o, t, e)) !== !1 && (i[t] = s || o);
  }), Object.defineProperties(e, i);
}, it = (e) => {
  Ei(e, (a, n) => {
    if (z(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
      return !1;
    const i = e[n];
    if (z(i)) {
      if (a.enumerable = !1, "writable" in a) {
        a.writable = !1;
        return;
      }
      a.set || (a.set = () => {
        throw Error("Can not rewrite read-only method '" + n + "'");
      });
    }
  });
}, ot = (e, a) => {
  const n = {}, i = (o) => {
    o.forEach((t) => {
      n[t] = !0;
    });
  };
  return he(e) ? i(e) : i(String(e).split(a)), n;
}, tt = () => {
}, st = (e, a) => e != null && Number.isFinite(e = +e) ? e : a;
function rt(e) {
  return !!(e && z(e.append) && e[gi] === "FormData" && e[Ye]);
}
const ct = (e) => {
  const a = new Array(10), n = (i, o) => {
    if (Ze(i)) {
      if (a.indexOf(i) >= 0)
        return;
      if (!("toJSON" in i)) {
        a[o] = i;
        const t = he(i) ? [] : {};
        return Re(i, (s, p) => {
          const l = n(s, o + 1);
          !we(l) && (t[p] = l);
        }), a[o] = void 0, t;
      }
    }
    return i;
  };
  return n(e, 0);
}, pt = H("AsyncFunction"), lt = (e) => e && (Ze(e) || z(e)) && z(e.then) && z(e.catch), Ri = ((e, a) => e ? setImmediate : a ? ((n, i) => (ae.addEventListener("message", ({ source: o, data: t }) => {
  o === ae && t === n && i.length && i.shift()();
}, !1), (o) => {
  i.push(o), ae.postMessage(n, "*");
}))(`axios@${Math.random()}`, []) : (n) => setTimeout(n))(
  typeof setImmediate == "function",
  z(ae.postMessage)
), ut = typeof queueMicrotask < "u" ? queueMicrotask.bind(ae) : typeof process < "u" && process.nextTick || Ri, dt = (e) => e != null && z(e[Ye]), d = {
  isArray: he,
  isArrayBuffer: yi,
  isBuffer: To,
  isFormData: zo,
  isArrayBufferView: Co,
  isString: Oo,
  isNumber: wi,
  isBoolean: Fo,
  isObject: Ze,
  isPlainObject: Ue,
  isReadableStream: Io,
  isRequest: Do,
  isResponse: $o,
  isHeaders: Mo,
  isUndefined: we,
  isDate: Po,
  isFile: qo,
  isBlob: Lo,
  isRegExp: nt,
  isFunction: z,
  isStream: Bo,
  isURLSearchParams: No,
  isTypedArray: Xo,
  isFileList: Uo,
  forEach: Re,
  merge: Na,
  extend: Go,
  trim: Ho,
  stripBOM: Vo,
  inherits: Wo,
  toFlatObject: Jo,
  kindOf: Xe,
  kindOfTest: H,
  endsWith: Ko,
  toArray: Yo,
  forEachEntry: Qo,
  matchAll: Zo,
  isHTMLForm: et,
  hasOwnProperty: wn,
  hasOwnProp: wn,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ei,
  freezeMethods: it,
  toObjectSet: ot,
  toCamelCase: at,
  noop: tt,
  toFiniteNumber: st,
  findKey: _i,
  global: ae,
  isContextDefined: ki,
  isSpecCompliantForm: rt,
  toJSONObject: ct,
  isAsyncFn: pt,
  isThenable: lt,
  setImmediate: Ri,
  asap: ut,
  isIterable: dt
};
function b(e, a, n, i, o) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", a && (this.code = a), n && (this.config = n), i && (this.request = i), o && (this.response = o, this.status = o.status ? o.status : null);
}
d.inherits(b, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: d.toJSONObject(this.config),
      code: this.code,
      status: this.status
    };
  }
});
const Si = b.prototype, ji = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  ji[e] = { value: e };
});
Object.defineProperties(b, ji);
Object.defineProperty(Si, "isAxiosError", { value: !0 });
b.from = (e, a, n, i, o, t) => {
  const s = Object.create(Si);
  return d.toFlatObject(e, s, function(l) {
    return l !== Error.prototype;
  }, (p) => p !== "isAxiosError"), b.call(s, e.message, a, n, i, o), s.cause = e, s.name = e.name, t && Object.assign(s, t), s;
};
function Ai(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ti = $.Stream, mt = ve, ft = G;
function G() {
  this.source = null, this.dataSize = 0, this.maxDataSize = 1024 * 1024, this.pauseStream = !0, this._maxDataSizeExceeded = !1, this._released = !1, this._bufferedEvents = [];
}
mt.inherits(G, Ti);
G.create = function(e, a) {
  var n = new this();
  a = a || {};
  for (var i in a)
    n[i] = a[i];
  n.source = e;
  var o = e.emit;
  return e.emit = function() {
    return n._handleEmit(arguments), o.apply(e, arguments);
  }, e.on("error", function() {
  }), n.pauseStream && e.pause(), n;
};
Object.defineProperty(G.prototype, "readable", {
  configurable: !0,
  enumerable: !0,
  get: function() {
    return this.source.readable;
  }
});
G.prototype.setEncoding = function() {
  return this.source.setEncoding.apply(this.source, arguments);
};
G.prototype.resume = function() {
  this._released || this.release(), this.source.resume();
};
G.prototype.pause = function() {
  this.source.pause();
};
G.prototype.release = function() {
  this._released = !0, this._bufferedEvents.forEach((function(e) {
    this.emit.apply(this, e);
  }).bind(this)), this._bufferedEvents = [];
};
G.prototype.pipe = function() {
  var e = Ti.prototype.pipe.apply(this, arguments);
  return this.resume(), e;
};
G.prototype._handleEmit = function(e) {
  if (this._released) {
    this.emit.apply(this, e);
    return;
  }
  e[0] === "data" && (this.dataSize += e[1].length, this._checkIfMaxDataSizeExceeded()), this._bufferedEvents.push(e);
};
G.prototype._checkIfMaxDataSizeExceeded = function() {
  if (!this._maxDataSizeExceeded && !(this.dataSize <= this.maxDataSize)) {
    this._maxDataSizeExceeded = !0;
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this.emit("error", new Error(e));
  }
};
var xt = ve, Ci = $.Stream, _n = ft, vt = C;
function C() {
  this.writable = !1, this.readable = !0, this.dataSize = 0, this.maxDataSize = 2 * 1024 * 1024, this.pauseStreams = !0, this._released = !1, this._streams = [], this._currentStream = null, this._insideLoop = !1, this._pendingNext = !1;
}
xt.inherits(C, Ci);
C.create = function(e) {
  var a = new this();
  e = e || {};
  for (var n in e)
    a[n] = e[n];
  return a;
};
C.isStreamLike = function(e) {
  return typeof e != "function" && typeof e != "string" && typeof e != "boolean" && typeof e != "number" && !Buffer.isBuffer(e);
};
C.prototype.append = function(e) {
  var a = C.isStreamLike(e);
  if (a) {
    if (!(e instanceof _n)) {
      var n = _n.create(e, {
        maxDataSize: 1 / 0,
        pauseStream: this.pauseStreams
      });
      e.on("data", this._checkDataSize.bind(this)), e = n;
    }
    this._handleErrors(e), this.pauseStreams && e.pause();
  }
  return this._streams.push(e), this;
};
C.prototype.pipe = function(e, a) {
  return Ci.prototype.pipe.call(this, e, a), this.resume(), e;
};
C.prototype._getNext = function() {
  if (this._currentStream = null, this._insideLoop) {
    this._pendingNext = !0;
    return;
  }
  this._insideLoop = !0;
  try {
    do
      this._pendingNext = !1, this._realGetNext();
    while (this._pendingNext);
  } finally {
    this._insideLoop = !1;
  }
};
C.prototype._realGetNext = function() {
  var e = this._streams.shift();
  if (typeof e > "u") {
    this.end();
    return;
  }
  if (typeof e != "function") {
    this._pipeNext(e);
    return;
  }
  var a = e;
  a((function(n) {
    var i = C.isStreamLike(n);
    i && (n.on("data", this._checkDataSize.bind(this)), this._handleErrors(n)), this._pipeNext(n);
  }).bind(this));
};
C.prototype._pipeNext = function(e) {
  this._currentStream = e;
  var a = C.isStreamLike(e);
  if (a) {
    e.on("end", this._getNext.bind(this)), e.pipe(this, { end: !1 });
    return;
  }
  var n = e;
  this.write(n), this._getNext();
};
C.prototype._handleErrors = function(e) {
  var a = this;
  e.on("error", function(n) {
    a._emitError(n);
  });
};
C.prototype.write = function(e) {
  this.emit("data", e);
};
C.prototype.pause = function() {
  this.pauseStreams && (this.pauseStreams && this._currentStream && typeof this._currentStream.pause == "function" && this._currentStream.pause(), this.emit("pause"));
};
C.prototype.resume = function() {
  this._released || (this._released = !0, this.writable = !0, this._getNext()), this.pauseStreams && this._currentStream && typeof this._currentStream.resume == "function" && this._currentStream.resume(), this.emit("resume");
};
C.prototype.end = function() {
  this._reset(), this.emit("end");
};
C.prototype.destroy = function() {
  this._reset(), this.emit("close");
};
C.prototype._reset = function() {
  this.writable = !1, this._streams = [], this._currentStream = null;
};
C.prototype._checkDataSize = function() {
  if (this._updateDataSize(), !(this.dataSize <= this.maxDataSize)) {
    var e = "DelayedStream#maxDataSize of " + this.maxDataSize + " bytes exceeded.";
    this._emitError(new Error(e));
  }
};
C.prototype._updateDataSize = function() {
  this.dataSize = 0;
  var e = this;
  this._streams.forEach(function(a) {
    a.dataSize && (e.dataSize += a.dataSize);
  }), this._currentStream && this._currentStream.dataSize && (this.dataSize += this._currentStream.dataSize);
};
C.prototype._emitError = function(e) {
  this._reset(), this.emit("error", e);
};
var Oi = {};
const ht = {
  "application/1d-interleaved-parityfec": {
    source: "iana"
  },
  "application/3gpdash-qoe-report+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/3gpp-ims+xml": {
    source: "iana",
    compressible: !0
  },
  "application/3gpphal+json": {
    source: "iana",
    compressible: !0
  },
  "application/3gpphalforms+json": {
    source: "iana",
    compressible: !0
  },
  "application/a2l": {
    source: "iana"
  },
  "application/ace+cbor": {
    source: "iana"
  },
  "application/activemessage": {
    source: "iana"
  },
  "application/activity+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-costmap+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-costmapfilter+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-directory+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointcost+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointcostparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointprop+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-endpointpropparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-error+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-networkmap+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-networkmapfilter+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-updatestreamcontrol+json": {
    source: "iana",
    compressible: !0
  },
  "application/alto-updatestreamparams+json": {
    source: "iana",
    compressible: !0
  },
  "application/aml": {
    source: "iana"
  },
  "application/andrew-inset": {
    source: "iana",
    extensions: [
      "ez"
    ]
  },
  "application/applefile": {
    source: "iana"
  },
  "application/applixware": {
    source: "apache",
    extensions: [
      "aw"
    ]
  },
  "application/at+jwt": {
    source: "iana"
  },
  "application/atf": {
    source: "iana"
  },
  "application/atfx": {
    source: "iana"
  },
  "application/atom+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atom"
    ]
  },
  "application/atomcat+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomcat"
    ]
  },
  "application/atomdeleted+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomdeleted"
    ]
  },
  "application/atomicmail": {
    source: "iana"
  },
  "application/atomsvc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "atomsvc"
    ]
  },
  "application/atsc-dwd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dwd"
    ]
  },
  "application/atsc-dynamic-event-message": {
    source: "iana"
  },
  "application/atsc-held+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "held"
    ]
  },
  "application/atsc-rdt+json": {
    source: "iana",
    compressible: !0
  },
  "application/atsc-rsat+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rsat"
    ]
  },
  "application/atxml": {
    source: "iana"
  },
  "application/auth-policy+xml": {
    source: "iana",
    compressible: !0
  },
  "application/bacnet-xdd+zip": {
    source: "iana",
    compressible: !1
  },
  "application/batch-smtp": {
    source: "iana"
  },
  "application/bdoc": {
    compressible: !1,
    extensions: [
      "bdoc"
    ]
  },
  "application/beep+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/calendar+json": {
    source: "iana",
    compressible: !0
  },
  "application/calendar+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xcs"
    ]
  },
  "application/call-completion": {
    source: "iana"
  },
  "application/cals-1840": {
    source: "iana"
  },
  "application/captive+json": {
    source: "iana",
    compressible: !0
  },
  "application/cbor": {
    source: "iana"
  },
  "application/cbor-seq": {
    source: "iana"
  },
  "application/cccex": {
    source: "iana"
  },
  "application/ccmp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ccxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ccxml"
    ]
  },
  "application/cdfx+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cdfx"
    ]
  },
  "application/cdmi-capability": {
    source: "iana",
    extensions: [
      "cdmia"
    ]
  },
  "application/cdmi-container": {
    source: "iana",
    extensions: [
      "cdmic"
    ]
  },
  "application/cdmi-domain": {
    source: "iana",
    extensions: [
      "cdmid"
    ]
  },
  "application/cdmi-object": {
    source: "iana",
    extensions: [
      "cdmio"
    ]
  },
  "application/cdmi-queue": {
    source: "iana",
    extensions: [
      "cdmiq"
    ]
  },
  "application/cdni": {
    source: "iana"
  },
  "application/cea": {
    source: "iana"
  },
  "application/cea-2018+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cellml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cfw": {
    source: "iana"
  },
  "application/city+json": {
    source: "iana",
    compressible: !0
  },
  "application/clr": {
    source: "iana"
  },
  "application/clue+xml": {
    source: "iana",
    compressible: !0
  },
  "application/clue_info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cms": {
    source: "iana"
  },
  "application/cnrp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/coap-group+json": {
    source: "iana",
    compressible: !0
  },
  "application/coap-payload": {
    source: "iana"
  },
  "application/commonground": {
    source: "iana"
  },
  "application/conference-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cose": {
    source: "iana"
  },
  "application/cose-key": {
    source: "iana"
  },
  "application/cose-key-set": {
    source: "iana"
  },
  "application/cpl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cpl"
    ]
  },
  "application/csrattrs": {
    source: "iana"
  },
  "application/csta+xml": {
    source: "iana",
    compressible: !0
  },
  "application/cstadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/csvm+json": {
    source: "iana",
    compressible: !0
  },
  "application/cu-seeme": {
    source: "apache",
    extensions: [
      "cu"
    ]
  },
  "application/cwt": {
    source: "iana"
  },
  "application/cybercash": {
    source: "iana"
  },
  "application/dart": {
    compressible: !0
  },
  "application/dash+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpd"
    ]
  },
  "application/dash-patch+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpp"
    ]
  },
  "application/dashdelta": {
    source: "iana"
  },
  "application/davmount+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "davmount"
    ]
  },
  "application/dca-rft": {
    source: "iana"
  },
  "application/dcd": {
    source: "iana"
  },
  "application/dec-dx": {
    source: "iana"
  },
  "application/dialog-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dicom": {
    source: "iana"
  },
  "application/dicom+json": {
    source: "iana",
    compressible: !0
  },
  "application/dicom+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dii": {
    source: "iana"
  },
  "application/dit": {
    source: "iana"
  },
  "application/dns": {
    source: "iana"
  },
  "application/dns+json": {
    source: "iana",
    compressible: !0
  },
  "application/dns-message": {
    source: "iana"
  },
  "application/docbook+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "dbk"
    ]
  },
  "application/dots+cbor": {
    source: "iana"
  },
  "application/dskpp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/dssc+der": {
    source: "iana",
    extensions: [
      "dssc"
    ]
  },
  "application/dssc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdssc"
    ]
  },
  "application/dvcs": {
    source: "iana"
  },
  "application/ecmascript": {
    source: "iana",
    compressible: !0,
    extensions: [
      "es",
      "ecma"
    ]
  },
  "application/edi-consent": {
    source: "iana"
  },
  "application/edi-x12": {
    source: "iana",
    compressible: !1
  },
  "application/edifact": {
    source: "iana",
    compressible: !1
  },
  "application/efi": {
    source: "iana"
  },
  "application/elm+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/elm+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.cap+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/emergencycalldata.comment+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.deviceinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.ecall.msd": {
    source: "iana"
  },
  "application/emergencycalldata.providerinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.serviceinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.subscriberinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emergencycalldata.veds+xml": {
    source: "iana",
    compressible: !0
  },
  "application/emma+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "emma"
    ]
  },
  "application/emotionml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "emotionml"
    ]
  },
  "application/encaprtp": {
    source: "iana"
  },
  "application/epp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/epub+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "epub"
    ]
  },
  "application/eshop": {
    source: "iana"
  },
  "application/exi": {
    source: "iana",
    extensions: [
      "exi"
    ]
  },
  "application/expect-ct-report+json": {
    source: "iana",
    compressible: !0
  },
  "application/express": {
    source: "iana",
    extensions: [
      "exp"
    ]
  },
  "application/fastinfoset": {
    source: "iana"
  },
  "application/fastsoap": {
    source: "iana"
  },
  "application/fdt+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "fdt"
    ]
  },
  "application/fhir+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/fhir+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/fido.trusted-apps+json": {
    compressible: !0
  },
  "application/fits": {
    source: "iana"
  },
  "application/flexfec": {
    source: "iana"
  },
  "application/font-sfnt": {
    source: "iana"
  },
  "application/font-tdpfr": {
    source: "iana",
    extensions: [
      "pfr"
    ]
  },
  "application/font-woff": {
    source: "iana",
    compressible: !1
  },
  "application/framework-attributes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/geo+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "geojson"
    ]
  },
  "application/geo+json-seq": {
    source: "iana"
  },
  "application/geopackage+sqlite3": {
    source: "iana"
  },
  "application/geoxacml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/gltf-buffer": {
    source: "iana"
  },
  "application/gml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "gml"
    ]
  },
  "application/gpx+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "gpx"
    ]
  },
  "application/gxf": {
    source: "apache",
    extensions: [
      "gxf"
    ]
  },
  "application/gzip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "gz"
    ]
  },
  "application/h224": {
    source: "iana"
  },
  "application/held+xml": {
    source: "iana",
    compressible: !0
  },
  "application/hjson": {
    extensions: [
      "hjson"
    ]
  },
  "application/http": {
    source: "iana"
  },
  "application/hyperstudio": {
    source: "iana",
    extensions: [
      "stk"
    ]
  },
  "application/ibe-key-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ibe-pkg-reply+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ibe-pp-data": {
    source: "iana"
  },
  "application/iges": {
    source: "iana"
  },
  "application/im-iscomposing+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/index": {
    source: "iana"
  },
  "application/index.cmd": {
    source: "iana"
  },
  "application/index.obj": {
    source: "iana"
  },
  "application/index.response": {
    source: "iana"
  },
  "application/index.vnd": {
    source: "iana"
  },
  "application/inkml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ink",
      "inkml"
    ]
  },
  "application/iotp": {
    source: "iana"
  },
  "application/ipfix": {
    source: "iana",
    extensions: [
      "ipfix"
    ]
  },
  "application/ipp": {
    source: "iana"
  },
  "application/isup": {
    source: "iana"
  },
  "application/its+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "its"
    ]
  },
  "application/java-archive": {
    source: "apache",
    compressible: !1,
    extensions: [
      "jar",
      "war",
      "ear"
    ]
  },
  "application/java-serialized-object": {
    source: "apache",
    compressible: !1,
    extensions: [
      "ser"
    ]
  },
  "application/java-vm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "class"
    ]
  },
  "application/javascript": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "js",
      "mjs"
    ]
  },
  "application/jf2feed+json": {
    source: "iana",
    compressible: !0
  },
  "application/jose": {
    source: "iana"
  },
  "application/jose+json": {
    source: "iana",
    compressible: !0
  },
  "application/jrd+json": {
    source: "iana",
    compressible: !0
  },
  "application/jscalendar+json": {
    source: "iana",
    compressible: !0
  },
  "application/json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "json",
      "map"
    ]
  },
  "application/json-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/json-seq": {
    source: "iana"
  },
  "application/json5": {
    extensions: [
      "json5"
    ]
  },
  "application/jsonml+json": {
    source: "apache",
    compressible: !0,
    extensions: [
      "jsonml"
    ]
  },
  "application/jwk+json": {
    source: "iana",
    compressible: !0
  },
  "application/jwk-set+json": {
    source: "iana",
    compressible: !0
  },
  "application/jwt": {
    source: "iana"
  },
  "application/kpml-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/kpml-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/ld+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "jsonld"
    ]
  },
  "application/lgr+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lgr"
    ]
  },
  "application/link-format": {
    source: "iana"
  },
  "application/load-control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/lost+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lostxml"
    ]
  },
  "application/lostsync+xml": {
    source: "iana",
    compressible: !0
  },
  "application/lpf+zip": {
    source: "iana",
    compressible: !1
  },
  "application/lxf": {
    source: "iana"
  },
  "application/mac-binhex40": {
    source: "iana",
    extensions: [
      "hqx"
    ]
  },
  "application/mac-compactpro": {
    source: "apache",
    extensions: [
      "cpt"
    ]
  },
  "application/macwriteii": {
    source: "iana"
  },
  "application/mads+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mads"
    ]
  },
  "application/manifest+json": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "webmanifest"
    ]
  },
  "application/marc": {
    source: "iana",
    extensions: [
      "mrc"
    ]
  },
  "application/marcxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mrcx"
    ]
  },
  "application/mathematica": {
    source: "iana",
    extensions: [
      "ma",
      "nb",
      "mb"
    ]
  },
  "application/mathml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mathml"
    ]
  },
  "application/mathml-content+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mathml-presentation+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-associated-procedure-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-deregister+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-envelope+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-msk+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-msk-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-protection-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-reception-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-register+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-register-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-schedule+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbms-user-service-description+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mbox": {
    source: "iana",
    extensions: [
      "mbox"
    ]
  },
  "application/media-policy-dataset+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpf"
    ]
  },
  "application/media_control+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mediaservercontrol+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mscml"
    ]
  },
  "application/merge-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/metalink+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "metalink"
    ]
  },
  "application/metalink4+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "meta4"
    ]
  },
  "application/mets+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mets"
    ]
  },
  "application/mf4": {
    source: "iana"
  },
  "application/mikey": {
    source: "iana"
  },
  "application/mipc": {
    source: "iana"
  },
  "application/missing-blocks+cbor-seq": {
    source: "iana"
  },
  "application/mmt-aei+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "maei"
    ]
  },
  "application/mmt-usd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "musd"
    ]
  },
  "application/mods+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mods"
    ]
  },
  "application/moss-keys": {
    source: "iana"
  },
  "application/moss-signature": {
    source: "iana"
  },
  "application/mosskey-data": {
    source: "iana"
  },
  "application/mosskey-request": {
    source: "iana"
  },
  "application/mp21": {
    source: "iana",
    extensions: [
      "m21",
      "mp21"
    ]
  },
  "application/mp4": {
    source: "iana",
    extensions: [
      "mp4s",
      "m4p"
    ]
  },
  "application/mpeg4-generic": {
    source: "iana"
  },
  "application/mpeg4-iod": {
    source: "iana"
  },
  "application/mpeg4-iod-xmt": {
    source: "iana"
  },
  "application/mrb-consumer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/mrb-publish+xml": {
    source: "iana",
    compressible: !0
  },
  "application/msc-ivr+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/msc-mixer+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/msword": {
    source: "iana",
    compressible: !1,
    extensions: [
      "doc",
      "dot"
    ]
  },
  "application/mud+json": {
    source: "iana",
    compressible: !0
  },
  "application/multipart-core": {
    source: "iana"
  },
  "application/mxf": {
    source: "iana",
    extensions: [
      "mxf"
    ]
  },
  "application/n-quads": {
    source: "iana",
    extensions: [
      "nq"
    ]
  },
  "application/n-triples": {
    source: "iana",
    extensions: [
      "nt"
    ]
  },
  "application/nasdata": {
    source: "iana"
  },
  "application/news-checkgroups": {
    source: "iana",
    charset: "US-ASCII"
  },
  "application/news-groupinfo": {
    source: "iana",
    charset: "US-ASCII"
  },
  "application/news-transmission": {
    source: "iana"
  },
  "application/nlsml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/node": {
    source: "iana",
    extensions: [
      "cjs"
    ]
  },
  "application/nss": {
    source: "iana"
  },
  "application/oauth-authz-req+jwt": {
    source: "iana"
  },
  "application/oblivious-dns-message": {
    source: "iana"
  },
  "application/ocsp-request": {
    source: "iana"
  },
  "application/ocsp-response": {
    source: "iana"
  },
  "application/octet-stream": {
    source: "iana",
    compressible: !1,
    extensions: [
      "bin",
      "dms",
      "lrf",
      "mar",
      "so",
      "dist",
      "distz",
      "pkg",
      "bpk",
      "dump",
      "elc",
      "deploy",
      "exe",
      "dll",
      "deb",
      "dmg",
      "iso",
      "img",
      "msi",
      "msp",
      "msm",
      "buffer"
    ]
  },
  "application/oda": {
    source: "iana",
    extensions: [
      "oda"
    ]
  },
  "application/odm+xml": {
    source: "iana",
    compressible: !0
  },
  "application/odx": {
    source: "iana"
  },
  "application/oebps-package+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "opf"
    ]
  },
  "application/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ogx"
    ]
  },
  "application/omdoc+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "omdoc"
    ]
  },
  "application/onenote": {
    source: "apache",
    extensions: [
      "onetoc",
      "onetoc2",
      "onetmp",
      "onepkg"
    ]
  },
  "application/opc-nodeset+xml": {
    source: "iana",
    compressible: !0
  },
  "application/oscore": {
    source: "iana"
  },
  "application/oxps": {
    source: "iana",
    extensions: [
      "oxps"
    ]
  },
  "application/p21": {
    source: "iana"
  },
  "application/p21+zip": {
    source: "iana",
    compressible: !1
  },
  "application/p2p-overlay+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "relo"
    ]
  },
  "application/parityfec": {
    source: "iana"
  },
  "application/passport": {
    source: "iana"
  },
  "application/patch-ops-error+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xer"
    ]
  },
  "application/pdf": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pdf"
    ]
  },
  "application/pdx": {
    source: "iana"
  },
  "application/pem-certificate-chain": {
    source: "iana"
  },
  "application/pgp-encrypted": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pgp"
    ]
  },
  "application/pgp-keys": {
    source: "iana",
    extensions: [
      "asc"
    ]
  },
  "application/pgp-signature": {
    source: "iana",
    extensions: [
      "asc",
      "sig"
    ]
  },
  "application/pics-rules": {
    source: "apache",
    extensions: [
      "prf"
    ]
  },
  "application/pidf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/pidf-diff+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/pkcs10": {
    source: "iana",
    extensions: [
      "p10"
    ]
  },
  "application/pkcs12": {
    source: "iana"
  },
  "application/pkcs7-mime": {
    source: "iana",
    extensions: [
      "p7m",
      "p7c"
    ]
  },
  "application/pkcs7-signature": {
    source: "iana",
    extensions: [
      "p7s"
    ]
  },
  "application/pkcs8": {
    source: "iana",
    extensions: [
      "p8"
    ]
  },
  "application/pkcs8-encrypted": {
    source: "iana"
  },
  "application/pkix-attr-cert": {
    source: "iana",
    extensions: [
      "ac"
    ]
  },
  "application/pkix-cert": {
    source: "iana",
    extensions: [
      "cer"
    ]
  },
  "application/pkix-crl": {
    source: "iana",
    extensions: [
      "crl"
    ]
  },
  "application/pkix-pkipath": {
    source: "iana",
    extensions: [
      "pkipath"
    ]
  },
  "application/pkixcmp": {
    source: "iana",
    extensions: [
      "pki"
    ]
  },
  "application/pls+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "pls"
    ]
  },
  "application/poc-settings+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/postscript": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ai",
      "eps",
      "ps"
    ]
  },
  "application/ppsp-tracker+json": {
    source: "iana",
    compressible: !0
  },
  "application/problem+json": {
    source: "iana",
    compressible: !0
  },
  "application/problem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/provenance+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "provx"
    ]
  },
  "application/prs.alvestrand.titrax-sheet": {
    source: "iana"
  },
  "application/prs.cww": {
    source: "iana",
    extensions: [
      "cww"
    ]
  },
  "application/prs.cyn": {
    source: "iana",
    charset: "7-BIT"
  },
  "application/prs.hpub+zip": {
    source: "iana",
    compressible: !1
  },
  "application/prs.nprend": {
    source: "iana"
  },
  "application/prs.plucker": {
    source: "iana"
  },
  "application/prs.rdf-xml-crypt": {
    source: "iana"
  },
  "application/prs.xsf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/pskc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "pskcxml"
    ]
  },
  "application/pvd+json": {
    source: "iana",
    compressible: !0
  },
  "application/qsig": {
    source: "iana"
  },
  "application/raml+yaml": {
    compressible: !0,
    extensions: [
      "raml"
    ]
  },
  "application/raptorfec": {
    source: "iana"
  },
  "application/rdap+json": {
    source: "iana",
    compressible: !0
  },
  "application/rdf+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rdf",
      "owl"
    ]
  },
  "application/reginfo+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rif"
    ]
  },
  "application/relax-ng-compact-syntax": {
    source: "iana",
    extensions: [
      "rnc"
    ]
  },
  "application/remote-printing": {
    source: "iana"
  },
  "application/reputon+json": {
    source: "iana",
    compressible: !0
  },
  "application/resource-lists+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rl"
    ]
  },
  "application/resource-lists-diff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rld"
    ]
  },
  "application/rfc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/riscos": {
    source: "iana"
  },
  "application/rlmi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/rls-services+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rs"
    ]
  },
  "application/route-apd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rapd"
    ]
  },
  "application/route-s-tsid+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sls"
    ]
  },
  "application/route-usd+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rusd"
    ]
  },
  "application/rpki-ghostbusters": {
    source: "iana",
    extensions: [
      "gbr"
    ]
  },
  "application/rpki-manifest": {
    source: "iana",
    extensions: [
      "mft"
    ]
  },
  "application/rpki-publication": {
    source: "iana"
  },
  "application/rpki-roa": {
    source: "iana",
    extensions: [
      "roa"
    ]
  },
  "application/rpki-updown": {
    source: "iana"
  },
  "application/rsd+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "rsd"
    ]
  },
  "application/rss+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "rss"
    ]
  },
  "application/rtf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtf"
    ]
  },
  "application/rtploopback": {
    source: "iana"
  },
  "application/rtx": {
    source: "iana"
  },
  "application/samlassertion+xml": {
    source: "iana",
    compressible: !0
  },
  "application/samlmetadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sarif+json": {
    source: "iana",
    compressible: !0
  },
  "application/sarif-external-properties+json": {
    source: "iana",
    compressible: !0
  },
  "application/sbe": {
    source: "iana"
  },
  "application/sbml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sbml"
    ]
  },
  "application/scaip+xml": {
    source: "iana",
    compressible: !0
  },
  "application/scim+json": {
    source: "iana",
    compressible: !0
  },
  "application/scvp-cv-request": {
    source: "iana",
    extensions: [
      "scq"
    ]
  },
  "application/scvp-cv-response": {
    source: "iana",
    extensions: [
      "scs"
    ]
  },
  "application/scvp-vp-request": {
    source: "iana",
    extensions: [
      "spq"
    ]
  },
  "application/scvp-vp-response": {
    source: "iana",
    extensions: [
      "spp"
    ]
  },
  "application/sdp": {
    source: "iana",
    extensions: [
      "sdp"
    ]
  },
  "application/secevent+jwt": {
    source: "iana"
  },
  "application/senml+cbor": {
    source: "iana"
  },
  "application/senml+json": {
    source: "iana",
    compressible: !0
  },
  "application/senml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "senmlx"
    ]
  },
  "application/senml-etch+cbor": {
    source: "iana"
  },
  "application/senml-etch+json": {
    source: "iana",
    compressible: !0
  },
  "application/senml-exi": {
    source: "iana"
  },
  "application/sensml+cbor": {
    source: "iana"
  },
  "application/sensml+json": {
    source: "iana",
    compressible: !0
  },
  "application/sensml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sensmlx"
    ]
  },
  "application/sensml-exi": {
    source: "iana"
  },
  "application/sep+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sep-exi": {
    source: "iana"
  },
  "application/session-info": {
    source: "iana"
  },
  "application/set-payment": {
    source: "iana"
  },
  "application/set-payment-initiation": {
    source: "iana",
    extensions: [
      "setpay"
    ]
  },
  "application/set-registration": {
    source: "iana"
  },
  "application/set-registration-initiation": {
    source: "iana",
    extensions: [
      "setreg"
    ]
  },
  "application/sgml": {
    source: "iana"
  },
  "application/sgml-open-catalog": {
    source: "iana"
  },
  "application/shf+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "shf"
    ]
  },
  "application/sieve": {
    source: "iana",
    extensions: [
      "siv",
      "sieve"
    ]
  },
  "application/simple-filter+xml": {
    source: "iana",
    compressible: !0
  },
  "application/simple-message-summary": {
    source: "iana"
  },
  "application/simplesymbolcontainer": {
    source: "iana"
  },
  "application/sipc": {
    source: "iana"
  },
  "application/slate": {
    source: "iana"
  },
  "application/smil": {
    source: "iana"
  },
  "application/smil+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "smi",
      "smil"
    ]
  },
  "application/smpte336m": {
    source: "iana"
  },
  "application/soap+fastinfoset": {
    source: "iana"
  },
  "application/soap+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sparql-query": {
    source: "iana",
    extensions: [
      "rq"
    ]
  },
  "application/sparql-results+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "srx"
    ]
  },
  "application/spdx+json": {
    source: "iana",
    compressible: !0
  },
  "application/spirits-event+xml": {
    source: "iana",
    compressible: !0
  },
  "application/sql": {
    source: "iana"
  },
  "application/srgs": {
    source: "iana",
    extensions: [
      "gram"
    ]
  },
  "application/srgs+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "grxml"
    ]
  },
  "application/sru+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sru"
    ]
  },
  "application/ssdl+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ssdl"
    ]
  },
  "application/ssml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ssml"
    ]
  },
  "application/stix+json": {
    source: "iana",
    compressible: !0
  },
  "application/swid+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "swidtag"
    ]
  },
  "application/tamp-apex-update": {
    source: "iana"
  },
  "application/tamp-apex-update-confirm": {
    source: "iana"
  },
  "application/tamp-community-update": {
    source: "iana"
  },
  "application/tamp-community-update-confirm": {
    source: "iana"
  },
  "application/tamp-error": {
    source: "iana"
  },
  "application/tamp-sequence-adjust": {
    source: "iana"
  },
  "application/tamp-sequence-adjust-confirm": {
    source: "iana"
  },
  "application/tamp-status-query": {
    source: "iana"
  },
  "application/tamp-status-response": {
    source: "iana"
  },
  "application/tamp-update": {
    source: "iana"
  },
  "application/tamp-update-confirm": {
    source: "iana"
  },
  "application/tar": {
    compressible: !0
  },
  "application/taxii+json": {
    source: "iana",
    compressible: !0
  },
  "application/td+json": {
    source: "iana",
    compressible: !0
  },
  "application/tei+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tei",
      "teicorpus"
    ]
  },
  "application/tetra_isi": {
    source: "iana"
  },
  "application/thraud+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tfi"
    ]
  },
  "application/timestamp-query": {
    source: "iana"
  },
  "application/timestamp-reply": {
    source: "iana"
  },
  "application/timestamped-data": {
    source: "iana",
    extensions: [
      "tsd"
    ]
  },
  "application/tlsrpt+gzip": {
    source: "iana"
  },
  "application/tlsrpt+json": {
    source: "iana",
    compressible: !0
  },
  "application/tnauthlist": {
    source: "iana"
  },
  "application/token-introspection+jwt": {
    source: "iana"
  },
  "application/toml": {
    compressible: !0,
    extensions: [
      "toml"
    ]
  },
  "application/trickle-ice-sdpfrag": {
    source: "iana"
  },
  "application/trig": {
    source: "iana",
    extensions: [
      "trig"
    ]
  },
  "application/ttml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ttml"
    ]
  },
  "application/tve-trigger": {
    source: "iana"
  },
  "application/tzif": {
    source: "iana"
  },
  "application/tzif-leap": {
    source: "iana"
  },
  "application/ubjson": {
    compressible: !1,
    extensions: [
      "ubj"
    ]
  },
  "application/ulpfec": {
    source: "iana"
  },
  "application/urc-grpsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/urc-ressheet+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rsheet"
    ]
  },
  "application/urc-targetdesc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "td"
    ]
  },
  "application/urc-uisocketdesc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vcard+json": {
    source: "iana",
    compressible: !0
  },
  "application/vcard+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vemmi": {
    source: "iana"
  },
  "application/vividence.scriptfile": {
    source: "apache"
  },
  "application/vnd.1000minds.decision-model+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "1km"
    ]
  },
  "application/vnd.3gpp-prose+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp-prose-pc3ch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp-v2x-local-service-information": {
    source: "iana"
  },
  "application/vnd.3gpp.5gnas": {
    source: "iana"
  },
  "application/vnd.3gpp.access-transfer-events+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.bsf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.gmop+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.gtpc": {
    source: "iana"
  },
  "application/vnd.3gpp.interworking-data": {
    source: "iana"
  },
  "application/vnd.3gpp.lpp": {
    source: "iana"
  },
  "application/vnd.3gpp.mc-signalling-ear": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-payload": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-signalling": {
    source: "iana"
  },
  "application/vnd.3gpp.mcdata-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcdata-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-floor-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-location-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-mbms-usage-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-signed+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-ue-init-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcptt-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-affiliation-command+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-affiliation-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-location-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-mbms-usage-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-service-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-transmission-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-ue-config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mcvideo-user-profile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.mid-call+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.ngap": {
    source: "iana"
  },
  "application/vnd.3gpp.pfcp": {
    source: "iana"
  },
  "application/vnd.3gpp.pic-bw-large": {
    source: "iana",
    extensions: [
      "plb"
    ]
  },
  "application/vnd.3gpp.pic-bw-small": {
    source: "iana",
    extensions: [
      "psb"
    ]
  },
  "application/vnd.3gpp.pic-bw-var": {
    source: "iana",
    extensions: [
      "pvb"
    ]
  },
  "application/vnd.3gpp.s1ap": {
    source: "iana"
  },
  "application/vnd.3gpp.sms": {
    source: "iana"
  },
  "application/vnd.3gpp.sms+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.srvcc-ext+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.srvcc-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.state-and-event-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp.ussd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp2.bcmcsinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.3gpp2.sms": {
    source: "iana"
  },
  "application/vnd.3gpp2.tcap": {
    source: "iana",
    extensions: [
      "tcap"
    ]
  },
  "application/vnd.3lightssoftware.imagescal": {
    source: "iana"
  },
  "application/vnd.3m.post-it-notes": {
    source: "iana",
    extensions: [
      "pwn"
    ]
  },
  "application/vnd.accpac.simply.aso": {
    source: "iana",
    extensions: [
      "aso"
    ]
  },
  "application/vnd.accpac.simply.imp": {
    source: "iana",
    extensions: [
      "imp"
    ]
  },
  "application/vnd.acucobol": {
    source: "iana",
    extensions: [
      "acu"
    ]
  },
  "application/vnd.acucorp": {
    source: "iana",
    extensions: [
      "atc",
      "acutc"
    ]
  },
  "application/vnd.adobe.air-application-installer-package+zip": {
    source: "apache",
    compressible: !1,
    extensions: [
      "air"
    ]
  },
  "application/vnd.adobe.flash.movie": {
    source: "iana"
  },
  "application/vnd.adobe.formscentral.fcdt": {
    source: "iana",
    extensions: [
      "fcdt"
    ]
  },
  "application/vnd.adobe.fxp": {
    source: "iana",
    extensions: [
      "fxp",
      "fxpl"
    ]
  },
  "application/vnd.adobe.partial-upload": {
    source: "iana"
  },
  "application/vnd.adobe.xdp+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdp"
    ]
  },
  "application/vnd.adobe.xfdf": {
    source: "iana",
    extensions: [
      "xfdf"
    ]
  },
  "application/vnd.aether.imp": {
    source: "iana"
  },
  "application/vnd.afpc.afplinedata": {
    source: "iana"
  },
  "application/vnd.afpc.afplinedata-pagedef": {
    source: "iana"
  },
  "application/vnd.afpc.cmoca-cmresource": {
    source: "iana"
  },
  "application/vnd.afpc.foca-charset": {
    source: "iana"
  },
  "application/vnd.afpc.foca-codedfont": {
    source: "iana"
  },
  "application/vnd.afpc.foca-codepage": {
    source: "iana"
  },
  "application/vnd.afpc.modca": {
    source: "iana"
  },
  "application/vnd.afpc.modca-cmtable": {
    source: "iana"
  },
  "application/vnd.afpc.modca-formdef": {
    source: "iana"
  },
  "application/vnd.afpc.modca-mediummap": {
    source: "iana"
  },
  "application/vnd.afpc.modca-objectcontainer": {
    source: "iana"
  },
  "application/vnd.afpc.modca-overlay": {
    source: "iana"
  },
  "application/vnd.afpc.modca-pagesegment": {
    source: "iana"
  },
  "application/vnd.age": {
    source: "iana",
    extensions: [
      "age"
    ]
  },
  "application/vnd.ah-barcode": {
    source: "iana"
  },
  "application/vnd.ahead.space": {
    source: "iana",
    extensions: [
      "ahead"
    ]
  },
  "application/vnd.airzip.filesecure.azf": {
    source: "iana",
    extensions: [
      "azf"
    ]
  },
  "application/vnd.airzip.filesecure.azs": {
    source: "iana",
    extensions: [
      "azs"
    ]
  },
  "application/vnd.amadeus+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.amazon.ebook": {
    source: "apache",
    extensions: [
      "azw"
    ]
  },
  "application/vnd.amazon.mobi8-ebook": {
    source: "iana"
  },
  "application/vnd.americandynamics.acc": {
    source: "iana",
    extensions: [
      "acc"
    ]
  },
  "application/vnd.amiga.ami": {
    source: "iana",
    extensions: [
      "ami"
    ]
  },
  "application/vnd.amundsen.maze+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.android.ota": {
    source: "iana"
  },
  "application/vnd.android.package-archive": {
    source: "apache",
    compressible: !1,
    extensions: [
      "apk"
    ]
  },
  "application/vnd.anki": {
    source: "iana"
  },
  "application/vnd.anser-web-certificate-issue-initiation": {
    source: "iana",
    extensions: [
      "cii"
    ]
  },
  "application/vnd.anser-web-funds-transfer-initiation": {
    source: "apache",
    extensions: [
      "fti"
    ]
  },
  "application/vnd.antix.game-component": {
    source: "iana",
    extensions: [
      "atx"
    ]
  },
  "application/vnd.apache.arrow.file": {
    source: "iana"
  },
  "application/vnd.apache.arrow.stream": {
    source: "iana"
  },
  "application/vnd.apache.thrift.binary": {
    source: "iana"
  },
  "application/vnd.apache.thrift.compact": {
    source: "iana"
  },
  "application/vnd.apache.thrift.json": {
    source: "iana"
  },
  "application/vnd.api+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.aplextor.warrp+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.apothekende.reservation+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.apple.installer+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mpkg"
    ]
  },
  "application/vnd.apple.keynote": {
    source: "iana",
    extensions: [
      "key"
    ]
  },
  "application/vnd.apple.mpegurl": {
    source: "iana",
    extensions: [
      "m3u8"
    ]
  },
  "application/vnd.apple.numbers": {
    source: "iana",
    extensions: [
      "numbers"
    ]
  },
  "application/vnd.apple.pages": {
    source: "iana",
    extensions: [
      "pages"
    ]
  },
  "application/vnd.apple.pkpass": {
    compressible: !1,
    extensions: [
      "pkpass"
    ]
  },
  "application/vnd.arastra.swi": {
    source: "iana"
  },
  "application/vnd.aristanetworks.swi": {
    source: "iana",
    extensions: [
      "swi"
    ]
  },
  "application/vnd.artisan+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.artsquare": {
    source: "iana"
  },
  "application/vnd.astraea-software.iota": {
    source: "iana",
    extensions: [
      "iota"
    ]
  },
  "application/vnd.audiograph": {
    source: "iana",
    extensions: [
      "aep"
    ]
  },
  "application/vnd.autopackage": {
    source: "iana"
  },
  "application/vnd.avalon+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.avistar+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.balsamiq.bmml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "bmml"
    ]
  },
  "application/vnd.balsamiq.bmpr": {
    source: "iana"
  },
  "application/vnd.banana-accounting": {
    source: "iana"
  },
  "application/vnd.bbf.usp.error": {
    source: "iana"
  },
  "application/vnd.bbf.usp.msg": {
    source: "iana"
  },
  "application/vnd.bbf.usp.msg+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.bekitzur-stech+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.bint.med-content": {
    source: "iana"
  },
  "application/vnd.biopax.rdf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.blink-idb-value-wrapper": {
    source: "iana"
  },
  "application/vnd.blueice.multipass": {
    source: "iana",
    extensions: [
      "mpm"
    ]
  },
  "application/vnd.bluetooth.ep.oob": {
    source: "iana"
  },
  "application/vnd.bluetooth.le.oob": {
    source: "iana"
  },
  "application/vnd.bmi": {
    source: "iana",
    extensions: [
      "bmi"
    ]
  },
  "application/vnd.bpf": {
    source: "iana"
  },
  "application/vnd.bpf3": {
    source: "iana"
  },
  "application/vnd.businessobjects": {
    source: "iana",
    extensions: [
      "rep"
    ]
  },
  "application/vnd.byu.uapi+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cab-jscript": {
    source: "iana"
  },
  "application/vnd.canon-cpdl": {
    source: "iana"
  },
  "application/vnd.canon-lips": {
    source: "iana"
  },
  "application/vnd.capasystems-pg+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cendio.thinlinc.clientconf": {
    source: "iana"
  },
  "application/vnd.century-systems.tcp_stream": {
    source: "iana"
  },
  "application/vnd.chemdraw+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "cdxml"
    ]
  },
  "application/vnd.chess-pgn": {
    source: "iana"
  },
  "application/vnd.chipnuts.karaoke-mmd": {
    source: "iana",
    extensions: [
      "mmd"
    ]
  },
  "application/vnd.ciedi": {
    source: "iana"
  },
  "application/vnd.cinderella": {
    source: "iana",
    extensions: [
      "cdy"
    ]
  },
  "application/vnd.cirpack.isdn-ext": {
    source: "iana"
  },
  "application/vnd.citationstyles.style+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "csl"
    ]
  },
  "application/vnd.claymore": {
    source: "iana",
    extensions: [
      "cla"
    ]
  },
  "application/vnd.cloanto.rp9": {
    source: "iana",
    extensions: [
      "rp9"
    ]
  },
  "application/vnd.clonk.c4group": {
    source: "iana",
    extensions: [
      "c4g",
      "c4d",
      "c4f",
      "c4p",
      "c4u"
    ]
  },
  "application/vnd.cluetrust.cartomobile-config": {
    source: "iana",
    extensions: [
      "c11amc"
    ]
  },
  "application/vnd.cluetrust.cartomobile-config-pkg": {
    source: "iana",
    extensions: [
      "c11amz"
    ]
  },
  "application/vnd.coffeescript": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.document": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.document-template": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.presentation": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.presentation-template": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet": {
    source: "iana"
  },
  "application/vnd.collabio.xodocuments.spreadsheet-template": {
    source: "iana"
  },
  "application/vnd.collection+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.collection.doc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.collection.next+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.comicbook+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.comicbook-rar": {
    source: "iana"
  },
  "application/vnd.commerce-battelle": {
    source: "iana"
  },
  "application/vnd.commonspace": {
    source: "iana",
    extensions: [
      "csp"
    ]
  },
  "application/vnd.contact.cmsg": {
    source: "iana",
    extensions: [
      "cdbcmsg"
    ]
  },
  "application/vnd.coreos.ignition+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cosmocaller": {
    source: "iana",
    extensions: [
      "cmc"
    ]
  },
  "application/vnd.crick.clicker": {
    source: "iana",
    extensions: [
      "clkx"
    ]
  },
  "application/vnd.crick.clicker.keyboard": {
    source: "iana",
    extensions: [
      "clkk"
    ]
  },
  "application/vnd.crick.clicker.palette": {
    source: "iana",
    extensions: [
      "clkp"
    ]
  },
  "application/vnd.crick.clicker.template": {
    source: "iana",
    extensions: [
      "clkt"
    ]
  },
  "application/vnd.crick.clicker.wordbank": {
    source: "iana",
    extensions: [
      "clkw"
    ]
  },
  "application/vnd.criticaltools.wbs+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wbs"
    ]
  },
  "application/vnd.cryptii.pipe+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.crypto-shade-file": {
    source: "iana"
  },
  "application/vnd.cryptomator.encrypted": {
    source: "iana"
  },
  "application/vnd.cryptomator.vault": {
    source: "iana"
  },
  "application/vnd.ctc-posml": {
    source: "iana",
    extensions: [
      "pml"
    ]
  },
  "application/vnd.ctct.ws+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cups-pdf": {
    source: "iana"
  },
  "application/vnd.cups-postscript": {
    source: "iana"
  },
  "application/vnd.cups-ppd": {
    source: "iana",
    extensions: [
      "ppd"
    ]
  },
  "application/vnd.cups-raster": {
    source: "iana"
  },
  "application/vnd.cups-raw": {
    source: "iana"
  },
  "application/vnd.curl": {
    source: "iana"
  },
  "application/vnd.curl.car": {
    source: "apache",
    extensions: [
      "car"
    ]
  },
  "application/vnd.curl.pcurl": {
    source: "apache",
    extensions: [
      "pcurl"
    ]
  },
  "application/vnd.cyan.dean.root+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cybank": {
    source: "iana"
  },
  "application/vnd.cyclonedx+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.cyclonedx+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.d2l.coursepackage1p0+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.d3m-dataset": {
    source: "iana"
  },
  "application/vnd.d3m-problem": {
    source: "iana"
  },
  "application/vnd.dart": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dart"
    ]
  },
  "application/vnd.data-vision.rdz": {
    source: "iana",
    extensions: [
      "rdz"
    ]
  },
  "application/vnd.datapackage+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dataresource+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dbf": {
    source: "iana",
    extensions: [
      "dbf"
    ]
  },
  "application/vnd.debian.binary-package": {
    source: "iana"
  },
  "application/vnd.dece.data": {
    source: "iana",
    extensions: [
      "uvf",
      "uvvf",
      "uvd",
      "uvvd"
    ]
  },
  "application/vnd.dece.ttml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uvt",
      "uvvt"
    ]
  },
  "application/vnd.dece.unspecified": {
    source: "iana",
    extensions: [
      "uvx",
      "uvvx"
    ]
  },
  "application/vnd.dece.zip": {
    source: "iana",
    extensions: [
      "uvz",
      "uvvz"
    ]
  },
  "application/vnd.denovo.fcselayout-link": {
    source: "iana",
    extensions: [
      "fe_launch"
    ]
  },
  "application/vnd.desmume.movie": {
    source: "iana"
  },
  "application/vnd.dir-bi.plate-dl-nosuffix": {
    source: "iana"
  },
  "application/vnd.dm.delegation+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dna": {
    source: "iana",
    extensions: [
      "dna"
    ]
  },
  "application/vnd.document+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dolby.mlp": {
    source: "apache",
    extensions: [
      "mlp"
    ]
  },
  "application/vnd.dolby.mobile.1": {
    source: "iana"
  },
  "application/vnd.dolby.mobile.2": {
    source: "iana"
  },
  "application/vnd.doremir.scorecloud-binary-document": {
    source: "iana"
  },
  "application/vnd.dpgraph": {
    source: "iana",
    extensions: [
      "dpg"
    ]
  },
  "application/vnd.dreamfactory": {
    source: "iana",
    extensions: [
      "dfac"
    ]
  },
  "application/vnd.drive+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ds-keypoint": {
    source: "apache",
    extensions: [
      "kpxx"
    ]
  },
  "application/vnd.dtg.local": {
    source: "iana"
  },
  "application/vnd.dtg.local.flash": {
    source: "iana"
  },
  "application/vnd.dtg.local.html": {
    source: "iana"
  },
  "application/vnd.dvb.ait": {
    source: "iana",
    extensions: [
      "ait"
    ]
  },
  "application/vnd.dvb.dvbisl+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.dvbj": {
    source: "iana"
  },
  "application/vnd.dvb.esgcontainer": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcdftnotifaccess": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgaccess": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgaccess2": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcesgpdd": {
    source: "iana"
  },
  "application/vnd.dvb.ipdcroaming": {
    source: "iana"
  },
  "application/vnd.dvb.iptv.alfec-base": {
    source: "iana"
  },
  "application/vnd.dvb.iptv.alfec-enhancement": {
    source: "iana"
  },
  "application/vnd.dvb.notif-aggregate-root+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-container+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-generic+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-msglist+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-registration-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-ia-registration-response+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.notif-init+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.dvb.pfr": {
    source: "iana"
  },
  "application/vnd.dvb.service": {
    source: "iana",
    extensions: [
      "svc"
    ]
  },
  "application/vnd.dxr": {
    source: "iana"
  },
  "application/vnd.dynageo": {
    source: "iana",
    extensions: [
      "geo"
    ]
  },
  "application/vnd.dzr": {
    source: "iana"
  },
  "application/vnd.easykaraoke.cdgdownload": {
    source: "iana"
  },
  "application/vnd.ecdis-update": {
    source: "iana"
  },
  "application/vnd.ecip.rlp": {
    source: "iana"
  },
  "application/vnd.eclipse.ditto+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ecowin.chart": {
    source: "iana",
    extensions: [
      "mag"
    ]
  },
  "application/vnd.ecowin.filerequest": {
    source: "iana"
  },
  "application/vnd.ecowin.fileupdate": {
    source: "iana"
  },
  "application/vnd.ecowin.series": {
    source: "iana"
  },
  "application/vnd.ecowin.seriesrequest": {
    source: "iana"
  },
  "application/vnd.ecowin.seriesupdate": {
    source: "iana"
  },
  "application/vnd.efi.img": {
    source: "iana"
  },
  "application/vnd.efi.iso": {
    source: "iana"
  },
  "application/vnd.emclient.accessrequest+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.enliven": {
    source: "iana",
    extensions: [
      "nml"
    ]
  },
  "application/vnd.enphase.envoy": {
    source: "iana"
  },
  "application/vnd.eprints.data+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.epson.esf": {
    source: "iana",
    extensions: [
      "esf"
    ]
  },
  "application/vnd.epson.msf": {
    source: "iana",
    extensions: [
      "msf"
    ]
  },
  "application/vnd.epson.quickanime": {
    source: "iana",
    extensions: [
      "qam"
    ]
  },
  "application/vnd.epson.salt": {
    source: "iana",
    extensions: [
      "slt"
    ]
  },
  "application/vnd.epson.ssf": {
    source: "iana",
    extensions: [
      "ssf"
    ]
  },
  "application/vnd.ericsson.quickcall": {
    source: "iana"
  },
  "application/vnd.espass-espass+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.eszigno3+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "es3",
      "et3"
    ]
  },
  "application/vnd.etsi.aoc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.asic-e+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.etsi.asic-s+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.etsi.cug+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvcommand+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvdiscovery+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-bc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-cod+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsad-npvr+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvservice+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvsync+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.iptvueprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.mcid+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.mheg5": {
    source: "iana"
  },
  "application/vnd.etsi.overload-control-policy-dataset+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.pstn+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.sci+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.simservs+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.timestamp-token": {
    source: "iana"
  },
  "application/vnd.etsi.tsl+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.etsi.tsl.der": {
    source: "iana"
  },
  "application/vnd.eu.kasparian.car+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.eudora.data": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.profile": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.settings": {
    source: "iana"
  },
  "application/vnd.evolv.ecig.theme": {
    source: "iana"
  },
  "application/vnd.exstream-empower+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.exstream-package": {
    source: "iana"
  },
  "application/vnd.ezpix-album": {
    source: "iana",
    extensions: [
      "ez2"
    ]
  },
  "application/vnd.ezpix-package": {
    source: "iana",
    extensions: [
      "ez3"
    ]
  },
  "application/vnd.f-secure.mobile": {
    source: "iana"
  },
  "application/vnd.familysearch.gedcom+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.fastcopy-disk-image": {
    source: "iana"
  },
  "application/vnd.fdf": {
    source: "iana",
    extensions: [
      "fdf"
    ]
  },
  "application/vnd.fdsn.mseed": {
    source: "iana",
    extensions: [
      "mseed"
    ]
  },
  "application/vnd.fdsn.seed": {
    source: "iana",
    extensions: [
      "seed",
      "dataless"
    ]
  },
  "application/vnd.ffsns": {
    source: "iana"
  },
  "application/vnd.ficlab.flb+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.filmit.zfc": {
    source: "iana"
  },
  "application/vnd.fints": {
    source: "iana"
  },
  "application/vnd.firemonkeys.cloudcell": {
    source: "iana"
  },
  "application/vnd.flographit": {
    source: "iana",
    extensions: [
      "gph"
    ]
  },
  "application/vnd.fluxtime.clip": {
    source: "iana",
    extensions: [
      "ftc"
    ]
  },
  "application/vnd.font-fontforge-sfd": {
    source: "iana"
  },
  "application/vnd.framemaker": {
    source: "iana",
    extensions: [
      "fm",
      "frame",
      "maker",
      "book"
    ]
  },
  "application/vnd.frogans.fnc": {
    source: "iana",
    extensions: [
      "fnc"
    ]
  },
  "application/vnd.frogans.ltf": {
    source: "iana",
    extensions: [
      "ltf"
    ]
  },
  "application/vnd.fsc.weblaunch": {
    source: "iana",
    extensions: [
      "fsc"
    ]
  },
  "application/vnd.fujifilm.fb.docuworks": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.binder": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.docuworks.container": {
    source: "iana"
  },
  "application/vnd.fujifilm.fb.jfi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.fujitsu.oasys": {
    source: "iana",
    extensions: [
      "oas"
    ]
  },
  "application/vnd.fujitsu.oasys2": {
    source: "iana",
    extensions: [
      "oa2"
    ]
  },
  "application/vnd.fujitsu.oasys3": {
    source: "iana",
    extensions: [
      "oa3"
    ]
  },
  "application/vnd.fujitsu.oasysgp": {
    source: "iana",
    extensions: [
      "fg5"
    ]
  },
  "application/vnd.fujitsu.oasysprs": {
    source: "iana",
    extensions: [
      "bh2"
    ]
  },
  "application/vnd.fujixerox.art-ex": {
    source: "iana"
  },
  "application/vnd.fujixerox.art4": {
    source: "iana"
  },
  "application/vnd.fujixerox.ddd": {
    source: "iana",
    extensions: [
      "ddd"
    ]
  },
  "application/vnd.fujixerox.docuworks": {
    source: "iana",
    extensions: [
      "xdw"
    ]
  },
  "application/vnd.fujixerox.docuworks.binder": {
    source: "iana",
    extensions: [
      "xbd"
    ]
  },
  "application/vnd.fujixerox.docuworks.container": {
    source: "iana"
  },
  "application/vnd.fujixerox.hbpl": {
    source: "iana"
  },
  "application/vnd.fut-misnet": {
    source: "iana"
  },
  "application/vnd.futoin+cbor": {
    source: "iana"
  },
  "application/vnd.futoin+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.fuzzysheet": {
    source: "iana",
    extensions: [
      "fzs"
    ]
  },
  "application/vnd.genomatix.tuxedo": {
    source: "iana",
    extensions: [
      "txd"
    ]
  },
  "application/vnd.gentics.grd+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geo+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geocube+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.geogebra.file": {
    source: "iana",
    extensions: [
      "ggb"
    ]
  },
  "application/vnd.geogebra.slides": {
    source: "iana"
  },
  "application/vnd.geogebra.tool": {
    source: "iana",
    extensions: [
      "ggt"
    ]
  },
  "application/vnd.geometry-explorer": {
    source: "iana",
    extensions: [
      "gex",
      "gre"
    ]
  },
  "application/vnd.geonext": {
    source: "iana",
    extensions: [
      "gxt"
    ]
  },
  "application/vnd.geoplan": {
    source: "iana",
    extensions: [
      "g2w"
    ]
  },
  "application/vnd.geospace": {
    source: "iana",
    extensions: [
      "g3w"
    ]
  },
  "application/vnd.gerber": {
    source: "iana"
  },
  "application/vnd.globalplatform.card-content-mgt": {
    source: "iana"
  },
  "application/vnd.globalplatform.card-content-mgt-response": {
    source: "iana"
  },
  "application/vnd.gmx": {
    source: "iana",
    extensions: [
      "gmx"
    ]
  },
  "application/vnd.google-apps.document": {
    compressible: !1,
    extensions: [
      "gdoc"
    ]
  },
  "application/vnd.google-apps.presentation": {
    compressible: !1,
    extensions: [
      "gslides"
    ]
  },
  "application/vnd.google-apps.spreadsheet": {
    compressible: !1,
    extensions: [
      "gsheet"
    ]
  },
  "application/vnd.google-earth.kml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "kml"
    ]
  },
  "application/vnd.google-earth.kmz": {
    source: "iana",
    compressible: !1,
    extensions: [
      "kmz"
    ]
  },
  "application/vnd.gov.sk.e-form+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.gov.sk.e-form+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.gov.sk.xmldatacontainer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.grafeq": {
    source: "iana",
    extensions: [
      "gqf",
      "gqs"
    ]
  },
  "application/vnd.gridmp": {
    source: "iana"
  },
  "application/vnd.groove-account": {
    source: "iana",
    extensions: [
      "gac"
    ]
  },
  "application/vnd.groove-help": {
    source: "iana",
    extensions: [
      "ghf"
    ]
  },
  "application/vnd.groove-identity-message": {
    source: "iana",
    extensions: [
      "gim"
    ]
  },
  "application/vnd.groove-injector": {
    source: "iana",
    extensions: [
      "grv"
    ]
  },
  "application/vnd.groove-tool-message": {
    source: "iana",
    extensions: [
      "gtm"
    ]
  },
  "application/vnd.groove-tool-template": {
    source: "iana",
    extensions: [
      "tpl"
    ]
  },
  "application/vnd.groove-vcard": {
    source: "iana",
    extensions: [
      "vcg"
    ]
  },
  "application/vnd.hal+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hal+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "hal"
    ]
  },
  "application/vnd.handheld-entertainment+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "zmm"
    ]
  },
  "application/vnd.hbci": {
    source: "iana",
    extensions: [
      "hbci"
    ]
  },
  "application/vnd.hc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hcl-bireports": {
    source: "iana"
  },
  "application/vnd.hdt": {
    source: "iana"
  },
  "application/vnd.heroku+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hhe.lesson-player": {
    source: "iana",
    extensions: [
      "les"
    ]
  },
  "application/vnd.hl7cda+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.hl7v2+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.hp-hpgl": {
    source: "iana",
    extensions: [
      "hpgl"
    ]
  },
  "application/vnd.hp-hpid": {
    source: "iana",
    extensions: [
      "hpid"
    ]
  },
  "application/vnd.hp-hps": {
    source: "iana",
    extensions: [
      "hps"
    ]
  },
  "application/vnd.hp-jlyt": {
    source: "iana",
    extensions: [
      "jlt"
    ]
  },
  "application/vnd.hp-pcl": {
    source: "iana",
    extensions: [
      "pcl"
    ]
  },
  "application/vnd.hp-pclxl": {
    source: "iana",
    extensions: [
      "pclxl"
    ]
  },
  "application/vnd.httphone": {
    source: "iana"
  },
  "application/vnd.hydrostatix.sof-data": {
    source: "iana",
    extensions: [
      "sfd-hdstx"
    ]
  },
  "application/vnd.hyper+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hyper-item+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hyperdrive+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.hzn-3d-crossword": {
    source: "iana"
  },
  "application/vnd.ibm.afplinedata": {
    source: "iana"
  },
  "application/vnd.ibm.electronic-media": {
    source: "iana"
  },
  "application/vnd.ibm.minipay": {
    source: "iana",
    extensions: [
      "mpy"
    ]
  },
  "application/vnd.ibm.modcap": {
    source: "iana",
    extensions: [
      "afp",
      "listafp",
      "list3820"
    ]
  },
  "application/vnd.ibm.rights-management": {
    source: "iana",
    extensions: [
      "irm"
    ]
  },
  "application/vnd.ibm.secure-container": {
    source: "iana",
    extensions: [
      "sc"
    ]
  },
  "application/vnd.iccprofile": {
    source: "iana",
    extensions: [
      "icc",
      "icm"
    ]
  },
  "application/vnd.ieee.1905": {
    source: "iana"
  },
  "application/vnd.igloader": {
    source: "iana",
    extensions: [
      "igl"
    ]
  },
  "application/vnd.imagemeter.folder+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.imagemeter.image+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.immervision-ivp": {
    source: "iana",
    extensions: [
      "ivp"
    ]
  },
  "application/vnd.immervision-ivu": {
    source: "iana",
    extensions: [
      "ivu"
    ]
  },
  "application/vnd.ims.imsccv1p1": {
    source: "iana"
  },
  "application/vnd.ims.imsccv1p2": {
    source: "iana"
  },
  "application/vnd.ims.imsccv1p3": {
    source: "iana"
  },
  "application/vnd.ims.lis.v2.result+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolconsumerprofile+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolproxy+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolproxy.id+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolsettings+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ims.lti.v2.toolsettings.simple+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.informedcontrol.rms+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.informix-visionary": {
    source: "iana"
  },
  "application/vnd.infotech.project": {
    source: "iana"
  },
  "application/vnd.infotech.project+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.innopath.wamp.notification": {
    source: "iana"
  },
  "application/vnd.insors.igm": {
    source: "iana",
    extensions: [
      "igm"
    ]
  },
  "application/vnd.intercon.formnet": {
    source: "iana",
    extensions: [
      "xpw",
      "xpx"
    ]
  },
  "application/vnd.intergeo": {
    source: "iana",
    extensions: [
      "i2g"
    ]
  },
  "application/vnd.intertrust.digibox": {
    source: "iana"
  },
  "application/vnd.intertrust.nncp": {
    source: "iana"
  },
  "application/vnd.intu.qbo": {
    source: "iana",
    extensions: [
      "qbo"
    ]
  },
  "application/vnd.intu.qfx": {
    source: "iana",
    extensions: [
      "qfx"
    ]
  },
  "application/vnd.iptc.g2.catalogitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.conceptitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.knowledgeitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.newsitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.newsmessage+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.packageitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.iptc.g2.planningitem+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ipunplugged.rcprofile": {
    source: "iana",
    extensions: [
      "rcprofile"
    ]
  },
  "application/vnd.irepository.package+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "irp"
    ]
  },
  "application/vnd.is-xpr": {
    source: "iana",
    extensions: [
      "xpr"
    ]
  },
  "application/vnd.isac.fcs": {
    source: "iana",
    extensions: [
      "fcs"
    ]
  },
  "application/vnd.iso11783-10+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.jam": {
    source: "iana",
    extensions: [
      "jam"
    ]
  },
  "application/vnd.japannet-directory-service": {
    source: "iana"
  },
  "application/vnd.japannet-jpnstore-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-payment-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-registration": {
    source: "iana"
  },
  "application/vnd.japannet-registration-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-setstore-wakeup": {
    source: "iana"
  },
  "application/vnd.japannet-verification": {
    source: "iana"
  },
  "application/vnd.japannet-verification-wakeup": {
    source: "iana"
  },
  "application/vnd.jcp.javame.midlet-rms": {
    source: "iana",
    extensions: [
      "rms"
    ]
  },
  "application/vnd.jisp": {
    source: "iana",
    extensions: [
      "jisp"
    ]
  },
  "application/vnd.joost.joda-archive": {
    source: "iana",
    extensions: [
      "joda"
    ]
  },
  "application/vnd.jsk.isdn-ngn": {
    source: "iana"
  },
  "application/vnd.kahootz": {
    source: "iana",
    extensions: [
      "ktz",
      "ktr"
    ]
  },
  "application/vnd.kde.karbon": {
    source: "iana",
    extensions: [
      "karbon"
    ]
  },
  "application/vnd.kde.kchart": {
    source: "iana",
    extensions: [
      "chrt"
    ]
  },
  "application/vnd.kde.kformula": {
    source: "iana",
    extensions: [
      "kfo"
    ]
  },
  "application/vnd.kde.kivio": {
    source: "iana",
    extensions: [
      "flw"
    ]
  },
  "application/vnd.kde.kontour": {
    source: "iana",
    extensions: [
      "kon"
    ]
  },
  "application/vnd.kde.kpresenter": {
    source: "iana",
    extensions: [
      "kpr",
      "kpt"
    ]
  },
  "application/vnd.kde.kspread": {
    source: "iana",
    extensions: [
      "ksp"
    ]
  },
  "application/vnd.kde.kword": {
    source: "iana",
    extensions: [
      "kwd",
      "kwt"
    ]
  },
  "application/vnd.kenameaapp": {
    source: "iana",
    extensions: [
      "htke"
    ]
  },
  "application/vnd.kidspiration": {
    source: "iana",
    extensions: [
      "kia"
    ]
  },
  "application/vnd.kinar": {
    source: "iana",
    extensions: [
      "kne",
      "knp"
    ]
  },
  "application/vnd.koan": {
    source: "iana",
    extensions: [
      "skp",
      "skd",
      "skt",
      "skm"
    ]
  },
  "application/vnd.kodak-descriptor": {
    source: "iana",
    extensions: [
      "sse"
    ]
  },
  "application/vnd.las": {
    source: "iana"
  },
  "application/vnd.las.las+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.las.las+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lasxml"
    ]
  },
  "application/vnd.laszip": {
    source: "iana"
  },
  "application/vnd.leap+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.liberty-request+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.llamagraphics.life-balance.desktop": {
    source: "iana",
    extensions: [
      "lbd"
    ]
  },
  "application/vnd.llamagraphics.life-balance.exchange+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "lbe"
    ]
  },
  "application/vnd.logipipe.circuit+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.loom": {
    source: "iana"
  },
  "application/vnd.lotus-1-2-3": {
    source: "iana",
    extensions: [
      "123"
    ]
  },
  "application/vnd.lotus-approach": {
    source: "iana",
    extensions: [
      "apr"
    ]
  },
  "application/vnd.lotus-freelance": {
    source: "iana",
    extensions: [
      "pre"
    ]
  },
  "application/vnd.lotus-notes": {
    source: "iana",
    extensions: [
      "nsf"
    ]
  },
  "application/vnd.lotus-organizer": {
    source: "iana",
    extensions: [
      "org"
    ]
  },
  "application/vnd.lotus-screencam": {
    source: "iana",
    extensions: [
      "scm"
    ]
  },
  "application/vnd.lotus-wordpro": {
    source: "iana",
    extensions: [
      "lwp"
    ]
  },
  "application/vnd.macports.portpkg": {
    source: "iana",
    extensions: [
      "portpkg"
    ]
  },
  "application/vnd.mapbox-vector-tile": {
    source: "iana",
    extensions: [
      "mvt"
    ]
  },
  "application/vnd.marlin.drm.actiontoken+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.conftoken+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.license+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.marlin.drm.mdcf": {
    source: "iana"
  },
  "application/vnd.mason+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.maxar.archive.3tz+zip": {
    source: "iana",
    compressible: !1
  },
  "application/vnd.maxmind.maxmind-db": {
    source: "iana"
  },
  "application/vnd.mcd": {
    source: "iana",
    extensions: [
      "mcd"
    ]
  },
  "application/vnd.medcalcdata": {
    source: "iana",
    extensions: [
      "mc1"
    ]
  },
  "application/vnd.mediastation.cdkey": {
    source: "iana",
    extensions: [
      "cdkey"
    ]
  },
  "application/vnd.meridian-slingshot": {
    source: "iana"
  },
  "application/vnd.mfer": {
    source: "iana",
    extensions: [
      "mwf"
    ]
  },
  "application/vnd.mfmp": {
    source: "iana",
    extensions: [
      "mfm"
    ]
  },
  "application/vnd.micro+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.micrografx.flo": {
    source: "iana",
    extensions: [
      "flo"
    ]
  },
  "application/vnd.micrografx.igx": {
    source: "iana",
    extensions: [
      "igx"
    ]
  },
  "application/vnd.microsoft.portable-executable": {
    source: "iana"
  },
  "application/vnd.microsoft.windows.thumbnail-cache": {
    source: "iana"
  },
  "application/vnd.miele+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.mif": {
    source: "iana",
    extensions: [
      "mif"
    ]
  },
  "application/vnd.minisoft-hp3000-save": {
    source: "iana"
  },
  "application/vnd.mitsubishi.misty-guard.trustweb": {
    source: "iana"
  },
  "application/vnd.mobius.daf": {
    source: "iana",
    extensions: [
      "daf"
    ]
  },
  "application/vnd.mobius.dis": {
    source: "iana",
    extensions: [
      "dis"
    ]
  },
  "application/vnd.mobius.mbk": {
    source: "iana",
    extensions: [
      "mbk"
    ]
  },
  "application/vnd.mobius.mqy": {
    source: "iana",
    extensions: [
      "mqy"
    ]
  },
  "application/vnd.mobius.msl": {
    source: "iana",
    extensions: [
      "msl"
    ]
  },
  "application/vnd.mobius.plc": {
    source: "iana",
    extensions: [
      "plc"
    ]
  },
  "application/vnd.mobius.txf": {
    source: "iana",
    extensions: [
      "txf"
    ]
  },
  "application/vnd.mophun.application": {
    source: "iana",
    extensions: [
      "mpn"
    ]
  },
  "application/vnd.mophun.certificate": {
    source: "iana",
    extensions: [
      "mpc"
    ]
  },
  "application/vnd.motorola.flexsuite": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.adsi": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.fis": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.gotap": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.kmr": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.ttc": {
    source: "iana"
  },
  "application/vnd.motorola.flexsuite.wem": {
    source: "iana"
  },
  "application/vnd.motorola.iprm": {
    source: "iana"
  },
  "application/vnd.mozilla.xul+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xul"
    ]
  },
  "application/vnd.ms-3mfdocument": {
    source: "iana"
  },
  "application/vnd.ms-artgalry": {
    source: "iana",
    extensions: [
      "cil"
    ]
  },
  "application/vnd.ms-asf": {
    source: "iana"
  },
  "application/vnd.ms-cab-compressed": {
    source: "iana",
    extensions: [
      "cab"
    ]
  },
  "application/vnd.ms-color.iccprofile": {
    source: "apache"
  },
  "application/vnd.ms-excel": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xls",
      "xlm",
      "xla",
      "xlc",
      "xlt",
      "xlw"
    ]
  },
  "application/vnd.ms-excel.addin.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlam"
    ]
  },
  "application/vnd.ms-excel.sheet.binary.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlsb"
    ]
  },
  "application/vnd.ms-excel.sheet.macroenabled.12": {
    source: "iana",
    extensions: [
      "xlsm"
    ]
  },
  "application/vnd.ms-excel.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "xltm"
    ]
  },
  "application/vnd.ms-fontobject": {
    source: "iana",
    compressible: !0,
    extensions: [
      "eot"
    ]
  },
  "application/vnd.ms-htmlhelp": {
    source: "iana",
    extensions: [
      "chm"
    ]
  },
  "application/vnd.ms-ims": {
    source: "iana",
    extensions: [
      "ims"
    ]
  },
  "application/vnd.ms-lrm": {
    source: "iana",
    extensions: [
      "lrm"
    ]
  },
  "application/vnd.ms-office.activex+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-officetheme": {
    source: "iana",
    extensions: [
      "thmx"
    ]
  },
  "application/vnd.ms-opentype": {
    source: "apache",
    compressible: !0
  },
  "application/vnd.ms-outlook": {
    compressible: !1,
    extensions: [
      "msg"
    ]
  },
  "application/vnd.ms-package.obfuscated-opentype": {
    source: "apache"
  },
  "application/vnd.ms-pki.seccat": {
    source: "apache",
    extensions: [
      "cat"
    ]
  },
  "application/vnd.ms-pki.stl": {
    source: "apache",
    extensions: [
      "stl"
    ]
  },
  "application/vnd.ms-playready.initiator+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-powerpoint": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ppt",
      "pps",
      "pot"
    ]
  },
  "application/vnd.ms-powerpoint.addin.macroenabled.12": {
    source: "iana",
    extensions: [
      "ppam"
    ]
  },
  "application/vnd.ms-powerpoint.presentation.macroenabled.12": {
    source: "iana",
    extensions: [
      "pptm"
    ]
  },
  "application/vnd.ms-powerpoint.slide.macroenabled.12": {
    source: "iana",
    extensions: [
      "sldm"
    ]
  },
  "application/vnd.ms-powerpoint.slideshow.macroenabled.12": {
    source: "iana",
    extensions: [
      "ppsm"
    ]
  },
  "application/vnd.ms-powerpoint.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "potm"
    ]
  },
  "application/vnd.ms-printdevicecapabilities+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-printing.printticket+xml": {
    source: "apache",
    compressible: !0
  },
  "application/vnd.ms-printschematicket+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ms-project": {
    source: "iana",
    extensions: [
      "mpp",
      "mpt"
    ]
  },
  "application/vnd.ms-tnef": {
    source: "iana"
  },
  "application/vnd.ms-windows.devicepairing": {
    source: "iana"
  },
  "application/vnd.ms-windows.nwprinting.oob": {
    source: "iana"
  },
  "application/vnd.ms-windows.printerpairing": {
    source: "iana"
  },
  "application/vnd.ms-windows.wsd.oob": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.lic-chlg-req": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.lic-resp": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.meter-chlg-req": {
    source: "iana"
  },
  "application/vnd.ms-wmdrm.meter-resp": {
    source: "iana"
  },
  "application/vnd.ms-word.document.macroenabled.12": {
    source: "iana",
    extensions: [
      "docm"
    ]
  },
  "application/vnd.ms-word.template.macroenabled.12": {
    source: "iana",
    extensions: [
      "dotm"
    ]
  },
  "application/vnd.ms-works": {
    source: "iana",
    extensions: [
      "wps",
      "wks",
      "wcm",
      "wdb"
    ]
  },
  "application/vnd.ms-wpl": {
    source: "iana",
    extensions: [
      "wpl"
    ]
  },
  "application/vnd.ms-xpsdocument": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xps"
    ]
  },
  "application/vnd.msa-disk-image": {
    source: "iana"
  },
  "application/vnd.mseq": {
    source: "iana",
    extensions: [
      "mseq"
    ]
  },
  "application/vnd.msign": {
    source: "iana"
  },
  "application/vnd.multiad.creator": {
    source: "iana"
  },
  "application/vnd.multiad.creator.cif": {
    source: "iana"
  },
  "application/vnd.music-niff": {
    source: "iana"
  },
  "application/vnd.musician": {
    source: "iana",
    extensions: [
      "mus"
    ]
  },
  "application/vnd.muvee.style": {
    source: "iana",
    extensions: [
      "msty"
    ]
  },
  "application/vnd.mynfc": {
    source: "iana",
    extensions: [
      "taglet"
    ]
  },
  "application/vnd.nacamar.ybrid+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.ncd.control": {
    source: "iana"
  },
  "application/vnd.ncd.reference": {
    source: "iana"
  },
  "application/vnd.nearst.inv+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nebumind.line": {
    source: "iana"
  },
  "application/vnd.nervana": {
    source: "iana"
  },
  "application/vnd.netfpx": {
    source: "iana"
  },
  "application/vnd.neurolanguage.nlu": {
    source: "iana",
    extensions: [
      "nlu"
    ]
  },
  "application/vnd.nimn": {
    source: "iana"
  },
  "application/vnd.nintendo.nitro.rom": {
    source: "iana"
  },
  "application/vnd.nintendo.snes.rom": {
    source: "iana"
  },
  "application/vnd.nitf": {
    source: "iana",
    extensions: [
      "ntf",
      "nitf"
    ]
  },
  "application/vnd.noblenet-directory": {
    source: "iana",
    extensions: [
      "nnd"
    ]
  },
  "application/vnd.noblenet-sealer": {
    source: "iana",
    extensions: [
      "nns"
    ]
  },
  "application/vnd.noblenet-web": {
    source: "iana",
    extensions: [
      "nnw"
    ]
  },
  "application/vnd.nokia.catalogs": {
    source: "iana"
  },
  "application/vnd.nokia.conml+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.conml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.iptv.config+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.isds-radio-presets": {
    source: "iana"
  },
  "application/vnd.nokia.landmark+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.landmark+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.landmarkcollection+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.n-gage.ac+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ac"
    ]
  },
  "application/vnd.nokia.n-gage.data": {
    source: "iana",
    extensions: [
      "ngdat"
    ]
  },
  "application/vnd.nokia.n-gage.symbian.install": {
    source: "iana",
    extensions: [
      "n-gage"
    ]
  },
  "application/vnd.nokia.ncd": {
    source: "iana"
  },
  "application/vnd.nokia.pcd+wbxml": {
    source: "iana"
  },
  "application/vnd.nokia.pcd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.nokia.radio-preset": {
    source: "iana",
    extensions: [
      "rpst"
    ]
  },
  "application/vnd.nokia.radio-presets": {
    source: "iana",
    extensions: [
      "rpss"
    ]
  },
  "application/vnd.novadigm.edm": {
    source: "iana",
    extensions: [
      "edm"
    ]
  },
  "application/vnd.novadigm.edx": {
    source: "iana",
    extensions: [
      "edx"
    ]
  },
  "application/vnd.novadigm.ext": {
    source: "iana",
    extensions: [
      "ext"
    ]
  },
  "application/vnd.ntt-local.content-share": {
    source: "iana"
  },
  "application/vnd.ntt-local.file-transfer": {
    source: "iana"
  },
  "application/vnd.ntt-local.ogw_remote-access": {
    source: "iana"
  },
  "application/vnd.ntt-local.sip-ta_remote": {
    source: "iana"
  },
  "application/vnd.ntt-local.sip-ta_tcp_stream": {
    source: "iana"
  },
  "application/vnd.oasis.opendocument.chart": {
    source: "iana",
    extensions: [
      "odc"
    ]
  },
  "application/vnd.oasis.opendocument.chart-template": {
    source: "iana",
    extensions: [
      "otc"
    ]
  },
  "application/vnd.oasis.opendocument.database": {
    source: "iana",
    extensions: [
      "odb"
    ]
  },
  "application/vnd.oasis.opendocument.formula": {
    source: "iana",
    extensions: [
      "odf"
    ]
  },
  "application/vnd.oasis.opendocument.formula-template": {
    source: "iana",
    extensions: [
      "odft"
    ]
  },
  "application/vnd.oasis.opendocument.graphics": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odg"
    ]
  },
  "application/vnd.oasis.opendocument.graphics-template": {
    source: "iana",
    extensions: [
      "otg"
    ]
  },
  "application/vnd.oasis.opendocument.image": {
    source: "iana",
    extensions: [
      "odi"
    ]
  },
  "application/vnd.oasis.opendocument.image-template": {
    source: "iana",
    extensions: [
      "oti"
    ]
  },
  "application/vnd.oasis.opendocument.presentation": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odp"
    ]
  },
  "application/vnd.oasis.opendocument.presentation-template": {
    source: "iana",
    extensions: [
      "otp"
    ]
  },
  "application/vnd.oasis.opendocument.spreadsheet": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ods"
    ]
  },
  "application/vnd.oasis.opendocument.spreadsheet-template": {
    source: "iana",
    extensions: [
      "ots"
    ]
  },
  "application/vnd.oasis.opendocument.text": {
    source: "iana",
    compressible: !1,
    extensions: [
      "odt"
    ]
  },
  "application/vnd.oasis.opendocument.text-master": {
    source: "iana",
    extensions: [
      "odm"
    ]
  },
  "application/vnd.oasis.opendocument.text-template": {
    source: "iana",
    extensions: [
      "ott"
    ]
  },
  "application/vnd.oasis.opendocument.text-web": {
    source: "iana",
    extensions: [
      "oth"
    ]
  },
  "application/vnd.obn": {
    source: "iana"
  },
  "application/vnd.ocf+cbor": {
    source: "iana"
  },
  "application/vnd.oci.image.manifest.v1+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oftn.l10n+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.contentaccessdownload+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.contentaccessstreaming+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.cspg-hexbinary": {
    source: "iana"
  },
  "application/vnd.oipf.dae.svg+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.dae.xhtml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.mippvcontrolmessage+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.pae.gem": {
    source: "iana"
  },
  "application/vnd.oipf.spdiscovery+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.spdlist+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.ueprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oipf.userprofile+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.olpc-sugar": {
    source: "iana",
    extensions: [
      "xo"
    ]
  },
  "application/vnd.oma-scws-config": {
    source: "iana"
  },
  "application/vnd.oma-scws-http-request": {
    source: "iana"
  },
  "application/vnd.oma-scws-http-response": {
    source: "iana"
  },
  "application/vnd.oma.bcast.associated-procedure-parameter+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.drm-trigger+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.imd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.ltkm": {
    source: "iana"
  },
  "application/vnd.oma.bcast.notification+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.provisioningtrigger": {
    source: "iana"
  },
  "application/vnd.oma.bcast.sgboot": {
    source: "iana"
  },
  "application/vnd.oma.bcast.sgdd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.sgdu": {
    source: "iana"
  },
  "application/vnd.oma.bcast.simple-symbol-container": {
    source: "iana"
  },
  "application/vnd.oma.bcast.smartcard-trigger+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.sprov+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.bcast.stkm": {
    source: "iana"
  },
  "application/vnd.oma.cab-address-book+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-feature-handler+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-pcc+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-subs-invite+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.cab-user-prefs+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.dcd": {
    source: "iana"
  },
  "application/vnd.oma.dcdc": {
    source: "iana"
  },
  "application/vnd.oma.dd2+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dd2"
    ]
  },
  "application/vnd.oma.drm.risd+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.group-usage-list+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.lwm2m+cbor": {
    source: "iana"
  },
  "application/vnd.oma.lwm2m+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.lwm2m+tlv": {
    source: "iana"
  },
  "application/vnd.oma.pal+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.detailed-progress-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.final-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.groups+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.invocation-descriptor+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.poc.optimized-progress-report+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.push": {
    source: "iana"
  },
  "application/vnd.oma.scidm.messages+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oma.xcap-directory+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.omads-email+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omads-file+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omads-folder+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.omaloc-supl-init": {
    source: "iana"
  },
  "application/vnd.onepager": {
    source: "iana"
  },
  "application/vnd.onepagertamp": {
    source: "iana"
  },
  "application/vnd.onepagertamx": {
    source: "iana"
  },
  "application/vnd.onepagertat": {
    source: "iana"
  },
  "application/vnd.onepagertatp": {
    source: "iana"
  },
  "application/vnd.onepagertatx": {
    source: "iana"
  },
  "application/vnd.openblox.game+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "obgx"
    ]
  },
  "application/vnd.openblox.game-binary": {
    source: "iana"
  },
  "application/vnd.openeye.oeb": {
    source: "iana"
  },
  "application/vnd.openofficeorg.extension": {
    source: "apache",
    extensions: [
      "oxt"
    ]
  },
  "application/vnd.openstreetmap.data+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "osm"
    ]
  },
  "application/vnd.opentimestamps.ots": {
    source: "iana"
  },
  "application/vnd.openxmlformats-officedocument.custom-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.customxmlproperties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawing+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramcolors+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramdata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramlayout+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.drawingml.diagramstyle+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.extended-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.commentauthors+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.handoutmaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesmaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.notesslide+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation": {
    source: "iana",
    compressible: !1,
    extensions: [
      "pptx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presentation.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.presprops+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide": {
    source: "iana",
    extensions: [
      "sldx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slide+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidelayout+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slidemaster+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow": {
    source: "iana",
    extensions: [
      "ppsx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideshow.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.slideupdateinfo+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tablestyles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.tags+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template": {
    source: "iana",
    extensions: [
      "potx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.presentationml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.presentationml.viewprops+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.calcchain+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.externallink+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcachedefinition+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotcacherecords+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.pivottable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.querytable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionheaders+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionlog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedstrings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": {
    source: "iana",
    compressible: !1,
    extensions: [
      "xlsx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetmetadata+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.tablesinglecells+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template": {
    source: "iana",
    extensions: [
      "xltx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.usernames+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.volatiledependencies+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.theme+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.themeoverride+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.vmldrawing": {
    source: "iana"
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.comments+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": {
    source: "iana",
    compressible: !1,
    extensions: [
      "docx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.glossary+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.endnotes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.fonttable+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footer+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.footnotes+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.numbering+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.settings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template": {
    source: "iana",
    extensions: [
      "dotx"
    ]
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.template.main+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-officedocument.wordprocessingml.websettings+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.core-properties+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.digital-signature-xmlsignature+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.openxmlformats-package.relationships+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oracle.resource+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.orange.indata": {
    source: "iana"
  },
  "application/vnd.osa.netdeploy": {
    source: "iana"
  },
  "application/vnd.osgeo.mapguide.package": {
    source: "iana",
    extensions: [
      "mgp"
    ]
  },
  "application/vnd.osgi.bundle": {
    source: "iana"
  },
  "application/vnd.osgi.dp": {
    source: "iana",
    extensions: [
      "dp"
    ]
  },
  "application/vnd.osgi.subsystem": {
    source: "iana",
    extensions: [
      "esa"
    ]
  },
  "application/vnd.otps.ct-kip+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.oxli.countgraph": {
    source: "iana"
  },
  "application/vnd.pagerduty+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.palm": {
    source: "iana",
    extensions: [
      "pdb",
      "pqa",
      "oprc"
    ]
  },
  "application/vnd.panoply": {
    source: "iana"
  },
  "application/vnd.paos.xml": {
    source: "iana"
  },
  "application/vnd.patentdive": {
    source: "iana"
  },
  "application/vnd.patientecommsdoc": {
    source: "iana"
  },
  "application/vnd.pawaafile": {
    source: "iana",
    extensions: [
      "paw"
    ]
  },
  "application/vnd.pcos": {
    source: "iana"
  },
  "application/vnd.pg.format": {
    source: "iana",
    extensions: [
      "str"
    ]
  },
  "application/vnd.pg.osasli": {
    source: "iana",
    extensions: [
      "ei6"
    ]
  },
  "application/vnd.piaccess.application-licence": {
    source: "iana"
  },
  "application/vnd.picsel": {
    source: "iana",
    extensions: [
      "efif"
    ]
  },
  "application/vnd.pmi.widget": {
    source: "iana",
    extensions: [
      "wg"
    ]
  },
  "application/vnd.poc.group-advertisement+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.pocketlearn": {
    source: "iana",
    extensions: [
      "plf"
    ]
  },
  "application/vnd.powerbuilder6": {
    source: "iana",
    extensions: [
      "pbd"
    ]
  },
  "application/vnd.powerbuilder6-s": {
    source: "iana"
  },
  "application/vnd.powerbuilder7": {
    source: "iana"
  },
  "application/vnd.powerbuilder7-s": {
    source: "iana"
  },
  "application/vnd.powerbuilder75": {
    source: "iana"
  },
  "application/vnd.powerbuilder75-s": {
    source: "iana"
  },
  "application/vnd.preminet": {
    source: "iana"
  },
  "application/vnd.previewsystems.box": {
    source: "iana",
    extensions: [
      "box"
    ]
  },
  "application/vnd.proteus.magazine": {
    source: "iana",
    extensions: [
      "mgz"
    ]
  },
  "application/vnd.psfs": {
    source: "iana"
  },
  "application/vnd.publishare-delta-tree": {
    source: "iana",
    extensions: [
      "qps"
    ]
  },
  "application/vnd.pvi.ptid1": {
    source: "iana",
    extensions: [
      "ptid"
    ]
  },
  "application/vnd.pwg-multiplexed": {
    source: "iana"
  },
  "application/vnd.pwg-xhtml-print+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.qualcomm.brew-app-res": {
    source: "iana"
  },
  "application/vnd.quarantainenet": {
    source: "iana"
  },
  "application/vnd.quark.quarkxpress": {
    source: "iana",
    extensions: [
      "qxd",
      "qxt",
      "qwd",
      "qwt",
      "qxl",
      "qxb"
    ]
  },
  "application/vnd.quobject-quoxdocument": {
    source: "iana"
  },
  "application/vnd.radisys.moml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-conf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-conn+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-dialog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-audit-stream+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-conf+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-base+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-fax-detect+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-fax-sendrecv+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-group+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-speech+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.radisys.msml-dialog-transform+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.rainstor.data": {
    source: "iana"
  },
  "application/vnd.rapid": {
    source: "iana"
  },
  "application/vnd.rar": {
    source: "iana",
    extensions: [
      "rar"
    ]
  },
  "application/vnd.realvnc.bed": {
    source: "iana",
    extensions: [
      "bed"
    ]
  },
  "application/vnd.recordare.musicxml": {
    source: "iana",
    extensions: [
      "mxl"
    ]
  },
  "application/vnd.recordare.musicxml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "musicxml"
    ]
  },
  "application/vnd.renlearn.rlprint": {
    source: "iana"
  },
  "application/vnd.resilient.logic": {
    source: "iana"
  },
  "application/vnd.restful+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.rig.cryptonote": {
    source: "iana",
    extensions: [
      "cryptonote"
    ]
  },
  "application/vnd.rim.cod": {
    source: "apache",
    extensions: [
      "cod"
    ]
  },
  "application/vnd.rn-realmedia": {
    source: "apache",
    extensions: [
      "rm"
    ]
  },
  "application/vnd.rn-realmedia-vbr": {
    source: "apache",
    extensions: [
      "rmvb"
    ]
  },
  "application/vnd.route66.link66+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "link66"
    ]
  },
  "application/vnd.rs-274x": {
    source: "iana"
  },
  "application/vnd.ruckus.download": {
    source: "iana"
  },
  "application/vnd.s3sms": {
    source: "iana"
  },
  "application/vnd.sailingtracker.track": {
    source: "iana",
    extensions: [
      "st"
    ]
  },
  "application/vnd.sar": {
    source: "iana"
  },
  "application/vnd.sbm.cid": {
    source: "iana"
  },
  "application/vnd.sbm.mid2": {
    source: "iana"
  },
  "application/vnd.scribus": {
    source: "iana"
  },
  "application/vnd.sealed.3df": {
    source: "iana"
  },
  "application/vnd.sealed.csf": {
    source: "iana"
  },
  "application/vnd.sealed.doc": {
    source: "iana"
  },
  "application/vnd.sealed.eml": {
    source: "iana"
  },
  "application/vnd.sealed.mht": {
    source: "iana"
  },
  "application/vnd.sealed.net": {
    source: "iana"
  },
  "application/vnd.sealed.ppt": {
    source: "iana"
  },
  "application/vnd.sealed.tiff": {
    source: "iana"
  },
  "application/vnd.sealed.xls": {
    source: "iana"
  },
  "application/vnd.sealedmedia.softseal.html": {
    source: "iana"
  },
  "application/vnd.sealedmedia.softseal.pdf": {
    source: "iana"
  },
  "application/vnd.seemail": {
    source: "iana",
    extensions: [
      "see"
    ]
  },
  "application/vnd.seis+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.sema": {
    source: "iana",
    extensions: [
      "sema"
    ]
  },
  "application/vnd.semd": {
    source: "iana",
    extensions: [
      "semd"
    ]
  },
  "application/vnd.semf": {
    source: "iana",
    extensions: [
      "semf"
    ]
  },
  "application/vnd.shade-save-file": {
    source: "iana"
  },
  "application/vnd.shana.informed.formdata": {
    source: "iana",
    extensions: [
      "ifm"
    ]
  },
  "application/vnd.shana.informed.formtemplate": {
    source: "iana",
    extensions: [
      "itp"
    ]
  },
  "application/vnd.shana.informed.interchange": {
    source: "iana",
    extensions: [
      "iif"
    ]
  },
  "application/vnd.shana.informed.package": {
    source: "iana",
    extensions: [
      "ipk"
    ]
  },
  "application/vnd.shootproof+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.shopkick+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.shp": {
    source: "iana"
  },
  "application/vnd.shx": {
    source: "iana"
  },
  "application/vnd.sigrok.session": {
    source: "iana"
  },
  "application/vnd.simtech-mindmapper": {
    source: "iana",
    extensions: [
      "twd",
      "twds"
    ]
  },
  "application/vnd.siren+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.smaf": {
    source: "iana",
    extensions: [
      "mmf"
    ]
  },
  "application/vnd.smart.notebook": {
    source: "iana"
  },
  "application/vnd.smart.teacher": {
    source: "iana",
    extensions: [
      "teacher"
    ]
  },
  "application/vnd.snesdev-page-table": {
    source: "iana"
  },
  "application/vnd.software602.filler.form+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "fo"
    ]
  },
  "application/vnd.software602.filler.form-xml-zip": {
    source: "iana"
  },
  "application/vnd.solent.sdkm+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "sdkm",
      "sdkd"
    ]
  },
  "application/vnd.spotfire.dxp": {
    source: "iana",
    extensions: [
      "dxp"
    ]
  },
  "application/vnd.spotfire.sfs": {
    source: "iana",
    extensions: [
      "sfs"
    ]
  },
  "application/vnd.sqlite3": {
    source: "iana"
  },
  "application/vnd.sss-cod": {
    source: "iana"
  },
  "application/vnd.sss-dtf": {
    source: "iana"
  },
  "application/vnd.sss-ntf": {
    source: "iana"
  },
  "application/vnd.stardivision.calc": {
    source: "apache",
    extensions: [
      "sdc"
    ]
  },
  "application/vnd.stardivision.draw": {
    source: "apache",
    extensions: [
      "sda"
    ]
  },
  "application/vnd.stardivision.impress": {
    source: "apache",
    extensions: [
      "sdd"
    ]
  },
  "application/vnd.stardivision.math": {
    source: "apache",
    extensions: [
      "smf"
    ]
  },
  "application/vnd.stardivision.writer": {
    source: "apache",
    extensions: [
      "sdw",
      "vor"
    ]
  },
  "application/vnd.stardivision.writer-global": {
    source: "apache",
    extensions: [
      "sgl"
    ]
  },
  "application/vnd.stepmania.package": {
    source: "iana",
    extensions: [
      "smzip"
    ]
  },
  "application/vnd.stepmania.stepchart": {
    source: "iana",
    extensions: [
      "sm"
    ]
  },
  "application/vnd.street-stream": {
    source: "iana"
  },
  "application/vnd.sun.wadl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wadl"
    ]
  },
  "application/vnd.sun.xml.calc": {
    source: "apache",
    extensions: [
      "sxc"
    ]
  },
  "application/vnd.sun.xml.calc.template": {
    source: "apache",
    extensions: [
      "stc"
    ]
  },
  "application/vnd.sun.xml.draw": {
    source: "apache",
    extensions: [
      "sxd"
    ]
  },
  "application/vnd.sun.xml.draw.template": {
    source: "apache",
    extensions: [
      "std"
    ]
  },
  "application/vnd.sun.xml.impress": {
    source: "apache",
    extensions: [
      "sxi"
    ]
  },
  "application/vnd.sun.xml.impress.template": {
    source: "apache",
    extensions: [
      "sti"
    ]
  },
  "application/vnd.sun.xml.math": {
    source: "apache",
    extensions: [
      "sxm"
    ]
  },
  "application/vnd.sun.xml.writer": {
    source: "apache",
    extensions: [
      "sxw"
    ]
  },
  "application/vnd.sun.xml.writer.global": {
    source: "apache",
    extensions: [
      "sxg"
    ]
  },
  "application/vnd.sun.xml.writer.template": {
    source: "apache",
    extensions: [
      "stw"
    ]
  },
  "application/vnd.sus-calendar": {
    source: "iana",
    extensions: [
      "sus",
      "susp"
    ]
  },
  "application/vnd.svd": {
    source: "iana",
    extensions: [
      "svd"
    ]
  },
  "application/vnd.swiftview-ics": {
    source: "iana"
  },
  "application/vnd.sycle+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.syft+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.symbian.install": {
    source: "apache",
    extensions: [
      "sis",
      "sisx"
    ]
  },
  "application/vnd.syncml+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "xsm"
    ]
  },
  "application/vnd.syncml.dm+wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "bdm"
    ]
  },
  "application/vnd.syncml.dm+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "xdm"
    ]
  },
  "application/vnd.syncml.dm.notification": {
    source: "iana"
  },
  "application/vnd.syncml.dmddf+wbxml": {
    source: "iana"
  },
  "application/vnd.syncml.dmddf+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "ddf"
    ]
  },
  "application/vnd.syncml.dmtnds+wbxml": {
    source: "iana"
  },
  "application/vnd.syncml.dmtnds+xml": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0
  },
  "application/vnd.syncml.ds.notification": {
    source: "iana"
  },
  "application/vnd.tableschema+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tao.intent-module-archive": {
    source: "iana",
    extensions: [
      "tao"
    ]
  },
  "application/vnd.tcpdump.pcap": {
    source: "iana",
    extensions: [
      "pcap",
      "cap",
      "dmp"
    ]
  },
  "application/vnd.think-cell.ppttc+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tmd.mediaflex.api+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.tml": {
    source: "iana"
  },
  "application/vnd.tmobile-livetv": {
    source: "iana",
    extensions: [
      "tmo"
    ]
  },
  "application/vnd.tri.onesource": {
    source: "iana"
  },
  "application/vnd.trid.tpt": {
    source: "iana",
    extensions: [
      "tpt"
    ]
  },
  "application/vnd.triscape.mxs": {
    source: "iana",
    extensions: [
      "mxs"
    ]
  },
  "application/vnd.trueapp": {
    source: "iana",
    extensions: [
      "tra"
    ]
  },
  "application/vnd.truedoc": {
    source: "iana"
  },
  "application/vnd.ubisoft.webplayer": {
    source: "iana"
  },
  "application/vnd.ufdl": {
    source: "iana",
    extensions: [
      "ufd",
      "ufdl"
    ]
  },
  "application/vnd.uiq.theme": {
    source: "iana",
    extensions: [
      "utz"
    ]
  },
  "application/vnd.umajin": {
    source: "iana",
    extensions: [
      "umj"
    ]
  },
  "application/vnd.unity": {
    source: "iana",
    extensions: [
      "unityweb"
    ]
  },
  "application/vnd.uoml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uoml"
    ]
  },
  "application/vnd.uplanet.alert": {
    source: "iana"
  },
  "application/vnd.uplanet.alert-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.bearer-choice": {
    source: "iana"
  },
  "application/vnd.uplanet.bearer-choice-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.cacheop": {
    source: "iana"
  },
  "application/vnd.uplanet.cacheop-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.channel": {
    source: "iana"
  },
  "application/vnd.uplanet.channel-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.list": {
    source: "iana"
  },
  "application/vnd.uplanet.list-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.listcmd": {
    source: "iana"
  },
  "application/vnd.uplanet.listcmd-wbxml": {
    source: "iana"
  },
  "application/vnd.uplanet.signal": {
    source: "iana"
  },
  "application/vnd.uri-map": {
    source: "iana"
  },
  "application/vnd.valve.source.material": {
    source: "iana"
  },
  "application/vnd.vcx": {
    source: "iana",
    extensions: [
      "vcx"
    ]
  },
  "application/vnd.vd-study": {
    source: "iana"
  },
  "application/vnd.vectorworks": {
    source: "iana"
  },
  "application/vnd.vel+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.verimatrix.vcas": {
    source: "iana"
  },
  "application/vnd.veritone.aion+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.veryant.thin": {
    source: "iana"
  },
  "application/vnd.ves.encrypted": {
    source: "iana"
  },
  "application/vnd.vidsoft.vidconference": {
    source: "iana"
  },
  "application/vnd.visio": {
    source: "iana",
    extensions: [
      "vsd",
      "vst",
      "vss",
      "vsw"
    ]
  },
  "application/vnd.visionary": {
    source: "iana",
    extensions: [
      "vis"
    ]
  },
  "application/vnd.vividence.scriptfile": {
    source: "iana"
  },
  "application/vnd.vsf": {
    source: "iana",
    extensions: [
      "vsf"
    ]
  },
  "application/vnd.wap.sic": {
    source: "iana"
  },
  "application/vnd.wap.slc": {
    source: "iana"
  },
  "application/vnd.wap.wbxml": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "wbxml"
    ]
  },
  "application/vnd.wap.wmlc": {
    source: "iana",
    extensions: [
      "wmlc"
    ]
  },
  "application/vnd.wap.wmlscriptc": {
    source: "iana",
    extensions: [
      "wmlsc"
    ]
  },
  "application/vnd.webturbo": {
    source: "iana",
    extensions: [
      "wtb"
    ]
  },
  "application/vnd.wfa.dpp": {
    source: "iana"
  },
  "application/vnd.wfa.p2p": {
    source: "iana"
  },
  "application/vnd.wfa.wsc": {
    source: "iana"
  },
  "application/vnd.windows.devicepairing": {
    source: "iana"
  },
  "application/vnd.wmc": {
    source: "iana"
  },
  "application/vnd.wmf.bootstrap": {
    source: "iana"
  },
  "application/vnd.wolfram.mathematica": {
    source: "iana"
  },
  "application/vnd.wolfram.mathematica.package": {
    source: "iana"
  },
  "application/vnd.wolfram.player": {
    source: "iana",
    extensions: [
      "nbp"
    ]
  },
  "application/vnd.wordperfect": {
    source: "iana",
    extensions: [
      "wpd"
    ]
  },
  "application/vnd.wqd": {
    source: "iana",
    extensions: [
      "wqd"
    ]
  },
  "application/vnd.wrq-hp3000-labelled": {
    source: "iana"
  },
  "application/vnd.wt.stf": {
    source: "iana",
    extensions: [
      "stf"
    ]
  },
  "application/vnd.wv.csp+wbxml": {
    source: "iana"
  },
  "application/vnd.wv.csp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.wv.ssp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xacml+json": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xara": {
    source: "iana",
    extensions: [
      "xar"
    ]
  },
  "application/vnd.xfdl": {
    source: "iana",
    extensions: [
      "xfdl"
    ]
  },
  "application/vnd.xfdl.webform": {
    source: "iana"
  },
  "application/vnd.xmi+xml": {
    source: "iana",
    compressible: !0
  },
  "application/vnd.xmpie.cpkg": {
    source: "iana"
  },
  "application/vnd.xmpie.dpkg": {
    source: "iana"
  },
  "application/vnd.xmpie.plan": {
    source: "iana"
  },
  "application/vnd.xmpie.ppkg": {
    source: "iana"
  },
  "application/vnd.xmpie.xlim": {
    source: "iana"
  },
  "application/vnd.yamaha.hv-dic": {
    source: "iana",
    extensions: [
      "hvd"
    ]
  },
  "application/vnd.yamaha.hv-script": {
    source: "iana",
    extensions: [
      "hvs"
    ]
  },
  "application/vnd.yamaha.hv-voice": {
    source: "iana",
    extensions: [
      "hvp"
    ]
  },
  "application/vnd.yamaha.openscoreformat": {
    source: "iana",
    extensions: [
      "osf"
    ]
  },
  "application/vnd.yamaha.openscoreformat.osfpvg+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "osfpvg"
    ]
  },
  "application/vnd.yamaha.remote-setup": {
    source: "iana"
  },
  "application/vnd.yamaha.smaf-audio": {
    source: "iana",
    extensions: [
      "saf"
    ]
  },
  "application/vnd.yamaha.smaf-phrase": {
    source: "iana",
    extensions: [
      "spf"
    ]
  },
  "application/vnd.yamaha.through-ngn": {
    source: "iana"
  },
  "application/vnd.yamaha.tunnel-udpencap": {
    source: "iana"
  },
  "application/vnd.yaoweme": {
    source: "iana"
  },
  "application/vnd.yellowriver-custom-menu": {
    source: "iana",
    extensions: [
      "cmp"
    ]
  },
  "application/vnd.youtube.yt": {
    source: "iana"
  },
  "application/vnd.zul": {
    source: "iana",
    extensions: [
      "zir",
      "zirz"
    ]
  },
  "application/vnd.zzazz.deck+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "zaz"
    ]
  },
  "application/voicexml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "vxml"
    ]
  },
  "application/voucher-cms+json": {
    source: "iana",
    compressible: !0
  },
  "application/vq-rtcpxr": {
    source: "iana"
  },
  "application/wasm": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wasm"
    ]
  },
  "application/watcherinfo+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wif"
    ]
  },
  "application/webpush-options+json": {
    source: "iana",
    compressible: !0
  },
  "application/whoispp-query": {
    source: "iana"
  },
  "application/whoispp-response": {
    source: "iana"
  },
  "application/widget": {
    source: "iana",
    extensions: [
      "wgt"
    ]
  },
  "application/winhlp": {
    source: "apache",
    extensions: [
      "hlp"
    ]
  },
  "application/wita": {
    source: "iana"
  },
  "application/wordperfect5.1": {
    source: "iana"
  },
  "application/wsdl+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wsdl"
    ]
  },
  "application/wspolicy+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "wspolicy"
    ]
  },
  "application/x-7z-compressed": {
    source: "apache",
    compressible: !1,
    extensions: [
      "7z"
    ]
  },
  "application/x-abiword": {
    source: "apache",
    extensions: [
      "abw"
    ]
  },
  "application/x-ace-compressed": {
    source: "apache",
    extensions: [
      "ace"
    ]
  },
  "application/x-amf": {
    source: "apache"
  },
  "application/x-apple-diskimage": {
    source: "apache",
    extensions: [
      "dmg"
    ]
  },
  "application/x-arj": {
    compressible: !1,
    extensions: [
      "arj"
    ]
  },
  "application/x-authorware-bin": {
    source: "apache",
    extensions: [
      "aab",
      "x32",
      "u32",
      "vox"
    ]
  },
  "application/x-authorware-map": {
    source: "apache",
    extensions: [
      "aam"
    ]
  },
  "application/x-authorware-seg": {
    source: "apache",
    extensions: [
      "aas"
    ]
  },
  "application/x-bcpio": {
    source: "apache",
    extensions: [
      "bcpio"
    ]
  },
  "application/x-bdoc": {
    compressible: !1,
    extensions: [
      "bdoc"
    ]
  },
  "application/x-bittorrent": {
    source: "apache",
    extensions: [
      "torrent"
    ]
  },
  "application/x-blorb": {
    source: "apache",
    extensions: [
      "blb",
      "blorb"
    ]
  },
  "application/x-bzip": {
    source: "apache",
    compressible: !1,
    extensions: [
      "bz"
    ]
  },
  "application/x-bzip2": {
    source: "apache",
    compressible: !1,
    extensions: [
      "bz2",
      "boz"
    ]
  },
  "application/x-cbr": {
    source: "apache",
    extensions: [
      "cbr",
      "cba",
      "cbt",
      "cbz",
      "cb7"
    ]
  },
  "application/x-cdlink": {
    source: "apache",
    extensions: [
      "vcd"
    ]
  },
  "application/x-cfs-compressed": {
    source: "apache",
    extensions: [
      "cfs"
    ]
  },
  "application/x-chat": {
    source: "apache",
    extensions: [
      "chat"
    ]
  },
  "application/x-chess-pgn": {
    source: "apache",
    extensions: [
      "pgn"
    ]
  },
  "application/x-chrome-extension": {
    extensions: [
      "crx"
    ]
  },
  "application/x-cocoa": {
    source: "nginx",
    extensions: [
      "cco"
    ]
  },
  "application/x-compress": {
    source: "apache"
  },
  "application/x-conference": {
    source: "apache",
    extensions: [
      "nsc"
    ]
  },
  "application/x-cpio": {
    source: "apache",
    extensions: [
      "cpio"
    ]
  },
  "application/x-csh": {
    source: "apache",
    extensions: [
      "csh"
    ]
  },
  "application/x-deb": {
    compressible: !1
  },
  "application/x-debian-package": {
    source: "apache",
    extensions: [
      "deb",
      "udeb"
    ]
  },
  "application/x-dgc-compressed": {
    source: "apache",
    extensions: [
      "dgc"
    ]
  },
  "application/x-director": {
    source: "apache",
    extensions: [
      "dir",
      "dcr",
      "dxr",
      "cst",
      "cct",
      "cxt",
      "w3d",
      "fgd",
      "swa"
    ]
  },
  "application/x-doom": {
    source: "apache",
    extensions: [
      "wad"
    ]
  },
  "application/x-dtbncx+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ncx"
    ]
  },
  "application/x-dtbook+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "dtb"
    ]
  },
  "application/x-dtbresource+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "res"
    ]
  },
  "application/x-dvi": {
    source: "apache",
    compressible: !1,
    extensions: [
      "dvi"
    ]
  },
  "application/x-envoy": {
    source: "apache",
    extensions: [
      "evy"
    ]
  },
  "application/x-eva": {
    source: "apache",
    extensions: [
      "eva"
    ]
  },
  "application/x-font-bdf": {
    source: "apache",
    extensions: [
      "bdf"
    ]
  },
  "application/x-font-dos": {
    source: "apache"
  },
  "application/x-font-framemaker": {
    source: "apache"
  },
  "application/x-font-ghostscript": {
    source: "apache",
    extensions: [
      "gsf"
    ]
  },
  "application/x-font-libgrx": {
    source: "apache"
  },
  "application/x-font-linux-psf": {
    source: "apache",
    extensions: [
      "psf"
    ]
  },
  "application/x-font-pcf": {
    source: "apache",
    extensions: [
      "pcf"
    ]
  },
  "application/x-font-snf": {
    source: "apache",
    extensions: [
      "snf"
    ]
  },
  "application/x-font-speedo": {
    source: "apache"
  },
  "application/x-font-sunos-news": {
    source: "apache"
  },
  "application/x-font-type1": {
    source: "apache",
    extensions: [
      "pfa",
      "pfb",
      "pfm",
      "afm"
    ]
  },
  "application/x-font-vfont": {
    source: "apache"
  },
  "application/x-freearc": {
    source: "apache",
    extensions: [
      "arc"
    ]
  },
  "application/x-futuresplash": {
    source: "apache",
    extensions: [
      "spl"
    ]
  },
  "application/x-gca-compressed": {
    source: "apache",
    extensions: [
      "gca"
    ]
  },
  "application/x-glulx": {
    source: "apache",
    extensions: [
      "ulx"
    ]
  },
  "application/x-gnumeric": {
    source: "apache",
    extensions: [
      "gnumeric"
    ]
  },
  "application/x-gramps-xml": {
    source: "apache",
    extensions: [
      "gramps"
    ]
  },
  "application/x-gtar": {
    source: "apache",
    extensions: [
      "gtar"
    ]
  },
  "application/x-gzip": {
    source: "apache"
  },
  "application/x-hdf": {
    source: "apache",
    extensions: [
      "hdf"
    ]
  },
  "application/x-httpd-php": {
    compressible: !0,
    extensions: [
      "php"
    ]
  },
  "application/x-install-instructions": {
    source: "apache",
    extensions: [
      "install"
    ]
  },
  "application/x-iso9660-image": {
    source: "apache",
    extensions: [
      "iso"
    ]
  },
  "application/x-iwork-keynote-sffkey": {
    extensions: [
      "key"
    ]
  },
  "application/x-iwork-numbers-sffnumbers": {
    extensions: [
      "numbers"
    ]
  },
  "application/x-iwork-pages-sffpages": {
    extensions: [
      "pages"
    ]
  },
  "application/x-java-archive-diff": {
    source: "nginx",
    extensions: [
      "jardiff"
    ]
  },
  "application/x-java-jnlp-file": {
    source: "apache",
    compressible: !1,
    extensions: [
      "jnlp"
    ]
  },
  "application/x-javascript": {
    compressible: !0
  },
  "application/x-keepass2": {
    extensions: [
      "kdbx"
    ]
  },
  "application/x-latex": {
    source: "apache",
    compressible: !1,
    extensions: [
      "latex"
    ]
  },
  "application/x-lua-bytecode": {
    extensions: [
      "luac"
    ]
  },
  "application/x-lzh-compressed": {
    source: "apache",
    extensions: [
      "lzh",
      "lha"
    ]
  },
  "application/x-makeself": {
    source: "nginx",
    extensions: [
      "run"
    ]
  },
  "application/x-mie": {
    source: "apache",
    extensions: [
      "mie"
    ]
  },
  "application/x-mobipocket-ebook": {
    source: "apache",
    extensions: [
      "prc",
      "mobi"
    ]
  },
  "application/x-mpegurl": {
    compressible: !1
  },
  "application/x-ms-application": {
    source: "apache",
    extensions: [
      "application"
    ]
  },
  "application/x-ms-shortcut": {
    source: "apache",
    extensions: [
      "lnk"
    ]
  },
  "application/x-ms-wmd": {
    source: "apache",
    extensions: [
      "wmd"
    ]
  },
  "application/x-ms-wmz": {
    source: "apache",
    extensions: [
      "wmz"
    ]
  },
  "application/x-ms-xbap": {
    source: "apache",
    extensions: [
      "xbap"
    ]
  },
  "application/x-msaccess": {
    source: "apache",
    extensions: [
      "mdb"
    ]
  },
  "application/x-msbinder": {
    source: "apache",
    extensions: [
      "obd"
    ]
  },
  "application/x-mscardfile": {
    source: "apache",
    extensions: [
      "crd"
    ]
  },
  "application/x-msclip": {
    source: "apache",
    extensions: [
      "clp"
    ]
  },
  "application/x-msdos-program": {
    extensions: [
      "exe"
    ]
  },
  "application/x-msdownload": {
    source: "apache",
    extensions: [
      "exe",
      "dll",
      "com",
      "bat",
      "msi"
    ]
  },
  "application/x-msmediaview": {
    source: "apache",
    extensions: [
      "mvb",
      "m13",
      "m14"
    ]
  },
  "application/x-msmetafile": {
    source: "apache",
    extensions: [
      "wmf",
      "wmz",
      "emf",
      "emz"
    ]
  },
  "application/x-msmoney": {
    source: "apache",
    extensions: [
      "mny"
    ]
  },
  "application/x-mspublisher": {
    source: "apache",
    extensions: [
      "pub"
    ]
  },
  "application/x-msschedule": {
    source: "apache",
    extensions: [
      "scd"
    ]
  },
  "application/x-msterminal": {
    source: "apache",
    extensions: [
      "trm"
    ]
  },
  "application/x-mswrite": {
    source: "apache",
    extensions: [
      "wri"
    ]
  },
  "application/x-netcdf": {
    source: "apache",
    extensions: [
      "nc",
      "cdf"
    ]
  },
  "application/x-ns-proxy-autoconfig": {
    compressible: !0,
    extensions: [
      "pac"
    ]
  },
  "application/x-nzb": {
    source: "apache",
    extensions: [
      "nzb"
    ]
  },
  "application/x-perl": {
    source: "nginx",
    extensions: [
      "pl",
      "pm"
    ]
  },
  "application/x-pilot": {
    source: "nginx",
    extensions: [
      "prc",
      "pdb"
    ]
  },
  "application/x-pkcs12": {
    source: "apache",
    compressible: !1,
    extensions: [
      "p12",
      "pfx"
    ]
  },
  "application/x-pkcs7-certificates": {
    source: "apache",
    extensions: [
      "p7b",
      "spc"
    ]
  },
  "application/x-pkcs7-certreqresp": {
    source: "apache",
    extensions: [
      "p7r"
    ]
  },
  "application/x-pki-message": {
    source: "iana"
  },
  "application/x-rar-compressed": {
    source: "apache",
    compressible: !1,
    extensions: [
      "rar"
    ]
  },
  "application/x-redhat-package-manager": {
    source: "nginx",
    extensions: [
      "rpm"
    ]
  },
  "application/x-research-info-systems": {
    source: "apache",
    extensions: [
      "ris"
    ]
  },
  "application/x-sea": {
    source: "nginx",
    extensions: [
      "sea"
    ]
  },
  "application/x-sh": {
    source: "apache",
    compressible: !0,
    extensions: [
      "sh"
    ]
  },
  "application/x-shar": {
    source: "apache",
    extensions: [
      "shar"
    ]
  },
  "application/x-shockwave-flash": {
    source: "apache",
    compressible: !1,
    extensions: [
      "swf"
    ]
  },
  "application/x-silverlight-app": {
    source: "apache",
    extensions: [
      "xap"
    ]
  },
  "application/x-sql": {
    source: "apache",
    extensions: [
      "sql"
    ]
  },
  "application/x-stuffit": {
    source: "apache",
    compressible: !1,
    extensions: [
      "sit"
    ]
  },
  "application/x-stuffitx": {
    source: "apache",
    extensions: [
      "sitx"
    ]
  },
  "application/x-subrip": {
    source: "apache",
    extensions: [
      "srt"
    ]
  },
  "application/x-sv4cpio": {
    source: "apache",
    extensions: [
      "sv4cpio"
    ]
  },
  "application/x-sv4crc": {
    source: "apache",
    extensions: [
      "sv4crc"
    ]
  },
  "application/x-t3vm-image": {
    source: "apache",
    extensions: [
      "t3"
    ]
  },
  "application/x-tads": {
    source: "apache",
    extensions: [
      "gam"
    ]
  },
  "application/x-tar": {
    source: "apache",
    compressible: !0,
    extensions: [
      "tar"
    ]
  },
  "application/x-tcl": {
    source: "apache",
    extensions: [
      "tcl",
      "tk"
    ]
  },
  "application/x-tex": {
    source: "apache",
    extensions: [
      "tex"
    ]
  },
  "application/x-tex-tfm": {
    source: "apache",
    extensions: [
      "tfm"
    ]
  },
  "application/x-texinfo": {
    source: "apache",
    extensions: [
      "texinfo",
      "texi"
    ]
  },
  "application/x-tgif": {
    source: "apache",
    extensions: [
      "obj"
    ]
  },
  "application/x-ustar": {
    source: "apache",
    extensions: [
      "ustar"
    ]
  },
  "application/x-virtualbox-hdd": {
    compressible: !0,
    extensions: [
      "hdd"
    ]
  },
  "application/x-virtualbox-ova": {
    compressible: !0,
    extensions: [
      "ova"
    ]
  },
  "application/x-virtualbox-ovf": {
    compressible: !0,
    extensions: [
      "ovf"
    ]
  },
  "application/x-virtualbox-vbox": {
    compressible: !0,
    extensions: [
      "vbox"
    ]
  },
  "application/x-virtualbox-vbox-extpack": {
    compressible: !1,
    extensions: [
      "vbox-extpack"
    ]
  },
  "application/x-virtualbox-vdi": {
    compressible: !0,
    extensions: [
      "vdi"
    ]
  },
  "application/x-virtualbox-vhd": {
    compressible: !0,
    extensions: [
      "vhd"
    ]
  },
  "application/x-virtualbox-vmdk": {
    compressible: !0,
    extensions: [
      "vmdk"
    ]
  },
  "application/x-wais-source": {
    source: "apache",
    extensions: [
      "src"
    ]
  },
  "application/x-web-app-manifest+json": {
    compressible: !0,
    extensions: [
      "webapp"
    ]
  },
  "application/x-www-form-urlencoded": {
    source: "iana",
    compressible: !0
  },
  "application/x-x509-ca-cert": {
    source: "iana",
    extensions: [
      "der",
      "crt",
      "pem"
    ]
  },
  "application/x-x509-ca-ra-cert": {
    source: "iana"
  },
  "application/x-x509-next-ca-cert": {
    source: "iana"
  },
  "application/x-xfig": {
    source: "apache",
    extensions: [
      "fig"
    ]
  },
  "application/x-xliff+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xlf"
    ]
  },
  "application/x-xpinstall": {
    source: "apache",
    compressible: !1,
    extensions: [
      "xpi"
    ]
  },
  "application/x-xz": {
    source: "apache",
    extensions: [
      "xz"
    ]
  },
  "application/x-zmachine": {
    source: "apache",
    extensions: [
      "z1",
      "z2",
      "z3",
      "z4",
      "z5",
      "z6",
      "z7",
      "z8"
    ]
  },
  "application/x400-bp": {
    source: "iana"
  },
  "application/xacml+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xaml+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xaml"
    ]
  },
  "application/xcap-att+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xav"
    ]
  },
  "application/xcap-caps+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xca"
    ]
  },
  "application/xcap-diff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xdf"
    ]
  },
  "application/xcap-el+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xel"
    ]
  },
  "application/xcap-error+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xcap-ns+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xns"
    ]
  },
  "application/xcon-conference-info+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xcon-conference-info-diff+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xenc+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xenc"
    ]
  },
  "application/xhtml+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xhtml",
      "xht"
    ]
  },
  "application/xhtml-voice+xml": {
    source: "apache",
    compressible: !0
  },
  "application/xliff+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xlf"
    ]
  },
  "application/xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xml",
      "xsl",
      "xsd",
      "rng"
    ]
  },
  "application/xml-dtd": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dtd"
    ]
  },
  "application/xml-external-parsed-entity": {
    source: "iana"
  },
  "application/xml-patch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xmpp+xml": {
    source: "iana",
    compressible: !0
  },
  "application/xop+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xop"
    ]
  },
  "application/xproc+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xpl"
    ]
  },
  "application/xslt+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xsl",
      "xslt"
    ]
  },
  "application/xspf+xml": {
    source: "apache",
    compressible: !0,
    extensions: [
      "xspf"
    ]
  },
  "application/xv+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "mxml",
      "xhvml",
      "xvml",
      "xvm"
    ]
  },
  "application/yang": {
    source: "iana",
    extensions: [
      "yang"
    ]
  },
  "application/yang-data+json": {
    source: "iana",
    compressible: !0
  },
  "application/yang-data+xml": {
    source: "iana",
    compressible: !0
  },
  "application/yang-patch+json": {
    source: "iana",
    compressible: !0
  },
  "application/yang-patch+xml": {
    source: "iana",
    compressible: !0
  },
  "application/yin+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "yin"
    ]
  },
  "application/zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "zip"
    ]
  },
  "application/zlib": {
    source: "iana"
  },
  "application/zstd": {
    source: "iana"
  },
  "audio/1d-interleaved-parityfec": {
    source: "iana"
  },
  "audio/32kadpcm": {
    source: "iana"
  },
  "audio/3gpp": {
    source: "iana",
    compressible: !1,
    extensions: [
      "3gpp"
    ]
  },
  "audio/3gpp2": {
    source: "iana"
  },
  "audio/aac": {
    source: "iana"
  },
  "audio/ac3": {
    source: "iana"
  },
  "audio/adpcm": {
    source: "apache",
    extensions: [
      "adp"
    ]
  },
  "audio/amr": {
    source: "iana",
    extensions: [
      "amr"
    ]
  },
  "audio/amr-wb": {
    source: "iana"
  },
  "audio/amr-wb+": {
    source: "iana"
  },
  "audio/aptx": {
    source: "iana"
  },
  "audio/asc": {
    source: "iana"
  },
  "audio/atrac-advanced-lossless": {
    source: "iana"
  },
  "audio/atrac-x": {
    source: "iana"
  },
  "audio/atrac3": {
    source: "iana"
  },
  "audio/basic": {
    source: "iana",
    compressible: !1,
    extensions: [
      "au",
      "snd"
    ]
  },
  "audio/bv16": {
    source: "iana"
  },
  "audio/bv32": {
    source: "iana"
  },
  "audio/clearmode": {
    source: "iana"
  },
  "audio/cn": {
    source: "iana"
  },
  "audio/dat12": {
    source: "iana"
  },
  "audio/dls": {
    source: "iana"
  },
  "audio/dsr-es201108": {
    source: "iana"
  },
  "audio/dsr-es202050": {
    source: "iana"
  },
  "audio/dsr-es202211": {
    source: "iana"
  },
  "audio/dsr-es202212": {
    source: "iana"
  },
  "audio/dv": {
    source: "iana"
  },
  "audio/dvi4": {
    source: "iana"
  },
  "audio/eac3": {
    source: "iana"
  },
  "audio/encaprtp": {
    source: "iana"
  },
  "audio/evrc": {
    source: "iana"
  },
  "audio/evrc-qcp": {
    source: "iana"
  },
  "audio/evrc0": {
    source: "iana"
  },
  "audio/evrc1": {
    source: "iana"
  },
  "audio/evrcb": {
    source: "iana"
  },
  "audio/evrcb0": {
    source: "iana"
  },
  "audio/evrcb1": {
    source: "iana"
  },
  "audio/evrcnw": {
    source: "iana"
  },
  "audio/evrcnw0": {
    source: "iana"
  },
  "audio/evrcnw1": {
    source: "iana"
  },
  "audio/evrcwb": {
    source: "iana"
  },
  "audio/evrcwb0": {
    source: "iana"
  },
  "audio/evrcwb1": {
    source: "iana"
  },
  "audio/evs": {
    source: "iana"
  },
  "audio/flexfec": {
    source: "iana"
  },
  "audio/fwdred": {
    source: "iana"
  },
  "audio/g711-0": {
    source: "iana"
  },
  "audio/g719": {
    source: "iana"
  },
  "audio/g722": {
    source: "iana"
  },
  "audio/g7221": {
    source: "iana"
  },
  "audio/g723": {
    source: "iana"
  },
  "audio/g726-16": {
    source: "iana"
  },
  "audio/g726-24": {
    source: "iana"
  },
  "audio/g726-32": {
    source: "iana"
  },
  "audio/g726-40": {
    source: "iana"
  },
  "audio/g728": {
    source: "iana"
  },
  "audio/g729": {
    source: "iana"
  },
  "audio/g7291": {
    source: "iana"
  },
  "audio/g729d": {
    source: "iana"
  },
  "audio/g729e": {
    source: "iana"
  },
  "audio/gsm": {
    source: "iana"
  },
  "audio/gsm-efr": {
    source: "iana"
  },
  "audio/gsm-hr-08": {
    source: "iana"
  },
  "audio/ilbc": {
    source: "iana"
  },
  "audio/ip-mr_v2.5": {
    source: "iana"
  },
  "audio/isac": {
    source: "apache"
  },
  "audio/l16": {
    source: "iana"
  },
  "audio/l20": {
    source: "iana"
  },
  "audio/l24": {
    source: "iana",
    compressible: !1
  },
  "audio/l8": {
    source: "iana"
  },
  "audio/lpc": {
    source: "iana"
  },
  "audio/melp": {
    source: "iana"
  },
  "audio/melp1200": {
    source: "iana"
  },
  "audio/melp2400": {
    source: "iana"
  },
  "audio/melp600": {
    source: "iana"
  },
  "audio/mhas": {
    source: "iana"
  },
  "audio/midi": {
    source: "apache",
    extensions: [
      "mid",
      "midi",
      "kar",
      "rmi"
    ]
  },
  "audio/mobile-xmf": {
    source: "iana",
    extensions: [
      "mxmf"
    ]
  },
  "audio/mp3": {
    compressible: !1,
    extensions: [
      "mp3"
    ]
  },
  "audio/mp4": {
    source: "iana",
    compressible: !1,
    extensions: [
      "m4a",
      "mp4a"
    ]
  },
  "audio/mp4a-latm": {
    source: "iana"
  },
  "audio/mpa": {
    source: "iana"
  },
  "audio/mpa-robust": {
    source: "iana"
  },
  "audio/mpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mpga",
      "mp2",
      "mp2a",
      "mp3",
      "m2a",
      "m3a"
    ]
  },
  "audio/mpeg4-generic": {
    source: "iana"
  },
  "audio/musepack": {
    source: "apache"
  },
  "audio/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "oga",
      "ogg",
      "spx",
      "opus"
    ]
  },
  "audio/opus": {
    source: "iana"
  },
  "audio/parityfec": {
    source: "iana"
  },
  "audio/pcma": {
    source: "iana"
  },
  "audio/pcma-wb": {
    source: "iana"
  },
  "audio/pcmu": {
    source: "iana"
  },
  "audio/pcmu-wb": {
    source: "iana"
  },
  "audio/prs.sid": {
    source: "iana"
  },
  "audio/qcelp": {
    source: "iana"
  },
  "audio/raptorfec": {
    source: "iana"
  },
  "audio/red": {
    source: "iana"
  },
  "audio/rtp-enc-aescm128": {
    source: "iana"
  },
  "audio/rtp-midi": {
    source: "iana"
  },
  "audio/rtploopback": {
    source: "iana"
  },
  "audio/rtx": {
    source: "iana"
  },
  "audio/s3m": {
    source: "apache",
    extensions: [
      "s3m"
    ]
  },
  "audio/scip": {
    source: "iana"
  },
  "audio/silk": {
    source: "apache",
    extensions: [
      "sil"
    ]
  },
  "audio/smv": {
    source: "iana"
  },
  "audio/smv-qcp": {
    source: "iana"
  },
  "audio/smv0": {
    source: "iana"
  },
  "audio/sofa": {
    source: "iana"
  },
  "audio/sp-midi": {
    source: "iana"
  },
  "audio/speex": {
    source: "iana"
  },
  "audio/t140c": {
    source: "iana"
  },
  "audio/t38": {
    source: "iana"
  },
  "audio/telephone-event": {
    source: "iana"
  },
  "audio/tetra_acelp": {
    source: "iana"
  },
  "audio/tetra_acelp_bb": {
    source: "iana"
  },
  "audio/tone": {
    source: "iana"
  },
  "audio/tsvcis": {
    source: "iana"
  },
  "audio/uemclip": {
    source: "iana"
  },
  "audio/ulpfec": {
    source: "iana"
  },
  "audio/usac": {
    source: "iana"
  },
  "audio/vdvi": {
    source: "iana"
  },
  "audio/vmr-wb": {
    source: "iana"
  },
  "audio/vnd.3gpp.iufp": {
    source: "iana"
  },
  "audio/vnd.4sb": {
    source: "iana"
  },
  "audio/vnd.audiokoz": {
    source: "iana"
  },
  "audio/vnd.celp": {
    source: "iana"
  },
  "audio/vnd.cisco.nse": {
    source: "iana"
  },
  "audio/vnd.cmles.radio-events": {
    source: "iana"
  },
  "audio/vnd.cns.anp1": {
    source: "iana"
  },
  "audio/vnd.cns.inf1": {
    source: "iana"
  },
  "audio/vnd.dece.audio": {
    source: "iana",
    extensions: [
      "uva",
      "uvva"
    ]
  },
  "audio/vnd.digital-winds": {
    source: "iana",
    extensions: [
      "eol"
    ]
  },
  "audio/vnd.dlna.adts": {
    source: "iana"
  },
  "audio/vnd.dolby.heaac.1": {
    source: "iana"
  },
  "audio/vnd.dolby.heaac.2": {
    source: "iana"
  },
  "audio/vnd.dolby.mlp": {
    source: "iana"
  },
  "audio/vnd.dolby.mps": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2x": {
    source: "iana"
  },
  "audio/vnd.dolby.pl2z": {
    source: "iana"
  },
  "audio/vnd.dolby.pulse.1": {
    source: "iana"
  },
  "audio/vnd.dra": {
    source: "iana",
    extensions: [
      "dra"
    ]
  },
  "audio/vnd.dts": {
    source: "iana",
    extensions: [
      "dts"
    ]
  },
  "audio/vnd.dts.hd": {
    source: "iana",
    extensions: [
      "dtshd"
    ]
  },
  "audio/vnd.dts.uhd": {
    source: "iana"
  },
  "audio/vnd.dvb.file": {
    source: "iana"
  },
  "audio/vnd.everad.plj": {
    source: "iana"
  },
  "audio/vnd.hns.audio": {
    source: "iana"
  },
  "audio/vnd.lucent.voice": {
    source: "iana",
    extensions: [
      "lvp"
    ]
  },
  "audio/vnd.ms-playready.media.pya": {
    source: "iana",
    extensions: [
      "pya"
    ]
  },
  "audio/vnd.nokia.mobile-xmf": {
    source: "iana"
  },
  "audio/vnd.nortel.vbk": {
    source: "iana"
  },
  "audio/vnd.nuera.ecelp4800": {
    source: "iana",
    extensions: [
      "ecelp4800"
    ]
  },
  "audio/vnd.nuera.ecelp7470": {
    source: "iana",
    extensions: [
      "ecelp7470"
    ]
  },
  "audio/vnd.nuera.ecelp9600": {
    source: "iana",
    extensions: [
      "ecelp9600"
    ]
  },
  "audio/vnd.octel.sbc": {
    source: "iana"
  },
  "audio/vnd.presonus.multitrack": {
    source: "iana"
  },
  "audio/vnd.qcelp": {
    source: "iana"
  },
  "audio/vnd.rhetorex.32kadpcm": {
    source: "iana"
  },
  "audio/vnd.rip": {
    source: "iana",
    extensions: [
      "rip"
    ]
  },
  "audio/vnd.rn-realaudio": {
    compressible: !1
  },
  "audio/vnd.sealedmedia.softseal.mpeg": {
    source: "iana"
  },
  "audio/vnd.vmx.cvsd": {
    source: "iana"
  },
  "audio/vnd.wave": {
    compressible: !1
  },
  "audio/vorbis": {
    source: "iana",
    compressible: !1
  },
  "audio/vorbis-config": {
    source: "iana"
  },
  "audio/wav": {
    compressible: !1,
    extensions: [
      "wav"
    ]
  },
  "audio/wave": {
    compressible: !1,
    extensions: [
      "wav"
    ]
  },
  "audio/webm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "weba"
    ]
  },
  "audio/x-aac": {
    source: "apache",
    compressible: !1,
    extensions: [
      "aac"
    ]
  },
  "audio/x-aiff": {
    source: "apache",
    extensions: [
      "aif",
      "aiff",
      "aifc"
    ]
  },
  "audio/x-caf": {
    source: "apache",
    compressible: !1,
    extensions: [
      "caf"
    ]
  },
  "audio/x-flac": {
    source: "apache",
    extensions: [
      "flac"
    ]
  },
  "audio/x-m4a": {
    source: "nginx",
    extensions: [
      "m4a"
    ]
  },
  "audio/x-matroska": {
    source: "apache",
    extensions: [
      "mka"
    ]
  },
  "audio/x-mpegurl": {
    source: "apache",
    extensions: [
      "m3u"
    ]
  },
  "audio/x-ms-wax": {
    source: "apache",
    extensions: [
      "wax"
    ]
  },
  "audio/x-ms-wma": {
    source: "apache",
    extensions: [
      "wma"
    ]
  },
  "audio/x-pn-realaudio": {
    source: "apache",
    extensions: [
      "ram",
      "ra"
    ]
  },
  "audio/x-pn-realaudio-plugin": {
    source: "apache",
    extensions: [
      "rmp"
    ]
  },
  "audio/x-realaudio": {
    source: "nginx",
    extensions: [
      "ra"
    ]
  },
  "audio/x-tta": {
    source: "apache"
  },
  "audio/x-wav": {
    source: "apache",
    extensions: [
      "wav"
    ]
  },
  "audio/xm": {
    source: "apache",
    extensions: [
      "xm"
    ]
  },
  "chemical/x-cdx": {
    source: "apache",
    extensions: [
      "cdx"
    ]
  },
  "chemical/x-cif": {
    source: "apache",
    extensions: [
      "cif"
    ]
  },
  "chemical/x-cmdf": {
    source: "apache",
    extensions: [
      "cmdf"
    ]
  },
  "chemical/x-cml": {
    source: "apache",
    extensions: [
      "cml"
    ]
  },
  "chemical/x-csml": {
    source: "apache",
    extensions: [
      "csml"
    ]
  },
  "chemical/x-pdb": {
    source: "apache"
  },
  "chemical/x-xyz": {
    source: "apache",
    extensions: [
      "xyz"
    ]
  },
  "font/collection": {
    source: "iana",
    extensions: [
      "ttc"
    ]
  },
  "font/otf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "otf"
    ]
  },
  "font/sfnt": {
    source: "iana"
  },
  "font/ttf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ttf"
    ]
  },
  "font/woff": {
    source: "iana",
    extensions: [
      "woff"
    ]
  },
  "font/woff2": {
    source: "iana",
    extensions: [
      "woff2"
    ]
  },
  "image/aces": {
    source: "iana",
    extensions: [
      "exr"
    ]
  },
  "image/apng": {
    compressible: !1,
    extensions: [
      "apng"
    ]
  },
  "image/avci": {
    source: "iana",
    extensions: [
      "avci"
    ]
  },
  "image/avcs": {
    source: "iana",
    extensions: [
      "avcs"
    ]
  },
  "image/avif": {
    source: "iana",
    compressible: !1,
    extensions: [
      "avif"
    ]
  },
  "image/bmp": {
    source: "iana",
    compressible: !0,
    extensions: [
      "bmp"
    ]
  },
  "image/cgm": {
    source: "iana",
    extensions: [
      "cgm"
    ]
  },
  "image/dicom-rle": {
    source: "iana",
    extensions: [
      "drle"
    ]
  },
  "image/emf": {
    source: "iana",
    extensions: [
      "emf"
    ]
  },
  "image/fits": {
    source: "iana",
    extensions: [
      "fits"
    ]
  },
  "image/g3fax": {
    source: "iana",
    extensions: [
      "g3"
    ]
  },
  "image/gif": {
    source: "iana",
    compressible: !1,
    extensions: [
      "gif"
    ]
  },
  "image/heic": {
    source: "iana",
    extensions: [
      "heic"
    ]
  },
  "image/heic-sequence": {
    source: "iana",
    extensions: [
      "heics"
    ]
  },
  "image/heif": {
    source: "iana",
    extensions: [
      "heif"
    ]
  },
  "image/heif-sequence": {
    source: "iana",
    extensions: [
      "heifs"
    ]
  },
  "image/hej2k": {
    source: "iana",
    extensions: [
      "hej2"
    ]
  },
  "image/hsj2": {
    source: "iana",
    extensions: [
      "hsj2"
    ]
  },
  "image/ief": {
    source: "iana",
    extensions: [
      "ief"
    ]
  },
  "image/jls": {
    source: "iana",
    extensions: [
      "jls"
    ]
  },
  "image/jp2": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jp2",
      "jpg2"
    ]
  },
  "image/jpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpeg",
      "jpg",
      "jpe"
    ]
  },
  "image/jph": {
    source: "iana",
    extensions: [
      "jph"
    ]
  },
  "image/jphc": {
    source: "iana",
    extensions: [
      "jhc"
    ]
  },
  "image/jpm": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpm"
    ]
  },
  "image/jpx": {
    source: "iana",
    compressible: !1,
    extensions: [
      "jpx",
      "jpf"
    ]
  },
  "image/jxr": {
    source: "iana",
    extensions: [
      "jxr"
    ]
  },
  "image/jxra": {
    source: "iana",
    extensions: [
      "jxra"
    ]
  },
  "image/jxrs": {
    source: "iana",
    extensions: [
      "jxrs"
    ]
  },
  "image/jxs": {
    source: "iana",
    extensions: [
      "jxs"
    ]
  },
  "image/jxsc": {
    source: "iana",
    extensions: [
      "jxsc"
    ]
  },
  "image/jxsi": {
    source: "iana",
    extensions: [
      "jxsi"
    ]
  },
  "image/jxss": {
    source: "iana",
    extensions: [
      "jxss"
    ]
  },
  "image/ktx": {
    source: "iana",
    extensions: [
      "ktx"
    ]
  },
  "image/ktx2": {
    source: "iana",
    extensions: [
      "ktx2"
    ]
  },
  "image/naplps": {
    source: "iana"
  },
  "image/pjpeg": {
    compressible: !1
  },
  "image/png": {
    source: "iana",
    compressible: !1,
    extensions: [
      "png"
    ]
  },
  "image/prs.btif": {
    source: "iana",
    extensions: [
      "btif"
    ]
  },
  "image/prs.pti": {
    source: "iana",
    extensions: [
      "pti"
    ]
  },
  "image/pwg-raster": {
    source: "iana"
  },
  "image/sgi": {
    source: "apache",
    extensions: [
      "sgi"
    ]
  },
  "image/svg+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "svg",
      "svgz"
    ]
  },
  "image/t38": {
    source: "iana",
    extensions: [
      "t38"
    ]
  },
  "image/tiff": {
    source: "iana",
    compressible: !1,
    extensions: [
      "tif",
      "tiff"
    ]
  },
  "image/tiff-fx": {
    source: "iana",
    extensions: [
      "tfx"
    ]
  },
  "image/vnd.adobe.photoshop": {
    source: "iana",
    compressible: !0,
    extensions: [
      "psd"
    ]
  },
  "image/vnd.airzip.accelerator.azv": {
    source: "iana",
    extensions: [
      "azv"
    ]
  },
  "image/vnd.cns.inf2": {
    source: "iana"
  },
  "image/vnd.dece.graphic": {
    source: "iana",
    extensions: [
      "uvi",
      "uvvi",
      "uvg",
      "uvvg"
    ]
  },
  "image/vnd.djvu": {
    source: "iana",
    extensions: [
      "djvu",
      "djv"
    ]
  },
  "image/vnd.dvb.subtitle": {
    source: "iana",
    extensions: [
      "sub"
    ]
  },
  "image/vnd.dwg": {
    source: "iana",
    extensions: [
      "dwg"
    ]
  },
  "image/vnd.dxf": {
    source: "iana",
    extensions: [
      "dxf"
    ]
  },
  "image/vnd.fastbidsheet": {
    source: "iana",
    extensions: [
      "fbs"
    ]
  },
  "image/vnd.fpx": {
    source: "iana",
    extensions: [
      "fpx"
    ]
  },
  "image/vnd.fst": {
    source: "iana",
    extensions: [
      "fst"
    ]
  },
  "image/vnd.fujixerox.edmics-mmr": {
    source: "iana",
    extensions: [
      "mmr"
    ]
  },
  "image/vnd.fujixerox.edmics-rlc": {
    source: "iana",
    extensions: [
      "rlc"
    ]
  },
  "image/vnd.globalgraphics.pgb": {
    source: "iana"
  },
  "image/vnd.microsoft.icon": {
    source: "iana",
    compressible: !0,
    extensions: [
      "ico"
    ]
  },
  "image/vnd.mix": {
    source: "iana"
  },
  "image/vnd.mozilla.apng": {
    source: "iana"
  },
  "image/vnd.ms-dds": {
    compressible: !0,
    extensions: [
      "dds"
    ]
  },
  "image/vnd.ms-modi": {
    source: "iana",
    extensions: [
      "mdi"
    ]
  },
  "image/vnd.ms-photo": {
    source: "apache",
    extensions: [
      "wdp"
    ]
  },
  "image/vnd.net-fpx": {
    source: "iana",
    extensions: [
      "npx"
    ]
  },
  "image/vnd.pco.b16": {
    source: "iana",
    extensions: [
      "b16"
    ]
  },
  "image/vnd.radiance": {
    source: "iana"
  },
  "image/vnd.sealed.png": {
    source: "iana"
  },
  "image/vnd.sealedmedia.softseal.gif": {
    source: "iana"
  },
  "image/vnd.sealedmedia.softseal.jpg": {
    source: "iana"
  },
  "image/vnd.svf": {
    source: "iana"
  },
  "image/vnd.tencent.tap": {
    source: "iana",
    extensions: [
      "tap"
    ]
  },
  "image/vnd.valve.source.texture": {
    source: "iana",
    extensions: [
      "vtf"
    ]
  },
  "image/vnd.wap.wbmp": {
    source: "iana",
    extensions: [
      "wbmp"
    ]
  },
  "image/vnd.xiff": {
    source: "iana",
    extensions: [
      "xif"
    ]
  },
  "image/vnd.zbrush.pcx": {
    source: "iana",
    extensions: [
      "pcx"
    ]
  },
  "image/webp": {
    source: "apache",
    extensions: [
      "webp"
    ]
  },
  "image/wmf": {
    source: "iana",
    extensions: [
      "wmf"
    ]
  },
  "image/x-3ds": {
    source: "apache",
    extensions: [
      "3ds"
    ]
  },
  "image/x-cmu-raster": {
    source: "apache",
    extensions: [
      "ras"
    ]
  },
  "image/x-cmx": {
    source: "apache",
    extensions: [
      "cmx"
    ]
  },
  "image/x-freehand": {
    source: "apache",
    extensions: [
      "fh",
      "fhc",
      "fh4",
      "fh5",
      "fh7"
    ]
  },
  "image/x-icon": {
    source: "apache",
    compressible: !0,
    extensions: [
      "ico"
    ]
  },
  "image/x-jng": {
    source: "nginx",
    extensions: [
      "jng"
    ]
  },
  "image/x-mrsid-image": {
    source: "apache",
    extensions: [
      "sid"
    ]
  },
  "image/x-ms-bmp": {
    source: "nginx",
    compressible: !0,
    extensions: [
      "bmp"
    ]
  },
  "image/x-pcx": {
    source: "apache",
    extensions: [
      "pcx"
    ]
  },
  "image/x-pict": {
    source: "apache",
    extensions: [
      "pic",
      "pct"
    ]
  },
  "image/x-portable-anymap": {
    source: "apache",
    extensions: [
      "pnm"
    ]
  },
  "image/x-portable-bitmap": {
    source: "apache",
    extensions: [
      "pbm"
    ]
  },
  "image/x-portable-graymap": {
    source: "apache",
    extensions: [
      "pgm"
    ]
  },
  "image/x-portable-pixmap": {
    source: "apache",
    extensions: [
      "ppm"
    ]
  },
  "image/x-rgb": {
    source: "apache",
    extensions: [
      "rgb"
    ]
  },
  "image/x-tga": {
    source: "apache",
    extensions: [
      "tga"
    ]
  },
  "image/x-xbitmap": {
    source: "apache",
    extensions: [
      "xbm"
    ]
  },
  "image/x-xcf": {
    compressible: !1
  },
  "image/x-xpixmap": {
    source: "apache",
    extensions: [
      "xpm"
    ]
  },
  "image/x-xwindowdump": {
    source: "apache",
    extensions: [
      "xwd"
    ]
  },
  "message/cpim": {
    source: "iana"
  },
  "message/delivery-status": {
    source: "iana"
  },
  "message/disposition-notification": {
    source: "iana",
    extensions: [
      "disposition-notification"
    ]
  },
  "message/external-body": {
    source: "iana"
  },
  "message/feedback-report": {
    source: "iana"
  },
  "message/global": {
    source: "iana",
    extensions: [
      "u8msg"
    ]
  },
  "message/global-delivery-status": {
    source: "iana",
    extensions: [
      "u8dsn"
    ]
  },
  "message/global-disposition-notification": {
    source: "iana",
    extensions: [
      "u8mdn"
    ]
  },
  "message/global-headers": {
    source: "iana",
    extensions: [
      "u8hdr"
    ]
  },
  "message/http": {
    source: "iana",
    compressible: !1
  },
  "message/imdn+xml": {
    source: "iana",
    compressible: !0
  },
  "message/news": {
    source: "iana"
  },
  "message/partial": {
    source: "iana",
    compressible: !1
  },
  "message/rfc822": {
    source: "iana",
    compressible: !0,
    extensions: [
      "eml",
      "mime"
    ]
  },
  "message/s-http": {
    source: "iana"
  },
  "message/sip": {
    source: "iana"
  },
  "message/sipfrag": {
    source: "iana"
  },
  "message/tracking-status": {
    source: "iana"
  },
  "message/vnd.si.simp": {
    source: "iana"
  },
  "message/vnd.wfa.wsc": {
    source: "iana",
    extensions: [
      "wsc"
    ]
  },
  "model/3mf": {
    source: "iana",
    extensions: [
      "3mf"
    ]
  },
  "model/e57": {
    source: "iana"
  },
  "model/gltf+json": {
    source: "iana",
    compressible: !0,
    extensions: [
      "gltf"
    ]
  },
  "model/gltf-binary": {
    source: "iana",
    compressible: !0,
    extensions: [
      "glb"
    ]
  },
  "model/iges": {
    source: "iana",
    compressible: !1,
    extensions: [
      "igs",
      "iges"
    ]
  },
  "model/mesh": {
    source: "iana",
    compressible: !1,
    extensions: [
      "msh",
      "mesh",
      "silo"
    ]
  },
  "model/mtl": {
    source: "iana",
    extensions: [
      "mtl"
    ]
  },
  "model/obj": {
    source: "iana",
    extensions: [
      "obj"
    ]
  },
  "model/step": {
    source: "iana"
  },
  "model/step+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "stpx"
    ]
  },
  "model/step+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "stpz"
    ]
  },
  "model/step-xml+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "stpxz"
    ]
  },
  "model/stl": {
    source: "iana",
    extensions: [
      "stl"
    ]
  },
  "model/vnd.collada+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "dae"
    ]
  },
  "model/vnd.dwf": {
    source: "iana",
    extensions: [
      "dwf"
    ]
  },
  "model/vnd.flatland.3dml": {
    source: "iana"
  },
  "model/vnd.gdl": {
    source: "iana",
    extensions: [
      "gdl"
    ]
  },
  "model/vnd.gs-gdl": {
    source: "apache"
  },
  "model/vnd.gs.gdl": {
    source: "iana"
  },
  "model/vnd.gtw": {
    source: "iana",
    extensions: [
      "gtw"
    ]
  },
  "model/vnd.moml+xml": {
    source: "iana",
    compressible: !0
  },
  "model/vnd.mts": {
    source: "iana",
    extensions: [
      "mts"
    ]
  },
  "model/vnd.opengex": {
    source: "iana",
    extensions: [
      "ogex"
    ]
  },
  "model/vnd.parasolid.transmit.binary": {
    source: "iana",
    extensions: [
      "x_b"
    ]
  },
  "model/vnd.parasolid.transmit.text": {
    source: "iana",
    extensions: [
      "x_t"
    ]
  },
  "model/vnd.pytha.pyox": {
    source: "iana"
  },
  "model/vnd.rosette.annotated-data-model": {
    source: "iana"
  },
  "model/vnd.sap.vds": {
    source: "iana",
    extensions: [
      "vds"
    ]
  },
  "model/vnd.usdz+zip": {
    source: "iana",
    compressible: !1,
    extensions: [
      "usdz"
    ]
  },
  "model/vnd.valve.source.compiled-map": {
    source: "iana",
    extensions: [
      "bsp"
    ]
  },
  "model/vnd.vtu": {
    source: "iana",
    extensions: [
      "vtu"
    ]
  },
  "model/vrml": {
    source: "iana",
    compressible: !1,
    extensions: [
      "wrl",
      "vrml"
    ]
  },
  "model/x3d+binary": {
    source: "apache",
    compressible: !1,
    extensions: [
      "x3db",
      "x3dbz"
    ]
  },
  "model/x3d+fastinfoset": {
    source: "iana",
    extensions: [
      "x3db"
    ]
  },
  "model/x3d+vrml": {
    source: "apache",
    compressible: !1,
    extensions: [
      "x3dv",
      "x3dvz"
    ]
  },
  "model/x3d+xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "x3d",
      "x3dz"
    ]
  },
  "model/x3d-vrml": {
    source: "iana",
    extensions: [
      "x3dv"
    ]
  },
  "multipart/alternative": {
    source: "iana",
    compressible: !1
  },
  "multipart/appledouble": {
    source: "iana"
  },
  "multipart/byteranges": {
    source: "iana"
  },
  "multipart/digest": {
    source: "iana"
  },
  "multipart/encrypted": {
    source: "iana",
    compressible: !1
  },
  "multipart/form-data": {
    source: "iana",
    compressible: !1
  },
  "multipart/header-set": {
    source: "iana"
  },
  "multipart/mixed": {
    source: "iana"
  },
  "multipart/multilingual": {
    source: "iana"
  },
  "multipart/parallel": {
    source: "iana"
  },
  "multipart/related": {
    source: "iana",
    compressible: !1
  },
  "multipart/report": {
    source: "iana"
  },
  "multipart/signed": {
    source: "iana",
    compressible: !1
  },
  "multipart/vnd.bint.med-plus": {
    source: "iana"
  },
  "multipart/voice-message": {
    source: "iana"
  },
  "multipart/x-mixed-replace": {
    source: "iana"
  },
  "text/1d-interleaved-parityfec": {
    source: "iana"
  },
  "text/cache-manifest": {
    source: "iana",
    compressible: !0,
    extensions: [
      "appcache",
      "manifest"
    ]
  },
  "text/calendar": {
    source: "iana",
    extensions: [
      "ics",
      "ifb"
    ]
  },
  "text/calender": {
    compressible: !0
  },
  "text/cmd": {
    compressible: !0
  },
  "text/coffeescript": {
    extensions: [
      "coffee",
      "litcoffee"
    ]
  },
  "text/cql": {
    source: "iana"
  },
  "text/cql-expression": {
    source: "iana"
  },
  "text/cql-identifier": {
    source: "iana"
  },
  "text/css": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "css"
    ]
  },
  "text/csv": {
    source: "iana",
    compressible: !0,
    extensions: [
      "csv"
    ]
  },
  "text/csv-schema": {
    source: "iana"
  },
  "text/directory": {
    source: "iana"
  },
  "text/dns": {
    source: "iana"
  },
  "text/ecmascript": {
    source: "iana"
  },
  "text/encaprtp": {
    source: "iana"
  },
  "text/enriched": {
    source: "iana"
  },
  "text/fhirpath": {
    source: "iana"
  },
  "text/flexfec": {
    source: "iana"
  },
  "text/fwdred": {
    source: "iana"
  },
  "text/gff3": {
    source: "iana"
  },
  "text/grammar-ref-list": {
    source: "iana"
  },
  "text/html": {
    source: "iana",
    compressible: !0,
    extensions: [
      "html",
      "htm",
      "shtml"
    ]
  },
  "text/jade": {
    extensions: [
      "jade"
    ]
  },
  "text/javascript": {
    source: "iana",
    compressible: !0
  },
  "text/jcr-cnd": {
    source: "iana"
  },
  "text/jsx": {
    compressible: !0,
    extensions: [
      "jsx"
    ]
  },
  "text/less": {
    compressible: !0,
    extensions: [
      "less"
    ]
  },
  "text/markdown": {
    source: "iana",
    compressible: !0,
    extensions: [
      "markdown",
      "md"
    ]
  },
  "text/mathml": {
    source: "nginx",
    extensions: [
      "mml"
    ]
  },
  "text/mdx": {
    compressible: !0,
    extensions: [
      "mdx"
    ]
  },
  "text/mizar": {
    source: "iana"
  },
  "text/n3": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "n3"
    ]
  },
  "text/parameters": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/parityfec": {
    source: "iana"
  },
  "text/plain": {
    source: "iana",
    compressible: !0,
    extensions: [
      "txt",
      "text",
      "conf",
      "def",
      "list",
      "log",
      "in",
      "ini"
    ]
  },
  "text/provenance-notation": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/prs.fallenstein.rst": {
    source: "iana"
  },
  "text/prs.lines.tag": {
    source: "iana",
    extensions: [
      "dsc"
    ]
  },
  "text/prs.prop.logic": {
    source: "iana"
  },
  "text/raptorfec": {
    source: "iana"
  },
  "text/red": {
    source: "iana"
  },
  "text/rfc822-headers": {
    source: "iana"
  },
  "text/richtext": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtx"
    ]
  },
  "text/rtf": {
    source: "iana",
    compressible: !0,
    extensions: [
      "rtf"
    ]
  },
  "text/rtp-enc-aescm128": {
    source: "iana"
  },
  "text/rtploopback": {
    source: "iana"
  },
  "text/rtx": {
    source: "iana"
  },
  "text/sgml": {
    source: "iana",
    extensions: [
      "sgml",
      "sgm"
    ]
  },
  "text/shaclc": {
    source: "iana"
  },
  "text/shex": {
    source: "iana",
    extensions: [
      "shex"
    ]
  },
  "text/slim": {
    extensions: [
      "slim",
      "slm"
    ]
  },
  "text/spdx": {
    source: "iana",
    extensions: [
      "spdx"
    ]
  },
  "text/strings": {
    source: "iana"
  },
  "text/stylus": {
    extensions: [
      "stylus",
      "styl"
    ]
  },
  "text/t140": {
    source: "iana"
  },
  "text/tab-separated-values": {
    source: "iana",
    compressible: !0,
    extensions: [
      "tsv"
    ]
  },
  "text/troff": {
    source: "iana",
    extensions: [
      "t",
      "tr",
      "roff",
      "man",
      "me",
      "ms"
    ]
  },
  "text/turtle": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "ttl"
    ]
  },
  "text/ulpfec": {
    source: "iana"
  },
  "text/uri-list": {
    source: "iana",
    compressible: !0,
    extensions: [
      "uri",
      "uris",
      "urls"
    ]
  },
  "text/vcard": {
    source: "iana",
    compressible: !0,
    extensions: [
      "vcard"
    ]
  },
  "text/vnd.a": {
    source: "iana"
  },
  "text/vnd.abc": {
    source: "iana"
  },
  "text/vnd.ascii-art": {
    source: "iana"
  },
  "text/vnd.curl": {
    source: "iana",
    extensions: [
      "curl"
    ]
  },
  "text/vnd.curl.dcurl": {
    source: "apache",
    extensions: [
      "dcurl"
    ]
  },
  "text/vnd.curl.mcurl": {
    source: "apache",
    extensions: [
      "mcurl"
    ]
  },
  "text/vnd.curl.scurl": {
    source: "apache",
    extensions: [
      "scurl"
    ]
  },
  "text/vnd.debian.copyright": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.dmclientscript": {
    source: "iana"
  },
  "text/vnd.dvb.subtitle": {
    source: "iana",
    extensions: [
      "sub"
    ]
  },
  "text/vnd.esmertec.theme-descriptor": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.familysearch.gedcom": {
    source: "iana",
    extensions: [
      "ged"
    ]
  },
  "text/vnd.ficlab.flt": {
    source: "iana"
  },
  "text/vnd.fly": {
    source: "iana",
    extensions: [
      "fly"
    ]
  },
  "text/vnd.fmi.flexstor": {
    source: "iana",
    extensions: [
      "flx"
    ]
  },
  "text/vnd.gml": {
    source: "iana"
  },
  "text/vnd.graphviz": {
    source: "iana",
    extensions: [
      "gv"
    ]
  },
  "text/vnd.hans": {
    source: "iana"
  },
  "text/vnd.hgl": {
    source: "iana"
  },
  "text/vnd.in3d.3dml": {
    source: "iana",
    extensions: [
      "3dml"
    ]
  },
  "text/vnd.in3d.spot": {
    source: "iana",
    extensions: [
      "spot"
    ]
  },
  "text/vnd.iptc.newsml": {
    source: "iana"
  },
  "text/vnd.iptc.nitf": {
    source: "iana"
  },
  "text/vnd.latex-z": {
    source: "iana"
  },
  "text/vnd.motorola.reflex": {
    source: "iana"
  },
  "text/vnd.ms-mediapackage": {
    source: "iana"
  },
  "text/vnd.net2phone.commcenter.command": {
    source: "iana"
  },
  "text/vnd.radisys.msml-basic-layout": {
    source: "iana"
  },
  "text/vnd.senx.warpscript": {
    source: "iana"
  },
  "text/vnd.si.uricatalogue": {
    source: "iana"
  },
  "text/vnd.sosi": {
    source: "iana"
  },
  "text/vnd.sun.j2me.app-descriptor": {
    source: "iana",
    charset: "UTF-8",
    extensions: [
      "jad"
    ]
  },
  "text/vnd.trolltech.linguist": {
    source: "iana",
    charset: "UTF-8"
  },
  "text/vnd.wap.si": {
    source: "iana"
  },
  "text/vnd.wap.sl": {
    source: "iana"
  },
  "text/vnd.wap.wml": {
    source: "iana",
    extensions: [
      "wml"
    ]
  },
  "text/vnd.wap.wmlscript": {
    source: "iana",
    extensions: [
      "wmls"
    ]
  },
  "text/vtt": {
    source: "iana",
    charset: "UTF-8",
    compressible: !0,
    extensions: [
      "vtt"
    ]
  },
  "text/x-asm": {
    source: "apache",
    extensions: [
      "s",
      "asm"
    ]
  },
  "text/x-c": {
    source: "apache",
    extensions: [
      "c",
      "cc",
      "cxx",
      "cpp",
      "h",
      "hh",
      "dic"
    ]
  },
  "text/x-component": {
    source: "nginx",
    extensions: [
      "htc"
    ]
  },
  "text/x-fortran": {
    source: "apache",
    extensions: [
      "f",
      "for",
      "f77",
      "f90"
    ]
  },
  "text/x-gwt-rpc": {
    compressible: !0
  },
  "text/x-handlebars-template": {
    extensions: [
      "hbs"
    ]
  },
  "text/x-java-source": {
    source: "apache",
    extensions: [
      "java"
    ]
  },
  "text/x-jquery-tmpl": {
    compressible: !0
  },
  "text/x-lua": {
    extensions: [
      "lua"
    ]
  },
  "text/x-markdown": {
    compressible: !0,
    extensions: [
      "mkd"
    ]
  },
  "text/x-nfo": {
    source: "apache",
    extensions: [
      "nfo"
    ]
  },
  "text/x-opml": {
    source: "apache",
    extensions: [
      "opml"
    ]
  },
  "text/x-org": {
    compressible: !0,
    extensions: [
      "org"
    ]
  },
  "text/x-pascal": {
    source: "apache",
    extensions: [
      "p",
      "pas"
    ]
  },
  "text/x-processing": {
    compressible: !0,
    extensions: [
      "pde"
    ]
  },
  "text/x-sass": {
    extensions: [
      "sass"
    ]
  },
  "text/x-scss": {
    extensions: [
      "scss"
    ]
  },
  "text/x-setext": {
    source: "apache",
    extensions: [
      "etx"
    ]
  },
  "text/x-sfv": {
    source: "apache",
    extensions: [
      "sfv"
    ]
  },
  "text/x-suse-ymp": {
    compressible: !0,
    extensions: [
      "ymp"
    ]
  },
  "text/x-uuencode": {
    source: "apache",
    extensions: [
      "uu"
    ]
  },
  "text/x-vcalendar": {
    source: "apache",
    extensions: [
      "vcs"
    ]
  },
  "text/x-vcard": {
    source: "apache",
    extensions: [
      "vcf"
    ]
  },
  "text/xml": {
    source: "iana",
    compressible: !0,
    extensions: [
      "xml"
    ]
  },
  "text/xml-external-parsed-entity": {
    source: "iana"
  },
  "text/yaml": {
    compressible: !0,
    extensions: [
      "yaml",
      "yml"
    ]
  },
  "video/1d-interleaved-parityfec": {
    source: "iana"
  },
  "video/3gpp": {
    source: "iana",
    extensions: [
      "3gp",
      "3gpp"
    ]
  },
  "video/3gpp-tt": {
    source: "iana"
  },
  "video/3gpp2": {
    source: "iana",
    extensions: [
      "3g2"
    ]
  },
  "video/av1": {
    source: "iana"
  },
  "video/bmpeg": {
    source: "iana"
  },
  "video/bt656": {
    source: "iana"
  },
  "video/celb": {
    source: "iana"
  },
  "video/dv": {
    source: "iana"
  },
  "video/encaprtp": {
    source: "iana"
  },
  "video/ffv1": {
    source: "iana"
  },
  "video/flexfec": {
    source: "iana"
  },
  "video/h261": {
    source: "iana",
    extensions: [
      "h261"
    ]
  },
  "video/h263": {
    source: "iana",
    extensions: [
      "h263"
    ]
  },
  "video/h263-1998": {
    source: "iana"
  },
  "video/h263-2000": {
    source: "iana"
  },
  "video/h264": {
    source: "iana",
    extensions: [
      "h264"
    ]
  },
  "video/h264-rcdo": {
    source: "iana"
  },
  "video/h264-svc": {
    source: "iana"
  },
  "video/h265": {
    source: "iana"
  },
  "video/iso.segment": {
    source: "iana",
    extensions: [
      "m4s"
    ]
  },
  "video/jpeg": {
    source: "iana",
    extensions: [
      "jpgv"
    ]
  },
  "video/jpeg2000": {
    source: "iana"
  },
  "video/jpm": {
    source: "apache",
    extensions: [
      "jpm",
      "jpgm"
    ]
  },
  "video/jxsv": {
    source: "iana"
  },
  "video/mj2": {
    source: "iana",
    extensions: [
      "mj2",
      "mjp2"
    ]
  },
  "video/mp1s": {
    source: "iana"
  },
  "video/mp2p": {
    source: "iana"
  },
  "video/mp2t": {
    source: "iana",
    extensions: [
      "ts"
    ]
  },
  "video/mp4": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mp4",
      "mp4v",
      "mpg4"
    ]
  },
  "video/mp4v-es": {
    source: "iana"
  },
  "video/mpeg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "mpeg",
      "mpg",
      "mpe",
      "m1v",
      "m2v"
    ]
  },
  "video/mpeg4-generic": {
    source: "iana"
  },
  "video/mpv": {
    source: "iana"
  },
  "video/nv": {
    source: "iana"
  },
  "video/ogg": {
    source: "iana",
    compressible: !1,
    extensions: [
      "ogv"
    ]
  },
  "video/parityfec": {
    source: "iana"
  },
  "video/pointer": {
    source: "iana"
  },
  "video/quicktime": {
    source: "iana",
    compressible: !1,
    extensions: [
      "qt",
      "mov"
    ]
  },
  "video/raptorfec": {
    source: "iana"
  },
  "video/raw": {
    source: "iana"
  },
  "video/rtp-enc-aescm128": {
    source: "iana"
  },
  "video/rtploopback": {
    source: "iana"
  },
  "video/rtx": {
    source: "iana"
  },
  "video/scip": {
    source: "iana"
  },
  "video/smpte291": {
    source: "iana"
  },
  "video/smpte292m": {
    source: "iana"
  },
  "video/ulpfec": {
    source: "iana"
  },
  "video/vc1": {
    source: "iana"
  },
  "video/vc2": {
    source: "iana"
  },
  "video/vnd.cctv": {
    source: "iana"
  },
  "video/vnd.dece.hd": {
    source: "iana",
    extensions: [
      "uvh",
      "uvvh"
    ]
  },
  "video/vnd.dece.mobile": {
    source: "iana",
    extensions: [
      "uvm",
      "uvvm"
    ]
  },
  "video/vnd.dece.mp4": {
    source: "iana"
  },
  "video/vnd.dece.pd": {
    source: "iana",
    extensions: [
      "uvp",
      "uvvp"
    ]
  },
  "video/vnd.dece.sd": {
    source: "iana",
    extensions: [
      "uvs",
      "uvvs"
    ]
  },
  "video/vnd.dece.video": {
    source: "iana",
    extensions: [
      "uvv",
      "uvvv"
    ]
  },
  "video/vnd.directv.mpeg": {
    source: "iana"
  },
  "video/vnd.directv.mpeg-tts": {
    source: "iana"
  },
  "video/vnd.dlna.mpeg-tts": {
    source: "iana"
  },
  "video/vnd.dvb.file": {
    source: "iana",
    extensions: [
      "dvb"
    ]
  },
  "video/vnd.fvt": {
    source: "iana",
    extensions: [
      "fvt"
    ]
  },
  "video/vnd.hns.video": {
    source: "iana"
  },
  "video/vnd.iptvforum.1dparityfec-1010": {
    source: "iana"
  },
  "video/vnd.iptvforum.1dparityfec-2005": {
    source: "iana"
  },
  "video/vnd.iptvforum.2dparityfec-1010": {
    source: "iana"
  },
  "video/vnd.iptvforum.2dparityfec-2005": {
    source: "iana"
  },
  "video/vnd.iptvforum.ttsavc": {
    source: "iana"
  },
  "video/vnd.iptvforum.ttsmpeg2": {
    source: "iana"
  },
  "video/vnd.motorola.video": {
    source: "iana"
  },
  "video/vnd.motorola.videop": {
    source: "iana"
  },
  "video/vnd.mpegurl": {
    source: "iana",
    extensions: [
      "mxu",
      "m4u"
    ]
  },
  "video/vnd.ms-playready.media.pyv": {
    source: "iana",
    extensions: [
      "pyv"
    ]
  },
  "video/vnd.nokia.interleaved-multimedia": {
    source: "iana"
  },
  "video/vnd.nokia.mp4vr": {
    source: "iana"
  },
  "video/vnd.nokia.videovoip": {
    source: "iana"
  },
  "video/vnd.objectvideo": {
    source: "iana"
  },
  "video/vnd.radgamettools.bink": {
    source: "iana"
  },
  "video/vnd.radgamettools.smacker": {
    source: "iana"
  },
  "video/vnd.sealed.mpeg1": {
    source: "iana"
  },
  "video/vnd.sealed.mpeg4": {
    source: "iana"
  },
  "video/vnd.sealed.swf": {
    source: "iana"
  },
  "video/vnd.sealedmedia.softseal.mov": {
    source: "iana"
  },
  "video/vnd.uvvu.mp4": {
    source: "iana",
    extensions: [
      "uvu",
      "uvvu"
    ]
  },
  "video/vnd.vivo": {
    source: "iana",
    extensions: [
      "viv"
    ]
  },
  "video/vnd.youtube.yt": {
    source: "iana"
  },
  "video/vp8": {
    source: "iana"
  },
  "video/vp9": {
    source: "iana"
  },
  "video/webm": {
    source: "apache",
    compressible: !1,
    extensions: [
      "webm"
    ]
  },
  "video/x-f4v": {
    source: "apache",
    extensions: [
      "f4v"
    ]
  },
  "video/x-fli": {
    source: "apache",
    extensions: [
      "fli"
    ]
  },
  "video/x-flv": {
    source: "apache",
    compressible: !1,
    extensions: [
      "flv"
    ]
  },
  "video/x-m4v": {
    source: "apache",
    extensions: [
      "m4v"
    ]
  },
  "video/x-matroska": {
    source: "apache",
    compressible: !1,
    extensions: [
      "mkv",
      "mk3d",
      "mks"
    ]
  },
  "video/x-mng": {
    source: "apache",
    extensions: [
      "mng"
    ]
  },
  "video/x-ms-asf": {
    source: "apache",
    extensions: [
      "asf",
      "asx"
    ]
  },
  "video/x-ms-vob": {
    source: "apache",
    extensions: [
      "vob"
    ]
  },
  "video/x-ms-wm": {
    source: "apache",
    extensions: [
      "wm"
    ]
  },
  "video/x-ms-wmv": {
    source: "apache",
    compressible: !1,
    extensions: [
      "wmv"
    ]
  },
  "video/x-ms-wmx": {
    source: "apache",
    extensions: [
      "wmx"
    ]
  },
  "video/x-ms-wvx": {
    source: "apache",
    extensions: [
      "wvx"
    ]
  },
  "video/x-msvideo": {
    source: "apache",
    extensions: [
      "avi"
    ]
  },
  "video/x-sgi-movie": {
    source: "apache",
    extensions: [
      "movie"
    ]
  },
  "video/x-smv": {
    source: "apache",
    extensions: [
      "smv"
    ]
  },
  "x-conference/x-cooltalk": {
    source: "apache",
    extensions: [
      "ice"
    ]
  },
  "x-shader/x-fragment": {
    compressible: !0
  },
  "x-shader/x-vertex": {
    compressible: !0
  }
};
/*!
 * mime-db
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015-2022 Douglas Christopher Wilson
 * MIT Licensed
 */
var bt = ht;
/*!
 * mime-types
 * Copyright(c) 2014 Jonathan Ong
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */
(function(e) {
  var a = bt, n = Xa.extname, i = /^\s*([^;\s]*)(?:;|\s|$)/, o = /^text\//i;
  e.charset = t, e.charsets = { lookup: t }, e.contentType = s, e.extension = p, e.extensions = /* @__PURE__ */ Object.create(null), e.lookup = l, e.types = /* @__PURE__ */ Object.create(null), u(e.extensions, e.types);
  function t(r) {
    if (!r || typeof r != "string")
      return !1;
    var c = i.exec(r), m = c && a[c[1].toLowerCase()];
    return m && m.charset ? m.charset : c && o.test(c[1]) ? "UTF-8" : !1;
  }
  function s(r) {
    if (!r || typeof r != "string")
      return !1;
    var c = r.indexOf("/") === -1 ? e.lookup(r) : r;
    if (!c)
      return !1;
    if (c.indexOf("charset") === -1) {
      var m = e.charset(c);
      m && (c += "; charset=" + m.toLowerCase());
    }
    return c;
  }
  function p(r) {
    if (!r || typeof r != "string")
      return !1;
    var c = i.exec(r), m = c && e.extensions[c[1].toLowerCase()];
    return !m || !m.length ? !1 : m[0];
  }
  function l(r) {
    if (!r || typeof r != "string")
      return !1;
    var c = n("x." + r).toLowerCase().substr(1);
    return c && e.types[c] || !1;
  }
  function u(r, c) {
    var m = ["nginx", "apache", void 0, "iana"];
    Object.keys(a).forEach(function(f) {
      var x = a[f], v = x.extensions;
      if (!(!v || !v.length)) {
        r[f] = v;
        for (var g = 0; g < v.length; g++) {
          var y = v[g];
          if (c[y]) {
            var w = m.indexOf(a[c[y]].source), A = m.indexOf(x.source);
            if (c[y] !== "application/octet-stream" && (w > A || w === A && c[y].substr(0, 12) === "application/"))
              continue;
          }
          c[y] = f;
        }
      }
    });
  }
})(Oi);
var gt = yt;
function yt(e) {
  var a = typeof setImmediate == "function" ? setImmediate : typeof process == "object" && typeof process.nextTick == "function" ? process.nextTick : null;
  a ? a(e) : setTimeout(e, 0);
}
var kn = gt, Fi = wt;
function wt(e) {
  var a = !1;
  return kn(function() {
    a = !0;
  }), function(i, o) {
    a ? e(i, o) : kn(function() {
      e(i, o);
    });
  };
}
var Pi = _t;
function _t(e) {
  Object.keys(e.jobs).forEach(kt.bind(e)), e.jobs = {};
}
function kt(e) {
  typeof this.jobs[e] == "function" && this.jobs[e]();
}
var En = Fi, Et = Pi, qi = Rt;
function Rt(e, a, n, i) {
  var o = n.keyedList ? n.keyedList[n.index] : n.index;
  n.jobs[o] = St(a, o, e[o], function(t, s) {
    o in n.jobs && (delete n.jobs[o], t ? Et(n) : n.results[o] = s, i(t, n.results));
  });
}
function St(e, a, n, i) {
  var o;
  return e.length == 2 ? o = e(n, En(i)) : o = e(n, a, En(i)), o;
}
var Li = jt;
function jt(e, a) {
  var n = !Array.isArray(e), i = {
    index: 0,
    keyedList: n || a ? Object.keys(e) : null,
    jobs: {},
    results: n ? {} : [],
    size: n ? Object.keys(e).length : e.length
  };
  return a && i.keyedList.sort(n ? a : function(o, t) {
    return a(e[o], e[t]);
  }), i;
}
var At = Pi, Tt = Fi, Ui = Ct;
function Ct(e) {
  Object.keys(this.jobs).length && (this.index = this.size, At(this), Tt(e)(null, this.results));
}
var Ot = qi, Ft = Li, Pt = Ui, qt = Lt;
function Lt(e, a, n) {
  for (var i = Ft(e); i.index < (i.keyedList || e).length; )
    Ot(e, a, i, function(o, t) {
      if (o) {
        n(o, t);
        return;
      }
      if (Object.keys(i.jobs).length === 0) {
        n(null, i.results);
        return;
      }
    }), i.index++;
  return Pt.bind(i, n);
}
var ea = { exports: {} }, Rn = qi, Ut = Li, Bt = Ui;
ea.exports = zt;
ea.exports.ascending = Bi;
ea.exports.descending = Nt;
function zt(e, a, n, i) {
  var o = Ut(e, n);
  return Rn(e, a, o, function t(s, p) {
    if (s) {
      i(s, p);
      return;
    }
    if (o.index++, o.index < (o.keyedList || e).length) {
      Rn(e, a, o, t);
      return;
    }
    i(null, o.results);
  }), Bt.bind(o, i);
}
function Bi(e, a) {
  return e < a ? -1 : e > a ? 1 : 0;
}
function Nt(e, a) {
  return -1 * Bi(e, a);
}
var zi = ea.exports, It = zi, Dt = $t;
function $t(e, a, n) {
  return It(e, a, null, n);
}
var Mt = {
  parallel: qt,
  serial: Dt,
  serialOrdered: zi
}, Ni = Object, Ht = Error, Gt = EvalError, Vt = RangeError, Wt = ReferenceError, Jt = SyntaxError, pa, Sn;
function an() {
  return Sn || (Sn = 1, pa = TypeError), pa;
}
var Kt = URIError, Yt = Math.abs, Xt = Math.floor, Qt = Math.max, Zt = Math.min, es = Math.pow, as = Math.round, ns = Number.isNaN || function(a) {
  return a !== a;
}, is = ns, os = function(a) {
  return is(a) || a === 0 ? a : a < 0 ? -1 : 1;
}, ts = Object.getOwnPropertyDescriptor, Be = ts;
if (Be)
  try {
    Be([], "length");
  } catch {
    Be = null;
  }
var Ii = Be, ze = Object.defineProperty || !1;
if (ze)
  try {
    ze({}, "a", { value: 1 });
  } catch {
    ze = !1;
  }
var ss = ze, la, jn;
function Di() {
  return jn || (jn = 1, la = function() {
    if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
      return !1;
    if (typeof Symbol.iterator == "symbol")
      return !0;
    var a = {}, n = Symbol("test"), i = Object(n);
    if (typeof n == "string" || Object.prototype.toString.call(n) !== "[object Symbol]" || Object.prototype.toString.call(i) !== "[object Symbol]")
      return !1;
    var o = 42;
    a[n] = o;
    for (var t in a)
      return !1;
    if (typeof Object.keys == "function" && Object.keys(a).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(a).length !== 0)
      return !1;
    var s = Object.getOwnPropertySymbols(a);
    if (s.length !== 1 || s[0] !== n || !Object.prototype.propertyIsEnumerable.call(a, n))
      return !1;
    if (typeof Object.getOwnPropertyDescriptor == "function") {
      var p = (
        /** @type {PropertyDescriptor} */
        Object.getOwnPropertyDescriptor(a, n)
      );
      if (p.value !== o || p.enumerable !== !0)
        return !1;
    }
    return !0;
  }), la;
}
var ua, An;
function rs() {
  if (An) return ua;
  An = 1;
  var e = typeof Symbol < "u" && Symbol, a = Di();
  return ua = function() {
    return typeof e != "function" || typeof Symbol != "function" || typeof e("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : a();
  }, ua;
}
var da, Tn;
function $i() {
  return Tn || (Tn = 1, da = typeof Reflect < "u" && Reflect.getPrototypeOf || null), da;
}
var ma, Cn;
function Mi() {
  if (Cn) return ma;
  Cn = 1;
  var e = Ni;
  return ma = e.getPrototypeOf || null, ma;
}
var fa, On;
function cs() {
  if (On) return fa;
  On = 1;
  var e = "Function.prototype.bind called on incompatible ", a = Object.prototype.toString, n = Math.max, i = "[object Function]", o = function(l, u) {
    for (var r = [], c = 0; c < l.length; c += 1)
      r[c] = l[c];
    for (var m = 0; m < u.length; m += 1)
      r[m + l.length] = u[m];
    return r;
  }, t = function(l, u) {
    for (var r = [], c = u, m = 0; c < l.length; c += 1, m += 1)
      r[m] = l[c];
    return r;
  }, s = function(p, l) {
    for (var u = "", r = 0; r < p.length; r += 1)
      u += p[r], r + 1 < p.length && (u += l);
    return u;
  };
  return fa = function(l) {
    var u = this;
    if (typeof u != "function" || a.apply(u) !== i)
      throw new TypeError(e + u);
    for (var r = t(arguments, 1), c, m = function() {
      if (this instanceof c) {
        var g = u.apply(
          this,
          o(r, arguments)
        );
        return Object(g) === g ? g : this;
      }
      return u.apply(
        l,
        o(r, arguments)
      );
    }, h = n(0, u.length - r.length), f = [], x = 0; x < h; x++)
      f[x] = "$" + x;
    if (c = Function("binder", "return function (" + s(f, ",") + "){ return binder.apply(this,arguments); }")(m), u.prototype) {
      var v = function() {
      };
      v.prototype = u.prototype, c.prototype = new v(), v.prototype = null;
    }
    return c;
  }, fa;
}
var xa, Fn;
function aa() {
  if (Fn) return xa;
  Fn = 1;
  var e = cs();
  return xa = Function.prototype.bind || e, xa;
}
var va, Pn;
function nn() {
  return Pn || (Pn = 1, va = Function.prototype.call), va;
}
var ha, qn;
function Hi() {
  return qn || (qn = 1, ha = Function.prototype.apply), ha;
}
var ba, Ln;
function ps() {
  return Ln || (Ln = 1, ba = typeof Reflect < "u" && Reflect && Reflect.apply), ba;
}
var ga, Un;
function ls() {
  if (Un) return ga;
  Un = 1;
  var e = aa(), a = Hi(), n = nn(), i = ps();
  return ga = i || e.call(n, a), ga;
}
var ya, Bn;
function us() {
  if (Bn) return ya;
  Bn = 1;
  var e = aa(), a = an(), n = nn(), i = ls();
  return ya = function(t) {
    if (t.length < 1 || typeof t[0] != "function")
      throw new a("a function is required");
    return i(e, n, t);
  }, ya;
}
var wa, zn;
function ds() {
  if (zn) return wa;
  zn = 1;
  var e = us(), a = Ii, n;
  try {
    n = /** @type {{ __proto__?: typeof Array.prototype }} */
    [].__proto__ === Array.prototype;
  } catch (s) {
    if (!s || typeof s != "object" || !("code" in s) || s.code !== "ERR_PROTO_ACCESS")
      throw s;
  }
  var i = !!n && a && a(
    Object.prototype,
    /** @type {keyof typeof Object.prototype} */
    "__proto__"
  ), o = Object, t = o.getPrototypeOf;
  return wa = i && typeof i.get == "function" ? e([i.get]) : typeof t == "function" ? (
    /** @type {import('./get')} */
    function(p) {
      return t(p == null ? p : o(p));
    }
  ) : !1, wa;
}
var _a, Nn;
function ms() {
  if (Nn) return _a;
  Nn = 1;
  var e = $i(), a = Mi(), n = ds();
  return _a = e ? function(o) {
    return e(o);
  } : a ? function(o) {
    if (!o || typeof o != "object" && typeof o != "function")
      throw new TypeError("getProto: not an object");
    return a(o);
  } : n ? function(o) {
    return n(o);
  } : null, _a;
}
var ka, In;
function Gi() {
  if (In) return ka;
  In = 1;
  var e = Function.prototype.call, a = Object.prototype.hasOwnProperty, n = aa();
  return ka = n.call(e, a), ka;
}
var E, fs = Ni, xs = Ht, vs = Gt, hs = Vt, bs = Wt, fe = Jt, me = an(), gs = Kt, ys = Yt, ws = Xt, _s = Qt, ks = Zt, Es = es, Rs = as, Ss = os, Vi = Function, Ea = function(e) {
  try {
    return Vi('"use strict"; return (' + e + ").constructor;")();
  } catch {
  }
}, _e = Ii, js = ss, Ra = function() {
  throw new me();
}, As = _e ? function() {
  try {
    return arguments.callee, Ra;
  } catch {
    try {
      return _e(arguments, "callee").get;
    } catch {
      return Ra;
    }
  }
}() : Ra, pe = rs()(), O = ms(), Ts = Mi(), Cs = $i(), Wi = Hi(), Se = nn(), le = {}, Os = typeof Uint8Array > "u" || !O ? E : O(Uint8Array), ie = {
  __proto__: null,
  "%AggregateError%": typeof AggregateError > "u" ? E : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? E : ArrayBuffer,
  "%ArrayIteratorPrototype%": pe && O ? O([][Symbol.iterator]()) : E,
  "%AsyncFromSyncIteratorPrototype%": E,
  "%AsyncFunction%": le,
  "%AsyncGenerator%": le,
  "%AsyncGeneratorFunction%": le,
  "%AsyncIteratorPrototype%": le,
  "%Atomics%": typeof Atomics > "u" ? E : Atomics,
  "%BigInt%": typeof BigInt > "u" ? E : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? E : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? E : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? E : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": xs,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": vs,
  "%Float16Array%": typeof Float16Array > "u" ? E : Float16Array,
  "%Float32Array%": typeof Float32Array > "u" ? E : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? E : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? E : FinalizationRegistry,
  "%Function%": Vi,
  "%GeneratorFunction%": le,
  "%Int8Array%": typeof Int8Array > "u" ? E : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? E : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? E : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": pe && O ? O(O([][Symbol.iterator]())) : E,
  "%JSON%": typeof JSON == "object" ? JSON : E,
  "%Map%": typeof Map > "u" ? E : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !pe || !O ? E : O((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": fs,
  "%Object.getOwnPropertyDescriptor%": _e,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? E : Promise,
  "%Proxy%": typeof Proxy > "u" ? E : Proxy,
  "%RangeError%": hs,
  "%ReferenceError%": bs,
  "%Reflect%": typeof Reflect > "u" ? E : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? E : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !pe || !O ? E : O((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? E : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": pe && O ? O(""[Symbol.iterator]()) : E,
  "%Symbol%": pe ? Symbol : E,
  "%SyntaxError%": fe,
  "%ThrowTypeError%": As,
  "%TypedArray%": Os,
  "%TypeError%": me,
  "%Uint8Array%": typeof Uint8Array > "u" ? E : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? E : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? E : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? E : Uint32Array,
  "%URIError%": gs,
  "%WeakMap%": typeof WeakMap > "u" ? E : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? E : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? E : WeakSet,
  "%Function.prototype.call%": Se,
  "%Function.prototype.apply%": Wi,
  "%Object.defineProperty%": js,
  "%Object.getPrototypeOf%": Ts,
  "%Math.abs%": ys,
  "%Math.floor%": ws,
  "%Math.max%": _s,
  "%Math.min%": ks,
  "%Math.pow%": Es,
  "%Math.round%": Rs,
  "%Math.sign%": Ss,
  "%Reflect.getPrototypeOf%": Cs
};
if (O)
  try {
    null.error;
  } catch (e) {
    var Fs = O(O(e));
    ie["%Error.prototype%"] = Fs;
  }
var Ps = function e(a) {
  var n;
  if (a === "%AsyncFunction%")
    n = Ea("async function () {}");
  else if (a === "%GeneratorFunction%")
    n = Ea("function* () {}");
  else if (a === "%AsyncGeneratorFunction%")
    n = Ea("async function* () {}");
  else if (a === "%AsyncGenerator%") {
    var i = e("%AsyncGeneratorFunction%");
    i && (n = i.prototype);
  } else if (a === "%AsyncIteratorPrototype%") {
    var o = e("%AsyncGenerator%");
    o && O && (n = O(o.prototype));
  }
  return ie[a] = n, n;
}, Dn = {
  __proto__: null,
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, je = aa(), De = Gi(), qs = je.call(Se, Array.prototype.concat), Ls = je.call(Wi, Array.prototype.splice), $n = je.call(Se, String.prototype.replace), $e = je.call(Se, String.prototype.slice), Us = je.call(Se, RegExp.prototype.exec), Bs = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, zs = /\\(\\)?/g, Ns = function(a) {
  var n = $e(a, 0, 1), i = $e(a, -1);
  if (n === "%" && i !== "%")
    throw new fe("invalid intrinsic syntax, expected closing `%`");
  if (i === "%" && n !== "%")
    throw new fe("invalid intrinsic syntax, expected opening `%`");
  var o = [];
  return $n(a, Bs, function(t, s, p, l) {
    o[o.length] = p ? $n(l, zs, "$1") : s || t;
  }), o;
}, Is = function(a, n) {
  var i = a, o;
  if (De(Dn, i) && (o = Dn[i], i = "%" + o[0] + "%"), De(ie, i)) {
    var t = ie[i];
    if (t === le && (t = Ps(i)), typeof t > "u" && !n)
      throw new me("intrinsic " + a + " exists, but is not available. Please file an issue!");
    return {
      alias: o,
      name: i,
      value: t
    };
  }
  throw new fe("intrinsic " + a + " does not exist!");
}, Ds = function(a, n) {
  if (typeof a != "string" || a.length === 0)
    throw new me("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof n != "boolean")
    throw new me('"allowMissing" argument must be a boolean');
  if (Us(/^%?[^%]*%?$/, a) === null)
    throw new fe("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var i = Ns(a), o = i.length > 0 ? i[0] : "", t = Is("%" + o + "%", n), s = t.name, p = t.value, l = !1, u = t.alias;
  u && (o = u[0], Ls(i, qs([0, 1], u)));
  for (var r = 1, c = !0; r < i.length; r += 1) {
    var m = i[r], h = $e(m, 0, 1), f = $e(m, -1);
    if ((h === '"' || h === "'" || h === "`" || f === '"' || f === "'" || f === "`") && h !== f)
      throw new fe("property names with quotes must have matching quotes");
    if ((m === "constructor" || !c) && (l = !0), o += "." + m, s = "%" + o + "%", De(ie, s))
      p = ie[s];
    else if (p != null) {
      if (!(m in p)) {
        if (!n)
          throw new me("base intrinsic for " + a + " exists, but the property is not available.");
        return;
      }
      if (_e && r + 1 >= i.length) {
        var x = _e(p, m);
        c = !!x, c && "get" in x && !("originalValue" in x.get) ? p = x.get : p = p[m];
      } else
        c = De(p, m), p = p[m];
      c && !l && (ie[s] = p);
    }
  }
  return p;
}, Sa, Mn;
function $s() {
  if (Mn) return Sa;
  Mn = 1;
  var e = Di();
  return Sa = function() {
    return e() && !!Symbol.toStringTag;
  }, Sa;
}
var Ms = Ds, Hn = Ms("%Object.defineProperty%", !0), Hs = $s()(), Gs = Gi(), Vs = an(), Fe = Hs ? Symbol.toStringTag : null, Ws = function(a, n) {
  var i = arguments.length > 2 && !!arguments[2] && arguments[2].force, o = arguments.length > 2 && !!arguments[2] && arguments[2].nonConfigurable;
  if (typeof i < "u" && typeof i != "boolean" || typeof o < "u" && typeof o != "boolean")
    throw new Vs("if provided, the `overrideIfSet` and `nonConfigurable` options must be booleans");
  Fe && (i || !Gs(a, Fe)) && (Hn ? Hn(a, Fe, {
    configurable: !o,
    enumerable: !1,
    value: n,
    writable: !1
  }) : a[Fe] = n);
}, Js = function(e, a) {
  return Object.keys(a).forEach(function(n) {
    e[n] = e[n] || a[n];
  }), e;
}, on = vt, Ks = ve, ja = Xa, Ys = Qa, Xs = Za, Qs = Ke.parse, Zs = vi, er = $.Stream, Aa = Oi, ar = Mt, nr = Ws, Ia = Js, ir = R;
Ks.inherits(R, on);
function R(e) {
  if (!(this instanceof R))
    return new R(e);
  this._overheadLength = 0, this._valueLength = 0, this._valuesToMeasure = [], on.call(this), e = e || {};
  for (var a in e)
    this[a] = e[a];
}
R.LINE_BREAK = `\r
`;
R.DEFAULT_CONTENT_TYPE = "application/octet-stream";
R.prototype.append = function(e, a, n) {
  n = n || {}, typeof n == "string" && (n = { filename: n });
  var i = on.prototype.append.bind(this);
  if (typeof a == "number" && (a = "" + a), Array.isArray(a)) {
    this._error(new Error("Arrays are not supported."));
    return;
  }
  var o = this._multiPartHeader(e, a, n), t = this._multiPartFooter();
  i(o), i(a), i(t), this._trackLength(o, a, n);
};
R.prototype._trackLength = function(e, a, n) {
  var i = 0;
  n.knownLength != null ? i += +n.knownLength : Buffer.isBuffer(a) ? i = a.length : typeof a == "string" && (i = Buffer.byteLength(a)), this._valueLength += i, this._overheadLength += Buffer.byteLength(e) + R.LINE_BREAK.length, !(!a || !a.path && !(a.readable && Object.prototype.hasOwnProperty.call(a, "httpVersion")) && !(a instanceof er)) && (n.knownLength || this._valuesToMeasure.push(a));
};
R.prototype._lengthRetriever = function(e, a) {
  Object.prototype.hasOwnProperty.call(e, "fd") ? e.end != null && e.end != 1 / 0 && e.start != null ? a(null, e.end + 1 - (e.start ? e.start : 0)) : Zs.stat(e.path, function(n, i) {
    var o;
    if (n) {
      a(n);
      return;
    }
    o = i.size - (e.start ? e.start : 0), a(null, o);
  }) : Object.prototype.hasOwnProperty.call(e, "httpVersion") ? a(null, +e.headers["content-length"]) : Object.prototype.hasOwnProperty.call(e, "httpModule") ? (e.on("response", function(n) {
    e.pause(), a(null, +n.headers["content-length"]);
  }), e.resume()) : a("Unknown stream");
};
R.prototype._multiPartHeader = function(e, a, n) {
  if (typeof n.header == "string")
    return n.header;
  var i = this._getContentDisposition(a, n), o = this._getContentType(a, n), t = "", s = {
    // add custom disposition as third element or keep it two elements if not
    "Content-Disposition": ["form-data", 'name="' + e + '"'].concat(i || []),
    // if no content type. allow it to be empty array
    "Content-Type": [].concat(o || [])
  };
  typeof n.header == "object" && Ia(s, n.header);
  var p;
  for (var l in s)
    if (Object.prototype.hasOwnProperty.call(s, l)) {
      if (p = s[l], p == null)
        continue;
      Array.isArray(p) || (p = [p]), p.length && (t += l + ": " + p.join("; ") + R.LINE_BREAK);
    }
  return "--" + this.getBoundary() + R.LINE_BREAK + t + R.LINE_BREAK;
};
R.prototype._getContentDisposition = function(e, a) {
  var n, i;
  return typeof a.filepath == "string" ? n = ja.normalize(a.filepath).replace(/\\/g, "/") : a.filename || e.name || e.path ? n = ja.basename(a.filename || e.name || e.path) : e.readable && Object.prototype.hasOwnProperty.call(e, "httpVersion") && (n = ja.basename(e.client._httpMessage.path || "")), n && (i = 'filename="' + n + '"'), i;
};
R.prototype._getContentType = function(e, a) {
  var n = a.contentType;
  return !n && e.name && (n = Aa.lookup(e.name)), !n && e.path && (n = Aa.lookup(e.path)), !n && e.readable && Object.prototype.hasOwnProperty.call(e, "httpVersion") && (n = e.headers["content-type"]), !n && (a.filepath || a.filename) && (n = Aa.lookup(a.filepath || a.filename)), !n && typeof e == "object" && (n = R.DEFAULT_CONTENT_TYPE), n;
};
R.prototype._multiPartFooter = function() {
  return (function(e) {
    var a = R.LINE_BREAK, n = this._streams.length === 0;
    n && (a += this._lastBoundary()), e(a);
  }).bind(this);
};
R.prototype._lastBoundary = function() {
  return "--" + this.getBoundary() + "--" + R.LINE_BREAK;
};
R.prototype.getHeaders = function(e) {
  var a, n = {
    "content-type": "multipart/form-data; boundary=" + this.getBoundary()
  };
  for (a in e)
    Object.prototype.hasOwnProperty.call(e, a) && (n[a.toLowerCase()] = e[a]);
  return n;
};
R.prototype.setBoundary = function(e) {
  this._boundary = e;
};
R.prototype.getBoundary = function() {
  return this._boundary || this._generateBoundary(), this._boundary;
};
R.prototype.getBuffer = function() {
  for (var e = new Buffer.alloc(0), a = this.getBoundary(), n = 0, i = this._streams.length; n < i; n++)
    typeof this._streams[n] != "function" && (Buffer.isBuffer(this._streams[n]) ? e = Buffer.concat([e, this._streams[n]]) : e = Buffer.concat([e, Buffer.from(this._streams[n])]), (typeof this._streams[n] != "string" || this._streams[n].substring(2, a.length + 2) !== a) && (e = Buffer.concat([e, Buffer.from(R.LINE_BREAK)])));
  return Buffer.concat([e, Buffer.from(this._lastBoundary())]);
};
R.prototype._generateBoundary = function() {
  for (var e = "--------------------------", a = 0; a < 24; a++)
    e += Math.floor(Math.random() * 10).toString(16);
  this._boundary = e;
};
R.prototype.getLengthSync = function() {
  var e = this._overheadLength + this._valueLength;
  return this._streams.length && (e += this._lastBoundary().length), this.hasKnownLength() || this._error(new Error("Cannot calculate proper length in synchronous way.")), e;
};
R.prototype.hasKnownLength = function() {
  var e = !0;
  return this._valuesToMeasure.length && (e = !1), e;
};
R.prototype.getLength = function(e) {
  var a = this._overheadLength + this._valueLength;
  if (this._streams.length && (a += this._lastBoundary().length), !this._valuesToMeasure.length) {
    process.nextTick(e.bind(this, null, a));
    return;
  }
  ar.parallel(this._valuesToMeasure, this._lengthRetriever, function(n, i) {
    if (n) {
      e(n);
      return;
    }
    i.forEach(function(o) {
      a += o;
    }), e(null, a);
  });
};
R.prototype.submit = function(e, a) {
  var n, i, o = { method: "post" };
  return typeof e == "string" ? (e = Qs(e), i = Ia({
    port: e.port,
    path: e.pathname,
    host: e.hostname,
    protocol: e.protocol
  }, o)) : (i = Ia(e, o), i.port || (i.port = i.protocol == "https:" ? 443 : 80)), i.headers = this.getHeaders(e.headers), i.protocol == "https:" ? n = Xs.request(i) : n = Ys.request(i), this.getLength((function(t, s) {
    if (t && t !== "Unknown stream") {
      this._error(t);
      return;
    }
    if (s && n.setHeader("Content-Length", s), this.pipe(n), a) {
      var p, l = function(u, r) {
        return n.removeListener("error", l), n.removeListener("response", p), a.call(this, u, r);
      };
      p = l.bind(this, null), n.on("error", l), n.on("response", p);
    }
  }).bind(this)), n;
};
R.prototype._error = function(e) {
  this.error || (this.error = e, this.pause(), this.emit("error", e));
};
R.prototype.toString = function() {
  return "[object FormData]";
};
nr(R, "FormData");
const Ji = /* @__PURE__ */ Ai(ir);
function Da(e) {
  return d.isPlainObject(e) || d.isArray(e);
}
function Ki(e) {
  return d.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Gn(e, a, n) {
  return e ? e.concat(a).map(function(o, t) {
    return o = Ki(o), !n && t ? "[" + o + "]" : o;
  }).join(n ? "." : "") : a;
}
function or(e) {
  return d.isArray(e) && !e.some(Da);
}
const tr = d.toFlatObject(d, {}, null, function(a) {
  return /^is[A-Z]/.test(a);
});
function na(e, a, n) {
  if (!d.isObject(e))
    throw new TypeError("target must be an object");
  a = a || new (Ji || FormData)(), n = d.toFlatObject(n, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(x, v) {
    return !d.isUndefined(v[x]);
  });
  const i = n.metaTokens, o = n.visitor || r, t = n.dots, s = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && d.isSpecCompliantForm(a);
  if (!d.isFunction(o))
    throw new TypeError("visitor must be a function");
  function u(f) {
    if (f === null) return "";
    if (d.isDate(f))
      return f.toISOString();
    if (!l && d.isBlob(f))
      throw new b("Blob is not supported. Use a Buffer instead.");
    return d.isArrayBuffer(f) || d.isTypedArray(f) ? l && typeof Blob == "function" ? new Blob([f]) : Buffer.from(f) : f;
  }
  function r(f, x, v) {
    let g = f;
    if (f && !v && typeof f == "object") {
      if (d.endsWith(x, "{}"))
        x = i ? x : x.slice(0, -2), f = JSON.stringify(f);
      else if (d.isArray(f) && or(f) || (d.isFileList(f) || d.endsWith(x, "[]")) && (g = d.toArray(f)))
        return x = Ki(x), g.forEach(function(w, A) {
          !(d.isUndefined(w) || w === null) && a.append(
            // eslint-disable-next-line no-nested-ternary
            s === !0 ? Gn([x], A, t) : s === null ? x : x + "[]",
            u(w)
          );
        }), !1;
    }
    return Da(f) ? !0 : (a.append(Gn(v, x, t), u(f)), !1);
  }
  const c = [], m = Object.assign(tr, {
    defaultVisitor: r,
    convertValue: u,
    isVisitable: Da
  });
  function h(f, x) {
    if (!d.isUndefined(f)) {
      if (c.indexOf(f) !== -1)
        throw Error("Circular reference detected in " + x.join("."));
      c.push(f), d.forEach(f, function(g, y) {
        (!(d.isUndefined(g) || g === null) && o.call(
          a,
          g,
          d.isString(y) ? y.trim() : y,
          x,
          m
        )) === !0 && h(g, x ? x.concat(y) : [y]);
      }), c.pop();
    }
  }
  if (!d.isObject(e))
    throw new TypeError("data must be an object");
  return h(e), a;
}
function Vn(e) {
  const a = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(i) {
    return a[i];
  });
}
function Yi(e, a) {
  this._pairs = [], e && na(e, this, a);
}
const Xi = Yi.prototype;
Xi.append = function(a, n) {
  this._pairs.push([a, n]);
};
Xi.toString = function(a) {
  const n = a ? function(i) {
    return a.call(this, i, Vn);
  } : Vn;
  return this._pairs.map(function(o) {
    return n(o[0]) + "=" + n(o[1]);
  }, "").join("&");
};
function sr(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function tn(e, a, n) {
  if (!a)
    return e;
  const i = n && n.encode || sr;
  d.isFunction(n) && (n = {
    serialize: n
  });
  const o = n && n.serialize;
  let t;
  if (o ? t = o(a, n) : t = d.isURLSearchParams(a) ? a.toString() : new Yi(a, n).toString(i), t) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + t;
  }
  return e;
}
class Wn {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(a, n, i) {
    return this.handlers.push({
      fulfilled: a,
      rejected: n,
      synchronous: i ? i.synchronous : !1,
      runWhen: i ? i.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(a) {
    this.handlers[a] && (this.handlers[a] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(a) {
    d.forEach(this.handlers, function(i) {
      i !== null && a(i);
    });
  }
}
const sn = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rr = Ke.URLSearchParams, Ta = "abcdefghijklmnopqrstuvwxyz", Jn = "0123456789", Qi = {
  DIGIT: Jn,
  ALPHA: Ta,
  ALPHA_DIGIT: Ta + Ta.toUpperCase() + Jn
}, cr = (e = 16, a = Qi.ALPHA_DIGIT) => {
  let n = "";
  const { length: i } = a, o = new Uint32Array(e);
  Eo.randomFillSync(o);
  for (let t = 0; t < e; t++)
    n += a[o[t] % i];
  return n;
}, pr = {
  isNode: !0,
  classes: {
    URLSearchParams: rr,
    FormData: Ji,
    Blob: typeof Blob < "u" && Blob || null
  },
  ALPHABET: Qi,
  generateString: cr,
  protocols: ["http", "https", "file", "data"]
}, rn = typeof window < "u" && typeof document < "u", $a = typeof navigator == "object" && navigator || void 0, lr = rn && (!$a || ["ReactNative", "NativeScript", "NS"].indexOf($a.product) < 0), ur = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", dr = rn && window.location.href || "http://localhost", mr = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: rn,
  hasStandardBrowserEnv: lr,
  hasStandardBrowserWebWorkerEnv: ur,
  navigator: $a,
  origin: dr
}, Symbol.toStringTag, { value: "Module" })), T = {
  ...mr,
  ...pr
};
function fr(e, a) {
  return na(e, new T.classes.URLSearchParams(), Object.assign({
    visitor: function(n, i, o, t) {
      return T.isNode && d.isBuffer(n) ? (this.append(i, n.toString("base64")), !1) : t.defaultVisitor.apply(this, arguments);
    }
  }, a));
}
function xr(e) {
  return d.matchAll(/\w+|\[(\w*)]/g, e).map((a) => a[0] === "[]" ? "" : a[1] || a[0]);
}
function vr(e) {
  const a = {}, n = Object.keys(e);
  let i;
  const o = n.length;
  let t;
  for (i = 0; i < o; i++)
    t = n[i], a[t] = e[t];
  return a;
}
function Zi(e) {
  function a(n, i, o, t) {
    let s = n[t++];
    if (s === "__proto__") return !0;
    const p = Number.isFinite(+s), l = t >= n.length;
    return s = !s && d.isArray(o) ? o.length : s, l ? (d.hasOwnProp(o, s) ? o[s] = [o[s], i] : o[s] = i, !p) : ((!o[s] || !d.isObject(o[s])) && (o[s] = []), a(n, i, o[s], t) && d.isArray(o[s]) && (o[s] = vr(o[s])), !p);
  }
  if (d.isFormData(e) && d.isFunction(e.entries)) {
    const n = {};
    return d.forEachEntry(e, (i, o) => {
      a(xr(i), o, n, 0);
    }), n;
  }
  return null;
}
function hr(e, a, n) {
  if (d.isString(e))
    try {
      return (a || JSON.parse)(e), d.trim(e);
    } catch (i) {
      if (i.name !== "SyntaxError")
        throw i;
    }
  return (n || JSON.stringify)(e);
}
const Ae = {
  transitional: sn,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [function(a, n) {
    const i = n.getContentType() || "", o = i.indexOf("application/json") > -1, t = d.isObject(a);
    if (t && d.isHTMLForm(a) && (a = new FormData(a)), d.isFormData(a))
      return o ? JSON.stringify(Zi(a)) : a;
    if (d.isArrayBuffer(a) || d.isBuffer(a) || d.isStream(a) || d.isFile(a) || d.isBlob(a) || d.isReadableStream(a))
      return a;
    if (d.isArrayBufferView(a))
      return a.buffer;
    if (d.isURLSearchParams(a))
      return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), a.toString();
    let p;
    if (t) {
      if (i.indexOf("application/x-www-form-urlencoded") > -1)
        return fr(a, this.formSerializer).toString();
      if ((p = d.isFileList(a)) || i.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return na(
          p ? { "files[]": a } : a,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return t || o ? (n.setContentType("application/json", !1), hr(a)) : a;
  }],
  transformResponse: [function(a) {
    const n = this.transitional || Ae.transitional, i = n && n.forcedJSONParsing, o = this.responseType === "json";
    if (d.isResponse(a) || d.isReadableStream(a))
      return a;
    if (a && d.isString(a) && (i && !this.responseType || o)) {
      const s = !(n && n.silentJSONParsing) && o;
      try {
        return JSON.parse(a);
      } catch (p) {
        if (s)
          throw p.name === "SyntaxError" ? b.from(p, b.ERR_BAD_RESPONSE, this, null, this.response) : p;
      }
    }
    return a;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: T.classes.FormData,
    Blob: T.classes.Blob
  },
  validateStatus: function(a) {
    return a >= 200 && a < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
d.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Ae.headers[e] = {};
});
const br = d.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), gr = (e) => {
  const a = {};
  let n, i, o;
  return e && e.split(`
`).forEach(function(s) {
    o = s.indexOf(":"), n = s.substring(0, o).trim().toLowerCase(), i = s.substring(o + 1).trim(), !(!n || a[n] && br[n]) && (n === "set-cookie" ? a[n] ? a[n].push(i) : a[n] = [i] : a[n] = a[n] ? a[n] + ", " + i : i);
  }), a;
}, Kn = Symbol("internals");
function ge(e) {
  return e && String(e).trim().toLowerCase();
}
function Ne(e) {
  return e === !1 || e == null ? e : d.isArray(e) ? e.map(Ne) : String(e);
}
function yr(e) {
  const a = /* @__PURE__ */ Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let i;
  for (; i = n.exec(e); )
    a[i[1]] = i[2];
  return a;
}
const wr = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Ca(e, a, n, i, o) {
  if (d.isFunction(i))
    return i.call(this, a, n);
  if (o && (a = n), !!d.isString(a)) {
    if (d.isString(i))
      return a.indexOf(i) !== -1;
    if (d.isRegExp(i))
      return i.test(a);
  }
}
function _r(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (a, n, i) => n.toUpperCase() + i);
}
function kr(e, a) {
  const n = d.toCamelCase(" " + a);
  ["get", "set", "has"].forEach((i) => {
    Object.defineProperty(e, i + n, {
      value: function(o, t, s) {
        return this[i].call(this, a, o, t, s);
      },
      configurable: !0
    });
  });
}
let P = class {
  constructor(a) {
    a && this.set(a);
  }
  set(a, n, i) {
    const o = this;
    function t(p, l, u) {
      const r = ge(l);
      if (!r)
        throw new Error("header name must be a non-empty string");
      const c = d.findKey(o, r);
      (!c || o[c] === void 0 || u === !0 || u === void 0 && o[c] !== !1) && (o[c || l] = Ne(p));
    }
    const s = (p, l) => d.forEach(p, (u, r) => t(u, r, l));
    if (d.isPlainObject(a) || a instanceof this.constructor)
      s(a, n);
    else if (d.isString(a) && (a = a.trim()) && !wr(a))
      s(gr(a), n);
    else if (d.isObject(a) && d.isIterable(a)) {
      let p = {}, l, u;
      for (const r of a) {
        if (!d.isArray(r))
          throw TypeError("Object iterator must return a key-value pair");
        p[u = r[0]] = (l = p[u]) ? d.isArray(l) ? [...l, r[1]] : [l, r[1]] : r[1];
      }
      s(p, n);
    } else
      a != null && t(n, a, i);
    return this;
  }
  get(a, n) {
    if (a = ge(a), a) {
      const i = d.findKey(this, a);
      if (i) {
        const o = this[i];
        if (!n)
          return o;
        if (n === !0)
          return yr(o);
        if (d.isFunction(n))
          return n.call(this, o, i);
        if (d.isRegExp(n))
          return n.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(a, n) {
    if (a = ge(a), a) {
      const i = d.findKey(this, a);
      return !!(i && this[i] !== void 0 && (!n || Ca(this, this[i], i, n)));
    }
    return !1;
  }
  delete(a, n) {
    const i = this;
    let o = !1;
    function t(s) {
      if (s = ge(s), s) {
        const p = d.findKey(i, s);
        p && (!n || Ca(i, i[p], p, n)) && (delete i[p], o = !0);
      }
    }
    return d.isArray(a) ? a.forEach(t) : t(a), o;
  }
  clear(a) {
    const n = Object.keys(this);
    let i = n.length, o = !1;
    for (; i--; ) {
      const t = n[i];
      (!a || Ca(this, this[t], t, a, !0)) && (delete this[t], o = !0);
    }
    return o;
  }
  normalize(a) {
    const n = this, i = {};
    return d.forEach(this, (o, t) => {
      const s = d.findKey(i, t);
      if (s) {
        n[s] = Ne(o), delete n[t];
        return;
      }
      const p = a ? _r(t) : String(t).trim();
      p !== t && delete n[t], n[p] = Ne(o), i[p] = !0;
    }), this;
  }
  concat(...a) {
    return this.constructor.concat(this, ...a);
  }
  toJSON(a) {
    const n = /* @__PURE__ */ Object.create(null);
    return d.forEach(this, (i, o) => {
      i != null && i !== !1 && (n[o] = a && d.isArray(i) ? i.join(", ") : i);
    }), n;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([a, n]) => a + ": " + n).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(a) {
    return a instanceof this ? a : new this(a);
  }
  static concat(a, ...n) {
    const i = new this(a);
    return n.forEach((o) => i.set(o)), i;
  }
  static accessor(a) {
    const i = (this[Kn] = this[Kn] = {
      accessors: {}
    }).accessors, o = this.prototype;
    function t(s) {
      const p = ge(s);
      i[p] || (kr(o, s), i[p] = !0);
    }
    return d.isArray(a) ? a.forEach(t) : t(a), this;
  }
};
P.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
d.reduceDescriptors(P.prototype, ({ value: e }, a) => {
  let n = a[0].toUpperCase() + a.slice(1);
  return {
    get: () => e,
    set(i) {
      this[n] = i;
    }
  };
});
d.freezeMethods(P);
function Oa(e, a) {
  const n = this || Ae, i = a || n, o = P.from(i.headers);
  let t = i.data;
  return d.forEach(e, function(p) {
    t = p.call(n, t, o.normalize(), a ? a.status : void 0);
  }), o.normalize(), t;
}
function eo(e) {
  return !!(e && e.__CANCEL__);
}
function Z(e, a, n) {
  b.call(this, e ?? "canceled", b.ERR_CANCELED, a, n), this.name = "CanceledError";
}
d.inherits(Z, b, {
  __CANCEL__: !0
});
function ue(e, a, n) {
  const i = n.config.validateStatus;
  !n.status || !i || i(n.status) ? e(n) : a(new b(
    "Request failed with status code " + n.status,
    [b.ERR_BAD_REQUEST, b.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4],
    n.config,
    n.request,
    n
  ));
}
function Er(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Rr(e, a) {
  return a ? e.replace(/\/?\/$/, "") + "/" + a.replace(/^\/+/, "") : e;
}
function cn(e, a, n) {
  let i = !Er(a);
  return e && (i || n == !1) ? Rr(e, a) : a;
}
var ao = {}, Sr = Ke.parse, jr = {
  ftp: 21,
  gopher: 70,
  http: 80,
  https: 443,
  ws: 80,
  wss: 443
}, Ar = String.prototype.endsWith || function(e) {
  return e.length <= this.length && this.indexOf(e, this.length - e.length) !== -1;
};
function Tr(e) {
  var a = typeof e == "string" ? Sr(e) : e || {}, n = a.protocol, i = a.host, o = a.port;
  if (typeof i != "string" || !i || typeof n != "string" || (n = n.split(":", 1)[0], i = i.replace(/:\d*$/, ""), o = parseInt(o) || jr[n] || 0, !Cr(i, o)))
    return "";
  var t = de("npm_config_" + n + "_proxy") || de(n + "_proxy") || de("npm_config_proxy") || de("all_proxy");
  return t && t.indexOf("://") === -1 && (t = n + "://" + t), t;
}
function Cr(e, a) {
  var n = (de("npm_config_no_proxy") || de("no_proxy")).toLowerCase();
  return n ? n === "*" ? !1 : n.split(/[,\s]/).every(function(i) {
    if (!i)
      return !0;
    var o = i.match(/^(.+):(\d+)$/), t = o ? o[1] : i, s = o ? parseInt(o[2]) : 0;
    return s && s !== a ? !0 : /^[.*]/.test(t) ? (t.charAt(0) === "*" && (t = t.slice(1)), !Ar.call(e, t)) : e !== t;
  }) : !0;
}
function de(e) {
  return process.env[e.toLowerCase()] || process.env[e.toUpperCase()] || "";
}
ao.getProxyForUrl = Tr;
var pn = { exports: {} }, Pe = { exports: {} }, qe = { exports: {} }, Fa, Yn;
function Or() {
  if (Yn) return Fa;
  Yn = 1;
  var e = 1e3, a = e * 60, n = a * 60, i = n * 24, o = i * 7, t = i * 365.25;
  Fa = function(r, c) {
    c = c || {};
    var m = typeof r;
    if (m === "string" && r.length > 0)
      return s(r);
    if (m === "number" && isFinite(r))
      return c.long ? l(r) : p(r);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(r)
    );
  };
  function s(r) {
    if (r = String(r), !(r.length > 100)) {
      var c = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        r
      );
      if (c) {
        var m = parseFloat(c[1]), h = (c[2] || "ms").toLowerCase();
        switch (h) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return m * t;
          case "weeks":
          case "week":
          case "w":
            return m * o;
          case "days":
          case "day":
          case "d":
            return m * i;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return m * n;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return m * a;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return m * e;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return m;
          default:
            return;
        }
      }
    }
  }
  function p(r) {
    var c = Math.abs(r);
    return c >= i ? Math.round(r / i) + "d" : c >= n ? Math.round(r / n) + "h" : c >= a ? Math.round(r / a) + "m" : c >= e ? Math.round(r / e) + "s" : r + "ms";
  }
  function l(r) {
    var c = Math.abs(r);
    return c >= i ? u(r, c, i, "day") : c >= n ? u(r, c, n, "hour") : c >= a ? u(r, c, a, "minute") : c >= e ? u(r, c, e, "second") : r + " ms";
  }
  function u(r, c, m, h) {
    var f = c >= m * 1.5;
    return Math.round(r / m) + " " + h + (f ? "s" : "");
  }
  return Fa;
}
var Pa, Xn;
function no() {
  if (Xn) return Pa;
  Xn = 1;
  function e(a) {
    i.debug = i, i.default = i, i.coerce = u, i.disable = p, i.enable = t, i.enabled = l, i.humanize = Or(), i.destroy = r, Object.keys(a).forEach((c) => {
      i[c] = a[c];
    }), i.names = [], i.skips = [], i.formatters = {};
    function n(c) {
      let m = 0;
      for (let h = 0; h < c.length; h++)
        m = (m << 5) - m + c.charCodeAt(h), m |= 0;
      return i.colors[Math.abs(m) % i.colors.length];
    }
    i.selectColor = n;
    function i(c) {
      let m, h = null, f, x;
      function v(...g) {
        if (!v.enabled)
          return;
        const y = v, w = Number(/* @__PURE__ */ new Date()), A = w - (m || w);
        y.diff = A, y.prev = m, y.curr = w, m = w, g[0] = i.coerce(g[0]), typeof g[0] != "string" && g.unshift("%O");
        let S = 0;
        g[0] = g[0].replace(/%([a-zA-Z%])/g, (L, M) => {
          if (L === "%%")
            return "%";
          S++;
          const V = i.formatters[M];
          if (typeof V == "function") {
            const ce = g[S];
            L = V.call(y, ce), g.splice(S, 1), S--;
          }
          return L;
        }), i.formatArgs.call(y, g), (y.log || i.log).apply(y, g);
      }
      return v.namespace = c, v.useColors = i.useColors(), v.color = i.selectColor(c), v.extend = o, v.destroy = i.destroy, Object.defineProperty(v, "enabled", {
        enumerable: !0,
        configurable: !1,
        get: () => h !== null ? h : (f !== i.namespaces && (f = i.namespaces, x = i.enabled(c)), x),
        set: (g) => {
          h = g;
        }
      }), typeof i.init == "function" && i.init(v), v;
    }
    function o(c, m) {
      const h = i(this.namespace + (typeof m > "u" ? ":" : m) + c);
      return h.log = this.log, h;
    }
    function t(c) {
      i.save(c), i.namespaces = c, i.names = [], i.skips = [];
      const m = (typeof c == "string" ? c : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const h of m)
        h[0] === "-" ? i.skips.push(h.slice(1)) : i.names.push(h);
    }
    function s(c, m) {
      let h = 0, f = 0, x = -1, v = 0;
      for (; h < c.length; )
        if (f < m.length && (m[f] === c[h] || m[f] === "*"))
          m[f] === "*" ? (x = f, v = h, f++) : (h++, f++);
        else if (x !== -1)
          f = x + 1, v++, h = v;
        else
          return !1;
      for (; f < m.length && m[f] === "*"; )
        f++;
      return f === m.length;
    }
    function p() {
      const c = [
        ...i.names,
        ...i.skips.map((m) => "-" + m)
      ].join(",");
      return i.enable(""), c;
    }
    function l(c) {
      for (const m of i.skips)
        if (s(c, m))
          return !1;
      for (const m of i.names)
        if (s(c, m))
          return !0;
      return !1;
    }
    function u(c) {
      return c instanceof Error ? c.stack || c.message : c;
    }
    function r() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    return i.enable(i.load()), i;
  }
  return Pa = e, Pa;
}
var Qn;
function Fr() {
  return Qn || (Qn = 1, function(e, a) {
    a.formatArgs = i, a.save = o, a.load = t, a.useColors = n, a.storage = s(), a.destroy = /* @__PURE__ */ (() => {
      let l = !1;
      return () => {
        l || (l = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
      };
    })(), a.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function n() {
      if (typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs))
        return !0;
      if (typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))
        return !1;
      let l;
      return typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator < "u" && navigator.userAgent && (l = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(l[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function i(l) {
      if (l[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + l[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors)
        return;
      const u = "color: " + this.color;
      l.splice(1, 0, u, "color: inherit");
      let r = 0, c = 0;
      l[0].replace(/%[a-zA-Z%]/g, (m) => {
        m !== "%%" && (r++, m === "%c" && (c = r));
      }), l.splice(c, 0, u);
    }
    a.log = console.debug || console.log || (() => {
    });
    function o(l) {
      try {
        l ? a.storage.setItem("debug", l) : a.storage.removeItem("debug");
      } catch {
      }
    }
    function t() {
      let l;
      try {
        l = a.storage.getItem("debug") || a.storage.getItem("DEBUG");
      } catch {
      }
      return !l && typeof process < "u" && "env" in process && (l = process.env.DEBUG), l;
    }
    function s() {
      try {
        return localStorage;
      } catch {
      }
    }
    e.exports = no()(a);
    const { formatters: p } = e.exports;
    p.j = function(l) {
      try {
        return JSON.stringify(l);
      } catch (u) {
        return "[UnexpectedJSONParseError]: " + u.message;
      }
    };
  }(qe, qe.exports)), qe.exports;
}
var Le = { exports: {} }, qa, Zn;
function Pr() {
  return Zn || (Zn = 1, qa = (e, a = process.argv) => {
    const n = e.startsWith("-") ? "" : e.length === 1 ? "-" : "--", i = a.indexOf(n + e), o = a.indexOf("--");
    return i !== -1 && (o === -1 || i < o);
  }), qa;
}
var La, ei;
function qr() {
  if (ei) return La;
  ei = 1;
  const e = So, a = hi, n = Pr(), { env: i } = process;
  let o;
  n("no-color") || n("no-colors") || n("color=false") || n("color=never") ? o = 0 : (n("color") || n("colors") || n("color=true") || n("color=always")) && (o = 1), "FORCE_COLOR" in i && (i.FORCE_COLOR === "true" ? o = 1 : i.FORCE_COLOR === "false" ? o = 0 : o = i.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(i.FORCE_COLOR, 10), 3));
  function t(l) {
    return l === 0 ? !1 : {
      level: l,
      hasBasic: !0,
      has256: l >= 2,
      has16m: l >= 3
    };
  }
  function s(l, u) {
    if (o === 0)
      return 0;
    if (n("color=16m") || n("color=full") || n("color=truecolor"))
      return 3;
    if (n("color=256"))
      return 2;
    if (l && !u && o === void 0)
      return 0;
    const r = o || 0;
    if (i.TERM === "dumb")
      return r;
    if (process.platform === "win32") {
      const c = e.release().split(".");
      return Number(c[0]) >= 10 && Number(c[2]) >= 10586 ? Number(c[2]) >= 14931 ? 3 : 2 : 1;
    }
    if ("CI" in i)
      return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((c) => c in i) || i.CI_NAME === "codeship" ? 1 : r;
    if ("TEAMCITY_VERSION" in i)
      return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(i.TEAMCITY_VERSION) ? 1 : 0;
    if (i.COLORTERM === "truecolor")
      return 3;
    if ("TERM_PROGRAM" in i) {
      const c = parseInt((i.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
      switch (i.TERM_PROGRAM) {
        case "iTerm.app":
          return c >= 3 ? 3 : 2;
        case "Apple_Terminal":
          return 2;
      }
    }
    return /-256(color)?$/i.test(i.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(i.TERM) || "COLORTERM" in i ? 1 : r;
  }
  function p(l) {
    const u = s(l, l && l.isTTY);
    return t(u);
  }
  return La = {
    supportsColor: p,
    stdout: t(s(!0, a.isatty(1))),
    stderr: t(s(!0, a.isatty(2)))
  }, La;
}
var ai;
function Lr() {
  return ai || (ai = 1, function(e, a) {
    const n = hi, i = ve;
    a.init = r, a.log = p, a.formatArgs = t, a.save = l, a.load = u, a.useColors = o, a.destroy = i.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    ), a.colors = [6, 2, 3, 4, 5, 1];
    try {
      const m = qr();
      m && (m.stderr || m).level >= 2 && (a.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221
      ]);
    } catch {
    }
    a.inspectOpts = Object.keys(process.env).filter((m) => /^debug_/i.test(m)).reduce((m, h) => {
      const f = h.substring(6).toLowerCase().replace(/_([a-z])/g, (v, g) => g.toUpperCase());
      let x = process.env[h];
      return /^(yes|on|true|enabled)$/i.test(x) ? x = !0 : /^(no|off|false|disabled)$/i.test(x) ? x = !1 : x === "null" ? x = null : x = Number(x), m[f] = x, m;
    }, {});
    function o() {
      return "colors" in a.inspectOpts ? !!a.inspectOpts.colors : n.isatty(process.stderr.fd);
    }
    function t(m) {
      const { namespace: h, useColors: f } = this;
      if (f) {
        const x = this.color, v = "\x1B[3" + (x < 8 ? x : "8;5;" + x), g = `  ${v};1m${h} \x1B[0m`;
        m[0] = g + m[0].split(`
`).join(`
` + g), m.push(v + "m+" + e.exports.humanize(this.diff) + "\x1B[0m");
      } else
        m[0] = s() + h + " " + m[0];
    }
    function s() {
      return a.inspectOpts.hideDate ? "" : (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function p(...m) {
      return process.stderr.write(i.formatWithOptions(a.inspectOpts, ...m) + `
`);
    }
    function l(m) {
      m ? process.env.DEBUG = m : delete process.env.DEBUG;
    }
    function u() {
      return process.env.DEBUG;
    }
    function r(m) {
      m.inspectOpts = {};
      const h = Object.keys(a.inspectOpts);
      for (let f = 0; f < h.length; f++)
        m.inspectOpts[h[f]] = a.inspectOpts[h[f]];
    }
    e.exports = no()(a);
    const { formatters: c } = e.exports;
    c.o = function(m) {
      return this.inspectOpts.colors = this.useColors, i.inspect(m, this.inspectOpts).split(`
`).map((h) => h.trim()).join(" ");
    }, c.O = function(m) {
      return this.inspectOpts.colors = this.useColors, i.inspect(m, this.inspectOpts);
    };
  }(Le, Le.exports)), Le.exports;
}
var ni;
function Ur() {
  return ni || (ni = 1, typeof process > "u" || process.type === "renderer" || process.browser === !0 || process.__nwjs ? Pe.exports = Fr() : Pe.exports = Lr()), Pe.exports;
}
var ye, Br = function() {
  if (!ye) {
    try {
      ye = Ur()("follow-redirects");
    } catch {
    }
    typeof ye != "function" && (ye = function() {
    });
  }
  ye.apply(null, arguments);
}, Te = Ke, ke = Te.URL, zr = Qa, Nr = Za, ln = $.Writable, un = Ro, io = Br;
(function() {
  var a = typeof process < "u", n = typeof window < "u" && typeof document < "u", i = se(Error.captureStackTrace);
  !a && (n || !i) && console.warn("The follow-redirects package should be excluded from browser builds.");
})();
var dn = !1;
try {
  un(new ke(""));
} catch (e) {
  dn = e.code === "ERR_INVALID_URL";
}
var Ir = [
  "auth",
  "host",
  "hostname",
  "href",
  "path",
  "pathname",
  "port",
  "protocol",
  "query",
  "search",
  "hash"
], mn = ["abort", "aborted", "connect", "error", "socket", "timeout"], fn = /* @__PURE__ */ Object.create(null);
mn.forEach(function(e) {
  fn[e] = function(a, n, i) {
    this._redirectable.emit(e, a, n, i);
  };
});
var Ma = Ce(
  "ERR_INVALID_URL",
  "Invalid URL",
  TypeError
), Ha = Ce(
  "ERR_FR_REDIRECTION_FAILURE",
  "Redirected request failed"
), Dr = Ce(
  "ERR_FR_TOO_MANY_REDIRECTS",
  "Maximum number of redirects exceeded",
  Ha
), $r = Ce(
  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
  "Request body larger than maxBodyLength limit"
), Mr = Ce(
  "ERR_STREAM_WRITE_AFTER_END",
  "write after end"
), Hr = ln.prototype.destroy || to;
function N(e, a) {
  ln.call(this), this._sanitizeOptions(e), this._options = e, this._ended = !1, this._ending = !1, this._redirectCount = 0, this._redirects = [], this._requestBodyLength = 0, this._requestBodyBuffers = [], a && this.on("response", a);
  var n = this;
  this._onNativeResponse = function(i) {
    try {
      n._processResponse(i);
    } catch (o) {
      n.emit("error", o instanceof Ha ? o : new Ha({ cause: o }));
    }
  }, this._performRequest();
}
N.prototype = Object.create(ln.prototype);
N.prototype.abort = function() {
  vn(this._currentRequest), this._currentRequest.abort(), this.emit("abort");
};
N.prototype.destroy = function(e) {
  return vn(this._currentRequest, e), Hr.call(this, e), this;
};
N.prototype.write = function(e, a, n) {
  if (this._ending)
    throw new Mr();
  if (!oe(e) && !Wr(e))
    throw new TypeError("data should be a string, Buffer or Uint8Array");
  if (se(a) && (n = a, a = null), e.length === 0) {
    n && n();
    return;
  }
  this._requestBodyLength + e.length <= this._options.maxBodyLength ? (this._requestBodyLength += e.length, this._requestBodyBuffers.push({ data: e, encoding: a }), this._currentRequest.write(e, a, n)) : (this.emit("error", new $r()), this.abort());
};
N.prototype.end = function(e, a, n) {
  if (se(e) ? (n = e, e = a = null) : se(a) && (n = a, a = null), !e)
    this._ended = this._ending = !0, this._currentRequest.end(null, null, n);
  else {
    var i = this, o = this._currentRequest;
    this.write(e, a, function() {
      i._ended = !0, o.end(null, null, n);
    }), this._ending = !0;
  }
};
N.prototype.setHeader = function(e, a) {
  this._options.headers[e] = a, this._currentRequest.setHeader(e, a);
};
N.prototype.removeHeader = function(e) {
  delete this._options.headers[e], this._currentRequest.removeHeader(e);
};
N.prototype.setTimeout = function(e, a) {
  var n = this;
  function i(s) {
    s.setTimeout(e), s.removeListener("timeout", s.destroy), s.addListener("timeout", s.destroy);
  }
  function o(s) {
    n._timeout && clearTimeout(n._timeout), n._timeout = setTimeout(function() {
      n.emit("timeout"), t();
    }, e), i(s);
  }
  function t() {
    n._timeout && (clearTimeout(n._timeout), n._timeout = null), n.removeListener("abort", t), n.removeListener("error", t), n.removeListener("response", t), n.removeListener("close", t), a && n.removeListener("timeout", a), n.socket || n._currentRequest.removeListener("socket", o);
  }
  return a && this.on("timeout", a), this.socket ? o(this.socket) : this._currentRequest.once("socket", o), this.on("socket", i), this.on("abort", t), this.on("error", t), this.on("response", t), this.on("close", t), this;
};
[
  "flushHeaders",
  "getHeader",
  "setNoDelay",
  "setSocketKeepAlive"
].forEach(function(e) {
  N.prototype[e] = function(a, n) {
    return this._currentRequest[e](a, n);
  };
});
["aborted", "connection", "socket"].forEach(function(e) {
  Object.defineProperty(N.prototype, e, {
    get: function() {
      return this._currentRequest[e];
    }
  });
});
N.prototype._sanitizeOptions = function(e) {
  if (e.headers || (e.headers = {}), e.host && (e.hostname || (e.hostname = e.host), delete e.host), !e.pathname && e.path) {
    var a = e.path.indexOf("?");
    a < 0 ? e.pathname = e.path : (e.pathname = e.path.substring(0, a), e.search = e.path.substring(a));
  }
};
N.prototype._performRequest = function() {
  var e = this._options.protocol, a = this._options.nativeProtocols[e];
  if (!a)
    throw new TypeError("Unsupported protocol " + e);
  if (this._options.agents) {
    var n = e.slice(0, -1);
    this._options.agent = this._options.agents[n];
  }
  var i = this._currentRequest = a.request(this._options, this._onNativeResponse);
  i._redirectable = this;
  for (var o of mn)
    i.on(o, fn[o]);
  if (this._currentUrl = /^\//.test(this._options.path) ? Te.format(this._options) : (
    // When making a request to a proxy, […]
    // a client MUST send the target URI in absolute-form […].
    this._options.path
  ), this._isRedirect) {
    var t = 0, s = this, p = this._requestBodyBuffers;
    (function l(u) {
      if (i === s._currentRequest)
        if (u)
          s.emit("error", u);
        else if (t < p.length) {
          var r = p[t++];
          i.finished || i.write(r.data, r.encoding, l);
        } else s._ended && i.end();
    })();
  }
};
N.prototype._processResponse = function(e) {
  var a = e.statusCode;
  this._options.trackRedirects && this._redirects.push({
    url: this._currentUrl,
    headers: e.headers,
    statusCode: a
  });
  var n = e.headers.location;
  if (!n || this._options.followRedirects === !1 || a < 300 || a >= 400) {
    e.responseUrl = this._currentUrl, e.redirects = this._redirects, this.emit("response", e), this._requestBodyBuffers = [];
    return;
  }
  if (vn(this._currentRequest), e.destroy(), ++this._redirectCount > this._options.maxRedirects)
    throw new Dr();
  var i, o = this._options.beforeRedirect;
  o && (i = Object.assign({
    // The Host header was set by nativeProtocol.request
    Host: e.req.getHeader("host")
  }, this._options.headers));
  var t = this._options.method;
  ((a === 301 || a === 302) && this._options.method === "POST" || // RFC7231§6.4.4: The 303 (See Other) status code indicates that
  // the server is redirecting the user agent to a different resource […]
  // A user agent can perform a retrieval request targeting that URI
  // (a GET or HEAD request if using HTTP) […]
  a === 303 && !/^(?:GET|HEAD)$/.test(this._options.method)) && (this._options.method = "GET", this._requestBodyBuffers = [], Ua(/^content-/i, this._options.headers));
  var s = Ua(/^host$/i, this._options.headers), p = xn(this._currentUrl), l = s || p.host, u = /^\w+:/.test(n) ? this._currentUrl : Te.format(Object.assign(p, { host: l })), r = Gr(n, u);
  if (io("redirecting to", r.href), this._isRedirect = !0, Ga(r, this._options), (r.protocol !== p.protocol && r.protocol !== "https:" || r.host !== l && !Vr(r.host, l)) && Ua(/^(?:(?:proxy-)?authorization|cookie)$/i, this._options.headers), se(o)) {
    var c = {
      headers: e.headers,
      statusCode: a
    }, m = {
      url: u,
      method: t,
      headers: i
    };
    o(this._options, c, m), this._sanitizeOptions(this._options);
  }
  this._performRequest();
};
function oo(e) {
  var a = {
    maxRedirects: 21,
    maxBodyLength: 10485760
  }, n = {};
  return Object.keys(e).forEach(function(i) {
    var o = i + ":", t = n[o] = e[i], s = a[i] = Object.create(t);
    function p(u, r, c) {
      return Jr(u) ? u = Ga(u) : oe(u) ? u = Ga(xn(u)) : (c = r, r = so(u), u = { protocol: o }), se(r) && (c = r, r = null), r = Object.assign({
        maxRedirects: a.maxRedirects,
        maxBodyLength: a.maxBodyLength
      }, u, r), r.nativeProtocols = n, !oe(r.host) && !oe(r.hostname) && (r.hostname = "::1"), un.equal(r.protocol, o, "protocol mismatch"), io("options", r), new N(r, c);
    }
    function l(u, r, c) {
      var m = s.request(u, r, c);
      return m.end(), m;
    }
    Object.defineProperties(s, {
      request: { value: p, configurable: !0, enumerable: !0, writable: !0 },
      get: { value: l, configurable: !0, enumerable: !0, writable: !0 }
    });
  }), a;
}
function to() {
}
function xn(e) {
  var a;
  if (dn)
    a = new ke(e);
  else if (a = so(Te.parse(e)), !oe(a.protocol))
    throw new Ma({ input: e });
  return a;
}
function Gr(e, a) {
  return dn ? new ke(e, a) : xn(Te.resolve(a, e));
}
function so(e) {
  if (/^\[/.test(e.hostname) && !/^\[[:0-9a-f]+\]$/i.test(e.hostname))
    throw new Ma({ input: e.href || e });
  if (/^\[/.test(e.host) && !/^\[[:0-9a-f]+\](:\d+)?$/i.test(e.host))
    throw new Ma({ input: e.href || e });
  return e;
}
function Ga(e, a) {
  var n = a || {};
  for (var i of Ir)
    n[i] = e[i];
  return n.hostname.startsWith("[") && (n.hostname = n.hostname.slice(1, -1)), n.port !== "" && (n.port = Number(n.port)), n.path = n.search ? n.pathname + n.search : n.pathname, n;
}
function Ua(e, a) {
  var n;
  for (var i in a)
    e.test(i) && (n = a[i], delete a[i]);
  return n === null || typeof n > "u" ? void 0 : String(n).trim();
}
function Ce(e, a, n) {
  function i(o) {
    se(Error.captureStackTrace) && Error.captureStackTrace(this, this.constructor), Object.assign(this, o || {}), this.code = e, this.message = this.cause ? a + ": " + this.cause.message : a;
  }
  return i.prototype = new (n || Error)(), Object.defineProperties(i.prototype, {
    constructor: {
      value: i,
      enumerable: !1
    },
    name: {
      value: "Error [" + e + "]",
      enumerable: !1
    }
  }), i;
}
function vn(e, a) {
  for (var n of mn)
    e.removeListener(n, fn[n]);
  e.on("error", to), e.destroy(a);
}
function Vr(e, a) {
  un(oe(e) && oe(a));
  var n = e.length - a.length - 1;
  return n > 0 && e[n] === "." && e.endsWith(a);
}
function oe(e) {
  return typeof e == "string" || e instanceof String;
}
function se(e) {
  return typeof e == "function";
}
function Wr(e) {
  return typeof e == "object" && "length" in e;
}
function Jr(e) {
  return ke && e instanceof ke;
}
pn.exports = oo({ http: zr, https: Nr });
pn.exports.wrap = oo;
var Kr = pn.exports;
const Yr = /* @__PURE__ */ Ai(Kr), Me = "1.9.0";
function ro(e) {
  const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return a && a[1] || "";
}
const Xr = /^(?:([^;]+);)?(?:[^;]+;)?(base64|),([\s\S]*)$/;
function Qr(e, a, n) {
  const i = n && n.Blob || T.classes.Blob, o = ro(e);
  if (a === void 0 && i && (a = !0), o === "data") {
    e = o.length ? e.slice(o.length + 1) : e;
    const t = Xr.exec(e);
    if (!t)
      throw new b("Invalid URL", b.ERR_INVALID_URL);
    const s = t[1], p = t[2], l = t[3], u = Buffer.from(decodeURIComponent(l), p ? "base64" : "utf8");
    if (a) {
      if (!i)
        throw new b("Blob is not supported", b.ERR_NOT_SUPPORT);
      return new i([u], { type: s });
    }
    return u;
  }
  throw new b("Unsupported protocol " + o, b.ERR_NOT_SUPPORT);
}
const Ba = Symbol("internals");
class ii extends $.Transform {
  constructor(a) {
    a = d.toFlatObject(a, {
      maxRate: 0,
      chunkSize: 64 * 1024,
      minChunkSize: 100,
      timeWindow: 500,
      ticksRate: 2,
      samplesCount: 15
    }, null, (i, o) => !d.isUndefined(o[i])), super({
      readableHighWaterMark: a.chunkSize
    });
    const n = this[Ba] = {
      timeWindow: a.timeWindow,
      chunkSize: a.chunkSize,
      maxRate: a.maxRate,
      minChunkSize: a.minChunkSize,
      bytesSeen: 0,
      isCaptured: !1,
      notifiedBytesLoaded: 0,
      ts: Date.now(),
      bytes: 0,
      onReadCallback: null
    };
    this.on("newListener", (i) => {
      i === "progress" && (n.isCaptured || (n.isCaptured = !0));
    });
  }
  _read(a) {
    const n = this[Ba];
    return n.onReadCallback && n.onReadCallback(), super._read(a);
  }
  _transform(a, n, i) {
    const o = this[Ba], t = o.maxRate, s = this.readableHighWaterMark, p = o.timeWindow, l = 1e3 / p, u = t / l, r = o.minChunkSize !== !1 ? Math.max(o.minChunkSize, u * 0.01) : 0, c = (h, f) => {
      const x = Buffer.byteLength(h);
      o.bytesSeen += x, o.bytes += x, o.isCaptured && this.emit("progress", o.bytesSeen), this.push(h) ? process.nextTick(f) : o.onReadCallback = () => {
        o.onReadCallback = null, process.nextTick(f);
      };
    }, m = (h, f) => {
      const x = Buffer.byteLength(h);
      let v = null, g = s, y, w = 0;
      if (t) {
        const A = Date.now();
        (!o.ts || (w = A - o.ts) >= p) && (o.ts = A, y = u - o.bytes, o.bytes = y < 0 ? -y : 0, w = 0), y = u - o.bytes;
      }
      if (t) {
        if (y <= 0)
          return setTimeout(() => {
            f(null, h);
          }, p - w);
        y < g && (g = y);
      }
      g && x > g && x - g > r && (v = h.subarray(g), h = h.subarray(0, g)), c(h, v ? () => {
        process.nextTick(f, null, v);
      } : f);
    };
    m(a, function h(f, x) {
      if (f)
        return i(f);
      x ? m(x, h) : i(null);
    });
  }
}
const { asyncIterator: oi } = Symbol, co = async function* (e) {
  e.stream ? yield* e.stream() : e.arrayBuffer ? yield await e.arrayBuffer() : e[oi] ? yield* e[oi]() : yield e;
}, Zr = T.ALPHABET.ALPHA_DIGIT + "-_", Ee = typeof TextEncoder == "function" ? new TextEncoder() : new ve.TextEncoder(), ne = `\r
`, ec = Ee.encode(ne), ac = 2;
class nc {
  constructor(a, n) {
    const { escapeName: i } = this.constructor, o = d.isString(n);
    let t = `Content-Disposition: form-data; name="${i(a)}"${!o && n.name ? `; filename="${i(n.name)}"` : ""}${ne}`;
    o ? n = Ee.encode(String(n).replace(/\r?\n|\r\n?/g, ne)) : t += `Content-Type: ${n.type || "application/octet-stream"}${ne}`, this.headers = Ee.encode(t + ne), this.contentLength = o ? n.byteLength : n.size, this.size = this.headers.byteLength + this.contentLength + ac, this.name = a, this.value = n;
  }
  async *encode() {
    yield this.headers;
    const { value: a } = this;
    d.isTypedArray(a) ? yield a : yield* co(a), yield ec;
  }
  static escapeName(a) {
    return String(a).replace(/[\r\n"]/g, (n) => ({
      "\r": "%0D",
      "\n": "%0A",
      '"': "%22"
    })[n]);
  }
}
const ic = (e, a, n) => {
  const {
    tag: i = "form-data-boundary",
    size: o = 25,
    boundary: t = i + "-" + T.generateString(o, Zr)
  } = n || {};
  if (!d.isFormData(e))
    throw TypeError("FormData instance required");
  if (t.length < 1 || t.length > 70)
    throw Error("boundary must be 10-70 characters long");
  const s = Ee.encode("--" + t + ne), p = Ee.encode("--" + t + "--" + ne);
  let l = p.byteLength;
  const u = Array.from(e.entries()).map(([c, m]) => {
    const h = new nc(c, m);
    return l += h.size, h;
  });
  l += s.byteLength * u.length, l = d.toFiniteNumber(l);
  const r = {
    "Content-Type": `multipart/form-data; boundary=${t}`
  };
  return Number.isFinite(l) && (r["Content-Length"] = l), a && a(r), ko.from(async function* () {
    for (const c of u)
      yield s, yield* c.encode();
    yield p;
  }());
};
class oc extends $.Transform {
  __transform(a, n, i) {
    this.push(a), i();
  }
  _transform(a, n, i) {
    if (a.length !== 0 && (this._transform = this.__transform, a[0] !== 120)) {
      const o = Buffer.alloc(2);
      o[0] = 120, o[1] = 156, this.push(o, n);
    }
    this.__transform(a, n, i);
  }
}
const tc = (e, a) => d.isAsyncFn(e) ? function(...n) {
  const i = n.pop();
  e.apply(this, n).then((o) => {
    try {
      a ? i(null, ...a(o)) : i(null, o);
    } catch (t) {
      i(t);
    }
  }, i);
} : e;
function sc(e, a) {
  e = e || 10;
  const n = new Array(e), i = new Array(e);
  let o = 0, t = 0, s;
  return a = a !== void 0 ? a : 1e3, function(l) {
    const u = Date.now(), r = i[t];
    s || (s = u), n[o] = l, i[o] = u;
    let c = t, m = 0;
    for (; c !== o; )
      m += n[c++], c = c % e;
    if (o = (o + 1) % e, o === t && (t = (t + 1) % e), u - s < a)
      return;
    const h = r && u - r;
    return h ? Math.round(m * 1e3 / h) : void 0;
  };
}
function rc(e, a) {
  let n = 0, i = 1e3 / a, o, t;
  const s = (u, r = Date.now()) => {
    n = r, o = null, t && (clearTimeout(t), t = null), e.apply(null, u);
  };
  return [(...u) => {
    const r = Date.now(), c = r - n;
    c >= i ? s(u, r) : (o = u, t || (t = setTimeout(() => {
      t = null, s(o);
    }, i - c)));
  }, () => o && s(o)];
}
const xe = (e, a, n = 3) => {
  let i = 0;
  const o = sc(50, 250);
  return rc((t) => {
    const s = t.loaded, p = t.lengthComputable ? t.total : void 0, l = s - i, u = o(l), r = s <= p;
    i = s;
    const c = {
      loaded: s,
      total: p,
      progress: p ? s / p : void 0,
      bytes: l,
      rate: u || void 0,
      estimated: u && p && r ? (p - s) / u : void 0,
      event: t,
      lengthComputable: p != null,
      [a ? "download" : "upload"]: !0
    };
    e(c);
  }, n);
}, He = (e, a) => {
  const n = e != null;
  return [(i) => a[0]({
    lengthComputable: n,
    total: e,
    loaded: i
  }), a[1]];
}, Ge = (e) => (...a) => d.asap(() => e(...a)), ti = {
  flush: Q.constants.Z_SYNC_FLUSH,
  finishFlush: Q.constants.Z_SYNC_FLUSH
}, cc = {
  flush: Q.constants.BROTLI_OPERATION_FLUSH,
  finishFlush: Q.constants.BROTLI_OPERATION_FLUSH
}, si = d.isFunction(Q.createBrotliDecompress), { http: pc, https: lc } = Yr, uc = /https:?/, ri = T.protocols.map((e) => e + ":"), ci = (e, [a, n]) => (e.on("end", n).on("error", n), a);
function dc(e, a) {
  e.beforeRedirects.proxy && e.beforeRedirects.proxy(e), e.beforeRedirects.config && e.beforeRedirects.config(e, a);
}
function po(e, a, n) {
  let i = a;
  if (!i && i !== !1) {
    const o = ao.getProxyForUrl(n);
    o && (i = new URL(o));
  }
  if (i) {
    if (i.username && (i.auth = (i.username || "") + ":" + (i.password || "")), i.auth) {
      (i.auth.username || i.auth.password) && (i.auth = (i.auth.username || "") + ":" + (i.auth.password || ""));
      const t = Buffer.from(i.auth, "utf8").toString("base64");
      e.headers["Proxy-Authorization"] = "Basic " + t;
    }
    e.headers.host = e.hostname + (e.port ? ":" + e.port : "");
    const o = i.hostname || i.host;
    e.hostname = o, e.host = o, e.port = i.port, e.path = n, i.protocol && (e.protocol = i.protocol.includes(":") ? i.protocol : `${i.protocol}:`);
  }
  e.beforeRedirects.proxy = function(t) {
    po(t, a, t.href);
  };
}
const mc = typeof process < "u" && d.kindOf(process) === "process", fc = (e) => new Promise((a, n) => {
  let i, o;
  const t = (l, u) => {
    o || (o = !0, i && i(l, u));
  }, s = (l) => {
    t(l), a(l);
  }, p = (l) => {
    t(l, !0), n(l);
  };
  e(s, p, (l) => i = l).catch(p);
}), xc = ({ address: e, family: a }) => {
  if (!d.isString(e))
    throw TypeError("address must be a string");
  return {
    address: e,
    family: a || (e.indexOf(".") < 0 ? 6 : 4)
  };
}, pi = (e, a) => xc(d.isObject(e) ? e : { address: e, family: a }), vc = mc && function(a) {
  return fc(async function(i, o, t) {
    let { data: s, lookup: p, family: l } = a;
    const { responseType: u, responseEncoding: r } = a, c = a.method.toUpperCase();
    let m, h = !1, f;
    if (p) {
      const k = tc(p, (_) => d.isArray(_) ? _ : [_]);
      p = (_, q, ee) => {
        k(_, q, (F, K, ra) => {
          if (F)
            return ee(F);
          const W = d.isArray(K) ? K.map((D) => pi(D)) : [pi(K, ra)];
          q.all ? ee(F, W) : ee(F, W[0].address, W[0].family);
        });
      };
    }
    const x = new jo(), v = () => {
      a.cancelToken && a.cancelToken.unsubscribe(g), a.signal && a.signal.removeEventListener("abort", g), x.removeAllListeners();
    };
    t((k, _) => {
      m = !0, _ && (h = !0, v());
    });
    function g(k) {
      x.emit("abort", !k || k.type ? new Z(null, a, f) : k);
    }
    x.once("abort", o), (a.cancelToken || a.signal) && (a.cancelToken && a.cancelToken.subscribe(g), a.signal && (a.signal.aborted ? g() : a.signal.addEventListener("abort", g)));
    const y = cn(a.baseURL, a.url, a.allowAbsoluteUrls), w = new URL(y, T.hasBrowserEnv ? T.origin : void 0), A = w.protocol || ri[0];
    if (A === "data:") {
      let k;
      if (c !== "GET")
        return ue(i, o, {
          status: 405,
          statusText: "method not allowed",
          headers: {},
          config: a
        });
      try {
        k = Qr(a.url, u === "blob", {
          Blob: a.env && a.env.Blob
        });
      } catch (_) {
        throw b.from(_, b.ERR_BAD_REQUEST, a);
      }
      return u === "text" ? (k = k.toString(r), (!r || r === "utf8") && (k = d.stripBOM(k))) : u === "stream" && (k = $.Readable.from(k)), ue(i, o, {
        data: k,
        status: 200,
        statusText: "OK",
        headers: new P(),
        config: a
      });
    }
    if (ri.indexOf(A) === -1)
      return o(new b(
        "Unsupported protocol " + A,
        b.ERR_BAD_REQUEST,
        a
      ));
    const S = P.from(a.headers).normalize();
    S.set("User-Agent", "axios/" + Me, !1);
    const { onUploadProgress: I, onDownloadProgress: L } = a, M = a.maxRate;
    let V, ce;
    if (d.isSpecCompliantForm(s)) {
      const k = S.getContentType(/boundary=([-_\w\d]{10,70})/i);
      s = ic(s, (_) => {
        S.set(_);
      }, {
        tag: `axios-${Me}-boundary`,
        boundary: k && k[1] || void 0
      });
    } else if (d.isFormData(s) && d.isFunction(s.getHeaders)) {
      if (S.set(s.getHeaders()), !S.hasContentLength())
        try {
          const k = await ve.promisify(s.getLength).call(s);
          Number.isFinite(k) && k >= 0 && S.setContentLength(k);
        } catch {
        }
    } else if (d.isBlob(s) || d.isFile(s))
      s.size && S.setContentType(s.type || "application/octet-stream"), S.setContentLength(s.size || 0), s = $.Readable.from(co(s));
    else if (s && !d.isStream(s)) {
      if (!Buffer.isBuffer(s)) if (d.isArrayBuffer(s))
        s = Buffer.from(new Uint8Array(s));
      else if (d.isString(s))
        s = Buffer.from(s, "utf-8");
      else
        return o(new b(
          "Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream",
          b.ERR_BAD_REQUEST,
          a
        ));
      if (S.setContentLength(s.length, !1), a.maxBodyLength > -1 && s.length > a.maxBodyLength)
        return o(new b(
          "Request body larger than maxBodyLength limit",
          b.ERR_BAD_REQUEST,
          a
        ));
    }
    const yo = d.toFiniteNumber(S.getContentLength());
    d.isArray(M) ? (V = M[0], ce = M[1]) : V = ce = M, s && (I || V) && (d.isStream(s) || (s = $.Readable.from(s, { objectMode: !1 })), s = $.pipeline([s, new ii({
      maxRate: d.toFiniteNumber(V)
    })], d.noop), I && s.on("progress", ci(
      s,
      He(
        yo,
        xe(Ge(I), !1, 3)
      )
    )));
    let be;
    if (a.auth) {
      const k = a.auth.username || "", _ = a.auth.password || "";
      be = k + ":" + _;
    }
    if (!be && w.username) {
      const k = w.username, _ = w.password;
      be = k + ":" + _;
    }
    be && S.delete("authorization");
    let gn;
    try {
      gn = tn(
        w.pathname + w.search,
        a.params,
        a.paramsSerializer
      ).replace(/^\?/, "");
    } catch (k) {
      const _ = new Error(k.message);
      return _.config = a, _.url = a.url, _.exists = !0, o(_);
    }
    S.set(
      "Accept-Encoding",
      "gzip, compress, deflate" + (si ? ", br" : ""),
      !1
    );
    const B = {
      path: gn,
      method: c,
      headers: S.toJSON(),
      agents: { http: a.httpAgent, https: a.httpsAgent },
      auth: be,
      protocol: A,
      family: l,
      beforeRedirect: dc,
      beforeRedirects: {}
    };
    !d.isUndefined(p) && (B.lookup = p), a.socketPath ? B.socketPath = a.socketPath : (B.hostname = w.hostname.startsWith("[") ? w.hostname.slice(1, -1) : w.hostname, B.port = w.port, po(B, a.proxy, A + "//" + w.hostname + (w.port ? ":" + w.port : "") + B.path));
    let Oe;
    const sa = uc.test(B.protocol);
    if (B.agent = sa ? a.httpsAgent : a.httpAgent, a.transport ? Oe = a.transport : a.maxRedirects === 0 ? Oe = sa ? Za : Qa : (a.maxRedirects && (B.maxRedirects = a.maxRedirects), a.beforeRedirect && (B.beforeRedirects.config = a.beforeRedirect), Oe = sa ? lc : pc), a.maxBodyLength > -1 ? B.maxBodyLength = a.maxBodyLength : B.maxBodyLength = 1 / 0, a.insecureHTTPParser && (B.insecureHTTPParser = a.insecureHTTPParser), f = Oe.request(B, function(_) {
      if (f.destroyed) return;
      const q = [_], ee = +_.headers["content-length"];
      if (L || ce) {
        const D = new ii({
          maxRate: d.toFiniteNumber(ce)
        });
        L && D.on("progress", ci(
          D,
          He(
            ee,
            xe(Ge(L), !0, 3)
          )
        )), q.push(D);
      }
      let F = _;
      const K = _.req || f;
      if (a.decompress !== !1 && _.headers["content-encoding"])
        switch ((c === "HEAD" || _.statusCode === 204) && delete _.headers["content-encoding"], (_.headers["content-encoding"] || "").toLowerCase()) {
          case "gzip":
          case "x-gzip":
          case "compress":
          case "x-compress":
            q.push(Q.createUnzip(ti)), delete _.headers["content-encoding"];
            break;
          case "deflate":
            q.push(new oc()), q.push(Q.createUnzip(ti)), delete _.headers["content-encoding"];
            break;
          case "br":
            si && (q.push(Q.createBrotliDecompress(cc)), delete _.headers["content-encoding"]);
        }
      F = q.length > 1 ? $.pipeline(q, d.noop) : q[0];
      const ra = $.finished(F, () => {
        ra(), v();
      }), W = {
        status: _.statusCode,
        statusText: _.statusMessage,
        headers: new P(_.headers),
        config: a,
        request: K
      };
      if (u === "stream")
        W.data = F, ue(i, o, W);
      else {
        const D = [];
        let yn = 0;
        F.on("data", function(U) {
          D.push(U), yn += U.length, a.maxContentLength > -1 && yn > a.maxContentLength && (h = !0, F.destroy(), o(new b(
            "maxContentLength size of " + a.maxContentLength + " exceeded",
            b.ERR_BAD_RESPONSE,
            a,
            K
          )));
        }), F.on("aborted", function() {
          if (h)
            return;
          const U = new b(
            "stream has been aborted",
            b.ERR_BAD_RESPONSE,
            a,
            K
          );
          F.destroy(U), o(U);
        }), F.on("error", function(U) {
          f.destroyed || o(b.from(U, null, a, K));
        }), F.on("end", function() {
          try {
            let U = D.length === 1 ? D[0] : Buffer.concat(D);
            u !== "arraybuffer" && (U = U.toString(r), (!r || r === "utf8") && (U = d.stripBOM(U))), W.data = U;
          } catch (U) {
            return o(b.from(U, null, a, W.request, W));
          }
          ue(i, o, W);
        });
      }
      x.once("abort", (D) => {
        F.destroyed || (F.emit("error", D), F.destroy());
      });
    }), x.once("abort", (k) => {
      o(k), f.destroy(k);
    }), f.on("error", function(_) {
      o(b.from(_, null, a, f));
    }), f.on("socket", function(_) {
      _.setKeepAlive(!0, 1e3 * 60);
    }), a.timeout) {
      const k = parseInt(a.timeout, 10);
      if (Number.isNaN(k)) {
        o(new b(
          "error trying to parse `config.timeout` to int",
          b.ERR_BAD_OPTION_VALUE,
          a,
          f
        ));
        return;
      }
      f.setTimeout(k, function() {
        if (m) return;
        let q = a.timeout ? "timeout of " + a.timeout + "ms exceeded" : "timeout exceeded";
        const ee = a.transitional || sn;
        a.timeoutErrorMessage && (q = a.timeoutErrorMessage), o(new b(
          q,
          ee.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
          a,
          f
        )), g();
      });
    }
    if (d.isStream(s)) {
      let k = !1, _ = !1;
      s.on("end", () => {
        k = !0;
      }), s.once("error", (q) => {
        _ = !0, f.destroy(q);
      }), s.on("close", () => {
        !k && !_ && g(new Z("Request stream has been aborted", a, f));
      }), s.pipe(f);
    } else
      f.end(s);
  });
}, hc = T.hasStandardBrowserEnv ? /* @__PURE__ */ ((e, a) => (n) => (n = new URL(n, T.origin), e.protocol === n.protocol && e.host === n.host && (a || e.port === n.port)))(
  new URL(T.origin),
  T.navigator && /(msie|trident)/i.test(T.navigator.userAgent)
) : () => !0, bc = T.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, a, n, i, o, t) {
      const s = [e + "=" + encodeURIComponent(a)];
      d.isNumber(n) && s.push("expires=" + new Date(n).toGMTString()), d.isString(i) && s.push("path=" + i), d.isString(o) && s.push("domain=" + o), t === !0 && s.push("secure"), document.cookie = s.join("; ");
    },
    read(e) {
      const a = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return a ? decodeURIComponent(a[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
), li = (e) => e instanceof P ? { ...e } : e;
function re(e, a) {
  a = a || {};
  const n = {};
  function i(u, r, c, m) {
    return d.isPlainObject(u) && d.isPlainObject(r) ? d.merge.call({ caseless: m }, u, r) : d.isPlainObject(r) ? d.merge({}, r) : d.isArray(r) ? r.slice() : r;
  }
  function o(u, r, c, m) {
    if (d.isUndefined(r)) {
      if (!d.isUndefined(u))
        return i(void 0, u, c, m);
    } else return i(u, r, c, m);
  }
  function t(u, r) {
    if (!d.isUndefined(r))
      return i(void 0, r);
  }
  function s(u, r) {
    if (d.isUndefined(r)) {
      if (!d.isUndefined(u))
        return i(void 0, u);
    } else return i(void 0, r);
  }
  function p(u, r, c) {
    if (c in a)
      return i(u, r);
    if (c in e)
      return i(void 0, u);
  }
  const l = {
    url: t,
    method: t,
    data: t,
    baseURL: s,
    transformRequest: s,
    transformResponse: s,
    paramsSerializer: s,
    timeout: s,
    timeoutMessage: s,
    withCredentials: s,
    withXSRFToken: s,
    adapter: s,
    responseType: s,
    xsrfCookieName: s,
    xsrfHeaderName: s,
    onUploadProgress: s,
    onDownloadProgress: s,
    decompress: s,
    maxContentLength: s,
    maxBodyLength: s,
    beforeRedirect: s,
    transport: s,
    httpAgent: s,
    httpsAgent: s,
    cancelToken: s,
    socketPath: s,
    responseEncoding: s,
    validateStatus: p,
    headers: (u, r, c) => o(li(u), li(r), c, !0)
  };
  return d.forEach(Object.keys(Object.assign({}, e, a)), function(r) {
    const c = l[r] || o, m = c(e[r], a[r], r);
    d.isUndefined(m) && c !== p || (n[r] = m);
  }), n;
}
const lo = (e) => {
  const a = re({}, e);
  let { data: n, withXSRFToken: i, xsrfHeaderName: o, xsrfCookieName: t, headers: s, auth: p } = a;
  a.headers = s = P.from(s), a.url = tn(cn(a.baseURL, a.url, a.allowAbsoluteUrls), e.params, e.paramsSerializer), p && s.set(
    "Authorization",
    "Basic " + btoa((p.username || "") + ":" + (p.password ? unescape(encodeURIComponent(p.password)) : ""))
  );
  let l;
  if (d.isFormData(n)) {
    if (T.hasStandardBrowserEnv || T.hasStandardBrowserWebWorkerEnv)
      s.setContentType(void 0);
    else if ((l = s.getContentType()) !== !1) {
      const [u, ...r] = l ? l.split(";").map((c) => c.trim()).filter(Boolean) : [];
      s.setContentType([u || "multipart/form-data", ...r].join("; "));
    }
  }
  if (T.hasStandardBrowserEnv && (i && d.isFunction(i) && (i = i(a)), i || i !== !1 && hc(a.url))) {
    const u = o && t && bc.read(t);
    u && s.set(o, u);
  }
  return a;
}, gc = typeof XMLHttpRequest < "u", yc = gc && function(e) {
  return new Promise(function(n, i) {
    const o = lo(e);
    let t = o.data;
    const s = P.from(o.headers).normalize();
    let { responseType: p, onUploadProgress: l, onDownloadProgress: u } = o, r, c, m, h, f;
    function x() {
      h && h(), f && f(), o.cancelToken && o.cancelToken.unsubscribe(r), o.signal && o.signal.removeEventListener("abort", r);
    }
    let v = new XMLHttpRequest();
    v.open(o.method.toUpperCase(), o.url, !0), v.timeout = o.timeout;
    function g() {
      if (!v)
        return;
      const w = P.from(
        "getAllResponseHeaders" in v && v.getAllResponseHeaders()
      ), S = {
        data: !p || p === "text" || p === "json" ? v.responseText : v.response,
        status: v.status,
        statusText: v.statusText,
        headers: w,
        config: e,
        request: v
      };
      ue(function(L) {
        n(L), x();
      }, function(L) {
        i(L), x();
      }, S), v = null;
    }
    "onloadend" in v ? v.onloadend = g : v.onreadystatechange = function() {
      !v || v.readyState !== 4 || v.status === 0 && !(v.responseURL && v.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, v.onabort = function() {
      v && (i(new b("Request aborted", b.ECONNABORTED, e, v)), v = null);
    }, v.onerror = function() {
      i(new b("Network Error", b.ERR_NETWORK, e, v)), v = null;
    }, v.ontimeout = function() {
      let A = o.timeout ? "timeout of " + o.timeout + "ms exceeded" : "timeout exceeded";
      const S = o.transitional || sn;
      o.timeoutErrorMessage && (A = o.timeoutErrorMessage), i(new b(
        A,
        S.clarifyTimeoutError ? b.ETIMEDOUT : b.ECONNABORTED,
        e,
        v
      )), v = null;
    }, t === void 0 && s.setContentType(null), "setRequestHeader" in v && d.forEach(s.toJSON(), function(A, S) {
      v.setRequestHeader(S, A);
    }), d.isUndefined(o.withCredentials) || (v.withCredentials = !!o.withCredentials), p && p !== "json" && (v.responseType = o.responseType), u && ([m, f] = xe(u, !0), v.addEventListener("progress", m)), l && v.upload && ([c, h] = xe(l), v.upload.addEventListener("progress", c), v.upload.addEventListener("loadend", h)), (o.cancelToken || o.signal) && (r = (w) => {
      v && (i(!w || w.type ? new Z(null, e, v) : w), v.abort(), v = null);
    }, o.cancelToken && o.cancelToken.subscribe(r), o.signal && (o.signal.aborted ? r() : o.signal.addEventListener("abort", r)));
    const y = ro(o.url);
    if (y && T.protocols.indexOf(y) === -1) {
      i(new b("Unsupported protocol " + y + ":", b.ERR_BAD_REQUEST, e));
      return;
    }
    v.send(t || null);
  });
}, wc = (e, a) => {
  const { length: n } = e = e ? e.filter(Boolean) : [];
  if (a || n) {
    let i = new AbortController(), o;
    const t = function(u) {
      if (!o) {
        o = !0, p();
        const r = u instanceof Error ? u : this.reason;
        i.abort(r instanceof b ? r : new Z(r instanceof Error ? r.message : r));
      }
    };
    let s = a && setTimeout(() => {
      s = null, t(new b(`timeout ${a} of ms exceeded`, b.ETIMEDOUT));
    }, a);
    const p = () => {
      e && (s && clearTimeout(s), s = null, e.forEach((u) => {
        u.unsubscribe ? u.unsubscribe(t) : u.removeEventListener("abort", t);
      }), e = null);
    };
    e.forEach((u) => u.addEventListener("abort", t));
    const { signal: l } = i;
    return l.unsubscribe = () => d.asap(p), l;
  }
}, _c = function* (e, a) {
  let n = e.byteLength;
  if (n < a) {
    yield e;
    return;
  }
  let i = 0, o;
  for (; i < n; )
    o = i + a, yield e.slice(i, o), i = o;
}, kc = async function* (e, a) {
  for await (const n of Ec(e))
    yield* _c(n, a);
}, Ec = async function* (e) {
  if (e[Symbol.asyncIterator]) {
    yield* e;
    return;
  }
  const a = e.getReader();
  try {
    for (; ; ) {
      const { done: n, value: i } = await a.read();
      if (n)
        break;
      yield i;
    }
  } finally {
    await a.cancel();
  }
}, ui = (e, a, n, i) => {
  const o = kc(e, a);
  let t = 0, s, p = (l) => {
    s || (s = !0, i && i(l));
  };
  return new ReadableStream({
    async pull(l) {
      try {
        const { done: u, value: r } = await o.next();
        if (u) {
          p(), l.close();
          return;
        }
        let c = r.byteLength;
        if (n) {
          let m = t += c;
          n(m);
        }
        l.enqueue(new Uint8Array(r));
      } catch (u) {
        throw p(u), u;
      }
    },
    cancel(l) {
      return p(l), o.return();
    }
  }, {
    highWaterMark: 2
  });
}, ia = typeof fetch == "function" && typeof Request == "function" && typeof Response == "function", uo = ia && typeof ReadableStream == "function", Rc = ia && (typeof TextEncoder == "function" ? /* @__PURE__ */ ((e) => (a) => e.encode(a))(new TextEncoder()) : async (e) => new Uint8Array(await new Response(e).arrayBuffer())), mo = (e, ...a) => {
  try {
    return !!e(...a);
  } catch {
    return !1;
  }
}, Sc = uo && mo(() => {
  let e = !1;
  const a = new Request(T.origin, {
    body: new ReadableStream(),
    method: "POST",
    get duplex() {
      return e = !0, "half";
    }
  }).headers.has("Content-Type");
  return e && !a;
}), di = 64 * 1024, Va = uo && mo(() => d.isReadableStream(new Response("").body)), Ve = {
  stream: Va && ((e) => e.body)
};
ia && ((e) => {
  ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((a) => {
    !Ve[a] && (Ve[a] = d.isFunction(e[a]) ? (n) => n[a]() : (n, i) => {
      throw new b(`Response type '${a}' is not supported`, b.ERR_NOT_SUPPORT, i);
    });
  });
})(new Response());
const jc = async (e) => {
  if (e == null)
    return 0;
  if (d.isBlob(e))
    return e.size;
  if (d.isSpecCompliantForm(e))
    return (await new Request(T.origin, {
      method: "POST",
      body: e
    }).arrayBuffer()).byteLength;
  if (d.isArrayBufferView(e) || d.isArrayBuffer(e))
    return e.byteLength;
  if (d.isURLSearchParams(e) && (e = e + ""), d.isString(e))
    return (await Rc(e)).byteLength;
}, Ac = async (e, a) => {
  const n = d.toFiniteNumber(e.getContentLength());
  return n ?? jc(a);
}, Tc = ia && (async (e) => {
  let {
    url: a,
    method: n,
    data: i,
    signal: o,
    cancelToken: t,
    timeout: s,
    onDownloadProgress: p,
    onUploadProgress: l,
    responseType: u,
    headers: r,
    withCredentials: c = "same-origin",
    fetchOptions: m
  } = lo(e);
  u = u ? (u + "").toLowerCase() : "text";
  let h = wc([o, t && t.toAbortSignal()], s), f;
  const x = h && h.unsubscribe && (() => {
    h.unsubscribe();
  });
  let v;
  try {
    if (l && Sc && n !== "get" && n !== "head" && (v = await Ac(r, i)) !== 0) {
      let S = new Request(a, {
        method: "POST",
        body: i,
        duplex: "half"
      }), I;
      if (d.isFormData(i) && (I = S.headers.get("content-type")) && r.setContentType(I), S.body) {
        const [L, M] = He(
          v,
          xe(Ge(l))
        );
        i = ui(S.body, di, L, M);
      }
    }
    d.isString(c) || (c = c ? "include" : "omit");
    const g = "credentials" in Request.prototype;
    f = new Request(a, {
      ...m,
      signal: h,
      method: n.toUpperCase(),
      headers: r.normalize().toJSON(),
      body: i,
      duplex: "half",
      credentials: g ? c : void 0
    });
    let y = await fetch(f);
    const w = Va && (u === "stream" || u === "response");
    if (Va && (p || w && x)) {
      const S = {};
      ["status", "statusText", "headers"].forEach((V) => {
        S[V] = y[V];
      });
      const I = d.toFiniteNumber(y.headers.get("content-length")), [L, M] = p && He(
        I,
        xe(Ge(p), !0)
      ) || [];
      y = new Response(
        ui(y.body, di, L, () => {
          M && M(), x && x();
        }),
        S
      );
    }
    u = u || "text";
    let A = await Ve[d.findKey(Ve, u) || "text"](y, e);
    return !w && x && x(), await new Promise((S, I) => {
      ue(S, I, {
        data: A,
        headers: P.from(y.headers),
        status: y.status,
        statusText: y.statusText,
        config: e,
        request: f
      });
    });
  } catch (g) {
    throw x && x(), g && g.name === "TypeError" && /Load failed|fetch/i.test(g.message) ? Object.assign(
      new b("Network Error", b.ERR_NETWORK, e, f),
      {
        cause: g.cause || g
      }
    ) : b.from(g, g && g.code, e, f);
  }
}), Wa = {
  http: vc,
  xhr: yc,
  fetch: Tc
};
d.forEach(Wa, (e, a) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: a });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: a });
  }
});
const mi = (e) => `- ${e}`, Cc = (e) => d.isFunction(e) || e === null || e === !1, fo = {
  getAdapter: (e) => {
    e = d.isArray(e) ? e : [e];
    const { length: a } = e;
    let n, i;
    const o = {};
    for (let t = 0; t < a; t++) {
      n = e[t];
      let s;
      if (i = n, !Cc(n) && (i = Wa[(s = String(n)).toLowerCase()], i === void 0))
        throw new b(`Unknown adapter '${s}'`);
      if (i)
        break;
      o[s || "#" + t] = i;
    }
    if (!i) {
      const t = Object.entries(o).map(
        ([p, l]) => `adapter ${p} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let s = a ? t.length > 1 ? `since :
` + t.map(mi).join(`
`) : " " + mi(t[0]) : "as no adapter specified";
      throw new b(
        "There is no suitable adapter to dispatch the request " + s,
        "ERR_NOT_SUPPORT"
      );
    }
    return i;
  },
  adapters: Wa
};
function za(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Z(null, e);
}
function fi(e) {
  return za(e), e.headers = P.from(e.headers), e.data = Oa.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), fo.getAdapter(e.adapter || Ae.adapter)(e).then(function(i) {
    return za(e), i.data = Oa.call(
      e,
      e.transformResponse,
      i
    ), i.headers = P.from(i.headers), i;
  }, function(i) {
    return eo(i) || (za(e), i && i.response && (i.response.data = Oa.call(
      e,
      e.transformResponse,
      i.response
    ), i.response.headers = P.from(i.response.headers))), Promise.reject(i);
  });
}
const oa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, a) => {
  oa[e] = function(i) {
    return typeof i === e || "a" + (a < 1 ? "n " : " ") + e;
  };
});
const xi = {};
oa.transitional = function(a, n, i) {
  function o(t, s) {
    return "[Axios v" + Me + "] Transitional option '" + t + "'" + s + (i ? ". " + i : "");
  }
  return (t, s, p) => {
    if (a === !1)
      throw new b(
        o(s, " has been removed" + (n ? " in " + n : "")),
        b.ERR_DEPRECATED
      );
    return n && !xi[s] && (xi[s] = !0, console.warn(
      o(
        s,
        " has been deprecated since v" + n + " and will be removed in the near future"
      )
    )), a ? a(t, s, p) : !0;
  };
};
oa.spelling = function(a) {
  return (n, i) => (console.warn(`${i} is likely a misspelling of ${a}`), !0);
};
function Oc(e, a, n) {
  if (typeof e != "object")
    throw new b("options must be an object", b.ERR_BAD_OPTION_VALUE);
  const i = Object.keys(e);
  let o = i.length;
  for (; o-- > 0; ) {
    const t = i[o], s = a[t];
    if (s) {
      const p = e[t], l = p === void 0 || s(p, t, e);
      if (l !== !0)
        throw new b("option " + t + " must be " + l, b.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0)
      throw new b("Unknown option " + t, b.ERR_BAD_OPTION);
  }
}
const Ie = {
  assertOptions: Oc,
  validators: oa
}, J = Ie.validators;
let te = class {
  constructor(a) {
    this.defaults = a || {}, this.interceptors = {
      request: new Wn(),
      response: new Wn()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  async request(a, n) {
    try {
      return await this._request(a, n);
    } catch (i) {
      if (i instanceof Error) {
        let o = {};
        Error.captureStackTrace ? Error.captureStackTrace(o) : o = new Error();
        const t = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          i.stack ? t && !String(i.stack).endsWith(t.replace(/^.+\n.+\n/, "")) && (i.stack += `
` + t) : i.stack = t;
        } catch {
        }
      }
      throw i;
    }
  }
  _request(a, n) {
    typeof a == "string" ? (n = n || {}, n.url = a) : n = a || {}, n = re(this.defaults, n);
    const { transitional: i, paramsSerializer: o, headers: t } = n;
    i !== void 0 && Ie.assertOptions(i, {
      silentJSONParsing: J.transitional(J.boolean),
      forcedJSONParsing: J.transitional(J.boolean),
      clarifyTimeoutError: J.transitional(J.boolean)
    }, !1), o != null && (d.isFunction(o) ? n.paramsSerializer = {
      serialize: o
    } : Ie.assertOptions(o, {
      encode: J.function,
      serialize: J.function
    }, !0)), n.allowAbsoluteUrls !== void 0 || (this.defaults.allowAbsoluteUrls !== void 0 ? n.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls : n.allowAbsoluteUrls = !0), Ie.assertOptions(n, {
      baseUrl: J.spelling("baseURL"),
      withXsrfToken: J.spelling("withXSRFToken")
    }, !0), n.method = (n.method || this.defaults.method || "get").toLowerCase();
    let s = t && d.merge(
      t.common,
      t[n.method]
    );
    t && d.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (f) => {
        delete t[f];
      }
    ), n.headers = P.concat(s, t);
    const p = [];
    let l = !0;
    this.interceptors.request.forEach(function(x) {
      typeof x.runWhen == "function" && x.runWhen(n) === !1 || (l = l && x.synchronous, p.unshift(x.fulfilled, x.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function(x) {
      u.push(x.fulfilled, x.rejected);
    });
    let r, c = 0, m;
    if (!l) {
      const f = [fi.bind(this), void 0];
      for (f.unshift.apply(f, p), f.push.apply(f, u), m = f.length, r = Promise.resolve(n); c < m; )
        r = r.then(f[c++], f[c++]);
      return r;
    }
    m = p.length;
    let h = n;
    for (c = 0; c < m; ) {
      const f = p[c++], x = p[c++];
      try {
        h = f(h);
      } catch (v) {
        x.call(this, v);
        break;
      }
    }
    try {
      r = fi.call(this, h);
    } catch (f) {
      return Promise.reject(f);
    }
    for (c = 0, m = u.length; c < m; )
      r = r.then(u[c++], u[c++]);
    return r;
  }
  getUri(a) {
    a = re(this.defaults, a);
    const n = cn(a.baseURL, a.url, a.allowAbsoluteUrls);
    return tn(n, a.params, a.paramsSerializer);
  }
};
d.forEach(["delete", "get", "head", "options"], function(a) {
  te.prototype[a] = function(n, i) {
    return this.request(re(i || {}, {
      method: a,
      url: n,
      data: (i || {}).data
    }));
  };
});
d.forEach(["post", "put", "patch"], function(a) {
  function n(i) {
    return function(t, s, p) {
      return this.request(re(p || {}, {
        method: a,
        headers: i ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: t,
        data: s
      }));
    };
  }
  te.prototype[a] = n(), te.prototype[a + "Form"] = n(!0);
});
let Fc = class xo {
  constructor(a) {
    if (typeof a != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function(t) {
      n = t;
    });
    const i = this;
    this.promise.then((o) => {
      if (!i._listeners) return;
      let t = i._listeners.length;
      for (; t-- > 0; )
        i._listeners[t](o);
      i._listeners = null;
    }), this.promise.then = (o) => {
      let t;
      const s = new Promise((p) => {
        i.subscribe(p), t = p;
      }).then(o);
      return s.cancel = function() {
        i.unsubscribe(t);
      }, s;
    }, a(function(t, s, p) {
      i.reason || (i.reason = new Z(t, s, p), n(i.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(a) {
    if (this.reason) {
      a(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(a) : this._listeners = [a];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(a) {
    if (!this._listeners)
      return;
    const n = this._listeners.indexOf(a);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const a = new AbortController(), n = (i) => {
      a.abort(i);
    };
    return this.subscribe(n), a.signal.unsubscribe = () => this.unsubscribe(n), a.signal;
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let a;
    return {
      token: new xo(function(o) {
        a = o;
      }),
      cancel: a
    };
  }
};
function Pc(e) {
  return function(n) {
    return e.apply(null, n);
  };
}
function qc(e) {
  return d.isObject(e) && e.isAxiosError === !0;
}
const Ja = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(Ja).forEach(([e, a]) => {
  Ja[a] = e;
});
function vo(e) {
  const a = new te(e), n = bi(te.prototype.request, a);
  return d.extend(n, te.prototype, a, { allOwnKeys: !0 }), d.extend(n, a, null, { allOwnKeys: !0 }), n.create = function(o) {
    return vo(re(e, o));
  }, n;
}
const j = vo(Ae);
j.Axios = te;
j.CanceledError = Z;
j.CancelToken = Fc;
j.isCancel = eo;
j.VERSION = Me;
j.toFormData = na;
j.AxiosError = b;
j.Cancel = j.CanceledError;
j.all = function(a) {
  return Promise.all(a);
};
j.spread = Pc;
j.isAxiosError = qc;
j.mergeConfig = re;
j.AxiosHeaders = P;
j.formToJSON = (e) => Zi(d.isHTMLForm(e) ? new FormData(e) : e);
j.getAdapter = fo.getAdapter;
j.HttpStatusCode = Ja;
j.default = j;
const {
  Axios: lp,
  AxiosError: up,
  CanceledError: dp,
  isCancel: mp,
  CancelToken: fp,
  VERSION: xp,
  all: vp,
  Cancel: hp,
  isAxiosError: bp,
  spread: gp,
  toFormData: yp,
  AxiosHeaders: wp,
  HttpStatusCode: _p,
  formToJSON: kp,
  getAdapter: Ep,
  mergeConfig: Rp
} = j;
var hn = {};
const Lc = vi, Uc = Xa;
function ho(e) {
  console.log(`[dotenv][DEBUG] ${e}`);
}
const Bc = `
`, zc = /^\s*([\w.-]+)\s*=\s*(.*)?\s*$/, Nc = /\\n/g, Ic = /\r\n|\n|\r/;
function bo(e, a) {
  const n = !!(a && a.debug), i = {};
  return e.toString().split(Ic).forEach(function(o, t) {
    const s = o.match(zc);
    if (s != null) {
      const p = s[1];
      let l = s[2] || "";
      const u = l.length - 1, r = l[0] === '"' && l[u] === '"';
      l[0] === "'" && l[u] === "'" || r ? (l = l.substring(1, u), r && (l = l.replace(Nc, Bc))) : l = l.trim(), i[p] = l;
    } else n && ho(`did not match key and value when parsing line ${t + 1}: ${o}`);
  }), i;
}
function Dc(e) {
  let a = Uc.resolve(process.cwd(), ".env"), n = "utf8", i = !1;
  e && (e.path != null && (a = e.path), e.encoding != null && (n = e.encoding), e.debug != null && (i = !0));
  try {
    const o = bo(Lc.readFileSync(a, { encoding: n }), { debug: i });
    return Object.keys(o).forEach(function(t) {
      Object.prototype.hasOwnProperty.call(process.env, t) ? i && ho(`"${t}" is already defined in \`process.env\` and will not be overwritten`) : process.env[t] = o[t];
    }), { parsed: o };
  } catch (o) {
    return { error: o };
  }
}
hn.config = Dc;
hn.parse = bo;
const ta = {};
process.env.DOTENV_CONFIG_ENCODING != null && (ta.encoding = process.env.DOTENV_CONFIG_ENCODING);
process.env.DOTENV_CONFIG_PATH != null && (ta.path = process.env.DOTENV_CONFIG_PATH);
process.env.DOTENV_CONFIG_DEBUG != null && (ta.debug = process.env.DOTENV_CONFIG_DEBUG);
var $c = ta;
const Mc = /^dotenv_config_(encoding|path|debug)=(.+)$/;
var Hc = function(a) {
  return a.reduce(function(n, i) {
    const o = i.match(Mc);
    return o && (n[o[1]] = o[2]), n;
  }, {});
};
(function() {
  hn.config(
    Object.assign(
      {},
      $c,
      Hc(process.argv)
    )
  );
})();
const Gc = _o(import.meta.url), bn = X.dirname(Gc);
process.env.DIST = X.join(bn, "../dist");
process.env.VITE_PUBLIC = Je.isPackaged ? process.env.DIST : X.join(process.env.DIST, "../public");
let Y;
const We = process.env.VITE_DEV_SERVER_URL;
function go() {
  Y = new Ka({
    icon: X.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: X.join(bn, "../dist-electron/preload.mjs"),
      nodeIntegration: !1,
      contextIsolation: !0
    }
  }), Y.webContents.on("did-finish-load", () => {
    Y == null || Y.webContents.send("main-process-message", (/* @__PURE__ */ new Date()).toLocaleString());
  }), We ? Y.loadURL(We) : Y.loadFile(X.join(process.env.DIST, "index.html"));
}
Je.on("window-all-closed", () => {
  Y = null;
});
Je.on("activate", () => {
  Ka.getAllWindows().length === 0 && go();
});
Je.whenReady().then(() => {
  go(), Ya.on("show-reminder-notification", (e, a) => {
    const n = new Date(a.dateTime), i = /* @__PURE__ */ new Date(), o = n.getTime() - i.getTime();
    o > 0 ? (console.log(`Menjadwalkan reminder "${a.body}" untuk ${n.toLocaleString()} (dalam ${o / 1e3} detik)`), setTimeout(() => {
      new wo({
        title: a.title,
        body: a.body,
        silent: !1
      }).show(), console.log(`Notifikasi ditampilkan untuk: "${a.body}"`);
    }, o)) : console.warn("Mencoba mengatur reminder di masa lalu atau segera:", a);
  });
});
Ya.handle("open-win", (e, a) => {
  const n = new Ka({
    webPreferences: {
      preload: X.join(bn, "../dist-electron/preload.mjs"),
      nodeIntegration: !1,
      contextIsolation: !0
    }
  });
  We ? n.loadURL(`${We}#${a}`) : n.loadFile(X.join(process.env.DIST, "index.html"), { hash: a });
});
Ya.handle("get-air-quality", async (e, a, n, i) => {
  var u, r, c, m;
  const o = process.env.OPENWEATHER_API_KEY, t = process.env.IQAIR_API_KEY, s = "https://api.openweathermap.org/geo/1.0/direct", p = "https://api.airvisual.com/v2/nearest_city", l = "https://api.openweathermap.org/data/2.5/air_pollution";
  try {
    const h = await j.get(s, { params: {
      q: `${a},${n},${i}`,
      limit: 1,
      appid: o
    } });
    if (!h.data || h.data.length === 0)
      return { status: "fail", error: "Lokasi tidak ditemukan" };
    const { lat: f, lon: x, name: v } = h.data[0], g = await j.get(p, {
      params: {
        lat: f,
        lon: x,
        key: t
      }
    }), y = await j.get(l, {
      params: {
        lat: f,
        lon: x,
        appid: o
      }
    });
    return {
      status: "success",
      location: { lat: f, lon: x, name: v },
      aqi: ((m = (c = (r = (u = g.data) == null ? void 0 : u.data) == null ? void 0 : r.current) == null ? void 0 : c.pollution) == null ? void 0 : m.aqius) ?? null,
      openweather: y.data
    };
  } catch (h) {
    return j.isAxiosError(h) ? { status: "fail", error: h.message } : { status: "fail", error: "Unknown Error (not from axios" };
  }
});
