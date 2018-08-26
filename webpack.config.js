'use strict';

const path = require('path');

module.exports = {
    entry: './src/index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: 'pathOrUrlWhenProductionBuild'
    },
    devServer: {
        contentBase: path.join(__dirname, './'),
        overlay: true
    },
    module: {
        rules: [
            {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    resolve: {
    },
    devtool: 'source-map',
    plugins: [
    ]
};
