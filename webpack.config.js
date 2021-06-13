const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    devtool: 'inline-source-map',

    // https://webpack.js.org/configuration/dev-server
    devServer: {
        index: 'index.html',
        writeToDisk: true,
        open: true,
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },

    plugins: [
        // HTML ファイルの出力設定
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};
