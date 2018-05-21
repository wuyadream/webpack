/**
 * Created by wuyadream on 2018/1/10.
 */
var htmlWepackPlugin = require('html-webpack-plugin');
var path= require('path');

module.exports= {
  context: __dirname,
  entry: './src/app.js',
  output: {
    filename: './dist/js/app.bundle.js'
  },
  module: {
    loaders: [
              {
                test:  /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, '/node_modules'),
                include: path.resolve(__dirname, '/src'),
                options: {
                  presets: ['latest']
                }
              },
              {
                test:/\.css$/,
                use:[
                        { loader: 'style-loader'},
                        { loader: 'css-loader'},
                        { loader: 'postcss-loader',
                          options: {
                            plugins: [
                              require('postcss-import'),
                              require('autoprefixer')({
                                browsers: ['last 5 versions']    // 添加浏览器前缀
                              })
                            ]
                          }}
                      ]
              },
              {
                test: /\.less$/,
                use: [
                      { loader: 'style-loader'},
                      { loader: 'css-loader'},
                      { loader: 'less-loader'}
                      ]
              },
              {
                test: /\.sass$/,
                use: [
                      { loader: 'style-loader'},
                      { loader: 'css-loader'},
                      { loader: 'sass-loader'}
                ]
              }
    ]
  },
  plugins: [
    new htmlWepackPlugin({
      filename: './dist/index.html',
      template: 'index.html',
      inject: 'body',
    })
  ]
};