import { resolve } from 'path';

import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export const context = __dirname;
export const entry = {
    app: './src/index.js'
};
export const output = {
    filename: '[name].js',
    path: resolve(__dirname, 'dist'),
};
export const module = {
    rules: [{
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
    }, {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: ['url-loader']
    }]
};
export const plugins = [
    new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
];