'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var toString = Object.prototype.toString;
function type(x, strict) {
    if (strict === void 0) { strict = false; }
    strict = !!strict;
    // fix typeof null = object
    if (x === null) {
        return 'null';
    }
    var t = typeof x;
    // number string boolean undefined symbol
    if (t !== 'object') {
        return t;
    }
    var cls;
    var clsLow;
    try {
        cls = toString.call(x).slice(8, -1);
        clsLow = cls.toLowerCase();
    }
    catch (e) {
        // ie下的 activex对象
        return 'object';
    }
    if (clsLow !== 'object') {
        // 区分 String() 和 new String()
        if (strict && (clsLow === 'number' || clsLow === 'boolean' || clsLow === 'string')) {
            return cls;
        }
        return clsLow;
    }
    if (x.constructor == Object) {
        return clsLow;
    }
    // Object.create(null)
    try {
        // __proto__ 部分早期firefox浏览器
        if (Object.getPrototypeOf(x) === null || x.__proto__ === null) {
            return 'object';
        }
    }
    catch (e) {
        // ie下无Object.getPrototypeOf会报错
    }
    // function A() {}; new A
    try {
        var cname = x.constructor.name;
        if (typeof cname === 'string') {
            return cname;
        }
    }
    catch (e) {
        // 无constructor
    }
    // function A() {}; A.prototype.constructor = null; new A
    return 'unknown';
}

exports.type = type;
