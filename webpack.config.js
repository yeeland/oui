var path = require('path');
var jsDist = __dirname + '/dist/js';

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: jsDist,
        filename: 'lego.debug.js',
    },
    module: {
        loaders: [
          {
            test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader',
          },
        ],
    },
};
