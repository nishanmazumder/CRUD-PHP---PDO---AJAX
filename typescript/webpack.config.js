const path = require("path")

module.exports = {
	entry: "./custom.js",
	target: ["web", "es6"],
	mode: 'development',
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, "/webpack")
	},
	module: {
		rules: [
			{
				test: /\.m?js|jsx|tsx|ts$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							"@babel/preset-env",
							"@babel/preset-react",
							"@babel/preset-typescript"
						]
					}
				}
			}
		]
	},
	resolve: {
		extensions: [".ts", ".tsx", ".js", ".jsx"],
	},
	watchOptions: {
		ignored: /node_modules/,
	}
}
