/**
 * 控制面板模块
 */
layui.define(['jqueryui', 'layer', 'layout'], function(exports) {
  var $ = layui.$;
  var layer = layui.layer;
  var layout = layui.layout;
  var Control = function() {};

  // 控制面板 展开和收缩 
  Control.prototype.expand = function() {
    $('.control .control-footer i').on('click', function() {
      var expand = $(this).data('expand');

      if (expand) {
        $('.control .tools').hide(500);
        $(this).html('&#xe61a;');
      } else {
        $('.control .tools').show(500);
        $(this).html('&#xe619;');
      }

      $(this).data('expand', !expand);
    });
  }

  // 控制面板 标签页切换
  Control.prototype.navTabs = function() {
    $('#control .nav-tabs li').on('click', function() {
      $(this).addClass('active');
      $($(this).siblings()).removeClass('active');
      $('#control .tab-content').children('.tab-pane').removeClass('active');
      $('#control_tabcontent_' + $(this).data('id')).addClass('active');
    });
  }

  // 控制面板 拖动初始化
  Control.prototype.draggable = function() {
    var me = this;
    $('.control').draggable({
      handle: '.control-header',
      containment: "window"
    });

    $("#control .lyrow").draggable({
      connectToSortable: ".layout-container",
      helper: "clone",
      handle: ".drag",
      start: function(e, t) {

      },
      drop: function(e, t) {

      },
      drag: function(e, t) {
        t.helper.width(400)
      },
      stop: function(e, t) {
        var layout = require('layout');
        layout.layout.draggable();
      }
    });

    $("#control .box").draggable({
      connectToSortable: ".column",
      helper: "clone",
      handle: ".drag",
      start: function(e, t) {

      },
      drag: function(e, t) {
        t.helper.width(400)
      },
      stop: function() {

      }
    });
  }

  // 按钮事件
  Control.prototype.buttons = function() {
    $('#clear').on('click', function() {
      $(".layout-container").empty();
    });
    $('#undo').on('click', function() {
      layer.msg("撤销功能未实现");
    });
    $('#redo').on('click', function() {
      layer.msg("重做功能未实现");
    });
    $('.tool-panel .width-set').on('click', function() {
      var val = $(this).parent().prev().find('input').val();
        unit = $('.tool-panel input[name=unit]:checked').val();

      if(val) {
        $('.header-container').css('width',  val + unit);
        $('.header-container:after').css('content', val + unit);
      }
    });
  }

  // 输入框事件
  Control.prototype.inputs = function() {
    $(".lyrow .preview input").bind("keyup", function() {
      var e = 0;
      var t = "";
      var n = $(this).val().split(" ", 12);
      $.each(n, function(n, r) {
        e = e + parseInt(r);
        t += '<div class="col-md-' + r + ' column"></div>'
      });
      if (e == 12) {
        $(this).parent().next().children().html(t);
        $(this).next().show()
      } else {
        $(this).next().hide()
      }
    });
  }

  exports('control', {
    init: function() {
      var control = new Control();

      control.expand();
      control.draggable();
      control.navTabs();
      control.buttons();
      control.inputs();
    }
  });
});