var log = console.log.bind(console);

layui.config({
  debug: true,
  base: 'js/modules/' //你存放新模块的目录，注意，不是layui的模块目录
}).extend({ //设定组件别名
  jqueryui: '../lib/jquery-ui/jquery-ui.min' //如果test.js是在根目录，也可以不用设定别名
}).use([
  'element',
  'form',
  'layout',
  'control'
], function() {
  var layout = layui.layout,
    control = layui.control,
    form =  layui.form;

  layout.init();
  control.init();
}); //加载入口