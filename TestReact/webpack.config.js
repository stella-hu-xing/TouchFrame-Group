var webpack = require('webpack');

module.exports = {
    // 页面入口文件配置
    entry : {
        'main': './www/scripts/main.jsx'
    },
    // 入口文件输出配置
    output : {
        path : __dirname,
        filename : 'www/bundle.js'
    },
    module: {
        // 加载器配置
        loaders: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
        },
        {
            test: /\.jsx$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
              presets: ['es2015', 'react']
            }
        },
        {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }
        ]      
    },
    // file type support
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.json'],
    },
    plugins : [
        // minimize the size of js file
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),
    ]
}
