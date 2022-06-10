/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const dotenv = require('dotenv');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const isDevelopment = process.env.NODE_ENV !== 'production';
  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const envPath = basePath + '.' + process.env.KARMA_ENV;
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  const fileEnv = dotenv.config({ path: finalPath }).parsed;
  let envStuff = { ...process.env };

  if (fileEnv) envStuff = { ...fileEnv, ...envStuff };

  const envKeys = Object.keys(envStuff).reduce((prev, next) => {
    prev[`__${next}__`] = JSON.stringify(envStuff[next]);
    return prev;
  }, {});

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'bundle.js',
    },
    devServer: {
      historyApiFallback: {
        rewrites: [{ from: /\//, to: '/404.html' }],
      },
      watchFiles: path.resolve(__dirname, 'src'),
      hot: true,
      open: true,
      host: process.env.HOST || 'localhost',
      port: 3000,
    },
    devtool: isDevelopment ? 'source-map' : 'eval-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          include: /src/,
          use: [
            {
              loader: 'babel-loader',
              options: {
                plugins: [
                  ...[isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                  'babel-plugin-styled-components',
                ],
                presets: [
                  [
                    '@babel/preset-env',
                    {
                      modules: false,
                      targets: {
                        browsers: 'last 2 versions, ie 11',
                        node: 'current',
                      },
                    },
                  ],
                  '@babel/preset-react',
                  '@babel/preset-typescript',
                ],
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader, 
            'css-loader',
          ],
        },
        {
          test: /\.scss$/,
          include: /src/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'assets',
              },
            },
          ],
        },
        {
          test: /\.(png|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.json', '.css', '.scss'],
    },
    plugins: [
      ...[isDevelopment && new ReactRefreshWebpackPlugin()].filter(Boolean),
      new webpack.DefinePlugin({ ...envKeys }),
      new MiniCssExtractPlugin({
        filename: '[name].css',
        chunkFilename: '[id].css',
      }),
      new HtmlWebpackPlugin({
        template: './index.html',
        inject: true,
        filename: 'index.html'
      }),
    ],
  };
};
