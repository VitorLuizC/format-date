const zero = (value: number, length: number) => {
  let string = value + '';
  while (string.length < length)
    string = '0' + string;
  return string;
}

// const [ D, YYYY ] = [
//   'getDate',
//   'getFullYear',
//   'getHours',
//   'getMinutes',
//   'getSeconds'
// ].map((property) => Function.call.bind(Date.prototype[property]))

const formatters = {
  'DD':   (date) => zero(date.getDate(), 2),
  'D':    (date) => date.getDate() + '',
  'MM':   (date) => zero(date.getMonth() + 1, 2),
  'M':    (date) => (date.getMonth() + 1) + '',
  'YYYY': (date) => zero(date.getFullYear(), 4),
  'YY':   (date) => (date.getFullYear()).substring(2) + '',
  'HH':   (date) => zero(date.getHours(), 2),
  'H':    (date) => date.getHours() + '',
  'mm':   (date) => zero(date.getMinutes(), 2),
  'm':    (date) => date.getMinutes() + '',
  'SS':   (date) => zero(date.getSeconds(), 2),
  'S':    (date) => date.getSeconds() + '',
};

const regex = new RegExp(Object.keys(formatters).join('|'), 'g');

export default (date: Date, format: string): string => {
  const result = format.replace(regex, (formatter) => formatters[formatter](date));
  return result;
}
