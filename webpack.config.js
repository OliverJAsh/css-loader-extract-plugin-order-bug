const path = require('path');
const webpack = require('webpack');

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
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
            },
        ],
    },
};
