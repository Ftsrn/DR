$('a.yincang').click(function () {
  $('.xianshi').css('display', 'block');
  $('.yincang').css('display', 'none');
  $('.login p:nth-child(3) input').css('width', '214px').css('marginTop', '12px');
  $('.yuyin').css('display', 'block').css('paddingTop', '20px');
  $('.login p:nth-child(5)').css('marginTop', '32px').text('');
});
$('.yuyin').click(function () {
  location.reload();
});
