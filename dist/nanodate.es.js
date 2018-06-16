var zero = function zero(value, length) {
  var string = value + '';

  while (string.length < length) {
    string = '0' + string;
  }

  return string;
}; // const [ D, YYYY ] = [
//   'getDate',
//   'getFullYear',
//   'getHours',
//   'getMinutes',
//   'getSeconds'
// ].map((property) => Function.call.bind(Date.prototype[property]))


var formatters = {
  'DD': function DD(date) {
    return zero(date.getDate(), 2);
  },
  'D': function D(date) {
    return date.getDate() + '';
  },
  'MM': function MM(date) {
    return zero(date.getMonth() + 1, 2);
  },
  'M': function M(date) {
    return date.getMonth() + 1 + '';
  },
  'YYYY': function YYYY(date) {
    return zero(date.getFullYear(), 4);
  },
  'YY': function YY(date) {
    return date.getFullYear().substring(2) + '';
  },
  'HH': function HH(date) {
    return zero(date.getHours(), 2);
  },
  'H': function H(date) {
    return date.getHours() + '';
  },
  'mm': function mm(date) {
    return zero(date.getMinutes(), 2);
  },
  'm': function m(date) {
    return date.getMinutes() + '';
  },
  'SS': function SS(date) {
    return zero(date.getSeconds(), 2);
  },
  'S': function S(date) {
    return date.getSeconds() + '';
  }
};
var regex = new RegExp(Object.keys(formatters).join('|'), 'g');
var nanodate = (function (date, format) {
  var result = format.replace(regex, function (formatter) {
    return formatters[formatter](date);
  });
  return result;
});

export default nanodate;
