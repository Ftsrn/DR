
//tab切换部分
$('.nav li').mouseover( function () {
    var index = $(this).index();
    $('.tab')
});
//身份证切换部分
$('.big .big_4 .card span').click(function () {
    var index = $(this).index();
    $(this)
     .addClass('col')
     .siblings()
     .removeClass('col')
    //  console.log($('.big .big_4 .card span'))
    //  console.log($(this))
    $('.big .big_4 .num>div')
     .eq(index)
     .addClass('active')
     .siblings()
     .removeClass('active')
    console.log($('.big .big_4 .num'))
});
//验证是否输入的为身份证号
// $('.sub').click(function () {
//     $('.active input').val()
//     var sum =     $('.active input').val()
//     console.dir(sum) 
// })
//鼠标放上去显示提示信息
$('.num>div').hover(function () {
    $('.mess').show();
},function () {
    $('.mess').hide();
});
$('.num>.active').change(function () {
    $('.mess').hide();
});
//鼠标放上去改变边框的颜色，取消默认的颜色
$('.sub').click(function () {
    $('.sub').addClass('click');
})
// 四个图片的轮播图部分
// 设置自动轮播利用动画效果
var timer;
var i = 0;
//页面加载出来显示的图片是第一张
$('.four ul>li').eq(0).show().siblings().hide()
 start();
 //鼠标移入小圆点的时候清除定时器，找到当前圆点的索引，改变当前图片
 $('.circle span').hover(function () {
     clearInterval(timer);
     i = $(this).index();
     change();
 },function () {
     //鼠标移除的时候重新启动定时器
     start();
 });
 //鼠标进入图片的时候图片停止移动
 $('.four ul>li').hover(function () {
    clearInterval(timer);
},function () {
    //鼠标移除的时候重新启动定时器
    start()
});
 //开始轮播的函数
 function start() {
     timer = setInterval(function () {
        i++;
        if (i == 4) {
            i = 0;
        }
        change()
     },1500);
 }
//  当前图片以及对应圆点变化的函数
function change() {
    // 当前图片淡入，其他图片淡出
    $('.four ul>li')
     .eq(i)
     .fadeIn(300)
     .siblings()
     .stop(true,true)
     .fadeOut(300);
    //  当前圆点添加类名，其他圆点删除类名
    $('.circle span')
     .eq(i)
     .addClass('jump')
     .siblings()
     .removeClass('jump')
}
//第二个四个图片的轮播图部分
var timer_2;
var a = 0;
$('.buy_2 ul>li').eq(0).show().siblings().hide()
start_2();
//鼠标进入小圆点和图片的时候停止轮播，出去的时候继续轮播
$('.two span').hover(function () {
    clearInterval(timer_2);
    a = $(this).index();
    change_2();
}),function() {
    start_2();
};
$('.buy_2 ul>li').hover(function () {
    clearInterval(timer_2);
},function() {
    start_2();
});
//开始轮播的函数
function start_2() {
    timer_2 = setInterval(function () {
        a++;
        if (a == 4) {
            a = 0;
        }
        change_2()
     },1500);
};
//  当前图片以及对应圆点变化的函数
function change_2() {
    // 当前图片淡入，其他图片淡出
    $('.buy_2 ul>li')
     .eq(a)
     .fadeIn(300)
     .siblings()
     .stop(true,true)
     .fadeOut(300);
    //  当前圆点添加类名，其他圆点删除类名
    $('.two span')
     .eq(a)
     .addClass('jump_2')
     .siblings()
     .removeClass('jump_2')
}
