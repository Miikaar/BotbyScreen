var config = require('webpack-es6-config');
var path = require("path");

<<<<<<< HEAD
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
=======
module.exports = {
	entry: "./entry.js",
	output: {
		path: __dirname,
		filename: "bundle.js"
	},
	module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel",
        include: __dirname,
        query: {
          presets: [ 'es2015', 'react', 'react-hmre' ]
        }
      },
      {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
      }
    ]
  },
	/*
	module: {
		loaders: [
			{
  				test: require.resolve('react'),
  				loader: 'expose?React'
			},
			{
				test: /\.jsx?$/,
      			// Enable caching for improved performance during development
      			// It uses default OS directory by default. If you need
      			// something more custom, pass a path to it.
      			// I.e., babel?cacheDirectory=<path>
      			loaders: ['babel?cacheDirectory'],
      			// Parse only app files! Without this it will go through
      			// the entire project. In addition to being slow,
      			// that will most likely result in an error.
      			// include: PATHS.app
			}
		]
	},*/
	resolve: {
  		alias: {
    		'react': 'react-lite',
    		'react-dom': 'react-lite'
  		}
	},
};
>>>>>>> 0d91a0f935d5e6a9f30820fea5221f903fa169e4
