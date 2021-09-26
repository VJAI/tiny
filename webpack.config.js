const path = require('path');

module.exports = {
  mode: 'development',
  entry: { app: './dev.ts' },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.ts$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname), 'node_modules'],
    extensions: ['.ts', '.js', '.jsx', '.json']
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname)
    }
  },
  devtool: 'source-map'
};
