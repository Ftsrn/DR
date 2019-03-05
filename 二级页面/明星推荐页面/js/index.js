//第一个轮播图
var timer;
var arr = ['slide1','slide2','slide3','slide4','slide5','slide6','slide7','slide8'];
timer = setInterval(function () {
    var last = arr.pop();
    arr.unshift(last);
    var list = $('.slideshow ul li');
    //给每一个li设置类样式
    for (var i = 0 ;i < list.length; i++) {
        var li = list[i];
        li.className = arr[i];
    }
},2000);
//第二个轮播图
// 点击左边箭头切换
//获取当前li的下标
// var index = 0
// var maxIndex = $('.fourPhoto li').length-1
// $('.arrRight').click(function () {
//     $('.fourPhoto ul li').eq(index).show().siblings().hide();
//     if (index < maxIndex) {
//         index ++;
//     } else {
//         index = 0
//     }
//     $('.fourPhoto ul li').eq(index).hide();
// });
// $('.arrLeft').click(function () {
//     $('.fourPhoto ul li').eq(index).show().siblings().hide();
//     if (index > 0) {
//         index --;
//     } else {
//         index = maxIndex
//     }
//     $('.fourPhoto ul li').eq(index).hide();
// });
// $('.fourPhoto ul li').animate()
var step = 0;
$('.arrRight').click(function () {
    if (step == -4000 ) {
        step = 0;
        $('.fourPhoto ul')
         .css('left',step);
    }
    step -= 1000;
  $('.fourPhoto ul')
   .stop()
   .animate({
     left:step
  },500);
});
$('.arrLeft').click(function () {
    if (step == 0) {
        step = -4000
    }
    step += 1000;
    $('.fourPhoto ul')
     .stop()
     .animate({
       left:step
    },500);
      
  });