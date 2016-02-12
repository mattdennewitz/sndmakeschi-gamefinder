var webpack = require('webpack');

var config = {
  devtool: 'source-map',

  entry: ['./src/index.js'],

  output: {
    path: './build',
    filename: 'app.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress:{
        warnings: true
      }
    })
  ]
}

module.exports = config;
