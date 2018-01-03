import babel from 'rollup-plugin-babel';
import pkg from './package.json';

export default {
  input: './src/funss.js',

  output: [
    { file: pkg.main, format: 'umd', name: 'funss' },
    { file: pkg.module, format: 'es' },
  ],

  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
};
