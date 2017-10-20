/**
 * 可视化布局模块
 */
define(['jquery', 'jqueryUI'], function($) {　　　　
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

  Layout.prototype.removeElement = function() {
    $(".layout-container").delegate(".remove", "click", function(e) {
      e.preventDefault();
      $(this).parent().parent().remove();
    })
  }

  return {　　　　　　
    init: function() {
      var layout = new Layout();

      layout.sortable();
      layout.removeElement();
    }
  };　　
});