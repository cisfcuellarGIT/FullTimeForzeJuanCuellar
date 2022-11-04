//Imports to bundle server
const webpack = require('webpack');
const path = require('path');


//__dirname
const CURRENT_WORKING_DIR = process.cwd();

//Define webpack configuration:
//main.js as entry point to bundle the frontend 
//bundle.js as the output bundle file 
//Final result made for production

const config = {
    mode: 'production',
    entry: [
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
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
    }
};

module.exports = config;
