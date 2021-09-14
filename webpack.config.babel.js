import yargs from 'yargs';

const { optimizeMinimize } = yargs.alias('p', 'optimize-minimize').argv;

export default {
  mode: 'production',
  entry: { app: './src/index.js' },
  output: {
    path: __dirname + '/dist',
    filename: optimizeMinimize ? `tiny.min.js` : `tiny.js`,
    libraryTarget: 'umd'
  },
  optimization: {
    minimize: !!optimizeMinimize,
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader', enforce: 'pre' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
    ]
  },
  devtool: optimizeMinimize ? 'source-map' : false
};

