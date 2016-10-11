module.exports = {
  entry: {
    docs: './docs/index.jsx',
    styles: './src/oui/oui.scss',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name]-[hash].js',
    path: __dirname + '/dist/docs/js/',
    publicPath: 'js/',
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json',
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'postcss-loader', 'sass'],
      },
    ],
  },
  postcss: () => {
    return [
      require('autoprefixer'),
    ];
  },
};
