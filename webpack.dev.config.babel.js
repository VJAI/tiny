import HtmlWebpackPlugin from 'html-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';

export default {
  mode: 'development',
  entry: { app: './dev.js' },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'eslint-loader', enforce: 'pre' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' },
      { test: /\.s[ac]ss$/i, use: ['style-loader', 'css-loader', 'sass-loader' ] },
      { test: /\.html$/i, loader: 'raw-loader', exclude: /index.html/ }
    ]
  },
  devServer: {
    inline: true,
    hot: true
  },
  plugins: [
    new HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html',
      inject: true
    })
  ],
  devtool: 'source-map'
};
