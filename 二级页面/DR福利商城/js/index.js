$(window).scroll(function () {
	var scrollTop = $(window).scrollTop();
	if (scrollTop > 0) {
		$('#fixed').addClass('fixed_nav');
	}else {
		$('#fixed').removeClass('fixed_nav');
	}
}); 


setTimeout(function () {
	$('#danchu').fadeIn(2000);
}, 200);



