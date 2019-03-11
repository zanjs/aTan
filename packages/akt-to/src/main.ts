/**
 * change f into int, remove decimal. Just for code compression
 * @param f
 * @returns {number}
 */
export const toInt = (f: any): number => parseInt(f);

/**
 * format Date / string / timestamp to Date instance.
 * @param input
 * @returns {*}
 */
export const toDate = (input: any): any => {
  if (input instanceof Date) return input;
  if (!isNaN(input) || /^\d+$/.test(input)) return new Date(toInt(input));
  input = (input || '').trim().replace(/\.\d+/, '') // remove milliseconds
    .replace(/-/, '/').replace(/-/, '/')
    .replace(/(\d)T(\d)/, '$1 $2').replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
    .replace(/([\+\-]\d\d)\:?(\d\d)/, ' $1$2'); // -04:00 -> -0400
  return new Date(input);
}