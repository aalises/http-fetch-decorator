import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: [
    { file: 'dist/http-fetch-decorator.umd.js', format: 'umd', name: 'httpFetchDecorator' }
  ],
  plugins: babel()
}
