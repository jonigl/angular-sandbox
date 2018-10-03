const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin');

module.exports = {
  entry: './src/main.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['ts-loader', 'angular2-template-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.(html|css)$/,
        loader: 'raw-loader'
      },
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new webpack.DefinePlugin({
      // global app config object
      config: JSON.stringify({
        apiUrl: 'http://localhost:8080/api/v1'
      })
    }),
    // Workaround for Critical dependency 
    // The request of a dependency is an expression in ./node_modules/@angular/core/fesm5/core.js
    new webpack.ContextReplacementPlugin(
      /\@angular(\\|\/)core(\\|\/)fesm5/,
      helpers.root('./src'),
      {}
    ),
    // Remove `System.import()` usage in favor of `import()`
    // https://github.com/angular/angular/issues/21560#issuecomment-416991945
    new FilterWarningsPlugin({ 
      exclude: /System.import/ 
    })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: true
  },
  devServer: {
    host: '0.0.0.0', 
    port: 4000,
    historyApiFallback: true
  }
};