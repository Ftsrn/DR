// 鼠标进入主体导航a时
// 所有主体导航详情隐藏
// 此a标签所对应的详情显示
$('.main_nav a').mouseenter(function () {
  $('.a1').css('display','none');
  $('.a1').eq($(this).parent().index()).css('display','block');
});
// 鼠标离开主体导航a时
// 所有主体导航详情隐藏
$('.main_nav a').mouseleave(function () {
  $('.a1').css('display','none');
});
// 鼠标进入主体导航详情时显示该详情页
$('.a1').mouseenter(function () {
  $(this).css('display','block');
});
// 鼠标离开主体导航详情时隐藏所有详情页
$('.a1').mouseleave(function () {
  $('.a1').css('display','none');
});
// 鼠标进入地区标题时
// 滑动图片移动到相对应位置
// 滑动图片以前的线变为粗线
// 隐藏所有地区详情
// 显示对应的地区详情
$('.diqu_titlt a').mouseenter(function () {
  $('#huadong_img').stop();
  $('#huadongxian').stop();
  $('.diqu').stop();
  // $('#huadong_img').css('margin-left',120+$(this).parent().index()*50+'px');
  $('#huadong_img').animate({
    marginLeft: 120+$(this).parent().index()*50+'px',
  },400);
  // $('#huadongxian').css('width',20+$(this).parent().index()*50+'px');
  $('#huadongxian').animate({
    width: 20+$(this).parent().index()*50+'px',
  },400);
  $('.diqu').css('display','none');
  // $('.diqu').eq($(this).parent().index()).animate({
  //   width: '300px',
  // },400);
  $('.diqu').eq($(this).parent().index()).show(400);
});


// 鼠标经过‘求婚钻戒’左边对应的详情中的li时
// 左边所有的图片隐藏
// 显示经过li所对应的图片
$('.main_nav_detailed2_left li').mouseenter(function () {
  $('.main_nav_detailed2_left img').css('display','none');
  $('.main_nav_detailed2_left img').eq($(this).index()).css('display','block');
});
// 鼠标经过‘求婚钻戒’右边对应的详情中的li时
// 右边所有的图片隐藏
// 显示经过li所对应的图片
$('.main_nav_detailed2_right li').mouseenter(function () {
  $('.main_nav_detailed2_right img').css('display','none');
  $('.main_nav_detailed2_right img').eq($(this).index()).css('display','block');
});



var main_nav_height = $('.main_nav').offset().top;
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  // 当滚动滚动条的时候。
  // 判断滚动出去的距离大于或等于主体导航到顶部距离
  if (scrollTop >= $('.main_nav').offset().top) {
    $('.main_nav').addClass('fixed_top').css('background', '#fff')
      .css('height', '65px').css('border-bottom','1px solid #000');
    $('.main_nav a').css('width', '150px');
    $('.main_nav img ').css('display', 'block');
    $('.a1').css('position', 'fixed').css('top', '55px').css('marginLeft', '-80px');
  }
  if (scrollTop < main_nav_height){
    $('.main_nav').removeClass('fixed_top').css('height', '55px').css('border-bottom', '0');
    $('.main_nav a').css('width', '165px');
    $('.main_nav img ').css('display', 'none');
    $('.a1').css('position', 'absolute').css('marginLeft', '0px').css('top', '231px');
  }
});


$('.main_nav img:nth-child(1)').click(function () {
  location.href = "index.html";
});
$('.main_nav img:nth-child(3)').click(function () {
  location.href = "login.html";
});



