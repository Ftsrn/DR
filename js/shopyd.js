// 图片切换
var $index = 0;
$('.tab_img span').click(cut);
function cut() {
	$('.tab_img span').eq($index).removeClass('active');
	$('.big_img .bimg').eq($index).fadeOut();
	$index ? $index = 0 : $index = 1;
	$('.tab_img span').eq($index).addClass('active');
	$('.big_img .bimg').eq($index).fadeIn();
}
setInterval(cut, 2500);

// 透明度
$('.store_list li').mouseenter(function () {
	$(this)
		.children('.list_top')
		.children('a')
		.animate({
			opacity: 0.5
		}, 500)
		.animate({
			opacity: 0
		}, 500);
}).mouseleave(function () {
	$(this)
		.children('.list_top')
		.children('a')
		.stop(false, true)
		.stop(false, true);
});

// 店铺突出显示
$('.city a').click(function () {
	var $index = $(this).index() - 1;
	$('.store_list .site')
		.eq($index)
		.fadeIn()
		.siblings()
		.fadeOut();
	if ($index == 5) {
		$('.store_list .site').fadeIn();
	}
	return false;
});