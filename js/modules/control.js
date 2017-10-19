/**
 * 控制面板模块
 */
define(['jquery', 'layer', 'jqueryUI'], function($, layer) {　　　　
  var Control = function() {};

  // 控制面板 展开和收缩 
  Control.prototype.expand = function() {
    $('#control .panel-heading span.glyphicon').on('click', function() {
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
    $('#control').draggable();

    $("#control .lyrow").draggable({
      connectToSortable: ".layout-container",
      helper: "clone",
      handle: ".drag",
      start: function(e, t) {
        // if (!startdrag) stopsave++;
        // startdrag = 1;
      },
      drop: function(event, ui) {
        console.info(ui.draggable.html())
        // $(this).find("p").remove();

        $(ui.draggable.html()).find('.view').appendTo(this);
      },
      drag: function(e, t) {
        t.helper.width(400)
      },
      stop: function(e, t) {
        // console.info(t.helper.find('.view').html());
        // $(t.helper.find('.view').appendTo(this))
        // t.helper.find('.view').appendTo(this)
        // console.info(t)
        $(".layout-container .column").sortable({
          opacity: .35,
          connectWith: ".column",
          start: function(e, t) {
            // if (!startdrag) stopsave++;
            // startdrag = 1;
          },
          stop: function(e, t) {
            // if (stopsave > 0) stopsave--;
            // startdrag = 0;
          }
        });
        // if (stopsave > 0) stopsave--;
        // startdrag = 0;
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
  }

  // 输入框事件
  Control.prototype.inputs = function() {
    $(".lyrow .preview input").bind("keyup", function() {
      var e = 0;
      var t = "";
      var n = $(this).val().split(" ", 12);
      $.each(n, function(n, r) {
        e = e + parseInt(r);
        t += '<div class="col-md-' + r + ' column"> '+r+' </div>'
      });
      if (e == 12) {
        $(this).parent().next().children().html(t);
        $(this).next().show()
      } else {
        $(this).next().hide()
      }
    });
  }

  return {　　
    // 初始化　　　　
    init: function() {
      var control = new Control();

      control.expand();
      control.draggable();
      control.navTabs();
      control.buttons();
      control.inputs();
    }
  };
});