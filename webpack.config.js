const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin =  require ( 'html-webpack-plugin' );

const PATHS = {
	source: path.join(__dirname, 'source'),
	build: path.join(__dirname, 'build'),
}

module.exports = {
	entry: ['react-hot-loader/patch',
    // activate HMR for React
    'webpack-dev-server/client?http://localhost:3000',
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint
    'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    PATHS.source + '/index.js',
    // the entry point of our app
    ],
	output: {
		path: PATHS.build,
		filename: '[name].js'
	},
    resolve: {
        alias: {
          Table: path.resolve(__dirname, 'source/table'),
          Info: path.resolve(__dirname, 'source/info')
        },
    },
	plugins: [
        new webpack.HotModuleReplacementPlugin(),
        
        new webpack.NamedModulesPlugin(),
        
        new webpack.NoEmitOnErrorsPlugin(),

		new HtmlWebpackPlugin({
            filename: './index.html',
            minify: false,
            template: 'source/index.html',
            inject: 'body',
            xhtml: true
		})
	],
	devServer: {
		stats: 'errors-only',
        host: 'localhost',
        port: 3000,
        hot: true
	},
	module: {
        rules: [
            {
                test: /\.js?$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            }, {
                test: /\.less?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
};