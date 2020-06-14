import test from 'ava';
import formatDate from './format-date';

test('module API: Exports format function as default', (context) => {
  context.is(typeof formatDate, 'function');
});

test('Formatters: Characters return part of a DateTime', (context) => {
  const date = new Date('0999-04-03 05:38:02');

  context.is(formatDate(date, 'DD'), '03');
  context.is(formatDate(date, 'D'), '3');
  context.is(formatDate(date, 'MM'), '04');
  context.is(formatDate(date, 'M'), '4');
  context.is(formatDate(date, 'YYYY'), '0999');
  context.is(formatDate(date, 'YY'), '99');
  context.is(formatDate(date, 'HH'), '05');
  context.is(formatDate(date, 'H'), '5');
  context.is(formatDate(date, 'mm'), '38');
  context.is(formatDate(date, 'm'), '38');
  context.is(formatDate(date, 'ss'), '02');
  context.is(formatDate(date, 's'), '2');
});

test('Formatters: Combine tokens into a custom format', (context) => {
  const date = new Date('0999-04-03 05:38:02');
  const formatter = 'DD/MM/YYYY [às] HH[h]mm[min] e s [segundos].';

  context.is(
    formatDate(date, formatter),
    '03/04/0999 às 05h38min e 2 segundos.',
  );
});
