module.exports = {
    entry: ['./src/bootstrap.ts'],
    output: {
        filename: './js/bundle.js'
    },
    resolve: { extensions: ['.js', '.ts'] },
    module: {
        loaders: [
            { test: /\.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /\.html$/, loader: 'html-loader?minimize=false' },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
        ]
    },
    devtool: 'source-map'
};