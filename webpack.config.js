const path = require('path');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: [
    './src/js/comment-manager.js',
    './src/js/ad-manager.js',
    './src/js/app.js',
  ],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname),
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: "babel-loader",
            options: {
                presets: ['env', 'es2015']
            }
        }
      }
    ]
  }
};