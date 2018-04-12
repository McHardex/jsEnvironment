import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import WebpackMd5HAsh from 'webpack-md5-hash';

export default {
    devtool: 'source-map',
    entry: {
        vendor: path.resolve(__dirname, 'src/vendor'),
        main: path.resolve(__dirname, 'src/index')
    },
    target: 'web',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: '[name].[chunkhash].js'
    },
    plugins: [
        // Hash the files using Md5 so that their name change when the content changes.
        new WebpackMd5HAsh(),
        // Use a CommonsChunkPlugin to create a seperate bundle
        // of vendor libraries so that they are cached seperately
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        //create html file that includes reference to bundled JS
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            },
            inject: true
        }),
        // Eliminating duplicate packages when duplicating bundle
        new webpack.optimize.DedupePlugin(),
        // Minify Js
        new webpack.optimize.UglifyJsPlugin()
    ],
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loaders: ['babel-loader'] },
            { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
        ]
    }
}
