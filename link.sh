#!/bin/sh
rm js/lib/*.js
rm js/text.js

ln -s ../node_modules/requirejs-text/text.js js/text.js
ln -s ../../node_modules/almond/almond.js js/lib/almond.js
ln -s ../../node_modules/vue/dist/vue.min.js js/lib/vue.min.js
ln -s ../../node_modules/jquery/dist/jquery.min.js js/lib/jquery.min.js
ln -s ../../node_modules/lodash/dist/lodash.min.js js/lib/lodash.min.js
ln -s ../../node_modules/requirejs/require.js js/lib/require.js
