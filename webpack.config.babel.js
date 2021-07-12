import pkg from './package.json';
import yargs from 'yargs';

const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv;
const version = pkg.version;

export default {
  mode: 'production',
  entry: { app: './kitty.js.js' },
  output: {
    path: __dirname + '/dist',
    filename: optimizeMinimize ? `kitty.js-${version}.min.js` : `kitty.js-${version}.js`,
    library: 'httpSupervisor',
    libraryExport: 'default',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader', enforce: 'pre' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devtool: optimizeMinimize ? 'source-map' : false
};

