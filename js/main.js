/**
 * 依赖配置
 * @type {Object}
 */
require.config({
  baseUrl: 'js/modules',
  map: {
    '*': {
      'css': '../lib/css.min'
    }
  },
  paths: {　　　　　　
    "jquery": "../lib/jquery-1.12.0.min",
    "jqueryUI": "../lib/jquery-ui/jquery-ui.min",
    "bootstrap": "../lib/bootstrap-3.3.7-dist/js/bootstrap.min",
    "layer": '../lib/layer/layer'
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
    layer: {
      deps: ['jquery', 'css!../lib/layer/theme/default/layer.css']
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
  'layout',
  'control',
  'bootstrap'
], function($, layout, control) {

  $(function() {
    // 初始化
    layout.init();
    control.init();
  }());

});