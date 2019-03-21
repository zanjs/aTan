const _toString = Object.prototype.toString

/**
 * 检测当前宿主环境是否是浏览器
 */
export const IsBrowser = typeof window !== 'undefined';

/**
 * 判断是否是 URL
 * @export
 * @param {string} URL 
 * @returns {boolean} 
 */
export function IsURL (URL:string):boolean {
  var str = URL
  var Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?/
  var objExp = new RegExp(Expression)
  if (objExp.test(str) === true) {
    return true
  } else {
    return false
  }
}

/**
 * 是否是 手机端
 * @export
 * @returns {boolean} 
 */
export function IsMobile():boolean {
  return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)
}

