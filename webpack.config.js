const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: ['./src/bootstrap.ts'],
    output: {
        path: path.join(__dirname, 'js'),
        filename: 'bundle.js'
    },
    resolve: { extensions: ['.js', '.ts'] },
    module: {
        loaders: [
            { test: /\.ts$/, use: ['cache-loader', 'awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /\.html$/, use: ['cache-loader', 'html-loader?minimize=false'] },
            { test: /\.css$/, loaders: ['cache-loader', 'to-string-loader', 'style-loader', 'css-loader'] }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DllReferencePlugin({
            context: __dirname,
            manifest: require('./js/vendor-manifest.json')
        })
    ],
    devServer: {
        port: 3000,
        publicPath: '/js'
    }
};