const webpack = require('webpack');

const libName = 'vendor_library';
const vendorModules = [
    '@angular/animations',
    '@angular/cdk',
    '@angular/common',
    '@angular/compiler',
    '@angular/core',
    '@angular/forms',
    '@angular/http',
    '@angular/material',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    '@angular/platform-browser/animations',
    //'@angular/router',
    '@angular/material/prebuilt-themes/indigo-pink.css',
    'reflect-metadata',
    'rxjs',
    'zone.js'
];

module.exports = {
    entry: vendorModules,
    output: {
        filename: './js/vendor.js',
        library: libName
    },
    resolve: { extensions: ['.js', '.ts'] },
    module: {
        loaders: [
            { test: /\.ts$/, use: ['cache-loader', 'awesome-typescript-loader', 'angular2-template-loader'] },
            { test: /\.html$/, use: ['cache-loader', 'html-loader?minimize=false'] },
            { test: /\.css$/, loaders: ['cache-loader', 'to-string-loader', 'style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        new webpack.DllPlugin({
            name: libName,
            path: './js/vendor-manifest.json'
        })
    ]
};