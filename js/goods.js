// choice 挑选心动款式部分

$('.choiceBtns .choiceBtn').click(function () {
  $(this)
    .css('background', '#8a766b')
    .siblings()
    .css('background', ' RGB(170,142,131)')
  var index = $(this).index();
  $('.hd_box').eq(index).addClass('active').siblings().removeClass('active');
  if (index == 0) {
    $('.hand li').eq(0).show();
    $('.hand li').eq(1).hide();
    $('.wearRing')
    .css('left','29%'); 
  } else if (index == 1) {
    $('.hand li').eq(1).show();
    $('.hand li').eq(0).hide();
    $('.wearRing')
    .css('left','30%'); 
    
  } 
});


$('.circle li a').click(function () {
  $(this)
    .css({
      'background': 'white',
      'width': 10,
      'height': 10,
      'margin-top': 0
    })
    .parent()
    .siblings()
    .children('a')
    .css({
      'background': '#ccc',
      'width': 6,
      'height': 6,
      'margin-top': 2
    })
  var index = $(this).parent().index();
  $('.typeCenter')
    .eq(index)
    .addClass('selected')
    .siblings()
    .removeClass('selected');
  return false;
})
// 戴戒指
$('.typeCenter li a').click(function(){
  $(this)
  .parent()
  .css('border','1px solid black')
  .siblings()
  .css('border','1px solid white');
  $('.wearRing img')
  .attr('src',$(this).attr('href'));

  $('#rde').text($(this).attr('title'));
  return false;


})



//carousel
var classArr = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];
var $list = $('.slide > ul > li');
// 下一张
$('.rightArrow').click(function() {
	var last = classArr.pop();
	classArr.unshift(last);

	for (var i = 0; i < $list.length; i++) {
		// dom的方式
		// $list[i].className = classArr[i];
		$list.eq(i).removeClass().addClass(classArr[i]);
	}
});

// 上一张
$('.leftArrow').click(function() {
	// 取出数组第一项
	var first = classArr.shift();
	// 放到数组最后
	classArr.push(first);

	for (var i = 0; i < $list.length; i++) {
		// dom的方式
		// $list[i].className = classArr[i];

		$list.eq(i).removeClass().addClass(classArr[i]);
	}
});









