const path = require('path');

const SOURCE = './source';

module.exports = {
	title: 'RAMBLER&Co AdTech UI Kit',
	sections: [
		{
			name: 'Введение',
			content: './README.md',
		},
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
		const sourceDir = path.resolve(__dirname, SOURCE);
		const componentsDir = path.resolve(__dirname, `${SOURCE}/components`);

		webpackConfig.module.loaders.push(
			{
				test: /\.jsx?$/,
				include: sourceDir,
				loader: 'babel',
			},
			{
				test: /\.styl$/,
				include: componentsDir,
				loader: 'style!css!stylus',
			}
		);

		webpackConfig.resolve.alias = {
			_utils: path.resolve(__dirname, `${SOURCE}/utils`),
			_styles: path.resolve(__dirname, `${SOURCE}/styles`),
		};

		return webpackConfig;
	},
};
