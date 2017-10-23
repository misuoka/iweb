/**
 * 可视化布局模块
 */
layui.define(['jqueryui'], function(exports) {
  var $ = layui.$;　　　
  var Layout = function() {}; // 布局区域

  // 主容器初始化
  Layout.prototype.sortable = function() {
    $(".layout-container").sortable({
      connectWith: ".column",
      opacity: .35,
      handle: ".drag",
      start: function(e, t) {

      },
      stop: function(e, t) {
        $('.layout-container .ui-draggable').removeAttr('style');
        $('.layout-container .ui-draggable .preview').remove();
      }
    });
  }

  Layout.prototype.draggable = function() {
    $(".layout-container .lyrow").draggable({
      connectToSortable: ".layout-container",
      handle: ".drag",
      drag: function(e, t) {
        t.helper.width(400)
      }
    });
    $(".layout-container .column").sortable({
      opacity: .35,
      connectWith: ".column",
      handle: ".drag",
      drag: function(e, t) {
        t.helper.width(400)
      },
      stop: function(e, t) {
        $('.layout-container .ui-draggable').removeAttr('style');
        $('.layout-container .ui-draggable .preview').remove();
      }
    });
  }

  Layout.prototype.removeElement = function() {
    $(".layout-container").delegate(".remove", "click", function(e) {
      e.preventDefault();
      $(this).parent().parent().remove();
    })
  }

  var layout = new Layout();
  exports('layout', {
    init: function() {
      layout.sortable();
      layout.removeElement();
    },
    layout: layout
  });
});