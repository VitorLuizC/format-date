/**
 * It replaces format tokens for corresponding Date formats.
 * @example ```js
 * format(new Date(), 'DD/MM/YYYY hh:mm:ss')
 * ```
 * @param date A Date instace.
 * @param format A string with tokens based on moment.
 */
declare function format(date: Date, format: string): string;
export default format;
