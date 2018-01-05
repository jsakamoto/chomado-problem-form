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
    '@angular/material/prebuilt-themes/indigo-pink.css',
    'reflect-metadata',
    'rxjs',
    'zone.js'
];

module.exports = (env) => {
    const isDevBuild = !(env && env.prod);
    return {
        entry: vendorModules,
        output: {
            filename: './js/vendor.js',
            library: libName
        },
        resolve: { extensions: ['.js', '.ts'] },
        module: {
            loaders: [
                { test: /\.ts$/, use: ['awesome-typescript-loader', 'angular2-template-loader'] },
                { test: /\.html$/, use: ['html-loader?minimize=false'] },
                { test: /\.css$/, loaders: ['to-string-loader', 'style-loader', isDevBuild ? 'css-loader' : 'css-loader?minimize'] }
            ]
        },
        plugins: [
            new webpack.DllPlugin({
                name: libName,
                path: './js/vendor-manifest.json'
            })
        ]
    };
}