/**
 * 控制面板模块
 */
define(['jquery', 'jqueryUI'], function($) {　　　　
  var Control = function() {};

  // 控制面板 展开和收缩 
  Control.prototype.expand = function() {
    $("#control .panel-heading span.glyphicon").on('click', function() {
      var expand = $(this).data('expand');

      if (expand) {
        $(this).removeClass('glyphicon-minus');
        $(this).addClass('glyphicon-plus');
        $('#control .panel-footer').hide(500);
        $('#control .panel-body').hide(500);
      } else {
        $(this).removeClass('glyphicon-plus');
        $(this).addClass('glyphicon-minus');
        $('#control .panel-body').show(500);
        $('#control .panel-footer').show(500);
      }

      $(this).data('expand', !expand);
    });
  }

  // 控制面板 拖动初始化
  Control.prototype.draggable = function() {
    $('#control').draggable();
    $(".selector").draggable({
      helper: "clone"
    });
  }

  return {　　
    // 初始化　　　　
    init: function() {
      var control = new Control();
      control.expand();
      control.draggable();
    }
  };　　
});