import test from 'ava';
import format from './';

test('module API: Exports format function as default', (context) => {
  context.is(typeof format, 'function');
});

test('Formatters: Characters return part of a DateTime', (context) => {
  const date = new Date('0999-04-03 05:38:02');

  context.is(format(date, 'DD'), '03');
  context.is(format(date, 'D'), '3');
  context.is(format(date, 'MM'), '04');
  context.is(format(date, 'M'), '4');
  context.is(format(date, 'YYYY'), '0999')
  context.is(format(date, 'YY'), '99');
  context.is(format(date, 'HH'), '05');
  context.is(format(date, 'H'), '5');
  context.is(format(date, 'mm'), '38');
  context.is(format(date, 'm'), '38');
  context.is(format(date, 'ss'), '02');
  context.is(format(date, 's'), '2');
});

test('Formatters: Characters return part of a DateTime', (context) => {
  const date = new Date('0999-04-03 05:38:02');
  const formatter = 'DD/MM/YYYY [às] HH[h]mm[min] e s [segundos].';

  context.is(format(date, formatter), '03/04/0999 às 05h38min e 2 segundos.');
});
