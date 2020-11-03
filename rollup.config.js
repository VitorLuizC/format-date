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
  input: './src/format-date.js',
  output: [
    Option({
      file: './dist/format-date.js',
      format: 'commonjs',
    }),
    Option({
      file: './dist/format-date.esm.js',
      format: 'esm',
    }),
    Option({
      file: './dist/format-date.mjs',
      format: 'esm',
    }),
    Option({
      file: './dist/format-date.umd.js',
      name: 'formatDate',
      format: 'umd',
    }),
    Option({
      file: './dist/format-date.umd.min.js',
      name: 'formatDate',
      format: 'umd',
      plugins: [terser()],
    }),
  ],
};

export default options;
