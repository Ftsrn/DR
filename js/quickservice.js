var main_nav_height = $('.main_nav').offset().top;
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  if (scrollTop >= $('.main_nav').offset().top) {
    $('.quickservice').css('display', 'block');
  }
  if (scrollTop < main_nav_height) {
    $('.quickservice').css('display', 'none');
  }
});
// 点击回到顶部按钮时动画效果回到顶部
$('.quickservice ul li:last-child a').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 400)
});
// 鼠标经过a时动画效果实现显示详情
$('.quickservice li a').mouseenter(function () {
  if ($(this).parent().index() - 1 == 4) {
    $('.quickservice li p').eq($(this).parent().index() - 1).css('display', 'block')
      .animate({
        right: 270
      }, 400)
  } else if ($(this).parent().index() - 1 == 5) {
    $('.quickservice li p').eq($(this).parent().index() - 1).css('display', 'block')
      .animate({
        right: 50
      }, 400)
  } else if ($(this).parent().index() == 0) {

  } else {
    $('.quickservice li p').eq($(this).parent().index() - 1).css('display', 'block')
      .animate({
        right: 50
      }, 400)
  }
});
$('.quickservice li a').mouseleave(function () {
  $('.quickservice li p').css('display', 'none').css('right', '0');
});


$('li#kefu').click(function () {
  $('.kefu').css('display', 'block');
});
$('#guanbi').click(function () {
  $('.kefu').css('display', 'none');
});