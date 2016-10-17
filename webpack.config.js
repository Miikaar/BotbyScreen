let config = require('webpack-es6-config');
let Webpack = require('webpack');
var path = require('path');
var nodeModulesPath = path.resolve(__dirname, 'node_modules');
var buildPath = path.resolve(__dirname, 'dist', 'main.jsx');
var mainPath = path.resolve(__dirname, 'src', 'main.jsx');


module.exports = config({
  // Makes sure errors in console map to the correct file
  // and line number
  devtool: 'eval',
  entry: [

  // For hot style updates
  'webpack/hot/dev-server',

  // The script refreshing the browser on none hot updates
  'webpack-dev-server/client?http://localhost:8080',

  // Our application
  mainPath],
  output: {

  // We need to give Webpack a path. It does not actually need it,
  // because files are kept in memory in webpack-dev-server, but an
  // error will occur if nothing is specified. We use the buildPath
  // as that points to where the files will eventually be bundled
  // in production
  path: buildPath,
  filename: 'main.jsx',

  // Everything related to Webpack should go through a build path,
  // localhost:3000/build. That makes proxying easier to handle
  publicPath: '/build/'
  }, 
  module: {
      loaders: [{
          test: /\.js$/,
          exclude: [nodeModulesPath],
          loader: 'babel-loader',
          query: {
                  presets: ['es2015', 'react', 'react-hmre']
          }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
      ]
  },
  plugins: [new Webpack.HotModuleReplacementPlugin()]
});