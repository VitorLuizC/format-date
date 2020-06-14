import { terser } from 'rollup-plugin-terser';

/**
 * Creates an output options object.
 * @param {import('rollup').OutputOptions} options
 * @returns {import('rollup').OutputOptions}
 */
const Option = (options) => ({
  exports: 'named',
  sourcemap: true,
  ...options,
});

/**
 * An object with all configuration for `Rollup.js`.
 * @type {import('rollup').RollupOptions}
 */
const options = {
  input: './src/tiny-date-format.js',
  output: [
    Option({
      file: './dist/tiny-date-format.js',
      format: 'commonjs',
    }),
    Option({
      file: './dist/tiny-date-format.esm.js',
      format: 'esm',
    }),
    Option({
      file: './dist/tiny-date-format.umd.js',
      name: 'tinyDateFormat',
      format: 'umd',
    }),
    Option({
      file: './dist/tiny-date-format.umd.min.js',
      name: 'tinyDateFormat',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
};

export default options;
