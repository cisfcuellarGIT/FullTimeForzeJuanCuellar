//Imports to bundle server
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

//__dirname
const CURRENT_WORKING_DIR = process.cwd();

const config = {
    name: 'server',
    entry: [path.join(CURRENT_WORKING_DIR , './server/server.js')],
    target: 'node',
    output: {
        path: path.join(path.resolve(CURRENT_WORKING_DIR, ), '/dist/'),
        filename: 'server.generated.js',
        libraryTarget: 'commonjs2',
    },
    externals: [nodeExternals()],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader'
                ]
            },
            {
                test: /\.(ttf|eot|svg|gif|jpg|png)(\?[\s\S]+)?$/,
                use: 'file-loader'
            }
        ]
    },
};

module.exports = config;