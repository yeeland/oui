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
<<<<<<< HEAD
=======
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
>>>>>>> 9393726f537236805add0e53b2246d07be0cd611
    ],
  },
};
