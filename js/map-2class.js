// 【功能1：鼠标进入到左侧盒子时  显示小黄和右侧盒子】
$('.litimg').mouseenter(function () {
    $('.tool').show();
    $('.rightBox').show();
});
// 【功能2：鼠标离开左侧盒子时  隐藏小黄和右侧盒子】
$('.litimg').mouseleave(function () {
    $('.tool').hide();
    $('.rightBox').hide();
});
// 【功能3：鼠标在左侧盒子上移动时，小黄盒子和右侧图片按照比例跟着走】
$('.litimg').mousemove(function (e) {
    var x = e.pageX - $('.fdj').offset().left - $('.tool').innerWidth() / 2;
    var y = e.pageY - $('.fdj').offset().top - $('.tool').innerHeight() / 2;
    if (x < 0) {
        x = 0;
    }
    if (y < 0) {
        y = 0;
    }
    if (x > this.offsetWidth - $('.tool').innerWidth() - 2) {
        x = this.offsetWidth - $('.tool').innerWidth() - 2;
    }
    if (y > this.offsetHeight - $('.tool').innerHeight() - 2) {
        y = this.offsetHeight - $('.tool').innerHeight() - 2
    }
    $('.tool').css({
        'left': x,
        'top': y
    });
    $('#_bImg').css({
        'left': -1.6 * x,
        'top': -1.6 * y
    })
});
//【功能4：鼠标进过列表小图时改变左侧盒子图片和右侧盒子图片】
$('#leftul li img').mouseenter(function () {
    var s = $(this).attr('src');
    $('.litimg img').attr('src', s);
    $('#_bImg').attr('src', s);
});
//【功能5：鼠标进过哪个li，哪个li添加红色边框，其他的变为白色边框】
$('#leftul li').mouseenter(function () {
    $(this)
        .css('border-color', '#FFA6A6')
        .siblings()
        .css('border-color', '#fff');
});

//选择款式改变款式的样式
$('.m-score li').click(function () {
    $(this)
        .addClass('pon')
        .siblings()
        .removeClass('pon');
    var txt = $(this).text();
    $('.fense').text(txt);
    var fen = $(this).children().eq(0).text();
    var se = $(this).children().eq(1).text();
    $('.detail>li:eq(0)>span').text(fen);
    $('.detail>li:eq(1)>span').text(se);

});
//选择材质改变样式
$('.t-two').click(function () {
    $(this)
        .addClass('pon')
        .siblings()
        .removeClass('pon');
});
//点击真爱套装部分改变样式切换图片路径
$('.zhenai span').click(function () {
    $(this)
        .addClass('jiayang')
        .siblings()
        .removeClass('jiayang');
    if ($(this).index() == 0) {
        $('.taozhuang img').attr('src', '../../images/2018-10-14_164547.jpg')
    }else{
        $('.taozhuang img').attr('src', '../../images/2018-10-14_164713.jpg')
    }
});

//点击评论部分改变样式切换图片路径
$('.pinglun span').click(function () {
    $(this)
        .addClass('jiayang')
        .siblings()
        .removeClass('jiayang');
    if ($(this).index() == 0) {
        $('.leiji img').attr('src', '../../images/2018-10-14_181133.jpg')
    }else if ($(this).index() == 1){
        $('.leiji img').attr('src', '../../images/2018-10-14_174636.jpg')
    }else if ($(this).index() == 2){
        $('.leiji img').attr('src', '../../images/1509091966.jpg')
    }else {
        $('.leiji img').attr('src', '../../images/1484119219.jpg')
    }
});