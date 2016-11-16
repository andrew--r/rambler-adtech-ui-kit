import path from 'path';
import webpack from 'webpack';
import glob from 'glob';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import autoprefixer from 'autoprefixer';


console.log(`NODE_ENV: ${process.env.NODE_ENV}`);

const SOURCE = './source';
const COMPONENTS = `${SOURCE}/components`;
const OUT = './lib';

const extractStylus = new ExtractTextPlugin('[name].css');

const componentsEntries = glob
	.sync(`${COMPONENTS}/**/*.jsx`)
	.reduce((acc, componentPath) => {
		let componentName = path.basename(componentPath).replace(path.extname(componentPath), '');

		if (/\/icons\//.test(path.dirname(componentPath))) {
			componentName = `Icon${componentName}`;
		}

		acc[componentName] = [componentPath];
		return acc;
	}, {});

const entries = Object.assign({}, componentsEntries, {
	index: [`${SOURCE}/index.js`],
});

module.exports = {
	entry: entries,
	output: {
		path: path.resolve(__dirname, OUT),
		filename: '[name].js',
		libraryTarget: 'umd',
	},
	resolve: {
		extensions: ['', '.js', '.jsx'],
		alias: {
			_utils: path.resolve(__dirname, `${SOURCE}/utils`),
			_styles: path.resolve(__dirname, `${SOURCE}/styles`),
		},
	},
	externals: [
		{
			react: {
				root: 'React',
				commonjs2: 'react',
				commonjs: 'react',
				amd: 'react',
			},
		},
	],
	module: {
		loaders: [
			{
				test: /\.jsx?/,
				exclude: /(node_modules)/,
				loader: 'babel',
			},
			{
				test: /\.styl$/,
				loader: extractStylus.extract('css!postcss!stylus'),
			},
		],
	},
	plugins: [
		extractStylus,
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
		}),
	],
	postcss: [
		autoprefixer({
			browsers: ['> 1%', 'last 5 versions'],
		}),
	],
};
