/**
 * It replaces format tokens for corresponding Date formats.
 * @example ```js
 * nanodate(new Date(), 'DD/MM/YYYY hh:mm:ss')
 * ```
 * @param date A Date instace.
 * @param format A string with tokens based on moment.
 */
declare function nanodate(date: Date, format: string): string;
export default nanodate;
