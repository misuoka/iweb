/**
 * 可视化布局模块
 */
define(['jquery', 'jqueryUI'], function($) {　　　　
  var Layout = function() {}; // 布局区域

  // 布局区域 接收拖动初始化
  // Layout.prototype.droppable = function() {
  //   $(".layout-container").droppable({
  //     accept: ".selector",
  //     drop: function(event, ui) {
  //       // console.info(ui.draggable.html())
  //       // $(this).find("p").remove();

  //       $(ui.draggable.html()).find('.view').appendTo(this);
  //     }
  //   });
  // }

  Layout.prototype.sortable = function() {
    $(".layout-container, .layout-container .column").sortable({
      connectWith: ".column",
      opacity: .35,
      handle: ".drag",
      start: function(e, t) {
        console.log(t)
        // if (!startdrag) stopsave++;
        // startdrag = 1;
      },
      stop: function(e, t) {
        // console.log(e, t)
        // if (stopsave > 0) stopsave--;
        // startdrag = 0;
      }
    });
  }

  return {　　　　　　
    init: function() {
      var layout = new Layout();

      // layout.droppable();
      layout.sortable();
    }
  };　　
});