module.exports = {
  entry: {
    demo: './src/index.jsx',
  },
  output: {
    filename: './dist/js/[name].js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
    ],
  },
};
