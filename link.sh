#!/bin/sh
rm -rf src/js/lib
rm src/js/text.js

mkdir src/js/lib/

ln -s ../../node_modules/requirejs-text/text.js src/js/text.js
ln -s ../../../node_modules/almond/almond.js src/js/lib/almond.js
ln -s ../../../node_modules/vue/dist/vue.min.js src/js/lib/vue.min.js
ln -s ../../../node_modules/jquery/dist/jquery.min.js src/js/lib/jquery.min.js
ln -s ../../../node_modules/lodash/dist/lodash.min.js src/js/lib/lodash.min.js
ln -s ../../../node_modules/requirejs/require.js src/js/lib/require.js
