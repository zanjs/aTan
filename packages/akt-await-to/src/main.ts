/**
 * @param { Promise } promise
 * @param { Object= } errorExt - Additional Information you can pass to the err object
 * @return { Promise }
 */
export async function awaito<T, U = Error> (
  promise: Promise<T>,
  errorExt?: object
): Promise<[U | null, T | undefined]> {
  try {
    const data = await promise;
    return [null, data];
  }
  catch (err) {
    if (errorExt) {
      Object.assign(err, errorExt);
    }
    return [err, undefined];
  }
}

export default awaito;