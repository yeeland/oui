module.exports = {
  entry: {
    app: './src/js/react/index.jsx',
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
        query: {
          presets: ['react', 'es2015'],
        },
      },
    ],
  },
};
