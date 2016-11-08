import webpack from 'webpack';
import WebpackConfig from 'webpack-config';


module.exports = new WebpackConfig()
	.extend('webpack.config.base.js')
	.merge({
		devtool: 'source-map',
	});
