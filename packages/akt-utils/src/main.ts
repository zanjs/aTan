
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
}