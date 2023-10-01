const HtmlWebpackPlugin = require('html-webpack-plugin'); // устанавливаем плагин
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
	entry: {
		app: "./src/assets/js/index.js", // app === будет названием файла
	},
	output: {
		clean: true,
		filename: "[name].bundle.js", // будет подставляться app.bundle.js
		path: path.resolve(__dirname, 'dist'), // куда будем обработанный файл, в какую папку
	},
	mode: "production", //development
	// для сервера
	devServer: {
		static: "./src",
		compress: true,
		port: 9000,
		hot: true,
	},
	// настройка для всего остального
	module: {
		rules: [
			// для css и scss
			{
				test: /\.(s[ac]ss|css)$/i,
				use: ["style-loader", "css-loader", "sass-loader"] // устанавливаем лоадары
			},
			// для картинок
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			}
		]
	},
	plugins: [
		// для html
		new HtmlWebpackPlugin({
			title: "God Of War - ", //title в html
			template: "src/index.html"
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.resolve(__dirname, 'src/assets'),
					to: path.resolve(__dirname, 'dist/assets')
				}
			]
		})
	]
}