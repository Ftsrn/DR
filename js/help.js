$('.list_left h5').click(function () {
	var flag = $(this).siblings().css('display');
	if (flag === 'block') {
		$(this).addClass('active');
		$(this).siblings().hide();
	} else {
		$(this).removeClass('active');
		$(this).siblings().show();
	}
});