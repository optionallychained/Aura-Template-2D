const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, options) => {
    const dev = options.mode === 'development';

    const config = {
        entry: './src/index.ts',
        devtool: dev ? 'inline-source-map' : false,
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: 'ts-loader',
                    exclude: /node_modules/
                },
            ],
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    { from: './src/res', to: 'res' }
                ]
            }),
            new HtmlWebpackPlugin({
                title: 'Aura2D Game'
            })
        ],
        resolve: {
            extensions: ['.ts', '.js']
        },
        output: {
            filename: 'main.js',
            path: path.resolve(__dirname, dev ? 'dev' : 'dist'),
        }
    };

    if (dev) {
        config.devServer = {
            contentBase: './dev'
        };
    }

    return config;
};
