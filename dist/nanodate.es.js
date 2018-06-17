/**
 * Formatters are based on moment tokens. They receives a
 * Date and returns it's format.
 */
var formatters = {
  'DD': function (date) { return zero(date.getDate(), 2); },
  'D': function (date) { return date.getDate() + ''; },
  'MM': function (date) { return zero(date.getMonth() + 1, 2); },
  'M': function (date) { return date.getMonth() + 1 + ''; },
  'YYYY': function (date) { return zero(date.getFullYear(), 4); },
  'YY': function (date) { return (date.getFullYear() + '').substr(-2, 2); },
  'hh': function (date) { return zero(date.getHours(), 2); },
  'h': function (date) { return date.getHours() + ''; },
  'mm': function (date) { return zero(date.getMinutes(), 2); },
  'm': function (date) { return date.getMinutes() + ''; },
  'ss': function (date) { return zero(date.getSeconds(), 2); },
  's': function (date) { return date.getSeconds() + ''; }
};
/**
 * Add '0' pads to number value.
 */

function zero(value, length) {
  var string = value + '';

  while (string.length < length) { string = '0' + string; }

  return string;
}

/**
 * Creates a matcher using formatters tokens and escape strategy.
 */

function createMatcher() {
  var ESCAPE = '\\[[^\\[\\]]*\\]';
  var matchers = Object.keys(formatters).concat(ESCAPE);
  return new RegExp(matchers.join('|'), 'g');
}

var matcher = createMatcher();

/**
 * It replaces format tokens for corresponding Date formats.
 * @example ```js
 * nanodate(new Date(), 'DD/MM/YYYY hh:mm:ss')
 * ```
 * @param date A Date instace.
 * @param format A string with tokens based on moment.
 */

function nanodate(date, format) {
  return format.replace(matcher, function (token) {
    if (formatters.hasOwnProperty(token)) { return formatters[token](date); }
    return token.replace(/\[|\]/g, '');
  });
}

export default nanodate;
