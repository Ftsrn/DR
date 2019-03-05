// tab切换
$.tab();

$('.banner .page .main li .word').mouseover(function() {
    $(this).children().css('color','#aa9084');
});

$('.banner .page .main li .word').mouseout(function() {
    $('.banner .page .main li .word h3').css('color','#000');
    $('.banner .page .main li .word .line').css('color','#aaa');
    $('.banner .page .main li .word p').css('color','#aaa');
});

$('.banner .tab a').mouseover(function() {
    $(this).css('color','#c57d5c').siblings().css('color','#666');
});

$('.banner .tab a').click(function() {
    // alert('hhh');
    $(this).addClass('active');
});
