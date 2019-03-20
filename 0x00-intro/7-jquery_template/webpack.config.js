const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
	path: path.resolve(__dirname, 'dist'),
	filename: 'index.bundle.js'
    },
    plugins: [
	      new HtmlWebpackPlugin({
		      title: 'Holberton School webpack',
		      template: './src/index.html',
		  })
	      ]
};
