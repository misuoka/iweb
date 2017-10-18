/**
 * 依赖配置
 * @type {Object}
 */
require.config({
  baseUrl: 'js/moudles',
  map: {
    '*': {
      'css': '../lib/css.min'
    }
  },
  paths: {　　　　　　
    "jquery": "../lib/jquery-1.12.0.min",
    "jqueryUI": "../lib/jquery-ui/jquery-ui.min",
    "bootstrap": "../lib/bootstrap-3.3.7-dist/js/bootstrap.min"
  },
  shim: {
    jqueryUI: {
      deps: [
        'jquery',
        'css!../lib/jquery-ui/jquery-ui.min.css'
      ]
    },
    bootstrap: {
      deps: [
        'jquery',
        'css!../lib/bootstrap-3.3.7-dist/css/bootstrap.min.css'
      ]
    },
    layout: {
      deps: [
        'jquery',
        'css!../../css/main.css'
      ]
    },
    control: {
      deps: ['jquery']
    }
  }
});

require([
  'jquery',
  'jqueryUI',
  'layout',
  'control',
  'bootstrap'
], function($, $ui, layout, control) {

  $(function() {
    // 初始化
    layout.init();
    control.init();
  }());

});