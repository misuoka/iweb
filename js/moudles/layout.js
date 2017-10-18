/**
 * 可视化布局模块
 */
define(['jquery', 'jqueryUI'], function($) {　　　　
  var Layout = function() {}; // 布局区域

  // 布局区域 接收拖动初始化
  Layout.prototype.droppable = function() {
    $("#droppable").droppable({
      accept: ".selector",
      drop: function(event, ui) {
        console.info(ui.draggable.html())
          // $(this).find("p").remove();
        $(ui.draggable.html()).appendTo(this);
      }
    });
  }

  return {　　　　　　
    init: function() {
      var layout = new Layout();
      layout.droppable();
    }
  };　　
});