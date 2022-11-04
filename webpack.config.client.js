//Imports to bundle server
const webpack = require('webpack');
const path = require('path');

//__dirname
const CURRENT_WORKING_DIR = process.cwd();

//Define webpack configuration:
//main.js as entry point to bundle the backend 
//webpack hot reload to development  
//skipping emitting when there are compileerrors
//bundle.js as the output bundle file 

const config = {
    name: 'browser',
    mode: 'development',
    devtool: 'eval-source-app',
    entry: [
        'webpack-hot-middleware/client?reload=true',
        path.join(CURRENT_WORKING_DIR, 'client/main.js')
    ],
    output: {
        path: path.join(CURRENT_WORKING_DIR, '/dist'),
        filename: 'bundle.js',
        publicPath: '/dist/'
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
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        alias: {
            'react-dom': '@hot-loader/react-dom'
        }
    },
};

module.exports = config;
