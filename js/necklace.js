// 广告中的选择框   banner_box
// 获取li，点击li后，i、p、下划线会隐藏
$('.banner_box ul li').click(function () {
  $(this)
    .animate({
      height: 55
    }, 500, function () {
      $('.banner_box ul span')
        .css('border-bottom', 'none');
      $('.banner_box ul li p')
        .hide();
      $('.banner_box ul li i')
        .hide();
    });
  $(this)
    .siblings()
    .animate({
      height: 55
    }, 500);
  $('.banner_select')
    .animate({
      bottom: 130
    }, 500);
  var index = $(this).index();
  $('.banner_select li')
    .eq(index)
    .show()
    .siblings()
    .hide();
});

// 给广告中的选项框每一个li加上点击事件banner_select
$('.banner_select li a').click(function () {
  //获取banner_select所点击li的内容，赋值给banner_box中对应的li的span
  var bs_val = $(this).text();
  var index = $(this).parent().index()
  $('.banner_box li')
    .eq(index)
    .children('p')
    .text(bs_val);
  // 选择框和选择项动画
  $('.banner_select')
    .animate({
      bottom: -65
    }, 500);
  $('.banner_box')
    .animate({

    }, 500, function () {
      $('.banner_box ul span')
        .css('border-bottom', '1px solid #666');
      $('.banner_box ul li p')
        .show();
      $('.banner_box ul li i')
        .show();
      $('.banner_box ul li')
        .css('height', 110)
        .css('bakcgroundColor', 'rgba(255, 255, 255, 0.5)');
    });
});



//选择栏内容
// 点击p之后，隐藏栏会显示
// 定义一个变量，判断隐藏盒子是否隐藏了
// var hid = true; 
$('.selector li > p').click(function () {
  $('.selector_box li').toggle();
  if ($('.arr_t').hasClass('active')) {
    $('.selector_box').hide();
    $('.arr_t').hide();
    $('.arr_b').show();
  }
  $(this)
    .children('.arr_t')
    .show()
    .addClass('active')
    .end()
    .children('.arr_b')
    .hide()
    .end()
    .siblings('.selector_box')
    .show();
  // 获取选中的内容，赋值给label
  // var p_val = $('.selector_box p input:checked');
  // $(this).children('label').text(p_val);
});


// 鼠标移除事件
$('.selector').mouseleave(function () {
  $('.selector_box').hide();
  $('.arr_t').hide();
  $('.arr_b').show();
});
$('.selector_box').mouseenter(function () {
  $(this).show();
});

//重置
$('.reset').click(function () {
  $(this).parent().siblings().find('p').children('label').text('所有');
});


//列表图片样式
// 鼠标进入li，span和p2隐藏，p1和i显示
$('.necklace_list li').hover(function () {
  $('.necklace_list li > .p1').show();
  $('.necklace_list li > i').show();
  $('.necklace_list li > .p2').hide();
  $('.necklace_list li > span').hide();
  $(this).siblings().find('.p1').hide().end().find('i').hide().end()
    .find('.p2').show().end().find('span').show();
}, function () {
  $('.necklace_list li > .p1').hide();
  $('.necklace_list li > i').hide();
  $('.necklace_list li > .p2').show();
  $('.necklace_list li > span').show();
});


// 礼物清单
// 点击礼物清单，弹出遮幕框，弹出提示框
$('.gift_menu a').click(function () {
  $('.popg').show();
  $('.popg_box').show();
});
$('.popg_box i').click(function () {
  $('.popg').hide();
  $('.popg_box').hide();
});
$('.popg_box a').click(function () {
  $('.popg').hide();
  $('.popg_box').hide();
});