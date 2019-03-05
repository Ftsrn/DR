$('.footer_middle_bottom ul li:nth-child(1)').mouseenter(function () {
  $('.footer_middle_bottom ul li:nth-child(3)').css('display', 'block');
});
$('.footer_middle_bottom ul li:nth-child(1)').mouseleave(function () {
  $('.footer_middle_bottom ul li:nth-child(3)').css('display', 'none');
});