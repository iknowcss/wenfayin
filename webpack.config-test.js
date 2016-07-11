const nodeExternals = require('webpack-node-externals');

const es6Loader = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  loader: 'babel',
  query: {
    presets: ['es2015']
  }
};

module.exports = {
  module: {
    loaders: [es6Loader]
  },
  target: 'node',
  node: {
    __dirname: false,
    __filename: false,
  },
  externals: [nodeExternals()]
};
