const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/entry.js',
    output: {
        path: path.resolve(__dirname, 'target'),
        filename: 'main.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: ExtractTextPlugin.extract({
                    use: [{ loader: 'css-loader' }],
                }),
            },
        ],
    },
    plugins: [
        new ExtractTextPlugin({
            filename: 'main.css',
        }),
    ],
};
