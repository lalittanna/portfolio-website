const { merge } = require('webpack-merge');
const path = require('path');
const commonConfiguration = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(commonConfiguration, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../build'), // specify the output directory
        filename: '[name].[contenthash].js', // hashed filenames for cache busting
    },
    plugins: [new CleanWebpackPlugin()],
});
