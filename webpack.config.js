require('core-js/stable');
require('regenerator-runtime/runtime');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProduction = process.env.NODE_ENV === 'production';
const stylesHandler = 'style-loader';

const config  = {
  devServer: {
    server: "https",
    liveReload: true,
    magicHtml: true,
    open: true,
    port: 3000,
    host: '0.0.0.0',
    allowedHosts: [
      '0.0.0.0',
      '*.local',
      '*.localhost',
      'localhost',
    ],
    static: {
      directory: path.join(__dirname, 'dist'),
      publicPath: '/',
    },
    compress: true,
  },
  entry: {
    main: './src/index.js',
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'bin/[name].js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              typeCheck: false,
            },
          },
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env', '@babel/typescript',
                '@babel/preset-react'
              ],
            },
          },
        ],
      },
      {
        test: /\.(js|jsx)$/i,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react',
          ],
        },
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: [
            stylesHandler,
            'css-loader',
            'postcss-loader',
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        exclude: /node_modules/,
        type: 'asset',
      },
    ],
  },
}

module.exports = () => {
  if (isProduction) {
    config.mode = 'production';
  } else {
    config.mode = 'development';
  }
  return config;
}