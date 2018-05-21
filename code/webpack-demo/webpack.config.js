/**
 * Created by wuyadream on 2018/1/10.
 */
var htmlWepackPlugin = require('html-webpack-plugin');

module.exports= {
  entry: {
    main: './src/js/main.js',
    a: './src/js/a.js',
    b: './src/js/b.js',
    c: './src/js/c.js'
  },
  output: {
    path: '/dist/js',
    filename: '[name].js',
    publicPath: 'http://cdn'
  },
  plugins: [
    new htmlWepackPlugin({
      filename: './dist/a.html',
      template: 'index.html',
      inject: false,
      title: 'this is a.html',
      date: new Date(),
      // chunks:['main', 'a'],  /* 配置引入的chunks */
      excludeChunks: ['b', 'c']  /* 排除chunks，其他的都引入 */
      /*minify: {
        removeComments: true,
        collapseWhitespace: true
      }*/
    }),
    new htmlWepackPlugin({
      filename: './dist/b.html',
      template: 'index.html',
      inject: false,
      title: 'this is b.html',
      date: new Date(),
      chunks: ['b', 'main']
    }),
    new htmlWepackPlugin({
      filename: './dist/c.html',
      template: 'index.html',
      inject: false,
      title: 'this is c.html',
      date: new Date(),
      chunks: ['c', 'main']
    })
  ]
};