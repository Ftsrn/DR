//鼠标经过显示左右箭头
$('#slideshow').hover(function () {
    $('#arrows').show();
    //停止自动轮播
    $('.screen').jcarouselAutoscroll('stop');
}, function () {
    $('#arrows').hide();
    //开始轮播
    $('.screen').jcarouselAutoscroll('start');
});
//实现轮播图的功能
$('.screen').jcarousel({
        wrap: 'circular'
    })
    .jcarouselAutoscroll({
        interval: 2000,
        target: '+=1',
        autostart: true
    });
//点击上一张
$('#left')
    .jcarouselControl({
        target: '-=1'
    });
// 下一张
$('#right')
    .jcarouselControl({
        target: '+=1'
    });
// 页码
$('.page')
    // 当显示当前页码的时候，设置类样式
    .on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
    })
    // 当不是当前页码的时候，移除类样式
    .on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeClass('active');
    })
    .jcarouselPagination();


// table切换部分
// 当鼠标进入，就显示隐藏栏
$('.search_menu > ul > li').hover(function () {
        $(this).children('.hide_menu').show();
        $(this).siblings('.hide_menu').hide();
    },
    function () {
        $(this).children('.hide_menu').hide();
        $(this).siblings('.hide_menu').show();
    });