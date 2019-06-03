const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.js',
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.html$/,
          use: [{ loader: 'html-loader' }],
        },
        {
          test: /\.css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: 'dist',
              },
            },
            'css-loader',
          ],
        },
        {
          test: /\.js/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
          exclude: /(node_modules)/,
        },
      ],
    }       
};
module.exports = {
    plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
     
              
};
