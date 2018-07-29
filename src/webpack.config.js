var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: path.join(__dirname, 'js/app/index.js'),
    output: {
        path: path.join(__dirname, '../public/js/'),
        filename: "index.js"
    },
    module: {
        rules: [
            // {
            //     test: require.resolve('jquery'),
            //     use: [{
            //         loader: 'expose-loader',
            //         options: 'jQuery'
            //     }, {
            //         loader: 'expose-loader',
            //         options: '$'
            //     }]
            // },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }
        ]
    },
    resolve:{
        alias:{
            jquery: path.join(__dirname, "js/lib/jquery-2.0.3.min.js"),
            mod: path.join(__dirname,'js/mod'),
            less: path.join(__dirname, 'less')
        }
    },
    plugins:[
        new webpack.ProvidePlugin({
            $: "jquery"
        }),
    ],
    devtool: 'cheap-module-source-map'
}