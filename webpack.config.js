const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

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