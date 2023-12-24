const path = require("path")

module.exports = {
	entry: "./custom.js",
	target: ["web", "es5"],
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, "./webpack"),
	},
	devServer: {
		static: {
			directory: path.resolve(__dirname, './webpack')
		}
	},
	module: {
		rules: [
			{
				test: /\.(js)x?$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	watchOptions: {
		ignored: /node_modules/,
	}
}
