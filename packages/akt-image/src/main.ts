export function isImgByName(fileName:string) {
  const lsi = fileName.lastIndexOf('.')
  if (lsi === -1) {
    return false
  }
  const fileType = (fileName.substring(fileName.lastIndexOf('.') + 1, fileName.length)).toLowerCase();
  const support = 'jpg,jpeg,png,gif,bmp';
  if(support.indexOf(fileType) === -1) {
    return false
  }
  return true
}