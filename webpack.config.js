const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const jsJsx = require('./webpack/jsJsx');
const vendor = require('./webpack/vendor');
const devserver = require('./webpack/devserver');
const css = require('./webpack/css');
const fileLoader = require('./webpack/file-loader');
const imagemin = require('./webpack/imagemin');
// const pug = require('./webpack/pug');
// const copy = require('./webpack/copy');

const common = merge([
  {
    entry: {
      index: './source/js/index.js'

      // app: [
      //   './source/js/index.js',
      //   './source/sass/style.scss'
      // ]
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      chunkFilename: 'js/[name].bundle-[chunkhash:4].js',
      filename: 'js/[name].bundle-[chunkhash:4].js'
    },
    mode: 'none',
    devtool: 'source-map',

    plugins: [
      new CleanWebpackPlugin('build', {
        root: __dirname,
        verbose: true,
        dry: false
      }),

      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index'],
        template: path.join(__dirname, 'source') + '/index.html'
      })
    ]
  },

  jsJsx(),
  vendor(),
  // pug(),
  css(),
  fileLoader()
  // copy()
]);

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      imagemin()
    ]);
  }

  if (env === 'development') {
    return merge([
      common,
      devserver()
    ]);
  }

  return null;
};

// npm install react react-dom --save
// npm install babel-preset-env babel-preset-react --save-dev

// npm install pug pug-loader --save-dev
// npm install extract-text-webpack-plugin --save-dev
// npm install copy-webpack-plugin --save-dev
