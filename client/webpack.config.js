const path = require('path');

module.exports = {
	entry: {
		app: ['babel-polyfill', './src/index.js'],
	},
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'app.bundle.js',
	},
	module: {
		loaders: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['env', 'stage-0'],
				},
			},
		],
	},

	devServer: {
		proxy: {
			'/api': 'http://localhost:5000',
		},
	},
};
