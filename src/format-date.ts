/**
 * A dictionary that has tokens and their corresponding formatter function.
 */
// prettier-ignore
const FORMATTERS: Record<string, (date: Date) => string> = {
  'DD':   date => addZeroPads(2, '' + date.getDate()),
  'D':    date => '' + date.getDate(),
  'MM':   date => addZeroPads(2, '' + (date.getMonth() + 1)),
  'M':    date => '' + (date.getMonth() + 1),
  'YYYY': date => addZeroPads(4, '' + date.getFullYear()),
  'YY':   date => ('' + date.getFullYear()).substr(-2),
  'HH':   date => addZeroPads(2, '' + date.getHours()),
  'H':    date => '' + date.getHours(),
  'mm':   date => addZeroPads(2, '' + date.getMinutes()),
  'm':    date => '' + date.getMinutes(),
  'ss':   date => addZeroPads(2, '' + date.getSeconds()),
  's':    date => '' + date.getSeconds(),
  'a':    date => '' + (date.getHours() >= 12 ? 'pm' : 'am'),
  'A':    date => '' + (date.getHours() >= 12 ? 'PM' : 'AM'),
};

/**
 * Part of the matcher, a `RegExp`, for escaping texts.
 */
const ESCAPE = '\\[[^\\[\\]]*\\]';

/**
 * Creates the matcher using formatters' tokens and the escaping strategy.
 * @returns {RegExp}
 */
function createMatcher(): RegExp {
  const matchers = Object.keys(FORMATTERS).concat(ESCAPE);
  return new RegExp(matchers.join('|'), 'g');
}

/**
 * Add zero (`0`) pads to text's length match defined length.
 * @param {Number} length - Expected length of text with zero pads.
 * @param {String} text - Text that receives the zero pads if below length.
 * @returns {String}
 */
function addZeroPads(length: number, text: string): string {
  if (text.length >= length) return text;
  return addZeroPads(length, '0' + text);
}

/**
 * Receives a `Date` and a format (with tokens based on Moment.js) in `string`
 * and returns the same format replacing the tokens for values from `Date`.
 * @example
 * formatDate(new Date(), "DD/MM/YYYY hh:mm:ss");
 * //=> "25/06/2020 11:59:28"
 *
 * formatDate(new Date(), "[Day] D [at] h'mm");
 * //=> "Day 25 at 11'59"
 * @param {Date} date - A `Date` instance.
 * @param {String} format - A string with tokens (like Moment.js tokens).
 * @returns {String}
 */
export default function formatDate(date: Date, format: string): string {
  return format.replace(createMatcher(), (token: string) => {
    if (FORMATTERS.hasOwnProperty(token)) return FORMATTERS[token](date);
    return token.replace(/\[|\]/g, '');
  });
}
