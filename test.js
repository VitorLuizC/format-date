import test from 'ava';
import nanodate from './';

test('module API: Exports nanodate function as default', (context) => {
  context.is(typeof nanodate, 'function');
});

test('Formatters: Characters return part of a DateTime', (context) => {
  const date = new Date('0999-04-03 05:38:02');

  context.is(nanodate(date, 'DD'), '03');
  context.is(nanodate(date, 'D'), '3');
  context.is(nanodate(date, 'MM'), '04');
  context.is(nanodate(date, 'M'), '4');
  context.is(nanodate(date, 'YYYY'), '0999')
  context.is(nanodate(date, 'YY'), '99');
  context.is(nanodate(date, 'HH'), '05');
  context.is(nanodate(date, 'H'), '5');
  context.is(nanodate(date, 'mm'), '38');
  context.is(nanodate(date, 'm'), '38');
  context.is(nanodate(date, 'ss'), '02');
  context.is(nanodate(date, 's'), '2');
});

test('Formatters: Characters return part of a DateTime', (context) => {
  const date = new Date('0999-04-03 05:38:02');
  const format = 'DD/MM/YYYY [às] HH[h]mm[min] e s [segundos].';

  context.is(nanodate(date, format), '03/04/0999 às 05h38min e 2 segundos.');
});
