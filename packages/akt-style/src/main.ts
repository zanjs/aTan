/**
 * 样式 对象转字符串 
 * @export
 * @param {Object} styleJson 
 * @returns 
 */
export function StyleJSONToString(styleJson: Object) {
  let s = []
  for(const i in styleJson){
    s.push(i+':'+styleJson[i])
  }
  s = s.join(';')
  return  s
}

/**
 * 样式 字符串转对象
 * @export
 * @param {string} styleJson 
 * @returns 
 */
export function StyleStringToJSON(styleJson: string) {
  if (!styleJson || styleJson === '') { return }
  let Arr = styleJson.split(';')
  Arr = Arr.filter(item => {
  return item !== ''
  })
  let str = ''
  Arr.forEach(item => {
    let test = ''
    trim(item).split(':').forEach(item2 => {
      test += '"' + trim(item2) + '":'
    })
    str += test + ','
  })
  str = str.replace(/:,/g, ',')
  str = str.substring(0, str.lastIndexOf(','))
  str = '{' + str + '}'
  return JSON.parse(str)
}

export function trim (str:string) {
  let result: string
  result = str.replace(/(^\s+)|(\s+$)/g, '')
  return result
}