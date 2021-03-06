const webpack = require('webpack');
const path = require('path');

module.exports = {
	entry: path.join(__dirname, './src/js/poketype.js'),
	output: {
		path: path.join(__dirname, './docs/js'),
		filename: 'poketype.js'
	},
    devtool: 'inline-source-map',
	module: {
		loaders: [
			{
    			loader: 'babel-loader',
    			options: {
    				presets: ['es2015','react']
    			}
			}
		]
	}
}
