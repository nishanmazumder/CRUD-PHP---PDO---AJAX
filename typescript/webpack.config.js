const path = require("path")

module.exports = {
	entry: "./custom.js",
	target: ["web", "es5"],
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, "/webpack")
	},
	module: {
		rules: [
			{
				test: /\.m?js|jsx$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', "@babel/preset-react"]
					}
				}
			}
		]
	},
	resolve: {
		extensions: [".ts", ".js", ".jsx"],
	},
	watchOptions: {
		ignored: /node_modules/,
	}
}
