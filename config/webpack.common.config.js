const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './src/nuCookieBanner.js',
  output: {
    filename: 'nuCookieBanner.js',
    path: path.resolve(__dirname, '../dist'),
    library: 'nuCookieBanner',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env'
            ]
          }
        }
      },
      {                
        test: [/.css$|.scss$/],                
        use: [                    
         MiniCssExtractPlugin.loader,                  
         'css-loader',
         'sass-loader'
        ]            
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Nu Cookie Banner "script" Sample',
      template: './src/sample-script.html',
      filename: 'sample-script.html',
      inject: 'head'
    }),
    new HtmlWebpackPlugin({
      title: 'Nu Cookie Banner "import" Sample',
      template: './src/sample-import.html',
      filename: 'sample-import.html'
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: 'nu-cookie-banner.css'
      //chunkFilename: '[id].css',
      //ignoreOrder: false, // Enable to remove warnings about conflicting order
    }),
  ]
};