const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.jsx',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-env', {
                                targets: {
                                    ie: '11',
                                    edge: '15',
                                    safari: '10',
                                    firefox: '50',
                                    chrome: '49',
                                }
                            }],
                            '@babel/preset-react'
                        ]
                    }
                },
            }
        ],
    },
    optimization: {
        splitChunks: {
            name: 'vendor', chunks: 'all'
        }
    }
};
