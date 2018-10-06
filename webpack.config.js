const path = require('path');

module.exports = {
  entry: "./src/assets/js/App.js",
  output: {
    path: path.resolve(__dirname, "./src/assets/js/"),
    filename: 'Bundle.js'
  }, 
  module : {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['env']
        },
        test: /\.js$/,
        exclude: /node_modules/
      }
    ]
  }
}