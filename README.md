# tiny-date-format

`tiny-date-format` is a small library (around 400 B when gziped & minified) to format JavaScript `Date` object using same tokens as moment.

## Install

`tiny-date-format` is published under NPM registry.

```sh
npm install --save tiny-date-format

# Use the command below if you're using Yarn.
yarn add tiny-date-format
```

## Usage

`tiny-date-format` exports a function to format JavaScript `Date` object using [moment tokens](http://momentjs.com/docs/#/displaying/format/).

```js
import format from 'tiny-date-format';

format(new Date(), 'DD/MM/YYYY HH [hours] and mm [minutes].');
// I'm escaping "hours" and "minutes" using same syntax as moment.
```

## Supported tokens

Right now this lib supports the tokens below.

| Token | Type   | Range        |
| ----- | ------ | ------------ |
| DD    | Day    | 01 to 31     |
| D     | Day    | 1 to 31      |
| MM    | Month  | 01 to 12     |
| M     | Month  | 1 to 12      |
| YYYY  | Year   | 0000 to 9999 |
| YY    | Year   | 0 to 99      |
| HH    | Hour   | 00 to 23     |
| H     | Hour   | 0 to 23      |
| mm    | Minute | 00 to 59     |
| m     | Minute | 0 to 59      |
| ss    | Second | 00 to 59     |
| s     | Second | 0 to 59      |
| [*]   | Escape | &nbsp;       |

## License

Released under MIT license. You can see it [here](./LICENSE).
