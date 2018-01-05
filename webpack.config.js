const webpack = require('webpack');
const path = require('path');

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return {
        entry: ['./src/bootstrap.ts'],
        output: {
            publicPath: '/js',
            path: path.join(__dirname, 'js'),
            filename: 'bundle.js'
        },
        resolve: { extensions: ['.js', '.ts'] },
        module: {
            loaders: [
                { test: /\.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader'] },
                { test: /\.html$/, use: ['html-loader?minimize=false'] },
                { test: /\.css$/, loaders: ['to-string-loader', 'style-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize'] }
            ]
        },
        devtool: 'source-map',
        plugins: [
            new webpack.DllReferencePlugin({
                context: __dirname,
                manifest: require('./js/vendor-manifest.json')
            })
        ].concat(isDevBuild ? [
            new webpack.NamedModulesPlugin(),
            new webpack.HotModuleReplacementPlugin()
        ] : []),
        devServer: {
            port: 3000,
            hot: true
        }
    };
}