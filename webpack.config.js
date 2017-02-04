const webpack = require('webpack');
const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');
const { version } = require('./package.json');

const plugins = [
  new WebpackNotifierPlugin({
    contentImage: path.join(__dirname, 'assets/louis.png'),
  }),
];

// Run on Travis CI (or another integration suite) or when building for
// production.
if (process.env.CONTINUOUS_INTEGRATION || process.env.NODE_ENV === 'production') {
  // Fail if there is an error on Travis CI
  // http://dev.topheman.com/how-to-fail-webpack-build-on-error/
  plugins.push(new webpack.NoErrorsPlugin());
  // Set environment as "production" so that we ship a slimmer version of
  // React in the OUI documentation.
  plugins.push(new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production'),
    },
  }));
  // Compress the JavaScript
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    mangle: false,
  }));
}

module.exports = {
  entry: {
    docs: './docs/index.js',
    styles: './src/oui/oui.scss',
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name]-[hash].js',
    path: `${__dirname}/dist/docs/oui/${version}/js/`,
    publicPath: `/docs/oui/${version}/js/`,
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
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: `${__dirname}/dist/docs/oui/${version}/`,
  },
  devtool: 'source-map',
  plugins: plugins,
  resolve: {
    root: [
      path.resolve('./'),
    ],
  },
  postcss: () => {
    return [
      require('autoprefixer'),
    ];
  },
};
