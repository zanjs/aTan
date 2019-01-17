export function unique(arr: any[]) {
  const result = []
  const hash = {}
  for (let i = 0, elem: string | number; (elem = arr[i]) != null; i += 1) {
    if (!hash[elem]) {
      result.push(elem)
      hash[elem] = true
    }
  }
  return result
}