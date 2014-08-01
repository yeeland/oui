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

require(['tests/test1.js'], function() {
  mocha.run();
});

