const es6Loader = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel'
};

module.exports = {
  devServer: {
    // This is required for webpack-dev-server. The path should
    // be an absolute path to your build destination.
    outputPath: './dist'
  },

  module: {loaders: [es6Loader] },

  // Paths relative to root
  entry: './src/main.js',
  output: {
    path: './dist',
    filename: 'main.js'
  }
};
