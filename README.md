# `@bitty/format-date`

[![Bundle minified size](https://badgen.net/bundlephobia/min/@bitty/format-date)](https://bundlephobia.com/result?p=@bitty/format-date)
[![Bundle minified and gzipped size](https://badgen.net/bundlephobia/minzip/@bitty/format-date)](https://bundlephobia.com/result?p=@bitty/format-date)

`@bitty/format-date` is a small library (around 400 B when gziped & minified) to format JavaScript `Date` object using same tokens as moment.

- 📦 Distributions in ESM, CommonJS, UMD and UMD _minified_ formats.

- ⚡ Lightweight:
  - Weighs around 0.4KB (min + gzip).

- 🔋 Bateries included:
  - No dependencies.
  - Its not based on newer browser's APIs or es2015+ features.

- 🏷 Safe:
  - JSDocs and type declarations for IDEs and editor's autocomplete/intellisense.
  - Made with TypeScript as strict as possible.
  - Unit tests with AVA.

## Installation

This library is published in the NPM registry and can be installed using any compatible package manager.

```sh
npm install @bitty/format-date --save

# For Yarn, use the command below.
yarn add @bitty/format-date
```

### Installation from CDN

This module has a UMD bundle available through JSDelivr and Unpkg CDNs.

```html
<!-- For UNPKG use the code below. -->
<script src="https://unpkg.com/@bitty/format-date"></script>

<!-- For JSDelivr use the code below. -->
<script src="https://cdn.jsdelivr.net/npm/@bitty/format-date"></script>

<script>
  // UMD module is exposed through the "isNullish" global function.
  console.log(formatDate);
  //=> "[Function: formatDate]"

  console.log(formatDate(new Date(), 'YYYY-MM-DD'));
  //=> "2020-06-14"
</script>
```

## Usage

`@bitty/format-date` exports a function to format JavaScript `Date` object using [moment tokens](http://momentjs.com/docs/#/displaying/format/).

```js
import formatDate from '@bitty/format-date';

formatDate(new Date(), 'DD/MM/YYYY HH [hours] [and] mm [minutes].');
// I'm escaping "hours", "and" and "minutes" using same syntax as Moment.js.
```

## Tokens

Right now this lib supports the tokens below.

|       &nbsp; | Token  | Output                              |
| -----------: | :----- | :---------------------------------- |
|         Year | `YY`   | `70`, `71`, ... `19`, `20`.         |
|              | `YYYY` | `1970`, `1971`, ... `2019`, `2020`. |
|        Month | `M`    | `1`, `2`, ... `11`, `12`.           |
|              | `MM`   | `01`, `02`, ... `11`, `12`.         |
| Day of Month | `D`    | `1`, `2`, ... `30`, `31`.           |
|              | `DD`   | `01`, `02`, ... `30`, `31`.         |
|         Hour | `H`    | `1`, `2`, ... , `22`,`23`.          |
|              | `HH`   | `01`, `02`, ... , `22`,`23`.        |
|       Minute | `m`    | `1`, `2`, ... , `58`,`59`.          |
|              | `mm`   | `01`, `02`, ... , `58`,`59`.        |
|       Second | `s`    | `1`, `2`, ... , `58`,`59`.          |
|              | `ss`   | `01`, `02`, ... , `58`,`59`.        |
|       Escape | `[*]`  | &nbsp;                              |

## License

Released under [MIT License](./LICENSE).
