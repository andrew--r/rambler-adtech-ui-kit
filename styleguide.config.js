const path = require('path');

module.exports = {
	title: 'React UI kit boilerplate',
	components: './source/components/**/*.jsx',
	sections: [
		{
			name: 'Формы',
			components: './source/components/*(Button|Input|Label|RadioToggle)/*.jsx',
		},
	],
	updateWebpackConfig(webpackConfig) {
		const componentsDir = path.join(__dirname, 'source/components');

		webpackConfig.module.loaders.push(
			{
				test: /\.jsx?$/,
				include: componentsDir,
				loader: 'babel',
			},
			{
				test: /\.styl$/,
				include: componentsDir,
				loader: 'style!css!stylus',
			}
		);

		return webpackConfig;
	},
};
