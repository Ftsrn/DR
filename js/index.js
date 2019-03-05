//轮播动画

//鼠标进入轮播区域箭头显示
$('.lunBo_qu').hover(function () {
	$('.lunBo_qu>a').show();
}, function () {
	$('.lunBo_qu>a').hide();
});
var index = 0;
//给右箭头注册事件
$('#right').click(function () {
	index ++;
	if (index > $('#lunBoTu a').length-1) {
		index = 0;
	}
	$('#lunBoTu a')
		.eq(index)
		.fadeIn(1000)
		.siblings()
		.fadeOut(1000);

	$('#xiaoDian li:even')
		.eq(index)
		.children('span')
		.show()
		.end()
		.siblings()
		.children('span')
		.hide();
	return false;	
});
//给左箭头注册事件
$('#left').click(function () {
	index --;
	if (index < 0) {
		index = $('#lunBoTu a').length-1;
	}
	$('#lunBoTu a')
		.eq(index)
		.fadeIn(1000)
		.siblings()
		.fadeOut(1000);

	$('#xiaoDian li:even')
		.eq(index)
		.children('span')
		.show()
		.end()
		.siblings()
		.children('span')
		.hide();
	return false;
});
//给小点注册事件
var flag;
$('#xiaoDian li:even').click(function() {
	$(this)
		.children('span')
		.show()
		.end()
		.siblings()
		.children('span')
		.hide();
	index = $(this).index()/2;
	$('#lunBoTu a')
		.eq(index)
		.fadeIn(1000)
		.siblings()
		.fadeOut(1000);
	clearInterval(flag);
  flag = setInterval(function () {
    $('#right').click();
  }, 2200);

});
//添加定时器自动轮播
flag = setInterval(function () {
	$('#right').click();
}, 2200);



//钻戒展示放大效果

$('.showing img').hover(function () {
	$(this).addClass('active');

}, function () {
	$(this).removeClass('active');
});
// 视屏
$('#play').click(function () {
	$('#show').fadeIn(400);
});
$('#close').click(function () {
	$('#show').fadeOut(400);
});

var play = document.querySelector('#play');
var close = document.querySelector('#close');
var video = document.querySelector('video');

play.onclick = function () {
	video.currentTime = 0;
	video.play();
};
close.onclick = function () {
	video.pause();
};


