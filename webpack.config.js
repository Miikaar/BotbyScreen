var config = require('webpack-es6-config');
var path = require("path");

module.exports = config({
  	filename: 'main.jsx',
  	libraryName: 'BotbyScreen',
  	entry: './src/main.jsx',
  	output: {
    	path: path.resolve(__dirname, "build"),
    	publicPath: "/assets/",
    	filename: "bundle.js"
  	},
  	module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                    presets: ['es2015', 'react']
            }
        }]
   }
});