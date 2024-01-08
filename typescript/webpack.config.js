const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: [
		// "./custom.js",
		"./src/app.tsx",
		// "./src/todo/App.tsx"
	],
	// context: path.resolve(__dirname, './src'),
	target: ["web", "es5"],
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, "./webpack"),
		publicPath: './webpack'
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, './webpack')
		},
		// historyApiFallback: {
		// 	index: '/webpack/index.html'
		// },
		compress: true,
		port: 9000
	},
	module: {
		rules: [
			{
				test: /\.(js|ts)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(png|jpe?g|gif)$/i,
				use: [
					{
						loader: 'file-loader',
					},
				],
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
						}
					},
				],
				type: 'javascript/auto'
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	watchOptions: {
		ignored: /node_modules/,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'index.html'
		})
	]
}
