var CopyWebpackPlugin = require('copy-webpack-plugin');

var config = {
  entry: './src/index.js',

  output: {
      path:'./public/bundle/',
      filename: 'bundle.js',
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  rules: [
    {
      test: /\.css$/,
      use: [ 'style-loader', 'css-loader' ]
    }
  ],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css!',
        exclude: /node_modules/
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false',
          {
            loader: 'image-webpack-loader',
            query: {
              mozjpeg: {
                progressive: true
              },
              gifsicle: {
                interlaced: false
              },
              optipng: {
                optimizationLevel: 4
              },
              pngquant: {
                quality: '75-90',
                speed: 3
              }
            }
          }
        ],
        exclude: /node_modules/
      }
    ],
  },
  devtool: 'source-map'
}

module.exports = config;
