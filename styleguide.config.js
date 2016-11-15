const path = require('path');

const SOURCE = './source';

module.exports = {
	title: 'RAMBLER&Co AdTech UI Kit',
	sections: [
		{
			name: 'Формы',
			components: `${SOURCE}/components/forms/**/*.jsx`,
		},
		{
			name: 'Иконки',
			components: `${SOURCE}/components/icons/**/*.jsx`,
		},
		{
			name: 'Остальное',
			components: `${SOURCE}/components/other/**/*.jsx`,
		},
	],
	updateWebpackConfig(webpackConfig) {
		const componentsDir = path.resolve(__dirname, `${SOURCE}/components`);

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

		webpackConfig.resolve.alias = {
			_styles: path.resolve(__dirname, `${SOURCE}/styles`),
		};

		return webpackConfig;
	},
};
