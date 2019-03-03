const _toString = Object.prototype.toString

/**
 * 检测当前宿主环境是否是浏览器
 */
export const inBrowser = typeof window !== 'undefined';

/**
 * 检查当前环境是否可以使用对象的 __proto__ 属性
 */
export const hasProto = '__proto__' in {};

/**
 * 获取当浏览器的user Agent 
 * toLowerCase目的是 为了后续的各种环境检测
 */
export const UA = inBrowser && window.navigator.userAgent.toLowerCase();

/**
 * IE浏览器判断
 * 使用正则去匹配 UA 中是否包含'msie'或者'trident'这两个字符串即可判断是否为 IE 浏览器
 */
export const isIE = UA && /msie|trident/.test(UA);

/**
 * IE9| Edge | Chrome 判断
 */
export const isIE9 = UA && UA.indexOf('msie 9.0') > 0;
export const isEdge = UA && UA.indexOf('edge/') > 0;
export const isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

/**
 * 检测字符串是否以 $ 或者 _ 开头
 * @param s 
 */
export function isReserved (s: string): boolean {
  // charCodeAt() 方法可返回指定位置的字符的 Unicode 编码
  const c = (s + '').charCodeAt(0)
  return c === 0x24 || c === 0x5f
}

/**
 * 字母序列中找到缺失的字母并返回它
 * @param s 字符串
 */
export function fearNotLetter(s:string) : string{
  let arr = [];
  for(let i=0; i<s.length; i++) {
    arr.push(s.charCodeAt(i));
  }

  for(let j=1; j<arr.length; j++) {
    let num = arr[j] - arr[j-1];
    if (num!=1) {
      return String.fromCharCode(arr[j] -1)
    }
  }
  return ''
}

export function cached(fn: Function) {
  const cache = Object.create(null)
  return (function cachedFn (str: string) {
    const hit = cache[str]
    return hit || (cache[str] = fn(str))
  })
};

/**
 * 连字符转驼峰
 * @param s 
 */
export function camelize(s: string):string {
  const camelizeRE = /-(\w)/g
  return s.replace(camelizeRE, (_, c)=> c ? c.toUpperCase() :'' )
}

/**
 * 将给定变量的值转换为 string 类型并返回
 * @param val 
 */
export function toString (val: any) :string {
  return val == null
    ? ''
    : typeof val === 'object' ? JSON.stringify(val, null, 2)
    : String(val)
}

/**
 * 首字符大写
 * @param s 
 * str.charAt(0)获取str的第一项，利用toUpperCase()转换为大写字母，
 * str.slice(1) 截取除第一项的str部分
 */
export function capitalize(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1)
}

/**
 * 驼峰转连字符
 * @param s 
 */
export function hyphenate(s: string) {
  const hyphenateRE = /\B([A-Z])/g;
  return s.replace(hyphenateRE, '-$1').toLocaleUpperCase()
}

/**
 * 判断变量是否为原型类型
 * @param v 
 */
export function isPrimitive(v: any): boolean {
  return (
    typeof v === 'string' ||
    typeof v === 'number' ||
    typeof v === 'symbol' ||
    typeof v === 'boolean'
  )
}

/**
 * 判断变量是否为正则对象
 * 使用 Object.prototype.toString 与 '[object RegExp]' 做全等对比
 * @param v 
 */
export function isRegExp(v:any): boolean{
  return _toString.call(v) === '[object RegExp]'
}

/**
 * 区分对象和原始值
 * @param obj 
 */
export function isObject(obj: any): boolean {
  return obj !== null && typeof obj === 'object'
}


export function makeMap (
  str: string,
  expectsLowerCase?: boolean
): (key: string) => true | void {
  const map = Object.create(null)
  const list: Array<string> = str.split(',')
  for (let i = 0; i < list.length; i++) {
    map[list[i]] = true
  }
  return expectsLowerCase
    ? val => map[val.toLowerCase()]
    : val => map[val]
}