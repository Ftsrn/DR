$.tab = function (options) {
  // 需要传递4个内容
  // 标题对应的 选择器  titleSelector
  // 内容对应的 选择器  contentSelector
  // 标题的高亮的类样式 titleActiveClass
  // 内容的高亮的类样式 contentActiveClass

  // 参数的默认值
  var defaults = {
    titleSelector: '.wrapper > .tab > a',
    contentSelector: '.page > .main',
    titleActiveClass: 'active',
    contentActiveClass: 'selected'
  };

  // 判断options是否有值，如果有值把options的属性赋值给defaults
  // defaults.titleSelector = options.titleSelector;

  // for (var key in options) {
  //   defaults[key] = options[key];
  // }

  if (options) {
    $.extend(defaults, options);
  }

  // 1. 给所有li注册鼠标经过的事件
  $(defaults.titleSelector).click(function () {
    //    让当前标题高亮显示，其它标题移除高亮显示
    $(this)
      .addClass(defaults.titleActiveClass)
      .siblings()
      .removeClass(defaults.titleActiveClass);

    //    找到当前li的索引
    var index = $(this).index();
    //    根据索引找到详细内容的div，让它显示，其它div隐藏
    $(defaults.contentSelector)
      .eq(index)
      .addClass(defaults.contentActiveClass)
      .siblings()
      .removeClass(defaults.contentActiveClass);
  });
};