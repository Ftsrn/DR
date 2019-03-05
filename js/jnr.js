// 查找栏
// 当鼠标进入，就显示隐藏栏
$('.search_menu > ul > li').hover(function () {
    $(this).children('.hide_menu').show();
    $(this).siblings('.hide_menu').hide();
  },
  function () {
    $(this).children('.hide_menu').hide();
    $(this).siblings('.hide_menu').show();
  });