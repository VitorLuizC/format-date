import formatters from './formatters';
import matcher from './matcher';

/**
 * It replaces format tokens for corresponding Date formats.
 * @example ```js
 * format(new Date(), 'DD/MM/YYYY hh:mm:ss')
 * ```
 * @param date A Date instace.
 * @param format A string with tokens based on moment.
 */
function format (date: Date, format: string) {
  return format.replace(matcher, (token: string) => {
    if (formatters.hasOwnProperty(token))
      return formatters[token](date);
    return token.replace(/\[|\]/g, '');
  });
}

export default format;
