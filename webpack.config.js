const MODE = 'development';  // 'production' or 'development'

// development に設定するとソースマップ有効でJSファイルが出力される
const enabledSourceMap = (MODE === 'development');

const path = require('path');
const outputPath = path.join(__dirname, 'dist');

module.exports = {
    mode: MODE,
    entry: {
        font: [
            './node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css',
            './node_modules/@fortawesome/fontawesome-free/css/solid.min.css'
        ],
        bulma: './node_modules/bulma/css/bulma.min.css',
        htmlRender: './webpack-index.js'
    },
    output: {
        path: outputPath,
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(s)?css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            url: true,
                            sourceMap: enabledSourceMap,

                            // 0 => no loaders (default);
                            // 1 => postcss-loader;
                            // 2 => postcss-loader, sass-loader
                            importLoaders: 2
                        },
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: enabledSourceMap,
                        }
                    }
                ],
            }, {
                // 画像など
                test: /\.(gif|png|jpg)$/,
                loader: 'url-loader'  // Base64化
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader'
            }
        ],
    },
    devServer: {
        host: '0.0.0.0',
        contentBase: outputPath
    },
    externals: [
        'fs',
        'xmlhttprequest'
    ],
};
