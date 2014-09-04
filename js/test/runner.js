require.config({
  baseUrl: '../',
  paths: {
    'jquery' : 'lib/jquery',
    'vue' : 'lib/vue'
  },
  shim: {
    'jquery' : {
      exports: '$'
    },
    'vue' : {
      exports: 'Vue'
    }
  }
});

require(['tests/services/tab.js', 'tests/services/dropdown.js'], function() {
  if (typeof mochaPhantomJS !== "undefined") {
    mochaPhantomJS.run();
  } else {
    mocha.run();
  }
});

