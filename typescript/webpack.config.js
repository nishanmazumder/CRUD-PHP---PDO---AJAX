const path = require("path")

module.exports = {
    entry: "./custom.js",
    target: ["web", "es5"],
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, "/webpack")
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }
        ]
    }
}
