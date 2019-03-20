const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    devServer: {
	hot: true
    },
    output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'index.bundle.js'
    },
    plugins: [
	      new HtmlWebpackPlugin({
		      title: 'Holberton School webpack',
		      filename: 'index.html'
		  }),
	      new webpack.HotModuleReplacementPlugin()
	      ]
};
